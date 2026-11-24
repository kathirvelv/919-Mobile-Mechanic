import React, { useState } from 'react';
import { Calculator, ArrowRight, Check, Sparkles, AlertCircle } from 'lucide-react';
import { PRICING_CALCULATOR_SERVICES } from '../data/pricingData';
import { Link } from 'react-router-dom';

export default function RepairCalculator() {
  const [selectedServiceId, setSelectedServiceId] = useState(PRICING_CALCULATOR_SERVICES[0].id);

  const selectedService = PRICING_CALCULATOR_SERVICES.find(s => s.id === selectedServiceId) || PRICING_CALCULATOR_SERVICES[0];

  return (
    <div className="bg-[#111827] border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5" />
            Transparent Pricing Simulator
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Estimate Your Service &amp; <span className="text-emerald-400">Diagnostic Credit</span>
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            See exactly how our flat-rate diagnostic fee works in your favor with zero hidden shop charges.
          </p>
        </div>

        {/* Service Selector Chips */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 mb-8">
          {PRICING_CALCULATOR_SERVICES.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedServiceId(item.id)}
              className={`p-3 rounded-xl text-left border text-xs font-semibold transition-all ${
                selectedServiceId === item.id
                  ? 'bg-orange-500/15 border-orange-500 text-white shadow-sm'
                  : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800/50'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-orange-400">{item.estRange}</span>
                {selectedServiceId === item.id && (
                  <Check className="w-3.5 h-3.5 text-orange-400" />
                )}
              </div>
              <div className="line-clamp-2">{item.name}</div>
            </button>
          ))}
        </div>

        {/* Calculation Summary Card */}
        <div className="bg-[#0B0F17] border border-slate-700/80 rounded-2xl p-5 sm:p-6 shadow-inner">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block mb-1">
                Selected Repair Scenario
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                {selectedService.name}
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Typical components: <span className="text-slate-300">{selectedService.typicalParts}</span>
              </p>
            </div>

            <div className="text-right">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block mb-1">
                Estimated Total Range
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-white">
                {selectedService.estRange}
              </div>
            </div>
          </div>

          {/* Diagnostic Credit Breakdown Math */}
          <div className="py-4 space-y-2.5 text-sm">
            <div className="flex items-center justify-between text-slate-300">
              <span>Driveway Diagnostic &amp; OEM Bi-Directional Scan:</span>
              <span className="font-mono text-white">$99.00</span>
            </div>
            
            {selectedService.diagCredited ? (
              <div className="flex items-center justify-between text-emerald-400 font-semibold bg-emerald-500/10 p-2.5 rounded-lg border border-emerald-500/20">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  100% Diagnostic Credit (Applied to Final Repair):
                </span>
                <span className="font-mono font-bold">-$99.00</span>
              </div>
            ) : (
              <div className="flex items-center justify-between text-amber-400 text-xs">
                <span>Direct Maintenance / Battery Service:</span>
                <span>Includes free alternator/starter test</span>
              </div>
            )}

            <div className="flex items-center justify-between text-slate-300">
              <span>Towing / Dealership Facility Surcharge:</span>
              <span className="font-mono text-emerald-400 font-bold">$0.00 (Free At Home)</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-orange-400 shrink-0" />
              <span>{selectedService.note}</span>
            </div>

            <Link
              to="/book"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-glow-orange transition-transform hover:scale-105 shrink-0"
            >
              <span>Book This Service</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
