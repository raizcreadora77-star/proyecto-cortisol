import React from 'react';
import { XCircle } from 'lucide-react';
import { revelationPoints } from '../data';

export default function RevelationSection() {
  return (
    <section id="the-reveal" className="bg-[#f8f9f6] py-20 px-4 text-brand-text-dark border-y border-neutral-200">
      <div className="mx-auto max-w-4xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1 bg-brand-sage/10 text-brand-sage font-black text-[10px] px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            EL DIAGNÓSTICO BIOLÓGICO
          </span>
          <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 uppercase">
            El verdadero enemigo tiene nombre: <span className="text-rose-600 block sm:inline">Cortisol Elevado</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
            El cortisol es la hormona de la supervivencia. Cuando permanece alto de manera persistente debido al estrés cotidiano, tu cuerpo desconecta sus capacidades de descanso y sanación para canalizar toda la energía a alarmas imaginarias.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-lg space-y-4">
          <h3 className="text-xs font-black uppercase tracking-widest text-[#0e7490] border-b border-neutral-100 pb-2">
            Cuando el cortisol elevado permanece crónico:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {revelationPoints.map((item, idx) => (
              <div key={idx} className="flex gap-3 bg-neutral-50 p-4 rounded-2xl border border-neutral-100 items-start hover:shadow-xs transition-shadow">
                <XCircle className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-neutral-900 leading-snug">{item.label}</h4>
                  <p className="text-[11.5px] text-zinc-550 leading-relaxed mt-1 font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Crucial bottom hook */}
          <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200/50 text-center text-xs font-bold text-amber-900">
            ⚡ Y lo peor... la inmensa mayoría de las personas ni siquiera sabe que esto está ocurriendo metabólicamente en su cuerpo hoy.
          </div>
        </div>
      </div>
    </section>
  );
}
