import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const MouseParallax = ({ children, className = '' }) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    let ctx = gsap.context(() => {
      // Setup initial perspective
      gsap.set(container, { perspective: 1200 });
      gsap.set(content, { transformStyle: 'preserve-3d' });
    });

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Calculate rotation based on cursor position relative to center
      const rotateX = ((y - centerY) / centerY) * -10; // Max 10 deg
      const rotateY = ((x - centerX) / centerX) * 10;
      
      gsap.to(content, {
        rotateX,
        rotateY,
        duration: 0.5,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(content, {
        rotateX: 0,
        rotateY: 0,
        duration: 1,
        ease: 'elastic.out(1, 0.3)',
        overwrite: 'auto'
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      ctx.revert();
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className={`w-full h-full ${className}`}>
      <div ref={contentRef} className="w-full h-full will-change-transform">
        {children}
      </div>
    </div>
  );
};

export default MouseParallax;
