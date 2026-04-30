import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, X } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="cookie-banner-popup"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-40 md:max-w-md z-[90]"
        >
          <div className="bg-brand-paper/95 backdrop-blur-xl border border-white/10 p-6 shadow-2xl relative overflow-hidden group">
            {/* Background Decorative Accent */}
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-brand-accent/5 rounded-full blur-2xl group-hover:bg-brand-accent/10 transition-colors duration-700" />
            
            <div className="flex items-start gap-4 mb-6 relative">
              <div className="p-3 bg-brand-accent/10 rounded-full text-brand-accent">
                <Cookie size={24} />
              </div>
              <div className="flex-1">
                <h4 className="serif text-xl text-white italic mb-1">
                  Valorizamos sua <span className="text-brand-accent not-italic font-bold">Privacidade</span>
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed font-light">
                  Utilizamos cookies para melhorar sua experiência em nosso site. Ao continuar, você aceita o uso de cookies.
                </p>
              </div>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-slate-500 hover:text-white transition-colors p-1"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex gap-3 relative">
              <button
                onClick={acceptCookies}
                className="flex-1 bg-brand-accent hover:bg-brand-accent/90 text-white display text-[10px] font-bold tracking-widest uppercase py-3 transition-colors cursor-pointer"
              >
                Aceitar Todos
              </button>
              <button
                onClick={declineCookies}
                className="flex-1 bg-white/5 hover:bg-white/10 text-white display text-[10px] font-bold tracking-widest uppercase py-3 border border-white/5 transition-colors cursor-pointer"
              >
                Recusar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
