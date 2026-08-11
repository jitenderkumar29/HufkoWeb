import { SubHeaderItem } from "@/components/Header/SubHeader/SubHeader";
import { BankOfferSlideData } from "@/components/Shopping/HeroBanner/BankOfferSlide/BankOfferSlide";
import { FashionCard } from "@/components/Shopping/HeroBanner/FashionFullSlideGrid/FashionFullSlideGrid";
import { BannerItem } from "@/components/Shopping/HeroBanner/HeroBannerHalfSlide/HeroBannerHalfSlide";
import { BannerItemContent } from "@/components/Shopping/HeroBanner/HeroBannerLeftContent/HeroBannerLeftContent";
import { HeroSlide } from "@/components/Shopping/HeroBanner/HeroBannerSlide/HeroBannerSlide";
import { BrandItem } from "@/components/Shopping/ItemListDesigns/TopBrandsOnOffer/TopBrandsOnOffer";
import { ScrollItem } from "@/components/Shopping/ItemListDesigns/VerticalScroll/VerticalScroll";
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

// In your data file (ShopingCategories.ts or wherever this is defined)

export const shoppingCategoriesSubHeader: SubHeaderItem[] = [
  { name: "All", url: "/", category: "all" },
  { name: "Electronics", id: "electronics_sub_header", url: "/electronics", category: "electronics" },
  { name: "Home Decor", id: "home_decor_sub_header", url: "/home_decor", category: "home_decor" },
  { name: "Home Furniture", id: "home_furniture_sub_header", url: "/home_furniture", category: "home_furniture" },
  { name: "Mobiles & Tablets", id: "mobiles_tablets", url: "/mobiles_tablets", category: "mobiles_tablets" },
  { name: "Men's Fashion", id: "mens_fashion_sub_header", url: "/men", category: "mens_fashion" },
  { name: "Women's Fashion", id: "women_fashion_sub_header", url: "/women", category: "women_fashion" },
  { name: "Kid's Fashion", id: "kids_fashion_sub_header", url: "/kids", category: "kids_fashion" },
  { name: "Women's Beauty", id: "women_beauty_sub_header", url: "/women_beauty", category: "women_beauty" },
  { name: "TVs & Appliances", id: "tvs_appliances_sub_header", url: "/tvs_appliances", category: "tvs_appliances" },
  { name: "Beauty, Food", id: "beauty_food_sub_header", url: "/beauty_food", category: "beauty_food" },
  { name: "Toys & Sports", id: "toys_sports_sub_header", url: "/toys_sports", category: "toys_sports" },
  { name: "Lifestyle", id: "lifestyle_sub_header", url: "/lifestyle", category: "lifestyle" },
  { name: "Jewellery", id: "jewellery_sub_header", url: "/jewellery", category: "jewellery" },
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

export const ScrollItemWomensBeauty: ScrollItem[] = [
  {
    id: '1',
    title: 'Discover Our Stores',
    subtitle: "Check out what's trending now.",
    imageUrl: '/products/Discover_Our_Stores.jpg',
    link: '#'
  },
  {
    id: '2',
    title: 'THE GIFT STORE',
    subtitle: 'Gifting Made Easy',
    imageUrl: '/products/THE_GIFT_STORE.jpg',
    link: '#',
    badge: 'Gift'
  },
  {
    id: '3',
    title: 'THE ULTIMATE Bridal Beauty STORE',
    subtitle: 'Get Shaadi Ready',
    imageUrl: '/products/THE_ULIMITATE_Bridal_Beauty_STORE.jpg',
    link: '#',
    badge: 'Bridal'
  },
  {
    id: '4',
    title: 'NEW AT NYKAA',
    subtitle: 'Fresh Finds. Just In.',
    imageUrl: '/products/NEW_AT_NYKAA.jpg',
    link: '#',
    badge: 'New'
  },
  {
    id: '5',
    title: 'The Gen Z Store',
    subtitle: 'Trending. Viral. You.',
    imageUrl: '/products/The_Gen_Z_Store.jpg',
    link: '#',
    badge: 'Trending'
  },
  {
    id: '6',
    title: 'THE INGREDIENT STORE',
    subtitle: 'Find Your Ideal Match',
    imageUrl: '/products/THE_INGREDIENT_STORE.jpg',
    link: '#',
    badge: 'Ingredients'
  },
  {
    id: '7',
    title: 'Fragrance COLLECTIVE',
    subtitle: 'Meet Your Scent Soulmate',
    imageUrl: '/products/Fragrance_COLLECTIVE.jpg',
    link: '#',
    badge: 'Fragrance'
  },
  {
    id: '8',
    title: 'NYKAA K·Beauty Festival',
    subtitle: 'Secrets To Healthy Skin',
    imageUrl: '/products/NYKAA_K·Beauty_Festival.jpg',
    link: '#',
    badge: 'K-Beauty'
  },
  {
    id: '9',
    title: 'THE BEAUTY CLEARANCE SALE',
    subtitle: 'UP TO 60% OFF',
    description: 'Stock up now!',
    imageUrl: '/products/THE_BEAUTY_CLEARANCE_SALE.jpg',
    link: '#',
    discount: '60% OFF'
  },
  {
    id: '10',
    title: 'THE travel beauty STORE',
    subtitle: 'Glow On The Go',
    imageUrl: '/products/THE_travel_beauty_STORE.jpg',
    link: '#',
    badge: 'Travel'
  },
  {
    id: '11',
    title: 'NYKAA BEAUTY REWIND 2025',
    subtitle: 'Beauty You Loved',
    imageUrl: '/products/NYKAA_BEAUTY_REWIND_2025.jpg',
    link: '#',
    badge: 'Rewind'
  },
  {
    id: '12',
    title: 'SHOWER STACK',
    subtitle: 'BUILT TO SMELL GOOD',
    description: 'Shower. Seal. Scent.',
    imageUrl: '/products/SHOWER_STACK.jpg',
    link: '#',
    badge: 'Shower'
  },
  {
    id: '13',
    title: 'HEALTHY HAIR HABITS',
    subtitle: 'TREAT WASH NOURISH',
    description: 'Healthy Hair Essentials',
    imageUrl: '/products/HEALTHY_HAIR_HABITS.jpg',
    link: '#',
    badge: 'Hair'
  }
];

 export const HeadphonesHorizontalSliderOneLine = [
    {
      id: "1",
      title: "JBL C100SI Wired In Ear Headphones With Mic, Pure Bass Sound",
      price: 599,
      oldPrice: 1299,
      currency: "₹",
      imageUrl: "/products/51Q8DUDT2eL._AC_SR480,440_.jpg",
      link: "#",
    },
    {
      id: "2",
      title: "boAt Bassheads 225 Wired in Ear Earphone with Mic",
      price: 549,
      oldPrice: 999,
      currency: "₹",
      imageUrl: "/products/61iSV4o+X-L._AC_SR480,440_.jpg",
      link: "#",
    },
    {
      id: "3",
      title: "boAt Bassheads 105 Wired in Ear Earphones with Mic",
      price: 349,
      oldPrice: 999,
      currency: "₹",
      imageUrl: "/products/51PyI5qRSwS._AC_SR480,440_.jpg",
      link: "#",
    },
    {
      id: "4",
      title: "JBL C200SI Premium in Ear Wired Earphones with Mic",
      price: 749,
      oldPrice: 1499,
      currency: "₹",
      imageUrl: "/products/51R2zw+oxCL._AC_SR480,440_.jpg",
      link: "#",
    },
    {
      id: "5",
      title: "JBL Tune 310 Wired in Ear Type C Headphones",
      price: 1299,
      oldPrice: 1999,
      currency: "₹",
      imageUrl: "/products/61W50xR23vL._AC_SR480,440_.jpg",
      link: "#",
    },
    {
      id: "6",
      title: "Sennheiser IE 300 Hi-Res Audiophile in Ear Headphones",
      price: 11990,
      oldPrice: 29990,
      currency: "₹",
      imageUrl: "/products/61ASgJqJiuL._AC_SR480,440_.jpg",
      link: "#"
    },
    {
      id: "7",
      title: "Sennheiser HD 560S Open-Back Audiophile Over Ear Headphones",
      price: 10990,
      oldPrice: 20990,
      currency: "₹",
      imageUrl: "/products/61MGAGocToL._AC_SR480,440_.jpg",
      link: "#",
    },
    {
      id: "8",
      title: "Sennheiser HD 560S Open-Back Audiophile Over Ear Wired Headphones,Neutral Reference Sound,Angled Transducers,Wide Soundstage,Detachable Cable,Lightweight,Natural Sound for Gaming,2Y Warranty",
      price: 10990,
      oldPrice: 20990,
      currency: "₹",
      imageUrl: "/products/Sennheiser61MGAGocToL._AC_SR480,440_.jpg",
      link: "#",
    },
    {
      id: "9",
      title: "Sennheiser CX 80s Wired in Ear Earphones with in-Line Microphone, Superior Sound, One Button Smart Control, Lightweight Design, 3.5mm Jack, 3 Ear Tip Sizes, 2Y Warranty, ‎Voice Control, Black",
      price: 10990,
      oldPrice: 20990,
      currency: "₹",
      imageUrl: "/products/Sennheiser61MGAGocToL._AC_SR480,440Superior_.jpg",
      link: "#",
    },
    
  ];

export const PcAccessoriesHorizontalSliderOneLine = [
  {
    id: "B09T3H12GV",
    title: "Dell KM3322W Wireless USB Keyboard and Mouse Combo, Anti-Fade & Spill-Resistant Keys, up to 36 Month Battery Life, 3Y Advance Exchange Warranty - Black",
    price: 1346,
    oldPrice: 2499,
    currency: "₹",
    imageUrl: "/products/Dell-Wireless-Keyboard-Mouse-Spill-Resistant.jpg",
    link: "/",
  },
  {
    id: "B0DHKJ5HWL",
    title: "HP H200 Wireless Headset",
    price: 1549,
    oldPrice: 3749,
    currency: "₹",
    imageUrl: "/products/HP-Wireless-Headset.jpg",
    link: "/",
  },
  {
    id: "B0DXPHG886",
    title: "HP K120 Wired Keyboard/3 Years RTB Warranty",
    price: 579,
    oldPrice: 1299,
    currency: "₹",
    imageUrl: "/products/HP-K120-Wired-Keyboard.jpg",
    link: "/",
  },
  {
    id: "B087FXHB6J",
    title: "ZEBRONICS Companion 107 2.4GHz Wireless Keyboard & Mouse Combo, 104 Keys, UV Printed keycaps, 12 Integrated Multimedia Keys, 3 Button Mouse, 1200 DPI, High Precision, Advanced Optical Sensor (Black)",
    price: 599,
    oldPrice: 999,
    currency: "₹",
    imageUrl: "/products/Zebronics-Zeb-Companion-107-Wireless-Keyboard.jpg",
    link: "/",
  },
  {
    id: "B0D18192T2",
    title: "Logitech M186 Wireless Mouse, 2.4GHz with USB Mini Receiver, 3 Years Battery Life, 1000 DPI Optical Tracking, Ambidextrous, Compatible with PC, Mac, Laptop",
    price: 595,
    oldPrice: 1190,
    currency: "₹",
    imageUrl: "/products/Logitech-M186-Wireless-Mouse.jpg",
    link: "/",
  },
  {
    id: "B012MQS060",
    title: "Logitech MK215 Wireless Keyboard and Mouse Combo for Windows, 2.4 GHz Wireless, Compact Design, 2-Year Battery Life(Keyboard),5 Month Battery Life(Mouse) PC/Laptop- Black",
    price: 1195,
    oldPrice: 1945,
    currency: "₹",
    imageUrl: "/products/Logitech-MK215-Wireless-Keyboard-Mouse.jpg",
    link: "/",
  },
  {
    id: "B0CCPCK17S",
    title: "Amazon Basics Upgraded 2nd Gen Stylus Pen | Only for iPad 2018-2025 Air 3/4/5/M2/M3, mini 5/6, 6/7/8/9/10/11, Pro 11\", 12.9\" & M4 | White",
    price: 1179,
    oldPrice: 5999,
    currency: "₹",
    imageUrl: "/products/Amazon-Basics-Upgraded-Stylus-White.jpg",
    link: "/",
  },
  {
    id: "B0DXPQ9XHT",
    title: "HP KM120 Wired Mouse and Keyboard Combo (AB3D0AA)",
    price: 679,
    oldPrice: 1399,
    currency: "₹",
    imageUrl: "/products/HP-KM120-Wired-Keyboard-AB3D0AA.jpg",
    link: "/",
  },
  {
    id: "B0BG8LZNYL",
    title: "Portronics Toad One Bluetooth Mouse with 2.4 GHz & BT 5.3 Dual Wireless, 6 Buttons, Rechargeable, RGB Lights, Connect 3 Devices, Ergonomic Design for Laptop, Smartphone, Tablet (Black)",
    price: 629,
    oldPrice: 1499,
    currency: "₹",
    imageUrl: "/products/Portronics-Wireless-Bluetooth-Connectivity-Rechargeable.jpg",
    link: "/",
  },
  {
    id: "B0CP9NSXYJ",
    title: "Arctic Fox Pureview Transparent Wireless and Bluetooth Rechargeable Mouse, USB Receiver,LED Battery Magic Silm for Office/PC/Mac/Laptop/Apple/ipad(Space Gray)",
    price: 599,
    oldPrice: 1999,
    currency: "₹",
    imageUrl: "/products/Arctic-Fox-Transparent-Bluetooth-Rechargeable.jpg",
    link: "/",
  },
  {
    id: "B0DXNY14GL",
    title: "HP M290 Wireless Mouse (AB3C7AA)",
    price: 499,
    oldPrice: 1199,
    currency: "₹",
    imageUrl: "/products/HP-M290-Wireless-Mouse-AB3C7AA.jpg",
    link: "/",
  },
  {
    id: "B00ZYLMQH0",
    title: "Dell KB216 Wired Multimedia Keyboard - Full-Size Layout with USB Interface, Chiclet Keys, Spill Resistance with 3 Indicator Lights| Plug and Play| Hot Keys: Volume, Mute, Play/Pause, Backward, Forward",
    price: 548,
    oldPrice: 649,
    currency: "₹",
    imageUrl: "/products/Dell-KB216-Wired-Multimedia-Keyboard.jpg",
    link: "/",
  },
];

export const SmartwatchesHorizontalSliderOneLine = [
  {
    id: "B0BF57RN3K",
    title: "Fire-Boltt Ninja Call Pro Plus Bluetooth Calling Smart Watch, 1.83″ HD Display, AI Voice Assistant, 120+ Sports Modes, IP67 Waterproof, SpO2 & Heart Rate Monitor Smartwatch for Men & Women - Black",
    price: 999,
    oldPrice: 19999,
    currency: "₹",
    imageUrl: "/products/Fire-Boltt-Ninja-Call-Pro-Plus-Bluetooth-Calling-Smart-Watch.jpg",
    link: "/",
  },
  {
    id: "B0BJ72WZQ7",
    title: "Noise Twist Round dial Smart Watch with Bluetooth Calling, 1.38\" TFT Display, up-to 7 Days Battery, 100+ Watch Faces, IP68, Heart Rate Monitor, Sleep Tracking (Jet Black)",
    price: 1199,
    oldPrice: 4999,
    currency: "₹",
    imageUrl: "/products/Noise-Twist-Round-dial-Smart-Watch.jpg",
    link: "/",
  },
  {
    id: "B0DFYL4635",
    title: "boAt Lunar Discovery w/ 1.39\" (3.5 cm) HD Display, Turn-by-Turn Navigation, DIY Watch Face Studio, Bluetooth Calling, Emergency SOS, QR Tray, Smart Watch for Men & Women(Active Black)",
    price: 1299,
    oldPrice: 8499,
    currency: "₹",
    imageUrl: "/products/boAt-Lunar-Discovery-Navigation-Bluetooth.jpg",
    link: "/",
  },
  {
    id: "B0B6BLTGTT",
    title: "Noise Pulse 2 Max 1.85\" Display, Bluetooth Calling Smart Watch, 10 Days Battery, 550 NITS Brightness, Smart DND, 100 Sports Modes, Smartwatch for Men and Women (Jet Black)",
    price: 1099,
    oldPrice: 5999,
    currency: "₹",
    imageUrl: "/products/Noise-Pulse-2-Max-Bluetooth-Smart-Watch.jpg",
    link: "/",
  },
  {
    id: "B0CQ4HSR2D",
    title: "Noise Twist Go Round dial Smartwatch with BT Calling, 1.39\" Display, Metal Build, 100+ Watch Faces, IP68, Sleep Tracking, 100+ Sports Modes, 24/7 Heart Rate Monitoring (Gold Link)",
    price: 1799,
    oldPrice: 4999,
    currency: "₹",
    imageUrl: "/products/Noise-Twist-Go-Round-dial-Smartwatch.jpg",
    link: "/",
  },
  {
    id: "B0CVQG14RR",
    title: "boAt Wave Sigma 3 w/Turn-by-Turn Navigation, 2.01\" (5.1 cm) HD Display, Bluetooth Calling, Crest+ OS, QR Tray, Watch Face Studio, Coins, Emergency SOS Smart Watch for Men & Women(Active Black)",
    price: 1499,
    oldPrice: 8999,
    currency: "₹",
    imageUrl: "/products/boAt-Wave-Sigma-3-Navigation-Bluetooth.jpg",
    link: "/",
  },
  {
    id: "B0CQ4JT6NT",
    title: "Noise Twist Go Round dial Smartwatch with BT Calling, 1.39\" Display, Metal Build, 100+ Watch Faces, IP68, Sleep Tracking, 100+ Sports Modes, 24/7 Heart Rate Monitoring (Rose Pink)",
    price: 1599,
    oldPrice: 4999,
    currency: "₹",
    imageUrl: "/products/Noise-Twist-Go-Round-dial-Smartwatch2.jpg",
    link: "/",
  },
  {
    id: "B0D5LRGSCR",
    title: "boAt Storm Call 3 w/TBT Navigation, Daily Activity Tracker, DIY Watch Face Studio,700+ Active Modes, 1.83\" (4.6 cm) HD Display Fitness Smart Watch for Men & Women(Active Black)",
    price: 1399,
    oldPrice: 8449,
    currency: "₹",
    imageUrl: "/products/boAt-Storm-Call-Navigation-Bluetooth.jpg",
    link: "/",
  },
  {
    id: "B0B6BPX5S9",
    title: "Noise Pulse 2 Max 1.85\" Display, Bluetooth Calling Smart Watch, 10 Days Battery, 550 NITS Brightness, Smart DND, 100 Sports Modes, Smartwatch for Men and Women (Midnight Blue)",
    price: 1099,
    oldPrice: 5999,
    currency: "₹",
    imageUrl: "/products/Noise-Pulse-2-Max-Bluetooth-Smart-Watch2.jpg",
    link: "/",
  },
  {
    id: "B0BJ6ZWPX5",
    title: "Noise Twist Round dial smart Watch with Bluetooth Calling, 1.38\" TFT Display, up-to 7 Days Battery, 100+ Watch Faces, IP68, Heart Rate Monitor, Sleep Tracking (Rose Pink)",
    price: 1199,
    oldPrice: 4999,
    currency: "₹",
    imageUrl: "/products/Noise-Twist-Round-dial-Smart-Watch2.jpg",
    link: "/",
  },
  {
    id: "B0CQ4J4YFL",
    title: "Noise Twist Go Round dial Smartwatch with BT Calling, 1.39\" Display, Metal Build, 100+ Watch Faces, IP68, Sleep Tracking, 100+ Sports Modes, 24/7 Heart Rate Monitoring (Elite Black)",
    price: 1899,
    oldPrice: 5999,
    currency: "₹",
    imageUrl: "/products/Noise-Twist-Go-Round-dial-Smartwatch3.jpg",
    link: "/",
  },
  {
    id: "B0B6BPTFT5",
    title: "Noise Pulse 2 Max 1.85\" Display, Bluetooth Calling Smart Watch, 10 Days Battery, 550 NITS Brightness, Smart DND, 100 Sports Modes, Smartwatch for Men and Women (Deep Wine)",
    price: 1099,
    oldPrice: 5999,
    currency: "₹",
    imageUrl: "/products/Noise-Pulse-2-Max-Bluetooth-Smart-Watch.jpg",
    link: "/",
  },
];

export const electronicsCarouselCategories = [
  { 
    id: '0',
    name: "Smartphones", 
    imageUrl: "/products/smartphones_electronics2.jpg", 
    url: "/electronics/smartphones",
    category: "electronics"
  },
  { 
    id: '1',
    name: "Laptops & Computers", 
    imageUrl: "/products/laptop._SS400_QL85_1.jpg", 
    url: "/electronics/laptops",
    category: "electronics"
  },
  { 
    id: '2',
    name: "Tablets", 
    imageUrl: "/products/02_Halos_copy._SS400_QL85_FMpng_1.png", 
    url: "/electronics/tablets",
    category: "electronics"
  },
  { 
    id: '3',
    name: "Headphones & Earphones", 
    imageUrl: "/products/Headphones._SS400_QL85_1.jpg", 
    url: "/electronics/headphones",
    category: "electronics"
  },
  { 
    id: '4', 
    name: "Smart Watches", 
    imageUrl: "/products/Smartwatches._SS400_QL85_1.jpg", 
    url: "/electronics/smartwatches",
    category: "electronics"
  },
  { 
    id: '5',
    name: "Cameras & Photography", 
    imageUrl: "/products/Camera__Accessories._SS400_QL85_1.jpg", 
    url: "/electronics/cameras",
    category: "electronics"
  },
  { 
    id: '6',
    name: "Televisions", 
    imageUrl: "/products/televisions_electronics1.jpg", 
    url: "/electronics/tvs",
    category: "electronics"
  },
  { 
    id: '7',
    name: "Audio Speakers", 
    imageUrl: "/products/9_audio._CB795899201_.png", 
    url: "/electronics/speakers",
    category: "electronics"
  },
  { 
    id: '8',
    name: "Gaming Consoles", 
    imageUrl: "/products/Gaming_Laptops._SS400_QL85_1.jpg", 
    url: "/electronics/gaming",
    category: "electronics"
  },
  
  { 
    id: '9',
    name: "Computer Accessories", 
    imageUrl: "/products/Computer_Accessories._SS400_QL85_1.jpg", 
    url: "/electronics/accessories",
    category: "electronics"
  },
  { 
    id: '10', 
    name: "Printers & Scanners", 
    imageUrl: "/products/printer._SS400_QL85_1.jpg", 
    url: "/electronics/printers",
    category: "electronics"
  },
  { 
    id: '11', 
    name: "Storage Devices", 
    imageUrl: "/products/storage._SS400_QL85_1.jpg", 
    url: "/electronics/storage",
    category: "electronics"
  },
  { 
    id: '12', 
    name: "Mobile Accessories", 
    imageUrl: "/products/mobile_accessories_electronics1.jpg", 
    url: "/electronics/mobile-accessories",
    category: "electronics"
  },
  { 
    id: '13', 
    name: "Networking Devices", 
    imageUrl: "/products/networking_devices_electronics1.jpg", 
    url: "/electronics/networking",
    category: "electronics"
  },
  { 
    id: '14', 
    name: "Smart Home Devices", 
    imageUrl: "/products/smart_home_electronics.jpg", 
    url: "/electronics/smart-home",
    category: "electronics"
  },
  { 
    id: '15', 
    name: "Fitness Trackers", 
    imageUrl: "/products/fitness_trackers_electronics.jpg", 
    url: "/electronics/fitness-trackers",
    category: "electronics"
  },
  { 
    id: '16', 
    name: "Drone & Gadgets", 
    imageUrl: "/products/drones_gadgets_electronics.jpg", 
    url: "/electronics/drones",
    category: "electronics"
  },
  { 
    id: '17', 
    name: "Monitor & Display", 
    imageUrl: "/products/Monitors._SS400_QL85_.jpg", 
    url: "/electronics/monitors",
    category: "electronics"
  },
  { 
    id: '18', 
    name: "Software & Antivirus", 
    imageUrl: "/products/software_antivirus_electronics.jpg", 
    url: "/electronics/software",
    category: "electronics"
  },
  { 
    id: '19', 
    name: "Tech Deals", 
    imageUrl: "/products/tech_deals_electronics.jpg", 
    url: "/electronics/deals",
    category: "electronics"
  },
  { 
    id: '20', 
    name: 'Desktops', 
    imageUrl: '/products/Desktops._SS400_QL85_.jpg', 
    url: '/desktops',
    category: "electronics"
  },
  { 
    id: '21', 
    name: 'Video Games', 
    imageUrl: '/products/Video-game_Halo._SS400_QL85_FMpng_.png', 
    url: '/video-games',
    category: 'electronics',
  },
  { 
    id: '22', 
    name: 'Stationery', 
    imageUrl: '/products/Stationery._SS400_QL85_.jpg', 
    url: '/stationery',
    category: 'electronics',
  },
   { 
    id: '23', 
    name: 'Musical Instruments', 
    imageUrl: '/products/musical-instruments._SS400_QL85_.jpg', 
    url: '/musical-instruments',
    category: 'electronics',
  },
  { 
    id: '24', 
    name: 'Software', 
    imageUrl: '/products/Software_Halo._SS400_QL85_.jpg', 
    url: '/software',
    category: 'electronics',
  },
   { 
    id: '25', 
    name: 'Components', 
    imageUrl: '/products/components._SS400_QL85_.jpg', 
    url: '/components',
    category: 'electronics',
  },
  { 
    id: '26', 
    name: 'Networking', 
    imageUrl: '/products/networking._SS400_QL85_.jpg', 
    url: '/networking',
    category: 'electronics',
  },
  
];

export const slidesElectronicsFashion : BannerItemContent[] = [
  {
    id: '1',
    title: 'Premium Electronics Collection',
    subtitle: 'Latest Tech at Best Prices',
    category: 'Electronics',
    discount: 'Up to 40% OFF',
    imgUrl: '/products/Electronics_1500x460._SX1500_QL85_FMpng1.png',
    align: 'left'
  },
  {
    id: '2',
    title: 'Smart Tech Devices',
    subtitle: 'Transform Your Living Space',
    category: 'Smart Electronics',
    discount: '25% OFF',
    imgUrl: '/products/Electronics_1.png',
    align: 'left'
  },
  // {
  //   id: '3',
  //   title: 'Gaming & Entertainment',
  //   subtitle: 'Level Up Your Experience',
  //   category: 'Gaming',
  //   discount: '30% OFF',
  //   imgUrl: '/products/Electronics_3.png',
  //   align: 'left'
  // },
  // {
  //   id: '4',
  //   title: 'Beauty Tech Innovations',
  //   subtitle: 'Smart Beauty Devices',
  //   category: 'Beauty Tech',
  //   discount: '20% OFF',
  //   imgUrl: '/products/Beauty_1500x460._SX1500_QL85_FMpng_2.png',
  //   align: 'right'
  // },
  // {
  //   id: '5',
  //   title: 'Audio & Sound Systems',
  //   subtitle: 'Immersive Sound Experience',
  //   category: 'Audio Systems',
  //   discount: '35% OFF',
  //   imgUrl: '/products/SPB_1500x460._SX1500_QL85_FMpng_.png',
  //   align: 'left'
  // }
];


export const toElectronicsItems = [
  {
    id: '1',
    title: 'Asus Tab',
    subtitle: 'New Launch | Latest Tablet',
    imageUrl: '/products/a61a436a233ae87c.png',
    link: '/'
  },
  {
    id: '2',
    title: 'Realme Techlife Power Bank',
    subtitle: 'Fast Charging | 2000mAh+ | Min. 50% off',
    imageUrl: '/products/44dc95716403f4b0.png',
    link: '/'
  },
  {
    id: '3',
    title: 'Electronic Accessory',
    subtitle: 'Premium Quality | Best Price',
    imageUrl: '/products/acd1b0f0e403a8c4.png',
    link: '/'
  },
  {
    id: '4',
    title: 'Infinix XWatch H5 Pro',
    subtitle: 'Smart Watch | Premium Design | Up to 40% off',
    imageUrl: '/products/3e2663b4a7c108d2.png',
    link: '/'
  },
  {
    id: '5',
    title: 'Motorola Pad 70 Groove',
    subtitle: '8GB RAM | 256GB ROM | 12.1-inch | Gaming Tablet',
    imageUrl: '/products/15fc67670f5d1418.png',
    link: '/'
  },
  {
    id: '6',
    title: 'Hero XOOM 160',
    subtitle: 'New Launch | Premium Features',
    imageUrl: '/products/c3c588b267a9c891.png',
    link: '/'
  },
  {
    id: '7',
    title: 'Surface Pro 12',
    subtitle: 'Microsoft Surface | Premium Laptop | Up to 35% off',
    imageUrl: '/products/4bdf69554d531026.png',
    link: '/'
  },
  {
    id: '8',
    title: 'Epson New Launch Printer',
    subtitle: 'All-in-One Printer | Best Quality',
    imageUrl: '/products/e6eb321f14efcc27.png',
    link: '/'
  },
  {
    id: '9',
    title: 'boAt Trimmer',
    subtitle: 'Personal Care | Grooming Essentials | Up to 50% off',
    imageUrl: '/products/1938612b5b1cb66d.png',
    link: '/'
  },
  {
    id: '10',
    title: 'Kandao Funcam 360',
    subtitle: '360° Camera | Premium Capture',
    imageUrl: '/products/5c1aa4e0305a1aac.png',
    link: '/'
  },
  {
    id: '11',
    title: 'ASUS Vivobook 15',
    subtitle: 'Latest Launch Laptop | Up to 40% off',
    imageUrl: '/products/e349654347aa6a2e.png',
    link: '/'
  },
  {
    id: '12',
    title: 'Electronic Accessory',
    subtitle: 'Premium Quality | Best Price',
    imageUrl: '/products/39d3a3af51fd5e3d.png',
    link: '/'
  },
  {
    id: '13',
    title: 'Logitech New Launches',
    subtitle: 'Premium Laptop Accessories | Up to 35% off',
    imageUrl: '/products/3ac3856c9ba68c8c.png',
    link: '/'
  },
  {
    id: '14',
    title: 'Onmo Core Bluetooth Controller',
    subtitle: 'Premium Gaming Controller | Up to 45% off',
    imageUrl: '/products/c8a988d248d5be8f.png',
    link: '/'
  }
];

export const topDealsElectronicsCategories: CategoryItem[] = [
  { 
    id: 'B0FN9WN6XD', 
    name: 'Deal 1', 
    image: '/products/L_1.jpg', 
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  { 
    id: 'B0FFTLRYRV', 
    name: 'Deal 2', 
    image: '/products/L_2.jpg', 
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  { 
    id: 'B0GNMG31LQ', 
    name: 'Deal 3', 
    image: '/products/L_3.jpg', 
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  { 
    id: 'B0GWQGM5FJ', 
    name: 'Deal 4', 
    image: '/products/L_4.jpg', 
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  { 
    id: 'B0DSFQZTVW', 
    name: 'Deal 5', 
    image: '/products/L_5.jpg', 
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  { 
    id: 'B0GTZHLMG3', 
    name: 'Deal 6', 
    image: '/products/L_6.jpg', 
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  { 
    id: 'B0G495PMV8', 
    name: 'Deal 7', 
    image: '/products/L_7.jpg', 
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  { 
    id: 'B0GYRK1RZC', 
    name: 'Deal 8', 
    image: '/products/L_8.jpg', 
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  { 
    id: 'B0GX4W73SM', 
    name: 'Deal 9', 
    image: '/products/L_9.jpg', 
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  { 
    id: 'B0G8HBRT27', 
    name: 'Deal 10', 
    image: '/products/L_10.jpg', 
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  { 
    id: 'B0GSVTDN5G', 
    name: 'Deal 11', 
    image: '/products/L_11.jpg', 
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  { 
    id: 'B0GMQP579H', 
    name: 'Deal 12', 
    image: '/products/L_12.jpg', 
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  { 
    id: 'B0G2BHDDB8', 
    name: 'Deal 13', 
    image: '/products/L_13.jpg', 
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  { 
    id: 'B0DSHWKNZG', 
    name: 'Deal 14', 
    image: '/products/L_14.jpg', 
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  { 
    id: 'B0GRHZDJBJ', 
    name: 'Deal 15', 
    image: '/products/L_15.jpg', 
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  { 
    id: 'B0GXJYZ4X8', 
    name: 'Deal 16', 
    image: '/products/L_16.jpg', 
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  { 
    id: 'B0F8P844W2', 
    name: 'Deal 17', 
    image: '/products/L_17.jpg', 
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  { 
    id: 'B0BJDJY8LY', 
    name: 'Deal 18', 
    image: '/products/L_18.jpg', 
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  { 
    id: 'B0F8P4Y7VF', 
    name: 'Deal 19', 
    image: '/products/L_19.jpg', 
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  { 
    id: 'B0FMRTWFMN', 
    name: 'Deal 20', 
    image: '/products/L_20.jpg', 
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  { 
    id: 'B0H3PV7418', 
    name: 'Deal 21', 
    image: '/products/L_21.jpg', 
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  { 
    id: 'B0GWHGS8P5', 
    name: 'Deal 22', 
    image: '/products/L_22.jpg', 
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  { 
    id: 'B0F9X5DSBS', 
    name: 'Deal 23', 
    image: '/products/L_23.jpg', 
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  { 
    id: 'B0FDKS93JV', 
    name: 'Deal 24', 
    image: '/products/L_24.jpg', 
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  { 
    id: 'B0H4QMDD6J', 
    name: 'Deal 25', 
    image: '/products/L_25.jpg', 
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  { 
    id: 'B0GTZKGNM6', 
    name: 'Deal 26', 
    image: '/products/L_26.jpg', 
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  { 
    id: 'B0GX4W73SM', 
    name: 'Deal 27', 
    image: '/products/L_27.jpg', 
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  { 
    id: 'B0GVRZD89W', 
    name: 'Deal 28', 
    image: '/products/L_28.jpg', 
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  { 
    id: 'B0GVNJ8KPB', 
    name: 'Deal 29', 
    image: '/products/L_29.jpg', 
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  { 
    id: 'B0G46HR61G', 
    name: 'Deal 30', 
    image: '/products/L_30.jpg', 
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  { 
    id: 'B0D49W5KZP', 
    name: 'Deal 31', 
    image: '/products/L_31.jpg', 
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  { 
    id: 'B0G5NG4FFW', 
    name: 'Deal 32', 
    image: '/products/L_32.jpg', 
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  }
];

export const topDealsOnTabletsCategories: CategoryItem[] = [
  { 
    id: 'B0FJG1V6RJ', 
    name: 'Tablet Deal 1', 
    image: '/products/T1.jpg', 
    url: '/',
    category: 'electronics',
    subCategory: 'tablets',
    subSubCategory: 'top-deals'
  },
  { 
    id: 'B0FNWNZZ1B', 
    name: 'Tablet Deal 2', 
    image: '/products/T2.jpg', 
    url: '/',
    category: 'electronics',
    subCategory: 'tablets',
    subSubCategory: 'top-deals'
  },
  { 
    id: 'B0GPVX566R', 
    name: 'Tablet Deal 3', 
    image: '/products/T3.jpg', 
    url: '/',
    category: 'electronics',
    subCategory: 'tablets',
    subSubCategory: 'top-deals'
  },
  { 
    id: 'B0GDPWLJMM', 
    name: 'Tablet Deal 4', 
    image: '/products/T4.jpg', 
    url: '/',
    category: 'electronics',
    subCategory: 'tablets',
    subSubCategory: 'top-deals'
  },
  { 
    id: 'B0GWHYQW77', 
    name: 'Tablet Deal 5', 
    image: '/products/T5.jpg', 
    url: '/',
    category: 'electronics',
    subCategory: 'tablets',
    subSubCategory: 'top-deals'
  },
  { 
    id: 'B0FBRS76BR', 
    name: 'Tablet Deal 6', 
    image: '/products/T6.jpg', 
    url: '/',
    category: 'electronics',
    subCategory: 'tablets',
    subSubCategory: 'top-deals'
  },
  { 
    id: 'B0G1C13SB3', 
    name: 'Tablet Deal 7', 
    image: '/products/T7.jpg', 
    url: '/',
    category: 'electronics',
    subCategory: 'tablets',
    subSubCategory: 'top-deals'
  },
  { 
    id: 'B0D7N23QKD', 
    name: 'Tablet Deal 8', 
    image: '/products/T8.jpg', 
    url: '/',
    category: 'electronics',
    subCategory: 'tablets',
    subSubCategory: 'top-deals'
  },
  { 
    id: 'B0G7F4FJSC', 
    name: 'Tablet Deal 9', 
    image: '/products/T9.jpg', 
    url: '/',
    category: 'electronics',
    subCategory: 'tablets',
    subSubCategory: 'top-deals'
  }
];

export const bankOfferElectronicsSlide: BankOfferSlideData[] = [
  {
    id: '6a5dfa464622ef5292d5718d',
    title: 'Get Extra 15% Off',
    subtitle: 'On Your 1st Purchase',
    description: 'USE CODE NEW15',
    imageUrl: '/products/AugART26_Bank_PC_2.png',
    url: '/',
    ctaText: 'Shop Now',
    discount: '15% OFF',
    alt: 'Extra15%_coupon_Nonloggedin'
  },
  // {
  //   id: '6a5dfa245a11ba6bbc89c198',
  //   title: 'Get Extra 20% Off',
  //   subtitle: 'On Your 1st App Order',
  //   description: 'USE CODE EXTRA20%',
  //   imageUrl: '/products/Get_Extra_20_Off.jpg',
  //   url: '/',
  //   ctaText: 'Shop Now',
  //   discount: '20% OFF',
  //   alt: 'Extra20%_coupon'
  // }
]

// export const slidesElectronicsFashion2: HeroSlide[] = [
//   {
//     id: '1',
//     title: '',
//     subtitle: '',
//     description: '',
//     imageUrl: '/products/Electronics_Banner_Design_1.png',
//     url: '/',
//     ctaText: '',
//     discount: '',
//     alt: ''
//   },
//   {
//     id: '2',
//     title: '',
//     subtitle: '',
//     description: '',
//     imageUrl: '/products/Electronics_2.png',
//     url: '/',
//     ctaText: '',
//     discount: '',
//     alt: ''
//   },
//   {
//     id: '3',
//     title: '',
//     subtitle: '',
//     description: '',
//     imageUrl: '/products/Electronics_3.png',
//     url: '/',
//     ctaText: '',
//     discount: '',
//     alt: ''
//   },
//   // {
//   //   id: '4',
//   //   title: '',
//   //   subtitle: '',
//   //   description: '',
//   //   imageUrl: '/products/Beauty_1500x460._SX1500_QL85_FMpng_2.png',
//   //   url: '/',
//   //   ctaText: '',
//   //   discount: '',
//   //   alt: ''
//   // },
//   // {
//   //   id: '5',
//   //   title: '',
//   //   subtitle: '',
//   //   description: '',
//   //   imageUrl: '/products/SPB_1500x460._SX1500_QL85_FMpng_.png',
//   //   url: '/',
//   //   ctaText: '',
//   //   discount: '',
//   //   alt: ''
//   // }
// ];


export const homeFurnitureCarouselCategories = [
  { 
    id: '1', 
    name: "Mattresses", 
    imageUrl: "/products/6dcd96ab3dffa743.jpg", 
    url: '/',
    category: "home_furniture"
  },
  { 
    id: '2', 
    name: "Office chairs", 
    imageUrl: "/products/a275e52dd5391137.jpg", 
    url: '/',
    category: "home_furniture"
  },
  { 
    id: '3', 
    name: "Beds", 
    imageUrl: "/products/619a90cb3079dd36.jpg", 
    url: '/',
    category: "home_furniture"
  },
  { 
    id: '4', 
    name: "Wardrobes", 
    imageUrl: "/products/ea4ca063f2e858e3.jpg", 
    url: '/',
    category: "home_furniture"
  },
  { 
    id: '5', 
    name: "Office tables", 
    imageUrl: "/products/a55b07b0721bb404.jpg", 
    url: '/',
    category: "home_furniture"
  },
  { 
    id: '6', 
    name: "Recliners", 
    imageUrl: "/products/8ad710342f6f7a43.jpg", 
    url: '/',
    category: "home_furniture"
  },
  { 
    id: '7', 
    name: "Hammock", 
    imageUrl: "/products/02132b72c4ccf6f9.jpg", 
    url: '/',
    category: "home_furniture"
  },
  { 
    id: '8', 
    name: "Collapsibles", 
    imageUrl: "/products/e23b5aec2a9e1c80.jpg", 
    url: '/',
    category: "home_furniture"
  },
  { 
    id: '9', 
    name: "Bean bags", 
    imageUrl: "/products/66769a6c1ba60981.jpg", 
    url: '/',
    category: "home_furniture"
  },
  { 
    id: '10', 
    name: "Book shelvs", 
    imageUrl: "/products/1f4e96262c476aa8.jpg", 
    url: '/',
    category: "home_furniture"
  },
  { 
    id: '11', 
    name: "Kids' furniture", 
    imageUrl: "/products/e41a32a2a0fb6cb3.jpg", 
    url: '/',
    category: "home_furniture"
  },
  { 
    id: '12', 
    name: "Sofas", 
    imageUrl: "/products/55f6c3ea8cf26b12.jpg", 
    url: '/',
    category: "home_furniture"
  },
  { 
    id: '13', 
    name: "Dining sets", 
    imageUrl: "/products/c5c2a0ca01c2814e.jpg", 
    url: '/',
    category: "home_furniture"
  },
  { 
    id: '14', 
    name: "Coffee tables", 
    imageUrl: "/products/616b670374b61ceb.jpg", 
    url: '/',
    category: "home_furniture"
  },
  { 
    id: '15', 
    name: "Dressing tables", 
    imageUrl: "/products/ef014c0f5062c9e1.jpg", 
    url: '/',
    category: "home_furniture"
  },
  { 
    id: '16', 
    name: "Sofa beds", 
    imageUrl: "/products/a8e5319319cae362.jpg", 
    url: '/',
    category: "home_furniture"
  },
  { 
    id: '17', 
    name: "TV units", 
    imageUrl: "/products/0c3b3b685386636d.jpg", 
    url: '/',
    category: "home_furniture"
  },
  { 
    id: '18', 
    name: "PLT", 
    imageUrl: "/products/4e2d959065ba18aa.jpg", 
    url: '/',
    category: "home_furniture"
  },
  { 
    id: '19', 
    name: "Shoe racks", 
    imageUrl: "/products/268487a337a39374.jpg", 
    url: '/',
    category: "home_furniture"
  },
  { 
    id: '20', 
    name: "Home temples", 
    imageUrl: "/products/1f8f90501c659669.jpg", 
    url: '/',
    category: "home_furniture"
  },
  { 
    id: '21', 
    name: "Inflatable sofas", 
    imageUrl: "/products/4bd722c8ddfa9ace.jpg", 
    url: '/',
    category: "home_furniture"
  },
  { 
    id: '22', 
    name: "Covers", 
    imageUrl: "/products/bd844edb9fa863a8.jpg", 
    url: '/',
    category: "home_furniture"
  },
  { 
    id: '23', 
    name: "Dining Tables", 
    imageUrl: "/products/dining-table.jpg", 
    url: '/',
    category: "home_furniture"
  },
  { 
    id: '24', 
    name: "Study Tables", 
    imageUrl: "/products/study-table.jpg", 
    url: '/',
    category: "home_furniture"
  },
  { 
    id: '25', 
    name: "Bookshelves", 
    imageUrl: "/products/bookshelf.jpg", 
    url: '/',
    category: "home_furniture"
  },
  { 
    id: '26', 
    name: "Storage Units", 
    imageUrl: "/products/storage-unit.jpg", 
    url: '/',
    category: "home_furniture"
  },
  { 
    id: '27', 
    name: "Wall Shelves", 
    imageUrl: "/products/wall-shelf.jpg", 
    url: '/',
    category: "home_furniture"
  },
  { 
    id: '28', 
    name: "Shoe Racks", 
    imageUrl: "/products/shoe-rack.jpg", 
    url: '/',
    category: "home_furniture"
  },
  { 
    id: '29', 
    name: "Sofas", 
    imageUrl: "/products/329a854dd8c44fde.jpg", 
    url: '/',
    category: "home_furniture"
  },
  { 
    id: '30', 
    name: "Mattresses", 
    imageUrl: "/products/57d04728e66ae68f.jpg", 
    url: '/',
    category: "home_furniture"
  },
  { 
    id: '31', 
    name: "Wardrobes", 
    imageUrl: "/products/5da0aa15c8500bdf.jpg", 
    url: '/',
    category: "home_furniture"
  },
  { 
    id: '32', 
    name: "Blankets", 
    imageUrl: "/products/9a4b3856cceca99b.jpg", 
    url: '/',
    category: "home_furniture"
  },
  { 
    id: '33', 
    name: "Bedsheets", 
    imageUrl: "/products/12960b239d8fae6a.jpg", 
    url: '/',
    category: "home_furniture"
  },
  { 
    id: '34', 
    name: "Furnishing", 
    imageUrl: "/products/f7a66d4708b4055d.jpg", 
    url: '/',
    category: "home_furniture"
  },
  { 
    id: '35', 
    name: "Mats & rugs", 
    imageUrl: "/products/971d07d5c6063aed.jpg", 
    url: '/',
    category: "home_furniture"
  },
  { 
    id: '36', 
    name: "Mosquito nets", 
    imageUrl: "/products/458751bc65631f19.jpg", 
    url: '/',
    category: "home_furniture"
  },
  { 
    id: '37', 
    name: "View all", 
    imageUrl: "/products/cb76a0a6fc5d9f20.jpg", 
    url: '/',
    category: "home_furniture"
  }
];

export const slideshomeFurniture : BannerItemContent[] = [
  {
    id: '1',
    title: '',
    subtitle: '',
    category: '',
    discount: '',
    imgUrl: '/products/homeFurniture_1.png',
    align: 'left'
  },
  {
    id: '2',
    title: '',
    subtitle: '',
    category: '',
    discount: '',
    imgUrl: '/products/homeFurniture_2.png',
    align: 'left'
  }
]

 export const homeFurnitureHorizontalSliderOneLine = [
  {
    id: "1",
    title: "Nilkamal Freedom Big FMM Plastic Cabinet | 3-Year Warranty | 4-Shelf Storage Cupboard with Doors | Multi Organiser for Home, Wardrobe, and Kitchen | Clothes Rack, Shelves, Brown & Biscuit Colour",
    price: 5599.00,
    oldPrice: 8000.00,
    currency: "₹",
    imageUrl: "/products/nilkamal-freedom-cabinet.jpg",
    link: "/",
  },
  {
    id: "2",
    title: "Furniture Cafe Modern Rectangular Coffee Table with White Marble Top and Black Metal Frame - Contemporary Center Table for Living Room (Golden & White)",
    price: 2890.00,
    oldPrice: 4999.00,
    currency: "₹",
    imageUrl: "/products/furniture-cafe-coffee-table.jpg",
    link: "/",
  },
  {
    id: "3",
    title: "Smartsters Single Bed with Storage for Kids | Engineered Wood | Double Drawers | Soft Edge | Secret Den Child-Friendly Design | Marine Teal | 40 x 81 x 38 inches | Easy Pull-Out Storage",
    price: 8426.49,
    oldPrice: 32999.00,
    currency: "₹",
    imageUrl: "/products/smartsters-single-bed.jpg",
    link: "/",
  },
  {
    id: "4",
    title: "Godrej Interio Allure 6-Seater Rubber Wood Rectangular Dining Table (1-Year Warranty, Brownish Black)",
    price: 25790.00,
    oldPrice: 29787.00,
    currency: "₹",
    imageUrl: "/products/godrej-interio-dining-table.jpg",
    link: "/",
  },
  {
    id: "5",
    title: "Nilkamal SpaceMax 4 Shelves Plastic Bookshelf with 3-Year Warranty | Multipurpose Storage Cabinet & Book Rack for Home | Durable, Waterproof, Easy-Clean | Living Room & Bedroom Organiser | Biscuit Brown",
    price: 5670.00,
    oldPrice: 8000.00,
    currency: "₹",
    imageUrl: "/products/nilkamal-spacemax-bookshelf.jpg",
    link: "/",
  },
  {
    id: "6",
    title: "Nilkamal Freedom Large 18 (FMSC18) Shoe Rack Plastic Cabinet 3-Year Warranty with Dustproof Door – Shoe Rack for Home, Chappal Stand for Home Indoor & Outdoor, Shoes Rack Plastic with Door",
    price: 4334.48,
    oldPrice: 7000.00,
    currency: "₹",
    imageUrl: "/products/nilkamal-shoe-rack.jpg",
    link: "/",
  },
  {
    id: "7",
    title: "Interio by Godrej Curv Premium Mesh Wide Back Ergonomic Chair for Work from Home/Study | 1 Year Warranty | Height Adjustable Chair | Heavy Duty PP Base | DIY Installation (Milan Red)",
    price: 5299.00,
    oldPrice: 16500.00,
    currency: "₹",
    imageUrl: "/products/godrej-curv-chair.jpg",
    link: "/",
  },
];

export const topDealshomeFurnitureCategories: CategoryItem[] = [
{
id: 'B0FN9WN6XD',
name: 'Green Soul',
image: '/products/Green_Soul_1.jpg',
url: '/stores/GreenSoul',
category: 'Furniture',
subCategory: 'Chairs',
},
{
id: 'B0FN9WN6XE',
name: 'Nilkamal',
image: '/products/Nilkamal_2.jpg',
url: '/stores/Nilkamal',
category: 'Furniture',
subCategory: 'Home',
},
{
id: 'B0FN9WN6XF',
name: 'Sleepwell',
image: '/products/Sleepwell_3.jpg',
url: '/stores/Sleepwell',
category: 'Mattress',
subCategory: 'Bedding',
},
{
id: 'B0FN9WN6XG',
name: 'The Sleep Company',
image: '/products/The_Sleep_Company_4.jpg',
url: '/stores/TheSleepCompany',
category: 'Mattress',
subCategory: 'Smart Mattress',
},
{
id: 'B0FN9WN6XH',
name: 'Interio by Goorej',
image: '/products/Interio_by_Goorej_5.jpg',
url: '/stores/Interio',
category: 'Furniture',
subCategory: 'Office',
},
{
id: 'B0FN9WN6XI',
name: 'Drogo',
image: '/products/Drogo_6.jpg',
url: '/stores/DROGO',
category: 'Furniture',
subCategory: 'Home Decor',
},
];

export const topHomeFurnitureItems = [
  {
    id: '1',
    title: 'Sleepyhead',
    subtitle: 'Mattresses',
    imageUrl: '/products/6353e94a1c07906f.jpg',
    link: '/'
  },
  {
    id: '2',
    title: 'Wooden Street',
    subtitle: 'Beds',
    imageUrl: '/products/af2c7d43715a4889.jpg',
    link: '/'
  },
  {
    id: '3',
    title: 'Sleepyhead Recliner',
    subtitle: 'Recliners',
    imageUrl: '/products/394dbf4cc5c01bc8.jpg',
    link: '/'
  },
  {
    id: '4',
    title: 'Sleepyhead Recliner',
    subtitle: 'Recliners',
    imageUrl: '/products/844384b50cccca99.jpg',
    link: '/'
  },
  {
    id: '5',
    title: 'Sleepyhead Recliner',
    subtitle: 'Recliners',
    imageUrl: '/products/fe52c6a092282155.jpg',
    link: '/'
  },
  {
    id: '6',
    title: 'Sleepyhead Recliner',
    subtitle: 'Recliners',
    imageUrl: '/products/63d119356b2170c3.jpg',
    link: '/'
  },
  {
    id: '7',
    title: 'Sleepyhead Recliner',
    subtitle: 'Recliners',
    imageUrl: '/products/cb39b76b131f29c9.jpg',
    link: '/'
  },
  {
    id: '8',
    title: 'Sleepyhead Recliner',
    subtitle: 'Recliners',
    imageUrl: '/products/d390fae27b44fd3b.jpg',
    link: '/'
  },
  {
    id: '9',
    title: 'Sleepyhead Recliner',
    subtitle: 'Recliners',
    imageUrl: '/products/32fd51f10a616742.jpg',
    link: '/'
  },
  {
    id: '10',
    title: 'Sleepyhead Recliner',
    subtitle: 'Recliners',
    imageUrl: '/products/0b41a86c34279069.jpg',
    link: '/'
  },
  {
    id: '11',
    title: 'Sleepyhead Recliner',
    subtitle: 'Recliners',
    imageUrl: '/products/1124c02d88fafc55.jpg',
    link: '/'
  },
  {
    id: '12',
    title: 'Sleepyhead Recliner',
    subtitle: 'Recliners',
    imageUrl: '/products/16a05b1214bc950e.jpg',
    link: '/'
  }
];

export const slidesHomeDecor : BannerItemContent[] = [
  {
    id: '1',
    title: '',
    subtitle: '',
    category: '',
    discount: '',
    imgUrl: '/products/homeDecor_1.png',
    align: 'left'
  },
  // {
  //   id: '2',
  //   title: '',
  //   subtitle: '',
  //   category: '',
  //   discount: '',
  //   imgUrl: '/products/homeDecor_2.png',
  //   align: 'left'
  // }
]

export const homeDecorCarouselCategories = [
  { 
    id: '1', 
    name: "Wall Art", 
    imageUrl: "/products/6dcd96ab3dffa74311231.jpg", 
    url: "/category/wall-art",
    category: "home_decor"
  },
  { 
    id: '2', 
    name: "Throw Pillows", 
    imageUrl: "/products/7e1f07bc4e00b85421.jpg", 
    url: "/category/throw-pillows",
    category: "home_decor"
  },
  { 
    id: '3', 
    name: "Area Rugs", 
    imageUrl: "/products/8f2d18cd5f11c9653.jpg", 
    url: "/category/area-rugs",
    category: "home_decor"
  },
  { 
    id: '4', 
    name: "Wall Mirrors", 
    imageUrl: "/products/9g3e29de6012d07641.jpg", 
    url: "/category/wall-mirrors",
    category: "home_decor"
  },
  { 
    id: '5', 
    name: "Vases & Planters", 
    imageUrl: "/products/0h4f30ef7113e1875.jpg", 
    url: "/category/vases-planters",
    category: "home_decor"
  },
  { 
    id: '6', 
    name: "Candles & Holders", 
    imageUrl: "/products/1i5g41fg8224f2986.jpg", 
    url: "/category/candles-holders",
    category: "home_decor"
  },
  { 
    id: '7', 
    name: "Wall Clocks", 
    imageUrl: "/products/2j6h52gh9335g309712.jpg", 
    url: "/category/wall-clocks",
    category: "home_decor"
  },
  { 
    id: '8', 
    name: "Photo Frames", 
    imageUrl: "/products/3k7i63hi0446h41081.jpg", 
    url: "/category/photo-frames",
    category: "home_decor"
  },
  { 
    id: '9', 
    name: "Decorative Bowls", 
    imageUrl: "/products/4l8j74ij1557i52191.jpg", 
    url: "/category/decorative-bowls",
    category: "home_decor"
  },
  { 
    id: '10', 
    name: "Table Lamps", 
    imageUrl: "/products/5m9k85jk2668j63201.jpg", 
    url: "/category/table-lamps",
    category: "home_decor"
  },
  { 
    id: '11', 
    name: "Artificial Plants", 
    imageUrl: "/products/6n0l96kl3779k7431.jpg", 
    url: "/category/artificial-plants",
    category: "home_decor"
  },
  { 
    id: '12', 
    name: "Wall Shelves", 
    imageUrl: "/products/7o1m07lm4880l8542.jpg", 
    url: "/category/wall-shelves",
    category: "home_decor"
  },
  { 
    id: '13', 
    name: "Decorative Trays", 
    imageUrl: "/products/8p2n18mn5991m9653.jpg", 
    url: "/category/decorative-trays",
    category: "home_decor"
  },
  { 
    id: '14', 
    name: "Rugs & Mats", 
    imageUrl: "/products/9q3o29no6002n0764.jpg", 
    url: "/category/rugs-mats",
    category: "home_decor"
  },
  { 
    id: '15', 
    name: "Decorative Accents", 
    imageUrl: "/products/0r4p30op7113o1875.jpg", 
    url: "/category/decorative-accents",
    category: "home_decor"
  },
];

export const topDealshomeDecorCategories: CategoryItem[] = [
  {
    id: 'nestasia',
    name: 'Nestasia',
    image: '/products/brand-in-focus-9C-400x4001._SS400_QL85_.jpg',
    url: '/',
    category: 'home_decor',
    subCategory: 'brands',
  },
  {
    id: 'ajanta',
    name: 'Ajanta',
    image: '/products/brand-in-focus-9C-400x4002._SS400_QL85_.jpg',
    url: '/',
    category: 'home_decor',
    subCategory: 'brands',
  },
  {
    id: 'tied-ribbons',
    name: 'Tied Ribbons',
    image: '/products/brand-in-focus-9C-400x4003._SS400_QL85_.jpg',
    url: '/',
    category: 'home_decor',
    subCategory: 'brands',
  },
  {
    id: 'solimo',
    name: 'Solimo',
    image: '/products/brand-in-focus-9C-400x4004._SS400_QL85_.jpg',
    url: '/',
    category: 'home_decor',
    subCategory: 'brands',
  },
  {
    id: 'collectible-india',
    name: 'Collectible India',
    image: '/products/brand-in-focus-9C-400x4005._SS400_QL85_.jpg',
    url: '/',
    category: 'home_decor',
    subCategory: 'brands',
  },
  {
    id: 'seiko',
    name: 'Seiko',
    image: '/products/titandecor._SS400_QL85_FMpng_.png',
    url: '/',
    category: 'home_decor',
    subCategory: 'brands',
  },
  {
    id: 'artstreet',
    name: 'ArtStreet',
    image: '/products/brand-in-focus-9C-400x4007._SS400_QL85_.jpg',
    url: '/',
    category: 'home_decor',
    subCategory: 'brands',
  },
  {
    id: 'satyamkraft',
    name: 'SatyamKraft',
    image: '/products/brand-in-focus-9C-400x4008._SS400_QL85_.jpg',
    url: '/',
    category: 'home_decor',
    subCategory: 'brands',
  },
  {
    id: 'shubhkart',
    name: 'Shubhkart',
    image: '/products/brand-in-focus-9C-400x4009._SS400_QL85_.jpg',
    url: '/',
    category: 'home_decor',
    subCategory: 'brands',
  },
];

export const topHomeDecorItems = [
  {
    id: "1",
    title: "BEHOMA Gold Metal Photo Frame (4x6) With Palm Tree Design",
    price: 856,
    oldPrice: 2499,
    currency: "₹",
    imageUrl: "/products/51b-qpFCdjL.AC_SX250.jpg",
    link: "#",
  },
  {
    id: "2",
    title: "Mold Your Memories Aluminum Rectangular Photo Frame Set Of 2 A4 Size",
    price: 1999,
    oldPrice: undefined, // Changed from null to undefined
    currency: "₹",
    imageUrl: "/products/51ivkLbmPdL.AC_SX250.jpg",
    link: "#",
  },
  {
    id: "3",
    title: "Habere India Wall Mirror with Leaf Design | Rattan Frame for Living Room",
    price: 2579,
    oldPrice: 8999,
    currency: "₹",
    imageUrl: "/products/410mPOGyLmL.AC_SX250.jpg",
    link: "#",
  },
  {
    id: "4",
    title: "Royalzig Set of 5 Wooden Photo Frame for Wall Decoration",
    price: 2999,
    oldPrice: 6999,
    currency: "₹",
    imageUrl: "/products/51gJsUSQ1CL.AC_SX250.jpg",
    link: "#",
  },
  {
    id: "5",
    title: "CasaGold 24 Inch Gold Abstract Vintage Hammered Mirror",
    price: 13999,
    oldPrice: 18200,
    currency: "₹",
    imageUrl: "/products/410I7jeJLcL.AC_SX250.jpg",
    link: "#",
  },
  {
    id: "6",
    title: "UNIVERSE LIGHTS 6 Pack Chef Fridge Magnet Refrigerator Magnets",
    price: 999,
    oldPrice: 1699,
    currency: "₹",
    imageUrl: "/products/51pRRG1jmVL.AC_SX250.jpg",
    link: "#",
  },
  {
    id: "7",
    title: "Decor de Maison Mitsuki Luxury Table Clock for Living Room, Bedroom",
    price: 3000,
    oldPrice: 5520,
    currency: "₹",
    imageUrl: "/products/41RcYHJErkL.AC_SX250.jpg",
    link: "#",
  },
  {
    id: "8",
    title: "Skywalk Cute Indian Couple Cycle Ride Wooden Fridge Magnet",
    price: 179,
    oldPrice: 499,
    currency: "₹",
    imageUrl: "/products/511rwJ+8DTL.AC_SX250.jpg",
    link: "#",
  },
  {
    id: "9",
    title: "SkyWalker India Souvenir Wooden MDF Goa Fridge Magnet",
    price: 179,
    oldPrice: 399,
    currency: "₹",
    imageUrl: "/products/51CGDQtIUWL.AC_SX250.jpg",
    link: "#",
  },
];

export const giftworthyVasesHomeDecorItems = [
  {
    id: "B0C3JNHK1L",
    title: "FURN ASPIRE Combo Set Of Ceramic Vase And Hand Made Artificial Flowers Bouquet",
    price: 1471,
    oldPrice: 1900,
    currency: "₹",
    imageUrl: "/products/51CJHjEdZhL.AC_SX250.jpg",
    link: "#",
  },
  {
    id: "B0CTHS7GJ9",
    title: "Glimpse Homes Crinkled Paper Bag Vase | Ceramic Flower Vase | Living Room Decor | 8 inch",
    price: 1198,
    oldPrice: 1399,
    currency: "₹",
    imageUrl: "/products/415f3wfFzHL.AC_SX250.jpg",
    link: "#",
  },
  {
    id: "B09QSP77HB",
    title: "Pure Home + Living Ivory Honeycomb Pearl Finish Ceramic Vase - Medium",
    price: 1507,
    oldPrice: 1799,
    currency: "₹",
    imageUrl: "/products/51qSDtCxjFL.AC_SX250.jpg",
    link: "#",
  },
  {
    id: "B0C8HT1NR8",
    title: "MARKET 99 Ceramic Flower Vase (Pink) | Engraved Ribbed Floral Pattern | Decorative Floral Vase",
    price: 749,
    oldPrice: 1499,
    currency: "₹",
    imageUrl: "/products/41uvv6it42L.AC_SX250.jpg",
    link: "#",
  },
  {
    id: "B0D14RGWJ1",
    title: "PUREZENTO Vintage Roman White Vase - Set of 3 | Decorative Bottle Shaped Vases with Twine Bow",
    price: 799,
    oldPrice: 2599,
    currency: "₹",
    imageUrl: "/products/31zPel1zYZL.AC_SX250.jpg",
    link: "#",
  },
  {
    id: "B0BVVJXHT7",
    title: "ABOUT SPACE Glass Bud Flower Vase – Pack of 10 Clear Glass Centrepiece for Mini Flowers",
    price: 1499,
    oldPrice: 2599,
    currency: "₹",
    imageUrl: "/products/41KtF7M-CCL.AC_SX250.jpg",
    link: "#",
  },
  {
    id: "B09LYY8SZC",
    title: "Craftribal Inverted U Shape Ceramic Minimalist Aesthetic Flower Vase | Pampas Grass Vase",
    price: 739,
    oldPrice: 1799,
    currency: "₹",
    imageUrl: "/products/41hURdLnIaL.AC_SX250.jpg",
    link: "#",
  },
  {
    id: "B0CN4FKXGB",
    title: "FURN ASPIRE Glass Vase With Artificial Flowers Modern Flower Plants Vases",
    price: 1399,
    oldPrice: 2000,
    currency: "₹",
    imageUrl: "/products/51ubrKuLRmL.AC_SX250.jpg",
    link: "#",
  },
  {
    id: "B0C3XG327N",
    title: "BEHOMA Metal Flower Vase for Home Decor, White | Metal flower vase for fresh or artificial flowers",
    price: 760,
    oldPrice: 1600,
    currency: "₹",
    imageUrl: "/products/419nb9oqlUL.AC_SX250.jpg",
    link: "#",
  },
  {
    id: "B0CQP7TG8N",
    title: "PUREZENTO Ivory Textured Rounded Bottle Shaped Ceramic Vase 6.5 Inch",
    price: 422,
    oldPrice: 825,
    currency: "₹",
    imageUrl: "/products/31wFfYrDRxL.AC_SX250.jpg",
    link: "#",
  },
  {
    id: "B0CVW1T33T",
    title: "HOMEVERSE 24pcs Artificial Faux Eucalyptus Stems with Fake Leaves",
    price: 454,
    oldPrice: 699,
    currency: "₹",
    imageUrl: "/products/41uUgZe7LqL.AC_SX250.jpg",
    link: "#",
  },
  {
    id: "B0C3JLTZJC",
    title: "FURN ASPIRE Combo Set Of Ceramic Vase And Hand Made Artificial Flowers Bouquet (Vase1)",
    price: 1471,
    oldPrice: 1900,
    currency: "₹",
    imageUrl: "/products/51QdMmBjeeL.AC_SX250.jpg",
    link: "#",
  },
  {
    id: "B0CZXTLGXS",
    title: "Nostrae by Ekhasa 100% Crystal Clear Glass Bud Vases Flower Pots for Home Decor (Set of 5)",
    price: 657,
    oldPrice: 1999,
    currency: "₹",
    imageUrl: "/products/51hqZjEfZRL.AC_SX250.jpg",
    link: "#",
  },
];