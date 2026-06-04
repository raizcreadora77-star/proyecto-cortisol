import React from 'react';
import { Flame } from 'lucide-react';

interface UrgencyBannerProps {
  timeLeft: number;
}

export default function UrgencyBanner({ timeLeft }: UrgencyBannerProps) {
  // Format time (MM:SS)
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div id="urgency-banner" className="bg-brand-dark border-b border-white/[0.06] px-4 py-2.5 text-center relative z-20">
      <div className="mx-auto max-w-6xl flex items-center justify-center flex-wrap gap-2 text-[10px] sm:text-xs">
        <span className="inline-flex items-center gap-1 bg-rose-600/25 text-rose-400 border border-rose-500/35 font-extrabold px-2 py-0.5 rounded-sm animate-pulse shrink-0 tracking-widest uppercase">
          ⚠️ ADVERTENCIA DE TRÁFICO DIRECTO
        </span>
        <span className="text-neutral-300 font-semibold">
          Descuento del 80% activo. El enlace expira al finalizar el temporizador:
        </span>
        <span className="inline-flex items-center font-mono font-black text-amber-400 bg-black/40 px-2 py-0.5 rounded border border-amber-400/20 tracking-wide shrink-0">
          <Flame className="h-3 w-3 mr-1 text-amber-400 fill-amber-400 shrink-0" />
          {formatTime(timeLeft)}
        </span>
      </div>
    </div>
  );
}
