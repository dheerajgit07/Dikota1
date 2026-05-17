import React, { useEffect, useRef } from "react";
import { Target, Eye, Heart, Award, Users, Clock, Shield, ThumbsUp, Database } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MouseParallax from "./MouseParallax";
import SplitText3D from "./SplitText3D";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const storyLeftRef = useRef(null);
  const coreCardsRef = useRef([]);

  useEffect(() => {
    // 3D Stacking provides the main visual entrance,
    // so we skip opacity-hiding scroll triggers here to avoid pinned container bugs.
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-20 md:py-28 relative overflow-hidden w-full bg-transparent"
    >
      <div 
        className="absolute top-1/4 right-[-10%] w-[600px] h-[600px] blur-[150px] rounded-full pointer-events-none" 
        style={{ backgroundColor: 'var(--accent-bg-glow)' }}
      />
      <div 
        className="absolute bottom-1/4 left-[-10%] w-[500px] h-[500px] blur-[150px] rounded-full pointer-events-none" 
        style={{ backgroundColor: 'var(--secondary-bg-glow)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div ref={headerRef} className="text-center mb-20">
          <div 
            className="inline-flex items-center glass-panel neon-border px-4 py-1.5 rounded-none text-sm font-bold uppercase tracking-widest font-gaming mb-4"
            style={{ color: 'var(--accent-text)' }}
          >
            <Database className="w-4 h-4 mr-2" /> Data Logs
          </div>

          <SplitText3D 
            as="h2" 
            text="CORE DIRECTIVES" 
            className="text-4xl md:text-6xl font-black mb-4 tracking-widest font-gaming uppercase drop-shadow-xl"
            style={{ color: 'var(--text-main)' }}
          />

          <p className="text-lg max-w-2xl mx-auto font-medium" style={{ color: 'var(--text-muted)' }}>
            System initialization complete. Accessing company manifest and operational parameters for optimal client deliverables.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center mb-24">
          
          <MouseParallax>
            <div ref={storyLeftRef} className="relative">
              <div className="glass-panel neon-border p-12 h-80 md:h-96 flex flex-col items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 pointer-events-none transition-colors" style={{ backgroundColor: 'var(--accent-bg-glow)' }}></div>
                <Users className="w-24 h-24 mb-6 group-hover:scale-110 transition-transform duration-500" style={{ color: 'var(--accent-text)' }} />
                <p className="text-2xl font-black tracking-widest font-gaming uppercase" style={{ color: 'var(--text-main)' }}>Alliance Formed</p>
              </div>

              <div className="absolute -bottom-6 -right-6 glass-panel border p-6" style={{ borderColor: 'var(--border-color)' }}>
                <div className="flex items-center gap-4">
                  <div className="border p-3" style={{ backgroundColor: 'var(--accent-bg-glow)', borderColor: 'var(--border-color)' }}>
                    <Award className="w-8 h-8" style={{ color: 'var(--accent-text)' }} />
                  </div>
                  <div>
                    <p className="text-3xl font-black font-gaming" style={{ color: 'var(--text-main)' }}>5+ Lvl</p>
                    <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--accent-text)' }}>XP Gained</p>
                  </div>
                </div>
              </div>
            </div>
          </MouseParallax>

          <div className="space-y-6">
            <SplitText3D 
              as="h3"
              text="ARCHIVES"
              className="text-3xl font-black font-gaming tracking-widest uppercase"
              style={{ color: 'var(--accent-text)' }}
            />

            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Welcome to the <b style={{ color: 'var(--text-main)' }}>Dikota Network</b>. A trusted terminal dedicated to providing top-tier technological enhancements.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Our operatives decode complex requirements to deploy customized protocols that drive measurable success metrics.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <span className="glass-panel px-4 py-2 text-sm font-bold border uppercase tracking-wider skew-x-[-10deg]" style={{ borderColor: 'var(--border-color)', color: 'var(--accent-text)' }}>
                <span className="skew-x-[10deg] block">500+ Nodes Secured</span>
              </span>
              <span className="glass-panel px-4 py-2 text-sm font-bold border uppercase tracking-wider skew-x-[-10deg]" style={{ borderColor: 'var(--border-color)', color: 'var(--accent-text)' }}>
                <span className="skew-x-[10deg] block">98% Integrity Maintained</span>
              </span>
            </div>
          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            { icon: <Target />, title: "Primary Objective", text: "Deploy innovative solutions with precision." },
            { icon: <Eye />, title: "Future Scope", text: "Establish global network dominance." },
            { icon: <Heart />, title: "Core Protocols", text: "Integrity, Innovation, Synchronization." },
          ].map((item, i) => (
            <MouseParallax key={i}>
              <div
                ref={(el) => (coreCardsRef.current[i] = el)}
                className="glass-panel neon-border p-8 text-center h-full transition-colors group hover:bg-[var(--accent-bg-glow)]"
              >
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6 border group-hover:rotate-45 transition-transform duration-500" style={{ backgroundColor: 'var(--accent-bg-glow)', borderColor: 'var(--border-color)' }}>
                  <div className="group-hover:-rotate-45 transition-transform duration-500" style={{ color: 'var(--accent-text)' }}>
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-black mb-3 font-gaming uppercase tracking-wider" style={{ color: 'var(--text-main)' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.text}</p>
              </div>
            </MouseParallax>
          ))}
        </div>

        <div className="glass-panel neon-border p-10 md:p-14 relative overflow-hidden">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, var(--accent-bg-glow), var(--secondary-bg-glow))' }} />
          <h3 className="text-3xl font-black text-center mb-14 font-gaming uppercase tracking-widest relative z-10" style={{ color: 'var(--text-main)' }}>
            System <span style={{ color: 'var(--accent-text)' }}>Advantages</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {[
              { icon: <Users />, title: "Elite Squad", desc: "Top-tier professionals." },
              { icon: <Clock />, title: "Rapid Deploy", desc: "Zero latency delivery." },
              { icon: <Shield />, title: "Encrypted", desc: "Max security protocols." },
              { icon: <ThumbsUp />, title: "Verified", desc: "AAA quality assured." },
            ].map((item, i) => (
              <div key={i} className="p-6 border transition-colors group" style={{ backgroundColor: 'var(--bg-app)', borderColor: 'var(--border-color)' }}>
                <div className="w-12 h-12 flex items-center justify-center mb-4 border" style={{ backgroundColor: 'var(--accent-bg-glow)', borderColor: 'var(--border-color)', color: 'var(--accent-text)' }}>
                  {item.icon}
                </div>
                <h4 className="font-bold mb-2 tracking-wide font-gaming uppercase" style={{ color: 'var(--text-main)' }}>{item.title}</h4>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;