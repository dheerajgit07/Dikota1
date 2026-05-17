import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const KineticBanner = ({ text, speed = 1, direction = 1, className = '' }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const textRef2 = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const w = textRef.current.offsetWidth;
      
      gsap.to([textRef.current, textRef2.current], {
        x: direction > 0 ? -w : w,
        ease: 'none',
        duration: 10 / speed,
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % w)
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [speed, direction]);

  // We repeat the text multiple times to ensure the banner is filled
  const repeatedText = Array(4).fill(text).join(' \u00A0 \u2022 \u00A0 ');

  return (
    <div 
      ref={containerRef} 
      className={`w-full overflow-hidden whitespace-nowrap flex select-none ${className}`}
      style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}
    >
      <div ref={textRef} className="inline-block px-4 font-gaming text-lg tracking-widest text-[var(--accent-text)]">
        {repeatedText} &nbsp; &bull; &nbsp;
      </div>
      <div ref={textRef2} className="inline-block px-4 font-gaming text-lg tracking-widest text-[var(--accent-text)]">
        {repeatedText} &nbsp; &bull; &nbsp;
      </div>
    </div>
  );
};

export default KineticBanner;
