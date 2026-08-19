import React from 'react';
import { Search, User, Bookmark, Menu } from 'lucide-react';
import { CompassLogo } from './CompassLogo';
import { TravelPreferences } from '../types';

interface NavbarProps {
  preferences: TravelPreferences;
  onSelectTab: (tab: TravelPreferences['activeTab']) => void;
  onOpenSearch: () => void;
  onOpenSavedItineraries: () => void;
  savedCount: number;
  onToggleMobileMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  preferences,
  onSelectTab,
  onOpenSearch,
  onOpenSavedItineraries,
  savedCount,
  onToggleMobileMenu,
}) => {
  const tabs = [
    { id: 'explore', label: 'Explore Map' },
    { id: 'heritage', label: 'Heritage & Crafts' },
    { id: 'budget', label: 'Budget Routes' },
    { id: 'guide', label: 'Travel Guide' },
  ] as const;

  return (
    <header className="h-20 shrink-0 border-b border-[#1b212c] bg-[#0d0f14]/90 backdrop-blur-md px-4 sm:px-8 flex items-center justify-between sticky top-0 z-20">
      {/* Mobile Menu Toggle & Brand */}
      <div className="flex items-center gap-3 sm:gap-4">
        <button
          onClick={onToggleMobileMenu}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800"
          aria-label="Open Menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div 
          onClick={() => onSelectTab('explore')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <CompassLogo size={38} />
          <div className="flex flex-col">
            <span className="font-serif-display text-xl sm:text-2xl font-bold tracking-tight text-[#f1f5f9] group-hover:text-amber-300 transition-colors leading-none">
              Incredible
            </span>
            <span className="font-serif-display text-lg sm:text-xl font-bold tracking-tight text-[#e2c792] leading-none mt-0.5">
              India
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Tabs matching screenshots */}
      <nav className="hidden lg:flex items-center gap-8 h-full">
        {tabs.map((tab) => {
          const isActive = preferences.activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={`relative h-full flex items-center text-sm font-medium transition-colors ${
                isActive
                  ? 'text-[#f6c27f]'
                  : 'text-[#94a3b8] hover:text-[#e2e8f0]'
              }`}
            >
              <span>{tab.label}</span>
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#df9742] shadow-[0_0_8px_rgba(223,151,66,0.6)]" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Right Actions: Search & Profile & Saved */}
      <div className="flex items-center gap-3 sm:gap-4">
        <button
          onClick={onOpenSearch}
          className="p-2.5 rounded-full text-[#94a3b8] hover:text-white hover:bg-[#181d26] transition-colors flex items-center gap-2 group"
          title="Search States, Crafts, or Routes (Ctrl+K)"
        >
          <Search className="w-4 h-4 group-hover:scale-110 transition-transform" />
          <span className="hidden xl:inline text-xs text-[#64748b] bg-[#161a22] px-2 py-0.5 rounded border border-[#232936]">
            Search
          </span>
        </button>

        <button
          onClick={onOpenSavedItineraries}
          className="relative p-2.5 rounded-full text-[#94a3b8] hover:text-white hover:bg-[#181d26] transition-colors"
          title="Saved Itineraries"
        >
          <Bookmark className="w-4 h-4" />
          {savedCount > 0 && (
            <span className="absolute top-1 right-1 w-4 h-4 bg-amber-500 text-[#0d0f13] font-bold text-[10px] rounded-full flex items-center justify-center font-mono">
              {savedCount}
            </span>
          )}
        </button>

        <div className="flex items-center pl-1 sm:pl-2">
          <button 
            onClick={() => onSelectTab('guide')}
            className="w-9 h-9 rounded-full bg-[#e8a858] text-[#12151c] flex items-center justify-center font-bold shadow-md hover:ring-2 hover:ring-amber-400/50 transition-all"
            title="Traveler Profile"
          >
            <User className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
