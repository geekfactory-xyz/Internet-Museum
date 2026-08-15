import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../App';
import { Globe, DoorOpen } from 'lucide-react';

interface WelcomePageProps {
  onEnter: () => void;
}

export const WelcomePage: React.FC<WelcomePageProps> = ({ onEnter }) => {
  const { t } = useLanguage();

  return (
    <div className="museum-wall flex-grow relative bg-gallery-wall flex flex-col items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-100 opacity-60 pointer-events-none" />
      <div className="spotlight-main opacity-60" />
      
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center flex-grow py-20 px-6 text-center">
        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <div className="gold-frame inline-block p-12 bg-white">
            <Globe size={80} className="text-amber-600 mb-6 mx-auto animate-pulse" />
            <h1 className="text-6xl md:text-8xl font-serif font-black text-slate-900 tracking-tight leading-none">
              {t('welcomeTitle')}
            </h1>
            <div className="h-1 w-24 bg-amber-400 mx-auto my-6" />
            <p className="text-xl md:text-2xl font-serif italic text-slate-600">
              {t('welcomeSubtitle')}
            </p>
          </div>
        </motion.div>

        {/* The Curator's Statement Plaque */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="plaque-museum w-full max-w-2xl mb-12"
        >
          <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-slate-400 mb-4">Curator's Statement</h3>
          <p className="text-xl leading-relaxed text-slate-800 font-serif mb-8 px-4">
            "{t('welcomeBody')}"
          </p>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onEnter}
            className="group relative inline-flex items-center gap-3 px-12 py-5 bg-slate-900 text-white font-bold uppercase tracking-[0.3em] text-sm overflow-hidden transition-all hover:bg-slate-800"
            id="enter-museum-btn"
          >
            <span className="relative z-10">{t('enterMuseum')}</span>
            <DoorOpen className="relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 opacity-0 group-hover:opacity-10 transition-opacity" />
          </motion.button>
        </motion.div>

        {/* Footer badges */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.2 }}
          className="flex gap-8 items-center"
        >
          <img src="https://web.archive.org/web/19961102075558im_/http://www.netscape.com/comprod/mirror/images/now_button.gif" alt="Netscape Now" className="h-10 grayscale hover:grayscale-0 transition-all cursor-help" />
          <div className="w-[1px] h-8 bg-slate-300" />
          <img src="https://c.tenor.com/7XD9gEkumN8AAAAC/tenor.gif" alt="IE 4" className="h-10 grayscale hover:grayscale-0 transition-all cursor-help" />
        </motion.div>
      </div>

      {/* Background Architecutural Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
    </div>
  );
};

