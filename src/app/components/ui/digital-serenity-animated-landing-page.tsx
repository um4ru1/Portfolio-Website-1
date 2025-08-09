// DigitalSerenity.tsx

"use client";

import React, { useState, useRef, MouseEvent } from 'react';

// Penjelasan 1: Definisikan interface untuk bentuk objek ripple
interface Ripple {
  id: number;
  x: number;
  y: number;
}

const DigitalSerenity = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0, opacity: 0 });
  
  // Penjelasan 2: Gunakan interface Ripple untuk memberitahu tipe state
  const [ripples, setRipples] = useState<Ripple[]>([]);
  
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({ 
      x: e.clientX - rect.left, 
      y: e.clientY - rect.top, 
      opacity: 1 
    });
  };

  const handleMouseLeave = () => {
    setMousePosition(prev => ({ ...prev, opacity: 0 }));
  };

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // newRipple sekarang secara otomatis akan cocok dengan tipe Ripple
    const newRipple = { 
      id: Date.now(), 
      x: e.clientX - rect.left, 
      y: e.clientY - rect.top 
    };
    
    // Baris ini tidak akan error lagi karena tipenya sudah cocok
    setRipples(prev => [...prev, newRipple]);

    setTimeout(() => {
      // Filter juga tidak akan error karena 'r' sekarang dikenali sebagai tipe Ripple
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 1000);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-800 text-slate-100 font-primary overflow-hidden relative cursor-default"
    >
      {/* ... sisa kode JSX Anda tetap sama ... */}

      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <pattern id="gridReactDarkResponsive" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(100, 116, 139, 0.1)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#gridReactDarkResponsive)" />
        <line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line" style={{ animationDelay: '0.5s' }} />
        <line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line" style={{ animationDelay: '1s' }} />
        <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line" style={{ animationDelay: '1.5s' }} />
        <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line" style={{ animationDelay: '2s' }} />
      </svg>
      
      <div className="corner-element-animate top-4 left-4 sm:top-8 sm:left-8" />
      <div className="corner-element-animate top-4 right-4 sm:top-8 sm:right-8" />
      <div className="corner-element-animate bottom-4 left-4 sm:bottom-8 sm:left-8" />
      <div className="corner-element-animate bottom-4 right-4 sm:bottom-8 sm:right-8" />
      <div className="floating-element-animate" style={{ top: '25%', left: '15%', animationDelay: '0.5s' }} />
      <div className="floating-element-animate" style={{ top: '60%', left: '85%', animationDelay: '1s' }} />

      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight text-slate-50 text-decoration-animate">
          <div className="mb-4">
            <span className="word-animate" style={{ animationDelay: '0.7s' }}>Find</span>
            <span className="word-animate" style={{ animationDelay: '0.85s' }}>your</span>
            <span className="word-animate" style={{ animationDelay: '1s' }}>center</span>
          </div>
          <div className="text-xl sm:text-2xl md:text-3xl font-thin text-slate-300">
            <span className="word-animate" style={{ animationDelay: '1.4s' }}>where</span>
            <span className="word-animate" style={{ animationDelay: '1.55s' }}>peace</span>
            <span className="word-animate" style={{ animationDelay: '1.7s' }}>resides.</span>
          </div>
        </h1>
      </div>

      <div 
        className="pointer-events-none absolute w-80 h-80 rounded-full blur-2xl"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          opacity: mousePosition.opacity,
          background: 'radial-gradient(circle, rgba(156, 163, 175, 0.05), transparent 70%)',
          transform: 'translate(-50%, -50%)',
          transition: 'opacity 300ms ease-out',
        }}
      />

      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="ripple-effect absolute"
          style={{ left: ripple.x, top: ripple.y }}
        />
      ))}

    </div>
  );
};

export default DigitalSerenity;