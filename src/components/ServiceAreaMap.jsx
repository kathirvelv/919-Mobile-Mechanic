import React from 'react';
import { MapPin, Navigation, Clock, CheckCircle } from 'lucide-react';
import { SERVICE_AREAS } from '../data/servicesData';
import { Link } from 'react-router-dom';

export default function ServiceAreaMap() {
  return (
    <section className="py-16 bg-[#0B0F17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Navigation className="w-3.5 h-3.5" />
            Local Coverage Footprint
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Serving Cary, Morrisville &amp; The Entire Triangle
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Our fully-equipped mobile service vans operate daily across Wake and Durham counties. We come directly to your driveway, subdivision, or corporate campus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_AREAS.map((area, idx) => (
            <div
              key={idx}
              className="bg-[#111827] border border-slate-800 hover:border-orange-500/40 rounded-2xl p-6 transition-all duration-200 group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-orange-500/10 text-orange-400 border border-orange-500/20">
                  {area.highlight}
                </span>
                <div className="flex items-center gap-1 text-xs text-emerald-400 font-semibold">
                  <Clock className="w-3 h-3" />
                  <span>Daily Dispatch</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors flex items-center gap-2">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0" />
                {area.name}
              </h3>

              <div className="text-xs font-mono text-slate-400 mb-3 bg-slate-900/80 p-1.5 rounded-lg border border-slate-800">
                Zip Codes: {area.zip}
              </div>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                {area.description}
              </p>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500">Zero Travel Surcharge</span>
                <Link
                  to="/book"
                  className="text-xs font-bold text-orange-400 hover:text-orange-300 underline"
                >
                  Book in {area.name} &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
