import React from 'react';

interface CloseUrgencySectionProps {
  scrollToCheckout: (e: React.MouseEvent) => void;
}

export default function CloseUrgencySection({ scrollToCheckout }: CloseUrgencySectionProps) {
  return (
    <section id="close-urgency" className="bg-brand-dark py-16 px-4 text-white text-center border-t border-rose-950/40 relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-linear-to-r from-transparent via-rose-500/20 to-transparent" />
      
      <div className="mx-auto max-w-3xl">
        <span className="text-[10px] bg-rose-600/15 border border-rose-600/20 text-rose-400 rounded-full px-3 py-1 font-extrabold tracking-wider uppercase inline-block mb-4 animate-pulse">
          ⚠️ TU SUEÑO NO PUEDE SEGUIR ESPERANDO
        </span>
        
        <h2 className="text-xl sm:text-3xl font-black uppercase text-glow leading-snug tracking-tight mb-4">
          Cada noche que pasa con cortisol elevado es otra noche que tu cuerpo no recupera.
        </h2>
        
        <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed mb-8">
          Puedes seguir esperando a que tus síntomas mágicamente desaparezcan. O puedes tomar hoy el control absoluto y reprogramar tu sistema nervioso en 14 días.
        </p>

        <div className="px-4">
          <a
            href="#checkout"
            onClick={scrollToCheckout}
            className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-yellow-400 via-amber-500 to-yellow-600 hover:from-yellow-300 hover:to-amber-400 text-neutral-950 font-black tracking-wider text-xs sm:text-sm py-4.5 px-8 sm:px-12 shadow-lg hover:scale-105 transition-all"
          >
            <span>👉 QUIERO RECUPERAR MI SUEÑO Y MI ENERGÍA AHORA</span>
          </a>
        </div>

        <div className="mt-8 flex justify-center gap-4 text-[10px] text-neutral-500 font-bold uppercase">
          <span>✓ Licencia de Acceso Inmediato</span>
          <span>•</span>
          <span>✓ Garantía Blindada de 7 Días</span>
        </div>
      </div>
    </section>
  );
}
