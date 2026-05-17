import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SplitText3D = ({ text, className = '', as: Component = 'div', delay = 0, style = {} }) => {
  const containerRef = useRef(null);

  // Split text into words then characters manually
  const words = text.split(' ').map((word, wordIndex) => {
    return (
      <span key={wordIndex} className="inline-block whitespace-nowrap overflow-visible">
        {word.split('').map((char, charIndex) => (
          <span 
            key={charIndex} 
            className="split-char inline-block will-change-transform origin-bottom"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {char}
          </span>
        ))}
        <span className="inline-block">&nbsp;</span>
      </span>
    );
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const chars = container.querySelectorAll('.split-char');

    let ctx = gsap.context(() => {
      // Initial state
      gsap.set(chars, { 
        rotateX: -90,
        opacity: 0,
        y: 20
      });

      ScrollTrigger.create({
        trigger: container,
        start: 'top 85%',
        onEnter: () => {
          gsap.to(chars, {
            rotateX: 0,
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.02,
            ease: 'back.out(1.7)',
            delay: delay
          });
        }
      });
    }, container);

    return () => ctx.revert();
  }, [delay]);

  return (
    <Component 
      ref={containerRef} 
      className={className} 
      style={{ perspective: '400px', ...style }}
    >
      {words}
    </Component>
  );
};

export default SplitText3D;
