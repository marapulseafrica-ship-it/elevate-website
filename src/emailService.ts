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
  await fetch('/api/send-booking', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
}

export async function sendContactNotification(data: {
  name: string;
  email: string;
  business: string;
  phone?: string;
  message: string;
}): Promise<void> {
  await fetch('/api/send-contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
}
