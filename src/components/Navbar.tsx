import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Mail, Instagram, Linkedin, Facebook } from 'lucide-react';

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
    { name: 'A CLÍNICA', href: '#sobre' },
    { name: 'TRATAMENTOS', href: '#tratamentos' },
    { name: 'O NOSSO ESPAÇO', href: '#espaco' },
    { name: 'EQUIPA', href: '#equipa' },
    { name: 'CONTACTOS', href: '#contactos' },
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
          <div className="flex flex-col leading-none text-center items-center">
            <span className="display text-[9px] tracking-[0.4em] text-brand-accent uppercase mb-1.5 opacity-90 group-hover:opacity-100 transition-opacity duration-300">Excelência em</span>
            <span className="serif italic text-[20px] md:text-[26px] tracking-wide text-white group-hover:text-brand-accent transition-colors duration-300">Odontologia</span>
          </div>
        </a>

        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-[11px] font-bold tracking-[0.3em] text-white/50 hover:text-brand-accent transition-all duration-300 uppercase whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contactos"
            className="flex items-center space-x-2 bg-brand-accent text-black px-6 py-2.5 rounded-none text-[10px] font-bold tracking-[0.2em] hover:bg-white transition-colors"
          >
            <Phone size={14} />
            <span>AGENDAR</span>
          </a>
        </div>


        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-ink p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-paper shadow-xl md:hidden border-t border-brand-ink/5"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium tracking-widest text-brand-ink hover:text-brand-accent"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-6 border-t border-brand-ink/5 flex justify-center space-x-6">
                <Instagram size={20} className="text-brand-ink/60" />
                <Linkedin size={20} className="text-brand-ink/60" />
                <Facebook size={20} className="text-brand-ink/60" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
