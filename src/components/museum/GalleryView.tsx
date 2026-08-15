import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Info, ArrowLeft } from 'lucide-react';
import { ARTIFACTS, Artifact, ROOMS } from '../../content/museum';
import { useLanguage } from '../../App';

interface GalleryViewProps {
  eraFilter: string;
  onArtifactClick: (artifact: Artifact) => void;
  onBack: () => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({ eraFilter, onArtifactClick, onBack }) => {
  const { language, t } = useLanguage();
  const filteredArtifacts = ARTIFACTS.filter(a => a.era === eraFilter);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [eraFilter]);

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % filteredArtifacts.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + filteredArtifacts.length) % filteredArtifacts.length);
  };

  const currentArtifact = filteredArtifacts[currentIndex];
  const currentRoom = ROOMS.find(r => r.id === eraFilter) || ROOMS[0];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? 45 : -45
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
      rotateY: direction < 0 ? 45 : -45
    })
  };

  if (!currentArtifact) return null;

  return (
    <div className="museum-wall flex-grow px-4 pb-48 [perspective:1000px]">
      <div className="spotlight-main" />

      {/* Navigation Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-4 md:top-8 left-4 md:left-8 right-4 md:right-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 z-50 pointer-events-none"
      >
        <button 
          onClick={onBack}
          className="pointer-events-auto flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur border border-slate-200 shadow-sm hover:bg-white transition-all uppercase text-[10px] font-bold tracking-widest"
        >
          <ArrowLeft size={14} />
          {t('back')}
        </button>
        <div className="text-left md:text-right pointer-events-auto bg-white/50 backdrop-blur px-3 py-1 md:bg-transparent md:p-0">
          <h2 className="text-lg md:text-xl font-serif font-bold text-slate-800 uppercase tracking-tighter">
            {currentRoom[language].title}
          </h2>
          <p className="text-[8px] md:text-[10px] font-mono text-slate-500 uppercase">
            {t('curated')} // {t('item')} {currentIndex + 1} {t('of')} {filteredArtifacts.length}
          </p>
        </div>
      </motion.div>

      {/* Artifact on Wall */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-6xl relative z-20">
        <div className="relative w-full flex items-center justify-center">
          
          <button 
            onClick={prev}
            className="absolute left-0 z-30 p-4 transition-all hover:scale-110 active:scale-95 text-slate-400 hover:text-slate-900"
          >
            <ChevronLeft size={64} strokeWidth={1} />
          </button>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentArtifact.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 100, damping: 20 },
                opacity: { duration: 0.4 }
              }}
              className="gold-frame max-w-2xl w-full"
            >
              <div className="bg-black shadow-inner overflow-hidden">
                {currentArtifact.websiteUrl ? (
                  <div className="aspect-[4/3] w-full">
                    <iframe 
                      src={currentArtifact.websiteUrl}
                      className="w-full h-full bg-white"
                      title={currentArtifact[language].title}
                    />
                  </div>
                ) : currentArtifact.videoEmbedUrl ? (
                  <div className="aspect-video w-full">
                    <iframe 
                      src={currentArtifact.videoEmbedUrl}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  </div>
                ) : currentArtifact.imageUrl && (
                  <img 
                    src={currentArtifact.imageUrl} 
                    alt={currentArtifact[language].title}
                    className="w-full h-auto max-h-[50vh] object-contain"
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          <button 
            onClick={next}
            className="absolute right-0 z-30 p-4 transition-all hover:scale-110 active:scale-95 text-slate-400 hover:text-slate-900"
          >
            <ChevronRight size={64} strokeWidth={1} />
          </button>
        </div>

        {/* Plaque on Wall Below Frame */}
        <motion.div 
          key={`plaque-${currentArtifact.id}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="plaque-museum mt-12 w-full max-w-sm"
        >
          <div className="flex justify-between items-start mb-4 border-b border-stone-200 pb-2">
            <h3 className="font-serif font-bold text-xl leading-tight">
              {currentArtifact[language].title}
            </h3>
            <span className="text-sm font-bold opacity-60 ml-4 font-mono">
              {currentArtifact.year}
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed mb-4 font-light">
            {currentArtifact[language].description}
          </p>
          {currentArtifact.source && (
            <p className="text-[9px] text-stone-400 font-mono italic mb-6 border-t border-stone-100 pt-2">
              © {currentArtifact.source}
            </p>
          )}
          <button 
            onClick={() => onArtifactClick(currentArtifact)}
            className="w-full py-3 bg-stone-800 text-white text-[10px] tracking-widest uppercase font-bold hover:bg-stone-700 transition-colors"
          >
            {t('dossier')}
          </button>
        </motion.div>
      </div>

    </div>
  );
};

