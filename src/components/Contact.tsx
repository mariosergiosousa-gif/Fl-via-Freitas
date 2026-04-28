import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, ArrowUpRight } from 'lucide-react';
import { FormEvent, useState, ChangeEvent } from 'react';

export default function Contact() {
  const [phoneValue, setPhoneValue] = useState('');

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 10) {
      value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (value.length > 6) {
      value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{0,5}).*/, '($1) $2');
    } else if (value.length > 0) {
      value = value.replace(/^(\d{0,2}).*/, '($1');
    }
    
    setPhoneValue(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const tel = formData.get('tel');
    const subject = formData.get('subject');

    const message = `*Novo Pedido de Agendamento*\n\n` +
                   `*Nome:* ${name}\n` +
                   `*E-mail:* ${email}\n` +
                   `*Telefone:* ${tel}\n` +
                   `*Assunto:* ${subject}\n\n` +
                   `Olá! Gostaria de agendar uma consulta.`;
    
    const whatsappUrl = `https://wa.me/5531999245130?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="onde-estamos" className="py-24 md:py-32 bg-brand-paper relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left info */}
          <div className="text-left p-0 m-0 lg:-mr-10">
            <h2 className="serif text-4xl md:text-6xl leading-[1.1] text-white mb-12 italic uppercase">
              Visite-nos em <br />
              <span className="text-brand-accent not-italic font-bold">Brumadinho, MG.</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-x-16 sm:gap-y-12 text-left">
              <div className="group cursor-pointer">
                <a 
                  href="https://maps.app.goo.gl/TB6GvNZGQ5vmYYaP6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <h4 className="display text-[10px] font-bold tracking-widest text-slate-500 mb-4 uppercase flex items-center justify-center sm:justify-start gap-2 group-hover:text-brand-accent transition-colors">
                    <MapPin size={14} className="text-brand-accent" />
                    Endereço
                  </h4>
                  <p className="serif text-xl md:text-2xl text-white leading-tight font-medium group-hover:text-brand-accent transition-colors">
                    Rua Barão do Rio Branco, 83 <br />
                    Centro, Brumadinho - MG
                  </p>
                </a>
              </div>

              <div className="group cursor-pointer">
                <a 
                  href="https://wa.me/5531999245130" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <h4 className="display text-[10px] font-bold tracking-widest text-slate-500 mb-4 uppercase flex items-center justify-center sm:justify-start gap-2 group-hover:text-brand-accent transition-colors">
                    <Phone size={14} className="text-brand-accent" />
                    WhatsApp
                  </h4>
                  <p className="serif text-xl md:text-2xl text-white leading-tight font-medium group-hover:text-brand-accent transition-colors">
                    (31) 99924-5130
                  </p>
                </a>
              </div>

              <div className="group cursor-pointer">
                <h4 className="display text-[10px] font-bold tracking-widest text-slate-500 mb-4 uppercase flex items-center justify-center sm:justify-start gap-2">
                  <Clock size={14} className="text-brand-accent" />
                  Horário
                </h4>
                <p className="serif text-lg md:text-xl text-white leading-tight">
                  <span className="font-bold text-brand-accent">Seg - Sex:</span> 08:30 - 18:00 <br />
                  <span className="font-bold text-brand-accent">Sáb:</span> Sob Consulta
                </p>
              </div>

              <div className="group cursor-pointer">
                <a href="mailto:excelenciaodondologia8@gmail.com" className="block group">
                  <h4 className="display text-[10px] font-bold tracking-widest text-slate-500 mb-4 uppercase flex items-center justify-center sm:justify-start gap-2 group-hover:text-brand-accent transition-colors">
                    <Mail size={14} className="text-brand-accent" />
                    E-mail
                  </h4>
                  <p className="serif text-lg md:text-xl text-white leading-tight break-all font-light italic group-hover:text-brand-accent transition-colors">
                    excelenciaodondologia8@gmail.com
                  </p>
                </a>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-white/5 flex justify-center lg:justify-start gap-6">
              <a 
                href="https://www.instagram.com/excelenciaemodontologia8/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-none border border-white/10 flex items-center justify-center text-slate-400 hover:bg-brand-accent hover:border-brand-accent hover:text-black transition-all cursor-pointer"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white/[0.02] p-8 md:p-12 rounded-none border border-white/10 shadow-2xl relative mt-8 lg:mt-0">
            <div className="absolute top-0 right-0 p-4 opacity-10">
               <div className="w-16 h-16 border border-white rotate-45" />
            </div>
            <h3 className="serif text-2xl mb-8 text-white tracking-tight font-bold uppercase">Marque a sua consulta</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="relative">
                <input required name="name" type="text" placeholder="Nome Completo" className="w-full bg-transparent border-b border-white/10 px-0 py-4 focus:border-brand-accent outline-none transition-all serif text-lg text-white placeholder:text-slate-600 rounded-none" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input required name="email" type="email" placeholder="E-mail" className="w-full bg-transparent border-b border-white/10 px-0 py-4 focus:border-brand-accent outline-none transition-all serif text-lg text-white placeholder:text-slate-600 rounded-none" />
                </div>
                <div className="relative pt-2">
                  <input 
                    required 
                    name="tel" 
                    type="tel" 
                    placeholder="(00) 00000-0000" 
                    value={phoneValue}
                    onChange={handlePhoneChange}
                    className="w-full bg-transparent border-b border-white/10 px-0 py-3 focus:border-brand-accent outline-none transition-all serif text-lg text-white placeholder:text-slate-600 rounded-none" 
                  />
                </div>
              </div>
              <div>
                <select name="subject" className="w-full bg-transparent border-b border-white/10 px-0 py-4 focus:border-brand-accent outline-none transition-all serif text-lg text-white rounded-none cursor-pointer">
                  <option value="Consulta de Avaliação" className="bg-brand-paper">Consulta de Avaliação</option>
                  <option value="Ortodontia" className="bg-brand-paper">Ortodontia</option>
                  <option value="Implantes" className="bg-brand-paper">Implantes</option>
                  <option value="Outros Assuntos" className="bg-brand-paper">Outros Assuntos</option>
                </select>
              </div>
              <button type="submit" className="w-full py-5 bg-brand-accent text-black display text-xs font-bold tracking-[0.3em] hover:bg-white transition-all flex items-center justify-center gap-4 uppercase shadow-xl mt-8">
                AGENDAR AGORA <ArrowUpRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

    </section>
  );
}
