import React from 'react';
import { Network, Globe, Share2, FolderOpen } from 'lucide-react';

interface DesktopIconProps {
  label: string;
  icon: React.ElementType;
  onClick: () => void;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ label, icon: Icon, onClick }) => (
  <button 
    onClick={onClick}
    className="flex flex-col items-center gap-1 p-2 w-24 rounded hover:bg-win-blue-light/30 focus:bg-win-blue-light/50 group"
  >
    <div className="relative">
      <Icon size={32} className="text-win-white drop-shadow-md group-hover:scale-110 transition-transform" />
    </div>
    <span className="text-win-white text-xs drop-shadow-[1px_1px_1px_rgba(0,0,0,0.8)] px-1 leading-tight text-center">
      {label}
    </span>
  </button>
);

interface DesktopProps {
  onIconClick: (id: string) => void;
}

export const Desktop: React.FC<DesktopProps> = ({ onIconClick }) => {
  return (
    <div className="p-4 grid grid-flow-col grid-rows-[repeat(auto-fill,100px)] gap-4 h-[calc(100vh-40px)]">
      <DesktopIcon 
        label="My Museum" 
        icon={FolderOpen} 
        onClick={() => onIconClick('museum')} 
      />
      <DesktopIcon 
        label="The Dawn" 
        icon={Network} 
        onClick={() => onIconClick('era-dawn')} 
      />
      <DesktopIcon 
        label="Web 1.0" 
        icon={Globe} 
        onClick={() => onIconClick('era-web1')} 
      />
      <DesktopIcon 
        label="Social Era" 
        icon={Share2} 
        onClick={() => onIconClick('era-p2p')} 
      />
    </div>
  );
};
