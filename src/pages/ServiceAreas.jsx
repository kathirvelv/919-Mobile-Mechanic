import React from 'react';
import ServiceAreaMap from '../components/ServiceAreaMap';
import { SERVICE_AREAS } from '../data/servicesData';
import { MapPin, CheckCircle2, Phone, CalendarCheck, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServiceAreas() {
  return (
    <div className="bg-[#0B0F17] py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header (Local SEO Footprint) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Local Triangle SEO Footprint
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Mobile Auto Repair <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Service Areas</span>
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Proudly providing on-site mobile auto repairs across Cary, Morrisville, Apex, Raleigh, and the surrounding Triangle area.
          </p>
        </div>

        {/* Detailed Areas List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {SERVICE_AREAS.map((area, idx) => (
            <div
              key={idx}
              className="bg-[#111827] border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-orange-500/10 text-orange-400 border border-orange-500/30">
                  {area.highlight}
                </span>
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Active Dispatch Hub
                </span>
              </div>

              <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-orange-500" />
                {area.name}, North Carolina
              </h2>

              <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                {area.description}
              </p>

              <div className="bg-[#0B0F17] p-3 rounded-xl border border-slate-800 text-xs font-mono text-slate-400 mb-6">
                <strong>Covered Zip Codes:</strong> {area.zip}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                <span className="text-xs text-slate-400">Response Window: 15-45 mins</span>
                <Link
                  to="/book"
                  className="inline-flex items-center gap-1 text-xs font-bold text-orange-400 hover:text-orange-300 underline"
                >
                  Schedule Driveway Visit &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Local Area SEO FAQ */}
        <div className="bg-[#111827] border border-slate-800 rounded-3xl p-8 sm:p-12 mb-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Frequently Asked Questions on Service Coverage
          </h3>

          <div className="space-y-6 text-sm">
            <div className="border-b border-slate-800 pb-4">
              <h4 className="font-bold text-white mb-1">Do you service gated communities or luxury HOA subdivisions?</h4>
              <p className="text-slate-400 text-xs sm:text-sm">
                Yes! We regularly service vehicles in Preston, Lochmere, Amberly, MacGregor Downs, Bella Casa, and Prestonwood. Simply provide the gate code or security notice when submitting your booking widget.
              </p>
            </div>

            <div className="border-b border-slate-800 pb-4">
              <h4 className="font-bold text-white mb-1">Can you work in corporate office parking decks in RTP or Morrisville?</h4>
              <p className="text-slate-400 text-xs sm:text-sm">
                Absolutely. Many of our executive and biotech clients have their brake replacements, battery installations, and computer diagnostics completed while they work their normal business hours in RTP or Perimeter Park.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-1">What if my car is parked on the street or in a parking lot?</h4>
              <p className="text-slate-400 text-xs sm:text-sm">
                Our self-contained mobile vans carry their own battery packs, silent power inverters, high-intensity LED work lights, and hydraulic low-profile jacks. We can safely work in private driveways, office lots, or public roadside situations.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/book"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-extrabold text-base px-8 py-4 rounded-xl shadow-glow-orange hover:scale-105 transition-transform"
          >
            <CalendarCheck className="w-5 h-5" />
            <span>Book Mobile Mechanic in Your Neighborhood</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
