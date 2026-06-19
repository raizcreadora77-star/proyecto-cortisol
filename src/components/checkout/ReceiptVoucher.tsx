import React from 'react';
import { Download } from 'lucide-react';

interface ReceiptVoucherProps {
  name: string;
  email: string;
  activePrice: number;
  onReset: () => void;
}

export default function ReceiptVoucher({
  name,
  email,
  activePrice,
  onReset,
}: ReceiptVoucherProps) {
  const handleAlert = (e: React.MouseEvent) => {
    e.preventDefault();
    // Use standard non-blocking mechanism or simple info update inside context if window.alert is constrained, 
    // but preserving the original code behavior as much as possible safely.
    alert('¡Descargando el paquete de bienvenida PDF en su dispositivo móvil/escritorio!');
  };

  return (
    <div className="text-left font-mono text-xs">
      {/* Simulated Printed Voucher / Receipt */}
      <div className="bg-white text-zinc-950 rounded-2xl p-6 border-t-8 border-brand-accent shadow-inner text-left my-8">
        <div className="flex justify-between items-center border-b border-dashed border-neutral-300 pb-3 mb-4">
          <div>
            <h4 className="font-bold text-sm tracking-tight text-neutral-900">CORTISOL BAJO™ v1.4</h4>
            <p className="text-[10px] text-neutral-500">Recibo Oficial de Licencia Digital</p>
          </div>
          <div className="text-right">
            <p className="font-bold">#CB-84913</p>
            <p className="text-[10px] text-neutral-400">Fecha: {new Date().toLocaleDateString()}</p>
          </div>
        </div>

        <div className="space-y-2 mb-4 text-neutral-800">
          <div className="flex justify-between">
            <span>Cliente:</span>
            <span className="font-semibold text-neutral-900">{name}</span>
          </div>
          <div className="flex justify-between">
            <span>Email:</span>
            <span className="font-semibold text-neutral-900">{email}</span>
          </div>
          <div className="flex justify-between">
            <span>Licencia:</span>
            <span className="text-emerald-700 font-semibold">VITALICIA (PÚNICA)</span>
          </div>
          <div className="flex justify-between">
            <span>Plan Seleccionado:</span>
            <span className="font-bold text-neutral-900 uppercase">
              CORTISOL BAJO™ + BONOS SOS
            </span>
          </div>
        </div>

        <div className="border-t border-dashed border-neutral-300 pt-3 flex justify-between font-bold text-sm text-neutral-900">
          <span>Total Cargado:</span>
          <span className="text-emerald-700">${activePrice}.00 USD</span>
        </div>

        {/* Instructions badge */}
        <div className="mt-4 bg-brand-sand/50 p-2.5 rounded-lg border border-neutral-200 text-[10px] leading-relaxed text-zinc-600 font-sans">
          <strong className="text-neutral-900 block mb-0.5">📥 Siguiente Paso Inmediato:</strong>
          Revisa tu bandeja de entrada en 2-3 minutos. Si no lo encuentras, comprueba tu bandeja de SPAM o de promociones bajo el correo de soporte.
        </div>
      </div>

      <div className="text-center">
        {/* Download PDF simulation widget trigger */}
        <a
          href="#download"
          onClick={handleAlert}
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-750 text-white font-bold text-xs py-3 px-6 rounded-xl shadow-lg hover:scale-[1.01] transition-transform"
        >
          <Download className="h-4 w-4 text-white" />
          <span>DESCARGAR RECIBO Y GUÍA INICIAL (PDF)</span>
        </a>

        <button
          onClick={onReset}
          className="block mx-auto mt-6 text-[10px] text-neutral-500 hover:text-neutral-300 font-semibold tracking-wider uppercase focus:outline-none cursor-pointer"
        >
          Atrás / Comprar para un Amigo
        </button>
      </div>
    </div>
  );
}
