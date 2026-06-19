import React from 'react';
import { CheckCircle, CheckCircle2 } from 'lucide-react';
import { vipBonuses } from '../data';
import CheckoutInterface from './CheckoutInterface';

export default function CheckoutSection() {
  return (
    <section id="checkout" className="bg-[#0b100e] py-16 px-4 text-white">
      <div className="mx-auto max-w-4xl">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[10px] bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full text-amber-400 font-extrabold uppercase tracking-widest inline-block mb-3">
            ⚡ COMPRA 100% SEGURA
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-glow text-neutral-100 leading-tight">
            Todo lo que recibirás hoy por solo $12 USD
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-xl mx-auto mb-6">
            Te entregamos las llaves maestras de tu descanso hoy. Esto es todo el cargamento digital completo listo para descargar de forma inmediata:
          </p>
        </div>

        {/* Complete package checklist representation */}
        <div className="bg-zinc-950 p-6 sm:p-8 rounded-3xl border border-white/5 mb-10 max-w-3xl mx-auto">
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-white/5 pb-3">
              <span className="font-bold text-neutral-200 text-xs uppercase tracking-wider flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-brand-accent animate-pulse" /> Resumen de lo Incluido
              </span>
              <span className="text-xs text-brand-sage font-bold uppercase">Acceso Inmediato</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-neutral-200 py-2">
              <div className="flex items-center gap-2.5">
                <span className="text-lg shrink-0 text-emerald-400">✅</span>
                <span>Aplicación Cortisol Bajo</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-lg shrink-0 text-emerald-400">✅</span>
                <span>Sistema Guiado de 14 Días</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-lg shrink-0 text-emerald-400">✅</span>
                <span>Guía Rápida de Inicio</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-lg shrink-0 text-emerald-400">✅</span>
                <span>Bono #1: Protocolo SOS Ansiedad</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-lg shrink-0 text-emerald-400">✅</span>
                <span>Bono #2: Menú Anticortisol</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-lg shrink-0 text-emerald-400">✅</span>
                <span>Bono #3: Ritual Sueño Profundo</span>
              </div>
              <div className="flex items-center gap-2.5 sm:col-span-2 text-brand-sage font-bold">
                <span className="text-lg shrink-0 text-emerald-400">✅</span>
                <span>Garantía de 7 Días</span>
              </div>
            </div>
          </div>

          {/* Original vs current prices comparisons */}
          <div className="mt-8 pt-6 border-t border-white/5 text-center flex flex-col justify-center items-center">
            <span className="text-[10px] text-neutral-500 uppercase font-black tracking-widest block mb-1">Costo Original Acumulado</span>
            <p className="text-neutral-400 line-through text-sm font-semibold mb-3">Valor Total Acumulado: $308.00</p>
            
            <div className="bg-brand-deep/60 px-6 py-5 rounded-2xl border-2 border-brand-sage/40 max-w-xs w-full shadow-lg">
              <span className="text-[9px] font-black uppercase text-brand-sage tracking-widest block mb-1">Precio Único de Oferta</span>
              <p className="text-4xl font-extrabold text-emerald-400 mt-1">$12 USD</p>
              <span className="text-[9px] text-neutral-400 block mt-2">Garantía blindada de 7 días. Pago único de por vida.</span>
            </div>
          </div>

        </div>

        {/* Form Checkout Integrator Component */}
        <div id="checkout-form-block" className="max-w-3xl mx-auto">
          <CheckoutInterface vipBonuses={vipBonuses} />
        </div>

      </div>
    </section>
  );
}
