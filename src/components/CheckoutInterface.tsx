import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Truck, Download, Sparkles, AlertCircle, CheckCircle, CreditCard, Lock, ArrowRight, User, Mail, Star } from 'lucide-react';
import { BonusItem } from '../types';

interface CheckoutInterfaceProps {
  vipBonuses: BonusItem[];
}

export default function CheckoutInterface({ vipBonuses }: CheckoutInterfaceProps) {
  const [selectedPlan, setSelectedPlan] = useState<'standard' | 'premium'>('premium');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Values
  const standardPrice = 12;
  const premiumPrice = 27;
  const originalValue = 505;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('Por favor, ingresa tu nombre completo.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    // Simulate safe secure processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1800);
  };

  const activePrice = selectedPlan === 'standard' ? standardPrice : premiumPrice;  return (
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
                Selecciona Tu Protocolo
              </h3>
              <p className="text-xs text-neutral-400 mt-1.5 max-w-lg mx-auto">
                Acceso instantáneo de por vida hoy. Sin cuotas de renovación continuas.
              </p>
            </div>

            {/* Plan Toggle Option Selector */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              
              {/* Option STANDARD */}
              <div
                onClick={() => setSelectedPlan('standard')}
                className={`cursor-pointer group rounded-2xl border-2 p-5 transition-all duration-300 relative flex flex-col justify-between ${
                  selectedPlan === 'standard'
                    ? 'border-brand-sage bg-brand-dark shadow-xl'
                    : 'border-white/[0.06] bg-brand-dark/40 opacity-85 hover:opacity-100 hover:border-white/10'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-bold text-neutral-100">Plan Básico</h4>
                    <span className={`h-4 w-4 rounded-full border flex items-center justify-center ${
                      selectedPlan === 'standard' ? 'border-brand-sage' : 'border-neutral-600'
                    }`}>
                      {selectedPlan === 'standard' && <span className="h-2 w-2 rounded-full bg-brand-sage" />}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400 leading-relaxed mb-4">
                    Incluye protocolo principal Cortisol Bajo y los 3 primeros bonos SOS.
                  </p>
                </div>
                <div className="flex items-baseline gap-2 mt-4">
                  <span className="text-xs text-neutral-500 line-through">$308</span>
                  <span className="text-2xl font-black text-white">${standardPrice} USD</span>
                </div>
              </div>

              {/* Option VIP PREMIUM */}
              <div
                onClick={() => setSelectedPlan('premium')}
                className={`cursor-pointer group rounded-2xl border-2 p-5 transition-all duration-300 relative flex flex-col justify-between ${
                  selectedPlan === 'premium'
                    ? 'border-emerald-500 bg-brand-dark/90 shadow-2xl relative'
                    : 'border-white/[0.06] bg-brand-dark/40 opacity-85 hover:opacity-100 hover:border-white/10'
                }`}
              >
                {/* Recommended Tag */}
                <div className="absolute top-0 right-6 -translate-y-1/2 bg-brand-sage text-brand-dark font-black text-[9px] px-2.5 py-1 rounded-full uppercase tracking-widest shadow-md">
                  ★ RECOMENDADO VIP
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-bold text-neutral-100 flex items-center gap-1 text-brand-sage">
                      Plan VIP Premium
                    </h4>
                    <span className={`h-4 w-4 rounded-full border flex items-center justify-center ${
                      selectedPlan === 'premium' ? 'border-brand-sage' : 'border-neutral-600'
                    }`}>
                      {selectedPlan === 'premium' && <span className="h-2 w-2 rounded-full bg-brand-sage" />}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-300 leading-relaxed mb-4 font-light">
                    Incluye TODO, más el <strong className="text-brand-sage font-semibold">Calendario Maestro de 30 Días</strong> para blindar tus progresos.
                  </p>
                </div>
                <div className="flex items-baseline gap-2 mt-4">
                  <span className="text-xs text-neutral-500 line-through">$505</span>
                  <span className="text-2xl font-black text-emerald-400">${premiumPrice} USD</span>
                </div>
              </div>
            </div>

            {/* Inclusions checklist visually validating choice */}
            <div className="bg-brand-dark/50 rounded-xl p-4 border border-white/5 mb-8 text-xs text-neutral-300 space-y-2">
              <span className="text-[10px] font-bold text-brand-sage uppercase block mb-1">Tu compra incluye hoy:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex items-start gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 mt-0.5 text-emerald-400 shrink-0" />
                  <span>Protocolo Guía Cortisol Bajo 14D</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 mt-0.5 text-emerald-400 shrink-0" />
                  <span>Método Anti-Despertar 3:00 AM</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 mt-0.5 text-emerald-400 shrink-0" />
                  <span>Plan Barriga Plana Hormonal</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 mt-0.5 text-emerald-400 shrink-0" />
                  <span>Energía Sostenida Todo el Día</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 mt-0.5 text-emerald-400 shrink-0" />
                  <span>Bono 1: Protocolo Guía SOS 5M</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 mt-0.5 text-emerald-400 shrink-0" />
                  <span>Bono 2: Menú Anticortisol Completo</span>
                </div>
                <div className="flex items-start gap-1.5 opacity-90">
                  <CheckCircle className="h-3.5 w-3.5 mt-0.5 text-emerald-400 shrink-0" />
                  <span>Bono 3: Ritual Sueño Profundo 10M</span>
                </div>
                {selectedPlan === 'premium' ? (
                  <div className="flex items-start gap-1.5 text-emerald-400 font-bold transition-all duration-300">
                    <CheckCircle className="h-3.5 w-3.5 mt-0.5 shrink-0 text-emerald-400 animate-pulse" />
                    <span>Bono 4: Plan Maestro 30 Días VIP</span>
                  </div>
                ) : (
                  <div className="flex items-start gap-1.5 text-neutral-500 line-through">
                    <AlertCircle className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                    <span>Bono 4: Desactivado</span>
                  </div>
                )}
              </div>
            </div>

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
                      <span>PROCESANDO ACCESO SEGURO...</span>
                    </>
                  ) : (
                    <>
                      <span>👉 QUIERO EMPEZAR MI RECUPERACIÓN AHORA</span>
                      <ArrowRight className="h-4 w-4 text-neutral-950 animate-pulse" />
                    </>
                  )}
                </div>
              </button>
            </form>

            {/* Bottom trust vectors */}
            <div className="mt-6 flex flex-wrap gap-4 items-center justify-center text-[10px] text-neutral-500 border-t border-white/5 pt-4">
              <span>🛡️ GARANTÍA DE SATISFACCIÓN DE 7 DÍAS</span>
              <span>•</span>
              <span>💳 PAGO ÚNICO Y SEGURO</span>
              <span>•</span>
              <span>🌐 SOPORTE AL CLIENTE 24/7</span>
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

            {/* Simulated Printed Voucher / Receipt */}
            <div className="bg-white text-zinc-950 rounded-2xl p-6 border-t-8 border-brand-accent shadow-inner text-left my-8 font-mono text-xs">
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

              <div className="space-y-2 mb-4">
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
                    {selectedPlan === 'premium' ? 'VIP Premium Package' : 'Básico Standard'}
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

            {/* Download PDF simulation widget trigger */}
            <a
              href="#download"
              onClick={(e) => {
                e.preventDefault();
                alert('¡Descargando el paquete de bienvenida PDF en su dispositivo móvil/escritorio!');
              }}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-750 text-white font-bold text-xs py-3 px-6 rounded-xl shadow-lg hover:scale-[1.01] transition-transform"
            >
              <Download className="h-4 w-4 text-white" />
              <span>DESCARGAR RECIBO Y GUÍA INICIAL (PDF)</span>
            </a>

            <button
              onClick={() => setIsSuccess(false)}
              className="block mx-auto mt-6 text-[10px] text-neutral-500 hover:text-neutral-300 font-semibold tracking-wider uppercase focus:outline-none"
            >
              Atrás / Comprar para un Amigo
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
