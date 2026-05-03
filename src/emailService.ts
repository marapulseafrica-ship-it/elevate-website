const RESEND_API_KEY = import.meta.env.VITE_RESEND_API_KEY as string ?? '';

const LOGO_SVG = `
<div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;">
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

function emailWrapper(content: string): string {
  return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f0f4ff;font-family:'Inter',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4ff;padding:40px 16px;">
    <tr><td align="center">
      <table width="580" cellpadding="0" cellspacing="0" style="max-width:580px;width:100%;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(10,26,53,0.10);">
        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#0a1a35 0%,#1a3a6e 100%);padding:28px 36px 24px;">
            ${LOGO_SVG}
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="background:#ffffff;padding:36px 36px 28px;">
            ${content}
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#0a1a35;padding:20px 36px;text-align:center;">
            <p style="margin:0;font-size:12px;color:#b0b8e8;">© 2026 ElevateAI Solutions Limited · Lusaka, Zambia</p>
            <p style="margin:6px 0 0;font-size:11px;color:rgba(176,184,232,0.6);">elevateaisolutionsagency.com</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

async function send(to: string | string[], subject: string, html: string): Promise<void> {
  if (!RESEND_API_KEY) return;
  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'ElevateAI Solutions Limited <noreply@elevateaisolutionsagency.com>',
        to: Array.isArray(to) ? to : [to],
        subject,
        html,
      }),
    });
  } catch {
    // Non-blocking
  }
}

// Determine admin recipients by service type
function getAdminRecipients(serviceType: string): string[] {
  if (serviceType === 'AI Voice Agent') return ['kicaben5@gmail.com'];
  if (serviceType === 'AI Automation')  return ['danielkimara7@gmail.com'];
  // Consultation (and any other) → both
  return ['danielkimara7@gmail.com', 'kicaben5@gmail.com'];
}

export async function sendBookingEmails(data: {
  name: string;
  email: string;
  businessName: string;
  industry: string;
  goals: string;
  serviceType: string;
  bookingDate: string;
  bookingTime: string;
}): Promise<void> {
  const { name, email, businessName, industry, goals, serviceType, bookingDate, bookingTime } = data;
  const admins = getAdminRecipients(serviceType);

  const formattedDate = new Date(`${bookingDate}T${bookingTime}:00+02:00`)
    .toLocaleDateString('en-ZA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Africa/Johannesburg' });

  // ── Admin notification ──
  const adminBody = `
    <h2 style="margin:0 0 6px;font-size:22px;font-weight:800;color:#0a1a35;">A new ${serviceType} has been booked through your system.</h2>
    <p style="margin:0 0 24px;font-size:14px;color:#64748b;">Review the details below and follow up with the client promptly.</p>

    <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:10px;overflow:hidden;border:1px solid #e2e8f0;margin-bottom:28px;">
      <tr style="background:#f0f4ff;">
        <td style="padding:12px 16px;font-size:12px;font-weight:700;color:#1a3a6e;text-transform:uppercase;letter-spacing:1px;" colspan="2">Client Details</td>
      </tr>
      ${row('Full Name', name)}
      ${row('Email Address', `<a href="mailto:${email}" style="color:#2563eb;">${email}</a>`)}
      ${row('Business Name', businessName)}
      ${row('Industry', industry)}
      ${row('Service', `<span style="background:#dbeafe;color:#1d4ed8;padding:3px 10px;border-radius:20px;font-size:12px;font-weight:600;">${serviceType}</span>`)}
      ${row('Preferred Date', formattedDate)}
      ${row('Preferred Time', `${bookingTime} SAST (UTC+2)`)}
    </table>

    <div style="background:#f8fafc;border-left:4px solid #2563eb;border-radius:0 8px 8px 0;padding:16px 20px;margin-bottom:28px;">
      <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#1a3a6e;text-transform:uppercase;letter-spacing:1px;">Goals</p>
      <p style="margin:0;font-size:14px;color:#334155;line-height:1.7;">${goals}</p>
    </div>

    <a href="mailto:${email}" style="display:inline-block;background:linear-gradient(135deg,#1d4ed8,#2563eb);color:#ffffff;font-weight:700;font-size:14px;padding:14px 28px;border-radius:8px;text-decoration:none;">Reply to Client</a>`;

  // ── Client confirmation ──
  const clientBody = `
    <h2 style="margin:0 0 6px;font-size:22px;font-weight:800;color:#0a1a35;">Your booking is confirmed, ${name.split(' ')[0]}!</h2>
    <p style="margin:0 0 24px;font-size:14px;color:#64748b;">Thank you for choosing ElevateAI Solutions Limited. We've received your booking and will be in touch shortly to confirm your session.</p>

    <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:10px;overflow:hidden;border:1px solid #e2e8f0;margin-bottom:28px;">
      <tr style="background:#f0f4ff;">
        <td style="padding:12px 16px;font-size:12px;font-weight:700;color:#1a3a6e;text-transform:uppercase;letter-spacing:1px;" colspan="2">Booking Summary</td>
      </tr>
      ${row('Service', `<span style="background:#dbeafe;color:#1d4ed8;padding:3px 10px;border-radius:20px;font-size:12px;font-weight:600;">${serviceType}</span>`)}
      ${row('Date', formattedDate)}
      ${row('Time', `${bookingTime} SAST (UTC+2)`)}
      ${row('Business', businessName)}
    </table>

    <div style="background:#f0f4ff;border-radius:10px;padding:20px 24px;margin-bottom:28px;">
      <p style="margin:0 0 8px;font-size:13px;font-weight:700;color:#1a3a6e;">What happens next?</p>
      <p style="margin:0;font-size:13px;color:#475569;line-height:1.8;">
        1. Our team will review your booking details.<br>
        2. You'll receive a calendar invite confirming the exact time.<br>
        3. We'll prepare a tailored agenda based on your goals.<br>
        4. Join the call ready to explore how AI can transform your business.
      </p>
    </div>

    <p style="margin:0 0 6px;font-size:13px;color:#64748b;">Have questions before the session?</p>
    <a href="mailto:elevateaisolutionsagency@gmail.com" style="font-size:13px;color:#2563eb;font-weight:600;">elevateaisolutionsagency@gmail.com</a>

    <div style="margin-top:28px;padding-top:20px;border-top:1px solid #e2e8f0;">
      <p style="margin:0;font-size:13px;color:#94a3b8;">— The ElevateAI Solutions Limited Team</p>
    </div>`;

  await Promise.all([
    send(admins, `New ${serviceType} Booked — ${name} (${businessName})`, emailWrapper(adminBody)),
    send(email,  `Your ${serviceType} is Confirmed — ElevateAI Solutions Limited`,  emailWrapper(clientBody)),
  ]);
}

export async function sendContactNotification(data: {
  name: string;
  email: string;
  business: string;
  phone?: string;
  message: string;
}): Promise<void> {
  const { name, email, business, phone, message } = data;

  const adminBody = `
    <h2 style="margin:0 0 6px;font-size:22px;font-weight:800;color:#0a1a35;">New enquiry received</h2>
    <p style="margin:0 0 24px;font-size:14px;color:#64748b;">Someone has reached out through the website contact form.</p>

    <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:10px;overflow:hidden;border:1px solid #e2e8f0;margin-bottom:28px;">
      <tr style="background:#f0f4ff;">
        <td style="padding:12px 16px;font-size:12px;font-weight:700;color:#1a3a6e;text-transform:uppercase;letter-spacing:1px;" colspan="2">Contact Details</td>
      </tr>
      ${row('Name', name)}
      ${row('Email', `<a href="mailto:${email}" style="color:#2563eb;">${email}</a>`)}
      ${row('Business', business)}
      ${phone ? row('Phone', phone) : ''}
    </table>

    <div style="background:#f8fafc;border-left:4px solid #2563eb;border-radius:0 8px 8px 0;padding:16px 20px;margin-bottom:28px;">
      <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#1a3a6e;text-transform:uppercase;letter-spacing:1px;">Message</p>
      <p style="margin:0;font-size:14px;color:#334155;line-height:1.7;">${message}</p>
    </div>

    <a href="mailto:${email}" style="display:inline-block;background:linear-gradient(135deg,#1d4ed8,#2563eb);color:#ffffff;font-weight:700;font-size:14px;padding:14px 28px;border-radius:8px;text-decoration:none;">Reply Now</a>`;

  await send(
    ['danielkimara7@gmail.com', 'kicaben5@gmail.com'],
    `New Enquiry: ${name} from ${business}`,
    emailWrapper(adminBody)
  );
}

function row(label: string, value: string): string {
  return `<tr style="border-top:1px solid #f1f5f9;">
    <td style="padding:12px 16px;font-size:13px;color:#64748b;width:140px;">${label}</td>
    <td style="padding:12px 16px;font-size:13px;font-weight:600;color:#1e293b;">${value}</td>
  </tr>`;
}
