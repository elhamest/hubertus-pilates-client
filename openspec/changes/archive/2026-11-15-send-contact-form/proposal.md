# Send the contact form from the site

## Why

The contact form used `mailto:`. It opened the visitor's email app, and many visitors have no email app set up. The message should go straight from the site to the owner's email.

## What changes

- Add `public/api/contact.php`. It is uploaded to the `.ir` host (ParsPack, Apache + PHP) and sends the email over SMTP, logged in as the mailbox `no-reply@hubertuspilates.ir`. (PHP `mail()` says "sent" on this host, but the email never leaves the server.)
- The form posts to `https://hubertuspilates.ir/api/contact.php` from both `hubertuspilates.com` and `hubertuspilates.ir` (CORS for both).
- The form shows a Persian success or error message.
- The support email comes from the GitHub secret (or variable) `SUPPORT_EMAIL`, and the mailbox password from the secret `SMTP_PASSWORD`. The `.ir` deploy job writes both into `api/contact-config.php` before the FTP upload. They are never in the repo.
- A hidden copy of every message stays in the `no-reply` Inbox on the host (readable in Roundcube when Gmail is not reachable).

## Out of scope

- Captcha, saving messages in a database.
