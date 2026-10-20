import React, { useState, useRef } from 'react';
import { Send, CheckCircle, Mail, User, Sparkles, Loader2, Linkedin, Twitter, Github } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const form = useRef();

  // EmailJS Configuration
  const SERVICE_ID = "service_mn6ymsb";
  const TEMPLATE_ID = "template_4se3hrt";
  const PUBLIC_KEY = "2lTHvw_HQcvzUTu3R";

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log('SUCCESS!', result.text);
        setLoading(false);
        setIsSubmitted(true);
      }, (error) => {
        console.log('FAILED...', error.text);
        setLoading(false);
        if (error.text && error.text.includes("The user_id parameter is required")) {
          alert("EmailJS is not configured yet! Please check Service ID, Template ID, and Public Key.");
        } else {
          setError("Failed to send message. Please reach out directly to agozilim.ndefo@gmail.com");
        }
      });
  };

  if (isSubmitted) {
    return (
      <section className="py-24 flex justify-center items-center px-6 bg-[#071611]">
        <div className="max-w-md w-full p-12 rounded-[2.5rem] text-center border border-[#bbf443]/30 bg-[#0a2319] shadow-2xl">
          <div className="w-16 h-16 bg-[#163f2f] text-[#bbf443] rounded-full flex items-center justify-center mx-auto mb-6 border border-[#bbf443]/40 shadow-[0_0_20px_rgba(187,244,67,0.3)]">
            <CheckCircle size={32} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Message Received!</h2>
          <p className="text-emerald-200/80 mb-8 text-sm leading-relaxed">
            Thanks for reaching out, Ndefo will get back to you shortly.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="w-full bg-[#bbf443] text-[#071611] py-3.5 rounded-full font-black uppercase tracking-wider text-xs hover:bg-[#cbfd50] transition-all shadow-lg shadow-[#bbf443]/20"
          >
            Send Another
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 relative bg-[#071611] overflow-hidden">

      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#bbf443]/10 rounded-full blur-[140px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#164131]/20 rounded-full blur-[140px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#bbf443]/30 bg-[#123829] text-[#bbf443] font-mono text-xs uppercase tracking-widest mb-2">
            <Sparkles size={12} className="text-[#bbf443]" /> OPEN FOR OPPORTUNITIES
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Let's build something{' '}
            <span className="font-script text-5xl md:text-7xl text-[#bbf443] inline-block -rotate-1 drop-shadow-[0_0_25px_rgba(187,244,67,0.4)]">
              extraordinary.
            </span>
          </h2>
          <p className="text-emerald-100/70 max-w-xl mx-auto text-base">
            Whether you need enterprise full-stack development, network infrastructure, or digital strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-10">

          {/* Contact Info Cards */}
          <div className="md:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="p-8 rounded-[2rem] bg-gradient-to-b from-[#0c261d] to-[#071712] border border-emerald-500/20 hover:border-[#bbf443]/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#143d2c] text-[#bbf443] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-[#bbf443]/20">
                <Mail size={22} />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Email Me</h3>
              <a
                href="mailto:agozilim.ndefo@gmail.com"
                className="text-emerald-300 hover:text-[#bbf443] transition-colors text-sm break-all font-mono"
              >
                agozilim.ndefo@gmail.com
              </a>
            </div>

            {/* Socials Card */}
            <div className="p-8 rounded-[2rem] bg-gradient-to-b from-[#0c261d] to-[#071712] border border-emerald-500/20 hover:border-[#bbf443]/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#143d2c] text-[#bbf443] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-[#bbf443]/20">
                <User size={22} />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Social Profiles</h3>
              <p className="text-emerald-200/70 text-sm mb-4">Connect with me on LinkedIn, Twitter/X & GitHub.</p>
              
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://www.linkedin.com/in/agozilim-ndefo-66690214b"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#123829] border border-emerald-500/25 text-emerald-200 hover:bg-[#bbf443] hover:text-[#071611] transition-all text-xs font-bold"
                >
                  <Linkedin size={13} />
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com/agozilim"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#123829] border border-emerald-500/25 text-emerald-200 hover:bg-[#bbf443] hover:text-[#071611] transition-all text-xs font-bold"
                >
                  <Twitter size={13} />
                  Twitter/X
                </a>
                <a
                  href="https://github.com/millamzy"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#123829] border border-emerald-500/25 text-emerald-200 hover:bg-[#bbf443] hover:text-[#071611] transition-all text-xs font-bold"
                >
                  <Github size={13} />
                  GitHub
                </a>
              </div>
            </div>

          </div>

          {/* Form */}
          <div className="md:col-span-7">
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="space-y-6 bg-gradient-to-b from-[#0c261d] to-[#071812] p-8 md:p-10 rounded-[2.5rem] border border-emerald-500/20 shadow-2xl backdrop-blur-sm"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-emerald-300 ml-3">Your Name</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full bg-[#071611]/90 border border-emerald-500/25 focus:border-[#bbf443] hover:border-emerald-500/40 rounded-2xl px-6 py-4 text-white outline-none transition-all placeholder:text-emerald-700/60"
                    placeholder="John Doe"
                    disabled={loading}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-emerald-300 ml-3">Your Email</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full bg-[#071611]/90 border border-emerald-500/25 focus:border-[#bbf443] hover:border-emerald-500/40 rounded-2xl px-6 py-4 text-white outline-none transition-all placeholder:text-emerald-700/60"
                    placeholder="john@example.com"
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-emerald-300 ml-3">Your Message</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full bg-[#071611]/90 border border-emerald-500/25 focus:border-[#bbf443] hover:border-emerald-500/40 rounded-2xl px-6 py-4 text-white outline-none transition-all resize-none placeholder:text-emerald-700/60"
                  placeholder="Tell me about your project or inquiry..."
                  disabled={loading}
                ></textarea>
              </div>

              {error && (
                <div className="p-4 bg-red-900/30 border border-red-500/30 rounded-xl text-red-300 text-sm text-center">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#bbf443] hover:bg-[#cbfd50] text-[#071611] py-4 rounded-2xl font-black uppercase tracking-wider text-xs transition-all shadow-xl shadow-[#bbf443]/20 flex items-center justify-center gap-2.5 group disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99]"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <Loader2 className="animate-spin" size={16} />
                    Sending Message...
                  </div>
                ) : (
                  <>
                    Send Message
                    <Send size={15} className="group-hover:translate-x-1.5 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactForm;