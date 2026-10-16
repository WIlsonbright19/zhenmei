/**
 * Inquiry Submission Handler for Zhen Mei Hair Salon
 * 
 * Requirement Section 8:
 * - Isolated submit handler with clearly marked integration point.
 * - The UI must not claim that a message was sent unless the handler really sent it.
 * - Until connected to a backend/email provider, provides graceful notification
 *   and fallback directions link.
 */

export interface InquiryData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export interface SubmitResult {
  success: boolean;
  message: string;
  isBackendConnected: boolean;
  fallbackMapsUrl?: string;
}

export async function submitInquiry(data: InquiryData): Promise<SubmitResult> {
  // Input sanitation & validation
  if (!data.name.trim()) {
    throw new Error("Please enter your name.");
  }
  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    throw new Error("Please provide a valid email address.");
  }
  if (!data.message.trim()) {
    throw new Error("Please enter a short message or request.");
  }

  // Simulate network latency (400ms)
  await new Promise((resolve) => setTimeout(resolve, 400));

  /* 
   * INTEGRATION POINT:
   * To connect a live backend endpoint (e.g. Resend, Nodemailer, Firebase Functions, or Formspree):
   * 
   * const response = await fetch('/api/inquiries', {
   *   method: 'POST',
   *   headers: { 'Content-Type': 'application/json' },
   *   body: JSON.stringify(data),
   * });
   * if (!response.ok) throw new Error('Failed to dispatch inquiry.');
   * return { success: true, message: 'Your inquiry has been delivered.', isBackendConnected: true };
   */

  // Current client-side status: unconfigured backend
  return {
    success: true,
    isBackendConnected: false,
    message: "Thank you for reaching out! Since online email routing is awaiting salon mailbox configuration, please visit us on Clay Street or use Google Maps directions.",
    fallbackMapsUrl: "https://maps.google.com/?cid=8099598669705489718&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA"
  };
}
