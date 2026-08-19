import React from 'react';

interface CompassLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const CompassLogo: React.FC<CompassLogoProps> = ({
  className = '',
  size = 40,
  showText = false
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div 
        className="relative flex items-center justify-center rounded-full bg-[#171b22] border border-amber-600/30 p-1.5 shadow-inner"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]"
        >
          {/* Outer compass ring */}
          <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="1.2" strokeDasharray="1 3" opacity="0.6" />
          <circle cx="50" cy="50" r="37" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
          <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          
          {/* Compass Star Points */}
          <path d="M50 8L54 44L50 50L46 44L50 8Z" fill="currentColor" opacity="0.9" />
          <path d="M50 92L54 56L50 50L46 56L50 92Z" fill="currentColor" opacity="0.7" />
          <path d="M8 50L44 46L50 50L44 54L8 50Z" fill="currentColor" opacity="0.7" />
          <path d="M92 50L56 46L50 50L56 54L92 50Z" fill="currentColor" opacity="0.7" />
          
          {/* Diagonal minor points */}
          <path d="M20 20L46 47L20 20Z" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          <path d="M80 20L54 47L80 20Z" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          <path d="M20 80L46 53L20 80Z" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          <path d="M80 80L54 53L80 80Z" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          
          {/* Stylized India central map outline */}
          <path
            d="M48 24 C46 25 43 27 44 30 C45 33 41 35 39 37 C37 40 40 43 38 46 C36 49 39 52 42 55 C45 61 48 70 50 78 C52 70 55 61 58 56 C61 51 64 48 62 45 C60 42 63 39 61 36 C59 33 55 31 52 28 C50 25 49 24 48 24 Z"
            stroke="currentColor"
            strokeWidth="1.2"
            fill="none"
            opacity="0.85"
          />

          {/* Golden Center Needle Hub */}
          <circle cx="50" cy="50" r="3.5" fill="#f59e0b" />
          <circle cx="50" cy="50" r="1.5" fill="#0d0f13" />

          {/* North label */}
          <text x="50" y="6" textAnchor="middle" fill="currentColor" fontSize="5" fontWeight="bold" fontFamily="Cinzel, serif">N</text>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="font-brand text-xs tracking-[0.2em] text-amber-300 uppercase font-semibold">
            Incredible India
          </span>
          <span className="text-[10px] tracking-[0.25em] text-amber-100/60 uppercase">
            Explorer
          </span>
        </div>
      )}
    </div>
  );
};
