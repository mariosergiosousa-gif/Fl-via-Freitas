import { motion } from 'motion/react';
import { ArrowRight, GraduationCap, Users, BookOpen } from 'lucide-react';

export default function Education() {
  const stats = [
    { label: "CURSOS ESPECIALIZADOS", value: "15+", icon: <GraduationCap size={20} /> },
    { label: "ALUNOS FORMADOS", value: "500+", icon: <Users size={20} /> },
    { label: "ANOS DE EXPERIÊNCIA", value: "25+", icon: <BookOpen size={20} /> },
  ];

  return (
    <section id="formacao" className="py-32 bg-[#050608] text-brand-paper relative overflow-hidden border-t border-white/10">
      {/* Decorative blurred orbit */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left Content */}
          <div>
            <span className="display text-[10px] font-bold tracking-[0.4em] text-brand-accent mb-6 block uppercase border-l-2 border-brand-accent pl-4">
              FF EDUCAÇÃO
            </span>
            <h2 className="serif text-5xl md:text-7xl mb-8 leading-tight text-white">
              Sua jornada para <br />
              <span className="italic text-brand-accent">o sucesso clínico.</span>
            </h2>
            <p className="text-lg text-slate-400 mb-12 leading-relaxed max-w-xl font-light">
              Dra. Flávia Freitas compartilha sua expertise através de cursos intensivos e mentoria especializada em Brumadinho, capacitando dentistas para a excelência clínica.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 border-y border-white/10 py-10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-white mb-2">
                    <span className="display text-4xl font-light tracking-tight">{stat.value}</span>
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-brand-accent uppercase leading-tight block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <button className="group flex items-center gap-4 bg-brand-accent text-black px-10 py-5 rounded-none text-xs font-bold tracking-[0.2em] hover:bg-white transition-all uppercase">
              Ver Calendário de Cursos
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>


          {/* Right Visual - Layered Images Example (Recipe 2/11) */}
          <div className="relative">
            <div className="aspect-square relative flex items-center justify-center">
              {/* Back Image */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="absolute right-0 top-0 w-4/5 aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-brand-paper/10"
              >
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Educação Dentária" 
                  className="w-full h-full object-cover grayscale opacity-50"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Front Image */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative z-10 w-4/5 aspect-[4/5] rounded-[200px] overflow-hidden shadow-3xl border-8 border-brand-ink"
              >
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffce47267a5?q=80&w=1974&auto=format&fit=crop" 
                  alt="Doutor Porto Dental" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-accent/5 mix-blend-multiply" />
              </motion.div>

              {/* Decorative Floating Label */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-4 bottom-1/4 z-20 bg-brand-accent p-6 rounded-3xl shadow-xl max-w-[180px] text-brand-ink"
              >
                <span className="display text-4xl font-black mb-1 block leading-none">01</span>
                <p className="text-[10px] font-bold tracking-widest uppercase leading-snug">
                  CENTRO DE REFERÊNCIA NACIONAL
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
