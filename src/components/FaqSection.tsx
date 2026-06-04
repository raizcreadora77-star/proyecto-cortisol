import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Search, HelpCircle, X } from 'lucide-react';
import { FaqItem } from '../types';

interface FaqSectionProps {
  faqs: FaqItem[];
}

export default function FaqSection({ faqs }: FaqSectionProps) {
  const [openId, setOpenId] = useState<string | null>("faq1"); // open first by default
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const filteredFaqs = faqs.filter(
    (f) =>
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* Search Input Filter */}
      <div className="relative max-w-md mx-auto mb-10">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-400">
            <Search className="h-4 w-4" />
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="¿Tienes dudas? Busca aquí... (ej. garantía, tiempo)"
            className="w-full pl-9 pr-8 py-3 rounded-2xl bg-zinc-100 text-zinc-950 text-xs border border-zinc-200 focus:outline-none focus:ring-1 focus:ring-brand-sage focus:border-brand-sage transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-400 hover:text-zinc-600 focus:outline-none"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Accordion container */}
      <div className="max-w-4xl mx-auto space-y-3">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-neutral-200/90 bg-white shadow-md'
                    : 'border-neutral-200/50 bg-neutral-50/60 hover:bg-neutral-50/100'
                }`}
              >
                {/* Header (Trigger) */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between text-left p-5 focus:outline-none focus:ring-0 select-none group"
                >
                  <div className="flex gap-3 pr-4 items-start">
                    <HelpCircle className={`h-5 w-5 mt-0.5 shrink-0 transition-colors duration-300 ${
                      isOpen ? 'text-brand-sage' : 'text-zinc-400'
                    }`} />
                    <h4 className="text-sm font-bold text-brand-dark tracking-tight leading-snug group-hover:text-emerald-700 transition-colors">
                      {faq.question}
                    </h4>
                  </div>
                  
                  {/* Rotating Chevron icon */}
                  <span className={`h-6 w-6 rounded-full flex items-center justify-center bg-zinc-100 group-hover:bg-zinc-200 transition-all duration-300 ${
                    isOpen ? 'rotate-180 bg-brand-sage/10 text-brand-sage' : 'text-zinc-505'
                  }`}>
                    <ChevronDown className="h-4 w-4 shrink-0" />
                  </span>
                </button>

                {/* Animated Body (Collapsible Content) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 text-sm text-zinc-600 leading-relaxed border-t border-neutral-100 font-light/medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        ) : (
          <div className="text-center py-10 bg-neutral-50 rounded-2xl border border-dashed border-zinc-200 text-sm text-zinc-500">
            No encontramos respuestas para "<strong className="text-zinc-800">{searchQuery}</strong>". Intenta con otra palabra.
          </div>
        )}
      </div>
    </div>
  );
}
