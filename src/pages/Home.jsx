import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, PhoneCall, ShieldCheck, Zap, Wrench, Sparkles, CheckCircle2, ChevronRight, AlertTriangle, Clock, ArrowRight } from 'lucide-react';
import TrustBadges from '../components/TrustBadges';
import BookingWidget from '../components/BookingWidget';
import RepairCalculator from '../components/RepairCalculator';
import ComparisonTable from '../components/ComparisonTable';
import Testimonials from '../components/Testimonials';
import ServiceAreaMap from '../components/ServiceAreaMap';
import SymptomChecker from '../components/SymptomChecker';

export default function Home() {
  const scrollToBooking = (e) => {
    e.preventDefault();
    const elem = document.getElementById('booking-intake');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      {/* 2. Hero Section (Above the Fold) from Blueprint */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#0B0F17] via-[#0D131F] to-[#0E1420]">
        {/* Glow ambient background rings */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-orange-500/15 to-amber-500/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute -top-32 right-0 w-96 h-96 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            {/* Top Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-orange-400 text-xs sm:text-sm font-bold shadow-lg mb-6 animate-pulse-subtle">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span>
              <span>Serving Cary, Morrisville, Apex &amp; The Triangle Area</span>
              <span className="text-slate-500">&bull;</span>
              <span className="text-slate-300">100% Fee Credited to Repairs</span>
            </div>

            {/* Main Headline (Exact Blueprint Blueprint) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
              Professional Auto Diagnostics &amp; Repairs—
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 block sm:inline">
                Right in Your Driveway.
              </span>
            </h1>

            {/* Sub-headline (Exact Blueprint Copy) */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
              Skip the shop wait times. Serving high-end vehicles across <strong className="text-white font-semibold">Cary, Morrisville, and the Triangle Area</strong> with certified expertise and transparent, upfront pricing.
            </p>

            {/* Primary & Secondary CTA Buttons from Blueprint */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md sm:max-w-none mx-auto mb-12">
              {/* Primary CTA Button: [ Book Diagnostic Inspection ] (Scrolls immediately to Intake Widget) */}
              <a
                href="#booking-intake"
                onClick={scrollToBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-base sm:text-lg px-8 py-4 rounded-xl shadow-glow-orange hover:shadow-glow-amber transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0"
              >
                <Calendar className="w-5 h-5 shrink-0" />
                <span className="whitespace-nowrap">[ Book Diagnostic Inspection ]</span>
              </a>

              {/* Secondary CTA Button: [ Emergency Roadside Help ] */}
              <Link
                to="/emergency"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#162032] hover:bg-[#1E2B42] text-slate-100 font-bold text-base sm:text-lg px-8 py-4 rounded-xl border border-red-500/40 hover:border-red-500/80 transition-all duration-200 shadow-lg group whitespace-nowrap shrink-0"
              >
                <span className="relative flex h-3 w-3 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <span className="text-red-400 group-hover:text-red-300 whitespace-nowrap">[ Emergency Roadside Help ]</span>
              </Link>
            </div>

            {/* Micro Trust Stats bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-6 border-t border-slate-800/80 text-left">
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <div className="text-xl font-extrabold text-orange-400">100%</div>
                <div className="text-xs text-slate-400 font-medium">Diagnostic Fee Credit</div>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <div className="text-xl font-extrabold text-white">12-Mo / 12k</div>
                <div className="text-xs text-slate-400 font-medium">Nationwide Warranty</div>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <div className="text-xl font-extrabold text-emerald-400">ASE-Master</div>
                <div className="text-xs text-slate-400 font-medium">Certified Technicians</div>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <div className="text-xl font-extrabold text-cyan-400">$0 Towing</div>
                <div className="text-xs text-slate-400 font-medium">Driveway Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Trust Builder: Fee & Warranty Badges from Blueprint */}
      <TrustBadges />

      {/* 4. Interactive Intake & Instant Booking Widget from Blueprint */}
      <section className="py-16 sm:py-20 bg-[#0B0F17] relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingWidget id="booking-intake" />
        </div>
      </section>

      {/* Interactive Symptom Diagnostic Checker */}
      <SymptomChecker />

      {/* Transparent Pricing Simulator */}
      <section className="py-16 bg-[#0E1420] border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <RepairCalculator />
        </div>
      </section>

      {/* Why Mobile is Better - Comparison Table */}
      <ComparisonTable />

      {/* Customer Testimonials for Cary & Triangle */}
      <Testimonials />

      {/* Service Area Footprint */}
      <ServiceAreaMap />

      {/* Emergency Roadside Quick Bar Callout */}
      <section className="py-12 bg-gradient-to-r from-red-950 via-slate-900 to-orange-950 border-t border-red-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <span className="text-xs font-bold text-red-400 uppercase tracking-widest block mb-1">
                🚨 Rapid Triangle Dispatch
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Stranded right now? Don't pay $200 for a tow truck.
              </h3>
              <p className="text-sm text-slate-300 mt-1">
                Our equipped emergency van comes to your exact location in Cary, Morrisville, Apex or Raleigh.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href="tel:9198880919"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-black px-6 py-3.5 rounded-xl text-base shadow-lg transition-transform hover:scale-105"
              >
                <PhoneCall className="w-5 h-5 animate-pulse" />
                <span>Call (919) 888-0919</span>
              </a>
              <Link
                to="/emergency"
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold px-5 py-3.5 rounded-xl border border-slate-700 text-sm"
              >
                <span>Roadside Details</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
