import React, { useState } from 'react';

export function useCheckout() {
  const [selectedPlan, setSelectedPlan] = useState<'standard'>('standard');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const standardPrice = 12;
  const originalValue = 308;

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

  const activePrice = standardPrice;

  return {
    selectedPlan,
    setSelectedPlan,
    name,
    setName,
    email,
    setEmail,
    isSubmitting,
    isSuccess,
    setIsSuccess,
    errorMsg,
    setErrorMsg,
    handleCheckoutSubmit,
    activePrice,
    standardPrice,
    originalValue,
  };
}
