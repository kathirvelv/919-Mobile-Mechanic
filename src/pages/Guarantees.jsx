import React from 'react';
import { ShieldCheck, Award, Sparkles, CheckCircle2, Droplets, Wrench, Shield, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Guarantees() {
  const guaranteeList = [
    {
      title: "100% Diagnostic Fee Credit Guarantee",
      badge: "Financial Transparency",
      icon: Sparkles,
      color: "from-amber-500 to-orange-500",
      description: "Our flat $99 mobile diagnostic fee is credited 100% directly toward your approved repair cost. We don't believe in penalizing you for having your car inspected.",
      details: [
        "Credited dollar-for-dollar on final repair invoice",
        "Includes full bi-directional computer ECU scan",
        "Clear digital breakdown before repair starts"
      ]
    },
    {
      title: "12-Month / 12,000-Mile Warranty",
      badge: "Quality Assurance",
      icon: Shield,
      color: "from-cyan-500 to-blue-500",
      description: "Every repair we execute is backed by our comprehensive 12-Month or 12,000-Mile nationwide warranty on all parts and craftsmanship. If a component fails under normal operation, we return and replace it at zero cost to you.",
      details: [
        "Covers both labor and parts replacement",
        "Backed nationwide for road trip peace of mind",
        "Itemized warranty documentation emailed automatically"
      ]
    },
    {
      title: "No Greasy Driveways Cleanliness Guarantee",
      badge: "Driveway Protection",
      icon: Droplets,
      color: "from-emerald-500 to-teal-500",
      description: "Your luxury residence deserves respect. Our mobile repair vans carry industrial containment drip-trays, heavy-duty floor mats, and vacuum fluid extraction tools to ensure zero oil, coolant, or grease touches your pavers or concrete.",
      details: [
        "Heavy-duty containment catch mats used under every vehicle",
        "Eco-friendly EPA compliant fluid recycling",
        "Spotless driveway inspection before technician departs"
      ]
    },
    {
      title: "ASE-Master Certified Technicians Only",
      badge: "Top Tier Talent",
      icon: Award,
      color: "from-purple-500 to-indigo-500",
      description: "We don't send amateur helpers. All lead technicians are ASE-Certified with extensive background in high-end European (BMW, Porsche, Mercedes, Audi) and modern domestic platforms.",
      details: [
        "Factory-level diagnostic scan software",
        "Extensive torque-to-spec bolt fastening protocol",
        "Direct communication with your personal technician"
      ]
    },
    {
      title: "Upfront Price Lock Guarantee",
      badge: "No Bait-and-Switch",
      icon: FileText,
      color: "from-rose-500 to-red-500",
      description: "You will never receive an unexpected bill. After completing the diagnostic inspection, our mechanic presents an exact itemized estimate. The price agreed upon is the price you pay.",
      details: [
        "Digital sign-off required before repair commences",
        "Receipt-level transparency on OEM parts costs",
        "Zero hidden 'shop supplies' or disposal fees"
      ]
    }
  ];

  return (
    <div className="bg-[#0B0F17] py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            The Trust Builder
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Our Guarantees: <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Written in Stone</span>
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            We hold ourselves to a standard that puts traditional franchise dealerships and neighborhood greasy garages to shame.
          </p>
        </div>

        {/* Guarantees List */}
        <div className="space-y-8 mb-20 max-w-5xl mx-auto">
          {guaranteeList.map((g, idx) => (
            <div
              key={idx}
              className="bg-[#111827] border border-slate-800 hover:border-slate-700 rounded-3xl p-6 sm:p-8 relative overflow-hidden transition-all duration-300 shadow-xl"
            >
              <div className={`absolute top-0 left-0 bottom-0 w-2 bg-gradient-to-b ${g.color}`} />

              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-orange-400 shrink-0">
                  <g.icon className="w-7 h-7" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-white">{g.title}</h3>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {g.badge}
                    </span>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {g.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-4 border-t border-slate-800/80">
                    {g.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 rounded-3xl p-8 sm:p-12 text-center text-white max-w-4xl mx-auto shadow-glow-orange">
          <h2 className="text-2xl sm:text-3xl font-black mb-3">
            Experience Dealership-Grade Care in Your Own Driveway
          </h2>
          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto mb-8">
            Book your mobile diagnostic inspection now. The $99 fee is 100% credited toward your final repair.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 bg-black hover:bg-slate-900 text-white font-black text-base px-8 py-4 rounded-xl shadow-2xl transition-transform hover:scale-105"
          >
            <span>Book Diagnostic Inspection Now</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
