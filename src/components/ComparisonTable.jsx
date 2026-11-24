import React from 'react';
import { Check, X, Shield, Award } from 'lucide-react';
import { COMPARISON_DATA } from '../data/pricingData';

export default function ComparisonTable() {
  return (
    <section className="py-12 sm:py-16 bg-[#0B0F17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Award className="w-3.5 h-3.5" />
            Why Choose Mobile?
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            919 Mobile Mechanic vs Dealerships vs Independent Shops
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            See how our modern driveway model eliminates wasted hours, towing bills, and inflated dealer overhead.
          </p>
        </div>

        <div className="overflow-x-auto shadow-2xl rounded-2xl border border-slate-800">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-[#101726] border-b border-slate-800">
                <th className="py-4 px-6 text-sm font-bold text-slate-300 uppercase tracking-wider">
                  Feature / Guarantee
                </th>
                <th className="py-4 px-6 text-sm font-extrabold text-orange-400 bg-orange-500/10 border-x border-orange-500/30 text-center">
                  919 Mobile Mechanic
                </th>
                <th className="py-4 px-6 text-sm font-semibold text-slate-400 text-center">
                  Franchise Dealerships
                </th>
                <th className="py-4 px-6 text-sm font-semibold text-slate-400 text-center">
                  Traditional Shops
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 bg-[#0E1422] text-sm">
              {COMPARISON_DATA.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white">
                    {row.feature}
                  </td>
                  <td className="py-4 px-6 bg-orange-500/5 border-x border-orange-500/20 text-center font-bold text-emerald-400">
                    <div className="inline-flex items-center gap-1.5 justify-center">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{row.triangleMobile}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-slate-400 text-center">
                    <span className="text-red-400/90">{row.dealership}</span>
                  </td>
                  <td className="py-4 px-6 text-slate-400 text-center">
                    <span>{row.indyShop}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
