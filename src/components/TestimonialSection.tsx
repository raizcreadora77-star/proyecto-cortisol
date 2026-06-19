// TESTIMONIALSECTION.TSX - RECONFIGURED FOR BENTO GRID STYLING
import React from 'react';
import { motion } from 'motion/react';
import { Star, ShieldCheck, CheckCircle, Users } from 'lucide-react';
import { TestimonialItem } from '../types';

interface TestimonialSectionProps {
  layoutType: 'quick-stars' | 'method-validation' | 'big-stories';
  testimonials: TestimonialItem[];
  title?: string;
  subtitle?: string;
}

export default function TestimonialSection({
  layoutType,
  testimonials,
  title,
  subtitle
}: TestimonialSectionProps) {
  if (layoutType === 'quick-stars') {
    return (
      <div className="w-full bg-brand-dark/40 border-y border-white/[0.06] py-10 px-4">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <div style={{ borderColor: '#ffffff' }} className="inline-flex items-center gap-1.5 rounded-full bg-brand-sage/10 border px-4 py-1.5 text-xs font-semibold text-brand-sage shadow-xs">
              <Users className="h-3.5 w-3.5 text-brand-sage" />
              <span>Más de 4,750 personas ya comenzaron a recuperar su descanso</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-2xl border border-white/[0.08] bg-brand-deep p-6 shadow-xl backdrop-blur-md hover:border-brand-sage/40 transition-all duration-300 group bento-glow-border"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-brand-sage">
                    {t.outcome}
                  </span>
                  <div className="flex gap-0.5 text-amber-400">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400 stroke-none" />
                    ))}
                  </div>
                </div>
                <p className="italic text-neutral-350 text-[13px] leading-relaxed mb-5 group-hover:text-white transition-colors duration-200">
                  "{t.shortQuote}"
                </p>
                <div className="flex items-center gap-2.5">
                  <div className="h-7 w-7 rounded-full bg-brand-sage/20 text-xs font-bold text-white flex items-center justify-center border border-brand-sage/30">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-neutral-100">{t.name}, {t.age} años</h4>
                    <span className="text-[10px] text-brand-sage flex items-center gap-1">
                      <CheckCircle className="h-2.5 w-2.5 text-brand-sage" /> Compra Verificada
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (layoutType === 'method-validation') {
    return (
      <div className="w-full bg-[#fbfbf9] text-brand-text-dark py-16 px-4 shadow-inner border-y border-neutral-200">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-sage bg-brand-sage/10 px-3 py-1 rounded-full">
              Validado por Resultados
            </span>
            <h3 className="mt-3 font-extrabold tracking-tight text-neutral-900 text-2xl sm:text-3xl uppercase leading-snug">
              ¿Por qué es mil veces más fácil que cualquier otra solución?
            </h3>
            <p className="mt-2 text-zinc-505 text-xs sm:text-sm">
              Nada de dietas restrictivas ni rutinas infinitas de Zen. Mira lo que dicen nuestros alumnos:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="rounded-3xl bg-white p-6 border border-neutral-200 shadow-sm relative flex flex-col justify-between hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#064E3B] bg-emerald-105/70 border border-emerald-200 px-2.5 py-1 rounded-full">
                      {t.outcome}
                    </span>
                    <div className="flex gap-0.5 text-amber-500">
                      {Array.from({ length: t.stars }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-amber-500 stroke-none" />
                      ))}
                    </div>
                  </div>
                  <p className="italic text-zinc-850 text-sm leading-relaxed mb-6 font-semibold">
                    "{t.shortQuote}"
                  </p>
                  {t.fullQuote && (
                    <p className="text-zinc-600 text-xs leading-relaxed mb-6 font-light">
                      {t.fullQuote}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-3 border-t border-neutral-100 pt-4 mt-auto">
                  <div className="h-8 w-8 rounded-full bg-brand-sage/10 text-brand-text-dark text-sm font-bold flex items-center justify-center border border-brand-sage/20">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#111827]">{t.name}, {t.age} años</h4>
                    <span className="text-[10px] text-[#10b981] font-semibold">Paciente Recuperado</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // BIG STORIES LAYOUT
  return (
    <div className="w-full bg-brand-dark/95 py-20 px-4 text-white relative overflow-hidden">
      {/* Background soft ambient details */}
      <div className="absolute top-10 right-10 h-96 w-96 rounded-full bg-brand-sage/5 blur-3xl" />
      <div className="absolute -bottom-10 -left-10 h-96 w-96 rounded-full bg-brand-sage/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="text-xs font-black uppercase tracking-widest text-brand-sage">
            HISTORIAS INSPIRADORAS
          </span>
          <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-4xl text-neutral-100 uppercase">
            {title || "Transformaciones unidas por el mismo método"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-sm text-neutral-400 font-light">
            {subtitle || "Testimonios reales de alumnos que aplicaron el protocolo de 14 días y restablecieron su equilibrio químico."}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex flex-col rounded-3xl border border-white/[0.08] bg-brand-deep p-6 md:p-8 backdrop-blur-md shadow-2xl relative bento-glow-border hover:border-brand-sage/30 transition-all duration-300"
            >
              {/* Stars badge */}
              <div className="mb-4 flex gap-0.5 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 stroke-none" />
                ))}
              </div>

              <blockquote className="mb-6 flex-1">
                <p className="text-base font-bold italic text-neutral-100 leading-snug mb-3">
                  "{t.shortQuote}"
                </p>
                {t.fullQuote && (
                  <p className="text-xs leading-relaxed text-neutral-400 font-light">
                    {t.fullQuote}
                  </p>
                )}
              </blockquote>

              {/* Patient bio with image */}
              <div className="mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                {t.image ? (
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-11 w-11 rounded-full object-cover border-2 border-brand-sage/30 shadow-inner"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="h-11 w-11 rounded-full bg-brand-sage/10 text-white font-bold flex items-center justify-center border border-brand-sage/20">
                    {t.name[0]}
                  </div>
                )}
                <div>
                  <h4 className="text-xs font-bold text-neutral-100">{t.name}, {t.age} años</h4>
                  <p className="text-[10px] text-neutral-500">{t.location || "América Latina"}</p>
                </div>
              </div>

              {/* Transformation outcome label */}
              <div className="absolute top-6 right-6 inline-flex max-w-[150px] items-center gap-1 rounded-full bg-brand-sage/10 border border-brand-sage/20 px-2.5 py-0.5 text-[9px] font-bold text-brand-sage uppercase tracking-tight">
                <ShieldCheck className="h-2.5 w-2.5 shrink-0" />
                <span>{t.outcome}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
