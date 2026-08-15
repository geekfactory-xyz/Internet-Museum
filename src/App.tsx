/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Languages } from 'lucide-react';
import { Lobby } from './components/museum/Lobby';
import { GalleryView } from './components/museum/GalleryView';
import { WelcomePage } from './components/museum/WelcomePage';
import { MuseumFooter } from './components/museum/MuseumFooter';
import { Artifact, ROOMS } from './content/museum';

export type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};

const translations = {
  en: {
    back: 'Exit to Lobby',
    curated: 'Curated Archives',
    item: 'Item',
    of: 'of',
    dossier: 'Read Folder',
    record: 'Official Record',
    wing: 'Wing',
    established: 'Established Circa',
    context: 'Historical Context',
    archivist: 'Archivist',
    board: 'Internet Museum by GEEK Inc.',
    id: 'Item ID',
    return: 'Return to Wing',
    select: 'Select a Wing to Begin Your Journey',
    source: 'Credit / Source',
    about: 'About',
    preservation: 'Archiving the digital ghost since the big bang of the TCP/IP protocol.',
    runtime: 'Runtime',
    license: 'License',
    disclaimer: 'Internet Museum is an independent educational project. All trademarks and multimedia content belong to their respective owners and are presented here for historical documentation purposes.',
    contactInfo: 'Contact: internetmuseum@geek-inc.xyz',
    copyrightNotice: 'For copyright removal requests, please contact: copyrights@geek-inc.xyz',
    welcomeTitle: 'The Internet Museum',
    welcomeSubtitle: 'A Journey Through the Digital Ether',
    welcomeBody: 'This archive was established to preserve the ephemeral artifacts of the early web—a time when the digital frontier was wild, experimental, and unpolished. From the first ping to the rise of global social media, we document the ghosts of the networks that built our modern world.',
    enterMuseum: 'Enter the Archive'
  },
  fr: {
    back: 'Retour au Lobby',
    curated: 'Archives Sélectionnées',
    item: 'Objet',
    of: 'sur',
    dossier: 'Lire le Dossier',
    record: 'Dossier Officiel',
    wing: 'Aile',
    established: 'Établi vers',
    context: 'Contexte Historique',
    archivist: 'Archiviste',
    board: 'Musée de l\'internet par GEEK Inc.',
    id: 'ID de l\'Objet',
    return: 'Retour à l\'Aile',
    select: 'Sélectionnez une Aile pour Commencer',
    source: 'Crédit / Source',
    about: 'À Propos',
    preservation: 'Archivage du fantôme numérique depuis le big bang du protocole TCP/IP.',
    runtime: 'Exécution',
    license: 'Licence',
    disclaimer: 'Internet Museum est un projet éducatif indépendant. Toutes les marques et contenus multimédias appartiennent à leurs propriétaires respectifs et sont présentés ici à des fins de documentation historique.',
    contactInfo: 'Contact : internetmuseum@geek-inc.xyz',
    copyrightNotice: 'Pour toute demande de retrait liée aux droits d\'auteur, veuillez contacter : copyrights@geek-inc.xyz',
    welcomeTitle: 'Le Musée de l\'Internet',
    welcomeSubtitle: 'Un Voyage à travers l\'Éther Numérique',
    welcomeBody: 'Ces archives ont été établies pour préserver les artefacts éphémères du premier web—une époque où la frontière numérique était sauvage, expérimentale et brute. Du premier signal à l\'émergence des réseaux sociaux mondiaux, nous documentons les fantômes des réseaux qui ont construit notre monde moderne.',
    enterMuseum: 'Entrer dans l\'Archive'
  }
};

type AppState = {
  view: 'welcome' | 'lobby' | 'room';
  currentRoom?: string;
  selectedArtifact?: Artifact | null;
};

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [state, setState] = useState<AppState>({
    view: 'welcome',
    currentRoom: undefined,
    selectedArtifact: null
  });

  const t = (key: string) => {
    return (translations[language] as any)[key] || key;
  };

  const enterRoom = (roomId: string) => {
    setState({ ...state, view: 'room', currentRoom: roomId });
  };

  const backToLobby = () => {
    setState({ ...state, view: 'lobby', currentRoom: undefined });
  };

  const openDossier = (artifact: Artifact) => {
    setState({ ...state, selectedArtifact: artifact });
  };

  const closeDossier = () => {
    setState({ ...state, selectedArtifact: null });
  };

  const startMuseum = () => {
    setState({ ...state, view: 'lobby' });
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className="min-h-screen flex flex-col bg-gallery-wall selection:bg-amber-100 selection:text-amber-900 font-sans text-slate-900 overflow-x-hidden">
        
        <main className="flex-grow flex flex-col relative w-full">
          <AnimatePresence mode="wait">
            {state.view === 'welcome' ? (
              <motion.div
                key="welcome"
                className="w-full flex-grow flex flex-col"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.8 }}
              >
                <WelcomePage onEnter={startMuseum} />
              </motion.div>
            ) : state.view === 'lobby' ? (
              <motion.div
                key="lobby"
                className="w-full flex-grow flex flex-col"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <Lobby onEnterRoom={enterRoom} />
              </motion.div>
            ) : (
              <motion.div
                key={`room-${state.currentRoom}`}
                className="w-full flex-grow flex flex-col"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <GalleryView 
                  eraFilter={state.currentRoom!} 
                  onArtifactClick={openDossier}
                  onBack={backToLobby}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        <MuseumFooter />

        {/* Subtle CRT Noise Background Layer */}
      <div className="pointer-events-none fixed inset-0 z-[200] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Artifact Dossier Modal */}
      <AnimatePresence>
        {state.selectedArtifact && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="artifact-overlay"
            onClick={closeDossier}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 shadow-2xl relative overflow-hidden h-[90vh] md:h-auto"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={closeDossier}
                className="absolute top-4 right-4 z-10 p-2 bg-black text-white hover:bg-stone-800 transition-colors"
              >
                <X size={24} />
              </button>

              {/* High Res Image/Video/Website Section */}
              <div className="bg-stone-900 flex items-center justify-center p-8">
                {state.selectedArtifact?.websiteUrl ? (
                  <div className="w-full h-full min-h-[400px]">
                     <iframe 
                        src={state.selectedArtifact.websiteUrl}
                        className="w-full h-full shadow-2xl bg-white"
                        title={state.selectedArtifact[language].title}
                      />
                  </div>
                ) : state.selectedArtifact?.videoEmbedUrl ? (
                  <div className="w-full max-w-4xl aspect-video">
                     <iframe 
                        src={state.selectedArtifact.videoEmbedUrl}
                        className="w-full h-full shadow-2xl"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                      />
                  </div>
                ) : state.selectedArtifact?.imageUrl && (
                  <img 
                    src={state.selectedArtifact.imageUrl} 
                    alt={state.selectedArtifact[language].title}
                    className="max-w-full max-h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>

              {/* Information Section */}
              <div className="p-8 md:p-12 overflow-y-auto max-h-[50vh] md:max-h-none flex flex-col justify-center">
                <div className="mb-8 border-b-2 border-stone-800 pb-4">
                  <p className="text-[10px] tracking-widest uppercase text-stone-400 mb-2 font-bold font-mono">
                    {t('record')} // {t('wing')} {state.selectedArtifact.era.toUpperCase()}
                  </p>
                  <h2 className="text-4xl font-serif font-bold text-stone-800">
                    {state.selectedArtifact[language].title}
                  </h2>
                  <p className="text-xl text-stone-500 font-serif italic mt-1">
                    {t('established')} {state.selectedArtifact.year}
                  </p>
                </div>

                <div className="prose prose-stone">
                  <p className="text-lg leading-relaxed text-stone-800 mb-6">
                    {state.selectedArtifact[language].description}
                  </p>
                  <div className="bg-stone-50 p-6 border-l-4 border-stone-300">
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-2">{t('context')}</h4>
                    <p className="text-sm text-stone-600 leading-relaxed font-light mb-4">
                      {state.selectedArtifact[language].history}
                    </p>
                    {state.selectedArtifact.source && (
                      <div className="pt-2 border-t border-stone-200 mt-2">
                        <span className="text-[9px] uppercase font-bold text-stone-400">{t('source')}: </span>
                        <span className="text-[10px] text-stone-500 font-mono italic">{state.selectedArtifact.source}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-12 flex justify-between items-center text-[10px] font-mono text-stone-400 uppercase tracking-tighter">
                   <span>{t('archivist')}: {t('board')}</span>
                   <span>{t('id')}: {state.selectedArtifact.id}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </LanguageContext.Provider>
  );
}

