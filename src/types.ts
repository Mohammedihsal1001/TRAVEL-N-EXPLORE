export type Region = 'North' | 'South' | 'East' | 'West' | 'North-East' | 'Central';

export interface StateCraft {
  name: string;
  category: 'Textiles' | 'Paintings' | 'Metalwork' | 'Woodwork' | 'Pottery' | 'Embroidery' | 'Jewelry' | 'Stone & Glass';
  description: string;
  history: string;
  giTagYear?: number;
  giTagCertified: boolean;
  image: string;
  artisanCenter: string;
  priceRange: string;
  authenticityTip: string;
}

export interface StateData {
  id: string;
  name: string;
  region: Region;
  capital: string;
  tagline: string;
  heroImage: string;
  bannerImage: string;
  description: string;
  craft: StateCraft;
  bestMonths: string;
  stayCostPerNight: string;
  dailyBudgetEstimate: number;
  topAttractions: string[];
  signatureFood: string[];
  transitAccess: {
    rail: string;
    air: string;
    road: string;
  };
  unescoSites: string[];
  badgeColor?: string;
}

export interface RoutePhase {
  id: string;
  phaseNumber: number;
  region: Region;
  title: string;
  costEstimateTrain: number;
  costEstimateFlight: number;
  durationDaysTrain: number;
  durationDaysFlight: number;
  transitTrain: string;
  transitFlight: string;
  mustSeeCraft: string;
  craftCity: string;
  stops: string[];
  highlightImage: string;
}

export interface TravelPreferences {
  activeTab: 'explore' | 'heritage' | 'budget' | 'guide';
  sidebarMode: 'filters' | 'estimator' | 'stats';
  selectedRegion: 'All' | Region;
  travelMode: 'expense' | 'time'; // 'Less Expense' vs 'Less Time'
  tripDurationDays: number;
  targetBudget: number;
  transportMultiplier: number;
  accommodationType: 'budget' | 'heritage' | 'luxury';
}

export interface SavedItinerary {
  id: string;
  title: string;
  createdAt: string;
  totalDays: number;
  totalCost: number;
  travelMode: 'expense' | 'time';
  phases: string[];
  selectedStates: string[];
  notes?: string;
}
