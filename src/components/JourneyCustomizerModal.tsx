import React from 'react';
import { X, Sliders, Calendar, DollarSign, Train, Plane, Check } from 'lucide-react';
import { TravelPreferences } from '../types';

interface JourneyCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  preferences: TravelPreferences;
  onUpdatePreferences: (updates: Partial<TravelPreferences>) => void;
}

export const JourneyCustomizerModal: React.FC<JourneyCustomizerModalProps> = ({
  isOpen,
  onClose,
  preferences,
  onUpdatePreferences,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-lg bg-[#121620] border border-[#232b3d] rounded-2xl overflow-hidden shadow-2xl text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1f2638] bg-[#0c0e14]">
          <div className="flex items-center gap-2 text-[#e6c694]">
            <Sliders className="w-5 h-5" />
            <h3 className="font-serif-display text-xl font-bold">
              Journey Parameters
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Trip Duration Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#8e9aaf] uppercase font-bold tracking-wider">Duration of Odyssey</span>
              <span className="font-mono font-bold text-amber-300 text-sm">{preferences.tripDurationDays} Days</span>
            </div>
            <input
              type="range"
              min="3"
              max="45"
              step="1"
              value={preferences.tripDurationDays}
              onChange={(e) => onUpdatePreferences({ tripDurationDays: Number(e.target.value) })}
              className="w-full accent-amber-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>3 Days (Weekend)</span>
              <span>15 Days (Regional)</span>
              <span>45 Days (Grand India)</span>
            </div>
          </div>

          {/* Target Budget Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#8e9aaf] uppercase font-bold tracking-wider">Target Budget</span>
              <span className="font-mono font-bold text-emerald-400 text-sm">₹{preferences.targetBudget.toLocaleString('en-IN')}</span>
            </div>
            <input
              type="range"
              min="15000"
              max="300000"
              step="5000"
              value={preferences.targetBudget}
              onChange={(e) => onUpdatePreferences({ targetBudget: Number(e.target.value) })}
              className="w-full accent-emerald-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>₹15,000 (Backpacker)</span>
              <span>₹85,000 (Heritage Explorer)</span>
              <span>₹3,00,000 (Palace Luxury)</span>
            </div>
          </div>

          {/* Transit Philosophy Mode */}
          <div className="space-y-2">
            <span className="text-xs text-[#8e9aaf] uppercase font-bold tracking-wider block">
              Transit Philosophy
            </span>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => onUpdatePreferences({ travelMode: 'expense' })}
                className={`p-3.5 rounded-xl border text-left flex flex-col gap-1 transition-all ${
                  preferences.travelMode === 'expense'
                    ? 'bg-[#1a2130] border-amber-500 text-amber-300 shadow-md'
                    : 'bg-[#0f121a] border-[#22293b] text-slate-400 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2 font-semibold text-xs">
                  <Train className="w-4 h-4 text-amber-400" />
                  <span>Cultural Railway</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-tight mt-1">
                  Vande Bharat, Tejas &amp; sleeper immersion. Lower cost.
                </p>
              </button>

              <button
                onClick={() => onUpdatePreferences({ travelMode: 'time' })}
                className={`p-3.5 rounded-xl border text-left flex flex-col gap-1 transition-all ${
                  preferences.travelMode === 'time'
                    ? 'bg-[#1a2130] border-amber-500 text-amber-300 shadow-md'
                    : 'bg-[#0f121a] border-[#22293b] text-slate-400 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2 font-semibold text-xs">
                  <Plane className="w-4 h-4 text-amber-400" />
                  <span>Express Flight</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-tight mt-1">
                  Direct regional flights. Saves 40% travel time.
                </p>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#1f2638] bg-[#0c0e14] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#c59a68] hover:bg-[#d6ab79] text-[#10131b] font-semibold text-xs uppercase tracking-wider transition-all"
          >
            Apply Preferences
          </button>
        </div>
      </div>
    </div>
  );
};
