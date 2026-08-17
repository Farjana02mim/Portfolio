import { useState, FormEvent, ChangeEvent, FocusEvent, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Send, 
  Github, 
  Linkedin, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  ExternalLink,
  MessageSquare,
  Sparkles,
  Loader2,
  RefreshCw,
  ArrowRight,
  FolderGit2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ContactProps {
  isDark: boolean;
}

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function Contact({ isDark }: ContactProps) {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = personalInfo.email || '[Your Email]';
  const hasValidRecipient = !!emailAddress && emailAddress !== '[Your Email]';

  const handleCopyEmail = () => {
    if (hasValidRecipient) {
      navigator.clipboard.writeText(emailAddress);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const validateField = (name: keyof FormState, value: string): string | undefined => {
    const trimmed = value.trim();
    switch (name) {
      case 'name':
        if (!trimmed) return 'Name is required';
        if (trimmed.length < 2) return 'Name must be at least 2 characters';
        return undefined;
      case 'email':
        if (!trimmed) return 'Email address is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return 'Please enter a valid email address';
        return undefined;
      case 'subject':
        if (!trimmed) return 'Subject is required';
        return undefined;
      case 'message':
        if (!trimmed) return 'Message is required';
        if (trimmed.length < 10) return 'Message must be at least 10 characters';
        return undefined;
      default:
        return undefined;
    }
  };

  const validateAll = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    (Object.keys(formData) as Array<keyof FormState>).forEach((field) => {
      const err = validateField(field, formData[field]);
      if (err) {
        newErrors[field] = err;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const err = validateField(name as keyof FormState, value);
      setErrors((prev) => ({ ...prev, [name]: err }));
    }
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const err = validateField(name as keyof FormState, value);
    setErrors((prev) => ({ ...prev, [name]: err }));
  };

  /**
   * REAL, WORKING SUBMISSION (no backend / API key required):
   * Builds a `mailto:` link pre-filled with the visitor's name, email,
   * subject, and message, and opens the visitor's own default email
   * client (Gmail, Outlook, Apple Mail, etc.) with everything ready to
   * send. The visitor just clicks "Send" in their own mail app.
   *
   * To upgrade this later to a fully in-page send (no mail client popup),
   * swap the block below for an EmailJS or Formspree call, e.g.:
   *   await emailjs.send('service_id', 'template_id', formData, 'public_key');
   *   // or
   *   await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   *     method: 'POST',
   *     headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
   *     body: JSON.stringify(formData),
   *   });
   */
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setTouched({ name: true, email: true, subject: true, message: true });

    if (!validateAll()) {
      return;
    }

    if (!hasValidRecipient) {
      setSubmitError('Contact email is not configured yet. Please try again later.');
      return;
    }

    setIsSubmitting(true);

    try {
      const mailBody = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
      const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(mailBody)}`;

      // Opens the visitor's default mail client with the message pre-filled.
      window.location.href = mailtoLink;

      // Small delay so the submitting state is visible before showing success.
      await new Promise((resolve) => setTimeout(resolve, 700));

      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch {
      setIsSubmitting(false);
      setSubmitError('Something went wrong opening your email client. Please email me directly instead.');
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTouched({});
    setErrors({});
    setSubmitError(null);
    setIsSubmitted(false);
  };

  const scrollToProjects = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="contact"
      className={`py-20 lg:py-28 relative scroll-mt-16 overflow-hidden ${
        isDark ? 'text-slate-100' : 'text-slate-900'
      }`}
    >
      {/* Background Ambient Lighting */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/30 backdrop-blur-md">
            <MessageSquare size={13} className="text-blue-400" />
            <span>Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display">
            Let's Connect
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            I'm always interested in learning, building new projects, and connecting with people in technology. Feel free to reach out.
          </p>
        </motion.div>

        {/* Contact Layout: Contact Information Cards (Left) & Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-20 sm:mb-24">
          
          {/* Left Column: 3 Contact Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Card 1: Email */}
            <div className={`p-5 sm:p-6 rounded-3xl border backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:shadow-lg ${
              isDark 
                ? 'bg-slate-950/80 border-slate-800/90 shadow-black/30' 
                : 'bg-white border-slate-200 shadow-md hover:shadow-blue-500/5'
            }`}>
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold font-display">Email</h3>
                    <p className={`text-xs mt-0.5 mb-1.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      Reach out directly via email
                    </p>
                    <a
                      href={`mailto:${emailAddress}`}
                      className="text-xs sm:text-sm font-semibold text-blue-400 hover:text-blue-300 hover:underline transition-colors font-mono break-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                      aria-label={`Send email to ${emailAddress}`}
                    >
                      {emailAddress}
                    </a>
                  </div>
                </div>

                {hasValidRecipient && (
                  <button
                    onClick={handleCopyEmail}
                    aria-label="Copy email address to clipboard"
                    className={`p-2.5 rounded-2xl border text-xs transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer shrink-0 ${
                      isDark
                        ? 'border-slate-800 bg-slate-900 text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-800'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 shadow-2xs'
                    }`}
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                )}
              </div>
            </div>

            {/* Card 2: GitHub */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Explore Farjana Akter Mim's projects and code on GitHub"
              className={`p-5 sm:p-6 rounded-3xl border backdrop-blur-xl flex items-center justify-between transition-all duration-300 group hover:border-blue-500/40 hover:scale-[1.01] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer block ${
                isDark 
                  ? 'bg-slate-950/80 border-slate-800/90 shadow-black/30' 
                  : 'bg-white border-slate-200 shadow-md hover:shadow-blue-500/5'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div className={`p-3 rounded-2xl border shrink-0 transition-colors ${
                  isDark ? 'bg-slate-900 border-slate-800 text-slate-200 group-hover:text-white' : 'bg-slate-100 border-slate-200 text-slate-800'
                }`}>
                  <Github size={22} />
                </div>
                <div>
                  <h3 className="text-sm font-bold font-display">GitHub</h3>
                  <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Explore my projects and code
                  </p>
                  <span className="text-xs font-mono text-blue-400 mt-1 inline-block">
                    @Farjana02mim
                  </span>
                </div>
              </div>

              <div className={`p-2 rounded-xl border transition-colors ${
                isDark ? 'border-slate-800 text-slate-400 group-hover:text-blue-400 group-hover:border-blue-500/30' : 'border-slate-200 text-slate-500 group-hover:text-blue-600'
              }`}>
                <ExternalLink size={16} />
              </div>
            </a>

            {/* Card 3: LinkedIn */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with Farjana Akter Mim professionally on LinkedIn"
              className={`p-5 sm:p-6 rounded-3xl border backdrop-blur-xl flex items-center justify-between transition-all duration-300 group hover:border-blue-500/40 hover:scale-[1.01] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer block ${
                isDark 
                  ? 'bg-slate-950/80 border-slate-800/90 shadow-black/30' 
                  : 'bg-white border-slate-200 shadow-md hover:shadow-blue-500/5'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
                  <Linkedin size={22} />
                </div>
                <div>
                  <h3 className="text-sm font-bold font-display">LinkedIn</h3>
                  <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Connect with me professionally
                  </p>
                  <span className="text-xs font-mono text-blue-400 mt-1 inline-block">
                    farjana-akter-mim
                  </span>
                </div>
              </div>

              <div className={`p-2 rounded-xl border transition-colors ${
                isDark ? 'border-slate-800 text-slate-400 group-hover:text-blue-400 group-hover:border-blue-500/30' : 'border-slate-200 text-slate-500 group-hover:text-blue-600'
              }`}>
                <ExternalLink size={16} />
              </div>
            </a>

          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className={`p-6 sm:p-8 lg:p-9 rounded-3xl border backdrop-blur-2xl transition-all ${
              isDark 
                ? 'bg-slate-950/85 border-slate-800/90 shadow-2xl shadow-black/40' 
                : 'bg-white border-slate-200 shadow-xl'
            }`}>
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="submitted-state"
                    initial={{ opacity: 0, scale: 0.96, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: -10 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="text-center py-8 sm:py-10 space-y-4"
                  >
                    <div className="w-16 h-16 rounded-3xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                      <CheckCircle2 size={34} />
                    </div>
                    
                    <div className="space-y-2 max-w-md mx-auto">
                      <h3 className="text-xl sm:text-2xl font-bold font-display tracking-tight">
                        Almost There!
                      </h3>
                      <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                        Your email client should have opened with your message pre-filled — just hit send there to reach me. If nothing opened, email me directly at{' '}
                        <a
                          href={`mailto:${emailAddress}`}
                          className="font-semibold text-blue-400 hover:text-blue-300 hover:underline font-mono break-all"
                        >
                          {emailAddress}
                        </a>
                        .
                      </p>
                    </div>

                    <div className="pt-4 flex justify-center">
                      <button
                        onClick={handleReset}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md shadow-blue-600/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
                      >
                        <RefreshCw size={14} />
                        <span>Send Another Message</span>
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-4" key="contact-form">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name Field */}
                      <div>
                        <label 
                          htmlFor="contact-name"
                          className={`block text-xs font-semibold mb-1.5 ${
                            isDark ? 'text-slate-300' : 'text-slate-700'
                          }`}
                        >
                          Name <span className="text-red-400" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          required
                          aria-required="true"
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? 'contact-name-error' : undefined}
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full px-4 py-3 text-xs sm:text-sm rounded-2xl border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                            errors.name
                              ? 'border-red-500/80 bg-red-500/5 focus-visible:ring-red-500'
                              : isDark
                                ? 'bg-slate-900/80 border-slate-800 text-slate-100 placeholder-slate-500 focus:border-blue-500/50'
                                : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-400'
                          }`}
                        />
                        {errors.name && (
                          <p id="contact-name-error" className="flex items-center gap-1 text-red-400 text-[11px] mt-1 font-medium" role="alert">
                            <AlertCircle size={12} />
                            <span>{errors.name}</span>
                          </p>
                        )}
                      </div>

                      {/* Email Field */}
                      <div>
                        <label 
                          htmlFor="contact-email"
                          className={`block text-xs font-semibold mb-1.5 ${
                            isDark ? 'text-slate-300' : 'text-slate-700'
                          }`}
                        >
                          Email <span className="text-red-400" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          aria-required="true"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'contact-email-error' : undefined}
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full px-4 py-3 text-xs sm:text-sm rounded-2xl border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                            errors.email
                              ? 'border-red-500/80 bg-red-500/5 focus-visible:ring-red-500'
                              : isDark
                                ? 'bg-slate-900/80 border-slate-800 text-slate-100 placeholder-slate-500 focus:border-blue-500/50'
                                : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-400'
                          }`}
                        />
                        {errors.email && (
                          <p id="contact-email-error" className="flex items-center gap-1 text-red-400 text-[11px] mt-1 font-medium" role="alert">
                            <AlertCircle size={12} />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label 
                        htmlFor="contact-subject"
                        className={`block text-xs font-semibold mb-1.5 ${
                          isDark ? 'text-slate-300' : 'text-slate-700'
                        }`}
                      >
                        Subject <span className="text-red-400" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-subject"
                        name="subject"
                        type="text"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.subject}
                        aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                        placeholder="How can I help?"
                        value={formData.subject}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-3 text-xs sm:text-sm rounded-2xl border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                          errors.subject
                            ? 'border-red-500/80 bg-red-500/5 focus-visible:ring-red-500'
                            : isDark
                              ? 'bg-slate-900/80 border-slate-800 text-slate-100 placeholder-slate-500 focus:border-blue-500/50'
                              : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-400'
                        }`}
                      />
                      {errors.subject && (
                        <p id="contact-subject-error" className="flex items-center gap-1 text-red-400 text-[11px] mt-1 font-medium" role="alert">
                          <AlertCircle size={12} />
                          <span>{errors.subject}</span>
                        </p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div>
                      <label 
                        htmlFor="contact-message"
                        className={`block text-xs font-semibold mb-1.5 ${
                          isDark ? 'text-slate-300' : 'text-slate-700'
                        }`}
                      >
                        Message <span className="text-red-400" aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        required
                        aria-required="true"
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'contact-message-error' : undefined}
                        placeholder="Write your message..."
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-3 text-xs sm:text-sm rounded-2xl border transition-colors resize-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                          errors.message
                            ? 'border-red-500/80 bg-red-500/5 focus-visible:ring-red-500'
                            : isDark
                              ? 'bg-slate-900/80 border-slate-800 text-slate-100 placeholder-slate-500 focus:border-blue-500/50'
                              : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-400'
                        }`}
                      />
                      {errors.message && (
                        <p id="contact-message-error" className="flex items-center gap-1 text-red-400 text-[11px] mt-1 font-medium" role="alert">
                          <AlertCircle size={12} />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Form-level submit error (e.g. recipient not configured) */}
                    {submitError && (
                      <p className="flex items-center gap-1.5 text-red-400 text-xs font-medium" role="alert">
                        <AlertCircle size={13} className="shrink-0" />
                        <span>{submitError}</span>
                      </p>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-sm bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-lg shadow-blue-600/25 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          <span>Opening Your Email App...</span>
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                    <p className={`text-[11px] text-center ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                      This opens your own email app with the message pre-filled — nothing is sent from this site directly.
                    </p>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>

        {/* FINAL CALL-TO-ACTION AREA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className={`relative rounded-3xl sm:rounded-[32px] p-8 sm:p-12 lg:p-14 border overflow-hidden text-center backdrop-blur-2xl transition-all ${
            isDark 
              ? 'bg-gradient-to-b from-slate-900/90 via-slate-950/90 to-slate-950 border-slate-800/90 shadow-2xl shadow-black/50' 
              : 'bg-gradient-to-b from-blue-50/80 via-white to-white border-blue-100 shadow-xl'
          }`}
        >
          {/* Ambient Lighting Gradients */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-32 bg-blue-500/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 right-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 backdrop-blur-md">
              <Sparkles size={13} className="text-blue-400" />
              <span>Opportunities & Collaboration</span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display">
              Let's Build Something Great
            </h3>

            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              I'm currently learning, experimenting, and building projects as a CSE student. I'm always open to meaningful opportunities, collaborations, and technical conversations.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-600/35 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
              >
                <FolderGit2 size={16} />
                <span>View My Projects</span>
                <ArrowRight size={15} />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Farjana Akter Mim on LinkedIn"
                className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-sm border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer ${
                  isDark
                    ? 'border-slate-800 bg-slate-900/90 text-slate-200 hover:bg-slate-800 hover:text-white hover:border-slate-700'
                    : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-400 shadow-xs'
                }`}
              >
                <Linkedin size={16} className="text-blue-400" />
                <span>Connect on LinkedIn</span>
                <ExternalLink size={14} className="text-slate-400" />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
