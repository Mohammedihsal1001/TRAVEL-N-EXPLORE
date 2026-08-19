import React, { useState, useEffect, useRef } from 'react';
import { Search, X, MapPin, Compass, ArrowRight, ShieldCheck } from 'lucide-react';
import { STATES_DATA } from '../data/statesData';
import { StateData } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectState: (state: StateData) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectState,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const results = STATES_DATA.filter((s) => {
    if (!query.trim()) return false;
    const q = query.toLowerCase();
    return (
      s.name.toLowerCase().includes(q) ||
      s.craft.name.toLowerCase().includes(q) ||
      s.region.toLowerCase().includes(q) ||
      s.capital.toLowerCase().includes(q) ||
      s.topAttractions.some((a) => a.toLowerCase().includes(q)) ||
      s.signatureFood.some((f) => f.toLowerCase().includes(q))
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-2xl bg-[#10141d] border border-[#242c3e] rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[#1f2638] bg-[#0c0e14]">
          <Search className="w-5 h-5 text-amber-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search any state, craft (e.g. Bandhani, Pashmina, Chikan), monument or dish..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
          {!query.trim() ? (
            <div className="py-8 text-center text-xs text-slate-400 space-y-3">
              <Compass className="w-8 h-8 mx-auto text-amber-400/60" />
              <p>Type keywords like "Kashmir", "Silk", "Temple", "Tea", "Rajasthan"</p>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                {['Bandhani', 'Lucknowi Chikan', 'Kanchipuram Silk', 'Madhubani', 'Taj Mahal', 'Alleppey'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-2.5 py-1 rounded-full bg-[#181d28] text-amber-300/80 hover:text-amber-300 text-[11px] border border-[#232b3b]"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="py-8 text-center text-xs text-slate-400">
              No matching state or craft found for "{query}".
            </div>
          ) : (
            results.map((state) => (
              <div
                key={state.id}
                onClick={() => {
                  onSelectState(state);
                  onClose();
                }}
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#141822] hover:bg-[#1c2230] border border-[#1f2636] hover:border-amber-500/40 cursor-pointer transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <img
                    src={state.craft.image}
                    alt={state.name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-lg object-cover border border-[#273042]"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-serif-display font-bold text-slate-100 text-sm group-hover:text-amber-300 transition-colors">
                        {state.name}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase bg-[#102b1f] text-[#34d399]">
                        {state.region}
                      </span>
                    </div>
                    <p className="text-xs text-amber-400 font-medium">
                      {state.craft.name}
                    </p>
                    <span className="text-[10px] text-slate-400">
                      Best: {state.bestMonths} • Est. {state.stayCostPerNight}
                    </span>
                  </div>
                </div>

                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-400 group-hover:translate-x-1 transition-transform" />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
