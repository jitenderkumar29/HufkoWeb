import { SubHeaderItem } from "@/components/Header/SubHeader/SubHeader";

export const ShopingCategories = [
   {
    id: "electronics",
    name: "Electronics",
    imageUrl: "/products/Electronics.png",
     url: "/",
  },
  {
    id: "home_decor",
    name: "Home Decor",
    imageUrl: "/products/homeDecor.png",
     url: "/",
  },
   {
    id: "home_furniture",
    name: "Home Furniture",
    imageUrl: "/products/HomeFurniture.png",
     url: "/",
  },
  {
    id: "mobiles_tablets",
    name: "Mobiles & Tablets",
    imageUrl: "/products/MobilesTablets.png",
     url: "/",
  },
  {
    id: "men",
    name: "Men",
    imageUrl: "/products/men.png",
     url: "/",
  },
  {
    id: "women",
    name: "Women",
    imageUrl: "/products/women.png",
     url: "/",
  },
  {
    id: "kids",
    name: "Kids",
    imageUrl: "/products/kids.png",
     url: "/",
  },
 
 
  {
    id: "tvs_appliances",
    name: "TVs & Appliances",
    imageUrl: "/products/TVsAppliances.png",
     url: "/",
  },
  // {
  //   name: "Flight Bookings",
  //   imageUrl: "/products/FlightBookings.png",
  // },
  {
    id: "beauty_food",
    name: "Beauty, Food",
    imageUrl: "/products/BeautyFood.png",
     url: "/",
  },
  {
    id: "toys_sports",
    name: "Toys & Sports",
    imageUrl: "/products/ToysSports.png",
     url: "/",
  },
  {
    id: "lifestyle",
    name: "Lifestyle",
    // name: "Apparel & Lifestyle",
    imageUrl: "/products/ApparelLifestyle.png",
     url: "/",
  },
  {
    id: "jewellery",
    name: "Jewellery",
    // name: "Jewellery & Accessories",
    imageUrl: "/products/JewelleryAccessories.png",
     url: "/",
  },
];

export const shoppingCategoriesSubHeader: SubHeaderItem[] = [
  { name: "All" },
  { name: "Electronics", id: "electronics" },  // Added id
  { name: "Home Decor", id: "home_decor" },    // Added id
  { name: "Home Furniture", id: "home_furniture" },
  { name: "Mobiles & Tablets", id: "mobiles_tablets" },
  { name: "Men", id: "men" },
  { name: "Women", id: "women" },
  { name: "Kids", id: "kids" },
  { name: "TVs & Appliances", id: "tvs_appliances" },
  { name: "Beauty, Food", id: "beauty_food" },
  { name: "Toys & Sports", id: "toys_sports" },
  { name: "Lifestyle", id: "lifestyle" },
  { name: "Jewellery", id: "jewellery" },
];

export const electronicsCategoriesData = [
  {
    id: "electronics",
    title: "Mobiles",
    items: [
      "Mobile accessories",
      "Cases & Covers",
      "Screen guards",
      "Power Banks",
      "Headsets",
      "Data Cables",
      "Chargers",
      "Selfie Sticks",
      "Skin Stickers",
      "Internal Batteries",
      "Mounts & Stands",
      "Lens Kits",
      "Replacement Parts"
    ],
    // image: {
    //   src: "/icons/mobileElectronics_1.png",
    //   title: "Mobiles",
    //   link: "/mobiles"
    // }
  },
  {
    title: "Mobile brands",
    items: [
      "Mi",
      "OnePlus",
      "Samsung",
      "Huawei",
      "Apple",
      "Motorola",
      "Nokia",
      "Vivo",
      "10.or",
      "Coolpad",
      "Honor",
      "Lenovo",
      "LG",
      "Micromax"
    ]
  },
  {
    title: "Accessories brand",
    items: [
      "OnePlus",
      "AmazonBasics",
      "Intex",
      "Ambrane",
      "Lenovo",
      "Spigen",
      "Jabra",
      "Apple",
      "Syska",
      "Boat",
      "Mivi",
      "iVoltaa"
    ]
  },
  {
    title: "Mobiles",
    items: [],
    image: {
      src: "/products/mobileElectronics.png",
      title: "Mobiles",
      link: "/mobiles"
    }
  },
  {
    title: "Mobile accessories",
    items: [],
    image: {
      src: "/products/mobile_brands.png",
      title: "Mobile Brands",
      link: "/accessories"
    }
  }
  ,
  {
    title: "Mobile accessories",
    items: [],
    image: {
      src: "/products/mobileAccessories.png",
      title: "Mobile accessories",
      link: "/accessories"
    }
  }
];

export const  homeFurnitureCategoriesData = [
  {
    id: "home_furniture",
    title: "Bedroom Linen",
    items: [
      "Bedsheets",
      "Bed Pillows",
      "Speciality Pillows",
      "Blankets & Quilts",
      "Mattress Protectors",
      "Bedding Sets",
      "Duvet Covers",
      "Fitted Bedsheets",
      "Pillow Cases",
      "Cushion Covers",
      "Cushions",
      "Slipcovers",
      "Diwan Sets"
    ]
  },
  {
    id: "bathroom_linen",
    title: "Bathroom Linen",
    items: [
      "Bath Mats",
      "Bath Pillows",
      "Bathrobes",
      "Shower Curtains",
      "Bath Towels"
    ]
  },
  {
    id: "curtains_accessories",
    title: "Curtains & Accessories",
    items: [
      "Curtains",
      "Blinds",
      "Valances",
      "Tiers",
      "Swags",
      "Accessories"
    ]
  },
  {
    id: "carpets_rugs",
    title: "Carpets & Rugs",
    items: [
      "Carpets",
      "Rugs",
      "Doormats",
      "Stair Carpets"
    ]
  },
  {
    id: "kitchen_linen",
    title: "Kitchen Linen",
    items: [
      "Aprons",
      "Place Mats",
      "Table Cloths",
      "Table Runners",
      "Oven Gloves"
    ]
  },
  {
    title: "Bedsheets",
    items: [],
    image: {
      src: "/products/bedsheets_home_decor.png",
      title: "Bedsheets",
      link: "/bedsheets"
    }
  },
  {
    title: "Cushions & Cushion Covers",
    items: [],
    image: {
      src: "/products/cushions_home_decor.png",
      title: "Cushions & Cushion Covers",
      link: "/cushions"
    }
  },
  {
    title: "Curtains",
    items: [],
    image: {
      src: "/products/curtains_home_decor.png",
      title: "Curtains",
      link: "/curtains"
    }
  }
];

export const homeDecorCategoriesData = [
  {
    id: "home_decor",
    title: "Wall Décor",
    items: [
      "Clocks",
      "Stickers",
      "Mirrors",
      "Wall Décor & Hanging"
    ]
  },
  {
    id: "table_accents",
    title: "Table Accents",
    items: [
      "Desk Clocks",
      "Candle Holders",
      "Candles",
      "Diyas & Lanterns",
      "Vases",
      "Ashtrays",
      "Decorative Plates"
    ]
  },
  {
    id: "home_decor_accents",
    title: "Home Décor Accents",
    items: [
      "Idols & Figurines",
      "Wind Chimes & Dream Catchers",
      "Fountains",
      "Artificial Flora",
      "Decorative Boxes",
      "Decorative Hookah Sets",
      "Fridge Magnets",
      "Fragrance"
    ]
  },
  {
    id: "festive_decor",
    title: "Festive Décor",
    items: [
      "Diwali Decorations",
      "Halloween Decorations",
      "Christmas Decorations"
    ]
  },
  {
    id: "childrens_room_decor",
    title: "Children's Room Décor",
    items: [
      "Wall Décor",
      "Wall Stickers",
      "Drawer Handles & Pull Clocks"
    ]
  },
  {
    title: "Wall Clocks",
    items: [],
    image: {
      src: "/products/wallClocks_home_furniture.png",
      title: "Wall Clocks",
      link: "/wall-clocks"
    }
  },
  {
    title: "Photo Frames",
    items: [],
    image: {
      src: "/products/photoFrames_home_furniture.png",
      title: "Photo Frames",
      link: "/photo-frames"
    }
  },
  {
    title: "Artworks",
    items: [],
    image: {
      src: "/products/artworks_home_furniture.png",
      title: "Artworks",
      link: "/artworks"
    }
  }
];

export const mobilesTabletsCategoriesData = [
  {
    id: "mobiles_tablets",
    title: "Mobiles & Tablets",
    items: [
      "Mobile accessories",
      "Cases & Covers",
      "Screen guards",
      "Power Banks",
      "Headsets",
      "Data Cables",
      "Chargers",
      "Selfie Sticks",
      "Skin Stickers",
      "Internal Batteries",
      "Mounts & Stands",
      "Lens Kits",
      "Replacement Parts"
    ]
  },
  {
    id: "mobile-brands",
    title: "Mobile brands",
    items: [
      "Mi",
      "OnePlus",
      "Samsung",
      "Huawei",
      "Apple",
      "Motorola",
      "Nokia",
      "Vivo",
      "10.or",
      "Coolpad",
      "Honor",
      "Lenovo",
      "LG",
      "Micromax"
    ]
  },
  {
    id: "accessories-brands",
    title: "Accessories brand",
    items: [
      "OnePlus",
      "AmazonBasics",
      "Intex",
      "Ambrane",
      "Lenovo",
      "Spigen",
      "Jabra",
      "Apple",
      "Syska",
      "Boat",
      "Mivi",
      "iVoltaa"
    ]
  },
  {
    id: "mobiles-featured",
    title: "Mobiles",
    items: [],
    image: {
      src: "/products/mobileElectronics.png",
      title: "Mobiles",
      link: "/mobiles"
    },
    seeMore: true
  },
  {
    id: "accessories-featured",
    title: "Mobile accessories",
    items: [],
    image: {
      src: "/products/mobileAccessories.png",
      title: "Mobile accessories",
      link: "/accessories"
    },
    seeMore: true
  }
  ,
  {
    id: "accessories-featured",
    title: "Tablets accessories",
    items: [],
    image: {
      src: "/products/tabletsAccessories.png",
      title: "Tablets & accessories",
      link: "/accessories"
    },
    seeMore: true
  }
];

export const menCategoriesData = [
  {
    id: "clothing",
    title: "CLOTHING",
    items: [
      "T-Shirts & Polos",
      "Shirts",
      "Trousers",
      "Jeans",
      "Innerwear",
      "Sportswear",
      "Sleep & Lounge Wear",
      "Ethnic Wear",
      "Ties, Socks & Belts",
      "Suits & Blazers",
      "Sweaters",
      "Jackets & Coats"
    ]
  },
  {
    id: "shoes",
    title: "SHOES",
    items: [
      "Sports Shoes",
      "Formal Shoes",
      "Casual Shoes",
      "Sneakers",
      "Loafers & Moccasins",
      "Flip-Floops",
      "Boots",
      "Sandals & Floaters",
      "Thong Sandals",
      "Boat Shoes"
    ]
  },
  {
    id: "watches",
    title: "WATCHES",
    items: [
      "Metallic",
      "Chronographs",
      "Leather"
    ]
  },
  {
    id: "jewellery",
    title: "JEWELLERY",
    items: [
      "Rings",
      "Bracelets"
    ]
  },
  {
    id: "eyewear",
    title: "EYEWEAR",
    items: [
      "Sunglasses",
      "Spectacle Frames"
    ]
  },
  {
    id: "wallets",
    title: "WALLETS",
    items: []
  },
  {
    id: "mens-clothing-featured",
    title: "Men's Clothing",
    items: [],
    image: {
      src: "/products/mensClothing.png",
      title: "Men's Clothing",
      link: "/mens-clothing"
    },
    exploreStore: true
  },
  {
    id: "running-shoes-featured",
    title: "Running Shoes",
    items: [],
    image: {
      src: "/products/runningShoes.png",
      title: "Running Shoes",
      link: "/running-shoes"
    },
    seeMore: true
  },
  {
    id: "max-just-launched",
    title: "MAX | Just Launched",
    items: [],
    image: {
      src: "/products/maxJustLaunched.png",
      title: "MAX | Just Launched",
      link: "/max-just-launched"
    },
    exploreStore: true
  }
];

export const womenCategoriesData = [
  {
    id: "clothing",
    title: "CLOTHING",
    items: [
      "New Arrivals",
      "Top Brands",
      "All Western Wear",
      "Shirts, Tops & Tees",
      "Dresses",
      "Jeans & Jeggings",
      "All Ethnic Wear",
      "Kurtas",
      "Salwar Suits",
      "Sarees",
      "Lingerie, Sleep & Lounge",
      "Sportswear",
      "HANDLOOMS & HANDICRAFTS"
    ]
  },
  {
    id: "shoes",
    title: "SHOES",
    items: [
      "Fashion Sandals",
      "Pumps & Peeptoes",
      "Casual Slippers",
      "Casual Shoes",
      "Boots",
      "Sports Shoes",
      "Flip-Flops",
      "Ballet Flats",
      "Ethnic Footwear",
      "Formal Shoes"
    ]
  },
  {
    id: "eyewear",
    title: "EYEWEAR",
    items: [
      "Sunglasses",
      "Spectacle Frames"
    ]
  },
  {
    id: "watches",
    title: "WATCHES",
    items: [
      "Gold & rose-gold",
      "Stainless steel",
      "Leather"
    ]
  },
  {
    id: "jewellery",
    title: "JEWELLERY",
    items: [
      "Gold & Diamond Jewellery",
      "Traditional Imitation",
      "Fashion Jewellery",
      "Silver Jewellery"
    ]
  },
  {
    id: "handbags-clutches",
    title: "HANDBAGS & CLUTCHES",
    items: [
      "Handbags",
      "Wallets"
    ]
  },
  {
    id: "womens-clothing-featured",
    title: "Women's Clothing",
    items: [],
    image: {
      src: "/products/womensClothing.png",
      title: "Women's Clothing",
      link: "/womens-clothing"
    },
    exploreStore: true
  },
  {
    id: "silver-jewellery-featured",
    title: "Silver Jewellery",
    items: [],
    image: {
      src: "/products/silverJewellery.png",
      title: "Silver Jewellery",
      link: "/silver-jewellery"
    },
    exploreStore: true
  },
  {
    id: "max-just-launched",
    title: "MAX | Just Launched",
    items: [],
    image: {
      src: "/products/maxJustLaunchedWomen.png",
      title: "MAX | Just Launched",
      link: "/max-just-launched"
    },
    exploreStore: true
  }
];

export const kidsCategoriesData = [
  {
    id: "girls",
    title: "GIRLS",
    items: [
      "ALL CLOTHING",
      "Tops & Tees",
      "Dresses",
      "Jeans",
      "Pants",
      "Clothing Sets",
      "Baby Girl"
    ]
  },
  {
    id: "girls-shoes",
    title: "SHOES",
    items: []
  },
  {
    id: "girls-watches",
    title: "WATCHES",
    items: []
  },
  {
    id: "girls-sunglasses",
    title: "SUNGLASSES",
    items: []
  },
  {
    id: "girls-jewellery",
    title: "JEWELLERY",
    items: []
  },
  {
    id: "boys",
    title: "BOYS",
    items: [
      "ALL CLOTHING",
      "T-Shirts",
      "Shirts",
      "Jeans",
      "Pants",
      "Clothing Sets",
      "Baby Boy"
    ]
  },
  {
    id: "boys-shoes",
    title: "SHOES",
    items: []
  },
  {
    id: "boys-watches",
    title: "WATCHES",
    items: []
  },
  {
    id: "boys-sunglasses",
    title: "SUNGLASSES",
    items: []
  },
  {
    id: "boys-jewellery",
    title: "JEWELLERY",
    items: []
  },
  {
    id: "kids",
    title: "KIDS",
    items: [
      "Clothing",
      "Shoes",
      "Watches",
      "Jewellery",
      "Sunglasses",
      "School Bags"
    ]
  },
  {
    id: "baby",
    title: "BABY",
    items: [
      "Clothing",
      "Shoes"
    ]
  },
  {
    id: "max-just-launched",
    title: "MAX | Just Launched",
    items: [],
    image: {
      src: "/products/maxJustLaunched.png",
      title: "MAX | Just Launched",
      link: "/max-just-launched"
    },
    exploreStore: true
  },
  {
    id: "boys-clothing-featured",
    title: "Boys' Clothing",
    items: [],
    image: {
      src: "/products/boysClothing.png",
      title: "Boys' Clothing",
      link: "/boys-clothing"
    },
    discount: "40% - 70% off"
  },
  {
    id: "girls-clothing-featured",
    title: "Girls' Clothing",
    items: [],
    image: {
      src: "/products/girlsClothing.png",
      title: "Girls' Clothing",
      link: "/girls-clothing"
    },
    discount: "40% - 70% off"
  }
];

export const tvsAppliancesCategoriesData = [
  {
    id: "televisions",
    title: "Televisions",
    items: [
      "Smart TVs",
      "32 inch TVs",
      "Large Screen TVs",
      "4K TVs",
      "Full HD TVs",
      "HD Ready TVs",
      "Google certified Android TVs",
      "Android based TVs",
      "Linux Smart TVs",
      "TVs with Web OS & Tizen"
    ]
  },
  {
    id: "shop-by-brand",
    title: "Shop by brand",
    items: [
      "Mi",
      "Sony",
      "Samsung",
      "LG",
      "Panasonic",
      "TCL",
      "BPL",
      "Micromax",
      "Onida",
      "Kodak",
      "Kevin",
      "OnePlus"
    ]
  },
  {
    id: "other-home-entertainment",
    title: "Other Home entertainment",
    items: [
      "Home theater systems",
      "Projectors & Accessories",
      "Set top Boxes",
      "Streaming media players",
      "DVD & Blu-ray players",
      "Cables",
      "Audio-video accessories"
    ]
  },
  {
    id: "all-home-entertainment",
    title: "All home entertainment systems",
    items: []
  },
  {
    id: "smart-tv-store",
    title: "Smart TV store",
    items: [],
    image: {
      src: "/products/smartTvStore.png",
      title: "Smart TV store",
      link: "/smart-tv-store"
    },
    seeMore: true
  },
  {
    id: "tv-buying-guide",
    title: "TV Buying Guide",
    items: [],
    image: {
      src: "/products/tvBuyingGuide.png",
      title: "TV Buying Guide",
      link: "/tv-buying-guide"
    },
    learnMore: true
  },
  {
    id: "home-entertainment-store",
    title: "Home entertainment store",
    items: [],
    image: {
      src: "/products/homeEntertainmentStore.png",
      title: "Home entertainment store",
      link: "/home-entertainment-store"
    },
    seeMore: true
  }
];

// Map all category data
export const categoriesDataMap = {
  electronics: electronicsCategoriesData,
  home_decor: homeDecorCategoriesData,
  home_furniture: homeFurnitureCategoriesData, // Reuse or create specific data
  // mobiles_tablets: mobilesTabletsCategoriesData,
  // men: menCategoriesData,
  // women: womenCategoriesData, // Create this
  // kids: kidsCategoriesData, // Create this
  // tvs_appliances: tvsAppliancesCategoriesData, // Create this
  // beauty_food: beautyFoodCategoriesData, // Create this
  // toys_sports: toysSportsCategoriesData, // Create this
  // lifestyle: lifestyleCategoriesData, // Create this
  // jewellery: jewelleryCategoriesData, // Create this
};

