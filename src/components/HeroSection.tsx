import React from 'react';
import { Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { benefits } from '../data';
import MockupSection from './MockupSection';

interface HeroSectionProps {
  coverImage: string;
  scrollToCheckout: (e: React.MouseEvent) => void;
}

export default function HeroSection({ coverImage, scrollToCheckout }: HeroSectionProps) {
  return (
    <section id="hero-section" className="bg-gradient-to-b from-brand-dark via-[#0a0f0d] to-brand-dark text-white pt-12 pb-20 px-4 md:py-24 relative overflow-hidden bg-bento-grid">
      {/* Glow dots simulating sleep serenity */}
      <div className="absolute top-1/4 left-1/4 h-80 w-80 rounded-full bg-brand-sage/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-1.5 bg-brand-sage/15 border border-brand-sage/25 rounded-full px-4 py-1.5 text-[10px] font-black text-brand-sage uppercase tracking-widest mb-5">
            <Zap className="h-3 w-3 text-brand-sage animate-pulse" /> Protocolo Hormonal Natural Adaptativo
          </div>

          {/* TITULAR PRINCIPAL */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight uppercase mb-6 text-glow">
            Cortisol Bajo: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sage via-emerald-400 to-teal-300 block sm:inline">Apaga el Estrés Invisible</span>
          </h1>

          {/* SUBTITULAR PRINCIPAL */}
          <p className="text-sm sm:text-md md:text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto font-light mb-8">
            Reduce los síntomas del cortisol elevado en 14 días y vuelve a dormir profundamente sin depender de pastillas, suplementos caros ni técnicas imposibles.
          </p>

          {/* CTA BUTTON */}
          <div className="px-4">
            <a
              href="#checkout"
              onClick={scrollToCheckout}
              className="inline-flex cursor-pointer select-none items-center gap-2 rounded-full bg-gradient-to-r from-brand-sage via-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-brand-dark font-black tracking-wider text-xs sm:text-sm py-4.5 px-8 sm:px-12 shadow-[0_15px_30px_rgba(16,185,129,0.3)] hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 text-center uppercase"
            >
              <span>👉 QUIERO RECUPERAR MI SUEÑO AHORA</span>
            </a>
          </div>
        </div>

        {/* TWO COLUMN CONTENT: MOCKUP LEFT vs INCLUSIONS LIST RIGHT */}
        <div id="mockups-benefit-gird" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-12">
          
          <div className="lg:col-span-6 flex justify-center">
            {/* Cover layout, tablet layout, mobile layout bonuses */}
            <MockupSection coverImage={coverImage} />
          </div>

          <div className="lg:col-span-6">
            <div className="bg-brand-deep border border-white/[0.08] rounded-3xl p-6 sm:p-8 backdrop-blur shadow-2xl relative bento-glow-border">
              <span className="text-[10px] font-bold text-brand-sage uppercase tracking-widest block mb-1">
                EL PROTOCOLO CIENTÍFICO
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-neutral-100 tracking-tight mb-4 uppercase">
                Lo que conseguirás en los siguientes 14 días:
              </h3>
              
              <div className="space-y-4">
                {benefits.map((b) => (
                  <div key={b.id} className="flex items-start gap-3">
                    <div className="h-6 w-6 mt-0.5 shrink-0 rounded-full bg-brand-sage/10 border border-brand-sage/20 flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-brand-sage" />
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-200 font-medium my-auto">
                      {b.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Micro Guarantee Label */}
              <div className="mt-6 pt-6 border-t border-white/[0.06] flex items-center gap-3">
                <ShieldCheck className="h-8 w-8 text-brand-sage shrink-0" />
                <div className="text-[10px] text-neutral-400 leading-normal">
                  <strong className="text-neutral-200 block">7 Días de Prueba Segura</strong>
                  Si en 7 días no notas mejoría en estos puntos, te reembolsamos el 100%. Sin letras pequeñas.
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
