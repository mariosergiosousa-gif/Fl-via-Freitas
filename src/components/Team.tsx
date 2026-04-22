import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

export default function Team() {
  const clinicalTeam = [
    {
      name: "Dra. Flávia Freitas",
      role: "Diretora Clínica & Especialista",
      image: "/input_file_0.png",
      specialty: "Endodontia & Reabilitação Oral",
    },
    {
      name: "Dra. Diana Castro",
      role: "Especialista em Ortodontia",
      image: "/input_file_1.png",
      specialty: "Ortodontia & Estética",
    },
    {
      name: "Dra. Letícia Sousa",
      role: "Atendimento à Criança e Prevenção",
      image: "/input_file_2.png",
      specialty: "Odontopediatria & Prevenção",
    },
    {
      name: "Dra. Bruna Almeida",
      role: "Especialista em Periodontia",
      image: "/input_file_3.png",
      specialty: "Periodontia",
    },
    {
      name: "Dra. Erika Braga",
      role: "Prótese e Dentística",
      image: "/input_file_4.png",
      specialty: "Reabilitação Oral & Estética",
    },
    {
      name: "Dra. Tamirys Teixeira",
      role: "Cirurgiã e Implante",
      image: "/input_file_5.png",
      specialty: "Cirurgia & Implantodontia",
    },
  ];

  const supportStaff = [
    {
      name: "Patrícia Natália",
      role: "Auxiliar",
      image: "/input_file_6.png",
      specialty: "Apoio Clínico",
    },
    {
      name: "Lidiane Assis",
      role: "Secretária",
      image: "/input_file_7.png",
      specialty: "Atendimento & Gestão",
    },
  ];

  return (
    <section id="equipa" className="py-32 bg-brand-paper border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="display text-[10px] font-bold tracking-[0.5em] text-brand-accent mb-6 block uppercase">
            Corpo Clínico
          </span>
          <h2 className="serif text-5xl md:text-7xl text-white mb-8">
            Especialistas dedicados à <br />
            <span className="italic text-brand-accent">sua saúde oral.</span>
          </h2>
          <div className="w-24 h-px bg-white/20 mx-auto mb-8" />
          <p className="text-slate-400 text-lg leading-relaxed font-light">
            A nossa equipa reúne profissionais de renome em Brumadinho, focados na excelência clínica e no bem-estar de cada paciente.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-32">
          {clinicalTeam.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-none mb-8 shadow-2xl border border-white/5">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-paper/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <button className="bg-brand-accent text-black px-6 py-3 rounded-none text-[10px] font-bold tracking-widest flex items-center gap-2 hover:bg-white transition-all uppercase">
                    Saber Mais + <ExternalLink size={14} />
                  </button>
                </div>
              </div>
              <div className="text-center">
                <h3 className="serif text-3xl text-white mb-2">{member.name}</h3>
                <p className="display text-[11px] font-bold tracking-[0.2em] text-brand-accent uppercase mb-4">{member.role}</p>
                <div className="flex items-center justify-center gap-2 text-slate-500 text-[10px] font-bold tracking-widest uppercase italic">
                  <span className="w-4 h-px bg-white/10" />
                  <span>{member.specialty}</span>
                  <span className="w-4 h-px bg-white/10" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>


        <div className="pt-24 border-t border-white/5">
          <div className="text-center mb-16">
            <p className="display text-[10px] font-bold tracking-[0.4em] text-brand-accent mb-4 uppercase">Apoio não Clínico</p>
            <h3 className="serif text-4xl text-white italic">A base da nossa excelência.</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {supportStaff.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center gap-8 bg-white/[0.02] p-8 border border-white/5 group hover:border-brand-accent/30 transition-colors"
              >
                <div className="w-32 h-32 shrink-0 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="serif text-2xl text-white mb-1">{member.name}</h4>
                  <p className="display text-[10px] font-bold tracking-widest text-brand-accent uppercase mb-2">{member.role}</p>
                  <p className="text-slate-500 text-[10px] uppercase tracking-wider italic">{member.specialty}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
