# Send the contact form from the site

## Why

The contact form used `mailto:`. It opened the visitor's email app, and many visitors have no email app set up. The message should go straight from the site to the owner's email.

## What changes

- Add `public/api/contact.php`. It is uploaded to the `.ir` host (ParsPack, Apache + PHP) and sends the email with PHP `mail()`.
- The form posts to `https://hubertuspilates.ir/api/contact.php` from both `hubertuspilates.com` and `hubertuspilates.ir` (CORS for both).
- The form shows a Persian success or error message.
- The support email comes from the GitHub secret (or variable) `SUPPORT_EMAIL`. The `.ir` deploy job writes it into `api/contact-config.php` before the FTP upload. The address is never in the repo.

## Out of scope

- SMTP login, captcha, saving messages in a database.
