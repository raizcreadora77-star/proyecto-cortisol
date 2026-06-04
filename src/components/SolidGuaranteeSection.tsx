import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function SolidGuaranteeSection() {
  return (
    <section id="solid-guarantee" className="bg-[#f0ece3] py-16 px-4 text-brand-text-dark border-b border-neutral-200">
      <div className="mx-auto max-w-3xl">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-300/60 shadow-lg text-center relative overflow-hidden">
          
          {/* Guarantee Badge */}
          <div className="mx-auto h-20 w-20 rounded-full bg-emerald-100/40 border border-emerald-500/20 flex items-center justify-center mb-6">
            <ShieldCheck className="h-12 w-12 text-emerald-700" />
          </div>

          <span className="text-xs font-extrabold uppercase tracking-widest text-[#a87d55] block mb-2">
            Garantía sin Riesgo
          </span>
          
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900 mb-6">
            Garantía Blindada de 7 Días
          </h2>

          <div className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-xl mx-auto space-y-4 font-light text-left md:text-center">
            <p>
              Prueba el programa completo "Cortisol Bajo" hoy. Pon en práctica el protocolo de 14 días y las rutinas.
            </p>
            <p>
              Si dentro de los primeros 7 días sientes que no era lo que buscabas, o que no te ayudó a recuperar tu descanso, no dudes en escribirnos un único correo.
            </p>
            <p className="font-bold text-neutral-950">
              Te enviaremos el reembolso total del 100% de tu dinero. Sin preguntas capciosas, sin complicaciones largas, sin ningún riesgo en absoluto para ti.
            </p>
          </div>

          {/* Seals visual check row */}
          <div className="mt-8 pt-8 border-t border-neutral-100 flex flex-wrap gap-4 items-center justify-center text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
            <span className="flex items-center gap-1">🛡️ Reembolso Sencillo</span>
            <span>•</span>
            <span className="flex items-center gap-1">🔒 Transacción Segura</span>
            <span>•</span>
            <span className="flex items-center gap-1">⏱️ Respuesta en 24h</span>
          </div>

        </div>
      </div>
    </section>
  );
}
