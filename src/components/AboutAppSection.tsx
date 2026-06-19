import React from 'react';
import { motion } from 'motion/react';
import { 
  Smartphone, 
  Moon, 
  HeartHandshake, 
  BarChart3, 
  Apple, 
  Info,
  Sparkles
} from 'lucide-react';

export default function AboutAppSection() {
  const features = [
    {
      emoji: "📱",
      icon: <Smartphone className="h-5 w-5 text-brand-sage" />,
      title: "Una aplicación que te guía paso a paso",
      desc: "Accede al ecosistema digital interactivo optimizado para tu móvil o tablet, diseñado para que sepas exactamente qué hacer en cada momento."
    },
    {
      emoji: "🌙",
      icon: <Moon className="h-5 w-5 text-brand-sage" />,
      title: "Protocolos diarios para reducir el estrés",
      desc: "Rutinas guiadas y de fácil implementación que encajan de forma fluida en tu jornada diaria, sin abrumarte."
    },
    {
      emoji: "🫁",
      icon: <HeartHandshake className="h-5 w-5 text-brand-sage" />,
      title: "Herramientas SOS para momentos de ansiedad",
      desc: "Técnicas de regulación somática rápidas e instantáneas para apagar el estado de alerta cuando la calma parece desvanecerse."
    },
    {
      emoji: "📊",
      icon: <BarChart3 className="h-5 w-5 text-brand-sage" />,
      title: "Seguimiento de progreso y hábitos",
      desc: "Registra tu evolución, monitorea el reinicio de tus patrones biológicos y celebra tus victorias diarias de descanso."
    },
    {
      emoji: "🥗",
      icon: <Apple className="h-5 w-5 text-brand-sage" />,
      title: "Estrategias simples de recuperación",
      desc: "Pautas nutricionales y hábitos adaptativos directos a tu balance hormonal sin dietas estrictas ni suplementos costosos."
    }
  ];

  return (
    <section 
      id="about-cortisol-bajo-system" 
      className="bg-brand-dark py-20 px-4 border-b border-white/[0.04] bg-bento-grid relative overflow-hidden"
    >
      {/* Decorative ambient blurred backing */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-brand-sage/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-5xl relative z-10">
        
        {/* Anti-Ebook Header Tagline */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 bg-brand-sage/10 border border-brand-sage/20 rounded-full px-4 py-1.5 text-[10px] font-black text-brand-sage uppercase tracking-widest mb-4"
          >
            <Sparkles className="h-3 w-3" /> Claridad Absoluta
          </motion.div>
          
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-glow tracking-tight leading-none mb-4">
            ¿Qué es Cortisol Bajo?
          </h2>
          
          {/* Main Statement */}
          <div className="inline-block bg-rose-500/10 border border-rose-500/30 rounded-2xl px-6 py-3.5 mb-6">
            <p className="text-sm sm:text-base font-extrabold text-rose-400 tracking-wider uppercase mb-0.5">
              ⚠️ CORTISOL BAJO NO ES UN EBOOK.
            </p>
            <p className="text-xs text-neutral-300">
              Es un ecosistema guiado moderno listo para tu día a día.
            </p>
          </div>

          <p className="text-base sm:text-lg text-neutral-200 font-medium leading-relaxed max-w-2xl mx-auto mb-8">
            Es un sistema guiado de 14 días diseñado para ayudarte a recuperar el control de tu energía, tu sueño y tu bienestar diario.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -3 }}
              className="bg-brand-deep border border-white/[0.08] hover:border-brand-sage/40 rounded-2xl p-6 transition-all bento-glow-border flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-sage/10 border border-brand-sage/20 flex items-center justify-center">
                    {feat.icon}
                  </div>
                  <span className="text-xl select-none" role="img" aria-label="Feature Emoji">
                    {feat.emoji}
                  </span>
                </div>
                
                <h3 className="text-sm font-extrabold text-white uppercase tracking-tight mb-2 leading-snug">
                  {feat.title}
                </h3>
                
                <p className="text-xs text-neutral-400 leading-relaxed font-light">
                  {feat.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.04] text-[9px] text-zinc-500 font-bold uppercase tracking-wider">
                SISTEMA INTERACTIVO
              </div>
            </motion.div>
          ))}

          {/* Conclusion Promo Card inside Grid to complete 6 slots visual symmetry */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="bg-gradient-to-br from-brand-deep to-emerald-950/20 border border-brand-sage/20 rounded-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <div className="h-10 w-10 rounded-xl bg-brand-sage/20 flex items-center justify-center mb-4 text-[#e1eee6]">
                <Info className="h-5 w-5 text-brand-sage" />
              </div>
              <h3 className="text-sm font-extrabold text-neutral-100 uppercase tracking-tight mb-2">
                Modo Recuperación
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                Todo organizado para ayudarte a pasar del modo supervivencia al modo recuperación de forma práctica y sencilla.
              </p>
            </div>

            <div className="text-[9px] text-brand-sage font-black uppercase tracking-widest mt-4">
              ✔ 100% PRÁCTICO Y PASO A PASO
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
