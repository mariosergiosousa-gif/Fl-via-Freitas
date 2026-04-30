import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenWhatsApp: () => void;
}

export default function Hero({ onOpenWhatsApp }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-24 md:py-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://res.cloudinary.com/di7rf0ubn/image/upload/v1777500809/Cl%C3%ADnica8IA_wv89jj.png" 
          alt="Clínica Excelência em Odontologia" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050608]/80 via-transparent to-[#050608]" />
      </div>

      {/* Background Decor - Dots Pattern from Image 1 */}
      <div className="absolute inset-0 dots-pattern opacity-10 z-[1]" />
      
      {/* Fluid Organic Shape in Background */}
      <div className="absolute top-[-20%] right-[-10%] w-[80%] h-[120%] bg-white/5 fluid-mask rotate-12 -z-0" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center w-full relative z-10">
        {/* Left Content */}
        <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left translate-y-0 md:translate-y-[-20px]">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="serif text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[0.95] text-white mb-8 md:mb-10 tracking-tighter uppercase font-bold"
          >
            Transformando sorrisos, promovendo <br className="hidden sm:block" />
            saúde bucal e a melhoria <br className="hidden sm:block" />
            <span className="text-brand-accent">da autoestima!</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm md:text-base text-slate-300 max-w-sm md:max-w-lg mb-10 md:mb-12 leading-relaxed font-light text-center md:text-left mx-auto md:mx-0"
          >
            Na Excelência em Odontologia, cada sorriso conta uma história. Nossa missão é cuidar da saúde bucal e elevar a autoestima com tecnologia de ponta e atendimento personalizado.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
          >
            <button 
              onClick={onOpenWhatsApp}
              className="bg-brand-accent text-black px-12 py-5 rounded-none text-xs font-bold uppercase tracking-widest hover:bg-white transition-all shadow-xl text-center"
            >
              Agende sua consulta
            </button>
          </motion.div>
        </div>

        {/* Right Visual */}
        <div className="md:col-span-5 relative mt-12 md:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 0.85 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative origin-center md:origin-right"
          >
            {/* Main Image with Organic Shell - matches image 2 style */}
            <div className="aspect-[4/5] md:aspect-[4/5] overflow-hidden fluid-mask border-[1px] border-white/10 shadow-2xl relative bg-brand-muted max-w-sm mx-auto md:max-w-none">
              <img 
                src="https://res.cloudinary.com/di7rf0ubn/image/upload/c_fill,g_faces,w_800,h_1000,f_auto,q_auto/v1777573161/Fl%C3%A1via_e_Diana_wtywia.png" 
                alt="Dra. Flávia e Dra. Diana" 
                className="w-full h-full object-cover opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>

            {/* Floating Dots Element - direct reference to image 1 */}
            <div className="absolute -top-10 -right-10 w-24 h-24 dots-pattern opacity-40 hidden md:block" />
            <div className="absolute -bottom-10 -left-10 w-24 h-24 dots-pattern opacity-40 rotate-90 text-brand-accent hidden md:block" />
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
