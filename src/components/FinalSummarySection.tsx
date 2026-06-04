import React from 'react';

export default function FinalSummarySection() {
  return (
    <section id="final-summary" className="bg-white py-16 px-4 text-brand-text-dark border-t border-neutral-200">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-3xl bg-[#fbfaf6] p-8 sm:p-12 border border-neutral-300/50 relative overflow-hidden">
          
          {/* Soft decorative background leaf */}
          <div className="absolute right-0 bottom-0 h-44 w-44 rounded-full bg-[#ccd5ae]/15 blur-3xl pointer-events-none" />

          <span className="text-[10px] text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full font-bold uppercase tracking-wider block mb-4 w-max">
            Lo que realmente estás comprando:
          </span>

          <h2 className="text-xl sm:text-2xl font-black text-brand-dark tracking-tight leading-snug mb-8 uppercase">
            No compras un libro ni información académica sobre el cortisol.
          </h2>

          {/* Psychological anchors for conversion */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="h-6 w-6 mt-0.5 rounded-full bg-brand-accent/15 text-brand-accent flex items-center justify-center font-bold text-xs shrink-0 select-none">
                ✓
              </div>
              <p className="text-sm font-bold text-neutral-800">
                Compras volver a dormir toda la noche de corrido y levantar con serenidad.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="h-6 w-6 mt-0.5 rounded-full bg-brand-accent/15 text-brand-accent flex items-center justify-center font-bold text-xs shrink-0 select-none">
                ✓
              </div>
              <p className="text-sm font-bold text-neutral-800">
                Compras despertar por la mañana con energía real, sin neblina ni dolores corporales.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="h-6 w-6 mt-0.5 rounded-full bg-brand-accent/15 text-brand-accent flex items-center justify-center font-bold text-xs shrink-0 select-none">
                ✓
              </div>
              <p className="text-sm font-bold text-neutral-800">
                Compras dejar de sentir que tu propio cuerpo y hormonas trabajan contra ti.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="h-6 w-6 mt-0.5 rounded-full bg-brand-accent/15 text-brand-accent flex items-center justify-center font-bold text-xs shrink-0 select-none">
                ✓
              </div>
              <p className="text-sm font-semibold text-neutral-700">
                Compras tranquilidad total al salir a trabajar o compartir con tu familia.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="h-6 w-6 mt-0.5 rounded-full bg-brand-accent/15 text-brand-accent flex items-center justify-center font-bold text-xs shrink-0 select-none">
                ✓
              </div>
              <p className="text-sm font-semibold text-neutral-700">
                Compras descanso celular profundo y el control químico de tu estado emocional.
              </p>
            </div>
          </div>

          <p className="mt-8 text-xs font-bold sm:text-sm text-brand-accent bg-[#2a3c36] text-white p-4.5 rounded-2xl border-l-4 border-[#bca17c]">
            Y recuperar un solo mes de salud y descanso de alta calidad vale infinitamente más que cualquier curso o cafeína que intentes comprar.
          </p>
        </div>
      </div>
    </section>
  );
}
