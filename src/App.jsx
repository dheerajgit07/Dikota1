import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./Service";
import Contact from "./Contact";
import Footer from "./Footer";
import KineticBanner from "./components/KineticBanner";

const App = () => {
  const [currentTheme, setCurrentTheme] = useState("midnight");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  return (
    <div className="min-h-screen relative w-full antialiased overflow-x-hidden transition-colors duration-300">
      <Navbar currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
      
      <main className="relative w-full block">
        <div>
          <Hero />
          <KineticBanner text="DEPLOYING WEBSITES v2.6!" speed={1} direction={1} className="py-3" style={{ backgroundColor: 'var(--accent-bg-glow)' }} />
        </div>
        
        <div>
          <About />
          <KineticBanner text="LIMITED SLOTS AVAILABLE!" speed={1.5} direction={-1} className="py-3" style={{ backgroundColor: 'var(--secondary-bg-glow)' }} />
        </div>
        
        <div>
          <Service />
          <KineticBanner text="NEXT-GEN USER INTERFACES" speed={1.2} direction={1} className="py-3" style={{ backgroundColor: 'var(--accent-bg-glow)' }} />
        </div>
        
        <div>
          <Contact />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;