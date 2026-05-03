import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';
import { wrap, row, sendEmail } from './_email';

function getSupabase() {
  const url = process.env.VITE_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY;
  return url && key ? createClient(url, key) : null;
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

  const html = wrap(`
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
    await sendEmail(
      apiKey,
      ['danielkimara7@gmail.com', 'kicaben5@gmail.com'],
      `New Inquiry — ${name} from ${business}`,
      html,
    );
  } catch (err: any) {
    console.error('Email error:', err.message);
    return res.status(500).json({ error: err.message });
  }

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

  return res.status(200).json({ success: true });
}
