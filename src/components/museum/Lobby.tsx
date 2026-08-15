import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';
import { ROOMS } from '../../content/museum';
import { useLanguage } from '../../App';

interface LobbyProps {
  onEnterRoom: (roomId: string) => void;
}

export const Lobby: React.FC<LobbyProps> = ({ onEnterRoom }) => {
  const { language, t } = useLanguage();
  const [suggestion, setSuggestion] = useState({
    name: '',
    url: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    try {
      const response = await fetch('/api/suggest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: suggestion.name,
          discord_url: suggestion.url,
          description: suggestion.description
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setErrorMessage(null);
        setSuggestion({ name: '', url: '', description: '' });
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        const data = await response.json().catch(() => ({}));
        setErrorMessage(
          data?.error || (language === 'fr' ? 'Une erreur est survenue lors de l\'envoi.' : 'An error occurred while submitting.')
        );
      }
    } catch (error) {
      console.error('Error submitting suggestion:', error);
      setErrorMessage(
        language === 'fr' ? 'Erreur de connexion. Veuillez réessayer.' : 'Connection error. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="museum-wall flex-grow px-8 pb-40">
      <div className="spotlight-main" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20 z-20"
      >
        <h1 className="text-6xl font-serif font-bold tracking-tighter text-slate-800 mb-4">
          Internet Museum
        </h1>
        <div className="h-1 w-24 bg-gold-500 mx-auto bg-amber-600 mb-4" />
        <p className="text-slate-500 uppercase tracking-widest text-sm font-light">
          {t('select')}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 z-20 max-w-7xl w-full">
        {ROOMS.map((room, index) => {
          const roomImages = [
            '1518770660439-4636190af475', // Dawn
            '1550751827-4bd374c3f58b', // Web 1
            '1451187580459-43490279c0fa', // P2P
            '1558494949-ef010cbdcc31'  // Modern
          ];
          return (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15 }}
              className="flex flex-col items-center cursor-pointer group/item"
              onClick={() => onEnterRoom(room.id)}
            >
              <div className="gold-frame w-full aspect-[3/4] overflow-hidden mb-6">
                <div className="relative h-full w-full bg-slate-900 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                  <img 
                    src={`https://images.unsplash.com/photo-${roomImages[index] || roomImages[0]}?q=80&w=2070&auto=format&fit=crop`}
                    alt={room[language].title}
                    className="w-full h-full object-cover grayscale group-hover/item:grayscale-0 transition-all duration-700 group-hover/item:scale-110"
                  />
                  <div className="absolute bottom-6 left-6 right-6 z-20 text-white text-left">
                    <h2 className="text-xl font-bold font-serif mb-1 leading-tight">{room[language].title}</h2>
                    <p className="text-[10px] tracking-widest uppercase opacity-70">{room.era}</p>
                  </div>
                </div>
              </div>
              <div className="plaque-museum w-full max-w-[200px] group-hover/item:bg-amber-50 transition-colors">
                <p className="text-[10px] leading-tight text-slate-600 uppercase font-bold tracking-tighter">
                  {room[language].description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32 max-w-2xl mx-auto z-20"
      >
        <div className="plaque-museum p-8 bg-amber-50/50 backdrop-blur-sm border-2 border-amber-900/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif font-bold text-amber-900 mb-2">
              {language === 'fr' ? 'Artéfacs à ajouter' : 'Artifacts to Add'}
            </h3>
            <p className="text-xs text-amber-800/60 uppercase tracking-widest font-bold">
              {language === 'fr' ? 'Livre d\'or & Suggestions' : 'Guestbook & Suggestions'}
            </p>
          </div>

          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-8 text-green-700"
            >
              <CheckCircle2 className="w-12 h-12 mb-4" />
              <p className="font-bold">
                {language === 'fr' ? 'Merci pour votre contribution !' : 'Thank you for your contribution!'}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold text-amber-900/50 block ml-1">
                    {language === 'fr' ? 'Nom de l\'artéfac' : 'Artifact Name'}
                  </label>
                  <input
                    required
                    type="text"
                    value={suggestion.name}
                    onChange={e => setSuggestion({...suggestion, name: e.target.value})}
                    placeholder="ex: Windows Millennium"
                    className="w-full bg-white/50 border border-amber-900/10 p-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-600 font-serif italic"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold text-amber-900/50 block ml-1">
                    {language === 'fr' ? 'Lien / Source' : 'Link / Source'}
                  </label>
                  <input
                    type="text"
                    value={suggestion.url}
                    onChange={e => setSuggestion({...suggestion, url: e.target.value})}
                    placeholder="https://..."
                    className="w-full bg-white/50 border border-amber-900/10 p-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-600"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-amber-900/50 block ml-1">
                  {language === 'fr' ? 'Pourquoi cet artéfac ?' : 'Why this artifact?'}
                </label>
                <textarea
                  required
                  rows={3}
                  value={suggestion.description}
                  onChange={e => setSuggestion({...suggestion, description: e.target.value})}
                  placeholder={language === 'fr' ? 'Racontez-nous son histoire...' : 'Tell us its story...'}
                  className="w-full bg-white/50 border border-amber-900/10 p-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-600 font-serif italic resize-none"
                />
              </div>
              {errorMessage && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded">
                  {errorMessage}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-900 text-white p-3 text-sm font-bold uppercase tracking-widest hover:bg-amber-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">{language === 'fr' ? 'Envoi...' : 'Sending...'}</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {language === 'fr' ? 'Soumettre l\'artéfac' : 'Submit Artifact'}
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </motion.div>

    </div>
  );
};
