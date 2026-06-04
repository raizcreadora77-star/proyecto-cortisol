import React from 'react';

interface BrandHeaderProps {
  activeReaders: number;
  scrollToCheckout: (e: React.MouseEvent) => void;
}

export default function BrandHeader({ activeReaders, scrollToCheckout }: BrandHeaderProps) {
  return (
    <header id="brand-header" className="sticky top-0 bg-brand-dark/90 backdrop-blur-md border-b border-white/[0.06] py-3.5 px-4 sm:px-6 z-50 shadow-lg">
      <div className="mx-auto max-w-6xl flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-brand-sage flex items-center justify-center font-extrabold text-[#070908] shadow-inner text-sm">
            CB
          </div>
          <div>
            <h1 className="text-xs sm:text-sm font-black tracking-tight text-white uppercase">
              Cortisol Bajo
            </h1>
            <p className="text-[9px] -mt-0.5 text-brand-sage font-bold uppercase tracking-widest">
              Protocolo de 14 Días
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-1 text-[9px] sm:text-xs text-neutral-400">
            <span className="relative flex h-2 w-2 mr-0.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span><strong className="font-extrabold text-white">{activeReaders}</strong> <span className="hidden xs:inline">leyendo ya</span><span className="xs:hidden">leyendo</span></span>
          </div>
          <a
            href="#checkout"
            onClick={scrollToCheckout}
            className="px-2.5 py-1.5 sm:px-4 sm:py-2.5 rounded-full bg-brand-sage hover:bg-emerald-600 text-brand-dark font-black text-[9px] sm:text-xs tracking-wider uppercase transition-all whitespace-nowrap shrink-0"
          >
            👉 RECUPERAR SUEÑO
          </a>
        </div>
      </div>
    </header>
  );
}
