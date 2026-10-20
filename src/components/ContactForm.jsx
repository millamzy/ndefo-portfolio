import React, { useState, useRef } from 'react';
import { Send, CheckCircle, Mail, User, MessageSquare, Sparkles, Loader2, Linkedin, Twitter, Github } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const form = useRef();

  // ---------------------------------------------------------
  // 📧 EmailJS Configuration
  // ---------------------------------------------------------
  // You need to create an account at https://www.emailjs.com/
  // and replace these placeholders with your actual IDs.
  // 1. Service ID: Created in "Email Services" tab
  // 2. Template ID: Created in "Email Templates" tab (use variables {{user_name}}, {{user_email}}, {{message}})
  // 3. Public Key: Found in "Account" -> "API Keys"
  // ---------------------------------------------------------
  const SERVICE_ID = "service_mn6ymsb";
  const TEMPLATE_ID = "template_4se3hrt";
  const PUBLIC_KEY = "2lTHvw_HQcvzUTu3R";

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Using EmailJS to send the form
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log('SUCCESS!', result.text);
        setLoading(false);
        setIsSubmitted(true);
      }, (error) => {
        console.log('FAILED...', error.text);
        setLoading(false);
        // For demo purposes, we'll confirm submission even if it fails due to invalid keys, 
        // but show an alert so the developer knows.
        if (error.text.includes("The user_id parameter is required")) {
          alert("EmailJS is not configured yet! Please add your Service ID, Template ID, and Public Key in ContactForm.jsx");
        } else {
          setError("Failed to send message. Please try again later.");
        }
      });
  };

  if (isSubmitted) {
    return (
      <section className="py-24 flex justify-center items-center px-6">
        <div className="max-w-md w-full glass-panel p-12 rounded-[2rem] text-center animate-pulse-glow border border-green-500/20 bg-green-900/10">
          <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30">
            <CheckCircle size={32} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Message Received!</h2>
          <p className="text-slate-400 mb-8 text-sm leading-relaxed">
            Thanks for reaching out. I'll get back to you shortly.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="w-full bg-white/5 border border-white/10 text-white py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all"
          >
            Send Another
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">

      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-slate-300 font-mono text-[10px] uppercase tracking-widest mb-4">
            <Sparkles size={12} className="text-yellow-400" /> Open for Opportunities
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">extraordinary.</span></h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Whether you need a full-stack application, network architecture, or digital strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-12">

          {/* Contact Info */}
          <div className="md:col-span-5 space-y-8">
            <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-colors group">
              <Mail className="text-blue-500 mb-4 group-hover:scale-110 transition-transform" size={28} />
              <h3 className="text-xl font-bold text-white mb-1">Email Me</h3>
              <a href="mailto:agozilim.ndefo@gmail.com" className="text-slate-400 hover:text-white transition-colors text-sm break-all">agozilim.ndefo@gmail.com</a>
            </div>

            <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition-colors group">
              <User className="text-indigo-500 mb-4 group-hover:scale-110 transition-transform" size={28} />
              <h3 className="text-xl font-bold text-white mb-1">Socials</h3>
              <p className="text-slate-400 text-sm mb-4">Find me on LinkedIn & Twitter/X.</p>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://www.linkedin.com/in/agozilim-ndefo-66690214b"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 hover:bg-blue-600 hover:text-white transition-all text-xs font-semibold"
                >
                  <Linkedin size={12} />
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com/agozilim"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-600/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-600 hover:text-white transition-all text-xs font-semibold"
                >
                  <Twitter size={12} />
                  Twitter/X
                </a>
                <a
                  href="https://github.com/millamzy"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-white hover:text-slate-950 transition-all text-xs font-semibold"
                >
                  <Github size={12} />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-7">
            <form ref={form} onSubmit={handleSubmit} className="space-y-6 bg-white/[0.02] p-8 md:p-10 rounded-[2.5rem] border border-white/5 shadow-2xl backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-4">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full bg-black/20 border border-white/10 focus:border-blue-500 hover:border-white/20 rounded-2xl px-6 py-4 text-white outline-none transition-all placeholder:text-slate-600"
                    placeholder="John Doe"
                    disabled={loading}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-4">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full bg-black/20 border border-white/10 focus:border-blue-500 hover:border-white/20 rounded-2xl px-6 py-4 text-white outline-none transition-all placeholder:text-slate-600"
                    placeholder="john@example.com"
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-4">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full bg-black/20 border border-white/10 focus:border-blue-500 hover:border-white/20 rounded-2xl px-6 py-4 text-white outline-none transition-all resize-none placeholder:text-slate-600"
                  placeholder="Tell me about your project..."
                  disabled={loading}
                ></textarea>
              </div>

              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm text-center">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <Loader2 className="animate-spin" size={16} />
                    Sending...
                  </div>
                ) : (
                  <>Send Message <Send size={14} className="group-hover:translate-x-1 transition-transform" /></>
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