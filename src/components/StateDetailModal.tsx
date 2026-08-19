import React, { useState } from 'react';
import { X, MapPin, Calendar, Train, Utensils, ShieldCheck, Bookmark, Check, Award, ExternalLink, Sparkles } from 'lucide-react';
import { StateData, SavedItinerary } from '../types';

interface StateDetailModalProps {
  state: StateData | null;
  onClose: () => void;
  onSaveToTrip: (state: StateData) => void;
  onOpenAIAssistantForState: (state: StateData) => void;
}

export const StateDetailModal: React.FC<StateDetailModalProps> = ({
  state,
  onClose,
  onSaveToTrip,
  onOpenAIAssistantForState,
}) => {
  const [activeTab, setActiveTab] = useState<'craft' | 'logistics' | 'attractions' | 'culinary'>('craft');
  const [copiedTip, setCopiedTip] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  if (!state) return null;

  const handleSave = () => {
    onSaveToTrip(state);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl bg-[#10131b] border border-[#232b3d] rounded-3xl overflow-hidden shadow-2xl my-auto text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Hero Banner */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img
            src={state.bannerImage || state.heroImage}
            alt={state.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#10131b] via-[#10131b]/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all z-20 border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title Overlay */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-3 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase bg-[#132c22] text-[#34d399] border border-[#1e4837]">
                  {state.region.toUpperCase()} REGION
                </span>
                <span className="text-xs text-amber-300 font-mono">
                  Capital: {state.capital}
                </span>
              </div>
              <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-white drop-shadow-md">
                {state.name}
              </h2>
              <p className="text-sm font-medium text-amber-200/90 mt-1">
                {state.tagline}
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleSave}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#c59a68] hover:bg-[#d6ab79] text-[#10131b] text-xs font-semibold uppercase tracking-wider transition-all shadow-lg"
              >
                {isSaved ? <Check className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                <span>{isSaved ? 'Added' : 'Save State'}</span>
              </button>

              <button
                onClick={() => onOpenAIAssistantForState(state)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#192130] hover:bg-[#222c40] border border-amber-500/30 text-amber-300 text-xs font-medium transition-all"
                title="Ask AI about this state"
              >
                <Sparkles className="w-4 h-4" />
                <span className="hidden sm:inline">AI Guide</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modal Tab Navigation */}
        <div className="flex items-center border-b border-[#1f2638] px-6 bg-[#0c0e14] overflow-x-auto">
          {[
            { id: 'craft', label: 'Artisan Craft & GI Tag' },
            { id: 'logistics', label: 'Transit & Budget' },
            { id: 'attractions', label: 'Monuments & UNESCO' },
            { id: 'culinary', label: 'Culinary Heritage' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-3.5 px-4 text-xs font-semibold tracking-wider whitespace-nowrap transition-colors relative ${
                activeTab === tab.id
                  ? 'text-amber-300'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber-400" />
              )}
            </button>
          ))}
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 max-h-[55vh] overflow-y-auto space-y-6">
          
          {/* TAB 1: CRAFT & GI CERTIFICATION */}
          {activeTab === 'craft' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-5 rounded-2xl overflow-hidden border border-[#232b3d] bg-[#0c0e14]">
                <img
                  src={state.craft.image}
                  alt={state.craft.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#8e9aaf]">Typical Price</span>
                    <span className="text-emerald-400 font-mono font-semibold">{state.craft.priceRange}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#8e9aaf]">Artisan Hub</span>
                    <span className="text-slate-200 font-medium">{state.craft.artisanCenter}</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-amber-950/80 text-amber-300 border border-amber-500/40">
                    {state.craft.category}
                  </span>
                  {state.craft.giTagCertified && (
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> GI Tagged ({state.craft.giTagYear})
                    </span>
                  )}
                </div>

                <h3 className="font-serif-display text-2xl font-bold text-[#f1f5f9]">
                  {state.craft.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {state.craft.description}
                </p>

                <div className="bg-[#141924] border border-[#202738] rounded-xl p-4 space-y-1.5">
                  <span className="text-[10px] font-bold tracking-wider text-[#d9a86c] uppercase">
                    HISTORICAL LINEAGE
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {state.craft.history}
                  </p>
                </div>

                {/* Authenticity Tip box */}
                <div className="bg-[#181c15] border border-emerald-600/30 rounded-xl p-4 space-y-1">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>How to Spot Genuine Handcraft</span>
                  </div>
                  <p className="text-xs text-emerald-100/90 leading-relaxed">
                    {state.craft.authenticityTip}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: LOGISTICS & BUDGET */}
          {activeTab === 'logistics' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#121620] border border-[#1f2638] rounded-xl p-4">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#8e9aaf]">Best Season</span>
                  <div className="font-serif-display text-xl font-bold text-amber-300 mt-1">
                    {state.bestMonths}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">Optimal climate &amp; artisan fairs</p>
                </div>

                <div className="bg-[#121620] border border-[#1f2638] rounded-xl p-4">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#8e9aaf]">Daily Budget</span>
                  <div className="font-serif-display text-xl font-bold text-emerald-400 mt-1">
                    ₹{state.dailyBudgetEstimate.toLocaleString('en-IN')}/day
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">Mid-tier stay + food + transit</p>
                </div>

                <div className="bg-[#121620] border border-[#1f2638] rounded-xl p-4">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#8e9aaf]">Stay Rate</span>
                  <div className="font-serif-display text-xl font-bold text-slate-200 mt-1">
                    {state.stayCostPerNight}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">Boutique heritage homestay</p>
                </div>
              </div>

              {/* Transit connectivity */}
              <div className="bg-[#121620] border border-[#1f2638] rounded-2xl p-5 space-y-4">
                <h4 className="font-serif-display text-lg font-bold text-[#f1f5f9]">
                  Connectivity &amp; Transportation
                </h4>

                <div className="space-y-3 text-xs">
                  <div className="flex items-start gap-3">
                    <Train className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-200">Express Rail: </span>
                      <span className="text-slate-300">{state.transitAccess.rail}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-200">Air Hubs: </span>
                      <span className="text-slate-300">{state.transitAccess.air}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-200">Road Highways: </span>
                      <span className="text-slate-300">{state.transitAccess.road}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: ATTRACTIONS & UNESCO */}
          {activeTab === 'attractions' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-serif-display text-lg font-bold text-[#f1f5f9] mb-3">
                  Key Cultural Attractions
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {state.topAttractions.map((attraction, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-[#121620] border border-[#1f2638] rounded-xl text-xs text-slate-200">
                      <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold font-mono text-[10px]">
                        {i + 1}
                      </div>
                      <span>{attraction}</span>
                    </div>
                  ))}
                </div>
              </div>

              {state.unescoSites.length > 0 && (
                <div className="bg-[#161a22] border border-amber-500/30 rounded-2xl p-5">
                  <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
                    <Award className="w-4 h-4" />
                    <span>UNESCO World Heritage Recognitions</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {state.unescoSites.map((site, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span>{site}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: CULINARY HERITAGE */}
          {activeTab === 'culinary' && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Utensils className="w-4 h-4" />
                <span>Signature Regional Dishes</span>
              </div>
              <p className="text-xs text-[#8e9aaf]">
                Taste the authentic flavors shaped by historical agricultural traditions and imperial kitchens.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {state.signatureFood.map((food, i) => (
                  <div key={i} className="bg-[#121620] border border-[#1f2638] rounded-xl p-3.5 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#1a212e] text-amber-400 flex items-center justify-center text-xs font-bold">
                      🥘
                    </div>
                    <div>
                      <span className="font-semibold text-slate-200 text-xs">{food}</span>
                      <span className="block text-[10px] text-[#8e9aaf]">Authentic State Special</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
