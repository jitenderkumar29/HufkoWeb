import { SubHeaderItem } from "@/components/Header/SubHeader/SubHeader";
import { HeroSlide } from "@/components/Shopping/HeroBanner/HeroBannerSlide/HeroBannerSlide";
import { BrandItem } from "@/components/Shopping/ItemListDesigns/TopBrandsOnOffer/TopBrandsOnOffer";
import { CategoryItem } from "@/components/Shopping/ShopByItemcategory/ShopByCategory/ShopByCategory";

export const ShopingCategories = [
   {
    id: "electronics",
    name: "Electronics",
    imageUrl: "/products/Electronics.png",
     url: "/electronics",
  },
  {
    id: "home_decor",
    name: "Home Decor",
    imageUrl: "/products/homeDecor.png",
     url: "/home_decor",
  },
   {
    id: "home_furniture",
    name: "Home Furniture",
    imageUrl: "/products/HomeFurniture.png",
     url: "/home_furniture",
  },
  {
    id: "mobiles_tablets",
    name: "Mobiles & Tablets",
    imageUrl: "/products/MobilesTablets.png",
     url: "/mobiles_tablets",
  },
  {
    id: "men",
    name: "Men",
    imageUrl: "/products/men.png",
     url: "/men",
  },
  {
    id: "women",
    name: "Women",
    imageUrl: "/products/women.png",
     url: "/women",
  },
  {
    id: "kids",
    name: "Kids",
    imageUrl: "/products/kids.png",
     url: "/kids",
  },
 
 
  {
    id: "tvs_appliances",
    name: "TVs & Appliances",
    imageUrl: "/products/TVsAppliances.png",
     url: "/tvs_appliances",
  },
  // {
  //   name: "Flight Bookings",
  //   imageUrl: "/products/FlightBookings.png",
  // },
  {
    id: "beauty_food",
    name: "Beauty, Food",
    imageUrl: "/products/BeautyFood.png",
     url: "/beauty_food",
  },
  {
    id: "toys_sports",
    name: "Toys & Sports",
    imageUrl: "/products/ToysSports.png",
     url: "/toys_sports",
  },
  {
    id: "lifestyle",
    name: "Lifestyle",
    // name: "Apparel & Lifestyle",
    imageUrl: "/products/ApparelLifestyle.png",
     url: "/lifestyle",
  },
  {
    id: "jewellery",
    name: "Jewellery",
    // name: "Jewellery & Accessories",
    imageUrl: "/products/JewelleryAccessories.png",
     url: "/jewellery",
  },
];

export const shoppingCategoriesSubHeader: SubHeaderItem[] = [
  { name: "All", url: "/" },
  { name: "Electronics", id: "electronics_sub_header", url: "/electronics" },
  { name: "Home Decor", id: "home_decor_sub_header", url: "/home_decor" },
  { name: "Home Furniture", id: "home_furniture_sub_header", url: "/home_furniture" },
  { name: "Mobiles & Tablets", id: "mobiles_tablets", url: "/mobiles_tablets" },
  { name: "Men's Fashion", id: "mens_fashion_sub_header", url: "/men" },
  { name: "Women's Fashion", id: "women_fashion_sub_header", url: "/women" },
  { name: "Kids' Fashion", id: "kids_fashion_sub_header", url: "/kids" },
  { name: "TVs & Appliances", id: "tvs_appliances_sub_header", url: "/tvs_appliances" },
  { name: "Beauty, Food", id: "beauty_food_sub_header", url: "/beauty_food" },
  { name: "Toys & Sports", id: "toys_sports_sub_header", url: "/toys_sports" },
  { name: "Lifestyle", id: "lifestyle_sub_header", url: "/lifestyle" },
  { name: "Jewellery", id: "jewellery_sub_header", url: "/jewellery" },
];

export const electronicsSubSubCategoriesSubHeader: SubHeaderItem[] = [
  { name: "Electronics", id: "electronics", url: "/electronics" },
  { name: "Mobiles & Accessories", id: "mobiles_accessories", url: "/mobiles_accessories" },
  { name: "Laptops & Accessories", id: "laptops_accessories", url: "/laptops_accessories" },
  { name: "TV & Home Entertainment", id: "tv_home_entertainment", url: "/tv_home_entertainment" },
  { name: "Audio", id: "audio", url: "/audio" },
  { name: "Cameras", id: "cameras", url: "/cameras" },
  { name: "Computer Peripherals", id: "computer_peripherals", url: "/computer_peripherals" },
  { name: "Smart Technology", id: "smart_technology", url: "/smart_technology" },
  { name: "Musical Instruments", id: "musical_instruments", url: "/musical_instruments" },
  { name: "Office & Stationery", id: "office_stationery", url: "/office_stationery" },
];

export const homeDecorSubSubCategoriesSubHeader: SubHeaderItem[] = [
  { name: "Home Decor", url: "/" },
  { name: "Wall Décor", id: "wall_decoration", url: "/home_decor" },
  { name: "Table Accents", id: "table_accents", url: "/home_decor" },
  { name: "Home Décor Accents", id: "home_decor_accents", url: "/home_decor" },
  { name: "Festive Décor", id: "festive_decor", url: "/home_decor" },
  { name: "Children's Room Décor", id: "childrens_room_decor", url: "/home_decor" },
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
    title: "Children's Room",
    items: [
      "Wall Décor",
      "Wall Stickers",
      "Drawer Handles",
      "Pull Clocks"
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

export const mobilesAccessoriesDropDownCategoriesData = [
  {
    id: "mobiles_accessories",
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
    ]
  },
  {
    id: "mobile_brands",
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
    id: "accessories_brands",
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

// Map all category data
export const categoriesDataMap = {
  electronics: electronicsCategoriesData,
  home_decor: homeDecorCategoriesData,
  home_furniture: homeFurnitureCategoriesData, // Reuse or create specific data
  mobiles_tablets: mobilesTabletsCategoriesData,
  mobiles_accessories: mobilesAccessoriesDropDownCategoriesData,
  // men: menCategoriesData,
  // women: womenCategoriesData, // Create this
  // kids: kidsCategoriesData, // Create this
  // tvs_appliances: tvsAppliancesCategoriesData, // Create this
  // beauty_food: beautyFoodCategoriesData, // Create this
  // toys_sports: toysSportsCategoriesData, // Create this
  // lifestyle: lifestyleCategoriesData, // Create this
  // jewellery: jewelleryCategoriesData, // Create this
};


export const ElectronicsCategories: CategoryItem[] = [
  { 
    id: 'laptops', 
    name: 'Laptops', 
    image: '/products/laptop._SS400_QL85_.jpg', 
    url: '/laptops',
    category: 'shopping',
    subCategory: 'electronics',
    subSubCategory: ''
  },
  { 
    id: 'headphones', 
    name: 'Headphones', 
    image: '/products/Headphones._SS400_QL85_.jpg', 
    url: '/headphones',
    category: 'shopping',
    subCategory: 'electronics',
    subSubCategory: ''
  },
  { 
    id: 'tablets', 
    name: 'Tablets', 
    image: '/products/02_Halos_copy._SS400_QL85_FMpng_.png', 
    url: '/tablets',
    category: 'shopping',
    subCategory: 'electronics',
    subSubCategory: ''
  },
  { 
    id: 'smartwatches', 
    name: 'Smartwatches', 
    image: '/products/Smartwatches._SS400_QL85_.jpg', 
    url: '/smartwatches',
    category: 'shopping',
    subCategory: 'electronics',
    subSubCategory: ''
  },
  { 
    id: 'monitors', 
    name: 'Monitors', 
    image: '/products/Monitors._SS400_QL85_.jpg', 
    url: '/monitors',
    category: 'shopping',
    subCategory: 'electronics',
    subSubCategory: ''
  },
  { 
    id: 'desktops', 
    name: 'Desktops', 
    image: '/products/Desktops._SS400_QL85_.jpg', 
    url: '/desktops',
    category: 'shopping',
    subCategory: 'electronics',
    subSubCategory: ''
  },
  { 
    id: 'video-games', 
    name: 'Video Games', 
    image: '/products/Video-game_Halo._SS400_QL85_FMpng_.png', 
    url: '/video-games',
    category: 'shopping',
    subCategory: 'electronics',
    subSubCategory: ''
  },
  { 
    id: 'gaming-laptops', 
    name: 'Gaming Laptops', 
    image: '/products/Gaming_Laptops._SS400_QL85_.jpg', 
    url: '/gaming-laptops',
    category: 'shopping',
    subCategory: 'electronics',
    subSubCategory: ''
  },
  { 
    id: 'camera-accessories', 
    name: 'Camera & Accessories', 
    image: '/products/Camera__Accessories._SS400_QL85_.jpg', 
    url: '/camera-accessories',
    category: 'shopping',
    subCategory: 'electronics',
    subSubCategory: ''
  },
  { 
    id: 'computer-accessories', 
    name: 'Computer Accessories', 
    image: '/products/Computer_Accessories._SS400_QL85_.jpg', 
    url: '/computer-accessories',
    category: 'shopping',
    subCategory: 'electronics',
    subSubCategory: ''
  },
  { 
    id: 'home-audio', 
    name: 'Home Audio', 
    image: '/products/9_audio._CB795899201_.png', 
    url: '/home-audio',
    category: 'shopping',
    subCategory: 'electronics',
    subSubCategory: ''
  },
  { 
    id: 'stationery', 
    name: 'Stationery', 
    image: '/products/Stationery._SS400_QL85_.jpg', 
    url: '/stationery',
    category: 'shopping',
    subCategory: 'electronics',
    subSubCategory: ''
  },
  { 
    id: 'musical-instruments', 
    name: 'Musical Instruments', 
    image: '/products/musical-instruments._SS400_QL85_.jpg', 
    url: '/musical-instruments',
    category: 'shopping',
    subCategory: 'electronics',
    subSubCategory: ''
  },
  { 
    id: 'software', 
    name: 'Software', 
    image: '/products/Software_Halo._SS400_QL85_.jpg', 
    url: '/software',
    category: 'shopping',
    subCategory: 'electronics',
    subSubCategory: ''
  },
  { 
    id: 'components', 
    name: 'Components', 
    image: '/products/components._SS400_QL85_.jpg', 
    url: '/components',
    category: 'shopping',
    subCategory: 'electronics',
    subSubCategory: ''
  },
  { 
    id: 'printer', 
    name: 'Printer', 
    image: '/products/printer._SS400_QL85_.jpg', 
    url: '/printer',
    category: 'shopping',
    subCategory: 'electronics',
    subSubCategory: ''
  },
  { 
    id: 'storage', 
    name: 'Storage', 
    image: '/products/storage._SS400_QL85_.jpg', 
    url: '/storage',
    category: 'shopping',
    subCategory: 'electronics',
    subSubCategory: ''
  },
  { 
    id: 'networking', 
    name: 'Networking', 
    image: '/products/networking._SS400_QL85_.jpg', 
    url: '/networking',
    category: 'shopping',
    subCategory: 'electronics',
    subSubCategory: ''
  },
  
];

export const menFashionCarouselCategories = [
  { 
    id: '0', 
    title: "Men's clothing", 
    imageUrl: "/products/mens_clothing_mens_fashion.jpg", 
    link: "/sp/pay-day/pay-day-sale" 
  },
  { 
    id: '1', 
    title: "Live Now", 
    imageUrl: "/products/pay-day-sale_men_fashion.jpg", 
    link: "/sp/pay-day/pay-day-sale" 
  },
  { 
    id: '2', 
    title: "Skin Care", 
    imageUrl: "/products/skin-care_men_fashion.jpg", 
    link: "/skin-care/c/7303" 
  },
  { 
    id: '3', 
    title: "Fragrance", 
    imageUrl: "/products/fragrance_men_fashion.jpg", 
    link: "/perfumes-deos/c/7335" 
  },
  { 
    id: '4', 
    title: "Footwear", 
    imageUrl: "/products/footwear_men_fashion.jpg", 
    link: "/footwear/c/14287" 
  },
  { 
    id: '5', 
    title: "Ethnic Wear", 
    imageUrl: "/products/ethnic-wear_men_fashion.jpg", 
    link: "/fashion-lifestyle/ethnicwear/c/26223" 
  },
  { 
    id: '6', 
    title: "Bath & Body", 
    imageUrl: "/products/bath-body_men_fashion.jpg", 
    link: "/bath-body/c/7312" 
  },
  { 
    id: '7', 
    title: "Hair Care", 
    imageUrl: "/products/hair-care_men_fashion.jpg", 
    link: "/hair/c/7296" 
  },
  { 
    id: '8', 
    title: "Topwear", 
    imageUrl: "/products/topwear_men_fashion.jpg", 
    link: "/topwear/c/24294" 
  },
  { 
    id: '9', 
    title: "Health & Nutrition", 
    imageUrl: "/products/health-nutrition_men_fashion.jpg", 
    link: "/health-nutrition/c/7330" 
  },
  { 
    id: '10', 
    title: "Foot Locker", 
    imageUrl: "/products/foot-locker_men_fashion.gif", 
    link: "/sp/footlocker/foot-locker" 
  },
  { 
    id: '11', 
    title: "Home", 
    imageUrl: "/products/home_men_fashion.jpg", 
    link: "/home/c/74572" 
  },
  { 
    id: '12', 
    title: "Bottomwear", 
    imageUrl: "/products/bottomwear_men_fashion.jpg", 
    link: "/bottomwear/c/24302" 
  },
  { 
    id: '13', 
    title: "Watches", 
    imageUrl: "/products/watches_men_fashion.jpg", 
    link: "/watches/c/15885" 
  },
  { 
    id: '14', 
    title: "Activewear", 
    imageUrl: "/products/activewear_men_fashion.jpg", 
    link: "/activewear/c/24309" 
  },
  { 
    id: '15', 
    title: "Fashion Accessories", 
    imageUrl: "/products/fashion-accessories_men_fashion.jpg", 
    link: "/lifestyle-accessories/c/17921" 
  },
  { 
    id: '16', 
    title: "Grooming Store", 
    imageUrl: "/products/grooming-store_men_fashion.jpg", 
    link: "/sp/grooming-store/default" 
  },
  { 
    id: '17', 
    title: "Fashion store", 
    imageUrl: "/products/fashion-store_men_fashion.jpg", 
    link: "/sp/fashion-store/default" 
  },
];

export const slidesShoppingMenFashion: HeroSlide[] = [
  {
    id: '1',
    title: 'Deals on Kids Fashion',
    subtitle: 'Up to 60% off',
    description: 'Shop the latest collection of kids clothing, accessories, and more',
    imageUrl: '/products/Deals_on_Kids_Fashion_.png',
    link: '/kids-fashion',
    ctaText: 'Shop Now',
    discount: '60% OFF',
    alt: 'Kids fashion deals'
  },
  {
    id: '2',
    title: 'Winter Collection',
    subtitle: 'Stay Warm & Stylish',
    description: 'Explore our winter collection with exclusive discounts',
    imageUrl: '/products/Stay_Warm_&_Stylish.jpg',
    link: '/winter-collection',
    ctaText: 'View Collection',
    discount: 'UP TO 50% OFF',
    alt: 'Winter collection'
  },
  {
    id: '3',
    title: 'Stylish Shoes',
    subtitle: 'Step into Style',
    description: 'Premium footwear collection for every occasion',
    imageUrl: '/products/Step_into_Style.png',
    link: '/shoes',
    ctaText: 'Shop Footwear',
    discount: '30% OFF',
    alt: 'Stylish shoes'
  }
];

export const toBrandsMenFashion: BrandItem[] = [
  {
    id: '1',
    name: 'Highlander',
    logo: '/products/HighlanderMenFashion.png',
    discount: 'Min. 70% off',
    link: '/',
    alt: 'Highlander brand'
  },
  {
    id: '2',
    name: 'Bacca Bucci',
    logo: '/products/Bacca_BucciMenFashion.png',
    discount: 'Min. 40% off',
    link: '/',
    alt: 'Bacca Bucci brand'
  },
  {
    id: '3',
    name: 'TIMEX',
    logo: '/products/TIMEXMenFashion.png',
    discount: 'Up to 60% off',
    link: '/',
    alt: 'TIMEX brand'
  },
  {
    id: '4',
    name: 'The Bear',
    logo: '/products/The_BearMenFashion.png',
    discount: 'Min. 70% off',
    link: '/',
    alt: 'The Bear brand'
  },
  {
    id: '5',
    name: 'BFARDO',
    logo: '/products/BFARDOMenFashion.png',
    discount: 'Up to 40% off',
    link: '/',
    alt: 'BFARDO brand'
  },
  {
    id: '6',
    name: 'American Tourister',
    logo: '/products/American_TouristerMenFashion.png',
    discount: 'Min. 60% off',
    link: '',
    alt: 'American Tourister brand'
  },
  {
    id: '7',
    name: 'Salty Alpha',
    logo: '/products/Salty_AlphaMenFashion.png',
    discount: 'Up to 60% off',
    link: '/',
    alt: 'Salty Alpha brand'
  },
  {
    id: '8',
    name: 'Minimalist',
    logo: '/products/MinimalistMenFashion.png',
    discount: 'Up to 10% off',
    link: '/',
    alt: 'Minimalist brand'
  },
  {
    id: '9',
    name: 'Limio',
    logo: '/products/LimioMenFashion.png',
    discount: 'Min. 70% off',
    link: '/',
    alt: 'Limio brand'
  },
  {
    id: '10',
    name: 'Lotto',
    logo: '/products/LottoMenFashion.png',
    discount: 'Up to 20% off',
    link: '/',
    alt: 'Lotto brand'
  },
  {
    id: '11',
    name: 'Bewakoof',
    logo: '/products/BewakoofMenFashion.png',
    discount: 'Min. 50% off',
    link: '/',
    alt: 'Bewakoof brand'
  },
  {
    id: '12',
    name: 'Davidoff',
    logo: '/products/DavidoffMenFashion.png',
    discount: 'Up to 20% off',
    link: '/',
    alt: 'Davidoff brand'
  }
];