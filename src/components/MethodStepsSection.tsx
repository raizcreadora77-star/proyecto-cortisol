import React from 'react';
import { methodSteps } from '../data';

export default function MethodStepsSection() {
  return (
    <section id="the-3-steps-method" className="bg-[#faf6f0] py-16 px-4 text-brand-text-dark border-y border-neutral-200">
      <div className="mx-auto max-w-4xl">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-[#a8825a]">
            LA RUTA FÁCIL
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 uppercase">
            Cómo funciona el protocolo
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-lg mx-auto">
            La gente se agota y abandona cuando ve demasiada información. Por eso, hemos comprimido todo en un mapa de tres etapas ultra sencillas de absorber.
          </p>
        </div>

        {/* Three visual sequential steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Visual connector line in desktop */}
          <div className="absolute top-12 left-10 right-10 h-0.5 border-t-2 border-dashed border-neutral-200 hidden md:block" />

          {methodSteps.map((step) => (
            <div key={step.number} className="bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-xs relative z-10 flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-full bg-brand-accent text-white font-extrabold text-sm flex items-center justify-center mb-4 shadow-md border-2 border-white">
                  {step.number}
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-1">
                  {step.title}
                </h3>
                <p className="text-[11px] text-zinc-500 leading-relaxed font-light mb-4">
                  {step.description}
                </p>
              </div>

              <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100 mt-auto text-[10px] leading-relaxed text-emerald-800">
                <strong className="text-emerald-950 font-bold block uppercase tracking-wider mb-0.5">Resultado:</strong>
                {step.result}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
