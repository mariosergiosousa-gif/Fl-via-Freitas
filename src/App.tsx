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
      <Footer />
    </div>
  );
}

