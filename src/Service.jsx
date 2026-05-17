import React, { useEffect, useRef } from "react";
import {
  ArrowRight,
  Code2,
  Video,
  Palette,
  TrendingUp,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MouseParallax from "./components/MouseParallax";
import SplitText3D from "./components/SplitText3D";

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  const containerRef = useRef(null);
  const gridCardsRef = useRef([]);
  const ctaBoxRef = useRef(null);

  const services = [
    {
      title: "MERN Stack Development",
      description: "Master full-stack web development with AI coding assistants.",
      features: ["HTML, CSS & Tailwind", "JavaScript & React", "Node & MongoDB"],
      icon: Code2,
      badge: "AI Integrated",
    },
    {
      title: "Pro Video Editing",
      description: "From basics to advanced cinematic storytelling.",
      features: ["Premiere Pro", "AI Voice & Scripting", "Viral Content Strategy"],
      icon: Video,
      badge: "Trending",
    },
    {
      title: "Fashion Designing",
      description: "Creative fashion design with AI trend analysis.",
      features: ["Textile Design", "Digital Sketching", "AI Styling"],
      icon: Palette,
      badge: "New",
    },
    {
      title: "Business Promotion",
      description: "Grow your brand with AI-powered marketing.",
      features: ["Social Media Growth", "SEO & Leads", "AI Automation"],
      icon: TrendingUp,
      badge: "Bestseller",
    },
  ];

  useEffect(() => {
    // 3D Stacking provides the main visual entrance,
    // so we skip opacity-hiding scroll triggers here to avoid pinned container bugs.
  }, []);

  return (
    <section
      id="services"
      ref={containerRef}
      className="py-24 relative overflow-hidden w-full bg-transparent"
    >
      <div 
        className="absolute top-0 right-[-5%] w-[550px] h-[550px] blur-[170px] rounded-full pointer-events-none" 
        style={{ backgroundColor: 'var(--accent-bg-glow)' }}
      />
      <div 
        className="absolute bottom-0 left-[-5%] w-[450px] h-[450px] blur-[150px] rounded-full pointer-events-none" 
        style={{ backgroundColor: 'var(--secondary-bg-glow)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20">
          <div 
            className="inline-flex items-center glass-panel neon-border px-4 py-1.5 rounded-none text-sm font-bold uppercase tracking-widest font-gaming mb-4"
            style={{ color: 'var(--accent-text)' }}
          >
            <Sparkles className="w-4 h-4 mr-2" /> Program Subroutines
          </div>

          <SplitText3D 
            as="h2"
            text="TRAINING MODULES"
            className="text-4xl md:text-6xl font-black mb-4 tracking-widest font-gaming uppercase drop-shadow-xl"
            style={{ color: 'var(--text-main)' }}
          />

          <p className="text-lg max-w-2xl mx-auto font-medium" style={{ color: 'var(--text-muted)' }}>
            Equip yourself with high-demand tech stacks through our accelerated training environments.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <MouseParallax key={index}>
              <div
                ref={(el) => (gridCardsRef.current[index] = el)}
                className="glass-panel neon-border p-8 transition-all h-full flex flex-col group relative overflow-hidden"
              >
                <div className="absolute inset-0 pointer-events-none transition-colors" style={{ backgroundColor: 'var(--accent-bg-glow)' }} />
                
                <span 
                  className="self-end mb-4 text-[10px] font-black uppercase px-2.5 py-1 border tracking-widest relative z-10"
                  style={{ backgroundColor: 'var(--bg-app)', borderColor: 'var(--border-color)', color: 'var(--accent-text)' }}
                >
                  {service.badge}
                </span>

                <div 
                  className="w-16 h-16 border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10 skew-x-[-10deg]"
                  style={{ backgroundColor: 'var(--accent-bg-glow)', borderColor: 'var(--border-color)', color: 'var(--accent-text)' }}
                >
                  <service.icon className="w-8 h-8 skew-x-[10deg]" />
                </div>

                <h3 className="text-xl font-black mb-3 tracking-wider font-gaming uppercase relative z-10" style={{ color: 'var(--text-main)' }}>{service.title}</h3>
                <p className="text-sm mb-6 flex-grow relative z-10" style={{ color: 'var(--text-muted)' }}>
                  {service.description}
                </p>

                <div className="space-y-3 mb-8 relative z-10">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-xs font-bold" style={{ color: 'var(--text-main)' }}>
                      <CheckCircle2 className="w-4 h-4 mr-2 flex-shrink-0" style={{ color: 'var(--accent-text)' }} />
                      <span style={{ opacity: 0.8 }}>{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  className="w-full py-3 border font-gaming font-black uppercase text-xs transition-all duration-300 flex items-center justify-center gap-2 skew-x-[-10deg] group/btn relative z-10 hover:brightness-125"
                  style={{ backgroundColor: 'var(--accent-bg-glow)', borderColor: 'var(--border-color)', color: 'var(--accent-text)' }}
                >
                  <span className="skew-x-[10deg] flex items-center">
                    Initialize <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </MouseParallax>
          ))}
        </div>

        <MouseParallax>
          <div
            ref={ctaBoxRef}
            className="mt-24 p-12 md:p-16 text-center glass-panel neon-border relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
            <div 
              className="absolute top-0 right-0 w-72 h-72 blur-[130px] rounded-full pointer-events-none" 
              style={{ backgroundColor: 'var(--secondary-bg-glow)' }}
            />

            <h3 className="text-3xl md:text-5xl font-black mb-6 tracking-widest font-gaming uppercase relative z-10" style={{ color: 'var(--text-main)' }}>
              Ready to <span className="animate-pulse" style={{ color: 'var(--accent-text)' }}>Level Up?</span>
            </h3>

            <p className="text-lg mb-10 max-w-2xl mx-auto relative z-10" style={{ color: 'var(--text-muted)' }}>
              Build skills, grow career, and master technology with the Dikota System.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-20">
              <button 
                className="text-white px-10 py-4 font-gaming font-black uppercase tracking-widest hover:brightness-110 transition-all duration-200 skew-x-[-10deg] shadow-lg"
                style={{ background: 'var(--accent-gradient)' }}
              >
                <span className="skew-x-[10deg] block">Contact Admission</span>
              </button>

              <button 
                className="bg-transparent border px-10 py-4 font-gaming font-black uppercase tracking-widest transition-all duration-200 skew-x-[-10deg] hover:bg-white/5"
                style={{ borderColor: 'var(--border-color)', color: 'var(--accent-text)' }}
              >
                <span className="skew-x-[10deg] block">Download Syllabus</span>
              </button>
            </div>
          </div>
        </MouseParallax>

      </div>
    </section>
  );
};

export default Service;