// Shared email helpers for Vercel serverless functions

export const LOGO_BLOCK = `
<div style="display:flex;align-items:center;gap:12px;margin-bottom:4px;">
  <svg viewBox="0 0 60 50" width="44" height="36" xmlns="http://www.w3.org/2000/svg">
    <rect x="4"  y="30" width="10" height="16" rx="2" fill="#b0b8e8"/>
    <rect x="20" y="20" width="10" height="26" rx="2" fill="#b0b8e8"/>
    <rect x="36" y="8"  width="10" height="38" rx="2" fill="#ffffff"/>
  </svg>
  <div>
    <div style="font-size:20px;font-weight:800;color:#ffffff;letter-spacing:0.5px;">ElevateAI</div>
    <div style="font-size:9px;color:#b0b8e8;letter-spacing:3px;text-transform:uppercase;margin-top:1px;">Solutions Limited</div>
  </div>
</div>`;

export function wrap(body: string): string {
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f0f4ff;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4ff;padding:40px 16px;">
  <tr><td align="center">
    <table width="580" cellpadding="0" cellspacing="0" style="max-width:580px;width:100%;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(10,26,53,0.10);">
      <tr><td style="background:linear-gradient(135deg,#0a1a35 0%,#1a3a6e 100%);padding:28px 36px 24px;">${LOGO_BLOCK}</td></tr>
      <tr><td style="background:#ffffff;padding:36px 36px 28px;">${body}</td></tr>
      <tr><td style="background:#0a1a35;padding:20px 36px;text-align:center;">
        <p style="margin:0;font-size:12px;color:#b0b8e8;">© 2026 ElevateAI Solutions Limited · Lusaka, Zambia</p>
        <p style="margin:6px 0 0;font-size:11px;color:rgba(176,184,232,0.6);">elevateaisolutionsagency.com</p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body></html>`;
}

export function row(label: string, value: string): string {
  return `<tr style="border-top:1px solid #f1f5f9;">
    <td style="padding:12px 16px;font-size:13px;color:#64748b;width:140px;">${label}</td>
    <td style="padding:12px 16px;font-size:13px;font-weight:600;color:#1e293b;">${value}</td>
  </tr>`;
}

export async function sendEmail(
  apiKey: string,
  to: string | string[],
  subject: string,
  html: string
): Promise<void> {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'ElevateAI Solutions Limited <support@elevateaisolutionsagency.com>',
      to: Array.isArray(to) ? to : [to],
      subject,
      html,
    }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Resend error ${res.status}: ${text}`);
  }
}
