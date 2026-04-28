import { Play, Pause } from 'lucide-react';
import { useRef, useState } from 'react';

interface VideoPlayerProps {
  src: string;
  title: string;
  key?: string | number;
}

export default function VideoPlayer({ src, title }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const getAssetUrl = (path: string) => {
    if (path.startsWith('http')) return path;
    
    // Normalize base URL (e.g. '/' or '/repo/' or './')
    let base = import.meta.env.BASE_URL;
    
    // Ensure base ends with / for joining
    if (!base.endsWith('/')) base += '/';
    
    // Remove leading slash from path to avoid double slashes or absolute path resolution
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    const finalUrl = `${base}${cleanPath}`;
    return finalUrl;
  };

  return (
    <div 
      onClick={togglePlay}
      className="relative aspect-[9/16] bg-brand-paper border border-white/10 overflow-hidden group shadow-2xl cursor-pointer"
    >
      <video 
        ref={videoRef}
        src={getAssetUrl(src)} 
        className={`w-full h-full object-cover transition-all duration-700 ${isPlaying ? '' : 'grayscale group-hover:grayscale-0'}`}
        loop 
        playsInline
        preload="metadata"
        onError={(e) => {
          console.error(`Erro ao carregar o vídeo: ${src}`, e);
          // Optional: handle broken video state
        }}
      />
      
      {/* Fallback for broken video / loading */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-brand-paper/20">
          <div className="text-[10px] text-white/20 uppercase tracking-widest font-bold rotate-90 whitespace-nowrap">
            PREVIEW
          </div>
        </div>
      )}
      
      {/* Overlay */}
      <div className={`absolute inset-0 transition-all duration-500 flex items-center justify-center ${isPlaying ? 'bg-transparent opacity-0 group-hover:opacity-100 group-hover:bg-black/20' : 'bg-black/40 group-hover:bg-black/20'}`}>
        <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center scale-100 group-hover:scale-110 transition-transform duration-500 backdrop-blur-sm">
          {isPlaying ? (
            <Pause className="text-white opacity-60 group-hover:opacity-100 transition-opacity" size={24} fill="currentColor" />
          ) : (
            <Play className="text-white ml-1 opacity-60 group-hover:opacity-100 transition-opacity" size={24} fill="currentColor" />
          )}
        </div>
      </div>

      {/* Label */}
      <div className={`absolute bottom-8 left-0 right-0 text-center px-6 transition-all duration-500 ${isPlaying ? 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0' : 'translate-y-2 group-hover:translate-y-0'}`}>
        <span className="display text-[10px] font-bold tracking-[0.5em] text-white uppercase opacity-40 group-hover:opacity-100 transition-opacity">
          {title}
        </span>
      </div>

      {/* Progress Bar (Fake but aesthetic) */}
      <div className={`absolute bottom-0 left-0 h-[1px] bg-brand-accent/50 transition-all duration-[3000ms] ${isPlaying ? 'w-full' : 'w-0 group-hover:w-1/4'}`} />
    </div>
  );
}
