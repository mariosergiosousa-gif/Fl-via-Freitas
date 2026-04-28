/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VideoPlayer from './components/VideoPlayer';
import PrivacyPolicy from './components/PrivacyPolicy';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  const marqueeItems = [
    "TECNOLOGIA DE PONTA",
    "ATENDIMENTO HUMANIZADO",
    "SORRISOS TRANSFORMADOS",
    "EXCELÊNCIA EM CADA DETALHE",
    "ESTÉTICA AVANÇADA",
    "SAÚDE BUCAL COMPLETA"
  ];

  return (
    <div className="min-h-screen text-slate-100 bg-[#050608]">
      <Navbar />
      <main>
        <Hero />
        
        {/* Marquee Section */}
        <div className="py-6 bg-brand-accent/5 border-y border-white/5 overflow-hidden flex whitespace-nowrap">
          <div className="animate-marquee flex gap-12 items-center">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="display text-[10px] font-bold tracking-[0.4em] text-brand-accent/60 uppercase">
                {item}
                <span className="ml-12 text-white/10">•</span>
              </span>
            ))}
          </div>
        </div>

        <Services />
        <Team />
        
        {/* Space Gallery - Clean Video Layout */}
        <section id="o-nosso-espaco" className="py-32 bg-[#050608] overflow-hidden border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
            <h2 className="serif text-4xl md:text-7xl text-white italic mb-6 uppercase tracking-tighter leading-none text-left">
              A Excelência <br /> <span className="text-brand-accent">em Detalhes.</span>
            </h2>
            <p className="text-sm md:text-lg text-slate-400 max-w-2xl mx-auto mb-16 leading-relaxed font-light text-left lg:ml-0">
              Com uma equipe qualificada e ambiente acolhedor, oferecemos desde a prevenção até os tratamentos estéticos mais avançados.
            </p>
            
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
              {[
                { title: "Design Moderno", src: "https://res.cloudinary.com/di7rf0ubn/video/upload/v1777341579/tour1_md6yyu.mp4" },
                { title: "Tecnologia Digital", src: "https://res.cloudinary.com/di7rf0ubn/video/upload/v1777341579/tour2_nulnqy.mp4" },
                { title: "Conforto Premium", src: "https://res.cloudinary.com/di7rf0ubn/video/upload/v1777341578/tour3_ythctn.mp4" },
                { title: "Experiência Única", src: "https://res.cloudinary.com/di7rf0ubn/video/upload/v1777341579/tour4_k1v9ai.mp4" }
              ].map((video, i) => (
                <VideoPlayer key={i} src={video.src} title={video.title} />
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer onShowPrivacy={() => setShowPrivacyPolicy(true)} />

      <AnimatePresence>
        {showPrivacyPolicy && (
          <PrivacyPolicy onClose={() => setShowPrivacyPolicy(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

