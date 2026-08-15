import React, { useState, useEffect } from 'react';
import { Monitor } from 'lucide-react';

export const Taskbar: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-10 bg-win-gray border-t-2 border-white win-outset flex items-center justify-between px-1 z-50">
      <div className="flex items-center gap-1 h-full">
        {/* Start Button */}
        <button className="win-button h-8 px-2 font-bold flex items-center gap-1 shadow-none">
          <Monitor size={18} fill="currentColor" className="text-win-blue" />
          <span>Start</span>
        </button>
        
        <div className="h-6 w-[2px] bg-win-dark mx-1 shadow-[1px_0_0_white]" />
        
        {/* Active Windows placeholders */}
        <div className="win-inset bg-win-gray h-8 px-4 flex items-center gap-2 max-w-[200px] truncate">
          <span className="text-xs font-bold">Museum.exe</span>
        </div>
      </div>

      {/* Tray Area */}
      <div className="win-inset flex items-center px-2 h-8 bg-win-gray gap-2">
         <div className="flex gap-1 items-center">
            <Monitor size={12} />
         </div>
         <span className="text-xs font-medium tabular-nums">
           {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
         </span>
      </div>
    </div>
  );
};
