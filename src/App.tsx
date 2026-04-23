/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        
        {/* About Short - Minimalist block */}
        <section id="sobre" className="py-32 bg-brand-paper border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
            <div className="relative">
               <div className="display text-[20vw] font-black text-white/5 absolute -top-[0.5em] -left-[0.2em] pointer-events-none select-none uppercase">
                 FF
               </div>
               <h2 className="serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8 text-white tracking-tighter">
                 Rigor Clínico <br />
                 <span className="italic text-brand-accent">em Brumadinho.</span>
               </h2>
            </div>
            <div>
              <p className="text-xl text-slate-400 leading-relaxed mb-12 font-light">
                A Dra. Flávia Freitas é referência em odontologia de alta performance, unindo tecnologia digital e um olhar artístico para criar sorrisos únicos e saudáveis para seus pacientes em Minas Gerais.
              </p>
              <div className="grid grid-cols-2 gap-12 border-t border-white/10 pt-12">
                <div>
                   <span className="display text-4xl font-light text-brand-accent block mb-2 underline underline-offset-8 decoration-white/10">01.</span>
                   <p className="text-[10px] font-bold tracking-[0.3em] text-white uppercase italic">Digital Flow</p>
                </div>
                <div>
                   <span className="display text-4xl font-light text-brand-accent block mb-2 underline underline-offset-8 decoration-white/10">02.</span>
                   <p className="text-[10px] font-bold tracking-[0.3em] text-white uppercase italic">Top Expertise</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Services />
        <Team />
        
        {/* Space Gallery */}
        <section className="py-32 bg-[#050608] overflow-hidden border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 mb-16">
            <span className="display text-[10px] font-bold tracking-[0.5em] text-brand-accent mb-6 block uppercase">
               O Nosso Espaço
            </span>
            <h2 className="serif text-4xl md:text-6xl text-white italic">Onde a tecnologia <span className="text-brand-accent">encontra o conforto.</span></h2>
          </div>
          <div className="flex gap-8 px-6 overflow-x-auto pb-12 no-scrollbar">
            {[1,2,3,4,5].map(i => (
              <div key={i} className="flex-shrink-0 w-[400px] h-[550px] rounded-none overflow-hidden shadow-2xl border border-white/10 bg-brand-paper">
                <img 
                  src={`https://images.unsplash.com/photo-1519494140681-891791d9b42e?q=80&w=2000&auto=format&fit=crop&index=${i}`}
                  alt="Espaço PDI" 
                  className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </section>


        <Contact />
      </main>
      <Footer />
    </div>
  );
}

