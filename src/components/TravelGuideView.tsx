import React, { useState } from 'react';
import { Search, Compass, Sun, MapPin, Award, ArrowRight, Utensils, Train } from 'lucide-react';
import { STATES_DATA } from '../data/statesData';
import { StateData, Region } from '../types';

interface TravelGuideViewProps {
  onSelectState: (state: StateData) => void;
  onNavigateToBudget: (state: StateData) => void;
}

export const TravelGuideView: React.FC<TravelGuideViewProps> = ({
  onSelectState,
  onNavigateToBudget,
}) => {
  const [selectedSeason, setSelectedSeason] = useState<string>('All');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredStates = STATES_DATA.filter((state) => {
    const matchesRegion = selectedRegion === 'All' || state.region === selectedRegion;
    const matchesSearch =
      searchQuery.trim() === '' ||
      state.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      state.craft.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      state.capital.toLowerCase().includes(searchQuery.toLowerCase()) ||
      state.topAttractions.some((a) => a.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesSeason =
      selectedSeason === 'All' || state.bestMonths.toLowerCase().includes(selectedSeason.toLowerCase());

    return matchesRegion && matchesSearch && matchesSeason;
  });

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-[#1c222e] pb-6">
        <div className="flex items-center gap-2 text-amber-400 text-xs font-mono tracking-widest uppercase mb-1">
          <Compass className="w-4 h-4" />
          <span>Comprehensive State Index</span>
        </div>
        <h1 className="font-serif-display text-3xl sm:text-5xl font-bold tracking-tight text-[#f1f5f9]">
          29 States Travel Guide
        </h1>
        <p className="text-sm sm:text-base text-[#94a3b8] mt-2 max-w-2xl font-light">
          Essential travel logistics, best visiting months, heritage monuments, and signature cuisine across all corners of the Indian subcontinent.
        </p>
      </div>

      {/* Filter and Search Toolbar */}
      <div className="bg-[#121620] border border-[#1f2638] rounded-2xl p-5 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by state, monument, craft..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-[#0c0e14] border border-[#202738] rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500/50"
            />
          </div>

          {/* Region filter */}
          <div>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full px-3 py-2 bg-[#0c0e14] border border-[#202738] rounded-xl text-xs text-slate-200 focus:outline-none focus:border-amber-500/50"
            >
              <option value="All">All Regions (North, South, East, West, NE, Central)</option>
              <option value="North">North India</option>
              <option value="South">South India</option>
              <option value="East">East India</option>
              <option value="West">West India</option>
              <option value="North-East">North-East India</option>
              <option value="Central">Central India</option>
            </select>
          </div>

          {/* Season filter */}
          <div>
            <select
              value={selectedSeason}
              onChange={(e) => setSelectedSeason(e.target.value)}
              className="w-full px-3 py-2 bg-[#0c0e14] border border-[#202738] rounded-xl text-xs text-slate-200 focus:outline-none focus:border-amber-500/50"
            >
              <option value="All">All Travel Seasons</option>
              <option value="Oct">Autumn / Winter (Oct – Dec)</option>
              <option value="Jan">Peak Winter (Jan – Feb)</option>
              <option value="Mar">Spring &amp; Summer (Mar – Jun)</option>
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-[#8e9aaf] pt-1">
          <span>Showing {filteredStates.length} states</span>
          <span className="text-amber-400 font-mono">100% Handloom &amp; Heritage Verified</span>
        </div>
      </div>

      {/* States List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStates.map((state) => (
          <div
            key={state.id}
            className="bg-[#121620] border border-[#1e2535] rounded-2xl overflow-hidden shadow-lg hover:border-amber-500/40 transition-all flex flex-col group"
          >
            {/* Header Image */}
            <div 
              onClick={() => onSelectState(state)}
              className="relative h-44 overflow-hidden cursor-pointer"
            >
              <img
                src={state.heroImage}
                alt={state.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121620] via-transparent to-transparent" />

              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#102b1f]/90 text-[#34d399] border border-[#1b4834]">
                  {state.region}
                </span>
              </div>

              <div className="absolute bottom-3 left-4 right-4">
                <h3 className="font-serif-display text-2xl font-bold text-white group-hover:text-amber-300 transition-colors drop-shadow-md">
                  {state.name}
                </h3>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#8e9aaf]">Craft Specialty</span>
                  <span className="text-amber-300 font-medium">{state.craft.name.split('&')[0]}</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#8e9aaf]">Best Season</span>
                  <span className="text-slate-200 font-mono">{state.bestMonths}</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#8e9aaf]">Est. Daily Budget</span>
                  <span className="text-emerald-400 font-mono font-semibold">₹{state.dailyBudgetEstimate.toLocaleString('en-IN')}/d</span>
                </div>

                {/* Key attraction preview */}
                <div className="pt-2 border-t border-[#1c2230]">
                  <span className="text-[10px] text-[#8e9aaf] uppercase font-bold tracking-wider block mb-1">Top Highlight:</span>
                  <p className="text-xs text-slate-300 line-clamp-1">
                    🏛️ {state.topAttractions[0]}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-[#1c2230] flex items-center justify-between text-xs">
                <button
                  onClick={() => onSelectState(state)}
                  className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1"
                >
                  <span>Explore State</span>
                  <ArrowRight className="w-3 h-3" />
                </button>

                <button
                  onClick={() => onNavigateToBudget(state)}
                  className="text-[#8e9aaf] hover:text-white transition-colors"
                >
                  Logistics Guide
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
