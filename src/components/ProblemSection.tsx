import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { painPoints } from '../data';

export default function ProblemSection() {
  return (
    <section id="problem-segment" className="bg-[#0a0d0b] py-20 px-4 border-b border-white/[0.04] bg-bento-grid">
      <div className="mx-auto max-w-5xl">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 bg-rose-500/10 border border-rose-500/25 text-rose-400 rounded-full px-4 py-1.5 text-[10px] font-bold tracking-widest mb-4 uppercase">
            🚫 Cuestiona todo lo que te han dicho
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-100 uppercase leading-snug">
            ¿Y si el problema no es tu edad, tu metabolismo ni tu tiroides?
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-neutral-400 max-w-2xl mx-auto leading-relaxed italic">
            "¿Y si es el estrés el que te está destruyendo mientras intentas arreglarlo todo con más esfuerzo?"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Mirror Pain Points Checklist */}
          <div className="md:col-span-7 space-y-4">
            <h3 className="text-xs font-black text-brand-sage uppercase tracking-widest mb-3">
              ¿Te resulta familiar alguna de estas batallas diarias?
            </h3>
            
            <div className="space-y-3">
              {painPoints.map((item, id) => (
                <div
                  key={id}
                  className="flex items-start gap-3 bg-brand-deep p-4 rounded-2xl border border-white/[0.05] hover:border-rose-500/25 transition-all cursor-default"
                >
                  <div className="h-5 w-5 rounded-full bg-rose-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle className="h-3 w-3 text-rose-400" />
                  </div>
                  <span className="text-xs sm:text-sm text-neutral-300 my-auto font-medium">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Emotional copy and statistics */}
          <div className="md:col-span-5 h-full">
            <div className="bg-brand-deep p-6 sm:p-8 rounded-3xl border border-white/[0.08] h-full flex flex-col justify-between shadow-2xl bento-glow-border">
              <div>
                <span className="text-[10px] font-extrabold text-rose-400 tracking-wider block mb-2 uppercase">
                  El desgaste acumulativo
                </span>
                <h4 className="text-sm sm:text-md font-black text-white uppercase leading-snug mb-3 font-semibold">
                  Estás agotando tus reservas vitales
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed space-y-2 font-light">
                  <span>Vivir cansado no es normal. Despertarse con el corazón latiendo a mil de madrugada no es 'falta de vitaminas'.</span>
                  <br /><br />
                  <span>Tu cuerpo no está roto. Tu glándula tiroides no ha decidido rebelarse. Simplemente, estás atrapado en el <strong>modo supervivencia quimico</strong>, cargado de alertas químicas inconscientes. Y forzándote a hacer más dietas estrictas solo añades más gasolina al fuego.</span>
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-white/[0.06] flex gap-3.5 items-center">
                <div className="text-3xl font-black text-rose-500">93%</div>
                <div className="text-[10px] text-neutral-450 leading-tight">
                  de las personas con fatiga crónica sufren de picos ocultos de cortisol sin saberlo.
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
