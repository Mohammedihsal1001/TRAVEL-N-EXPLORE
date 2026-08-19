import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, MapPin, Compass, Eye } from 'lucide-react';
import { STATES_DATA } from '../data/statesData';
import { StateData, TravelPreferences } from '../types';

interface ExploreMapViewProps {
  onSelectState: (state: StateData) => void;
  preferences: TravelPreferences;
  onUpdatePreferences: (updates: Partial<TravelPreferences>) => void;
}

export const ExploreMapView: React.FC<ExploreMapViewProps> = ({
  onSelectState,
  preferences,
  onUpdatePreferences,
}) => {
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [hoveredStateId, setHoveredStateId] = useState<string | null>(null);

  // States available for State of the Day cycling
  const featuredStates = STATES_DATA;
  const currentFeatured = featuredStates[featuredIndex % featuredStates.length];

  const handlePrev = () => {
    setFeaturedIndex((prev) => (prev === 0 ? featuredStates.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setFeaturedIndex((prev) => (prev + 1) % featuredStates.length);
  };

  const hoveredState = STATES_DATA.find((s) => s.id === hoveredStateId);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Split: Interactive Map Explorer & State of the Day Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left / Center: Interactive Stylized Map of India */}
        <div className="lg:col-span-7 bg-[#101319] border border-[#1d2330] rounded-2xl p-6 relative overflow-hidden shadow-xl">
          {/* Subtle background glow */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-center justify-between mb-4 z-10 relative">
            <div>
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#8e9aaf] uppercase">
                INTERACTIVE GEOGRAPHY
              </span>
              <h3 className="font-serif-display text-xl font-bold text-[#f1f5f9]">
                Regional Heritage Map
              </h3>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[#94a3b8]">Select a state to explore</span>
            </div>
          </div>

          {/* Stylized SVG Map of India with pins and interactive hover zones */}
          <div className="relative w-full h-[360px] sm:h-[420px] bg-[#0c0e13] rounded-xl border border-[#1a1f2c] flex items-center justify-center p-4">
            
            {/* Background Map Graphic with detailed stylized geometry */}
            <svg
              viewBox="0 0 450 500"
              className="w-full h-full max-h-[380px] drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)] select-none"
            >
              <defs>
                <linearGradient id="mapFillGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e2433" />
                  <stop offset="50%" stopColor="#141822" />
                  <stop offset="100%" stopColor="#0f121a" />
                </linearGradient>
                <linearGradient id="activePinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#d97706" />
                </linearGradient>
              </defs>

              {/* Decorative Latitude / Longitude grid lines */}
              <path d="M 40 100 L 410 100 M 40 200 L 410 200 M 40 300 L 410 300 M 40 400 L 410 400" stroke="#1c2230" strokeWidth="0.8" strokeDasharray="3 4" />
              <path d="M 120 40 L 120 460 M 225 40 L 225 460 M 330 40 L 330 460" stroke="#1c2230" strokeWidth="0.8" strokeDasharray="3 4" />

              {/* Compass rose in top corner */}
              <g transform="translate(380, 70) scale(0.6)" opacity="0.6">
                <circle cx="0" cy="0" r="30" stroke="#f59e0b" strokeWidth="1" fill="none" strokeDasharray="2 4" />
                <path d="M0 -30 L5 -5 L30 0 L5 5 L0 30 L-5 5 L-30 0 L-5 -5 Z" fill="#f59e0b" opacity="0.4" />
                <text x="0" y="-34" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">N</text>
              </g>

              {/* Stylized India Coastline & Borders */}
              <path
                d="M 175 45 
                   C 190 40, 220 50, 230 70 
                   C 240 85, 260 90, 275 105
                   C 290 120, 310 125, 330 130
                   C 360 135, 410 150, 420 180
                   C 425 200, 390 220, 370 215
                   C 350 210, 330 200, 320 220
                   C 310 240, 325 270, 310 300
                   C 295 330, 270 360, 250 400
                   C 235 430, 225 465, 215 475
                   C 205 465, 195 420, 185 375
                   C 175 330, 160 300, 150 280
                   C 135 250, 100 240, 85 220
                   C 70 200, 75 170, 100 160
                   C 120 150, 130 130, 145 110
                   C 160 90, 165 60, 175 45 Z"
                fill="url(#mapFillGrad)"
                stroke="#333f56"
                strokeWidth="1.5"
                className="transition-colors"
              />

              {/* State Interactive Pins with click & hover */}
              {[
                { id: 'jammu-kashmir', x: 195, y: 70, name: 'J&K' },
                { id: 'himachal-pradesh', x: 215, y: 100, name: 'HP' },
                { id: 'ladakh', x: 235, y: 55, name: 'Ladakh' },
                { id: 'punjab', x: 180, y: 115, name: 'Punjab' },
                { id: 'uttarakhand', x: 240, y: 120, name: 'UK' },
                { id: 'rajasthan', x: 150, y: 170, name: 'Rajasthan' },
                { id: 'uttar-pradesh', x: 245, y: 175, name: 'UP' },
                { id: 'bihar', x: 300, y: 190, name: 'Bihar' },
                { id: 'west-bengal', x: 325, y: 230, name: 'WB' },
                { id: 'assam', x: 380, y: 175, name: 'Assam' },
                { id: 'gujarat', x: 110, y: 220, name: 'Gujarat' },
                { id: 'madhya-pradesh', x: 210, y: 225, name: 'MP' },
                { id: 'odisha', x: 290, y: 265, name: 'Odisha' },
                { id: 'maharashtra', x: 170, y: 285, name: 'MH' },
                { id: 'telangana', x: 225, y: 310, name: 'Telangana' },
                { id: 'andhra-pradesh', x: 240, y: 360, name: 'AP' },
                { id: 'goa', x: 160, y: 360, name: 'Goa' },
                { id: 'karnataka', x: 195, y: 375, name: 'KA' },
                { id: 'tamil-nadu', x: 220, y: 430, name: 'TN' },
                { id: 'kerala', x: 190, y: 440, name: 'Kerala' },
              ].map((pin) => {
                const isHovered = hoveredStateId === pin.id;
                const isFeatured = currentFeatured.id === pin.id;
                const stateObj = STATES_DATA.find((s) => s.id === pin.id);

                return (
                  <g
                    key={pin.id}
                    className="cursor-pointer transition-transform duration-200"
                    onMouseEnter={() => setHoveredStateId(pin.id)}
                    onMouseLeave={() => setHoveredStateId(null)}
                    onClick={() => {
                      if (stateObj) onSelectState(stateObj);
                    }}
                  >
                    {/* Ripple ping effect for featured */}
                    {isFeatured && (
                      <circle
                        cx={pin.x}
                        cy={pin.y}
                        r="14"
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="1.5"
                        opacity="0.8"
                        className="animate-ping"
                      />
                    )}

                    {/* Outer Halo */}
                    <circle
                      cx={pin.x}
                      cy={pin.y}
                      r={isHovered || isFeatured ? "8" : "5"}
                      fill={isHovered || isFeatured ? "#f59e0b" : "#3b475e"}
                      fillOpacity={isHovered || isFeatured ? "0.3" : "0.5"}
                    />

                    {/* Core Pin Point */}
                    <circle
                      cx={pin.x}
                      cy={pin.y}
                      r={isHovered || isFeatured ? "4.5" : "3"}
                      fill={isHovered || isFeatured ? "#f59e0b" : "#94a3b8"}
                      stroke="#0d0f13"
                      strokeWidth="1"
                    />

                    {/* Small Label */}
                    <text
                      x={pin.x}
                      y={pin.y - 8}
                      textAnchor="middle"
                      fill={isHovered || isFeatured ? "#fde68a" : "#64748b"}
                      fontSize={isHovered || isFeatured ? "9" : "7.5"}
                      fontWeight={isHovered || isFeatured ? "bold" : "normal"}
                      fontFamily="sans-serif"
                    >
                      {pin.name}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Hover Floating Tooltip */}
            {hoveredState && (
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#141822]/95 border border-amber-500/40 backdrop-blur-md rounded-xl p-3.5 shadow-2xl z-20 max-w-sm pointer-events-none animate-fadeIn">
                <div className="flex items-center justify-between gap-3 mb-1">
                  <span className="font-serif-display font-bold text-amber-300 text-sm">
                    {hoveredState.name}
                  </span>
                  <span className="text-[10px] bg-emerald-950/80 text-emerald-300 font-mono px-2 py-0.5 rounded border border-emerald-500/30">
                    Est. {hoveredState.stayCostPerNight}
                  </span>
                </div>
                <p className="text-xs text-slate-300 font-medium line-clamp-1">
                  {hoveredState.craft.name}
                </p>
                <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400">
                  <span>Best: {hoveredState.bestMonths}</span>
                  <span className="text-amber-400 font-semibold">Click to view details →</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right: STATE OF THE DAY Card matching Image 3 */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="bg-[#121620] border border-[#1f2636] rounded-2xl p-6 sm:p-7 relative shadow-2xl overflow-hidden">
            {/* Header Badge */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-amber-400">
                <Sparkles className="w-4 h-4" />
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-amber-400/90 font-mono">
                  STATE OF THE DAY
                </span>
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrev}
                  className="w-8 h-8 rounded-lg bg-[#191e2b] text-slate-300 hover:text-white hover:bg-[#232a3b] flex items-center justify-center transition-colors"
                  aria-label="Previous State"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-8 h-8 rounded-lg bg-[#191e2b] text-slate-300 hover:text-white hover:bg-[#232a3b] flex items-center justify-center transition-colors"
                  aria-label="Next State"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* State Title & Tagline */}
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold tracking-tight text-[#f1f5f9]">
              {currentFeatured.name}
            </h2>
            <p className="text-sm font-medium text-[#d9a86c] mt-1 mb-3">
              {currentFeatured.craft.name}
            </p>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed line-clamp-3 mb-6">
              {currentFeatured.description}
            </p>

            {/* Bottom Row: Thumbnail Collage + Explore Button matching Image 3 */}
            <div className="flex items-center justify-between pt-2 border-t border-[#1d2331]">
              <div 
                onClick={() => onSelectState(currentFeatured)}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <div className="w-14 h-11 rounded-lg overflow-hidden border border-amber-500/30 shrink-0">
                  <img
                    src={currentFeatured.craft.image}
                    alt={currentFeatured.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="bg-[#1b2230] text-amber-300 text-xs font-bold font-mono px-2 py-1 rounded-md border border-[#273144]">
                  +12
                </div>
              </div>

              <button
                onClick={() => onSelectState(currentFeatured)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#c59a68] hover:bg-[#d6ab79] text-[#12151c] font-semibold text-xs tracking-wider uppercase transition-all shadow-lg shadow-amber-950/30"
              >
                <span>Explore</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Snapshot / Regional Filter strip */}
          <div className="bg-[#0f1218] border border-[#1a202c] rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Compass className="w-5 h-5 text-[#c59a68]" />
              <div>
                <div className="text-xs font-semibold text-slate-200">Current Season</div>
                <div className="text-[11px] text-slate-400">Peak Heritage Festival Season</div>
              </div>
            </div>
            <button
              onClick={() => onUpdatePreferences({ activeTab: 'heritage' })}
              className="text-xs text-amber-400 hover:text-amber-300 font-medium underline underline-offset-4 flex items-center gap-1"
            >
              <span>View All 29 Crafts</span>
            </button>
          </div>
        </div>
      </div>

      {/* Heritage Directory Section matching Image 3 with cards */}
      <div className="pt-2">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[2px] bg-[#d9a86c]" />
          <h2 className="font-serif-display text-2xl sm:text-3xl font-bold tracking-tight text-[#f1f5f9]">
            Heritage Directory
          </h2>
        </div>

        {/* Horizontal scrollable / grid cards matching the screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STATES_DATA.slice(0, 6).map((state) => {
            return (
              <div
                key={state.id}
                onClick={() => onSelectState(state)}
                className="group relative h-80 rounded-2xl overflow-hidden border border-[#212838] cursor-pointer shadow-lg hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Background Hero Image */}
                <img
                  src={state.heroImage}
                  alt={state.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e13] via-[#0c0e13]/60 to-transparent" />

                {/* Card Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  {/* Green badge matching screenshot */}
                  <div className="mb-2">
                    <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase bg-[#18392b]/90 text-[#34d399] border border-[#235841]">
                      {state.name.toUpperCase()}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif-display text-2xl font-bold text-white group-hover:text-amber-300 transition-colors drop-shadow-md">
                    {state.tagline.split('&')[0]}
                  </h3>

                  {/* Sub description on hover */}
                  <div className="flex items-center justify-between text-xs text-slate-300 mt-2 opacity-90">
                    <span className="text-[#d9a86c] font-medium font-sans">
                      {state.craft.name}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-slate-400">
                      <Eye className="w-3 h-3" /> Explore
                    </span>
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
