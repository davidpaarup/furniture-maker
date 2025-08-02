export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  subcategory: string;
  woodType: string;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  weight: number;
  description: string;
  features: string[];
  rating: number;
  reviews: number;
  images: string[];
  inStock: boolean;
  isNew: boolean;
  isBestseller: boolean;
  isCustomizable: boolean;
  craftingTime: string;
  finishOptions: string[];
}

export const categories = [
  "All",
  "Dining",
  "Living Room",
  "Bedroom",
  "Office",
  "Storage",
  "Outdoor",
];

export const woodTypes = [
  "All Wood Types",
  "Oak",
  "Walnut",
  "Cherry",
  "Maple",
  "Pine",
  "Mahogany",
  "Birch",
];

export const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "$0 - $500", min: 0, max: 500 },
  { label: "$500 - $1,000", min: 500, max: 1000 },
  { label: "$1,000 - $2,000", min: 1000, max: 2000 },
  { label: "$2,000+", min: 2000, max: Infinity },
];

export const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Newest", value: "newest" },
  { label: "Best Rating", value: "rating" },
  { label: "Most Popular", value: "popular" },
];

export const furnitureProducts: Product[] = [
  {
    id: 1,
    name: "Rustic Dining Table",
    price: 1299,
    originalPrice: 1499,
    category: "Dining",
    subcategory: "Tables",
    woodType: "Oak",
    dimensions: { width: 72, height: 30, depth: 36 },
    weight: 85,
    description:
      "A beautiful handcrafted dining table made from solid oak with a rustic finish. Perfect for family gatherings and entertaining guests. Features a sturdy farmhouse-style base with mortise and tenon joinery.",
    features: [
      "Solid oak construction",
      "Hand-applied rustic finish",
      "Mortise and tenon joinery",
      "Seats 6-8 people comfortably",
      "Scratch and water resistant coating",
    ],
    rating: 4.9,
    reviews: 47,
    images: [
      "https://images.pexels.com/photos/2325302/pexels-photo-2325302.jpeg",
      "https://images.pexels.com/photos/2317542/pexels-photo-2317542.jpeg",
    ],
    inStock: true,
    isNew: false,
    isBestseller: true,
    isCustomizable: true,
    craftingTime: "4-6 weeks",
    finishOptions: ["Natural Oak", "Dark Walnut", "Weathered Gray"],
  },
  {
    id: 2,
    name: "Craftsman Bookshelf",
    price: 649,
    category: "Storage",
    subcategory: "Bookcases",
    woodType: "Cherry",
    dimensions: { width: 36, height: 72, depth: 12 },
    weight: 45,
    description:
      "Elegant cherry wood bookshelf with adjustable shelves and classic craftsman styling. Features beautiful grain patterns and hand-rubbed finish that highlights the natural beauty of the wood.",
    features: [
      "Solid cherry wood",
      "5 adjustable shelves",
      "Hand-rubbed finish",
      "Anti-tip safety features",
      "Craftsman-style design",
    ],
    rating: 4.8,
    reviews: 32,
    images: [
      "https://images.pexels.com/photos/11112738/pexels-photo-11112738.jpeg",
    ],
    inStock: true,
    isNew: true,
    isBestseller: false,
    isCustomizable: true,
    craftingTime: "2-3 weeks",
    finishOptions: ["Natural Cherry", "Dark Cherry", "Light Cherry"],
  },
  {
    id: 3,
    name: "Vintage Coffee Table",
    price: 899,
    originalPrice: 1099,
    category: "Living Room",
    subcategory: "Coffee Tables",
    woodType: "Walnut",
    dimensions: { width: 48, height: 18, depth: 24 },
    weight: 35,
    description:
      "Stunning walnut coffee table with vintage-inspired design. Features live edge details and hairpin legs for a perfect blend of rustic and modern aesthetics.",
    features: [
      "Live edge walnut slab",
      "Steel hairpin legs",
      "Natural wood grain",
      "Clear protective finish",
      "Mid-century modern style",
    ],
    rating: 4.7,
    reviews: 28,
    images: [
      "https://images.pexels.com/photos/608127/pexels-photo-608127.jpeg",
      "https://images.pexels.com/photos/11112740/pexels-photo-11112740.jpeg",
    ],
    inStock: true,
    isNew: false,
    isBestseller: true,
    isCustomizable: false,
    craftingTime: "3-4 weeks",
    finishOptions: ["Natural Walnut", "Dark Walnut"],
  },
  {
    id: 4,
    name: "Executive Desk",
    price: 1799,
    category: "Office",
    subcategory: "Desks",
    woodType: "Mahogany",
    dimensions: { width: 60, height: 30, depth: 30 },
    weight: 75,
    description:
      "Professional mahogany executive desk with traditional styling and modern functionality. Features built-in cable management and spacious drawers for office organization.",
    features: [
      "Solid mahogany construction",
      "3 spacious drawers",
      "Built-in cable management",
      "Leather desk pad included",
      "Traditional dovetail joints",
    ],
    rating: 4.9,
    reviews: 19,
    images: [
      "https://images.pexels.com/photos/3143813/pexels-photo-3143813.jpeg",
      "https://images.pexels.com/photos/11112745/pexels-photo-11112745.jpeg",
    ],
    inStock: true,
    isNew: true,
    isBestseller: false,
    isCustomizable: true,
    craftingTime: "5-7 weeks",
    finishOptions: ["Rich Mahogany", "Dark Mahogany"],
  },
  {
    id: 5,
    name: "Farmhouse Dining Chairs",
    price: 249,
    category: "Dining",
    subcategory: "Chairs",
    woodType: "Pine",
    dimensions: { width: 18, height: 36, depth: 20 },
    weight: 12,
    description:
      "Set of 2 farmhouse-style dining chairs crafted from sustainable pine. Features comfortable curved backs and sturdy construction perfect for everyday dining.",
    features: [
      "Sustainable pine wood",
      "Ergonomic curved back",
      "Sold in sets of 2",
      "Natural wood finish",
      "Easy assembly",
    ],
    rating: 4.6,
    reviews: 54,
    images: [
      "https://images.pexels.com/photos/11112738/pexels-photo-11112738.jpeg",
    ],
    inStock: true,
    isNew: false,
    isBestseller: true,
    isCustomizable: false,
    craftingTime: "1-2 weeks",
    finishOptions: ["Natural Pine", "White Wash", "Dark Stain"],
  },
  {
    id: 6,
    name: "Platform Bed Frame",
    price: 1149,
    category: "Bedroom",
    subcategory: "Beds",
    woodType: "Maple",
    dimensions: { width: 64, height: 14, depth: 84 },
    weight: 65,
    description:
      "Minimalist maple platform bed frame with clean lines and modern design. No box spring required. Features smooth-sanded surfaces and eco-friendly finishes.",
    features: [
      "Solid maple construction",
      "No box spring needed",
      "Queen size (King available)",
      "Low profile design",
      "Eco-friendly finish",
    ],
    rating: 4.8,
    reviews: 41,
    images: [
      "https://images.pexels.com/photos/30761844/pexels-photo-30761844.jpeg",
    ],
    inStock: true,
    isNew: true,
    isBestseller: false,
    isCustomizable: true,
    craftingTime: "3-4 weeks",
    finishOptions: ["Natural Maple", "Honey Maple", "Espresso"],
  },
  {
    id: 7,
    name: "Storage Ottoman",
    price: 349,
    category: "Living Room",
    subcategory: "Ottomans",
    woodType: "Birch",
    dimensions: { width: 24, height: 18, depth: 16 },
    weight: 18,
    description:
      "Versatile storage ottoman with upholstered top and hidden storage compartment. Perfect for extra seating or as a coffee table with storage.",
    features: [
      "Hidden storage compartment",
      "Upholstered top cushion",
      "Birch wood frame",
      "Multiple fabric options",
      "Dual-purpose functionality",
    ],
    rating: 4.5,
    reviews: 23,
    images: [
      "https://images.pexels.com/photos/11112745/pexels-photo-11112745.jpeg",
    ],
    inStock: true,
    isNew: false,
    isBestseller: false,
    isCustomizable: true,
    craftingTime: "2-3 weeks",
    finishOptions: ["Natural Birch", "White Birch", "Dark Birch"],
  },
  {
    id: 8,
    name: "Garden Bench",
    price: 549,
    category: "Outdoor",
    subcategory: "Benches",
    woodType: "Cedar",
    dimensions: { width: 48, height: 34, depth: 20 },
    weight: 28,
    description:
      "Weather-resistant cedar garden bench perfect for outdoor spaces. Features natural resistance to insects and moisture, with comfortable contoured seating.",
    features: [
      "Weather-resistant cedar",
      "Natural insect resistance",
      "Contoured seating",
      "Outdoor-rated finish",
      "Easy maintenance",
    ],
    rating: 4.7,
    reviews: 18,
    images: [
      "https://images.pexels.com/photos/15365/pexels-photo.jpg",
      "https://images.pexels.com/photos/11112741/pexels-photo-11112741.jpeg",
    ],
    inStock: true,
    isNew: false,
    isBestseller: false,
    isCustomizable: false,
    craftingTime: "2-3 weeks",
    finishOptions: ["Natural Cedar", "Weathered Cedar"],
  },
  {
    id: 9,
    name: "Corner TV Stand",
    price: 799,
    category: "Living Room",
    subcategory: "Entertainment",
    woodType: "Oak",
    dimensions: { width: 42, height: 24, depth: 20 },
    weight: 40,
    description:
      "Space-saving corner TV stand with cable management and storage shelves. Perfect for modern living rooms with limited space.",
    features: [
      "Corner space optimization",
      "Cable management system",
      "Two storage shelves",
      'Supports TVs up to 55"',
      "Solid oak construction",
    ],
    rating: 4.6,
    reviews: 31,
    images: [
      "https://images.pexels.com/photos/11112745/pexels-photo-11112745.jpeg",
    ],
    inStock: false,
    isNew: false,
    isBestseller: false,
    isCustomizable: true,
    craftingTime: "3-4 weeks",
    finishOptions: ["Natural Oak", "Dark Oak", "White Oak"],
  },
  {
    id: 10,
    name: "Floating Nightstand",
    price: 299,
    category: "Bedroom",
    subcategory: "Nightstands",
    woodType: "Walnut",
    dimensions: { width: 20, height: 6, depth: 12 },
    weight: 8,
    description:
      "Modern floating nightstand with hidden drawer and minimalist design. Mounts securely to wall for a clean, contemporary look.",
    features: [
      "Wall-mounted design",
      "Hidden soft-close drawer",
      "Minimalist profile",
      "Easy installation",
      "Walnut wood grain",
    ],
    rating: 4.8,
    reviews: 26,
    images: [
      "https://images.pexels.com/photos/11112745/pexels-photo-11112745.jpeg",
    ],
    inStock: true,
    isNew: true,
    isBestseller: false,
    isCustomizable: false,
    craftingTime: "1-2 weeks",
    finishOptions: ["Natural Walnut", "Dark Walnut"],
  },
  {
    id: 11,
    name: "Dining Room Sideboard",
    price: 1449,
    category: "Dining",
    subcategory: "Storage",
    woodType: "Cherry",
    dimensions: { width: 72, height: 36, depth: 18 },
    weight: 85,
    description:
      "Elegant cherry wood sideboard with ample storage for dining room essentials. Features soft-close doors and adjustable shelving.",
    features: [
      "Solid cherry construction",
      "Soft-close cabinet doors",
      "Adjustable interior shelving",
      "Wine glass storage",
      "Hand-rubbed finish",
    ],
    rating: 4.9,
    reviews: 15,
    images: [
      "https://images.pexels.com/photos/11112740/pexels-photo-11112740.jpeg",
      "https://images.pexels.com/photos/2325302/pexels-photo-2325302.jpeg",
    ],
    inStock: true,
    isNew: false,
    isBestseller: true,
    isCustomizable: true,
    craftingTime: "4-5 weeks",
    finishOptions: ["Natural Cherry", "Dark Cherry", "Antique Cherry"],
  },
  {
    id: 12,
    name: "Accent Chair",
    price: 749,
    category: "Living Room",
    subcategory: "Chairs",
    woodType: "Maple",
    dimensions: { width: 28, height: 32, depth: 30 },
    weight: 22,
    description:
      "Comfortable accent chair with maple frame and premium upholstery. Perfect for reading nooks or as additional seating in living spaces.",
    features: [
      "Maple wood frame",
      "Premium fabric upholstery",
      "Ergonomic design",
      "Multiple color options",
      "Sturdy construction",
    ],
    rating: 4.7,
    reviews: 39,
    images: [
      "https://images.pexels.com/photos/11112735/pexels-photo-11112735.jpeg",
    ],
    inStock: true,
    isNew: false,
    isBestseller: false,
    isCustomizable: true,
    craftingTime: "3-4 weeks",
    finishOptions: ["Natural Maple", "Dark Maple", "White Maple"],
  },
];
