import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Sparkles, Star } from 'lucide-react';

interface MockupSectionProps {
  coverImage: string;
}

export default function MockupSection({ coverImage }: MockupSectionProps) {
  const isPreformedMockup = coverImage.includes('sin-fondo') || coverImage.includes('postimg.cc') || coverImage.includes('imgur.com');

  if (isPreformedMockup) {
    return (
      <div id="mockups-container" className="relative select-none py-4">
        {/* Background radial glow */}
        <div className="absolute top-1/2 left-1/2 -ml-36 -mt-36 h-72 w-72 rounded-full bg-brand-sage/20 blur-3xl" />

        {/* Stacked Devices Mockup Layout designed elegant single presentation */}
        <div className="relative mx-auto flex h-[350px] max-w-[420px] items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="relative z-20 max-h-full w-full flex justify-center items-center"
          >
            <img
              src={coverImage}
              alt="Cortisol Bajo Mockup Oficial"
              className="max-h-[310px] w-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.55)] hover:drop-shadow-[0_30px_45px_rgba(0,0,0,0.7)] transition-all duration-300"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* 4. EXCLUSIVE BONUSES BUNDLE BADGE (Floating around the side) */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="absolute -right-2 top-8 z-40 flex items-center gap-1.5 rounded-full border border-yellow-200/20 bg-yellow-400 px-3 py-1.5 text-xs font-bold text-brand-dark shadow-xl hover:scale-105 transition-all duration-300 pointer-events-auto"
          >
            <Sparkles className="h-3 w-3 animate-spin text-brand-dark" />
            <span>INCLUYE 4 BONOS VIP🎁</span>
          </motion.div>
          
          {/* Secure Guarantee seal */}
          <div className="absolute -left-6 top-10 z-40 hidden md:flex flex-col items-center justify-center rounded-full bg-emerald-700/90 text-white p-2.5 text-[10px] font-bold tracking-tight shadow-lg border border-emerald-500/30">
            <ShieldCheck className="h-5 w-5 mb-0.5 text-neutral-100" />
            <span>Garantía</span>
            <span className="-mt-1 text-[8px] text-emerald-200">7 Días</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="mockups-container" className="relative select-none py-4">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -ml-36 -mt-36 h-72 w-72 rounded-full bg-brand-sage/20 blur-3xl" />

      {/* Stacked Devices Mockup Layout */}
      <div className="relative mx-auto flex h-[350px] max-w-[420px] items-center justify-center p-4">
        
        {/* 1. TABLET MOCKUP (Left-facing, shifted backward slightly) */}
        <motion.div
          initial={{ opacity: 0, x: -30, rotate: -6 }}
          animate={{ opacity: 1, x: 0, rotate: -4 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="absolute left-4 bottom-8 z-10 h-[210px] w-[155px] overflow-hidden rounded-lg bg-zinc-900 p-[3px] shadow-2xl md:h-[230px] md:w-[165px]"
        >
          {/* Bezel */}
          <div className="relative h-full w-full overflow-hidden rounded-[5px] bg-[#162420]">
            <img
              src={coverImage}
              alt="Cortisol Bajo Tablet View"
              className="h-full w-full object-cover brightness-95 contrast-105"
              referrerPolicy="no-referrer"
            />
            {/* Screen sheen reflection */}
            <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
            
            {/* Home button indicator */}
            <div className="absolute bottom-1 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-white/20" />
          </div>
        </motion.div>

        {/* 2. MAIN PRINTED BOOK / DIGITAL PACK (Center Stage, big and prominent) */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, type: 'spring' }}
          className="relative z-20 h-[270px] w-[190px] overflow-hidden rounded-r-md rounded-l-[3px] bg-brand-deep shadow-[15px_20px_40px_rgba(0,0,0,0.65)] hover:shadow-[15px_30px_50px_rgba(0,0,0,0.85)] transition-shadow duration-300 md:h-[300px] md:w-[210px]"
        >
          {/* Realistic Book Spine highlight line */}
          <div className="absolute left-[2px] top-0 bottom-0 w-[4px] bg-white/10 z-30" />
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-black/40 z-30" />
          
          <img
            src={coverImage}
            alt="Cortisol Bajo Portada"
            className="h-full w-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          {/* Premium gloss finish */}
          <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/15 to-transparent pointer-events-none" />
          
          {/* Badge overlays */}
          <div className="absolute top-3 right-3 rounded-full bg-brand-sage px-2 py-0.5 text-[8px] font-bold text-brand-dark tracking-widest shadow-lg animate-pulse">
            ★ VIP
          </div>
        </motion.div>

        {/* 3. SMARTPHONE MOCKUP (Right foreground, floating and tilted slightly) */}
        <motion.div
          initial={{ opacity: 0, x: 30, rotate: 8 }}
          animate={{ opacity: 1, x: 0, rotate: 6 }}
          transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
          className="absolute right-2 bottom-4 z-30 h-[175px] w-[95px] overflow-hidden rounded-[18px] bg-black p-[3.5px] shadow-[10px_15px_30px_rgba(0,0,0,0.55)] md:h-[190px] md:w-[105px]"
        >
          {/* Curved Screen Border */}
          <div className="relative h-full w-full overflow-hidden rounded-[15px] bg-[#0f1412]">
            <img
              src={coverImage}
              alt="Cortisol Bajo Mobile App"
              className="h-full w-full object-cover object-right"
              referrerPolicy="no-referrer"
            />
            {/* Gloss sheen */}
            <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/15 to-transparent pointer-events-none" />
            
            {/* Dynamic island notch simulator */}
            <div className="absolute top-1 left-1/2 h-2.5 w-7 -translate-x-1/2 rounded-full bg-black" />
          </div>
        </motion.div>

        {/* 4. EXCLUSIVE BONUSES BUNDLE BADGE (Floating around the side) */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          className="absolute -right-2 top-8 z-40 flex items-center gap-1.5 rounded-full border border-yellow-200/20 bg-yellow-400 px-3 py-1.5 text-xs font-bold text-brand-dark shadow-xl hover:scale-105 transition-all duration-300 pointer-events-auto"
        >
          <Sparkles className="h-3 w-3 animate-spin text-brand-dark" />
          <span>INCLUYE 4 BONOS VIP🎁</span>
        </motion.div>
        
        {/* Secure Guarantee seal */}
        <div className="absolute -left-6 top-10 z-40 hidden md:flex flex-col items-center justify-center rounded-full bg-emerald-700/90 text-white p-2.5 text-[10px] font-bold tracking-tight shadow-lg border border-emerald-500/30">
          <ShieldCheck className="h-5 w-5 mb-0.5 text-neutral-100" />
          <span>Garantía</span>
          <span className="-mt-1 text-[8px] text-emerald-200">7 Días</span>
        </div>
      </div>
    </div>
  );
}
