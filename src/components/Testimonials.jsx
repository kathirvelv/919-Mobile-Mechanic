import React from 'react';
import { Star, ShieldCheck, MapPin, Car } from 'lucide-react';
import { REVIEWS } from '../data/reviewsData';

export default function Testimonials() {
  return (
    <section className="py-16 bg-[#0E1420] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Star className="w-3.5 h-3.5 fill-emerald-400" />
            Verified Customer Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Trusted by Luxury &amp; Everyday Drivers Across Cary
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Read real feedback from high-end vehicle owners who skipped the dealership wait times.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="bg-[#131B2A] border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all hover:shadow-xl"
            >
              <div>
                {/* Rating Stars & Date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-500 font-medium">{review.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  "{review.content}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-white text-sm flex items-center gap-1.5">
                      {review.name}
                      {review.verified && (
                        <ShieldCheck className="w-4 h-4 text-emerald-400" title="Verified Driveway Service" />
                      )}
                    </h4>
                    <div className="flex items-center gap-1 text-xs text-slate-400 mt-0.5">
                      <MapPin className="w-3 h-3 text-orange-400" />
                      <span>{review.location}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-300 bg-slate-800/80 px-2 py-1 rounded-md border border-slate-700">
                      <Car className="w-3 h-3 text-cyan-400" />
                      {review.vehicle}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
