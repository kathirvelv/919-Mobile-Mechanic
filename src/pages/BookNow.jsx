import React from 'react';
import BookingWidget from '../components/BookingWidget';
import { ShieldCheck, PhoneCall, CheckCircle2, MessageSquare, Clock, MapPin } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function BookNow() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const preselectedService = searchParams.get('service') || '';

  return (
    <div className="bg-[#0B0F17] py-12 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Instant Mobile Mechanic Dispatch
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Book Diagnostics <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Right in Your Driveway</span>
          </h1>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Skip the waiting room. Enter your vehicle details and symptom below. Our flat $99 diagnostic inspection fee is <strong className="text-emerald-400">100% credited</strong> toward your final repair.
          </p>
        </div>

        {/* 3 Quick Guarantees Chips */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10 text-xs text-slate-300">
          <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span><strong>100% Fee Credit:</strong> Zero wasted diagnostic money</span>
          </div>
          <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl flex items-center gap-2">
            <Clock className="w-4 h-4 text-orange-400 shrink-0" />
            <span><strong>Instant Alert:</strong> Tech receives alert under the car</span>
          </div>
          <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl flex items-center gap-2">
            <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
            <span><strong>No Tow Required:</strong> We come to your Cary/Triangle address</span>
          </div>
        </div>

        {/* The Intake Widget */}
        <BookingWidget initialService={preselectedService} />

        {/* Immediate Assistance Fallback */}
        <div className="mt-12 text-center bg-[#111827] border border-slate-800 rounded-2xl p-6">
          <h3 className="text-white font-bold text-base mb-1">
            Prefer to speak directly with our mobile service coordinator?
          </h3>
          <p className="text-xs text-slate-400 mb-4">
            Call our direct dispatch line anytime between 7:00 AM – 7:00 PM (or 24/7 for emergency roadside).
          </p>
          <a
            href="tel:9198880919"
            className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-extrabold text-lg bg-orange-500/10 border border-orange-500/30 px-5 py-2.5 rounded-xl hover:bg-orange-500/20 transition-all"
          >
            <PhoneCall className="w-5 h-5 animate-pulse" />
            <span>(919) 888-0919</span>
          </a>
        </div>
      </div>
    </div>
  );
}
