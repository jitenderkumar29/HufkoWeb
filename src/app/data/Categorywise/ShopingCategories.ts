import { SubHeaderItem } from "@/components/Header/SubHeader/SubHeader";
import { BankOfferSlideData } from "@/components/Shopping/HeroBanner/BankOfferSlide/BankOfferSlide";
import { FashionCard } from "@/components/Shopping/HeroBanner/FashionFullSlideGrid/FashionFullSlideGrid";
import { BannerItem } from "@/components/Shopping/HeroBanner/HeroBannerHalfSlide/HeroBannerHalfSlide";
import { BannerItemContent } from "@/components/Shopping/HeroBanner/HeroBannerLeftContent/HeroBannerLeftContent";
import { HeroSlide } from "@/components/Shopping/HeroBanner/HeroBannerSlide/HeroBannerSlide";
import { BrandItem } from "@/components/Shopping/ItemListDesigns/TopBrandsOnOffer/TopBrandsOnOffer";
import { ScrollItem } from "@/components/Shopping/ItemListDesigns/VerticalScroll/VerticalScroll";
import { CategoryItem } from "@/components/Shopping/ShopByItemcategory/ShopByCategory/ShopByCategory";
import { Cake, Gift, Flower2, Leaf, Sparkles } from 'lucide-react';

export const ShopingCategories = [
  {
    id: "electronics",
    name: "Electronics",
    imageUrl: "/products/Electronics.png",
    url: "/electronics",
  },
  {
    id: "home_kitchen",
    name: "Home & Kitchen",
    imageUrl: "/products/home_kitchen3.png",
    url: "/home_kitchen",
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
    id: "baby_toys",
    name: "Baby & Toys",
    imageUrl: "/products/BeautyFood.png",
    url: "/beauty_food",
  },
  {
    id: "sports_fitness",
    name: "Sports & Fitness",
    imageUrl: "/products/sports_&_fitness_1.png",
    url: "/sports_&_fitness",
  },
  {
    id: "books",
    name: "Books",
    // name: "Apparel & Lifestyle",
    imageUrl: "/products/books.png",
    url: "/lifestyle",
  },
  {
    id: "jewellery",
    name: "Jewellery",
    // name: "Jewellery & Accessories",
    imageUrl: "/products/JewelleryAccessories.png",
    url: "/jewellery",
  },
  {
    id: "auto_accessories",
    name: "Auto Accessories",
    // name: "Jewellery & Accessories",
    imageUrl: "/products/auto_accessories3.png",
    url: "/auto_accessories",
  },

];

// In your data file (ShopingCategories.ts or wherever this is defined)

export const shoppingCategoriesSubHeader: SubHeaderItem[] = [
  { name: "All", url: "/", category: "all" },
  { name: "Electronics", id: "electronics_sub_header", url: "/electronics", category: "electronics" },
  { name: "Home & Kitchen", id: "home_kitchen_sub_header", url: "/home_kitchen", category: "home_kitchen" },
  { name: "Home Decor", id: "home_decor_sub_header", url: "/home_decor", category: "home_decor" },
  { name: "Home Furniture", id: "home_furniture_sub_header", url: "/home_furniture", category: "home_furniture" },
  { name: "Mobiles & Tablets", id: "mobiles_tablets_sub_header", url: "/mobiles_tablets", category: "mobiles_tablets" },
  { name: "Men's Fashion", id: "mens_fashion_sub_header", url: "/men", category: "mens_fashion" },
  { name: "Women's Fashion", id: "women_fashion_sub_header", url: "/women", category: "women_fashion" },
  { name: "Kid's Fashion", id: "kids_fashion_sub_header", url: "/kids", category: "kids_fashion" },
  { name: "Women's Beauty", id: "women_beauty_sub_header", url: "/women_beauty", category: "women_beauty" },
  { name: "Appliances", id: "appliances_sub_header", url: "/appliances", category: "appliances" },
  { name: "Baby & Toys", id: "baby_toys_sub_header", url: "/beauty_food", category: "baby_toys" },
  { name: "Sports & Fitness", id: "sports_fitness_sub_header", url: "/sports_fitness", category: "sports_fitness" },
  { name: "Books", id: "books_sub_header", url: "/books", category: "books" },
  { name: "Jewellery", id: "jewellery_sub_header", url: "/jewellery", category: "jewellery" },
  { name: "Auto Accessories", id: "auto_accessories_sub_header", url: "/auto_accessories", category: "auto_accessories" },
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

export const homeFurnitureCategoriesData = [
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
    imageUrl: '/products/laptop._SS400_QL85_.jpg',
    url: '/laptops',
    category: 'shopping',
    subCategory: 'electronics',
    subSubCategory: ''
  },
  {
    id: 'headphones',
    name: 'Headphones',
    imageUrl: '/products/Headphones._SS400_QL85_.jpg',
    url: '/headphones',
    category: 'shopping',
    subCategory: 'electronics',
    subSubCategory: ''
  },
  {
    id: 'tablets',
    name: 'Tablets',
    imageUrl: '/products/02_Halos_copy._SS400_QL85_FMpng_.png',
    url: '/tablets',
    category: 'shopping',
    subCategory: 'electronics',
    subSubCategory: ''
  },
  {
    id: 'smartwatches',
    name: 'Smartwatches',
    imageUrl: '/products/Smartwatches._SS400_QL85_.jpg',
    url: '/smartwatches',
    category: 'shopping',
    subCategory: 'electronics',
    subSubCategory: ''
  },
  {
    id: 'monitors',
    name: 'Monitors',
    imageUrl: '/products/Monitors._SS400_QL85_.jpg',
    url: '/monitors',
    category: 'shopping',
    subCategory: 'electronics',
    subSubCategory: ''
  },
  {
    id: 'desktops',
    name: 'Desktops',
    imageUrl: '/products/Desktops._SS400_QL85_.jpg',
    url: '/desktops',
    category: 'shopping',
    subCategory: 'electronics',
    subSubCategory: ''
  },
  {
    id: 'video-games',
    name: 'Video Games',
    imageUrl: '/products/Video-game_Halo._SS400_QL85_FMpng_.png',
    url: '/video-games',
    category: 'shopping',
    subCategory: 'electronics',
    subSubCategory: ''
  },
  {
    id: 'gaming-laptops',
    name: 'Gaming Laptops',
    imageUrl: '/products/Gaming_Laptops._SS400_QL85_.jpg',
    url: '/gaming-laptops',
    category: 'shopping',
    subCategory: 'electronics',
    subSubCategory: ''
  },
  {
    id: 'camera-accessories',
    name: 'Camera & Accessories',
    imageUrl: '/products/Camera__Accessories._SS400_QL85_.jpg',
    url: '/camera-accessories',
    category: 'shopping',
    subCategory: 'electronics',
    subSubCategory: ''
  },
  {
    id: 'computer-accessories',
    name: 'Computer Accessories',
    imageUrl: '/products/Computer_Accessories._SS400_QL85_.jpg',
    url: '/computer-accessories',
    category: 'shopping',
    subCategory: 'electronics',
    subSubCategory: ''
  },
  {
    id: 'home-audio',
    name: 'Home Audio',
    imageUrl: '/products/9_audio._CB795899201_.png',
    url: '/home-audio',
    category: 'shopping',
    subCategory: 'electronics',
    subSubCategory: ''
  },
  {
    id: 'stationery',
    name: 'Stationery',
    imageUrl: '/products/Stationery._SS400_QL85_.jpg',
    url: '/stationery',
    category: 'shopping',
    subCategory: 'electronics',
    subSubCategory: ''
  },
  {
    id: 'musical-instruments',
    name: 'Musical Instruments',
    imageUrl: '/products/musical-instruments._SS400_QL85_.jpg',
    url: '/musical-instruments',
    category: 'shopping',
    subCategory: 'electronics',
    subSubCategory: ''
  },
  {
    id: 'software',
    name: 'Software',
    imageUrl: '/products/Software_Halo._SS400_QL85_.jpg',
    url: '/software',
    category: 'shopping',
    subCategory: 'electronics',
    subSubCategory: ''
  },
  {
    id: 'components',
    name: 'Components',
    imageUrl: '/products/components._SS400_QL85_.jpg',
    url: '/components',
    category: 'shopping',
    subCategory: 'electronics',
    subSubCategory: ''
  },
  {
    id: 'printer',
    name: 'Printer',
    imageUrl: '/products/printer._SS400_QL85_.jpg',
    url: '/printer',
    category: 'shopping',
    subCategory: 'electronics',
    subSubCategory: ''
  },
  {
    id: 'storage',
    name: 'Storage',
    imageUrl: '/products/storage._SS400_QL85_.jpg',
    url: '/storage',
    category: 'shopping',
    subCategory: 'electronics',
    subSubCategory: ''
  },
  {
    id: 'networking',
    name: 'Networking',
    imageUrl: '/products/networking._SS400_QL85_.jpg',
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
    url: "/sp/pay-day/pay-day-sale",
    category: "mens_fashion",
    subCategory: "mens_clothing_mens_fashion"
  },
  {
    id: '1',
    name: "Live Now",
    imageUrl: "/products/pay-day-sale_men_fashion.jpg",
    url: "/sp/pay-day/pay-day-sale",
    category: "mens_fashion",
    subCategory: "live_now_mens_fashion"
  },
  {
    id: '2',
    name: "Skin Care",
    imageUrl: "/products/skin-care_men_fashion.jpg",
    url: "/skin-care/c/7303",
    category: "mens_fashion",
    subCategory: "skin_care_mens_fashion"
  },
  {
    id: '3',
    name: "Fragrance",
    imageUrl: "/products/fragrance_men_fashion.jpg",
    url: "/perfumes-deos/c/7335",
    category: "mens_fashion",
    subCategory: "fragrance_mens_fashion"
  },
  {
    id: '4',
    name: "Footwear",
    imageUrl: "/products/footwear_men_fashion.jpg",
    url: "/footwear/c/14287",
    category: "mens_fashion",
    subCategory: "footwear_mens_fashion"
  },
  {
    id: '5',
    name: "Ethnic Wear",
    imageUrl: "/products/ethnic-wear_men_fashion.jpg",
    url: "/fashion-lifestyle/ethnicwear/c/26223",
    category: "mens_fashion",
    subCategory: "ethnic_wear_mens_fashion"
  },
  {
    id: '6',
    name: "Bath & Body",
    imageUrl: "/products/bath-body_men_fashion.jpg",
    url: "/bath-body/c/7312",
    category: "mens_fashion",
    subCategory: "bath_body_mens_fashion"
  },
  {
    id: '7',
    name: "Hair Care",
    imageUrl: "/products/hair-care_men_fashion.jpg",
    url: "/hair/c/7296",
    category: "mens_fashion",
    subCategory: "hair_care_mens_fashion"
  },
  {
    id: '8',
    name: "Topwear",
    imageUrl: "/products/topwear_men_fashion.jpg",
    url: "/topwear/c/24294",
    category: "mens_fashion",
    subCategory: "topwear_mens_fashion"
  },
  {
    id: '9',
    name: "Health & Nutrition",
    imageUrl: "/products/health-nutrition_men_fashion.jpg",
    url: "/health-nutrition/c/7330",
    category: "mens_fashion",
    subCategory: "health_nutrition_mens_fashion"
  },
  {
    id: '10',
    name: "Foot Locker",
    imageUrl: "/products/foot-locker_men_fashion.gif",
    url: "/sp/footlocker/foot-locker",
    category: "mens_fashion",
    subCategory: "foot_locker_mens_fashion"
  },
  {
    id: '11',
    name: "Home",
    imageUrl: "/products/home_men_fashion.jpg",
    url: "/home/c/74572",
    category: "mens_fashion",
    subCategory: "home_mens_fashion"
  },
  {
    id: '12',
    name: "Bottomwear",
    imageUrl: "/products/bottomwear_men_fashion.jpg",
    url: "/bottomwear/c/24302",
    category: "mens_fashion",
    subCategory: "bottomwear_mens_fashion"
  },
  {
    id: '13',
    name: "Watches",
    imageUrl: "/products/watches_men_fashion.jpg",
    url: "/watches/c/15885",
    category: "mens_fashion",
    subCategory: "watches_mens_fashion"
  },
  {
    id: '14',
    name: "Activewear",
    imageUrl: "/products/activewear_men_fashion.jpg",
    url: "/activewear/c/24309",
    category: "mens_fashion",
    subCategory: "activewear_mens_fashion"
  },
  {
    id: '15',
    name: "Fashion Accessories",
    imageUrl: "/products/fashion-accessories_men_fashion.jpg",
    url: "/lifestyle-accessories/c/17921",
    category: "mens_fashion",
    subCategory: "fashion_accessories_mens_fashion"
  },
  {
    id: '16',
    name: "Grooming Store",
    imageUrl: "/products/grooming-store_men_fashion.jpg",
    url: "/sp/grooming-store/default",
    category: "mens_fashion",
    subCategory: "grooming_store_mens_fashion"
  },
  {
    id: '17',
    name: "Fashion store",
    imageUrl: "/products/fashion-store_men_fashion.jpg",
    url: "/sp/fashion-store/default",
    category: "mens_fashion",
    subCategory: "fashion_store_mens_fashion"
  },
  {
    id: '18',
    name: "Gen-Z",
    imageUrl: "/products/gen-z_men_fashion.jpg",
    url: "/sp/fashion-store/default",
    category: "mens_fashion",
    subCategory: "gen_z_mens_fashion"
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
    url: "/",
    category: "women_fashion",
    subCategory: "monsoon_women_fashion"
  },
  {
    id: '1',
    name: "Kurta sets",
    imageUrl: "/products/kurta-sets_womens_fashion.jpg",
    url: "/",
    category: "women_fashion",
    subCategory: "kurta_sets_women_fashion"
  },
  {
    id: '2',
    name: "Dresses",
    imageUrl: "/products/dresses_womens_fashion.jpg",
    url: "/",
    category: "women_fashion",
    subCategory: "dresses_women_fashion"
  },
  {
    id: '3',
    name: "Sarees",
    imageUrl: "/products/sarees_womens_fashion.jpg",
    url: "/",
    category: "women_fashion",
    subCategory: "sarees_women_fashion"
  },
  {
    id: '4',
    name: "Nightsuits",
    imageUrl: "/products/nightsuits_womens_fashion.jpg",
    url: "/",
    category: "women_fashion",
    subCategory: "nightsuits_women_fashion"
  },
  {
    id: '5',
    name: "Kurtis",
    imageUrl: "/products/kurtis_womens_fashion.jpg",
    url: "/",
    category: "women_fashion",
    subCategory: "kurtis_women_fashion"
  },
  {
    id: '6',
    name: "Jeans",
    imageUrl: "/products/jeans_womens_fashion.jpg",
    url: "/",
    category: "women_fashion",
    subCategory: "jeans_women_fashion"
  },
  {
    id: '7',
    name: "Dress Material",
    imageUrl: "/products/dress-material_womens_fashion.jpg",
    url: "/",
    category: "women_fashion",
    subCategory: "dress_material_women_fashion"
  },
  {
    id: '8',
    name: "Watches",
    imageUrl: "/products/watches_womens_fashion.jpg",
    url: "/",
    category: "women_fashion",
    subCategory: "watches_women_fashion"
  },
  {
    id: '9',
    name: "Drips for Her",
    imageUrl: "/products/drips-for-her_womens_fashion.jpg",
    url: "/",
    category: "women_fashion",
    subCategory: "drips_for_her_women_fashion"
  },
  {
    id: '10',
    name: "Next Gen Fashion",
    imageUrl: "/products/next-gen-fashion_womens_fashion.jpg",
    url: "/",
    category: "women_fashion",
    subCategory: "next_gen_fashion_women_fashion"
  },
  {
    id: '11',
    name: "Trends",
    imageUrl: "/products/trends_womens_fashion.jpg",
    url: "/",
    category: "women_fashion",
    subCategory: "trends_women_fashion"
  },
  {
    id: '12',
    name: "Sports Shoes",
    imageUrl: "/products/sports-shoes_womens_fashion.jpg",
    url: "/",
    category: "women_fashion",
    subCategory: "sports_shoes_women_fashion"
  },
  {
    id: '13',
    name: "Jewellery",
    imageUrl: "/products/jewellery_womens_fashion.jpg",
    url: "/",
    category: "women_fashion",
    subCategory: "jewellery_women_fashion"
  },
  {
    id: '14',
    name: "Handbags",
    imageUrl: "/products/handbags_womens_fashion.jpg",
    url: "/",
    category: "women_fashion",
    subCategory: "handbags_women_fashion"
  },
  {
    id: '15',
    name: "Kids' clothing",
    imageUrl: "/products/kids-clothing_womens_fashion.jpg",
    url: "/",
    category: "women_fashion",
    subCategory: "kids_clothing_women_fashion"
  },
  {
    id: '16',
    name: "Lehenga Cholis",
    imageUrl: "/products/lehenaga-cholis_womens_fashion.jpg",
    url: "/",
    category: "women_fashion",
    subCategory: "lehenga_cholis_women_fashion"
  },
  {
    id: '17',
    name: "Bra, panty",
    imageUrl: "/products/bra-panty_womens_fashion.jpg",
    url: "/",
    category: "women_fashion",
    subCategory: "bra_panty_women_fashion"
  },
  {
    id: '18',
    name: "Heels & Flats",
    imageUrl: "/products/heels-flats_womens_fashion.jpg",
    url: "/",
    category: "women_fashion",
    subCategory: "heels_flats_women_fashion"
  },
  {
    id: '19',
    name: "Tops, t-shirts",
    imageUrl: "/products/tops-t-shirts_womens_fashion.jpg",
    url: "/",
    category: "women_fashion",
    subCategory: "tops_t_shirts_women_fashion"
  },
  {
    id: '20',
    name: "Focus brands",
    imageUrl: "/products/focus-brands_womens_fashion.jpg",
    url: "/",
    category: "women_fashion",
    subCategory: "focus_brands_women_fashion"
  },
  {
    id: '21',
    name: "Celeb looks",
    imageUrl: "/products/celeb-looks_womens_fashion.jpg",
    url: "/",
    category: "women_fashion",
    subCategory: "celeb_looks_women_fashion"
  },
  {
    id: '22',
    name: "Indian Wear",
    imageUrl: "/products/indian-wear_womens_fashion.jpg",
    url: "/",
    category: "women_fashion",
    subCategory: "indian_wear_women_fashion"
  },
  {
    id: '23',
    name: "Western Wear",
    imageUrl: "/products/western-wear_womens_fashion.jpg",
    url: "/",
    category: "women_fashion",
    subCategory: "western_wear_women_fashion"
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
    url: "/",
    category: "kids_fashion",
    subCategory: "boys_kids_fashion"
  },
  {
    id: '1',
    name: "Girls",
    imageUrl: "/products/Girls_Clothing._SS300_QL85_FMpng_.png",
    url: "/",
    category: "kids_fashion",
    subCategory: "girls_kids_fashion"
  },
  {
    id: '2',
    name: "Footwear",
    imageUrl: "/products/Footwear2._SS300_QL85_FMpng_.png",
    url: "/",
    category: "kids_fashion",
    subCategory: "footwear_kids_fashion"
  },
  {
    id: '3',
    name: "Infants",
    imageUrl: "/products/Baby_Clothing._SS300_QL85_FMpng_.png",
    url: "/",
    category: "kids_fashion",
    subCategory: "infants_kids_fashion"
  },
  {
    id: '4',
    name: "Teens",
    imageUrl: "/products/Teens._SS300_QL85_FMpng_.png",
    url: "/",
    category: "kids_fashion",
    subCategory: "teens_kids_fashion"
  },
  {
    id: '5',
    name: "Bags",
    imageUrl: "/products/Accessories2._SS300_QL85_FMpng_.png",
    url: "/",
    category: "kids_fashion",
    subCategory: "bags_kids_fashion"
  },
  {
    id: '6',
    name: "Jewellery",
    imageUrl: "/products/Jewllery._SS300_QL85_FMpng_.png",
    url: "/",
    category: "kids_fashion",
    subCategory: "jewellery_kids_fashion"
  },
  {
    id: '7',
    name: "Watches",
    imageUrl: "/products/Watches._SS300_QL85_FMpng_.png",
    url: "/",
    category: "kids_fashion",
    subCategory: "watches_kids_fashion"
  },
  {
    id: '8',
    name: "Sunglasses",
    imageUrl: "/products/Sunglasses1._SS300_QL85_FMpng_.png",
    url: "/",
    category: "kids_fashion",
    subCategory: "sunglasses_kids_fashion"
  },
  {
    id: '9',
    name: "Amazon Brands",
    imageUrl: "/products/Amazon_Brands._SS300_QL85_FMpng_.png",
    url: "/",
    category: "kids_fashion",
    subCategory: "amazon_brands_kids_fashion"
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
    url: "/",
    category: "women_beauty",
    subCategory: "skincare_women_beauty"
  },
  {
    id: '1',
    name: "Hair Care",
    imageUrl: "/products/haircare._SS300_QL85_FMpng_.png",
    url: "/",
    category: "women_beauty",
    subCategory: "hair_care_women_beauty"
  },
  {
    id: '2',
    name: "Luxury Beauty",
    imageUrl: "/products/luxe._SS300_QL85_FMpng_.png",
    url: "/",
    category: "women_beauty",
    subCategory: "luxury_beauty_women_beauty"
  },
  {
    id: '3',
    name: "Makeup",
    imageUrl: "/products/makeup._SS300_QL85_FMpng_.png",
    url: "/",
    category: "women_beauty",
    subCategory: "makeup_women_beauty"
  },
  {
    id: '4',
    name: "Deos & Fragrances",
    imageUrl: "/products/fragrance._SS300_QL85_FMpng_.png",
    url: "/",
    category: "women_beauty",
    subCategory: "deos_fragrances_women_beauty"
  },
  {
    id: '5',
    name: "Bath & Shower",
    imageUrl: "/products/bath._SS300_QL85_FMpng_.png",
    url: "/",
    category: "women_beauty",
    subCategory: "bath_shower_women_beauty"
  },
  {
    id: '6',
    name: "Professional Beauty",
    imageUrl: "/products/Pro_Beauty._SS300_QL85_FMpng_.png",
    url: "/",
    category: "women_beauty",
    subCategory: "professional_beauty_women_beauty"
  },
  {
    id: '7',
    name: "Men's Grooming",
    imageUrl: "/products/grooming._SS300_QL85_FMpng_.png",
    url: "/",
    category: "women_beauty",
    subCategory: "mens_grooming_women_beauty"
  },
  {
    id: '8',
    name: "Women's Grooming",
    imageUrl: "/products/women_grooming._SS300_QL85_FMpng_.png",
    url: "/",
    category: "women_beauty",
    subCategory: "womens_grooming_women_beauty"
  },
  {
    id: '9',
    name: "Top Rated Beauty",
    imageUrl: "/products/most_loved._SS300_QL85_FMpng_.png",
    url: "/",
    category: "women_beauty",
    subCategory: "top_rated_beauty_women_beauty"
  },
  {
    id: '10',
    name: "Brands",
    imageUrl: "/products/Brands_womens_fashion.jpg",
    url: "/",
    category: "women_beauty",
    subCategory: "brands_women_beauty"
  },
  {
    id: '11',
    name: "Luxe",
    imageUrl: "/products/Luxe_womens_fashion.jpg",
    url: "/",
    category: "women_beauty",
    subCategory: "luxe_women_beauty"
  },
  {
    id: '12',
    name: "Appliances",
    imageUrl: "/products/Appliances_womens_fashion.jpg",
    url: "/",
    category: "women_beauty",
    subCategory: "appliances_women_beauty"
  },
  {
    id: '13',
    name: "Bath & Body",
    imageUrl: "/products/Bath _Body_womens_fashion_2.jpg",
    url: "/",
    category: "women_beauty",
    subCategory: "bath_body_women_beauty"
  },
  {
    id: '14',
    name: "Natural",
    imageUrl: "/products/Natural_womens_fashion.jpg",
    url: "/",
    category: "women_beauty",
    subCategory: "natural_women_beauty"
  },
  {
    id: '15',
    name: "Mom & Baby",
    imageUrl: "/products/Mom_&_Baby_womens_fashion.jpg",
    url: "/",
    category: "women_beauty",
    subCategory: "mom_baby_women_beauty"
  },
  {
    id: '16',
    name: "Fragrance",
    imageUrl: "/products/Fragrance_womens_fashion.jpg",
    url: "/",
    category: "women_beauty",
    subCategory: "fragrance_women_beauty"
  },
  {
    id: '17',
    name: "Lingerie & Accessories",
    imageUrl: "/products/Lingerie_&_Accessories_womens_fashion.jpg",
    url: "/",
    category: "women_beauty",
    subCategory: "lingerie_accessories_women_beauty"
  }
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
    imageUrl: "/products/chanderi.jpg",
    link: "/",
  },
  {
    id: "2",
    title: "Insta Loved",
    imageUrl: "/products/insta.jpg",
    link: "/",
  },
  {
    id: "3",
    title: "Party Ready",
    imageUrl: "/products/party.jpg",
    link: "/",
  },
  {
    id: "4",
    title: "Daily Coords",
    imageUrl: "/products/daily.jpg",
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
    category: "electronics",
    subCategory: "smartphones_electronics"
  },
  {
    id: '1',
    name: "Laptops & Computers",
    imageUrl: "/products/laptop._SS400_QL85_1.jpg",
    url: "/electronics/laptops",
    category: "electronics",
    subCategory: "laptops_computers_electronics"
  },
  {
    id: '2',
    name: "Tablets",
    imageUrl: "/products/02_Halos_copy._SS400_QL85_FMpng_1.png",
    url: "/electronics/tablets",
    category: "electronics",
    subCategory: "tablets_electronics"
  },
  {
    id: '3',
    name: "Headphones & Earphones",
    imageUrl: "/products/Headphones._SS400_QL85_1.jpg",
    url: "/electronics/headphones",
    category: "electronics",
    subCategory: "headphones_earphones_electronics"
  },
  {
    id: '4',
    name: "Smart Watches",
    imageUrl: "/products/Smartwatches._SS400_QL85_1.jpg",
    url: "/electronics/smartwatches",
    category: "electronics",
    subCategory: "smart_watches_electronics"
  },
  {
    id: '5',
    name: "Cameras & Photography",
    imageUrl: "/products/Camera__Accessories._SS400_QL85_1.jpg",
    url: "/electronics/cameras",
    category: "electronics",
    subCategory: "cameras_photography_electronics"
  },
  {
    id: '6',
    name: "Televisions",
    imageUrl: "/products/televisions_electronics1.jpg",
    url: "/electronics/tvs",
    category: "electronics",
    subCategory: "televisions_electronics"
  },
  {
    id: '7',
    name: "Audio Speakers",
    imageUrl: "/products/9_audio._CB795899201_.png",
    url: "/electronics/speakers",
    category: "electronics",
    subCategory: "audio_speakers_electronics"
  },
  {
    id: '8',
    name: "Gaming Consoles",
    imageUrl: "/products/Gaming_Laptops._SS400_QL85_1.jpg",
    url: "/electronics/gaming",
    category: "electronics",
    subCategory: "gaming_consoles_electronics"
  },
  {
    id: '9',
    name: "Computer Accessories",
    imageUrl: "/products/Computer_Accessories._SS400_QL85_1.jpg",
    url: "/electronics/accessories",
    category: "electronics",
    subCategory: "computer_accessories_electronics"
  },
  {
    id: '10',
    name: "Printers & Scanners",
    imageUrl: "/products/printer._SS400_QL85_1.jpg",
    url: "/electronics/printers",
    category: "electronics",
    subCategory: "printers_scanners_electronics"
  },
  {
    id: '11',
    name: "Storage Devices",
    imageUrl: "/products/storage._SS400_QL85_1.jpg",
    url: "/electronics/storage",
    category: "electronics",
    subCategory: "storage_devices_electronics"
  },
  {
    id: '12',
    name: "Mobile Accessories",
    imageUrl: "/products/mobile_accessories_electronics1.jpg",
    url: "/electronics/mobile-accessories",
    category: "electronics",
    subCategory: "mobile_accessories_electronics"
  },
  {
    id: '13',
    name: "Networking Devices",
    imageUrl: "/products/networking_devices_electronics1.jpg",
    url: "/electronics/networking",
    category: "electronics",
    subCategory: "networking_devices_electronics"
  },
  {
    id: '14',
    name: "Smart Home Devices",
    imageUrl: "/products/smart_home_electronics.jpg",
    url: "/electronics/smart-home",
    category: "electronics",
    subCategory: "smart_home_devices_electronics"
  },
  {
    id: '15',
    name: "Fitness Trackers",
    imageUrl: "/products/fitness_trackers_electronics.jpg",
    url: "/electronics/fitness-trackers",
    category: "electronics",
    subCategory: "fitness_trackers_electronics"
  },
  {
    id: '16',
    name: "Drone & Gadgets",
    imageUrl: "/products/drones_gadgets_electronics.jpg",
    url: "/electronics/drones",
    category: "electronics",
    subCategory: "drones_gadgets_electronics"
  },
  {
    id: '17',
    name: "Monitor & Display",
    imageUrl: "/products/Monitors._SS400_QL85_.jpg",
    url: "/electronics/monitors",
    category: "electronics",
    subCategory: "monitors_displays_electronics"
  },
  {
    id: '18',
    name: "Software & Antivirus",
    imageUrl: "/products/software_antivirus_electronics.jpg",
    url: "/electronics/software",
    category: "electronics",
    subCategory: "software_antivirus_electronics"
  },
  {
    id: '19',
    name: "Tech Deals",
    imageUrl: "/products/tech_deals_electronics.jpg",
    url: "/electronics/deals",
    category: "electronics",
    subCategory: "tech_deals_electronics"
  },
  {
    id: '20',
    name: 'Desktops',
    imageUrl: '/products/Desktops._SS400_QL85_.jpg',
    url: '/desktops',
    category: "electronics",
    subCategory: "desktops_electronics"
  },
  {
    id: '21',
    name: 'Video Games',
    imageUrl: '/products/Video-game_Halo._SS400_QL85_FMpng_.png',
    url: '/video-games',
    category: 'electronics',
    subCategory: "video_games_electronics"
  },
  {
    id: '22',
    name: 'Stationery',
    imageUrl: '/products/Stationery._SS400_QL85_.jpg',
    url: '/stationery',
    category: 'electronics',
    subCategory: "stationery_electronics"
  },
  {
    id: '23',
    name: 'Musical Instruments',
    imageUrl: '/products/musical-instruments._SS400_QL85_.jpg',
    url: '/musical-instruments',
    category: 'electronics',
    subCategory: "musical_instruments_electronics"
  },
  {
    id: '24',
    name: 'Software',
    imageUrl: '/products/Software_Halo._SS400_QL85_.jpg',
    url: '/software',
    category: 'electronics',
    subCategory: "software_electronics"
  },
  {
    id: '25',
    name: 'Components',
    imageUrl: '/products/components._SS400_QL85_.jpg',
    url: '/components',
    category: 'electronics',
    subCategory: "components_electronics"
  },
  {
    id: '26',
    name: 'Networking',
    imageUrl: '/products/networking._SS400_QL85_.jpg',
    url: '/networking',
    category: 'electronics',
    subCategory: "networking_electronics"
  }
];

export const slidesElectronicsFashion: BannerItemContent[] = [
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
    imageUrl: '/products/L_1.jpg',
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  {
    id: 'B0FFTLRYRV',
    name: 'Deal 2',
    imageUrl: '/products/L_2.jpg',
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  {
    id: 'B0GNMG31LQ',
    name: 'Deal 3',
    imageUrl: '/products/L_3.jpg',
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  {
    id: 'B0GWQGM5FJ',
    name: 'Deal 4',
    imageUrl: '/products/L_4.jpg',
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  {
    id: 'B0DSFQZTVW',
    name: 'Deal 5',
    imageUrl: '/products/L_5.jpg',
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  {
    id: 'B0GTZHLMG3',
    name: 'Deal 6',
    imageUrl: '/products/L_6.jpg',
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  {
    id: 'B0G495PMV8',
    name: 'Deal 7',
    imageUrl: '/products/L_7.jpg',
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  {
    id: 'B0GYRK1RZC',
    name: 'Deal 8',
    imageUrl: '/products/L_8.jpg',
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  {
    id: 'B0GX4W73SM',
    name: 'Deal 9',
    imageUrl: '/products/L_9.jpg',
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  {
    id: 'B0G8HBRT27',
    name: 'Deal 10',
    imageUrl: '/products/L_10.jpg',
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  {
    id: 'B0GSVTDN5G',
    name: 'Deal 11',
    imageUrl: '/products/L_11.jpg',
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  {
    id: 'B0GMQP579H',
    name: 'Deal 12',
    imageUrl: '/products/L_12.jpg',
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  {
    id: 'B0G2BHDDB8',
    name: 'Deal 13',
    imageUrl: '/products/L_13.jpg',
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  {
    id: 'B0DSHWKNZG',
    name: 'Deal 14',
    imageUrl: '/products/L_14.jpg',
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  {
    id: 'B0GRHZDJBJ',
    name: 'Deal 15',
    imageUrl: '/products/L_15.jpg',
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  {
    id: 'B0GXJYZ4X8',
    name: 'Deal 16',
    imageUrl: '/products/L_16.jpg',
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  {
    id: 'B0F8P844W2',
    name: 'Deal 17',
    imageUrl: '/products/L_17.jpg',
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  {
    id: 'B0BJDJY8LY',
    name: 'Deal 18',
    imageUrl: '/products/L_18.jpg',
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  {
    id: 'B0F8P4Y7VF',
    name: 'Deal 19',
    imageUrl: '/products/L_19.jpg',
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  {
    id: 'B0FMRTWFMN',
    name: 'Deal 20',
    imageUrl: '/products/L_20.jpg',
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  {
    id: 'B0H3PV7418',
    name: 'Deal 21',
    imageUrl: '/products/L_21.jpg',
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  {
    id: 'B0GWHGS8P5',
    name: 'Deal 22',
    imageUrl: '/products/L_22.jpg',
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  {
    id: 'B0F9X5DSBS',
    name: 'Deal 23',
    imageUrl: '/products/L_23.jpg',
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  {
    id: 'B0FDKS93JV',
    name: 'Deal 24',
    imageUrl: '/products/L_24.jpg',
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  {
    id: 'B0H4QMDD6J',
    name: 'Deal 25',
    imageUrl: '/products/L_25.jpg',
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  {
    id: 'B0GTZKGNM6',
    name: 'Deal 26',
    imageUrl: '/products/L_26.jpg',
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  {
    id: 'B0GX4W73SM',
    name: 'Deal 27',
    imageUrl: '/products/L_27.jpg',
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  {
    id: 'B0GVRZD89W',
    name: 'Deal 28',
    imageUrl: '/products/L_28.jpg',
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  {
    id: 'B0GVNJ8KPB',
    name: 'Deal 29',
    imageUrl: '/products/L_29.jpg',
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  {
    id: 'B0G46HR61G',
    name: 'Deal 30',
    imageUrl: '/products/L_30.jpg',
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  {
    id: 'B0D49W5KZP',
    name: 'Deal 31',
    imageUrl: '/products/L_31.jpg',
    url: '/',
    category: 'electronics',
    subCategory: 'deals',
    subSubCategory: 'top-deals'
  },
  {
    id: 'B0G5NG4FFW',
    name: 'Deal 32',
    imageUrl: '/products/L_32.jpg',
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
    imageUrl: '/products/T1.jpg',
    url: '/',
    category: 'electronics',
    subCategory: 'tablets',
    subSubCategory: 'top-deals'
  },
  {
    id: 'B0FNWNZZ1B',
    name: 'Tablet Deal 2',
    imageUrl: '/products/T2.jpg',
    url: '/',
    category: 'electronics',
    subCategory: 'tablets',
    subSubCategory: 'top-deals'
  },
  {
    id: 'B0GPVX566R',
    name: 'Tablet Deal 3',
    imageUrl: '/products/T3.jpg',
    url: '/',
    category: 'electronics',
    subCategory: 'tablets',
    subSubCategory: 'top-deals'
  },
  {
    id: 'B0GDPWLJMM',
    name: 'Tablet Deal 4',
    imageUrl: '/products/T4.jpg',
    url: '/',
    category: 'electronics',
    subCategory: 'tablets',
    subSubCategory: 'top-deals'
  },
  {
    id: 'B0GWHYQW77',
    name: 'Tablet Deal 5',
    imageUrl: '/products/T5.jpg',
    url: '/',
    category: 'electronics',
    subCategory: 'tablets',
    subSubCategory: 'top-deals'
  },
  {
    id: 'B0FBRS76BR',
    name: 'Tablet Deal 6',
    imageUrl: '/products/T6.jpg',
    url: '/',
    category: 'electronics',
    subCategory: 'tablets',
    subSubCategory: 'top-deals'
  },
  {
    id: 'B0G1C13SB3',
    name: 'Tablet Deal 7',
    imageUrl: '/products/T7.jpg',
    url: '/',
    category: 'electronics',
    subCategory: 'tablets',
    subSubCategory: 'top-deals'
  },
  {
    id: 'B0D7N23QKD',
    name: 'Tablet Deal 8',
    imageUrl: '/products/T8.jpg',
    url: '/',
    category: 'electronics',
    subCategory: 'tablets',
    subSubCategory: 'top-deals'
  },
  {
    id: 'B0G7F4FJSC',
    name: 'Tablet Deal 9',
    imageUrl: '/products/T9.jpg',
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
    category: "home_furniture",
    subCategory: "mattresses_home_furniture"
  },
  {
    id: '2',
    name: "Office chairs",
    imageUrl: "/products/a275e52dd5391137.jpg",
    url: '/',
    category: "home_furniture",
    subCategory: "office_chairs_home_furniture"
  },
  {
    id: '3',
    name: "Beds",
    imageUrl: "/products/619a90cb3079dd36.jpg",
    url: '/',
    category: "home_furniture",
    subCategory: "beds_home_furniture"
  },
  {
    id: '4',
    name: "Wardrobes",
    imageUrl: "/products/ea4ca063f2e858e3.jpg",
    url: '/',
    category: "home_furniture",
    subCategory: "wardrobes_home_furniture"
  },
  {
    id: '5',
    name: "Office tables",
    imageUrl: "/products/a55b07b0721bb404.jpg",
    url: '/',
    category: "home_furniture",
    subCategory: "office_tables_home_furniture"
  },
  {
    id: '6',
    name: "Recliners",
    imageUrl: "/products/8ad710342f6f7a43.jpg",
    url: '/',
    category: "home_furniture",
    subCategory: "recliners_home_furniture"
  },
  {
    id: '7',
    name: "Hammock",
    imageUrl: "/products/02132b72c4ccf6f9.jpg",
    url: '/',
    category: "home_furniture",
    subCategory: "hammock_home_furniture"
  },
  {
    id: '8',
    name: "Collapsibles",
    imageUrl: "/products/e23b5aec2a9e1c80.jpg",
    url: '/',
    category: "home_furniture",
    subCategory: "collapsibles_home_furniture"
  },
  {
    id: '9',
    name: "Bean bags",
    imageUrl: "/products/66769a6c1ba60981.jpg",
    url: '/',
    category: "home_furniture",
    subCategory: "bean_bags_home_furniture"
  },
  {
    id: '10',
    name: "Book shelvs",
    imageUrl: "/products/1f4e96262c476aa8.jpg",
    url: '/',
    category: "home_furniture",
    subCategory: "book_shelvs_home_furniture"
  },
  {
    id: '11',
    name: "Kids' furniture",
    imageUrl: "/products/e41a32a2a0fb6cb3.jpg",
    url: '/',
    category: "home_furniture",
    subCategory: "kids_furniture_home_furniture"
  },
  {
    id: '12',
    name: "Sofas",
    imageUrl: "/products/55f6c3ea8cf26b12.jpg",
    url: '/',
    category: "home_furniture",
    subCategory: "sofas_home_furniture"
  },
  {
    id: '13',
    name: "Dining sets",
    imageUrl: "/products/c5c2a0ca01c2814e.jpg",
    url: '/',
    category: "home_furniture",
    subCategory: "dining_sets_home_furniture"
  },
  {
    id: '14',
    name: "Coffee tables",
    imageUrl: "/products/616b670374b61ceb.jpg",
    url: '/',
    category: "home_furniture",
    subCategory: "coffee_tables_home_furniture"
  },
  {
    id: '15',
    name: "Dressing tables",
    imageUrl: "/products/ef014c0f5062c9e1.jpg",
    url: '/',
    category: "home_furniture",
    subCategory: "dressing_tables_home_furniture"
  },
  {
    id: '16',
    name: "Sofa beds",
    imageUrl: "/products/a8e5319319cae362.jpg",
    url: '/',
    category: "home_furniture",
    subCategory: "sofa_beds_home_furniture"
  },
  {
    id: '17',
    name: "TV units",
    imageUrl: "/products/0c3b3b685386636d.jpg",
    url: '/',
    category: "home_furniture",
    subCategory: "tv_units_home_furniture"
  },
  {
    id: '18',
    name: "PLT",
    imageUrl: "/products/4e2d959065ba18aa.jpg",
    url: '/',
    category: "home_furniture",
    subCategory: "plt_home_furniture"
  },
  {
    id: '19',
    name: "Shoe racks",
    imageUrl: "/products/268487a337a39374.jpg",
    url: '/',
    category: "home_furniture",
    subCategory: "shoe_racks_home_furniture"
  },
  {
    id: '20',
    name: "Home temples",
    imageUrl: "/products/1f8f90501c659669.jpg",
    url: '/',
    category: "home_furniture",
    subCategory: "home_temples_home_furniture"
  },
  {
    id: '21',
    name: "Inflatable sofas",
    imageUrl: "/products/4bd722c8ddfa9ace.jpg",
    url: '/',
    category: "home_furniture",
    subCategory: "inflatable_sofas_home_furniture"
  },
  {
    id: '22',
    name: "Covers",
    imageUrl: "/products/bd844edb9fa863a8.jpg",
    url: '/',
    category: "home_furniture",
    subCategory: "covers_home_furniture"
  },
  {
    id: '23',
    name: "Dining Tables",
    imageUrl: "/products/dining-table.jpg",
    url: '/',
    category: "home_furniture",
    subCategory: "dining_tables_home_furniture"
  },
  {
    id: '24',
    name: "Study Tables",
    imageUrl: "/products/study-table.jpg",
    url: '/',
    category: "home_furniture",
    subCategory: "study_tables_home_furniture"
  },
  {
    id: '25',
    name: "Bookshelves",
    imageUrl: "/products/bookshelf.jpg",
    url: '/',
    category: "home_furniture",
    subCategory: "bookshelves_home_furniture"
  },
  {
    id: '26',
    name: "Storage Units",
    imageUrl: "/products/storage-unit.jpg",
    url: '/',
    category: "home_furniture",
    subCategory: "storage_units_home_furniture"
  },
  {
    id: '27',
    name: "Wall Shelves",
    imageUrl: "/products/wall-shelf.jpg",
    url: '/',
    category: "home_furniture",
    subCategory: "wall_shelves_home_furniture"
  },
  {
    id: '28',
    name: "Shoe Racks",
    imageUrl: "/products/shoe-rack.jpg",
    url: '/',
    category: "home_furniture",
    subCategory: "shoe_racks_home_furniture"
  },
  {
    id: '29',
    name: "Sofas",
    imageUrl: "/products/329a854dd8c44fde.jpg",
    url: '/',
    category: "home_furniture",
    subCategory: "sofas_home_furniture"
  },
  {
    id: '30',
    name: "Mattresses",
    imageUrl: "/products/57d04728e66ae68f.jpg",
    url: '/',
    category: "home_furniture",
    subCategory: "mattresses_home_furniture"
  },
  {
    id: '31',
    name: "Wardrobes",
    imageUrl: "/products/5da0aa15c8500bdf.jpg",
    url: '/',
    category: "home_furniture",
    subCategory: "wardrobes_home_furniture"
  },
  {
    id: '32',
    name: "Blankets",
    imageUrl: "/products/9a4b3856cceca99b.jpg",
    url: '/',
    category: "home_furniture",
    subCategory: "blankets_home_furniture"
  },
  {
    id: '33',
    name: "Bedsheets",
    imageUrl: "/products/12960b239d8fae6a.jpg",
    url: '/',
    category: "home_furniture",
    subCategory: "bedsheets_home_furniture"
  },
  {
    id: '34',
    name: "Furnishing",
    imageUrl: "/products/f7a66d4708b4055d.jpg",
    url: '/',
    category: "home_furniture",
    subCategory: "furnishing_home_furniture"
  },
  {
    id: '35',
    name: "Mats & rugs",
    imageUrl: "/products/971d07d5c6063aed.jpg",
    url: '/',
    category: "home_furniture",
    subCategory: "mats_rugs_home_furniture"
  },
  {
    id: '36',
    name: "Mosquito nets",
    imageUrl: "/products/458751bc65631f19.jpg",
    url: '/',
    category: "home_furniture",
    subCategory: "mosquito_nets_home_furniture"
  },
  {
    id: '37',
    name: "View all",
    imageUrl: "/products/cb76a0a6fc5d9f20.jpg",
    url: '/',
    category: "home_furniture",
    subCategory: "view_all_home_furniture"
  }
];

export const slideshomeFurniture: BannerItemContent[] = [
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
    imageUrl: '/products/Green_Soul_1.jpg',
    url: '/stores/GreenSoul',
    category: 'Furniture',
    subCategory: 'Chairs',
  },
  {
    id: 'B0FN9WN6XE',
    name: 'Nilkamal',
    imageUrl: '/products/Nilkamal_2.jpg',
    url: '/stores/Nilkamal',
    category: 'Furniture',
    subCategory: 'Home',
  },
  {
    id: 'B0FN9WN6XF',
    name: 'Sleepwell',
    imageUrl: '/products/Sleepwell_3.jpg',
    url: '/stores/Sleepwell',
    category: 'Mattress',
    subCategory: 'Bedding',
  },
  {
    id: 'B0FN9WN6XG',
    name: 'The Sleep Company',
    imageUrl: '/products/The_Sleep_Company_4.jpg',
    url: '/stores/TheSleepCompany',
    category: 'Mattress',
    subCategory: 'Smart Mattress',
  },
  {
    id: 'B0FN9WN6XH',
    name: 'Interio by Goorej',
    imageUrl: '/products/Interio_by_Goorej_5.jpg',
    url: '/stores/Interio',
    category: 'Furniture',
    subCategory: 'Office',
  },
  {
    id: 'B0FN9WN6XI',
    name: 'Drogo',
    imageUrl: '/products/Drogo_6.jpg',
    url: '/stores/DROGO',
    category: 'Furniture',
    subCategory: 'Home Decor',
  },
  {
    id: 'B0FN9WN6XH',
    name: 'Interio by Goorej',
    imageUrl: '/products/Interio_by_Goorej_5.jpg',
    url: '/stores/Interio',
    category: 'Furniture',
    subCategory: 'Office',
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

export const slidesHomeDecor: BannerItemContent[] = [
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
    category: "home_decor",
    subCategory: "wall_art_home_decor"
  },
  {
    id: '2',
    name: "Throw Pillows",
    imageUrl: "/products/7e1f07bc4e00b85421.jpg",
    url: "/category/throw-pillows",
    category: "home_decor",
    subCategory: "throw_pillows_home_decor"
  },
  {
    id: '3',
    name: "Area Rugs",
    imageUrl: "/products/8f2d18cd5f11c9653.jpg",
    url: "/category/area-rugs",
    category: "home_decor",
    subCategory: "area_rugs_home_decor"
  },
  {
    id: '4',
    name: "Wall Mirrors",
    imageUrl: "/products/9g3e29de6012d07641.jpg",
    url: "/category/wall-mirrors",
    category: "home_decor",
    subCategory: "wall_mirrors_home_decor"
  },
  {
    id: '5',
    name: "Vases & Planters",
    imageUrl: "/products/0h4f30ef7113e1875.jpg",
    url: "/category/vases-planters",
    category: "home_decor",
    subCategory: "vases_planters_home_decor"
  },
  {
    id: '6',
    name: "Candles & Holders",
    imageUrl: "/products/1i5g41fg8224f2986.jpg",
    url: "/category/candles-holders",
    category: "home_decor",
    subCategory: "candles_holders_home_decor"
  },
  {
    id: '7',
    name: "Wall Clocks",
    imageUrl: "/products/2j6h52gh9335g309712.jpg",
    url: "/category/wall-clocks",
    category: "home_decor",
    subCategory: "wall_clocks_home_decor"
  },
  {
    id: '8',
    name: "Photo Frames",
    imageUrl: "/products/3k7i63hi0446h41081.jpg",
    url: "/category/photo-frames",
    category: "home_decor",
    subCategory: "photo_frames_home_decor"
  },
  {
    id: '9',
    name: "Decorative Bowls",
    imageUrl: "/products/4l8j74ij1557i52191.jpg",
    url: "/category/decorative-bowls",
    category: "home_decor",
    subCategory: "decorative_bowls_home_decor"
  },
  {
    id: '10',
    name: "Table Lamps",
    imageUrl: "/products/5m9k85jk2668j63201.jpg",
    url: "/category/table-lamps",
    category: "home_decor",
    subCategory: "table_lamps_home_decor"
  },
  {
    id: '11',
    name: "Artificial Plants",
    imageUrl: "/products/6n0l96kl3779k7431.jpg",
    url: "/category/artificial-plants",
    category: "home_decor",
    subCategory: "artificial_plants_home_decor"
  },
  {
    id: '12',
    name: "Wall Shelves",
    imageUrl: "/products/7o1m07lm4880l8542.jpg",
    url: "/category/wall-shelves",
    category: "home_decor",
    subCategory: "wall_shelves_home_decor"
  },
  {
    id: '13',
    name: "Decorative Trays",
    imageUrl: "/products/8p2n18mn5991m9653.jpg",
    url: "/category/decorative-trays",
    category: "home_decor",
    subCategory: "decorative_trays_home_decor"
  },
  {
    id: '14',
    name: "Rugs & Mats",
    imageUrl: "/products/9q3o29no6002n0764.jpg",
    url: "/category/rugs-mats",
    category: "home_decor",
    subCategory: "rugs_mats_home_decor"
  },
  {
    id: '15',
    name: "Decorative Accents",
    imageUrl: "/products/0r4p30op7113o1875.jpg",
    url: "/category/decorative-accents",
    category: "home_decor",
    subCategory: "decorative_accents_home_decor"
  },
];

export const topDealshomeDecorCategories: CategoryItem[] = [
  {
    id: 'nestasia',
    name: 'Nestasia',
    imageUrl: '/products/brand-in-focus-9C-400x4001._SS400_QL85_.jpg',
    url: '/',
    category: 'home_decor',
    subCategory: 'brands',
  },
  {
    id: 'ajanta',
    name: 'Ajanta',
    imageUrl: '/products/brand-in-focus-9C-400x4002._SS400_QL85_.jpg',
    url: '/',
    category: 'home_decor',
    subCategory: 'brands',
  },
  {
    id: 'tied-ribbons',
    name: 'Tied Ribbons',
    imageUrl: '/products/brand-in-focus-9C-400x4003._SS400_QL85_.jpg',
    url: '/',
    category: 'home_decor',
    subCategory: 'brands',
  },
  {
    id: 'solimo',
    name: 'Solimo',
    imageUrl: '/products/brand-in-focus-9C-400x4004._SS400_QL85_.jpg',
    url: '/',
    category: 'home_decor',
    subCategory: 'brands',
  },
  {
    id: 'collectible-india',
    name: 'Collectible India',
    imageUrl: '/products/brand-in-focus-9C-400x4005._SS400_QL85_.jpg',
    url: '/',
    category: 'home_decor',
    subCategory: 'brands',
  },
  {
    id: 'seiko',
    name: 'Seiko',
    imageUrl: '/products/titandecor._SS400_QL85_FMpng_.png',
    url: '/',
    category: 'home_decor',
    subCategory: 'brands',
  },
  {
    id: 'artstreet',
    name: 'ArtStreet',
    imageUrl: '/products/brand-in-focus-9C-400x4007._SS400_QL85_.jpg',
    url: '/',
    category: 'home_decor',
    subCategory: 'brands',
  },
  {
    id: 'satyamkraft',
    name: 'SatyamKraft',
    imageUrl: '/products/brand-in-focus-9C-400x4008._SS400_QL85_.jpg',
    url: '/',
    category: 'home_decor',
    subCategory: 'brands',
  },
  {
    id: 'shubhkart',
    name: 'Shubhkart',
    imageUrl: '/products/brand-in-focus-9C-400x4009._SS400_QL85_.jpg',
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

export const sportsFitnessCarouselCategories = [
  {
    id: '1',
    name: "Cycling",
    imageUrl: "/products/Halo_Tiles_Teaser_Cycle._SS400_QL85_FMpng_12.png",
    url: "/",
    category: "sports_fitness",
    subCategory: "cycling_sports_fitness"
  },
  {
    id: '2',
    name: "Strength training",
    imageUrl: "/products/Halo_Tiles_Teaser_Strength_Training._SS400_QL85_FMpng_12.png",
    url: "/",
    category: "sports_fitness",
    subCategory: "strength_training_sports_fitness"
  },
  {
    id: '3',
    name: "Cardio",
    imageUrl: "/products/Halo_Tiles_Teaser_Cardio._SS400_QL85_FMpng_12.png",
    url: "/",
    category: "sports_fitness",
    subCategory: "cardio_sports_fitness"
  },
  {
    id: '4',
    name: "Football",
    imageUrl: "/products/Halo_Tiles_Teaser_Football._SS400_QL85_FMpng_2.png",
    url: "/",
    category: "sports_fitness",
    subCategory: "football_sports_fitness"
  },
  {
    id: '5',
    name: "Cricket",
    imageUrl: "/products/Halo_Tiles_Main_Store_Cricket._SS400_QL85_FMpng_2.png",
    url: "/",
    category: "sports_fitness",
    subCategory: "cricket_sports_fitness"
  },
  {
    id: '6',
    name: "Junior sports",
    imageUrl: "/products/Halo_Tiles_Teaser_Junior_Sports._SS400_QL85_FMpng_2.png",
    url: "/",
    category: "sports_fitness",
    subCategory: "junior_sports_sports_fitness"
  },
  {
    id: '7',
    name: "Badminton",
    imageUrl: "/products/Halo_Tiles_Teaser_Badminton._SS400_QL85_FMpng_2.png",
    url: "/",
    category: "sports_fitness",
    subCategory: "badminton_sports_fitness"
  },
  {
    id: '8',
    name: "Fitness accessories",
    imageUrl: "/products/Halo_Tiles_Teaser_Fitness_Accessories._SS400_QL85_FMpng_2.png",
    url: "/",
    category: "sports_fitness",
    subCategory: "fitness_accessories_sports_fitness"
  },
  {
    id: '9',
    name: "Pickleball",
    imageUrl: "/products/Halo_Tiles_Teaser_Pickle_Ball._SS400_QL85_FMpng_2.png",
    url: "/",
    category: "sports_fitness",
    subCategory: "pickleball_sports_fitness"
  },
  {
    id: '10',
    name: "Yoga",
    imageUrl: "/products/Halo_Tiles_Teaser_Yoga._SS400_QL85_FMpng_2.png",
    url: "/",
    category: "sports_fitness",
    subCategory: "yoga_sports_fitness"
  },
  {
    id: '11',
    name: "Skating",
    imageUrl: "/products/Halo_Tiles_Teaser_Skates._SS400_QL85_FMpng_2.png",
    url: "/",
    category: "sports_fitness",
    subCategory: "skating_sports_fitness"
  },
  {
    id: '12',
    name: "Swimming",
    imageUrl: "/products/Halo_Tiles_Teaser_Swimming._SS400_QL85_FMpng_2.png",
    url: "/",
    category: "sports_fitness",
    subCategory: "swimming_sports_fitness"
  },
  {
    id: '13',
    name: "Tennis",
    imageUrl: "/products/Halo_Tiles_Teaser_tennis._SS400_QL85_FMpng_2.png",
    url: "/",
    category: "sports_fitness",
    subCategory: "tennis_sports_fitness"
  },
  {
    id: '14',
    name: "Camping & Outdoors",
    imageUrl: "/products/Halo_Tiles_Teaser_camping_outdoors._SS400_QL85_FMpng_2.png",
    url: "/",
    category: "sports_fitness",
    subCategory: "camping_outdoors_sports_fitness"
  }
];

export const slidesShoppingSportsFitness: HeroSlide[] = [
  {
    id: '1',
    title: '',
    subtitle: '',
    description: '',
    imageUrl: '/products/Main_Header_Starting_99_PC._CB755068594_.gif',
    url: '/',
    ctaText: 'Shop Now',
    discount: '',
    alt: 'Beauty deals banner'
  }
];

export const topTrendingPicksSportsFitnessCategories: CategoryItem[] = [
  {
    id: '1',
    name: '',
    imageUrl: '/products/Most_Searched_Card_Main_Store_Pull_Up_Bar-1._SS800_QL85_FMpng_.png',
    url: '/',
    category: 'sports_fitness',
    subCategory: 'top_trending_picks',
  },
  {
    id: '2',
    name: '',
    imageUrl: '/products/Most_Searched_Card_Main_Store_Walking_pad._SS800_QL85_FMpng_.png',
    url: '/',
    category: 'sports_fitness',
    subCategory: 'top_trending_picks',
  },
  {
    id: '3',
    name: '',
    imageUrl: '/products/Most_Searched_Card_Main_Store_Football._SS800_QL85_FMpng_.png',
    url: '/',
    category: 'sports_fitness',
    subCategory: 'top_trending_picks',
  },
  {
    id: '4',
    name: '',
    imageUrl: '/products/Most_Searched_Card_Main_Store_Yoga_mat._SS800_QL85_FMpng_.png',
    url: '/',
    category: 'sports_fitness',
    subCategory: 'top_trending_picks',
  },
  {
    id: '5',
    name: '',
    imageUrl: '/products/Most_Searched_Card_Main_Store_Resistance_bands._SS800_QL85_FMpng_.png',
    url: '/',
    category: 'sports_fitness',
    subCategory: 'top_trending_picks',
  },
  {
    id: '6',
    name: '',
    imageUrl: '/products/Most_Searched_Card_Main_Store_Dumbbells._SS800_QL85_FMpng_.png',
    url: '/',
    category: 'sports_fitness',
    subCategory: 'top_trending_picks',
  },
  {
    id: '7',
    name: '',
    imageUrl: '/products/Most_Searched_Card_Main_Store_Cycles._SS800_QL85_FMpng_.png',
    url: '/',
    category: 'sports_fitness',
    subCategory: 'top_trending_picks',
  },
  {
    id: '8',
    name: '',
    imageUrl: '/products/Most_Searched_Card_Main_Store_Treadmills._SS800_QL85_FMpng_.png',
    url: '/',
    category: 'sports_fitness',
    subCategory: 'top_trending_picks',
  },
  {
    id: '9',
    name: '',
    imageUrl: '/products/Most_Searched_Card_Main_Store_Pull_Up_Bar._SS800_QL85_FMpng_.png',
    url: '/',
    category: 'sports_fitness',
    subCategory: 'top_trending_picks',
  },
  {
    id: '10',
    name: '',
    imageUrl: '/products/Most_Searched_Card_Main_Store_Badminton_racquet._SS800_QL85_FMpng_.png',
    url: '/',
    category: 'sports_fitness',
    subCategory: 'top_trending_picks',
  },
  {
    id: '11',
    name: '',
    imageUrl: '/products/Most_Searched_Card_Main_Store_Cricket_bat._SS800_QL85_FMpng_.png',
    url: '/',
    category: 'sports_fitness',
    subCategory: 'top_trending_picks',
  },
];

export const greatDealsForYouSportsFitness: BrandItem[] = [
  {
    id: '1',
    name: 'Powermax 4HP Treadmill',
    logo: '/products/Powermax_4HP_treadmill_Great_Deals_for_You_Main_Store._CB755062263_.png',
    discount: '',
    url: '/dp/B0FHHG2YW4',
    alt: 'Shop now',
  },
  {
    id: '2',
    name: 'Lifelong 3HP Walking Pad',
    logo: '/products/Lifelong_3HP_walking_pad_Great_Deals_for_You_Main_Store._CB755062263_.png',
    discount: '',
    url: '/dp/B0FD817WFP',
    alt: 'Shop now',
  },
  {
    id: '3',
    name: 'Leader Gladiator Geared Cycle',
    logo: '/products/Leader_gladiator_geared_cycle_Great_Deals_for_You_Main_Store._CB755062263_.png',
    discount: '',
    url: '/dp/B0BYS8M635',
    alt: 'Shop now',
  },
  {
    id: '4',
    name: 'Yonex Graphite Badminton Racquet',
    logo: '/products/Yonex_graphite_badminton_racquet_Great_Deals_for_You_Main_Store._CB755062263_.png',
    discount: '',
    url: '/dp/B08WQ2THFG',
    alt: 'Shop now',
  },
  {
    id: '5',
    name: 'Adidas League Football',
    logo: '/products/Adidas_league_football_Great_Deals_for_You_Main_Store._CB755062263_.png',
    discount: '',
    url: '/dp/B0DLJD5K46',
    alt: 'Shop now',
  },
  {
    id: '6',
    name: 'SG Kashmir Willow Cricket Bat',
    logo: '/products/SG_Kashmir_willow_cricket_bat_Great_Deals_for_You_Main_Store._CB755062263_.png',
    discount: '',
    url: '/dp/B081VFDN72',
    alt: 'Shop now',
  },
  {
    id: '7',
    name: 'Kidsmate Adjustable Kick Scooter',
    logo: '/products/Kidsmate_adjustable_kick_scooter_Great_Deals_for_You_Main_Store._CB755062263_.png',
    discount: '',
    url: '/dp/B0D4DZ7WL2',
    alt: 'Shop now',
  },
  {
    id: '8',
    name: 'Slovic Pull Up Bar',
    logo: '/products/Slovic_pull_up_bar_Great_Deals_for_You_Main_Store._CB755062263_.png',
    discount: '',
    url: '/dp/B0B6NSDR2H',
    alt: 'Shop now',
  },
  {
    id: '9',
    name: 'Sparnod 2-in-1 Walking Pad',
    logo: '/products/Sparnod_2_in_1_walking_pad_Great_Deals_for_You_Main_Store._CB755062263_.png',
    discount: '',
    url: '/dp/B0FHW238R2',
    alt: 'Shop now',
  },
  {
    id: '10',
    name: 'Boldfit Resistance Bands Set',
    logo: '/products/Boldfit_resistance_bands_set_Great_Deals_for_You_Main_Store1._CB755060971_.png',
    discount: '',
    url: '/dp/B08C7S9RNY',
    alt: 'Shop now',
  },
  {
    id: '11',
    name: 'R for Rabbit Tricycle',
    logo: '/products/R_for_Rabbit_tricycle_Great_Deals_for_You_Main_Store._CB755062263_.png',
    discount: '',
    url: '/dp/B0GD7TDTN1',
    alt: 'Shop now',
  },
  {
    id: '12',
    name: 'Boldfit Anti-Slip Yoga Mat',
    logo: '/products/Boldfit_anti-slip_yoga_mat_Great_Deals_for_You_Main_Store._CB755062263_.png',
    discount: '',
    url: '/dp/B07MNL598L',
    alt: 'Shop now',
  },
];

export const ScrollItemSportsFitness: ScrollItem[] = [
  {
    id: '1',
    title: 'Badminton',
    subtitle: '3★ & above • 40% or more off',
    imageUrl: '/products/68ea70a5301bc2ec.jpg',
    link: '/'
  },
  {
    id: '2',
    title: 'Fishing',
    subtitle: '3★ & above • 50% or more off',
    imageUrl: '/products/edc5707ccbda23cc.jpg',
    link: '/'
  },
  {
    id: '3',
    title: 'Cricket',
    subtitle: '3★ & above • 50% or more off',
    imageUrl: '/products/4991372908a44ecc.jpg',
    link: '/'
  },
  {
    id: '4',
    title: 'Skating',
    subtitle: '3★ & above • 60% or more off',
    imageUrl: '/products/60c8f865346a782c.jpg',
    link: '/'
  },
  {
    id: '5',
    title: 'Football',
    subtitle: '3★ & above • 40% or more off',
    imageUrl: '/products/d011051cbf50adbb.jpg',
    link: '/'
  },
  {
    id: '6',
    title: 'Swimming',
    subtitle: '3★ & above',
    imageUrl: '/products/74cd3a560ad9ee6d.jpg',
    link: '/'
  },
  {
    id: '7',
    title: 'Fitness Accessories',
    subtitle: '3★ & above',
    imageUrl: '/products/cce350901f3c23c9.jpg',
    link: '/'
  }
];

export const babyToysCarouselCategories = [
  {
    id: '1',
    name: "Baby diapers",
    imageUrl: "/products/fa29c57902ffb67b.jpg",
    url: "/",
    category: "baby_toys",
    subCategory: "baby_diapers_baby_toys"
  },
  {
    id: '2',
    name: "Wipes",
    imageUrl: "/products/fa29c57902ffb67b1.jpg",
    url: "/",
    category: "baby_toys",
    subCategory: "wipes_baby_toys"
  },
  {
    id: '3',
    name: "Skin & Hair care",
    imageUrl: "/products/fa29c57902ffb67b12.jpg",
    url: "/",
    category: "baby_toys",
    subCategory: "skin_hair_care_baby_toys"
  },
  {
    id: '4',
    name: "Baby travel",
    imageUrl: "/products/fa29c57902ffb67b123.jpg",
    url: "/",
    category: "baby_toys",
    subCategory: "baby_travel_baby_toys"
  },
  {
    id: '5',
    name: "Bedding",
    imageUrl: "/products/fa29c57902ffb67b321.jpg",
    url: "/",
    category: "baby_toys",
    subCategory: "bedding_baby_toys"
  },
  {
    id: '6',
    name: "Gifting combos",
    imageUrl: "/products/fa29c57902ffb67b21.jpg",
    url: "/",
    category: "baby_toys",
    subCategory: "gifting_combos_baby_toys"
  },
  {
    id: '7',
    name: "Premium toys",
    imageUrl: "/products/fa29c57902ffb67b11.jpg",
    url: "/",
    category: "baby_toys",
    subCategory: "premium_toys_baby_toys"
  },
  {
    id: '8',
    name: "STEM toys",
    imageUrl: "/products/fa29c57902ffb67b23.jpg",
    url: "/",
    category: "baby_toys",
    subCategory: "stem_toys_baby_toys"
  },
  {
    id: '9',
    name: "Stationery",
    imageUrl: "/products/fa29c57902ffb67b212.jpg",
    url: "/",
    category: "baby_toys",
    subCategory: "stationery_baby_toys"
  },
  {
    id: '10',
    name: "Indoor toys",
    imageUrl: "/products/fa29c57902ffb67b231.jpg",
    url: "/",
    category: "baby_toys",
    subCategory: "indoor_toys_baby_toys"
  },
  {
    id: '11',
    name: "Toys & more",
    imageUrl: "/products/fa29c57902ffb67b132.jpg",
    url: "/",
    category: "baby_toys",
    subCategory: "toys_more_baby_toys"
  },
  {
    id: '12',
    name: "Pet toys",
    imageUrl: "/products/fa29c57902ffb67b213.jpg",
    url: "/",
    category: "baby_toys",
    subCategory: "pet_toys_baby_toys"
  }
];

export const savingsSpecialBabyToysItems = [
  {
    id: '1',
    title: "Baby Diapers",
    subtitle: "Up to 50% off",
    imageUrl: "/products/107c8dce15d7f832.jpg",
    link: "/"
  },
  {
    id: '2',
    title: "Electric Ride-ons",
    subtitle: "50% or more off",
    imageUrl: "/products/50fec996a198bae9.jpg",
    link: "/"
  },
  {
    id: '3',
    title: "Skin & Hair Care",
    subtitle: "Under ₹499",
    imageUrl: "/products/d760afc38cd47d5b.jpg",
    link: "/"
  },
  {
    id: '4',
    title: "Rakhi Collection",
    subtitle: "Special offers",
    imageUrl: "/products/b9e0d5f1b8e2b723.png",
    link: "/"
  },
  {
    id: '5',
    title: "Baby Wipes",
    subtitle: "Under ₹249",
    imageUrl: "/products/1a6de77078801c5b.jpg",
    link: "/"
  },
  {
    id: '6',
    title: "Art & Craft Kits",
    subtitle: "Creative fun",
    imageUrl: "/products/1e526c9dc05f185f.jpg",
    link: "/"
  },
  {
    id: '7',
    title: "Mosquito Nets",
    subtitle: "F-Assured | 4★ & above",
    imageUrl: "/products/0d02ea8e131fb424.jpg",
    link: "/"
  }
];

export const popCultureShopBabyToysItems = [
  {
    id: '1',
    title: "Barbie",
    subtitle: "Stationery & more",
    imageUrl: "/products/24a08a380cfdf22e.jpg",
    link: "/"
  },
  {
    id: '2',
    title: "Harry Potter",
    subtitle: "Toys & stationery",
    imageUrl: "/products/262c02f0944baff8.jpg",
    link: "/"
  },
  {
    id: '3',
    title: "Tom and Jerry",
    subtitle: "Classic collection",
    imageUrl: "/products/3e398521b6ae3ee8.jpg",
    link: "/"
  },
  {
    id: '4',
    title: "Batman",
    subtitle: "Toys & stationery",
    imageUrl: "/products/bb8094d0be2e2988.jpg",
    link: "/"
  },
  {
    id: '5',
    title: "Spiderman",
    subtitle: "Toys collection",
    imageUrl: "/products/e051bee95f8baf14.jpg",
    link: "/"
  }
];
export const latestLaunchesBabyToysItems = [
  {
    id: '1',
    title: "LEGO Deals",
    subtitle: "GOAT 2026 collection",
    imageUrl: "/products/2010a290e1f35074.jpg",
    link: "/"
  },
  {
    id: '2',
    title: "Baby Bedding",
    subtitle: "Comfort essentials",
    imageUrl: "/products/f60206c9065ff555.jpg",
    link: "/"
  },
  {
    id: '3',
    title: "Kids Scooters",
    subtitle: "60% or more off",
    imageUrl: "/products/82686aaba886b170.jpg",
    link: "/"
  },
  {
    id: '4',
    title: "Baby Food",
    subtitle: "Nutrition essentials",
    imageUrl: "/products/82686aaba886b1701.jpg",
    link: "/"
  },
  {
    id: '5',
    title: "Calculators",
    subtitle: "Stationery essentials",
    imageUrl: "/products/389a5c25b8d18ca3.jpg",
    link: "/"
  },
  {
    id: '6',
    title: "Baby Diapers",
    subtitle: "Daily essentials",
    imageUrl: "/products/c8608e85cb0582b0.jpg",
    link: "/"
  },
  {
    id: '7',
    title: "Action Figures",
    subtitle: "Toys collection",
    imageUrl: "/products/83d741b9ec7a1afb.jpg",
    link: "/"
  }
];

export const slidesBabyToys: BannerItemContent[] = [
  {
    id: '1',
    title: '',
    subtitle: '',
    category: '',
    discount: '',
    imgUrl: '/products/1_First_Friend._CB773853331_.png',
    align: 'left'
  },
  {
    id: '2',
    title: '',
    subtitle: '',
    category: '',
    discount: '',
    imgUrl: '/products/2_Building._CB773853331_.png',
    align: 'left'
  },
  {
    id: '3',
    title: '',
    subtitle: '',
    category: '',
    discount: '',
    imgUrl: '/products/3_Soft_toys._CB773853331_.png',
    align: 'left'
  },
  {
    id: '4',
    title: '',
    subtitle: '',
    category: '',
    discount: '',
    imgUrl: '/products/4_Art__craft._CB773853331_.png',
    align: 'left'
  },
  {
    id: '5',
    title: '',
    subtitle: '',
    category: '',
    discount: '',
    imgUrl: '/products/5_Outdoor_PC._CB773853331_.png',
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

export const booksCarouselCategories = [
  {
    id: '1',
    name: "Fiction",
    imageUrl: "/products/fiction.jpg",
    url: "/categories/fiction",
    category: "books",
    subCategory: "fiction_books"
  },
  {
    id: '2',
    name: "Non-Fiction",
    imageUrl: "/products/nonfiction.jpg",
    url: "/categories/non-fiction",
    category: "books",
    subCategory: "non_fiction_books"
  },
  {
    id: '3',
    name: "Science Fiction",
    imageUrl: "/products/scifi.jpg",
    url: "/categories/sci-fi",
    category: "books",
    subCategory: "science_fiction_books"
  },
  {
    id: '4',
    name: "Fantasy",
    imageUrl: "/products/fantasy.jpg",
    url: "/categories/fantasy",
    category: "books",
    subCategory: "fantasy_books"
  },
  {
    id: '5',
    name: "Mystery & Thriller",
    imageUrl: "/products/mystery.jpg",
    url: "/categories/mystery-thriller",
    category: "books",
    subCategory: "mystery_thriller_books"
  },
  {
    id: '6',
    name: "Romance",
    imageUrl: "/products/romance.jpg",
    url: "/categories/romance",
    category: "books",
    subCategory: "romance_books"
  },
  {
    id: '7',
    name: "Biography",
    imageUrl: "/products/biography.jpg",
    url: "/categories/biography",
    category: "books",
    subCategory: "biography_books"
  },
  {
    id: '8',
    name: "History",
    imageUrl: "/products/history.jpg",
    url: "/categories/history",
    category: "books",
    subCategory: "history_books"
  },
  {
    id: '9',
    name: "Self-Help",
    imageUrl: "/products/selfhelp.jpg",
    url: "/categories/self-help",
    category: "books",
    subCategory: "self_help_books"
  },
  {
    id: '10',
    name: "Business & Money",
    imageUrl: "/products/business.jpg",
    url: "/categories/business",
    category: "books",
    subCategory: "business_money_books"
  },
  {
    id: '11',
    name: "Children's Books",
    imageUrl: "/products/childrens.jpg",
    url: "/categories/childrens",
    category: "books",
    subCategory: "childrens_books_books"
  },
  {
    id: '12',
    name: "Young Adult",
    imageUrl: "/products/youngadult.jpg",
    url: "/categories/young-adult",
    category: "books",
    subCategory: "young_adult_books"
  },
  {
    id: '13',
    name: "Science & Technology",
    imageUrl: "/products/science.jpg",
    url: "/categories/science-technology",
    category: "books",
    subCategory: "science_technology_books"
  },
  {
    id: '14',
    name: "Art & Photography",
    imageUrl: "/products/art.jpg",
    url: "/categories/art-photography",
    category: "books",
    subCategory: "art_photography_books"
  },
  {
    id: '15',
    name: "Travel",
    imageUrl: "/products/travel.jpg",
    url: "/categories/travel",
    category: "books",
    subCategory: "travel_books"
  }
];

export const slidesbooks: BannerItemContent[] = [
  {
    id: '1',
    title: 'New Releases',
    subtitle: 'Fresh titles from your favorite authors',
    category: 'New Arrivals',
    discount: '20% off',
    imgUrl: '/products/1_books._CB773853331_1.png',
    align: 'left'
  },
  {
    id: '2',
    title: 'Bestselling Fiction',
    subtitle: 'Discover the most captivating stories of the year',
    category: 'Fiction',
    discount: 'Up to 50% off',
    imgUrl: '/products/2_books._CB773853331_1.png',
    align: 'left'
  },
];

export const bestSellersInPrintBooksItems = [
  {
    id: "1",
    title: "The Covenant of Water",
    price: 599,
    oldPrice: 1299,
    currency: "₹",
    imageUrl: "/products/bestseller1.jpg",
    link: "/books/covenant-of-water"
  },
  {
    id: "2",
    title: "The Heaven & Earth Grocery Store",
    price: 549,
    oldPrice: 1199,
    currency: "₹",
    imageUrl: "/products/bestseller2.jpg",
    link: "/books/heaven-earth-grocery-store"
  },
  {
    id: "3",
    title: "Fourth Wing",
    price: 699,
    oldPrice: 1499,
    currency: "₹",
    imageUrl: "/products/bestseller3.jpg",
    link: "/books/fourth-wing"
  },
  {
    id: "4",
    title: "Iron Flame",
    price: 749,
    oldPrice: 1599,
    currency: "₹",
    imageUrl: "/products/bestseller4.jpg",
    link: "/books/iron-flame"
  },
  {
    id: "5",
    title: "The Women",
    price: 499,
    oldPrice: 1099,
    currency: "₹",
    imageUrl: "/products/bestseller5.jpg",
    link: "/books/the-women"
  },
  {
    id: "6",
    title: "Atomic Habits",
    price: 399,
    oldPrice: 899,
    currency: "₹",
    imageUrl: "/products/bestseller6.jpg",
    link: "/books/atomic-habits"
  },
  {
    id: "7",
    title: "The Silent Patient",
    price: 449,
    oldPrice: 999,
    currency: "₹",
    imageUrl: "/products/bestseller7.jpg",
    link: "/books/silent-patient"
  },
  {
    id: "8",
    title: "Where the Crawdads Sing",
    price: 399,
    oldPrice: 899,
    currency: "₹",
    imageUrl: "/products/bestseller8.jpg",
    link: "/books/where-crawdads-sing"
  },
  {
    id: "9",
    title: "It Ends With Us",
    price: 349,
    oldPrice: 799,
    currency: "₹",
    imageUrl: "/products/bestseller9.jpg",
    link: "/books/it-ends-with-us"
  },
  {
    id: "10",
    title: "The Alchemist",
    price: 299,
    oldPrice: 699,
    currency: "₹",
    imageUrl: "/products/bestseller10.jpg",
    link: "/books/alchemist"
  },
  {
    id: "11",
    title: "The Psychology of Money",
    price: 399,
    oldPrice: 899,
    currency: "₹",
    imageUrl: "/products/bestseller11.jpg",
    link: "/books/psychology-of-money"
  },
  {
    id: "12",
    title: "Becoming",
    price: 499,
    oldPrice: 1099,
    currency: "₹",
    imageUrl: "/products/bestseller12.jpg",
    link: "/books/becoming"
  },
  {
    id: "13",
    title: "Dune",
    price: 599,
    oldPrice: 1299,
    currency: "₹",
    imageUrl: "/products/bestseller13.jpg",
    link: "/books/dune"
  },
  {
    id: "14",
    title: "The Midnight Library",
    price: 449,
    oldPrice: 999,
    currency: "₹",
    imageUrl: "/products/bestseller14.jpg",
    link: "/books/midnight-library"
  },
  {
    id: "15",
    title: "The Seven Husbands of Evelyn Hugo",
    price: 499,
    oldPrice: 1099,
    currency: "₹",
    imageUrl: "/products/bestseller15.jpg",
    link: "/books/evelyn-hugo"
  }
];

export const newReleasesOnKindleBooksItems = [
  {
    id: "1",
    title: "The Familiar",
    price: 499,
    oldPrice: 1099,
    currency: "₹",
    imageUrl: "/products/kindle1.jpg",
    link: "/books/familiar"
  },
  {
    id: "2",
    title: "The Women",
    price: 399,
    oldPrice: 899,
    currency: "₹",
    imageUrl: "/products/kindle2.jpg",
    link: "/books/the-women"
  },
  {
    id: "3",
    title: "Fourth Wing",
    price: 599,
    oldPrice: 1299,
    currency: "₹",
    imageUrl: "/products/kindle3.jpg",
    link: "/books/fourth-wing"
  },
  {
    id: "4",
    title: "Iron Flame",
    price: 649,
    oldPrice: 1399,
    currency: "₹",
    imageUrl: "/products/kindle4.jpg",
    link: "/books/iron-flame"
  },
  {
    id: "5",
    title: "The Heaven & Earth Grocery Store",
    price: 449,
    oldPrice: 999,
    currency: "₹",
    imageUrl: "/products/kindle5.jpg",
    link: "/books/heaven-earth-grocery-store"
  },
  {
    id: "6",
    title: "Lessons in Chemistry",
    price: 399,
    oldPrice: 899,
    currency: "₹",
    imageUrl: "/products/kindle6.jpg",
    link: "/books/lessons-chemistry"
  },
  {
    id: "7",
    title: "Tom Lake",
    price: 349,
    oldPrice: 799,
    currency: "₹",
    imageUrl: "/products/kindle7.jpg",
    link: "/books/tom-lake"
  },
  {
    id: "8",
    title: "The Silent Patient",
    price: 299,
    oldPrice: 699,
    currency: "₹",
    imageUrl: "/products/kindle8.jpg",
    link: "/books/silent-patient"
  },
  {
    id: "9",
    title: "Atomic Habits",
    price: 249,
    oldPrice: 599,
    currency: "₹",
    imageUrl: "/products/kindle9.jpg",
    link: "/books/atomic-habits"
  },
  {
    id: "10",
    title: "The Psychology of Money",
    price: 299,
    oldPrice: 699,
    currency: "₹",
    imageUrl: "/products/kindle10.jpg",
    link: "/books/psychology-of-money"
  },
  {
    id: "11",
    title: "Tomorrow, and Tomorrow, and Tomorrow",
    price: 449,
    oldPrice: 999,
    currency: "₹",
    imageUrl: "/products/kindle11.jpg",
    link: "/books/tomorrow"
  },
  {
    id: "12",
    title: "Demon Copperhead",
    price: 499,
    oldPrice: 1099,
    currency: "₹",
    imageUrl: "/products/kindle12.jpg",
    link: "/books/demon-copperhead"
  },
  {
    id: "13",
    title: "The Midnight Library",
    price: 349,
    oldPrice: 799,
    currency: "₹",
    imageUrl: "/products/kindle13.jpg",
    link: "/books/midnight-library"
  },
  {
    id: "14",
    title: "The Seven Husbands of Evelyn Hugo",
    price: 399,
    oldPrice: 899,
    currency: "₹",
    imageUrl: "/products/kindle14.jpg",
    link: "/books/evelyn-hugo"
  },
  {
    id: "15",
    title: "It Ends With Us",
    price: 299,
    oldPrice: 699,
    currency: "₹",
    imageUrl: "/products/kindle15.jpg",
    link: "/books/it-ends-with-us"
  }
];

export const bestSellersOnKindleBooksItems = [
  {
    id: "1",
    title: "The Familiar",
    price: 499,
    oldPrice: 1099,
    currency: "₹",
    imageUrl: "/products/68a8dg4sdgsdig.jpg",
    link: "/books/familiar"
  },
  {
    id: "2",
    title: "Fourth Wing",
    price: 599,
    oldPrice: 1299,
    currency: "₹",
    imageUrl: "/products/72bc9fh5tehtijh.jpg",
    link: "/books/fourth-wing"
  },
  {
    id: "3",
    title: "The Covenant of Water",
    price: 549,
    oldPrice: 1199,
    currency: "₹",
    imageUrl: "/products/83cd0gi6ufiukli.jpg",
    link: "/books/covenant-of-water"
  },
  {
    id: "4",
    title: "Iron Flame",
    price: 649,
    oldPrice: 1399,
    currency: "₹",
    imageUrl: "/products/94de1hj7vgjvl_mj.jpg",
    link: "/books/iron-flame"
  },
  {
    id: "5",
    title: "The Women",
    price: 399,
    oldPrice: 899,
    currency: "₹",
    imageUrl: "/products/05ef2ik8whkwmnk.jpg",
    link: "/books/the-women"
  },
  {
    id: "6",
    title: "Atomic Habits",
    price: 299,
    oldPrice: 699,
    currency: "₹",
    imageUrl: "/products/16fg3jl9xilxnol.jpg",
    link: "/books/atomic-habits"
  },
  {
    id: "7",
    title: "The Psychology of Money",
    price: 349,
    oldPrice: 799,
    currency: "₹",
    imageUrl: "/products/27gh4km0yjm ypm.jpg",
    link: "/books/psychology-of-money"
  },
  {
    id: "8",
    title: "The Silent Patient",
    price: 299,
    oldPrice: 699,
    currency: "₹",
    imageUrl: "/products/38hi5ln1zknzqn.jpg",
    link: "/books/silent-patient"
  },
  {
    id: "9",
    title: "Where the Crawdads Sing",
    price: 349,
    oldPrice: 799,
    currency: "₹",
    imageUrl: "/products/49ij6mo2alomro.jpg",
    link: "/books/where-crawdads-sing"
  },
  {
    id: "10",
    title: "The Alchemist",
    price: 249,
    oldPrice: 599,
    currency: "₹",
    imageUrl: "/products/50jk7np3bpmnsp.jpg",
    link: "/books/alchemist"
  },
  {
    id: "11",
    title: "Becoming",
    price: 449,
    oldPrice: 999,
    currency: "₹",
    imageUrl: "/products/61kl8oq4cqnotq.jpg",
    link: "/books/becoming"
  },
  {
    id: "12",
    title: "The Midnight Library",
    price: 349,
    oldPrice: 799,
    currency: "₹",
    imageUrl: "/products/72lm9pr5dropur.jpg",
    link: "/books/midnight-library"
  },
];

export const autoAccessoriesCarouselCategories = [
  {
    id: '1',
    name: "Media player",
    imageUrl: "/products/media-player.jpg",
    url: "/",
    category: "auto_accessories",
    subCategory: "media_player_auto_accessories"
  },
  {
    id: '2',
    name: "Helmets",
    imageUrl: "/products/helmets.jpg",
    url: "/",
    category: "auto_accessories",
    subCategory: "helmets_auto_accessories"
  },
  {
    id: '3',
    name: "Engine oils",
    imageUrl: "/products/engine-oils.jpg",
    url: "/",
    category: "auto_accessories",
    subCategory: "engine_oils_auto_accessories"
  },
  {
    id: '4',
    name: "Dashcams",
    imageUrl: "/products/dashcams.jpg",
    url: "/",
    category: "auto_accessories",
    subCategory: "dashcams_auto_accessories"
  },
  {
    id: '5',
    name: "Subwoofers",
    imageUrl: "/products/subwoofers.jpg",
    url: "/",
    category: "auto_accessories",
    subCategory: "subwoofers_auto_accessories"
  },
  {
    id: '6',
    name: "Tyres",
    imageUrl: "/products/tyres.jpg",
    url: "/",
    category: "auto_accessories",
    subCategory: "tyres_auto_accessories"
  },
  {
    id: '7',
    name: "Cleaners",
    imageUrl: "/products/cleaners.jpg",
    url: "/",
    category: "auto_accessories",
    subCategory: "cleaners_auto_accessories"
  },
  {
    id: '8',
    name: "Styling",
    imageUrl: "/products/styling.jpg",
    url: "/",
    category: "auto_accessories",
    subCategory: "styling_auto_accessories"
  },
  {
    id: '9',
    name: "Batteries",
    imageUrl: "/products/batteries.jpg",
    url: "/",
    category: "auto_accessories",
    subCategory: "batteries_auto_accessories"
  },
  {
    id: '10',
    name: "Tyre inflator",
    imageUrl: "/products/tyre-inflator.jpg",
    url: "/",
    category: "auto_accessories",
    subCategory: "tyre_inflator_auto_accessories"
  },
  {
    id: '11',
    name: "Lights",
    imageUrl: "/products/lights.jpg",
    url: "/",
    category: "auto_accessories",
    subCategory: "lights_auto_accessories"
  },
  {
    id: '12',
    name: "Car washer",
    imageUrl: "/products/car-washer.jpg",
    url: "/",
    category: "auto_accessories",
    subCategory: "car_washer_auto_accessories"
  }
];

export const slidesautoAccessories: BannerItemContent[] = [
  {
    id: '1',
    title: 'Upgrade Your Ride',
    subtitle: 'Premium auto accessories for every vehicle',
    category: 'Auto Accessories',
    discount: 'Up to 40% off',
    imgUrl: '/products/1_autoAccessories._CB773853331_1.png',
    align: 'right'
  },
  {
    id: '2',
    title: 'Essential Car Care',
    subtitle: 'Keep your vehicle in top condition',
    category: 'Car Care',
    discount: 'Up to 30% off',
    imgUrl: '/products/2_autoAccessories._CB773853331_1.png',
    align: 'left'
  },
];

export const dealsOnCarAccessoriesAutoAccessoriesItems = [
  {
    id: '1',
    title: 'Car Mats',
    subtitle: 'Premium floor protection for your vehicle',
    imageUrl: '/products/car-mats.jpg',
    link: '/'
  },
  {
    id: '2',
    title: 'Car Security Cameras',
    subtitle: '24/7 surveillance for peace of mind',
    imageUrl: '/products/car-security-cameras.jpg',
    link: '/'
  },
  {
    id: '3',
    title: 'Car Body Covers',
    subtitle: 'Protect your car from dust and weather',
    imageUrl: '/products/car-body-covers.jpg',
    link: '/'
  },
  {
    id: '4',
    title: 'High Pressure Washers',
    subtitle: 'Powerful cleaning for your vehicle',
    imageUrl: '/products/high-pressure-washers.jpg',
    link: '/'
  },
  {
    id: '5',
    title: 'Car Seat Covers',
    subtitle: 'Stylish and comfortable seat protection',
    imageUrl: '/products/car-seat-covers.jpg',
    link: '/'
  },
  {
    id: '6',
    title: 'Car Mobile Chargers',
    subtitle: 'Fast charging on the go',
    imageUrl: '/products/car-mobile-chargers.jpg',
    link: '/'
  },
  {
    id: '7',
    title: 'Car Air Fresheners',
    subtitle: 'Keep your car smelling fresh',
    imageUrl: '/products/car-air-fresheners.jpg',
    link: '/'
  },
  {
    id: '8',
    title: 'Car Polishes',
    subtitle: 'Restore your car\'s showroom shine',
    imageUrl: '/products/car-polishes.jpg',
    link: '/'
  }
];

export const dealsOnBikeAccessoriesAutoAccessoriesItems = [
  {
    id: '1',
    title: 'Bike Seat Covers',
    subtitle: 'Comfortable and durable seat protection for your bike',
    imageUrl: '/products/bike-seat-covers.png',
    link: '/'
  },
  {
    id: '2',
    title: 'Biker Helmets',
    subtitle: 'Safety first with premium quality helmets',
    imageUrl: '/products/biker-helmets.png',
    link: '/'
  },
  {
    id: '3',
    title: 'Rider Protective Jackets',
    subtitle: 'Stay safe and stylish on every ride',
    imageUrl: '/products/rider-protective-jackets.png',
    link: '/'
  },
  {
    id: '4',
    title: 'Riding Gloves',
    subtitle: 'Enhanced grip and protection for your hands',
    imageUrl: '/products/riding-gloves.png',
    link: '/'
  },
  {
    id: '5',
    title: 'Bike Body Covers',
    subtitle: 'Protect your bike from dust, rain, and scratches',
    imageUrl: '/products/bike-body-covers.png',
    link: '/'
  },
  {
    id: '6',
    title: 'Bike Mobile Holders',
    subtitle: 'Secure and convenient phone mounting for navigation',
    imageUrl: '/products/bike-mobile-holders.png',
    link: '/'
  }
];

export const premiumAtItsBestAutoAccessoriesItems = [
  {
    id: '1',
    title: 'High Pressure Washers',
    subtitle: 'Powerful cleaning performance for your vehicle',
    imageUrl: '/products/high-pressure-washers.png',
    link: '/'
  },
  {
    id: '2',
    title: 'Car Subwoofers',
    subtitle: 'Deep bass and premium audio experience',
    imageUrl: '/products/car-subwoofers.png',
    link: '/'
  },
  {
    id: '3',
    title: 'Car Amplifiers',
    subtitle: 'Crystal clear sound with powerful amplification',
    imageUrl: '/products/car-amplifiers.png',
    link: '/'
  },
  {
    id: '4',
    title: 'Car Media Players',
    subtitle: 'Entertainment on the go with advanced features',
    imageUrl: '/products/car-media-players.png',
    link: '/'
  },
  {
    id: '5',
    title: 'Car Speakers',
    subtitle: 'Immersive audio for the ultimate driving experience',
    imageUrl: '/products/car-speakers.png',
    link: '/'
  }
];

export const shopByPublishersBooksCategories: CategoryItem[] = [
  {
    id: 'MTG',
    name: 'MTG',
    imageUrl: '/products/mtg.jpg',
    url: '/',
    category: 'Books',
    subCategory: 'Publishers',
    subSubCategory: 'MTG'
  },
  {
    id: 'Arihant',
    name: 'Arihant',
    imageUrl: '/products/arihant.jpg',
    url: '/',
    category: 'Books',
    subCategory: 'Publishers',
    subSubCategory: 'Arihant'
  },
  {
    id: 'PW',
    name: 'PW (Physics Wallah)',
    imageUrl: '/products/pw.jpg',
    url: '/',
    category: 'Books',
    subCategory: 'Publishers',
    subSubCategory: 'PW'
  },
  {
    id: 'Oswaal',
    name: 'Oswaal',
    imageUrl: '/products/oswaal.jpg',
    url: '/',
    category: 'Books',
    subCategory: 'Publishers',
    subSubCategory: 'Oswaal'
  },
  {
    id: 'McgrawHill',
    name: 'McGraw Hill',
    imageUrl: '/products/mcgraw-hill.jpg',
    url: '/',
    category: 'Books',
    subCategory: 'Publishers',
    subSubCategory: 'McGraw Hill'
  },
  {
    id: 'Repro',
    name: 'Repro',
    imageUrl: '/products/repro.jpg',
    url: '/',
    category: 'Books',
    subCategory: 'Publishers',
    subSubCategory: 'Repro'
  },
  {
    id: 'Disha',
    name: 'Disha',
    imageUrl: '/products/disha.jpg',
    url: '/',
    category: 'Books',
    subCategory: 'Publishers',
    subSubCategory: 'Disha'
  }
];

export const shopByLanguageBooksItems = [
  {
    id: '1',
    title: 'Kannada Books',
    subtitle: 'Explore Kannada literature and stories',
    imageUrl: '/products/kannada-books.jpg',
    link: '/'
  },
  {
    id: '2',
    title: 'Hindi Books',
    subtitle: 'Popular Hindi novels and poetry',
    imageUrl: '/products/hindi-books.jpg',
    link: '/'
  },
  {
    id: '3',
    title: 'Tamil Books',
    subtitle: 'Read Tamil fiction and classics',
    imageUrl: '/products/tamil-books.jpg',
    link: '/'
  },
  {
    id: '4',
    title: 'Marathi Books',
    subtitle: 'Explore Marathi literature and culture',
    imageUrl: '/products/marathi-books.jpg',
    link: '/'
  },
  {
    id: '5',
    title: 'English Books',
    subtitle: 'Best-selling English books and novels',
    imageUrl: '/products/english-books.jpg',
    link: '/'
  },
  {
    id: '6',
    title: 'Bengali Books',
    subtitle: 'Discover Bengali novels and poetry',
    imageUrl: '/products/bengali-books.jpg',
    link: '/'
  }
];

export const jewelleryCarouselCategories = [
  {
    id: '1',
    name: "Rakhis",
    imageUrl: "/products/rakhis.jpg",
    url: "/collections/rakhis",
    category: "jewellery",
    subCategory: "rakhis_jewellery"
  },
  {
    id: '2',
    name: "Rings",
    imageUrl: "/products/rings.jpg",
    url: "/collections/rings",
    category: "jewellery",
    subCategory: "rings_jewellery"
  },
  {
    id: '3',
    name: "Bracelets",
    imageUrl: "/products/bracelets.jpg",
    url: "/collections/silver-bracelets",
    category: "jewellery",
    subCategory: "bracelets_jewellery"
  },
  {
    id: '4',
    name: "Pendants",
    imageUrl: "/products/pendants.jpg",
    url: "/collections/pendants",
    category: "jewellery",
    subCategory: "pendants_jewellery"
  },
  {
    id: '5',
    name: "Earrings",
    imageUrl: "/products/earrings.jpg",
    url: "/collections/earrings",
    category: "jewellery",
    subCategory: "earrings_jewellery"
  },
  {
    id: '6',
    name: "Men In Silver",
    imageUrl: "/products/men-in-silver.jpg",
    url: "/collections/mens-silver-jewellery",
    category: "jewellery",
    subCategory: "men_in_silver_jewellery"
  },
  {
    id: '7',
    name: "Personalised",
    imageUrl: "/products/personalised.jpg",
    url: "/collections/personalised-jewellery",
    category: "jewellery",
    subCategory: "personalised_jewellery"
  },
  {
    id: '8',
    name: "Anklets",
    imageUrl: "/products/anklets.jpg",
    url: "/collections/anklets",
    category: "jewellery",
    subCategory: "anklets_jewellery"
  },
  {
    id: '9',
    name: "Silver Chains",
    imageUrl: "/products/silver-chains.jpg",
    url: "/collections/silver-chains",
    category: "jewellery",
    subCategory: "silver_chains_jewellery"
  },
  {
    id: '10',
    name: "Sets",
    imageUrl: "/products/sets.jpg",
    url: "/collections/all-sets",
    category: "jewellery",
    subCategory: "sets_jewellery"
  },
  {
    id: '11',
    name: "Mangalsutras",
    imageUrl: "/products/mangalsutras.jpg",
    url: "/collections/mangalsutras",
    category: "jewellery",
    subCategory: "mangalsutras_jewellery"
  },
  {
    id: '12',
    name: "Nose Pins",
    imageUrl: "/products/nose-pins.jpg",
    url: "/collections/nose-pins-and-nose-rings",
    category: "jewellery",
    subCategory: "nose_pins_jewellery"
  },
  {
    id: '13',
    name: "Perfumes",
    imageUrl: "/products/perfumes.jpg",
    url: "/collections/perfumes",
    category: "jewellery",
    subCategory: "perfumes_jewellery"
  },
  {
    id: '14',
    name: "Toe Rings",
    imageUrl: "/products/toe-rings.jpg",
    url: "/collections/toe-rings",
    category: "jewellery",
    subCategory: "toe_rings_jewellery"
  },
  {
    id: '15',
    name: "New Launch",
    imageUrl: "/products/new-launch.jpg",
    url: "/collections/fresh-drops",
    category: "jewellery",
    subCategory: "new_launch_jewellery"
  }
];

export const slidesJewellery: BannerItemContent[] = [
  {
    id: '1',
    title: '',
    subtitle: '',
    category: '',
    discount: '',
    imgUrl: '/products/1_jewellery._CB773853331_1.png',
    align: 'right'
  },

  {
    id: '2',
    title: '',
    subtitle: '',
    category: '',
    discount: '',
    imgUrl: '/products/4_jewellery._CB773853331_1.png',
    align: 'left'
  },
  {
    id: '3',
    title: '',
    subtitle: '',
    category: '',
    discount: '',
    imgUrl: '/products/2_jewellery._CB773853331_1.png',
    align: 'left'

  },
  {
    id: '4',
    title: '',
    subtitle: '',
    category: '',
    discount: '',
    imgUrl: '/products/3_jewellery._CB773853331_1.png',
    align: 'left'
  },
];

export const discoverOurCuratedStoresJewelleryItems = [
  {
    id: '1',
    title: 'Fashion Jewellery',
    subtitle: 'Trendy & affordable everyday wear',
    imageUrl: '/products/fashion-jewellery.jpg',
    link: '/'
  },
  {
    id: '2',
    title: 'Silver Jewellery',
    subtitle: 'Elegant sterling silver collections',
    imageUrl: '/products/silver-jewellery.jpg',
    link: '/'
  },
  {
    id: '3',
    title: 'Hidden Gems',
    subtitle: 'Unique & exclusive jewellery finds',
    imageUrl: '/products/hidden-gems.jpg',
    link: '/'
  },
  {
    id: '4',
    title: 'Luxe Collection',
    subtitle: 'Designer luxury jewellery pieces',
    imageUrl: '/products/luxe.jpg',
    link: '/'
  },
  {
    id: '5',
    title: 'Fine Jewellery',
    subtitle: 'Premium craftsmanship for special occasions',
    imageUrl: '/products/fine-jewellery.jpg',
    link: '/'
  },
  {
    id: '6',
    title: 'Revolve',
    subtitle: 'Curated international styles',
    imageUrl: '/products/revolve.jpg',
    link: '/'
  }
];

export const slidesHalfJewellery: BannerItem[] = [
  {
    id: '1',
    title: 'Thalassa Collection',
    imageUrl: '/products/thalassa-collection.jpg',
    url: '/collections/thalassa-collection',
    discount: '',
    discount2: '',
    alt: 'Thalassa Collection by GIVA',
    badge: 'New Collection'
  },
  {
    id: '2',
    title: 'Pearl-fectly',
    imageUrl: '/products/pearl-fectly.jpg',
    url: '/collections/pearl',
    discount: '',
    discount2: '',
    alt: 'Pearl Collection by GIVA',
    badge: 'Trending'
  },
  {
    id: '3',
    title: 'All Yours',
    imageUrl: '/products/all-yours.jpg',
    url: '/collections/all-yours-collection',
    discount: '',
    discount2: '',
    alt: 'All Yours Collection by GIVA',
    badge: 'Best Seller'
  },
  {
    id: '4',
    title: 'Glow In Motion',
    imageUrl: '/products/glow-in-motion.jpg',
    url: '/collections/glow-in-motion',
    discount: '',
    discount2: '',
    alt: 'Glow In Motion Collection by GIVA',
    badge: 'New Arrival'
  },
  {
    id: '5',
    title: 'Fresh Drops',
    imageUrl: '/products/fresh-drops-collection.jpg',
    url: '/collections/fresh-drops',
    discount: '',
    discount2: '',
    alt: 'Fresh Drops Collection by GIVA',
    badge: 'Just In'
  },
  {
    id: '6',
    title: 'Shakti Collection',
    imageUrl: '/products/shakti-collection.jpg',
    url: '/collections/shakti-collection',
    discount: '',
    discount2: '',
    alt: 'Shakti Collection by GIVA',
    badge: 'Limited Edition'
  },
  {
    id: '7',
    title: 'Piercing Collection',
    imageUrl: '/products/piercing-collection.jpg',
    url: '/collections/piercing-collection',
    discount: '',
    discount2: '',
    alt: 'Piercing Collection by GIVA',
    badge: 'New'
  },
  {
    id: '8',
    title: 'Natural Gemstones',
    imageUrl: '/products/natural-gemstones.jpg',
    url: '/collections/natural-gemstone-collection',
    discount: '',
    discount2: '',
    alt: 'Natural Gemstone Collection by GIVA',
    badge: 'Premium'
  },
  {
    id: '9',
    title: 'What The Heart Wants',
    imageUrl: '/products/what-the-heart-wants.jpg',
    url: '/collections/wthw',
    discount: '',
    discount2: '',
    alt: 'What The Heart Wants Collection by GIVA',
    badge: 'Romantic'
  },
  {
    id: '10',
    title: 'Mascot Collection',
    imageUrl: '/products/mascot-collection.jpg',
    url: '/collections/mascot-collection',
    discount: '',
    discount2: '',
    alt: 'Mascot Collection by GIVA',
    badge: 'Cute Finds'
  },
  {
    id: '11',
    title: 'Wings Of Wonder',
    imageUrl: '/products/wings-of-wonder.jpg',
    url: '/collections/wings-of-wonder',
    discount: '',
    discount2: '',
    alt: 'Wings Of Wonder Collection by GIVA',
    badge: 'Inspirational'
  },
  {
    id: '12',
    title: 'Sky High',
    imageUrl: '/products/sky-high.jpg',
    url: '/collections/sky-high',
    discount: '',
    discount2: '',
    alt: 'Sky High Collection by GIVA',
    badge: 'Elevated Style'
  },
  {
    id: '13',
    title: 'Stackable Collection',
    imageUrl: '/products/stackable-collection.jpg',
    url: '/collections/stackable-collection',
    discount: '',
    discount2: '',
    alt: 'Stackable Collection by GIVA',
    badge: 'Mix & Match'
  }
];

export const shopByColourslidesHalfJewellery: BannerItem[] = [
  {
    id: '1',
    title: 'Silver',
    imageUrl: '/products/silver.jpg',
    url: '/collections/925-silver-jewellery',
    discount: '',
    discount2: '',
    alt: '925 Silver Jewellery by GIVA',
    badge: 'Pure Silver'
  },
  {
    id: '2',
    title: 'Gold Plated',
    imageUrl: '/products/gold-plated.jpg',
    url: '/collections/18k-gold-plated-jewellery',
    discount: '',
    discount2: '',
    alt: '18K Gold Plated Jewellery by GIVA',
    badge: 'Luxury Finish'
  },
  {
    id: '3',
    title: 'Rose Gold',
    imageUrl: '/products/rose-gold.jpg',
    url: '/collections/rose-gold-collection',
    discount: '',
    discount2: '',
    alt: 'Rose Gold Collection by GIVA',
    badge: 'Trending'
  },
  {
    id: '4',
    title: 'Oxidised',
    imageUrl: '/products/oxidised.jpg',
    url: '/collections/avni-oxidised-silver-1',
    discount: '',
    discount2: '',
    alt: 'Oxidised Silver Jewellery by GIVA',
    badge: 'Bohemian'
  }
];

export const shopByBondslidesHalfJewellery: BannerItem[] = [
  {
    id: '1',
    title: '',
    imageUrl: '/products/mother-gift.jpg',
    url: '/collections/gifts-mother',
    discount: '',
    discount2: '',
    alt: 'Gifts for Mother by GIVA',
    badge: ''
  },
  {
    id: '2',
    title: '',
    imageUrl: '/products/husband-gift.jpg',
    url: '/collections/mens-silver-jewellery',
    discount: '',
    discount2: '',
    alt: 'Gifts for Husband by GIVA',
    badge: ''
  },
  {
    id: '3',
    title: '',
    imageUrl: '/products/wife-gift.jpg',
    url: '/collections/gifts-wife',
    discount: '',
    discount2: '',
    alt: 'Gifts for Wife by GIVA',
    badge: ''
  },
  {
    id: '4',
    title: '',
    imageUrl: '/products/sister-gift.jpg',
    url: '/collections/gifts-sister',
    discount: '',
    discount2: '',
    alt: 'Gifts for Sister by GIVA',
    badge: ''
  },
  {
    id: '5',
    title: '',
    imageUrl: '/products/brother-gift.jpg',
    url: '/collections/mens-silver-jewellery',
    discount: '',
    discount2: '',
    alt: 'Gifts for Brother by GIVA',
    badge: ''
  },
  {
    id: '6',
    title: '',
    imageUrl: '/products/friends-gift.jpg',
    url: '/collections/gifts-for-friends',
    discount: '',
    discount2: '',
    alt: 'Gifts for Friends by GIVA',
    badge: ''
  }
];

export const tvsAppliancesCarouselCategories = [
  {
    id: '1',
    name: "Televisions",
    imageUrl: "/products/accessories121Televisions.jpg",
    url: "/",
    category: "appliances",
    subCategory: "televisions_appliances"
  },
  {
    id: '2',
    name: "Stabilizers",
    imageUrl: "/products/accessories21.jpg",
    url: "/",
    category: "appliances",
    subCategory: "stabilizers_appliances"
  },
  {
    id: '3',
    name: "Laundry",
    imageUrl: "/products/accessories3.jpg",
    url: "/",
    category: "appliances",
    subCategory: "laundry_appliances"
  },
  {
    id: '4',
    name: "Geysers",
    imageUrl: "/products/accessories4.jpg",
    url: "/",
    category: "appliances",
    subCategory: "geysers_appliances"
  },
  {
    id: '5',
    name: "Fridges",
    imageUrl: "/products/accessories5.jpg",
    url: "/",
    category: "appliances",
    subCategory: "fridges_appliances"
  },
  {
    id: '6',
    name: "ACs",
    imageUrl: "/products/accessories6.jpg",
    url: "/",
    category: "appliances",
    subCategory: "acs_appliances"
  },
  {
    id: '7',
    name: "Kitchen",
    imageUrl: "/products/accessories7.jpg",
    url: "/",
    category: "appliances",
    subCategory: "kitchen_appliances"
  },
  {
    id: '8',
    name: "Home",
    imageUrl: "/products/accessories8.jpg",
    url: "/",
    category: "appliances",
    subCategory: "home_appliances"
  },
  {
    id: '9',
    name: "Fans",
    imageUrl: "/products/accessories9.jpg",
    url: "/",
    category: "appliances",
    subCategory: "fans_appliances"
  },
  {
    id: '10',
    name: "Monsoon",
    imageUrl: "/products/accessories10.jpg",
    url: "/",
    category: "appliances",
    subCategory: "monsoon_appliances"
  },
  {
    id: '11',
    name: "Inverters..",
    imageUrl: "/products/accessories11.jpg",
    url: "/",
    category: "appliances",
    subCategory: "inverters_appliances"
  },
  {
    id: '12',
    name: "Microwaves",
    imageUrl: "/products/accessories12.jpg",
    url: "/",
    category: "appliances",
    subCategory: "microwaves_appliances"
  },
  {
    id: '13',
    name: "Dishwashers",
    imageUrl: "/products/accessories13.jpg",
    url: "/",
    category: "appliances",
    subCategory: "dishwashers_appliances"
  },
  {
    id: '14',
    name: "Freezer",
    imageUrl: "/products/accessories14.jpg",
    url: "/",
    category: "appliances",
    subCategory: "freezer_appliances"
  }
];

export const slidesTVsAppliances: BannerItemContent[] = [
  {
    id: '1',
    title: '',
    subtitle: '',
    category: '',
    discount: '',
    imgUrl: '/products/1_TVsAppliances._CB773853331_1.png',
    align: 'left'
  },
  {
    id: '2',
     title: '',
    subtitle: '',
    category: '',
    discount: '',
    imgUrl: '/products/2_TVsAppliances._CB773853331_1.png',
    align: 'left'
  }
];

export const shopByBrandsTVsAppliancesCategories: CategoryItem[] = [
  {
    id: '1',
    name: 'TCL',
    imageUrl: '/products/tcl.jpg',
    url: '/'
  },
  {
    id: '2',
    name: 'Samsung',
    imageUrl: '/products/samsung.jpg',
    url: '/'
  },
  {
    id: '3',
    name: 'LG',
    imageUrl: '/products/lg.jpg',
    url: '/'
  },
  {
    id: '4',
    name: 'Xiaomi',
    imageUrl: '/products/xiaomi.jpg',
    url: '/'
  },
  {
    id: '5',
    name: 'Sony',
    imageUrl: '/products/sony.jpg',
    url: '/'
  },
  {
    id: '6',
    name: 'Hisense',
    imageUrl: '/products/hisense.jpg',
    url: '/'
  },
  {
    id: '7',
    name: 'Vu',
    imageUrl: '/products/vu.jpg',
    url: '/'
  },
  {
    id: '8',
    name: 'Infinix',
    imageUrl: '/products/infinix.jpg',
    url: '/'
  },
  {
    id: '9',
    name: 'Acerpure',
    imageUrl: '/products/acerpure.jpg',
    url: '/'
  },
  {
    id: '10',
    name: 'Vzy',
    imageUrl: '/products/vzy.jpg',
    url: '/'
  },
  {
    id: '11',
    name: 'Realme Techlife',
    imageUrl: '/products/realme-techlife.jpg',
    url: '/'
  },
  {
    id: '12',
    name: 'Motorola',
    imageUrl: '/products/motorola.jpg',
    url: '/'
  },
  {
    id: '13',
    name: 'Sansui',
    imageUrl: '/products/sansui.jpg',
    url: '/'
  },
  {
    id: '14',
    name: 'Bush',
    imageUrl: '/products/bush.jpg',
    url: '/'
  },
  {
    id: '15',
    name: 'iFFalcon',
    imageUrl: '/products/iffalcon.jpg',
    url: '/'
  },
  {
    id: '16',
    name: 'Toshiba',
    imageUrl: '/products/toshiba.jpg',
    url: '/'
  },
  {
    id: '17',
    name: 'Philips',
    imageUrl: '/products/philips.jpg',
    url: '/'
  },
  {
    id: '18',
    name: 'Thomson',
    imageUrl: '/products/thomson.jpg',
    url: '/'
  },
  {
    id: '19',
    name: 'Kodak',
    imageUrl: '/products/kodak.jpg',
    url: '/'
  },
  {
    id: '20',
    name: 'Haier',
    imageUrl: '/products/haier.jpg',
    url: '/'
  },
  {
    id: '21',
    name: 'VW',
    imageUrl: '/products/vw.jpg',
    url: '/'
  },
  {
    id: '22',
    name: 'Unoboom',
    imageUrl: '/products/unoboom.jpg',
    url: '/'
  },
  {
    id: '23',
    name: 'VZY',
    imageUrl: '/products/vzy_dish_tv.jpg',
    url: '/'
  }
];

export const topDealsTVsAppliancesItems = [
  {
    id: '1',
    title: 'Xiaomi Smart TV',
    subtitle: '108 cm (43 inches) 4K Ultra HD Smart LED TV',
    imageUrl: '/products/xiaomi-smart-tv.jpg',
    link: '/'
  },
  {
    id: '2',
    title: 'Samsung Smart TV',
    subtitle: '126 cm (50 inches) Crystal 4K UHD Smart TV',
    imageUrl: '/products/samsung-smart-tv.jpg',
    link: '/'
  },
  {
    id: '3',
    title: 'Hisense Smart TV',
    subtitle: '139 cm (55 inches) 4K Ultra HD Smart LED TV',
    imageUrl: '/products/hisense-smart-tv.jpg',
    link: '/'
  },
  {
    id: '4',
    title: 'LG Smart TV',
    subtitle: '108 cm (43 inches) 4K Ultra HD Smart TV',
    imageUrl: '/products/lg-smart-tv.jpg',
    link: '/'
  },
  {
    id: '5',
    title: 'Motorola Smart TV',
    subtitle: '126 cm (50 inches) 4K Ultra HD Smart LED TV',
    imageUrl: '/products/motorola-smart-tv.jpg',
    link: '/'
  },
  {
    id: '6',
    title: 'Sony Smart TV',
    subtitle: '139 cm (55 inches) 4K OLED Smart TV',
    imageUrl: '/products/sony-smart-tv.jpg',
    link: '/'
  },
  {
    id: '7',
    title: 'TCL Smart TV',
    subtitle: '80 cm (32 inches) HD Ready Smart LED TV',
    imageUrl: '/products/tcl-smart-tv.jpg',
    link: '/'
  },
  {
    id: '8',
    title: 'Vu Smart TV',
    subtitle: '108 cm (43 inches) 4K Ultra HD Smart LED TV',
    imageUrl: '/products/vu-smart-tv.jpg',
    link: '/'
  }
];

export const slidesHalfAppliances: BannerItem[] = [
  {
    id: '1',
    title: 'Samsung OLED TVs',
    imageUrl: '/products/samsung-oled-tvs.png',
    url: '/',
    discount: '',
    discount2: '',
    alt: 'Samsung OLED TVs',
    badge: ''
  },
  {
    id: '2',
    title: 'BOSCH Washing Machines',
    imageUrl: '/products/bosch-washing-machines.png',
    url: '/',
    discount: '',
    discount2: '',
    alt: 'BOSCH Fully Automatic Front Load Washing Machines',
    badge: ''
  },
  {
    id: '3',
    title: 'Frost Free Refrigerators',
    imageUrl: '/products/frost-free-refrigerators.png',
    url: '/',
    discount: '',
    discount2: '',
    alt: 'Frost Free and Side-by-Side Refrigerators',
    badge: ''
  },
  {
    id: '4',
    title: 'Premium Air Conditioners',
    imageUrl: '/products/premium-air-conditioners.png',
    url: '/',
    discount: '',
    discount2: '',
    alt: 'Premium Air Conditioners',
    badge: ''
  },
  {
    id: '5',
    title: 'Mixer Grinders',
    imageUrl: '/products/mixer-grinders.png',
    url: '/',
    discount: '',
    discount2: '',
    alt: 'Mixer Grinders',
    badge: ''
  },
  {
    id: '6',
    title: 'Water Heaters',
    imageUrl: '/products/water-heaters.png',
    url: '/',
    discount: '',
    discount2: '',
    alt: 'Water Heaters / Geysers',
    badge: ''
  },
  {
    id: '7',
    title: 'Fans',
    imageUrl: '/products/fans.png',
    url: '/',
    discount: '',
    discount2: '',
    alt: 'Fans',
    badge: ''
  },
  {
    id: '8',
    title: 'Vacuum Cleaners',
    imageUrl: '/products/vacuum-cleaners.png',
    url: '/',
    discount: '',
    discount2: '',
    alt: 'Vacuum Cleaners',
    badge: ''
  },
  {
    id: '9',
    title: 'LG OLED TVs',
    imageUrl: '/products/lg-oled-tvs.png',
    url: '/',
    discount: '',
    discount2: '',
    alt: 'LG OLED TVs',
    badge: ''
  }
];

export const affordableEMIOffersAppliances = [
  {
    id: '1',
    title: '55" TVs',
    subtitle: 'Premium Television Collection',
    imageUrl: '/products/a8f3k2m9x7q4w5p6.jpg',
    link: '/'
  },
  {
    id: '2',
    title: 'Washing Machines',
    subtitle: 'Top Brands - Samsung, LG, Whirlpool & More',
    imageUrl: '/products/b4h7j1l9r3t6y8u2.jpg',
    link: '/'
  },
  {
    id: '3',
    title: 'Refrigerators',
    subtitle: 'Best Deals on Refrigerators',
    imageUrl: '/products/c5v9n2m8x4q1w6k3.jpg',
    link: '/'
  },
  {
    id: '4',
    title: 'ACs Under ₹2,999 EMI',
    subtitle: 'No Cost EMI on Air Conditioners',
    imageUrl: '/products/d7p3s6t9z2r5u8v1.jpg',
    link: '/'
  },
  {
    id: '5',
    title: 'Mixer Grinders',
    subtitle: '3★ & Above Mixer Juicer Grinders',
    imageUrl: '/products/e9f4h7k2m5q8w3t6.jpg',
    link: '/'
  },
  {
    id: '6',
    title: 'Water Heaters',
    subtitle: 'Geysers & Water Heating Solutions',
    imageUrl: '/products/f2r6u9x3c7v5n8p1.jpg',
    link: '/'
  },
  {
    id: '7',
    title: 'Purifiers & Inverters',
    subtitle: 'Water Purifiers & Inverters from Top Brands',
    imageUrl: '/products/g8t4y2m7q5w9s1k6.jpg',
    link: '/'
  },
  {
    id: '8',
    title: 'Dishwashers',
    subtitle: 'Free Standing Dishwashers',
    imageUrl: '/products/h3v7n1p5r9t2x6k4.jpg',
    link: '/'
  },
  {
    id: '9',
    title: 'Microwaves',
    subtitle: 'All Microwave Ovens Collection',
    imageUrl: '/products/j6s9m3k8w2q7t5v1.jpg',
    link: '/'
  }
];

export const instaFindsAppliances = [
  {
    id: '1',
    title: 'Air Purifiers',
    subtitle: 'Premium Air Purification Solutions',
    imageUrl: '/products/x7k9m2p4q8w5r6t3.jpg',
    link: '/'
  },
  {
    id: '2',
    title: 'Air Fresheners',
    subtitle: 'Keep Your Home Fresh & Fragrant',
    imageUrl: '/products/f4h8k1m9q3w6t7v2.jpg',
    link: '/'
  },
  {
    id: '3',
    title: 'Air Purifiers',
    subtitle: 'Advanced Air Purification Technology',
    imageUrl: '/products/n5s2p7r9t4x8v3k6.jpg',
    link: '/'
  },
  {
    id: '4',
    title: 'Chimneys',
    subtitle: 'Kitchen Chimneys for Smoke-Free Cooking',
    imageUrl: '/products/j6m3k8w2q7t5v1p9.jpg',
    link: '/'
  },
  {
    id: '5',
    title: 'Washing Machines',
    subtitle: 'Front Load with In-Built Heater & Wi-Fi',
    imageUrl: '/products/z4r6u9x3c7v5n8p1.jpg',
    link: '/'
  },
  {
    id: '6',
    title: 'Dishwashers',
    subtitle: 'BOSCH Dishwashers Collection',
    imageUrl: '/products/b7h3k9m5q2w8t6v4.jpg',
    link: '/'
  },
  {
    id: '7',
    title: 'Hobs',
    subtitle: 'Premium Hob Solutions for Your Kitchen',
    imageUrl: '/products/y5s8p2r7t4x9v3k6.jpg',
    link: '/'
  },
  {
    id: '8',
    title: 'Vacuum Cleaners',
    subtitle: 'Powerful Cleaning Solutions',
    imageUrl: '/products/l3m7k1w9q5t8v2p4.jpg',
    link: '/'
  }
];

export const mobilesTabletsCarouselCategories = [
  // Smartphone Brands
  {
    id: '1',
    name: "iPhone",
    imageUrl: "/products/iphone21.png",
    url: "/",
    badge: "New Arrivals",
    category: "mobiles_tablets",
    subCategory: "iphone_mobiles_tablets"
  },
  {
    id: '2',
    name: "vivo",
    imageUrl: "/products/vivo1.jpg",
    url: "/",
    badge: "Trending",
    category: "mobiles_tablets",
    subCategory: "vivo_mobiles_tablets"
  },
  {
    id: '3',
    name: "OPPO",
    imageUrl: "/products/oppo1.jpg",
    url: "/",
    badge: "Best Sellers",
    category: "mobiles_tablets",
    subCategory: "oppo_mobiles_tablets"
  },
  {
    id: '4',
    name: "POCO",
    imageUrl: "/products/poco1.jpg",
    url: "/",
    badge: "Featured",
    category: "mobiles_tablets",
    subCategory: "poco_mobiles_tablets"
  },
  {
    id: '5',
    name: "AI+",
    imageUrl: "/products/ai-plus1.jpg",
    url: "/",
    badge: "AI Powered",
    category: "mobiles_tablets",
    subCategory: "ai_mobiles_tablets"
  },
  {
    id: '6',
    name: "Redmi",
    imageUrl: "/products/redmi1.jpg",
    url: "/",
    badge: "Popular",
    category: "mobiles_tablets",
    subCategory: "redmi_mobiles_tablets"
  },
  {
    id: '7',
    name: "Infinix",
    imageUrl: "/products/infinix11.jpg",
    url: "/",
    badge: "Budget Pick",
    category: "mobiles_tablets",
    subCategory: "infinix_mobiles_tablets"
  },
  {
    id: '8',
    name: "HMD",
    imageUrl: "/products/hmd1.jpg",
    url: "/",
    badge: "New",
    category: "mobiles_tablets",
    subCategory: "hmd_mobiles_tablets"
  },
  {
    id: '9',
    name: "LAVA",
    imageUrl: "/products/lava1.jpg",
    url: "/",
    badge: "Value Deal",
    category: "mobiles_tablets",
    subCategory: "lava_mobiles_tablets"
  },
  {
    id: '10',
    name: "motorola",
    imageUrl: "/products/motorola11.jpg",
    url: "/",
    badge: "Premium",
    category: "mobiles_tablets",
    subCategory: "motorola_mobiles_tablets"
  },
  {
    id: '11',
    name: "Samsung",
    imageUrl: "/products/samsung11.jpg",
    url: "/",
    badge: "Best Sellers",
    category: "mobiles_tablets",
    subCategory: "samsung_mobiles_tablets"
  },
  {
    id: '12',
    name: "realme",
    imageUrl: "/products/realme1.jpg",
    url: "/",
    badge: "Top Rated",
    category: "mobiles_tablets",
    subCategory: "realme_mobiles_tablets"
  },
  {
    id: '13',
    name: "Nothing",
    imageUrl: "/products/nothing1.jpg",
    url: "/",
    badge: "Unique",
    category: "mobiles_tablets",
    subCategory: "nothing_mobiles_tablets"
  },
  {
    id: '14',
    name: "Snapdragon",
    imageUrl: "/products/snapdragon1.jpg",
    url: "/",
    badge: "Power",
    category: "mobiles_tablets",
    subCategory: "snapdragon_mobiles_tablets"
  },
  {
    id: '15',
    name: "Google",
    imageUrl: "/products/google1.jpg",
    url: "/",
    badge: "Pixel",
    category: "mobiles_tablets",
    subCategory: "google_mobiles_tablets"
  },
  {
    id: '16',
    name: "Tecno",
    imageUrl: "/products/tecno1.jpg",
    url: "/",
    badge: "Affordable",
    category: "mobiles_tablets",
    subCategory: "tecno_mobiles_tablets"
  },
  {
    id: '17',
    name: "boltt",
    imageUrl: "/products/boltt1.jpg",
    url: "/",
    badge: "Coming Soon",
    category: "mobiles_tablets",
    subCategory: "boltt_mobiles_tablets"
  },
  // Product Categories
  {
    id: '18',
    name: "Smartphones",
    imageUrl: "/products/smartphones.jpg",
    url: "/category/smartphones",
    badge: "New Arrivals",
    category: "mobiles_tablets",
    subCategory: "smartphones_mobiles_tablets"
  },
  {
    id: '19',
    name: "Tablets",
    imageUrl: "/products/tablets.jpg",
    url: "/category/tablets",
    badge: "Best Sellers",
    category: "mobiles_tablets",
    subCategory: "tablets_mobiles_tablets"
  },
  {
    id: '20',
    name: "Accessories",
    imageUrl: "/products/accessories2.jpg",
    url: "/category/accessories",
    badge: "Up to 50% Off",
    category: "mobiles_tablets",
    subCategory: "accessories_mobiles_tablets"
  },
  {
    id: '21',
    name: "Smartwatches",
    imageUrl: "/products/smartwatches.jpg",
    url: "/category/smartwatches",
    badge: "Featured",
    category: "mobiles_tablets",
    subCategory: "smartwatches_mobiles_tablets"
  },
  {
    id: '22',
    name: "E-Readers",
    imageUrl: "/products/ereaders.jpg",
    url: "/category/ereaders",
    badge: "New",
    category: "mobiles_tablets",
    subCategory: "ereaders_mobiles_tablets"
  },
  {
    id: '23',
    name: "Power Banks",
    imageUrl: "/products/powerbanks.jpg",
    url: "/category/powerbanks",
    badge: "Popular",
    category: "mobiles_tablets",
    subCategory: "power_banks_mobiles_tablets"
  },
  {
    id: '24',
    name: "Chargers",
    imageUrl: "/products/chargers.jpg",
    url: "/category/chargers",
    badge: "Essentials",
    category: "mobiles_tablets",
    subCategory: "chargers_mobiles_tablets"
  },
  {
    id: '25',
    name: "Phone Cases",
    imageUrl: "/products/phone-cases.jpg",
    url: "/category/phone-cases",
    badge: "Trending",
    category: "mobiles_tablets",
    subCategory: "phone_cases_mobiles_tablets"
  },
  {
    id: '26',
    name: "Screen Protectors",
    imageUrl: "/products/screen-protectors.jpg",
    url: "/category/screen-protectors",
    badge: "Protection",
    category: "mobiles_tablets",
    subCategory: "screen_protectors_mobiles_tablets"
  },
  {
    id: '27',
    name: "Wireless Earbuds",
    imageUrl: "/products/wireless-earbuds.jpg",
    url: "/category/wireless-earbuds",
    badge: "Wireless",
    category: "mobiles_tablets",
    subCategory: "wireless_earbuds_mobiles_tablets"
  },
  {
    id: '28',
    name: "Smart Home",
    imageUrl: "/products/smart-home.jpg",
    url: "/category/smart-home",
    badge: "Smart Tech",
    category: "mobiles_tablets",
    subCategory: "smart_home_mobiles_tablets"
  },
  {
    id: '29',
    name: "Gaming Accessories",
    imageUrl: "/products/gaming-accessories.jpg",
    url: "/category/gaming-accessories",
    badge: "Gaming",
    category: "mobiles_tablets",
    subCategory: "gaming_accessories_mobiles_tablets"
  }
];

export const slidesMobilesTablets: BannerItemContent[] = [
  {
    id: '1',
    title: '',
    subtitle: '',
    category: '',
    discount: '',
    imgUrl: '/products/1_MobilesTablets._CB773853331_3.png',
    align: 'left'
  },
  {
    id: '2',
     title: '',
    subtitle: '',
    category: '',
    discount: '',
    imgUrl: '/products/2_MobilesTablets._CB773853331_2.png',
    align: 'left'
  },
  {
    id: '3',
     title: '',
    subtitle: '',
    category: '',
    discount: '',
    imgUrl: '/products/3_MobilesTablets._CB773853331_2.png',
    align: 'left'
  },
  {
    id: '4',
     title: '',
    subtitle: '',
    category: '',
    discount: '',
    imgUrl: '/products/4_MobilesTablets._CB773853331_2.png',
    align: 'left'
  },
  // {
  //   id: '5',
  //    title: '',
  //   subtitle: '',
  //   category: '',
  //   discount: '',
  //   imgUrl: '/products/5_MobilesTablets._CB773853331_3.png',
  //   align: 'left'
  // },
  {
    id: '6',
     title: '',
    subtitle: '',
    category: '',
    discount: '',
    imgUrl: '/products/6_MobilesTablets._CB773853331_2.png',
    align: 'left'
  },
  // {
  //   id: '7',
  //    title: '',
  //   subtitle: '',
  //   category: '',
  //   discount: '',
  //   imgUrl: '/products/7_MobilesTablets._CB773853331_2.png',
  //   align: 'left'
  // }
];

export const newLauncheslidesHalfMobilesTablets: BannerItem[] = [
  {
    id: '1',
    title: '',
    imageUrl: '/products/vivo-s2.jpg',
    url: '/collections/vivo-s2-mobiles',
    discount: '',
    discount2: '',
    alt: 'vivo S2 Mobile Phones',
    badge: ''
  },
  {
    id: '2',
    title: '',
    imageUrl: '/products/google-pixel-11-pro.jpg',
    url: '/collections/google-pixel-11-pro',
    discount: '',
    discount2: '',
    alt: 'Google Pixel 11 Pro',
    badge: ''
  },
  {
    id: '3',
    title: '',
    imageUrl: '/products/realme-16x-5g.jpg',
    url: '/collections/realme-16x-5g-mobile-phones',
    discount: '',
    discount2: '',
    alt: 'realme 16X 5G Mobile Phones',
    badge: ''
  },
  {
    id: '4',
    title: '',
    imageUrl: '/products/samsung-galaxy-z-fold-8.jpg',
    url: '/collections/samsung-galaxy-z-fold-8-mobiles',
    discount: '',
    discount2: '',
    alt: 'Samsung Galaxy Z Fold 8 Mobiles',
    badge: ''
  }
];

export const bestDealsOnNoCostEMIMobilesTabletsItems = [
  {
    id: '1',
    title: 'Samsung Galaxy S25 5G',
    subtitle: 'Icy Blue, 128 GB',
    imageUrl: '/products/samsung-galaxy-s25-5g.jpg',
    link: '/'
  },
  {
    id: '2',
    title: 'OPPO K14X 5G',
    subtitle: 'Prism Violet, 64 GB',
    imageUrl: '/products/oppo-k14x-5g.jpg',
    link: '/'
  },
  {
    id: '3',
    title: 'vivo T5 Lite 44W 5G',
    subtitle: 'Twilight Shadow, 256 GB',
    imageUrl: '/products/vivo-t5-lite-44w-5g.jpg',
    link: '/'
  },
  {
    id: '4',
    title: 'motorola Edge 60 Fusion 5G',
    subtitle: 'Pantone Amazonite, 256 GB',
    imageUrl: '/products/motorola-edge-60-fusion-5g.jpg',
    link: '/'
  },
  {
    id: '5',
    title: 'Redmi Note 15 SE 5G',
    subtitle: 'Crimson Reserve, 128 GB',
    imageUrl: '/products/redmi-note-15-se-5g.jpg',
    link: '/'
  },
  {
    id: '6',
    title: 'Nothing Phone 4a',
    subtitle: 'Black, 256 GB',
    imageUrl: '/products/nothing-phone-4a.jpg',
    link: '/'
  },
  {
    id: '7',
    title: 'realme P4 Pro 5G',
    subtitle: 'Birch Wood, 128 GB',
    imageUrl: '/products/realme-p4-pro-5g.jpg',
    link: '/'
  },
  {
    id: '8',
    title: 'realme P4 Power 5G',
    subtitle: 'Transorange, 256 GB',
    imageUrl: '/products/realme-p4-power-5g.jpg',
    link: '/'
  },
  {
    id: '9',
    title: 'vivo X200T',
    subtitle: 'Stellar Black, 256 GB',
    imageUrl: '/products/vivo-x200t.jpg',
    link: '/'
  },
  {
    id: '10',
    title: 'POCO X8 Pro Max',
    subtitle: 'Black, 256 GB',
    imageUrl: '/products/poco-x8-pro-max.jpg',
    link: '/'
  },
  {
    id: '11',
    title: 'OPPO K14 5G',
    subtitle: 'Prism Violet, 128 GB',
    imageUrl: '/products/oppo-k14-5g.jpg',
    link: '/'
  },
  {
    id: '12',
    title: 'Samsung Galaxy S25 5G',
    subtitle: 'Icy Blue, 128 GB',
    imageUrl: '/products/samsung-galaxy-s25-5g1.jpg',
    link: '/'
  }
];

export const shopByBrandsMobilesTabletsCategories: CategoryItem[] = [
  {
    id: '1',
    name: 'Apple',
    imageUrl: '/products/apple.png',
    url: '/'
  },
  {
    id: '2',
    name: 'Nothing',
    imageUrl: '/products/nothing.png',
    url: '/'
  },
  {
    id: '3',
    name: 'Samsung',
    imageUrl: '/products/samsung.png',
    url: '/'
  },
  {
    id: '4',
    name: 'OPPO',
    imageUrl: '/products/oppo.png',
    url: '/'
  },
  {
    id: '5',
    name: 'realme',
    imageUrl: '/products/realme.png',
    url: '/'
  },
  {
    id: '6',
    name: 'Redmi',
    imageUrl: '/products/mi.png',
    url: '/'
  },
  {
    id: '7',
    name: 'Google',
    imageUrl: '/products/google.png',
    url: '/'
  },
  {
    id: '8',
    name: 'vivo',
    imageUrl: '/products/vivo.png',
    url: '/'
  },
  {
    id: '9',
    name: 'OnePlus',
    imageUrl: '/products/oneplus.png',
    url: '/'
  },
  {
    id: '10',
    name: 'POCO',
    imageUrl: '/products/poco.png',
    url: '/'
  },
  {
    id: '11',
    name: 'Tecno',
    imageUrl: '/products/tecno.png',
    url: '/'
  },
  {
    id: '12',
    name: 'motorola',
    imageUrl: '/products/motorola.png',
    url: '/'
  },
  {
    id: '13',
    name: 'Nokia',
    imageUrl: '/products/nokia.png',
    url: '/'
  },
  {
    id: '14',
    name: 'itel',
    imageUrl: '/products/itel.png',
    url: '/'
  },
  {
    id: '15',
    name: 'Jio',
    imageUrl: '/products/jio.png',
    url: '/'
  }
];

export const slidesHalfMobilesTablets: BannerItem[] = [
  {
    id: '1',
    title: '',
    imageUrl: '/products/realme-p4s-5g.png',
    url: '/realme-p4s-5g-coming-soon-store',
    discount: '',
    discount2: '',
    alt: 'realme P4S 5G Coming Soon',
    badge: ''
  },
  {
    id: '2',
    title: '',
    imageUrl: '/products/boltt-smartphone.jpg',
    url: '/boltt-smartphone-coming-soon-at-store',
    discount: '',
    discount2: '',
    alt: 'boltt Smartphone Coming Soon',
    badge: ''
  },
  {
    id: '3',
    title: '',
    imageUrl: '/products/boltt-evo.png',
    url: '/boltt-evo-coming-soon-store',
    discount: '',
    discount2: '',
    alt: 'boltt Evo Coming Soon',
    badge: ''
  },
  {
    id: '4',
    title: '',
    imageUrl: '/products/poco-m8x-5g.jpg',
    url: '/poco-m8x-5g-coming-soon-store',
    discount: '',
    discount2: '',
    alt: 'POCO M8X 5G Coming Soon',
    badge: ''
  }
];

export const bankOfferMobileSlide: BankOfferSlideData[] = [
  {
    id: 'axis-bank',
    title: 'Axis Bank Offer',
    subtitle: 'Bank Offer',
    description: 'Get 10% Instant Discount*',
    imageUrl: '/products/8f3k2m9x7q4w5p6a.png',
    url: '/',
    ctaText: 'Shop Now',
    discount: '10% OFF',
    alt: 'Axis Bank Offer'
  },
  {
    id: 'hdfc-bank',
    title: 'HDFC Bank Offer',
    subtitle: 'Bank Offer',
    description: 'Get 10% Instant Discount*',
    imageUrl: '/products/b4h7j1l9r3t6y8u2.png',
    url: '/',
    ctaText: 'Shop Now',
    discount: '10% OFF',
    alt: 'HDFC Bank Offer'
  },
  {
    id: 'icici-bank',
    title: 'ICICI Bank Offer',
    subtitle: 'Bank Offer',
    description: 'Get 10% Instant Discount*',
    imageUrl: '/products/c5v9n2m8x4q1w6k3.png',
    url: '/',
    ctaText: 'Shop Now',
    discount: '10% OFF',
    alt: 'ICICI Bank Offer'
  },
  {
    id: 'pnb-bank',
    title: 'PNB Bank Offer',
    subtitle: 'Bank Offer',
    description: 'Get 10% Instant Discount*',
    imageUrl: '/products/d7p3s6t9z2r5u8v1.png',
    url: '/',
    ctaText: 'Shop Now',
    discount: '10% OFF',
    alt: 'PNB Bank Offer'
  },
  {
    id: 'idfc-bank',
    title: 'IDFC Bank Offer',
    subtitle: 'Bank Offer',
    description: 'Get 10% Instant Discount*',
    imageUrl: '/products/e9f4h7k2m5q8w3t6.png',
    url: '/',
    ctaText: 'Shop Now',
    discount: '10% OFF',
    alt: 'IDFC Bank Offer'
  },
  {
    id: 'bobcard-bank',
    title: 'BOBCARD Bank Offer',
    subtitle: 'Bank Offer',
    description: 'Get 10% Instant Discount*',
    imageUrl: '/products/f2r6u9x3c7v5n8p1.png',
    url: '/',
    ctaText: 'Shop Now',
    discount: '10% OFF',
    alt: 'BOBCARD Bank Offer'
  },
  {
    id: 'dbs-bank',
    title: 'DBS Bank Offer',
    subtitle: 'Bank Offer',
    description: 'Get 10% Instant Discount*',
    imageUrl: '/products/g8t4y2m7q5w9s1k6.png',
    url: '/',
    ctaText: 'Shop Now',
    discount: '10% OFF',
    alt: 'DBS Bank Offer'
  },
  {
    id: 'kotak-bank',
    title: 'Kotak Bank Offer',
    subtitle: 'Bank Offer',
    description: 'Get 10% Instant Discount*',
    imageUrl: '/products/h3v7n1p5r9t2x6k4.png',
    url: '/',
    ctaText: 'Shop Now',
    discount: '10% OFF',
    alt: 'Kotak Bank Offer'
  },
  {
    id: 'onecard-bank',
    title: 'OneCard Offer',
    subtitle: 'Bank Offer',
    description: 'Get 10% Instant Discount*',
    imageUrl: '/products/j6s9m3k8w2q7t5v1.png',
    url: '/',
    ctaText: 'Shop Now',
    discount: '10% OFF',
    alt: 'OneCard Offer'
  },
  {
    id: 'scapia-bank',
    title: 'Scapia Bank Offer',
    subtitle: 'Bank Offer',
    description: 'Get 10% Instant Discount*',
    imageUrl: '/products/k4r8t2p6x9w3v7s5.png',
    url: '/',
    ctaText: 'Shop Now',
    discount: '10% OFF',
    alt: 'Scapia Bank Offer'
  },
  {
    id: 'yes-bank',
    title: 'YES Bank Offer',
    subtitle: 'Bank Offer',
    description: 'Get 10% Instant Discount*',
    imageUrl: '/products/l5m9n3q8w4r6t2v7.png',
    url: '/',
    ctaText: 'Shop Now',
    discount: '10% OFF',
    alt: 'YES Bank Offer'
  },
  {
    id: 'hsbc-bank',
    title: 'HSBC Bank Offer',
    subtitle: 'Bank Offer',
    description: 'Get 10% Instant Discount*',
    imageUrl: '/products/n7p4r6t9x2w5v8k3.png',
    url: '/',
    ctaText: 'Shop Now',
    discount: '10% OFF',
    alt: 'HSBC Bank Offer'
  },
  {
    id: 'jk-bank',
    title: 'J&K Bank Offer',
    subtitle: 'Bank Offer',
    description: 'Get 10% Instant Discount*',
    imageUrl: '/products/q8s5t7x2w9v4r6k1.png',
    url: '/',
    ctaText: 'Shop Now',
    discount: '10% OFF',
    alt: 'J&K Bank Offer'
  }
];

export const dealsOnExchangeMobilesTabletsItems = [
  {
    id: '1',
    title: 'Motorola Edge 70 Fusion',
    subtitle: 'Pantone Orient Blue, 128 GB',
    imageUrl: '/products/a8f3k2m9x7q4w5p6.png',
    url: '/'
  },
  {
    id: '2',
    title: 'Google Pixel 10A',
    subtitle: 'Lavender, 256 GB',
    imageUrl: '/products/b4h7j1l9r3t6y8u21.png',
    url: '/'
  },
  {
    id: '3',
    title: 'Redmi Note 15 SE 5G',
    subtitle: 'Frosted White, 128 GB',
    imageUrl: '/products/c5v9n2m8x4q1w6k312.png',
    url: '/'
  },
  {
    id: '4',
    title: 'Motorola G37 Power',
    subtitle: 'Nautical Blue, 128 GB',
    imageUrl: '/products/d7p3s6t9z2r5u8v11.png',
    url: '/'
  },
  {
    id: '5',
    title: 'POCO X8 Pro',
    subtitle: 'White, 256 GB',
    imageUrl: '/products/e9f4h7k2m5q8w3t61.png',
    url: '/'
  },
  {
    id: '6',
    title: 'realme P4 5G',
    subtitle: 'Forge Red, 128 GB',
    imageUrl: '/products/f2r6u9x3c7v5n8p11.png',
    url: '/'
  },
  {
    id: '7',
    title: 'OPPO F33 5G',
    subtitle: 'Pearl White, 128 GB',
    imageUrl: '/products/g8t4y2m7q5w9s1k61.png',
    url: '/'
  },
  {
    id: '8',
    title: 'realme P4 Lite 5G',
    subtitle: 'Mosaic Blue, 64 GB',
    imageUrl: '/products/h3v7n1p5r9t2x6k41.png',
    url: '/'
  },
  {
    id: '9',
    title: 'Motorola G77 Power',
    subtitle: 'Nautical Blue, 128 GB',
    imageUrl: '/products/j6s9m3k8w2q7t5v12.png',
    url: '/'
  },
  {
    id: '10',
    title: 'Google Pixel 10',
    subtitle: 'Obsidian, 256 GB',
    imageUrl: '/products/k4r8t2p6x9w3v7s51.png',
    url: '/'
  },
  {
    id: '11',
    title: 'Motorola Signature',
    subtitle: 'Carbon, 512 GB',
    imageUrl: '/products/l5m9n3q8w4r6t2v71.png',
    url: '/'
  },
  {
    id: '12',
    title: 'Motorola Edge 60 Pro',
    subtitle: 'Pantone Shadow, 256 GB',
    imageUrl: '/products/n7p4r6t9x2w5v8k31.png',
    url: '/'
  }
];

export const homeKitchenCarouselCategories = [
  {
    id: '1',
    name: "Monsoon",
    imageUrl: "/products/monsoon.jpg",
    url: "/",
    category: "home-kitchen",
    subCategory: "monsoon"
  },
  {
    id: '2',
    name: "Cookware",
    imageUrl: "/products/cookware.jpg",
    url: "/",
    category: "home-kitchen",
    subCategory: "cookware"
  },
  {
    id: '3',
    name: "Lighting",
    imageUrl: "/products/lighting.jpg",
    url: "/",
    category: "home-kitchen",
    subCategory: "lighting"
  },
  {
    id: '4',
    name: "Containers",
    imageUrl: "/products/containers.jpg",
    url: "/",
    category: "home-kitchen",
    subCategory: "containers"
  },
  {
    id: '5',
    name: "Drinkware",
    imageUrl: "/products/drinkware.jpg",
    url: "/",
    category: "home-kitchen",
    subCategory: "drinkware"
  },
  {
    id: '6',
    name: "Mirrors",
    imageUrl: "/products/mirrors.jpg",
    url: "/",
    category: "home-kitchen",
    subCategory: "mirrors"
  },
  {
    id: '7',
    name: "Cleaning",
    imageUrl: "/products/cleaning.jpg",
    url: "/",
    category: "home-kitchen",
    subCategory: "cleaning"
  },
  {
    id: '8',
    name: "Furnishing",
    imageUrl: "/products/furnishing.jpg",
    url: "/",
    category: "home-kitchen",
    subCategory: "furnishing"
  },
  {
    id: '9',
    name: "Utilities",
    imageUrl: "/products/utilities.jpg",
    url: "/",
    category: "home-kitchen",
    subCategory: "utilities"
  },
  {
    id: '10',
    name: "Mattress",
    imageUrl: "/products/mattress.jpg",
    url: "/",
    category: "home-kitchen",
    subCategory: "mattress"
  },
  {
    id: '11',
    name: "Beds",
    imageUrl: "/products/beds.jpg",
    url: "/",
    category: "home-kitchen",
    subCategory: "beds"
  },
  {
    id: '12',
    name: "Gardening",
    imageUrl: "/products/gardening.jpg",
    url: "/",
    category: "home-kitchen",
    subCategory: "gardening"
  },
  {
    id: '13',
    name: "Bath linen",
    imageUrl: "/products/bath-linen.jpg",
    url: "/",
    category: "home-kitchen",
    subCategory: "bath-linen"
  },
  {
    id: '14',
    name: "Locks",
    imageUrl: "/products/locks.jpg",
    url: "/",
    category: "home-kitchen",
    subCategory: "locks"
  },
  {
    id: '15',
    name: "Rakhi",
    imageUrl: "/products/rakhi.jpg",
    url: "/",
    category: "home-kitchen",
    subCategory: "rakhi"
  },
  {
    id: '16',
    name: "Decor",
    imageUrl: "/products/decor.jpg",
    url: "/",
    category: "home-kitchen",
    subCategory: "decor"
  },
  {
    id: '17',
    name: "Mosquito nets",
    imageUrl: "/products/mosquito-nets.jpg",
    url: "/",
    category: "home-kitchen",
    subCategory: "mosquito-nets"
  },
  {
    id: '18',
    name: "Bedsheets",
    imageUrl: "/products/bedsheets.jpg",
    url: "/",
    category: "home-kitchen",
    subCategory: "bedsheets"
  },
  {
    id: '19',
    name: "Pooja needs",
    imageUrl: "/products/pooja-needs.jpg",
    url: "/",
    category: "home-kitchen",
    subCategory: "pooja-needs"
  },
  {
    id: '20',
    name: "Dining",
    imageUrl: "/products/dining.jpg",
    url: "/",
    category: "home-kitchen",
    subCategory: "dining"
  },
  {
    id: '21',
    name: "Wallpaper",
    imageUrl: "/products/wallpaper.jpg",
    url: "/",
    category: "home-kitchen",
    subCategory: "wallpaper"
  },
  {
    id: '22',
    name: "Electrical",
    imageUrl: "/products/electrical.jpg",
    url: "/",
    category: "home-kitchen",
    subCategory: "electrical"
  },
  {
    id: '23',
    name: "Hardware",
    imageUrl: "/products/hardware.jpg",
    url: "/",
    category: "home-kitchen",
    subCategory: "hardware"
  },
  {
    id: '24',
    name: "Covers",
    imageUrl: "/products/covers.jpg",
    url: "/",
    category: "home-kitchen",
    subCategory: "covers"
  },
  {
    id: '25',
    name: "Sofas",
    imageUrl: "/products/sofas.jpg",
    url: "/",
    category: "home-kitchen",
    subCategory: "sofas"
  },
  {
    id: '26',
    name: "Mats & rugs",
    imageUrl: "/products/mats-rugs.jpg",
    url: "/",
    category: "home-kitchen",
    subCategory: "mats-rugs"
  },
  {
    id: '27',
    name: "Bathroom",
    imageUrl: "/products/bathroom.jpg",
    url: "/",
    category: "home-kitchen",
    subCategory: "bathroom"
  },
  {
    id: '28',
    name: "Comforters",
    imageUrl: "/products/comforters.jpg",
    url: "/",
    category: "home-kitchen",
    subCategory: "comforters"
  }
];

export const slidesHomeKitchen: BannerItemContent[] = [
  {
    id: '1',
    title: '',
    subtitle: '',
    category: '',
    discount: '',
    imgUrl: '/products/HomeKitchen_1.png',
    align: 'left'
  },
  {
    id: '2',
    title: '',
    subtitle: '',
    category: '',
    discount: '',
    imgUrl: '/products/HomeKitchen_2.png',
    align: 'left'
  },
  {
    id: '3',
   title: '',
    subtitle: '',
    category: '',
    discount: '',
    imgUrl: '/products/HomeKitchen_3.png',
    align: 'left'
  },
  {
    id: '4',
   title: '',
    subtitle: '',
    category: '',
    discount: '',
    imgUrl: '/products/HomeKitchen_4.png',
    align: 'left'
  },
  {
    id: '5',
    title: '',
    subtitle: '',
    category: '',
    discount: '',
    imgUrl: '/products/HomeKitchen_5.png',
    align: 'left'
  },
  {
    id: '6',
    title: '',
    subtitle: '',
    category: '',
    discount: '',
    imgUrl: '/products/HomeKitchen_6.png',
    align: 'left'
  },
  {
    id: '7',
    title: '',
    subtitle: '',
    category: '',
    discount: '',
    imgUrl: '/products/HomeKitchen_7.png',
    align: 'left'
  },
  {
    id: '8',
    title: '',
    subtitle: '',
    category: '',
    discount: '',
    imgUrl: '/products/HomeKitchen_8.png',
    align: 'left'
  },
  {
    id: '9',
    title: '',
    subtitle: '',
    category: '',
    discount: '',
    imgUrl: '/products/HomeKitchen_9.png',
    align: 'left'
  },
];

export const grabOrGoneHomeKitchenItems = [
  {
    id: '1',
    title: 'Sofa & Chair Covers',
    subtitle: 'HOKiPO',
    imageUrl: '/products/sofa-chair-covers.jpg',
    link: '/'
  },
  {
    id: '2',
    title: 'Wardrobes',
    subtitle: 'Nilkamal',
    imageUrl: '/products/wardrobes.jpg',
    link: '/'
  },
  {
    id: '3',
    title: 'Wall Clocks',
    subtitle: 'AJANTA',
    imageUrl: '/products/wall-clocks.jpg',
    link: '/'
  },
  {
    id: '4',
    title: 'Bedsheets',
    subtitle: 'Raymond Home',
    imageUrl: '/products/bedsheets-raymond.jpg',
    link: '/'
  },
  {
    id: '5',
    title: 'Bathroom Fittings',
    subtitle: 'Hindware',
    imageUrl: '/products/bathroom-fittings.jpg',
    link: '/'
  },
  {
    id: '6',
    title: 'Solar Panels',
    subtitle: '',
    imageUrl: '/products/solar-panels.jpg',
    link: '/'
  },
  {
    id: '7',
    title: 'Lighting',
    subtitle: 'MURPHY',
    imageUrl: '/products/lighting-murphy.jpg',
    link: '/'
  },
  {
    id: '8',
    title: 'Kitchen Cookware',
    subtitle: 'Prestige',
    imageUrl: '/products/kitchen-prestige.jpg',
    link: '/'
  },
  {
    id: '9',
    title: 'Kitchen Serveware',
    subtitle: 'MILTON',
    imageUrl: '/products/kitchen-milton.jpg',
    link: '/'
  },
  {
    id: '10',
    title: 'Commode & Wash Basin',
    subtitle: '',
    imageUrl: '/products/commode-washbasin.jpg',
    link: '/'
  }
];

export const monsoonDealsHomeKitchenItems = [
  {
    id: '1',
    title: 'Umbrellas',
    subtitle: '',
    imageUrl: '/products/umbrellas.jpg',
    link: '/'
  },
  {
    id: '2',
    title: 'Mosquito Nets',
    subtitle: '',
    imageUrl: '/products/mosquito_nets.jpg',
    link: '/'
  },
  {
    id: '3',
    title: 'Cloth Dryer Stands',
    subtitle: '',
    imageUrl: '/products/cloth-dryer-stands.jpg',
    link: '/'
  },
  {
    id: '4',
    title: 'Floor Coverings',
    subtitle: '',
    imageUrl: '/products/floor-coverings.jpg',
    link: '/'
  },
  {
    id: '5',
    title: 'Door Stoppers',
    subtitle: '',
    imageUrl: '/products/door-stoppers.jpg',
    link: '/'
  },
  {
    id: '6',
    title: 'Torches',
    subtitle: '',
    imageUrl: '/products/torches.jpg',
    link: '/'
  },
  {
    id: '7',
    title: 'Emergency Lights',
    subtitle: '',
    imageUrl: '/products/emergency-lights.jpg',
    link: '/'
  },
  {
    id: '8',
    title: 'Bath Linen',
    subtitle: '',
    imageUrl: '/products/bath_linen.jpg',
    link: '/'
  },
  {
    id: '9',
    title: 'Mosquito Killers',
    subtitle: '',
    imageUrl: '/products/mosquito-killers.jpg',
    link: '/'
  },
  {
    id: '10',
    title: 'Flasks',
    subtitle: '',
    imageUrl: '/products/flasks.jpg',
    link: '/'
  },
  {
    id: '11',
    title: 'Dinner Sets',
    subtitle: '',
    imageUrl: '/products/dinner-sets.jpg',
    link: '/'
  },
  {
    id: '12',
    title: 'Cookware Range',
    subtitle: '',
    imageUrl: '/products/cookware-range.jpg',
    link: '/'
  }
];

export const favoriteStoresHomeKitchenItems = [
  {
    id: '1',
    title: 'Budget Store',
    subtitle: '',
    imageUrl: '/products/budget-store.gif',
    link: '/'
  },
  {
    id: '2',
    title: 'Customers Most Loved',
    subtitle: '',
    imageUrl: '/products/customers-most-loved.gif',
    link: '/'
  },
  {
    id: '3',
    title: 'Bestseller Store',
    subtitle: '',
    imageUrl: '/products/bestseller-store.gif',
    link: '/'
  },
  {
    id: '4',
    title: 'New Launches',
    subtitle: '',
    imageUrl: '/products/new-launches.gif',
    link: '/'
  },
  {
    id: '5',
    title: 'Clearance Store',
    subtitle: '',
    imageUrl: '/products/clearance-store.gif',
    link: '/'
  },
  {
    id: '6',
    title: 'Redesign Your Home',
    subtitle: '',
    imageUrl: '/products/redesign-your-home.gif',
    link: '/'
  },
  {
    id: '7',
    title: 'Everything Store',
    subtitle: '',
    imageUrl: '/products/everything-store.gif',
    link: '/'
  },
  {
    id: '8',
    title: 'Restock & Replenish',
    subtitle: '',
    imageUrl: '/products/restock-replenish.gif',
    link: '/'
  }
];

export const discoverTrendingBrandsHomeKitchenItems = [
  {
    id: '1',
    title: 'Wipro',
    subtitle: 'Home',
    imageUrl: '/products/wipro.png',
    link: '/'
  },
  {
    id: '2',
    title: 'Alton',
    subtitle: 'Home Improvement',
    imageUrl: '/products/alton.png',
    link: '/'
  },
  {
    id: '3',
    title: 'Boldfit',
    subtitle: 'Sports',
    imageUrl: '/products/boldfit.png',
    link: '/'
  },
  {
    id: '4',
    title: 'BSB Home',
    subtitle: 'Home',
    imageUrl: '/products/bsb-home.png',
    link: '/'
  },
  {
    id: '5',
    title: 'Kohler',
    subtitle: 'Home Improvement',
    imageUrl: '/products/kohler.png',
    link: '/'
  },
  {
    id: '6',
    title: 'Halonix',
    subtitle: 'Home',
    imageUrl: '/products/halonix.png',
    link: '/'
  }
];

export const slidesHalfFlower: BannerItem[] = [
  {
    id: '0',
    title: '',
    imageUrl: '/products/birthday.png',
    url: '/',
    discount: '',
    discount2: '',
    alt: 'View birthday international',
    badge: ''
  },
  {
    id: '1',
    title: '',
    imageUrl: '/products/anniversary.png',
    url: '/',
    discount: '',
    discount2: '',
    alt: 'View anniversary',
    badge: ''
  },
  {
    id: '2',
    title: '',
    imageUrl: '/products/congratulations.png',
    url: '/',
    discount: '',
    discount2: '',
    alt: 'View congratulations',
    badge: ''
  },
  {
    id: '3',
    title: '',
    imageUrl: '/products/thank-you.png',
    url: '/',
    discount: '',
    discount2: '',
    alt: 'View thank you',
    badge: ''
  },
  {
    id: '4',
    title: '',
    imageUrl: '/products/baby-shower.png',
    url: '/',
    discount: '',
    discount2: '',
    alt: 'View baby shower',
    badge: ''
  },
  {
    id: '5',
    title: '',
    imageUrl: '/products/house-warming.png',
    url: '/',
    discount: '',
    discount2: '',
    alt: 'View house warming',
    badge: ''
  },
  {
    id: '6',
    title: '',
    imageUrl: '/products/retirement.png',
    url: '/',
    discount: '',
    discount2: '',
    alt: 'View retirement',
    badge: ''
  },
  {
    id: '7',
    title: '',
    imageUrl: '/products/rakhi-international.png',
    url: '/',
    discount: '',
    discount2: '',
    alt: 'View rakhi international',
    badge: ''
  },
  
];

export const slidesHalfFlowerShopByOccasionsRelations: BannerItem[] = [
  {
    id: '0',
    title: 'Birthday Gifts',
    imageUrl: '/products/birthdayGifts.png',
    url: '/',
    discount: '',
    discount2: '',
    alt: 'Send Birthday Gifts Through FlowerAura',
    badge: ''
  },
  {
    id: '1',
    title: 'Anniversary Gifts',
    imageUrl: '/products/anniversaryGifts.png',
    url: '/',
    discount: '',
    discount2: '',
    alt: 'Send Anniversary Gifts in India',
    badge: ''
  },
  {
    id: '2',
    title: 'Gifts for Him',
    imageUrl: '/products/gifts-for-himGifts.png',
    url: '/',
    discount: '',
    discount2: '',
    alt: 'Online Gift for Him',
    badge: ''
  },
  {
    id: '3',
    title: 'Gifts for Her',
    imageUrl: '/products/gifts-for-herGifts.png',
    url: '/',
    discount: '',
    discount2: '',
    alt: 'Send Gifts for Her Through FlowerAura',
    badge: ''
  }
];

export const categoriesDataCardHalfDynamic = [
  {
    id: '1',
    title: 'Delicious Cakes',
    imageUrl: '/products/DeliciousCakes.jpg',
    alt: 'Delicious Cakes',
    links: [
      { title: 'Birthday Cakes', url: '/birthday/cakes' },
      { title: 'Anniversary Cakes', url: '/anniversary/cakes' },
      { title: 'Designer Cakes', url: '/cakes/designer' },
      { title: 'Photo Cakes', url: '/cakes/photo' },
      { title: 'Chocolate Cakes', url: '/cakes/chocolate' },
    ],
  },
  {
    id: '2',
    title: 'Gifting Gallery',
    imageUrl: '/products/GiftingGallery.jpg',
    alt: 'Gifting Gallery',
    links: [
      { title: 'Photo Gifts', url: '/gifts/photo-gifts' },
      { title: 'Mugs', url: '/gifts/mugs' },
      { title: 'Cushions', url: '/gifts/cushions' },
      { title: 'Name Gifts', url: '/personalised-gifts/name-gifts' },
      { title: 'Caricatures', url: '/personalised-gifts/caricatures' },
    ],
  },
  {
    id: '3',
    title: 'Floral Delights',
    imageUrl: '/products/FloralDelights.jpg',
    alt: 'Floral Delights',
    links: [
      { title: 'Red Roses', url: '/flowers/roses' },
      { title: 'Birthday Flowers', url: '/birthday/flowers' },
      { title: 'Anniversary Flowers', url: '/anniversary/flowers' },
      { title: 'Exotic Flowers', url: '/flowers/exotic' },
      { title: 'Flower Boxes', url: '/flowers/in-box' },
    ],
  },
  {
    id: '4',
    title: 'Plant Paradise',
    imageUrl: '/products/PlantParadise.jpg',
    alt: 'Plant Paradise',
    links: [
      { title: 'Bonsai', url: '/plants/bonsai' },
      { title: 'Indoor', url: '/plants/indoor' },
      { title: 'Air Purifying', url: '/plants/air-purifying' },
      { title: 'Lucky Bamboo', url: '/plants/lucky-bamboo' },
      { title: 'Flowering', url: '/plants/flowering' },
    ],
  },
];

export const customerTestimonialDataFlower = [
  {
    id: '1',
    name: 'Vr Kiran',
    rating: 5,
    comment: 'My sister loved it. And they helped me shift the delivery date a day before. Great experience',
    date: '19/07/2026',
    isVerified: true,
  },
  {
    id: '2',
    name: 'pgdavid75',
    rating: 5,
    comment: 'The recipient was very happy to receive the flowers and said it was fresh and beautiful. thank you flower aura.',
    date: '18/07/2026',
    isVerified: true,
  },
  {
    id: '3',
    name: 'aishasithika21',
    rating: 5,
    comment: 'Ive been ordering from flower aura for past few months now, it became a constant to go choice. Always the fresh flowers and the way you guys design it is sooo prefect. And mainly Price is very fair not very expensive...',
    date: '13/07/2026',
    isVerified: true,
  },
  // ... more testimonials
];

export const slidesHalfFlowerGift: BannerItem[] = [
 
  {
    id: '1',
    title: 'Flowers',
    imageUrl: '/products/flowersGift.png',
    url: '/',
    discount: '',
    discount2: '',
    alt: 'Flowers',
    badge: ''
  },
  {
    id: '2',
    title: 'Birthday',
    imageUrl: '/products/birthdayGift.png',
    url: '/',
    discount: '',
    discount2: '',
    alt: 'Birthday',
    badge: ''
  },
  {
    id: '3',
    title: 'Anniversary',
    imageUrl: '/products/anniversaryGift.png',
    url: '/',
    discount: '',
    discount2: '',
    alt: 'Anniversary',
    badge: ''
  },
  {
    id: '4',
    title: 'Corporate Gifts',
    imageUrl: '/products/corporate-giftsGift.png',
    url: '/',
    discount: '',
    discount2: '',
    alt: 'Corporate Gifts',
    badge: ''
  }
];

export const slidesHalfFlowerBouquetsForThem: BannerItem[] = [
  {
    id: '0',
    title: '',
    imageUrl: '/products/flowers-for-her.png',
    url: '/',
    discount: '',
    discount2: '',
    alt: 'Flowers for Her',
    badge: ''
  },
  {
    id: '1',
    title: '',
    imageUrl: '/products/flowers-for-him.png',
    url: '/',
    discount: '',
    discount2: '',
    alt: 'Flowers for Him',
    badge: ''
  }
];

export const categoriesInternationalFlowerDeliveryData = [
  {
    id: '1',
    title: 'India',
    imageUrl: '/products/indiaFlowerDelivery.png',
    alt: 'India',
    url: '/all-flowers'
  },
  {
    id: '2',
    title: 'United States',
    imageUrl: '/products/united-statesFlowerDelivery.png',
    alt: 'Send Flowers to USA',
    url: '/usa/flowers'
  },
  {
    id: '3',
    title: 'UAE',
    imageUrl: '/products/uaeFlowerDelivery.png',
    alt: 'UAE',
    url: '/uae/flowers'
  },
  {
    id: '4',
    title: 'UK',
    imageUrl: '/products/ukFlowerDelivery.png',
    alt: 'Send Flowers to UK',
    url: '/uk/flowers'
  },
  {
    id: '5',
    title: 'Canada',
    imageUrl: '/products/canadaFlowerDelivery.png',
    alt: 'Send Flowers to Canada',
    url: '/canada/flowers'
  },
  {
    id: '6',
    title: 'Australia',
    imageUrl: '/products/australiaFlowerDelivery.png',
    alt: 'Send Flower to Australia',
    url: '/australia/flowers'
  },
  {
    id: '7',
    title: 'Singapore',
    imageUrl: '/products/singaporeFlowerDelivery.png',
    alt: 'Flower Delivery Singapore',
    url: '/singapore/flowers'
  },
  {
    id: '8',
    title: 'Germany',
    imageUrl: '/products/germanyFlowerDelivery.png',
    alt: 'Send Flowers To Germany',
    url: '/germany/flowers'
  },
  {
    id: '9',
    title: 'New Zealand',
    imageUrl: '/products/new-zealandFlowerDelivery.png',
    alt: 'New Zealand',
    url: '/new-zealand/flowers'
  },
  {
    id: '10',
    title: 'Netherlands',
    imageUrl: '/products/netherlandsFlowerDelivery.png',
    alt: 'Netherlands',
    url: '/netherlands/flowers'
  }
];
