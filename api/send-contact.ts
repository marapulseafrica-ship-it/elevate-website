import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';
import { wrap, row, sendEmail } from './_email';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, business, phone, message } = req.body;
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Email not configured' });

  // Save to Supabase server-side so it appears in admin leads immediately
  const url = process.env.VITE_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY;
  if (url && key) {
    const supabase = createClient(url, key);
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

  const adminHtml = wrap(`
    <h2 style="margin:0 0 6px;font-size:22px;font-weight:800;color:#0a1a35;">New enquiry received</h2>
    <p style="margin:0 0 24px;font-size:14px;color:#64748b;">Someone has reached out through the website contact form.</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:10px;overflow:hidden;border:1px solid #e2e8f0;margin-bottom:28px;">
      <tr style="background:#f0f4ff;"><td colspan="2" style="padding:12px 16px;font-size:12px;font-weight:700;color:#1a3a6e;text-transform:uppercase;letter-spacing:1px;">Contact Details</td></tr>
      ${row('Name', name)}
      ${row('Email', `<a href="mailto:${email}" style="color:#2563eb;">${email}</a>`)}
      ${row('Business', business)}
      ${phone ? row('Phone', phone) : ''}
    </table>
    <div style="background:#f8fafc;border-left:4px solid #2563eb;border-radius:0 8px 8px 0;padding:16px 20px;margin-bottom:28px;">
      <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#1a3a6e;text-transform:uppercase;letter-spacing:1px;">Message</p>
      <p style="margin:0;font-size:14px;color:#334155;line-height:1.7;">${message}</p>
    </div>
    <a href="mailto:${email}" style="display:inline-block;background:linear-gradient(135deg,#1d4ed8,#2563eb);color:#ffffff;font-weight:700;font-size:14px;padding:14px 28px;border-radius:8px;text-decoration:none;">Reply Now</a>
  `);

  try {
    await sendEmail(apiKey, ['danielkimara7@gmail.com', 'kicaben5@gmail.com'],
      `New Enquiry: ${name} from ${business}`, adminHtml);
    res.status(200).json({ success: true });
  } catch (err: any) {
    console.error('Email error:', err.message);
    res.status(500).json({ error: err.message });
  }
}
