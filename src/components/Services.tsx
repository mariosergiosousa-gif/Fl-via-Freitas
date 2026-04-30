import { useState } from 'react';
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
import TreatmentDetailsModal from './TreatmentDetailsModal';

export default function Services() {
  const [selectedTreatment, setSelectedTreatment] = useState<{ title: string; content: string } | null>(null);

  const treatments = [
    {
      title: "Odontopediatria",
      description: "Cuidados gentis e especializados para o sorriso dos mais pequenos.",
      icon: <Baby size={32} />,
      details: "A odontopediatria é a área da odontologia dedicada à saúde bucal infantil, desde os primeiros dentes de leite até a adolescência. O odontopediatra acompanha o crescimento, previne problemas, orienta hábitos saudáveis e garante que cada fase do desenvolvimento seja vivida com um sorriso saudável e confiante."
    },
    {
      title: "Ortodontia",
      description: "Correção e alinhamento do sorriso para todas as idades.",
      icon: <ShieldCheck size={32} />,
      details: "A ortodontia é a especialidade da odontologia que corrige o posicionamento dos dentes e dos ossos maxilares. Além de melhorar a estética do sorriso, o tratamento ortodôntico contribui para uma mastigação saudável, facilita a higiene bucal e aumenta a autoestima. Um sorriso bem alinhado é muito mais do que beleza: é saúde e qualidade de vida."
    },
    {
      title: "Clínica Geral",
      description: "Prevenção e cuidados fundamentais para a saúde oral diária.",
      icon: <CheckCircle2 size={32} />,
      details: "A clínica geral é a área da odontologia que cuida da prevenção, diagnóstico e tratamento dos problemas mais comuns da boca. É o primeiro passo para manter dentes e gengivas saudáveis, garantindo bem-estar e qualidade de vida. Consultas regulares com o dentista ajudam a evitar complicações e preservam o sorriso por muito mais tempo."
    },
    {
      title: "Implantodontia",
      description: "Soluções permanentes e seguras para a falta de dentes.",
      icon: <Layers size={32} />,
      details: "A implantodontia é a especialidade da odontologia que devolve função e estética ao sorriso por meio de implantes dentários. Com técnicas modernas e seguras, é possível substituir dentes perdidos, restaurar a mastigação e trazer de volta a confiança ao paciente. Um implante bem planejado é mais do que um dente novo: é qualidade de vida."
    },
    {
      title: "HOF",
      description: "Equilíbrio estético e rejuvenescimento facial personalizado.",
      icon: <Sparkles size={32} />,
      details: "A harmonização orofacial é um conjunto de procedimentos que busca realçar a beleza natural, corrigir pequenas assimetrias e proporcionar mais equilíbrio ao rosto. Além de melhorar a estética, contribui para uma autoestima e a confiança, sempre com foco na saúde e na naturalidade dos resultados."
    },
    {
      title: "Cirurgia e Traumatologia",
      description: "Intervenções buco-maxilo-faciais avançadas e precisão cirúrgica.",
      icon: <Activity size={32} />,
      details: "A cirurgia e traumatologia bucomaxilofacial é a área da odontologia responsável pelo diagnóstico e tratamento de alterações, lesões e traumas na boca, face e maxilares. Com técnicas avançadas, o especialista atua em casos complexos, devolvendo função, estética e qualidade de vida ao paciente."
    },
    {
      title: "Prótese",
      description: "Restauração da função e estética com próteses de alta qualidade.",
      icon: <Shapes size={32} />,
      details: "A prótese dentária é a especialidade que restaura dentes ausentes ou danificados, devolvendo a mastigação, a fala e a estética. Seja fixa, removível ou sobre implantes, a prótese proporciona conforto, confiança e qualidade de vida, permitindo que o paciente volte a sorrir sem limitações."
    },
    {
      title: "Periodontia",
      description: "Tratamento especializado das gengivas e tecidos de suporte.",
      icon: <Heart size={32} />,
      details: "A periodontia é a especialidade da odontologia voltada para a prevenção, diagnóstico e tratamento das doenças que afetam a gengiva e os tecidos de suporte dos dentes. Manter a saúde periodontal é essencial para evitar problemas como gengivite e periodontite, garantindo dentes firmes, hálito saudável e um sorriso duradouro."
    },
    {
      title: "Endodontia",
      description: "Tratamentos de canal com precisão digital e mínimo desconforto.",
      icon: <Zap size={32} />,
      details: "A endodontia é a especialidade da odontologia responsável pelo tratamento do canal dentário. Ela atua na prevenção e cura de inflamações e infecções da polpa do dente, permitindo que dentes comprometidos sejam preservados. Com técnicas modernas e seguras, o tratamento endodôntico devolve conforto, elimina a dor e mantém o sorriso saudável por muito mais tempo."
    },
  ];

  return (
    <section id="tratamentos" className="relative py-24 md:py-32 bg-brand-paper border-t border-white/10 overflow-hidden">
      {/* Decorative Dots Pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 dots-pattern opacity-10 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 dots-pattern opacity-5 translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-8 md:mb-12 gap-8 text-center md:text-left">
          <div className="max-w-2xl">
            <h2 className="serif text-4xl sm:text-5xl md:text-7xl text-white mb-6 uppercase italic leading-[1.1]">
              Excelência <br className="hidden md:block" />
              <span className="text-brand-accent">Personalizada.</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed max-w-lg mx-auto md:mx-0 mb-4">
              Combinamos arte, ciência e a tecnologia mais avançada para criar resultados que superam expectativas.
            </p>
          </div>
        </div>

        <p className="display text-[10px] font-bold tracking-[0.4em] text-brand-accent uppercase text-center py-6 bg-brand-accent/5 border-y border-white/5 mb-16">Tratamentos</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-white/10">
          {treatments.map((item, index) => (
            <motion.div
              key={`treatment-${index}-${item.title}`}
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
              <p className="text-slate-500 leading-relaxed mb-8 font-normal italic text-sm md:text-base text-justify">
                {item.description}
              </p>
              
              {item.details ? (
                <button 
                  onClick={() => setSelectedTreatment({ title: item.title, content: item.details })}
                  className="text-[10px] font-bold tracking-[0.3em] text-brand-accent uppercase mt-auto flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
                >
                  <span>SAIBA MAIS</span>
                  <span className="w-8 h-[1px] bg-brand-accent/30 group-hover:bg-white transition-all group-hover:w-12" />
                </button>
              ) : (
                <a href="#onde-estamos" className="text-[10px] font-bold tracking-[0.3em] text-brand-accent uppercase mt-auto flex items-center gap-2 hover:text-white transition-colors">
                  <span>SAIBA MAIS</span>
                  <span className="w-8 h-[1px] bg-brand-accent/30 group-hover:bg-white transition-all group-hover:w-12" />
                </a>
              )}
              
              {/* Corner accent for group hover */}
              <div className="absolute top-0 right-0 w-2 h-2 bg-brand-accent/0 group-hover:bg-brand-accent transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      <TreatmentDetailsModal 
        isOpen={!!selectedTreatment}
        onClose={() => setSelectedTreatment(null)}
        title={selectedTreatment?.title || ''}
        content={selectedTreatment?.content || ''}
      />
    </section>
  );
}
