import React, { useEffect, useRef } from "react";
import { ArrowRight, CheckCircle, Code2, Zap } from "lucide-react";
import gsap from "gsap";
import MouseParallax from "./MouseParallax";
import SplitText3D from "./SplitText3D";

const FORM_LINK = "https://forms.gle/DPqUuF4ide9utPGj8";

const Hero = () => {
  const heroRef = useRef(null);
  const leftItemsRef = useRef([]);
  const ambientGlowRef = useRef(null);
  const promoTickerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Smooth Floating Ambient Glow Animation
      gsap.to(ambientGlowRef.current, {
        x: "30px",
        y: "-20px",
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // 2. Hardware Accelerated 3D Matrix Stagger Entry
      gsap.from(leftItemsRef.current, {
        opacity: 0,
        y: 40,
        rotateX: -20,
        stagger: 0.1,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.3
      });

      // 3. Cyber Grid Lines Entry Sequence
      gsap.from(".grid-line", {
        opacity: 0,
        stagger: 0.005,
        duration: 0.8,
        ease: "power2.out"
      });

      // 4. Advertising Ticker Infinite Loop
      gsap.to(promoTickerRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 15,
        repeat: -1
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative pt-36 pb-24 min-h-screen overflow-hidden flex flex-col justify-center bg-transparent">

      {/* Advertising Kinetic Ticker Ribbon */}
      <div className="absolute top-24 left-0 w-full overflow-hidden whitespace-nowrap py-2 border-y z-20 bg-black/40 backdrop-blur-md select-none" style={{ borderColor: 'var(--border-color)' }}>
        <div ref={promoTickerRef} className="inline-block font-gaming text-xs font-black tracking-widest uppercase text-yellow-400">
          🔥 CORE PY-ENGINE ENGAGED! 🚀 MASTER PYTHON, AI/ML CORE MODELS, AND MERN STACK IN BATCH 2026! 🔥 HIGH IMPACT ADVERTISING ALERTS ACTIVE! 🚀
        </div>
      </div>

      {/* Hardware Accelerated Tech Grid Overlay */}
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 pointer-events-none opacity-20">
        {[...Array(64)].map((_, i) => (
          <div key={i} className="grid-line border-[0.5px] w-full h-full" style={{ borderColor: 'var(--border-color)' }} />
        ))}
      </div>

      {/* Cybernetic Ambient Spatial Lighting */}
      <div
        ref={ambientGlowRef}
        className="absolute top-20 right-[-10%] w-[650px] h-[650px] blur-[180px] rounded-full pointer-events-none opacity-40 animate-pulse"
        style={{ backgroundColor: 'var(--accent-bg-glow)' }}
      />
      <div
        className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] blur-[150px] rounded-full pointer-events-none opacity-30"
        style={{ backgroundColor: 'var(--secondary-bg-glow)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full mt-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Layout Grid System */}
          <div className="space-y-8">
            <div
              ref={(el) => (leftItemsRef.current[0] = el)}
              className="inline-flex items-center glass-panel neon-border px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest cursor-default font-gaming border"
              style={{ color: 'var(--accent-text)', backgroundColor: 'var(--bg-navbar-scrolled)', borderColor: 'var(--border-color)' }}
            >
              <Zap className="w-4 h-4 mr-2 text-yellow-400 animate-bounce" />
              SYSTEM ACTIVE v2.6!
            </div>

            <div className="space-y-3">
              <SplitText3D
                as="h1"
                text="MASTER DIGITAL"
                className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.85] tracking-tighter font-gaming uppercase drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]"
                style={{ color: 'var(--text-main)' }}
                delay={0}
              />
              <SplitText3D
                as="h1"
                text="SKILLS NOW!"
                className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.85] tracking-tighter font-gaming text-transparent bg-clip-text uppercase neon-text filter drop-shadow(0 0 20px rgba(59,130,246,0.3))"
                style={{ backgroundImage: 'var(--accent-gradient)' }}
                delay={0.15}
              />
            </div>

            <p
              ref={(el) => (leftItemsRef.current[1] = el)}
              className="text-lg md:text-xl max-w-xl leading-relaxed font-medium"
              style={{ color: 'var(--text-muted)' }}
            >
              Become a certified <b style={{ color: 'var(--text-main)' }}>AI/ML Engineer</b>, <b style={{ color: 'var(--text-main)' }}>Python Pro</b>, or <b style={{ color: 'var(--text-main)' }}>MERN Stack Expert</b> with high-octane computational intelligence.
            </p>

            <div
              ref={(el) => (leftItemsRef.current[2] = el)}
              className="flex flex-col sm:flex-row gap-5 pt-2"
            >
              <a
                href={FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group px-8 py-5 font-gaming tracking-wider font-black text-base uppercase flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all hover:scale-105 active:scale-95 skew-x-[-10deg] rounded-md overflow-hidden"
                style={{ background: 'var(--accent-gradient)', color: '#fff' }}
              >
                <span className="skew-x-[10deg] flex items-center gap-2">Initialize Core <ArrowRight size={18} /></span>
                <div className="absolute inset-0 border-2 border-white/20 group-hover:border-white/60 transition-colors"></div>
              </a>

              <a
                href="https://01-port.vercel.app/"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--text-main)', borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-navbar-scrolled)' }}
                className="glass-panel border px-8 py-5 font-gaming tracking-wider font-black text-sm uppercase transition-all text-center skew-x-[-10deg] flex items-center justify-center hover:bg-white/5 hover:text-yellow-400"
              >
                <span className="skew-x-[10deg]">View Portfolio</span>
              </a>
            </div>
          </div>

          {/* Right Layout Grid System - AAA Gaming UI Panel */}
          <MouseParallax>
            <div
              className="glass-panel border p-8 md:p-10 relative rounded-[2rem] shadow-2xl overflow-hidden backdrop-blur-2xl transition-all duration-300 hover:shadow-[0_0_50px_rgba(59,130,246,0.15)]"
              style={{ backgroundColor: 'var(--bg-navbar-scrolled)', borderColor: 'var(--border-color)' }}
            >
              <div className="absolute inset-0 pointer-events-none opacity-5 mix-blend-color-dodge" style={{ backgroundImage: 'linear-gradient(to bottom right, var(--accent-bg-glow), var(--secondary-bg-glow))' }} />

              <div className="flex items-center justify-between mb-8 relative z-10 border-b pb-4" style={{ borderColor: 'var(--border-color)' }}>
                <div>
                  <h3 className="text-2xl font-black tracking-widest font-gaming uppercase" style={{ color: 'var(--text-main)' }}>
                    PROTOCOLS!
                  </h3>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 flex items-center gap-1 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" /> Core Matrix Online
                  </p>
                </div>
                <div className="p-3 border rounded-xl" style={{ backgroundColor: 'var(--bg-app)', borderColor: 'var(--border-color)' }}>
                  <Code2 className="w-5 h-5 text-yellow-400" />
                </div>
              </div>

              {/* Dynamic Python, AI/ML, MERN, Video & Music Grid Modules */}
              <div className="space-y-4 relative z-10 max-h-[380px] overflow-y-auto pr-1 custom-scrollbar">
                <Feature title="Python Core Neural Engine" desc="Object-Oriented Programming, Advanced Scripts & Functional Frameworks." />
                <Feature title="AI/ML Model Pipelines" desc="TensorFlow, Predictive Models, Neural Networks & Smart Data Engines." />
                <Feature title="MERN Architecture + AI" desc="Scalable Full-Stack Nodes with Smart AI API Layers." />
                <Feature title="Cinematic Video Editing" desc="High-Tier Post-Production, Motion Graphics, SFX & Visual Storytelling." />
                <Feature title="Music Beats & Tune Making" desc="Digital Audio Workstations, Sound Design, Rhythm Synthesis & Custom Beats." />
              </div>

              <a
                href={FORM_LINK}
                target="_blank"
                rel="noreferrer"
                className="relative group block w-full mt-8 text-center py-4 font-gaming font-black text-lg uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(0,0,0,0.4)] hover:scale-[1.02] active:scale-95 skew-x-[-5deg]"
                style={{ background: 'var(--accent-gradient)', color: '#fff' }}
              >
                <span className="skew-x-[5deg] inline-block">Deploy Node Now!</span>
              </a>
            </div>
          </MouseParallax>

        </div>
      </div>
    </section>
  );
};

const Feature = ({ title, desc }) => {
  return (
    <div className="flex items-start p-4 transition-all duration-300 transform hover:translate-x-3 border rounded-xl group" style={{ backgroundColor: 'var(--bg-app)', borderColor: 'var(--border-color)' }}>
      <div className="p-2 mr-4 border rounded-lg transition-colors group-hover:border-yellow-400" style={{ backgroundColor: 'var(--bg-navbar)', borderColor: 'var(--border-color)' }}>
        <CheckCircle className="w-5 h-5" style={{ color: 'var(--accent-text)' }} />
      </div>
      <div>
        <h4 className="font-black tracking-wider font-gaming text-sm uppercase transition-colors group-hover:text-yellow-400" style={{ color: 'var(--text-main)' }}>{title}</h4>
        <p className="text-xs mt-1 font-medium leading-relaxed" style={{ color: 'var(--text-muted)' }}>{desc}</p>
      </div>
    </div>
  );
};

export default Hero;
