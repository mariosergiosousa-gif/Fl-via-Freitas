import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'TRATAMENTOS', href: '#tratamentos' },
    { name: 'CORPO CLÍNICO', href: '#equipe' },
    { name: 'O NOSSO ESPAÇO', href: '#o-nosso-espaco' },
    { name: 'ONDE ESTAMOS', href: '#onde-estamos' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled ? 'bg-brand-paper/90 backdrop-blur-md border-white/5 py-4' : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Area */}
        <a 
          href="#" 
          className="group cursor-pointer block"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="flex flex-col leading-[0.9] text-left">
            <span className="serif text-[20px] md:text-[24px] font-bold text-brand-accent tracking-tighter uppercase">Excelência em</span>
            <span className="serif text-[20px] md:text-[24px] font-bold text-brand-accent tracking-tighter uppercase">Odontologia</span>
          </div>
        </a>

        <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-[11px] font-bold tracking-[0.3em] text-white/70 hover:text-brand-accent transition-all duration-300 uppercase whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5531999245130"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-brand-accent text-black px-6 py-3 rounded-none text-[10px] font-bold tracking-[0.2em] hover:bg-white transition-colors"
          >
            <Phone size={14} />
            <span>AGENDAR</span>
          </a>
        </div>


        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-accent p-2 border border-brand-accent/20"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            className="absolute top-full left-0 right-0 bg-brand-paper shadow-2xl md:hidden border-t border-brand-accent/10 overflow-hidden"
          >
            <div className="flex flex-col p-10 space-y-8 bg-[#0a0c10]">
              {navLinks.map((link) => (
                <motion.a 
                  key={link.name}
                  href={link.href}
                  className="text-lg font-bold tracking-[0.2em] text-brand-ink/90 hover:text-brand-accent border-l-2 border-transparent hover:border-brand-accent pl-4 transition-all uppercase"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="pt-8 border-t border-white/5 flex flex-col gap-6">
                <a 
                  href="https://wa.me/5531999245130"
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center space-x-3 bg-brand-accent text-black px-8 py-5 rounded-none text-xs font-bold tracking-[0.2em] uppercase"
                >
                  <Phone size={18} />
                  <span>AGENDAR ESPECIALISTA</span>
                </a>
                <div className="flex justify-center space-x-8">
                  <Instagram size={24} className="text-brand-ink/40 hover:text-brand-accent transition-colors" />
                  <Facebook size={24} className="text-brand-ink/40 hover:text-brand-accent transition-colors" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
