import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Instagram, Linkedin, Facebook, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contactos" className="py-32 bg-brand-paper relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left info */}
          <div>
            <span className="display text-[10px] font-bold tracking-[0.4em] text-brand-accent mb-8 block uppercase">
              Onde Estamos
            </span>
            <h2 className="serif text-4xl md:text-6xl leading-[1.1] text-white mb-8">
              Visite-nos em <br />
              <span className="italic text-brand-accent">Brumadinho, MG.</span>
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-12 sm:gap-x-16 sm:gap-y-12">
              <div className="group cursor-pointer">
                <h4 className="display text-[10px] font-bold tracking-widest text-slate-500 mb-4 uppercase flex items-center gap-2">
                  <MapPin size={14} className="text-brand-accent" />
                  Endereço
                </h4>
                <p className="serif text-2xl text-white leading-tight">
                  Centro Histórico <br />
                  Brumadinho, Minas Gerais
                </p>
              </div>

              <div className="group cursor-pointer">
                <h4 className="display text-[10px] font-bold tracking-widest text-slate-500 mb-4 uppercase flex items-center gap-2">
                  <Phone size={14} className="text-brand-accent" />
                  WhatsApp
                </h4>
                <p className="serif text-2xl text-white leading-tight">
                  (31) 98765-4321
                </p>
              </div>

              <div className="group cursor-pointer">
                <h4 className="display text-[10px] font-bold tracking-widest text-slate-500 mb-4 uppercase flex items-center gap-2">
                  <Clock size={14} className="text-brand-accent" />
                  Horário
                </h4>
                <p className="serif text-xl text-white leading-tight">
                  Seg - Sex: 09:00 - 19:30 <br />
                  Sáb: 09:00 - 13:00
                </p>
              </div>

              <div className="group cursor-pointer">
                <h4 className="display text-[10px] font-bold tracking-widest text-slate-500 mb-4 uppercase flex items-center gap-2">
                  <Mail size={14} className="text-brand-accent" />
                  E-mail
                </h4>
                <p className="serif text-xl text-white leading-tight break-all">
                  geral@portodentalinstitute.com
                </p>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-white/5 flex gap-6">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <div key={i} className="w-12 h-12 rounded-none border border-white/10 flex items-center justify-center text-slate-400 hover:bg-brand-accent hover:border-brand-accent hover:text-black transition-all cursor-pointer">
                  <Icon size={20} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white/[0.02] p-8 md:p-10 rounded-none border border-white/10 shadow-2xl relative">
            <div className="absolute top-0 right-0 p-4 opacity-10">
               <div className="w-16 h-16 border border-white rotate-45" />
            </div>
            <h3 className="serif text-2xl mb-8 text-white tracking-tight">Marque a sua consulta</h3>
            <form className="space-y-6">
              <div className="relative">
                <input type="text" placeholder="Nome Completo" className="w-full bg-transparent border-b border-white/10 px-0 py-3 focus:border-brand-accent outline-none transition-all serif text-lg text-white placeholder:text-slate-600" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <input type="email" placeholder="E-mail" className="w-full bg-transparent border-b border-white/10 px-0 py-3 focus:border-brand-accent outline-none transition-all serif text-lg text-white placeholder:text-slate-600" />
                </div>
                <div className="relative">
                  <input type="tel" placeholder="Telemóvel" className="w-full bg-transparent border-b border-white/10 px-0 py-3 focus:border-brand-accent outline-none transition-all serif text-lg text-white placeholder:text-slate-600" />
                </div>
              </div>
              <div>
                <select className="w-full bg-transparent border-b border-white/10 px-0 py-3 focus:border-brand-accent outline-none transition-all serif text-lg text-white ">
                  <option className="bg-brand-paper">Consulta de Avaliação</option>
                  <option className="bg-brand-paper">Informação sobre Cursos</option>
                  <option className="bg-brand-paper">Outros Assuntos</option>
                </select>
              </div>
              <button className="w-full py-4 bg-brand-accent text-black display text-xs font-bold tracking-[0.3em] hover:bg-white transition-all flex items-center justify-center gap-4 uppercase">
                ENVIAR MENSAGEM <ArrowUpRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>

    </section>
  );
}
