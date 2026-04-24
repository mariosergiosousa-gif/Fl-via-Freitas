import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

export default function Team() {
  const clinicalTeam = [
    {
      name: "Dra. Flávia Freitas",
      role: "Diretora Clínica & Especialista",
      image: "https://res.cloudinary.com/di7rf0ubn/image/upload/ar_3:4,c_fill,g_face,f_auto,q_auto/v1776958804/Fl%C3%A1via_Freitas_nz6qr4.png",
      specialty: "Endodontia & Reabilitação Oral",
    },
    {
      name: "Dra. Diana Castro",
      role: "Especialista em Ortodontia",
      image: "https://res.cloudinary.com/di7rf0ubn/image/upload/ar_3:4,c_fill,g_face,f_auto,q_auto/v1777071953/Diana_Castro_jbuiam.png",
      specialty: "Ortodontia & Estética",
    },
    {
      name: "Dra. Letícia Sousa",
      role: "Atendimento à Criança e Prevenção",
      image: "https://res.cloudinary.com/di7rf0ubn/image/upload/ar_3:4,c_fill,g_face,f_auto,q_auto/v1776965407/Let%C3%ADcia_Sousa_vt4iqi.png",
      specialty: "Odontopediatria & Prevenção",
    },
    {
      name: "Dra. Bruna Almeida",
      role: "Especialista em Periodontia",
      image: "https://res.cloudinary.com/di7rf0ubn/image/upload/ar_3:4,c_fill,g_face,f_auto,q_auto/v1776955882/Bruna_Almeida_ga4uif.png",
      specialty: "Periodontia",
    },
    {
      name: "Dra. Erika Braga",
      role: "Prótese e Dentística",
      image: "https://res.cloudinary.com/di7rf0ubn/image/upload/ar_3:4,c_fill,g_face,f_auto,q_auto/v1776966194/Erika_Braga_clzsqb.png",
      specialty: "Reabilitação Oral & Estética",
    },
    {
      name: "Dra. Tamirys Teixeira",
      role: "Cirurgiã e Implante",
      image: "https://res.cloudinary.com/di7rf0ubn/image/upload/ar_3:4,c_fill,g_face,f_auto,q_auto/v1776967272/Tamirys_Teixeira_qipfgv.png",
      specialty: "Cirurgia & Implantodontia",
    },
  ];

  const supportStaff = [
    {
      name: "Patrícia Natália",
      role: "Auxiliar",
      image: "https://res.cloudinary.com/di7rf0ubn/image/upload/ar_1:1,c_fill,g_face,f_auto,q_auto/v1776968503/Patr%C3%ADcia_Nat%C3%A1lia_qpwdmp.png",
      specialty: "Apoio Clínico",
    },
    {
      name: "Lidiane Assis",
      role: "Secretária",
      image: "https://res.cloudinary.com/di7rf0ubn/image/upload/ar_1:1,c_fill,g_face,f_auto,q_auto/v1776968214/Lidiane_Assis_qcpvjn.png",
      specialty: "Atendimento & Gestão",
    },
  ];

  return (
    <section id="equipe" className="relative py-24 md:py-32 bg-brand-paper border-t border-white/10 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-32 h-32 dots-pattern opacity-10" />
      <div className="absolute bottom-1/4 right-0 w-32 h-32 dots-pattern opacity-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-left mb-16 md:mb-24 max-w-3xl px-4 md:px-0">
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
              <div className="relative aspect-[3/4] overflow-hidden fluid-mask mb-6 shadow-2xl border border-white/5 mx-auto bg-brand-muted max-w-[280px] sm:max-w-none">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-4">
                </div>
              </div>
              <div className="text-center px-4">
              </div>
            </motion.div>
          ))}
        </div>


        <div className="pt-24 border-t border-white/5">
          <div className="text-center mb-16">
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
