/**
 * ============================================================================
 * ZAMEEN — LIGHT LUXURY REAL ESTATE MARKETPLACE
 * Core Application Engine & State Controller (zameen.js)
 * ============================================================================
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 01. PROPERTY DATA MODEL & 4-ANGLE HIGH-RES DATASET
  // --------------------------------------------------------------------------
  const DEFAULT_PROPERTIES = [
    {
      id: 'ZAM-101',
      title: 'Architectural Contemporary Luxury Villa',
      type: 'Villa',
      category: 'Residential',
      purpose: 'sale',
      price: 65000000, // PKR 6.5 Crore
      city: 'Lahore',
      location: 'DHA Phase 6, Sector J',
      address: 'Plot 142, Block J, DHA Phase 6, Lahore',
      area: 20, // 1 Kanal (20 Marla)
      areaUnit: 'Marla',
      sqft: 4500,
      bedrooms: 5,
      bathrooms: 6,
      parking: 3,
      yearBuilt: 2024,
      featured: true,
      verified: true,
      status: 'Published',
      views: 1840,
      images: [
        './image/villa-luxury.jpg',          // Angle 1: Front Façade & Twilight Architecture
        './image/villa-terrace.jpg',         // Angle 2: Rooftop Pool & Sun Terrace
        './image/house-interior-living.jpg', // Angle 3: Double-Height Living Salon
        './image/flat-luxury-kitchen.jpg'    // Angle 4: Italian Designer Show Kitchen
      ],
      angleTitles: [
        'Exterior & Architecture',
        'Terrace & Plunge Pool',
        'Grand Living Salon',
        'Italian Fitted Kitchen'
      ],
      description: 'An exceptional state-of-the-art designer villa crafted with imported Spanish porcelain tiles, bespoke Turkish fittings, and high-efficiency double-glazed panoramic windows. Features a grand double-height lobby, Italian designer show kitchen with dirty kitchen, home automation, and landscaped patio.',
      amenities: ['Parking', 'Garden', 'Terrace', 'Security', 'Electricity', 'Gas', 'Water', 'Road Access', 'Pool'],
      furnishing: 'Furnished',
      agent: {
        name: 'Muhammad Ibraheem',
        role: 'Principal Realtor & Partner',
        agency: 'Zameen Signature Realty',
        phone: '+92 300 1234567',
        whatsapp: '+923001234567',
        avatar: './image/agent-avatar1.png'
      }
    },
    {
      id: 'ZAM-102',
      title: 'Modern High-Rise Luxury Penthouse with Terrace',
      type: 'Penthouse',
      category: 'Residential',
      purpose: 'sale',
      price: 48000000, // PKR 4.8 Crore
      city: 'Islamabad',
      location: 'Sector F-10, Silver Oaks',
      address: 'Tower A, Floor 14, Silver Oaks Residences, Islamabad',
      area: 8,
      areaUnit: 'Marla',
      sqft: 3400,
      bedrooms: 4,
      bathrooms: 5,
      parking: 2,
      yearBuilt: 2023,
      featured: true,
      verified: true,
      status: 'Published',
      views: 2210,
      images: [
        './image/penthouse-luxury.jpg',     // Angle 1: Panoramic Skyline Terrace
        './image/flat-luxury-living.jpg',    // Angle 2: Modern Designer Lounge
        './image/flat-luxury-bed.jpg',       // Angle 3: Master Bedroom Suite
        './image/apartments-skyline.avif'    // Angle 4: Residential High-Rise Tower
      ],
      angleTitles: [
        'Panoramic Terrace View',
        'Open-Concept Living Area',
        'Master Suite with View',
        'Tower Exterior & Grounds'
      ],
      description: 'Perched high above the capital city with uninterrupted views of the Margalla Hills. This luxury penthouse offers private elevator access, expansive wraparound entertainment terrace, private plunge pool, and smart ambient lighting throughout.',
      amenities: ['Parking', 'Terrace', 'Pool', 'Elevator', 'Security', 'Electricity', 'Gas', 'Water'],
      furnishing: 'Furnished',
      agent: {
        name: 'Ayesha Khan',
        role: 'Senior Portfolio Advisor',
        agency: 'Capital Asset Advisory',
        phone: '+92 312 9876543',
        whatsapp: '+923129876543',
        avatar: './image/agent-female.jpg'
      }
    },
    {
      id: 'ZAM-103',
      title: 'Prime 1 Kanal Residential Plot in Gated Community',
      type: 'Plot',
      category: 'Land',
      purpose: 'sale',
      price: 28500000, // PKR 2.85 Crore
      city: 'Multan',
      location: 'DHA Multan, Sector A',
      address: 'Sector A, Near Main Boulevard, DHA Multan',
      area: 20,
      areaUnit: 'Marla',
      sqft: 4500,
      bedrooms: 0,
      bathrooms: 0,
      parking: 0,
      yearBuilt: 2024,
      featured: true,
      verified: true,
      status: 'Published',
      views: 1420,
      images: [
        './image/land-drone.webp',       // Angle 1: High-Altitude Drone Boundary
        './image/plot-land.jpg',         // Angle 2: Demarcated Park Facing Plot
        './image/farmland-aerial.jpg',   // Angle 3: Community Sector Overview
        './image/orchard-land.jpg'       // Angle 4: Landscaping & Horizon View
      ],
      angleTitles: [
        'Aerial Boundary Demarcation',
        'Ground Plot View & Road',
        'Sector Master Plan View',
        'Green Belt Surroundings'
      ],
      description: 'Rare opportunity to acquire a prime corner plot facing a lush community park in DHA Multan Sector A. Direct road access via a 60-foot wide boulevard. Ready for immediate construction with all underground utilities installed and verified title deeds.',
      amenities: ['Road Access', 'Security', 'Electricity', 'Gas', 'Water', 'Green Area'],
      furnishing: 'Unfurnished',
      agent: {
        name: 'Hamza Tariq',
        role: 'Land & Acquisition Specialist',
        agency: 'Apex Land Ventures',
        phone: '+92 333 4567890',
        whatsapp: '+923334567890',
        avatar: './image/agent-male.jpg'
      }
    },
    {
      id: 'ZAM-104',
      title: 'Executive Corporate Office Floor in Blue Area',
      type: 'Office',
      category: 'Commercial',
      purpose: 'rent',
      price: 750000, // PKR 7.5 Lac/mo
      city: 'Islamabad',
      location: 'Blue Area, Jinnah Avenue',
      address: 'The Centaurus Corporate Tower, 8th Floor, Islamabad',
      area: 12,
      areaUnit: 'Marla',
      sqft: 2800,
      bedrooms: 0,
      bathrooms: 3,
      parking: 4,
      yearBuilt: 2022,
      featured: true,
      verified: true,
      status: 'Published',
      views: 1930,
      images: [
        './image/office-commercial.jpg',  // Angle 1: Open Workstation Floor
        './image/office-boardroom.jpg',   // Angle 2: Executive Boardroom
        './image/office-building.jpg',    // Angle 3: Plaza Tower Architecture
        './image/commercial-towers.avif'  // Angle 4: Blue Area Financial Strip
      ],
      angleTitles: [
        'Open Collaboration Floor',
        'Executive Glass Boardroom',
        'Plaza Tower Façade',
        'Blue Area Commercial Strip'
      ],
      description: 'Fully furnished, high-tech corporate office floor engineered for multinational headquarters or fintech firms. Features 4 executive boardrooms, open layout for 40+ workstations, biometric security, dedicated server room, and high-speed fiber-optic connectivity.',
      amenities: ['Parking', 'Elevator', 'Security', 'Electricity', 'Water', 'Road Access'],
      furnishing: 'Furnished',
      agent: {
        name: 'Ayesha Khan',
        role: 'Senior Portfolio Advisor',
        agency: 'Capital Asset Advisory',
        phone: '+92 312 9876543',
        whatsapp: '+923129876543',
        avatar: './image/agent-female.jpg'
      }
    },
    {
      id: 'ZAM-105',
      title: 'Designer 10 Marla Family House with Rooftop Garden',
      type: 'House',
      category: 'Residential',
      purpose: 'sale',
      price: 34500000, // PKR 3.45 Crore
      city: 'Lahore',
      location: 'Johar Town, Block G3',
      address: 'House 88, Block G3, Johar Town, Lahore',
      area: 10,
      areaUnit: 'Marla',
      sqft: 2250,
      bedrooms: 4,
      bathrooms: 5,
      parking: 2,
      yearBuilt: 2023,
      featured: false,
      verified: true,
      status: 'Published',
      views: 1650,
      images: [
        './image/house-modern.jpg',          // Angle 1: Contemporary Exterior
        './image/house-interior-living.jpg', // Angle 2: Ambient Living Salon
        './image/flat-luxury-kitchen.jpg',   // Angle 3: Modern Fitted Kitchen
        './image/house-pool.jpg'             // Angle 4: Rooftop Garden & Plunge Pool
      ],
      angleTitles: [
        'Contemporary Front Elevation',
        'Main Living & Lounge',
        'Modular Gourmet Kitchen',
        'Rooftop Garden Patio'
      ],
      description: 'Masterfully built double-story residence with modern minimalist facade. Offers solid ash wood carpentry, imported sanitary fittings, automated roll-up gates, solar net-metering installed (10kW), and a private landscaped rooftop terrace.',
      amenities: ['Parking', 'Garden', 'Balcony', 'Terrace', 'Security', 'Electricity', 'Gas', 'Water'],
      furnishing: 'Furnished',
      agent: {
        name: 'Muhammad Ibraheem',
        role: 'Principal Realtor & Partner',
        agency: 'Zameen Signature Realty',
        phone: '+92 300 1234567',
        whatsapp: '+923001234567',
        avatar: './image/agent-avatar1.png'
      }
    },
    {
      id: 'ZAM-106',
      title: 'Sprawling 25 Acre Agricultural Farmland with Tubewell',
      type: 'Land',
      category: 'Land',
      purpose: 'sale',
      price: 75000000, // PKR 7.5 Crore
      city: 'Multan',
      location: 'Shujabad Road, Near Motorway M-5',
      address: 'Mouza Basti Malook, Shujabad Expressway, Multan',
      area: 500, // 25 Acres
      areaUnit: 'Kanal',
      sqft: 544500,
      bedrooms: 0,
      bathrooms: 0,
      parking: 0,
      yearBuilt: 2024,
      featured: true,
      verified: true,
      status: 'Published',
      views: 980,
      images: [
        './image/farmland-aerial.jpg', // Angle 1: Panoramic Agricultural Fields
        './image/orchard-estate.jpg',  // Angle 2: Orchard & Canal Irrigation
        './image/orchard-land.jpg',    // Angle 3: Sunrise Fertile Acreage
        './image/land-drone.webp'      // Angle 4: Drone Aerial Boundary
      ],
      angleTitles: [
        'Expansive 25-Acre Aerial',
        'Canal Irrigation & Orchard',
        'Fertile Crop Fields',
        'Interchange Road Access'
      ],
      description: 'Extremely fertile agricultural land suitable for commercial mango orchards, grain crops, or modern dairy setup. Comes with 2 active diesel/electric tubewells, direct link to sweet canal water channel, and 40-foot paved road connectivity directly to M-5 interchange.',
      amenities: ['Road Access', 'Electricity', 'Water', 'Green Area'],
      furnishing: 'Unfurnished',
      agent: {
        name: 'Hamza Tariq',
        role: 'Land & Acquisition Specialist',
        agency: 'Apex Land Ventures',
        phone: '+92 333 4567890',
        whatsapp: '+923334567890',
        avatar: './image/agent-male.jpg'
      }
    },
    {
      id: 'ZAM-107',
      title: 'Luxury 3-Bed Serviced Apartment with Ocean Breeze',
      type: 'Apartment',
      category: 'Residential',
      purpose: 'rent',
      price: 260000, // PKR 2.6 Lac/mo
      city: 'Karachi',
      location: 'Clifton Block 4',
      address: 'Creek Vista Towers, Floor 11, Clifton, Karachi',
      area: 6,
      areaUnit: 'Marla',
      sqft: 1950,
      bedrooms: 3,
      bathrooms: 4,
      parking: 2,
      yearBuilt: 2023,
      featured: false,
      verified: true,
      status: 'Published',
      views: 2450,
      images: [
        './image/apartment-interior.jpg',   // Angle 1: Ocean Breeze Living Lounge
        './image/flat-luxury-bed.jpg',       // Angle 2: Luxury Master Suite
        './image/flat-luxury-kitchen.jpg',   // Angle 3: Contemporary Kitchen
        './image/apartments-skyline.avif'    // Angle 4: Clifton High-Rise Towers
      ],
      angleTitles: [
        'Main Living Space',
        'Master Bedroom Suite',
        'Designer Modular Kitchen',
        'Creek Vista High-Rise Towers'
      ],
      description: 'High-floor corner apartment offering sweeping panoramic views. Comes complete with central climate control, modern fitted wardrobes, high-end kitchen appliances, concierge service, and 24/7 power backup.',
      amenities: ['Parking', 'Balcony', 'Elevator', 'Security', 'Electricity', 'Gas', 'Water', 'Kids Play Area'],
      furnishing: 'Furnished',
      agent: {
        name: 'Ayesha Khan',
        role: 'Senior Portfolio Advisor',
        agency: 'Capital Asset Advisory',
        phone: '+92 312 9876543',
        whatsapp: '+923129876543',
        avatar: './image/agent-female.jpg'
      }
    },
    {
      id: 'ZAM-108',
      title: 'Modern Industrial Logistics Warehouse & Depot',
      type: 'Warehouse',
      category: 'Commercial',
      purpose: 'rent',
      price: 1100000, // PKR 11 Lac/mo
      city: 'Lahore',
      location: 'Multan Road, Near Thokar Niaz Baig',
      address: 'Industrial Estate Gate 2, Multan Road, Lahore',
      area: 80, // 4 Kanal
      areaUnit: 'Kanal',
      sqft: 18000,
      bedrooms: 0,
      bathrooms: 4,
      parking: 10,
      yearBuilt: 2022,
      featured: false,
      verified: true,
      status: 'Published',
      views: 890,
      images: [
        './image/warehouse.jpg',          // Angle 1: Industrial Exterior & Docks
        './image/warehouse-interior.jpg', // Angle 2: 32ft High-Cube Storage
        './image/office-building.jpg',    // Angle 3: Management Office Building
        './image/commercial-towers.avif'  // Angle 4: Transit Cargo Corridor
      ],
      angleTitles: [
        'Exterior & Loading Bays',
        'High-Bay Automated Storage',
        'Corporate Admin Office',
        'Highway Logistics Access'
      ],
      description: 'Heavy-duty 18,000 sq.ft industrial storage facility with 32-foot clear ceiling height, 4 hydraulic loading docks, reinforced epoxy flooring, high-voltage industrial electricity connection (100 kVA), and 24/7 dedicated security checkpoint.',
      amenities: ['Parking', 'Security', 'Electricity', 'Water', 'Road Access'],
      furnishing: 'Unfurnished',
      agent: {
        name: 'Muhammad Ibraheem',
        role: 'Principal Realtor & Partner',
        agency: 'Zameen Signature Realty',
        phone: '+92 300 1234567',
        whatsapp: '+923001234567',
        avatar: './image/agent-avatar1.png'
      }
    },
    {
      id: 'ZAM-109',
      title: 'Lavish 4 Kanal Countryside Farmhouse with Pool',
      type: 'Farmhouse',
      category: 'Residential',
      purpose: 'sale',
      price: 115000000, // PKR 11.5 Crore
      city: 'Islamabad',
      location: 'Chak Shahzad, Park Road',
      address: 'Lane 4, Chak Shahzad Country Estates, Islamabad',
      area: 80,
      areaUnit: 'Kanal',
      sqft: 7500,
      bedrooms: 6,
      bathrooms: 7,
      parking: 6,
      yearBuilt: 2023,
      featured: true,
      verified: true,
      status: 'Published',
      views: 3100,
      images: [
        './image/farmhouse.jpg',             // Angle 1: Colonial Country Estate
        './image/house-pool.jpg',            // Angle 2: Heated Pool & Sun Pavilion
        './image/house-interior-living.jpg', // Angle 3: Luxury Fireplace Salon
        './image/farmland-aerial.jpg'        // Angle 4: Landscaped Grounds & Orchards
      ],
      angleTitles: [
        'Estate Front Elevation',
        'Private Swimming Pool',
        'Fireplace Reception Hall',
        '4-Kanal Private Grounds'
      ],
      description: 'Exclusive country living minutes from central Islamabad. Designed for grand family retreats with olympic-style heated swimming pool, manicured lawns, organic orchard, gazebo bbq pavilion, and staff quarters.',
      amenities: ['Parking', 'Garden', 'Terrace', 'Pool', 'Security', 'Electricity', 'Gas', 'Water', 'Road Access', 'Green Area'],
      furnishing: 'Furnished',
      agent: {
        name: 'Ayesha Khan',
        role: 'Senior Portfolio Advisor',
        agency: 'Capital Asset Advisory',
        phone: '+92 312 9876543',
        whatsapp: '+923129876543',
        avatar: './image/agent-female.jpg'
      }
    },
    {
      id: 'ZAM-110',
      title: 'Commercial Plaza Ground Floor Retail Showroom',
      type: 'Commercial',
      category: 'Commercial',
      purpose: 'rent',
      price: 450000, // PKR 4.5 Lac/mo
      city: 'Multan',
      location: 'Gulgasht Colony, Bosan Road',
      address: 'City Center Plaza, Ground Floor, Bosan Road, Multan',
      area: 6,
      areaUnit: 'Marla',
      sqft: 1800,
      bedrooms: 0,
      bathrooms: 2,
      parking: 3,
      yearBuilt: 2024,
      featured: false,
      verified: true,
      status: 'Published',
      views: 1560,
      images: [
        './image/commercial-showroom.jpg', // Angle 1: Boutique Retail Floor Interior
        './image/office-building.jpg',     // Angle 2: Plaza Exterior & Frontage
        './image/office-boardroom.jpg',    // Angle 3: Management Cabin
        './image/commercial-towers.avif'   // Angle 4: Bosan Road Commercial Boulevard
      ],
      angleTitles: [
        'Retail Showroom Floor',
        'Plaza Glass Frontage',
        'Back-Office & Consultation Room',
        'Bosan Road Commercial Strip'
      ],
      description: 'High-visibility corner retail showroom on Bosan Road with 40-foot clear glass frontage and exceptional customer footfall. Ideal for luxury apparel brands, banks, pharmaceutical flagship, or upscale restaurant chains.',
      amenities: ['Parking', 'Security', 'Electricity', 'Water', 'Road Access'],
      furnishing: 'Unfurnished',
      agent: {
        name: 'Hamza Tariq',
        role: 'Land & Acquisition Specialist',
        agency: 'Apex Land Ventures',
        phone: '+92 333 4567890',
        whatsapp: '+923334567890',
        avatar: './image/agent-male.jpg'
      }
    },
    {
      id: 'ZAM-111',
      title: 'Serene 10 Kanal Citrus & Mango Orchard Land',
      type: 'Land',
      category: 'Land',
      purpose: 'sale',
      price: 32000000, // PKR 3.2 Crore
      city: 'Multan',
      location: 'Old Shujabad Road',
      address: 'Near Head Muhammad Wala, Multan',
      area: 200,
      areaUnit: 'Kanal',
      sqft: 217800,
      bedrooms: 0,
      bathrooms: 0,
      parking: 0,
      yearBuilt: 2024,
      featured: false,
      verified: true,
      status: 'Published',
      views: 740,
      images: [
        './image/orchard-land.jpg',    // Angle 1: Sunrise Horizon & Fertile Groves
        './image/orchard-estate.jpg',  // Angle 2: Citrus Trees & Drip Irrigation
        './image/farmland-aerial.jpg', // Angle 3: Canal Access & Drone View
        './image/land-drone.webp'      // Angle 4: Boundary Demarcation Survey
      ],
      angleTitles: [
        'Sunrise Orchard Horizon',
        'Citrus Trees & Irrigation',
        'Canal Access & Drone Survey',
        'Boundary Demarcation'
      ],
      description: 'Established 10 Kanal fruit orchard producing high-yield Chaunsa mangoes and sweet oranges. Equipped with drip irrigation network, perimeter fence, storage shed, and dual water supply.',
      amenities: ['Road Access', 'Electricity', 'Water', 'Green Area'],
      furnishing: 'Unfurnished',
      agent: {
        name: 'Hamza Tariq',
        role: 'Land & Acquisition Specialist',
        agency: 'Apex Land Ventures',
        phone: '+92 333 4567890',
        whatsapp: '+923334567890',
        avatar: './image/agent-male.jpg'
      }
    },
    {
      id: 'ZAM-112',
      title: 'Brand New 5 Marla Executive Double Storey Home',
      type: 'House',
      category: 'Residential',
      purpose: 'sale',
      price: 19500000, // PKR 1.95 Crore
      city: 'Rawalpindi',
      location: 'Bahria Town Phase 8',
      address: 'Street 19, Sector G, Bahria Town Phase 8, Rawalpindi',
      area: 5,
      areaUnit: 'Marla',
      sqft: 1350,
      bedrooms: 3,
      bathrooms: 4,
      parking: 1,
      yearBuilt: 2024,
      featured: false,
      verified: true,
      status: 'Published',
      views: 2100,
      images: [
        './image/house-modern.jpg',          // Angle 1: Modern Front Facade
        './image/house-interior-living.jpg', // Angle 2: Elegant Family Lounge
        './image/flat-luxury-bed.jpg',       // Angle 3: Master Bedroom Suite
        './image/flat-luxury-kitchen.jpg'    // Angle 4: Modern European Kitchen
      ],
      angleTitles: [
        'Modern Double-Storey Facade',
        'Family Lounge & Dining',
        'Master Bedroom Suite',
        'European Modular Kitchen'
      ],
      description: 'Immaculate compact luxury residence featuring double height glass entrance, open American kitchen with granite counters, LED ambient cove ceilings, and separate laundry area in Bahria Phase 8.',
      amenities: ['Parking', 'Balcony', 'Security', 'Electricity', 'Gas', 'Water', 'Kids Play Area'],
      furnishing: 'Unfurnished',
      agent: {
        name: 'Muhammad Ibraheem',
        role: 'Principal Realtor & Partner',
        agency: 'Zameen Signature Realty',
        phone: '+92 300 1234567',
        whatsapp: '+923001234567',
        avatar: './image/agent-avatar1.png'
      }
    }
  ];

  // --------------------------------------------------------------------------
  // 02. STATE MANAGEMENT & LOCAL STORAGE PERSISTENCE
  // --------------------------------------------------------------------------
  const STORAGE_KEYS = {
    FAVORITES: 'zameen_favorites',
    COMPARE: 'zameen_compare',
    USER_PROPERTIES: 'zameen_user_listings',
    INQUIRIES: 'zameen_inquiries',
    BOOKINGS: 'zameen_bookings',
    CURRENCY: 'zameen_currency',
    USER: 'zameen_auth_user'
  };

  const state = {
    allProperties: [],
    filteredProperties: [],
    activeCategoryPill: 'all',
    currency: localStorage.getItem(STORAGE_KEYS.CURRENCY) || 'PKR',
    favorites: JSON.parse(localStorage.getItem(STORAGE_KEYS.FAVORITES) || '[]'),
    compare: JSON.parse(localStorage.getItem(STORAGE_KEYS.COMPARE) || '[]'),
    inquiries: JSON.parse(localStorage.getItem(STORAGE_KEYS.INQUIRIES) || '[]'),
    bookings: JSON.parse(localStorage.getItem(STORAGE_KEYS.BOOKINGS) || '[]'),
    user: JSON.parse(localStorage.getItem(STORAGE_KEYS.USER) || 'null'),
    filters: {
      search: '',
      purpose: 'all',
      category: 'all',
      type: 'all',
      city: 'all',
      minPrice: null,
      maxPrice: null,
      bedrooms: 'any',
      bathrooms: 'any',
      amenities: [],
      verifiedOnly: false,
      furnished: 'any',
      sort: 'newest'
    },
    activeModalProperty: null,
    previewProperty: null,
    currentGalleryIndex: 0
  };

  // Helper: Format Price in PKR or USD
  function formatPrice(amount, purpose) {
    if (state.currency === 'USD') {
      const usdAmount = Math.round(amount / 280);
      const suffix = purpose === 'rent' ? '/mo' : '';
      return `$${usdAmount.toLocaleString('en-US')}${suffix}`;
    }

    if (amount >= 10000000) {
      const crore = (amount / 10000000).toFixed(2).replace(/\.00$/, '');
      const suffix = purpose === 'rent' ? '/mo' : '';
      return `PKR ${crore} Crore${suffix}`;
    } else if (amount >= 100000) {
      const lac = (amount / 100000).toFixed(2).replace(/\.00$/, '');
      const suffix = purpose === 'rent' ? '/mo' : '';
      return `PKR ${lac} Lac${suffix}`;
    } else {
      const suffix = purpose === 'rent' ? '/mo' : '';
      return `PKR ${amount.toLocaleString('en-PK')}${suffix}`;
    }
  }

  // Toast Notifications
  function showToast(message, icon = '✓') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span style="font-weight: bold; color: var(--primary);">${icon}</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // Initialize Properties & Datasets
  function initializeProperties() {
    const savedCustom = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_PROPERTIES) || '[]');
    state.allProperties = [...savedCustom, ...DEFAULT_PROPERTIES];
    applyFilters();
    updateBadges();
    renderDashboard();
    initScrollReveal();
  }

  // --------------------------------------------------------------------------
  // 03. FILTER & SEARCH ENGINE
  // --------------------------------------------------------------------------
  function applyFilters(overrides) {
    if (overrides && typeof overrides === 'object') {
      Object.assign(state.filters, overrides);
      if (overrides.purpose !== undefined) {
        const rad = document.querySelector(`input[name="filter-purpose"][value="${overrides.purpose}"]`);
        if (rad) rad.checked = true;
      }
      if (overrides.city !== undefined) {
        const citySel = document.getElementById('filter-city-select');
        if (citySel) citySel.value = overrides.city;
      }
      if (overrides.type !== undefined) {
        const typeSel = document.getElementById('filter-type-select');
        if (typeSel) typeSel.value = overrides.type;
      }
    }

    state.filteredProperties = state.allProperties.filter((item) => {
      if (state.filters.search.trim()) {
        const q = state.filters.search.toLowerCase().trim();
        const matchesText =
          item.title.toLowerCase().includes(q) ||
          item.city.toLowerCase().includes(q) ||
          item.location.toLowerCase().includes(q) ||
          item.type.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q);
        if (!matchesText) return false;
      }

      if (state.filters.purpose !== 'all') {
        if (item.purpose.toLowerCase() !== state.filters.purpose.toLowerCase()) return false;
      }

      if (state.filters.category !== 'all') {
        if (item.category.toLowerCase() !== state.filters.category.toLowerCase()) return false;
      }

      if (state.filters.type !== 'all') {
        if (item.type.toLowerCase() !== state.filters.type.toLowerCase()) return false;
      }

      if (state.filters.city !== 'all') {
        if (item.city.toLowerCase() !== state.filters.city.toLowerCase()) return false;
      }

      if (state.filters.minPrice !== null && item.price < state.filters.minPrice) return false;
      if (state.filters.maxPrice !== null && item.price > state.filters.maxPrice) return false;

      if (state.filters.bedrooms !== 'any') {
        const minBeds = parseInt(state.filters.bedrooms, 10);
        if (item.bedrooms < minBeds) return false;
      }

      if (state.filters.bathrooms !== 'any') {
        const minBaths = parseInt(state.filters.bathrooms, 10);
        if (item.bathrooms < minBaths) return false;
      }

      if (state.filters.verifiedOnly && !item.verified) return false;

      if (state.filters.furnished !== 'any') {
        if (item.furnishing.toLowerCase() !== state.filters.furnished.toLowerCase()) return false;
      }

      if (state.filters.amenities.length > 0) {
        for (const reqAmenity of state.filters.amenities) {
          if (!item.amenities.includes(reqAmenity)) return false;
        }
      }

      return true;
    });

    sortFilteredProperties();
    renderDiscoveryGrid();
    renderFeaturedGrid();
    renderActiveFilterChips();
  }

  function sortFilteredProperties() {
    switch (state.filters.sort) {
      case 'price-asc':
        state.filteredProperties.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        state.filteredProperties.sort((a, b) => b.price - a.price);
        break;
      case 'area-desc':
        state.filteredProperties.sort((a, b) => (b.sqft || 0) - (a.sqft || 0));
        break;
      case 'popular':
        state.filteredProperties.sort((a, b) => (b.views || 0) - (a.views || 0));
        break;
      case 'oldest':
        state.filteredProperties.sort((a, b) => (a.yearBuilt || 0) - (b.yearBuilt || 0));
        break;
      case 'newest':
      default:
        state.filteredProperties.sort((a, b) => (b.yearBuilt || 0) - (a.yearBuilt || 0));
        break;
    }
  }

  // --------------------------------------------------------------------------
  // 04. RENDER PROPERTY CARDS (WITH CLICKABLE PREVIEWS & 4-ANGLE BADGES)
  // --------------------------------------------------------------------------
  function createPropertyCard(item) {
    const isPreview = item.id === 'PREVIEW';
    const isFav = !isPreview && state.favorites.includes(item.id);
    const isComp = !isPreview && state.compare.includes(item.id);
    const purposeBadgeClass = item.purpose === 'sale' ? 'badge-sale' : 'badge-rent';
    const purposeText = item.purpose === 'sale' ? 'For Sale' : 'For Rent';

    // Typology-aware specifications
    const isLand = item.category === 'Land' || ['Plot', 'Commercial Plot', 'Land', 'Development Land'].includes(item.type);
    const isComm = item.category === 'Commercial' || ['Office', 'Commercial', 'Warehouse'].includes(item.type);

    let specsHtml = `
      <div class="spec-item" title="Area">
        <span class="spec-icon">📐</span>
        <span><strong>${item.area}</strong> ${item.areaUnit}</span>
      </div>
    `;

    if (isLand) {
      specsHtml += `
        <div class="spec-item" title="Road Access">
          <span class="spec-icon">🛣️</span>
          <span>Road Access</span>
        </div>
        <div class="spec-item" title="Demarcated Boundary">
          <span class="spec-icon">📍</span>
          <span>Demarcated</span>
        </div>
      `;
    } else if (isComm) {
      specsHtml += `
        <div class="spec-item" title="Typology">
          <span class="spec-icon">🏢</span>
          <span>${item.type}</span>
        </div>
      `;
      if (item.parking > 0) {
        specsHtml += `
          <div class="spec-item" title="Parking">
            <span class="spec-icon">🚗</span>
            <span><strong>${item.parking}</strong> Cars</span>
          </div>
        `;
      }
    } else {
      if (item.bedrooms > 0) {
        specsHtml += `
          <div class="spec-item" title="Bedrooms">
            <span class="spec-icon">🛏️</span>
            <span><strong>${item.bedrooms}</strong> Beds</span>
          </div>
        `;
      }
      if (item.bathrooms > 0) {
        specsHtml += `
          <div class="spec-item" title="Bathrooms">
            <span class="spec-icon">🚿</span>
            <span><strong>${item.bathrooms}</strong> Baths</span>
          </div>
        `;
      }
      if (item.parking > 0) {
        specsHtml += `
          <div class="spec-item" title="Parking">
            <span class="spec-icon">🚗</span>
            <span><strong>${item.parking}</strong> Cars</span>
          </div>
        `;
      }
    }

    return `
      <article class="property-card" data-id="${item.id}">
        <!-- Clickable Media Container -->
        <div class="property-media" onclick="ZameenApp.openPropertyModal('${item.id}')" title="Click to view 4-angle gallery & full specifications" style="cursor: pointer;">
          <img src="${item.images[0]}" alt="${item.title}" class="property-img" loading="lazy" onerror="this.src='./image/villa-luxury.jpg'">
          
          <!-- Hover Preview Trigger Overlay -->
          <div class="media-hover-overlay">
            <span class="media-preview-badge">${isPreview ? 'Preview 4-Angle Gallery ↗' : 'Preview'}</span>
          </div>

          <div class="property-badges-left">
            <span class="badge ${purposeBadgeClass}">${purposeText}</span>
            ${item.featured ? '<span class="badge badge-featured">★ Featured</span>' : ''}
            ${item.verified ? '<span class="badge badge-verified">✓ Verified</span>' : ''}
          </div>

          <div class="property-actions-right">
            <button class="card-action-btn ${isFav ? 'active-favorite' : ''}" title="${isPreview ? 'Listing Live Preview' : 'Save Property'}" onclick="ZameenApp.toggleFavorite('${item.id}', event)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </button>
            <button class="card-action-btn ${isComp ? 'active-compare' : ''}" title="${isPreview ? 'View 4-Angle Gallery' : 'Compare Property'}" onclick="ZameenApp.toggleCompare('${item.id}', event)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"></path></svg>
            </button>
          </div>
        </div>

        <div class="property-body">
          <div class="property-price-row">
            <span class="property-price">${formatPrice(item.price, item.purpose)}</span>
            <span class="property-type-tag">${item.type}</span>
          </div>

          <h3 class="property-title" onclick="ZameenApp.openPropertyModal('${item.id}')" title="${item.title}" style="cursor: pointer;">
            ${item.title}
          </h3>

          <div class="property-location">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span>${item.location}, ${item.city}</span>
          </div>

          <div class="property-specs">
            ${specsHtml}
          </div>

          <div class="property-footer">
            <div class="agent-mini">
              <img src="${item.agent.avatar}" alt="${item.agent.name}" class="agent-mini-avatar" onerror="this.src='./image/agent-avatar1.png'">
              <div>
                <div class="agent-mini-name">${item.agent.name}</div>
                <div class="agent-mini-agency">${item.agent.agency}</div>
              </div>
            </div>
            <button class="btn btn-secondary btn-sm" onclick="event.stopPropagation(); ZameenApp.openPropertyModal('${item.id}')" style="cursor: pointer;">View Details</button>
          </div>
        </div>
      </article>
    `;
  }

  // --------------------------------------------------------------------------
  // 05. RENDER DISCOVERY & FEATURED GRIDS
  // --------------------------------------------------------------------------
  function renderDiscoveryGrid() {
    const container = document.getElementById('discovery-properties-grid');
    const countEl = document.getElementById('results-count-text');
    if (!container) return;

    if (countEl) {
      countEl.innerHTML = `Showing <strong>${state.filteredProperties.length}</strong> of <strong>${state.allProperties.length}</strong> properties`;
    }

    if (state.filteredProperties.length === 0) {
      container.innerHTML = `
        <div class="empty-state-box" style="grid-column: 1 / -1;">
          <div class="empty-icon">🔍</div>
          <h3 class="empty-title">No properties match your current filters</h3>
          <p class="empty-desc">Try clearing selected filters, broadening your price range, or searching for a different city.</p>
          <button class="btn btn-primary" onclick="ZameenApp.resetAllFilters()">Reset All Filters</button>
        </div>
      `;
      return;
    }

    container.innerHTML = state.filteredProperties.map(createPropertyCard).join('');
  }

  function renderFeaturedGrid() {
    const container = document.getElementById('featured-properties-grid');
    if (!container) return;

    let items = state.allProperties.filter((p) => p.featured);
    if (state.activeCategoryPill !== 'all') {
      items = items.filter((p) => p.type.toLowerCase() === state.activeCategoryPill.toLowerCase() || p.category.toLowerCase() === state.activeCategoryPill.toLowerCase());
    }

    if (items.length === 0) {
      items = state.allProperties.slice(0, 6);
    }

    container.innerHTML = items.slice(0, 6).map(createPropertyCard).join('');
  }

  function renderActiveFilterChips() {
    const container = document.getElementById('active-filters-container');
    if (!container) return;

    const chips = [];

    if (state.filters.search) {
      chips.push({ label: `"${state.filters.search}"`, clear: () => { state.filters.search = ''; const el = document.getElementById('discovery-search-input'); if (el) el.value = ''; } });
    }
    if (state.filters.purpose !== 'all') {
      chips.push({ label: `Purpose: ${state.filters.purpose.toUpperCase()}`, clear: () => { state.filters.purpose = 'all'; } });
    }
    if (state.filters.category !== 'all') {
      chips.push({ label: `Category: ${state.filters.category}`, clear: () => { state.filters.category = 'all'; } });
    }
    if (state.filters.type !== 'all') {
      chips.push({ label: `Type: ${state.filters.type}`, clear: () => { state.filters.type = 'all'; } });
    }
    if (state.filters.city !== 'all') {
      chips.push({ label: `City: ${state.filters.city}`, clear: () => { state.filters.city = 'all'; } });
    }
    if (state.filters.bedrooms !== 'any') {
      chips.push({ label: `Beds: ${state.filters.bedrooms}+`, clear: () => { state.filters.bedrooms = 'any'; } });
    }
    if (state.filters.verifiedOnly) {
      chips.push({ label: 'Verified Only', clear: () => { state.filters.verifiedOnly = false; } });
    }

    if (chips.length === 0) {
      container.innerHTML = '';
      return;
    }

    let html = chips.map((chip, idx) => `
      <div class="filter-chip">
        <span>${chip.label}</span>
        <span class="chip-remove" onclick="ZameenApp.clearSpecificFilter(${idx})">✕</span>
      </div>
    `).join('');

    html += `<span class="clear-all-chips" onclick="ZameenApp.resetAllFilters()">Clear All</span>`;
    container.innerHTML = html;
    window._currentChips = chips;
  }

  // --------------------------------------------------------------------------
  // 06. PROPERTY DETAILS MODAL & MULTI-ANGLE GALLERY
  // --------------------------------------------------------------------------
  function openPropertyModal(id) {
    let item = state.allProperties.find((p) => p.id === id);
    if (!item && (id === 'PREVIEW' || (state.previewProperty && id === state.previewProperty.id))) {
      item = state.previewProperty;
    }
    if (!item) return;

    state.activeModalProperty = item;
    state.currentGalleryIndex = 0;

    const modal = document.getElementById('property-detail-modal');
    if (!modal) return;

    const isFav = state.favorites.includes(item.id);
    const isComp = state.compare.includes(item.id);

    // Populate Content
    document.getElementById('modal-property-title').textContent = item.title;
    document.getElementById('modal-property-location').textContent = `${item.address || item.location}, ${item.city}`;
    document.getElementById('modal-property-price').textContent = formatPrice(item.price, item.purpose);
    document.getElementById('modal-property-type').textContent = item.type;
    document.getElementById('modal-property-id').textContent = item.id;
    document.getElementById('modal-property-desc').textContent = item.description || 'Verified property documentation and escrow enabled on Zameen.';

    // Specs
    document.getElementById('spec-val-area').textContent = `${item.area} ${item.areaUnit} (${item.sqft || 2250} sq.ft)`;
    document.getElementById('spec-val-beds').textContent = item.bedrooms > 0 ? `${item.bedrooms} Bedrooms` : 'N/A';
    document.getElementById('spec-val-baths').textContent = item.bathrooms > 0 ? `${item.bathrooms} Bathrooms` : 'N/A';
    document.getElementById('spec-val-parking').textContent = item.parking > 0 ? `${item.parking} Covered Cars` : 'None';
    document.getElementById('spec-val-year').textContent = item.yearBuilt || '2024';
    document.getElementById('spec-val-furnishing').textContent = item.furnishing || 'Unfurnished';

    // Amenities Grid
    const amenitiesContainer = document.getElementById('modal-amenities-grid');
    if (amenitiesContainer) {
      amenitiesContainer.innerHTML = (item.amenities || ['Electricity', 'Sui Gas', 'Water Supply', '24/7 Security']).map(a => `
        <div class="amenity-chip">
          <span>✓</span> <span>${a}</span>
        </div>
      `).join('');
    }

    // Agent Details
    document.getElementById('modal-agent-name').textContent = item.agent.name || 'Verified Advisor';
    document.getElementById('modal-agent-role').textContent = item.agent.role || 'Property Specialist';
    document.getElementById('modal-agent-agency').textContent = item.agent.agency || 'Direct Listing';
    document.getElementById('modal-agent-img').src = item.agent.avatar || './image/agent-avatar1.png';
    document.getElementById('modal-agent-phone-btn').href = `tel:${item.agent.phone || '+923001234567'}`;
    
    // Wire agent WhatsApp to the credentials modal with pre-selected property
    const modalWaBtn = document.getElementById('modal-agent-wa-btn');
    if (modalWaBtn) {
      modalWaBtn.onclick = (e) => {
        e.preventDefault();
        openWhatsAppModal(item.id);
      };
    }

    // Action buttons inside modal
    const favBtn = document.getElementById('modal-fav-toggle-btn');
    if (favBtn) {
      favBtn.innerHTML = isFav ? '❤️ Saved to Favorites' : '🤍 Save to Favorites';
    }
    const compBtn = document.getElementById('modal-comp-toggle-btn');
    if (compBtn) {
      compBtn.innerHTML = isComp ? '✓ In Comparison Queue' : '⚖️ Add to Compare';
    }

    // Update 4-Angle Gallery
    updateModalGallery();

    // Reset scroll position of detail body to top
    const detailBody = modal.querySelector('.modal-detail-body');
    if (detailBody) detailBody.scrollTop = 0;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function updateModalGallery() {
    const item = state.activeModalProperty;
    if (!item || !item.images || item.images.length === 0) return;

    const mainImg = document.getElementById('modal-main-gallery-img');
    const angleLabel = document.getElementById('modal-gallery-angle-label');

    if (mainImg) {
      mainImg.src = item.images[state.currentGalleryIndex];
    }

    if (angleLabel) {
      const title = (item.angleTitles && item.angleTitles[state.currentGalleryIndex]) 
        ? item.angleTitles[state.currentGalleryIndex] 
        : `Angle ${state.currentGalleryIndex + 1} of ${item.images.length}`;
      angleLabel.innerHTML = `<strong>Angle ${state.currentGalleryIndex + 1}/${item.images.length}:</strong> ${title}`;
    }

    const thumbsContainer = document.getElementById('modal-thumbs-container');
    if (thumbsContainer) {
      thumbsContainer.innerHTML = item.images.map((imgUrl, idx) => {
        const thumbLabel = (item.angleTitles && item.angleTitles[idx]) ? item.angleTitles[idx] : `Angle ${idx + 1}`;
        return `
          <div class="gallery-thumb-wrapper ${idx === state.currentGalleryIndex ? 'active' : ''}" onclick="ZameenApp.setGalleryIndex(${idx})" title="${thumbLabel}">
            <img src="${imgUrl}" class="gallery-thumb" alt="${thumbLabel}">
            <span class="gallery-thumb-num">${idx + 1}</span>
          </div>
        `;
      }).join('');
    }
  }

  function setGalleryIndex(idx) {
    state.currentGalleryIndex = idx;
    updateModalGallery();
  }

  function nextGalleryImage() {
    const item = state.activeModalProperty;
    if (!item) return;
    state.currentGalleryIndex = (state.currentGalleryIndex + 1) % item.images.length;
    updateModalGallery();
  }

  function prevGalleryImage() {
    const item = state.activeModalProperty;
    if (!item) return;
    state.currentGalleryIndex = (state.currentGalleryIndex - 1 + item.images.length) % item.images.length;
    updateModalGallery();
  }

  function closePropertyModal() {
    const modal = document.getElementById('property-detail-modal');
    if (modal) modal.classList.remove('open');
    const otherOpen = document.querySelector('.modal-overlay.open:not(#property-detail-modal)');
    if (!otherOpen) {
      document.body.style.overflow = '';
    }
  }

  // --------------------------------------------------------------------------
  // 07. FAVORITES SYSTEM
  // --------------------------------------------------------------------------
  function toggleFavorite(id, event) {
    if (event) event.stopPropagation();
    if (id === 'PREVIEW') {
      showToast('This is your live listing preview card');
      return;
    }

    const idx = state.favorites.indexOf(id);
    if (idx > -1) {
      state.favorites.splice(idx, 1);
      showToast('Property removed from your Saved Favorites');
    } else {
      state.favorites.push(id);
      showToast('Property saved to your Favorites ❤️');
    }

    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(state.favorites));
    updateBadges();
    renderDiscoveryGrid();
    renderFeaturedGrid();
    renderFavoritesDrawer();

    if (state.activeModalProperty && state.activeModalProperty.id === id) {
      const favBtn = document.getElementById('modal-fav-toggle-btn');
      if (favBtn) {
        favBtn.innerHTML = state.favorites.includes(id) ? '❤️ Saved to Favorites' : '🤍 Save to Favorites';
      }
    }
  }

  function openFavoritesDrawer() {
    renderFavoritesDrawer();
    const drawer = document.getElementById('favorites-drawer');
    const overlay = document.getElementById('drawer-overlay');
    if (drawer) drawer.classList.add('open');
    if (overlay) overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeFavoritesDrawer() {
    const drawer = document.getElementById('favorites-drawer');
    const overlay = document.getElementById('drawer-overlay');
    if (drawer) drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  function renderFavoritesDrawer() {
    const container = document.getElementById('favorites-list-container');
    if (!container) return;

    const favItems = state.allProperties.filter(p => state.favorites.includes(p.id));

    if (favItems.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <div style="font-size: 2.5rem; margin-bottom: 0.75rem;">🤍</div>
          <p style="font-weight: 600; color: var(--text-primary);">No Saved Properties Yet</p>
          <p style="font-size: 0.875rem;">Click the heart icon on any property to save it here for quick access.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = favItems.map(item => `
      <div class="fav-item-card">
        <img src="${item.images[0]}" class="fav-item-thumb" alt="${item.title}">
        <div class="fav-item-info">
          <h4 class="fav-item-title">${item.title}</h4>
          <div class="fav-item-price">${formatPrice(item.price, item.purpose)}</div>
          <div style="font-size: 0.75rem; color: var(--text-muted);">${item.location}, ${item.city}</div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 0.35rem;">
          <button class="btn btn-sm btn-primary" onclick="ZameenApp.closeFavoritesDrawer(); ZameenApp.openPropertyModal('${item.id}')">View</button>
          <button class="btn btn-sm btn-secondary" onclick="ZameenApp.toggleFavorite('${item.id}')" title="Remove">✕</button>
        </div>
      </div>
    `).join('');
  }

  // --------------------------------------------------------------------------
  // 08. PROPERTY COMPARISON SYSTEM
  // --------------------------------------------------------------------------
  function toggleCompare(id, event) {
    if (event) event.stopPropagation();
    if (id === 'PREVIEW') {
      openPropertyModal('PREVIEW');
      return;
    }

    const idx = state.compare.indexOf(id);
    if (idx > -1) {
      state.compare.splice(idx, 1);
      showToast('Removed from Property Comparison');
    } else {
      if (state.compare.length >= 4) {
        showToast('You can compare a maximum of 4 properties at once', '⚠️');
        return;
      }
      state.compare.push(id);
      showToast('Added to Comparison Queue ⚖️');
    }

    localStorage.setItem(STORAGE_KEYS.COMPARE, JSON.stringify(state.compare));
    updateBadges();
    renderDiscoveryGrid();
    renderFeaturedGrid();
    renderCompareFloatingBar();

    if (state.activeModalProperty && state.activeModalProperty.id === id) {
      const compBtn = document.getElementById('modal-comp-toggle-btn');
      if (compBtn) {
        compBtn.innerHTML = state.compare.includes(id) ? '✓ In Comparison Queue' : '⚖️ Add to Compare';
      }
    }
  }

  function renderCompareFloatingBar() {
    const bar = document.getElementById('compare-floating-bar');
    const thumbsContainer = document.getElementById('compare-thumbs-slot');
    const countEl = document.getElementById('compare-count-text');
    if (!bar) return;

    if (state.compare.length === 0) {
      bar.classList.remove('active');
      return;
    }

    bar.classList.add('active');
    if (countEl) countEl.textContent = `${state.compare.length} Selected`;

    if (thumbsContainer) {
      const compItems = state.allProperties.filter(p => state.compare.includes(p.id));
      thumbsContainer.innerHTML = compItems.map(p => `
        <div class="compare-thumb-item" title="${p.title}">
          <img src="${p.images[0]}" alt="${p.title}">
        </div>
      `).join('');
    }
  }

  function openCompareModal() {
    if (state.compare.length === 0) {
      showToast('Select at least 2 properties to compare', 'ℹ️');
      return;
    }

    const modal = document.getElementById('compare-modal');
    const tableContainer = document.getElementById('compare-table-container');
    if (!modal || !tableContainer) return;

    const items = state.allProperties.filter(p => state.compare.includes(p.id));

    let html = `
      <div style="overflow-x: auto;">
        <table class="compare-table">
          <thead>
            <tr>
              <th style="background: #ffffff; border: none;">Specification</th>
              ${items.map(p => `
                <th style="min-width: 220px; text-align: center;">
                  <img src="${p.images[0]}" style="width: 100%; height: 130px; object-fit: cover; border-radius: 6px; margin-bottom: 0.5rem;">
                  <div style="font-weight: 700; color: var(--text-primary); font-size: 0.95rem;">${p.title}</div>
                  <div style="font-size: 1.1rem; color: var(--primary); font-weight: 800; margin: 0.25rem 0;">${formatPrice(p.price, p.purpose)}</div>
                  <button class="btn btn-sm btn-secondary" onclick="ZameenApp.toggleCompare('${p.id}'); ZameenApp.openCompareModal();">Remove</button>
                </th>
              `).join('')}
            </tr>
          </thead>
          <tbody>
            <tr><th>Location</th>${items.map(p => `<td>${p.location}, ${p.city}</td>`).join('')}</tr>
            <tr><th>Purpose</th>${items.map(p => `<td style="text-transform: capitalize;">${p.purpose}</td>`).join('')}</tr>
            <tr><th>Property Type</th>${items.map(p => `<td>${p.type}</td>`).join('')}</tr>
            <tr><th>Area / Size</th>${items.map(p => `<td>${p.area} ${p.areaUnit} (${p.sqft} sq.ft)</td>`).join('')}</tr>
            <tr><th>Bedrooms</th>${items.map(p => `<td>${p.bedrooms || 'N/A'}</td>`).join('')}</tr>
            <tr><th>Bathrooms</th>${items.map(p => `<td>${p.bathrooms || 'N/A'}</td>`).join('')}</tr>
            <tr><th>Covered Parking</th>${items.map(p => `<td>${p.parking ? p.parking + ' Cars' : 'N/A'}</td>`).join('')}</tr>
            <tr><th>Furnishing</th>${items.map(p => `<td>${p.furnishing}</td>`).join('')}</tr>
            <tr><th>Year Built</th>${items.map(p => `<td>${p.yearBuilt || '2024'}</td>`).join('')}</tr>
            <tr><th>Verified Badge</th>${items.map(p => `<td>${p.verified ? '✓ Verified Listing' : 'Standard'}</td>`).join('')}</tr>
            <tr><th>Key Amenities</th>${items.map(p => `<td>${p.amenities.slice(0, 5).join(', ')}</td>`).join('')}</tr>
          </tbody>
        </table>
      </div>
    `;

    tableContainer.innerHTML = html;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCompareModal() {
    const modal = document.getElementById('compare-modal');
    if (modal) modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  // --------------------------------------------------------------------------
  // 09. SECURE PAYMENT & ESCROW TOKEN DEPOSIT SYSTEM
  // --------------------------------------------------------------------------
  function openPaymentModal(propertyId) {
    const item = state.allProperties.find(p => p.id === propertyId) || state.activeModalProperty;
    if (!item) return;

    state.activeModalProperty = item;
    const modal = document.getElementById('payment-modal');
    if (!modal) return;

    // Token amount: 1% of price or fixed PKR 100,000 / $500
    const tokenAmountPKR = item.purpose === 'rent' ? item.price : Math.min(100000, Math.max(50000, Math.round(item.price * 0.005)));
    const tokenAmountDisplay = state.currency === 'USD' ? `$${Math.round(tokenAmountPKR / 280).toLocaleString()}` : `PKR ${tokenAmountPKR.toLocaleString('en-PK')}`;

    document.getElementById('pay-property-id').value = item.id;
    document.getElementById('pay-summary-title').textContent = item.title;
    document.getElementById('pay-summary-location').textContent = `${item.location}, ${item.city}`;
    document.getElementById('pay-summary-total-price').textContent = formatPrice(item.price, item.purpose);
    document.getElementById('pay-summary-token-amount').textContent = tokenAmountDisplay;
    document.getElementById('pay-summary-thumb').src = item.images[0];

    // Reset view to form state
    const checkoutView = document.getElementById('payment-checkout-view');
    const successView = document.getElementById('payment-success-view');
    if (checkoutView) checkoutView.style.display = 'block';
    if (successView) successView.style.display = 'none';

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closePaymentModal() {
    const modal = document.getElementById('payment-modal');
    if (modal) modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function switchPaymentTab(method) {
    document.querySelectorAll('.pay-method-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`.pay-method-btn[data-method="${method}"]`);
    if (activeBtn) activeBtn.classList.add('active');

    const cardFields = document.getElementById('pay-fields-card');
    const bankFields = document.getElementById('pay-fields-bank');
    const walletFields = document.getElementById('pay-fields-wallet');

    if (cardFields) cardFields.style.display = method === 'card' ? 'block' : 'none';
    if (bankFields) bankFields.style.display = method === 'bank' ? 'block' : 'none';
    if (walletFields) walletFields.style.display = method === 'wallet' ? 'block' : 'none';
  }

  function handlePaymentSubmit(e) {
    e.preventDefault();

    const submitBtn = document.getElementById('pay-submit-btn');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span class="spinner-inline"></span> Encrypting & Processing via Escrow Gateway...`;
    }

    setTimeout(() => {
      const prop = state.activeModalProperty || state.allProperties[0];
      const buyerName = document.getElementById('pay-buyer-name').value.trim() || 'Valued Client';
      const buyerEmail = document.getElementById('pay-buyer-email').value.trim() || 'client@zameen.pk';
      const buyerPhone = document.getElementById('pay-buyer-phone').value.trim() || '+92 300 0000000';
      const txId = `ZAM-ESCROW-${Math.floor(100000 + Math.random() * 900000)}`;
      const tokenVal = document.getElementById('pay-summary-token-amount').textContent;
      const dateStr = new Date().toLocaleDateString('en-PK', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' });

      const newBooking = {
        txId: txId,
        propertyId: prop.id,
        propertyTitle: prop.title,
        propertyLocation: `${prop.location}, ${prop.city}`,
        buyerName: buyerName,
        buyerEmail: buyerEmail,
        buyerPhone: buyerPhone,
        tokenAmount: tokenVal,
        status: 'Held in Escrow (Verified)',
        date: dateStr
      };

      state.bookings.unshift(newBooking);
      localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(state.bookings));

      // Display Receipt View
      const checkoutView = document.getElementById('payment-checkout-view');
      const successView = document.getElementById('payment-success-view');
      if (checkoutView) checkoutView.style.display = 'none';
      if (successView) {
        successView.style.display = 'block';
        document.getElementById('receipt-tx-id').textContent = txId;
        document.getElementById('receipt-prop-title').textContent = prop.title;
        document.getElementById('receipt-buyer-name').textContent = buyerName;
        document.getElementById('receipt-amount').textContent = tokenVal;
        document.getElementById('receipt-date').textContent = dateStr;
      }

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `Confirm & Authorize Escrow Deposit 🛡️`;
      }

      showToast(`Token Deposit Authorized! Receipt: ${txId}`, '🛡️');
      renderDashboard();
    }, 1200);
  }

  // --------------------------------------------------------------------------
  // 10. FLOATING WHATSAPP BUTTON & CREDENTIALS POPUP
  // --------------------------------------------------------------------------
  function openWhatsAppModal(propertyId) {
    const popover = document.getElementById('whatsapp-popover') || document.getElementById('whatsapp-modal');
    if (!popover) return;

    // If already open and clicked from floating button, toggle closed
    if (popover.classList.contains('open') && !propertyId) {
      closeWhatsAppModal();
      return;
    }

    let targetProp = null;
    if (propertyId) {
      targetProp = state.allProperties.find(p => p.id === propertyId);
    } else if (state.activeModalProperty) {
      targetProp = state.activeModalProperty;
    }

    const propInput = document.getElementById('wa-property-ref');
    if (propInput) {
      propInput.value = targetProp ? `${targetProp.title} (${targetProp.id})` : 'General Property Consultation';
    }

    popover.classList.add('open');
    // Popover floats non-blockingly above the button, do NOT hide or lock background content
  }

  function closeWhatsAppModal() {
    const popover = document.getElementById('whatsapp-popover') || document.getElementById('whatsapp-modal');
    if (popover) popover.classList.remove('open');
  }

  function handleWhatsAppSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('wa-user-name').value.trim();
    const phone = document.getElementById('wa-user-phone').value.trim();
    const city = document.getElementById('wa-user-city').value;
    const purpose = document.getElementById('wa-user-purpose').value;
    const propRef = document.getElementById('wa-property-ref').value;
    const msg = document.getElementById('wa-user-msg').value.trim();

    // Store lead locally
    const lead = {
      id: `WA-${Date.now()}`,
      propertyId: propRef,
      propertyTitle: propRef,
      buyerName: name,
      buyerEmail: 'WhatsApp Direct',
      buyerPhone: phone,
      message: `[WhatsApp Lead] City: ${city} | Purpose: ${purpose} | Note: ${msg}`,
      date: new Date().toLocaleDateString('en-PK', { month: 'short', day: 'numeric', year: 'numeric' })
    };

    state.inquiries.unshift(lead);
    localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(state.inquiries));
    renderDashboard();

    closeWhatsAppModal();

    // Compose official WhatsApp direct message
    const formattedText = `Hello Zameen Advisory!%0A%0AMy Name: *${encodeURIComponent(name)}*%0APhone: *${encodeURIComponent(phone)}*%0ACity: *${encodeURIComponent(city)}*%0APurpose: *${encodeURIComponent(purpose)}*%0AProperty Ref: *${encodeURIComponent(propRef)}*%0AMessage: ${encodeURIComponent(msg)}%0A%0APlease connect me with a senior advisor.`;
    const waUrl = `https://wa.me/923001234567?text=${formattedText}`;

    showToast('Connecting you with Verified Senior Advisor on WhatsApp... 💬', '💬');

    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 600);
  }

  // --------------------------------------------------------------------------
  // 11. "LIST YOUR PROPERTY" 5-STAGE DYNAMIC WIZARD CONTROLLER
  // --------------------------------------------------------------------------
  function openListPropertyModal() {
    const modal = document.getElementById('list-property-modal');
    if (modal) {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
      setListingStep(1);
    }
  }

  function closeListPropertyModal() {
    const modal = document.getElementById('list-property-modal');
    if (modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  function setListingStep(stepNum) {
    state.listingWizardStep = stepNum;

    // Toggle active classes on step nodes
    for (let i = 1; i <= 4; i++) {
      const node = document.getElementById(`wz-indicator-${i}`);
      const conn = document.getElementById(`wz-conn-${i}`);
      if (node) {
        if (i < stepNum) {
          node.className = 'wz-step-node completed';
        } else if (i === stepNum) {
          node.className = 'wz-step-node active';
        } else {
          node.className = 'wz-step-node';
        }
      }
      if (conn) {
        if (i < stepNum) {
          conn.classList.add('completed');
        } else {
          conn.classList.remove('completed');
        }
      }
    }

    // Toggle stages display
    for (let s = 1; s <= 5; s++) {
      const stage = document.getElementById(`wz-stage-${s}`);
      if (stage) {
        stage.style.display = s === stepNum ? 'block' : 'none';
      }
    }
  }

  function onListingCategoryChange(cat) {
    const typeSelect = document.getElementById('list-type');
    if (!typeSelect) return;

    if (cat === 'Land') {
      typeSelect.value = 'Plot';
    } else if (cat === 'Commercial') {
      typeSelect.value = 'Office';
    } else {
      typeSelect.value = 'House';
    }
    onListingTypeChange(typeSelect.value);
  }

  function onListingTypeChange(type) {
    const groupRes = document.getElementById('dynamic-group-residential');
    const groupLand = document.getElementById('dynamic-group-land');
    const groupComm = document.getElementById('dynamic-group-commercial');
    const desc = document.getElementById('wz-dynamic-desc');
    const presetSelect = document.getElementById('list-image-preset');

    const isLand = ['Plot', 'Commercial Plot', 'Land', 'Development Land'].includes(type);
    const isComm = ['Office', 'Commercial', 'Warehouse'].includes(type);

    if (groupRes) groupRes.style.display = (!isLand && !isComm) ? 'block' : 'none';
    if (groupLand) groupLand.style.display = isLand ? 'block' : 'none';
    if (groupComm) groupComm.style.display = isComm ? 'block' : 'none';

    if (desc) {
      if (isLand) {
        desc.textContent = 'Land & Plot parameters: Size, Road Access, Development and Title status (Residential fields hidden).';
        if (presetSelect) presetSelect.value = './image/plot-land.jpg';
      } else if (isComm) {
        desc.textContent = 'Commercial parameters: Covered Area, Floor, Commercial Typology, and Dedicated Parking.';
        if (presetSelect) presetSelect.value = './image/office-commercial.jpg';
      } else {
        desc.textContent = 'Residential parameters: Living Area, Bedrooms, Bathrooms, Parking, and Furnishing.';
        if (presetSelect) presetSelect.value = './image/house-modern.jpg';
      }
      if (presetSelect) onListingPresetImageChange(presetSelect.value);
    }
  }

  function onListingPresetImageChange(imgUrl) {
    const thumb = document.getElementById('wz-image-preview-thumb');
    const label = document.getElementById('wz-thumb-label');
    const select = document.getElementById('list-image-preset');
    if (thumb) thumb.src = imgUrl;
    if (label && select) {
      label.textContent = select.options[select.selectedIndex].text;
    }
  }

  function validateAndGoToStep(targetStep) {
    if (targetStep === 2) {
      const title = document.getElementById('list-title').value.trim();
      const price = parseFloat(document.getElementById('list-price').value);
      const loc = document.getElementById('list-location').value.trim();

      if (!title || !price || !loc) {
        showToast('Please fill in Property Title, Asking Price, and Location to proceed.', '⚠️');
        return;
      }
    }
    setListingStep(targetStep);
  }

  function renderAndGoToPreview() {
    const title = document.getElementById('list-title').value.trim();
    const type = document.getElementById('list-type').value;
    const purpose = document.getElementById('list-purpose').value;
    const price = parseFloat(document.getElementById('list-price').value) || 0;
    const city = document.getElementById('list-city').value;
    const location = document.getElementById('list-location').value.trim();
    const img = document.getElementById('list-image-preset').value || './image/house-modern.jpg';

    const isLand = ['Plot', 'Commercial Plot', 'Land', 'Development Land'].includes(type);
    const isComm = ['Office', 'Commercial', 'Warehouse'].includes(type);

    let areaVal = 10;
    let areaUnit = 'Marla';
    let bedsVal = 0;
    let bathsVal = 0;
    let parkingVal = 0;

    if (isLand) {
      areaVal = parseFloat(document.getElementById('list-land-area').value) || 20;
      areaUnit = document.getElementById('list-land-unit').value;
    } else if (isComm) {
      areaVal = parseFloat(document.getElementById('list-comm-area').value) || 2800;
      areaUnit = 'Sq.Ft';
      parkingVal = parseInt(document.getElementById('list-comm-parking').value, 10) || 2;
    } else {
      areaVal = parseFloat(document.getElementById('list-res-area').value) || 10;
      areaUnit = document.getElementById('list-res-unit').value;
      bedsVal = parseInt(document.getElementById('list-res-beds').value, 10) || 3;
      bathsVal = parseInt(document.getElementById('list-res-baths').value, 10) || 3;
      parkingVal = parseInt(document.getElementById('list-res-parking').value, 10) || 2;
    }

    const checkedAmenities = [];
    document.querySelectorAll('.list-amenity-cb:checked').forEach(cb => {
      checkedAmenities.push(cb.value);
    });

    let previewImages = [img];
    let previewAngles = ['Angle 1 of 4 • Front Elevation & Modern Facade'];

    if (img.includes('house-modern')) {
      previewImages = [
        './image/house-modern.jpg',
        './image/house-pool.jpg',
        './image/house-interior-living.jpg',
        './image/apartment-interior.jpg'
      ];
      previewAngles = [
        'Angle 1 of 4 • Modern Architectural Elevation',
        'Angle 2 of 4 • Private Swimming Pool & Deck',
        'Angle 3 of 4 • Open Living Lounge & Dining',
        'Angle 4 of 4 • Designer Master Bedroom Suite'
      ];
    } else if (img.includes('villa-luxury')) {
      previewImages = [
        './image/villa-luxury.jpg',
        './image/villa-terrace.jpg',
        './image/house-interior-living.jpg',
        './image/house-pool.jpg'
      ];
      previewAngles = [
        'Angle 1 of 4 • Front Elevation & Landscaped Entrance',
        'Angle 2 of 4 • Upper Terrace & Sky Lounge',
        'Angle 3 of 4 • Double-Height Atrium Living Room',
        'Angle 4 of 4 • Resort Pool & Patio Pergola'
      ];
    } else if (img.includes('plot-land') || isLand) {
      previewImages = [
        './image/plot-land.jpg',
        './image/land-drone.webp',
        './image/commercial-towers.avif',
        './image/trust-valuation.jpg'
      ];
      previewAngles = [
        'Angle 1 of 4 • Demarcated Sector & Wide Road Facing',
        'Angle 2 of 4 • Aerial Drone Boundary Survey',
        'Angle 3 of 4 • Commercial Hub & Surrounding Towers',
        'Angle 4 of 4 • Approved Registry & Survey Benchmark'
      ];
    } else if (img.includes('farmland')) {
      previewImages = [
        './image/farmland-aerial.jpg',
        './image/orchard-land.jpg',
        './image/orchard-estate.jpg',
        './image/farmhouse.jpg'
      ];
      previewAngles = [
        'Angle 1 of 4 • High-Altitude Drone Farm Overview',
        'Angle 2 of 4 • Irrigated Citrus Orchard Tracks',
        'Angle 3 of 4 • Main Driveway & Gate House',
        'Angle 4 of 4 • Country Farmhouse & Stable Grounds'
      ];
    } else if (img.includes('penthouse') || img.includes('flat')) {
      previewImages = [
        './image/penthouse-luxury.jpg',
        './image/flat-luxury-living.jpg',
        './image/flat-luxury-bed.jpg',
        './image/flat-luxury-kitchen.jpg'
      ];
      previewAngles = [
        'Angle 1 of 4 • Panoramic Skyline Balcony View',
        'Angle 2 of 4 • Executive Marble Living Room',
        'Angle 3 of 4 • Master Suite with Coastal Panorama',
        'Angle 4 of 4 • Chef Kitchen with Island Counter'
      ];
    } else if (img.includes('office') || isComm) {
      previewImages = [
        './image/office-commercial.jpg',
        './image/office-building.jpg',
        './image/office-boardroom.jpg',
        './image/commercial-showroom.jpg'
      ];
      previewAngles = [
        'Angle 1 of 4 • Corporate Glass Facade',
        'Angle 2 of 4 • Tower Perspective & Main Boulevard',
        'Angle 3 of 4 • Executive Conference Boardroom',
        'Angle 4 of 4 • Retail Ground Floor Showroom'
      ];
    } else if (img.includes('warehouse')) {
      previewImages = [
        './image/warehouse.jpg',
        './image/warehouse-interior.jpg',
        './image/commercial-towers.avif',
        './image/trust-workspace.jpg'
      ];
      previewAngles = [
        'Angle 1 of 4 • Heavy Loading Bay & Yard',
        'Angle 2 of 4 • High-Ceiling Storage Floor',
        'Angle 3 of 4 • Industrial District Access',
        'Angle 4 of 4 • Operational Office Floor'
      ];
    } else if (img.includes('farmhouse')) {
      previewImages = [
        './image/farmhouse.jpg',
        './image/farmland-aerial.jpg',
        './image/orchard-estate.jpg',
        './image/orchard-land.jpg'
      ];
      previewAngles = [
        'Angle 1 of 4 • Luxury Farmhouse Villa Elevation',
        'Angle 2 of 4 • Aerial Estate Landscape',
        'Angle 3 of 4 • Tree-Lined Private Driveway',
        'Angle 4 of 4 • Lush Lawns & Plantation'
      ];
    } else {
      previewImages = [
        img,
        './image/house-interior-living.jpg',
        './image/flat-luxury-bed.jpg',
        './image/villa-luxury.jpg'
      ];
      previewAngles = [
        'Angle 1 of 4 • Front Elevation & Exterior',
        'Angle 2 of 4 • Interior Reception Lounge',
        'Angle 3 of 4 • Master Bedroom Suite',
        'Angle 4 of 4 • Terrace & Grounds'
      ];
    }

    const displayPrice = price > 0 ? price : (isLand ? 18500000 : 35000000);
    const displayTitle = title || (isLand ? '10 Marla Prime Commercial Plot' : '10 Marla Luxury Modern House');
    const displayLocation = location || 'DHA Phase 6';
    const displayAddress = location ? `${location}, ${city}` : `DHA Phase 6, ${city}`;
    const displaySeller = document.getElementById('list-seller-name').value.trim() || 'Muhammad Ibraheem';
    const displayContact = document.getElementById('list-seller-contact').value.trim() || '+92 300 1234567';
    const displayDesc = (document.getElementById('list-desc') && document.getElementById('list-desc').value.trim()) || 'Verified luxury property listed on Zameen marketplace with legal registry guarantee, escrow safety, and instant viewing tours.';
    const displayFurnishing = document.getElementById('list-res-furnishing') ? document.getElementById('list-res-furnishing').value : 'Unfurnished';

    const sqftVal = areaUnit === 'Kanal' ? areaVal * 4500 : (areaUnit === 'Marla' ? areaVal * 225 : (areaUnit === 'Sq.Yd' ? areaVal * 9 : areaVal));

    const previewItem = {
      id: 'PREVIEW',
      title: displayTitle,
      type: type,
      purpose: purpose,
      price: displayPrice,
      city: city,
      location: displayLocation,
      address: displayAddress,
      area: areaVal,
      areaUnit: areaUnit,
      sqft: sqftVal,
      bedrooms: bedsVal,
      bathrooms: bathsVal,
      parking: parkingVal,
      yearBuilt: '2024',
      furnishing: displayFurnishing,
      category: isLand ? 'Land' : (isComm ? 'Commercial' : 'Residential'),
      featured: true,
      verified: true,
      images: previewImages,
      angleTitles: previewAngles,
      description: displayDesc,
      amenities: checkedAmenities.length > 0 ? checkedAmenities : ['Electricity', 'Sui Gas', 'Water Supply', '24/7 Security', 'Boundary Wall'],
      agent: {
        name: displaySeller,
        role: 'Verified Property Owner',
        agency: 'Direct Owner Listing',
        phone: displayContact,
        whatsapp: displayContact,
        avatar: './image/agent-avatar1.png'
      }
    };

    state.previewProperty = previewItem;

    const container = document.getElementById('wz-preview-card-slot');
    if (container) {
      container.innerHTML = createPropertyCard(previewItem);
    }

    setListingStep(4);
  }

  function handleListingPublish() {
    const title = document.getElementById('list-title').value.trim();
    const purpose = document.getElementById('list-purpose').value;
    const type = document.getElementById('list-type').value;
    const category = document.getElementById('list-category').value;
    const price = parseFloat(document.getElementById('list-price').value);
    const city = document.getElementById('list-city').value;
    const location = document.getElementById('list-location').value.trim();
    const description = document.getElementById('list-desc').value.trim();
    const sellerName = document.getElementById('list-seller-name').value.trim() || 'Verified Owner';
    const sellerContact = document.getElementById('list-seller-contact').value.trim() || '+92 300 1234567';
    const selectedImg = document.getElementById('list-image-preset').value || './image/house-modern.jpg';

    const isLand = ['Plot', 'Commercial Plot', 'Land', 'Development Land'].includes(type);
    const isComm = ['Office', 'Commercial', 'Warehouse'].includes(type);

    let areaVal = 10;
    let areaUnit = 'Marla';
    let bedrooms = 0;
    let bathrooms = 0;
    let parking = 0;
    let furnishing = 'Unfurnished';

    if (isLand) {
      areaVal = parseFloat(document.getElementById('list-land-area').value) || 20;
      areaUnit = document.getElementById('list-land-unit').value;
    } else if (isComm) {
      areaVal = parseFloat(document.getElementById('list-comm-area').value) || 2800;
      areaUnit = 'Sq.Ft';
      parking = parseInt(document.getElementById('list-comm-parking').value, 10) || 2;
    } else {
      areaVal = parseFloat(document.getElementById('list-res-area').value) || 10;
      areaUnit = document.getElementById('list-res-unit').value;
      bedrooms = parseInt(document.getElementById('list-res-beds').value, 10) || 3;
      bathrooms = parseInt(document.getElementById('list-res-baths').value, 10) || 3;
      parking = parseInt(document.getElementById('list-res-parking').value, 10) || 2;
      furnishing = document.getElementById('list-res-furnishing') ? document.getElementById('list-res-furnishing').value : 'Unfurnished';
    }

    const checkedAmenities = [];
    document.querySelectorAll('.list-amenity-cb:checked').forEach(cb => {
      checkedAmenities.push(cb.value);
    });

    const newId = `ZAM-U${Math.floor(100 + Math.random() * 900)}`;

    const newProperty = {
      id: newId,
      title: title,
      type: type,
      category: isLand ? 'Land' : (isComm ? 'Commercial' : category),
      purpose: purpose,
      price: price,
      city: city,
      location: location,
      address: `${location}, ${city}`,
      area: areaVal,
      areaUnit: areaUnit,
      sqft: areaUnit === 'Kanal' ? areaVal * 4500 : (areaUnit === 'Marla' ? areaVal * 225 : areaVal),
      bedrooms: bedrooms,
      bathrooms: bathrooms,
      parking: parking,
      yearBuilt: 2024,
      featured: true,
      verified: true,
      status: 'Published',
      views: 1,
      images: [
        selectedImg,
        './image/house-interior-living.jpg',
        './image/flat-luxury-bed.jpg',
        './image/villa-luxury.jpg'
      ],
      angleTitles: [
        'Front Elevation / Exterior',
        'Interior Reception Lounge',
        'Master Bedroom Suite',
        'Terrace & Grounds'
      ],
      description: description,
      amenities: checkedAmenities.length > 0 ? checkedAmenities : ['Electricity', 'Water', 'Security', 'Road Access'],
      furnishing: furnishing,
      agent: {
        name: sellerName,
        role: 'Verified Property Owner',
        agency: 'Direct Owner Listing',
        phone: sellerContact,
        whatsapp: sellerContact,
        avatar: './image/agent-avatar1.png'
      }
    };

    const savedCustom = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_PROPERTIES) || '[]');
    savedCustom.unshift(newProperty);
    localStorage.setItem(STORAGE_KEYS.USER_PROPERTIES, JSON.stringify(savedCustom));

    state.allProperties.unshift(newProperty);
    applyFilters();
    renderDashboard();

    const idEl = document.getElementById('wz-published-id');
    if (idEl) idEl.textContent = newId;

    setListingStep(5);
    showToast(`Property "${title}" published with live preview! 🚀`);
  }

  // --------------------------------------------------------------------------
  // 12. INQUIRY & LEAD CAPTURE WORKFLOW (DATA-MINIMAL PRIVACY-FIRST)
  // --------------------------------------------------------------------------
  function openInquiryModal(propertyId) {
    const item = state.allProperties.find(p => p.id === propertyId) || state.activeModalProperty;
    if (!item) return;

    const modal = document.getElementById('inquiry-modal');
    if (!modal) return;

    document.getElementById('inquiry-property-id').value = item.id;
    document.getElementById('inquiry-prop-summary-title').textContent = item.title;
    document.getElementById('inquiry-prop-summary-price').textContent = formatPrice(item.price, item.purpose);
    document.getElementById('inquiry-prop-summary-agent').textContent = `${item.agent.name} (${item.agent.agency})`;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeInquiryModal() {
    const modal = document.getElementById('inquiry-modal');
    if (modal) modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function handleInquiryFormSubmit(e) {
    e.preventDefault();

    const propId = document.getElementById('inquiry-property-id').value;
    const name = document.getElementById('inquiry-name').value.trim();
    const contact = document.getElementById('inquiry-contact') ? document.getElementById('inquiry-contact').value.trim() : '';
    const message = document.getElementById('inquiry-message').value.trim();

    if (!name || !contact) {
      showToast('Please provide your name and contact info (phone or email)', '⚠️');
      return;
    }

    const prop = state.allProperties.find(p => p.id === propId);

    const lead = {
      id: `INQ-${Date.now()}`,
      propertyId: propId,
      propertyTitle: prop ? prop.title : 'Property Listing',
      buyerName: name,
      buyerEmail: contact.includes('@') ? contact : 'Direct Inquiry',
      buyerPhone: !contact.includes('@') ? contact : 'Direct Inquiry',
      message: message,
      date: new Date().toLocaleDateString('en-PK', { month: 'short', day: 'numeric', year: 'numeric' })
    };

    state.inquiries.unshift(lead);
    localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(state.inquiries));

    closeInquiryModal();
    document.getElementById('inquiry-form').reset();
    showToast(`Inquiry dispatched to ${prop ? prop.agent.name : 'Listing Agent'}! 📩`);
    renderDashboard();
  }

  // --------------------------------------------------------------------------
  // 13. SELLER DASHBOARD CONTROLLER (PROPERTIES, INQUIRIES & DEPOSITS)
  // --------------------------------------------------------------------------
  function renderDashboard() {
    const savedCustom = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_PROPERTIES) || '[]');
    const totalListed = savedCustom.length + 3;
    const inquiriesCount = state.inquiries.length;
    const bookingsCount = state.bookings.length;

    const metricListed = document.getElementById('dash-metric-total-listed');
    const metricViews = document.getElementById('dash-metric-views');
    const metricInquiries = document.getElementById('dash-metric-inquiries');
    const metricBookings = document.getElementById('dash-metric-bookings');

    if (metricListed) metricListed.textContent = totalListed;
    if (metricViews) metricViews.textContent = (totalListed * 480 + 1250).toLocaleString();
    if (metricInquiries) metricInquiries.textContent = inquiriesCount + 4;
    if (metricBookings) metricBookings.textContent = bookingsCount;

    // Render Properties Table
    const tableBody = document.getElementById('dash-properties-tbody');
    if (tableBody) {
      const displayList = [...savedCustom, ...DEFAULT_PROPERTIES.slice(0, 3)];
      tableBody.innerHTML = displayList.map(p => `
        <tr>
          <td>
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <img src="${p.images[0]}" style="width: 50px; height: 40px; object-fit: cover; border-radius: 4px;">
              <div>
                <strong style="color: var(--text-primary); display: block; font-size: 0.9rem;">${p.title}</strong>
                <span style="color: var(--text-muted); font-size: 0.75rem;">${p.city} • ${p.type} • 4 Angles</span>
              </div>
            </div>
          </td>
          <td><strong>${formatPrice(p.price, p.purpose)}</strong></td>
          <td><span class="badge ${p.status === 'Published' ? 'badge-verified' : 'badge-neutral'}">${p.status}</span></td>
          <td>${p.views || 340} views</td>
          <td>
            <button class="btn btn-sm btn-secondary" onclick="ZameenApp.openPropertyModal('${p.id}')">View</button>
          </td>
        </tr>
      `).join('');
    }

    // Render Inquiries Table
    const inqTableBody = document.getElementById('dash-inquiries-tbody');
    if (inqTableBody) {
      if (state.inquiries.length === 0) {
        inqTableBody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 2rem;">No new buyer inquiries yet.</td></tr>`;
      } else {
        inqTableBody.innerHTML = state.inquiries.map(inq => `
          <tr>
            <td><strong>${inq.buyerName}</strong></td>
            <td>${inq.buyerPhone}<br><small style="color: var(--text-muted);">${inq.buyerEmail}</small></td>
            <td>${inq.propertyTitle}</td>
            <td><em style="color: var(--text-secondary);">${inq.message}</em></td>
            <td><span style="font-size: 0.75rem; color: var(--text-muted);">${inq.date}</span></td>
          </tr>
        `).join('');
      }
    }

    // Render Bookings & Deposits Table
    const bookTableBody = document.getElementById('dash-bookings-tbody');
    if (bookTableBody) {
      if (state.bookings.length === 0) {
        bookTableBody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 2rem;">No token deposits placed yet. Click "Reserve Property" on any listing to experience the escrow checkout.</td></tr>`;
      } else {
        bookTableBody.innerHTML = state.bookings.map(b => `
          <tr>
            <td><strong style="color: var(--primary); font-family: monospace;">${b.txId}</strong></td>
            <td><strong>${b.buyerName}</strong><br><small style="color: var(--text-muted);">${b.buyerPhone}</small></td>
            <td>${b.propertyTitle}</td>
            <td><strong style="color: var(--primary);">${b.tokenAmount}</strong></td>
            <td><span class="badge badge-verified">${b.status}</span></td>
            <td><span style="font-size: 0.75rem; color: var(--text-muted);">${b.date}</span></td>
          </tr>
        `).join('');
      }
    }
  }

  // --------------------------------------------------------------------------
  // 14. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
  // --------------------------------------------------------------------------
  function initScrollReveal() {
    // Respect user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // All revealable selectors
    const revealSelectors = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade';
    const revealElements = document.querySelectorAll(revealSelectors);

    // Child selectors to auto-discover and stagger within reveal sections
    const childCardSelectors = [
      '.category-card',
      '.property-card',
      '.step-card',
      '.trust-card',
      '.testimonial-card',
      '.hero-stat-item',
      '.plot-spec-box',
      '.dashboard-metric-card'
    ].join(', ');

    // Tag children with stagger classes
    revealElements.forEach(function(section) {
      const children = section.querySelectorAll(childCardSelectors);
      children.forEach(function(child, i) {
        if (!child.classList.contains('reveal-child')) {
          child.classList.add('reveal-child');
          const delayStep = Math.min(i + 1, 8);
          child.classList.add('reveal-delay-' + delayStep);
        }
      });
    });

    if (prefersReducedMotion) {
      revealElements.forEach(function(el) { el.classList.add('active'); });
      document.querySelectorAll('.reveal-child').forEach(function(el) { el.classList.add('active'); });
      return;
    }

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach(function(el) { el.classList.add('active'); });
      document.querySelectorAll('.reveal-child').forEach(function(el) { el.classList.add('active'); });
      return;
    }

    // Section-level observer
    var sectionObserver = new IntersectionObserver(function(entries, obs) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          var children = entry.target.querySelectorAll('.reveal-child');
          children.forEach(function(child) { child.classList.add('active'); });
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(function(el) { sectionObserver.observe(el); });

    // Standalone reveal-child observer (for dynamically rendered cards)
    var childObserver = new IntersectionObserver(function(entries, obs) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    // Observe property cards rendered after DOMContentLoaded via MutationObserver
    var discoveryGrid = document.getElementById('properties-grid');
    var featuredGrid = document.getElementById('featured-grid');

    function observeNewCards(container) {
      if (!container) return;
      var mutObs = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          mutation.addedNodes.forEach(function(node) {
            if (node.nodeType === 1 && node.classList && node.classList.contains('property-card')) {
              if (!node.classList.contains('reveal-child')) {
                node.classList.add('reveal-child');
              }
              childObserver.observe(node);
            }
          });
        });
      });
      mutObs.observe(container, { childList: true });

      // Observe existing cards already rendered
      container.querySelectorAll('.property-card').forEach(function(card) {
        if (!card.classList.contains('reveal-child')) {
          card.classList.add('reveal-child');
        }
        childObserver.observe(card);
      });
    }

    observeNewCards(discoveryGrid);
    observeNewCards(featuredGrid);
  }

  // --------------------------------------------------------------------------
  // 15. HERO SEARCH & QUICK FILTERS
  // --------------------------------------------------------------------------
  function toggleHeroAdvancedFilters() {
    const tray = document.getElementById('hero-advanced-filters');
    const btn = document.getElementById('hero-more-filters-btn');
    if (!tray) return;

    const isHidden = tray.style.display === 'none' || !tray.classList.contains('open');
    if (isHidden) {
      tray.style.display = 'block';
      setTimeout(() => tray.classList.add('open'), 10);
      if (btn) {
        btn.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
        btn.innerHTML = `<span>Fewer Filters ✕</span>`;
      }
    } else {
      tray.classList.remove('open');
      setTimeout(() => tray.style.display = 'none', 200);
      if (btn) {
        btn.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
        btn.innerHTML = `<span>More Filters ⚙️</span>`;
      }
    }
  }

  function handleHeroSearch(e) {
    if (e) e.preventDefault();

    const purposeTab = document.querySelector('.search-tab-btn.active');
    const selectedPurpose = purposeTab ? purposeTab.dataset.purpose : 'all';

    const city = document.getElementById('hero-city-select').value;
    const locality = document.getElementById('hero-locality-input').value.trim();
    const type = document.getElementById('hero-type-select').value;
    const pricePreset = document.getElementById('hero-price-select').value;
    const beds = document.getElementById('hero-beds-select') ? document.getElementById('hero-beds-select').value : 'any';
    const baths = document.getElementById('hero-baths-select') ? document.getElementById('hero-baths-select').value : 'any';
    const verified = document.getElementById('hero-verified-only') ? document.getElementById('hero-verified-only').checked : false;

    state.filters.purpose = selectedPurpose;
    state.filters.city = city;
    state.filters.type = type;
    state.filters.bedrooms = beds;
    if (baths !== 'any') state.filters.bathrooms = baths;
    if (verified) state.filters.verifiedOnly = true;

    if (locality) {
      state.filters.search = locality;
      const discSearch = document.getElementById('discovery-search-input');
      if (discSearch) discSearch.value = locality;
    }

    if (pricePreset === 'under-50lac') {
      state.filters.minPrice = 0;
      state.filters.maxPrice = 5000000;
    } else if (pricePreset === '50lac-1cr') {
      state.filters.minPrice = 5000000;
      state.filters.maxPrice = 10000000;
    } else if (pricePreset === '1cr-3cr') {
      state.filters.minPrice = 10000000;
      state.filters.maxPrice = 30000000;
    } else if (pricePreset === '3cr-plus') {
      state.filters.minPrice = 30000000;
      state.filters.maxPrice = null;
    } else {
      state.filters.minPrice = null;
      state.filters.maxPrice = null;
    }

    applyFilters();

    const discoverySec = document.getElementById('discovery');
    if (discoverySec) {
      discoverySec.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function filterByCategory(categoryName) {
    state.filters.category = categoryName;
    state.filters.type = 'all';
    applyFilters();

    const discoverySec = document.getElementById('discovery');
    if (discoverySec) {
      discoverySec.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function filterByType(typeName) {
    state.filters.type = typeName;
    applyFilters();

    const discoverySec = document.getElementById('discovery');
    if (discoverySec) {
      discoverySec.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function resetAllFilters() {
    state.filters.search = '';
    state.filters.purpose = 'all';
    state.filters.category = 'all';
    state.filters.type = 'all';
    state.filters.city = 'all';
    state.filters.minPrice = null;
    state.filters.maxPrice = null;
    state.filters.bedrooms = 'any';
    state.filters.bathrooms = 'any';
    state.filters.amenities = [];
    state.filters.verifiedOnly = false;
    state.filters.furnished = 'any';
    state.filters.sort = 'newest';

    const searchInput = document.getElementById('discovery-search-input');
    if (searchInput) searchInput.value = '';

    const sortSelect = document.getElementById('sort-dropdown');
    if (sortSelect) sortSelect.value = 'newest';

    const citySelect = document.getElementById('filter-city-select');
    if (citySelect) citySelect.value = 'all';

    const typeSelect = document.getElementById('filter-type-select');
    if (typeSelect) typeSelect.value = 'all';

    document.querySelectorAll('.filter-amenity-cb').forEach(cb => { cb.checked = false; });
    const verifiedCb = document.getElementById('filter-verified-only');
    if (verifiedCb) verifiedCb.checked = false;

    applyFilters();
    showToast('Filters reset to default');
  }

  function clearSpecificFilter(index) {
    if (window._currentChips && window._currentChips[index]) {
      window._currentChips[index].clear();
      applyFilters();
    }
  }

  function updateBadges() {
    const favBadge = document.getElementById('nav-fav-count');
    const compBadge = document.getElementById('nav-comp-count');

    if (favBadge) {
      favBadge.textContent = state.favorites.length;
      favBadge.style.display = state.favorites.length > 0 ? 'flex' : 'none';
    }
    if (compBadge) {
      compBadge.textContent = state.compare.length;
      compBadge.style.display = state.compare.length > 0 ? 'flex' : 'none';
    }
  }

  function toggleCurrency() {
    state.currency = state.currency === 'PKR' ? 'USD' : 'PKR';
    localStorage.setItem(STORAGE_KEYS.CURRENCY, state.currency);
    const btn = document.getElementById('currency-toggle-btn');
    if (btn) btn.textContent = state.currency;
    renderDiscoveryGrid();
    renderFeaturedGrid();
    renderFavoritesDrawer();
    showToast(`Currency switched to ${state.currency}`);
  }

  function toggleMobileMenu() {
    const drawer = document.getElementById('mobile-nav-drawer');
    const overlay = document.getElementById('mobile-nav-overlay');
    if (drawer && overlay) {
      const isOpen = drawer.classList.contains('open');
      drawer.classList.toggle('open', !isOpen);
      overlay.classList.toggle('open', !isOpen);
      document.body.style.overflow = isOpen ? '' : 'hidden';
    }
  }

  function openAuthModal() {
    const modal = document.getElementById('auth-modal');
    if (modal) {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeAuthModal() {
    const modal = document.getElementById('auth-modal');
    if (modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    state.user = { email: email, name: email.split('@')[0], role: 'Verified Member' };
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(state.user));
    updateUserAuthUI();
    closeAuthModal();
    showToast(`Welcome back, ${state.user.name}! 👋`);
  }

  function updateUserAuthUI() {
    const authBtn = document.getElementById('nav-auth-btn');
    if (!authBtn) return;
    if (state.user) {
      authBtn.innerHTML = `👤 ${state.user.name}`;
      authBtn.onclick = () => {
        const dashSec = document.getElementById('dashboard-section');
        if (dashSec) dashSec.scrollIntoView({ behavior: 'smooth' });
      };
    } else {
      authBtn.innerHTML = 'Login';
      authBtn.onclick = openAuthModal;
    }
  }

  // --------------------------------------------------------------------------
  // 16. EVENT LISTENERS
  // --------------------------------------------------------------------------
  function setupEventListeners() {
    window.addEventListener('scroll', () => {
      const header = document.querySelector('.site-header');
      if (header) {
        if (window.scrollY > 40) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    });

    document.querySelectorAll('.search-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.search-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    document.querySelectorAll('.filter-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.activeCategoryPill = pill.dataset.pill;
        renderFeaturedGrid();
      });
    });

    document.querySelectorAll('.how-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.how-tab-btn').forEach(b => b.classList.remove('btn-primary', 'active'));
        document.querySelectorAll('.how-tab-btn').forEach(b => b.classList.add('btn-secondary'));
        btn.classList.remove('btn-secondary');
        btn.classList.add('btn-primary', 'active');

        const mode = btn.dataset.how;
        const buyerSteps = document.getElementById('how-buyer-steps');
        const sellerSteps = document.getElementById('how-seller-steps');
        if (buyerSteps && sellerSteps) {
          buyerSteps.style.display = mode === 'buyer' ? 'grid' : 'none';
          sellerSteps.style.display = mode === 'seller' ? 'grid' : 'none';
        }
      });
    });

    const searchInput = document.getElementById('discovery-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.filters.search = e.target.value;
        applyFilters();
      });
    }

    const sortDropdown = document.getElementById('sort-dropdown');
    if (sortDropdown) {
      sortDropdown.addEventListener('change', (e) => {
        state.filters.sort = e.target.value;
        sortFilteredProperties();
        renderDiscoveryGrid();
      });
    }

    const cityFilter = document.getElementById('filter-city-select');
    if (cityFilter) {
      cityFilter.addEventListener('change', (e) => {
        state.filters.city = e.target.value;
        applyFilters();
      });
    }

    const typeFilter = document.getElementById('filter-type-select');
    if (typeFilter) {
      typeFilter.addEventListener('change', (e) => {
        state.filters.type = e.target.value;
        applyFilters();
      });
    }

    const verifiedFilter = document.getElementById('filter-verified-only');
    if (verifiedFilter) {
      verifiedFilter.addEventListener('change', (e) => {
        state.filters.verifiedOnly = e.target.checked;
        applyFilters();
      });
    }

    document.querySelectorAll('.filter-amenity-cb').forEach(cb => {
      cb.addEventListener('change', () => {
        const checked = [];
        document.querySelectorAll('.filter-amenity-cb:checked').forEach(c => checked.push(c.value));
        state.filters.amenities = checked;
        applyFilters();
      });
    });

    const curBtn = document.getElementById('currency-toggle-btn');
    if (curBtn) {
      curBtn.textContent = state.currency;
      curBtn.addEventListener('click', toggleCurrency);
    }

    // Dashboard Tabs
    document.querySelectorAll('.dash-tab-btn').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.dash-tab-btn').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const targetPanel = tab.dataset.panel;
        const panelProps = document.getElementById('dash-panel-properties');
        const panelInqs = document.getElementById('dash-panel-inquiries');
        const panelBookings = document.getElementById('dash-panel-bookings');

        if (panelProps) panelProps.style.display = targetPanel === 'properties' ? 'block' : 'none';
        if (panelInqs) panelInqs.style.display = targetPanel === 'inquiries' ? 'block' : 'none';
        if (panelBookings) panelBookings.style.display = targetPanel === 'bookings' ? 'block' : 'none';
      });
    });

    // Outside click dismiss for WhatsApp Popover
    document.addEventListener('click', (e) => {
      const popover = document.getElementById('whatsapp-popover') || document.getElementById('whatsapp-modal');
      const waBtn = document.querySelector('.floating-whatsapp-btn');
      if (popover && popover.classList.contains('open')) {
        if (!popover.contains(e.target) && (!waBtn || !waBtn.contains(e.target)) && !e.target.closest('#modal-agent-wa-btn')) {
          closeWhatsAppModal();
        }
      }
    });

    // Global ESC Key Handler to close open modals/drawers
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closePropertyModal();
        closeInquiryModal();
        closePaymentModal();
        closeListPropertyModal();
        closeWhatsAppModal();
        closeFavoritesDrawer();
        closeCompareModal();
        closeAuthModal();
      }
    });

    updateUserAuthUI();
  }

  // ==========================================================================
  // TOP ANNOUNCEMENT TICKER HORIZONTAL CAROUSEL
  // ==========================================================================
  function initTopTickerCarousel() {
    const track = document.getElementById('topTickerTrack');
    if (!track) return;
    const slides = track.querySelectorAll('.top-ticker-slide');
    if (slides.length <= 1) return;

    let currentIndex = 0;
    const totalSlides = slides.length;
    let autoPlayTimer = null;

    function goToSlide(index) {
      currentIndex = (index + totalSlides) % totalSlides;
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function startAutoPlay() {
      stopAutoPlay();
      autoPlayTimer = setInterval(() => {
        goToSlide(currentIndex + 1);
      }, 3500);
    }

    function stopAutoPlay() {
      if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
        autoPlayTimer = null;
      }
    }

    const container = track.parentElement;
    if (container) {
      container.addEventListener('mouseenter', stopAutoPlay);
      container.addEventListener('mouseleave', startAutoPlay);
      container.addEventListener('touchstart', stopAutoPlay, { passive: true });
      container.addEventListener('touchend', startAutoPlay, { passive: true });
    }

    goToSlide(0);
    startAutoPlay();
  }

  document.addEventListener('DOMContentLoaded', () => {
    initializeProperties();
    setupEventListeners();
    renderCompareFloatingBar();
    initTopTickerCarousel();

    // Support automatic trigger for ?action=list
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('action') === 'list') {
      setTimeout(() => {
        openListPropertyModal();
      }, 350);
    }
  });

  // Global Exports
  window.ZameenApp = {
    applyFilters,
    resetAllFilters,
    clearSpecificFilter,
    openPropertyModal,
    closePropertyModal,
    nextGalleryImage,
    prevGalleryImage,
    setGalleryIndex,
    toggleFavorite,
    openFavoritesDrawer,
    closeFavoritesDrawer,
    toggleCompare,
    openCompareModal,
    closeCompareModal,
    openListPropertyModal,
    closeListPropertyModal,
    setListingStep,
    onListingCategoryChange,
    onListingTypeChange,
    onListingPresetImageChange,
    validateAndGoToStep,
    renderAndGoToPreview,
    handleListingPublish,
    openInquiryModal,
    closeInquiryModal,
    handleInquiryFormSubmit,
    openPaymentModal,
    closePaymentModal,
    switchPaymentTab,
    handlePaymentSubmit,
    openWhatsAppModal,
    closeWhatsAppModal,
    handleWhatsAppSubmit,
    handleHeroSearch,
    toggleHeroAdvancedFilters,
    filterByCategory,
    filterByType,
    toggleMobileMenu,
    openAuthModal,
    closeAuthModal,
    handleLogin,
    toggleCurrency,
    initTopTickerCarousel
  };

})();
