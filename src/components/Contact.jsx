import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaCopy,
  FaCheck,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [copiedField, setCopiedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Copy to clipboard helper
  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  // Form validations
  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const whatsappNumber = "919528634480";
    const text = `Hello Love,

I visited your portfolio and wanted to reach out:

*Name:* ${formData.name}
*Email:* ${formData.email}
*Subject:* ${formData.subject}
*Message:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Open WhatsApp link in a new tab
      window.open(whatsappUrl, "_blank");

      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 800);
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden py-20 px-6 bg-transparent text-slate-900 dark:text-slate-100 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Get in{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="w-12 h-1 bg-purple-500 mx-auto rounded-full" />
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            Have an opportunity, a project proposal, or just want to say hi? Reach out using the details below.
          </p>
        </div>

        {/* Double Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Left Column: Direct info cards */}
          <div className="md:col-span-5 flex flex-col gap-6 justify-center">
            
            {/* Email Card */}
            <div className="group relative flex items-center justify-between p-5 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 backdrop-blur-md hover:border-purple-500/40 transition-all duration-300">
              <div className="flex items-center gap-4 min-w-0">
                <div className="p-3 bg-purple-500/10 dark:bg-purple-500/15 text-purple-650 dark:text-purple-400 rounded-xl text-lg">
                  <FaEnvelope />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Email Recruiter
                  </h4>
                  <a
                    href="mailto:sainilove910@gmail.com"
                    className="text-sm font-bold text-slate-750 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors break-all"
                  >
                    sainilove910@gmail.com
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard("sainilove910@gmail.com", "email")}
                className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-450 hover:text-slate-850 dark:hover:text-white transition-colors"
                title="Copy to clipboard"
              >
                {copiedField === "email" ? <FaCheck className="text-emerald-500 text-xs sm:text-sm" /> : <FaCopy className="text-xs sm:text-sm" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="group relative flex items-center justify-between p-5 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 backdrop-blur-md hover:border-purple-500/40 transition-all duration-300">
              <div className="flex items-center gap-4 min-w-0">
                <div className="p-3 bg-purple-500/10 dark:bg-purple-500/15 text-purple-650 dark:text-purple-400 rounded-xl text-lg">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Call / Whatsapp
                  </h4>
                  <a
                    href="tel:+919528634480"
                    className="text-sm font-bold text-slate-750 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    +91 9528634480
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard("+91 9528634480", "phone")}
                className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-450 hover:text-slate-850 dark:hover:text-white transition-colors"
                title="Copy to clipboard"
              >
                {copiedField === "phone" ? <FaCheck className="text-emerald-500 text-xs sm:text-sm" /> : <FaCopy className="text-xs sm:text-sm" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="group relative flex items-center p-5 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 backdrop-blur-md hover:border-purple-500/40 transition-all duration-300">
              <div className="flex items-center gap-4 min-w-0">
                <div className="p-3 bg-purple-500/10 dark:bg-purple-500/15 text-purple-650 dark:text-purple-400 rounded-xl text-lg">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Location
                  </h4>
                  <p className="text-sm font-bold text-slate-750 dark:text-slate-200 leading-normal">
                    Roorkee, Uttarakhand, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Icons row */}
            <div className="flex items-center justify-center md:justify-start gap-4 pt-4 text-xl">
              <a
                href="https://github.com/LoveSaini100"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-950 dark:hover:border-white text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-xl shadow-sm transition-all duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/love-saini-b877aa277"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 rounded-xl shadow-sm transition-all duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/love_saini_881/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-pink-500 text-slate-600 dark:text-slate-400 hover:text-pink-500 dark:hover:text-pink-400 rounded-xl shadow-sm transition-all duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/919528634480"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp Chat"
                className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 rounded-xl shadow-sm transition-all duration-300"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Right Column: Recruiter Message Form */}
          <div className="md:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="relative p-6 sm:p-8 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 backdrop-blur-md space-y-5"
            >
              {/* Form success banner */}
              {submitSuccess && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-semibold tracking-wide flex items-center gap-2.5 animate-fade-in-up">
                  <FaCheck className="text-base" />
                  <span>Your message has been sent successfully! I will reach out soon.</span>
                </div>
              )}

              {/* Name & Email in grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-450 dark:text-slate-400">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-950/40 border text-sm focus:outline-none transition-all duration-300 ${
                      errors.name
                        ? "border-rose-500/80 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/30"
                        : "border-slate-250 dark:border-slate-800 focus:border-purple-500 dark:focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20"
                    }`}
                    placeholder="Enter your name"
                  />
                  {errors.name && <span className="text-[11px] text-rose-500 font-medium">{errors.name}</span>}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-450 dark:text-slate-400">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-950/40 border text-sm focus:outline-none transition-all duration-300 ${
                      errors.email
                        ? "border-rose-500/80 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/30"
                        : "border-slate-250 dark:border-slate-800 focus:border-purple-500 dark:focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20"
                    }`}
                    placeholder="you@example.com"
                  />
                  {errors.email && <span className="text-[11px] text-rose-500 font-medium">{errors.email}</span>}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-slate-455 dark:text-slate-400">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-950/40 border text-sm focus:outline-none transition-all duration-300 ${
                    errors.subject
                      ? "border-rose-500/80 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/30"
                      : "border-slate-250 dark:border-slate-800 focus:border-purple-500 dark:focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20"
                  }`}
                  placeholder="Subject of discussion"
                />
                {errors.subject && <span className="text-[11px] text-rose-500 font-medium">{errors.subject}</span>}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-455 dark:text-slate-400">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-950/40 border text-sm focus:outline-none transition-all duration-300 resize-none ${
                    errors.message
                      ? "border-rose-500/80 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/30"
                      : "border-slate-250 dark:border-slate-800 focus:border-purple-500 dark:focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20"
                  }`}
                  placeholder="Describe your job opportunity or project details..."
                />
                {errors.message && <span className="text-[11px] text-rose-500 font-medium">{errors.message}</span>}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-650 hover:from-purple-550 hover:to-indigo-550 disabled:from-purple-400 disabled:to-indigo-400 text-white rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-550/20 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <FaPaperPlane className="text-xs" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
