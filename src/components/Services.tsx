import { motion } from 'motion/react';
import { Activity, ShieldCheck, Heart, Sparkles, MapPin, Layers } from 'lucide-react';

export default function Services() {
  const treatments = [
    {
      title: "Implantologia",
      description: "Recupere a funcionalidade e estética do seu sorriso com implantes de última geração.",
      icon: <Layers size={32} />,
    },
    {
      title: "Reabilitação Oral",
      description: "Tratamentos integrados para restaurar a saúde completa da sua boca.",
      icon: <Activity size={32} />,
    },
    {
      title: "Estética Dentária",
      description: "Facetas, branqueamento e correções sutis para um sorriso radiante.",
      icon: <Sparkles size={32} />,
    },
    {
      title: "Ortodontia",
      description: "Aparelhos invisíveis e convencionais para um alinhamento perfeito.",
      icon: <ShieldCheck size={32} />,
    },
    {
      title: "Periodontologia",
      description: "Cuidado especializado com as gengivas e tecidos de suporte dos dentes.",
      icon: <Heart size={32} />,
    },
    {
      title: "Turismo Dentário",
      description: "Soluções completas para pacientes internacionais que visitam o Porto.",
      icon: <MapPin size={32} />,
    },
  ];

  return (
    <section id="tratamentos" className="py-32 bg-brand-paper border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="display text-[10px] font-bold tracking-[0.4em] text-brand-accent mb-4 block uppercase leading-snug">
              Nossos Serviços
            </span>
            <h2 className="serif text-5xl md:text-7xl text-white mb-6">
              Soluções à medida do <br />
              <span className="italic text-brand-accent">seu sorriso.</span>
            </h2>
            <p className="text-slate-400 text-lg font-light">
              Oferecemos uma gama completa de tratamentos especializados, combinando arte e ciência para resultados excecionais.
            </p>
          </div>
          <div className="hidden lg:block relative text-white/5">
            <span className="display text-9xl font-black italic tracking-tighter">ESTÉTICA</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-white/10">
          {treatments.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-12 border-b border-r border-white/5 last:border-r-0 lg:even:border-r lg:odd:border-r lg:[&:nth-child(3n)]:border-r-0 hover:bg-white/[0.02] transition-colors duration-500 flex flex-col items-start"
            >
              <div className="text-brand-accent mb-8 opacity-60 group-hover:opacity-100 transition-opacity">
                {item.icon}
              </div>
              <h3 className="serif text-3xl mb-4 text-white group-hover:text-brand-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-500 leading-relaxed mb-8 font-light italic">
                {item.description}
              </p>
              <a href="#contactos" className="text-[10px] font-bold tracking-[0.3em] text-brand-accent uppercase mt-auto flex items-center gap-2 hover:text-white transition-colors">
                <span>CONSULTAR ESPECIALIDADE</span>
                <span className="w-8 h-[1px] bg-brand-accent/30 group-hover:bg-white transition-colors" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  );
}
