import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import { Cpu, Disc, Zap, AlertTriangle, Thermometer, Wrench, ShieldCheck, Activity, Check, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const ICON_MAP = {
  Cpu,
  Disc,
  Zap,
  AlertTriangle,
  Thermometer,
  Wrench,
  ShieldCheck,
  Activity
};

export default function Services() {
  const [filter, setFilter] = useState('all');

  return (
    <div className="bg-[#0B0F17] py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" />
            Complete Mobile Service Menu
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Dealership-Grade Auto Care, <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">In Your Driveway</span>
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Equipped with factory scan software, high-tier tooling, and premium OEM parts. All mobile repairs include our 12-Month / 12,000-Mile Nationwide Warranty.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
          {SERVICES_DATA.map((service) => {
            const IconComponent = ICON_MAP[service.icon] || Wrench;

            return (
              <div
                key={service.id}
                className="bg-[#111827] border border-slate-800 hover:border-slate-700 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-slate-800/90 border border-slate-700 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/30 block mb-1">
                        {service.tag}
                      </span>
                      <span className="text-xs font-bold text-slate-400">
                        {service.price}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                    {service.fullDesc}
                  </p>

                  <div className="space-y-2.5 mb-8">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    12-Month / 12,000-Mile Warranty
                  </span>
                  <Link
                    to={`/book?service=${service.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-400 hover:text-orange-300 group-hover:underline"
                  >
                    <span>Book this service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emergency Callout Card */}
        <div className="bg-gradient-to-r from-red-950/70 via-slate-900 to-amber-950/70 border border-red-500/30 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-extrabold text-red-400 uppercase tracking-widest block mb-2">
              🚨 24/7 Roadside Assistance
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Need immediate dispatch in Cary, Morrisville or Apex?
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-xl">
              Flat tire, dead battery, or unexpected breakdown? Our mobile emergency van carries heavy-duty jump units, battery stock, and diagnostic tools.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="tel:9198880919"
              className="bg-red-600 hover:bg-red-500 text-white font-extrabold px-6 py-3.5 rounded-xl shadow-lg transition-transform hover:scale-105 text-center text-sm"
            >
              Call (919) 888-0919
            </a>
            <Link
              to="/emergency"
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-6 py-3.5 rounded-xl border border-slate-700 text-center text-sm"
            >
              Roadside Dispatch Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
