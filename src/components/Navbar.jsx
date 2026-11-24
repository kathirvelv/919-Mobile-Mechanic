import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, CalendarCheck, PhoneCall, ShieldCheck, Tag, Home, Wrench, MapPin } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Our Pricing', path: '/pricing', icon: Tag },
    { name: 'Our Guarantees', path: '/guarantees', icon: ShieldCheck },
    { name: 'Services', path: '/services', icon: Wrench },
    { name: 'Service Areas', path: '/service-areas', icon: MapPin },
  ];

  return (
    <nav className="bg-[#0B0F17]/95 backdrop-blur-md border-b border-slate-800/80 sticky top-[37px] sm:top-[38px] z-40 transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-2 sm:gap-4 lg:gap-6">
          {/* Logo on Left */}
          <div className="shrink-0 flex items-center">
            <Logo size="default" />
          </div>

          {/* Desktop Navigation Links Centered */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-2.5 xl:px-3.5 py-2 rounded-lg text-xs xl:text-sm font-semibold transition-colors duration-150 flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-orange-400 bg-orange-500/10 border border-orange-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`
                }
              >
                <item.icon className="w-3.5 h-3.5 xl:w-4 xl:h-4 opacity-75 shrink-0" />
                <span className="whitespace-nowrap">{item.name}</span>
              </NavLink>
            ))}
          </div>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-2 xl:gap-3 shrink-0">
            {/* Phone Button */}
            <a
              href="tel:9198880919"
              className="hidden xl:inline-flex items-center gap-2 text-slate-300 hover:text-white px-3 py-2 text-xs xl:text-sm font-bold border border-slate-700/80 rounded-lg hover:border-slate-500 transition-colors whitespace-nowrap shrink-0"
            >
              <PhoneCall className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-orange-400 shrink-0" />
              <span className="whitespace-nowrap">(919) 888-0919</span>
            </a>

            {/* Book Diagnostics Primary CTA */}
            <Link
              to="/book"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs xl:text-sm px-4 xl:px-5 py-2.5 rounded-lg shadow-glow-orange transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0"
            >
              <CalendarCheck className="w-3.5 h-3.5 xl:w-4 xl:h-4 shrink-0" />
              <span className="whitespace-nowrap">Book Diagnostics Now</span>
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden shrink-0">
            <Link
              to="/book"
              className="sm:hidden inline-flex items-center gap-1 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-3 py-2 rounded-md whitespace-nowrap shrink-0 shadow-md"
            >
              <CalendarCheck className="w-3.5 h-3.5 shrink-0" />
              <span className="whitespace-nowrap">Book</span>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500 shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0F172A] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200 shadow-2xl">
          <div className="space-y-1">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-orange-500/15 text-orange-400 border border-orange-500/30'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`
                }
              >
                <item.icon className="w-5 h-5 text-orange-400 shrink-0" />
                <span>{item.name}</span>
              </NavLink>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 space-y-2">
            <Link
              to="/book"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-3 px-4 rounded-lg shadow-lg text-center"
            >
              <CalendarCheck className="w-5 h-5 shrink-0" />
              <span>Book Diagnostics Now (100% Fee Credit)</span>
            </Link>

            <a
              href="tel:9198880919"
              className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold py-3 px-4 rounded-lg border border-slate-700 text-center"
            >
              <PhoneCall className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Call Dispatch: (919) 888-0919</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
