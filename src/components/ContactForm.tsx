import React, { useState } from 'react';
import { submitInquiry, InquiryData, SubmitResult } from '../lib/submit';
import { RollingButton } from './RollingButton';
import { CheckCircle2, AlertCircle, MapPin } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<InquiryData>({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof InquiryData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<SubmitResult | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof InquiryData, string>> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name should be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please share your inquiry or service request.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const res = await submitInquiry(formData);
      setSubmitResult(res);
      setFormData({ name: '', phone: '', email: '', message: '' });
      setErrors({});
    } catch (err: any) {
      setSubmitResult({
        success: false,
        message: err.message || 'Something went wrong while submitting the form. Please try again or visit us directly.',
        isBackendConnected: false,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof InquiryData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="bg-[#fefcf8] p-6 sm:p-10 border border-[#bbb9b5]/60 flex flex-col gap-6">
      {submitResult && submitResult.success ? (
        <div
          role="status"
          aria-live="polite"
          className="p-6 bg-[#f5f3f0] border border-[#bbb9b5]/50 flex flex-col gap-4 text-sm"
        >
          <div className="flex items-center gap-2.5 text-[#1f453f] font-medium">
            <CheckCircle2 size={20} />
            <span>Thank you! Your request has been noted.</span>
          </div>
          <p className="text-[#3a4140] leading-relaxed">
            {submitResult.message}
          </p>
          {submitResult.fallbackMapsUrl && (
            <div className="pt-2">
              <a
                href={submitResult.fallbackMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#081010] text-[#fefcf8] text-xs uppercase tracking-wider font-medium hover:bg-[#3a4140] transition-colors"
              >
                <MapPin size={14} />
                <span>Open in Google Maps</span>
              </a>
            </div>
          )}
          <button
            type="button"
            onClick={() => setSubmitResult(null)}
            className="text-xs text-[#081010] underline self-start mt-2"
          >
            Send another inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
          {submitResult && !submitResult.success && (
            <div
              role="alert"
              className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2"
            >
              <AlertCircle size={16} />
              <span>{submitResult.message}</span>
            </div>
          )}

          {/* Name Field */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-name" className="text-xs uppercase tracking-wider text-[#081010] font-medium">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Eleanor Chen"
              disabled={isSubmitting}
              className={`w-full p-3.5 bg-transparent border text-sm text-[#081010] placeholder:text-[#bbb9b5] transition-colors focus:outline-none ${
                errors.name ? 'border-red-500 focus:border-red-600' : 'border-[#bbb9b5] focus:border-[#081010]'
              }`}
            />
            {errors.name && (
              <span className="text-xs text-red-600 font-normal">{errors.name}</span>
            )}
          </div>

          {/* Phone Field (Optional) */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-phone" className="text-xs uppercase tracking-wider text-[#081010] font-medium">
              Phone Number <span className="text-xs text-[#3a4140] normal-case">(optional)</span>
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. (415) 555-0192"
              disabled={isSubmitting}
              className="w-full p-3.5 bg-transparent border border-[#bbb9b5] text-sm text-[#081010] placeholder:text-[#bbb9b5] focus:border-[#081010] focus:outline-none transition-colors"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-email" className="text-xs uppercase tracking-wider text-[#081010] font-medium">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. eleanor@example.com"
              disabled={isSubmitting}
              className={`w-full p-3.5 bg-transparent border text-sm text-[#081010] placeholder:text-[#bbb9b5] transition-colors focus:outline-none ${
                errors.email ? 'border-red-500 focus:border-red-600' : 'border-[#bbb9b5] focus:border-[#081010]'
              }`}
            />
            {errors.email && (
              <span className="text-xs text-red-600 font-normal">{errors.email}</span>
            )}
          </div>

          {/* Message Field */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-message" className="text-xs uppercase tracking-wider text-[#081010] font-medium">
              Message or Service Request <span className="text-red-500">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about the service, preferred day, or questions you have..."
              disabled={isSubmitting}
              className={`w-full p-3.5 bg-transparent border text-sm text-[#081010] placeholder:text-[#bbb9b5] transition-colors focus:outline-none resize-y ${
                errors.message ? 'border-red-500 focus:border-red-600' : 'border-[#bbb9b5] focus:border-[#081010]'
              }`}
            />
            {errors.message && (
              <span className="text-xs text-red-600 font-normal">{errors.message}</span>
            )}
          </div>

          <div className="pt-2">
            <RollingButton
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              className="w-full justify-center text-center"
              ariaLabel="Send Inquiry Request"
            >
              {isSubmitting ? 'Sending Request...' : 'Send Request'}
            </RollingButton>
          </div>
        </form>
      )}
    </div>
  );
};
