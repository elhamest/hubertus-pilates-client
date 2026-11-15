# Tasks

- [x] Add `public/api/contact.php`.
- [x] Post the popup form to the PHP script and show Persian success/error messages.
- [x] Write `out/api/contact-config.php` from `SUPPORT_EMAIL` in `deploy-ir.yml`.
- [x] Test the PHP script locally (send, bad email, honeypot, CORS).
- [x] Add the `SUPPORT_EMAIL` secret in GitHub.
- [x] Send by SMTP as `no-reply@hubertuspilates.ir` (PHP `mail()` does not deliver here); add the `SMTP_PASSWORD` secret.
- [x] Keep a hidden copy in the `no-reply` Inbox on the host.
- [x] After deploy, send a test message from `.com` and `.ir`.
- [x] SPF, DKIM and DMARC for `hubertuspilates.ir` (already set in ParsPack DNS).
