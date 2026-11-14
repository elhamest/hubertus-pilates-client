<?php
// Contact form endpoint for hubertuspilates.com and hubertuspilates.ir.
// It sends the form to the support email by PHP mail().
// The support email is in contact-config.php. The deploy job writes that
// file from the SUPPORT_EMAIL GitHub secret. It is not in the repo.

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

function answer($code, $ok)
{
    http_response_code($code);
    echo json_encode(['ok' => $ok]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    answer(405, false);
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

$to = @include __DIR__ . '/contact-config.php';
if (!is_string($to) || !filter_var($to, FILTER_VALIDATE_EMAIL)) {
    answer(500, false);
}

$from = 'no-reply@hubertuspilates.ir';
$subject = '=?UTF-8?B?' . base64_encode("پیام جدید از سایت هوبرتوس: $name") . '?=';
$body = "نام: $name\nایمیل: $email\n\nپیام:\n$message\n";
$headers = implode("\r\n", [
    'From: Hubertus Pilates <' . $from . '>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
]);

$sent = mail($to, $subject, $body, $headers, '-f' . $from);
answer($sent ? 200 : 500, $sent);
