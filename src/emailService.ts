export interface BookingResult {
  success?: boolean;
  available?: boolean;
  message?: string;
  error?: string;
  calendarError?: string;
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
}): Promise<BookingResult> {
  const res = await fetch('/api/send-booking', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function sendContactNotification(data: {
  name: string;
  email: string;
  business: string;
  phone?: string;
  message: string;
}): Promise<{ success?: boolean; error?: string }> {
  const res = await fetch('/api/send-contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}
