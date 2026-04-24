import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-paper pt-32 pb-24 md:py-24">
      {/* Background Decor - Dots Pattern from Image 1 */}
      <div className="absolute inset-0 dots-pattern opacity-10" />
      
      {/* Fluid Organic Shape in Background */}
      <div className="absolute top-[-20%] right-[-10%] w-[80%] h-[120%] bg-white/5 fluid-mask rotate-12 -z-0" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center w-full relative z-10">
        {/* Left Content */}
        <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left translate-y-0 md:translate-y-[-20px]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
          >
            <a href="#onde-estamos" className="bg-brand-accent text-black px-12 py-5 rounded-none text-xs font-bold uppercase tracking-widest hover:bg-white transition-all shadow-xl text-center">
              Agende sua consulta
            </a>
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
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop" 
                alt="Sorriso Perfeito" 
                className="w-full h-full object-cover opacity-90"
                referrerPolicy="no-referrer"
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
