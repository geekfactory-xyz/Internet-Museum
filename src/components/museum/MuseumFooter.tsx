import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../../App';

export const MuseumFooter: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();

  return (
    <div className="mt-auto relative z-50 flex flex-col w-full overflow-hidden">
      <div className="museum-skirting" />
      <div className="relative">
        <div className="museum-floor h-48" />
        
        <footer className="absolute inset-0 px-8 flex flex-col md:flex-row justify-between items-center gap-4 py-8 pointer-events-none">
          <div className="flex flex-col md:flex-row items-center gap-6 text-[10px] uppercase tracking-widest font-mono text-stone-400 pointer-events-auto">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-amber-600/60 font-bold mb-1">Authenticated Archive</span>
              <span>© {new Date().getFullYear()} {t('board')}</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-stone-700/30" />
            <div className="max-w-md text-center md:text-left opacity-40 text-[8px] leading-tight space-y-1">
              <p>{t('disclaimer')}</p>
              <p className="font-bold flex flex-col md:flex-row md:gap-x-4">
                <span>{t('contactInfo')}</span>
                <span>{t('copyrightNotice')}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 pointer-events-auto">
            <button 
              onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
              className="group flex items-center gap-3 px-6 py-2 bg-black/40 backdrop-blur border border-stone-700 text-stone-300 hover:text-white transition-all hover:bg-black/60"
              id="footer-lang-toggle"
            >
              <Languages size={14} className="text-amber-500 group-hover:rotate-12 transition-transform" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                {language === 'en' ? 'Français' : 'English'}
              </span>
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};
