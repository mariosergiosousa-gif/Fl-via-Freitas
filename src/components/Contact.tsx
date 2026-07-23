import { motion } from 'motion/react';
import { Mail, MapPin, Clock, Instagram } from 'lucide-react';
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
        <div className="max-w-7xl mx-auto px-6 text-left">
          <div className="flex flex-col items-start">
            {/* Info */}
            <div className="w-full">
              <h2 className="serif text-4xl md:text-7xl text-white italic mb-6 uppercase tracking-tighter leading-none">
                Visite-nos em <br />
                <span className="text-brand-accent not-italic font-bold">Brumadinho, MG.</span>
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-x-16 sm:gap-y-16 text-center w-full mt-12 md:mt-20">
                <div className="group cursor-pointer flex flex-col items-center">
                  <div className="w-full">
                    <h4 className="display text-[10px] font-bold tracking-widest text-slate-500 mb-4 uppercase flex items-center justify-center gap-2">
                      <Clock size={14} className="text-brand-accent" />
                      Horário
                    </h4>
                    <p className="serif text-xl md:text-2xl text-white leading-tight font-medium mb-12">
                      <span className="font-bold text-brand-accent">Seg - Sex:</span> 08:30 - 18:00 <br />
                      <span className="font-bold text-brand-accent">Sáb:</span> Sob Consulta
                    </p>
                  </div>

                  <a href="mailto:excelenciaodondologia8@gmail.com" className="block group w-full mb-8">
                    <h4 className="display text-[10px] font-bold tracking-widest text-slate-500 mb-4 uppercase flex items-center justify-center gap-2 group-hover:text-brand-accent transition-colors">
                      <Mail size={14} className="text-brand-accent" />
                      E-mail
                    </h4>
                    <p className="serif text-xl md:text-2xl text-white leading-tight break-all font-medium italic group-hover:text-brand-accent transition-colors">
                      excelenciaodondologia8@gmail.com
                    </p>
                  </a>

                  <a 
                    href="https://www.instagram.com/excelenciaemodontologia8/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open("https://www.instagram.com/excelenciaemodontologia8/", "_blank", "noopener,noreferrer");
                    }}
                    className="block group w-full"
                  >
                    <h4 className="display text-[10px] font-bold tracking-widest text-slate-500 mb-4 uppercase flex items-center justify-center gap-2 group-hover:text-brand-accent transition-colors">
                      <Instagram size={14} className="text-brand-accent" />
                      Instagram
                    </h4>
                    <p className="serif text-xl md:text-2xl text-white leading-tight font-medium italic group-hover:text-brand-accent transition-colors">
                      @excelenciaemodontologia8
                    </p>
                  </a>
                </div>

                <div className="group cursor-pointer">
                  <a 
                    href="https://maps.app.goo.gl/GpQXkE8BpQ39dj8y7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <h4 className="display text-[10px] font-bold tracking-widest text-slate-500 mb-4 uppercase flex items-center justify-center gap-2 group-hover:text-brand-accent transition-colors">
                      <MapPin size={14} className="text-brand-accent" />
                      Endereço
                    </h4>
                    <p className="serif text-xl md:text-2xl text-white leading-tight font-medium group-hover:text-brand-accent transition-colors mb-6">
                      Rua Barão do Rio Branco, 83 - Centro, <br />
                      Brumadinho - MG, 32480-032, Brasil
                    </p>
                  </a>

                  <div className="mt-2 rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-44 w-full max-w-sm mx-auto">
                    <iframe
                      title="Mapa de Localização"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.385966348737!2d-44.20248572398539!3d-20.142767699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6cd3d2e62699b%3A0x6085d6045d80054!2sExcel%C3%AAncia%20em%20Odontologia!5e0!3m2!1spt-BR!2sbr!4v1716000000000!5m2!1spt-BR!2sbr"
                      width="100%"
                      height="100%"
                      style={{ border: 0, filter: "grayscale(0.6) invert(0.9) contrast(1.1) brightness(0.9)" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="opacity-90 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    </section>
  );
}
