// Google shows App passwords as "abcd efgh ijkl mnop". Spaces are only for reading,
// so they are removed for Gmail in case the password was pasted with them.
export function mailPassword() {
  const raw = process.env.SMTP_PASS || '';
  return /gmail|googlemail/i.test(process.env.SMTP_HOST || '') ? raw.replace(/\s+/g, '') : raw;
}
