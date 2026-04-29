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
import WhatsAppButton from './components/WhatsAppButton';
import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';

export default function App() {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
          <div className="max-w-7xl mx-auto px-6 mb-16 text-left">
            <h2 className="serif text-4xl md:text-7xl text-white italic mb-6 uppercase tracking-tighter leading-none">
              A Excelência <br /> <span className="text-brand-accent">em Detalhes.</span>
            </h2>
            <p className="text-sm md:text-lg text-slate-400 max-w-2xl mb-16 leading-relaxed font-light">
              Com uma equipe qualificada e ambiente acolhedor, oferecemos desde a prevenção até os tratamentos estéticos mais avançados.
            </p>
            
            <p className="display text-[10px] font-bold tracking-[0.4em] text-brand-accent uppercase text-center py-6 bg-brand-accent/5 border-y border-white/5 mb-16">O Nosso Espaço</p>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-4 mb-12">
              {[
                "https://res.cloudinary.com/di7rf0ubn/image/upload/v1777489462/Cl%C3%ADnica3_xv0qcs.jpg",
                "https://res.cloudinary.com/di7rf0ubn/image/upload/v1777489462/Cl%C3%ADnica1_humncs.jpg",
                "https://res.cloudinary.com/di7rf0ubn/image/upload/v1777489462/Cl%C3%ADnica2_y8wh9q.jpg"
              ].map((img, i) => (
                <div 
                  key={i} 
                  className="aspect-[4/5] md:aspect-square overflow-hidden border border-white/10 group relative cursor-pointer"
                  onClick={() => setSelectedImage(img)}
                >
                  <img 
                    src={img} 
                    alt={`Clínica Excelência ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 display text-[10px] font-bold tracking-widest text-white uppercase bg-black/40 px-4 py-2 backdrop-blur-sm">
                      Ver Foto
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
              {[
                { title: "Experiência Única", src: "https://res.cloudinary.com/di7rf0ubn/video/upload/v1777341579/tour4_k1v9ai.mp4" },
                { title: "Design Moderno", src: "https://res.cloudinary.com/di7rf0ubn/video/upload/v1777341579/tour1_md6yyu.mp4" },
                { title: "Conforto Premium", src: "https://res.cloudinary.com/di7rf0ubn/video/upload/v1777341578/tour3_ythctn.mp4" },
                { title: "Tecnologia Digital", src: "https://res.cloudinary.com/di7rf0ubn/video/upload/v1777341579/tour2_nulnqy.mp4" }
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
        <WhatsAppButton />
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-7xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute -top-12 right-0 text-white/50 hover:text-white transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={32} />
              </button>
              <img 
                src={selectedImage} 
                alt="Clínica Full View" 
                className="w-full h-auto max-h-[85vh] object-contain border border-white/10 shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

