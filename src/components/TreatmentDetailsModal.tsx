import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface TreatmentDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export default function TreatmentDetailsModal({ isOpen, onClose, title, content }: TreatmentDetailsModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[250] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            className="relative w-full max-w-xl bg-brand-paper border border-white/10 shadow-2xl p-10 md:p-12 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Design Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent/5 fluid-mask z-0 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-accent/5 fluid-mask z-0 blur-3xl opacity-50" />
            
            <div className="relative z-10">
              <div className="flex flex-col items-center text-center mb-10 relative">
                <div className="w-full">
                  <p className="display text-[10px] font-bold tracking-[0.4em] text-brand-accent uppercase mb-4">Tratamento</p>
                  <h2 className="serif text-4xl md:text-5xl text-white uppercase italic leading-tight">
                    {title}
                  </h2>
                </div>
                <button 
                  onClick={onClose}
                  className="absolute -top-2 -right-2 md:top-0 md:right-0 p-2 hover:bg-white/10 transition-all text-slate-500 hover:text-white group"
                >
                  <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>

              <div className="flex flex-col items-center space-y-6">
                <div className="w-12 h-[2px] bg-brand-accent/50" />
                <p className="text-slate-300 text-base md:text-lg font-light leading-relaxed whitespace-pre-line text-justify">
                  {content}
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-white/5 flex justify-end">
                <button
                  onClick={onClose}
                  className="bg-brand-accent text-black px-10 py-4 font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white transition-all shadow-lg active:scale-95"
                >
                  Fechar Janela
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
