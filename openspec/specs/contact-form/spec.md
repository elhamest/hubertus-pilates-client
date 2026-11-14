# contact-form Specification

## Purpose
Floating contact form on every page. There is no backend: it opens the visitor's email app. Code: `src/components/popup-widget`.

## Requirements

### Requirement: Popup toggle
On desktop a round button in the corner SHALL open and close the form. On screens up to 500px wide the form SHALL be shown inline at the end of the page.

#### Scenario: Open on desktop
- **WHEN** the visitor clicks the chat button
- **THEN** the form opens and the button shows a close (X) icon

### Requirement: Field validation
The form SHALL require name (max 80 chars), email (must match `something@something`), and message. Errors SHALL show in Persian under the field after the field is touched or on submit.

#### Scenario: Empty email
- **WHEN** the visitor submits without an email
- **THEN** "لطفا ایمیل خود را وارد کنید" is shown and nothing is sent

### Requirement: Send by email app
On valid submit the form SHALL open a `mailto:info@hubertuspilates.com` link with subject "<name> sent a message from Hubertus site" and a body with name, email and message, and then reset the form.

#### Scenario: Valid submit
- **WHEN** the visitor fills all fields and clicks "ارسال پیام"
- **THEN** the email app opens with the filled subject and body, and the form is cleared
