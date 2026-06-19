import React, { useState, useEffect } from 'react';
import {
  quickTestimonials,
  largeTestimonials,
  faqs
} from './data';

import TestimonialSection from './components/TestimonialSection';
import FaqSection from './components/FaqSection';

// Our newly extracted and tokenized modular components
import UrgencyBanner from './components/UrgencyBanner';
import BrandHeader from './components/BrandHeader';
import HeroSection from './components/HeroSection';
import AboutAppSection from './components/AboutAppSection';
import InnerAppSection from './components/InnerAppSection';
import OriginStorySection from './components/OriginStorySection';
import VipBonusesSection from './components/VipBonusesSection';
import SolidGuaranteeSection from './components/SolidGuaranteeSection';
import PreOfferTestimonialsSection from './components/PreOfferTestimonialsSection';
import CheckoutSection from './components/CheckoutSection';
import FinalSummarySection from './components/FinalSummarySection';
import CloseUrgencySection from './components/CloseUrgencySection';
import Footer from './components/Footer';
import NotificationToast from './components/NotificationToast';

const COVER_IMAGE = "https://i.postimg.cc/QCVLMMwM/Chat-GPT-Image-3-jun-2026-17-41-52.png";

export default function App() {
  const [activeReaders, setActiveReaders] = useState(142);
  const [timeLeft, setTimeLeft] = useState(897); // 14 mins 57 secs
  const [notification, setNotification] = useState<{ name: string; city: string; time: string } | null>(null);

  // Smooth scroll helper
  const scrollToCheckout = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('checkout-form-block');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Simulate active readers shifting
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReaders((prev) => {
        const delta = Math.floor(Math.random() * 9) - 4;
        const next = prev + delta;
        return next > 250 ? 230 : next < 80 ? 110 : next;
      });
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // Simulating countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) return 900; // Reset to 15 mins to prevent dead clock style
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Live Simulated purchases toast popup notifications
  useEffect(() => {
    const buyers = [
      { name: "Verónica L.", city: "Madrid", time: "hace 2 min" },
      { name: "Julián R.", city: "Bogotá", time: "hace 1 min" },
      { name: "Gabriela S.", city: "Santiago de Chile", time: "hace 45 seg" },
      { name: "Dra. Natalia Ruiz", city: "Sevilla", time: "hace 3 min" },
      { name: "Alejandro M.", city: "Ciudad de México", time: "hace 5 min" },
      { name: "Sofía T.", city: "Buenos Aires", time: "hace 12 seg" }
    ];

    const showNotification = () => {
      const randomBuyer = buyers[Math.floor(Math.random() * buyers.length)];
      setNotification(randomBuyer);

      // Hide after 5 seconds
      setTimeout(() => {
        setNotification(null);
      }, 5000);
    };

    // Trigger first notification after 5 seconds, then recur every 28 seconds
    const initialTimeout = setTimeout(() => {
      showNotification();
    }, 5000);

    const interval = setInterval(() => {
      showNotification();
    }, 28000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div id="landing-page-root" className="min-h-screen font-sans bg-brand-dark bg-bento-grid text-white/90 select-text">
      
      {/* HEADER: Floating emergency ribbon alert */}
      <UrgencyBanner timeLeft={timeLeft} />

      {/* BRAND NAVIGATION HEADER */}
      <BrandHeader activeReaders={activeReaders} scrollToCheckout={scrollToCheckout} />

      {/* SECTION 1: HERO CONTAINER */}
      <HeroSection coverImage={COVER_IMAGE} scrollToCheckout={scrollToCheckout} />

      {/* WHAT IS CORTISOL BAJO EXPLAINER (APP NOT EBOOK) */}
      <AboutAppSection />

      {/* INSIDE THE APP PREMIUM GRAPHIC PREVIEW SECTION */}
      <InnerAppSection />

      {/* SECTION 10: ORIGIN STORY AND PERSPECTIVE */}
      <OriginStorySection />

      {/* SECTION 11: 4 FREE VIP BONUSES GRID & SAVINGS CALLOUT */}
      <VipBonusesSection />

      {/* SECTION 12: SECURE BLIND REEMBURSE SEAL CONTRACT (WARRANTY) */}
      <SolidGuaranteeSection />

      {/* PLACE 3: SOCIAL VALUE BOXES RIGHT BEFORE SELECTION GRID */}
      <PreOfferTestimonialsSection />

      {/* SECTION 13: PACKAGE CHECKLIST, ORIGINAL COSTS COMP, FORM INTEGRATOR CHECKOUT */}
      <CheckoutSection />

      {/* SECTION 14: VALUE ANCHORS (What you are actually buying) */}
      <FinalSummarySection />

      {/* SECTION 15: FAQS ACCORDION BLOCK WINDOW */}
      <section id="faqs-accordion-block" className="bg-[#fbfcfa] py-16 px-4 text-brand-text-dark border-t border-neutral-100">
        <div className="mx-auto max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-[#a8865c]">
              ZONA DE RESOLUCIÓN
            </span>
            <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight text-[#141d1a] uppercase leading-tight">
              Preguntas Frecuentes FAQ
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-neutral-500">
              ¿Aún tienes dudas de dar el siguiente paso? Aquí respondemos con total transparencia a las interrogantes más frecuentes de nuestros clientes.
            </p>
          </div>
          <FaqSection faqs={faqs} />
        </div>
      </section>

      {/* SECTION 16: PULSE CLOSURE WARNING LAST CALL */}
      <CloseUrgencySection scrollToCheckout={scrollToCheckout} />

      {/* FOOTER GENERAL */}
      <Footer />

      {/* POPUP NOTIFICATION TOAST OVERLAY */}
      <NotificationToast notification={notification} />

    </div>
  );
}
