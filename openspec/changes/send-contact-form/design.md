# Design: send the contact form from the site

## Flow

1. The visitor fills name, email and message and presses "ارسال پیام".
2. The browser sends a `POST` with `FormData` to `https://hubertuspilates.ir/api/contact.php`. `FormData` is a simple CORS request, so there is no preflight.
3. The PHP script checks the data and calls `mail()`.
4. It answers `{"ok": true}` (200) or `{"ok": false}` (400/405/500). The form shows the matching message.

## Email

- To: the address in `api/contact-config.php` (`<?php return 'x@y.com';`). The file prints nothing if someone opens it in a browser.
- From: `no-reply@hubertuspilates.ir` (also the envelope sender with `-f`).
- Reply-To: the visitor's email, so "Reply" in Gmail answers the visitor.
- Copy on the host: a hidden copy (an extra SMTP `RCPT TO`, no `Bcc` header) goes to the `no-reply@hubertuspilates.ir` Inbox, so messages can be read in Roundcube when Gmail is not reachable.
- Body: name, email and message, plain UTF-8 text.

## Checks

- CORS: only `https://hubertuspilates.com`, `https://hubertuspilates.ir` and their `www.` hosts.
- Honeypot: the hidden `botcheck` checkbox. If it is ticked, answer ok and send nothing.
- Name 1-80 chars with no new lines, valid email (max 254), message 1-5000 chars. `FILTER_VALIDATE_EMAIL` blocks header injection in Reply-To.

## Deliverability

Add an SPF record for `hubertuspilates.ir` in DirectAdmin (DNS) that allows the host's mail server, or mails may go to Spam.
