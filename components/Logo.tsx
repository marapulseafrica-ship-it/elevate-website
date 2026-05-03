
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = "h-12 w-auto", variant = 'dark' }) => {
  const textColor  = variant === 'light' ? '#ffffff'                 : '#0a1a35';
  const barLight   = variant === 'light' ? 'rgba(176,184,232,0.9)'   : '#7b8ec8';
  const barBright  = variant === 'light' ? '#ffffff'                 : '#0a1a35';
  const subColor   = variant === 'light' ? 'rgba(176,184,232,0.85)'  : '#8899cc';

  return (
    <svg
      viewBox="0 0 300 72"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bar-chart icon — 3 rising bars (matches brand logo) */}
      <g transform="translate(6, 10)">
        <rect x="0"  y="30" width="9" height="14" rx="1.5" fill={barLight}  />
        <rect x="14" y="20" width="9" height="24" rx="1.5" fill={barLight}  />
        <rect x="28" y="8"  width="9" height="36" rx="1.5" fill={barBright} />
      </g>

      {/* ElevateAI */}
      <text
        x="58" y="45"
        fontFamily="Inter, Arial, sans-serif"
        fontWeight="900" fontSize="38"
        fill={textColor} letterSpacing="-1"
        style={{ fontStretch: 'condensed' }}
      >ElevateAI</text>

      {/* SOLUTIONS LIMITED */}
      <text
        x="59" y="62"
        fontFamily="Inter, Arial, sans-serif"
        fontWeight="600" fontSize="11"
        fill={subColor} letterSpacing="2.5"
      >SOLUTIONS LIMITED</text>
    </svg>
  );
};

export default Logo;
