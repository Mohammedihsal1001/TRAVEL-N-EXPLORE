import React, { useState } from 'react';
import { Train, Plane, Bookmark, Compass, Check, ArrowRight, DollarSign, Calendar, MapPin, Sparkles } from 'lucide-react';
import { ROUTE_PHASES_DATA, BASE_COSTS } from '../data/routesData';
import { STATES_DATA } from '../data/statesData';
import { StateData, TravelPreferences, SavedItinerary } from '../types';

interface BudgetRoutesViewProps {
  onSelectState: (state: StateData) => void;
  preferences: TravelPreferences;
  onUpdatePreferences: (updates: Partial<TravelPreferences>) => void;
  onSaveItinerary: (itinerary: SavedItinerary) => void;
}

export const BudgetRoutesView: React.FC<BudgetRoutesViewProps> = ({
  onSelectState,
  preferences,
  onUpdatePreferences,
  onSaveItinerary,
}) => {
  const isTimeOptimized = preferences.travelMode === 'time';
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [travelersCount, setTravelersCount] = useState(1);
  const [stayTier, setStayTier] = useState<'budget' | 'heritage' | 'luxury'>('budget');

  const tierMultiplier = stayTier === 'budget' ? 1 : stayTier === 'heritage' ? 1.6 : 2.5;

  // Calculate totals based on mode & travelers
  const transportTotal = Math.round(
    (isTimeOptimized ? 54600 : 28200) * travelersCount
  );
  const accommodationTotal = Math.round(
    (isTimeOptimized ? 68000 : 42000) * tierMultiplier * Math.ceil(travelersCount / 2)
  );
  const activitiesTotal = Math.round(
    (isTimeOptimized ? 22000 : 15000) * travelersCount
  );
  const grandTotal = transportTotal + accommodationTotal + activitiesTotal;

  const handleSave = () => {
    const newItinerary: SavedItinerary = {
      id: 'itin-' + Date.now(),
      title: `${isTimeOptimized ? 'Express Aerial' : 'Cultural Railway'} Odyssey (${isTimeOptimized ? '18' : '39'} Days)`,
      createdAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      totalDays: isTimeOptimized ? 18 : 39,
      totalCost: grandTotal,
      travelMode: preferences.travelMode,
      phases: ROUTE_PHASES_DATA.map((p) => p.title),
      selectedStates: ['rajasthan', 'gujarat', 'maharashtra', 'karnataka', 'tamil-nadu'],
    };

    onSaveItinerary(newItinerary);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="space-y-10 animate-fadeIn">
      {/* Top Panoramic Hero Banner matching Image 7 */}
      <div className="relative rounded-3xl overflow-hidden border border-[#202738] shadow-2xl min-h-[220px] sm:min-h-[260px] flex items-center p-6 sm:p-10">
        {/* Background Scenic Road & Valley photo */}
        <img
          src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1600&q=80"
          alt="Scenic Mountain Road"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.35]"
        />

        {/* Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c10] via-[#0a0c10]/80 to-transparent" />

        {/* Banner Text Content */}
        <div className="relative z-10 max-w-2xl space-y-2.5">
          <div className="flex items-center gap-2 text-[#d9a86c]">
            <span className="text-sm font-mono">∿</span>
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#d9a86c] font-mono">
              LOGISTICS HUB
            </span>
          </div>

          <h1 className="font-serif-display text-3xl sm:text-5xl font-bold tracking-tight text-[#f1f5f9]">
            29 States. Two Ways.
          </h1>

          <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed max-w-xl font-light">
            Navigate the subcontinent. Compare sweeping railway journeys focused on cultural immersion against optimized flight paths for time-conscious travelers.
          </p>
        </div>
      </div>

      {/* Main Section: Route Optimization Timeline (Left) + Cost Calculator (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Route Optimization Timeline matching Image 7 */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#f1f5f9]">
              Route Optimization
            </h2>

            {/* Toggle: [Less Expense] / [Less Time] matching Image 7 */}
            <div className="inline-flex bg-[#121620] border border-[#202738] p-1 rounded-xl self-start">
              <button
                onClick={() => onUpdatePreferences({ travelMode: 'expense' })}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold tracking-wider transition-all ${
                  !isTimeOptimized
                    ? 'bg-[#e28a36] text-white shadow-md'
                    : 'text-[#8e9aaf] hover:text-white'
                }`}
              >
                <Train className="w-3.5 h-3.5" />
                <span>Less Expense</span>
              </button>

              <button
                onClick={() => onUpdatePreferences({ travelMode: 'time' })}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold tracking-wider transition-all ${
                  isTimeOptimized
                    ? 'bg-[#e28a36] text-white shadow-md'
                    : 'text-[#8e9aaf] hover:text-white'
                }`}
              >
                <Plane className="w-3.5 h-3.5" />
                <span>Less Time</span>
              </button>
            </div>
          </div>

          {/* Timeline Phases matching Image 7 */}
          <div className="relative pl-6 sm:pl-8 space-y-8 border-l border-[#242b3b]">
            {ROUTE_PHASES_DATA.map((phase) => {
              const phaseCost = isTimeOptimized ? phase.costEstimateFlight : phase.costEstimateTrain;
              const phaseDays = isTimeOptimized ? phase.durationDaysFlight : phase.durationDaysTrain;
              const transitText = isTimeOptimized ? phase.transitFlight : phase.transitTrain;

              return (
                <div key={phase.id} className="relative group">
                  {/* Timeline Glowing Node Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-3.5 h-3.5 rounded-full bg-[#e28a36] ring-4 ring-[#0d0f14] group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(226,138,54,0.8)]" />

                  {/* Phase Card */}
                  <div className="bg-[#121620] border border-[#1e2535] rounded-2xl p-5 sm:p-6 shadow-xl hover:border-amber-500/40 transition-all">
                    
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#1c2230] pb-4 mb-4">
                      <div>
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#34d399] font-mono">
                          PHASE {phase.phaseNumber} • {phase.region.toUpperCase()}
                        </span>
                        <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#f1f5f9] mt-0.5">
                          {phase.title}
                        </h3>
                      </div>

                      {/* Cost and Duration */}
                      <div className="text-left sm:text-right">
                        <div className="font-serif-display text-2xl font-bold text-[#e6c694]">
                          ₹{phaseCost.toLocaleString('en-IN')}
                        </div>
                        <span className="text-[11px] font-mono text-[#8e9aaf]">
                          Est. {phaseDays} Days
                        </span>
                      </div>
                    </div>

                    {/* Transit & Must-See Craft Sub-box matching Image 7 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      {/* Transit */}
                      <div className="flex items-start gap-3 bg-[#0d1016] border border-[#1a202c] rounded-xl p-3.5">
                        <div className="p-2 rounded-lg bg-[#161c27] text-[#e28a36] shrink-0">
                          {isTimeOptimized ? <Plane className="w-4 h-4" /> : <Train className="w-4 h-4" />}
                        </div>
                        <div>
                          <span className="text-[10px] font-bold tracking-wider text-[#8e9aaf] uppercase">
                            TRANSIT
                          </span>
                          <p className="text-slate-300 mt-0.5 leading-relaxed">
                            {transitText}
                          </p>
                        </div>
                      </div>

                      {/* Must-See Craft */}
                      <div className="flex items-start gap-3 bg-[#0d1016] border border-[#1a202c] rounded-xl p-3.5">
                        <div className="p-2 rounded-lg bg-[#161c27] text-amber-300 shrink-0">
                          <Compass className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold tracking-wider text-[#8e9aaf] uppercase">
                            MUST-SEE CRAFT
                          </span>
                          <p className="text-slate-200 font-medium mt-0.5 leading-relaxed">
                            {phase.mustSeeCraft}
                          </p>
                          <span className="text-[10px] text-amber-400/80">
                            {phase.craftCity}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Route Stops Pills */}
                    <div className="mt-4 pt-3 flex flex-wrap items-center gap-1.5 text-[11px]">
                      <span className="text-[#64748b] text-[10px] uppercase font-mono mr-1">Stops:</span>
                      {phase.stops.map((stop, i) => (
                        <span key={i} className="bg-[#171c26] text-slate-300 px-2 py-0.5 rounded-md border border-[#242c3d]">
                          {stop}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Cost Calculator Card matching Image 7 */}
        <div className="lg:col-span-5 sticky top-28 space-y-4">
          <div className="bg-[#121620] border border-[#1f2638] rounded-2xl p-6 sm:p-7 shadow-2xl space-y-6">
            <div>
              <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#f1f5f9]">
                Cost Calculator
              </h3>
              <p className="text-xs text-[#8e9aaf] mt-1 leading-relaxed">
                Estimate your total outlay based on current selections.
              </p>
            </div>

            {/* Config: Travelers & Stay Tier */}
            <div className="grid grid-cols-2 gap-3 pt-1 border-t border-[#1b2230]">
              <div>
                <label className="text-[10px] uppercase tracking-wider text-[#8e9aaf] font-semibold">Travelers</label>
                <div className="flex items-center gap-2 mt-1 bg-[#0c0e14] border border-[#1e2536] rounded-lg p-1">
                  {[1, 2, 4].map((num) => (
                    <button
                      key={num}
                      onClick={() => setTravelersCount(num)}
                      className={`flex-1 py-1 text-xs rounded font-medium transition-all ${
                        travelersCount === num ? 'bg-[#e28a36] text-white font-bold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {num} {num === 1 ? 'Solo' : 'Pax'}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-wider text-[#8e9aaf] font-semibold">Stay Tier</label>
                <div className="flex items-center gap-1 mt-1 bg-[#0c0e14] border border-[#1e2536] rounded-lg p-1 text-[11px]">
                  {(['budget', 'heritage', 'luxury'] as const).map((tier) => (
                    <button
                      key={tier}
                      onClick={() => setStayTier(tier)}
                      className={`flex-1 py-1 rounded capitalize transition-all ${
                        stayTier === tier ? 'bg-amber-600/80 text-white font-bold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Line Items matching Image 7 */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-widest text-[#8e9aaf] uppercase">
                  TRANSPORT
                </span>
                <span className="font-serif-display text-xl font-bold text-[#f1f5f9]">
                  ₹{transportTotal.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-widest text-[#8e9aaf] uppercase">
                  ACCOMMODATION
                </span>
                <span className="font-serif-display text-xl font-bold text-[#f1f5f9]">
                  ₹{accommodationTotal.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-widest text-[#8e9aaf] uppercase">
                  ACTIVITIES
                </span>
                <span className="font-serif-display text-xl font-bold text-[#f1f5f9]">
                  ₹{activitiesTotal.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-[#222a3a]" />

            {/* Total Row matching Image 7 */}
            <div className="flex items-baseline justify-between pt-1">
              <span className="text-xs font-bold tracking-widest text-[#8e9aaf] uppercase">
                ESTIMATED TOTAL
              </span>
              <span className="font-serif-display text-3xl font-bold text-[#e6c694]">
                ₹{grandTotal.toLocaleString('en-IN')}
              </span>
            </div>

            {/* Save Itinerary Button matching Image 7 */}
            <button
              onClick={handleSave}
              className={`w-full py-3.5 rounded-xl font-semibold text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all shadow-lg ${
                savedSuccess
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#c59a68] hover:bg-[#d6ab79] text-[#12151c]'
              }`}
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>ITINERARY SAVED!</span>
                </>
              ) : (
                <>
                  <Bookmark className="w-4 h-4" />
                  <span>SAVE ITINERARY</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Regional Highlights Bottom Section matching Image 7 */}
      <div className="pt-6 border-t border-[#1c222e]">
        <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#f1f5f9] mb-6">
          Regional Highlights
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: Odisha */}
          <div 
            onClick={() => {
              const od = STATES_DATA.find((s) => s.id === 'odisha');
              if (od) onSelectState(od);
            }}
            className="bg-[#121620] border border-[#1e2535] rounded-2xl p-5 cursor-pointer hover:border-amber-500/40 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="h-32 rounded-xl overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1600100397608-f010f443b793?auto=format&fit=crop&w=600&q=80"
                  alt="Odisha"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>

              <span className="inline-block px-2.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-[#102b1f] text-[#34d399] border border-[#1b4834] mb-2">
                ODISHA
              </span>

              <h3 className="font-serif-display text-lg font-bold text-[#f1f5f9] group-hover:text-amber-300 transition-colors">
                Tarakasi Silver
              </h3>
            </div>

            <div className="mt-4 pt-3 border-t border-[#1c2230] flex items-center justify-between text-[11px] text-[#8e9aaf]">
              <span>Best: Oct–Mar</span>
              <span className="font-mono text-emerald-400">Stay: ₹1.5k/n</span>
            </div>
          </div>

          {/* Card 2: Tamil Nadu */}
          <div 
            onClick={() => {
              const tn = STATES_DATA.find((s) => s.id === 'tamil-nadu');
              if (tn) onSelectState(tn);
            }}
            className="bg-[#121620] border border-[#1e2535] rounded-2xl p-5 cursor-pointer hover:border-amber-500/40 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="h-32 rounded-xl overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80"
                  alt="Tamil Nadu"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>

              <span className="inline-block px-2.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-[#102b1f] text-[#34d399] border border-[#1b4834] mb-2">
                TAMIL NADU
              </span>

              <h3 className="font-serif-display text-lg font-bold text-[#f1f5f9] group-hover:text-amber-300 transition-colors">
                Kanchipuram Silk
              </h3>
            </div>

            <div className="mt-4 pt-3 border-t border-[#1c2230] flex items-center justify-between text-[11px] text-[#8e9aaf]">
              <span>Best: Nov–Feb</span>
              <span className="font-mono text-emerald-400">Stay: ₹2.2k/n</span>
            </div>
          </div>

          {/* Card 3: J & K */}
          <div 
            onClick={() => {
              const jk = STATES_DATA.find((s) => s.id === 'jammu-kashmir');
              if (jk) onSelectState(jk);
            }}
            className="bg-[#121620] border border-[#1e2535] rounded-2xl p-5 cursor-pointer hover:border-amber-500/40 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="h-32 rounded-xl overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=600&q=80"
                  alt="Jammu Kashmir"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>

              <span className="inline-block px-2.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-[#102b1f] text-[#34d399] border border-[#1b4834] mb-2">
                J &amp; K
              </span>

              <h3 className="font-serif-display text-lg font-bold text-[#f1f5f9] group-hover:text-amber-300 transition-colors">
                Walnut Woodwork
              </h3>
            </div>

            <div className="mt-4 pt-3 border-t border-[#1c2230] flex items-center justify-between text-[11px] text-[#8e9aaf]">
              <span>Best: Apr–Oct</span>
              <span className="font-mono text-emerald-400">Stay: ₹2.8k/n</span>
            </div>
          </div>

          {/* Card 4: Explore All 29 matching Image 7 */}
          <div 
            onClick={() => onUpdatePreferences({ activeTab: 'guide' })}
            className="bg-[#10131b] border border-[#242c3e] rounded-2xl p-6 cursor-pointer hover:border-amber-400 transition-all flex flex-col items-center justify-center text-center group"
          >
            <div className="w-14 h-14 rounded-full bg-[#1b2230] text-amber-400 flex items-center justify-center mb-4 group-hover:rotate-45 transition-transform duration-300">
              <Compass className="w-7 h-7" />
            </div>

            <h3 className="font-serif-display text-xl font-bold text-[#f1f5f9] group-hover:text-amber-300">
              Explore All 29
            </h3>

            <p className="text-xs text-[#8e9aaf] mt-2">
              View full state breakdown, culinary specials &amp; transit guides.
            </p>

            <span className="mt-4 inline-flex items-center gap-1.5 text-xs text-amber-400 font-semibold uppercase tracking-wider">
              Browse Directory →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
