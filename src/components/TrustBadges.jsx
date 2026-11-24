import React from 'react';
import { DollarSign, Shield, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TrustBadges() {
  const badges = [
    {
      icon: DollarSign,
      title: "100% Diagnostic Fee Credit",
      subtitle: "Zero-Risk Inspection",
      description: "Our flat-rate diagnostic inspection fee ($99) is 100% credited directly toward your final repair cost if we do the job.",
      accent: "from-amber-500 to-orange-500",
      badgeColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",
      link: "/pricing"
    },
    {
      icon: Shield,
      title: "12-Month / 12,000-Mile Warranty",
      subtitle: "Nationwide Peace of Mind",
      description: "All mobile repair services and OEM-quality parts are backed by our rock-solid quality guarantee.",
      accent: "from-cyan-500 to-blue-500",
      badgeColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
      link: "/guarantees"
    },
    {
      icon: Award,
      title: "Certified Dealership-Grade Tech",
      subtitle: "ASE-Master Certified",
      description: "Experienced professionals equipped with dealership-grade bi-directional diagnostic scanners brought straight to your driveway.",
      accent: "from-emerald-500 to-teal-500",
      badgeColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
      link: "/services"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#0E1420] border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            The Trust Builder
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Zero Hassle. <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Complete Transparency.</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            No towing charges. No dealership markup. No days wasted waiting in line. We bring certified shop expertise directly to your home or office.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {badges.map((badge, idx) => (
            <div
              key={idx}
              className="bg-[#131B2A] border border-slate-800 hover:border-slate-700 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden group"
            >
              {/* Top Accent Gradient Border */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${badge.accent}`} />

              <div>
                {/* Icon & Subtitle Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                    <badge.icon className="w-7 h-7" />
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-md border ${badge.badgeColor}`}>
                    {badge.subtitle}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                  {badge.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {badge.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  Guaranteed in Writing
                </span>
                <Link
                  to={badge.link}
                  className="text-xs font-bold text-orange-400 hover:text-orange-300 inline-flex items-center gap-1 hover:underline"
                >
                  Learn more &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
