import type { VercelRequest, VercelResponse } from '@vercel/node';
import { google } from 'googleapis';
import { wrap, row, sendEmail } from './_email';

function getAdmins(serviceType: string): string[] {
  if (serviceType === 'AI Voice Agent') return ['kicaben5@gmail.com'];
  if (serviceType === 'AI Automation')  return ['danielkimara7@gmail.com'];
  return ['danielkimara7@gmail.com', 'kicaben5@gmail.com']; // Consultation
}

function formatTime(time: string): string {
  const [h, m] = time.split(':').map(Number);
  const period = h >= 12 ? 'PM' : 'AM';
  const hour = h % 12 || 12;
  return `${hour}:${m.toString().padStart(2, '0')} ${period} SAST`;
}

function buildAuth(serviceAccountJson: string) {
  const credentials = JSON.parse(serviceAccountJson);
  return new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/calendar'],
  });
}

async function checkOneCalendar(
  serviceAccountJson: string,
  calendarId: string,
  bookingDate: string,
  bookingTime: string
): Promise<boolean> {
  const auth = buildAuth(serviceAccountJson);
  const calendar = google.calendar({ version: 'v3', auth });

  const startISO = `${bookingDate}T${bookingTime}:00+02:00`;
  const start = new Date(startISO);
  const end = new Date(start.getTime() + 60 * 60 * 1000);

  const { data } = await calendar.freebusy.query({
    requestBody: {
      timeMin: start.toISOString(),
      timeMax: end.toISOString(),
      timeZone: 'Africa/Johannesburg',
      items: [{ id: calendarId }],
    },
  });

  const busy = data.calendars?.[calendarId]?.busy ?? [];
  return busy.length === 0;
}

async function createCalendarEvent(
  serviceAccountJson: string,
  calendarId: string,
  summary: string,
  description: string,
  bookingDate: string,
  bookingTime: string
): Promise<void> {
  const auth = buildAuth(serviceAccountJson);
  const calendar = google.calendar({ version: 'v3', auth });

  const startISO = `${bookingDate}T${bookingTime}:00+02:00`;
  const start = new Date(startISO);
  const end = new Date(start.getTime() + 60 * 60 * 1000);

  await calendar.events.insert({
    calendarId,
    requestBody: {
      summary,
      description,
      start: { dateTime: start.toISOString(), timeZone: 'Africa/Johannesburg' },
      end:   { dateTime: end.toISOString(),   timeZone: 'Africa/Johannesburg' },
    },
  });
}

async function isSlotAvailable(serviceType: string, bookingDate: string, bookingTime: string): Promise<boolean> {
  const danielJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  const danielCal  = process.env.GOOGLE_CALENDAR_ID;
  const broJson    = process.env.GOOGLE_SERVICE_ACCOUNT_JSON_BRO;
  const broCal     = process.env.GOOGLE_CALENDAR_ID_BRO;

  const checkDaniel = serviceType !== 'AI Voice Agent';
  const checkBro    = serviceType !== 'AI Automation';

  try {
    const checks: Promise<boolean>[] = [];
    if (checkDaniel && danielJson && danielCal)
      checks.push(checkOneCalendar(danielJson, danielCal, bookingDate, bookingTime));
    if (checkBro && broJson && broCal)
      checks.push(checkOneCalendar(broJson, broCal, bookingDate, bookingTime));
    if (checks.length === 0) return true;
    const results = await Promise.all(checks);
    return results.every(Boolean);
  } catch (err: any) {
    console.error('Calendar check error:', err.message);
    return true;
  }
}

async function addToCalendars(
  serviceType: string,
  name: string,
  businessName: string,
  goals: string,
  bookingDate: string,
  bookingTime: string
): Promise<void> {
  const danielJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  const danielCal  = process.env.GOOGLE_CALENDAR_ID;
  const broJson    = process.env.GOOGLE_SERVICE_ACCOUNT_JSON_BRO;
  const broCal     = process.env.GOOGLE_CALENDAR_ID_BRO;

  const addDaniel = serviceType !== 'AI Voice Agent';
  const addBro    = serviceType !== 'AI Automation';

  const summary     = `${serviceType} — ${name} (${businessName})`;
  const description = `Service: ${serviceType}\nClient: ${name}\nBusiness: ${businessName}\nGoals: ${goals}`;

  const creates: Promise<void>[] = [];
  if (addDaniel && danielJson && danielCal)
    creates.push(createCalendarEvent(danielJson, danielCal, summary, description, bookingDate, bookingTime));
  if (addBro && broJson && broCal)
    creates.push(createCalendarEvent(broJson, broCal, summary, description, bookingDate, bookingTime));

  await Promise.all(creates);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, businessName, industry, goals, serviceType, bookingDate, bookingTime } = req.body;
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Email not configured' });

  // Check calendar availability
  const available = await isSlotAvailable(serviceType, bookingDate, bookingTime);
  if (!available) {
    return res.status(200).json({
      available: false,
      message: 'That time slot is already taken. Please choose a different date or time.',
    });
  }

  const formattedDate = new Date(`${bookingDate}T${bookingTime}:00+02:00`)
    .toLocaleDateString('en-ZA', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
      timeZone: 'Africa/Johannesburg',
    });

  const formattedTime = formatTime(bookingTime);

  const adminHtml = wrap(`
    <h2 style="margin:0 0 6px;font-size:22px;font-weight:800;color:#0a1a35;">A new ${serviceType} has been booked through your system.</h2>
    <p style="margin:0 0 24px;font-size:14px;color:#64748b;">Review the details below and follow up with the client promptly.</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:10px;overflow:hidden;border:1px solid #e2e8f0;margin-bottom:28px;">
      <tr style="background:#f0f4ff;"><td colspan="2" style="padding:12px 16px;font-size:12px;font-weight:700;color:#1a3a6e;text-transform:uppercase;letter-spacing:1px;">Client Details</td></tr>
      ${row('Full Name', name)}
      ${row('Email', `<a href="mailto:${email}" style="color:#2563eb;">${email}</a>`)}
      ${row('Business', businessName)}
      ${row('Industry', industry)}
      ${row('Service', `<span style="background:#dbeafe;color:#1d4ed8;padding:3px 10px;border-radius:20px;font-size:12px;font-weight:600;">${serviceType}</span>`)}
      ${row('Date', formattedDate)}
      ${row('Time', formattedTime)}
    </table>
    <div style="background:#f8fafc;border-left:4px solid #2563eb;border-radius:0 8px 8px 0;padding:16px 20px;margin-bottom:28px;">
      <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#1a3a6e;text-transform:uppercase;letter-spacing:1px;">Goals</p>
      <p style="margin:0;font-size:14px;color:#334155;line-height:1.7;">${goals}</p>
    </div>
    <a href="mailto:${email}" style="display:inline-block;background:linear-gradient(135deg,#1d4ed8,#2563eb);color:#ffffff;font-weight:700;font-size:14px;padding:14px 28px;border-radius:8px;text-decoration:none;">Reply to Client</a>
  `);

  const clientHtml = wrap(`
    <h2 style="margin:0 0 6px;font-size:22px;font-weight:800;color:#0a1a35;">Your booking is confirmed, ${name.split(' ')[0]}!</h2>
    <p style="margin:0 0 24px;font-size:14px;color:#64748b;">Thank you for choosing ElevateAI Solutions Limited. We've received your booking and will be in touch shortly to confirm your session.</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:10px;overflow:hidden;border:1px solid #e2e8f0;margin-bottom:28px;">
      <tr style="background:#f0f4ff;"><td colspan="2" style="padding:12px 16px;font-size:12px;font-weight:700;color:#1a3a6e;text-transform:uppercase;letter-spacing:1px;">Booking Summary</td></tr>
      ${row('Service', `<span style="background:#dbeafe;color:#1d4ed8;padding:3px 10px;border-radius:20px;font-size:12px;font-weight:600;">${serviceType}</span>`)}
      ${row('Date', formattedDate)}
      ${row('Time', formattedTime)}
      ${row('Business', businessName)}
    </table>
    <div style="background:#f0f4ff;border-radius:10px;padding:20px 24px;margin-bottom:28px;">
      <p style="margin:0 0 8px;font-size:13px;font-weight:700;color:#1a3a6e;">What happens next?</p>
      <p style="margin:0;font-size:13px;color:#475569;line-height:1.9;">
        1. Our team will review your booking details.<br>
        2. You'll receive a calendar invite confirming the exact time.<br>
        3. We'll prepare a tailored agenda based on your goals.<br>
        4. Join the call ready to explore how AI can transform your business.
      </p>
    </div>
    <p style="margin:0 0 4px;font-size:13px;color:#64748b;">Questions before the session?</p>
    <a href="mailto:elevateaisolutionsagency@gmail.com" style="font-size:13px;color:#2563eb;font-weight:600;">elevateaisolutionsagency@gmail.com</a>
    <div style="margin-top:28px;padding-top:20px;border-top:1px solid #e2e8f0;">
      <p style="margin:0;font-size:13px;color:#94a3b8;">— The ElevateAI Solutions Limited Team</p>
    </div>
  `);

  try {
    await Promise.all([
      sendEmail(apiKey, getAdmins(serviceType), `New ${serviceType} Booked — ${name} (${businessName})`, adminHtml),
      sendEmail(apiKey, email, `Your ${serviceType} is Confirmed — ElevateAI Solutions Limited`, clientHtml),
      addToCalendars(serviceType, name, businessName, goals, bookingDate, bookingTime),
    ]);
    res.status(200).json({ success: true });
  } catch (err: any) {
    console.error('Email error:', err.message);
    res.status(500).json({ error: err.message });
  }
}
