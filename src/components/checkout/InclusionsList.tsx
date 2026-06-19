import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function InclusionsList() {
  return (
    <div className="bg-brand-dark/50 rounded-xl p-4 border border-white/5 mb-8 text-xs text-neutral-300 space-y-2 animate-fadeIn">
      <span className="text-[10px] font-bold text-brand-sage uppercase block mb-2">
        Tu compra incluye hoy de forma inmediata:
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
        <div className="flex items-center gap-2 text-neutral-200">
          <span className="shrink-0 text-emerald-400">✅</span>
          <span className="font-medium">Aplicación Cortisol Bajo</span>
        </div>
        <div className="flex items-center gap-2 text-neutral-200">
          <span className="shrink-0 text-emerald-400">✅</span>
          <span className="font-medium">Sistema Guiado de 14 Días</span>
        </div>
        <div className="flex items-center gap-2 text-neutral-200">
          <span className="shrink-0 text-emerald-400">✅</span>
          <span className="font-medium">Guía Rápida de Inicio</span>
        </div>
        <div className="flex items-center gap-2 text-neutral-200">
          <span className="shrink-0 text-emerald-400">✅</span>
          <span className="font-medium">Bono #1: Protocolo SOS Ansiedad</span>
        </div>
        <div className="flex items-center gap-2 text-neutral-200">
          <span className="shrink-0 text-emerald-400">✅</span>
          <span className="font-medium">Bono #2: Menú Anticortisol</span>
        </div>
        <div className="flex items-center gap-2 text-neutral-200">
          <span className="shrink-0 text-emerald-400">✅</span>
          <span className="font-medium">Bono #3: Ritual Sueño Profundo</span>
        </div>
        <div className="flex items-center gap-2 text-neutral-200 sm:col-span-2">
          <span className="shrink-0 text-emerald-400">✅</span>
          <span className="font-medium font-semibold text-brand-sage">Garantía de 7 Días</span>
        </div>
      </div>
    </div>
  );
}
