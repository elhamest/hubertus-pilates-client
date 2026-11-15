<?php
// Contact form endpoint for hubertuspilates.com and hubertuspilates.ir.
// It sends the form to the support email over SMTP, logged in as the
// no-reply@hubertuspilates.ir mailbox (PHP mail() does not leave this host).
// A hidden copy also stays in the no-reply Inbox on the host.
// contact-config.php holds the support email and the mailbox password. The
// deploy job writes that file from GitHub secrets. It is not in the repo.

$allowedOrigins = [
    'https://hubertuspilates.com',
    'https://www.hubertuspilates.com',
    'https://hubertuspilates.ir',
    'https://www.hubertuspilates.ir',
];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowedOrigins, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
}
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Methods: POST');
    exit;
}

// $info is a short note for checking problems (how the mail was sent).
function answer($code, $ok, $info = null)
{
    http_response_code($code);
    echo json_encode($info === null ? ['ok' => $ok] : ['ok' => $ok, 'info' => $info]);
    exit;
}

// Which way the form sends email: "smtp" (the no-reply mailbox) or "mail"
// (PHP mail(), which does not deliver on this host). Shown in the answers,
// so a simple browser visit shows if the SMTP password reached the server.
function mailer_name($config)
{
    return is_array($config) && !empty($config['smtp_pass']) ? 'smtp' : 'mail';
}

// Always read the newest config file, not an old cached copy.
if (function_exists('opcache_invalidate')) {
    @opcache_invalidate(__DIR__ . '/contact-config.php', true);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    answer(405, false, mailer_name(@include __DIR__ . '/contact-config.php'));
}

// Honeypot: people do not see this field, bots fill it. Say "ok" and do nothing.
if (!empty($_POST['botcheck'])) {
    answer(200, true);
}

// Remove new lines from one-line fields, so nobody can add mail headers.
$name = trim(str_replace(["\r", "\n"], ' ', $_POST['name'] ?? ''));
$email = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');

if (
    $name === '' || mb_strlen($name) > 80 ||
    !filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 254 ||
    $message === '' || mb_strlen($message) > 5000
) {
    answer(400, false);
}

$config = @include __DIR__ . '/contact-config.php';
if (is_string($config)) {
    $config = ['to' => $config]; // Old config: only the address.
}
if (!is_array($config)) {
    $config = [];
}
$to = $config['to'] ?? '';
if (!filter_var($to, FILTER_VALIDATE_EMAIL)) {
    answer(500, false);
}

$from = $config['smtp_user'] ?? 'no-reply@hubertuspilates.ir';
$subject = '=?UTF-8?B?' . base64_encode("پیام جدید از سایت هوبرتوس: $name") . '?=';
$body = "نام: $name\nایمیل: $email\n\nپیام:\n$message\n";
$headers = [
    'From: Hubertus Pilates <' . $from . '>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
];

if (!empty($config['smtp_pass'])) {
    $via = 'smtp';
    $sent = smtp_send(
        $config['smtp_host'] ?? 'localhost',
        (int)($config['smtp_port'] ?? 465),
        $from,
        $config['smtp_pass'],
        $to,
        $subject,
        $headers,
        $body
    );
} else {
    $via = 'mail';
    $sent = mail($to, $subject, chunk_split(base64_encode($body)), implode("\r\n", $headers), '-f' . $from);
}
// For SMTP, $sent is the server answer (it has the mail queue id).
answer($sent ? 200 : 500, (bool) $sent, $via . ($sent === true || !$sent ? '' : ': ' . $sent));

// Send one email over SMTP with SSL and AUTH LOGIN. Returns the server answer on success, false on failure.
// On failure it writes the reason to the PHP error log.
function smtp_send($host, $port, $user, $pass, $to, $subject, $headers, $body)
{
    // The server talks to itself, so its certificate name does not match "localhost".
    $context = stream_context_create(['ssl' => [
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true,
    ]]);
    $fp = @stream_socket_client("ssl://$host:$port", $errno, $errstr, 15, STREAM_CLIENT_CONNECT, $context);
    if (!$fp) {
        error_log("contact.php: SMTP connect to $host:$port failed: $errstr ($errno)");
        return false;
    }
    stream_set_timeout($fp, 15);

    $steps = [
        [null, 220],
        ['EHLO hubertuspilates.ir', 250],
        ['AUTH LOGIN', 334],
        [base64_encode($user), 334],
        [base64_encode($pass), 235],
        ["MAIL FROM:<$user>", 250],
        ["RCPT TO:<$to>", 250],
    ];
    // Hidden copy (BCC) to the sending mailbox, so the message stays on the host
    // when Gmail is not reachable. Only an extra RCPT, no Bcc header.
    if (strtolower($to) !== strtolower($user)) {
        $steps[] = ["RCPT TO:<$user>", 250];
    }
    $steps[] = ['DATA', 354];
    foreach ($steps as $i => [$command, $expected]) {
        if ($command !== null) {
            fwrite($fp, $command . "\r\n");
        }
        $reply = smtp_reply($fp);
        if ((int)substr($reply, 0, 3) !== $expected) {
            // Do not log the password step.
            $what = $i === 4 ? 'password' : ($command ?? 'greeting');
            error_log("contact.php: SMTP step '$what' failed: " . trim($reply));
            fclose($fp);
            return false;
        }
    }

    $message = implode("\r\n", array_merge([
        'Date: ' . date('r'),
        'To: ' . $to,
        'Subject: ' . $subject,
        'Message-ID: <' . bin2hex(random_bytes(12)) . '@hubertuspilates.ir>',
    ], $headers)) . "\r\n\r\n" . chunk_split(base64_encode($body));
    // Base64 lines never start with ".", so no dot-stuffing is needed.
    fwrite($fp, $message . ".\r\n");
    $reply = smtp_reply($fp);
    fwrite($fp, "QUIT\r\n");
    fclose($fp);
    if ((int)substr($reply, 0, 3) !== 250) {
        error_log('contact.php: SMTP message not accepted: ' . trim($reply));
        return false;
    }
    return trim($reply);
}

// Read one SMTP reply. A reply can have many lines; the last one has a space after the code.
function smtp_reply($fp)
{
    $reply = '';
    while (($line = fgets($fp, 515)) !== false) {
        $reply .= $line;
        if (strlen($line) < 4 || $line[3] === ' ') {
            break;
        }
    }
    return $reply;
}
