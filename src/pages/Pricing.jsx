import React from 'react';
import { DollarSign, Check, ShieldCheck, HelpCircle, ArrowRight, Sparkles, Tag, AlertCircle } from 'lucide-react';
import { PRICING_TIERS } from '../data/pricingData';
import RepairCalculator from '../components/RepairCalculator';
import ComparisonTable from '../components/ComparisonTable';
import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <div className="bg-[#0B0F17] py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Tag className="w-3.5 h-3.5" />
            Clear, Upfront Flat-Rate Pricing
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Our Pricing: <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">100% Diagnostic Credit</span>
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            No surprise diagnostic fees. No vague hourly overages. Our flat-rate inspection fee is completely credited back to you when you approve the repair.
          </p>
        </div>

        {/* 3 Core Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {PRICING_TIERS.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                tier.highlight
                  ? 'bg-gradient-to-b from-[#182338] to-[#111A2B] border-2 border-orange-500 shadow-glow-orange scale-105 z-10'
                  : 'bg-[#111827] border border-slate-800 hover:border-slate-700'
              }`}
            >
              {tier.badge && (
                <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md ${
                  tier.highlight
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white'
                    : 'bg-slate-800 text-slate-300 border border-slate-700'
                }`}>
                  {tier.badge}
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-white mb-2">{tier.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">{tier.description}</p>

                <div className="mb-6 pb-6 border-b border-slate-800">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                    <span className="text-xs text-orange-400 font-semibold">{tier.period}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block">
                    What's included:
                  </span>
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to={tier.link}
                className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm text-center transition-all ${
                  tier.highlight
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg'
                    : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                }`}
              >
                {tier.ctaText}
              </Link>
            </div>
          ))}
        </div>

        {/* How The Diagnostic Credit Works in Detail */}
        <div className="bg-[#111827] border border-slate-800 rounded-3xl p-8 sm:p-12 mb-20">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest block mb-2">
              The Math Behind Our Guarantee
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              How You Pay $0 For Your Diagnosis
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Dealerships pocket your $200 diagnostic fee and then bill you thousands more. Here is our simple 3-step credit policy:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0B0F17] p-6 rounded-2xl border border-slate-800 relative">
              <span className="text-3xl font-black text-slate-800 absolute top-4 right-4">01</span>
              <h4 className="text-lg font-bold text-white mb-2">Step 1: Mobile Diagnostic</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                We travel to your home in Cary, Morrisville, or Triangle. We perform a complete bi-directional scan and physical inspection for a flat $99.
              </p>
            </div>

            <div className="bg-[#0B0F17] p-6 rounded-2xl border border-slate-800 relative">
              <span className="text-3xl font-black text-slate-800 absolute top-4 right-4">02</span>
              <h4 className="text-lg font-bold text-white mb-2">Step 2: Upfront Estimate</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                You receive a transparent digital estimate detailing parts and labor. No work begins until you approve with your digital signature.
              </p>
            </div>

            <div className="bg-[#0B0F17] p-6 rounded-2xl border border-emerald-500/30 relative bg-emerald-950/10">
              <span className="text-3xl font-black text-emerald-900 absolute top-4 right-4">03</span>
              <h4 className="text-lg font-bold text-emerald-400 mb-2">Step 3: 100% Fee Credited</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                When you proceed with the repair, your invoice reflects an automatic -$99.00 credit. Your entire diagnosis was 100% free!
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Pricing Simulator */}
        <div className="mb-20">
          <RepairCalculator />
        </div>

        {/* Comparison Table */}
        <ComparisonTable />
      </div>
    </div>
  );
}
