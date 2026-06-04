import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { productUnlocks } from '../data';

interface ProductUnlocksSectionProps {
  scrollToCheckout: (e: React.MouseEvent) => void;
}

export default function ProductUnlocksSection({ scrollToCheckout }: ProductUnlocksSectionProps) {
  return (
    <section id="the-product-unlocks" className="bg-brand-dark bg-bento-grid py-20 px-4 text-white relative border-t border-white/[0.04]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-brand-sage/5 blur-3xl pointer-events-none" />
      
      <div className="mx-auto max-w-5xl relative z-10">
        
        {/* Brand showcase */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black text-brand-sage tracking-widest uppercase block mb-2">
            La Solución Definitiva
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-glow">
            Cortisol Bajo™
          </h2>
          <p className="mt-3 text-sm sm:text-md text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed mb-6">
            Un protocolo práctico y diseñado específicamente para ayudar a tu cuerpo a salir del modo supervivencia y volver al modo recuperación profunda.
          </p>
          <div className="inline-flex items-center gap-1.5 bg-brand-sage/15 border border-brand-sage/20 px-4 py-1.5 rounded-full text-[10px] font-bold text-brand-sage shadow-xs">
            📗 METODOLOGÍA COMPROBADA CON 14 DÍAS DE SEGUIMIENTO
          </div>
        </div>

        {/* Premium cards grid */}
        <div className="mb-10 text-center">
          <h3 className="text-xs font-black uppercase tracking-widest text-[#a8d5c4]">
            Dentro del Programa "Cortisol Bajo" Recibirás:
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productUnlocks.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-brand-deep border border-white/[0.08] hover:border-brand-sage/30 rounded-2xl p-6 transition-all group flex flex-col justify-between bento-glow-border"
            >
              <div>
                <div className="h-7 w-7 rounded-lg bg-brand-sage/15 flex items-center justify-center mb-4 group-hover:scale-105 transition-all">
                  <CheckCircle className="h-4 w-4 text-brand-sage" />
                </div>
                <h4 className="text-xs font-black uppercase tracking-wider text-neutral-100 group-hover:text-white transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-brand-sage font-bold mt-1.5 mb-3">
                  {item.benefit}
                </p>
                <p className="text-[11px] text-neutral-400 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
              
              <div className="border-t border-white/[0.06] pt-3 mt-4 text-[9px] text-neutral-500 font-extrabold uppercase tracking-wider">
                ✓ ACCESO INMEDIATO E ILIMITADO
              </div>
            </motion.div>
          ))}

          {/* Special Callout Bento Card */}
          <div className="bg-[#050b08] border border-brand-sage/25 rounded-2xl p-6 flex flex-col justify-between md:col-span-2 lg:col-span-1 shadow-2xl bento-glow-border relative">
            <div>
              <span className="text-[9px] bg-brand-sage text-brand-dark px-2.5 py-1 rounded-full font-black uppercase block w-max tracking-widest mb-4">
                DIGITAL COMPACTO
              </span>
              <h4 className="text-xs font-black uppercase text-[#e1eee6] leading-snug">
                ¿Cómo se entrega?
              </h4>
              <p className="text-[11px] text-neutral-300 font-light mt-2 leading-relaxed">
                Es un protocolo 100% digital e interactivo. Nada más completar tu compra, te proporcionamos una contraseña privada para descargar el compendio completo en PDF/e-Pub, compatible con tu smartphone, tablet, ordenador o Kindle.
              </p>
            </div>

            <div className="mt-4">
              <a
                href="#checkout"
                onClick={scrollToCheckout}
                className="w-full inline-flex justify-center items-center gap-1.5 py-2.5 px-4 rounded-xl bg-brand-accent/15 hover:bg-brand-accent/25 border border-brand-accent/30 text-[10px] font-bold text-brand-accent uppercase transition-all"
              >
                <span>Reservar licencia ahora</span>
                <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
