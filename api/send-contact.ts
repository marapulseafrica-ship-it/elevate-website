import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

const ADMIN_EMAILS = ['danielkimara7@gmail.com', 'kicaben5@gmail.com'];

function getSupabase() {
  const url = process.env.VITE_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY;
  return url && key ? createClient(url, key) : null;
}

async function sendViaResend(apiKey: string, to: string, subject: string, html: string): Promise<string> {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'ElevateAI Solutions <support@elevateaisolutionsagency.com>',
      to: [to],
      subject,
      html,
    }),
  });
  const body = await res.json() as any;
  if (!res.ok) throw new Error(`Resend ${res.status}: ${JSON.stringify(body)}`);
  return body.id as string;
}

function buildHtml(name: string, email: string, business: string, phone: string | undefined, message: string): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f0f4ff;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4ff;padding:40px 16px;">
  <tr><td align="center">
    <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(10,26,53,0.10);">
      <tr><td style="background:#0a1a35;padding:28px 36px;">
        <div style="font-size:22px;font-weight:800;color:#ffffff;letter-spacing:0.5px;">ElevateAI Solutions</div>
        <div style="font-size:11px;color:#b0b8e8;letter-spacing:3px;text-transform:uppercase;margin-top:4px;">New Inquiry Received</div>
      </td></tr>
      <tr><td style="background:#ffffff;padding:32px 36px;">
        <h2 style="margin:0 0 20px;font-size:20px;color:#0a1a35;">Someone has reached out through the website</h2>
        <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;margin-bottom:24px;">
          <tr style="background:#f0f4ff;"><td colspan="2" style="padding:10px 16px;font-size:11px;font-weight:700;color:#1a3a6e;text-transform:uppercase;letter-spacing:1px;">Contact Details</td></tr>
          <tr style="border-top:1px solid #f1f5f9;"><td style="padding:12px 16px;font-size:13px;color:#64748b;width:120px;">Name</td><td style="padding:12px 16px;font-size:13px;font-weight:600;color:#1e293b;">${name}</td></tr>
          <tr style="border-top:1px solid #f1f5f9;"><td style="padding:12px 16px;font-size:13px;color:#64748b;">Email</td><td style="padding:12px 16px;font-size:13px;font-weight:600;color:#1e293b;"><a href="mailto:${email}" style="color:#2563eb;">${email}</a></td></tr>
          <tr style="border-top:1px solid #f1f5f9;"><td style="padding:12px 16px;font-size:13px;color:#64748b;">Business</td><td style="padding:12px 16px;font-size:13px;font-weight:600;color:#1e293b;">${business}</td></tr>
          ${phone ? `<tr style="border-top:1px solid #f1f5f9;"><td style="padding:12px 16px;font-size:13px;color:#64748b;">Phone</td><td style="padding:12px 16px;font-size:13px;font-weight:600;color:#1e293b;">${phone}</td></tr>` : ''}
        </table>
        <div style="background:#f8fafc;border-left:4px solid #2563eb;border-radius:0 8px 8px 0;padding:16px 20px;margin-bottom:24px;">
          <p style="margin:0 0 6px;font-size:11px;font-weight:700;color:#1a3a6e;text-transform:uppercase;letter-spacing:1px;">Message</p>
          <p style="margin:0;font-size:14px;color:#334155;line-height:1.7;">${message}</p>
        </div>
        <a href="mailto:${email}" style="display:inline-block;background:#1d4ed8;color:#ffffff;font-weight:700;font-size:14px;padding:14px 28px;border-radius:8px;text-decoration:none;">Reply Now</a>
      </td></tr>
      <tr><td style="background:#0a1a35;padding:20px 36px;text-align:center;">
        <p style="margin:0;font-size:12px;color:#b0b8e8;">© 2026 ElevateAI Solutions Limited</p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body>
</html>`.trim();
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, business, phone, message } = req.body;
  if (!name || !email || !business || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Email not configured' });

  const supabase = getSupabase();

  // Dedup: block if same email submitted within the last 2 minutes
  if (supabase) {
    const cutoff = new Date(Date.now() - 120_000).toISOString();
    const { data: recent } = await supabase
      .from('elevate_leads')
      .select('id')
      .eq('type', 'contact')
      .eq('email', email)
      .gte('created_at', cutoff)
      .limit(1);
    if (recent && recent.length > 0) {
      return res.status(200).json({ success: true });
    }
  }

  const subject = `New Inquiry: ${name} from ${business}`;
  const html = buildHtml(name, email, business, phone, message);
  const sentIds: string[] = [];
  const errors: string[] = [];

  // Send one email per recipient so each gets their own delivery
  for (const recipient of ADMIN_EMAILS) {
    try {
      const id = await sendViaResend(apiKey, recipient, subject, html);
      sentIds.push(id);
    } catch (err: any) {
      errors.push(`${recipient}: ${err.message}`);
    }
  }

  if (errors.length === ADMIN_EMAILS.length) {
    // All sends failed
    return res.status(500).json({ error: errors.join(' | ') });
  }

  // Save to Supabase
  if (supabase) {
    const { error: dbError } = await supabase.from('elevate_leads').insert({
      type: 'contact',
      name,
      email,
      phone: phone || null,
      business_name: business,
      message,
    });
    if (dbError) console.error('Lead save error:', dbError.message);
  }

  return res.status(200).json({ success: true, ids: sentIds });
}
