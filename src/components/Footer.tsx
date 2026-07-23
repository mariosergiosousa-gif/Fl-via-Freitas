interface FooterProps {
  onShowPrivacy: () => void;
  onShowCookies: () => void;
}

export default function Footer({ onShowPrivacy, onShowCookies }: FooterProps) {
  return (
    <footer className="py-24 bg-[#050608] text-slate-600 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-2">
            <div className="mb-8 flex flex-col leading-[1.1] items-center md:items-start text-center md:text-left">
              <span className="serif italic text-[13px] tracking-[0.2em] text-brand-accent uppercase">Excelência em</span>
              <span className="serif italic text-[13px] tracking-[0.2em] text-brand-accent uppercase">Odontologia</span>
            </div>
            <p className="max-w-md text-sm leading-relaxed mb-10 font-light text-slate-400">
              Transformando sorrisos, promovendo saúde bucal e a melhoria da autoestima!
            </p>
          </div>
          
          <div>
            <h4 className="display text-[10px] font-bold tracking-[0.4em] text-brand-accent uppercase mb-10">Navegação</h4>
            <ul className="space-y-4">
              <li><a href="#tratamentos" className="text-xs hover:text-white transition-colors uppercase tracking-widest">Tratamentos</a></li>
              <li><a href="#equipe" className="text-xs hover:text-white transition-colors uppercase tracking-widest">Corpo Clínico</a></li>
              <li><a href="#o-nosso-espaco" className="text-xs hover:text-white transition-colors uppercase tracking-widest">O Nosso Espaço</a></li>
              <li><a href="#onde-estamos" className="text-xs hover:text-white transition-colors uppercase tracking-widest">Onde Estamos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="display text-[10px] font-bold tracking-[0.4em] text-brand-accent uppercase mb-10">Informação</h4>
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={onShowPrivacy}
                  className="text-xs hover:text-white transition-colors uppercase tracking-widest cursor-pointer text-left block w-full"
                >
                  Privacidade
                </button>
              </li>
              <li>
                <button 
                  onClick={onShowCookies}
                  className="text-xs hover:text-white transition-colors uppercase tracking-widest cursor-pointer text-left block w-full"
                >
                  Cookies
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-slate-600">
            @ 2026 Excelência em Odontologia
          </p>
          <div className="flex gap-10">
            <a 
              href="https://www.instagram.com/excelenciaemodontologia8/" 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={(e) => {
                e.preventDefault();
                window.open("https://www.instagram.com/excelenciaemodontologia8/", "_blank", "noopener,noreferrer");
              }}
              className="text-[10px] font-bold tracking-[0.4em] uppercase hover:text-white transition-colors cursor-pointer"
            >
              INSTAGRAM
            </a>
            <a href="https://wa.me/5531999245130" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold tracking-[0.4em] uppercase hover:text-white transition-colors cursor-pointer">WHATSAPP</a>
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-accent">EXCELÊNCIA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

