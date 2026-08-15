import React from 'react';
import { X, Minus, Square } from 'lucide-react';
import { motion } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface WindowProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  onClose?: () => void;
  className?: string;
  initial?: { x: number; y: number };
}

export const Window: React.FC<WindowProps> = ({ 
  title, 
  icon, 
  children, 
  onClose, 
  className,
  initial = { x: 50, y: 50 } 
}) => {
  return (
    <motion.div
      drag
      dragMomentum={false}
      initial={{ x: initial.x, y: initial.y, opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn("win-window absolute min-w-[300px] z-10", className)}
    >
      {/* Title Bar */}
      <div className="win-titlebar cursor-move select-none">
        <div className="flex items-center gap-2">
          {icon}
          <span className="truncate">{title}</span>
        </div>
        <div className="flex gap-1">
          <button className="win-button h-5 w-5 p-0">
            <Minus size={12} strokeWidth={3} />
          </button>
          <button className="win-button h-5 w-5 p-0">
            <Square size={10} strokeWidth={3} />
          </button>
          <button 
            className="win-button h-5 w-5 p-0" 
            onClick={onClose}
          >
            <X size={12} strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-win-white m-1 h-full min-h-[100px] win-inset overflow-auto text-black p-4">
        {children}
      </div>
    </motion.div>
  );
};
