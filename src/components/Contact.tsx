import { motion } from 'motion/react';
import { Mail, MapPin, Clock } from 'lucide-react';
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
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex flex-col items-center">
            {/* Info */}
            <div className="w-full">
              <h2 className="serif text-4xl md:text-6xl leading-[1.1] text-white mb-16 italic uppercase">
                Visite-nos em <br />
                <span className="text-brand-accent not-italic font-bold">Brumadinho, MG.</span>
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-x-16 sm:gap-y-16">
                <div className="group cursor-pointer">
                  <a 
                    href="https://maps.app.goo.gl/TB6GvNZGQ5vmYYaP6" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <h4 className="display text-[10px] font-bold tracking-widest text-slate-500 mb-4 uppercase flex items-center justify-center gap-2 group-hover:text-brand-accent transition-colors">
                      <MapPin size={14} className="text-brand-accent" />
                      Endereço
                    </h4>
                    <p className="serif text-xl md:text-2xl text-white leading-tight font-medium group-hover:text-brand-accent transition-colors">
                      Rua Barão do Rio Branco, 83, <br />
                      Centro, Brumadinho - MG
                    </p>
                  </a>
                </div>


                <div className="group cursor-pointer">
                  <h4 className="display text-[10px] font-bold tracking-widest text-slate-500 mb-4 uppercase flex items-center justify-center gap-2">
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
                    <h4 className="display text-[10px] font-bold tracking-widest text-slate-500 mb-4 uppercase flex items-center justify-center gap-2 group-hover:text-brand-accent transition-colors">
                      <Mail size={14} className="text-brand-accent" />
                      E-mail
                    </h4>
                    <p className="serif text-lg md:text-xl text-white leading-tight break-all font-light italic group-hover:text-brand-accent transition-colors">
                      excelenciaodondologia8@gmail.com
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

    </section>
  );
}
