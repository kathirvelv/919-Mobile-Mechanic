import React, { useState } from 'react';
import { AlertTriangle, ArrowRight, CheckCircle2, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const COMMON_ISSUES = [
  {
    title: "Check Engine Light Flashing or Solid",
    urgent: true,
    symptom: "Dashboard warning icon, engine stumbling, rough idle or poor acceleration.",
    possibleCause: "Misfire, O2 sensor, catalytic converter, ignition coil pack, or EVAP leak.",
    action: "Do not ignore. Our bi-directional scanner reads freeze-frame ECU data."
  },
  {
    title: "High-Pitched Squeal or Metal Grinding on Brakes",
    urgent: true,
    symptom: "Noise when pressing pedal, or pulsation through the brake pedal.",
    possibleCause: "Pads worn down to backing plate, warped rotor, or worn wear sensors.",
    action: "Mobile brake pad & rotor replacement directly in your driveway in 60 mins."
  },
  {
    title: "Clicking Noise When Turning Key / Push Start",
    urgent: true,
    symptom: "Rapid click-click sound or interior lights dimming completely.",
    possibleCause: "Dead 12V battery, sulfated cells, failed starter solenoid or corroded terminal.",
    action: "On-site battery conductance test and starter draw analysis."
  },
  {
    title: "Temperature Gauge Creeping into the Red",
    urgent: true,
    symptom: "Sweet smell, steam from hood, AC shutting off automatically.",
    possibleCause: "Stuck thermostat, coolant leak, cracked expansion tank, or water pump failure.",
    action: "Turn off vehicle immediately! We perform vacuum pressure testing on-site."
  }
];

export default function SymptomChecker() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="py-14 bg-[#0B0F17] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            Quick Symptom Diagnostic Guide
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            What's Your Car Doing Right Now?
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Select a symptom below to understand the urgency and see how our mobile technicians fix it in your driveway.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Buttons List */}
          <div className="lg:col-span-5 space-y-3">
            {COMMON_ISSUES.map((issue, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`w-full text-left p-4 rounded-2xl border transition-all ${
                  activeIdx === idx
                    ? 'bg-gradient-to-r from-orange-500/20 to-amber-500/10 border-orange-500 text-white shadow-lg'
                    : 'bg-[#111827] border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800/40'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                    Symptom #{idx + 1}
                  </span>
                  {issue.urgent && (
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30">
                      High Priority
                    </span>
                  )}
                </div>
                <div className="font-bold text-sm sm:text-base text-white">
                  {issue.title}
                </div>
              </button>
            ))}
          </div>

          {/* Right Detail Card */}
          <div className="lg:col-span-7 bg-[#111827] border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative">
              <span className="text-xs font-bold text-orange-400 uppercase tracking-widest block mb-2">
                Mobile Diagnostic Breakdown
              </span>
              <h3 className="text-2xl font-bold text-white mb-4">
                {COMMON_ISSUES[activeIdx].title}
              </h3>

              <div className="space-y-4 mb-6 text-sm">
                <div className="bg-[#0B0F17] p-4 rounded-xl border border-slate-800">
                  <strong className="text-slate-300 block mb-1">What you experience:</strong>
                  <p className="text-slate-400">{COMMON_ISSUES[activeIdx].symptom}</p>
                </div>

                <div className="bg-[#0B0F17] p-4 rounded-xl border border-slate-800">
                  <strong className="text-slate-300 block mb-1">Likely mechanical root cause:</strong>
                  <p className="text-slate-400">{COMMON_ISSUES[activeIdx].possibleCause}</p>
                </div>

                <div className="bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/30">
                  <strong className="text-emerald-400 block mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    How our mobile mechanic solves it:
                  </strong>
                  <p className="text-slate-300 text-xs sm:text-sm">{COMMON_ISSUES[activeIdx].action}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
                <div className="text-xs text-slate-400">
                  Flat $99 diagnostic is <strong className="text-emerald-400">100% credited</strong> to the repair!
                </div>
                <Link
                  to="/book"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-glow-orange hover:scale-105 transition-transform"
                >
                  <span>Book Diagnostic For This Issue</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
