import React from 'react';
import { AlertTriangle, PhoneCall, Zap, Clock, ShieldCheck, CheckCircle2, Navigation, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Emergency() {
  return (
    <div className="bg-[#0B0F17] py-12 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Emergency Alert Banner */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-6 sm:p-10 text-white text-center shadow-2xl mb-12 relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 text-yellow-300 text-xs font-extrabold uppercase tracking-wider mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 animate-ping"></span>
              Emergency Roadside Dispatch Center
            </div>
            <h1 className="text-3xl sm:text-5xl font-black mb-4 tracking-tight">
              Stuck On The Side Of The Road in Cary or Triangle?
            </h1>
            <p className="text-base sm:text-lg text-white/95 max-w-2xl mx-auto mb-8 font-medium">
              Don't wait 2 hours for a tow truck that will drag your car to a closed lot. Our mobile mechanic van is equipped to fix no-starts, dead batteries, and flat tires on the spot.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:9198880919"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-red-600 hover:bg-yellow-100 font-black text-lg px-8 py-4 rounded-xl shadow-2xl transition-transform hover:scale-105"
              >
                <PhoneCall className="w-6 h-6 animate-pulse text-red-600" />
                <span>Tap to Call Emergency: (919) 888-0919</span>
              </a>

              <Link
                to="/book?service=emergency-roadside"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-black/40 hover:bg-black/60 text-white font-bold text-base px-6 py-4 rounded-xl border border-white/30"
              >
                <span>Request Online Dispatch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Emergency Services Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Commercial Jump-Starts &amp; Testing</h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              We carry high-output industrial jump packs capable of cranking everything from a Porsche 911 to heavy diesel trucks, plus instant alternator diode load testing.
            </p>
          </div>

          <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Navigation className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">On-The-Spot Battery Replacement</h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Car battery dead beyond saving? Our mobile van carries fresh Interstate AGM and flooded batteries with battery computer registration on-site.
            </p>
          </div>

          <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Flat Tire Changes &amp; Pressure</h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Rapid mounting of your factory spare, high-volume cordless tire inflators, and torque-spec lug tightening to factory foot-pounds.
            </p>
          </div>

          <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Lockout &amp; Emergency Fuel Delivery</h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Keys locked inside your vehicle or ran out of fuel on Highway 64 or I-40? We deliver 93 Octane premium or regular gasoline directly to your vehicle.
            </p>
          </div>
        </div>

        {/* Safety Steps While Waiting */}
        <div className="bg-[#0E1524] border border-slate-800 rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
            Safety Protocol While Waiting For Our Mobile Van:
          </h3>
          <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Turn on your vehicle hazard flashers immediately to alert approaching traffic.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>If stranded on a highway shoulder, remain inside with your seatbelt fastened or step behind the guardrail safely away from moving lanes.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Our technician will send live SMS GPS tracking when en route to your vehicle.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
