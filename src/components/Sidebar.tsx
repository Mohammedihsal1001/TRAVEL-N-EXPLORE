import React from 'react';
import { Map, Wallet, Landmark, Navigation2, SlidersHorizontal, Sparkles } from 'lucide-react';
import { TravelPreferences } from '../types';

interface SidebarProps {
  preferences: TravelPreferences;
  onUpdatePreferences: (updates: Partial<TravelPreferences>) => void;
  onOpenJourneyCustomizer: () => void;
  onOpenStats: () => void;
  onOpenAICurator: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  preferences,
  onUpdatePreferences,
  onOpenJourneyCustomizer,
  onOpenStats,
  onOpenAICurator,
}) => {
  const activeMode = preferences.sidebarMode;

  return (
    <aside 
      id="main-sidebar"
      className="w-64 shrink-0 hidden md:flex flex-col justify-between border-r border-[#1e2430] bg-[#0c0e12] p-5 h-screen sticky top-0 select-none z-30"
    >
      <div className="flex flex-col gap-7">
        {/* Sidebar Brand / Title */}
        <div className="pt-2">
          <h1 className="font-serif-display text-2xl font-bold tracking-tight text-[#e6c694]">
            Trip Planner
          </h1>
          <p className="text-[10px] font-semibold tracking-[0.25em] text-[#8e9aaf] uppercase mt-0.5">
            STATE FILTERING
          </p>
        </div>

        {/* Navigation Action Buttons matching the screenshot exactly */}
        <nav className="flex flex-col gap-2.5">
          <button
            id="nav-map-filters"
            onClick={() => {
              onUpdatePreferences({ sidebarMode: 'filters', activeTab: 'explore' });
            }}
            className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
              preferences.activeTab === 'explore' || activeMode === 'filters'
                ? 'bg-[#f08a24] text-white shadow-lg shadow-orange-950/40 font-semibold'
                : 'text-[#9fa9ba] hover:text-white hover:bg-[#161a22]'
            }`}
          >
            <Map className="w-4 h-4 shrink-0" />
            <span>Map Filters</span>
          </button>

          <button
            id="nav-cost-estimator"
            onClick={() => {
              onUpdatePreferences({ sidebarMode: 'estimator', activeTab: 'budget' });
            }}
            className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
              preferences.activeTab === 'budget' || activeMode === 'estimator'
                ? 'bg-[#f08a24] text-white shadow-lg shadow-orange-950/40 font-semibold'
                : 'text-[#9fa9ba] hover:text-white hover:bg-[#161a22]'
            }`}
          >
            <Wallet className="w-4 h-4 shrink-0" />
            <span>Cost Estimator</span>
          </button>

          <button
            id="nav-region-stats"
            onClick={() => {
              onOpenStats();
            }}
            className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeMode === 'stats'
                ? 'bg-[#f08a24] text-white shadow-lg shadow-orange-950/40 font-semibold'
                : 'text-[#9fa9ba] hover:text-white hover:bg-[#161a22]'
            }`}
          >
            <Landmark className="w-4 h-4 shrink-0" />
            <span>Region Stats</span>
          </button>

          {/* AI Curator button */}
          <button
            id="nav-ai-curator"
            onClick={onOpenAICurator}
            className="w-full flex items-center gap-3.5 px-4 py-3 rounded-lg text-sm font-medium text-amber-300/90 bg-[#161b24] border border-amber-500/20 hover:border-amber-500/50 hover:bg-[#1b222e] transition-all group mt-2"
          >
            <Sparkles className="w-4 h-4 shrink-0 text-amber-400 group-hover:rotate-12 transition-transform" />
            <span className="flex-1 text-left font-medium">AI Trip Curator</span>
            <span className="text-[9px] bg-amber-500/20 text-amber-300 font-mono px-1.5 py-0.5 rounded border border-amber-500/30">
              PRO
            </span>
          </button>
        </nav>
      </div>

      {/* Est. Journey bottom card matching screenshot */}
      <div className="flex flex-col gap-3">
        <div 
          onClick={onOpenJourneyCustomizer}
          className="bg-[#12161f] border border-[#1f2636] rounded-xl p-4 cursor-pointer hover:border-amber-500/40 transition-all group shadow-md"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#8e9aaf] uppercase">
              EST. JOURNEY
            </span>
            <Navigation2 className="w-4 h-4 text-emerald-400 transform rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>

          <div className="flex items-center justify-between text-sm py-1 border-b border-[#1c2230]">
            <span className="text-[#8e9aaf] text-xs">Time</span>
            <span className="text-emerald-400 font-semibold font-mono">{preferences.tripDurationDays} Days</span>
          </div>

          <div className="flex items-center justify-between text-sm pt-2">
            <span className="text-[#8e9aaf] text-xs">Budget</span>
            <span className="text-emerald-400 font-semibold font-mono">₹{preferences.targetBudget.toLocaleString('en-IN')}</span>
          </div>

          <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-amber-300/80 group-hover:text-amber-300">
            <SlidersHorizontal className="w-3 h-3" />
            <span>Customize Journey</span>
          </div>
        </div>

        <div className="text-[10px] text-center text-slate-500 tracking-wider">
          29 STATES • 100+ CRAFTS
        </div>
      </div>
    </aside>
  );
};
