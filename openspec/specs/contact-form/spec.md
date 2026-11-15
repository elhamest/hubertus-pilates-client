# contact-form Specification

## Purpose
Floating contact form on every page. It sends the message from the site through one PHP script on the `.ir` host.
Code: `src/components/popup-widget`, `public/api/contact.php`, the "Write contact form config" step in `.github/workflows/deploy-ir.yml`.

## Requirements

### Requirement: Popup toggle
On desktop a round button in the corner SHALL open and close the form. On screens up to 500px wide the form SHALL be shown inline at the end of the page.

#### Scenario: Open on desktop
- **WHEN** the visitor clicks the chat button
- **THEN** the form opens and the button shows a close (X) icon

### Requirement: Field validation
The form SHALL require a name (max 80 chars), an email (must match `something@something`) and a message (max 5000 chars). Errors SHALL show in Persian under the field after the field is touched or on submit. The PHP script SHALL check the same limits again and SHALL refuse a name with new lines or an invalid email.

#### Scenario: Empty email
- **WHEN** the visitor submits without an email
- **THEN** "لطفا ایمیل خود را وارد کنید" is shown and nothing is sent

### Requirement: Send from the site
On valid submit the form SHALL `POST` the fields as `FormData` to `https://hubertuspilates.ir/api/contact.php`. The script SHALL send one email by SMTP (`ssl://localhost:465`, logged in as `no-reply@hubertuspilates.ir`) to the support address, with the name, the visitor's email and the message in the body, From `no-reply@hubertuspilates.ir` and Reply-To the visitor's email.

#### Scenario: Good message
- **WHEN** a visitor sends a name, a valid email and a message
- **THEN** the support address gets the mail, the script answers `{"ok":true,"info":"smtp: 250 ..."}`
- **AND** the form shows "پیام شما ارسال شد" and is cleared

#### Scenario: Send fails
- **WHEN** the script answers with an error or the network fails
- **THEN** the form shows a Persian error message and keeps the text

### Requirement: Copy on the host
Every sent message SHALL also go, as a hidden copy (an extra SMTP `RCPT TO`, no `Bcc` header), to the `no-reply@hubertuspilates.ir` Inbox, so it can be read in Roundcube when Gmail is not reachable.

#### Scenario: Gmail not reachable
- **WHEN** a message is sent while Gmail cannot be opened
- **THEN** the message can be read at `https://hubertuspilates.ir/roundcube` in the no-reply Inbox

### Requirement: Bot trap
The form SHALL have a hidden `botcheck` checkbox. When it is ticked, the script SHALL answer ok and send nothing.

#### Scenario: Bot
- **WHEN** the hidden `botcheck` field is filled
- **THEN** no mail is sent

### Requirement: Settings from secrets
The support address SHALL come from the GitHub secret (or variable) `SUPPORT_EMAIL` and the mailbox password from the secret `SMTP_PASSWORD`. The `.ir` deploy SHALL write them into `api/contact-config.php` on the host. Neither SHALL be in the repo.

#### Scenario: Change the address
- **WHEN** the secret is changed and the `.ir` deploy runs again
- **THEN** new messages go to the new address

### Requirement: Both hosts
The form on `hubertuspilates.com` and on `hubertuspilates.ir` (with or without `www.`) SHALL both use the script on `hubertuspilates.ir`. The script SHALL allow CORS only for these four origins.

#### Scenario: Send from .com
- **WHEN** a visitor sends the form on `https://hubertuspilates.com`
- **THEN** the browser accepts the answer of the `.ir` script and shows the result
