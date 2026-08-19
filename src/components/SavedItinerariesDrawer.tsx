import React from 'react';
import { X, Bookmark, Trash2, Calendar, DollarSign, Train, Plane, Share2, Download } from 'lucide-react';
import { SavedItinerary, StateData } from '../types';
import { STATES_DATA } from '../data/statesData';

interface SavedItinerariesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedItineraries: SavedItinerary[];
  savedStates: StateData[];
  onRemoveItinerary: (id: string) => void;
  onRemoveState: (stateId: string) => void;
  onSelectState: (state: StateData) => void;
}

export const SavedItinerariesDrawer: React.FC<SavedItinerariesDrawerProps> = ({
  isOpen,
  onClose,
  savedItineraries,
  savedStates,
  onRemoveItinerary,
  onRemoveState,
  onSelectState,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-md bg-[#121620] border-l border-[#232b3d] h-full flex flex-col shadow-2xl text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#1f2638] bg-[#0c0e14]">
          <div className="flex items-center gap-2 text-amber-300">
            <Bookmark className="w-5 h-5" />
            <h3 className="font-serif-display text-xl font-bold">
              Saved Journeys
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Saved Custom Itineraries */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#8e9aaf] mb-3">
              Route Itineraries ({savedItineraries.length})
            </h4>

            {savedItineraries.length === 0 ? (
              <div className="p-5 rounded-xl bg-[#0f121a] border border-[#1f2638] text-center text-xs text-slate-400">
                No route itineraries saved yet. Use the "Save Itinerary" button on Budget Routes.
              </div>
            ) : (
              <div className="space-y-3">
                {savedItineraries.map((itin) => (
                  <div key={itin.id} className="bg-[#161b26] border border-[#232c3e] rounded-xl p-4 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 font-mono">
                          {itin.travelMode === 'time' ? 'Aerial Odyssey' : 'Cultural Railway'}
                        </span>
                        <h5 className="font-serif-display font-bold text-slate-100 text-sm mt-0.5">
                          {itin.title}
                        </h5>
                        <span className="text-[10px] text-slate-400">Saved on {itin.createdAt}</span>
                      </div>
                      <button
                        onClick={() => onRemoveItinerary(itin.id)}
                        className="text-slate-500 hover:text-red-400 p-1"
                        title="Remove itinerary"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between text-xs pt-2 border-t border-[#1f2638]">
                      <span className="font-mono text-emerald-400 font-semibold">
                        ₹{itin.totalCost.toLocaleString('en-IN')}
                      </span>
                      <span className="text-slate-300 font-mono text-[11px]">
                        {itin.totalDays} Days
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Bookmarked States */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#8e9aaf] mb-3">
              Bookmarked States &amp; Crafts ({savedStates.length})
            </h4>

            {savedStates.length === 0 ? (
              <div className="p-5 rounded-xl bg-[#0f121a] border border-[#1f2638] text-center text-xs text-slate-400">
                Click "Save State" on any state card to bookmark for quick reference.
              </div>
            ) : (
              <div className="space-y-2.5">
                {savedStates.map((st) => (
                  <div
                    key={st.id}
                    className="flex items-center justify-between p-3 rounded-xl bg-[#161b26] border border-[#232c3e] hover:border-amber-500/30 transition-all"
                  >
                    <div 
                      onClick={() => {
                        onSelectState(st);
                        onClose();
                      }}
                      className="flex items-center gap-3 cursor-pointer flex-1"
                    >
                      <img
                        src={st.craft.image}
                        alt={st.name}
                        referrerPolicy="no-referrer"
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                      <div>
                        <span className="font-serif-display font-bold text-xs text-slate-100 block">
                          {st.name}
                        </span>
                        <span className="text-[11px] text-amber-300">
                          {st.craft.name}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveState(st.id)}
                      className="text-slate-500 hover:text-red-400 p-1.5"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
