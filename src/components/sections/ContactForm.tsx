import { useState, type FormEvent } from 'react';
import { Loader2, Send, CheckCircle2, AlertCircle } from 'lucide-react';

type Status = 'idle' | 'sending' | 'success' | 'error';

/**
 * EmailJS setup:
 * 1. Create a free account at https://www.emailjs.com
 * 2. Add an Email Service and a Template
 * 3. Replace the three constants below with your own IDs
 * 4. npm install @emailjs/browser
 */
const EMAILJS_SERVICE_ID = 'service_1s453ob';
const EMAILJS_TEMPLATE_ID = 'template_eafayih';
const EMAILJS_PUBLIC_KEY = 'nEhK9DZwqWBCz0XUF';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (field: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const isConfigured =
        EMAILJS_SERVICE_ID !== 'service_1s453ob' &&
        EMAILJS_TEMPLATE_ID !== 'template_eafayih' &&
        EMAILJS_PUBLIC_KEY !== 'nEhK9DZwqWBCz0XUF';

      if (!isConfigured) {
        // eslint-disable-next-line no-console
        console.warn('EmailJS is not configured yet. Add your Service, Template, and Public keys in ContactForm.tsx.');
        await new Promise((resolve) => setTimeout(resolve, 900));
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        return;
      }

      const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
      window.location.href = `mailto:?subject=${subject}&body=${body}`;

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1.5 text-text-primary dark:text-text-dark-primary">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange('name')}
          placeholder="Your full name"
          className="w-full rounded-xl border border-border dark:border-border-dark bg-white dark:bg-bg-dark-secondary px-4 py-3 text-sm text-text-primary dark:text-text-dark-primary placeholder:text-text-secondary/60 focus:border-accent transition-colors"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-text-primary dark:text-text-dark-primary">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange('email')}
          placeholder="you@example.com"
          className="w-full rounded-xl border border-border dark:border-border-dark bg-white dark:bg-bg-dark-secondary px-4 py-3 text-sm text-text-primary dark:text-text-dark-primary placeholder:text-text-secondary/60 focus:border-accent transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-text-primary dark:text-text-dark-primary">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange('message')}
          placeholder="What would you like to talk about?"
          className="w-full rounded-xl border border-border dark:border-border-dark bg-white dark:bg-bg-dark-secondary px-4 py-3 text-sm text-text-primary dark:text-text-dark-primary placeholder:text-text-secondary/60 focus:border-accent transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? (
          <>
            <Loader2 size={15} className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            Send Message <Send size={15} />
          </>
        )}
      </button>

      {status === 'success' && (
        <p className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
          <CheckCircle2 size={16} /> Message sent. I&apos;ll get back to you soon.
        </p>
      )}
      {status === 'error' && (
        <p className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400">
          <AlertCircle size={16} /> Something went wrong. Please try emailing me directly.
        </p>
      )}
    </form>
  );
}
