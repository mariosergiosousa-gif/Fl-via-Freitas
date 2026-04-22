export default function Footer() {
  return (
    <footer className="py-24 bg-[#050608] text-slate-600 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 border-2 border-brand-accent flex items-center justify-center rotate-45">
                <div className="-rotate-45 font-serif font-bold text-brand-accent">F</div>
              </div>
              <h2 className="display text-xl font-bold text-white tracking-widest uppercase">FLÁVIA FREITAS</h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed mb-10 font-light text-slate-400">
              Excelência clínica e odontologia de alta performance em Brumadinho. Transformamos sorrisos através de tecnologia de precisão e cuidado humano de classe mundial.
            </p>
            <div className="flex items-center gap-3">
               <span className="w-2 h-2 rounded-full bg-brand-accent shadow-[0_0_12px_rgba(197,160,89,0.8)] animate-pulse" />
               <span className="text-[10px] font-bold tracking-[0.3em] text-white uppercase italic">Standard of Excellence</span>
            </div>
          </div>
          
          <div>
            <h4 className="display text-[10px] font-bold tracking-[0.4em] text-brand-accent uppercase mb-10">Mavegação</h4>
            <ul className="space-y-4">
              <li><a href="#sobre" className="text-xs hover:text-white transition-colors uppercase tracking-widest">O Instituto</a></li>
              <li><a href="#tratamentos" className="text-xs hover:text-white transition-colors uppercase tracking-widest">Tratamentos</a></li>
              <li><a href="#formacao" className="text-xs hover:text-white transition-colors uppercase tracking-widest">Formação</a></li>
              <li><a href="#equipa" className="text-xs hover:text-white transition-colors uppercase tracking-widest">Corpo Clínico</a></li>
            </ul>
          </div>

          <div>
            <h4 className="display text-[10px] font-bold tracking-[0.4em] text-brand-accent uppercase mb-10">Informação</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-xs hover:text-white transition-colors uppercase tracking-widest">Privacidade</a></li>
              <li><a href="#" className="text-xs hover:text-white transition-colors uppercase tracking-widest">Termos</a></li>
              <li><a href="#" className="text-xs hover:text-white transition-colors uppercase tracking-widest">Livro Reclamações</a></li>
              <li><a href="#" className="text-xs hover:text-white transition-colors uppercase tracking-widest">Contactos</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-slate-600">
            © {new Date().getFullYear()} FLÁVIA FREITAS. Brumadinho, MG.
          </p>
          <div className="flex gap-10">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase hover:text-white transition-colors cursor-pointer">INSTAGRAM</span>
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase hover:text-white transition-colors cursor-pointer">WHATSAPP</span>
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-accent">EXCELÊNCIA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

