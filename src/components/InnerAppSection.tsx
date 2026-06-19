import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, HeartHandshake, BarChart3, Moon, Zap, Sparkles } from 'lucide-react';
import cortisolBajoCoverImg from '../assets/images/cortisol_bajo_app.jpg';

export default function InnerAppSection() {
  const innerBenefits = [
    {
      id: "benefit-daily-guide",
      emoji: "📱",
      icon: <Smartphone className="h-5 w-5 text-brand-sage" />,
      title: "Guía diaria paso a paso",
      desc: "Recibe instrucciones claras para saber exactamente qué hacer cada día."
    },
    {
      id: "benefit-stress-sos",
      emoji: "🫁",
      icon: <HeartHandshake className="h-5 w-5 text-brand-sage" />,
      title: "Herramientas SOS para momentos de estrés",
      desc: "Accede rápidamente a ejercicios prácticos cuando necesites recuperar la calma."
    },
    {
      id: "benefit-habit-tracking",
      emoji: "📊",
      icon: <BarChart3 className="h-5 w-5 text-brand-sage" />,
      title: "Seguimiento de hábitos y progreso",
      desc: "Visualiza tu evolución y mantente motivado durante el proceso."
    },
    {
      id: "benefit-sleep-protocols",
      emoji: "🌙",
      icon: <Moon className="h-5 w-5 text-brand-sage" />,
      title: "Protocolos para mejorar el descanso",
      desc: "Aplica hábitos simples diseñados para apoyar un sueño más reparador."
    },
    {
      id: "benefit-anywhere-access",
      emoji: "⚡",
      icon: <Zap className="h-5 w-5 text-brand-sage" />,
      title: "Acceso inmediato desde móvil o tablet",
      desc: "Utiliza el sistema donde y cuando lo necesites."
    }
  ];

  return (
    <section 
      id="inner-app-showcase" 
      className="bg-gradient-to-b from-brand-dark via-brand-deep to-brand-dark py-20 px-4 border-b border-white/[0.04] relative overflow-hidden"
    >
      {/* Soft atmospheric gradient highlights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[450px] w-[450px] rounded-full bg-brand-sage/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-10 h-72 w-72 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 bg-brand-sage/10 border border-brand-sage/20 rounded-full px-4 py-1.5 text-[10px] font-black text-brand-sage uppercase tracking-widest mb-4"
            id="inner-app-badge"
          >
            <Sparkles className="h-3 w-3" /> Ecosistema Exclusivo
          </motion.div>
          
          <h2 
            className="text-3xl sm:text-5xl font-black uppercase text-glow tracking-tight leading-none mb-4 text-white"
            id="inner-app-title"
          >
            Conoce Cortisol Bajo por dentro
          </h2>
          
          <p 
            className="text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto font-light"
            id="inner-app-subtitle"
          >
            Descubre la aplicación interactiva que te acompaña paso a paso durante tu proceso de recuperación y bienestar.
          </p>
        </div>

        {/* Highlight Image Display Container */}
        <div id="inner-app-image-container" className="flex justify-center mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 25 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.01 }}
            className="relative max-w-[340px] md:max-w-[420px] w-full flex justify-center items-center"
            id="inner-app-image-wrapper"
          >
            <img
              src={cortisolBajoCoverImg}
              alt="Cortisol Bajo Aplicación Premium Interactiva"
              className="w-full h-auto object-contain rounded-[28px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border border-white/10"
              referrerPolicy="no-referrer"
              id="inner-app-premium-image"
            />
          </motion.div>
        </div>

        {/* Benefits Display Block */}
        <div id="inner-app-benefits-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {innerBenefits.map((b, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -3 }}
              className="bg-brand-deep/70 border border-white/[0.08] hover:border-brand-sage/30 rounded-2xl p-6 transition-all bento-glow-border"
              id={b.id}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-brand-sage/10 border border-brand-sage/20 flex items-center justify-center">
                  {b.icon}
                </div>
                <h3 className="text-sm font-extrabold text-white uppercase tracking-tight leading-snug">
                  {b.title}
                </h3>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
