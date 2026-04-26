const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;
const API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

/**
 * Sends a booking notification to the configured Telegram chat.
 *
 * @param {Object} data - Booking form data.
 * @param {string} data.name - Client full name.
 * @param {string} data.email - Client email address.
 * @param {string} data.phone - Client phone number.
 * @param {string} data.time - Preferred meeting time.
 * @param {Object} data.date - Selected date.
 * @param {number} data.date.day - Day of month.
 * @param {number} data.date.month - Month index (0-based).
 * @param {number} data.date.year - Full year.
 * @returns {Promise<boolean>} Whether the message was sent successfully.
 */
export async function sendBookingNotification({ name, email, phone, time, date }) {
  const formattedDay = String(date.day).padStart(2, '0');
  const formattedMonth = String(date.month + 1).padStart(2, '0');

  const message = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Date: ${formattedDay}.${formattedMonth}.${date.year}`,
    `Time: ${time}`,
    `Submitted: ${new Date().toLocaleString()}`,
  ].join('\n');

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: message }),
    });

    return response.ok;
  } catch (error) {
    console.error('Failed to send booking notification:', error);
    return false;
  }
}
