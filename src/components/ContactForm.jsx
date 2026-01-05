import React, { useState, useRef } from 'react';
import { Send, CheckCircle, Mail, User, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <section className="py-24 bg-slate-900 flex justify-center items-center px-6">
        <div className="max-w-xl w-full bg-white p-12 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-center animate-in zoom-in">
          <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-200">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-4">Message Received!</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Thanks for reaching out, Ndefo. I'll get back to you within 24 hours.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-600 transition-all flex items-center gap-2 mx-auto"
          >
            Send Another <ArrowRight size={18} />
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Accents for Depth */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="lg:col-span-2 text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles size={14} /> Available for Projects
            </div>
            <h2 className="text-5xl font-black mb-6 tracking-tight">Ready to start a <span className="text-blue-500">new project?</span></h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Whether you're looking for institutional digitization, network infrastructure, or custom software—I'm ready to help.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-blue-400"><Mail size={20}/></div>
                <span>agozilim.ndefo@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Right Side: Solid Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-white/20">
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-900 font-bold text-sm mb-3">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input 
                        type="text" 
                        required
                        className="w-full bg-slate-50 border-2 border-slate-100 focus:border-blue-600 focus:bg-white rounded-2xl pl-12 pr-6 py-4 outline-none transition-all text-slate-900"
                        placeholder="Ndefo Agozilim"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-900 font-bold text-sm mb-3">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input 
                        type="email" 
                        required
                        className="w-full bg-slate-50 border-2 border-slate-100 focus:border-blue-600 focus:bg-white rounded-2xl pl-12 pr-6 py-4 outline-none transition-all text-slate-900"
                        placeholder="ndefo@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-900 font-bold text-sm mb-3">Message</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-5 text-slate-400" size={18} />
                    <textarea 
                      rows="4"
                      required
                      className="w-full bg-slate-50 border-2 border-slate-100 focus:border-blue-600 focus:bg-white rounded-2xl pl-12 pr-6 py-4 outline-none transition-all text-slate-900 resize-none"
                      placeholder="How can I help you today?"
                    ></textarea>
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3 active:scale-95"
                >
                  {loading ? <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div> : <>Send Message <Send size={18} /></>}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;