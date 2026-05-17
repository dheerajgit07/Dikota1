import React, { useEffect, useRef } from "react";
import {
  Zap,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  Clock,
  MessageSquare,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MouseParallax from "./components/MouseParallax";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerRef = useRef(null);
  const mainCardRef = useRef(null);
  const gridColumnsRef = useRef([]);

  const GOOGLE_FORM = "https://forms.gle/DPqUuF4ide9utPGj8";
  const WHATSAPP = "https://wa.me/917095301077";
  const EMAIL = "mailto:Dikota147@gmail.com";

  const quickLinks = [
    { name: "Home Base", href: "#home" },
    { name: "Archives", href: "#about" },
    { name: "Modules", href: "#services" },
    { name: "Comms", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", href: "#" },
    { icon: Instagram, name: "Instagram", href: "https://www.instagram.com/dikota_13?igsh=OWJ0c2xodHllNWN6&utm_source=qr" },
    { icon: Linkedin, name: "LinkedIn", href: "https://www.linkedin.com/company/dikota-company/?viewAsMember=true" },
    { icon: Youtube, name: "YouTube", href: "https://www.youtube.com/@Dikotas" },
    { icon: MessageSquare, name: "WhatsApp", href: WHATSAPP },
  ];

  useEffect(() => {
    // 3D Stacking provides the main visual entrance,
    // so we skip opacity-hiding scroll triggers here to avoid pinned container bugs.
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden w-full z-50 pt-16"
      style={{ backgroundColor: 'var(--bg-app)', borderTop: '1px solid var(--border-color)' }}
    >
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] blur-[180px] rounded-full pointer-events-none" 
        style={{ backgroundColor: 'var(--accent-bg-glow)' }}
      />
      <div 
        className="absolute top-0 left-[-5%] w-[400px] h-[400px] blur-[150px] rounded-full pointer-events-none" 
        style={{ backgroundColor: 'var(--secondary-bg-glow)' }}
      />

      <div className="max-w-7xl mx-auto px-6 py-8 relative z-10">
        <MouseParallax>
          <div
            ref={mainCardRef}
            className="glass-panel neon-border p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none transition-colors" style={{ backgroundColor: 'var(--accent-bg-glow)' }} />
            
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 relative z-10">
              
              <div ref={(el) => (gridColumnsRef.current[0] = el)}>
                <div className="flex items-center mb-6 group cursor-pointer">
                  <Zap className="w-10 h-10 text-yellow-400 mr-2 group-hover:animate-pulse" />
                  <span className="text-3xl font-black tracking-widest font-gaming uppercase" style={{ color: 'var(--text-main)' }}>Dikota</span>
                </div>

                <p className="mb-6 leading-relaxed text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
                  Next-Gen Digital Solutions Network. Initializing world-class applications.
                </p>

                <div className="flex gap-3">
                  {socialLinks.map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 border flex items-center justify-center transition-colors duration-300 skew-x-[-10deg] hover:brightness-125"
                      style={{ backgroundColor: 'var(--bg-app)', borderColor: 'var(--border-color)', color: 'var(--accent-text)' }}
                    >
                      <social.icon className="w-4 h-4 skew-x-[10deg]" />
                    </a>
                  ))}
                </div>
              </div>

              <div ref={(el) => (gridColumnsRef.current[1] = el)}>
                <h4 className="text-lg font-black mb-6 tracking-widest font-gaming uppercase" style={{ color: 'var(--text-main)' }}>
                  Waypoints
                </h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.href}
                        className="flex items-center group text-sm font-medium transition-colors duration-200 uppercase tracking-wide hover:brightness-125"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" style={{ color: 'var(--accent-text)' }} />
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div ref={(el) => (gridColumnsRef.current[2] = el)}>
                <h4 className="text-lg font-black mb-6 tracking-widest font-gaming uppercase" style={{ color: 'var(--text-main)' }}>
                  Protocols
                </h4>
                <ul className="space-y-3 text-sm font-medium uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>
                  <li className="transition-colors cursor-pointer hover:brightness-125">Web Development</li>
                  <li className="transition-colors cursor-pointer hover:brightness-125">App Deployment</li>
                  <li className="transition-colors cursor-pointer hover:brightness-125">Interface Design</li>
                  <li className="transition-colors cursor-pointer hover:brightness-125">Growth Marketing</li>
                </ul>
              </div>

              <div ref={(el) => (gridColumnsRef.current[3] = el)}>
                <h4 className="text-lg font-black mb-6 tracking-widest font-gaming uppercase" style={{ color: 'var(--text-main)' }}>
                  Uplink Status
                </h4>
                <ul className="space-y-4 text-sm font-medium">
                  <li className="flex items-start" style={{ color: 'var(--text-muted)' }}>
                    <MapPin className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0" style={{ color: 'var(--accent-text)' }} />
                    <span>Karnal, Haryana, Earth</span>
                  </li>
                  <li className="flex items-center" style={{ color: 'var(--text-muted)' }}>
                    <Phone className="w-4 h-4 mr-3 flex-shrink-0" style={{ color: 'var(--accent-text)' }} />
                    <a href="tel:+917095301077" className="transition-colors hover:brightness-125">+91 70953 01077</a>
                  </li>
                  <li className="flex items-center" style={{ color: 'var(--text-muted)' }}>
                    <Mail className="w-4 h-4 mr-3 flex-shrink-0" style={{ color: 'var(--accent-text)' }} />
                    <a href={EMAIL} className="transition-colors break-all hover:brightness-125">Dikota147@gmail.com</a>
                  </li>
                  <li className="flex items-center" style={{ color: 'var(--text-muted)' }}>
                    <Clock className="w-4 h-4 mr-3 flex-shrink-0" style={{ color: 'var(--accent-text)' }} />
                    <span>Mon - Sat (09:00 - 19:00)</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </MouseParallax>
      </div>

      <div className="border-t py-6 mt-8" style={{ borderColor: 'var(--border-color)' }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
            © {currentYear} <span className="font-bold font-gaming" style={{ color: 'var(--accent-text)' }}>DIKOTA</span> SYSTEM ACTIVE.
          </p>

          <div className="flex gap-6 text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
            <a href="#" className="transition-colors hover:brightness-125">Privacy</a>
            <a href="#" className="transition-colors hover:brightness-125">Terms</a>
            <a href="#" className="transition-colors hover:brightness-125">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;