import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { finalBenefits } from '../data';

export default function FinalBenefitsSection() {
  return (
    <section id="final-benefits" className="bg-white py-16 px-4 text-brand-text-dark border-y border-neutral-100">
      <div className="mx-auto max-w-4xl">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700">
            EL RECONOCIMIENTO DE TU BIENESTAR
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-black text-brand-dark uppercase">
            Lo que podrías experimentar
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-neutral-500">
            Tener el cortisol bajo y balanceado no es solo dejar de estar estresado; se traduce en una mejora radical de tu vitalidad y apariencia cotidiana.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-neutral-50 rounded-3xl p-6 sm:p-8 border border-neutral-200/50">
          {finalBenefits.map((b) => (
            <div key={b.id} className="flex gap-3 bg-white p-4 rounded-xl border border-neutral-200/50 hover:border-emerald-600/20 transition-all items-center">
              <div className="h-6 w-6 rounded-full bg-emerald-500/15 flex items-center justify-center shrink-0">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              </div>
              <span className="text-xs text-neutral-800 font-bold leading-tight">
                {b.text}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
