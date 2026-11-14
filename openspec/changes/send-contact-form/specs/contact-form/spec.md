# Contact form

## ADDED Requirements

### Requirement: Send from the site

The contact form SHALL send the message from the site, without opening an email app.

#### Scenario: Good message
- WHEN a visitor sends a name, a valid email and a message
- THEN the support email gets a mail with the name, the visitor's email and the message
- AND Reply-To is the visitor's email
- AND the form shows "پیام شما ارسال شد"

#### Scenario: Send fails
- WHEN the script answers with an error or the network fails
- THEN the form shows a Persian error message and keeps the text

#### Scenario: Bot
- WHEN the hidden `botcheck` field is filled
- THEN no mail is sent

### Requirement: Support email from a secret

The support email SHALL come from the GitHub secret (or variable) `SUPPORT_EMAIL` and SHALL NOT be in the repo.

#### Scenario: Change the address
- WHEN the secret is changed and the `.ir` deploy runs again
- THEN new messages go to the new address

### Requirement: Both hosts

The form on `hubertuspilates.com` and on `hubertuspilates.ir` SHALL both use the script on `hubertuspilates.ir`.
