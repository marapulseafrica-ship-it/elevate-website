
import React, { useState, useEffect } from 'react';
import { supabase } from '../src/supabaseClient';

interface HeroProps {
  onConsult?: () => void;
  onBook?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onConsult, onBook }) => {
  const [activeRestaurants, setActiveRestaurants] = useState<number | null>(null);

  useEffect(() => {
    supabase.rpc('get_public_stats').then(({ data }) => {
      if (data?.active_restaurants) setActiveRestaurants(Number(data.active_restaurants));
    });
  }, []);

  return (
    <section id="home" className="relative bg-[#0a1a35] pt-24 pb-48 overflow-hidden">
      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      {/* Background abstract elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Next Gen Business Intelligence
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
            Empowering Africa with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Intelligent AI systems</span>
          </h1>
          <p className="text-xl text-blue-100/70 font-light mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Automate workflows, accelerate operations, and scale your business with smart AI systems designed for the unique challenges of the African market.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <button
              onClick={onBook}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:scale-105"
            >
              Book a Call
            </button>
            <button
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold transition-all backdrop-blur-sm flex items-center gap-2"
              onClick={onConsult}
            >
              Book a consultation
            </button>
          </div>
          {activeRestaurants !== null && activeRestaurants > 0 && (
            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-300 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Trusted by {activeRestaurants}+ businesses across Africa
            </div>
          )}
        </div>
        
        <div className="flex-1 relative w-full max-w-xl">
           <div className="relative aspect-square flex items-center justify-center animate-float">
              {/* Higher Fidelity Data Growth SVG */}
              <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-[0_0_50px_rgba(59,130,246,0.25)]">
                <defs>
                  <linearGradient id="columnGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{stopColor:'#3b82f6', stopOpacity:0.8}} />
                    <stop offset="100%" style={{stopColor:'#1e40af', stopOpacity:0.2}} />
                  </linearGradient>
                  <filter id="neon">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                
                {/* 3D-Style Pillars */}
                <g opacity="0.8">
                  <rect x="100" y="320" width="40" height="80" rx="4" fill="url(#columnGrad)" className="animate-pulse" style={{ animationDelay: '0s' }} />
                  <rect x="180" y="240" width="40" height="160" rx="4" fill="url(#columnGrad)" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <rect x="260" y="160" width="40" height="240" rx="4" fill="url(#columnGrad)" className="animate-pulse" style={{ animationDelay: '1s' }} />
                  <rect x="340" y="80" width="40" height="320" rx="4" fill="url(#columnGrad)" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
                </g>

                {/* Glowing Path */}
                <path 
                  d="M80 380 Q 150 350, 200 280 T 400 120" 
                  fill="none" 
                  stroke="#60a5fa" 
                  strokeWidth="6" 
                  strokeLinecap="round" 
                  filter="url(#neon)"
                  strokeDasharray="1000"
                  strokeDashoffset="1000"
                >
                  <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="4s" repeatCount="indefinite" />
                </path>
                
                <circle cx="400" cy="120" r="10" fill="#fff" filter="url(#neon)">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
                </circle>
              </svg>
           </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg className="relative block w-[calc(100%+1.3px)] h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V120c0-14.8,11.39-33.1,32.39-50.56,21-17.46,57-34,92.61-45.44C204.66,6.34,263.39,67.23,321.39,56.44Z" className="fill-gray-50"></path>
        </svg>
      </div>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
