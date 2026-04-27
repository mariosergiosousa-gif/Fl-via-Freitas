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
import VideoPlayer from './components/VideoPlayer';

export default function App() {
  return (
    <div className="min-h-screen text-slate-100 bg-[#050608]">
      <Navbar />
      <main>
        <Hero />
        
        <Services />
        <Team />
        
        {/* Space Gallery - Clean Video Layout */}
        <section id="o-nosso-espaco" className="py-32 bg-[#050608] overflow-hidden border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 mb-16 text-left">
            <h2 className="serif text-4xl md:text-7xl text-white italic mb-12 uppercase tracking-tighter leading-none">
              A Excelência <br /> <span className="text-brand-accent">em Detalhes.</span>
            </h2>
            
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
              {[
                { title: "Design Moderno", src: "videos/tour1.mp4" },
                { title: "Tecnologia Digital", src: "videos/tour2.mp4" },
                { title: "Conforto Premium", src: "videos/tour3.mp4" },
                { title: "Experiência Única", src: "videos/tour4.mp4" }
              ].map((video, i) => (
                <VideoPlayer key={i} src={video.src} title={video.title} />
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-sm text-white/30 font-light tracking-wide max-w-xl mx-auto">
                * Para visualizar os vídeos, por favor faça o upload do seu arquivo .mp4 para a pasta /public/videos/tour.mp4
              </p>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

