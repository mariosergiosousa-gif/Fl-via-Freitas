import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send } from 'lucide-react';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WhatsAppModal({ isOpen, onClose }: WhatsAppModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const phoneNumber = "553199245130";
    const text = `Olá! Gostaria de agendar uma consulta.\n\n*Nome:* ${formData.name}\n*E-mail:* ${formData.email}\n*Assunto:* ${formData.subject}`;
    const encodedText = encodeURIComponent(text);
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-md bg-brand-paper border border-brand-accent/20 shadow-2xl p-8 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background design element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 fluid-mask -mr-16 -mt-16 z-0" />
            
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="serif text-3xl text-white uppercase tracking-tighter">Agendar <br /> <span className="text-brand-accent">Consulta</span></h2>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase mt-2">Via WhatsApp</p>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 transition-colors text-slate-400 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="display text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-2 block">Seu Nome</label>
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-sm focus:border-brand-accent/50 focus:outline-none transition-colors text-white"
                    placeholder="Como podemos te chamar?"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="display text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-2 block">Seu E-mail</label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-sm focus:border-brand-accent/50 focus:outline-none transition-colors text-white"
                    placeholder="Para nosso cadastro"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="display text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-2 block">Assunto</label>
                  <textarea
                    required
                    id="subject"
                    name="subject"
                    rows={3}
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-sm focus:border-brand-accent/50 focus:outline-none transition-colors text-white resize-none"
                    placeholder="Qual procedimento você procura?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-accent text-black py-4 font-bold text-xs uppercase tracking-[0.2em] hover:bg-white transition-all flex items-center justify-center gap-3 group"
                >
                  Enviar para WhatsApp
                  <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
