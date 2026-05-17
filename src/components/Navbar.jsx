import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, Palette } from "lucide-react";
import gsap from "gsap";
import logo from "../assets/logo.jpeg";

const FORM_LINK = "https://forms.gle/DPqUuF4ide9utPGj8";

// 4 Theme Layout Configuration
const THEMES = [
  { id: "midnight", name: "Midnight", icon: "🌌" },
  { id: "daylight", name: "Daylight", icon: "☀️" },
  { id: "cyberpunk", name: "Cyberpunk", icon: "🔮" },
  { id: "forest", name: "Forest", icon: "🌿" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("midnight");
  const [showThemeDropdown, setShowThemeDropdown] = useState(false);

  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const buttonRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !event.target.closest(".theme-trigger-btn")) {
        setShowThemeDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll Listener
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync state attribute with DOM document element & trigger GSAP change flash
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
    
    // Aesthetic subtle flash sequence when switching themes
    gsap.fromTo("body", 
      { opacity: 0.92 }, 
      { opacity: 1, duration: 0.4, ease: "power2.out" }
    );
  }, [currentTheme]);

  // Entrance Animation
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2 } });
    gsap.set([logoRef.current, linksRef.current, buttonRef.current], { opacity: 0, y: -20 });

    tl.to(logoRef.current, { opacity: 1, y: 0, delay: 0.2 })
      .to(linksRef.current, { opacity: 1, y: 0, stagger: 0.08 }, "-=0.8")
      .to(buttonRef.current, { opacity: 1, y: 0 }, "-=0.6");
  }, []);

  // Dropdown Open/Close Animation (Desktop Theme Picker)
  useEffect(() => {
    if (!dropdownRef.current) return;
    if (showThemeDropdown) {
      gsap.to(dropdownRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power3.out",
        pointerEvents: "auto"
      });
    } else {
      gsap.to(dropdownRef.current, {
        opacity: 0,
        y: -10,
        scale: 0.95,
        duration: 0.2,
        ease: "power3.in",
        pointerEvents: "none"
      });
    }
  }, [showThemeDropdown]);

  // Mobile Menu Animation Open/Close
  useEffect(() => {
    if (!mobileMenuRef.current) return;
    if (isOpen) {
      gsap.to(mobileMenuRef.current, { opacity: 1, y: 0, duration: 0.4, ease: "power3.out", pointerEvents: "auto" });
      gsap.fromTo(mobileMenuRef.current.querySelectorAll(".mobile-anim"),
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, stagger: 0.06, duration: 0.3, ease: "power2.out" }
      );
    } else {
      gsap.to(mobileMenuRef.current, { opacity: 0, y: -15, duration: 0.2, ease: "power3.in", pointerEvents: "none" });
    }
  }, [isOpen]);

  // Desktop Magnetic Link Hovers
  const handleMouseMove = (e, index) => {
    const el = linksRef.current[index];
    if (!el) return;
    const rect = el.getBoundingClientRect();
    gsap.to(el, {
      x: (e.clientX - rect.left - rect.width / 2) * 0.25,
      y: (e.clientY - rect.top - rect.height / 2) * 0.25,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index) => {
    if (!linksRef.current[index]) return;
    gsap.to(linksRef.current[index], { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" });
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-[100] px-6 py-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Bar */}
        <div
          style={{
            backgroundColor: scrolled ? "var(--bg-navbar-scrolled)" : "var(--bg-navbar)",
            borderColor: "var(--border-color)",
          }}
          className={`
            flex items-center justify-between px-6 py-3 rounded-2xl border backdrop-blur-xl
            transition-all duration-500
            ${scrolled ? "shadow-2xl scale-[0.99]" : ""}
          `}
        >
          {/* LOGO */}
          <div ref={logoRef} className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <div 
                style={{ background: "var(--accent-gradient)" }}
                className="absolute inset-0 blur-md opacity-40 group-hover:opacity-100 rounded-full transition-opacity duration-300" 
              />
              <div className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden">
                <img src={logo} alt="Logo" className="w-10 h-10 object-cover rounded-full" />
              </div>
            </div>
            <span style={{ color: "var(--text-main)" }} className="font-bold text-xl tracking-tight">
              Dikota<span style={{ color: "var(--accent-text)" }}>.</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div 
            style={{ borderColor: "var(--border-color)" }} 
            className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border"
          >
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                ref={(el) => (linksRef.current[index] = el)}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
                style={{ color: "var(--text-muted)" }}
                className="px-4 py-2 text-sm font-medium rounded-full hover:text-[var(--text-main)] hover:bg-white/10 transition-colors inline-block"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Engine Interactions */}
          <div className="hidden md:flex items-center gap-4 relative">
            
            {/* Theme Trigger Button */}
            <button
              onClick={() => setShowThemeDropdown(!showThemeDropdown)}
              style={{ color: "var(--text-main)", borderColor: "var(--border-color)" }}
              className="theme-trigger-btn p-2.5 rounded-xl border bg-white/5 hover:bg-white/10 transition-all flex items-center gap-2 text-sm font-medium"
            >
              <Palette size={16} style={{ color: "var(--accent-text)" }} />
              Theme
            </button>

            {/* GSAP Managed Theme Dropdown */}
            <div
              ref={dropdownRef}
              style={{ 
                opacity: 0, y: -10, scale: 0.95, pointerEvents: "none",
                backgroundColor: "var(--bg-navbar-scrolled)", borderColor: "var(--border-color)"
              }}
              className="absolute right-[140px] top-[55px] w-48 rounded-2xl border p-2 shadow-2xl backdrop-blur-xl flex flex-col gap-1"
            >
              {THEMES.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setCurrentTheme(t.id);
                    setShowThemeDropdown(false);
                  }}
                  style={{ color: "var(--text-main)" }}
                  className={`
                    w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-3 transition-colors
                    ${currentTheme === t.id ? "bg-white/10" : "hover:bg-white/5"}
                  `}
                >
                  {/* Fixed isolation wrapper container for emoji rendering */}
                  <span className="inline-block text-base select-none initial-color" style={{ color: 'initial' }}>
                    {t.icon}
                  </span> 
                  <span>{t.name}</span>
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <a
              ref={buttonRef}
              href={FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: "var(--accent-gradient)" }}
              className="
                text-white px-5 py-2.5 rounded-xl font-bold text-sm
                hover:opacity-90 transition-all flex items-center gap-2 shadow-lg
                hover:scale-[1.02] active:scale-[0.98]
              "
            >
              Join Now <ArrowRight size={14} />
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{ color: "var(--text-main)" }}
            className="md:hidden p-2 rounded-lg"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu Container */}
        <div
          ref={mobileMenuRef}
          style={{ opacity: 0, transform: "translateY(-15px)", pointerEvents: "none" }}
          className="md:hidden absolute left-6 right-6 mt-3"
        >
          <div 
            style={{ backgroundColor: "var(--bg-navbar-scrolled)", borderColor: "var(--border-color)" }}
            className="p-6 rounded-3xl border shadow-2xl backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  style={{ color: "var(--text-main)" }}
                  className="mobile-anim text-xl font-bold block"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}

              <hr style={{ borderColor: "var(--border-color)" }} className="mobile-anim" />

              {/* Mobile Extended Theme Chooser List */}
              <div className="mobile-anim flex flex-col gap-2">
                <span style={{ color: "var(--text-muted)" }} className="text-xs font-bold tracking-wider uppercase">Select Theme</span>
                <div className="grid grid-cols-2 gap-2">
                  {THEMES.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        setCurrentTheme(t.id);
                        setIsOpen(false);
                      }}
                      style={{ 
                        color: "var(--text-main)",
                        backgroundColor: currentTheme === t.id ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.04)",
                        borderColor: currentTheme === t.id ? "var(--accent-text)" : "var(--border-color)"
                      }}
                      className="py-2.5 px-3 text-xs font-bold rounded-xl border flex items-center gap-2 transition-all"
                    >
                      {/* Fixed isolation wrapper container for emoji rendering */}
                      <span className="inline-block text-sm select-none" style={{ color: 'initial' }}>
                        {t.icon}
                      </span> 
                      <span>{t.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <a
                href={FORM_LINK}
                target="_blank"
                rel="noreferrer"
                style={{ background: "var(--accent-gradient)" }}
                className="mobile-anim text-white py-4 rounded-2xl font-bold text-center block"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;