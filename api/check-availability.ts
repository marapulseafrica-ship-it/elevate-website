import type { VercelRequest, VercelResponse } from '@vercel/node';
import { google } from 'googleapis';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { bookingDate, bookingTime } = req.body;
  const serviceAccountJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  const calendarId = process.env.GOOGLE_CALENDAR_ID;

  if (!serviceAccountJson || !calendarId) {
    // If calendar not configured, allow all bookings
    return res.status(200).json({ available: true });
  }

  try {
    const credentials = JSON.parse(serviceAccountJson);
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/calendar.readonly'],
    });

    const calendar = google.calendar({ version: 'v3', auth });

    // Build start and end times (1-hour slot, SAST = UTC+2)
    const startISO = `${bookingDate}T${bookingTime}:00+02:00`;
    const startDate = new Date(startISO);
    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000);

    const freeBusy = await calendar.freebusy.query({
      requestBody: {
        timeMin: startDate.toISOString(),
        timeMax: endDate.toISOString(),
        timeZone: 'Africa/Johannesburg',
        items: [{ id: calendarId }],
      },
    });

    const busy = freeBusy.data.calendars?.[calendarId]?.busy ?? [];
    const available = busy.length === 0;

    res.status(200).json({ available });
  } catch (err: any) {
    console.error('Calendar check error:', err.message);
    // On error, allow booking (don't block user)
    res.status(200).json({ available: true });
  }
}
