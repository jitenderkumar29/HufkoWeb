import { SubHeaderItem } from "@/components/Header/SubHeader/SubHeader";
import { BankOfferSlideData } from "@/components/Shopping/HeroBanner/BankOfferSlide/BankOfferSlide";
import { FashionCard } from "@/components/Shopping/HeroBanner/FashionFullSlideGrid/FashionFullSlideGrid";
import { BannerItem } from "@/components/Shopping/HeroBanner/HeroBannerHalfSlide/HeroBannerHalfSlide";
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
    id: "beauty",
    name: "Beauty",
    imageUrl: "/products/beauty.png",
     url: "/beauty",
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
  { name: "Kid's Fashion", id: "kids_fashion_sub_header", url: "/kids" },
  { name: "Women's Beauty", id: "women_beauty_sub_header", url: "/women_beauty" },
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
    name: "Men's clothing", 
    imageUrl: "/products/mens_clothing_mens_fashion.jpg", 
    url: "/sp/pay-day/pay-day-sale" 
  },
  { 
    id: '1', 
    name: "Live Now", 
    imageUrl: "/products/pay-day-sale_men_fashion.jpg", 
    url: "/sp/pay-day/pay-day-sale" 
  },
  { 
    id: '2', 
    name: "Skin Care", 
    imageUrl: "/products/skin-care_men_fashion.jpg", 
    url: "/skin-care/c/7303" 
  },
  { 
    id: '3', 
    name: "Fragrance", 
    imageUrl: "/products/fragrance_men_fashion.jpg", 
    url: "/perfumes-deos/c/7335" 
  },
  { 
    id: '4', 
    name: "Footwear", 
    imageUrl: "/products/footwear_men_fashion.jpg", 
    url: "/footwear/c/14287" 
  },
  { 
    id: '5', 
    name: "Ethnic Wear", 
    imageUrl: "/products/ethnic-wear_men_fashion.jpg", 
    url: "/fashion-lifestyle/ethnicwear/c/26223" 
  },
  { 
    id: '6', 
    name: "Bath & Body", 
    imageUrl: "/products/bath-body_men_fashion.jpg", 
    url: "/bath-body/c/7312" 
  },
  { 
    id: '7', 
    name: "Hair Care", 
    imageUrl: "/products/hair-care_men_fashion.jpg", 
    url: "/hair/c/7296" 
  },
  { 
    id: '8', 
    name: "Topwear", 
    imageUrl: "/products/topwear_men_fashion.jpg", 
    url: "/topwear/c/24294" 
  },
  { 
    id: '9', 
    name: "Health & Nutrition", 
    imageUrl: "/products/health-nutrition_men_fashion.jpg", 
    url: "/health-nutrition/c/7330" 
  },
  { 
    id: '10', 
    name: "Foot Locker", 
    imageUrl: "/products/foot-locker_men_fashion.gif", 
    url: "/sp/footlocker/foot-locker" 
  },
  { 
    id: '11', 
    name: "Home", 
    imageUrl: "/products/home_men_fashion.jpg", 
    url: "/home/c/74572" 
  },
  { 
    id: '12', 
    name: "Bottomwear", 
    imageUrl: "/products/bottomwear_men_fashion.jpg", 
    url: "/bottomwear/c/24302" 
  },
  { 
    id: '13', 
    name: "Watches", 
    imageUrl: "/products/watches_men_fashion.jpg", 
    url: "/watches/c/15885" 
  },
  { 
    id: '14', 
    name: "Activewear", 
    imageUrl: "/products/activewear_men_fashion.jpg", 
    url: "/activewear/c/24309" 
  },
  { 
    id: '15', 
    name: "Fashion Accessories", 
    imageUrl: "/products/fashion-accessories_men_fashion.jpg", 
    url: "/lifestyle-accessories/c/17921" 
  },
  { 
    id: '16', 
    name: "Grooming Store", 
    imageUrl: "/products/grooming-store_men_fashion.jpg", 
    url: "/sp/grooming-store/default" 
  },
  { 
    id: '17', 
    name: "Fashion store", 
    imageUrl: "/products/fashion-store_men_fashion.jpg", 
    url: "/sp/fashion-store/default" 
  },
  { 
    id: '18', 
    name: "Gen-Z", 
    imageUrl: "/products/gen-z_men_fashion.jpg", 
    url: "/sp/fashion-store/default" 
  },
];

export const slidesShoppingMenFashion: HeroSlide[] = [
  {
    id: '1',
    title: 'Premium Footwear Collection',
    subtitle: 'Step into Style',
    description: 'Explore our premium footwear collection with exclusive discounts',
    imageUrl: '/products/Shoes_1500x460._SX1500_QL85_FMpng_.png',
    url: '/',
    ctaText: 'Shop Footwear',
    discount: '30% OFF',
    alt: 'Stylish shoes collection'
  },
  {
    id: '2',
    title: 'Premium Watches',
    subtitle: 'Timeless Elegance',
    description: 'Discover our collection of premium watches for every occasion',
    imageUrl: '/products/Watch_1500x460._SX1500_QL85_FMpng_.png',
    url: '/',
    ctaText: 'Shop Watches',
    discount: 'UP TO 50% OFF',
    alt: 'Premium watch collection'
  },
  {
    id: '3',
    title: 'Bags & Backpacks',
    subtitle: 'Carry in Style',
    description: 'Shop the latest collection of bags, backpacks, and accessories',
    imageUrl: '/products/Bag_and_backpack_1500x460._SX1500_QL85_FMpng_.png',
    url: '/',
    ctaText: 'Shop Bags',
    discount: '40% OFF',
    alt: 'Bags and backpacks collection'
  },
  {
    id: '4',
    title: 'Beauty Essentials',
    subtitle: 'Glow Up',
    description: 'Explore premium beauty products for your daily routine',
    imageUrl: '/products/Beauty_1500x460._SX1500_QL85_FMpng_2.png',
    url: '/',
    ctaText: 'Shop Beauty',
    discount: '25% OFF',
    alt: 'Beauty products collection'
  },
  {
    id: '5',
    title: 'Winter Fashion',
    subtitle: 'Stay Warm & Stylish',
    description: 'Discover our winter collection with exclusive discounts on men\'s fashion',
    imageUrl: '/products/SPB_1500x460._SX1500_QL85_FMpng_.png',
    url: '/',
    ctaText: 'View Collection',
    discount: 'UP TO 60% OFF',
    alt: 'Winter fashion collection'
  }
];

export const toBrandsMenFashion: BrandItem[] = [
  {
    id: '1',
    name: 'Highlander',
    logo: '/products/HighlanderMenFashion.png',
    discount: 'Min. 70% off',
    url: '/',
    alt: 'Highlander brand'
  },
  {
    id: '2',
    name: 'Bacca Bucci',
    logo: '/products/Bacca_BucciMenFashion.png',
    discount: 'Min. 40% off',
    url: '/',
    alt: 'Bacca Bucci brand'
  },
  {
    id: '3',
    name: 'TIMEX',
    logo: '/products/TIMEXMenFashion.png',
    discount: 'Up to 60% off',
    url: '/',
    alt: 'TIMEX brand'
  },
  {
    id: '4',
    name: 'The Bear',
    logo: '/products/The_BearMenFashion.png',
    discount: 'Min. 70% off',
    url: '/',
    alt: 'The Bear brand'
  },
  {
    id: '5',
    name: 'BFARDO',
    logo: '/products/BFARDOMenFashion.png',
    discount: 'Up to 40% off',
    url: '/',
    alt: 'BFARDO brand'
  },
  {
    id: '6',
    name: 'American Tourister',
    logo: '/products/American_TouristerMenFashion.png',
    discount: 'Min. 60% off',
    url: '',
    alt: 'American Tourister brand'
  },
  {
    id: '7',
    name: 'Salty Alpha',
    logo: '/products/Salty_AlphaMenFashion.png',
    discount: 'Up to 60% off',
    url: '/',
    alt: 'Salty Alpha brand'
  },
  {
    id: '8',
    name: 'Minimalist',
    logo: '/products/MinimalistMenFashion.png',
    discount: 'Up to 10% off',
    url: '/',
    alt: 'Minimalist brand'
  },
  {
    id: '9',
    name: 'Limio',
    logo: '/products/LimioMenFashion.png',
    discount: 'Min. 70% off',
    url: '/',
    alt: 'Limio brand'
  },
  {
    id: '10',
    name: 'Lotto',
    logo: '/products/LottoMenFashion.png',
    discount: 'Up to 20% off',
    url: '/',
    alt: 'Lotto brand'
  },
  {
    id: '11',
    name: 'Bewakoof',
    logo: '/products/BewakoofMenFashion.png',
    discount: 'Min. 50% off',
    url: '/',
    alt: 'Bewakoof brand'
  },
  {
    id: '12',
    name: 'Davidoff',
    logo: '/products/DavidoffMenFashion.png',
    discount: 'Up to 20% off',
    url: '/',
    alt: 'Davidoff brand'
  }
];

export const womenFashionCarouselCategories = [
  { 
    id: '0', 
    name: "Monsoon", 
    imageUrl: "/products/monsoon_womens_fashion.jpg", 
    url: "/" 
  },
  { 
    id: '1', 
    name: "Kurta sets", 
    imageUrl: "/products/kurta-sets_womens_fashion.jpg", 
    url: "/" 
  },
  { 
    id: '2', 
    name: "Dresses", 
    imageUrl: "/products/dresses_womens_fashion.jpg", 
    url: "/" 
  },
  { 
    id: '3', 
    name: "Sarees", 
    imageUrl: "/products/sarees_womens_fashion.jpg", 
    url: "/" 
  },
  { 
    id: '4', 
    name: "Nightsuits", 
    imageUrl: "/products/nightsuits_womens_fashion.jpg", 
    url: "/" 
  },
  { 
    id: '5', 
    name: "Kurtis", 
    imageUrl: "/products/kurtis_womens_fashion.jpg", 
    url: "/" 
  },
  { 
    id: '6', 
    name: "Jeans", 
    imageUrl: "/products/jeans_womens_fashion.jpg", 
    url: "/" 
  },
  { 
    id: '7', 
    name: "Dress Material", 
    imageUrl: "/products/dress-material_womens_fashion.jpg", 
    url: "/" 
  },
  { 
    id: '8', 
    name: "Watches", 
    imageUrl: "/products/watches_womens_fashion.jpg", 
    url: "/" 
  },
  { 
    id: '9', 
    name: "Drips for Her", 
    imageUrl: "/products/drips-for-her_womens_fashion.jpg", 
    url: "/" 
  },
  { 
    id: '10', 
    name: "Next Gen Fashion", 
    imageUrl: "/products/next-gen-fashion_womens_fashion.jpg", 
    url: "/" 
  },
  { 
    id: '11', 
    name: "Trends", 
    imageUrl: "/products/trends_womens_fashion.jpg", 
    url: "/" 
  },
  { 
    id: '12', 
    name: "Sports Shoes", 
    imageUrl: "/products/sports-shoes_womens_fashion.jpg", 
    url: "/" 
  },
  { 
    id: '13', 
    name: "Jewellery", 
    imageUrl: "/products/jewellery_womens_fashion.jpg", 
    url: "/" 
  },
  { 
    id: '14', 
    name: "Handbags", 
    imageUrl: "/products/handbags_womens_fashion.jpg", 
    url: "/" 
  },
  { 
    id: '15', 
    name: "Kids' clothing", 
    imageUrl: "/products/kids-clothing_womens_fashion.jpg", 
    url: "/" 
  },
  { 
    id: '16', 
    name: "Lehenga Cholis", 
    imageUrl: "/products/lehenaga-cholis_womens_fashion.jpg", 
    url: "/" 
  },
  { 
    id: '17', 
    name: "Bra, panty", 
    imageUrl: "/products/bra-panty_womens_fashion.jpg", 
    url: "/" 
  },
  { 
    id: '18', 
    name: "Heels & Flats", 
    imageUrl: "/products/heels-flats_womens_fashion.jpg", 
    url: "/" 
  },
  { 
    id: '19', 
    name: "Tops, t-shirts", 
    imageUrl: "/products/tops-t-shirts_womens_fashion.jpg", 
    url: "/" 
  },
  { 
    id: '20', 
    name: "Focus brands", 
    imageUrl: "/products/focus-brands_womens_fashion.jpg", 
    url: "/" 
  },
  { 
    id: '21', 
    name: "Celeb looks", 
    imageUrl: "/products/celeb-looks_womens_fashion.jpg", 
    url: "/" 
  },
  { 
    id: '21', 
    name: "Indian Wear", 
    imageUrl: "/products/indian-wear_womens_fashion.jpg", 
    url: "/" 
  }
  ,
  { 
    id: '21', 
    name: "Western Wear", 
    imageUrl: "/products/western-wear_womens_fashion.jpg", 
    url: "/" 
  }
];

export const slidesShoppingWomenFashion: HeroSlide[] = [
  {
    id: '1',
    title: 'Ethnic Must-Haves',
    subtitle: 'Shop Now',
    description: 'Discover stunning ethnic wear for every occasion',
    imageUrl: '/products/Ethnic _Must-Haves_WomenFashion.png',
    url: '/',
    ctaText: 'Shop Now',
    discount: 'Up to 60% OFF',
    alt: 'Ethnic must-haves fashion'
  },
  {
    id: '2',
    title: 'Trolleys & Sets',
    subtitle: 'Premium Collection',
    description: 'Shop stylish trolleys and matching sets for your wardrobe',
    imageUrl: '/products/Trolleys_and_sets_WomenFashion.png',
    url: '/',
    ctaText: 'View Collection',
    discount: 'Best Deals',
    alt: 'Trolleys and matching sets'
  },
  {
    id: '3',
    title: 'Sporty Kicks',
    subtitle: 'Step into Comfort',
    description: 'Explore the latest sporty footwear collection',
    imageUrl: '/products/Sporty_kicks_WomenFashion.png',
    url: '/',
    ctaText: 'Shop Footwear',
    discount: '30% OFF',
    alt: 'Sporty kicks collection'
  },
  {
    id: '4',
    title: 'Winter Jackets',
    subtitle: 'Stay Warm & Stylish',
    description: 'Premium winter jackets and outerwear collection',
    imageUrl: '/products/Winter_Jackets_WomenFashion.png',
    url: '/',
    ctaText: 'Shop Jackets',
    discount: 'Up to 50% OFF',
    alt: 'Winter jackets collection'
  },
  {
    id: '5',
    title: 'Beauty Essentials',
    subtitle: 'Glow Up',
    description: 'Discover premium beauty and skincare products',
    imageUrl: '/products/Beauty_1500x460._SX1500_QL85_FMpng_.png',
    url: '/',
    ctaText: 'Explore Beauty',
    discount: 'Great Offers',
    alt: 'Beauty essentials'
  },
  {
    id: '6',
    title: 'Classic Styles',
    subtitle: 'Timeless Fashion',
    description: 'Shop classic and timeless fashion pieces',
    imageUrl: '/products/Classic_styles_1500x460._SX1500_QL85_FMpng_.png',
    url: '/',
    ctaText: 'Shop Now',
    discount: 'Best Sellers',
    alt: 'Classic styles collection'
  }
];

export const toBrandsWomenFashion: BrandItem[] = [
  {
    id: '1',
    name: 'TOKYO TALKIES',
    logo: '/products/TOKYO_TALKIESWomenFashion.png',
    discount: 'Min. 50% off',
    url: '/',
    alt: 'TOKYO TALKIES brand'
  },
  {
    id: '2',
    name: 'Shoetopia',
    logo: '/products/Shoetopia_WomenFashion.png',
    discount: 'Min. 55% off',
    url: '/',
    alt: 'Shoetopia brand'
  },
  {
    id: '3',
    name: 'SASSAFRAS',
    logo: '/products/SASSAFRAS_WomenFashion.png',
    discount: 'Min. 50% off',
    url: '/',
    alt: 'SASSAFRAS brand'
  },
  {
    id: '4',
    name: 'SALTY',
    logo: '/products/SALTY_WomenFashion.png',
    discount: 'Up to 70% off',
    url: '/',
    alt: 'SALTY brand'
  },
  {
    id: '5',
    name: 'Palay',
    logo: '/products/Palay_WomenFashion.png',
    discount: 'Up to 40% off',
    url: '/',
    alt: 'Palay brand'
  },
  {
    id: '6',
    name: 'MAYBELLINE NEW YORK',
    logo: '/products/MAYBELLINE_NEW_YORK_WomenFashion.png',
    discount: 'Min. 40% off',
    url: '/',
    alt: 'MAYBELLINE NEW YORK brand'
  },
  {
    id: '7',
    name: 'SONATA',
    logo: '/products/SONATA_WomenFashion.png',
    discount: 'Min. 20% off',
    url: '/',
    alt: 'SONATA brand'
  },
  {
    id: '8',
    name: 'Beauty of Joseon',
    logo: '/products/Beauty_of_Joseon_WomenFashion.png',
    discount: 'Up to 15% off',
    url: '/',
    alt: 'Beauty of Joseon brand'
  },
  {
    id: '9',
    name: 'MIRAGGIO',
    logo: '/products/MIRAGGIO_WomenFashion.png',
    discount: 'Min. 40% off',
    url: '/',
    alt: 'MIRAGGIO brand'
  },
  {
    id: '10',
    name: 'GRECIILOOKS',
    logo: '/products/GRECIILOOKS_WomenFashion.png',
    discount: 'Min. 70% off',
    url: '/',
    alt: 'GRECIILOOKS brand'
  },
  {
    id: '11',
    name: 'Athena Lifestyle',
    logo: '/products/Athena_Lifestyle_WomenFashion.png',
    discount: 'Up to 30% off',
    url: '/',
    alt: 'Athena Lifestyle brand'
  },
  {
    id: '12',
    name: 'THEATER',
    logo: '/products/THEATER_WomenFashion.png',
    discount: 'Up to 30% off',
    url: '/',
    alt: 'THEATER brand'
  }
];

export const slidesHalfShoppingMenFashion: BannerItem[] = [
  {
    id: '1',
    title: 'NYKAAMAN',
    imageUrl: '/products/Nykaa_Man_slidesHalf_MenFashion.png',
    url: '/',
    discount: '',
    discount2: '',
    alt: 'Nykaa Man Freedom Sale',
    badge: 'Limited Time'
  },
  {
    id: '2',
    title: 'PAY DAY SALE',
    imageUrl: '/products/Pay_Day_Sale_slidesHalf_MenFashion.png',
    url: '/',
    discount: '',
    discount2: '',
    alt: 'Pay Day Sale'
  },
  {
    id: '3',
    title: 'H&M',
    imageUrl: '/products/H&M_slidesHalf_MenFashion.png',
    url: '/',
    discount: '',
    discount2: '',
    alt: 'H&M Banner'
  },
  {
    id: '4',
    title: 'Hair Care',
    imageUrl: '/products/Hair_Care_slidesHalf_MenFashion.png',
    url: '/',
    alt: 'Hair Care',
    discount: '',
    discount2: '',
  },
  {
    id: '5',
    title: 'Fragrance',
    imageUrl: '/products/Fragrance_slidesHalf_MenFashion.png',
    url: '/',
    alt: 'Fragrance',
    discount: '',
    discount2: '',
  },
  {
    id: '6',
    title: 'Bestsellers',
    imageUrl: '/products/Bestsellers_slidesHalf_MenFashion.png',
    url: '/',
    discount: '',
    discount2: '',
    alt: 'Bestsellers',
    badge: 'Hot'
  }
];

export const kidsFashionCarouselCategories = [
  {
    id: '0',
    name: "Boys",
    imageUrl: "/products/Boys_Clothing._SS300_QL85_FMpng_.png",
    url: "/"
  },
  {
    id: '1',
    name: "Girls",
    imageUrl: "/products/Girls_Clothing._SS300_QL85_FMpng_.png",
    url: "/"
  },
  {
    id: '2',
    name: "Footwear",
    imageUrl: "/products/Footwear2._SS300_QL85_FMpng_.png",
    url: "/"
  },
  {
    id: '3',
    name: "Infants",
    imageUrl: "/products/Baby_Clothing._SS300_QL85_FMpng_.png",
    url: "/"
  },
  {
    id: '4',
    name: "Teens",
    imageUrl: "/products/Teens._SS300_QL85_FMpng_.png",
    url: "/"
  },
  {
    id: '5',
    name: "Bags",
    imageUrl: "/products/Accessories2._SS300_QL85_FMpng_.png",
    url: "/"
  },
  {
    id: '6',
    name: "Jewellery",
    imageUrl: "/products/Jewllery._SS300_QL85_FMpng_.png",
    url: "/"
  },
  {
    id: '7',
    name: "Watches",
    imageUrl: "/products/Watches._SS300_QL85_FMpng_.png",
    url: "/"
  },
  {
    id: '8',
    name: "Sunglasses",
    imageUrl: "/products/Sunglasses1._SS300_QL85_FMpng_.png",
    url: "/"
  },
  {
    id: '9',
    name: "Amazon Brands",
    imageUrl: "/products/Amazon_Brands._SS300_QL85_FMpng_.png",
    url: "/"
  }
];

export const slidesShoppingKidsFashion: HeroSlide[] = [
  {
    id: '1',
    title: 'Deals on Kids Fashion',
    subtitle: 'Up to 60% off',
    description: 'Shop the latest collection of kids clothing, accessories, and more',
    imageUrl: '/products/Deals_on_Kids_Fashion_.png',
    url: '/kids-fashion',
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
    url: '/winter-collection',
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
    url: '/shoes',
    ctaText: 'Shop Footwear',
    discount: '30% OFF',
    alt: 'Stylish shoes'
  }
];

export const toBrandsKidsFashion: BrandItem[] = [
  {
    id: '1',
    name: 'HOPSCOTCH',
    logo: '/products/Hopscotch_364x566._CB796942055_.png',
    discount: 'Shop Now',
    url: '/',
    alt: 'HOPSCOTCH brand'
  },
  {
    id: '2',
    name: 'ALLEN SOLLY',
    logo: '/products/Allen_solly_364x566._CB796942055_.png',
    discount: 'Shop Now',
    url: '/',
    alt: 'ALLEN SOLLY brand'
  },
  {
    id: '3',
    name: 'BATA',
    logo: '/products/Bata_364x566._CB796942055_.png',
    discount: 'Shop Now',
    url: '/',
    alt: 'BATA brand'
  },
  {
    id: '4',
    name: 'GAP',
    logo: '/products/Gap_364x566._CB796942055_.png',
    discount: 'Shop Now',
    url: '/',
    alt: 'GAP brand'
  },
  {
    id: '5',
    name: 'SYMBOL PREMIUM',
    logo: '/products/Symbol_premium_364x566._CB796942055_.png',
    discount: 'Shop Now',
    url: '/',
    alt: 'SYMBOL PREMIUM brand'
  },
  {
    id: '6',
    name: 'ZOOP',
    logo: '/products/Zoop_364x566._CB796942055_.png',
    discount: 'Shop Now',
    url: '/',
    alt: 'ZOOP brand'
  },
  {
    id: '7',
    name: 'YELLOW CHIMES',
    logo: '/products/Yellow_chimes_364x566._CB796942055_.png',
    discount: 'Shop Now',
    url: '/',
    alt: 'YELLOW CHIMES brand'
  },
  {
    id: '8',
    name: 'AMERICAN TOURISTER',
    logo: '/products/American_tourister_364x566._CB796942055_.png',
    discount: 'Shop Now',
    url: '/',
    alt: 'AMERICAN TOURISTER brand'
  },
  {
    id: '9',
    name: 'CROCS',
    logo: '/products/Crocs_364x566._CB796942055_.png',
    discount: 'Shop Now',
    url: '/',
    alt: 'CROCS brand'
  },
  {
    id: '10',
    name: 'PS PEACHES',
    logo: '/products/PS_peaches_364x566._CB796942055_.png',
    discount: 'Shop Now',
    url: '/',
    alt: 'PS PEACHES brand'
  },
  {
    id: '11',
    name: 'MAX',
    logo: '/products/max_364x566._CB796942055_.png',
    discount: 'Shop Now',
    url: '/',
    alt: 'MAX brand'
  },
  {
    id: '12',
    name: 'PALAY',
    logo: '/products/Palay_364x566._CB796942055_.png',
    discount: 'Shop Now',
    url: '/',
    alt: 'PALAY brand'
  }
];

export const womenBeautyCarouselCategories = [
  {
    id: '0',
    name: "Skincare",
    imageUrl: "/products/skincare._SS300_QL85_FMpng_.png",
    url: "/"
  },
  {
    id: '1',
    name: "Hair Care",
    imageUrl: "/products/haircare._SS300_QL85_FMpng_.png",
    url: "/"
  },
  {
    id: '2',
    name: "Luxury Beauty",
    imageUrl: "/products/luxe._SS300_QL85_FMpng_.png",
    url: "/"
  },
  {
    id: '3',
    name: "Makeup",
    imageUrl: "/products/makeup._SS300_QL85_FMpng_.png",
    url: "/"
  },
  {
    id: '4',
    name: "Deos & Fragrances",
    imageUrl: "/products/fragrance._SS300_QL85_FMpng_.png",
    url: "/"
  },
  {
    id: '5',
    name: "Bath & Shower",
    imageUrl: "/products/bath._SS300_QL85_FMpng_.png",
    url: "/"
  },
  {
    id: '6',
    name: "Professional Beauty",
    imageUrl: "/products/Pro_Beauty._SS300_QL85_FMpng_.png",
    url: "/"
  },
  {
    id: '7',
    name: "Men's Grooming",
    imageUrl: "/products/grooming._SS300_QL85_FMpng_.png",
    url: "/"
  },
  {
    id: '8',
    name: "Women's Grooming",
    imageUrl: "/products/women_grooming._SS300_QL85_FMpng_.png",
    url: "/"
  },
  {
    id: '9',
    name: "Top Rated Beauty",
    imageUrl: "/products/most_loved._SS300_QL85_FMpng_.png",
    url: "/"
  },
  { 
    id: '10', 
    name: "Brands", 
    imageUrl: "/products/Brands_womens_fashion.jpg", 
    url: "/" 
  },
  { 
    id: '11', 
    name: "Luxe", 
    imageUrl: "/products/Luxe_womens_fashion.jpg", 
    url: "/" 
  },
  { 
    id: '12', 
    name: "Appliances", 
    imageUrl: "/products/Appliances_womens_fashion.jpg", 
    url: "/" 
  },
  { 
    id: '13', 
    name: "Bath & Body", 
    imageUrl: "/products/Bath _Body_womens_fashion_2.jpg", 
    url: "/" 
  },
  { 
    id: '14', 
    name: "Natural", 
    imageUrl: "/products/Natural_womens_fashion.jpg", 
    url: "/" 
  },
  { 
    id: '15', 
    name: "Mom & Baby", 
    imageUrl: "/products/Mom_&_Baby_womens_fashion.jpg", 
    url: "/" 
  },
  { 
    id: '16', 
    name: "Fragrance", 
    imageUrl: "/products/Fragrance_womens_fashion.jpg", 
    url: "/" 
  },
  { 
    id: '17', 
    name: "Lingerie & Accessories", 
    imageUrl: "/products/Lingerie_&_Accessories_womens_fashion.jpg", 
    url: "/" 
  },
];


export const slidesShoppingWomenBeauty: HeroSlide[] = [
  {
    id: '1',
    title: 'Beauty Deals',
    subtitle: 'Shop Now',
    description: 'Discover the latest beauty products and exclusive offers',
    imageUrl: '/products/Unrec_pc._CB797014072_.png',
    url: '/',
    ctaText: 'Shop Now',
    discount: '',
    alt: 'Beauty deals banner'
  }
];

export const toBrandsWomenBeauty: BrandItem[] = [
  {
    id: '1',
    name: 'Eyeliners & Mascaras',
    logo: '/products/Eyeliners__mascaras._SX564_QL85_FMpng_.png',
    discount: 'Shop Now',
    url: '/',
    alt: 'Eyeliners & Mascaras'
  },
  {
    id: '2',
    name: 'Kajal & Kohls',
    logo: '/products/Kajal__kohls._SX564_QL85_FMpng_.png',
    discount: 'Shop Now',
    url: '/',
    alt: 'Kajal & Kohls'
  },
  {
    id: '3',
    name: 'Eyeshadows',
    logo: '/products/Eyeshadows._SX564_QL85_FMpng_.png',
    discount: 'Shop Now',
    url: '/',
    alt: 'Eyeshadows'
  },
  {
    id: '4',
    name: 'Foundations',
    logo: '/products/Foundations.png',
    discount: 'Shop Now',
    url: '/',
    alt: 'Foundations'
  },
  {
    id: '5',
    name: 'Concealers',
    logo: '/products/Concealers._SX564_QL85_FMpng_.png',
    discount: 'Shop Now',
    url: '/',
    alt: 'Concealers'
  },
  {
    id: '6',
    name: 'Highlighters',
    logo: '/products/Highlighters._SX564_QL85_FMpng_.png',
    discount: 'Shop Now',
    url: '/',
    alt: 'Highlighters'
  },
  {
    id: '7',
    name: 'Lipsticks',
    logo: '/products/Lip_sticks._SX564_QL85_FMpng_.png',
    discount: 'Shop Now',
    url: '/',
    alt: 'Lipsticks'
  },
  {
    id: '8',
    name: 'Nail Paints',
    logo: '/products/Nails_paints._SX564_QL85_FMpng_.png',
    discount: 'Shop Now',
    url: '/',
    alt: 'Nail Paints'
  },
  {
    id: '9',
    name: 'Makeup Brushes',
    logo: '/products/Makeup_brushes._SX564_QL85_FMpng_.png',
    discount: 'Shop Now',
    url: '/',
    alt: 'Makeup Brushes'
  },
  {
    id: '10',
    name: 'Makeup Kits',
    logo: '/products/Make_up_Kits._SX564_QL85_FMpng_.png',
    discount: 'Shop Now',
    url: '/',
    alt: 'Makeup Kits'
  },
  {
    id: '11',
    name: 'Compacts',
    logo: '/products/Compacts._SX564_QL85_FMpng_.png',
    discount: 'Shop Now',
    url: '/',
    alt: 'Compacts'
  },
  {
    id: '12',
    name: 'BB & CC Creams',
    logo: '/products/BB_CC_creams._SX564_QL85_FMpng_.png',
    discount: 'Shop Now',
    url: '/',
    alt: 'BB & CC Creams'
  }
];

export const slidesHalfShoppingWomenBeauty: BannerItem[] = [
  {
    id: '3814',
    title: 'Best Sellers at 950',
    imageUrl: '/products/default.jpg_tr=cm-pad_resize,w-600.png',
    url: '/',
    discount: 'Gifts on ₹2200+',
    discount2: 'Best Sellers at 950',
    alt: '3814',
    badge: 'Gifts on ₹2200+'
  },
  {
    id: '1742',
    title: 'Monsoon Guide',
    imageUrl: '/products/default.jpg_tr=cm-pad_resize,w-600_2.png',
    url: '/',
    discount: '',
    discount2: '',
    alt: '1742'
  },
  {
    id: '66858',
     title: 'Up To 25% Off!',
    imageUrl: '/products/Up_To_25_Off_default.png',
    url: '/',
    discount: 'Up To 25% Off!',
    discount2: 'Treat Yourself Today',
    alt: '51924',
    badge: 'Up To 25% Off!'
    
  },
  {
    id: '51924',
    title: '3X Fast Style',
    imageUrl: '/products/3X_Fast_Styledefault.jpg_tr=cm-pad_resize,w-600.png',
    url: '/',
    discount: '3X Fast Style',
    discount2: 'Last All Day',
    alt: '66858',
    badge: '3X Fast Style'
   
  },
  {
    id: '75288',
    title: 'Brand Sale',
    imageUrl: '/products/Brand_Sale_default.jpg_tr=cm-pad_resize,w-600.png',
    url: '/',
    discount: '',
    discount2: '',
    alt: '75288'
  },
  {
    id: '11433',
    title: 'Up To 20% Off',
    imageUrl: '/products/Up_To_20_Off_default.png',
    url: '/',
    discount: 'Up To 20% Off',
    discount2: 'On Entire Brand!',
    alt: '11433',
    badge: 'Up To 20% Off'
  },
  {
    id: 'pay-day-sale',
    title: 'Pay Day Sale',
    imageUrl: '/products/Pay_Day_Saledefault.jpg_tr=cm-pad_resize,w-600.png',
    url: '/',
    discount: 'UP TO 50% OFF',
    discount2: 'Shop Now →',
    alt: 'Pay Day Sale',
    badge: 'Pay Day Sale'
  }
];

export const hottestBrandsWomenFashion: BrandItem[] = [
  {
    id: '4495',
    name: 'Forever New',
    logo: '/products/Forever_New_WomenFashion.jpg',
    discount: 'Up to 50% off',
    url: '/',
    alt: 'forever-new'
  },
  {
    id: '4240',
    name: 'Twenty Dresses',
    logo: '/products/Twenty_Dresses_WomenFashion.jpg',
    discount: 'Up to 70% off',
    url: '/',
    alt: 'twenty-dresses'
  },
  {
    id: '63680',
    name: 'Libas',
    logo: '/products/Libas_WomenFashion.jpg',
    discount: 'Min 30% off',
    url: '/',
    alt: 'libas'
  },
  {
    id: '4886',
    name: 'Puma',
    logo: '/products/Puma_WomenFashion.jpg',
    discount: 'Min 40% off',
    url: '/',
    alt: 'puma'
  },
  {
    id: '15204',
    name: 'Cider',
    logo: '/products/Cider_WomenFashion.jpg',
    discount: 'Up to 60% off',
    url: '/',
    alt: 'cider'
  },
  {
    id: '12071',
    name: 'Autumn Lane',
    logo: '/products/Autumn_Lane_WomenFashion.jpg',
    discount: 'Up to 25% off',
    url: '/',
    alt: 'autumnlane'
  },
  {
    id: '6559',
    name: 'U.S. Polo Assn.',
    logo: '/products/U.S._Polo_Assn_WomenFashion.jpg',
    discount: 'Up to 50% off',
    url: '/',
    alt: 'u-s-polo-assn'
  },
  {
    id: '11674',
    name: 'The Souled Store',
    logo: '/products/The_Souled_Store_WomenFashion.jpg',
    discount: 'Min 30% off',
    url: '/',
    alt: 'the-souled-store'
  },
  {
    id: '13161',
    name: 'PS Peaches',
    logo: '/products/PS_Peaches_WomenFashion.jpg',
    discount: 'Min 50% off',
    url: '/',
    alt: 'pspeaches'
  },
  {
    id: '9543',
    name: 'Pure Home & Living',
    logo: '/products/Pure_Home_&_Living_WomenFashion.jpg',
    discount: 'Up to 30% off',
    url: '/',
    alt: 'pure-home-living'
  },
  {
    id: '9543',
    name: 'Relaxed SHorts',
    logo: '/products/Relaxed_SHorts_WomenFashion.jpg',
    discount: 'Up to 30% off',
    url: '/',
    alt: 'relaxed-shorts'
  },
  {
    id: '9543',
    name: 'Tinted Sunglasses',
    logo: '/products/Tinted_Sunglasses_WomenFashion.jpg',
    discount: 'Up to 30% off',
    url: '/',
    alt: 'tinted-sunglasses'
  }
];

export const slidesDataFashionFullSlide: FashionCard[] = [
  {
    id: "1",
    title: "Chanderi Shine",
    image: "/products/chanderi.jpg",
    link: "/",
  },
  {
    id: "2",
    title: "Insta Loved",
    image: "/products/insta.jpg",
    link: "/",
  },
  {
    id: "3",
    title: "Party Ready",
    image: "/products/party.jpg",
    link: "/",
  },
  {
    id: "4",
    title: "Daily Coords",
    image: "/products/daily.jpg",
    link: "/",
  },
];

export const bankOfferShoppingSlide: BankOfferSlideData[] = [
  {
    id: '6a5dfa464622ef5292d5718d',
    title: 'Get Extra 15% Off',
    subtitle: 'On Your 1st Purchase',
    description: 'USE CODE NEW15',
    imageUrl: '/products/Get_Extra_15_Off.jpg',
    url: '/',
    ctaText: 'Shop Now',
    discount: '15% OFF',
    alt: 'Extra15%_coupon_Nonloggedin'
  },
  {
    id: '6a5dfa245a11ba6bbc89c198',
    title: 'Get Extra 20% Off',
    subtitle: 'On Your 1st App Order',
    description: 'USE CODE EXTRA20%',
    imageUrl: '/products/Get_Extra_20_Off.jpg',
    url: '/',
    ctaText: 'Shop Now',
    discount: '20% OFF',
    alt: 'Extra20%_coupon'
  }
]
