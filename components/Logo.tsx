
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = "h-12 w-auto", variant = 'dark' }) => {
  const primaryColor = variant === 'light' ? '#ffffff' : '#0a1a35';
  const secondaryColor = variant === 'light' ? 'rgba(255,255,255,0.7)' : '#666666';

  return (
    <svg 
      viewBox="0 0 320 80" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Icon: Bar Chart with Arrow */}
      <g transform="translate(10, 15)">
        {/* Bars */}
        <rect x="15" y="35" width="10" height="15" rx="1.5" fill={primaryColor} />
        <rect x="30" y="25" width="10" height="25" rx="1.5" fill={primaryColor} />
        <rect x="45" y="15" width="10" height="35" rx="1.5" fill={primaryColor} />
        
        {/* Arrow */}
        <path 
          d="M5 45 L55 5 L40 5 L40 0 L65 0 L65 25 L60 25 L60 10 L10 50 Z" 
          fill={primaryColor}
          fillRule="evenodd"
        />
      </g>

      {/* Text: ElevateAI */}
      <text 
        x="85" 
        y="45" 
        fontFamily="Inter, sans-serif" 
        fontWeight="700" 
        fontSize="38" 
        fill={primaryColor}
        letterSpacing="-1"
      >
        ElevateAI
      </text>

      {/* Subtext: SOLUTIONS AGENCY */}
      <text 
        x="85" 
        y="68" 
        fontFamily="Inter, sans-serif" 
        fontWeight="600" 
        fontSize="12" 
        fill={secondaryColor}
        letterSpacing="0.25em"
      >
        SOLUTIONS AGENCY
      </text>
    </svg>
  );
};

export default Logo;
