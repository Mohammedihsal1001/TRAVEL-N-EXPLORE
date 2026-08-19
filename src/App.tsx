import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { ExploreMapView } from './components/ExploreMapView';
import { HeritageCraftsView } from './components/HeritageCraftsView';
import { BudgetRoutesView } from './components/BudgetRoutesView';
import { TravelGuideView } from './components/TravelGuideView';
import { StateDetailModal } from './components/StateDetailModal';
import { SearchModal } from './components/SearchModal';
import { JourneyCustomizerModal } from './components/JourneyCustomizerModal';
import { RegionStatsModal } from './components/RegionStatsModal';
import { AITripCuratorModal } from './components/AITripCuratorModal';
import { SavedItinerariesDrawer } from './components/SavedItinerariesDrawer';
import { STATES_DATA } from './data/statesData';
import { StateData, TravelPreferences, SavedItinerary } from './types';
import { X, Sparkles, Map, Wallet, Landmark } from 'lucide-react';

export default function App() {
  // Global Travel Preferences State
  const [preferences, setPreferences] = useState<TravelPreferences>(() => {
    return {
      activeTab: 'explore',
      sidebarMode: 'filters',
      selectedRegion: 'All Regions',
      travelMode: 'expense',
      tripDurationDays: 12,
      targetBudget: 45000,
    };
  });

  // Modal / Drawer states
  const [selectedState, setSelectedState] = useState<StateData | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isJourneyModalOpen, setIsJourneyModalOpen] = useState(false);
  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false);
  const [isAICuratorOpen, setIsAICuratorOpen] = useState(false);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [aiStateContext, setAiStateContext] = useState<StateData | null>(null);

  // Saved state and itineraries
  const [savedItineraries, setSavedItineraries] = useState<SavedItinerary[]>(() => {
    const saved = localStorage.getItem('incredible_india_saved_itineraries');
    return saved ? JSON.parse(saved) : [];
  });

  const [savedStates, setSavedStates] = useState<StateData[]>(() => {
    const saved = localStorage.getItem('incredible_india_saved_states');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('incredible_india_saved_itineraries', JSON.stringify(savedItineraries));
  }, [savedItineraries]);

  useEffect(() => {
    localStorage.setItem('incredible_india_saved_states', JSON.stringify(savedStates));
  }, [savedStates]);

  // Keyboard shortcut for search (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleUpdatePreferences = (updates: Partial<TravelPreferences>) => {
    setPreferences((prev) => ({ ...prev, ...updates }));
  };

  const handleSaveItinerary = (itinerary: SavedItinerary) => {
    setSavedItineraries((prev) => [itinerary, ...prev.filter((i) => i.id !== itinerary.id)]);
  };

  const handleSaveState = (state: StateData) => {
    setSavedStates((prev) => {
      if (prev.some((s) => s.id === state.id)) {
        return prev.filter((s) => s.id !== state.id);
      }
      return [state, ...prev];
    });
  };

  const handleRemoveItinerary = (id: string) => {
    setSavedItineraries((prev) => prev.filter((i) => i.id !== id));
  };

  const handleRemoveSavedState = (stateId: string) => {
    setSavedStates((prev) => prev.filter((s) => s.id !== stateId));
  };

  const handleOpenAICuratorForState = (state: StateData) => {
    setAiStateContext(state);
    setIsAICuratorOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0d0f14] text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      {/* Top Navbar */}
      <Navbar
        preferences={preferences}
        onSelectTab={(tab) => handleUpdatePreferences({ activeTab: tab })}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenSavedItineraries={() => setIsSavedDrawerOpen(true)}
        savedCount={savedItineraries.length + savedStates.length}
        onToggleMobileMenu={() => setIsMobileSidebarOpen(true)}
      />

      {/* Main Layout Body: Left Sidebar + Main Viewport */}
      <div className="flex-1 flex max-w-[1920px] w-full mx-auto">
        {/* Left Sticky Sidebar */}
        <Sidebar
          preferences={preferences}
          onUpdatePreferences={handleUpdatePreferences}
          onOpenJourneyCustomizer={() => setIsJourneyModalOpen(true)}
          onOpenStats={() => setIsStatsModalOpen(true)}
          onOpenAICurator={() => {
            setAiStateContext(null);
            setIsAICuratorOpen(true);
          }}
        />

        {/* Mobile Navigation Drawer */}
        {isMobileSidebarOpen && (
          <div className="fixed inset-0 z-50 md:hidden bg-black/80 backdrop-blur-sm flex animate-fadeIn">
            <div className="w-72 bg-[#0c0e12] h-full p-5 flex flex-col justify-between border-r border-[#1e2430]">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif-display text-xl font-bold text-[#e6c694]">Trip Planner</h3>
                  <button 
                    onClick={() => setIsMobileSidebarOpen(false)}
                    className="p-1 text-slate-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-2">
                  {[
                    { id: 'explore', label: 'Explore Map', icon: Map },
                    { id: 'heritage', label: 'Heritage & Crafts', icon: Landmark },
                    { id: 'budget', label: 'Budget Routes', icon: Wallet },
                    { id: 'guide', label: 'Travel Guide', icon: Map },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        handleUpdatePreferences({ activeTab: item.id as any });
                        setIsMobileSidebarOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm ${
                        preferences.activeTab === item.id
                          ? 'bg-[#f08a24] text-white font-bold'
                          : 'text-slate-300 hover:bg-[#161a22]'
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#1e2430]">
                <button
                  onClick={() => {
                    setIsMobileSidebarOpen(false);
                    setIsAICuratorOpen(true);
                  }}
                  className="w-full py-3 rounded-xl bg-[#161b24] text-amber-300 border border-amber-500/30 flex items-center justify-center gap-2 text-xs font-semibold"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>AI Trip Curator</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <main className="flex-1 min-w-0 p-4 sm:p-8 lg:p-10 max-w-7xl mx-auto w-full">
          {preferences.activeTab === 'explore' && (
            <ExploreMapView
              onSelectState={(st) => setSelectedState(st)}
              preferences={preferences}
              onUpdatePreferences={handleUpdatePreferences}
            />
          )}

          {preferences.activeTab === 'heritage' && (
            <HeritageCraftsView
              onSelectState={(st) => setSelectedState(st)}
              preferences={preferences}
              onUpdatePreferences={handleUpdatePreferences}
              onNavigateToBudget={(st) => {
                handleUpdatePreferences({ activeTab: 'budget' });
              }}
            />
          )}

          {preferences.activeTab === 'budget' && (
            <BudgetRoutesView
              onSelectState={(st) => setSelectedState(st)}
              preferences={preferences}
              onUpdatePreferences={handleUpdatePreferences}
              onSaveItinerary={handleSaveItinerary}
            />
          )}

          {preferences.activeTab === 'guide' && (
            <TravelGuideView
              onSelectState={(st) => setSelectedState(st)}
              onNavigateToBudget={(st) => {
                handleUpdatePreferences({ activeTab: 'budget' });
              }}
            />
          )}
        </main>
      </div>

      {/* State Detail Deep-Dive Modal */}
      <StateDetailModal
        state={selectedState}
        onClose={() => setSelectedState(null)}
        onSaveToTrip={handleSaveState}
        onOpenAIAssistantForState={handleOpenAICuratorForState}
      />

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectState={(st) => setSelectedState(st)}
      />

      {/* Journey Parameters Modal */}
      <JourneyCustomizerModal
        isOpen={isJourneyModalOpen}
        onClose={() => setIsJourneyModalOpen(false)}
        preferences={preferences}
        onUpdatePreferences={handleUpdatePreferences}
      />

      {/* Region Stats Modal */}
      <RegionStatsModal
        isOpen={isStatsModalOpen}
        onClose={() => setIsStatsModalOpen(false)}
        onSelectState={(st) => setSelectedState(st)}
      />

      {/* AI Trip Curator Modal */}
      <AITripCuratorModal
        isOpen={isAICuratorOpen}
        onClose={() => setIsAICuratorOpen(false)}
        initialState={aiStateContext}
        onSelectState={(st) => setSelectedState(st)}
      />

      {/* Saved Itineraries & Bookmarks Drawer */}
      <SavedItinerariesDrawer
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        savedItineraries={savedItineraries}
        savedStates={savedStates}
        onRemoveItinerary={handleRemoveItinerary}
        onRemoveState={handleRemoveSavedState}
        onSelectState={(st) => setSelectedState(st)}
      />
    </div>
  );
}
