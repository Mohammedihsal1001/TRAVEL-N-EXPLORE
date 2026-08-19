import React, { useState, useMemo } from 'react';
import { ArrowRight, Sparkles, Award, ShieldCheck, Search } from 'lucide-react';
import { STATES_DATA, REGIONS_LIST } from '../data/statesData';
import { StateData, TravelPreferences, Region } from '../types';

interface HeritageCraftsViewProps {
  onSelectState: (state: StateData) => void;
  preferences: TravelPreferences;
  onUpdatePreferences: (updates: Partial<TravelPreferences>) => void;
  onNavigateToBudget: (state: StateData) => void;
}

export const HeritageCraftsView: React.FC<HeritageCraftsViewProps> = ({
  onSelectState,
  preferences,
  onUpdatePreferences,
  onNavigateToBudget,
}) => {
  const [activeRegion, setActiveRegion] = useState<string>('All Regions');
  const [craftSearch, setCraftSearch] = useState<string>('');

  const filteredStates = useMemo(() => {
    return STATES_DATA.filter((state) => {
      const matchesRegion =
        activeRegion === 'All Regions' || state.region === (activeRegion as Region);
      const matchesSearch =
        craftSearch.trim() === '' ||
        state.name.toLowerCase().includes(craftSearch.toLowerCase()) ||
        state.craft.name.toLowerCase().includes(craftSearch.toLowerCase()) ||
        state.craft.category.toLowerCase().includes(craftSearch.toLowerCase());
      return matchesRegion && matchesSearch;
    });
  }, [activeRegion, craftSearch]);

  // Lead featured card on the left (matches Uttar Pradesh in Image 5)
  const featuredState = STATES_DATA.find((s) => s.id === 'uttar-pradesh') || filteredStates[0];
  const gridStates = filteredStates.filter((s) => s.id !== featuredState?.id);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Section matching Image 5 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#1c222e] pb-6">
        <div className="max-w-3xl">
          <h1 className="font-serif-display text-3xl sm:text-5xl font-bold tracking-tight text-[#f3eedd]">
            Heritage &amp; Crafts
          </h1>
          <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed mt-3 max-w-2xl font-light">
            Discover the artisanal legacy of India. From the intricate Chikan embroidery of the North to the lustrous silks of the South, explore the unique traditional works that define each state's cultural identity.
          </p>
        </div>

        {/* Total States Counter matching Image 5 */}
        <div className="flex items-center gap-2 self-start md:self-end text-xs tracking-widest uppercase font-mono">
          <span className="text-[#8e9aaf]">SHOWING</span>
          <span className="font-serif-display text-2xl font-bold text-[#f5c278]">{filteredStates.length}</span>
          <span className="text-[#8e9aaf]">STATES</span>
        </div>
      </div>

      {/* Region Filter Buttons Bar matching Image 5 */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {REGIONS_LIST.map((region) => {
            const isActive = activeRegion === region;
            return (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`px-4 sm:px-5 py-2 rounded-lg text-xs font-semibold tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-[#e28a36] text-white shadow-lg shadow-orange-950/40'
                    : 'bg-[#141822] text-[#94a3b8] border border-[#232a3a] hover:text-white hover:bg-[#1a202d]'
                }`}
              >
                {region}
              </button>
            );
          })}
        </div>

        {/* Quick search input */}
        <div className="relative min-w-[200px] w-full sm:w-auto">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search craft or weave..."
            value={craftSearch}
            onChange={(e) => setCraftSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 bg-[#121620] border border-[#202738] rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500/50"
          />
        </div>
      </div>

      {/* Main Grid: Featured Large Card Left + 2-Column Grid Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left: Featured Large Vertical Card (Uttar Pradesh - Lucknowi Chikan) */}
        {featuredState && (
          <div 
            onClick={() => onSelectState(featuredState)}
            className="lg:col-span-5 group relative min-h-[500px] lg:min-h-[620px] rounded-2xl overflow-hidden border border-[#232b3b] cursor-pointer shadow-2xl hover:border-amber-500/60 transition-all duration-300 flex flex-col justify-end p-7"
          >
            {/* Background Image with High Quality Textile Close-up */}
            <img
              src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80"
              alt={featuredState.craft.name}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75"
            />

            {/* Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e14] via-[#0c0e14]/50 to-transparent" />

            {/* Content at Bottom */}
            <div className="relative z-10 space-y-3">
              {/* Region Pill Badge */}
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-[#132c22]/90 text-[#34d399] border border-[#1e4837]">
                  {featuredState.region.toUpperCase()}
                </span>
              </div>

              {/* State Name */}
              <h2 className="font-serif-display text-3xl sm:text-4xl font-bold tracking-tight text-[#f1f5f9] group-hover:text-amber-300 transition-colors">
                {featuredState.name}
              </h2>

              {/* Craft Name */}
              <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#e6b375]">
                {featuredState.craft.name}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 font-light leading-relaxed">
                {featuredState.craft.description}
              </p>

              {/* Action Links */}
              <div className="pt-2 flex items-center justify-between border-t border-white/10 text-xs">
                <span className="text-amber-400/90 font-mono">
                  GI Certified • {featuredState.craft.giTagYear}
                </span>
                <span className="flex items-center gap-1.5 text-amber-300 font-semibold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  <span>Explore Masterworks</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Right: Grid of Craft Cards matching Image 5 (Tamil Nadu, Bihar, Gujarat, Assam, etc.) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {gridStates.slice(0, 6).map((state) => {
            return (
              <div
                key={state.id}
                className="bg-[#121620] border border-[#1e2535] rounded-2xl overflow-hidden shadow-lg hover:border-amber-500/40 transition-all duration-300 flex flex-col group"
              >
                {/* Card Top Image */}
                <div 
                  onClick={() => onSelectState(state)}
                  className="relative h-44 overflow-hidden cursor-pointer"
                >
                  <img
                    src={state.craft.image}
                    alt={state.craft.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121620] via-transparent to-transparent" />

                  {/* Region badge top left */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase bg-[#112a20]/90 text-[#34d399] border border-[#1b4434] backdrop-blur-sm">
                      {state.region.toUpperCase()}
                    </span>
                  </div>

                  {state.craft.giTagCertified && (
                    <div className="absolute top-3 right-3 bg-[#0f121a]/80 backdrop-blur-sm px-2 py-0.5 rounded text-[9px] font-mono text-amber-300 border border-amber-500/30 flex items-center gap-1">
                      <ShieldCheck className="w-2.5 h-2.5 text-emerald-400" />
                      GI TAGGED
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 
                      onClick={() => onSelectState(state)}
                      className="font-serif-display text-xl font-bold text-[#f1f5f9] cursor-pointer group-hover:text-amber-300 transition-colors"
                    >
                      {state.name}
                    </h3>
                    
                    <p className="text-xs font-semibold text-[#dfa465] mt-0.5 mb-2">
                      {state.craft.name}
                    </p>

                    <p className="text-xs text-[#94a3b8] line-clamp-2 leading-relaxed">
                      {state.craft.description}
                    </p>
                  </div>

                  {/* Card Bottom CTA matching Image 5 BUDGET GUIDE -> */}
                  <div className="pt-4 mt-3 border-t border-[#1c2230] flex items-center justify-between">
                    <button
                      onClick={() => onNavigateToBudget(state)}
                      className="text-[11px] font-bold tracking-widest uppercase text-[#e28a36] hover:text-[#f7a252] flex items-center gap-1.5 transition-colors font-mono"
                    >
                      <span>BUDGET GUIDE</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>

                    <button
                      onClick={() => onSelectState(state)}
                      className="text-[11px] text-[#64748b] hover:text-slate-200 transition-colors"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
