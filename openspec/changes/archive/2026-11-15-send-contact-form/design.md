# Design: send the contact form from the site

## Flow

1. The visitor fills name, email and message and presses "ارسال پیام".
2. The browser sends a `POST` with `FormData` to `https://hubertuspilates.ir/api/contact.php`. `FormData` is a simple CORS request, so there is no preflight.
3. The PHP script checks the data and sends the email over SMTP (`ssl://localhost:465`, AUTH LOGIN as `no-reply@hubertuspilates.ir`).
4. It answers `{"ok": true}` (200) or `{"ok": false}` (400/405/500), plus an `info` field for checking problems: `"smtp"` or `"mail"` on a GET (shows if the SMTP password reached the server), and the mail server answer (`"smtp: 250 OK id=..."`) after a send. The form shows the matching message.

## Email

- To: `to` in `api/contact-config.php`, written at deploy time from the `SUPPORT_EMAIL` and `SMTP_PASSWORD` secrets (`to`, `smtp_user`, `smtp_pass`). The file prints nothing if someone opens it in a browser.
- From: `no-reply@hubertuspilates.ir` (also the SMTP envelope sender). If `smtp_pass` is empty, the script falls back to PHP `mail()`, which does not deliver on this host.
- Reply-To: the visitor's email, so "Reply" in Gmail answers the visitor.
- Copy on the host: a hidden copy (an extra SMTP `RCPT TO`, no `Bcc` header) goes to the `no-reply@hubertuspilates.ir` Inbox, so messages can be read in Roundcube when Gmail is not reachable.
- Body: name, email and message, plain UTF-8 text.

## Checks

- CORS: only `https://hubertuspilates.com`, `https://hubertuspilates.ir` and their `www.` hosts.
- Honeypot: the hidden `botcheck` checkbox. If it is ticked, answer ok and send nothing.
- Name 1-80 chars with no new lines, valid email (max 254), message 1-5000 chars. `FILTER_VALIDATE_EMAIL` blocks header injection in Reply-To.

## Deliverability

SPF, DKIM and DMARC for `hubertuspilates.ir` are set in the ParsPack DNS. Gmail may still hold back a test message whose Reply-To is the same Gmail address as the receiver, so test with another visitor email.

## Errors

SMTP errors go to the PHP error log as `contact.php: SMTP ...` (the password is never logged).
