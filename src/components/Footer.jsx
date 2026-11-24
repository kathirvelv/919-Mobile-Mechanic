import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Shield, Clock, Heart, Award } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-[#070A0F] border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <Logo size="default" />
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Professional dealership-grade auto diagnostics and mobile mechanical repairs dispatched right to your driveway or workplace. Serving high-end and domestic vehicle owners across Cary, Morrisville, and the Triangle area.
            </p>
            {/* Social Anchor from Blueprint */}
            <div className="pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-orange-400 hover:text-orange-300 bg-slate-900 border border-slate-800 hover:border-orange-500/40 px-3 py-1.5 rounded-lg transition-colors"
              >
                <span>Find us on Facebook:</span>
                <span className="font-bold text-white">@TriangleMobileMechanic919</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-orange-500 pl-2">
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/" className="hover:text-orange-400 transition-colors">Home &bull; Driveway Service</Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-orange-400 transition-colors">Our Pricing &bull; 100% Fee Credit</Link>
              </li>
              <li>
                <Link to="/guarantees" className="hover:text-orange-400 transition-colors">Our Guarantees &bull; 12-Mo Warranty</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-orange-400 transition-colors">All Mobile Services</Link>
              </li>
              <li>
                <Link to="/book" className="hover:text-orange-400 transition-colors font-semibold text-orange-400">Book Diagnostics Now</Link>
              </li>
              <li>
                <Link to="/emergency" className="hover:text-orange-400 transition-colors text-red-400">🚨 Emergency Roadside Dispatch</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Area Footprint from Blueprint */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-orange-500 pl-2">
              Service Area Footprint
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Proudly providing on-site mobile auto repairs across Cary, Morrisville, Apex, Raleigh, and the surrounding Triangle area.
            </p>
            <div className="flex flex-wrap gap-1.5 text-[11px]">
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">Cary (27511, 27513, 27519)</span>
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">Morrisville (27560)</span>
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">Apex (27502, 27523)</span>
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">Raleigh (West &amp; Brier Creek)</span>
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">RTP (27709)</span>
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">Holly Springs (27540)</span>
            </div>
          </div>

          {/* Col 4: Contact & Dispatch */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-orange-500 pl-2">
              Dispatch &amp; Hours
            </h3>
            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href="tel:9198880919"
                className="flex items-center gap-2.5 text-white hover:text-orange-400 font-bold bg-slate-900/80 p-2.5 rounded-xl border border-slate-800 hover:border-orange-500/40 transition-colors"
              >
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Direct Line: (919) 888-0919</span>
              </a>

              <div className="flex items-start gap-2.5 text-slate-300">
                <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Driveway Hours:</div>
                  <div>Mon – Sat: 7:00 AM – 7:00 PM</div>
                  <div className="text-amber-400 font-medium">24/7 Priority Roadside Hotline</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                <Shield className="w-4 h-4" />
                <span>Licensed &bull; Insured &bull; ASE Certified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar / Copyright from Blueprint */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2026 919 Mobile Mechanic. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/guarantees" className="hover:text-slate-300 transition-colors">12-Mo Warranty Policy</Link>
            <span>&bull;</span>
            <Link to="/pricing" className="hover:text-slate-300 transition-colors">Diagnostic Fee Credit Terms</Link>
            <span>&bull;</span>
            <Link to="/service-areas" className="hover:text-slate-300 transition-colors">Triangle Footprint</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
