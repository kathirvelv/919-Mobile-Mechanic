import React from 'react';
import { PhoneCall, AlertCircle, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EmergencyTopBar() {
  return (
    <aside
      aria-label="Emergency Roadside Notice"
      className="bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 text-white text-xs sm:text-sm font-medium py-2 px-3 sm:px-4 shadow-lg sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        {/* Left Side: Emergency Dispatch Alert */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-200 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-300"></span>
          </span>
          <span className="font-bold flex items-center gap-1.5 tracking-wide whitespace-nowrap">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span className="hidden md:inline">🚨 Stuck on the side of the road in Cary or Triangle?</span>
            <span className="md:hidden">🚨 Stranded in Cary / Triangle?</span>
          </span>
          <span className="hidden lg:inline text-white/90 whitespace-nowrap">
            Rapid on-site dispatch ready:
          </span>
        </div>

        {/* Right Side: Click-to-call button + direct link */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href="tel:9198880919"
            className="inline-flex items-center gap-1.5 bg-black/40 hover:bg-black/60 backdrop-blur-sm text-yellow-300 px-3 py-1 rounded-full font-bold transition-all duration-200 border border-yellow-400/40 hover:scale-105 whitespace-nowrap shrink-0"
          >
            <PhoneCall className="w-3.5 h-3.5 text-yellow-300 animate-pulse shrink-0" />
            <span className="whitespace-nowrap">Tap to Call: (919) 888-0919</span>
          </a>

          <Link
            to="/emergency"
            className="hidden sm:inline-flex items-center gap-1 text-white underline underline-offset-4 hover:text-yellow-200 text-xs font-semibold whitespace-nowrap shrink-0"
          >
            <Zap className="w-3 h-3 shrink-0" />
            <span className="whitespace-nowrap">Dispatch Van Now &rarr;</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
