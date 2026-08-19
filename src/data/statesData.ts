import { StateData } from '../types';

export const STATES_DATA: StateData[] = [
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    region: 'North',
    capital: 'Jaipur',
    tagline: 'The Art of Bandhani & Royal Forts',
    heroImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1600&q=80',
    description: 'Discover the ancient tie-and-dye craft of Rajasthan. Intricate dot patterns created through thousands of tiny knots tell stories of royal ceremonies, desert folklore, and artisan lineage passed down through centuries.',
    craft: {
      name: 'Bandhani & Jaipur Blue Pottery',
      category: 'Textiles',
      description: 'Bandhani involves plucking the cloth with fingernails into tiny bindings that form symbolic figurative designs upon dyeing. Paired with Jaipur quartz-based Blue Pottery.',
      history: 'Historical records date Bandhani back to the 6th century Ajanta cave paintings and the royal courts of Mewar and Marwar.',
      giTagYear: 2008,
      giTagCertified: true,
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
      artisanCenter: 'Jaipur, Jodhpur & Sanganer',
      priceRange: '₹1,200 – ₹18,000',
      authenticityTip: 'Check the reverse of the fabric for distinct crinkled puckers and genuine unbleached dye boundaries.'
    },
    bestMonths: 'Oct – Mar',
    stayCostPerNight: '₹2,500/n',
    dailyBudgetEstimate: 3800,
    topAttractions: ['Amber Fort & Palace', 'Hawa Mahal', 'City Palace Udaipur', 'Jaisalmer Sand Dunes', 'Mehrangarh Fort'],
    attractions: [
      {
        name: 'Amber Fort & Palace',
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
        category: 'Palace & Fort',
        description: 'Majestic hilltop fortress overlooking Maota Lake, boasting artistic Rajput architecture, the Sheesh Mahal (Mirror Palace), and courtyards of red sandstone and marble.',
        timings: '08:00 AM – 05:30 PM, 06:30 PM – 09:15 PM (Night Tour)',
        entryFee: '₹100 (Indians), ₹500 (Foreigners)',
        unescoCertified: true
      },
      {
        name: 'Hawa Mahal (Palace of Winds)',
        image: 'https://images.unsplash.com/photo-1609137144822-0d5b12ee6499?auto=format&fit=crop&w=800&q=80',
        category: 'Monument',
        description: 'Iconic five-story pink sandstone palace with 953 intricately carved jharokhas (casements) designed for royal ladies to observe street festivities unnoticed.',
        timings: '09:00 AM – 05:00 PM',
        entryFee: '₹50 (Indians), ₹200 (Foreigners)',
        unescoCertified: true
      },
      {
        name: 'City Palace Udaipur & Lake Pichola',
        image: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=800&q=80',
        category: 'Palace & Fort',
        description: 'Vast palace complex on the banks of Lake Pichola, showcasing Mewar court opulence, peacock mosaic courtyards, and mirror halls.',
        timings: '09:30 AM – 05:30 PM',
        entryFee: '₹300 (Adults)',
        unescoCertified: false
      },
      {
        name: 'Mehrangarh Fort Jodhpur',
        image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80',
        category: 'Palace & Fort',
        description: 'Towering 400 feet above the Blue City of Jodhpur, this imposing bastion preserves palanquins, royal armories, and panoramic desert ramparts.',
        timings: '09:00 AM – 05:00 PM',
        entryFee: '₹100 (Indians), ₹600 (Foreigners)',
        unescoCertified: false
      },
      {
        name: 'Jaisalmer Golden Fort & Sam Sand Dunes',
        image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80',
        category: 'Nature & Landscape',
        description: 'Living golden sandstone fortress rising from the Great Thar Desert, famed for desert camel safaris, starlit camping, and folk music.',
        timings: 'Open 24 hours (Fort), Safari 04:00 PM – 08:00 PM',
        entryFee: 'Free (Fort entry), ₹800 – ₹2,500 (Camel Safari)',
        unescoCertified: true
      }
    ],
    signatureFood: ['Dal Baati Churma', 'Laal Maas', 'Ghevar', 'Ker Sangri'],
    transitAccess: {
      rail: 'Vande Bharat Express (Delhi-Jaipur-Ajmer), Palace on Wheels',
      air: 'Jaipur International Airport (JAI), Udaipur (UDR), Jodhpur (JDH)',
      road: 'Delhi-Mumbai Expressway (NH48)'
    },
    unescoSites: ['Hill Forts of Rajasthan', 'Jantar Mantar Jaipur', 'Jaipur Walled City']
  },
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    region: 'South',
    capital: 'Chennai',
    tagline: 'Dravidian Marvels & Imperial Silks',
    heroImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1600100397608-f010f443b793?auto=format&fit=crop&w=1600&q=80',
    description: 'Immerse in the timeless architectural heights of Chola and Pandya gopurams alongside the legendary luster of heavy zari Kanchipuram mulberry silks.',
    craft: {
      name: 'Kanchipuram Silk & Tanjore Paintings',
      category: 'Textiles',
      description: 'Woven from pure mulberry silk thread, these sarees are distinguished by their heavy weight, solid contrast borders (korvai technique), and pure gold-silver zari motifs.',
      history: 'The weaving tradition is over 400 years old, tracing back to Sage Markanda, the master weaver of celestial gods.',
      giTagYear: 2005,
      giTagCertified: true,
      image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80',
      artisanCenter: 'Kanchipuram & Thanjavur',
      priceRange: '₹8,000 – ₹75,000',
      authenticityTip: 'Look for the official Silk Mark hologram and inspect the interlocking Korvai zig-zag join where the border meets the body.'
    },
    bestMonths: 'Nov – Feb',
    stayCostPerNight: '₹2,200/n',
    dailyBudgetEstimate: 3200,
    topAttractions: ['Meenakshi Amman Temple Madurai', 'Brihadisvara Temple Thanjavur', 'Shore Temple Mahabalipuram', 'Nilgiri Mountain Railway', 'Rameshwaram Ramanathaswamy'],
    attractions: [
      {
        name: 'Meenakshi Amman Temple Madurai',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
        category: 'Temple & Spiritual',
        description: 'Ancient architectural marvel featuring 14 soaring gopurams encrusted with thousands of colorful mythological stucco figures and the Hall of Thousand Pillars.',
        timings: '05:00 AM – 12:30 PM, 04:00 PM – 10:00 PM',
        entryFee: 'Free (General), ₹50 (Special Darshan)',
        unescoCertified: false
      },
      {
        name: 'Brihadisvara Temple Thanjavur (Big Temple)',
        image: 'https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=800&q=80',
        category: 'Temple & Spiritual',
        description: '1000-year-old Chola engineering triumph built entirely of granite, crowned by an 80-tonne monolithic stone dome (Kumbam).',
        timings: '06:00 AM – 12:30 PM, 04:00 PM – 08:30 PM',
        entryFee: 'Free',
        unescoCertified: true
      },
      {
        name: 'Shore Temple & Pancha Rathas Mahabalipuram',
        image: 'https://images.unsplash.com/photo-1600100397608-f010f443b793?auto=format&fit=crop&w=800&q=80',
        category: 'Monument',
        description: '7th-century Pallava rock-cut sanctuaries facing the roaring Bay of Bengal waves, featuring life-sized stone elephants and bas-relief carvings.',
        timings: '06:00 AM – 06:00 PM',
        entryFee: '₹40 (Indians), ₹600 (Foreigners)',
        unescoCertified: true
      },
      {
        name: 'Nilgiri Mountain Railway (Toy Train)',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
        category: 'Heritage & Culture',
        description: 'Historic rack-and-pinion steam railway chugging through 16 tunnels, 250 bridges, and emerald eucalyptus slopes from Mettupalayam to Ooty.',
        timings: 'Daily departures at 07:10 AM & 02:00 PM',
        entryFee: '₹205 – ₹600 per ticket',
        unescoCertified: true
      },
      {
        name: 'Ramanathaswamy Temple Rameshwaram',
        image: 'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?auto=format&fit=crop&w=800&q=80',
        category: 'Temple & Spiritual',
        description: 'Sacred island temple famed for the longest corridor among all Hindu temples in India with over 1,200 sandstone pillars and 22 holy water theerthams.',
        timings: '05:00 AM – 01:00 PM, 03:00 PM – 09:00 PM',
        entryFee: 'Free',
        unescoCertified: false
      }
    ],
    signatureFood: ['Chettinad Chicken', 'Filter Kaapi', 'Idli-Sambar with Podi', 'Jigarthanda'],
    transitAccess: {
      rail: 'Vande Bharat Express (Chennai-Coimbatore, Chennai-Mysore)',
      air: 'Chennai International (MAA), Madurai (IXM), Coimbatore (CJB)',
      road: 'Golden Quadrilateral (NH44)'
    },
    unescoSites: ['Great Living Chola Temples', 'Group of Monuments at Mahabalipuram', 'Nilgiri Mountain Railway']
  },
  {
    id: 'kerala',
    name: 'Kerala',
    region: 'South',
    capital: 'Thiruvananthapuram',
    tagline: 'Backwater Serenity & Golden Kasavu',
    heroImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1600&q=80',
    description: 'Drift across emerald lagoons fringed with coconut palms while witnessing Aranmula metal mirrors, Coir crafts, and Kasavu ivory weaves.',
    craft: {
      name: 'Aranmula Metal Mirror & Kasavu',
      category: 'Metalwork',
      description: 'The Aranmula Kannadi is a rare front-reflecting handmade metal alloy mirror made from copper and tin, unlike modern silvered glass mirrors.',
      history: 'Crafted exclusively by one family guild in Aranmula village for over 400 years for temple rituals.',
      giTagYear: 2004,
      giTagCertified: true,
      image: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=800&q=80',
      artisanCenter: 'Aranmula & Balaramapuram',
      priceRange: '₹3,500 – ₹25,000',
      authenticityTip: 'Touch an object to the mirror surface: an Aranmula mirror produces zero gap between the object and its reflection.'
    },
    bestMonths: 'Sep – Mar',
    stayCostPerNight: '₹2,600/n',
    dailyBudgetEstimate: 3500,
    topAttractions: ['Alleppey Backwater Houseboats', 'Munnar Tea Plantations', 'Fort Kochi Heritage', 'Periyar Wildlife Sanctuary', 'Varkala Cliff Beach'],
    attractions: [
      {
        name: 'Alleppey Backwater Houseboats',
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
        category: 'Nature & Landscape',
        description: 'Glide on traditional Kettuvallam houseboats through serene palm-fringed canals, paddy fields below sea level, and tranquil village waterways.',
        timings: 'Day cruise: 11:30 AM – 05:00 PM, Overnight available',
        entryFee: '₹7,500 – ₹18,000 per houseboat / day',
        unescoCertified: false
      },
      {
        name: 'Munnar Tea Plantations & Eravikulam',
        image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
        category: 'Nature & Landscape',
        description: 'Endless rolling emerald tea hillocks blanketed in morning mist, home to the endangered Nilgiri Tahr and south India’s highest peak, Anamudi.',
        timings: '07:30 AM – 04:00 PM',
        entryFee: '₹200 (National Park)',
        unescoCertified: true
      },
      {
        name: 'Fort Kochi & Chinese Fishing Nets',
        image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=800&q=80',
        category: 'Heritage & Culture',
        description: 'Atmospheric colonial quarter lined with cantilevered 14th-century Chinese fishing nets, Portuguese churches, and spice warehouses.',
        timings: 'Open 24 hours (Nets operation during tides)',
        entryFee: 'Free',
        unescoCertified: false
      },
      {
        name: 'Periyar Wildlife Sanctuary Thekkady',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
        category: 'Wildlife',
        description: 'Cardamom Hills nature reserve where herds of wild elephants and gaurs bathe along the perimeter of a scenic artificial lake.',
        timings: '06:00 AM – 05:30 PM (Boat Safari)',
        entryFee: '₹45 (Entry) + ₹255 (Boat Safari)',
        unescoCertified: false
      },
      {
        name: 'Varkala Red Sandstone Cliff & Papanasam Beach',
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
        category: 'Nature & Landscape',
        description: 'Dramatic geological red laterite cliffs towering directly over the Arabian Sea, famous for sunset cafes and natural mineral water springs.',
        timings: 'Open 24 hours',
        entryFee: 'Free',
        unescoCertified: false
      }
    ],
    signatureFood: ['Appam with Ishtu', 'Karimeen Pollichathu', 'Malabar Parotta', 'Kerala Sadya'],
    transitAccess: {
      rail: 'Vande Bharat Express (Kasargod-Trivandrum)',
      air: 'Cochin International (COK), Trivandrum (TRV), Kozhikode (CCJ)',
      road: 'NH66 Coastal Highway'
    },
    unescoSites: ['Western Ghats Biosphere', 'Koodiyattam Sanskrit Theatre']
  },
  {
    id: 'uttar-pradesh',
    name: 'Uttar Pradesh',
    region: 'North',
    capital: 'Lucknow',
    tagline: 'Lucknowi Chikan & Banarasi Brocades',
    heroImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1600&q=80',
    description: 'Home to the immortal Taj Mahal, the spiritual river ghats of Varanasi, and the finest shadow-work white embroidery crafted by Awadhi artisans.',
    craft: {
      name: 'Lucknowi Chikan & Banarasi Zari Brocade',
      category: 'Embroidery',
      description: 'Delicate hand embroidery comprising 36 distinct stitch styles (Tepchi, Bakhiya, Phanda, Murri) crafted on fine muslin, georgette, and organza fabrics.',
      history: 'Patronized by the Nawabs of Awadh and Mughal Empress Noor Jahan in the 17th century.',
      giTagYear: 2008,
      giTagCertified: true,
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80',
      artisanCenter: 'Chowk Lucknow & Varanasi Silk Ghats',
      priceRange: '₹1,500 – ₹35,000',
      authenticityTip: 'Hand Chikankari has slight irregular stitch lengths on the reverse (Bakhiya) creating opaque silhouettes on translucent front fabric.'
    },
    bestMonths: 'Oct – Mar',
    stayCostPerNight: '₹2,000/n',
    dailyBudgetEstimate: 2900,
    topAttractions: ['Taj Mahal & Agra Fort', 'Varanasi Ganga Aarti Ghats', 'Bara Imambara Lucknow', 'Fatehpur Sikri', 'Sarnath Dhamek Stupa'],
    attractions: [
      {
        name: 'Taj Mahal (Agra)',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
        category: 'Monument',
        description: 'Universal jewel of Muslim art in India, this ivory-white marble mausoleum on the Yamuna River was built by Shah Jahan in memory of Mumtaz Mahal.',
        timings: 'Sunrise to Sunset (Closed Fridays)',
        entryFee: '₹50 (Indians), ₹1,100 (Foreigners)',
        unescoCertified: true
      },
      {
        name: 'Varanasi Dashashwamedh Ghat & Ganga Aarti',
        image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80',
        category: 'Temple & Spiritual',
        description: 'The spiritual heart of Kashi, where priests perform synchronized brass lamp rituals honoring Mother Ganga against the rhythm of bells and chants.',
        timings: 'Aarti: 06:45 PM (Summer), 06:00 PM (Winter)',
        entryFee: 'Free (Boat seat ₹150 – ₹400)',
        unescoCertified: false
      },
      {
        name: 'Bara Imambara & Bhool Bhulaiya (Lucknow)',
        image: 'https://images.unsplash.com/photo-1627894006066-b456190e82c5?auto=format&fit=crop&w=800&q=80',
        category: 'Monument',
        description: 'Vast 18th-century monument with an enormous vaulted hall built without a single pillar or beam, topped by an intricate three-dimensional labyrinth.',
        timings: '06:00 AM – 05:00 PM',
        entryFee: '₹50 (Indians), ₹500 (Foreigners)',
        unescoCertified: false
      },
      {
        name: 'Fatehpur Sikri & Buland Darwaza',
        image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
        category: 'Palace & Fort',
        description: 'Emperor Akbar’s red sandstone Mughal capital, featuring the 54-meter high "Gate of Magnificence" and the pristine marble tomb of Salim Chishti.',
        timings: 'Sunrise to Sunset',
        entryFee: '₹50 (Indians), ₹610 (Foreigners)',
        unescoCertified: true
      },
      {
        name: 'Sarnath Deer Park & Dhamek Stupa',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
        category: 'Monument',
        description: 'The sacred Buddhist site where Gautama Buddha taught his first sermon (Dhammacakkappavattana Sutta) after attaining enlightenment.',
        timings: 'Sunrise to Sunset',
        entryFee: '₹25 (Indians), ₹300 (Foreigners)',
        unescoCertified: false
      }
    ],
    signatureFood: ['Galouti Kebab', 'Lucknowi Dum Biryani', 'Banarasi Paan', 'Makhan Malai'],
    transitAccess: {
      rail: 'Vande Bharat Express (Delhi-Varanasi, Lucknow-Gorakhpur)',
      air: 'Chaudhary Charan Singh Airport Lucknow (LKO), Varanasi (VNS)',
      road: 'Yamuna & Agra-Lucknow Expressways'
    },
    unescoSites: ['Taj Mahal', 'Agra Fort', 'Fatehpur Sikri']
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    region: 'South',
    capital: 'Bengaluru',
    tagline: 'Mysore Silk & Channapatna Wooden Toys',
    heroImage: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?auto=format&fit=crop&w=1600&q=80',
    description: 'Explore the monumental boulder ruins of the Vijayanagara Empire in Hampi alongside royal Mysore sandalwood and non-toxic lacquered wooden craft.',
    craft: {
      name: 'Channapatna Wooden Toys & Mysore Silk',
      category: 'Woodwork',
      description: 'Handcrafted Ivory wood toys turned on lathes and polished with natural vegetable and turmeric lacquers, making them completely non-toxic and child-safe.',
      history: 'Patronized by Tipu Sultan in the 18th century who invited master artisans from Persia.',
      giTagYear: 2006,
      giTagCertified: true,
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
      artisanCenter: 'Channapatna (Gombegala Ooru) & Mysore',
      priceRange: '₹350 – ₹15,000',
      authenticityTip: 'Authentic Channapatna toys have seamless rounded edges, mirror lacquer finish, and natural plant-based vegetable colors.'
    },
    bestMonths: 'Oct – Mar',
    stayCostPerNight: '₹2,300/n',
    dailyBudgetEstimate: 3400,
    topAttractions: ['Hampi Monument Ruins', 'Mysore Palace', 'Coorg Coffee Estates', 'Gokarna Beaches', 'Badami Cave Temples'],
    attractions: [
      {
        name: 'Hampi Virupaksha & Stone Chariot',
        image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
        category: 'Monument',
        description: 'Vast open-air museum of granite boulders, musical pillared halls, and the legendary Vittala Temple stone chariot from the 14th-century Vijayanagara Empire.',
        timings: '06:00 AM – 06:00 PM',
        entryFee: '₹40 (Indians), ₹600 (Foreigners)',
        unescoCertified: true
      },
      {
        name: 'Mysore Royal Palace (Amba Vilas)',
        image: 'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?auto=format&fit=crop&w=800&q=80',
        category: 'Palace & Fort',
        description: 'Indo-Saracenic royal residence of the Wadiyar dynasty, illuminated by 97,000 golden bulbs every Sunday evening and during Dussehra.',
        timings: '10:00 AM – 05:30 PM (Illumination Sun 07:00 PM)',
        entryFee: '₹100 (Adults)',
        unescoCertified: false
      },
      {
        name: 'Coorg (Kodagu) Misty Coffee Plantations',
        image: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=800&q=80',
        category: 'Nature & Landscape',
        description: 'The Scotland of India, cloaked in aromatic Robusta coffee bushes, pepper vines, Abbey Falls, and Tibetan monasteries at Bylakuppe.',
        timings: 'Plantation tours: 09:00 AM – 04:00 PM',
        entryFee: '₹200 – ₹500 (Guided Estate Walk)',
        unescoCertified: false
      },
      {
        name: 'Badami Cave Temples & Agastya Lake',
        image: 'https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=800&q=80',
        category: 'Temple & Spiritual',
        description: '6th-century Chalukyan rock-cut caves carved into dramatic red sandstone cliffs, featuring Nataraja with 81 dancing postures.',
        timings: '09:00 AM – 05:30 PM',
        entryFee: '₹25 (Indians), ₹300 (Foreigners)',
        unescoCertified: false
      },
      {
        name: 'Gokarna Om Beach & Mahabaleshwar Temple',
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
        category: 'Nature & Landscape',
        description: 'Soulful coastal sanctuary shaped naturally like the auspicious Om symbol (ॐ), flanked by coconut groves and ancient Shiva shrines.',
        timings: 'Open 24 hours',
        entryFee: 'Free',
        unescoCertified: false
      }
    ],
    signatureFood: ['Bisi Bele Bath', 'Mysore Pak', 'Neer Dosa', 'Mangalore Ghee Roast'],
    transitAccess: {
      rail: 'Vande Bharat Express (Bengaluru-Mysuru, Bengaluru-Hubballi)',
      air: 'Kempegowda International Bengaluru (BLR), Mangalore (IXE)',
      road: 'Bengaluru-Mysuru Expressway'
    },
    unescoSites: ['Group of Monuments at Hampi', 'Group of Monuments at Pattadakal', 'Sacred Ensembles of the Hoysalas']
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    region: 'West',
    capital: 'Gandhinagar',
    tagline: 'Kutch Mirror Work & White Desert Magic',
    heroImage: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1200&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1609137144822-0d5b12ee6499?auto=format&fit=crop&w=1600&q=80',
    description: 'Celebrate the kaleidoscope of Kutchi mirror embroidery, Ajrakh geometric hand-block printing, and the vast ethereal expanse of the Great Rann of Kutch.',
    craft: {
      name: 'Kutch Mirror Embroidery & Ajrakh',
      category: 'Embroidery',
      description: 'Intricate thread stitching that encases convex glass mirrors (Abhla Bharat) in geometric lattice, paired with 16-stage natural indigo Ajrakh resist dyeing.',
      history: 'Practiced by pastoralist Rabari, Mutwa, and Meghwal communities for over 700 years.',
      giTagYear: 2008,
      giTagCertified: true,
      image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=80',
      artisanCenter: 'Bhuj, Dhamadka & Ajrakhpur',
      priceRange: '₹1,800 – ₹30,000',
      authenticityTip: 'True Ajrakh block prints use natural vegetable/mineral dyes with subtle aroma of iron and tamarind seeds rather than harsh chemical smell.'
    },
    bestMonths: 'Nov – Feb',
    stayCostPerNight: '₹2,400/n',
    dailyBudgetEstimate: 3300,
    topAttractions: ['Statue of Unity', 'Great Rann of Kutch (Rann Utsav)', 'Rani ki Vav Patan', 'Gir National Park (Asiatic Lions)', 'Somnath Temple'],
    attractions: [
      {
        name: 'Great Rann of Kutch Salt Desert',
        image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80',
        category: 'Nature & Landscape',
        description: 'World’s largest salt desert transforming under the full moon into an endless surreal white canvas during the vibrant Rann Utsav festival.',
        timings: '06:00 AM – 08:00 PM (Best at sunrise/sunset)',
        entryFee: '₹100 (Adult Permit)',
        unescoCertified: false
      },
      {
        name: 'Statue of Unity (Kevadia)',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
        category: 'Monument',
        description: 'The world’s tallest statue (182 meters) dedicated to Sardar Vallabhbhai Patel on the Narmada River, featuring high-speed viewing gallery elevators.',
        timings: '08:00 AM – 06:00 PM (Closed Mondays)',
        entryFee: '₹150 (Basic), ₹380 (Viewing Gallery)',
        unescoCertified: false
      },
      {
        name: 'Rani ki Vav Stepwell (Patan)',
        image: 'https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=800&q=80',
        category: 'Monument',
        description: 'Inverted temple stepwell plunging seven levels deep with over 500 principal sculptures dedicated to Lord Vishnu’s ten avatars.',
        timings: '08:00 AM – 06:00 PM',
        entryFee: '₹40 (Indians), ₹600 (Foreigners)',
        unescoCertified: true
      },
      {
        name: 'Gir National Park & Asiatic Lions',
        image: 'https://images.unsplash.com/photo-1615886753866-79396abc446e?auto=format&fit=crop&w=800&q=80',
        category: 'Wildlife',
        description: 'The sole remaining natural habitat of the endangered Asiatic Lion in the world, surrounded by dry deciduous teak forests.',
        timings: 'Safaris: 06:00 AM, 08:30 AM, 03:00 PM',
        entryFee: '₹800 – ₹4,500 per jeep safari permit',
        unescoCertified: false
      },
      {
        name: 'Somnath Jyotirlinga Temple',
        image: 'https://images.unsplash.com/photo-1600100397608-f010f443b793?auto=format&fit=crop&w=800&q=80',
        category: 'Temple & Spiritual',
        description: 'First among the twelve sacred Jyotirlinga shrines of Lord Shiva, perched right on the shores of the Arabian Sea with no landmass between it and Antarctica.',
        timings: '06:00 AM – 09:30 PM (Sound & Light Show 08:00 PM)',
        entryFee: 'Free',
        unescoCertified: false
      }
    ],
    signatureFood: ['Dhokla & Khandvi', 'Gujarati Thali with Undhiyu', 'Fafda Jalebi', 'Handvo'],
    transitAccess: {
      rail: 'Vande Bharat Express (Mumbai-Ahmedabad, Ahmedabad-Jamnagar)',
      air: 'Sardar Vallabhbhai Patel International (AMD), Bhuj (BHJ)',
      road: 'NE1 Ahmedabad-Vadodara Expressway'
    },
    unescoSites: ['Historic City of Ahmedabad', 'Rani-ki-Vav Patan', 'Champaner-Pavagadh', 'Dholavira Harappan City']
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    region: 'West',
    capital: 'Mumbai',
    tagline: 'Paithani Silks & Warli Tribal Art',
    heroImage: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=1600&q=80',
    description: 'Marvel at ancient rock-cut caves of Ajanta & Ellora, Sahyadri mountain fortresses, and opulent peacock-bordered Paithani sarees.',
    craft: {
      name: 'Paithani Saree & Warli Folk Art',
      category: 'Textiles',
      description: 'Handwoven silk sarees with square kaleidoscopic borders and pallus featuring the Mor (peacock) motif, woven using interlocking tapestry weave.',
      history: 'Flourished under the Satavahana dynasty in 200 BC and later patronized by the Peshwas of Pune.',
      giTagYear: 2010,
      giTagCertified: true,
      image: 'https://images.unsplash.com/photo-1609137144822-0d5b12ee6499?auto=format&fit=crop&w=800&q=80',
      artisanCenter: 'Paithan & Yeola',
      priceRange: '₹9,000 – ₹1,20,000',
      authenticityTip: 'Genuine Paithani has exactly identical mirror-image motifs on both front and back with zero floating threads.'
    },
    bestMonths: 'Oct – Mar',
    stayCostPerNight: '₹2,700/n',
    dailyBudgetEstimate: 3900,
    topAttractions: ['Ajanta & Ellora Caves', 'Gateway of India', 'Chhatrapati Shivaji Maharaj Terminus', 'Kaas Plateau of Flowers', 'Mahabaleshwar'],
    attractions: [
      {
        name: 'Ajanta & Ellora Rock Caves',
        image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=800&q=80',
        category: 'Monument',
        description: '34 monolithic rock-cut cave temples excavated from volcanic basalt cliff, featuring the Kailash Temple carved top-down from a single massive rock.',
        timings: '09:00 AM – 05:30 PM (Ellora closed Tues, Ajanta closed Mon)',
        entryFee: '₹40 (Indians), ₹600 (Foreigners)',
        unescoCertified: true
      },
      {
        name: 'Gateway of India & Marine Drive (Mumbai)',
        image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80',
        category: 'Monument',
        description: 'Colonial 26-meter basalt triumphal arch facing Mumbai harbour, adjacent to the historic Taj Mahal Palace Hotel and Queen’s Necklace promenade.',
        timings: 'Open 24 hours',
        entryFee: 'Free',
        unescoCertified: true
      },
      {
        name: 'Chhatrapati Shivaji Maharaj Terminus (CSMT)',
        image: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=800&q=80',
        category: 'Monument',
        description: 'Exuberant High Victorian Gothic railway terminus blending 19th-century British architectural style with Indian traditional palace motifs.',
        timings: 'Open 24 hours (Museum 02:00 PM – 05:00 PM)',
        entryFee: 'Free (Station), ₹200 (Heritage Wing)',
        unescoCertified: true
      },
      {
        name: 'Mahabaleshwar & Sahyadri Viewpoints',
        image: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=800&q=80',
        category: 'Nature & Landscape',
        description: 'Lush Western Ghats hill retreat famed for strawberry farms, Arthur’s Seat cliff edge, and dense monsoon waterfalls.',
        timings: '06:00 AM – 06:00 PM',
        entryFee: 'Free',
        unescoCertified: true
      },
      {
        name: 'Elephanta Island Rock-Cut Caves',
        image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
        category: 'Monument',
        description: 'Ancient rock-carved cave island located 10 km east of Mumbai harbour, containing the celebrated 6-meter Trimurti Sadashiva sculpture.',
        timings: '09:00 AM – 05:30 PM (Closed Mondays)',
        entryFee: '₹40 (Indians) + ₹260 (Ferry Return)',
        unescoCertified: true
      }
    ],
    signatureFood: ['Vada Pav', 'Misal Pav', 'Puran Poli', 'Bombil Fry', 'Modak'],
    transitAccess: {
      rail: 'Vande Bharat Express (Mumbai-Goa, Mumbai-Solapur, Mumbai-Shirdi)',
      air: 'Chhatrapati Shivaji Maharaj International Mumbai (BOM), Pune (PNQ)',
      road: 'Mumbai-Pune Expressway, Samruddhi Mahamarg'
    },
    unescoSites: ['Ajanta Caves', 'Ellora Caves', 'Elephanta Caves', 'Victorian Gothic and Art Deco Ensembles of Mumbai']
  },
  {
    id: 'west-bengal',
    name: 'West Bengal',
    region: 'East',
    capital: 'Kolkata',
    tagline: 'Kantha Stitch & Terracotta Temples',
    heroImage: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1200&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80',
    description: 'Immerse in the literary soul of Kolkata, Darjeeling misty Himalayan tea hills, and Bishnupur burnt-clay terracotta architectures.',
    craft: {
      name: 'Kantha Embroidery & Bishnupur Terracotta',
      category: 'Embroidery',
      description: 'Running stitch folk embroidery that repurposes sarees into layered quilts depicting scenes from rural folklore, paired with burnt terracotta pottery.',
      history: 'Dating back over a millennium, mentioned in ancient Vedic texts as a symbol of domestic preservation.',
      giTagYear: 2008,
      giTagCertified: true,
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
      artisanCenter: 'Santiniketan, Bolpur & Bishnupur',
      priceRange: '₹1,200 – ₹22,000',
      authenticityTip: 'Look for the distinct crinkled effect produced when thousands of fine running stitches pull layers of vintage tussar or cotton together.'
    },
    bestMonths: 'Oct – Mar',
    stayCostPerNight: '₹1,900/n',
    dailyBudgetEstimate: 2800,
    topAttractions: ['Victoria Memorial Kolkata', 'Darjeeling Himalayan Railway', 'Sundarbans Mangrove Delta', 'Bishnupur Terracotta Temples', 'Howrah Bridge'],
    attractions: [
      {
        name: 'Victoria Memorial Hall (Kolkata)',
        image: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=800&q=80',
        category: 'Monument',
        description: 'Stately white Makrana marble monument set in 64 acres of gardens on the Maidan, preserving British imperial art and Bengal Renaissance galleries.',
        timings: '10:00 AM – 06:00 PM (Garden 05:30 AM – 06:00 PM)',
        entryFee: '₹50 (Museum Indians), ₹500 (Foreigners)',
        unescoCertified: false
      },
      {
        name: 'Darjeeling Himalayan Toy Train & Tiger Hill',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
        category: 'Nature & Landscape',
        description: 'Two-foot narrow-gauge mountain railway offering breathtaking sunrise vistas of Mount Kanchenjunga illuminating across Himalayan clouds.',
        timings: 'Joyride: Multiple daily slots (08:00 AM – 04:30 PM)',
        entryFee: '₹1,000 – ₹1,500 per joyride ticket',
        unescoCertified: true
      },
      {
        name: 'Sundarbans Royal Bengal Tiger Delta',
        image: 'https://images.unsplash.com/photo-1615886753866-79396abc446e?auto=format&fit=crop&w=800&q=80',
        category: 'Wildlife',
        description: 'The world’s largest mangrove forest delta, home to swimming Royal Bengal tigers, estuarine crocodiles, and spotted deer.',
        timings: 'Day Boat Safaris: 07:00 AM – 04:30 PM',
        entryFee: '₹100 (Indians), ₹4,000 – ₹8,000 (Boat Tour)',
        unescoCertified: true
      },
      {
        name: 'Howrah Bridge on the Hooghly River',
        image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80',
        category: 'Monument',
        description: 'Engineering cantilever marvel built without nuts and bolts, carrying over 100,000 vehicles and millions of commuters daily over the Hooghly.',
        timings: 'Open 24 hours',
        entryFee: 'Free',
        unescoCertified: false
      },
      {
        name: 'Bishnupur Terracotta Temples',
        image: 'https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=800&q=80',
        category: 'Monument',
        description: '17th-century Malla king temples constructed out of carved local brick terracotta tiles illustrating scenes from the Mahabharata and Ramayana.',
        timings: '06:00 AM – 06:00 PM',
        entryFee: '₹25 (Indians), ₹300 (Foreigners)',
        unescoCertified: false
      }
    ],
    signatureFood: ['Kolkata Biryani', 'Kosha Mangsho', 'Mishti Doi', 'Roshogolla', 'Shorshe Ilish'],
    transitAccess: {
      rail: 'Vande Bharat Express (Howrah-NJP, Howrah-Puri, Howrah-Ranchi)',
      air: 'Netaji Subhash Chandra Bose International Kolkata (CCU), Bagdogra (IXB)',
      road: 'NH19 & NH12'
    },
    unescoSites: ['Sundarbans National Park', 'Darjeeling Himalayan Railway', 'Santiniketan']
  },
  {
    id: 'odisha',
    name: 'Odisha',
    region: 'East',
    capital: 'Bhubaneswar',
    tagline: 'Tarakasi Silver Filigree & Sun Temples',
    heroImage: 'https://images.unsplash.com/photo-1600100397608-f010f443b793?auto=format&fit=crop&w=1200&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
    description: 'Renowned for exquisite Tarakasi silver filigree work, palm-leaf Pattachitra paintings, and the architectural wonder of Konark Sun Temple.',
    craft: {
      name: 'Tarakasi Silver Filigree & Pattachitra',
      category: 'Jewelry',
      description: 'Microscopic silver wires drawn like silk thread and twisted into gossamer jewelry, peacock crowns, and decorative showpieces.',
      history: 'Over 500 years old, influenced by maritime trade with Southeast Asia and Persian artisans in Cuttack.',
      giTagYear: 2024,
      giTagCertified: true,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
      artisanCenter: 'Cuttack & Raghurajpur Heritage Village',
      priceRange: '₹1,500 – ₹45,000',
      authenticityTip: 'Cuttack Tarakasi uses 90%+ pure silver strands crimped entirely by hand without visible soldering lumps.'
    },
    bestMonths: 'Oct – Mar',
    stayCostPerNight: '₹1,500/n',
    dailyBudgetEstimate: 2400,
    topAttractions: ['Konark Sun Temple', 'Jagannath Temple Puri', 'Chilika Lake Dolphins', 'Udayagiri & Khandagiri Caves'],
    attractions: [
      {
        name: 'Konark Sun Temple (Black Pagoda)',
        image: 'https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=800&q=80',
        category: 'Monument',
        description: '13th-century stone chariot dedicated to Surya the Sun God, featuring 24 carved stone wheels that serve as accurate solar sundials.',
        timings: '06:00 AM – 08:00 PM',
        entryFee: '₹40 (Indians), ₹600 (Foreigners)',
        unescoCertified: true
      },
      {
        name: 'Jagannath Temple (Puri)',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
        category: 'Temple & Spiritual',
        description: 'One of the four sacred Char Dham pilgrimage sites, famous for the mammoth annual Ratha Yatra chariot festival and the largest temple kitchen (Mahaprasad).',
        timings: '05:30 AM – 09:30 PM',
        entryFee: 'Free',
        unescoCertified: false
      },
      {
        name: 'Chilika Lake & Irrawaddy Dolphins',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        category: 'Nature & Landscape',
        description: 'Asia’s largest brackish water lagoon, hosting millions of migratory flamingos in winter and endangered Irrawaddy dolphin sightings at Satapada.',
        timings: '06:00 AM – 06:00 PM (Boating)',
        entryFee: '₹1,200 – ₹2,500 per boat',
        unescoCertified: false
      },
      {
        name: 'Udayagiri & Khandagiri Jain Caves',
        image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
        category: 'Monument',
        description: '2nd-century BC rock-cut residential hermitages carved during the reign of King Kharavela, including the double-storied Ranigumpha (Queen’s Cave).',
        timings: '08:00 AM – 05:30 PM',
        entryFee: '₹25 (Indians), ₹300 (Foreigners)',
        unescoCertified: false
      }
    ],
    signatureFood: ['Chhena Poda', 'Pakhala Bhata', 'Dalma', 'Rasagola'],
    transitAccess: {
      rail: 'Vande Bharat Express (Puri-Howrah, Puri-Rourkela)',
      air: 'Biju Patnaik Airport Bhubaneswar (BBI)',
      road: 'NH16 Coastal Corridor'
    },
    unescoSites: ['Sun Temple Konark']
  },
  {
    id: 'punjab',
    name: 'Punjab',
    region: 'North',
    capital: 'Chandigarh',
    tagline: 'Phulkari Floral Embroidery & Golden Temple',
    heroImage: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1200&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1600&q=80',
    description: 'Experience the divine peace of Amritsar Golden Temple, vibrant mustard fields, and rich floral silk thread Phulkari tapestries.',
    craft: {
      name: 'Phulkari Embroidery',
      category: 'Embroidery',
      description: 'Geometric floral embroidery crafted with untwisted silk floss (pat) on coarsely spun handloomed khaddar cotton fabric using darn stitch on the reverse.',
      history: 'Dating back to the 15th century, celebrated in Heer Ranjha folklore as a mother’s blessing for her daughter’s dowry.',
      giTagYear: 2011,
      giTagCertified: true,
      image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80',
      artisanCenter: 'Patiala & Amritsar',
      priceRange: '₹1,500 – ₹28,000',
      authenticityTip: 'Authentic Bagh Phulkari completely conceals the underlying base fabric with solid geometric silk embroidery.'
    },
    bestMonths: 'Oct – Mar',
    stayCostPerNight: '₹2,000/n',
    dailyBudgetEstimate: 2900,
    topAttractions: ['Golden Temple (Harmandir Sahib)', 'Wagah Border Ceremony', 'Jallianwala Bagh', 'Qila Mubarak Patiala'],
    attractions: [
      {
        name: 'Golden Temple (Sri Harmandir Sahib)',
        image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=800&q=80',
        category: 'Temple & Spiritual',
        description: 'The holiest Gurdwara of Sikhism, coated in pure gold leaf and surrounded by the sacred Amrit Sarovar lake, serving free meals to 100,000 people daily at Guru ka Langar.',
        timings: 'Open 24 hours',
        entryFee: 'Free',
        unescoCertified: false
      },
      {
        name: 'Wagah Border Beating Retreat Ceremony',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
        category: 'Heritage & Culture',
        description: 'Electrifying daily military ceremony at the India-Pakistan international border, marked by high-kick drills, patriotic cheers, and synchronized flag lowering.',
        timings: '04:30 PM (Winter), 05:30 PM (Summer)',
        entryFee: 'Free (Arrive 2 hours early)',
        unescoCertified: false
      },
      {
        name: 'Jallianwala Bagh Memorial',
        image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80',
        category: 'Monument',
        description: 'Historic national memorial preserving the bullet marks and martyr’s well commemorating the fateful gathering on Baisakhi in 1919.',
        timings: '06:30 AM – 07:30 PM',
        entryFee: 'Free',
        unescoCertified: false
      },
      {
        name: 'Qila Mubarak (Patiala)',
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
        category: 'Palace & Fort',
        description: '18th-century royal palace fortress combining Mughal and Rajasthani architecture with the Sheesh Mahal mirror gallery and chandelier exhibits.',
        timings: '09:00 AM – 05:00 PM (Closed Mondays)',
        entryFee: '₹20',
        unescoCertified: false
      }
    ],
    signatureFood: ['Makki di Roti & Sarson da Saag', 'Butter Chicken', 'Amritsari Kulcha with Chole', 'Lassi'],
    transitAccess: {
      rail: 'Vande Bharat Express (Delhi-Amritsar, Delhi-Chandigarh)',
      air: 'Sri Guru Ram Dass Jee International Amritsar (ATQ), Chandigarh (IXC)',
      road: 'Grand Trunk Road (NH44)'
    },
    unescoSites: ['Chandigarh Capitol Complex (Le Corbusier)']
  },
  {
    id: 'jammu-kashmir',
    name: 'Jammu & Kashmir',
    region: 'North',
    capital: 'Srinagar / Jammu',
    tagline: 'Walnut Woodwork & Pashmina Weaves',
    heroImage: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=1200&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80',
    description: 'Surrounded by snow-draped Himalayan peaks, Dal Lake houseboats, and centuries of Kashmiri master carvers and Pashmina shawl weavers.',
    craft: {
      name: 'Walnut Woodwork & Pashmina Shawls',
      category: 'Woodwork',
      description: 'Carved out of aged seasoned walnut wood (Doon Kul) with deep undercut dragon, lotus, and chinar leaf reliefs, alongside pure Changthangi goat Pashmina shawls.',
      history: 'Introduced by the Sufi saint Mir Sayyid Ali Hamadani in the 14th century from Persia.',
      giTagYear: 2005,
      giTagCertified: true,
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
      artisanCenter: 'Srinagar Old City & Budgam',
      priceRange: '₹3,500 – ₹90,000',
      authenticityTip: 'Genuine Pashmina passes smoothly through a finger ring and possesses a GI microscopic QR certificate label.'
    },
    bestMonths: 'Apr – Oct',
    stayCostPerNight: '₹2,800/n',
    dailyBudgetEstimate: 4000,
    topAttractions: ['Dal Lake Shikara & Houseboats', 'Gulmarg Gondola', 'Pahalgam Valley', 'Mughal Gardens (Shalimar & Nishat)'],
    attractions: [
      {
        name: 'Dal Lake Shikara & Heritage Houseboats',
        image: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=800&q=80',
        category: 'Nature & Landscape',
        description: 'Iconic water paradise offering wooden Shikara rides to floating vegetable markets, lotus gardens, and ornate cedarwood houseboats.',
        timings: '06:00 AM – 09:00 PM',
        entryFee: '₹600 – ₹1,000 per hour (Shikara)',
        unescoCertified: false
      },
      {
        name: 'Gulmarg Gondola & Apharwat Peak',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
        category: 'Nature & Landscape',
        description: 'World’s second highest operating cable car ascending to 13,780 feet, offering premier ski slopes and panoramic views of Nanga Parbat.',
        timings: '09:00 AM – 04:00 PM',
        entryFee: 'Phase 1: ₹800, Phase 2: ₹1,050',
        unescoCertified: false
      },
      {
        name: 'Pahalgam Betaab & Aru Valley',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        category: 'Nature & Landscape',
        description: 'Verdant pine-fringed alpine meadow along the roaring Lidder River, starting base for the annual Amarnath Yatra pilgrimage.',
        timings: 'Open 24 hours',
        entryFee: '₹100 (Betaab Valley Entry)',
        unescoCertified: false
      },
      {
        name: 'Shalimar & Nishat Mughal Gardens',
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
        category: 'Monument',
        description: '17th-century terraced pleasure gardens created by Jahangir and Asif Khan with cascading water fountains, chinar trees, and Zabarwan hill views.',
        timings: '09:00 AM – 07:00 PM',
        entryFee: '₹24 per garden',
        unescoCertified: false
      }
    ],
    signatureFood: ['Wazwan (Rogan Josh, Gustaba)', 'Kahwa Tea', 'Dum Aloo Kashmiri', 'Modur Pulao'],
    transitAccess: {
      rail: 'Vande Bharat Express (Delhi-Katra, USBRL Chenab Bridge link)',
      air: 'Sheikh ul-Alam International Airport Srinagar (SXR), Jammu (IXJ)',
      road: 'NH44 via Shyama Prasad Mukherjee Tunnel'
    },
    unescoSites: ['Mughal Gardens of Kashmir (Tentative list)']
  },
  {
    id: 'himachal-pradesh',
    name: 'Himachal Pradesh',
    region: 'North',
    capital: 'Shimla / Dharamshala',
    tagline: 'Kullu Shawls & Kangra Miniature Art',
    heroImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1600&q=80',
    description: 'Majestic pine-clad valleys, Tibetan monastic serenity in Dharamshala, and geometric bright Kullu wool weave patterns.',
    craft: {
      name: 'Kullu Woolen Shawls & Kangra Paintings',
      category: 'Textiles',
      description: 'Pure sheep and Angora wool shawls woven with intricate geometrical border patterns in vibrant primary vegetable colors.',
      history: 'Weaving flourished in the 1940s when weavers from Bushahr migrated to the Kullu valley.',
      giTagYear: 2004,
      giTagCertified: true,
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80',
      artisanCenter: 'Kullu & Kangra Valley',
      priceRange: '₹1,200 – ₹18,000',
      authenticityTip: 'Handloom Kullu shawls feature clear raised geometric patterns with clean selvages that do not pucker.'
    },
    bestMonths: 'Mar – Jun & Sep – Nov',
    stayCostPerNight: '₹2,200/n',
    dailyBudgetEstimate: 3100,
    topAttractions: ['Spiti Valley Monasteries', 'Shimla Mall Road & Ridge', 'Dharamshala & McLeodganj', 'Manali & Rohtang Pass'],
    attractions: [
      {
        name: 'Spiti Valley & Key Monastery',
        image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
        category: 'Temple & Spiritual',
        description: '1000-year-old cliffside Buddhist fortress monastery perched at 13,668 feet in the trans-Himalayan cold desert of Spiti.',
        timings: '07:00 AM – 06:00 PM',
        entryFee: 'Free (Donations welcome)',
        unescoCertified: false
      },
      {
        name: 'Shimla Ridge & Mall Road',
        image: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80',
        category: 'Heritage & Culture',
        description: 'The summer capital of British India featuring neo-Gothic Christ Church, Tudorbethan architecture, and sweeping Shivalik mountain vistas.',
        timings: 'Open 24 hours (Pedestrian only)',
        entryFee: 'Free',
        unescoCertified: false
      },
      {
        name: 'Dharamshala & Tsuglagkhang Dalai Lama Temple',
        image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80',
        category: 'Temple & Spiritual',
        description: 'Residence of His Holiness the 14th Dalai Lama, featuring Tibetan prayer wheels, butter lamps, and the Tibet Museum at McLeodganj.',
        timings: '06:00 AM – 06:00 PM',
        entryFee: 'Free',
        unescoCertified: false
      },
      {
        name: 'Manali & Solang Valley',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
        category: 'Nature & Landscape',
        description: 'Gateway to the Atal Tunnel and Rohtang Pass, famous for cedar-shaded Hadimba Temple and adventure paragliding.',
        timings: '09:00 AM – 06:00 PM',
        entryFee: 'Free (Activities ₹500 – ₹3,000)',
        unescoCertified: false
      }
    ],
    signatureFood: ['Dham (Himachali Feast)', 'Siddu with Ghee', 'Chha Gosht', 'Kullu Trout Fish'],
    transitAccess: {
      rail: 'Kalka-Shimla Toy Train (UNESCO), Vande Bharat Express to Una',
      air: 'Kangra Gaggal Airport (DHM), Bhuntar Kullu (KUU)',
      road: 'Kiratpur-Manali 4-lane Highway'
    },
    unescoSites: ['Great Himalayan National Park', 'Kalka-Shimla Mountain Railway']
  },
  {
    id: 'ladakh',
    name: 'Ladakh',
    region: 'North',
    capital: 'Leh',
    tagline: 'High Altitude Monasteries & Changpa Pashmina',
    heroImage: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80',
    description: 'The Land of High Passes featuring high-altitude cobalt lakes, ancient Buddhist cliff gompas, and pure nomadic raw Pashmina fleece.',
    craft: {
      name: 'Ladakh Pashmina (Lena) & Thangka',
      category: 'Textiles',
      description: 'Raw wool gathered from the underbelly of Changthangi goats living at 14,000+ feet in minus 40°C temperatures, spun into ultra-soft fibers 12-15 microns thin.',
      history: 'Centuries-old trade route between Tibet, Kashmir, and Central Asia over the silk roads.',
      giTagYear: 2023,
      giTagCertified: true,
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
      artisanCenter: 'Changthang & Leh Old Market',
      priceRange: '₹6,000 – ₹70,000',
      authenticityTip: 'True Ladakhi raw Pashmina feels featherlight yet emits gentle radiant natural body heat within seconds of skin contact.'
    },
    bestMonths: 'May – Sep',
    stayCostPerNight: '₹3,000/n',
    dailyBudgetEstimate: 4200,
    topAttractions: ['Pangong Tso Lake', 'Nubra Valley Sand Dunes', 'Thiksey & Hemis Monasteries', 'Khardung La Pass', 'Zanskar Valley'],
    attractions: [
      {
        name: 'Pangong Tso Cobalt Blue Lake',
        image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80',
        category: 'Nature & Landscape',
        description: 'World’s highest saltwater lake at 14,270 feet spanning 134 km across India and Tibet, famously shifting shades from cyan to deep cobalt blue.',
        timings: 'Accessible 06:00 AM – 06:00 PM (Requires ILP Permit)',
        entryFee: '₹400 (Inner Line Permit)',
        unescoCertified: false
      },
      {
        name: 'Nubra Valley & Hunder Sand Dunes',
        image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80',
        category: 'Nature & Landscape',
        description: 'High-altitude desert valley with white sand dunes where double-humped Bactrian camels roam against snow-peaked mountains.',
        timings: 'Camel rides 09:00 AM – 06:00 PM',
        entryFee: '₹300 – ₹500 (Camel ride)',
        unescoCertified: false
      },
      {
        name: 'Thiksey & Hemis Monasteries',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
        category: 'Temple & Spiritual',
        description: 'Twelve-story monastery resembling the Potala Palace of Lhasa, housing a 49-foot statue of Maitreya Buddha (Future Buddha).',
        timings: '07:00 AM – 07:00 PM',
        entryFee: '₹50 (Entry)',
        unescoCertified: false
      },
      {
        name: 'Khardung La High Mountain Pass',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
        category: 'Nature & Landscape',
        description: 'Legendary mountain motorable pass at 17,982 feet connecting Leh to the Shyok and Nubra valleys with prayer flags flapping in icy winds.',
        timings: '08:00 AM – 05:00 PM (Weather dependent)',
        entryFee: 'Permit included in ILP',
        unescoCertified: false
      }
    ],
    signatureFood: ['Thukpa', 'Momos with Chutney', 'Skyu', 'Butter Tea (Gur Gur Chai)'],
    transitAccess: {
      rail: 'Under construction Bilaspur-Manali-Leh line',
      air: 'Kushok Bakula Rimpochee Airport Leh (IXL)',
      road: 'Manali-Leh Highway & Srinagar-Leh Highway'
    },
    unescoSites: ['Cold Desert Cultural Landscape (Tentative list)']
  },
  {
    id: 'assam',
    name: 'Assam',
    region: 'North-East',
    capital: 'Dispur',
    tagline: 'Golden Muga Silk & Rhino Sanctuaries',
    heroImage: 'https://images.unsplash.com/photo-1615886753866-79396abc446e?auto=format&fit=crop&w=1200&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1600&q=80',
    description: 'Surrounded by the mighty Brahmaputra river and lush rolling tea estates, Assam is home to the world exclusive lustrous golden Muga silk.',
    craft: {
      name: 'Muga Golden Silk & Majuli Mask Making',
      category: 'Textiles',
      description: 'Naturally shimmering golden silk produced by the wild Antheraea assamensis silkworm. Gets more luminous with every wash and lasts up to 100 years.',
      history: 'Protected by Ahom monarchs for 600 years where commoners were restricted from wearing royal golden Muga garments.',
      giTagYear: 2007,
      giTagCertified: true,
      image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=800&q=80',
      artisanCenter: 'Sualkuchi (Manchester of Assam) & Majuli',
      priceRange: '₹12,000 – ₹60,000',
      authenticityTip: 'True Muga has natural golden-amber sheen that does not wash off and possesses distinct warm thermo-insulating touch.'
    },
    bestMonths: 'Nov – Apr',
    stayCostPerNight: '₹1,800/n',
    dailyBudgetEstimate: 2700,
    topAttractions: ['Kaziranga National Park (One-horned Rhinos)', 'Majuli River Island', 'Kamakhya Temple', 'Manas National Park', 'Assam Tea Gardens'],
    attractions: [
      {
        name: 'Kaziranga National Park (One-Horned Rhinos)',
        image: 'https://images.unsplash.com/photo-1615886753866-79396abc446e?auto=format&fit=crop&w=800&q=80',
        category: 'Wildlife',
        description: 'Sanctuary hosting two-thirds of the world’s great one-horned rhinoceroses in tall elephant grass and wetlands along the Brahmaputra.',
        timings: 'Elephant Safari: 05:00 AM – 07:00 AM, Jeep: 07:30 AM – 04:00 PM',
        entryFee: '₹100 (Entry) + ₹1,500 – ₹3,500 (Jeep Safari)',
        unescoCertified: true
      },
      {
        name: 'Majuli Island (World’s Largest River Island)',
        image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
        category: 'Heritage & Culture',
        description: 'Vibrant cultural cradle of Neo-Vaishnavite culture, famous for 15th-century Satras (monasteries), bamboo mask crafting, and pottery.',
        timings: 'Ferry from Nimati Ghat: 08:30 AM – 03:30 PM',
        entryFee: '₹20 (Ferry ticket)',
        unescoCertified: false
      },
      {
        name: 'Kamakhya Temple (Nilachal Hill)',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
        category: 'Temple & Spiritual',
        description: 'One of the oldest and most revered 51 Shakti Peethas in India, celebrating the feminine creative force and the annual Ambubachi Mela.',
        timings: '05:30 AM – 01:00 PM, 02:30 PM – 05:30 PM',
        entryFee: 'Free (VIP Darshan ₹501)',
        unescoCertified: false
      },
      {
        name: 'Assam Rolling Tea Gardens & Bungalows',
        image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
        category: 'Nature & Landscape',
        description: 'Endless geometric rows of dark green Camellia sinensis tea bushes that produce robust malty Assam black tea in historic British planter estates.',
        timings: 'Estate tours: 08:00 AM – 04:00 PM',
        entryFee: '₹100 – ₹300 (Tea Tasting Tour)',
        unescoCertified: false
      }
    ],
    signatureFood: ['Khaar', 'Masor Tenga', 'Duck with Ash Gourd', 'Pitha'],
    transitAccess: {
      rail: 'Vande Bharat Express (Guwahati-New Jalpaiguri)',
      air: 'Lokpriya Gopinath Bordoloi Airport Guwahati (GAU), Dibrugarh (DIB)',
      road: 'Asian Highway 1 & 2'
    },
    unescoSites: ['Kaziranga National Park', 'Manas Wildlife Sanctuary']
  },
  {
    id: 'meghalaya',
    name: 'Meghalaya',
    region: 'North-East',
    capital: 'Shillong',
    tagline: 'Living Root Bridges & Crystal Rivers',
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
    description: 'The Abode of the Clouds featuring bio-engineered Living Root Bridges of Cherrapunji, crystal-clear Umngot river in Dawki, and matrilineal Khasi crafts.',
    craft: {
      name: 'Khasi Bamboo & Cane Weaving',
      category: 'Woodwork',
      description: 'Intricately woven rainshields (Knup), open-weave baskets, and cane furniture crafted from local bamboo by indigenous Khasi and Garo artisans.',
      history: 'Centuries-old sustainable forest craft passed down through matrilineal Khasi clan elders.',
      giTagYear: 2022,
      giTagCertified: true,
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
      artisanCenter: 'Cherrapunji & Nongpoh',
      priceRange: '₹300 – ₹12,000',
      authenticityTip: 'True Khasi cane craft uses aged wild mountain bamboo treated with natural smoke curing that prevents termite rot.'
    },
    bestMonths: 'Oct – Apr',
    stayCostPerNight: '₹2,000/n',
    dailyBudgetEstimate: 3000,
    topAttractions: ['Double Decker Living Root Bridges', 'Dawki Umngot River', 'Nohkalikai Waterfalls', 'Mawlynnong Village'],
    attractions: [
      {
        name: 'Double Decker Living Root Bridges (Nongriat)',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
        category: 'Nature & Landscape',
        description: 'Living bio-engineering wonders created by training aerial roots of Ficus elastica trees across rushing monsoon gorges over 50+ years.',
        timings: 'Trek starts early: 06:00 AM – 05:00 PM (3,500 stone steps)',
        entryFee: '₹50 (Community Conservation Fee)',
        unescoCertified: false
      },
      {
        name: 'Dawki & Umngot Crystal Clear River',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        category: 'Nature & Landscape',
        description: 'Ethereal transparent river along the Bangladesh border where wooden boats appear to float effortlessly on air over crystal pebble beds.',
        timings: 'Boating: 07:00 AM – 05:00 PM',
        entryFee: '₹800 per boat (up to 4 people)',
        unescoCertified: false
      },
      {
        name: 'Nohkalikai Waterfalls (Cherrapunji)',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        category: 'Nature & Landscape',
        description: 'India’s tallest plunge waterfall (1,115 feet) dropping into an emerald water pool amidst dramatic cloud-drenched limestone cliffs.',
        timings: '08:00 AM – 05:00 PM',
        entryFee: '₹20 (Viewpoint)',
        unescoCertified: false
      },
      {
        name: 'Mawlynnong (Asia’s Cleanest Village)',
        image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
        category: 'Heritage & Culture',
        description: 'Eco-friendly floral village famous for bamboo dustbins at every corner, 100% literacy rate, and Khasi bamboo sky-walk towers.',
        timings: '08:00 AM – 05:00 PM',
        entryFee: '₹50 (Village Entry)',
        unescoCertified: false
      }
    ],
    signatureFood: ['Jadoh (Rice cooked in meat stock)', 'Dohneiiong (Pork with black sesame)', 'Tungrymbai', 'Pukhlein'],
    transitAccess: {
      rail: 'Guwahati Railway Station (100 km away)',
      air: 'Shillong Umroi Airport (SHL), Guwahati (GAU)',
      road: 'NH6 Scenic Mountain Highway'
    },
    unescoSites: ['Living Root Bridges Cultural Landscape (Tentative list)']
  },
  {
    id: 'sikkim',
    name: 'Sikkim',
    region: 'North-East',
    capital: 'Gangtok',
    tagline: 'Kanchenjunga Peaks & Monastic Thangkas',
    heroImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
    description: 'India’s first 100% organic state, guarded by Mount Kanchenjunga, high-altitude sacred lakes, and vibrant Tibetan Buddhist monasteries.',
    craft: {
      name: 'Lepcha Weaves & Buddhist Thangka Scrolls',
      category: 'Paintings',
      description: 'Sacred Buddhist scroll paintings made on cotton or silk appliqué using ground mineral pigments and 24K gold dust depicting cosmic mandalas.',
      history: 'Dating back to the 8th century, preserved by the Nyingma and Kagyu Buddhist monastic lineages.',
      giTagYear: 2021,
      giTagCertified: true,
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
      artisanCenter: 'Rumtek & Gangtok Institute of Tibetology',
      priceRange: '₹3,000 – ₹55,000',
      authenticityTip: 'True Thangkas strictly follow geometric iconometric proportions laid down in Buddhist treatises (Iconometry).'
    },
    bestMonths: 'Mar – May & Oct – Dec',
    stayCostPerNight: '₹2,400/n',
    dailyBudgetEstimate: 3600,
    topAttractions: ['Rumtek & Enchey Monasteries', 'Gurudongmar Sacred Lake', 'Nathu La Pass (Indo-China Border)', 'Yumthang Valley of Flowers'],
    attractions: [
      {
        name: 'Rumtek Dharma Chakra Centre',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
        category: 'Temple & Spiritual',
        description: 'The seat of His Holiness the Gyalwang Karmapa, featuring golden stupas, rare Tibetan scriptures, and painted silk wall murals.',
        timings: '06:00 AM – 06:00 PM',
        entryFee: '₹10',
        unescoCertified: false
      },
      {
        name: 'Gurudongmar High Altitude Sacred Lake',
        image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80',
        category: 'Nature & Landscape',
        description: 'One of the highest lakes in the world at 17,800 feet, sacred to both Buddhists and Sikhs, surrounded by snow-capped glacial peaks.',
        timings: '07:00 AM – 01:00 PM (Requires Protected Area Permit)',
        entryFee: 'Permit via registered travel operator',
        unescoCertified: false
      },
      {
        name: 'Nathu La Pass & Old Silk Route',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
        category: 'Nature & Landscape',
        description: 'Dramatic Indo-China mountain border post at 14,140 feet on the ancient Silk Route connecting Lhasa to the ports of Bengal.',
        timings: '08:00 AM – 03:00 PM (Wed to Sun)',
        entryFee: '₹200 (Vehicle Permit for Indian Citizens only)',
        unescoCertified: false
      },
      {
        name: 'Yumthang Valley of Flowers (Lachung)',
        image: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80',
        category: 'Nature & Landscape',
        description: 'Grazing pasture surrounded by the Himalayan mountains where over 24 species of wild Rhododendrons bloom in spring.',
        timings: '06:00 AM – 05:00 PM',
        entryFee: '₹50 (Sanctuary Entry)',
        unescoCertified: true
      }
    ],
    signatureFood: ['Momos & Thukpa', 'Gundruk Soup', 'Phagshapa (Pork with radishes)', 'Chhurpi Cheese'],
    transitAccess: {
      rail: 'New Jalpaiguri (NJP) 120 km, upcoming Sevoke-Rangpo line',
      air: 'Pakyong Airport (PYG), Bagdogra (IXB)',
      road: 'NH10 Teesta River Corridor'
    },
    unescoSites: ['Khangchendzonga National Park (Mixed World Heritage)']
  },
  {
    id: 'madhya-pradesh',
    name: 'Madhya Pradesh',
    region: 'Central',
    capital: 'Bhopal',
    tagline: 'Chanderi Weaves & Gond Tribal Art',
    heroImage: 'https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=1200&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1600&q=80',
    description: 'The heart of India featuring Khajuraho erotic temples, Sanchi Buddhist stupas, tiger reserves of Kanha, and whisper-light Chanderi gossamer fabrics.',
    craft: {
      name: 'Chanderi Weaves & Gond Folk Art',
      category: 'Textiles',
      description: 'Gossamer-light fabric woven by intertwining silk and fine cotton yarns with traditional gold zari booti motifs, plus vibrant dotted Gond canvas art.',
      history: 'Mentioned by the Persian scholar Al-Biruni in the 13th century and nurtured by Scindia royalty.',
      giTagYear: 2005,
      giTagCertified: true,
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
      artisanCenter: 'Chanderi & Dindori',
      priceRange: '₹2,500 – ₹40,000',
      authenticityTip: 'Chanderi has a transparent sheen and featherlight feel that emits a distinct delicate rustle when folded.'
    },
    bestMonths: 'Oct – Mar',
    stayCostPerNight: '₹2,100/n',
    dailyBudgetEstimate: 3000,
    topAttractions: ['Khajuraho Group of Monuments', 'Sanchi Stupa', 'Bandhavgarh & Kanha Tiger Reserves', 'Gwalior Fort', 'Bhimbetka Rock Shelters'],
    attractions: [
      {
        name: 'Khajuraho Group of Monuments',
        image: 'https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=800&q=80',
        category: 'Monument',
        description: 'Chandela dynasty sandstone temples celebrated worldwide for exquisite sculptures of gods, celestial nymphs (apsaras), and intricate erotic panels.',
        timings: '06:00 AM – 06:00 PM (Light & Sound 06:30 PM)',
        entryFee: '₹40 (Indians), ₹600 (Foreigners)',
        unescoCertified: true
      },
      {
        name: 'Great Stupa at Sanchi',
        image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
        category: 'Monument',
        description: 'Oldest stone structure in India commissioned by Emperor Ashoka in the 3rd century BC, crowned by four intricately carved ceremonial gateways (Toranas).',
        timings: '06:30 AM – 06:30 PM',
        entryFee: '₹40 (Indians), ₹600 (Foreigners)',
        unescoCertified: true
      },
      {
        name: 'Bandhavgarh & Kanha Tiger Reserves',
        image: 'https://images.unsplash.com/photo-1615886753866-79396abc446e?auto=format&fit=crop&w=800&q=80',
        category: 'Wildlife',
        description: 'The jungle setting that inspired Rudyard Kipling’s The Jungle Book, boasting the highest tiger density in India across sal forests and grasslands.',
        timings: 'Safari: 06:00 AM – 10:30 AM, 02:30 PM – 06:00 PM',
        entryFee: '₹2,500 – ₹7,000 per safari vehicle',
        unescoCertified: false
      },
      {
        name: 'Gwalior Fort (Pearl of Indian Fortresses)',
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
        category: 'Palace & Fort',
        description: 'Imposing 8th-century hilltop citadel featuring turquoise ceramic tile friezes of ducks and elephants at the Man Mandir Palace.',
        timings: '08:00 AM – 06:00 PM',
        entryFee: '₹75 (Indians), ₹250 (Foreigners)',
        unescoCertified: false
      }
    ],
    signatureFood: ['Poha Jalebi', 'Bhopali Gosht Korma', 'Dal Bafla', 'Bhutte Ka Kees'],
    transitAccess: {
      rail: 'Vande Bharat Express (Bhopal-Delhi, Bhopal-Jabalpur, Indore-Bhopal)',
      air: 'Raja Bhoj Airport Bhopal (BHO), Devi Ahilya Bai Holkar Indore (IDR)',
      road: 'NH46 Central Corridor'
    },
    unescoSites: ['Khajuraho Group of Monuments', 'Buddhist Monuments at Sanchi', 'Rock Shelters of Bhimbetka']
  },
  {
    id: 'telangana',
    name: 'Telangana',
    region: 'South',
    capital: 'Hyderabad',
    tagline: 'Pochampally Ikat & Royal Bidriware',
    heroImage: 'https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&w=1200&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80',
    description: 'Relive the grandeur of the Nizams in Hyderabad, the 800-year-old Ramappa floating-brick temple, and geometric Pochampally Ikat silk weaves.',
    craft: {
      name: 'Pochampally Ikat & Bidriware',
      category: 'Textiles',
      description: 'Double Ikat technique where warp and weft threads are tie-dyed with mathematical precision prior to weaving to form intricate chevron and floral grids.',
      history: 'Known as Boodhan Pochampally, named UNWTO Best Tourism Village for living silk heritage.',
      giTagYear: 2005,
      giTagCertified: true,
      image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80',
      artisanCenter: 'Pochampally Silk City & Hyderabad Old City',
      priceRange: '₹3,200 – ₹45,000',
      authenticityTip: 'Double Ikat shows identically vivid colors and sharp geometric edges on both sides without reverse fading.'
    },
    bestMonths: 'Oct – Mar',
    stayCostPerNight: '₹2,200/n',
    dailyBudgetEstimate: 3300,
    topAttractions: ['Charminar & Laad Bazaar', 'Golconda Fort Sound & Light', 'Ramappa Temple (UNESCO)', 'Chowmahalla Palace'],
    attractions: [
      {
        name: 'Charminar & Laad Bazaar (Hyderabad)',
        image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&w=800&q=80',
        category: 'Monument',
        description: '1591 monument with four 56-meter stucco minarets built by Quli Qutb Shah, surrounded by the historic pearl and lac bangle markets.',
        timings: '09:30 AM – 05:30 PM',
        entryFee: '₹25 (Indians), ₹300 (Foreigners)',
        unescoCertified: false
      },
      {
        name: 'Golconda Fort & Acoustic Whispering Gallery',
        image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80',
        category: 'Palace & Fort',
        description: 'Diamond capital of ancient India where the Koh-i-Noor and Hope diamonds were traded, famed for acoustic clapping signals that travel a kilometer uphill.',
        timings: '09:00 AM – 05:30 PM (Sound & Light Show 06:30 PM)',
        entryFee: '₹25 (Indians), ₹300 (Foreigners)',
        unescoCertified: false
      },
      {
        name: 'Ramappa Temple (Kakatiya Rudreshwara)',
        image: 'https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=800&q=80',
        category: 'Temple & Spiritual',
        description: '800-year-old architectural wonder built with lightweight floating bricks, sandbox foundations, and carved black basalt bracket dancer figures.',
        timings: '06:00 AM – 06:00 PM',
        entryFee: 'Free',
        unescoCertified: true
      },
      {
        name: 'Chowmahalla Palace of the Nizams',
        image: 'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?auto=format&fit=crop&w=800&q=80',
        category: 'Palace & Fort',
        description: 'Opulent neo-classical palace of the Asaf Jahi dynasty, boasting grand Belgian crystal chandeliers and the Nizam’s collection of vintage Rolls Royces.',
        timings: '10:00 AM – 05:00 PM (Closed Fridays)',
        entryFee: '₹100 (Indians), ₹400 (Foreigners)',
        unescoCertified: false
      }
    ],
    signatureFood: ['Hyderabadi Dum Biryani', 'Haleem', 'Double Ka Meetha', 'Mirchi Ka Salan'],
    transitAccess: {
      rail: 'Vande Bharat Express (Secunderabad-Tirupati, Secunderabad-Visakhapatnam)',
      air: 'Rajiv Gandhi International Hyderabad (HYD)',
      road: 'Outer Ring Road & NH44'
    },
    unescoSites: ['Kakatiya Rudreshwara (Ramappa) Temple']
  },
  {
    id: 'andhra-pradesh',
    name: 'Andhra Pradesh',
    region: 'South',
    capital: 'Amaravati / Visakhapatnam',
    tagline: 'Kalamkari Hand Painting & Kondapalli Toys',
    heroImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=1600&q=80',
    description: 'Explore the spiritual sanctum of Tirumala Hills, Borra Caves, and the centuries-old organic bamboo pen (kalam) textile art.',
    craft: {
      name: 'Srikalahasti Kalamkari & Kondapalli Toys',
      category: 'Paintings',
      description: 'Hand-drawn mythological paintings done on pure cotton treated with milk and rust iron liquid using a tamarind twig bamboo pen.',
      history: 'Patronized by Vijayanagara kings to adorn temple canopies, chariots, and sanctum banners.',
      giTagYear: 2006,
      giTagCertified: true,
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
      artisanCenter: 'Srikalahasti & Machilipatnam',
      priceRange: '₹1,500 – ₹32,000',
      authenticityTip: 'True Srikalahasti Kalamkari utilizes zero synthetic chemicals and gives off a faint organic smell of fermented jaggery and myrobalan.'
    },
    bestMonths: 'Nov – Feb',
    stayCostPerNight: '₹2,000/n',
    dailyBudgetEstimate: 2900,
    topAttractions: ['Tirupati Balaji Temple', 'Araku Valley Coffee Plantations', 'Borra Caves', 'Lepakshi Temple (Hanging Pillar)'],
    attractions: [
      {
        name: 'Tirumala Venkateswara (Tirupati Balaji) Temple',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
        category: 'Temple & Spiritual',
        description: 'World’s most visited pilgrimage shrine nestled in the seven peaks of Seshachalam Hills, renowned for golden Ananda Nilayam vimana and Tirupati Laddu.',
        timings: '03:00 AM – 11:30 PM (Varies by seva schedule)',
        entryFee: 'Free (Special Entry Darshan ₹300)',
        unescoCertified: false
      },
      {
        name: 'Araku Valley & Coffee Plantations',
        image: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=800&q=80',
        category: 'Nature & Landscape',
        description: 'Hill station tucked in the Eastern Ghats, famous for organic tribal Arabica coffee estates, Chaparai waterfalls, and the Dhimsa tribal dance.',
        timings: 'Open 24 hours (Coffee Museum 09:00 AM – 06:00 PM)',
        entryFee: '₹40 (Museum)',
        unescoCertified: false
      },
      {
        name: 'Borra Caves (Gujjaddi)',
        image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=800&q=80',
        category: 'Nature & Landscape',
        description: 'Million-year-old deep karst limestone caves extending over 80 meters deep with dramatic illuminated stalactites and stalagmites.',
        timings: '10:00 AM – 05:00 PM',
        entryFee: '₹80 (Adults)',
        unescoCertified: false
      },
      {
        name: 'Lepakshi Veerabhadra Temple & Hanging Pillar',
        image: 'https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=800&q=80',
        category: 'Temple & Spiritual',
        description: '16th-century Vijayanagara temple marvel featuring a massive carved Nandi bull and a famous stone pillar that hangs without touching the floor.',
        timings: '06:00 AM – 06:00 PM',
        entryFee: 'Free',
        unescoCertified: false
      }
    ],
    signatureFood: ['Andhra Royyala Iguru', 'Gongura Mutton', 'Pesarattu with Allam Pachadi', 'Pootharekulu'],
    transitAccess: {
      rail: 'Vande Bharat Express (Visakhapatnam-Secunderabad, Vijayawada-Chennai)',
      air: 'Visakhapatnam International (VTZ), Vijayawada (VGA), Tirupati (TIR)',
      road: 'NH16 Coastal Highway'
    },
    unescoSites: ['Monuments of Lepakshi (Tentative list)']
  },
  {
    id: 'uttarakhand',
    name: 'Uttarakhand',
    region: 'North',
    capital: 'Dehradun / Gairsain',
    tagline: 'Devbhoomi & Aipan Folk Art',
    heroImage: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1200&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80',
    description: 'Holy confluences of Rishikesh & Haridwar, glacial source of Ganga, Valley of Flowers, and geometric red-and-white Aipan door art.',
    craft: {
      name: 'Kumaoni Aipan Art & Ringal Bamboo',
      category: 'Paintings',
      description: 'Geometric ritual art drawn with rice flour paste (Biswar) over brick-red ochre (Geru) plaster on thresholds and prayer rooms.',
      history: 'Dating back to the Chand dynasty of Kumaon as ritual geometric diagrams for inviting divine blessings.',
      giTagYear: 2021,
      giTagCertified: true,
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
      artisanCenter: 'Almora & Nainital',
      priceRange: '₹400 – ₹12,000',
      authenticityTip: 'Traditional Aipan features continuous unbroken white rice paste strokes over deep natural terra cotta red.'
    },
    bestMonths: 'Mar – Jun & Sep – Nov',
    stayCostPerNight: '₹2,300/n',
    dailyBudgetEstimate: 3200,
    topAttractions: ['Rishikesh Yoga & Ganga Aarti', 'Valley of Flowers & Hemkund Sahib', 'Kedarnath & Badrinath Temples', 'Jim Corbett National Park', 'Nainital Lake'],
    attractions: [
      {
        name: 'Rishikesh Yoga Ghats & Triveni Aarti',
        image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=800&q=80',
        category: 'Temple & Spiritual',
        description: 'Yoga Capital of the World along the emerald turquoise waters of the Ganga, iconic suspension bridges (Lakshman & Ram Jhula), and evening aartis.',
        timings: 'Ganga Aarti: 06:00 PM – 07:00 PM',
        entryFee: 'Free',
        unescoCertified: false
      },
      {
        name: 'Valley of Flowers National Park',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        category: 'Nature & Landscape',
        description: 'Alpine meadow carpeted with over 500 varieties of wild Himalayan orchids, poppies, and primulas against backdrop of Zanskar peaks.',
        timings: '07:00 AM – 05:00 PM (Open Jun to Oct)',
        entryFee: '₹150 (Indians), ₹600 (Foreigners)',
        unescoCertified: true
      },
      {
        name: 'Kedarnath Himalayan Shrine',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
        category: 'Temple & Spiritual',
        description: 'One of the twelve sacred Jyotirlingas of Lord Shiva standing strong at 11,755 feet, flanked by the snow-capped Kedarnath peak.',
        timings: '05:00 AM – 09:00 PM (May to Nov)',
        entryFee: 'Free (Trek/Heli charges apply)',
        unescoCertified: false
      },
      {
        name: 'Jim Corbett Tiger Reserve',
        image: 'https://images.unsplash.com/photo-1615886753866-79396abc446e?auto=format&fit=crop&w=800&q=80',
        category: 'Wildlife',
        description: 'India’s oldest national park (established 1936), famous for the Dhikala grassland zone, wild Asian elephants, and Bengal tigers.',
        timings: 'Safaris: 06:00 AM – 09:30 AM, 02:30 PM – 06:00 PM',
        entryFee: '₹2,000 – ₹5,500 per jeep permit',
        unescoCertified: false
      }
    ],
    signatureFood: ['Kafli', 'Bhatt ki Churkani', 'Bal Mithai with Sugar Balls', 'Singori'],
    transitAccess: {
      rail: 'Vande Bharat Express (Delhi-Dehradun)',
      air: 'Jolly Grant Airport Dehradun (DED), Pantnagar (PGH)',
      road: 'Delhi-Dehradun Expressway'
    },
    unescoSites: ['Nanda Devi and Valley of Flowers National Parks']
  },
  {
    id: 'goa',
    name: 'Goa',
    region: 'West',
    capital: 'Panaji',
    tagline: 'Kunbi Tribal Weaves & Portuguese Azulejos',
    heroImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80',
    description: 'Golden sandy shores, 16th century Basilica churches of Velha Goa, handcrafted painted ceramic tiles, and earthy red-and-white Kunbi sarees.',
    craft: {
      name: 'Kunbi Saree Weaving & Azulejos Tiles',
      category: 'Textiles',
      description: 'Traditional cotton checkered saree woven with bold checks in earthy terracotta red and yellow, designed for agricultural movement.',
      history: 'Worn by the indigenous Kunbi and Gauda tribes before the Portuguese era, revived by Goan designers.',
      giTagYear: 2021,
      giTagCertified: true,
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
      artisanCenter: 'Fontainhas Panaji & Quepem',
      priceRange: '₹2,000 – ₹16,000',
      authenticityTip: 'Genuine Kunbi sarees are 100% thick handloom cotton with solid contrast borders and large check grids.'
    },
    bestMonths: 'Nov – Feb',
    stayCostPerNight: '₹3,000/n',
    dailyBudgetEstimate: 4500,
    topAttractions: ['Basilica of Bom Jesus', 'Fontainhas Latin Quarter', 'Dudhsagar Waterfalls', 'Palolem & Anjuna Beaches', 'Aguada Fort'],
    attractions: [
      {
        name: 'Basilica of Bom Jesus (Old Goa)',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
        category: 'Monument',
        description: '16th-century Baroque church preserving the sacred relics of St. Francis Xavier inside a three-tiered silver casket.',
        timings: '09:00 AM – 06:30 PM (Sundays from 10:30 AM)',
        entryFee: 'Free',
        unescoCertified: true
      },
      {
        name: 'Fontainhas Latin Quarter (Panaji)',
        image: 'https://images.unsplash.com/photo-1609137144822-0d5b12ee6499?auto=format&fit=crop&w=800&q=80',
        category: 'Heritage & Culture',
        description: 'Vibrant Portuguese heritage precinct with narrow cobblestone alleys, pastel-painted colonial villas, oyster-shell windows, and ceramic tile galleries.',
        timings: 'Open 24 hours',
        entryFee: 'Free',
        unescoCertified: false
      },
      {
        name: 'Dudhsagar Four-Tier Waterfall',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        category: 'Nature & Landscape',
        description: 'Spectacular "Sea of Milk" waterfall cascading 310 meters through the Bhagwan Mahaveer Sanctuary, crossed by the railway bridge.',
        timings: '08:30 AM – 04:30 PM (Safari season Oct-May)',
        entryFee: '₹500 – ₹700 (Jeep Safari)',
        unescoCertified: false
      },
      {
        name: 'Palolem & Cabo de Rama Beach',
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
        category: 'Nature & Landscape',
        description: 'Crescent-shaped white sand bay flanked by coconut palms, wooden beach shacks, kayak paddling to Butterfly Island, and Portuguese cliff fort.',
        timings: 'Open 24 hours',
        entryFee: 'Free',
        unescoCertified: false
      }
    ],
    signatureFood: ['Goan Fish Curry with Rice', 'Pork Vindaloo', 'Bebinca Layer Cake', 'Feni & Pao'],
    transitAccess: {
      rail: 'Vande Bharat Express (Mumbai-Goa, Bengaluru-Goa)',
      air: 'Manohar International Airport Mopa (GOX), Dabolim (GOI)',
      road: 'NH66 Coastal Highway'
    },
    unescoSites: ['Churches and Convents of Goa']
  },
  {
    id: 'bihar',
    name: 'Bihar',
    region: 'East',
    capital: 'Patna',
    tagline: 'Madhubani Painting & Ancient Nalanda',
    heroImage: 'https://images.unsplash.com/photo-1627894006066-b456190e82c5?auto=format&fit=crop&w=1200&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1600&q=80',
    description: 'Practiced in the Mithila region, characterized by eye-catching geometrical patterns, natural mineral pigments, and representations of flora and cosmic rituals.',
    craft: {
      name: 'Madhubani (Mithila) Painting',
      category: 'Paintings',
      description: 'Created using twigs, fingers, brushes, nib-pens, and matchsticks using natural dyes derived from turmeric, indigo, kusum flowers, and soot.',
      history: 'Originates from King Janaka commissioning artists to capture the marriage of his daughter Sita to Lord Rama in the Ramayana.',
      giTagYear: 2007,
      giTagCertified: true,
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
      artisanCenter: 'Jitwarpur & Ranti villages (Madhubani)',
      priceRange: '₹800 – ₹20,000',
      authenticityTip: 'Authentic Madhubani paintings show no empty gaps—artists fill spaces with intricate birds, fish, floral motifs, and geometric grids.'
    },
    bestMonths: 'Nov – Feb',
    stayCostPerNight: '₹1,600/n',
    dailyBudgetEstimate: 2300,
    topAttractions: ['Mahabodhi Temple Complex Bodh Gaya', 'Ruins of Nalanda University', 'Rajgir Glass Bridge & Ropeway', 'Vikramshila'],
    attractions: [
      {
        name: 'Mahabodhi Temple Complex (Bodh Gaya)',
        image: 'https://images.unsplash.com/photo-1627894006066-b456190e82c5?auto=format&fit=crop&w=800&q=80',
        category: 'Temple & Spiritual',
        description: 'The supreme place of Buddhist pilgrimage where Prince Siddhartha Gautama sat under the sacred Bodhi Tree and attained supreme enlightenment.',
        timings: '05:00 AM – 09:00 PM',
        entryFee: 'Free (Camera permit ₹100)',
        unescoCertified: true
      },
      {
        name: 'Ruins of Nalanda Mahavihara (Ancient University)',
        image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
        category: 'Monument',
        description: 'Excavated red-brick ruins of the 5th-century international residential university that once housed 10,000 monks and scholars like Xuanzang.',
        timings: '09:00 AM – 05:00 PM',
        entryFee: '₹40 (Indians), ₹600 (Foreigners)',
        unescoCertified: true
      },
      {
        name: 'Rajgir Vishwa Shanti Stupa & Glass Bridge',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
        category: 'Monument',
        description: 'Brilliant white Peace Pagoda atop Ratnagiri Hill accessed by single-chair aerial ropeway, and the modern transparent skywalk glass bridge.',
        timings: '09:00 AM – 05:00 PM',
        entryFee: '₹100 (Ropeway), ₹125 (Glass Bridge)',
        unescoCertified: false
      },
      {
        name: 'Vikramshila Ancient Buddhist University',
        image: 'https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=800&q=80',
        category: 'Monument',
        description: 'One of the two most important centers of learning in India during the Pala Empire, featuring a monumental cruciform central stupa.',
        timings: '08:30 AM – 05:30 PM (Closed Fridays)',
        entryFee: '₹25 (Indians), ₹300 (Foreigners)',
        unescoCertified: false
      }
    ],
    signatureFood: ['Litti Chokha', 'Sattu Paratha', 'Khaja', 'Thekua'],
    transitAccess: {
      rail: 'Vande Bharat Express (Patna-Howrah, Patna-Ranchi)',
      air: 'Jay Prakash Narayan Airport Patna (PAT), Gaya Airport (GAY)',
      road: 'NH31 & Purvanchal Connectivity'
    },
    unescoSites: ['Mahabodhi Temple Complex', 'Archaeological Site of Nalanda Mahavihara']
  }
];

export const REGIONS_LIST = ['All Regions', 'North', 'South', 'East', 'West', 'North-East', 'Central'] as const;
