import { FoodCategoryInterface } from "@/components/FoodDelivery/FoodDesigns/FoodCategoryList/FoodCategoryList";
import { DiningItem } from "@/components/FoodDelivery/FoodDesigns/FoodDineOutDiscover/FoodDineOutDiscover";
import { RestaurantItemFoodInterface } from "@/components/FoodDelivery/FoodDesigns/OrderNowItemsListCard/OrderNowItemsListCard";
import { TopBrandInterface } from "@/components/FoodDelivery/FoodDesigns/TopBrandsFood/TopBrandsFood";
import { SubHeaderItem } from "@/components/Header/SubHeader/SubHeader";

export interface FoodCategoryItem {
  id: string;
  name: string;
  image: string;
  imageUrl: string;
  slug: string;
  url: string;
  cuisine?: string;
  deliveryTime?: string;
  // ... other properties
}

export const FoodsCategories = [
  // {
  //   name: "All",
  //   imageUrl: "/products/all_food.png",
  //   url: "/"
  // },
  {
    name: "Diet",
    imageUrl: "/products/diet_food.png",
    url: "/"
  },
  {
    name: "Pizzas",
    imageUrl: "/products/pizzas_food.png",
    url: "/"
  },
  {
    name: "Cakes",
    imageUrl: "/products/cakes_food.png",
    url: "/"
  },
  {
    name: "Momos",
    imageUrl: "/products/momos_food.png",
    url: "/"
  },
  {
    name: "Rolls",
    imageUrl: "/products/rolls_food.png",
    url: "/"
  },
  {
    name: "Burgers",
    imageUrl: "/products/burgers_food.png",
    url: "/"
  },
  {
    name: "Chole Bhat",
    imageUrl: "/products/chole_bhature_food.png",
    url: "/"
  },
  {
    name: "Salad",
    imageUrl: "/products/salad_food.png",
    url: "/"
  },
  {
    name: "Patty",
    imageUrl: "/products/patty_food.png",
    url: "/"
  },
  {
    name: "Chinese",
    imageUrl: "/products/chinese_food.png",
    url: "/"
  },
  {
    name: "Ice Cream",
    imageUrl: "/products/ice_cream_food.png",
    url: "/"
  },
  {
    name: "Appam",
    imageUrl: "/products/appam_food.png",
    url: "/"
  },
  {
    name: "Bath",
    imageUrl: "/products/bath_food.png",
    url: "/"
  },
  {
    name: "Bonda",
    imageUrl: "/products/bonda_food.png",
    url: "/"
  },
  {
    name: "Cutlet",
    imageUrl: "/products/cutlet_food.png",
    url: "/"
  },
  {
    name: "Dessert",
    imageUrl: "/products/dessert_food.png",
    url: "/"
  },
  {
    name: "Dhokla",
    imageUrl: "/products/dhokla_food.png",
    url: "/"
  },
  {
    name: "Dosa",
    imageUrl: "/products/dosa_food.png",
    url: "/"
  },
  {
    name: "Dholda",
    imageUrl: "/products/dholda_food.png",
    url: "/"
  },
  {
    name: "Gulab Jam.",
    imageUrl: "/products/gulab_jamun_food.png",
    url: "/"
  },
  {
    name: "Idli",
    imageUrl: "/products/idli_food.png",
    url: "/"
  },
  {
    name: "Biryani",
    imageUrl: "/products/biryani_food.png",
    url: "/"
  },
  {
    name: "Thali",
    imageUrl: "/products/thali_food.png",
    url: "/"
  },
  {
    name: "Chicken",
    imageUrl: "/products/chicken_food.png",
    url: "/"
  },
  {
    name: "Veg Meal",
    imageUrl: "/products/veg_meal_food.png",
    url: "/"
  },
  {
    name: "North Indian",
    imageUrl: "/products/north_indian_food.png",
    url: "/"
  },
  {
    name: "Paneer",
    imageUrl: "/products/paneer_food.png",
    url: "/"
  },
  {
    name: "Fried Rice",
    imageUrl: "/products/fried_rice_food.png",
    url: "/"
  },
  {
    name: "Noodles",
    imageUrl: "/products/noodles_food.png",
    url: "/"
  },
  {
    name: "Paratha",
    imageUrl: "/products/paratha_food.png",
    url: "/"
  },
  {
    name: "Shawarma",
    imageUrl: "/products/shawarma_food.png",
    url: "/"
  },
  {
    name: "South Indian",
    imageUrl: "/products/south_indian_food.png",
    url: "/"
  },
  {
    name: "Aloo Tikki",
    imageUrl: "/products/aloo_tikki_food.png",
    url: "/"
  },
  {
    name: "Pasta",
    imageUrl: "/products/pasta_food.png",
    url: "/"
  },
  {
    name: "Pastry",
    imageUrl: "/products/pastry_food.png",
    url: "/"
  },
  {
    name: "Pav Bhaji",
    imageUrl: "/products/pav_bhaji_food.png",
    url: "/"
  },
  {
    name: "Sandwich",
    imageUrl: "/products/sandwich_food.png",
    url: "/"
  },
  {
    name: "Shake",
    imageUrl: "/products/shake_food.png",
    url: "/"
  },
  {
    name: "Samosa",
    imageUrl: "/products/samosa_food.png",
    url: "/"
  },
  {
    name: "Poori",
    imageUrl: "/products/poori_food.png",
    url: "/"
  },
  {
    name: "Bowl",
    imageUrl: "/products/bowl_food.png",
    url: "/"
  },
  {
    name: "Poha",
    imageUrl: "/products/poha_food.png",
    url: "/"
  },
  {
    name: "Sweets",
    imageUrl: "/products/sweets_food.png",
    url: "/"
  },
  {
    name: "Chole Poori",
    imageUrl: "/products/chole_poori_food.png",
    url: "/"
  },
  {
    name: "Khichdi",
    imageUrl: "/products/khichdi_food.png",
    url: "/"
  },
  {
    name: "Chilli Chick.",
    imageUrl: "/products/chilli_chicken_food.png",
    url: "/"
  },
  {
    name: "Tea",
    imageUrl: "/products/tea_food.png",
    url: "/"
  },
  {
    name: "Vada Pav",
    imageUrl: "/products/vada_pav_food.png",
    url: "/"
  },
  {
    name: "Masala Mag.",
    imageUrl: "/products/masala_maggi_food.png",
    url: "/"
  },
  {
    name: "Kulche",
    imageUrl: "/products/kulche_food.png",
    url: "/"
  },
  {
    name: "Wings",
    imageUrl: "/products/wings_food.png",
    url: "/"
  },
  {
    name: "Aloo Poori",
    imageUrl: "/products/aloo_poori_food.png",
    url: "/"
  },
  {
    name: "Omelette",
    imageUrl: "/products/omelette_food.png",
    url: "/"
  },
  {
    name: "Non Veg",
    imageUrl: "/products/non_veg_meal_food.png",
    url: "/"
  },
  {
    name: "Bread Pak.",
    imageUrl: "/products/bread_pakoda_food.png",
    url: "/"
  },
  {
    name: "Coffee",
    imageUrl: "/products/coffee_food.png",
    url: "/"
  },
  {
    name: "Poori Bhaji",
    imageUrl: "/products/poori_bhaji_food.png",
    url: "/"
  },
  {
    name: "Pulao",
    imageUrl: "/products/pulao_food.png",
    url: "/"
  },
  {
    name: "Chur Naan",
    imageUrl: "/products/chur_chur_naan_food.png",
    url: "/"
  },
  {
    name: "Kebabs",
    imageUrl: "/products/kebabs_food.png",
    url: "/"
  },
  {
    name: "Panipuri",
    imageUrl: "/products/panipuri_food.png",
    url: "/"
  },
  {
    name: "Rasmalai",
    imageUrl: "/products/rasmalai_food.png",
    url: "/"
  },
  {
    name: "Mutton",
    imageUrl: "/products/mutton_food.png",
    url: "/"
  },
  {
    name: "Fish",
    imageUrl: "/products/fish_food.png",
    url: "/"
  },
  {
    name: "Pakoda",
    imageUrl: "/products/pakoda_food.png",
    url: "/"
  },
  {
    name: "Halwa",
    imageUrl: "/products/halwa_food.png",
    url: "/"
  },
  {
    name: "Chop Suey",
    imageUrl: "/products/chop_suey_food.png",
    url: "/"
  },
  {
    name: "Korma",
    imageUrl: "/products/korma_food.png",
    url: "/"
  },
  {
    name: "Namkeen",
    imageUrl: "/products/namkeen_food.png",
    url: "/"
  },
  {
    name: "Mushrooms",
    imageUrl: "/products/mushrooms_food.png",
    url: "/"
  },
  {
    name: "Keema",
    imageUrl: "/products/keema_food.png",
    url: "/"
  },
  {
    name: "Sundae",
    imageUrl: "/products/sundae_food.png",
    url: "/"
  },
  {
    name: "Rasgulla",
    imageUrl: "/products/rasgulla_food.png",
    url: "/"
  },
  {
    name: "Butter Chic.",
    imageUrl: "/products/butter_chicken_food.png",
    url: "/"
  },
  {
    name: "Raj Kachori",
    imageUrl: "/products/raj_kachori_food.png",
    url: "/"
  },
  {
    name: "Chaat",
    imageUrl: "/products/chaat_food.png",
    url: "/"
  },
  {
    name: "Uttapam",
    imageUrl: "/products/uttapam_food.png",
    url: "/"
  },
  {
    name: "Doughnut",
    imageUrl: "/products/doughnut_food.png",
    url: "/"
  },
  {
    name: "Juice",
    imageUrl: "/products/juice_food.png",
    url: "/"
  },
  {
    name: "Lassi",
    imageUrl: "/products/lassi_food.png",
    url: "/"
  },
  {
    name: "Malai Kofta",
    imageUrl: "/products/malai_kofta_food.png",
    url: "/"
  },
  {
    name: "Dahi Balle",
    imageUrl: "/products/dahi_balle_food.png",
    url: "/"
  },
  {
    name: "Rajma",
    imageUrl: "/products/rajma_food.png",
    url: "/"
  },
  {
    name: "Chicken Ha.",
    imageUrl: "/products/chicken_handi_food.png",
    url: "/"
  },
  {
    name: "Cupcake",
    imageUrl: "/products/cupcake_food.png",
    url: "/"
  },
  {
    name: "Bhel",
    imageUrl: "/products/bhel_food.png",
    url: "/"
  },
  {
    name: "Muffin",
    imageUrl: "/products/muffin_food.png",
    url: "/"
  },
  {
    name: "Cookies",
    imageUrl: "/products/cookies_food.png",
    url: "/"
  },
  {
    name: "Chicken Ch.",
    imageUrl: "/products/chicken_cha_food.png",
    url: "/"
  },
  {
    name: "Paneer Kul.",
    imageUrl: "/products/paneer_kulche_food.png",
    url: "/"
  },
  {
    name: "Chaach",
    imageUrl: "/products/chaach_food.png",
    url: "/"
  },
  {
    name: "Veg Lollipop",
    imageUrl: "/products/veg_lollipop_food.png",
    url: "/"
  },
  {
    name: "Sub",
    imageUrl: "/products/sub_food.png",
    url: "/"
  },
  {
    name: "Pancake",
    imageUrl: "/products/pancake_food.png",
    url: "/"
  },
  {
    name: "Nihari",
    imageUrl: "/products/nihari_food.png",
    url: "/"
  },
  {
    name: "Tacos",
    imageUrl: "/products/tacos_food.png",
    url: "/"
  },
  {
    name: "Thepla",
    imageUrl: "/products/thepla_food.png",
    url: "/"
  },
  {
    name: "Fafda",
    imageUrl: "/products/fafda_food.png",
    url: "/"
  },
  {
    name: "Chocolate",
    imageUrl: "/products/chocolate_food.png",
    url: "/"
  },
  {
    name: "Curd Rice",
    imageUrl: "/products/curd_rice_food.png",
    url: "/"
  },
  {
    name: "Pudding",
    imageUrl: "/products/pudding_food.png",
    url: "/"
  },
  {
    name: "Croissant",
    imageUrl: "/products/croissant_food.png",
    url: "/"
  },
  {
    name: "Khandvi",
    imageUrl: "/products/khandvi_food.png",
    url: "/"
  },
  {
    name: "Gajak",
    imageUrl: "/products/gajak_food.png",
    url: "/"
  },
  {
    name: "Sambar Rice",
    imageUrl: "/products/sambar_rice_food.png",
    url: "/"
  },
  {
    name: "Tart",
    imageUrl: "/products/tart_food.png",
    url: "/"
  },
  {
    name: "Tiramisu",
    imageUrl: "/products/tiramisu_food.png",
    url: "/"
  },
  {
    name: "Pie",
    imageUrl: "/products/pie_food.png",
    url: "/"
  },
  {
    name: "Custard",
    imageUrl: "/products/custard_food.png",
    url: "/"
  },
  {
    name: "Sev Poori",
    imageUrl: "/products/sev_poori_food.png",
    url: "/"
  },
  {
    name: "Mousse",
    imageUrl: "/products/mousse_food.png",
    url: "/"
  },
  {
    name: "Dal Kachori",
    imageUrl: "/products/dal_kachori_food.png",
    url: "/"
  },
  {
    name: "Jalebi",
    imageUrl: "/products/jalebi_food.png",
    url: "/"
  },
  {
    name: "Pyaaj Kach.",
    imageUrl: "/products/pyaaj_kachori_food.png",
    url: "/"
  },
  {
    name: "Rajma Rice",
    imageUrl: "/products/rajma_rice_food.png",
    url: "/"
  },
  {
    name: "Upma",
    imageUrl: "/products/upma_food.png",
    url: "/"
  },
  {
    name: "Manchurian",
    imageUrl: "/products/manchurian_food.png",
    url: "/"
  },
  {
    name: "Paneer Pak",
    imageUrl: "/products/paneer_pakoda_food.png",
    url: "/"
  },
  {
    name: "Cheesecake",
    imageUrl: "/products/cheesecake_food.png",
    url: "/"
  },
  {
    name: "Brownie",
    imageUrl: "/products/brownie_food.png",
    url: "/"
  },
  {
    name: "Chaap",
    imageUrl: "/products/chaap_food.png",
    url: "/"
  },
  {
    name: "Dal",
    imageUrl: "/products/dal_food.png",
    url: "/"
  },
  {
    name: "Waffles",
    imageUrl: "/products/waffles_food.png",
    url: "/"
  },
  {
    name: "Aloo Kach.",
    imageUrl: "/products/aloo_kachori_food.png",
    url: "/"
  },
  {
    name: "Chole Kul.",
    imageUrl: "/products/chole_kulche_food.png",
    url: "/"
  },
  {
    name: "Fries",
    imageUrl: "/products/fries_food.png",
    url: "/"
  },
  {
    name: "Cold Coffee",
    imageUrl: "/products/cold_coffee_food.png",
    url: "/"
  },
  {
    name: "Soup",
    imageUrl: "/products/soup_food.png",
    url: "/"
  },
  {
    name: "Bhurji",
    imageUrl: "/products/bhurji_food.png",
    url: "/"
  },
  {
    name: "Khasta Kac.",
    imageUrl: "/products/khasta_kachori_food.png",
    url: "/"
  },
  {
    name: "Hot Dog",
    imageUrl: "/products/hot_dog_food.png",
    url: "/"
  },
  // {
  //   name: "See All",
  //   imageUrl: "/products/see_all_food.png",
  //   url: "/"
  // }
];

// export const FoodsCategories = [
//   {
//     name: "Masala Bhelpuri",
//     imageUrl: "/products/Bhelpuri.png",
//     url: "/",
//   },
//   {
//     name: "Double Egg Sandwich",
//     imageUrl: "/products/DoubleEggCheeseSandwich.png",
//     url: "/",
//   },
//   {
//     name: "Tiramisu Order",
//     imageUrl: "/products/Tiramisu.png",
//     url: "/",
//   },
//   {
//     name: "Chicken Puff",
//     imageUrl: "/products/ChickenPuff.png",
//     url: "/",
//   },
//   {
//     name: "Veg Puff Order",
//     imageUrl: "/products/VegPuff.png",
//     url: "/",
//   },
//   {
//     name: "Choco Walnut",
//     imageUrl: "/products/ChocoWalnutBrownie.png",
//     url: "/",
//   },
//   {
//     name: "Masala Maggi",
//     imageUrl: "/products/ChickenMasalaMaggi.png",
//     url: "/",
//   },
//   {
//     name: "Bull's-eye egg - 2Pcs",
//     imageUrl: "/products/Bullseyeegg2Pcs.png",
//     url: "/",
//   },
//   {
//     name: "Plain Curd Matka",
//     imageUrl: "/products/PlainCurd.png",
//     url: "/",
//   },
//   {
//     name: "Mint Mojito Fizzy cooler",
//     imageUrl: "/products/MintMojitoFizzycooler.png",
//     url: "/",
//   },
//   {
//     name: "Pepper Maggi",
//     imageUrl: "/products/BlackPepperMaggiwithPeanuts.png",
//     url: "/",
//   },
//   {
//     name: "250 ml Cold Coffee",
//     imageUrl: "/products/250mlColdCoffee.png",
//     url: "/",
//   },
// ];

export const foodCategoriesSubHeader: SubHeaderItem[] = [
  { name: "All", id: "all_sub_header", url: "/", category: "all" },
  
  // Quick Actions
  { name: "Order Now", id: "order_now_sub_header", url: "/order-now", category: "order_now_food" },
  { name: "Dine Out", id: "dine_out_sub_header", url: "/dine-out", category: "dine_out_food" },
  { name: "Nightlife", id: "nightlife_sub_header", url: "/nightlife", category: "nightlife_food" },
  { name: "Offers", id: "offers_sub_header", url: "/offers", category: "offers_food" },
  
  // Meal Types
  { name: "Breakfast", id: "breakfast_sub_header", url: "/breakfast", category: "breakfast_food" },
  { name: "Lunch", id: "lunch_sub_header", url: "/lunch", category: "lunch_food" },
  { name: "Dinner", id: "dinner_sub_header", url: "/dinner", category: "dinner_food" },
  { name: "Snacks", id: "snacks_sub_header", url: "/snacks", category: "snacks_food" },
  { name: "Street Food", id: "street_food_sub_header", url: "/street-food", category: "street_food_food" },
  { name: "Fast Food", id: "fast_food_sub_header", url: "/fast-food", category: "fast_food_food" },

  // Indian Cuisine
  { name: "North Indian", id: "north_indian_sub_header", url: "/north-indian", category: "north_indian_food" },
  { name: "South Indian", id: "south_indian_sub_header", url: "/south-indian", category: "south_indian_food" },
  { name: "Punjabi", id: "punjabi_sub_header", url: "/punjabi", category: "punjabi_food" },
  { name: "Gujarati", id: "gujarati_sub_header", url: "/gujarati", category: "gujarati_food" },
  { name: "Rajasthani", id: "rajasthani_sub_header", url: "/rajasthani", category: "rajasthani_food" },
  { name: "Maharashtrian", id: "maharashtrian_sub_header", url: "/maharashtrian", category: "maharashtrian_food" },
  { name: "Bengali", id: "bengali_sub_header", url: "/bengali", category: "bengali_food" },
  { name: "Hyderabadi", id: "hyderabadi_sub_header", url: "/hyderabadi", category: "hyderabadi_food" },
  { name: "Kashmiri", id: "kashmiri_sub_header", url: "/kashmiri", category: "kashmiri_food" },

  // Asian & International
  { name: "Chinese", id: "chinese_sub_header", url: "/chinese", category: "chinese_food" },
  { name: "Thai", id: "thai_sub_header", url: "/thai", category: "thai_food" },
  { name: "Japanese", id: "japanese_sub_header", url: "/japanese", category: "japanese_food" },
  { name: "Korean", id: "korean_sub_header", url: "/korean", category: "korean_food" },
  { name: "Italian", id: "italian_sub_header", url: "/italian", category: "italian_food" },
  { name: "Mexican", id: "mexican_sub_header", url: "/mexican", category: "mexican_food" },
  { name: "Continental", id: "continental_sub_header", url: "/continental", category: "continental_food" },

  // Main Courses
  { name: "Biryani", id: "biryani_sub_header", url: "/biryani", category: "biryani_food" },
  { name: "Pizza", id: "pizza_sub_header", url: "/pizza", category: "pizza_food" },
  { name: "Burger", id: "burger_sub_header", url: "/burger", category: "burger_food" },
  { name: "Sandwich", id: "sandwich_sub_header", url: "/sandwich", category: "sandwich_food" },
  { name: "Rolls", id: "rolls_sub_header", url: "/rolls", category: "rolls_food" },
  { name: "Wraps", id: "wraps_sub_header", url: "/wraps", category: "wraps_food" },
  { name: "Pasta", id: "pasta_sub_header", url: "/pasta", category: "pasta_food" },
  { name: "Noodles", id: "noodles_sub_header", url: "/noodles", category: "noodles_food" },
  { name: "Fried Rice", id: "fried_rice_sub_header", url: "/fried-rice", category: "fried_rice_food" },
  { name: "Thali", id: "thali_sub_header", url: "/thali", category: "thali_food" },

  // Non-Veg
  { name: "Chicken", id: "chicken_sub_header", url: "/chicken", category: "chicken_food" },
  { name: "Mutton", id: "mutton_sub_header", url: "/mutton", category: "mutton_food" },
  { name: "Fish & Seafood", id: "fish_seafood_sub_header", url: "/fish-seafood", category: "fish_seafood_food" },
  { name: "Eggs", id: "eggs_sub_header", url: "/eggs", category: "eggs_food" },
  { name: "Kebabs", id: "kebabs_sub_header", url: "/kebabs", category: "kebabs_food" },
  { name: "BBQ & Grill", id: "bbq_grill_sub_header", url: "/bbq-grill", category: "bbq_grill_food" },
  { name: "Tandoori", id: "tandoori_sub_header", url: "/tandoori", category: "tandoori_food" },

  // Veg & Healthy
  { name: "Pure Veg", id: "pure_veg_sub_header", url: "/pure-veg", category: "pure_veg_food" },
  { name: "Healthy Meals", id: "healthy_meals_sub_header", url: "/healthy-meals", category: "healthy_meals_food" },
  { name: "Salads", id: "salads_sub_header", url: "/salads", category: "salads_food" },
  { name: "Soups", id: "soups_sub_header", url: "/soups", category: "soups_food" },
  { name: "Protein Meals", id: "protein_meals_sub_header", url: "/protein-meals", category: "protein_meals_food" },
  { name: "Vegan", id: "vegan_sub_header", url: "/vegan", category: "vegan_food" },
  { name: "Jain Food", id: "jain_food_sub_header", url: "/jain-food", category: "jain_food_food" },

  // Bakery & Desserts
  { name: "Bakery", id: "bakery_sub_header", url: "/bakery", category: "bakery_food" },
  { name: "Cakes", id: "cakes_sub_header", url: "/cakes", category: "cakes_food" },
  { name: "Pastries", id: "pastries_sub_header", url: "/pastries", category: "pastries_food" },
  { name: "Ice Cream", id: "ice_cream_sub_header", url: "/ice-cream", category: "ice_cream_food" },
  { name: "Desserts", id: "desserts_sub_header", url: "/desserts", category: "desserts_food" },
  { name: "Brownies", id: "brownies_sub_header", url: "/brownies", category: "brownies_food" },
  { name: "Cookies", id: "cookies_sub_header", url: "/cookies", category: "cookies_food" },

  // Beverages
  { name: "Tea", id: "tea_sub_header", url: "/tea", category: "tea_food" },
  { name: "Coffee", id: "coffee_sub_header", url: "/coffee", category: "coffee_food" },
  { name: "Milkshakes", id: "milkshakes_sub_header", url: "/milkshakes", category: "milkshakes_food" },
  { name: "Smoothies", id: "smoothies_sub_header", url: "/smoothies", category: "smoothies_food" },
  { name: "Juices", id: "juices_sub_header", url: "/juices", category: "juices_food" },
  { name: "Soft Drinks", id: "soft_drinks_sub_header", url: "/soft-drinks", category: "soft_drinks_food" },
  { name: "Mocktails", id: "mocktails_sub_header", url: "/mocktails", category: "mocktails_food" },

  // Quick Bites
  { name: "Maggi", id: "maggi_sub_header", url: "/maggi", category: "maggi_food" },
  { name: "Momos", id: "momos_sub_header", url: "/momos", category: "momos_food" },
  { name: "Fries", id: "fries_sub_header", url: "/fries", category: "fries_food" },
  { name: "Chaat", id: "chaat_sub_header", url: "/chaat", category: "chaat_food" },
  { name: "Pani Puri", id: "pani_puri_sub_header", url: "/pani-puri", category: "pani_puri_food" },
  { name: "Pav Bhaji", id: "pav_bhaji_sub_header", url: "/pav-bhaji", category: "pav_bhaji_food" },
  { name: "Dosa", id: "dosa_sub_header", url: "/dosa", category: "dosa_food" },
  { name: "Idli", id: "idli_sub_header", url: "/idli", category: "idli_food" },
  { name: "Vada Pav", id: "vada_pav_sub_header", url: "/vada-pav", category: "vada_pav_food" },
  { name: "Samosa", id: "samosa_sub_header", url: "/samosa", category: "samosa_food" },

  // Others
  { name: "Ready to Cook", id: "ready_to_cook_sub_header", url: "/ready-to-cook", category: "ready_to_cook_food" },
  { name: "Cold Cuts", id: "cold_cuts_sub_header", url: "/cold-cuts", category: "cold_cuts_food" },
  { name: "Combos", id: "combos_sub_header", url: "/combos", category: "combos_food" },
  { name: "Family Meals", id: "family_meals_sub_header", url: "/family-meals", category: "family_meals_food" },
  { name: "Kids Menu", id: "kids_menu_sub_header", url: "/kids-menu", category: "kids_menu_food" },
  { name: "Midnight Cravings", id: "midnight_cravings_sub_header", url: "/midnight-cravings", category: "midnight_cravings_food" },
];

// Food category mapping - maps sub-header IDs to ShopByMainCategory category values
export const foodCategoryMapping: Record<string, string> = {
  'all_sub_header': 'all',
  'order_now_sub_header': 'order_now_food',
  'dine_out_sub_header': 'dine_out_food',
  'popular_sub_header': 'popular_food',
  'offers_sub_header': 'offers_food',
  // Meal Types
  'breakfast_sub_header': 'breakfast_food',
  'lunch_sub_header': 'lunch_food',
  'dinner_sub_header': 'dinner_food',
  'snacks_sub_header': 'snacks_food',
  'street_food_sub_header': 'street_food',
  'fast_food_sub_header': 'fast_food',
  // Indian Cuisine
  'north_indian_sub_header': 'north_indian_food',
  'south_indian_sub_header': 'south_indian_food',
  'punjabi_sub_header': 'punjabi_food',
  'gujarati_sub_header': 'gujarati_food',
  'rajasthani_sub_header': 'rajasthani_food',
  'maharashtrian_sub_header': 'maharashtrian_food',
  'bengali_sub_header': 'bengali_food',
  'hyderabadi_sub_header': 'hyderabadi_food',
  'kashmiri_sub_header': 'kashmiri_food',
  // Asian & International
  'chinese_sub_header': 'chinese_food',
  'thai_sub_header': 'thai_food',
  'japanese_sub_header': 'japanese_food',
  'korean_sub_header': 'korean_food',
  'italian_sub_header': 'italian_food',
  'mexican_sub_header': 'mexican_food',
  'continental_sub_header': 'continental_food',
  // Main Courses
  'biryani_sub_header': 'biryani_food',
  'pizza_sub_header': 'pizza_food',
  'burger_sub_header': 'burger_food',
  'sandwich_sub_header': 'sandwich_food',
  'rolls_sub_header': 'rolls_food',
  'wraps_sub_header': 'wraps_food',
  'pasta_sub_header': 'pasta_food',
  'noodles_sub_header': 'noodles_food',
  'fried_rice_sub_header': 'fried_rice_food',
  'thali_sub_header': 'thali_food',
  // Non-Veg
  'chicken_sub_header': 'chicken_food',
  'mutton_sub_header': 'mutton_food',
  'fish_seafood_sub_header': 'fish_seafood_food',
  'eggs_sub_header': 'eggs_food',
  'kebabs_sub_header': 'kebabs_food',
  'bbq_grill_sub_header': 'bbq_grill_food',
  'tandoori_sub_header': 'tandoori_food',
  // Veg & Healthy
  'pure_veg_sub_header': 'pure_veg_food',
  'healthy_meals_sub_header': 'healthy_meals_food',
  'salads_sub_header': 'salads_food',
  'soups_sub_header': 'soups_food',
  'protein_meals_sub_header': 'protein_meals_food',
  'vegan_sub_header': 'vegan_food',
  'jain_food_sub_header': 'jain_food',
  // Bakery & Desserts
  'bakery_sub_header': 'bakery_food',
  'cakes_sub_header': 'cakes_food',
  'pastries_sub_header': 'pastries_food',
  'ice_cream_sub_header': 'ice_cream_food',
  'desserts_sub_header': 'desserts_food',
  'brownies_sub_header': 'brownies_food',
  'cookies_sub_header': 'cookies_food',
  // Beverages
  'tea_sub_header': 'tea_food',
  'coffee_sub_header': 'coffee_food',
  'milkshakes_sub_header': 'milkshakes_food',
  'smoothies_sub_header': 'smoothies_food',
  'juices_sub_header': 'juices_food',
  'soft_drinks_sub_header': 'soft_drinks_food',
  'mocktails_sub_header': 'mocktails_food',
  // Quick Bites
  'maggi_sub_header': 'maggi_food',
  'momos_sub_header': 'momos_food',
  'fries_sub_header': 'fries_food',
  'chaat_sub_header': 'chaat_food',
  'pani_puri_sub_header': 'pani_puri_food',
  'pav_bhaji_sub_header': 'pav_bhaji_food',
  'dosa_sub_header': 'dosa_food',
  'idli_sub_header': 'idli_food',
  'vada_pav_sub_header': 'vada_pav_food',
  'samosa_sub_header': 'samosa_food',
};

export const DiningDataItems: DiningItem[] = [
  {
    id: 1,
    name: 'Starbucks Coffee',
    cuisine: 'Desserts • Fast Food',
    location: 'Dilliwari, Delhi',
    rating: 4.5,
    price: '₹900 for two',
    distance: '9.1 km',
    image: '/products/07fcbe16d735.png',
    primaryOffer: 'Flat 25% off on walk-in',
    primaryOfferCount: '+ 1 more',
    secondaryOffer: 'Up to 10% off with bank offers',
    upiOffer: 'Get extra ₹75 off using PAYTM UPI',
  },
  {
    id: 2,
    name: 'Dilliwala Food Bazaar',
    cuisine: 'North Indian • South Indian',
    location: 'Tulsi Complex, Kavi Nagar, Noida',
    rating: 4.8,
    price: '₹500 for two',
    distance: '7.4 km',
    image: '/products/df0568f70950.png',
    primaryOffer: 'Flat 10% off on walk-in',
    primaryOfferCount: '+ 2 more',
    secondaryOffer: 'Up to 10% off with bank offers',
    upiOffer: 'Get extra ₹75 off using PAYTM UPI',
  },
  {
    id: 3,
    name: 'The Yellow Chilli',
    cuisine: 'North Indian • Desserts',
    location: 'Raj Nagar, Noida',
    rating: 4.3,
    price: '₹1500 for two',
    distance: '10.7 km',
    image: '/products/4c7edcad34c4.png',
    primaryOffer: 'Flat 10% off on pre-booking',
    primaryOfferCount: '+ 2 more',
    secondaryOffer: 'Up to 10% off with bank offers',
    upiOffer: 'Get extra ₹75 off using PAYTM UPI',
  },
  {
    id: 4,
    name: 'Rumours Rooftop',
    cuisine: 'Middle Eastern • Chinese',
    location: 'Sector 63, Noida 1',
    rating: 4.4,
    price: '₹1200 for two',
    distance: '11.2 km',
    image: '/products/005eec06c04b.png',
    primaryOffer: 'Flat 50% off on pre-booking',
    primaryOfferCount: '+ 3 more',
    secondaryOffer: 'Up to 10% off with bank offers',
    upiOffer: 'Get extra ₹75 off using PAYTM UPI',
  },
  {
    id: 5,
    name: 'The Terrace Kitchen',
    cuisine: 'Continental • Italian',
    location: 'Indirapuram, Ghaziabad',
    rating: 4.6,
    price: '₹1100 for two',
    distance: '8.8 km',
    image: '/products/e0cd71810b5f.png',
    primaryOffer: 'Flat 20% off on walk-in',
    primaryOfferCount: '+ 1 more',
    secondaryOffer: 'Up to 10% off with bank offers',
    upiOffer: 'Get extra ₹75 off using PAYTM UPI',
  },
  {
    id: 6,
    name: 'Spice Garden',
    cuisine: 'Indian • Mughlai',
    location: 'Raj Nagar Extension',
    rating: 4.7,
    price: '₹800 for two',
    distance: '12.4 km',
    image: '/products/52f8b828add9.png',
    primaryOffer: 'Flat 15% off on walk-in',
    primaryOfferCount: '+ 2 more',
    secondaryOffer: 'Up to 10% off with bank offers',
    upiOffer: 'Get extra ₹75 off using PAYTM UPI',
  },
];

export const FoodCategoryItemsListData: FoodCategoryInterface[] = [
  {
    id: '1',
    name: 'Biryani',
    image: '/products/bf2d0e73add1c206aeeb9fec762438111727708719.png',
    slug: 'dish-biryani',
    cuisine: 'Hyderabadi, Mughlai'
  },
  {
    id: '2',
    name: 'Pizza',
    image: '/products/d0bd7c9405ac87f6aa65e31fe55800941632716575.png',
    slug: 'dish-pizza',
    cuisine: 'Italian, Fast Food'
  },
  {
    id: '3',
    name: 'Veg Meal',
    image: '/products/9cdab6d5f275b8d2532e3878134ddbda.jpg',
    slug: 'dish-veg-meal',
    cuisine: 'Indian, Healthy'
  },
  {
    id: '4',
    name: 'Thali',
    image: '/products/52eb9796bb9bcf0eba64c643349e97211634401116.png',
    slug: 'dish-thali',
    cuisine: 'Indian, Traditional'
  },
  {
    id: '5',
    name: 'Burger',
    image: '/products/ccb7dc2ba2b054419f805da7f05704471634886169.png',
    slug: 'dish-burger',
    cuisine: 'Fast Food, American'
  },
  {
    id: '6',
    name: 'Chicken',
    image: '/products/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png',
    slug: 'dish-chicken',
    cuisine: 'Non-Veg, Tandoori'
  },
  {
    id: '7',
    name: 'North Indian',
    image: '/products/019409fe8f838312214d9211be010ef31678798444.jpeg',
    slug: 'dish-north-indian',
    cuisine: 'Indian, Punjabi'
  },
  {
    id: '8',
    name: 'Cake',
    image: '/products/d5ab931c8c239271de45e1c159af94311634805744.png',
    slug: 'dish-cake',
    cuisine: 'Dessert, Bakery'
  },
  {
    id: '9',
    name: 'Chole Bhature',
    image: '/products/c953e5ca07150e9a51f8b21102e20f7e1634805157.png',
    slug: 'dish-chole-bhature',
    cuisine: 'Indian, Street Food'
  },
  {
    id: '10',
    name: 'Rolls',
    image: '/products/c2f22c42f7ba90d81440a88449f4e5891634806087.png',
    slug: 'dish-rolls',
    cuisine: 'Fast Food, Indian'
  },
  {
    id: '11',
    name: 'Sweets',
    image: '/products/a9481ab8dce1f7cd553fe5dd6f47f7b91637241749.png',
    slug: 'dish-sweets',
    cuisine: 'Dessert, Indian'
  },
  {
    id: '12',
    name: 'Dosa',
    image: '/products/8dc39742916ddc369ebeb91928391b931632716660.png',
    slug: 'dish-dosa',
    cuisine: 'South Indian, Breakfast'
  }
];

export const TopBrandsDataFood: TopBrandInterface[] = [
  {
    id: '1',
    name: "McDonald's",
    image: '/products/mcdonalds.jpg',
    slug: 'mcdonalds',
    cuisine: 'American, Fast Food',
    deliveryTime: '25 min',
    imageUrl: '/products/mcdonalds.jpg',
    url: '/brands/mcdonalds',
  },
  {
    id: '2',
    name: 'Haldiram\'s',
    image: '/products/haldirams.jpg',
    slug: 'haldirams',
    cuisine: 'Indian, Sweets, Snacks',
    deliveryTime: '28 min',
    imageUrl: '/products/haldirams.jpg',
    url: '/brands/haldirams',
  },
  {
    id: '3',
    name: 'Burger King',
    image: '/products/burger-king.jpg',
    slug: 'burger-king',
    cuisine: 'American, Burgers, Fast Food',
    deliveryTime: '25 min',
    imageUrl: '/products/burger-king.jpg',
    url: '/brands/burger-king',
  },
  {
    id: '4',
    name: 'Punjabi Angithi By Vegorama Group',
    image: '/products/punjabi-angithi.jpg',
    slug: 'punjabi-angithi',
    cuisine: 'North Indian, Punjabi, Tandoor',
    deliveryTime: '45 min',
    imageUrl: '/products/punjabi-angithi.jpg',
    url: '/brands/punjabi-angithi',
  },
  {
    id: '5',
    name: 'KFC',
    image: '/products/kfc.jpg',
    slug: 'kfc',
    cuisine: 'American, Fast Food, Fried Chicken',
    deliveryTime: '28 min',
    imageUrl: '/products/kfc.jpg',
    url: '/brands/kfc',
  },
  {
    id: '6',
    name: 'Subway',
    image: '/products/subway.jpg',
    slug: 'subway',
    cuisine: 'American, Healthy, Sandwiches',
    deliveryTime: '29 min',
    imageUrl: '/products/subway.jpg',
    url: '/brands/subway',
  },
  {
    id: '7',
    name: 'Bikanervala',
    image: '/products/Bikanervala.jpg',
    slug: 'Bikanervala',
    cuisine: 'Bikanervala',
    deliveryTime: '30 min',
    imageUrl: '/products/Bikanervala.jpg',
    url: '/brands/Bikanervala',
  },
  {
    id: '8',
    name: 'Taco Bell',
    image: '/products/Taco_Bell.jpg',
    slug: 'Taco-Bell',
    cuisine: 'Taco Bell',
    deliveryTime: '35 min',
    imageUrl: '/products/Taco_Bell.jpg',
    url: '/brands/Taco_Bell',
  },
  {
    id: '9',
    name: 'Bakingo',
    image: '/products/Bakingo.jpg',
    slug: 'Bakingo',
    cuisine: 'Bakingo',
    deliveryTime: '20 min',
    imageUrl: '/products/Bakingo.jpg',
    url: '/brands/Bakingo',
  },
  {
    id: '10',
    name: "Nathu's Sweets",
    image: '/products/Nathus_Sweets.jpg',
    slug: 'Nathu\'s Sweets',
    cuisine: 'Nathu\'s Sweets',
    deliveryTime: '22 min',
    imageUrl: '/products/Nathus_Sweets.jpg',
    url: '/brands/taco-bell',
  }
];

export const OrderNowItemsList: RestaurantItemFoodInterface[] = [
  {
    id: 1,
    name: "Blue Tokai Coffee Roasters",
    rating: 4.5,
    deliveryTime: "35-40 mins",
    cuisines: ["Coffee", "Cafe", "Beverages"],
    location: "RPS Faridabad",
    imageUrl: "/products/8a285c23-431b-4898-93a8-0e99218f0051_1274827.jpg",
    offer: "ITEMS AT ₹99",
  },
  {
    id: 2,
    name: "Sharma Ji Ke Chole Kulche",
    rating: 4.1,
    deliveryTime: "30-35 mins",
    cuisines: ["North Indian", "Tandoor"],
    location: "KALKAJI",
    imageUrl: "/products/qvd8sfibs0yizwrldbgm.jpg",
    offer: "ITEMS AT ₹29",
  },
  {
    id: 3,
    name: "Choudhary food corner",
    rating: 4.2,
    deliveryTime: "35-40 mins",
    cuisines: ["Indian"],
    location: "Kalkaji",
    imageUrl: "/products/kzylartjnlmzwmp6tnfg.jpg",
    offer: "ITEMS AT ₹39",
  },
  {
    id: 4,
    name: "Mehak Food Corner",
    rating: 4.4,
    deliveryTime: "30-35 mins",
    cuisines: ["Fast Food"],
    location: "Greater Kailash New",
    imageUrl: "/products/jeyrtti4qwbcb6bqha0p.jpg",
  },
  {
    id: 5,
    name: "Gopal's 56",
    rating: 4.4,
    deliveryTime: "30-35 mins",
    cuisines: ["Sweets", "Desserts", "Ice Cream", "Beverages"],
    location: "Kalkaji",
    imageUrl: "/products/jhjevskbppq86vcmnfan.jpg",
  },
  {
    id: 6,
    name: "Chaayos Chai+Snacks=Relax",
    rating: 4.5,
    deliveryTime: "35-40 mins",
    cuisines: ["Beverages", "Chaat", "Bakery", "Snacks", "Street Food", "healthy", "Home Food", "Maharashtrian", "Italian", "Desserts"],
    location: "Kalkaji",
    imageUrl: "/products/dfbcecfc-b380-4648-930a-b9b56b21e781_420722.jpg",
    offer: "51% OFF",
  },
  {
    id: 7,
    name: "Theobroma",
    rating: 4.3,
    deliveryTime: "25-30 mins",
    cuisines: ["Bakery", "Desserts", "Beverages"],
    location: "Sector-37",
    imageUrl: "/products/28525129-2b53-433f-8dec-51fcc3cc262f_1305119.jpg",
    offer: "ITEMS AT ₹37",
  },
  {
    id: 8,
    name: "Subway",
    rating: 4.0,
    deliveryTime: "30-35 mins",
    cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
    location: "CBD Charmwood",
    imageUrl: "/products/ca659d30-b1f0-45c0-b303-e6474a7881b0_996761.jpg",
    offer: "₹150 OFF ABOVE ₹299",
  },
  {
    id: 9,
    name: "First Coffee",
    rating: 3.8,
    deliveryTime: "30-35 mins",
    cuisines: ["Cafe", "Coffee", "Beverages", "sandwich", "Tea"],
    location: "Greenfields_FBD",
    imageUrl: "/products/a7b4e29a-47de-48fd-aa22-faf1c3be6490_1416979.jpg",
    offer: "₹100 OFF ABOVE ₹299",
  },
  {
    id: 10,
    name: "Cruffin Premium - Cakes and Desserts",
    rating: 4.6,
    deliveryTime: "25-30 mins",
    cuisines: ["Desserts", "Bakery", "Cakes"],
    location: "Greenfields_FBD",
    imageUrl: "/products/b562b81c-69b1-455a-8762-6b4e03b2d6e9_1035531.jpg",
    offer: "60% OFF UPTO ₹120",
  },
  {
    id: 11,
    name: "McDonald's",
    rating: 4.3,
    deliveryTime: "15-20 mins",
    cuisines: ["American", "Fast Food", "Beverages"],
    location: "AT DMRC PLOT C",
    imageUrl: "/products/96efe787-90c9-4359-adb3-39b5254aa2b2_1271396.jpg",
    offer: "ITEMS AT ₹49",
  },
  {
    id: 12,
    name: "Bakingo",
    rating: 4.5,
    deliveryTime: "25-30 mins",
    cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
    location: "Sector 37",
    imageUrl: "/products/e7b6252a-8fed-46b0-9fb3-bf67e4ba7f5d_462153.jpg",
    offer: "ITEMS AT ₹69",
  },
  {
    id: 13,
    name: "Haldiram's",
    rating: 4.0,
    deliveryTime: "35-40 mins",
    cuisines: ["Desserts", "South Indian", "Sweets", "Street Food", "North Indian"],
    location: "CBD Commercial Mall",
    imageUrl: "/products/5dbc287e-3aa3-474d-bd1e-9f76835a74a0_1320426.jpg",
    offer: "₹100 OFF ABOVE ₹499",
  },
  {
    id: 14,
    name: "KFC",
    rating: 4.2,
    deliveryTime: "30-40 mins",
    cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
    location: "Grandley Cinema Complex",
    imageUrl: "/products/fb2b7613-f7f6-4872-988a-840b7bcfc9b0_680193.jpg",
    offer: "50% OFF",
  },
  {
    id: 15,
    name: "Annie's Kerala Kitchen",
    rating: 4.4,
    deliveryTime: "35-45 mins",
    cuisines: ["South Indian", "Kerala", "Chinese"],
    location: "New Friends Colony",
    imageUrl: "/products/thnekjksbn9ngbdh3x2s.jpg",
    offer: "ITEMS AT ₹19",
  },
  {
    id: 16,
    name: "L'opal - Gourmet Cakes and Desserts",
    rating: 4.6,
    deliveryTime: "20-25 mins",
    cuisines: ["Desserts", "Bakery"],
    location: "Greenfields_FBD",
    imageUrl: "/products/b27ea269-5ca9-4998-a86b-9cd7e60389b1_1035556.jpg",
    offer: "60% OFF UPTO ₹120",
  },
  {
    id: 17,
    name: "Creme Castle - Cakes And Desserts",
    rating: 4.6,
    deliveryTime: "20-25 mins",
    cuisines: ["Bakery", "Desserts", "Cakes"],
    location: "Sector 37",
    imageUrl: "/products/3f48ca6f-879d-4a66-a478-75f1a8d3e04e_1322819.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 18,
    name: "Makhani Darbar: Curries, Breads & Beyond",
    rating: 4.2,
    deliveryTime: "25-30 mins",
    cuisines: ["Biryani", "North Indian", "Kebabs", "Mughlai", "Beverages", "Desserts"],
    location: "Pocket D & E Sarita Vihar",
    imageUrl: "/products/c583da4b69d264ffe705e5918fad0e98.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 19,
    name: "Faasos Signature Wraps & Rolls",
    rating: 4.9,
    deliveryTime: "30-35 mins",
    cuisines: ["Wraps", "rolls", "Fast Food", "Burger", "shawarma", "Rice Bowls"],
    location: "Sarita Vihar",
    imageUrl: "/products/c583ca6ce40b426797a78ae2ac91f2ec.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 20,
    name: "FNP Cakes By Ferns N Petals",
    rating: 4.5,
    deliveryTime: "20-25 mins",
    cuisines: ["Desserts", "Bakery", "Sweets", "Ice Cream", "Beverages", "Chinese"],
    location: "Sector 37",
    imageUrl: "/products/c7799e93-31e6-4deb-b103-3bdc7eab0773_1174561.jpg",
    offer: "ITEMS AT ₹99",
  },
  {
    id: 21,
    name: "Shravan Specials by Lunchbox",
    rating: 4.2,
    deliveryTime: "25-30 mins",
    cuisines: ["Biryani", "North Indian", "Desserts", "Beverages"],
    location: "Sarita Vihar",
    imageUrl: "/products/f51309ca-a4a4-4c80-9a8b-574b7a1ee46f_263698.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 22,
    name: "Shawarmajaan",
    rating: 4.1,
    deliveryTime: "25-30 mins",
    cuisines: ["Kebabs", "Fast Food", "Snacks", "American", "Healthy Food", "Desserts", "Beverages"],
    location: "D & E Sarita Viha",
    imageUrl: "/products/ce186c41-a36a-49f8-a0a4-44eaa90c1a0d_1246999.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 23,
    name: "Truth Bowl",
    rating: 4.4,
    deliveryTime: "25-30 mins",
    cuisines: ["Kebabs", "Fast Food", "Snacks", "American", "Healthy Food", "Desserts", "Beverages"],
    location: "D & E Sarita Viha",
    imageUrl: "/products/88d2527e-6071-4847-810a-f026c6c80c68_1246998.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 24,
    name: "Dabba & Co.",
    rating: 4.0,
    deliveryTime: "20-25 mins",
    cuisines: ["Home Food", "Indian", "Thalis"],
    location: "D & E Sarita Viha",
    imageUrl: "/products/7c2f06ce-1d65-4a04-b8ed-30e80886c3eb_1246997.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 25,
    name: "Thalaiva Biryani",
    rating: 4.4,
    deliveryTime: "30-35 mins",
    cuisines: ["Biryani", "Mughlai", "Lucknowi", "Hyderabadi", "Kebabs", "Desserts", "Beverages"],
    location: "D & E Sarita Viha",
    imageUrl: "/products/4ccf8e3d-ffc4-492f-90d3-5bdf60e3bebb_1246999.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 26,
    name: "Charcoal Eats - Biryani & Beyond",
    rating: 4.3,
    deliveryTime: "30-35 mins",
    cuisines: ["Biryani", "Rolls & Wraps", "North Indian"],
    location: "Suraj Kund Road",
    imageUrl: "/products/72d08caa-937d-4d75-90dc-0ac0b7d8a1ac_1310137.jpg",
    offer: "70% OFF UPTO ₹130",
  },
  {
    id: 27,
    name: "Veg Darbar by Behrouz Biryani",
    rating: 4.4,
    deliveryTime: "25-30 mins",
    cuisines: ["Biryani", "North Indian", "Kebabs", "Mughlai", "Beverages", "Desserts"],
    location: "Sarita Vihar",
    imageUrl: "/products/2b579171cefc545ce6479e21c0016798.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 28,
    name: "The Cheesecake Club by Sweet Truth",
    rating: 3.0,
    deliveryTime: "20-25 mins",
    cuisines: ["Cakes & Pastries", "Desserts", "Bakery"],
    location: "Sarita Vihar",
    imageUrl: "/products/ddfae442-62e5-4a95-bb2d-5e4ff8aa8d4e_1347562.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 29,
    name: "Suchali's Artisan Bakehouse",
    rating: 4.5,
    deliveryTime: "30-35 mins",
    cuisines: ["Coffee", "Cafe", "Beverages"],
    location: "RPS Faridabad",
    imageUrl: "/products/25ee423e-97c6-4e91-b079-db14e77016b5_1274830.jpg",
  },
  {
    id: 30,
    name: "Salad Days",
    rating: 4.5,
    deliveryTime: "20-25 mins",
    cuisines: ["Salads", "healthy", "food", "Snacks"],
    location: "Jasola",
    imageUrl: "/products/f2016177-9871-41b3-be66-9f16eb7c6d22_1278348.jpg",
    offer: "ITEMS AT ₹99",
  },
  {
    id: 31,
    name: "Carnatic Cafe",
    rating: 4.6,
    deliveryTime: "30-35 mins",
    cuisines: ["South Indian"],
    location: "Greater Kailash - 2",
    imageUrl: "/products/cx1wtfdyzy4m5tlxkl4q.jpg",
  },
  {
    id: 32,
    name: "Got Tea",
    rating: 4.6,
    deliveryTime: "25-30 mins",
    cuisines: ["Beverages", "Cafe", "Snacks", "Desserts"],
    location: "Lajpat Nagar",
    imageUrl: "/products/710550d2-f0c5-4981-8fb9-083b4b812a5f_1167816.jpg",
    offer: "₹100 OFF ABOVE ₹449",
  },
  {
    id: 33,
    name: "Nagpal Chole Bhature",
    rating: 4.2,
    deliveryTime: "30-35 mins",
    cuisines: ["Beverages", "Street Food", "North Indian"],
    location: "Kalkaji",
    imageUrl: "/products/6aab3c39-898e-49ce-a25d-5819cc15e74e_1139433.jpg",
    offer: "ITEMS AT ₹99",
  },
  {
    id: 34,
    name: "Anna Ka Dosa",
    rating: 4.3,
    deliveryTime: "30-35 mins",
    cuisines: ["South Indian", "Indian", "Chaat", "Desserts"],
    location: "Kalkaji",
    imageUrl: "/products/b2076e206275b6c3a0703bd1e9df0fa9.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 35,
    name: "Nathu's Sweets",
    rating: 4.0,
    deliveryTime: "25-30 mins",
    cuisines: ["Sweets", "Chinese", "Fast Food", "Beverages"],
    location: "Okhla",
    imageUrl: "/products/cfd700be-9fc4-43dc-b373-443ccfbaa612_32875.jpg",
    offer: "50% OFF",
  },
  {
    id: 36,
    name: "FES Cafe & Desserts",
    rating: 4.5,
    deliveryTime: "35-40 mins",
    cuisines: ["Cafe", "Coffee", "Beverages", "Desserts"],
    location: "Greater Kailash 2",
    imageUrl: "/products/c35e02da-31b2-4d5e-b0fb-8904cd0119d3_1172863.jpg",
    offer: "ITEMS AT ₹149",
  },
  {
    id: 37,
    name: "Gopala",
    rating: 4.3,
    deliveryTime: "25-30 mins",
    cuisines: ["Sweets", "Desserts", "Bakery", "Snacks"],
    location: "Okhla Phase 1",
    imageUrl: "/products/a2104kx62vfcufrp9uc7.jpg",
  },
  {
    id: 38,
    name: "NBC - Nothing Before Coffee",
    rating: 4.5,
    deliveryTime: "30-35 mins",
    cuisines: ["Coffee", "Fast Food", "Cafe"],
    location: "Kalkaji",
    imageUrl: "/products/c64e1a32-cf82-4682-8f11-14eabdf589be_818857.jpg",
    offer: "ITEMS AT ₹79",
  },
  {
    id: 39,
    name: "Cheesecake & Co.",
    rating: 4.6,
    deliveryTime: "35-45 mins",
    cuisines: ["Bakery", "Desserts"],
    location: "Sector 15 FBD",
    imageUrl: "/products/b318c0b4bc2169550145ace1d6e791a2.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 40,
    name: "IGP Cakes",
    rating: 4.2,
    deliveryTime: "25-30 mins",
    cuisines: ["Desserts", "Bakery"],
    location: "Greater Kailash New",
    imageUrl: "/products/07894dbf-d97e-4e91-a395-ef514ec2ca32_651917.jpg",
    offer: "60% OFF UPTO ₹120",
  },
  {
    id: 41,
    name: "Defence Bakery",
    rating: 4.7,
    deliveryTime: "30-35 mins",
    cuisines: ["Bakery", "Desserts", "sandwich", "Snacks", "Fast Food", "Cakes"],
    location: "Greater Kailash - 2",
    imageUrl: "/products/89a32dba-b270-4efe-ad4d-5d815b5f91fc_448308.jpg",
    offer: "ITEMS AT ₹89",
  },
  {
    id: 42,
    name: "Kenangan Coffee",
    rating: 4.6,
    deliveryTime: "30-35 mins",
    cuisines: ["Beverages", "Cafe"],
    location: "Greater Kailash - 2",
    imageUrl: "/products/b47bfe72-7403-4f24-8a41-50b7e885caa6_1122610.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 43,
    name: "V Cafe - Burgers, Fries, Wraps & Combos",
    rating: 4.4,
    deliveryTime: "30-35 mins",
    cuisines: ["Burger", "sandwich", "Fast Food", "Pizzas", "Beverages"],
    location: "Jasola Apollo Metro Station",
    imageUrl: "/products/13383ed6-861b-440c-b9d1-0fee31305f78_952990.jpg",
    offer: "60% OFF UPTO ₹120",
  },
  {
    id: 44,
    name: "Delight by Inox - Pizza, Burger, Popcorn & Combos",
    rating: 4.4,
    deliveryTime: "30-35 mins",
    cuisines: ["Burger", "Fast Food", "Pizzas", "sandwich", "Street Food"],
    location: "PVR Pacific Mall Jasola Delhi",
    imageUrl: "/products/63192fbc-4863-466c-ab97-62af2d523617_1070507.jpg",
    offer: "60% OFF UPTO ₹120",
  },
  {
    id: 45,
    name: "Nirula's",
    rating: 4.2,
    deliveryTime: "35-40 mins",
    cuisines: ["Ice Cream", "Pizzas", "Fast Food"],
    location: "Greenfields_FBD",
    imageUrl: "/products/a66fa8f5befa65947d9e20f29a863ce0.jpg",
    offer: "ITEMS AT ₹59",
  },
  {
    id: 46,
    name: "Monginis Cake Shop",
    rating: 4.1,
    deliveryTime: "30-35 mins",
    cuisines: ["Cakes & Pastries", "Bakery", "Desserts"],
    location: "Greater Kailash 2",
    imageUrl: "/products/31726e17-db85-41d4-94f9-18619d3ade68_927444.jpg",
  },
  {
    id: 47,
    name: "Bole To Vadapav",
    rating: 4.2,
    deliveryTime: "30-35 mins",
    cuisines: ["Snacks", "Street Food", "Maharashtrian", "Fast Food", "Chaat"],
    location: "Kalkaji",
    imageUrl: "/products/67d0d5dd-f594-432f-a45e-dffeed7501aa_1000117.jpg",
    offer: "ITEMS AT ₹49",
  },
  {
    id: 48,
    name: "Vadilal Ice Creams",
    rating: 4.4,
    deliveryTime: "40-45 mins",
    cuisines: ["Ice Cream", "Desserts", "Cakes", "Beverages", "Bakery"],
    location: "Greenfields_FBD",
    imageUrl: "/products/1572c513-dc7e-4a66-bb03-d373ca6b1de8_880395.jpg",
  },
  {
    id: 49,
    name: "IGP sweets",
    rating: 4.5,
    deliveryTime: "30-35 mins",
    cuisines: ["Desserts", "Bakery"],
    location: "Greater Kailash 2",
    imageUrl: "/products/029e233d-03dc-4956-8532-625428804240_802955.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 50,
    name: "PVR Cafe - Popcorn, Pizza, Hot Dogs & Snacks",
    rating: 3.8,
    deliveryTime: "30-35 mins",
    cuisines: ["Pizzas", "Sandwich", "Burger", "Fast Food"],
    location: "Jasola Apollo Metro Station",
    imageUrl: "/products/49808070-90b0-4547-8968-e1c7721b8f32_952991.jpg",
    offer: "ITEMS AT ₹49",
  },
  {
    id: 51,
    name: "Cheese Burst Factory",
    rating: 4.2,
    deliveryTime: "30-35 mins",
    cuisines: ["Italian", "Pizzas"],
    location: "Greenfields_FBD",
    imageUrl: "/products/195ee9e0-169f-42fb-8c54-947cfe342cd3_1099074.jpg",
    offer: "70% OFF UPTO ₹130",
  },
  {
    id: 52,
    name: "Angels in my Kitchen",
    rating: 4.3,
    deliveryTime: "30-35 mins",
    cuisines: ["Desserts", "Bakery"],
    location: "New Lajpat Nagar",
    imageUrl: "/products/51e41ec2-49dc-49f9-8430-9d992edaf0d8_878877.jpg",
    offer: "ITEMS AT ₹39",
  },
  {
    id: 53,
    name: "Havmor Ice Cream",
    rating: 4.7,
    deliveryTime: "25-30 mins",
    cuisines: ["Ice Cream", "Cakes", "Desserts", "Beverages"],
    location: "Greenfields_FBD",
    imageUrl: "/products/739ad6f2-243a-43d8-bec0-7fb614c5c391_906230.jpg",
  },
  {
    id: 54,
    name: "Wow! Kulfi",
    rating: 3.9,
    deliveryTime: "30-35 mins",
    cuisines: ["Ice Cream", "Desserts"],
    location: "Jasola",
    imageUrl: "/products/590f0bc8-f99f-4989-b954-4bc22d46ecc3_1047833.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 55,
    name: "Third Wave Coffee",
    rating: 4.5,
    deliveryTime: "35-40 mins",
    cuisines: ["Beverages", "Bakery", "Continental"],
    location: "Kalkaji",
    imageUrl: "/products/c972eaed-7274-4a53-a7e1-ffa6c2f5cd57_590026.jpg",
    offer: "ITEMS AT ₹149",
  },
  {
    id: 56,
    name: "Samosa Party",
    rating: 4.1,
    deliveryTime: "20-25 mins",
    cuisines: ["Fast Food", "Snacks", "Beverages"],
    location: "Greater Kailash New",
    imageUrl: "/products/240006ae-c73d-4c1e-a910-2fd9e26bb2e0_853883.jpg",
    offer: "60% OFF UPTO ₹120",
  },
  {
    id: 57,
    name: "Faasos - Wraps, Rolls & Shawarma",
    rating: 4.3,
    deliveryTime: "25-30 mins",
    cuisines: ["Wraps", "rolls", "Fast Food", "Burger", "shawarma", "Rice Bowls"],
    location: "Sarita Vihar",
    imageUrl: "/products/c51b2cfc-3f7e-44dc-8b59-9734903150e8_49242.jpg",
    offer: "ITEMS AT ₹10",
  },
  {
    id: 58,
    name: "LunchBox - Meals and Thalis",
    rating: 4.2,
    deliveryTime: "25-30 mins",
    cuisines: ["Biryani", "North Indian", "Punjabi", "Healthy Food", "Desserts", "Beverages"],
    location: "Sarita Vihar",
    imageUrl: "/products/v2z4zcon24k4lvffzdjz.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 59,
    name: "The Good Bowl",
    rating: 4.3,
    deliveryTime: "25-30 mins",
    cuisines: ["Biryani", "Pastas", "Punjabi", "Desserts", "Beverages"],
    location: "Sarita Vihar",
    imageUrl: "/products/6e04be27387483a7c00444f8e8241108.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 60,
    name: "Sweet Truth - Cake and Desserts",
    rating: 4.1,
    deliveryTime: "20-25 mins",
    cuisines: ["Snacks", "Bakery", "Desserts", "Beverages"],
    location: "Sarita Vihar",
    imageUrl: "/products/8cb10d55-7c41-4ca4-9663-57998544838f_49246.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 61,
    name: "The Biryani Life",
    rating: 4.3,
    deliveryTime: "25-30 mins",
    cuisines: ["Biryani", "Mughlai", "Lucknowi", "Hyderabadi", "Kebabs", "Desserts", "Beverages"],
    location: "Sarita Vihar",
    imageUrl: "/products/zznzotzwscn8mpo7a0ns.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 62,
    name: "The Belgian Waffle Co.",
    rating: 4.6,
    deliveryTime: "30-35 mins",
    cuisines: ["Desserts", "Waffle", "Coffee"],
    location: "NIKHIL COMPLEX",
    imageUrl: "/products/024d65e0-459e-45bc-b912-d0970cc02c40_915658.jpg",
    offer: "20% OFF UPTO ₹50",
  },
  {
    id: 63,
    name: "Behrouz Biryani",
    rating: 4.3,
    deliveryTime: "25-30 mins",
    cuisines: ["Biryani", "North Indian", "Kebabs", "Mughlai", "Beverages", "Desserts"],
    location: "Sarita Vihar",
    imageUrl: "/products/a4ffed13eb197c6df43dfe1c756560e5.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 64,
    name: "Sapna Kachori Wala",
    rating: 4.3,
    deliveryTime: "40-50 mins",
    cuisines: ["Street Food", "Indian", "Fast Food"],
    location: "Community Center Market, East Of Kailash",
    imageUrl: "/products/y4zsijksbc6t5txhfxl1.jpg",
    offer: "10% OFF",
  },
  {
    id: 65,
    name: "Sona Sweets Sri Udupi Restaurant",
    rating: 4.5,
    deliveryTime: "35-45 mins",
    cuisines: ["South Indian", "Sweets", "Snacks"],
    location: "Nehru Place",
    imageUrl: "/products/fbwt6ueg4tdfa2ix6jlk.jpg",
  },
  {
    id: 66,
    name: "Bablu De Chole Bhature",
    rating: 4.1,
    deliveryTime: "45-55 mins",
    cuisines: ["Fast Food", "Snacks", "Beverages"],
    location: "Sector 37",
    imageUrl: "/products/ae1wdmtwjvtrznkwdnmf.jpg",
    offer: "FREE ITEM",
  },
  {
    id: 67,
    name: "Breakfast Hut",
    rating: 4.8,
    deliveryTime: "50-60 mins",
    cuisines: ["Fast Food"],
    location: "Lajpat Nagar",
    imageUrl: "/products/24043ffb-aba7-419d-90f4-5fe4152bed14_996039.jpg",
  },
  {
    id: 68,
    name: "The Orange Twigs Cafe",
    rating: 4.4,
    deliveryTime: "45-50 mins",
    cuisines: ["American"],
    location: "Greater Kailash New",
    imageUrl: "/products/eenh2pgl4ws0vqnjp1gs.jpg",
    offer: "₹125 OFF ABOVE ₹299",
  },
  {
    id: 69,
    name: "Chai Point",
    rating: 4.4,
    deliveryTime: "35-40 mins",
    cuisines: ["Bakery", "Beverages", "Maharashtrian", "Snacks", "Street Food", "South Indian", "Punjabi", "Chaat", "Indian", "American"],
    location: "Kalkaji",
    imageUrl: "/products/57802be8-65f2-47a7-b0b1-17b9752e963c_170910.jpg",
    offer: "ITEMS AT ₹89",
  },
  {
    id: 70,
    name: "Burger King",
    rating: 4.2,
    deliveryTime: "45-50 mins",
    cuisines: ["Burgers", "American"],
    location: "Sector 35",
    imageUrl: "/products/baee7763-1bf0-4d8a-9a77-1b1f81fe5419_45177.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 71,
    name: "Pizza Wings",
    rating: 4.0,
    deliveryTime: "30-35 mins",
    cuisines: ["Pizzas", "Italian", "Pastas", "Rolls & Wraps"],
    location: "Sector 37",
    imageUrl: "/products/11d35976-40f4-4937-8a91-90e10f24e31b_1025803.jpg",
    offer: "ITEMS AT ₹15",
  },
  {
    id: 72,
    name: "Wendy's Burgers",
    rating: 4.1,
    deliveryTime: "30-35 mins",
    cuisines: ["Burgers", "Fast Food", "wrap"],
    location: "Kalkaji",
    imageUrl: "/products/920a27da-34e2-4d4a-801f-79bb64284a08_11478.jpg",
    offer: "ITEMS AT ₹59",
  },
  {
    id: 73,
    name: "Wow! Momo",
    rating: 4.1,
    deliveryTime: "30-40 mins",
    cuisines: ["Momos", "Chinese", "fastfood", "Asian", "Beverages"],
    location: "Jasola",
    imageUrl: "/products/d4fe6ca7-319d-4149-be9c-ead689946014_659239.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 74,
    name: "Starbucks Coffee",
    rating: 4.5,
    deliveryTime: "35-40 mins",
    cuisines: ["Beverages", "Cafe", "Snacks", "Desserts", "Bakery", "Ice Cream"],
    location: "New Friends Colony",
    imageUrl: "/products/3663808b-c7ab-4256-a13a-8128cca1704e_1423736.jpg",
  },
  {
    id: 75,
    name: "Bikanervala",
    rating: 4.5,
    deliveryTime: "40-50 mins",
    cuisines: ["Street Food", "Fast Food"],
    location: "NSIC Metro Station",
    imageUrl: "/products/a73d33d5-5e3c-466f-9ad2-285028475d76_753430.jpg",
    offer: "₹100 OFF ABOVE ₹399",
  },
  {
    id: 76,
    name: "Om Sweets & Snacks",
    rating: 4.4,
    deliveryTime: "45-55 mins",
    cuisines: ["Sweets", "North Indian", "Fast Food", "South Indian", "Chinese", "Snacks"],
    location: "Sector 31",
    imageUrl: "/products/789d71e8-6035-4723-b1ff-2e17dea32179_758333.jpg",
    offer: "₹100 OFF ABOVE ₹449",
  },
  {
    id: 77,
    name: "Oh!Hunger",
    rating: 4.1,
    deliveryTime: "40-45 mins",
    cuisines: ["North Indian", "Fast food", "Sandwichs", "Burger", "Rolls", "Biryani", "Beverages"],
    location: "Greater Kailash 2",
    imageUrl: "/products/3394e5f57fe118a5a70cf5871be2e882.jpg",
    offer: "60% OFF UPTO ₹120",
  },
  {
    id: 78,
    name: "Suprasaad",
    rating: 4.4,
    deliveryTime: "40-45 mins",
    cuisines: ["South Indian"],
    location: "Lajpat Nagar",
    imageUrl: "/products/3153396b-27b0-401b-9368-1c0e9ea67ba8_896617.jpg",
    offer: "₹125 OFF ABOVE ₹399",
  },
  {
    id: 79,
    name: "Nathu's Sweets",
    rating: 4.3,
    deliveryTime: "30-35 mins",
    cuisines: ["Desserts", "South Indian", "Chinese"],
    location: "Jasola",
    imageUrl: "/products/p3dubgiqx9uuknw7nkrq.jpg",
    offer: "50% OFF UPTO ₹100",
  },
  {
    id: 80,
    name: "Keventers - Milkshakes & Waffles",
    rating: 4.3,
    deliveryTime: "35-40 mins",
    cuisines: ["Beverages", "Ice Cream", "Desserts", "Healthy Food"],
    location: "Kalkaji",
    imageUrl: "/products/aa10e7c4-ce15-4ccb-bfd8-2a46a704238b_137250.jpg",
    offer: "ITEMS AT ₹79",
  },
  {
    id: 81,
    name: "Rollsking",
    rating: 4.0,
    deliveryTime: "30-35 mins",
    cuisines: ["Rolls & Wraps", "Fast Food", "Snacks", "Beverages", "North Indian"],
    location: "OKHLA",
    imageUrl: "/products/9b6394f5-3334-4674-9c36-9a12effeebc6_704360.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 82,
    name: "Natural Ice Cream",
    rating: 4.8,
    deliveryTime: "30-35 mins",
    cuisines: ["Ice Cream", "Desserts"],
    location: "Greater Kailash - 2",
    imageUrl: "/products/ef2ff811-fd39-4888-9897-27969393342f_27798.jpg",
  },
  {
    id: 83,
    name: "Caterspoint",
    rating: 4.3,
    deliveryTime: "35-45 mins",
    cuisines: ["Salads", "Healthy food", "Snacks", "pastas", "Lebanese", "Mexican", "Desserts", "Beverages"],
    location: "Lajpat Nagar",
    imageUrl: "/products/892652a5-e988-49b8-8398-b2a39e81b43e_402310.jpg",
    offer: "50% OFF",
  },
  {
    id: 84,
    name: "BTW",
    rating: 4.0,
    deliveryTime: "35-45 mins",
    cuisines: ["Street Food", "North Indian", "Sweets"],
    location: "Jasola",
    imageUrl: "/products/6f56e90e-3cab-44d2-8de5-4aaf1d2e9861_25180.jpg",
    offer: "ITEMS AT ₹54",
  },
  {
    id: 85,
    name: "Binge Bakery and More",
    rating: 4.3,
    deliveryTime: "40-45 mins",
    cuisines: ["Desserts", "Bakery"],
    location: "Greater Kailash 2",
    imageUrl: "/products/bddf2625cb9e041f836fae9aad4a5606.jpg",
  },
  {
    id: 86,
    name: "Kwality Wall's Ice Cream And More",
    rating: 4.4,
    deliveryTime: "30-35 mins",
    cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
    location: "Greenfields_FBD",
    imageUrl: "/products/f499f2a4-c142-4421-bc92-eafaf4fc5820_543889.jpg",
    offer: "20% OFF UPTO ₹50",
  },
  {
    id: 87,
    name: "Fleurons - Handcrafted Cakes And Brownies",
    rating: 4.4,
    deliveryTime: "35-40 mins",
    cuisines: ["Bakery", "Desserts"],
    location: "Lajpat Nagar",
    imageUrl: "/products/2eaab619-f309-458c-8e1e-971bbc926953_831783.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 88,
    name: "MOPP - Mad Over Parathas & Pakodas",
    rating: 4.3,
    deliveryTime: "45-50 mins",
    cuisines: ["North Indian", "Street Food", "Beverages"],
    location: "Greater Kailash 2",
    imageUrl: "/products/4dcc8c16-595b-497c-9563-7761e27cbd55_697443.jpg",
    offer: "50% OFF",
  },
  {
    id: 89,
    name: "Healthy Cravings",
    rating: 4.3,
    deliveryTime: "40-45 mins",
    cuisines: ["Healthy Food", "Continental", "Beverages", "Salads", "Juices", "Italian", "Lebanese"],
    location: "Greater Kailash New",
    imageUrl: "/products/lwsmmnr4aqmvjogubno1.jpg",
    offer: "50% OFF",
  },
  {
    id: 90,
    name: "khichdi Hub",
    rating: 4.3,
    deliveryTime: "40-45 mins",
    cuisines: ["Healthy Food", "North Indian", "Combos", "Biryani", "Beverages", "dessert"],
    location: "Greater Kailash New",
    imageUrl: "/products/ea80dfd9ba73cf4f61f28c24dd9a1eb9.jpg",
    offer: "ITEMS AT ₹49",
  },
  {
    id: 91,
    name: "Friends Restaurant",
    rating: 4.3,
    deliveryTime: "45-50 mins",
    cuisines: ["Healthy Food"],
    location: "Lajpat Nagar",
    imageUrl: "/products/cdae0a46-8b2a-4ad5-b3e2-c7692674c59a_1307281.jpg",
  },
  {
    id: 92,
    name: "Veg Potli",
    rating: 3.6,
    deliveryTime: "45-50 mins",
    cuisines: ["Indian", "North Indian", "Chinese", "Thalis"],
    location: "Greater Kailash 1",
    imageUrl: "/products/5b32afee-9818-4a64-8255-ff94a6b517fb_378972.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 93,
    name: "Honey & Dough",
    rating: 4.6,
    deliveryTime: "40-45 mins",
    cuisines: ["Cakes", "Pasta", "Pizzas", "Burgers", "Coffee"],
    location: "Greater Kailash-1",
    imageUrl: "/products/22853df9-aab5-4024-bbc5-6f7944d52e9a_964385.jpg",
  },
  {
    id: 94,
    name: "The Paratha Factory",
    rating: 4.4,
    deliveryTime: "40-45 mins",
    cuisines: ["North Indian"],
    location: "Greater Kailash New",
    imageUrl: "/products/pnvk5a4qupxz8lpcitmk.jpg",
  },
  {
    id: 95,
    name: "Best Bakers",
    rating: 3.7,
    deliveryTime: "50-60 mins",
    cuisines: ["Bakery"],
    location: "Malviya Nagar",
    imageUrl: "/products/dcbb11cf-9ece-4f77-8d1f-45e66b87386e_1214127.jpg",
  },
  {
    id: 96,
    name: "Vegetarian Bawarchi",
    rating: 3.6,
    deliveryTime: "45-50 mins",
    cuisines: ["North Indian", "Chinese"],
    location: "Lala Lajpat Rai Marg",
    imageUrl: "/products/5e3316b5-ad54-4821-913c-8cf915de3934_346923.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 97,
    name: "Nayi Dilli ke Paranthe",
    rating: 4.0,
    deliveryTime: "50-60 mins",
    cuisines: ["North Indian", "Indian", "Tandoor"],
    location: "Kailash Colony",
    imageUrl: "/products/sopuadeeubz5jd3wrvuz.jpg",
    offer: "50% OFF",
  },
  {
    id: 98,
    name: "Wagh Bakri Tea Lounge",
    rating: 4.4,
    deliveryTime: "35-40 mins",
    cuisines: ["Beverages", "Snacks", "Cafe", "Bakery"],
    location: "Greater Kailash - 2",
    imageUrl: "/products/05f9a397-c915-4bf1-8da1-ea42f4b15940_487087.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 99,
    name: "Kaleva",
    rating: 4.2,
    deliveryTime: "35-40 mins",
    cuisines: ["Sweets", "Street Food", "South Indian", "North Indian", "Chinese", "Fast Food"],
    location: "Kalkaji",
    imageUrl: "/products/a0e21cb9-aba8-4b5b-8f76-00b1c3df9153_537433.jpg",
    offer: "₹100 OFF ABOVE ₹499",
  },
  {
    id: 100,
    name: "Beanly Coffee",
    rating: 4.4,
    deliveryTime: "35-40 mins",
    cuisines: ["Desserts", "Coffee", "Snacks"],
    location: "Greater Kailash 2",
    imageUrl: "/products/311b4414-d6c1-44c5-9b66-f79e32158029_1272638.jpg",
    offer: "50% OFF",
  },
  {
    id: 101,
    name: "The Canteen Project",
    rating: 4.5,
    deliveryTime: "40-45 mins",
    cuisines: ["Street Food", "Chinese", "Thalis", "Snacks", "Desserts", "Beverages"],
    location: "Greater Kailash New",
    imageUrl: "/products/d7f64ee5-344b-48d9-884c-1e81ce0f86a1_394718.jpg",
    offer: "ITEMS AT ₹149",
  },
  {
    id: 102,
    name: "Theos",
    rating: 4.6,
    deliveryTime: "35-40 mins",
    cuisines: ["Beverages", "Snacks", "Desserts"],
    location: "Greater Kailash - 2",
    imageUrl: "/products/b563ee14-31df-4506-9b7e-d15d4d30f13a_807030.jpg",
    offer: "10% OFF ABOVE ₹1499",
  },
  {
    id: 103,
    name: "The Croffle Guys",
    rating: 4.6,
    deliveryTime: "35-40 mins",
    cuisines: ["Desserts", "Bakery", "Waffle", "Coffee"],
    location: "Greater Kailash 2",
    imageUrl: "/products/0c2d18b8-49c8-40ae-88e9-446ab7769a72_1040148.jpg",
    offer: "₹125 OFF ABOVE ₹399",
  },
  {
    id: 104,
    name: "Onlinecake.in",
    rating: 4.6,
    deliveryTime: "35-40 mins",
    cuisines: ["Bakery"],
    location: "Greater Kailash New",
    imageUrl: "/products/324b7c79d70e9348d4b744bc50c31761.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 105,
    name: "Ksheer Sagar - Banarasi Sweets, Since 1968",
    rating: 4.8,
    deliveryTime: "40-45 mins",
    cuisines: ["Sweets", "Snacks"],
    location: "Okhla",
    imageUrl: "/products/e600b5ba-21a5-433f-8b73-e34c20d6a493_1345309.jpg",
  },
  {
    id: 106,
    name: "Sandburgs",
    rating: 4.5,
    deliveryTime: "40-45 mins",
    cuisines: ["Burgers", "American", "Pastas", "Salads"],
    location: "Greater Kailash 1",
    imageUrl: "/products/2732975759c408a91b735ee18a6cbe2d.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 107,
    name: "Between The Bread",
    rating: 4.1,
    deliveryTime: "50-60 mins",
    cuisines: ["Healthy Food", "Snacks", "Continental"],
    location: "Lajpat Nagar",
    imageUrl: "/products/e045808f-c9c8-4359-9d5b-d77c28b5fcc8_959756.sss.jpg",
    offer: "ITEMS AT ₹129",
  },
  {
    id: 108,
    name: "Dough & Cream",
    rating: 4.2,
    deliveryTime: "45-50 mins",
    cuisines: ["Bakery", "Cake", "Pizza", "Pasta", "Continental", "Italian", "Chinese", "Asian", "Beverages"],
    location: "Kalkaji",
    imageUrl: "/products/c709ebbb-fd64-494c-8163-7a59e5e9af38_967202.jpg",
    offer: "50% OFF",
  },
  {
    id: 109,
    name: "Apni Veg Rasoi",
    rating: 3.9,
    deliveryTime: "50-60 mins",
    cuisines: ["Indian"],
    location: "Greater Kailash 1",
    imageUrl: "/products/af9336fa-62a1-4883-96ed-bdba19590533_378925.jpg",
    offer: "ITEMS AT ₹25",
  },
  {
    id: 110,
    name: "Dosa Coffee",
    rating: 4.4,
    deliveryTime: "35-40 mins",
    cuisines: ["South Indian", "Beverages"],
    location: "Greater Kailash New",
    imageUrl: "/products/160172b6-4c6e-48e2-a1a2-99a51143ca84_789414.jpg",
    offer: "ITEMS AT ₹125",
  },
  {
    id: 111,
    name: "Mithaas",
    rating: 4.2,
    deliveryTime: "50-60 mins",
    cuisines: ["Bakery", "Sweets", "Snacks"],
    location: "Greenfields_FBD",
    imageUrl: "/products/624a4884-3ca2-45b6-b4d6-d39a91aa53f5_975703.jpg",
    offer: "₹100 OFF ABOVE ₹299",
  },
  {
    id: 112,
    name: "SMOOR",
    rating: 4.6,
    deliveryTime: "40-50 mins",
    cuisines: ["Desserts", "Bakery"],
    location: "Tughlakabad Institutional Area",
    imageUrl: "/products/6aeae268-f6f9-4fb8-acd8-9f6629af8a02_583815.jpg",
    offer: "₹100 OFF ABOVE ₹199",
  },
  {
    id: 113,
    name: "Tim Hortons",
    rating: 4.4,
    deliveryTime: "40-45 mins",
    cuisines: ["Coffee", "Beverages", "Cafe", "Desserts", "sandwich", "Fast Food"],
    location: "Nehru Place Metro Station",
    imageUrl: "/products/40a813b9-b0af-46e1-8e00-874a48313592_763369.jpg",
    offer: "₹125 OFF ABOVE ₹449",
  },
  {
    id: 114,
    name: "Uncle Peter's Pancakes",
    rating: 4.1,
    deliveryTime: "45-50 mins",
    cuisines: ["Waffle", "Desserts", "American", "Continental", "Beverages"],
    location: "Lajpat Nagar",
    imageUrl: "/products/6cf25bb9-def8-4487-bd40-16d0059a8217_929736.jpg",
    offer: "ITEMS AT ₹149",
  },
  {
    id: 115,
    name: "The Kachori Story",
    rating: 3.8,
    deliveryTime: "35-40 mins",
    cuisines: ["Chaat", "Sweets", "Gujarati", "Street Food", "Snacks", "Biryani", "South Indian", "Indian"],
    location: "Kalka Ji",
    imageUrl: "/products/642d71cd-0548-4945-abd1-5a6253d31a3c_988745.jpg",
    offer: "₹100 OFF ABOVE ₹299",
  },
  {
    id: 116,
    name: "Annapurna Bhojanalya",
    rating: 3.8,
    deliveryTime: "45-55 mins",
    cuisines: ["Indian", "Chinese", "Thalis", "Snacks", "Asian"],
    location: "Lala Lajpat Rai Marg",
    imageUrl: "/products/8cc21dfa-64c1-4653-91f8-e737da656d7d_335059s2.jpg",
    offer: "ITEMS AT ₹29",
  },
  {
    id: 117,
    name: "Mr. Hungry",
    rating: 3.8,
    deliveryTime: "45-55 mins",
    cuisines: ["Indian", "Chinese", "Healthy Food"],
    location: "Greater Kailash 1",
    imageUrl: "/products/p9rbce3qhknmgzlpqp7v.jpg",
    offer: "ITEMS AT ₹39",
  },
  {
    id: 118,
    name: "Bombay Meri Jaan",
    rating: 4.3,
    deliveryTime: "40-45 mins",
    cuisines: ["Street Food", "Snacks", "Maharashtrian", "Chaat"],
    location: "Greater Kailash",
    imageUrl: "/products/w9blep3tsavrohw61a0c.jpg",
    offer: "₹75 OFF ABOVE ₹399",
  },
  {
    id: 119,
    name: "Mealy - Your Everyday Meal",
    rating: 4.4,
    deliveryTime: "45-50 mins",
    cuisines: ["Beverages", "Street Food"],
    location: "Greater Kailash 2",
    imageUrl: "/products/a0f4c6de-2d65-4f2c-8f44-83da0eca8d11_697444.jpg",
    offer: "50% OFF",
  },
  {
    id: 120,
    name: "Asia Seven - Sizzling Chinese",
    rating: 4.0,
    deliveryTime: "45-50 mins",
    cuisines: ["Chinese", "Asian", "Pan-Asian", "Thai"],
    location: "Jasola",
    imageUrl: "/products/9a26dc07-3511-4165-801d-cb8132df28f7_680159.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 121,
    name: "Pizza Villa",
    rating: 4.1,
    deliveryTime: "50-60 mins",
    cuisines: ["Beverages", "Pizzas", "Burgers"],
    location: "Greenfields_FBD",
    imageUrl: "/products/b8573bdd-ce12-4234-acc9-a78b78538ca6_1306515.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 122,
    name: "Indiana Burgers",
    rating: 3.5,
    deliveryTime: "50-60 mins",
    cuisines: ["Burgers", "Rolls & Wraps", "Desserts", "Beverages"],
    location: "Greater Kailash 2",
    imageUrl: "/products/50710fc8-2298-4def-a636-8315f25c4f25_10742341.jpg",
    offer: "ITEMS AT ₹59",
  },
  {
    id: 123,
    name: "Kaati Zone Rolls & Wraps",
    rating: 4.1,
    deliveryTime: "45-50 mins",
    cuisines: ["Rolls & Wraps", "Fast Food", "Desserts", "Beverages"],
    location: "Greater Kailash 2",
    imageUrl: "/products/50710fc8-2298-4def-a636-8315f25c4f25_1074234.jpg",
    offer: "ITEMS AT ₹49",
  },
  {
    id: 124,
    name: "The Dessert Zone",
    rating: 3.9,
    deliveryTime: "45-50 mins",
    cuisines: ["Bakery", "Ice Cream", "Desserts", "Beverages"],
    location: "Greater Kailash 2",
    imageUrl: "/products/cd6af2f1-b2d7-4c8c-8f06-3db8ff69190f_1100767.jpg",
    offer: "ITEMS AT ₹229",
  }
]


export const DineoutItemsList: RestaurantItemFoodInterface[] = [
  {
    id: 1,
    name: "Blue Tokai Coffee Roasters",
    rating: 4.5,
    deliveryTime: "35-40 mins",
    cuisines: ["Coffee", "Cafe", "Beverages"],
    location: "RPS Faridabad",
    imageUrl: "/products/8a285c23-431b-4898-93a8-0e99218f0051_1274827.jpg",
    offer: "ITEMS AT ₹99",
  },
]