
import React, { useRef, useState, memo, useCallback } from 'react';
import Seo from "../components/Seo"; 
import { 
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,   
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaPaperPlane,
} from "react-icons/fa";

// Static Data moved outside component to prevent re-allocation on every render     
 

const CONTACT_INFO = [ 
  {
    title: "Email",
    value: "mmilanquery55@gmail.com",
    icon: FaEnvelope, 
    href: "mailto:mmilanquery55@gmail.com",
  },
  {
    title: "Phone",
    value: "+977 9864922756",
    icon: FaPhoneAlt,
    href: "tel:+9779864922756",
  },
  {
    title: "Location",
    value: "Nepal",
    icon: FaMapMarkerAlt,
    href: "https://maps.google.com/?q=Nepal",
  },
];

const SOCIAL_LINKS = [
  {
    icon: FaGithub,
    href: "https://github.com/mmilanquery55-dev",
    label: "Visit Milan's GitHub Profile",
  },  
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/your-profile", // Updated for SEO
    label: "Connect with Milan on LinkedIn",
  },
  {
    icon: FaFacebook,
    href: "https://facebook.com/your-profile",
    label: "Follow Milan on Facebook",
  },
];

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  // Optimized Email Function with Dynamic Import
  const sendEmail = useCallback(async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      // PERFORMANCE: Dynamic import reduces initial bundle size
      const emailjs = (await import('@emailjs/browser')).default;
      
      const publickey = "XOsxqEvYc64tl_um9";
      const service_id = "service_s3tluap";
      const template_id = "template_u03znir";

      await emailjs.sendForm(service_id, template_id, form.current, publickey);
      
      alert("Message sent successfully! ✅");
      form.current.reset();
    } catch (error) {
      alert("Failed to send message. Please try again. ❌");
      console.error('CONTACT_FORM_ERROR:', error.text);
    } finally {
      setIsSending(false);
    }
  }, []);

  return (
    <section id="contact" className="relative overflow-hidden bg-slate-950 py-24 text-white" aria-labelledby="contact-heading">
      <Seo
        title="Contact Me | Milan Bishwakarma"
        description="Get in touch with Milan Bishwakarma for AI development, Machine Learning projects, or Full Stack Web Development inquiries."
      />
      
      {/* Background Effects - Optimized with pointer-events-none to prevent interaction interference */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <header className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-cyan-400">
            Contact
          </span>
          <h2 id="contact-heading" className="mt-6 text-5xl font-black">
            Let's Work
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"> Together</span>
          </h2>
        </header>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left Side - Info */}
          <aside>
            <h3 className="mb-8 text-3xl font-bold">Get In Touch</h3>
            <div className="space-y-6">
              {CONTACT_INFO.map((item) => (
                <a 
                  key={item.title} 
                  href={item.href} 
                  target={item.title === "Location" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 will-change-transform"
                >
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-xl shadow-lg shadow-cyan-500/20">
                    <item.icon aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wide text-gray-400">{item.title}</p>
                    <h4 className="text-lg font-semibold">{item.value}</h4>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <nav className="mt-10" aria-label="Social Media Links">
              <h4 className="mb-5 text-xl font-semibold">Follow Me</h4>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((item) => (
                  <a 
                    key={item.label} 
                    href={item.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={item.label}
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:bg-cyan-500 hover:scale-110 active:scale-95 will-change-transform"
                  >
                    <item.icon className="text-xl" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </nav>
          </aside>

          {/* Right Side - Form */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="mb-8 text-3xl font-bold">Send a Message</h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="relative">
                <label htmlFor="from_name" className="sr-only">Your Name</label>
                <input
                  id="from_name"
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50"
                />
              </div>

              <div className="relative">
                <label htmlFor="from_email" className="sr-only">Your Email</label>
                <input
                  id="from_email"
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50"
                />
              </div>

              <div className="relative">
                <label htmlFor="subject" className="sr-only">Subject</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50"
                />
              </div>

              <div className="relative">
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Write your message..."
                  required
                  className="w-full resize-none rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 font-bold text-white shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 will-change-transform"
              >
                <FaPaperPlane className={isSending ? "animate-bounce" : ""} aria-hidden="true" />
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Contact); 