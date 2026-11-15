# Hosting and deploy guide

This guide explains, in simple steps, how the two websites are built and put online,
and what to do when something must change: a new email address, a new password,
a new FTP account, a new host, or a new GitHub repository.

You can give this file to Claude (or any AI helper) and ask it to do one of the steps.

> **Never** paste a password into a chat, an issue, a commit, or a screenshot.
> Passwords live only in the hosting panel, in GitHub secrets, and in your password manager.

---

## 1. How it works (the short version)

There are two websites. Both come from the same code in this repository.

| Site | Where it runs | How it gets updated |
|---|---|---|
| **hubertuspilates.com** | GitHub Pages (behind Cloudflare) | GitHub workflow `.github/workflows/nextjs.yml` |
| **hubertuspilates.ir** | ParsPack shared hosting (DirectAdmin panel) | GitHub workflow `.github/workflows/deploy-ir.yml`, which uploads the files by FTP |

- Every push to the `main` branch updates **both** sites automatically.
  The .com site takes about 2 minutes. The .ir site takes about 10–20 minutes (FTP is slow).
- If you push again while the .ir upload is still running, the old upload stops and the
  new one starts. Only the newest version goes online.
- **Which version is live?** Look at the footer of the site. It shows something like
  `v0.1.0 (7234dcc)`. The part in brackets is the commit. Compare it with the newest commit on `main`.
- You can start a deploy by hand: GitHub > **Actions** > choose the workflow
  (for example "Deploy to hubertuspilates.ir") > **Run workflow** > branch `main`.

### The contact form

- The "support" popup on both sites sends the form to
  `https://hubertuspilates.ir/api/contact.php`. This is a small PHP script in
  `public/api/contact.php`. Only the .ir host can run PHP, so both sites use it.
- The script sends an email to the **support address**. It sends it by logging in to the
  mail server of the .ir host as the mailbox `no-reply@hubertuspilates.ir`.
- Why a mailbox login? On this host, the simple PHP `mail()` function says "sent" but the
  email never leaves the server. Logging in as a real mailbox (SMTP) works.
- The support address and the mailbox password are **not** in the code. During the .ir
  deploy, GitHub writes them into a file `api/contact-config.php` on the server, from GitHub secrets.

---

## 2. GitHub secrets

Secrets are hidden settings that the deploy workflows use.

**Where:** GitHub > repository > **Settings** > **Secrets and variables** > **Actions** > tab **Secrets**.

- To add one: **New repository secret**, type the name and the value, **Add secret**.
- To change one: click the pencil next to it, type the new value, **Update secret**.
- GitHub **never shows a secret again** after you save it. So you cannot "read" a secret from GitHub.
  If you need a value, get it again from the place listed below.

| Secret | What it is | Where to get the value |
|---|---|---|
| `FTP_SERVER` | The FTP host name of the .ir hosting. Now: `764087289.cloudylink.com` | ParsPack panel > the host > **FTP accounts** (اکانت های FTP). The address is shown at the top ("آدرس"). |
| `FTP_USERNAME` | The FTP account the deploy logs in with. Now: `github@hubertuspilates.ir` | Same page, the account list. |
| `FTP_PASSWORD` | The password of that FTP account. | You chose it when you made the account. If you lost it, click **change password** (تغییر رمز عبور) on that account, set a new one, and put it here too. |
| `SUPPORT_EMAIL` | The address that **receives** the contact form messages. | Any email address you want, for example a Gmail address. |
| `SMTP_PASSWORD` | The password of the mailbox `no-reply@hubertuspilates.ir`, which **sends** the form emails. | DirectAdmin > **E-mail Manager** > **E-mail Accounts**. You chose it when you made the mailbox. If you lost it, change it there and put the new one here. |

After you change any secret, start the .ir deploy again (Actions > "Deploy to hubertuspilates.ir" >
Run workflow). The change takes effect only after a new deploy.

---

## 3. Common changes

### Change the email address that receives the contact form

1. GitHub > Settings > Secrets and variables > Actions.
2. Edit `SUPPORT_EMAIL` and type the new address.
3. Actions > "Deploy to hubertuspilates.ir" > **Run workflow**.
4. When it is green, send a test message from the form. Check the spam folder too.

### Change the password of the sending mailbox (no-reply)

1. DirectAdmin > **E-mail Manager** > **E-mail Accounts** > `no-reply` > change password.
2. GitHub: edit `SMTP_PASSWORD` with the same new password.
3. Run the .ir deploy again, then send a test message.

> Until step 3 is done, the form cannot send email (the old password is still on the server).

### Change the FTP password

1. ParsPack panel > the host > **FTP accounts** > on `github@hubertuspilates.ir` click **change password**.
2. GitHub: edit `FTP_PASSWORD`.
3. Run the .ir deploy again. If it fails at login (error `530`), the two passwords do not match.

### Make a new FTP account (important trap!)

When you create the FTP account for the deploy, choose the type **Domain** (دامنه).
Its folder must be `/home/hubeir/domains/hubertuspilates.ir/`.

- With type **Domain**, the website folder is `public_html/` inside it. The workflow already
  uploads to `public_html/`, so nothing in the code needs to change.
- **Do not** use the type **FTP**. That type is locked inside a folder called `public_ftp`.
  The deploy will say "success", but it puts the files in a folder that the website never shows.
  The site stays old and nobody gets an error. (This happened once. It took hours to find.)
- If you ever must use another folder, change the last folder in this line of
  `.github/workflows/deploy-ir.yml`:
  `mirror --reverse --verbose --parallel=1 out/ public_html/`

Then set `FTP_USERNAME` and `FTP_PASSWORD` in GitHub and run the deploy.

### Read the emails that the site sent (or errors about them)

Webmail: `https://hubertuspilates.ir/roundcube` — log in as `no-reply@hubertuspilates.ir`.
If an email could not be delivered, a "Mail delivery failed" message usually appears in this inbox.

---

## 4. Moving to a new host or a new GitHub repository

### New GitHub repository

1. Push the code to the new repository (branch `main`).
2. Add all 5 secrets from section 2. You must type every value again; secrets do not move with the code.
3. **Settings** > **Pages** > Source: **GitHub Actions**. Set the custom domain if needed
   (the file `CNAME` in the repo holds `hubertuspilates.com`).
4. Push any small change to `main`, or run both workflows by hand. Check the footer on both sites.

### New hosting for the .ir site

1. On the new host, create the mailbox `no-reply@<domain>` (for sending the form).
2. Create an FTP account whose root is the domain folder (see "Make a new FTP account" above).
   Find out which folder is the website folder (often `public_html`).
3. In `.github/workflows/deploy-ir.yml`, fix the upload folder in the `mirror` line if it is not `public_html/`.
4. Set the secrets `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`, `SMTP_PASSWORD` (and `SUPPORT_EMAIL`).
5. If the domain name changes, update it in the code:
   - `src/components/popup-widget/index.jsx`: `CONTACT_URL` (the address of `contact.php`).
   - `public/api/contact.php`: the list `$allowedOrigins` (the sites that may use the form),
     and the domain in `no-reply@...` and `EHLO ...`.
   - `.github/workflows/deploy-ir.yml`: `smtp_user` in the "Write contact form config" step.
6. Push to `main`. Then do the checks in section 5.

---

## 5. Checks and troubleshooting

**Quick checks after a deploy**

- Footer on both sites shows the newest commit.
- Open `https://hubertuspilates.ir/api/contact.php` in a browser. It should show `{"ok":false}`
  (this means the script runs; it only accepts form posts).
- Send a test message from the form and check that it arrives.

| Problem | What it usually means | What to do |
|---|---|---|
| The deploy is green, but the .ir site does not change (old footer). | The FTP account uploads into the wrong folder. | Check the FTP account type and folder (section 3, "Make a new FTP account"). |
| The .ir deploy fails at the FTP step with `530` or "Login failed". | Wrong FTP username or password. | Make `FTP_USERNAME` / `FTP_PASSWORD` match the account in the panel. |
| The form shows an error message. | `contact.php` is missing on the server (a `404`), or the server had an error. | Open the `contact.php` link above. If it says "not found", the upload folder is wrong. |
| The form says "sent", but no email arrives. | 1) The email is in spam. 2) `SMTP_PASSWORD` is missing or wrong. | Check spam (mark it "Not spam"). In GitHub Actions, open the last .ir deploy > step "Write contact form config": a yellow warning means a secret is empty. Check the PHP error log in the hosting panel for lines that start with `contact.php: SMTP`. |
| The .ir site shows an old page after a deploy. | The browser keeps an old copy. | Press Ctrl+Shift+R (hard refresh). |
