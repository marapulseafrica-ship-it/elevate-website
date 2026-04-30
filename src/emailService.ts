const RESEND_API_KEY = import.meta.env.VITE_RESEND_API_KEY as string;

export async function notifyAdmin(subject: string, html: string): Promise<void> {
  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'ElevateAI Website <noreply@elevateaisolutionsagency.com>',
        to: 'danielkimara7@gmail.com',
        subject,
        html,
      }),
    });
  } catch {
    // Non-blocking — don't fail the form if email notification fails
  }
}
