import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-neutral-400 py-10 px-4 text-center text-[10px] sm:text-xs">
      <div className="mx-auto max-w-6xl space-y-4">
        <p className="tracking-tight">
          © {new Date().getFullYear()} CORTISOL BAJO™. Todos los derechos reservados.
        </p>
        <p className="max-w-2xl mx-auto text-[9px] text-neutral-600 leading-relaxed font-light">
          Descargo de responsabilidad: La información contenida en esta página web se proporciona únicamente con fines informativos e ilustrativos. No constituye asesoramiento profesional, diagnóstico médico, consultas terapéuticas ni planes curativos vinculantes. Consulte siempre a su especialista de salud antes de ajustar su alimentación escolar o estilo diario.
        </p>
        <div className="flex justify-center gap-4 text-[9px] text-neutral-500 font-medium">
          <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-neutral-400 underline decoration-neutral-700">Términos de Servicio</a>
          <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-neutral-400 underline decoration-neutral-700">Políticas de Privacidad</a>
          <a href="#support" onClick={(e) => e.preventDefault()} className="hover:text-neutral-400 underline decoration-neutral-700">Contacto de Soporte</a>
        </div>
      </div>
    </footer>
  );
}
