import React from 'react';
import { preOfferTestimonials } from '../data';

export default function PreOfferTestimonialsSection() {
  return (
    <section id="proof-pre-offer" className="bg-[#101412] text-white py-12 px-4 shadow-2xl relative border-b border-brand-accent/5">
      <div className="mx-auto max-w-4xl text-center mb-8">
        <span className="text-[10px] text-brand-accent uppercase font-bold tracking-widest">
          ÚLTIMA VALIDACIÓN SOCIAL
        </span>
        <h3 className="mt-1 text-lg sm:text-xl font-bold uppercase text-neutral-100 tracking-normal">
          No decidas ahora. Lee antes estas opiniones:
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {preOfferTestimonials.map((t) => (
          <div key={t.id} className="bg-brand-dark/60 p-5 rounded-2xl border border-white/[0.03] flex flex-col justify-between">
            <p className="italic text-neutral-300 text-xs sm:text-sm leading-relaxed mb-4">
              "{t.shortQuote}"
            </p>
            <div className="flex justify-between items-center bg-black/20 p-2.5 rounded-xl border border-white/5">
              <span className="text-[10px] font-bold text-neutral-200">{t.name}, {t.age} años</span>
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md uppercase tracking-tight">{t.outcome}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
