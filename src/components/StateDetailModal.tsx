import React, { useState } from 'react';
import { X, MapPin, Clock, Ticket, ShieldCheck, Bookmark, Check, Award, Sparkles, Image as ImageIcon, Maximize2, Compass } from 'lucide-react';
import { StateData, StateAttraction } from '../types';

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
  const [activeTab, setActiveTab] = useState<'attractions' | 'craft' | 'logistics' | 'culinary'>('attractions');
  const [isSaved, setIsSaved] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [previewAttraction, setPreviewAttraction] = useState<StateAttraction | null>(null);
  const [currentHeroImage, setCurrentHeroImage] = useState<string | null>(null);

  if (!state) return null;

  const displayHero = currentHeroImage || state.bannerImage || state.heroImage;
  const attractionsList = state.attractions || [];

  const handleSave = () => {
    onSaveToTrip(state);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  const handleOpenAttractionDetail = (attraction: StateAttraction) => {
    setPreviewAttraction(attraction);
    setSelectedImage(attraction.image);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-md animate-fadeIn overflow-y-auto"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-5xl bg-[#0f131d] border border-[#232b3d] rounded-3xl overflow-hidden shadow-2xl my-auto text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Hero Banner */}
        <div className="relative h-72 sm:h-96 w-full overflow-hidden group">
          <img
            src={displayHero}
            alt={state.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover brightness-75 transition-all duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f131d] via-[#0f131d]/50 to-black/40" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 hover:bg-black/90 text-white flex items-center justify-center transition-all z-20 border border-white/15 shadow-xl hover:scale-105"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Place Switcher Strip in Hero Top-Left */}
          {attractionsList.length > 0 && (
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 overflow-x-auto max-w-[calc(100%-80px)] scrollbar-none pb-1">
              <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-lg bg-black/75 text-amber-300 border border-amber-500/30 backdrop-blur-sm shrink-0 flex items-center gap-1">
                <ImageIcon className="w-3 h-3" /> State Places ({attractionsList.length})
              </span>
              {attractionsList.map((attr, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentHeroImage(attr.image);
                  }}
                  className={`h-8 w-12 rounded-lg overflow-hidden border transition-all shrink-0 hover:scale-105 ${
                    displayHero === attr.image
                      ? 'border-amber-400 ring-2 ring-amber-400/50 shadow-md'
                      : 'border-white/20 opacity-70 hover:opacity-100'
                  }`}
                  title={attr.name}
                >
                  <img
                    src={attr.image}
                    alt={attr.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Title Overlay */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span className="px-3 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase bg-[#132c22] text-[#34d399] border border-[#1e4837]">
                  {state.region.toUpperCase()} REGION
                </span>
                <span className="text-xs text-amber-300 font-mono">
                  Capital: {state.capital}
                </span>
                <span className="text-xs text-slate-300 font-mono">
                  • {attractionsList.length} Curated Sights
                </span>
              </div>
              <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-white drop-shadow-md tracking-tight">
                {state.name}
              </h2>
              <p className="text-sm sm:text-base font-medium text-amber-200/90 mt-1 max-w-2xl">
                {state.tagline}
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleSave}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#c59a68] hover:bg-[#d6ab79] text-[#10131b] text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:scale-105"
              >
                {isSaved ? <Check className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                <span>{isSaved ? 'Saved to Trip' : 'Save State'}</span>
              </button>

              <button
                onClick={() => onOpenAIAssistantForState(state)}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#192130] hover:bg-[#222c40] border border-amber-500/40 text-amber-300 text-xs font-semibold transition-all shadow-lg hover:scale-105"
                title="Ask AI about this state"
              >
                <Sparkles className="w-4 h-4" />
                <span>AI Guide</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modal Tab Navigation */}
        <div className="flex items-center border-b border-[#1f2638] px-6 bg-[#0c0e14] overflow-x-auto scrollbar-none">
          {[
            { id: 'attractions', label: `Places & Attractions (${attractionsList.length || state.topAttractions.length})` },
            { id: 'craft', label: 'Artisan Craft & GI Tag' },
            { id: 'logistics', label: 'Transit & Budget' },
            { id: 'culinary', label: 'Culinary Heritage' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-3.5 px-4 text-xs font-bold tracking-wider whitespace-nowrap transition-colors relative uppercase ${
                activeTab === tab.id
                  ? 'text-amber-300'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber-400 shadow-sm" />
              )}
            </button>
          ))}
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-6">
          
          {/* TAB 1: PLACES & ATTRACTIONS WITH UNIQUE IMAGES */}
          {activeTab === 'attractions' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif-display text-2xl font-bold text-white flex items-center gap-2">
                    <Compass className="w-5 h-5 text-amber-400" />
                    Every Place &amp; Historical Monument in {state.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Click any place photo to view in high definition or inspect visiting hours and entry details.
                  </p>
                </div>
              </div>

              {/* Grid of Places with Photos */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {attractionsList.map((place, idx) => (
                  <div
                    key={idx}
                    className="group bg-[#131824] border border-[#232c3f] hover:border-amber-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col"
                  >
                    {/* Place Photo Header */}
                    <div 
                      className="relative h-48 sm:h-52 w-full overflow-hidden cursor-pointer bg-slate-900"
                      onClick={() => handleOpenAttractionDetail(place)}
                    >
                      <img
                        src={place.image}
                        alt={place.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#131824] via-transparent to-black/30" />

                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 flex-wrap">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-black/75 text-amber-300 border border-amber-500/30 backdrop-blur-sm">
                          {place.category}
                        </span>
                        {place.unescoCertified && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-emerald-950/90 text-emerald-300 border border-emerald-500/40 backdrop-blur-sm flex items-center gap-1">
                            <Award className="w-3 h-3" /> UNESCO
                          </span>
                        )}
                      </div>

                      {/* Click to Zoom Icon */}
                      <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/70 text-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-white/20 backdrop-blur-sm">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Place Info */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <h4 className="font-serif-display text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                          {place.name}
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed mt-1.5 line-clamp-2">
                          {place.description}
                        </p>
                      </div>

                      {/* Meta Tags */}
                      <div className="pt-2 border-t border-[#1f2638] space-y-1.5 text-[11px] text-slate-400 font-mono">
                        {place.timings && (
                          <div className="flex items-center gap-2">
                            <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            <span className="truncate text-slate-300">{place.timings}</span>
                          </div>
                        )}
                        {place.entryFee && (
                          <div className="flex items-center gap-2">
                            <Ticket className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span className="truncate text-emerald-300/90">{place.entryFee}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* UNESCO Banner */}
              {state.unescoSites.length > 0 && (
                <div className="bg-[#161b26] border border-amber-500/30 rounded-2xl p-5 mt-4">
                  <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
                    <Award className="w-4 h-4" />
                    <span>Official UNESCO World Heritage Inscriptions ({state.unescoSites.length})</span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {state.unescoSites.map((site, i) => (
                      <li key={i} className="flex items-center gap-2 bg-[#0e121a] p-2.5 rounded-xl border border-[#222a3a]">
                        <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                        <span className="font-medium text-slate-200">{site}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: CRAFT & GI CERTIFICATION */}
          {activeTab === 'craft' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-5 rounded-2xl overflow-hidden border border-[#232b3d] bg-[#0c0e14]">
                <img
                  src={state.craft.image}
                  alt={state.craft.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-64 object-cover"
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
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-amber-950/80 text-amber-300 border border-amber-500/40">
                    {state.craft.category}
                  </span>
                  {state.craft.giTagCertified && (
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> GI Tag Certified ({state.craft.giTagYear})
                    </span>
                  )}
                </div>

                <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-white">
                  {state.craft.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {state.craft.description}
                </p>

                <div className="bg-[#141924] border border-[#202738] rounded-xl p-4 space-y-1.5">
                  <span className="text-[10px] font-bold tracking-wider text-[#d9a86c] uppercase">
                    HISTORICAL LINEAGE &amp; PATRONAGE
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {state.craft.history}
                  </p>
                </div>

                {/* Authenticity Tip box */}
                <div className="bg-[#142018] border border-emerald-600/30 rounded-xl p-4 space-y-1">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>How to Spot Genuine Master Crafts</span>
                  </div>
                  <p className="text-xs text-emerald-100/90 leading-relaxed">
                    {state.craft.authenticityTip}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: LOGISTICS & BUDGET */}
          {activeTab === 'logistics' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#121620] border border-[#1f2638] rounded-xl p-4">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#8e9aaf]">Best Season</span>
                  <div className="font-serif-display text-xl font-bold text-amber-300 mt-1">
                    {state.bestMonths}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">Optimal climate &amp; festivals</p>
                </div>

                <div className="bg-[#121620] border border-[#1f2638] rounded-xl p-4">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#8e9aaf]">Daily Budget</span>
                  <div className="font-serif-display text-xl font-bold text-emerald-400 mt-1">
                    ₹{state.dailyBudgetEstimate.toLocaleString('en-IN')}/day
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">Stay, food &amp; local transport</p>
                </div>

                <div className="bg-[#121620] border border-[#1f2638] rounded-xl p-4">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#8e9aaf]">Stay Cost</span>
                  <div className="font-serif-display text-xl font-bold text-slate-200 mt-1">
                    {state.stayCostPerNight}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">Heritage homestay / boutique</p>
                </div>
              </div>

              {/* Transit connectivity */}
              <div className="bg-[#121620] border border-[#1f2638] rounded-2xl p-5 space-y-4">
                <h4 className="font-serif-display text-lg font-bold text-white">
                  Connectivity &amp; Transportation Access
                </h4>

                <div className="space-y-3 text-xs">
                  <div className="flex items-start gap-3 bg-[#0d1017] p-3 rounded-xl border border-[#1b2230]">
                    <span className="text-base">🚄</span>
                    <div>
                      <span className="font-semibold text-slate-200 block">Express Railway Network:</span>
                      <span className="text-slate-300">{state.transitAccess.rail}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-[#0d1017] p-3 rounded-xl border border-[#1b2230]">
                    <span className="text-base">✈️</span>
                    <div>
                      <span className="font-semibold text-slate-200 block">Major Airports:</span>
                      <span className="text-slate-300">{state.transitAccess.air}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-[#0d1017] p-3 rounded-xl border border-[#1b2230]">
                    <span className="text-base">🛣️</span>
                    <div>
                      <span className="font-semibold text-slate-200 block">National Highway Arteries:</span>
                      <span className="text-slate-300">{state.transitAccess.road}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: CULINARY HERITAGE */}
          {activeTab === 'culinary' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-serif-display text-xl font-bold text-white">
                    Signature Culinary Delicacies
                  </h4>
                  <p className="text-xs text-[#8e9aaf] mt-0.5">
                    Authentic state gastronomy shaped by traditional heirloom recipes and local crops.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {state.signatureFood.map((food, i) => (
                  <div key={i} className="bg-[#121620] border border-[#1f2638] rounded-xl p-4 flex items-center gap-3.5 hover:border-amber-500/30 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-[#1a212e] text-amber-400 flex items-center justify-center text-lg font-bold shrink-0">
                      🍛
                    </div>
                    <div>
                      <span className="font-semibold text-slate-100 text-sm">{food}</span>
                      <span className="block text-[11px] text-amber-300/80 font-mono">Heirloom Recipe • Must Try</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox / Full Place Photo Modal */}
      {previewAttraction && (
        <div 
          className="fixed inset-0 z-60 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-xl animate-fadeIn"
          onClick={() => setPreviewAttraction(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#121622] border border-[#2b354b] rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[60vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={previewAttraction.image}
                alt={previewAttraction.name}
                referrerPolicy="no-referrer"
                className="w-full h-full max-h-[60vh] object-cover"
              />
              <button
                onClick={() => setPreviewAttraction(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/80 hover:bg-black text-white flex items-center justify-center border border-white/20"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-amber-950/80 text-amber-300 border border-amber-500/40">
                  {previewAttraction.category}
                </span>
                {previewAttraction.unescoCertified && (
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
                    <Award className="w-3 h-3" /> UNESCO World Heritage Site
                  </span>
                )}
              </div>

              <h3 className="font-serif-display text-2xl font-bold text-white">
                {previewAttraction.name}
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {previewAttraction.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-[#232b3d] text-xs">
                {previewAttraction.timings && (
                  <div className="bg-[#0b0e14] p-3 rounded-xl border border-[#1a202c] flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase">Visiting Hours</span>
                      <span className="text-slate-200 font-mono">{previewAttraction.timings}</span>
                    </div>
                  </div>
                )}
                {previewAttraction.entryFee && (
                  <div className="bg-[#0b0e14] p-3 rounded-xl border border-[#1a202c] flex items-center gap-2.5">
                    <Ticket className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase">Admission Tariff</span>
                      <span className="text-emerald-300 font-mono">{previewAttraction.entryFee}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
