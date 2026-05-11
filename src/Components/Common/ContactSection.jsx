import React, { useState } from 'react';
import Container from '../Layout/Container';

const WHATSAPP_NUMBER = '918086736161'; // +91 80867 36161

const initialForm = { name: '', email: '', phone: '+91 ', subject: '', message: '' };
const initialErrors = { name: '', email: '', phone: '', subject: '', message: '' };

function validate(fields) {
  const errors = { ...initialErrors };
  let valid = true;

  if (!fields.name.trim()) {
    errors.name = 'Full name is required.';
    valid = false;
  } else if (fields.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.';
    valid = false;
  }

  if (!fields.email.trim()) {
    errors.email = 'Email address is required.';
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    errors.email = 'Please enter a valid email address.';
    valid = false;
  }

  if (!fields.phone.trim() || fields.phone.trim() === '+91') {
    errors.phone = 'Phone number is required.';
    valid = false;
  } else {
    const cleaned = fields.phone.replace(/\s/g, '');
    if (!/^\+91\d{10}$/.test(cleaned)) {
      errors.phone = 'Please enter a valid 10-digit mobile number.';
      valid = false;
    }
  }

  if (!fields.subject.trim()) {
    errors.subject = 'Subject is required.';
    valid = false;
  } else if (fields.subject.trim().length < 3) {
    errors.subject = 'Subject must be at least 3 characters.';
    valid = false;
  }

  if (!fields.message.trim()) {
    errors.message = 'Message is required.';
    valid = false;
  } else if (fields.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.';
    valid = false;
  }

  return { errors, valid };
}

const InfoItem = ({ icon, label, value, href }) => (
  <a
    href={href || '#'}
    target={href ? '_blank' : undefined}
    rel="noopener noreferrer"
    className="flex items-start gap-4 group"
  >
    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#DBBE77]/15 flex items-center justify-center text-[#DBBE77] group-hover:bg-[#DBBE77]/30 transition-colors">
      {icon}
    </div>
    <div>
      <p className="text-white/50 text-xs uppercase tracking-widest mb-1">{label}</p>
      <p className="text-white font-medium text-sm leading-snug">{value}</p>
    </div>
  </a>
);

const InputField = ({ label, id, type = 'text', value, onChange, error, placeholder, rows }) => {
  const base =
    'w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none transition-all focus:ring-2 focus:ring-[#DBBE77]/50';
  const borderClass = error ? 'border-red-400' : 'border-white/10 focus:border-[#DBBE77]/60';

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-white/70 text-xs font-semibold uppercase tracking-widest">
        {label}
      </label>
      {rows ? (
        <textarea
          id={id}
          rows={rows}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${base} ${borderClass} resize-none`}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${base} ${borderClass}`}
        />
      )}
      {error && <p className="text-red-400 text-xs mt-0.5">{error}</p>}
    </div>
  );
};

const ContactSection = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    let value = e.target.value;
    
    if (field === 'phone') {
      // Prevent deleting the +91 prefix
      if (!value.startsWith('+91 ')) {
        // If they try to delete part of it, restore it
        value = '+91 ' + value.replace(/^\+91\s?/, '').replace(/[^0-9]/g, '');
      } else {
        // Only allow digits after the prefix
        const prefix = '+91 ';
        const rest = value.slice(prefix.length).replace(/[^0-9]/g, '');
        value = prefix + rest;
      }
      
      // Limit to 10 digits after prefix
      if (value.length > 14) {
        value = value.slice(0, 14);
      }
    }

    setForm((prev) => ({ ...prev, [field]: value }));
    // Clear error on change
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { errors: newErrors, valid } = validate(form);
    if (!valid) {
      setErrors(newErrors);
      return;
    }

    // Build WhatsApp message
    const text = encodeURIComponent(
      `Hello Befirst Enterprises! \n\n` +
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone}\n` +
      `Subject: ${form.subject}\n\n` +
      `Message:\n${form.message}`
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
    setSubmitted(true);
    setForm(initialForm);
    setErrors(initialErrors);

    // Reset success banner after 5s
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact-form" className="bg-[#1E1E4B] py-16 md:py-24 relative overflow-hidden">

      {/* Decorative blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#DBBE77]/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#5B5B9F]/10 blur-3xl pointer-events-none" />

      <Container>
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#DBBE77] text-sm font-semibold uppercase tracking-[0.25em] mb-3">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-white leading-tight">
            Let's Start a Conversation
          </h2>
          <p className="text-white mt-4 max-w-xl mx-auto text-sm md:text-base">
            Ready to grow your business? Reach out and our team will get back to you promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 lg:items-stretch">

          {/* ---- Left: Map ---- */}
          <div className="lg:col-span-2 flex flex-col gap-4 h-full">
            <div>
              <h3 className="text-white text-xl font-bold mb-2">Find Us Here</h3>
              <div className="w-12 h-1 rounded-full bg-[#DBBE77]" />
            </div>

            {/* Google Maps Embed — grows to fill column height */}
            <div className="w-full rounded-2xl overflow-hidden border-2 border-[#DBBE77]/30 shadow-xl flex-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.97784465154!2d75.81138487584211!3d11.263038750027938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65b57f953715d%3A0xa2020ebd24358643!2sFinedge%20Innovations%20LLP!5e0!3m2!1sen!2sin!4v1778481427736!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '300px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Befirst Enterprises Location"
              />
            </div>
          </div>

          {/* ---- Right: Form ---- */}
          <div className="lg:col-span-3 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm">

            {/* Success Banner */}
            {submitted && (
              <div className="mb-6 flex items-center gap-3 bg-green-500/15 border border-green-500/40 text-green-400 text-sm px-4 py-3 rounded-xl">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Message sent! You've been redirected to WhatsApp. We'll respond shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <InputField
                  label="Full Name"
                  id="contact-name"
                  value={form.name}
                  onChange={handleChange('name')}
                  error={errors.name}
                  placeholder="John Doe"
                />
                <InputField
                  label="Email Address"
                  id="contact-email"
                  type="email"
                  value={form.email}
                  onChange={handleChange('email')}
                  error={errors.email}
                  placeholder="john@example.com"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <InputField
                  label="Phone Number"
                  id="contact-phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange('phone')}
                  error={errors.phone}
                  placeholder="XXXXX XXXXX"
                />
                <InputField
                  label="Subject"
                  id="contact-subject"
                  value={form.subject}
                  onChange={handleChange('subject')}
                  error={errors.subject}
                  placeholder="How can we help?"
                />
              </div>

              <InputField
                label="Message"
                id="contact-message"
                value={form.message}
                onChange={handleChange('message')}
                error={errors.message}
                placeholder="Tell us more about your project or inquiry..."
                rows={5}
              />

              <button
                type="submit"
                className="w-full sm:w-auto self-start flex items-center justify-center bg-[#DBBE77] hover:bg-[#c9a85c] text-[#0d0d2a] font-bold px-10 py-3.5 rounded-xl transition-colors text-sm shadow-lg shadow-[#DBBE77]/20 mt-1"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
