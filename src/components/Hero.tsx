import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-brand-paper">
      {/* Background Decor - Radial Gradient from Theme */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_rgba(197,160,89,0.08),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center w-full relative z-10">
        {/* Left Content */}
        <div className="md:col-span-7 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="display text-xs font-bold tracking-[0.4em] text-brand-accent mb-6 block uppercase">
              Excelência em Odontologia
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.95] text-white mb-10 tracking-tighter"
          >
            Odontologia de <br />
            <span className="italic text-brand-accent">Alta Performance.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-slate-400 max-w-lg mb-12 leading-relaxed font-light"
          >
            Sediada em Brumadinho, a Dra. Flávia Freitas oferece tratamentos odontológicos personalizados com tecnologia de ponta e um cuidado humanizado inigualável.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-6"
          >
            <a href="#contactos" className="bg-brand-accent text-black px-10 py-5 rounded-none text-xs font-bold uppercase tracking-widest hover:bg-white transition-all shadow-lg">
              MARCAR CONSULTA
            </a>
            <a href="#formacao" className="border border-white/20 px-10 py-5 rounded-none text-xs font-bold uppercase tracking-widest text-white hover:bg-white/5 transition-all">
              VER FORMAÇÕES
            </a>
          </motion.div>
        </div>

        {/* Right Visual */}
        <div className="md:col-span-5 relative hidden md:block">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Main Image Mask - Recipe 12: Oval Mask */}
            <div className="aspect-[4/5] overflow-hidden rounded-[200px] border-[12px] border-white/5 shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop" 
                alt="Clínica Porto Dental" 
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-accent/5 mix-blend-multiply" />
            </div>

            {/* Vertical Rail Text */}
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 flex flex-col items-center">
              <span className="vertical-text text-[10px] font-bold tracking-[0.5em] text-brand-accent/30 whitespace-nowrap uppercase">
                ESTÉTICA • IMPLANTOLOGIA • ORTODONTIA
              </span>
            </div>

            {/* Secondary Decor Card */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute -right-8 -bottom-8 bg-[#15181e] p-8 rounded-none shadow-2xl max-w-[240px] border border-white/10"
            >
              <h3 className="serif text-2xl mb-2 text-white tracking-tight italic">Fluxo Digital</h3>
              <p className="text-[10px] leading-relaxed text-slate-500 uppercase tracking-widest font-bold">
                Tecnologia de precisão e diagnóstico avançado para resultados previsíveis.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>


      {/* Hero Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer pointer-events-none opacity-40 hover:opacity-100 transition-opacity"
      >
        <span className="text-[10px] font-bold tracking-[0.3em] mb-2">SCROLL</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}
