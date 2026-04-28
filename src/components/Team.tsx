import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

export default function Team() {
  const clinicalTeam = [
    {
      name: "Dra. Flávia Freitas",
      role: "Diretora clínica & especialista",
      image: "https://res.cloudinary.com/di7rf0ubn/image/upload/c_fill,g_face,w_800,h_1000,f_auto,q_auto/v1777342602/Fl%C3%A1via_Freitas_hqutbt.png",
      specialty: "Endodontia",
    },
    {
      name: "Dra. Diana Castro",
      role: "Diretora clínica & especialista",
      image: "https://res.cloudinary.com/di7rf0ubn/image/upload/c_fill,g_face,w_800,h_1000,f_auto,q_auto/v1777071953/Diana_Castro_jbuiam.png",
      specialty: "Ortodontia & Estética",
    },
    {
      name: "Dra. Letícia Sousa",
      role: "Atendimento à Criança e Prevenção",
      image: "https://res.cloudinary.com/di7rf0ubn/image/upload/c_fill,g_face,w_800,h_1000,f_auto,q_auto/v1777343013/Let%C3%ADcia_Sousa_vfapnb.png",
      specialty: "Odontopediatria & Prevenção",
    },
    {
      name: "Dra. Bruna Almeida",
      role: "Especialista em Periodontia",
      image: "https://res.cloudinary.com/di7rf0ubn/image/upload/c_fill,g_face,w_800,h_1000,f_auto,q_auto/v1777343737/Bruna_Almeida_jnejaj.png",
      specialty: "Periodontia",
    },
    {
      name: "Dra. Erika Braga",
      role: "Prótese e Dentística",
      image: "https://res.cloudinary.com/di7rf0ubn/image/upload/c_fill,g_face,w_800,h_1000,f_auto,q_auto/v1777343524/Erika_Braga_kwnz6t.png",
      specialty: "Reabilitação Oral & Estética",
    },
    {
      name: "Dra. Tamirys Teixeira",
      role: "Cirurgiã e Implante",
      image: "https://res.cloudinary.com/di7rf0ubn/image/upload/c_fill,g_face,w_800,h_1000,f_auto,q_auto/v1777343991/Tamirys_Teixeira_k4vty3.png",
      specialty: "Cirurgia & Implantodontia",
    },
  ];

  const supportStaff = [
    {
      name: "Patrícia Natália",
      role: "Auxiliar",
      image: "https://res.cloudinary.com/di7rf0ubn/image/upload/c_fill,g_face,w_600,h_600,f_auto,q_auto/v1776968503/Patr%C3%ADcia_Nat%C3%A1lia_qpwdmp.png",
      specialty: "Apoio Clínico",
    },
    {
      name: "Sthefany Santos",
      role: "Auxiliar",
      image: "https://res.cloudinary.com/di7rf0ubn/image/upload/c_fill,g_face,w_600,h_600,f_auto,q_auto/v1777405872/Sthefanyy_Santos_s2qsb6.jpg",
      specialty: "Apoio clínico",
    },
    {
      name: "Ellen Brito",
      role: "Auxiliar de saúde bucal",
      image: "https://res.cloudinary.com/di7rf0ubn/image/upload/c_fill,g_face,w_600,h_600,f_auto,q_auto/v1777405404/Ellen_Brito_qou965.jpg",
      specialty: "Apoio Clínico",
    },
    {
      name: "Lidiane Assis",
      role: "Secretária",
      image: "https://res.cloudinary.com/di7rf0ubn/image/upload/c_fill,g_face,w_600,h_600,f_auto,q_auto/v1776968214/Lidiane_Assis_qcpvjn.png",
      specialty: "Atendimento & Gestão",
    },
  ];

  return (
    <section id="equipe" className="relative py-24 md:py-32 bg-brand-paper border-t border-white/10 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-32 h-32 dots-pattern opacity-10" />
      <div className="absolute bottom-1/4 right-0 w-32 h-32 dots-pattern opacity-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="relative mb-16 md:mb-24 px-4 md:px-0 overflow-visible">
          <div className="relative z-10 text-left max-w-3xl">
            <h2 className="serif text-4xl sm:text-5xl md:text-7xl text-white mb-4 uppercase italic leading-tight text-left">
              Corpo <span className="text-brand-accent">Clínico.</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed font-light">
              A nossa equipe reúne profissionais dedicados à excelência clínica, unindo conhecimento e tecnologia para transformar o seu sorriso.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8 lg:gap-10 mb-32 max-w-6xl mx-auto">
          {clinicalTeam.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden fluid-mask mb-6 shadow-2xl border border-white/10 mx-auto bg-gradient-to-br from-slate-900 to-black max-w-[280px] sm:max-w-none">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale-[0.6] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-brand-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center p-4">
                   <button className="bg-brand-accent text-black px-4 py-2 rounded-none text-[9px] font-bold tracking-widest flex items-center gap-2 hover:bg-white transition-all uppercase transform translate-y-4 group-hover:translate-y-0 duration-500 opacity-0 group-hover:opacity-100">
                    Saber Mais <ExternalLink size={12} />
                  </button>
                </div>
              </div>
              <div className="text-center px-4">
                <h3 className="serif text-2xl text-white mb-2 leading-none uppercase font-bold">{member.name}</h3>
                <p className="display text-[10px] font-bold tracking-[0.2em] text-brand-accent mb-3">{member.role}</p>
                <div className="flex items-center justify-center gap-2 text-slate-500 text-[9px] font-bold tracking-[0.1em] uppercase italic">
                  <span className="w-3 h-px bg-white/10" />
                  <span>{member.specialty}</span>
                  <span className="w-3 h-px bg-white/10" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>


        <div className="pt-24 border-t border-white/5">
          <div className="text-center mb-16">
            <h3 className="serif text-3xl md:text-4xl text-white italic">A base da nossa excelência.</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
            {supportStaff.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 bg-white/[0.02] p-6 sm:p-8 border border-white/5 group hover:border-brand-accent/30 transition-colors text-center sm:text-left"
              >
                <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 fluid-mask sm:rounded-none">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="serif text-2xl text-white mb-1 uppercase font-bold">{member.name}</h4>
                  <p className="display text-[10px] font-bold tracking-widest text-brand-accent mb-2">{member.role}</p>
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
