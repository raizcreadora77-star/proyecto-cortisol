import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Bell } from 'lucide-react';

interface NotificationData {
  name: string;
  city: string;
  time: string;
}

interface NotificationToastProps {
  notification: NotificationData | null;
}

export default function NotificationToast({ notification }: NotificationToastProps) {
  return (
    <AnimatePresence>
      {notification && (
        <motion.div
          initial={{ opacity: 0, y: 100, x: 0 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ type: 'spring', damping: 15 }}
          className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-40 bg-[#121916]/95 backdrop-blur-md border border-emerald-500/30 text-white rounded-2xl p-4 shadow-2xl flex gap-3 max-w-xs items-center select-none"
        >
          <div className="h-10 w-10 shrink-0 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
            <ShoppingBag className="h-5 w-5 text-emerald-400 animate-bounce" />
          </div>
          <div className="min-w-0 pr-1">
            <div className="flex gap-1 items-center">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping mr-1" />
              <h5 className="text-[10px] uppercase font-bold tracking-wider text-emerald-400 truncate">
                Inscripción Reciente
              </h5>
            </div>
            <p className="text-[11px] font-semibold text-neutral-200 mt-0.5 leading-tight">
              <strong>{notification.name}</strong> de {notification.city} acaba de adquirir Cortisol Bajo.
            </p>
            <div className="text-[9px] text-neutral-400 font-medium flex gap-1.5 items-center mt-1">
              <Bell className="h-2.5 w-2.5 text-brand-accent" />
              <span>{notification.time}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
