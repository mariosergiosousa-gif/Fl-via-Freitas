import { motion } from 'motion/react';
import { 
  Activity, 
  ShieldCheck, 
  Heart, 
  Sparkles, 
  GraduationCap, 
  Layers, 
  Baby, 
  Shapes, 
  Zap, 
  CheckCircle2,
  Stethoscope
} from 'lucide-react';

export default function Services() {
  const treatments = [
    {
      title: "Odontopediatria",
      description: "Cuidados gentis e especializados para o sorriso dos mais pequenos.",
      icon: <Baby size={32} />,
    },
    {
      title: "Ortodontia",
      description: "Correção e alinhamento do sorriso para todas as idades.",
      icon: <ShieldCheck size={32} />,
    },
    {
      title: "Clínica Geral",
      description: "Prevenção e cuidados fundamentais para a saúde oral diária.",
      icon: <CheckCircle2 size={32} />,
    },
    {
      title: "Implantodontia",
      description: "Soluções permanentes e seguras para a falta de dentes.",
      icon: <Layers size={32} />,
    },
    {
      title: "HOF",
      description: "Equilíbrio estético e rejuvenescimento facial personalizado.",
      icon: <Sparkles size={32} />,
    },
    {
      title: "Cirurgia e Traumatologia",
      description: "Intervenções buco-maxilo-faciais avançadas e precisão cirúrgica.",
      icon: <Activity size={32} />,
    },
    {
      title: "Prótese",
      description: "Restauração da função e estética com próteses de alta qualidade.",
      icon: <Shapes size={32} />,
    },
    {
      title: "Periodontia",
      description: "Tratamento especializado das gengivas e tecidos de suporte.",
      icon: <Heart size={32} />,
    },
    {
      title: "Endodontia",
      description: "Tratamentos de canal com precisão digital e mínimo desconforto.",
      icon: <Zap size={32} />,
    },
  ];

  return (
    <section id="tratamentos" className="relative py-24 md:py-32 bg-brand-paper border-t border-white/10 overflow-hidden">
      {/* Decorative Dots Pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 dots-pattern opacity-10 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 dots-pattern opacity-5 translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 md:mb-24 gap-8 text-center md:text-left">
          <div className="max-w-2xl">
            <h2 className="serif text-4xl sm:text-5xl md:text-7xl text-white mb-6 uppercase italic leading-[1.1]">
              Excelência <br className="hidden md:block" />
              <span className="text-brand-accent">Personalizada.</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed max-w-lg mx-auto md:mx-0">
              Combinamos arte, ciência e a tecnologia mais avançada para criar resultados que superam expectativas.
            </p>
          </div>
          <div className="hidden lg:block relative text-white/5 select-none">
            <span className="display text-[14vw] font-black italic tracking-tighter absolute -right-24 bottom-0 whitespace-nowrap">PREVENÇÃO</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-white/10">
          {treatments.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group p-8 md:p-12 border-b border-white/5 sm:border-r hover:bg-brand-accent/[0.03] transition-all duration-500 flex flex-col items-center md:items-start text-center md:text-left relative overflow-hidden"
            >
              <div className="text-brand-accent mb-6 md:mb-8 opacity-60 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 duration-500">
                {item.icon}
              </div>
              <h3 className="serif text-2xl md:text-3xl mb-4 text-white group-hover:text-brand-accent transition-colors uppercase font-medium">
                {item.title}
              </h3>
              <p className="text-slate-500 leading-relaxed mb-8 font-light italic text-sm md:text-base">
                {item.description}
              </p>
              <a href="#contactos" className="text-[10px] font-bold tracking-[0.3em] text-brand-accent uppercase mt-auto flex items-center gap-2 hover:text-white transition-colors">
                <span>SAIBA MAIS</span>
                <span className="w-8 h-[1px] bg-brand-accent/30 group-hover:bg-white transition-all group-hover:w-12" />
              </a>
              {/* Corner accent for group hover */}
              <div className="absolute top-0 right-0 w-2 h-2 bg-brand-accent/0 group-hover:bg-brand-accent transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  );
}
