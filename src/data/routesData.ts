import { RoutePhase } from '../types';

export const ROUTE_PHASES_DATA: RoutePhase[] = [
  {
    id: 'phase-1-north',
    phaseNumber: 1,
    region: 'North',
    title: 'Delhi & Rajasthan',
    costEstimateTrain: 12400,
    costEstimateFlight: 24500,
    durationDaysTrain: 8,
    durationDaysFlight: 5,
    transitTrain: 'Vande Bharat Express to Jaipur, then local state express buses.',
    transitFlight: 'IndiGo Express from Delhi (DEL) to Jaipur & Udaipur (UDR).',
    mustSeeCraft: 'Block Printing in Sanganer',
    craftCity: 'Sanganer & Bagru',
    stops: ['Old Delhi Spice Market', 'Amber Fort Jaipur', 'Sanganer Workshop', 'Blue City Jodhpur', 'Lake Pichola Udaipur'],
    highlightImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'phase-2-west',
    phaseNumber: 2,
    region: 'West',
    title: 'Gujarat & Maharashtra',
    costEstimateTrain: 15800,
    costEstimateFlight: 31200,
    durationDaysTrain: 12,
    durationDaysFlight: 7,
    transitTrain: 'Overnight sleeper bus and Tejas Rajdhani from Ahmedabad to Mumbai.',
    transitFlight: 'Air India direct from Ahmedabad (AMD) to Mumbai CSMIA (BOM).',
    mustSeeCraft: 'Ajrakh Block Print, Kutch',
    craftCity: 'Ajrakhpur & Dhamadka',
    stops: ['Sabarmati Ashram', 'Rann of Kutch Salt Flats', 'Statue of Unity', 'Gateway of India Mumbai', 'Ellora Rock Caves'],
    highlightImage: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'phase-3-south',
    phaseNumber: 3,
    region: 'South',
    title: 'Karnataka & Kerala',
    costEstimateTrain: 18200,
    costEstimateFlight: 36000,
    durationDaysTrain: 10,
    durationDaysFlight: 6,
    transitTrain: 'Konkan Railway scenic coastal line & KSRTC Airavat Club Class.',
    transitFlight: 'Direct flights from Bengaluru (BLR) to Cochin (COK) & Trivandrum.',
    mustSeeCraft: 'Kasavu & Mysore Silk Weaves',
    craftCity: 'Mysore & Balaramapuram',
    stops: ['Mysore Palace', 'Coorg Coffee Hills', 'Fort Kochi Spice Market', 'Alleppey Backwater Cruise', 'Varkala Cliff'],
    highlightImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'phase-4-east-ne',
    phaseNumber: 4,
    region: 'East',
    title: 'West Bengal, Odisha & Assam',
    costEstimateTrain: 14500,
    costEstimateFlight: 29800,
    durationDaysTrain: 9,
    durationDaysFlight: 5,
    transitTrain: 'Vande Bharat Express to Puri & Howrah, Brahmaputra River Ferry.',
    transitFlight: 'Direct flight Kolkata (CCU) to Bhubaneswar (BBI) & Guwahati (GAU).',
    mustSeeCraft: 'Tarakasi Silver & Golden Muga Silk',
    craftCity: 'Cuttack & Sualkuchi',
    stops: ['Victoria Memorial Kolkata', 'Konark Sun Temple', 'Puri Golden Beach', 'Kamakhya Temple', 'Kaziranga Safari'],
    highlightImage: 'https://images.unsplash.com/photo-1615886753866-79396abc446e?auto=format&fit=crop&w=800&q=80'
  }
];

export interface CostBreakdownItem {
  category: string;
  amountExpense: number;
  amountTime: number;
  iconName: string;
}

export const BASE_COSTS: CostBreakdownItem[] = [
  { category: 'TRANSPORT', amountExpense: 28200, amountTime: 54600, iconName: 'Train' },
  { category: 'ACCOMMODATION', amountExpense: 42000, amountTime: 68000, iconName: 'Hotel' },
  { category: 'ACTIVITIES', amountExpense: 15000, amountTime: 22000, iconName: 'Compass' }
];
