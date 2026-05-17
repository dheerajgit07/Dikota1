import React, { useState, useEffect, useRef } from "react";
import {
  Phone,
  Mail,
  Send,
  MessageSquare,
  CheckCircle,
  Terminal,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MouseParallax from "./components/MouseParallax";
import SplitText3D from "./components/SplitText3D";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const containerRef = useRef(null);
  const formBoxRef = useRef(null);
  const infoCardsRef = useRef([]);

  useEffect(() => {
    // 3D Stacking provides the main visual entrance,
    // so we skip opacity-hiding scroll triggers here to avoid pinned container bugs.
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappURL = `https://wa.me/917095301077?text=${encodeURIComponent(
      `Hello Dikota Team 👋\n\nName: ${formData.name}\nEmail: ${formData.email}\nCourse: ${formData.subject}\n\nMessage:\n${formData.message}`
    )}`;
    window.open(whatsappURL, "_blank");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  return (
    <section id="contact" ref={containerRef} className="py-24 relative overflow-hidden w-full bg-transparent min-h-screen flex items-center">
      <div 
        className="absolute top-0 right-[-5%] w-[550px] h-[550px] blur-[170px] rounded-full pointer-events-none" 
        style={{ backgroundColor: 'var(--accent-bg-glow)' }}
      />
      <div 
        className="absolute bottom-0 left-[-5%] w-[450px] h-[450px] blur-[150px] rounded-full pointer-events-none" 
        style={{ backgroundColor: 'var(--secondary-bg-glow)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="text-center mb-16">
          <div 
            className="inline-flex items-center glass-panel neon-border px-4 py-1.5 rounded-none text-sm font-bold uppercase tracking-widest font-gaming mb-4"
            style={{ color: 'var(--accent-text)' }}
          >
            <Terminal className="w-4 h-4 mr-2" />
            Comms Channel
          </div>
          <SplitText3D 
            as="h2" 
            text="ESTABLISH LINK" 
            className="text-4xl md:text-6xl font-black mb-4 tracking-widest font-gaming uppercase drop-shadow-xl" 
            style={{ color: 'var(--text-main)' }}
          />
          <p className="text-lg font-medium" style={{ color: 'var(--text-muted)' }}>Initiate contact protocols for enrollment or inquiries.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <MouseParallax>
            <div ref={formBoxRef} className="p-8 md:p-10 glass-panel neon-border relative overflow-hidden group">
              <div className="absolute inset-0 pointer-events-none transition-colors" style={{ backgroundColor: 'var(--accent-bg-glow)', opacity: 0.5 }} />
              
              {submitted ? (
                <div className="text-center py-24 animate-pulse relative z-10">
                  <div className="w-20 h-20 bg-green-500/20 border border-green-500/50 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </div>
                  <h4 className="text-2xl font-black font-gaming tracking-widest text-white uppercase">Link Established</h4>
                  <p className="text-green-400 mt-2 font-gaming">Redirecting to Secure Channel...</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <input 
                      type="text" name="name" value={formData.name} onChange={handleChange} required 
                      placeholder="Operative Name" 
                      className="w-full px-5 py-4 border outline-none font-gaming tracking-wide uppercase text-sm" 
                      style={{ backgroundColor: 'var(--bg-app)', borderColor: 'var(--border-color)', color: 'var(--text-main)' }}
                    />
                    <input 
                      type="email" name="email" value={formData.email} onChange={handleChange} required 
                      placeholder="Secure Comm (Email)" 
                      className="w-full px-5 py-4 border outline-none font-gaming tracking-wide uppercase text-sm" 
                      style={{ backgroundColor: 'var(--bg-app)', borderColor: 'var(--border-color)', color: 'var(--text-main)' }}
                    />
                  </div>
                  <select 
                    name="subject" value={formData.subject} onChange={handleChange} required 
                    className="w-full px-5 py-4 border outline-none font-gaming tracking-wide uppercase text-sm appearance-none"
                    style={{ backgroundColor: 'var(--bg-app)', borderColor: 'var(--border-color)', color: 'var(--text-main)' }}
                  >
                    <option value="" style={{ backgroundColor: 'var(--bg-app)' }}>Select Directive</option>
                    <option value="MERN Stack" style={{ backgroundColor: 'var(--bg-app)' }}>MERN Stack Module</option>
                    <option value="Video Editing" style={{ backgroundColor: 'var(--bg-app)' }}>Video Editing Module</option>
                    <option value="Fashion Design" style={{ backgroundColor: 'var(--bg-app)' }}>Fashion Design Module</option>
                  </select>
                  <textarea 
                    name="message" value={formData.message} onChange={handleChange} required rows="4" 
                    placeholder="Transmit details..." 
                    className="w-full px-5 py-4 border outline-none resize-none font-gaming tracking-wide uppercase text-sm" 
                    style={{ backgroundColor: 'var(--bg-app)', borderColor: 'var(--border-color)', color: 'var(--text-main)' }}
                  />
                  <button 
                    type="submit" 
                    className="w-full text-white py-4 font-black text-lg uppercase font-gaming tracking-widest shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 skew-x-[-10deg]"
                    style={{ background: 'var(--accent-gradient)' }}
                  >
                    <span className="skew-x-[10deg] flex items-center gap-2">Transmit Data <Send className="w-5 h-5" /></span>
                  </button>
                </form>
              )}
            </div>
          </MouseParallax>

          <div className="flex flex-col gap-6 w-full">
            <div className="grid sm:grid-cols-2 gap-6">
              {[ { icon: Phone, title: "Voice Comm", data: "+91 70953 01077" }, { icon: Mail, title: "Data Stream", data: "dikotaofficial@gmail.com" } ].map((info, idx) => (
                <MouseParallax key={idx}>
                  <div 
                    ref={(el) => (infoCardsRef.current[idx] = el)} 
                    className="glass-panel neon-border p-6 h-full transition-colors group"
                  >
                    <div 
                      className="w-12 h-12 flex items-center justify-center mb-4 border group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: 'var(--accent-bg-glow)', borderColor: 'var(--border-color)', color: 'var(--accent-text)' }}
                    >
                      <info.icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-black mb-2 tracking-widest font-gaming uppercase" style={{ color: 'var(--text-main)' }}>{info.title}</h4>
                    <p className="text-sm tracking-wide" style={{ color: 'var(--text-muted)' }}>{info.data}</p>
                  </div>
                </MouseParallax>
              ))}
            </div>

            <MouseParallax>
              <div 
                ref={(el) => (infoCardsRef.current[2] = el)} 
                className="glass-panel border p-8 text-center group overflow-hidden relative"
                style={{ borderColor: 'rgba(34, 197, 94, 0.4)' }}
              >
                <div className="absolute inset-0 transition-colors pointer-events-none" style={{ backgroundColor: 'rgba(34, 197, 94, 0.05)' }} />
                <div 
                  className="w-16 h-16 flex items-center justify-center mx-auto mb-4 border transition-transform group-hover:scale-110 duration-300 skew-x-[-10deg]"
                  style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', borderColor: 'rgba(34, 197, 94, 0.4)' }}
                >
                  <MessageSquare className="w-8 h-8 text-green-400 skew-x-[10deg]" />
                </div>
                <h4 className="text-2xl font-black mb-2 tracking-widest font-gaming uppercase relative z-10" style={{ color: 'var(--text-main)' }}>Direct Uplink</h4>
                <p className="mb-6 text-sm relative z-10 font-gaming uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>Initiate instant support protocol</p>
                <a 
                  href="https://wa.me/917095301077" target="_blank" rel="noreferrer" 
                  className="bg-green-500 text-black px-10 py-4 font-gaming font-black uppercase tracking-widest inline-block shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all skew-x-[-10deg] relative z-10 hover:brightness-110"
                >
                  <span className="skew-x-[10deg] block">Start Chat</span>
                </a>
              </div>
            </MouseParallax>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;