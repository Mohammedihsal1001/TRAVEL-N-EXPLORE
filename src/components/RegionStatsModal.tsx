import React from 'react';
import { X, Landmark, Compass, Award, ShieldCheck, MapPin } from 'lucide-react';
import { STATES_DATA } from '../data/statesData';
import { StateData } from '../types';

interface RegionStatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectState: (state: StateData) => void;
}

export const RegionStatsModal: React.FC<RegionStatsModalProps> = ({
  isOpen,
  onClose,
  onSelectState,
}) => {
  if (!isOpen) return null;

  const regions = ['North', 'South', 'East', 'West', 'North-East', 'Central'] as const;

  const totalStates = STATES_DATA.length;
  const giCertifiedCount = STATES_DATA.filter((s) => s.craft.giTagCertified).length;
  const unescoCount = STATES_DATA.reduce((acc, s) => acc + s.unescoSites.length, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-3xl bg-[#121620] border border-[#232b3d] rounded-2xl overflow-hidden shadow-2xl text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1f2638] bg-[#0c0e14]">
          <div className="flex items-center gap-2 text-[#e6c694]">
            <Landmark className="w-5 h-5" />
            <h3 className="font-serif-display text-xl font-bold">
              Subcontinent Cultural Analytics
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* High-level Counters */}
        <div className="grid grid-cols-3 gap-4 p-6 bg-[#0e1118] border-b border-[#1c2230]">
          <div className="text-center">
            <span className="text-[10px] uppercase tracking-wider text-[#8e9aaf]">Cataloged States</span>
            <div className="font-serif-display text-3xl font-bold text-amber-300 mt-0.5">{totalStates}</div>
          </div>
          <div className="text-center">
            <span className="text-[10px] uppercase tracking-wider text-[#8e9aaf]">GI-Tagged Crafts</span>
            <div className="font-serif-display text-3xl font-bold text-emerald-400 mt-0.5">{giCertifiedCount}</div>
          </div>
          <div className="text-center">
            <span className="text-[10px] uppercase tracking-wider text-[#8e9aaf]">UNESCO Sites</span>
            <div className="font-serif-display text-3xl font-bold text-blue-400 mt-0.5">{unescoCount}+</div>
          </div>
        </div>

        {/* Regional Breakdown list */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4">
          {regions.map((reg) => {
            const statesInRegion = STATES_DATA.filter((s) => s.region === reg);
            const avgDailyCost = Math.round(
              statesInRegion.reduce((sum, s) => sum + s.dailyBudgetEstimate, 0) / (statesInRegion.length || 1)
            );

            return (
              <div key={reg} className="bg-[#151a24] border border-[#212838] rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <h4 className="font-serif-display text-lg font-bold text-slate-100">
                      {reg} Region ({statesInRegion.length} States)
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-emerald-400">
                    Avg. ₹{avgDailyCost.toLocaleString('en-IN')}/day
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {statesInRegion.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        onSelectState(s);
                        onClose();
                      }}
                      className="px-2.5 py-1 rounded-lg bg-[#0e1117] border border-[#232a3a] text-xs text-slate-300 hover:text-amber-300 hover:border-amber-500/40 transition-colors flex items-center gap-1.5"
                    >
                      <span>{s.name}</span>
                      <span className="text-[10px] text-amber-400/70">({s.craft.name.split(' ')[0]})</span>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
