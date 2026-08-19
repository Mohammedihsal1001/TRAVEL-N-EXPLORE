import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, MapPin, Compass, Eye, Image as ImageIcon, Award } from 'lucide-react';
import { STATES_DATA, REGIONS_LIST } from '../data/statesData';
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
  const [selectedRegion, setSelectedRegion] = useState<string>('All Regions');

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

  const filteredStates = selectedRegion === 'All Regions'
    ? STATES_DATA
    : STATES_DATA.filter((s) => s.region === selectedRegion);

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
              <span className="text-[#94a3b8]">Click any state pin to view photos &amp; places</span>
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
                { id: 'meghalaya', x: 375, y: 200, name: 'Meghalaya' },
                { id: 'sikkim', x: 330, y: 170, name: 'Sikkim' },
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
                        className="animate-ping opacity-75"
                      />
                    )}

                    {/* Outer glow ring on hover */}
                    <circle
                      cx={pin.x}
                      cy={pin.y}
                      r={isHovered ? 12 : isFeatured ? 9 : 6}
                      fill={isHovered ? 'rgba(245, 158, 11, 0.4)' : isFeatured ? 'rgba(217, 119, 6, 0.3)' : 'rgba(255, 255, 255, 0.1)'}
                      className="transition-all duration-300"
                    />

                    {/* Core pin circle */}
                    <circle
                      cx={pin.x}
                      cy={pin.y}
                      r={isHovered ? 6 : isFeatured ? 5 : 3.5}
                      fill={isFeatured ? 'url(#activePinGrad)' : isHovered ? '#34d399' : '#cbd5e1'}
                      stroke="#0f121a"
                      strokeWidth="1"
                      className="transition-all"
                    />

                    {/* State label on hover or if featured */}
                    {(isHovered || isFeatured) && (
                      <text
                        x={pin.x}
                        y={pin.y - 12}
                        textAnchor="middle"
                        fill={isFeatured ? '#fbbf24' : '#34d399'}
                        fontSize="9.5"
                        fontWeight="bold"
                        fontFamily="sans-serif"
                        className="pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
                      >
                        {pin.name}
                      </text>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Hover card snapshot preview */}
            {hoveredState && (
              <div 
                className="absolute bottom-4 left-4 right-4 bg-[#141924]/95 border border-[#2b354b] backdrop-blur-md rounded-xl p-3 flex items-center justify-between shadow-2xl animate-fadeIn cursor-pointer"
                onClick={() => onSelectState(hoveredState)}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={hoveredState.heroImage}
                    alt={hoveredState.name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-lg object-cover border border-amber-500/30"
                  />
                  <div>
                    <h4 className="font-serif-display text-sm font-bold text-white">
                      {hoveredState.name}
                    </h4>
                    <p className="text-[11px] text-amber-300">
                      {hoveredState.craft.name}
                    </p>
                    <span className="text-[10px] text-emerald-400 font-mono">
                      {hoveredState.attractions?.length || hoveredState.topAttractions.length} Attractions with Photos
                    </span>
                  </div>
                </div>

                <button className="px-3 py-1.5 rounded-lg bg-amber-500 text-[#0f121a] font-bold text-xs hover:bg-amber-400 transition-colors">
                  Open State
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right: State of the Day Card matching Screenshot 2 */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#101319] border border-[#1d2330] rounded-2xl p-6 sm:p-7 relative overflow-hidden shadow-xl">
            {/* Top Carousel Navigation Header */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold tracking-[0.25em] text-[#8e9aaf] uppercase">
                STATE OF THE DAY ({featuredIndex + 1}/{featuredStates.length})
              </span>

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

            {/* State Hero / Place Preview Image */}
            <div 
              className="relative h-44 rounded-xl overflow-hidden mb-4 border border-[#232c3f] cursor-pointer group"
              onClick={() => onSelectState(currentFeatured)}
            >
              <img
                src={currentFeatured.bannerImage || currentFeatured.heroImage}
                alt={currentFeatured.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101319] via-transparent to-transparent" />
              <div className="absolute bottom-2 left-3 flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-black/80 text-amber-300 border border-amber-500/30">
                  {currentFeatured.region} Region
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-[#14261e]/90 text-emerald-300 border border-emerald-500/40">
                  {currentFeatured.attractions?.length || currentFeatured.topAttractions.length} Places Included
                </span>
              </div>
            </div>

            {/* State Title & Tagline */}
            <h2 className="font-serif-display text-3xl font-bold tracking-tight text-[#f1f5f9]">
              {currentFeatured.name}
            </h2>
            <p className="text-xs font-semibold text-[#d9a86c] mt-1 mb-2">
              {currentFeatured.craft.name}
            </p>

            {/* Description */}
            <p className="text-xs text-[#94a3b8] leading-relaxed line-clamp-3 mb-4">
              {currentFeatured.description}
            </p>

            {/* Attraction Places Strip */}
            {currentFeatured.attractions && currentFeatured.attractions.length > 0 && (
              <div className="mb-4 space-y-1.5">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 flex items-center gap-1">
                  <ImageIcon className="w-3 h-3 text-amber-400" /> Featured Place Photos:
                </span>
                <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                  {currentFeatured.attractions.slice(0, 4).map((att, idx) => (
                    <div 
                      key={idx}
                      onClick={() => onSelectState(currentFeatured)}
                      className="relative h-12 w-16 rounded-lg overflow-hidden border border-[#232c3f] shrink-0 cursor-pointer group/thumb hover:border-amber-400"
                      title={att.name}
                    >
                      <img
                        src={att.image}
                        alt={att.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Row: Explore Button */}
            <div className="flex items-center justify-between pt-3 border-t border-[#1d2331]">
              <div className="text-xs text-slate-300">
                <span className="text-slate-400">Budget: </span>
                <span className="font-mono text-emerald-400 font-bold">₹{currentFeatured.dailyBudgetEstimate.toLocaleString('en-IN')}/day</span>
              </div>

              <button
                onClick={() => onSelectState(currentFeatured)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#c59a68] hover:bg-[#d6ab79] text-[#12151c] font-bold text-xs tracking-wider uppercase transition-all shadow-lg shadow-amber-950/30 hover:scale-105"
              >
                <span>Explore All Places</span>
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
              <span>View All 24 GI Crafts</span>
            </button>
          </div>
        </div>
      </div>

      {/* Heritage Directory Section with Region Filters and Place Count */}
      <div className="pt-4 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[2px] bg-[#d9a86c]" />
            <h2 className="font-serif-display text-2xl sm:text-3xl font-bold tracking-tight text-[#f1f5f9]">
              Indian Heritage &amp; State Directory ({filteredStates.length})
            </h2>
          </div>

          {/* Region Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {REGIONS_LIST.map((reg) => (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedRegion === reg
                    ? 'bg-amber-500 text-slate-950 shadow-md font-bold'
                    : 'bg-[#121620] text-slate-300 hover:bg-[#1a2130] border border-[#1f283a]'
                }`}
              >
                {reg}
              </button>
            ))}
          </div>
        </div>

        {/* State Cards Grid with Place Photo Thumbnails */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStates.map((state) => {
            const placesCount = state.attractions?.length || state.topAttractions.length;
            return (
              <div
                key={state.id}
                onClick={() => onSelectState(state)}
                className="group relative h-96 rounded-2xl overflow-hidden border border-[#212838] cursor-pointer shadow-lg hover:border-amber-500/60 transition-all duration-300 hover:-translate-y-1 bg-[#10141e]"
              >
                {/* Background Hero Image */}
                <img
                  src={state.heroImage}
                  alt={state.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e13] via-[#0c0e13]/65 to-black/20" />

                {/* Top Badge Overlay */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase bg-[#18392b]/90 text-[#34d399] border border-[#235841] backdrop-blur-sm">
                    {state.region} REGION
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase bg-black/75 text-amber-300 border border-amber-500/30 backdrop-blur-sm flex items-center gap-1">
                    <ImageIcon className="w-3 h-3" /> {placesCount} Places
                  </span>
                </div>

                {/* Card Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end z-10 space-y-2">
                  <h3 className="font-serif-display text-2xl font-bold text-white group-hover:text-amber-300 transition-colors drop-shadow-md">
                    {state.name}
                  </h3>

                  <p className="text-xs text-amber-200/90 font-medium">
                    {state.craft.name}
                  </p>

                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {state.description}
                  </p>

                  {/* Thumbnail Previews of State Places */}
                  {state.attractions && state.attractions.length > 0 && (
                    <div className="flex items-center gap-1.5 pt-2">
                      {state.attractions.slice(0, 4).map((attr, idx) => (
                        <div
                          key={idx}
                          className="h-8 w-12 rounded-md overflow-hidden border border-white/20 shrink-0"
                          title={attr.name}
                        >
                          <img
                            src={attr.image}
                            alt={attr.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                      {state.attractions.length > 4 && (
                        <span className="text-[10px] font-mono text-amber-300 bg-black/60 px-1.5 py-1 rounded border border-amber-500/20">
                          +{state.attractions.length - 4}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Sub row with click indicator */}
                  <div className="flex items-center justify-between text-xs text-slate-300 pt-2 border-t border-white/10">
                    <span className="text-emerald-400 font-mono text-[11px]">
                      ₹{state.dailyBudgetEstimate.toLocaleString('en-IN')}/day
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-amber-300 font-semibold group-hover:translate-x-1 transition-transform">
                      <Eye className="w-3.5 h-3.5" /> View Sights
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
