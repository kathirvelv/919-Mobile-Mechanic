import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ size = 'default', showTagline = true, className = '' }) {
  const isSmall = size === 'sm';
  const isLarge = size === 'lg';

  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-2.5 sm:gap-3 group transition-transform duration-200 hover:scale-[1.01] shrink-0 whitespace-nowrap select-none ${className}`}
    >
      {/* Precision Shield Icon */}
      <div
        className={`relative flex items-center justify-center shrink-0 ${
          isSmall ? 'w-8 h-8' : isLarge ? 'w-14 h-14' : 'w-10 h-10'
        }`}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
          <defs>
            <linearGradient id="logoGradOrange" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B00" />
              <stop offset="100%" stopColor="#FF3800" />
            </linearGradient>
            <linearGradient id="logoGradDark" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0B0F17" />
            </linearGradient>
            <linearGradient id="logoGradGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE047" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
          </defs>

          {/* Hexagonal Shield */}
          <polygon
            points="50,4 95,27 95,73 50,96 5,73 5,27"
            fill="url(#logoGradDark)"
            stroke="url(#logoGradOrange)"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <polygon
            points="50,10 88,30 88,70 50,90 12,70 12,30"
            fill="#0B0F17"
            stroke="#334155"
            strokeWidth="1.2"
          />

          {/* Mini 919 Pill inside badge */}
          <rect x="26" y="16" width="48" height="20" rx="4" fill="url(#logoGradOrange)" />
          <text
            x="50"
            y="31"
            fontFamily="system-ui, sans-serif"
            fontWeight="900"
            fontSize="14"
            fill="#0B0F17"
            textAnchor="middle"
            letterSpacing="-0.5"
          >
            919
          </text>

          {/* Cross Wrench & Diagnostic Spark */}
          <g transform="translate(26, 42)">
            <path
              d="M6 32 L26 12 C28 10 32 10 34 12 C36 14 36 18 34 20 L30 24 L34 28 L30 32 L26 28 L12 42 C10 44 6 44 4 42 C2 40 2 36 4 34 Z"
              fill="#94A3B8"
              opacity="0.3"
              transform="scale(0.8) translate(-4, -10)"
            />
            {/* High Voltage Pulse */}
            <path d="M24 2 L12 24 L22 22 L16 42 L34 16 L24 18 Z" fill="url(#logoGradGold)" stroke="#0B0F17" strokeWidth="1" />
            <circle cx="23" cy="20" r="2.5" fill="#FF5A1F" />
          </g>
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col leading-tight whitespace-nowrap">
        <div className="flex items-center gap-1.5 whitespace-nowrap">
          <span
            className={`font-black tracking-tight text-white whitespace-nowrap ${
              isSmall ? 'text-base' : isLarge ? 'text-2xl' : 'text-lg sm:text-xl'
            }`}
          >
            <span className="text-orange-500 font-black">919</span> MOBILE
          </span>
          <span
            className={`font-black tracking-tight text-orange-400 whitespace-nowrap ${
              isSmall ? 'text-base' : isLarge ? 'text-2xl' : 'text-lg sm:text-xl'
            }`}
          >
            MECHANIC
          </span>
        </div>

        {showTagline && (
          <div className="flex items-center gap-1.5 mt-0.5 whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
            <span
              className={`font-semibold tracking-wider uppercase text-slate-400 whitespace-nowrap ${
                isSmall ? 'text-[8.5px]' : 'text-[9.5px]'
              }`}
            >
              Cary &bull; Morrisville &bull; Triangle Area
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
