import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertCircle, CheckCircle, Lock, ArrowRight, User, Mail } from 'lucide-react';
import { BonusItem } from '../types';
import { useCheckout } from '../hooks/useCheckout';
import InclusionsList from './checkout/InclusionsList';
import ReceiptVoucher from './checkout/ReceiptVoucher';

interface CheckoutInterfaceProps {
  vipBonuses: BonusItem[];
}

export default function CheckoutInterface({ vipBonuses }: CheckoutInterfaceProps) {
  const {
    name,
    setName,
    email,
    setEmail,
    isSubmitting,
    isSuccess,
    setIsSuccess,
    errorMsg,
    handleCheckoutSubmit,
    activePrice,
    standardPrice,
  } = useCheckout();

  return (
    <div id="checkout-form-block" className="w-full bg-brand-deep p-6 sm:p-10 rounded-3xl border border-white/[0.08] shadow-2xl overflow-hidden relative bento-glow-border">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 h-44 w-44 rounded-full bg-brand-sage/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.div
            key="checkout-form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {/* Top offer claim */}
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-sage/20 px-3.5 py-1.5 text-xs font-bold text-brand-sage uppercase tracking-wider">
                ⚡ ¡Aumento de Ahorro Hoy!
              </span>
              <h3 className="text-2xl font-black text-neutral-100 mt-3 sm:text-3xl">
                Tu Acceso de Por Vida
              </h3>
              <p className="text-xs text-neutral-400 mt-1.5 max-w-lg mx-auto">
                Acceso instantáneo de por vida hoy. Sin cuotas de renovación continuas.
              </p>
            </div>

            {/* Single Elegant Offer Box */}
            <div className="bg-brand-dark/80 rounded-2xl border-2 border-brand-sage/60 p-5 sm:p-6 mb-8 shadow-xl relative flex flex-col justify-between sm:flex-row sm:items-center">
              <div>
                <h4 className="text-sm font-bold text-brand-sage mb-1 flex items-center gap-1.5">
                  ⭐ CORTISOL BAJO™
                </h4>
                <p className="text-[11px] text-neutral-300 max-w-sm leading-relaxed font-light">
                  App Interactiva + Sistema Guiado de 14 Días y 3 Bonos SOS exclusivos de por vida.
                </p>
              </div>
              <div className="flex items-baseline gap-2 mt-4 sm:mt-0 shrink-0">
                <span className="text-xs text-neutral-500 line-through">$308</span>
                <span className="text-3xl font-black text-white">${standardPrice} USD</span>
              </div>
            </div>

            {/* Inclusions checklist visually validating choice */}
            <InclusionsList />

            {/* Error alerts */}
            {errorMsg && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mb-6 p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-2 text-xs text-red-400"
              >
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{errorMsg}</span>
              </motion.div>
            )}

            {/* Checkout Input Form */}
            <form onSubmit={handleCheckoutSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Full Name input */}
                <div>
                  <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1">
                    Tu Nombre Completo
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-neutral-500">
                      <User className="h-4 w-4" />
                    </span>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ej. Dra. Natalia Ruiz"
                      className="w-full pl-9 pr-3 py-3 rounded-xl bg-brand-dark border border-white/10 text-neutral-200 text-xs placeholder-neutral-600 focus:outline-none focus:border-brand-accent transition-colors"
                    />
                  </div>
                </div>

                {/* Email Address input */}
                <div>
                  <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1">
                    Tu Correo para Acceso Inmediato
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-neutral-500">
                      <Mail className="h-4 w-4" />
                    </span>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tunombre@ejemplo.com"
                      className="w-full pl-9 pr-3 py-3 rounded-xl bg-brand-dark border border-white/10 text-neutral-200 text-xs placeholder-neutral-600 focus:outline-none focus:border-brand-accent transition-colors"
                    />
                  </div>
                </div>

              </div>

              {/* Security Shield Label */}
              <div className="flex items-center justify-between py-1 px-1 bg-brand-dark/20 text-[10px] text-neutral-400">
                <span className="flex items-center gap-1">
                  <Lock className="h-3 w-3 text-emerald-500" />
                  Encriptación Segura SSL 256 bits
                </span>
                <span className="text-right">Licencia Vitalicia Asegurada</span>
              </div>

              {/* Submit CTA Trigger Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full relative group cursor-pointer overflow-hidden rounded-2xl bg-linear-to-r from-yellow-500 via-amber-500 to-yellow-600 p-[1px] shadow-lg focus:outline-none hover:shadow-xl transition-all"
              >
                <div className="rounded-2xl bg-linear-to-r from-yellow-400 to-amber-500 text-neutral-950 font-black tracking-wide text-xs sm:text-sm text-center py-4 px-4 transition-all hover:scale-[1.01] flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-neutral-950" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>PROCESANDO ACCESO...</span>
                    </>
                  ) : (
                    <>
                      <span>👉 QUIERO RECUPERAR MI SUEÑO Y MI ENERGÍA</span>
                    </>
                  )}
                </div>
              </button>
            </form>

            {/* Bottom trust vectors */}
            <div className="mt-6 flex flex-wrap gap-4 items-center justify-center text-xs text-neutral-300 border-t border-white/5 pt-4 font-semibold uppercase tracking-wide">
              <span>🛡️ Garantía de 7 Días</span>
              <span>•</span>
              <span>🔒 Pago Seguro</span>
              <span>•</span>
              <span>⚡ Acceso Inmediato</span>
            </div>
          </motion.div>
        ) : (
          /* SUCCESS STATE PANEL */
          <motion.div
            key="checkout-success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="text-center py-8 px-2 max-w-xl mx-auto"
          >
            <div className="mx-auto h-16 w-16 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30 mb-6">
              <CheckCircle className="h-10 w-10 text-emerald-400" />
            </div>

            <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-widest block mb-1">
              🎉 ¡Felicidades, {name.split(' ')[0]}!
            </span>
            <h3 className="text-2xl font-black text-white tracking-tight">
              ¡Tu Pedido ha Sido Procesado con Éxito!
            </h3>
            <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
              Hemos enviado un email con tus credenciales de acceso privadas y el material didáctico digital a: <strong className="text-white block sm:inline">{email}</strong>
            </p>

            <ReceiptVoucher
              name={name}
              email={email}
              activePrice={activePrice}
              onReset={() => setIsSuccess(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
