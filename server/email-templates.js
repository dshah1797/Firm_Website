// Branded HTML emails (table layout + inline styles so they look right in Gmail, Outlook and phones).
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LOGO_PATH = path.join(__dirname, 'assets', 'email-logo.png');
const hasLogo = existsSync(LOGO_PATH);

const BLUE = '#0c51ba';
const NAVY = '#0f1f3d';
const MUTED = '#5a6479';
const LINE = '#e3e9f5';
const FONT = "'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif";

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const nl2br = (s) => esc(s).replace(/\r?\n/g, '<br>');

const attachments = hasLogo ? [{ filename: 'netra-dynamics.png', path: LOGO_PATH, cid: 'netra-logo' }] : [];

function shell({ preheader, body }) {
  const logo = hasLogo
    ? `<img src="cid:netra-logo" width="168" alt="Netra Dynamics" style="display:block;border:0;outline:none;height:auto;width:168px;">`
    : `<span style="font-family:${FONT};font-size:22px;font-weight:700;color:#ffffff;letter-spacing:.3px;">Netra Dynamics</span>`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light only">
<meta name="supported-color-schemes" content="light only">
<title>Netra Dynamics</title>
</head>
<body style="margin:0;padding:0;background:#eef3fb;-webkit-text-size-adjust:100%;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;mso-hide:all;">${esc(preheader)}&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#eef3fb;">
  <tr><td align="center" style="padding:32px 12px;">
    <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;">

      <tr><td style="background:${BLUE};border-radius:18px 18px 0 0;padding:30px 40px 26px;border-bottom:4px solid #093d8f;">
        ${logo}
      </td></tr>

      <tr><td style="background:#ffffff;padding:40px 40px 12px;font-family:${FONT};color:${NAVY};">
        ${body}
      </td></tr>

      <tr><td style="background:#ffffff;padding:8px 40px 36px;border-radius:0;">
        <div style="height:1px;background:${LINE};line-height:1px;font-size:1px;">&nbsp;</div>
      </td></tr>

      <tr><td style="background:#f6f9ff;border-radius:0 0 18px 18px;padding:26px 40px 30px;font-family:${FONT};font-size:12.5px;line-height:1.7;color:${MUTED};">
        <strong style="color:${NAVY};font-size:13px;">Netra Dynamics</strong> &nbsp;&middot;&nbsp; Ideas into digital experiences<br>
        <a href="mailto:netradynamics@gmail.com" style="color:${BLUE};text-decoration:none;">netradynamics@gmail.com</a>
      </td></tr>

    </table>
    <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;">
      <tr><td align="center" style="padding:18px 20px 0;font-family:${FONT};font-size:11.5px;line-height:1.6;color:#8a96ad;">
        This is an automatic message from the contact form on your Netra Dynamics website.
      </td></tr>
    </table>
  </td></tr>
</table>
</body>
</html>`;
}

const row = (label, valueHtml) => `
<tr>
  <td style="padding:15px 0;border-top:1px solid ${LINE};font-family:${FONT};">
    <div style="font-size:11px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:${MUTED};padding-bottom:5px;">${label}</div>
    <div style="font-size:16px;line-height:1.45;color:${NAVY};word-break:break-word;">${valueHtml}</div>
  </td>
</tr>`;

const button = (href, label, primary = true) =>
  `<a href="${href}" style="display:inline-block;font-family:${FONT};font-size:15px;font-weight:700;text-decoration:none;border-radius:10px;padding:14px 28px;${primary ? `background:${BLUE};color:#ffffff;` : `background:#ffffff;color:${BLUE};border:2px solid ${BLUE};padding:12px 26px;`}">${label}</a>`;

// ---------------------------------------------------------------- new enquiry
export function enquiryEmail({ name, email, service, message }) {
  const when = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' }) + ' IST';
  const topic = service || 'General enquiry';
  const replySubject = encodeURIComponent(`Re: Your enquiry about ${topic} - Netra Dynamics`);
  const first = String(name).trim().split(/\s+/)[0] || 'the visitor';

  const body = `
<div style="font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${BLUE};padding-bottom:12px;">New enquiry</div>
<h1 style="margin:0 0 14px;font-size:30px;line-height:1.2;font-weight:800;color:${NAVY};letter-spacing:-.4px;">${esc(name)} wants to talk.</h1>
<div style="padding-bottom:30px;">
  <span style="display:inline-block;background:#e8f0ff;color:${BLUE};font-size:13px;font-weight:700;padding:7px 14px;border-radius:99px;">${esc(topic)}</span>
</div>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
  ${row('Name', esc(name))}
  ${row('Email', `<a href="mailto:${esc(email)}" style="color:${BLUE};text-decoration:none;font-weight:600;">${esc(email)}</a>`)}
  ${row('Interested in', esc(topic))}
  ${row('Received', esc(when))}
</table>

<div style="padding:30px 0 10px;font-family:${FONT};">
  <div style="font-size:11px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:${MUTED};padding-bottom:12px;">Their message</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td width="4" style="background:${BLUE};border-radius:4px;">&nbsp;</td>
      <td style="background:#f6f9ff;border-radius:0 12px 12px 0;padding:20px 22px;font-size:16px;line-height:1.7;color:${NAVY};word-break:break-word;">${nl2br(message)}</td>
    </tr>
  </table>
</div>

<div style="padding:26px 0 8px;">
  ${button(`mailto:${esc(email)}?subject=${replySubject}`, `Reply to ${esc(first)} &rarr;`)}
</div>
<div style="padding:6px 0 12px;font-size:13.5px;line-height:1.6;color:${MUTED};">
  Or just press <strong style="color:${NAVY};">Reply</strong> on this email. Your answer goes straight to ${esc(first)}.
</div>`;

  const text = [
    `NEW ENQUIRY: ${name} wants to talk.`,
    '',
    `Name:          ${name}`,
    `Email:         ${email}`,
    `Interested in: ${topic}`,
    `Received:      ${when}`,
    '',
    'Their message:',
    message,
    '',
    `Reply to this email to answer ${first} directly.`,
    '',
    '-- Netra Dynamics | Ideas into digital experiences | netradynamics@gmail.com',
  ].join('\n');

  return {
    subject: `New enquiry: ${topic} - ${name}`,
    preheader: `${name} is interested in ${topic}. "${String(message).replace(/\s+/g, ' ').slice(0, 90)}"`,
    text,
    attachments,
    _body: body,
  };
}

// ---------------------------------------------------------------- test email
export function testEmail() {
  const item = (t) => `
<tr>
  <td width="34" valign="top" style="padding:8px 0;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr><td width="24" height="24" align="center" valign="middle" style="width:24px;height:24px;background:${BLUE};border-radius:12px;color:#ffffff;font-family:${FONT};font-size:13px;font-weight:700;line-height:24px;">&#10003;</td></tr></table>
  </td>
  <td style="padding:8px 0;font-family:${FONT};font-size:16px;line-height:1.5;color:${NAVY};">${t}</td>
</tr>`;

  const body = `
<div style="font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${BLUE};padding-bottom:12px;">All set</div>
<h1 style="margin:0 0 16px;font-size:30px;line-height:1.2;font-weight:800;color:${NAVY};letter-spacing:-.4px;">Your website email notifications are working.</h1>
<p style="margin:0 0 26px;font-size:16px;line-height:1.7;color:${MUTED};">From now on, every enquiry sent through the contact form on your website arrives in this inbox, beautifully laid out, so you can respond in seconds.</p>

<div style="font-size:11px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:${MUTED};padding-bottom:6px;">Each enquiry includes</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
  ${item("The visitor's <strong>name and email address</strong>")}
  ${item('The <strong>service</strong> they are interested in')}
  ${item('Their full <strong>message</strong> and the time it was received')}
  ${item('A one-click <strong>Reply</strong> button that writes straight to them')}
</table>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:28px;">
  <tr>
    <td width="4" style="background:${BLUE};border-radius:4px;">&nbsp;</td>
    <td style="background:#f6f9ff;border-radius:0 12px 12px 0;padding:18px 22px;font-size:15px;line-height:1.65;color:${NAVY};">
      <strong>Nothing else to do.</strong> You can safely delete this test message.
    </td>
  </tr>
</table>
<div style="height:14px;line-height:14px;font-size:1px;">&nbsp;</div>`;

  return {
    subject: 'Test: your website email notifications are working',
    preheader: 'Every website enquiry will now arrive in this inbox.',
    text: [
      'ALL SET: your website email notifications are working.',
      '',
      'From now on, every enquiry sent through the contact form arrives in this inbox with:',
      '- the visitor\'s name and email address',
      '- the service they are interested in',
      '- their full message and the time it was received',
      '- Reply: answer them directly by replying to the email',
      '',
      'Nothing else to do. You can safely delete this test message.',
      '',
      '-- Netra Dynamics | Ideas into digital experiences',
    ].join('\n'),
    attachments,
    _body: body,
  };
}

// Builds the final { subject, text, html, attachments } object nodemailer expects.
export function render(parts) {
  return {
    subject: parts.subject,
    text: parts.text,
    html: shell({ preheader: parts.preheader, body: parts._body }),
    attachments: parts.attachments,
  };
}
