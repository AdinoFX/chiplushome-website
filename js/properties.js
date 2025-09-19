const properties = [
    {
    id: 1,
    title: "Lekki Avana Phase II",
    price: 76000000, // The lowest price to display on cards
    location: "Eleranigbe, Lekki-Epe Expressway",
    type: "Apartment",
    size: 500,
    sizeUnit: "sqm",
    bedrooms: "3-4 Bedrooms", // General description for cards
    status: "For Sale",
    offer: "Fast Selling!",
    mainImage: "./images/la6.jpeg",
    gallery: ["./images/la2.jpeg", "./images/la3.jpeg", "./images/la4.jpeg", "./images/la1.jpeg", "./images/la5.jpeg", "./images/la7.jpeg", "./images/la8.jpeg", "./images/la9.jpeg", "./images/la10.jpeg"],
    
    // --- UPDATED & SUMMARIZED DESCRIPTION ---
    description: "Experience refined living at Lekki Avana Phase II, where every detail reflects exclusivity and value. This estate guarantees a resort lifestyle with 24/7 security, swimming pools, and eco-friendly smart homes, securing a future rooted in comfort and opportunity. With Phase 1 selling out in just 18 days, this is a legacy for generations.",
    
    // --- NEW DETAILED STRUCTURE ---
    titleDeed: "Government Allocated C of O",
    paymentPlan: "Secure your unit with an initial deposit of ₦5 Million and spread payment for up to 12 months.",
    
    // Array to hold different house types and prices
    houseTypes: [
        {
            name: "3-Bedroom + Pool",
            finishedPrice: 76000000,
            carcassPrice: 64000000
        },
        {
            name: "3-Bedroom without Pool",
            finishedPrice: 68000000,
            carcassPrice: 56000000
        },
        {
            name: "4-Bedroom + Pool",
            finishedPrice: 81000000,
            carcassPrice: 69000000
        },
        {
            name: "4-Bedroom without Pool",
            finishedPrice: 73000000,
            carcassPrice: 61000000
        }
    ]
},

    {
    id: 2,
    title: "Arizon Estate",
    price: 30000000, // The lowest price for display on cards
    location: "Eleko, Ibeju Lekki",
    type: "Landed Property",
    size: 300, // Smallest available size
    sizeUnit: "sqm",
    bedrooms: "N/A",
    status: "For Sale",
    offer: "High ROI!",
    mainImage: "./images/ar8.jpeg", // Action: Replace with a high-quality image
    gallery: ["./images/ar1.jpeg", "./images/ar2.jpeg", "./images/ar3.jpeg", "./images/ar4.jpeg", "./images/ar5.jpeg", "./images/ar6.jpeg", "./images/ar7.jpeg"], // Action: Replace with high-quality images

    // --- SUMMARIZED DESCRIPTION ---
    description: "Arizon Estate is one of the most sought-after residential estates in the Idera Scheme, Ibeju Lekki. With the value of land appreciating significantly, it offers the perfect blend of luxury, location, and long-term value for both home seekers and smart investors ready to own a piece of the new Lagos.",

    // --- NEW DETAILED STRUCTURE ---
    titleDeed: "Certificate of Occupancy",
    paymentPlan: "Secure your plot with an initial deposit of ₦3 Million, with flexible payment plans of 3, 6, 12, or 18 months available.",
    
    // Array to hold different land sizes and prices
    landSizes: [
        {
            size: "300 SQM",
            price: 30000000
        },
        {
            size: "500 SQM",
            price: 50000000
        }
    ],
    // This property does not have house types
    houseTypes: []
},


    {
    id: 3,
    title: "Cynergy Gardens Estate",
    price: 40000000, // The lowest price for display on cards
    location: "Igando-Oloja, Ibeju Lekki",
    type: "Apartment",
    size: 0, // Size varies by unit
    sizeUnit: "sqm",
    bedrooms: "1-4 Bedrooms",
    status: "For Sale",
    offer: "New Development",
    mainImage: "./images/cg1.jpeg", // Action: Replace with a high-quality image
    // gallery: ["./images/cynergy-2.jpg", "./images/cynergy-3.jpg"], // Action: Replace with high-quality images

    // --- SUMMARIZED DESCRIPTION ---
    description: "Discover luxury living at Cynergy Gardens Estate, featuring a wide range of beautifully designed apartments and terraces. With premium features like 24-hour power, a swimming pool, and state-of-the-art security, this is the pinnacle of comfort and convenience in Ibeju Lekki.",

    // --- NEW DETAILED STRUCTURE ---
    titleDeed: "TBD", // To be confirmed
    paymentPlan: "Secure your unit with an initial deposit of 30%, with a payment plan of up to 12 months.",
    
    // Array to hold the new apartment types and their unique prices
    apartmentTypes: [
        { name: "One Bedroom Studio Apartment", price: 40000000 },
        { name: "One Bedroom Maisonette", price: 50000000 },
        { name: "Two Bedroom Apartment", price: 60000000 },
        { name: "Two Bedroom Terrace", price: 80000000 },
        { name: "Two Bedroom Maisonette", price: 70000000 },
        { name: "Three Bedroom Terrace + BQ", price: 95000000 },
        { name: "Three Bedroom Apartment + BQ", price: 85000000 },
        { name: "Three Bedroom Penthouse + BQ", price: 90000000 },
        { name: "Four Bedroom Terrace + BQ", price: 100000000 },
        { name: "Four Bedroom Penthouse + BQ", price: 120000000 }
    ],
    
    // This property does not have the other pricing structures
    houseTypes: [],
    landSizes: []
},


    {
    id: 4,
    title: "Àrokò Farm & Resort",
    price: 2700000, // The lowest price for display on cards
    location: "Aiyetoro, Abeokuta & Ado-awaiye, Ibadan",
    type: "Farmland & Resort",
    size: 1, // Base size is per acre
    sizeUnit: "acre",
    bedrooms: "N/A",
    status: "For Sale",
    offer: "Agro-Investment",
    mainImage: "./images/aroko3.jpeg", // Action: Replace with a high-quality image
    gallery: ["./images/aroko2.jpeg", "./images/aroko1.jpeg", "./images/aroko4.jpeg", "./images/aroko5.jpeg", "./images/aroko6.jpeg"], // Action: Replace with high-quality images

    // --- SUMMARIZED DESCRIPTION ---
    description: "True wealth isn't just in land, it's in farming. Àrokò Farm & Resort offers the perfect blend of agriculture and lifestyle, where every acre is equity, stability, and generational wealth. Beyond farming, Àrokò offers an experience with horseback riding, kayaking, and farm-to-table dining.",

    // --- NEW DETAILED STRUCTURE ---
    titleDeed: "TBD", // To be confirmed
    paymentPlan: "Start your investment journey with an initial deposit from as low as ₦500,000.",
    
    // Array to hold the new farm investment types
    farmTypes: [
        { name: "Cocoa Estate (per acre)", price: 3000000 },
        { name: "Palm Tree Plantation (per acre)", price: 2700000 },
        { name: "Cashew Farm (per acre)", price: 2700000 },
        { name: "Cash Crop Cluster (per acre)", price: 2700000 },
        { name: "Livestock Cluster (per acre)", price: 3500000 },
        { name: "Ranch Cluster (minimum 5 acres)", price: 12500000 }
    ],
    
    // Ensure other pricing structures are empty
    houseTypes: [],
    landSizes: [],
    apartmentTypes: []
},
    {
    id: 5,
    title: "Ayora Haven",
    price: 25000000, // The lowest price for display on cards
    location: "Iberekodo, off Lekki/Epe Expressway, Ibeju-Lekki",
    type: "Landed Property",
    size: 300, // Smallest available size
    sizeUnit: "sqm",
    bedrooms: "N/A",
    status: "For Sale",
    offer: "Premium Location",
    mainImage: "./images/ayora-2.jpeg", // Action: Replace with a high-quality image
    gallery: ["./images/ayora-3.jpeg", "./images/ayora-4.jpeg", "./images/ayora-5.jpeg", "./images/ayora-6.jpeg"], // Action: Replace with high-quality images

    // --- SUMMARIZED DESCRIPTION ---
    description: "Discover luxury and comfort at Ayora Haven, a premium living experience in the heart of Lagos’ fastest-growing hub. With Government Allocation and top-tier infrastructure including 24-hour security and CCTV, your dream home or investment begins here. Secure your plot today and be part of this thriving, serene community.",

    // --- DETAILED STRUCTURE ---
    titleDeed: "Government Allocation",
    paymentPlan: "Contact us for flexible payment plan options.", // You can update this if a deposit is specified
    
    // This property uses the landSizes pricing structure
    landSizes: [
        {
            size: "300 SQM",
            price: 25000000
        },
        {
            size: "500 SQM",
            price: 40000000
        }
    ],
    
    // Ensure other pricing structures are empty
    houseTypes: [],
    apartmentTypes: [],
    farmTypes: []
},


    {
    id: 6,
    title: "AYHOMES Luxury Bungalow",
    price: 70000000, // The lowest current price for display
    location: "Igando, Ibeju-Lekki, Lagos",
    type: "Bungalow",
    size: 0, // Size not specified, can be updated later
    sizeUnit: "sqm",
    bedrooms: "4-Bedroom",
    status: "For Sale",
    //offer: "Price Increase!",
    mainImage: "./images/ayhomes1.jpeg", // Action: Replace with a high-quality image
    gallery: ["./images/ayhomes-2.jpeg", "./images/ayhomes-3.jpeg", "./images/ayhomes-4.jpeg", "./images/ayhomes-5.jpeg", "./images/ayhomes-6.jpeg", "./images/ayhomes-7.jpeg"], // Action: Replace with high-quality images

    // --- SUMMARIZED DESCRIPTION ---
    description: "Experience the perfect blend of elegance, comfort, and innovation with our 4-Bedroom Fully Detached Bungalows in the fast-rising Igando, Ibeju-Lekki. Designed to give you great value, this is everything you need in a modern home or investment. With prices increasing soon, now is the time to secure your unit.",

    // --- DETAILED STRUCTURE ---
    titleDeed: "Government Allocated C of O",
    paymentPlan: "Secure your unit with an initial deposit of ₦15 Million.",
    
    // This property uses a unique house type structure with a price increase
    houseTypes: [
        {
            name: "4-Bedroom Fully Detached",
            carcassCurrentPrice: 70000000,
            carcassNewPrice: 60000000,
            finishedCurrentPrice: 80000000,
            finishedNewPrice: 70000000,
            priceIncreaseDate: "September 15, 2025"
        }
    ],
    
    // Ensure other pricing structures are empty
    landSizes: [],
    apartmentTypes: [],
    farmTypes: []
},

{
    id: 7,
    title: "Peak Resort and Golf Course",
    price: 19990000, // The lowest price for display on cards
    location: "Lakowe, Ibeju-Lekki",
    type: "Landed Property",
    size: 300, // Smallest available size
    sizeUnit: "sqm",
    bedrooms: "N/A",
    status: "For Sale",
    offer: "Resort Living",
    mainImage: "./images/peak-resort-1.jpeg", // Action: Replace with a high-quality image
    //gallery: ["./images/peak-resort-2.jpg", "./images/peak-resort-3.jpg"], // Action: Replace with high-quality images

    // --- SUMMARIZED DESCRIPTION ---
    description: "Welcome to Peak Resort and Golf Course, where luxury living meets recreational excellence. Secure your plot in this premium Lakowe location and enjoy exclusive access to a golf course, resort-style amenities, and a serene, green environment perfect for your dream home or a smart investment.",

    // --- DETAILED STRUCTURE ---
    titleDeed: "Government Allocation / C of O",
    paymentPlan: "Initial Deposit: ₦3.99 Million. Flexible payment plans are available.",
    
    // New complex structure for land options with different payment plans
    landOptions: [
        {
            size: "300 SQM",
            price_0_6_months: 19990000,
            price_12_months: 20990000
        },
        {
            size: "450 SQM",
            price_0_6_months: 29990000,
            price_12_months: 31490000
        },
        {
            size: "600 SQM",
            price_0_6_months: 39990000,
            price_12_months: 41990000
        }
    ],
    otherFees: {
        devLevy: "₦5,000 per SQM",
        documentation: "₦1.5 Million"
    },
    
    // Ensure other pricing structures are empty
    houseTypes: [],
    landSizes: [],
    apartmentTypes: [],
    farmTypes: []
},

{
    id: 8,
    title: "Brum Heights 7",
    price: 250000000, // The lowest price for display on cards
    location: "Lekki Scheme 1, off Freedom Way, Lagos",
    type: "Apartment",
    size: 0, // Size not specified, can be updated
    sizeUnit: "sqm",
    bedrooms: "2-Bedroom",
    status: "For Sale",
    offer: "Almost Ready!",
    mainImage: "./images/brum-heights-1.jpeg", // Action: Replace with a high-quality image
    gallery: ["./images/brum-heights-2.jpeg", "./images/brum-heights-3.jpeg", "./images/brum-heights-4.jpeg", "./images/brum-heights-5.jpeg", "./images/brum-heights-6.jpeg"], // Action: Replace with high-quality images

    // --- SUMMARIZED DESCRIPTION ---
    description: "Brum Heights 7 is a dream to behold. This exquisite community offers beautiful 2-Bedroom Apartments in a serene, safe, and beautiful estate in the heart of Lekki, Lagos. Key into this nearly-completed project and make your home ownership journey stress-free.",

    // --- DETAILED STRUCTURE ---
    titleDeed: "TBD", // To be confirmed
    paymentPlan: "30% initial deposit with the balance spread through 12 months.",
    
    // New structure for different payment options
    paymentOptions: [
        {
            plan: "Outright Payment",
            price: 250000000
        },
        {
            plan: "12 Months Payment Plan",
            price: 270000000
        }
    ],
    
    // Ensure other pricing structures are empty
    houseTypes: [],
    landSizes: [],
    apartmentTypes: [],
    farmTypes: [],
    landOptions: []
},

{
    id: 9,
    title: "Citadel Oasis Semi-Detached House",
    price: 180000000, // The lowest price for display
    location: "Opposite Charterhouse School, Abraham Adesanya, Ajah, Lagos",
    type: "Semi-Detached House",
    size: 0, // Size not specified
    sizeUnit: "sqm",
    bedrooms: "4-Bedroom",
    status: "Currently Building",
    offer: "Solar Option",
    mainImage: "./images/citadel-1.jpeg", // Action: Replace with a high-quality image
    gallery: ["./images/citadel-2.jpeg", "./images/citadel-3.jpeg", "./images/citadel-4.jpeg", "./images/citadel-5.jpeg", "./images/citadel-6.jpeg", "./images/citadel-7.jpeg", "./images/citadel-8.jpeg", "./images/citadel-9.jpeg"], // Action: Replace with high-quality images

    // --- SUMMARIZED DESCRIPTION ---
    description: "Key in early and own a beautiful 4-Bedroom semi-detached house at the fully solar-powered Citadel Oasis. Located opposite The Charterhouse school, this is the perfect home for you in a serene and modern community.",

    // --- DETAILED STRUCTURE ---
    titleDeed: "TBD", // To be confirmed
    paymentPlan: "30% deposit with the balance spread through 8-12 months.",
    
    // New structure for different feature-based options
    featureOptions: [
        {
            name: "4 Bedroom Semi-Detached (With Solar)",
            price: 185000000
        },
        {
            name: "4 Bedroom Semi-Detached (Without Solar)",
            price: 180000000
        }
    ],
    
    // Ensure other pricing structures are empty
    houseTypes: [],
    landSizes: [],
    apartmentTypes: [],
    farmTypes: [],
    landOptions: [],
    paymentOptions: []
},

{
    id: 10,
    title: "Fully Serviced 2-Bed Smart Home",
    price: 130000000,
    location: "Salem, Ikate Lekki, Lagos",
    type: "Apartment",
    size: 0, // Size not specified, can be updated
    sizeUnit: "sqm",
    bedrooms: "2-Bedroom",
    status: "For Sale",
    offer: "Shortlet Suitable",
    mainImage: "./images/ikate-1.jpeg", // Action: Replace with a high-quality image
    gallery: ["./images/ikate-2.jpeg", "./images/ikate-3.jpeg", "./images/ikate-4.jpeg", "./images/ikate-5.jpeg", "./images/ikate-6.jpeg", "./images/ikate-7.jpeg", "./images/ikate-8.jpeg"], // Action: Replace with high-quality images

    // --- SUMMARIZED DESCRIPTION ---
    description: "A fully serviced 2-bedroom smart home apartment in the prestigious neighborhood of Ikate, Lekki. Featuring an automated lighting system, a fully fitted kitchen, and 24/7 security, this well-ventilated apartment is perfect for modern living or as a high-yield shortlet investment.",

    // --- DETAILED STRUCTURE ---
    titleDeed: "Governors Consent, Registered Survey, Building Approval",
    paymentPlan: "Contact us for payment plan details.",
    
    // This is a simple property, so complex pricing arrays are empty
    houseTypes: [],
    landSizes: [],
    apartmentTypes: [],
    farmTypes: [],
    landOptions: [],
    paymentOptions: [],
    featureOptions: []
},

{
    id: 11,
    title: "Landview City Aba Phase 2",
    price: 4700000, // The lowest price for display on cards
    location: "Ogbor Hill, Aba, Abia State",
    type: "Landed Property",
    size: 300, // Smallest available size
    sizeUnit: "sqm",
    bedrooms: "N/A",
    status: "For Sale",
    offer: "Fast Selling!",
    mainImage: "./images/landview-aba-1.jpeg", // Action: Replace with a high-quality image
    gallery: ["./images/landview-aba-2.jpeg", "./images/landview-aba-3.jpeg", "./images/landview-aba-4.jpeg"], // Action: Replace with high-quality images

    // --- SUMMARIZED DESCRIPTION ---
    description: "Aba’s real estate market is growing fast, and Landview City Aba Phase 2 offers another golden chance to invest in the future. Perfectly located and surrounded by key landmarks, this estate offers residential and commercial plots with guaranteed value appreciation. Phase 1 sold out quickly—don't miss out!",

    // --- DETAILED STRUCTURE ---
    titleDeed: "Certificate of Occupancy (C of O)",
    paymentPlan: "Initial Deposit: From ₦500,000",
    
    // This property uses the landSizes pricing structure
    landSizes: [
        {
            size: "300 SQM (Residential)",
            price: 4700000
        },
        {
            size: "450 SQM (Residential)",
            price: 7000000
        },
        {
            size: "500 SQM (Commercial)",
            price: 10000000
        }
    ],
    
    // Ensure other pricing structures are empty
    houseTypes: [],
    apartmentTypes: [],
    farmTypes: [],
    landOptions: [],
    paymentOptions: [],
    featureOptions: []
},

{
    id: 12,
    title: "Highbridge Residences Terrace Duplex",
    price: 90000000,
    location: "Abijo GRA, Lekki-Epe Expressway, Lagos",
    type: "Terrace Duplex + BQ",
    size: 0, // Size not specified
    sizeUnit: "sqm",
    bedrooms: "3-Bedroom",
    status: "For Sale",
    offer: "Modern Luxury",
    mainImage: "./images/highbridge-1.jpeg", // Action: Replace with a high-quality image
    //gallery: ["./images/highbridge-2.jpg", "./images/highbridge-3.jpg"], // Action: Replace with high-quality images

    // --- SUMMARIZED DESCRIPTION ---
    description: "Step into modern luxury with this 3-Bedroom Terrace Duplex + BQ, designed for families and investors who value style, comfort, and long-term returns. Located in the serene Abijo GRA, this home offers a perfect blend of elegant design and top-tier amenities.",

    // --- DETAILED STRUCTURE ---
    titleDeed: "Certificate of Occupancy (C of O)",
    paymentPlan: "Initial Deposit: ₦10M. Flexible payment plan available with balance spread up to 12 months.",
    
    // This is a simple property, so complex pricing arrays are empty
    houseTypes: [],
    landSizes: [],
    apartmentTypes: [],
    farmTypes: [],
    landOptions: [],
    paymentOptions: [],
    featureOptions: []
},

{
    id: 13,
    title: "Landview City Aba Phase 2",
    price: 3600000, // The lowest price for display on cards
    location: "Ogbor Hill, Aba, Abia State",
    type: "Landed Property",
    size: 300, // Smallest available size
    sizeUnit: "sqm",
    bedrooms: "N/A",
    status: "For Sale",
    offer: "Fast Selling!",
    mainImage: "./images/landview-1.jpeg", // Action: Replace with a high-quality image
    gallery: ["./images/landview-2.jpeg", "./images/landview-3.jpeg"], // Action: Replace with high-quality images

    // --- SUMMARIZED DESCRIPTION ---
    description: "Aba’s real estate market is booming, and Landview City Aba Phase 2 is your golden opportunity to invest in the future. Perfectly located and surrounded by key landmarks, this estate offers residential and commercial plots with guaranteed value appreciation. With Phase 1 selling out quickly, now is the time to secure your plot!",

    // --- DETAILED STRUCTURE ---
    titleDeed: "Certificate of Occupancy (C of O)",
    paymentPlan: "Initial Deposit: From ₦500,000",
    
    // This property uses the landSizes pricing structure
    landSizes: [
        {
            size: "300 SQM (Residential)",
            price: 3600000
        },
        {
            size: "450 SQM (Residential)",
            price: 5400000
        },
        {
            size: "500 SQM (Commercial)",
            price: 10000000
        }
    ],
    
    // Ensure other pricing structures are empty
    houseTypes: [],
    apartmentTypes: [],
    farmTypes: [],
    landOptions: [],
    paymentOptions: [],
    featureOptions: []
},

{
    id: 14,
    title: "City Nest Phase 6",
    price: 2700000, // The lowest price for display on cards
    location: "Ibefun, Ogun State",
    type: "Landed Property",
    size: 300, // Smallest available size
    sizeUnit: "sqm",
    bedrooms: "N/A",
    status: "For Sale",
    offer: "Affordable Investment",
    mainImage: "./images/city-nest-1.jpeg", // Action: Replace with a high-quality image
    gallery: ["./images/city-nest-2.jpeg", "./images/city-nest-3.jpeg", "./images/city-nest-4.jpeg", "./images/city-nest-5.jpeg"], // Action: Replace with high-quality images

    // --- SUMMARIZED DESCRIPTION ---
    description: "Looking for affordable land with high future value? City Nest Phase 6 in Ibefun, Ogun State, offers the perfect blend of affordability, security, and growth potential. With a secure title and 100% dry land ready for development, this estate is your best choice for building a dream home or investing for future returns.",

    // --- DETAILED STRUCTURE ---
    titleDeed: "Registered Survey & Deed of Sale",
    paymentPlan: "Initial Deposit: From ₦500,000",
    
    // This property uses the landSizes pricing structure
    landSizes: [
        {
            size: "300 SQM",
            price: 2700000
        },
        {
            size: "500 SQM",
            price: 4500000
        }
    ],
    
    // Ensure other pricing structures are empty
    houseTypes: [],
    apartmentTypes: [],
    farmTypes: [],
    landOptions: [],
    paymentOptions: [],
    featureOptions: []
},

{
    id: 15,
    title: "4-Bedroom Terrace Duplex",
    price: 150000000,
    location: "Orchid Road, Lekki, Lagos",
    type: "Terrace Duplex",
    size: 0, // Size not specified
    sizeUnit: "sqm",
    bedrooms: "4-Bedroom",
    status: "For Sale",
    offer: "Pay & Pack In",
    mainImage: "./images/orchid-road-1.jpeg", // Action: Replace with a high-quality image
    gallery: ["./images/orchid-road-2.jpeg", "./images/orchid-road-3.jpeg", "./images/orchid-road-4.jpeg", "./images/orchid-road-5.jpeg", "./images/orchid-road-6.jpeg", "./images/orchid-road-7.jpeg", "./images/orchid-road-8.jpeg"], // Action: Replace with high-quality images

    // --- SUMMARIZED DESCRIPTION ---
    description: "This fully serviced 4-bedroom terrace duplex in a beautiful, secure estate on Orchid Road, Lekki, is the perfect home for you. Ready for immediate move-in, it features all rooms ensuite, a fully fitted kitchen, inbuilt speakers, 24/7 security, and a constant power supply. Slide into our DM today and let's make your home ownership journey stress-free.",

    // --- DETAILED STRUCTURE ---
    titleDeed: "Governors Consent & Building Approval",
    paymentPlan: "Contact us for available payment plans.",
    
    // This is a simple property, so complex pricing arrays are empty
    houseTypes: [],
    landSizes: [],
    apartmentTypes: [],
    farmTypes: [],
    landOptions: [],
    paymentOptions: [],
    featureOptions: []
},

{
    id: 16,
    title: "6-Bedroom Contemporary Triplex",
    price: 180000000,
    location: "Orchid Hotel Road, Lekki, Lagos",
    type: "Triplex",
    size: 0, // Size not specified
    sizeUnit: "sqm",
    bedrooms: "6-Bedroom",
    status: "For Sale",
    offer: "Ocean View",
    mainImage: "./images/orchid-triplex-1.jpeg", // Action: Replace with a high-quality image
    gallery: ["./images/orchid-triplex-2.jpeg", "./images/orchid-triplex-3.jpeg", "./images/orchid-triplex-4.jpeg", "./images/orchid-triplex-5.jpeg", "./images/orchid-triplex-6.jpeg"], // Action: Replace with high-quality images

    // --- SUMMARIZED DESCRIPTION ---
    description: "Discover this corner piece 6-bedroom contemporary triplex in a serene, built-up estate on Orchid Hotel Road. Featuring a panoramic ocean view from the master's balcony, a 12Kva solar system, and luxurious finishes like a whirlpool jacuzzi and modern POP ceilings, this home is the epitome of high-end living. With close proximity to the Lagos-Calabar Coastal road and Chevron Head Office, it offers both luxury and convenience.",

    // --- DETAILED STRUCTURE ---
    titleDeed: "Certificate of Occupancy (C of O), Building Approval, Registered Survey",
    paymentPlan: "Contact us for available payment plans.",
    
    // This is a simple property, so complex pricing arrays are empty
    houseTypes: [],
    landSizes: [],
    apartmentTypes: [],
    farmTypes: [],
    landOptions: [],
    paymentOptions: [],
    featureOptions: []
},

{
    id: 17,
    title: "Contemporary 4-Bed Terrace Duplex",
    price: 325000000,
    location: "Ikate, Lekki, Lagos",
    type: "Terrace Duplex + BQ",
    size: 0, // Size not specified
    sizeUnit: "sqm",
    bedrooms: "4-Bedroom",
    status: "For Sale",
    offer: "Luxury Living",
    mainImage: "./images/ikate-duplex-1.jpeg", // Action: Replace with a high-quality image
    gallery: ["./images/ikate-duplex-2.jpeg", "./images/ikate-duplex-3.jpeg", "./images/ikate-duplex-4.jpeg", "./images/ikate-duplex-5.jpeg", "./images/ikate-duplex-6.jpeg", "./images/ikate-duplex-7.jpeg"], // Action: Replace with high-quality images

    // --- SUMMARIZED DESCRIPTION ---
    description: "For sale in a prestigious and secure neighborhood, this contemporary 4-bedroom terrace duplex with a BQ offers unparalleled luxury. Featuring all rooms ensuite, a massive fitted kitchen, inbuilt Bluetooth speakers, and modern POP ceilings, this home is perfect for shortlet investment or sophisticated family living.",

    // --- DETAILED STRUCTURE ---
    titleDeed: "Governor's Consent & Building Approval",
    paymentPlan: "Contact us for available payment plans.",
    
    // This is a simple property, so complex pricing arrays are empty
    houseTypes: [],
    landSizes: [],
    apartmentTypes: [],
    farmTypes: [],
    landOptions: [],
    paymentOptions: [],
    featureOptions: []
},

{
    id: 18,
    title: "Maven Estate Phase 2",
    price: 1950000, // The lowest total price for display on cards
    location: "Igbonla, Epe, Lagos",
    type: "Landed Property",
    size: 300, // Smallest available size
    sizeUnit: "sqm",
    bedrooms: "N/A",
    status: "For Sale",
    offer: "Buy 5 Get 1 Free!",
    mainImage: "./images/maven-estate-1.jpeg", // Action: Replace with a high-quality image
    gallery: ["./images/maven-estate-2.jpeg", "./images/maven-estate-3.jpeg", "./images/maven-estate-4.jpeg"], // Action: Replace with high-quality images

    // --- SUMMARIZED DESCRIPTION ---
    description: "Ever wondered how people own multiple properties? They invested early when prices were affordable. Here’s your chance at Maven Estate Phase 2 — a perfect blend of comfort, style, and promising returns in a fast-rising hub.",

    // --- DETAILED STRUCTURE ---
    titleDeed: "Registered Survey & Deed of Assignment",
    paymentPlan: "Contact us for available payment plans.",
    
    // New complex structure for plots with detailed fee breakdown
    landPlots: [
        {
            size: "500 SQM",
            landPrice: 2000000,
            devFee: 550000,
            documentation: 350000,
            totalPrice: 2900000
        },
        {
            size: "300 SQM",
            landPrice: 1200000,
            devFee: 500000,
            documentation: 250000,
            totalPrice: 1950000
        }
    ],
    specialOffer: "BUY 5 GET 1 FREE: Get 6 plots of 500sqm for a total of ₦14,500,000!",
    
    // Ensure other pricing structures are empty
    houseTypes: [],
    landSizes: [],
    apartmentTypes: [],
    farmTypes: [],
    landOptions: [],
    paymentOptions: [],
    featureOptions: []
},

{
    id: 19,
    title: "Native Pride Estate Phase 3",
    price: 1500000, // The lowest price for display
    location: "Ofada/Adejorin Town, near Mowe, Ogun State",
    type: "Landed Property",
    size: 300, // Smallest available size
    sizeUnit: "sqm",
    bedrooms: "N/A",
    status: "For Sale",
    offer: "Buy 6 Get 1 Free!",
    mainImage: "./images/native-pride-1.jpeg", // Action: Replace with a high-quality image
    gallery: ["./images/native-pride-2.jpeg", "./images/native-pride-3.jpeg", "./images/native-pride-4.jpeg"], // Action: Replace with high-quality images

    // --- SUMMARIZED DESCRIPTION ---
    description: "Native Pride Estate phase 3 is a perfect blend of affordability, serenity, and comfort. Strategically located in the heart of Ofada, just minutes from Mowe Market, it's a dream come true for everyone who desires a home or investment in a secure and friendly environment.",

    // --- DETAILED STRUCTURE ---
    titleDeed: "Registered Survey & Deed of Assignment",
    paymentPlan: "Pay ₦200,000 initial deposit and spread balance for 12 months with interest.",
    
    // This property uses the landSizes pricing structure
    landSizes: [
        {
            size: "300 SQM",
            price: 1500000
        },
        {
            size: "500 SQM",
            price: 2200000
        }
    ],

    specialOffer: "10% discount on outright payment. Buy 6 plots and get 1 free. Instant allocation on outright payment.",
    
    // Ensure other pricing structures are empty
    houseTypes: [],
    apartmentTypes: [],
    farmTypes: [],
    landOptions: [],
    paymentOptions: [],
    featureOptions: [],
    landPlots: []
},

{
    id: 20,
    title: "Victoria Island Smart Home Apartments",
    price: 300000000, // The lowest price for display
    location: "Victoria Island, Lagos, Nigeria",
    type: "Luxury Apartment",
    size: 0, // Size varies by unit
    sizeUnit: "sqm",
    bedrooms: "1, 3 & 4 Bedrooms",
    status: "For Sale",
    offer: "Ultra Luxury",
    mainImage: "./images/vi-smart-home-1.jpeg", // Action: Replace with a high-quality image
    gallery: ["./images/vi-smart-home-2.jpeg", "./images/vi-smart-home-3.jpeg", "./images/vi-smart-home-4.jpeg", "./images/vi-smart-home-5.jpeg"], // Action: Replace with high-quality images

    // --- SUMMARIZED DESCRIPTION ---
    description: "Presenting a 12-floor marvel of modern architecture in the heart of Victoria Island, featuring super luxurious smart homes. This is the only commercial property with Kohler fitted sanitary wares, full home automation, and exclusive amenities like a private cinema and gym for the penthouse. Ideal for both premium living and high-yield shortlet investment.",

    // --- DETAILED STRUCTURE ---
    titleDeed: "Governor's Consent, Registered Survey, Building Approval",
    paymentPlan: "The 1 Bedroom Apartment is available for outright purchase only. Please contact us for payment plans on other units.",
    
    // This property uses the apartmentTypes pricing structure
    apartmentTypes: [
        { 
            name: "1 Bedroom Apartment", 
            price: 300000000 
        },
        { 
            name: "3 Bedroom Flats + BQ", 
            price: 850000000 
        },
        { 
            name: "4 Bedroom Penthouse + BQ", 
            price: 3500000000 
        }
    ],
    
    // Ensure other pricing structures are empty
    houseTypes: [],
    landSizes: [],
    farmTypes: [],
    landOptions: [],
    paymentOptions: [],
    featureOptions: [],
    landPlots: []
},




];
