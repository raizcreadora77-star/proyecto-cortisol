import React from 'react';
import { practicalTimeline } from '../data';

interface TimelineSectionProps {
  scrollToCheckout: (e: React.MouseEvent) => void;
}

export default function TimelineSection({ scrollToCheckout }: TimelineSectionProps) {
  return (
    <section id="timeline-segment" className="bg-[#101412] py-16 px-4 text-white">
      <div className="mx-auto max-w-4xl">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[10px] bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full text-emerald-400 font-bold uppercase tracking-widest inline-block mb-3">
            📅 EL CRONOGRAMA DE TU TRANSFORMACIÓN
          </span>
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-glow tracking-tight text-neutral-100">
            Lo que hará una persona típica
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-neutral-400">
            Cada día está perfectamente estructurado para que no tengas que tomar decisiones complejas. Solo abre el PDF y mira tu día.
          </p>
        </div>

        {/* Timeline tracking nodes */}
        <div className="relative border-l-2 border-neutral-800 ml-4 md:ml-12 pl-6 md:pl-10 space-y-8 max-w-2xl mx-auto">
          {practicalTimeline.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline dot badge */}
              <span className="absolute -left-12 md:-left-16 top-1.5 h-6 w-12 rounded-full bg-brand-accent text-neutral-950 text-[10px] font-black flex items-center justify-center border-2 border-[#101412] shadow-sm transform group-hover:scale-105 transition-transform select-none">
                {item.day}
              </span>

              <div className="bg-[#141b18] border border-white/5 rounded-2xl p-5 hover:border-brand-accent/10 transition-colors">
                <h4 className="text-xs font-bold text-neutral-100 uppercase tracking-widest">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed font-light mt-1.5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-xs text-neutral-500 max-w-sm mx-auto mb-4">
            ¿Listo para empezar tu propio Día 1 hoy mismo y detener la fatiga?
          </p>
          <a
            href="#checkout"
            onClick={scrollToCheckout}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-brand-accent hover:bg-[#c99a6b] text-neutral-950 font-bold text-xs uppercase shadow-lg transition-transform"
          >
            <span>👉 RESERVAR MI PROTOCOLO AHORA</span>
          </a>
        </div>

      </div>
    </section>
  );
}
