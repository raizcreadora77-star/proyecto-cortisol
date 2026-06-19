import React from 'react';
import { CheckCircle } from 'lucide-react';
import { vipBonuses } from '../data';

export default function VipBonusesSection() {
  return (
    <section id="exclusive-bonuses-vips" className="bg-[#fdfaf5] py-16 px-4 text-[#1a2320] border-y border-neutral-200 relative overflow-hidden">
      {/* Soft yellow ambient ball */}
      <div className="absolute top-1/2 left-10 h-72 w-72 rounded-full bg-amber-400/5 blur-3xl" />

      <div className="mx-auto max-w-5xl relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[10px] bg-brand-accent/20 border border-brand-accent/30 rounded-full px-3.5 py-1 text-brand-accent font-black tracking-widest uppercase inline-block mb-3 animate-pulse">
            🎁 OFERTA ACCESORIA DE TIEMPO LIMITADO
          </span>
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-[#1a2320]">
            Bonos Exclusivos VIP Completamente Gratis
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-neutral-600">
            Si adquieres el protocolo hoy, tendrás acceso inmediato a estas herramientas complementarias que de forma individual cuestan cientos de dólares.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {vipBonuses.map((bonus) => (
            <div
              key={bonus.id}
              className={`rounded-3xl border p-6 sm:p-8 flex flex-col justify-between bg-white ${
                bonus.isVipPremium
                  ? 'border-emerald-600 bg-linear-to-br from-emerald-50/20 to-white relative'
                  : 'border-neutral-200/80 shadow-xs'
              }`}
            >
              {bonus.isVipPremium && (
                <span className="absolute top-0 right-8 -translate-y-1/2 bg-emerald-600 text-white text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                  ★ BONO VIP EXCLUSIVO PREMIUM
                </span>
              )}

              <div>
                <div className="flex justify-between items-start mb-3 border-b border-neutral-100 pb-3">
                  <h4 className="text-xs sm:text-sm font-extrabold text-neutral-900 tracking-tight pr-2">
                    {bonus.title}
                  </h4>
                  <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full uppercase shrink-0">
                    Valor: ${bonus.value}
                  </span>
                </div>

                <p className="text-xs text-neutral-600 leading-relaxed font-light mb-6">
                  {bonus.description}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-[9px] font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg w-max leading-none">
                <CheckCircle className="h-3 w-3 text-emerald-600 shrink-0" />
                <span>GRATIS CON EL PROGRAMADA</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bonus callout */}
        <div className="bg-brand-dark text-white rounded-3xl p-6 sm:p-8 border border-white/5 text-center max-w-3xl mx-auto">
          <span className="text-[9px] font-bold text-amber-400 block tracking-widest uppercase mb-1">
            AHORRO CONSOLIDADOR
          </span>
          <p className="text-sm font-bold uppercase tracking-wide text-neutral-100 mb-2">
            Valor combinado total de bonos: <span className="line-through text-neutral-400 font-semibold">$211.00</span> ➔ ¡Totalmente $0 Hoy!
          </p>
          <p className="text-[11px] text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Consigues todo este armamento de desintoxicación y reprogramación del estrés sin ningún coste extra, protegiendo tu inversión desde la primera noche.
          </p>
        </div>

      </div>
    </section>
  );
}
