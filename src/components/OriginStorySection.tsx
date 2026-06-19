import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, HelpCircle } from 'lucide-react';

export default function OriginStorySection() {
  return (
    <section 
      id="proof-big-stories" 
      className="w-full bg-brand-dark/95 py-20 px-4 text-white relative overflow-hidden"
    >
      {/* Background soft ambient details */}
      <div className="absolute top-10 right-10 h-96 w-96 rounded-full bg-brand-sage/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 h-96 w-96 rounded-full bg-brand-sage/5 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-4xl z-10">
        
        {/* Header Section */}
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-1 bg-brand-sage/10 text-brand-sage font-black text-[10px] px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3">
            <Heart className="h-3 w-3 text-brand-sage fill-brand-sage/25" /> El Corazón del Proyecto
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-black tracking-tight text-neutral-100 uppercase">
            ¿Por qué creé Cortisol Bajo?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-xs sm:text-sm text-neutral-450 font-light">
            Una historia honesta sobre la transición del modo supervivencia al equilibrio biológico cotidiano.
          </p>
        </div>

        {/* Narrative Letter Container */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-brand-deep/90 border border-white/[0.08] backdrop-blur-md rounded-3xl p-6 sm:p-12 shadow-2xl relative bento-glow-border max-w-3xl mx-auto"
        >
          {/* Subtle decoration icon */}
          <div className="absolute -top-4 -right-4 h-12 w-12 rounded-full bg-[#1b2521] border border-white/[0.08] flex items-center justify-center text-brand-sage shadow-md">
            <Sparkles className="h-5 w-5 text-brand-sage" />
          </div>

          <div className="space-y-6 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
            
            <p>
              Durante mucho tiempo viví con síntomas que parecían normales porque muchas personas los experimentan cada día.
            </p>

            <p className="border-l-2 border-brand-sage/30 pl-4 italic text-neutral-200">
              Me despertaba cansada, sentía estrés constante, dormía peor de lo que necesitaba y poco a poco empecé a notar cómo mi energía y bienestar se veían afectados.
            </p>

            <p>
              Busqué respuestas, probé diferentes estrategias y comprendí algo importante: <strong className="text-white font-semibold">no necesitaba más información complicada</strong>. Necesitaba una guía práctica que me ayudara a aplicar pequeñas acciones cada día.
            </p>

            {/* Special Callout Row */}
            <div className="p-5 my-4 bg-black/30 rounded-2xl border border-brand-sage/10 flex items-start gap-3">
              <span className="text-xl shrink-0 mt-0.5" role="img" aria-label="App Badge">📱</span>
              <div className="text-xs sm:text-sm">
                <p className="font-bold text-white mb-1">Por eso nació Cortisol Bajo.</p>
                No como un ebook más, sino como un <strong className="text-brand-sage font-extrabold focus:outline-none">sistema guiado acompañado por una aplicación interactiva</strong> diseñada para ayudarte a recuperar hábitos de bienestar, descanso y equilibrio de forma simple y paso a paso.
              </div>
            </div>

            <p>
              Creé esta herramienta pensando en las personas que sienten que viven en modo supervivencia y quieren volver a sentirse dueñas de su energía, su descanso y su tranquilidad.
            </p>

            <p>
              Si yo hubiera tenido una herramienta así cuando más la necesitaba, me habría ahorrado mucho tiempo, frustración y confusión.
            </p>

            <p className="text-white font-medium text-base pt-4">
              Hoy quiero compartirla contigo.
            </p>

          </div>

          {/* Signature Footer */}
          <div className="mt-8 pt-6 border-t border-white/[0.05] flex justify-between items-center flex-wrap gap-4">
            <div>
              <p className="text-xs sm:text-sm font-black uppercase text-brand-sage tracking-wider">
                — Raíz Creadora
              </p>
              <p className="text-[10px] text-neutral-500 font-mono uppercase">
                Creadora de Cortisol Bajo™
              </p>
            </div>
            
            <div className="inline-flex items-center gap-1 px-3 py-1 bg-white/[0.03] border border-white/[0.06] rounded-xl text-[10px] text-neutral-400">
              <HelpCircle className="h-3 w-3 text-brand-sage" />
              <span>Proyecto de Bienestar Hormonal</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
