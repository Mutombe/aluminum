// Company information
export const companyInfo = {
  name: "Architectural Aluminium",
  tagline: "The Leading Fabricator of Aluminium, Shop Fitting & Joinery Products",
  founded: 1994,
  founder: "David Stally",
  factorySize: "50,000 square metres",
  address: "25 Connaught Road, Avondale, Harare",
  phone: ["+263 778 498 911", "+263 334566/9", "+263 773 687 010/11"],
  email: "sales@hotali.co.zw",
  website: "www.archaluminium.co.zw",
  hours: "Mon - Fri 09:00 - 17:00",
  memberships: ["CIFOZ"],
  stats: {
    customers: 15000,
    projects: 15000,
    years: 30,
    teamMembers: 50
  },
  social: {
    facebook: "https://facebook.com/archalu",
    linkedin: "https://linkedin.com/company/architectural-aluminium",
    instagram: "https://instagram.com/archalu_zw"
  }
};

// Services data
export const services = [
  {
    id: "fenestration",
    title: "Fenestration",
    shortDesc: "Doors, windows, and glass solutions",
    description: "Premium fenestration solutions including doors, windows, shower cubicles, shop fronts, curtain walling, access mantraps, and frameless glass doors. We combine precision engineering with aesthetic excellence.",
    features: [
      "Aluminium Doors & Windows",
      "Shower Cubicles",
      "Shop Fronts",
      "Curtain Walling",
      "Access Mantraps",
      "Frameless Glass Doors"
    ],
    icon: "Window"
  },
  {
    id: "shopfitting",
    title: "Shopfitting & Joinery",
    shortDesc: "Interior solutions for commercial spaces",
    description: "Transform your commercial space with our expert shopfitting and joinery services. From retail displays to corporate workstations, we create environments that inspire.",
    features: [
      "Shop Product Display",
      "Interior Modelling",
      "Bank Teller Stations",
      "Office Workstations",
      "Wall Panelling",
      "Custom Cabinetry"
    ],
    icon: "Store"
  },
  {
    id: "building-interiors",
    title: "Building Interiors",
    shortDesc: "Partitions, ceilings & balustrades",
    description: "Complete interior solutions including drywall partitions, suspended ceilings, and stainless steel balustrades. We bring architectural vision to life.",
    features: [
      "Drywall Partitions",
      "Aluminium Partitioning",
      "Frameless Partitioning",
      "Suspended Ceilings",
      "Stainless Steel Balustrades",
      "Interior Cladding"
    ],
    icon: "Building"
  },
  {
    id: "residential",
    title: "Residential Properties",
    shortDesc: "Home aluminium solutions",
    description: "Elevate your home with our premium residential aluminium products. From patio doors to louvre windows, we deliver beauty and functionality.",
    features: [
      "Patio Doors",
      "Sliding & Folding Doors",
      "Hinged & Pivot Doors",
      "Top & Side Hung Windows",
      "Louvre Windows",
      "Aluminium Cladded Doors"
    ],
    icon: "Home"
  },
  {
    id: "commercial-exteriors",
    title: "Commercial Exteriors",
    shortDesc: "Facades and entrance systems",
    description: "Make a statement with our commercial exterior solutions. Curtain walling, flush glazing, and entrance canopies designed for impact and durability.",
    features: [
      "Curtain Walling Systems",
      "Flush Glazing",
      "Shopfront Systems",
      "Entrance Canopies",
      "Facade Engineering",
      "Cladding Systems"
    ],
    icon: "Building2"
  }
];

// Projects data
export const projects = [
  {
    id: 1,
    title: "CBZ Bank Headquarters",
    category: "Commercial",
    location: "Harare CBD",
    year: 2023,
    description: "Complete shopfitting and aluminium installation for CBZ Bank's flagship headquarters, featuring custom teller stations and modern partitioning systems.",
    services: ["Shopfitting", "Bank Teller Stations", "Aluminium Partitioning"],
    // Vision: Modern glass-fronted bank building with reflective aluminium facade
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800"
  },
  {
    id: 2,
    title: "Sam Levy's Village Extension",
    category: "Retail",
    location: "Borrowdale, Harare",
    year: 2022,
    description: "Premium shopfront installations for multiple retail units in Zimbabwe's premier shopping destination.",
    services: ["Shopfronts", "Curtain Walling", "Entrance Canopies"],
    // Vision: Upscale shopping mall with glass storefronts
    image: "10.webp"
  },
  {
    id: 3,
    title: "Meikles Hotel Renovation",
    category: "Hospitality",
    location: "Harare CBD",
    year: 2023,
    description: "Heritage-sensitive aluminium window replacement and interior partitioning for Zimbabwe's iconic luxury hotel.",
    services: ["Fenestration", "Drywall Partitions", "Suspended Ceilings"],
    // Vision: Elegant hotel lobby with large glass panels
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800"
  },
  {
    id: 4,
    title: "Private Residence - Borrowdale Brooke",
    category: "Residential",
    location: "Borrowdale",
    year: 2024,
    description: "Luxury home featuring floor-to-ceiling sliding doors, custom louvre systems, and frameless glass balustrades.",
    services: ["Sliding Doors", "Louvre Windows", "Glass Balustrades"],
    // Vision: Modern luxury home with expansive glass walls
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800"
  },
  {
    id: 5,
    title: "Old Mutual Tower",
    category: "Commercial",
    location: "Harare CBD",
    year: 2022,
    description: "Major curtain walling project spanning 15 floors of Zimbabwe's tallest commercial building.",
    services: ["Curtain Walling", "Flush Glazing", "Entrance Systems"],
    // Vision: Tall glass skyscraper with reflective facade
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800"
  },
  {
    id: 6,
    title: "First Mutual Park",
    category: "Commercial",
    location: "Harare",
    year: 2023,
    description: "Complete exterior cladding and interior shopfitting for this modern corporate campus.",
    services: ["Cladding", "Shopfitting", "Office Workstations"],
    // Vision: Modern corporate office building
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800"
  },
  {
    id: 7,
    title: "Victoria Falls Airport",
    category: "Infrastructure",
    location: "Victoria Falls",
    year: 2021,
    description: "Aluminium facade and interior installations for Zimbabwe's premier tourist gateway.",
    services: ["Facade Engineering", "Interior Cladding", "Suspended Ceilings"],
    // Vision: Modern airport terminal with glass walls
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800"
  },
  {
    id: 8,
    title: "Edgars Stores Chain",
    category: "Retail",
    location: "Nationwide",
    year: 2023,
    description: "Standardised shopfront system rollout across 12 retail locations nationwide.",
    services: ["Shopfronts", "Shop Product Display", "Interior Modelling"],
    // Vision: Modern retail storefront with glass display
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800"
  }
];

// Team data
export const team = [
  {
    name: "David Stally",
    role: "Founder & CEO",
    bio: "Visionary leader who founded Architectural Aluminium in 1994 with a dream to become Zimbabwe's premier aluminium fabricator.",
    // Vision: Professional businessman portrait
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400"
  },
  {
    name: "Tendai Moyo",
    role: "Operations Director",
    bio: "20+ years of manufacturing expertise ensuring our 50,000 sqm factory runs at peak efficiency.",
    // Vision: Professional woman in hard hat/factory setting
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400"
  },
  {
    name: "James Ncube",
    role: "Technical Manager",
    bio: "Engineering excellence drives our precision fabrication, overseen by James's meticulous standards.",
    // Vision: Engineer with technical drawings
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
  },
  {
    name: "Rudo Chigwedere",
    role: "Sales Director",
    bio: "Building lasting relationships with 675+ customers through exceptional service and solutions.",
    // Vision: Professional saleswoman
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400"
  }
];

// News/Blog posts
export const news = [
  {
    id: 1,
    title: "Architectural Aluminium Celebrates 30 Years of Excellence",
    excerpt: "Three decades of innovation, quality, and market leadership in Zimbabwe's aluminium industry.",
    content: "Architectural Aluminium marks its 30th anniversary as Zimbabwe's leading aluminium fabricator. From humble beginnings in a backyard workshop in 1994, the company has grown into an industry giant with a 50,000 square metre factory and over 15000 completed projects.",
    date: "2024-06-04",
    category: "Company News",
    // Vision: Anniversary celebration or company milestone
    image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800"
  },
  {
    id: 2,
    title: "New Sustainable Aluminium Range Launched",
    excerpt: "Introducing eco-friendly aluminium products with recycled content and improved thermal efficiency.",
    content: "Responding to growing environmental awareness, Architectural Aluminium launches a new range of sustainable products featuring up to 75% recycled aluminium content and superior thermal performance.",
    date: "2024-03-15",
    category: "Products",
    // Vision: Green/sustainable building materials
    image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800"
  },
  {
    id: 3,
    title: "Partnership with International Glass Supplier",
    excerpt: "Strategic alliance brings world-class glazing solutions to the Zimbabwean market.",
    content: "Architectural Aluminium announces a strategic partnership with a leading international glass manufacturer, enabling us to offer the latest in energy-efficient and security glazing solutions.",
    date: "2024-01-20",
    category: "Partnerships",
    // Vision: Glass manufacturing or partnership handshake
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800"
  },
  {
    id: 4,
    title: "Award-Winning Victoria Falls Airport Project",
    excerpt: "Our facade engineering receives recognition at the Zimbabwe Construction Awards.",
    content: "The Victoria Falls International Airport project, featuring our innovative aluminium facade system, has been recognised with the Excellence in Construction Award.",
    date: "2023-11-08",
    category: "Awards",
    // Vision: Award ceremony or trophy
    image: "https://images.unsplash.com/photo-1532635241-17e820acc59f?w=800"
  }
];

// Career positions
export const careers = [
  {
    id: 1,
    title: "Aluminium Fabrication Technician",
    department: "Manufacturing",
    type: "Full-time",
    location: "Harare Factory",
    description: "Join our skilled fabrication team to create precision aluminium products using modern machinery.",
    requirements: [
      "National Certificate in Metal Fabrication or equivalent",
      "3+ years experience in aluminium fabrication",
      "Ability to read technical drawings",
      "Strong attention to detail"
    ]
  },
  {
    id: 2,
    title: "Project Manager",
    department: "Operations",
    type: "Full-time",
    location: "Harare Office",
    description: "Lead complex installation projects from tender to handover, ensuring quality and client satisfaction.",
    requirements: [
      "Degree in Engineering or Construction Management",
      "5+ years project management experience",
      "Strong leadership and communication skills",
      "Valid driver's licence"
    ]
  },
  {
    id: 3,
    title: "Sales Representative",
    department: "Sales",
    type: "Full-time",
    location: "Harare / Bulawayo",
    description: "Build relationships and drive revenue growth in the commercial and residential markets.",
    requirements: [
      "Diploma in Sales/Marketing or related field",
      "2+ years B2B sales experience",
      "Construction industry knowledge preferred",
      "Own reliable vehicle"
    ]
  },
  {
    id: 4,
    title: "CAD Draughtsperson",
    department: "Technical",
    type: "Full-time",
    location: "Harare Office",
    description: "Create detailed technical drawings and shop drawings for aluminium fabrication.",
    requirements: [
      "National Diploma in Draughting or Engineering",
      "Proficiency in AutoCAD and 3D modelling",
      "Understanding of aluminium systems",
      "Strong spatial awareness"
    ]
  }
];

// Gallery categories
export const galleryCategories = [
  "All",
  "Fenestration",
  "Shopfitting",
  "Commercial",
  "Residential",
  "Interiors"
];

// Gallery images
export const galleryImages = [
  {
    id: 1,
    category: "Commercial",
    title: "Curtain Walling Installation",
    // Vision: Large-scale curtain wall on commercial building
    src: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800"
  },
  {
    id: 2,
    category: "Fenestration",
    title: "Floor-to-Ceiling Windows",
    // Vision: Stunning floor-to-ceiling window installation
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800"
  },
  {
    id: 3,
    category: "Shopfitting",
    title: "Retail Store Interior",
    // Vision: Modern retail store interior with displays
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800"
  },
  {
    id: 4,
    category: "Residential",
    title: "Sliding Door System",
    // Vision: Elegant sliding door opening to patio
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
  },
  {
    id: 5,
    category: "Interiors",
    title: "Office Partitioning",
    // Vision: Modern office with glass partitions
    src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800"
  },
  {
    id: 6,
    category: "Commercial",
    title: "Shopfront Installation",
    // Vision: Attractive retail shopfront
    src: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=800"
  },
  {
    id: 7,
    category: "Fenestration",
    title: "Louvre Window System",
    // Vision: Modern louvre windows on building
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
  },
  {
    id: 8,
    category: "Shopfitting",
    title: "Bank Interior",
    // Vision: Modern bank interior with teller stations
    src: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=800"
  },
  {
    id: 9,
    category: "Residential",
    title: "Modern Home Facade",
    // Vision: Contemporary home with aluminium features
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800"
  },
  {
    id: 10,
    category: "Interiors",
    title: "Suspended Ceiling",
    // Vision: Elegant suspended ceiling installation
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800"
  },
  {
    id: 11,
    category: "Commercial",
    title: "Entrance Canopy",
    // Vision: Dramatic entrance canopy on commercial building
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800"
  },
  {
    id: 12,
    category: "Fenestration",
    title: "Frameless Glass Door",
    // Vision: Elegant frameless glass entrance
    src: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=800"
  }
];

// Searchable content for site search
export const searchableContent = [
  // Pages
  { type: "page", title: "Home", path: "/", keywords: ["home", "main", "welcome", "architectural aluminium"] },
  { type: "page", title: "About Us", path: "/about", keywords: ["about", "company", "history", "team", "who we are", "background"] },
  { type: "page", title: "Services", path: "/services", keywords: ["services", "what we do", "offerings", "solutions"] },
  { type: "page", title: "Projects", path: "/projects", keywords: ["projects", "portfolio", "work", "case studies", "featured"] },
  { type: "page", title: "Gallery", path: "/gallery", keywords: ["gallery", "photos", "images", "showcase"] },
  { type: "page", title: "Careers", path: "/careers", keywords: ["careers", "jobs", "positions", "employment", "work with us", "vacancies"] },
  { type: "page", title: "News", path: "/news", keywords: ["news", "blog", "updates", "articles", "announcements"] },
  { type: "page", title: "Contact", path: "/contact", keywords: ["contact", "get in touch", "enquiry", "quote", "location", "address", "phone"] },
  
  // Services
  { type: "service", title: "Fenestration", path: "/services#fenestration", keywords: ["fenestration", "windows", "doors", "glass", "shower cubicles", "curtain walling", "shopfronts"] },
  { type: "service", title: "Shopfitting & Joinery", path: "/services#shopfitting", keywords: ["shopfitting", "joinery", "retail", "display", "workstations", "bank teller", "interior"] },
  { type: "service", title: "Building Interiors", path: "/services#building-interiors", keywords: ["interiors", "partitions", "ceilings", "balustrades", "drywall", "suspended"] },
  { type: "service", title: "Residential Properties", path: "/services#residential", keywords: ["residential", "home", "house", "patio", "sliding doors", "louvre", "hinged"] },
  { type: "service", title: "Commercial Exteriors", path: "/services#commercial-exteriors", keywords: ["commercial", "exteriors", "facade", "cladding", "entrance", "canopy"] },
  
  // Contact info
  { type: "info", title: "Address", path: "/contact", keywords: ["address", "location", "25 connaught road", "avondale", "harare"] },
  { type: "info", title: "Phone", path: "/contact", keywords: ["phone", "telephone", "call", "+263", "778 498 911"] },
  { type: "info", title: "Email", path: "/contact", keywords: ["email", "sales@hotali.co.zw", "mail"] },
  
  // Company info
  { type: "info", title: "Factory", path: "/about", keywords: ["factory", "manufacturing", "50000", "square metres", "machinery"] },
  { type: "info", title: "Experience", path: "/about", keywords: ["experience", "years", "30", "since 1994", "established"] },
  { type: "info", title: "Quote", path: "/contact", keywords: ["quote", "pricing", "estimate", "cost", "enquiry"] }
];

// Resources
export const resources = [
  {
    title: "Company Profile",
    description: "Download our comprehensive company profile",
    type: "PDF",
    size: "2.4 MB"
  },
  {
    title: "Product Catalogue",
    description: "Browse our complete range of aluminium products",
    type: "PDF",
    size: "8.1 MB"
  },
  {
    title: "Smart Plan",
    description: "Our innovative approach to project planning",
    type: "PDF",
    size: "1.2 MB"
  }
];

// Testimonials
export const testimonials = [
  {
    quote: "Architectural Aluminium delivered exceptional quality on our headquarters project. Their attention to detail and professionalism is unmatched in Zimbabwe.",
    author: "Michael Chikwanda",
    role: "Facilities Director",
    company: "CBZ Holdings"
  },
  {
    quote: "Working with the team was seamless from design to installation. They truly understand the retail environment and delivered beyond our expectations.",
    author: "Susan Mpofu",
    role: "Operations Manager",
    company: "Edgars Stores"
  },
  {
    quote: "The quality of their fenestration products has transformed our properties. We've used them exclusively for all our developments.",
    author: "Robert Chinamasa",
    role: "Managing Director",
    company: "Mashonaland Holdings"
  }
];

// FAQ data
export const faqs = [
  {
    question: "What areas do you serve?",
    answer: "We primarily serve Zimbabwe, with our main operations based in Harare. However, we have completed projects across Southern Africa and can discuss international projects on a case-by-case basis."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. Small residential projects may take 2-4 weeks, while large commercial projects can span several months. We provide detailed timelines during the quotation process."
  },
  {
    question: "Do you provide installation services?",
    answer: "Yes, we offer complete design, fabrication, and installation services. Our experienced installation teams ensure precision fitting and proper sealing for all products."
  },
  {
    question: "What warranty do you offer?",
    answer: "We provide comprehensive warranties on all our products. Standard fenestration products carry a 10-year warranty, while shopfitting installations include a 5-year warranty. Specific terms are detailed in your contract."
  },
  {
    question: "Can you match existing aluminium finishes?",
    answer: "Yes, our powder coating facility can match virtually any colour. We work with industry-standard RAL colours and can create custom finishes to match your existing installations."
  }
];
