import { DineOutItemInterface } from "@/components/FoodDelivery/FoodDesigns/DineOutItemsListCard/DineOutItemsListCard";
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
    cuisines: ["North Indian", "Tandoor", "Street Food"],
    location: "KALKAJI",
    imageUrl: "/products/qvd8sfibs0yizwrldbgm.jpg",
    offer: "ITEMS AT ₹29",
  },
  {
    id: 3,
    name: "Choudhary food corner",
    rating: 4.2,
    deliveryTime: "35-40 mins",
    cuisines: ["Indian", "Street Food", "Fast Food"],
    location: "Kalkaji",
    imageUrl: "/products/kzylartjnlmzwmp6tnfg.jpg",
    offer: "ITEMS AT ₹39",
  },
  {
    id: 4,
    name: "Mehak Food Corner",
    rating: 4.4,
    deliveryTime: "30-35 mins",
    cuisines: ["Fast Food", "Snacks", "Beverages"],
    location: "Greater Kailash New",
    imageUrl: "/products/jeyrtti4qwbcb6bqha0p.jpg",
  },
  {
    id: 5,
    name: "Gopal's 56",
    rating: 4.4,
    deliveryTime: "30-35 mins",
    cuisines: ["Sweets", "Desserts", "Ice Cream"],
    location: "Kalkaji",
    imageUrl: "/products/jhjevskbppq86vcmnfan.jpg",
  },
  {
    id: 6,
    name: "Chaayos Chai+Snacks=Relax",
    rating: 4.5,
    deliveryTime: "35-40 mins",
    cuisines: ["Beverages", "Snacks", "Street Food"],
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
    cuisines: ["Sandwich", "Salads", "Healthy Food"],
    location: "CBD Charmwood",
    imageUrl: "/products/ca659d30-b1f0-45c0-b303-e6474a7881b0_996761.jpg",
    offer: "₹150 OFF ABOVE ₹299",
  },
  {
    id: 9,
    name: "First Coffee",
    rating: 3.8,
    deliveryTime: "30-35 mins",
    cuisines: ["Cafe", "Coffee", "Beverages"],
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
    cuisines: ["Bakery", "Desserts", "Snacks"],
    location: "Sector 37",
    imageUrl: "/products/e7b6252a-8fed-46b0-9fb3-bf67e4ba7f5d_462153.jpg",
    offer: "ITEMS AT ₹69",
  },
  {
    id: 13,
    name: "Haldiram's",
    rating: 4.0,
    deliveryTime: "35-40 mins",
    cuisines: ["North Indian", "Street Food", "Sweets"],
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
    cuisines: ["Desserts", "Bakery", "Cakes"],
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
    cuisines: ["North Indian", "Mughlai", "Biryani"],
    location: "Pocket D & E Sarita Vihar",
    imageUrl: "/products/c583da4b69d264ffe705e5918fad0e98.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 19,
    name: "Faasos Signature Wraps & Rolls",
    rating: 4.9,
    deliveryTime: "30-35 mins",
    cuisines: ["Wraps", "Fast Food", "Shawarma"],
    location: "Sarita Vihar",
    imageUrl: "/products/c583ca6ce40b426797a78ae2ac91f2ec.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 20,
    name: "FNP Cakes By Ferns N Petals",
    rating: 4.5,
    deliveryTime: "20-25 mins",
    cuisines: ["Desserts", "Bakery", "Ice Cream"],
    location: "Sector 37",
    imageUrl: "/products/c7799e93-31e6-4deb-b103-3bdc7eab0773_1174561.jpg",
    offer: "ITEMS AT ₹99",
  },
  {
    id: 21,
    name: "Shravan Specials by Lunchbox",
    rating: 4.2,
    deliveryTime: "25-30 mins",
    cuisines: ["Biryani", "North Indian", "Desserts"],
    location: "Sarita Vihar",
    imageUrl: "/products/f51309ca-a4a4-4c80-9a8b-574b7a1ee46f_263698.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 22,
    name: "Shawarmajaan",
    rating: 4.1,
    deliveryTime: "25-30 mins",
    cuisines: ["Kebabs", "Fast Food", "Snacks"],
    location: "D & E Sarita Viha",
    imageUrl: "/products/ce186c41-a36a-49f8-a0a4-44eaa90c1a0d_1246999.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 23,
    name: "Truth Bowl",
    rating: 4.4,
    deliveryTime: "25-30 mins",
    cuisines: ["Healthy Food", "Snacks", "Beverages"],
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
    cuisines: ["Biryani", "Mughlai", "Hyderabadi"],
    location: "D & E Sarita Viha",
    imageUrl: "/products/4ccf8e3d-ffc4-492f-90d3-5bdf60e3bebb_1246999.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 26,
    name: "Charcoal Eats - Biryani & Beyond",
    rating: 4.3,
    deliveryTime: "30-35 mins",
    cuisines: ["Biryani", "North Indian", "Rolls & Wraps"],
    location: "Suraj Kund Road",
    imageUrl: "/products/72d08caa-937d-4d75-90dc-0ac0b7d8a1ac_1310137.jpg",
    offer: "70% OFF UPTO ₹130",
  },
  {
    id: 27,
    name: "Veg Darbar by Behrouz Biryani",
    rating: 4.4,
    deliveryTime: "25-30 mins",
    cuisines: ["Biryani", "North Indian", "Mughlai"],
    location: "Sarita Vihar",
    imageUrl: "/products/2b579171cefc545ce6479e21c0016798.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 28,
    name: "The Cheesecake Club by Sweet Truth",
    rating: 3.0,
    deliveryTime: "20-25 mins",
    cuisines: ["Desserts", "Bakery", "Cakes"],
    location: "Sarita Vihar",
    imageUrl: "/products/ddfae442-62e5-4a95-bb2d-5e4ff8aa8d4e_1347562.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 29,
    name: "Suchali's Artisan Bakehouse",
    rating: 4.5,
    deliveryTime: "30-35 mins",
    cuisines: ["Coffee", "Cafe", "Bakery"],
    location: "RPS Faridabad",
    imageUrl: "/products/25ee423e-97c6-4e91-b079-db14e77016b5_1274830.jpg",
  },
  {
    id: 30,
    name: "Salad Days",
    rating: 4.5,
    deliveryTime: "20-25 mins",
    cuisines: ["Salads", "Healthy Food", "Snacks"],
    location: "Jasola",
    imageUrl: "/products/f2016177-9871-41b3-be66-9f16eb7c6d22_1278348.jpg",
    offer: "ITEMS AT ₹99",
  },
  {
    id: 31,
    name: "Carnatic Cafe",
    rating: 4.6,
    deliveryTime: "30-35 mins",
    cuisines: ["South Indian", "Indian", "Beverages"],
    location: "Greater Kailash - 2",
    imageUrl: "/products/cx1wtfdyzy4m5tlxkl4q.jpg",
  },
  {
    id: 32,
    name: "Got Tea",
    rating: 4.6,
    deliveryTime: "25-30 mins",
    cuisines: ["Beverages", "Cafe", "Snacks"],
    location: "Lajpat Nagar",
    imageUrl: "/products/710550d2-f0c5-4981-8fb9-083b4b812a5f_1167816.jpg",
    offer: "₹100 OFF ABOVE ₹449",
  },
  {
    id: 33,
    name: "Nagpal Chole Bhature",
    rating: 4.2,
    deliveryTime: "30-35 mins",
    cuisines: ["North Indian", "Street Food", "Beverages"],
    location: "Kalkaji",
    imageUrl: "/products/6aab3c39-898e-49ce-a25d-5819cc15e74e_1139433.jpg",
    offer: "ITEMS AT ₹99",
  },
  {
    id: 34,
    name: "Anna Ka Dosa",
    rating: 4.3,
    deliveryTime: "30-35 mins",
    cuisines: ["South Indian", "Indian", "Chaat"],
    location: "Kalkaji",
    imageUrl: "/products/b2076e206275b6c3a0703bd1e9df0fa9.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 35,
    name: "Nathu's Sweets",
    rating: 4.0,
    deliveryTime: "25-30 mins",
    cuisines: ["Sweets", "Chinese", "Fast Food"],
    location: "Okhla",
    imageUrl: "/products/cfd700be-9fc4-43dc-b373-443ccfbaa612_32875.jpg",
    offer: "50% OFF",
  },
  {
    id: 36,
    name: "FES Cafe & Desserts",
    rating: 4.5,
    deliveryTime: "35-40 mins",
    cuisines: ["Cafe", "Coffee", "Desserts"],
    location: "Greater Kailash 2",
    imageUrl: "/products/c35e02da-31b2-4d5e-b0fb-8904cd0119d3_1172863.jpg",
    offer: "ITEMS AT ₹149",
  },
  {
    id: 37,
    name: "Gopala",
    rating: 4.3,
    deliveryTime: "25-30 mins",
    cuisines: ["Sweets", "Desserts", "Snacks"],
    location: "Okhla Phase 1",
    imageUrl: "/products/a2104kx62vfcufrp9uc7.jpg",
  },
  {
    id: 38,
    name: "NBC - Nothing Before Coffee",
    rating: 4.5,
    deliveryTime: "30-35 mins",
    cuisines: ["Coffee", "Cafe", "Fast Food"],
    location: "Kalkaji",
    imageUrl: "/products/c64e1a32-cf82-4682-8f11-14eabdf589be_818857.jpg",
    offer: "ITEMS AT ₹79",
  },
  {
    id: 39,
    name: "Cheesecake & Co.",
    rating: 4.6,
    deliveryTime: "35-45 mins",
    cuisines: ["Bakery", "Desserts", "Cakes"],
    location: "Sector 15 FBD",
    imageUrl: "/products/b318c0b4bc2169550145ace1d6e791a2.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 40,
    name: "IGP Cakes",
    rating: 4.2,
    deliveryTime: "25-30 mins",
    cuisines: ["Desserts", "Bakery", "Cakes"],
    location: "Greater Kailash New",
    imageUrl: "/products/07894dbf-d97e-4e91-a395-ef514ec2ca32_651917.jpg",
    offer: "60% OFF UPTO ₹120",
  },
  {
    id: 41,
    name: "Defence Bakery",
    rating: 4.7,
    deliveryTime: "30-35 mins",
    cuisines: ["Bakery", "Desserts", "Snacks"],
    location: "Greater Kailash - 2",
    imageUrl: "/products/89a32dba-b270-4efe-ad4d-5d815b5f91fc_448308.jpg",
    offer: "ITEMS AT ₹89",
  },
  {
    id: 42,
    name: "Kenangan Coffee",
    rating: 4.6,
    deliveryTime: "30-35 mins",
    cuisines: ["Beverages", "Cafe", "Coffee"],
    location: "Greater Kailash - 2",
    imageUrl: "/products/b47bfe72-7403-4f24-8a41-50b7e885caa6_1122610.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 43,
    name: "V Cafe - Burgers, Fries, Wraps & Combos",
    rating: 4.4,
    deliveryTime: "30-35 mins",
    cuisines: ["Burgers", "Fast Food", "Sandwich"],
    location: "Jasola Apollo Metro Station",
    imageUrl: "/products/13383ed6-861b-440c-b9d1-0fee31305f78_952990.jpg",
    offer: "60% OFF UPTO ₹120",
  },
  {
    id: 44,
    name: "Delight by Inox - Pizza, Burger, Popcorn & Combos",
    rating: 4.4,
    deliveryTime: "30-35 mins",
    cuisines: ["Fast Food", "Pizzas", "Burgers"],
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
    cuisines: ["Bakery", "Desserts", "Cakes"],
    location: "Greater Kailash 2",
    imageUrl: "/products/31726e17-db85-41d4-94f9-18619d3ade68_927444.jpg",
  },
  {
    id: 47,
    name: "Bole To Vadapav",
    rating: 4.2,
    deliveryTime: "30-35 mins",
    cuisines: ["Street Food", "Maharashtrian", "Snacks"],
    location: "Kalkaji",
    imageUrl: "/products/67d0d5dd-f594-432f-a45e-dffeed7501aa_1000117.jpg",
    offer: "ITEMS AT ₹49",
  },
  {
    id: 48,
    name: "Vadilal Ice Creams",
    rating: 4.4,
    deliveryTime: "40-45 mins",
    cuisines: ["Ice Cream", "Desserts", "Beverages"],
    location: "Greenfields_FBD",
    imageUrl: "/products/1572c513-dc7e-4a66-bb03-d373ca6b1de8_880395.jpg",
  },
  {
    id: 49,
    name: "IGP sweets",
    rating: 4.5,
    deliveryTime: "30-35 mins",
    cuisines: ["Desserts", "Bakery", "Sweets"],
    location: "Greater Kailash 2",
    imageUrl: "/products/029e233d-03dc-4956-8532-625428804240_802955.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 50,
    name: "PVR Cafe - Popcorn, Pizza, Hot Dogs & Snacks",
    rating: 3.8,
    deliveryTime: "30-35 mins",
    cuisines: ["Fast Food", "Pizzas", "Snacks"],
    location: "Jasola Apollo Metro Station",
    imageUrl: "/products/49808070-90b0-4547-8968-e1c7721b8f32_952991.jpg",
    offer: "ITEMS AT ₹49",
  },
  {
    id: 51,
    name: "Cheese Burst Factory",
    rating: 4.2,
    deliveryTime: "30-35 mins",
    cuisines: ["Italian", "Pizzas", "Fast Food"],
    location: "Greenfields_FBD",
    imageUrl: "/products/195ee9e0-169f-42fb-8c54-947cfe342cd3_1099074.jpg",
    offer: "70% OFF UPTO ₹130",
  },
  {
    id: 52,
    name: "Angels in my Kitchen",
    rating: 4.3,
    deliveryTime: "30-35 mins",
    cuisines: ["Desserts", "Bakery", "Cakes"],
    location: "New Lajpat Nagar",
    imageUrl: "/products/51e41ec2-49dc-49f9-8430-9d992edaf0d8_878877.jpg",
    offer: "ITEMS AT ₹39",
  },
  {
    id: 53,
    name: "Havmor Ice Cream",
    rating: 4.7,
    deliveryTime: "25-30 mins",
    cuisines: ["Ice Cream", "Desserts", "Beverages"],
    location: "Greenfields_FBD",
    imageUrl: "/products/739ad6f2-243a-43d8-bec0-7fb614c5c391_906230.jpg",
  },
  {
    id: 54,
    name: "Wow! Kulfi",
    rating: 3.9,
    deliveryTime: "30-35 mins",
    cuisines: ["Ice Cream", "Desserts", "Beverages"],
    location: "Jasola",
    imageUrl: "/products/590f0bc8-f99f-4989-b954-4bc22d46ecc3_1047833.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 55,
    name: "Third Wave Coffee",
    rating: 4.5,
    deliveryTime: "35-40 mins",
    cuisines: ["Beverages", "Coffee", "Bakery"],
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
    cuisines: ["Wraps", "Fast Food", "Shawarma"],
    location: "Sarita Vihar",
    imageUrl: "/products/c51b2cfc-3f7e-44dc-8b59-9734903150e8_49242.jpg",
    offer: "ITEMS AT ₹10",
  },
  {
    id: 58,
    name: "LunchBox - Meals and Thalis",
    rating: 4.2,
    deliveryTime: "25-30 mins",
    cuisines: ["North Indian", "Thalis", "Healthy Food"],
    location: "Sarita Vihar",
    imageUrl: "/products/v2z4zcon24k4lvffzdjz.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 59,
    name: "The Good Bowl",
    rating: 4.3,
    deliveryTime: "25-30 mins",
    cuisines: ["Biryani", "Pastas", "Punjabi"],
    location: "Sarita Vihar",
    imageUrl: "/products/6e04be27387483a7c00444f8e8241108.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 60,
    name: "Sweet Truth - Cake and Desserts",
    rating: 4.1,
    deliveryTime: "20-25 mins",
    cuisines: ["Desserts", "Bakery", "Snacks"],
    location: "Sarita Vihar",
    imageUrl: "/products/8cb10d55-7c41-4ca4-9663-57998544838f_49246.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 61,
    name: "The Biryani Life",
    rating: 4.3,
    deliveryTime: "25-30 mins",
    cuisines: ["Biryani", "Mughlai", "Hyderabadi"],
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
    cuisines: ["Biryani", "Mughlai", "North Indian"],
    location: "Sarita Vihar",
    imageUrl: "/products/a4ffed13eb197c6df43dfe1c756560e5.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 64,
    name: "Sapna Kachori Wala",
    rating: 4.3,
    deliveryTime: "40-50 mins",
    cuisines: ["Street Food", "Indian", "Snacks"],
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
    cuisines: ["Fast Food", "Snacks", "North Indian"],
    location: "Sector 37",
    imageUrl: "/products/ae1wdmtwjvtrznkwdnmf.jpg",
    offer: "FREE ITEM",
  },
  {
    id: 67,
    name: "Breakfast Hut",
    rating: 4.8,
    deliveryTime: "50-60 mins",
    cuisines: ["Fast Food", "Snacks", "Beverages"],
    location: "Lajpat Nagar",
    imageUrl: "/products/24043ffb-aba7-419d-90f4-5fe4152bed14_996039.jpg",
  },
  {
    id: 68,
    name: "The Orange Twigs Cafe",
    rating: 4.4,
    deliveryTime: "45-50 mins",
    cuisines: ["American", "Cafe", "Fast Food"],
    location: "Greater Kailash New",
    imageUrl: "/products/eenh2pgl4ws0vqnjp1gs.jpg",
    offer: "₹125 OFF ABOVE ₹299",
  },
  {
    id: 69,
    name: "Chai Point",
    rating: 4.4,
    deliveryTime: "35-40 mins",
    cuisines: ["Beverages", "Snacks", "Street Food"],
    location: "Kalkaji",
    imageUrl: "/products/57802be8-65f2-47a7-b0b1-17b9752e963c_170910.jpg",
    offer: "ITEMS AT ₹89",
  },
  {
    id: 70,
    name: "Burger King",
    rating: 4.2,
    deliveryTime: "45-50 mins",
    cuisines: ["Burgers", "American", "Fast Food"],
    location: "Sector 35",
    imageUrl: "/products/baee7763-1bf0-4d8a-9a77-1b1f81fe5419_45177.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 71,
    name: "Pizza Wings",
    rating: 4.0,
    deliveryTime: "30-35 mins",
    cuisines: ["Pizzas", "Italian", "Pastas"],
    location: "Sector 37",
    imageUrl: "/products/11d35976-40f4-4937-8a91-90e10f24e31b_1025803.jpg",
    offer: "ITEMS AT ₹15",
  },
  {
    id: 72,
    name: "Wendy's Burgers",
    rating: 4.1,
    deliveryTime: "30-35 mins",
    cuisines: ["Burgers", "Fast Food", "Wraps"],
    location: "Kalkaji",
    imageUrl: "/products/920a27da-34e2-4d4a-801f-79bb64284a08_11478.jpg",
    offer: "ITEMS AT ₹59",
  },
  {
    id: 73,
    name: "Wow! Momo",
    rating: 4.1,
    deliveryTime: "30-40 mins",
    cuisines: ["Momos", "Chinese", "Fast Food"],
    location: "Jasola",
    imageUrl: "/products/d4fe6ca7-319d-4149-be9c-ead689946014_659239.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 74,
    name: "Starbucks Coffee",
    rating: 4.5,
    deliveryTime: "35-40 mins",
    cuisines: ["Beverages", "Cafe", "Snacks"],
    location: "New Friends Colony",
    imageUrl: "/products/3663808b-c7ab-4256-a13a-8128cca1704e_1423736.jpg",
  },
  {
    id: 75,
    name: "Bikanervala",
    rating: 4.5,
    deliveryTime: "40-50 mins",
    cuisines: ["Street Food", "Fast Food", "Sweets"],
    location: "NSIC Metro Station",
    imageUrl: "/products/a73d33d5-5e3c-466f-9ad2-285028475d76_753430.jpg",
    offer: "₹100 OFF ABOVE ₹399",
  },
  {
    id: 76,
    name: "Om Sweets & Snacks",
    rating: 4.4,
    deliveryTime: "45-55 mins",
    cuisines: ["Sweets", "North Indian", "Snacks"],
    location: "Sector 31",
    imageUrl: "/products/789d71e8-6035-4723-b1ff-2e17dea32179_758333.jpg",
    offer: "₹100 OFF ABOVE ₹449",
  },
  {
    id: 77,
    name: "Oh!Hunger",
    rating: 4.1,
    deliveryTime: "40-45 mins",
    cuisines: ["North Indian", "Burgers", "Biryani"],
    location: "Greater Kailash 2",
    imageUrl: "/products/3394e5f57fe118a5a70cf5871be2e882.jpg",
    offer: "60% OFF UPTO ₹120",
  },
  {
    id: 78,
    name: "Suprasaad",
    rating: 4.4,
    deliveryTime: "40-45 mins",
    cuisines: ["South Indian", "Indian", "Snacks"],
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
    cuisines: ["Beverages", "Ice Cream", "Desserts"],
    location: "Kalkaji",
    imageUrl: "/products/aa10e7c4-ce15-4ccb-bfd8-2a46a704238b_137250.jpg",
    offer: "ITEMS AT ₹79",
  },
  {
    id: 81,
    name: "Rollsking",
    rating: 4.0,
    deliveryTime: "30-35 mins",
    cuisines: ["Rolls & Wraps", "Fast Food", "Snacks"],
    location: "OKHLA",
    imageUrl: "/products/9b6394f5-3334-4674-9c36-9a12effeebc6_704360.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 82,
    name: "Natural Ice Cream",
    rating: 4.8,
    deliveryTime: "30-35 mins",
    cuisines: ["Ice Cream", "Desserts", "Beverages"],
    location: "Greater Kailash - 2",
    imageUrl: "/products/ef2ff811-fd39-4888-9897-27969393342f_27798.jpg",
  },
  {
    id: 83,
    name: "Caterspoint",
    rating: 4.3,
    deliveryTime: "35-45 mins",
    cuisines: ["Salads", "Healthy Food", "Lebanese"],
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
    cuisines: ["Desserts", "Bakery", "Cakes"],
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
    cuisines: ["Bakery", "Desserts", "Cakes"],
    location: "Lajpat Nagar",
    imageUrl: "/products/2eaab619-f309-458c-8e1e-971bbc926953_831783.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 88,
    name: "MOPP - Mad Over Parathas & Pakodas",
    rating: 4.3,
    deliveryTime: "45-50 mins",
    cuisines: ["North Indian", "Street Food", "Snacks"],
    location: "Greater Kailash 2",
    imageUrl: "/products/4dcc8c16-595b-497c-9563-7761e27cbd55_697443.jpg",
    offer: "50% OFF",
  },
  {
    id: 89,
    name: "Healthy Cravings",
    rating: 4.3,
    deliveryTime: "40-45 mins",
    cuisines: ["Healthy Food", "Salads", "Continental"],
    location: "Greater Kailash New",
    imageUrl: "/products/lwsmmnr4aqmvjogubno1.jpg",
    offer: "50% OFF",
  },
  {
    id: 90,
    name: "khichdi Hub",
    rating: 4.3,
    deliveryTime: "40-45 mins",
    cuisines: ["Healthy Food", "North Indian", "Biryani"],
    location: "Greater Kailash New",
    imageUrl: "/products/ea80dfd9ba73cf4f61f28c24dd9a1eb9.jpg",
    offer: "ITEMS AT ₹49",
  },
  {
    id: 91,
    name: "Friends Restaurant",
    rating: 4.3,
    deliveryTime: "45-50 mins",
    cuisines: ["Healthy Food", "Indian", "Snacks"],
    location: "Lajpat Nagar",
    imageUrl: "/products/cdae0a46-8b2a-4ad5-b3e2-c7692674c59a_1307281.jpg",
  },
  {
    id: 92,
    name: "Veg Potli",
    rating: 3.6,
    deliveryTime: "45-50 mins",
    cuisines: ["Indian", "North Indian", "Thalis"],
    location: "Greater Kailash 1",
    imageUrl: "/products/5b32afee-9818-4a64-8255-ff94a6b517fb_378972.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 93,
    name: "Honey & Dough",
    rating: 4.6,
    deliveryTime: "40-45 mins",
    cuisines: ["Cakes", "Pasta", "Pizzas"],
    location: "Greater Kailash-1",
    imageUrl: "/products/22853df9-aab5-4024-bbc5-6f7944d52e9a_964385.jpg",
  },
  {
    id: 94,
    name: "The Paratha Factory",
    rating: 4.4,
    deliveryTime: "40-45 mins",
    cuisines: ["North Indian", "Indian", "Snacks"],
    location: "Greater Kailash New",
    imageUrl: "/products/pnvk5a4qupxz8lpcitmk.jpg",
  },
  {
    id: 95,
    name: "Best Bakers",
    rating: 3.7,
    deliveryTime: "50-60 mins",
    cuisines: ["Bakery", "Desserts", "Cakes"],
    location: "Malviya Nagar",
    imageUrl: "/products/dcbb11cf-9ece-4f77-8d1f-45e66b87386e_1214127.jpg",
  },
  {
    id: 96,
    name: "Vegetarian Bawarchi",
    rating: 3.6,
    deliveryTime: "45-50 mins",
    cuisines: ["North Indian", "Chinese", "Indian"],
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
    cuisines: ["Beverages", "Snacks", "Cafe"],
    location: "Greater Kailash - 2",
    imageUrl: "/products/05f9a397-c915-4bf1-8da1-ea42f4b15940_487087.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 99,
    name: "Kaleva",
    rating: 4.2,
    deliveryTime: "35-40 mins",
    cuisines: ["Sweets", "Street Food", "North Indian"],
    location: "Kalkaji",
    imageUrl: "/products/a0e21cb9-aba8-4b5b-8f76-00b1c3df9153_537433.jpg",
    offer: "₹100 OFF ABOVE ₹499",
  },
  {
    id: 100,
    name: "Beanly Coffee",
    rating: 4.4,
    deliveryTime: "35-40 mins",
    cuisines: ["Coffee", "Desserts", "Snacks"],
    location: "Greater Kailash 2",
    imageUrl: "/products/311b4414-d6c1-44c5-9b66-f79e32158029_1272638.jpg",
    offer: "50% OFF",
  },
  {
    id: 101,
    name: "The Canteen Project",
    rating: 4.5,
    deliveryTime: "40-45 mins",
    cuisines: ["Street Food", "Snacks", "Beverages"],
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
    cuisines: ["Desserts", "Bakery", "Waffle"],
    location: "Greater Kailash 2",
    imageUrl: "/products/0c2d18b8-49c8-40ae-88e9-446ab7769a72_1040148.jpg",
    offer: "₹125 OFF ABOVE ₹399",
  },
  {
    id: 104,
    name: "Onlinecake.in",
    rating: 4.6,
    deliveryTime: "35-40 mins",
    cuisines: ["Bakery", "Desserts", "Cakes"],
    location: "Greater Kailash New",
    imageUrl: "/products/324b7c79d70e9348d4b744bc50c31761.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 105,
    name: "Ksheer Sagar - Banarasi Sweets, Since 1968",
    rating: 4.8,
    deliveryTime: "40-45 mins",
    cuisines: ["Sweets", "Snacks", "Indian"],
    location: "Okhla",
    imageUrl: "/products/e600b5ba-21a5-433f-8b73-e34c20d6a493_1345309.jpg",
  },
  {
    id: 106,
    name: "Sandburgs",
    rating: 4.5,
    deliveryTime: "40-45 mins",
    cuisines: ["Burgers", "American", "Pastas"],
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
    cuisines: ["Bakery", "Italian", "Pizza"],
    location: "Kalkaji",
    imageUrl: "/products/c709ebbb-fd64-494c-8163-7a59e5e9af38_967202.jpg",
    offer: "50% OFF",
  },
  {
    id: 109,
    name: "Apni Veg Rasoi",
    rating: 3.9,
    deliveryTime: "50-60 mins",
    cuisines: ["Indian", "North Indian", "Thalis"],
    location: "Greater Kailash 1",
    imageUrl: "/products/af9336fa-62a1-4883-96ed-bdba19590533_378925.jpg",
    offer: "ITEMS AT ₹25",
  },
  {
    id: 110,
    name: "Dosa Coffee",
    rating: 4.4,
    deliveryTime: "35-40 mins",
    cuisines: ["South Indian", "Beverages", "Indian"],
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
    cuisines: ["Desserts", "Bakery", "Chocolate"],
    location: "Tughlakabad Institutional Area",
    imageUrl: "/products/6aeae268-f6f9-4fb8-acd8-9f6629af8a02_583815.jpg",
    offer: "₹100 OFF ABOVE ₹199",
  },
  {
    id: 113,
    name: "Tim Hortons",
    rating: 4.4,
    deliveryTime: "40-45 mins",
    cuisines: ["Coffee", "Beverages", "Fast Food"],
    location: "Nehru Place Metro Station",
    imageUrl: "/products/40a813b9-b0af-46e1-8e00-874a48313592_763369.jpg",
    offer: "₹125 OFF ABOVE ₹449",
  },
  {
    id: 114,
    name: "Uncle Peter's Pancakes",
    rating: 4.1,
    deliveryTime: "45-50 mins",
    cuisines: ["Desserts", "American", "Beverages"],
    location: "Lajpat Nagar",
    imageUrl: "/products/6cf25bb9-def8-4487-bd40-16d0059a8217_929736.jpg",
    offer: "ITEMS AT ₹149",
  },
  {
    id: 115,
    name: "The Kachori Story",
    rating: 3.8,
    deliveryTime: "35-40 mins",
    cuisines: ["Chaat", "Street Food", "Snacks"],
    location: "Kalka Ji",
    imageUrl: "/products/642d71cd-0548-4945-abd1-5a6253d31a3c_988745.jpg",
    offer: "₹100 OFF ABOVE ₹299",
  },
  {
    id: 116,
    name: "Annapurna Bhojanalya",
    rating: 3.8,
    deliveryTime: "45-55 mins",
    cuisines: ["Indian", "Thalis", "Snacks"],
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
    cuisines: ["Street Food", "Chaat", "Maharashtrian"],
    location: "Greater Kailash",
    imageUrl: "/products/w9blep3tsavrohw61a0c.jpg",
    offer: "₹75 OFF ABOVE ₹399",
  },
  {
    id: 119,
    name: "Mealy - Your Everyday Meal",
    rating: 4.4,
    deliveryTime: "45-50 mins",
    cuisines: ["Beverages", "Street Food", "Snacks"],
    location: "Greater Kailash 2",
    imageUrl: "/products/a0f4c6de-2d65-4f2c-8f44-83da0eca8d11_697444.jpg",
    offer: "50% OFF",
  },
  {
    id: 120,
    name: "Asia Seven - Sizzling Chinese",
    rating: 4.0,
    deliveryTime: "45-50 mins",
    cuisines: ["Chinese", "Asian", "Pan-Asian"],
    location: "Jasola",
    imageUrl: "/products/9a26dc07-3511-4165-801d-cb8132df28f7_680159.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 121,
    name: "Pizza Villa",
    rating: 4.1,
    deliveryTime: "50-60 mins",
    cuisines: ["Pizzas", "Burgers", "Beverages"],
    location: "Greenfields_FBD",
    imageUrl: "/products/b8573bdd-ce12-4234-acc9-a78b78538ca6_1306515.jpg",
    offer: "70% OFF UPTO ₹140",
  },
  {
    id: 122,
    name: "Indiana Burgers",
    rating: 3.5,
    deliveryTime: "50-60 mins",
    cuisines: ["Burgers", "Rolls & Wraps", "Desserts"],
    location: "Greater Kailash 2",
    imageUrl: "/products/50710fc8-2298-4def-a636-8315f25c4f25_10742341.jpg",
    offer: "ITEMS AT ₹59",
  },
  {
    id: 123,
    name: "Kaati Zone Rolls & Wraps",
    rating: 4.1,
    deliveryTime: "45-50 mins",
    cuisines: ["Rolls & Wraps", "Fast Food", "Snacks"],
    location: "Greater Kailash 2",
    imageUrl: "/products/50710fc8-2298-4def-a636-8315f25c4f25_1074234.jpg",
    offer: "ITEMS AT ₹49",
  },
  {
    id: 124,
    name: "The Dessert Zone",
    rating: 3.9,
    deliveryTime: "45-50 mins",
    cuisines: ["Desserts", "Bakery", "Ice Cream"],
    location: "Greater Kailash 2",
    imageUrl: "/products/cd6af2f1-b2d7-4c8c-8f06-3db8ff69190f_1100767.jpg",
    offer: "ITEMS AT ₹229",
  }
]

export const DineoutItemsList: DineOutItemInterface[] = [
  {
    id: 1,
    name: "Out Of The Box Courtyard",
    rating: 4.1,
    cuisines: ["Continental", "North Indian", "Italian", "Pizza", "Chinese", "Asian", "Fast Food", "Beverages"],
    priceForTwo: 3000,
    location: "Connaught Place, New Delhi",
    distance: "1.2 km",
    imageUrl: "/products/87eaef59996ca008a519054014accbaa_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 20% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 2,
    name: "Lord Of The Drinks",
    rating: 4.3,
    cuisines: ["Oriental", "North Indian", "Continental", "Italian", "Salad", "Fast Food", "Desserts", "Beverages"],
    priceForTwo: 2800,
    location: "Connaught Place, New Delhi",
    distance: "937 m",
    imageUrl: "/products/16d5cd13fbc13bcfece4d4333fb2e6ef_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 3,
    name: "Plum Coffee and Cocktails",
    rating: 4.4,
    cuisines: ["Continental", "North Indian", "Italian", "Asian"],
    priceForTwo: 3000,
    location: "Connaught Place, New Delhi",
    distance: "1 km",
    imageUrl: "/products/58a17094c90bda526c23ce87e6a99b94_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 4,
    name: "My Bar Headquarters",
    rating: 3.9,
    cuisines: ["North Indian", "Chinese", "Pizza", "Desserts"],
    priceForTwo: 1500,
    location: "Connaught Place, New Delhi",
    distance: "1.1 km",
    imageUrl: "/products/15ecea5e19d35b31311d398fcb1436f0_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 5,
    name: "Cafe Connaught ClubHouse",
    rating: 4.3,
    cuisines: ["North Indian", "Mughlai", "Italian", "Continental", "Asian", "Fast Food", "Desserts"],
    priceForTwo: 3000,
    location: "Connaught Place, New Delhi",
    distance: "1 km",
    imageUrl: "/products/8fbf0b59a34748767bd336e4443b02e6_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 6,
    name: "Cé La Vie Kitchen & Bar",
    rating: 4.3,
    cuisines: ["North Indian", "Mediterranean", "Continental", "Lebanese", "Italian", "Chinese", "Asian", "Bar Food"],
    priceForTwo: 3300,
    location: "Connaught Place, New Delhi",
    distance: "1.4 km",
    imageUrl: "/products/3ad7a12bd1f6fbf993708a3a8498369f_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 20% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 7,
    name: "Warehouse Cafe",
    rating: 4.2,
    cuisines: ["North Indian", "Italian", "Asian", "Kebab", "Beverages"],
    priceForTwo: 3000,
    location: "Connaught Place, New Delhi",
    distance: "1.4 km",
    imageUrl: "/products/5f54f91d785c7650cc9fcc9e21d5b0d7_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 8,
    name: "Openhouse Cafe",
    rating: 4.4,
    cuisines: ["Continental", "Chinese", "North Indian", "Mughlai", "Pizza", "Beverages", "Desserts", "Bar Food"],
    priceForTwo: 2000,
    location: "Connaught Place, New Delhi",
    distance: "1.4 km",
    imageUrl: "/products/5ae165fe31bfc309916514906ae1215e_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 9,
    name: "Ikk Panjab",
    rating: 4.5,
    cuisines: ["North Indian", "Mughlai", "Beverages"],
    priceForTwo: 3000,
    location: "Connaught Place, New Delhi",
    distance: "1.2 km",
    imageUrl: "/products/e490f3f36511b032662db78bd5d26b94_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 10,
    name: "The Darzi Bar & Kitchen",
    rating: 4.2,
    cuisines: ["North Indian", "Chinese", "Asian", "Italian", "Mughlai", "Desserts", "Tea", "Beverages"],
    priceForTwo: 4000,
    location: "Connaught Place, New Delhi",
    distance: "1.4 km",
    imageUrl: "/products/e6cbcb3162c11adcf58677f1c4110d9b_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 25% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 11,
    name: "Somewhere Restaurant & Bar",
    rating: 4.2,
    cuisines: ["North Indian", "Asian", "European", "Continental", "Lebanese", "Turkish", "Mediterranean", "Kebab"],
    priceForTwo: 3300,
    location: "Connaught Place, New Delhi",
    distance: "1.4 km",
    imageUrl: "/products/3224c047011af9a297160dd0605d1352_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 15% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 12,
    name: "Local",
    rating: 4.2,
    cuisines: ["North Indian", "Continental", "Mexican", "Italian", "Oriental", "Biryani", "Beverages"],
    priceForTwo: 2800,
    location: "Connaught Place, New Delhi",
    distance: "1.2 km",
    imageUrl: "/products/46e428b78f369f8fa533cfe29029d0e1_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 20% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 13,
    name: "Drama",
    rating: 4.3,
    cuisines: ["Asian", "Indian", "Continental", "Chinese", "Biryani", "Beverages", "Desserts"],
    priceForTwo: 3000,
    location: "Connaught Place, New Delhi",
    distance: "1.2 km",
    imageUrl: "/products/b6ed07abc6618d2da3e7b3f77dee08e9_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 15% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 14,
    name: "Hard Rock Cafe",
    rating: 4.1,
    cuisines: ["American", "Continental", "Italian", "Wraps", "Burger", "Desserts", "Fast Food", "Beverages"],
    priceForTwo: 1500,
    location: "Connaught Place, New Delhi",
    distance: "997 m",
    imageUrl: "/products/e490f3f36511b032662db78bd5d26b94_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 20% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 15,
    name: "Moti Mahal",
    rating: 4.3,
    cuisines: ["North Indian", "Mughlai", "Chinese", "Thai", "Seafood"],
    priceForTwo: 1500,
    location: "Connaught Place, New Delhi",
    distance: "1.5 km",
    imageUrl: "/products/82f5c6f79a5efe5f68711d4d36867ed1_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 16,
    name: "Brewtally Honest",
    rating: 4.5,
    cuisines: ["North Indian", "Pizza", "Pasta", "Chinese", "Bar Food", "Desserts", "Beverages"],
    priceForTwo: 2900,
    location: "Connaught Place, New Delhi",
    distance: "1.4 km",
    imageUrl: "/products/d6f6c9e0c6a03bc48652027071348399_o2_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 17,
    name: "Chili's Grill & Bar",
    rating: 4.4,
    cuisines: ["Mexican", "Pizza", "Pasta", "American", "Burger", "Tex-Mex", "Desserts"],
    priceForTwo: 1600,
    location: "Connaught Place, New Delhi",
    distance: "1.3 km",
    imageUrl: "/products/6571354415b0cc7ade3dbb9b7cc0196b_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 18,
    name: "Lazeez Affaire -Scindia House",
    rating: 4.4,
    cuisines: ["North Indian", "Mughlai", "Biryani", "Chinese", "Kebab", "Desserts"],
    priceForTwo: 2600,
    location: "Janpath, New Delhi",
    distance: "1.1 km",
    imageUrl: "/products/4ef5bc43798cd514cb76981062613228_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 19,
    name: "Silq",
    rating: 4.3,
    cuisines: ["Mediterranean", "Mughlai", "Modern Indian", "Beverages"],
    priceForTwo: 4500,
    location: "Chanakyapuri, New Delhi",
    distance: "3.6 km",
    imageUrl: "/products/5577eaf787eeea959511cda33d412165_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 20,
    name: "Castle's Barbeque",
    rating: 3.9,
    cuisines: ["North Indian", "BBQ", "Mughlai", "Desserts"],
    priceForTwo: 2600,
    location: "Connaught Place, New Delhi",
    distance: "1.1 km",
    imageUrl: "/products/b6da1f34658eb0532c1e4ce648cf1e5f_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 20% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 21,
    name: "Masaldani",
    rating: 4.2,
    cuisines: ["North Indian", "Biryani", "Kebab", "Seafood", "Lucknowi", "Beverages"],
    priceForTwo: 2200,
    location: "Sector 50, Noida",
    distance: "17.1 km",
    imageUrl: "/products/51aa6cb08e9977a96432be5718b80bad_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 22,
    name: "Dhaba - Estd 1986 Delhi",
    rating: 4.2,
    cuisines: ["Kebab", "North Indian", "Desserts", "Mughlai", "Beverages"],
    priceForTwo: 3000,
    location: "Connaught Place, New Delhi",
    distance: "1.3 km",
    imageUrl: "/products/3b5813a98f6a12478c57f26ef7a074ca_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 23,
    name: "The Barbeque Times",
    rating: 4.4,
    cuisines: ["BBQ", "South Indian", "North Indian", "Asian", "Mughlai", "Street Food", "Bakery", "Desserts"],
    priceForTwo: 2200,
    location: "Sector 50, Gurgaon",
    distance: "26.6 km",
    imageUrl: "/products/ae3cb4694435378f86051e09c6674d5a_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 24,
    name: "Berco's - If You Love Chinese",
    rating: 4.3,
    cuisines: ["Sichuan", "Thai", "Chinese", "Momos", "Seafood", "Desserts", "Tibetan", "Asian"],
    priceForTwo: 2000,
    location: "Connaught Place, New Delhi",
    distance: "1.3 km",
    imageUrl: "/products/f72a3abd1110818fd9d30e620c5a3398_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 25,
    name: "EFFINGUT",
    rating: 4.3,
    cuisines: ["North Indian", "Fast Food", "Chinese", "Desserts", "Beverages"],
    priceForTwo: 2500,
    location: "Golf Course Road, Gurgaon",
    distance: "21.2 km",
    imageUrl: "/products/76922e3fa04a181726896bd9949206f7_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 26,
    name: "Yeti - The Himalayan Kitchen",
    rating: 4.2,
    cuisines: ["Tibetan", "Asian", "Momos", "Nepalese", "North Eastern", "Shake", "Beverages"],
    priceForTwo: 2200,
    location: "Connaught Place, New Delhi",
    distance: "1.3 km",
    imageUrl: "/products/33cab35b72c7bfd1d1641ce440bb068f_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 27,
    name: "Ivoryy Fusion Bar",
    rating: 4.1,
    cuisines: ["Cafe", "Asian", "Modern Indian"],
    priceForTwo: 4700,
    location: "Connaught Place, New Delhi",
    distance: "1.1 km",
    imageUrl: "/products/04066b907d3bb1c9fb0845d9819fb06c_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 30% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 28,
    name: "Cedar House",
    rating: 4.3,
    cuisines: ["Asian", "Italian", "Seafood", "Chinese", "Japanese", "Kebab", "North Indian", "Pasta"],
    priceForTwo: 2200,
    location: "Connaught Place, New Delhi",
    distance: "993 m",
    imageUrl: "/products/3a91d85b5b19ac7044deb68ee188a982_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 29,
    name: "Noida Social",
    rating: 4.5,
    cuisines: ["North Indian", "Chinese", "Mexican", "Fusion", "Bar Food", "Pizza", "Biryani", "Beverages"],
    priceForTwo: 1500,
    location: "Sector 18, Noida",
    distance: "12.6 km",
    imageUrl: "/products/51aa6cb08e9977a96432be5718b80bad_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 30,
    name: "Parikrama - The Revolving Restaurant",
    rating: 4.0,
    cuisines: ["North Indian", "Chinese", "Italian", "Continental", "Beverages", "Desserts"],
    priceForTwo: 2500,
    location: "Connaught Place, New Delhi",
    distance: "1.2 km",
    imageUrl: "/products/1895341b9f30e057e45dd23c26f0e63a_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 31,
    name: "Kijiji - On The Roof",
    rating: 4.3,
    cuisines: ["Chinese", "North Indian", "Sushi", "Italian", "Desserts", "Beverages"],
    priceForTwo: 2500,
    location: "Sector 47, Gurgaon",
    distance: "28 km",
    imageUrl: "/products/2901fd0cb7ebe4c2f46b04821808c206_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 32,
    name: "Indus Flavour (Proudly Vegetarian)",
    rating: 4.5,
    cuisines: ["North Indian", "Chinese", "Fast Food"],
    priceForTwo: 1600,
    location: "Connaught Place, New Delhi",
    distance: "1.5 km",
    imageUrl: "/products/0f3f29119d3dffb43a5238affd1c6f58_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 33,
    name: "The Big Tree",
    rating: 4.4,
    cuisines: ["North Indian", "Biryani", "Fast Food", "Pizza", "Chinese", "Street Food"],
    priceForTwo: 1600,
    location: "Golf Course Road, Gurgaon",
    distance: "23.1 km",
    imageUrl: "/products/ff84da744bbfba795df60a537dbff851_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 34,
    name: "Kikli",
    rating: 4.4,
    cuisines: ["North Indian", "Kebab", "Mughlai"],
    priceForTwo: 3000,
    location: "Connaught Place, New Delhi",
    distance: "1.5 km",
    imageUrl: "/products/aaba16c78861b3c4c64ecb9543d2fc94_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 35,
    name: "Anardana",
    rating: 4.5,
    cuisines: ["North Indian", "Biryani", "Modern Indian", "Mughlai", "Chinese", "Desserts", "Beverages"],
    priceForTwo: 1800,
    location: "Netaji Subhash Place, New Delhi",
    distance: "9.6 km",
    imageUrl: "/products/a9c1b655d9e5b1a9e653c479929ef5f7_o2_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 15% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 36,
    name: "Forest Table",
    rating: 3.9,
    cuisines: [],
    priceForTwo: 2200,
    location: "Chanakyapuri, New Delhi",
    distance: "2.6 km",
    imageUrl: "/products/a8b4e71ea15bb56ca9120737edfe4d8c_o2_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 37,
    name: "Beerlin",
    rating: 4.5,
    cuisines: ["North Indian", "Mughlai", "Continental", "Lebanese", "Kebab", "Asian", "Italian", "Mexican"],
    priceForTwo: 3000,
    location: "Golf Course Road, Gurgaon",
    distance: "22.6 km",
    imageUrl: "/products/c377011fdc30e6b24096753e1fe54104_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 38,
    name: "Sly Granny",
    rating: 4.3,
    cuisines: ["Italian", "European", "Bar Food", "Salad", "Burger", "Sandwich", "Desserts", "Beverages"],
    priceForTwo: 3500,
    location: "Khan Market, New Delhi",
    distance: "3.3 km",
    imageUrl: "/products/7e15debd6a621bc114f1959ab19a0b66_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 39,
    name: "Gullak",
    rating: 4.0,
    cuisines: ["North Indian", "Chinese", "Fast Food", "Pizza", "Street Food", "Pasta", "Momos", "Beverages"],
    priceForTwo: 2500,
    location: "Sector 50, Noida",
    distance: "17.2 km",
    imageUrl: "/products/d9362ce5f7431f8a8c7f0c4aeb5f77aa_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 40,
    name: "Mount Fuji Japanese Pan Asian Restaurant & Bar",
    rating: 4.7,
    cuisines: ["Japanese", "Asian", "Chinese", "Thai", "Sushi", "Seafood", "Desserts", "Beverages"],
    priceForTwo: 2500,
    location: "Connaught Place, New Delhi",
    distance: "1.4 km",
    imageUrl: "/products/64f9a36ad23ae37fd09f368d29008333_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 41,
    name: "The Salt Cafe",
    rating: 4.4,
    cuisines: ["Continental", "Chinese", "North Indian", "Modern Indian", "Lebanese", "Japanese", "Mediterranean", "Italian"],
    priceForTwo: 2500,
    location: "Hajipur, Noida",
    distance: "18 km",
    imageUrl: "/products/c241d41057f58bbe08a8debbf190307c_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 42,
    name: "Fat Lulu's Cafe & Bar",
    rating: 4.2,
    cuisines: ["Italian", "Pasta", "Continental", "Beverages"],
    priceForTwo: 2700,
    location: "Khan Market, New Delhi",
    distance: "3.3 km",
    imageUrl: "/products/14e6cc1af3acfec0dd270e879cdd187e_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 15% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 43,
    name: "Bukhara - ITC Maurya",
    rating: 4.5,
    cuisines: ["North Indian", "Kebab", "Desserts"],
    priceForTwo: 8000,
    location: "Chanakyapuri, New Delhi",
    distance: "4.7 km",
    imageUrl: "/products/4ea18b30e1f3ef14a4d9b0047034f35e_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 44,
    name: "Out Of The Box",
    rating: 4.1,
    cuisines: ["European", "Oriental", "Pizza", "American"],
    priceForTwo: 3200,
    location: "Khan Market, New Delhi",
    distance: "3.3 km",
    imageUrl: "/products/fe22fce98e7a3842526f357a0cdfad37_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 45,
    name: "Karigari By Chef Harpal Singh Sokhi",
    rating: 4.4,
    cuisines: ["North Indian", "Kebab", "Biryani", "Mughlai"],
    priceForTwo: 2500,
    location: "Sector 51, Noida",
    distance: "16.7 km",
    imageUrl: "/products/d9362ce5f7431f8a8c7f0c4aeb5f77aa_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 46,
    name: "Daisy Mae - Cantina",
    rating: 4.4,
    cuisines: ["Mexican", "Desserts", "Fast Food"],
    priceForTwo: 1500,
    location: "Khan Market, New Delhi",
    distance: "3.3 km",
    imageUrl: "/products/bc07772aab20dbdfdc4013d901866888_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 15% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 47,
    name: "Olive Garden",
    rating: 4.4,
    cuisines: ["Beverages", "Italian", "American", "Pizza"],
    priceForTwo: 2500,
    location: "Aerocity, New Delhi",
    distance: "11.9 km",
    imageUrl: "/products/6b0fe55bf28069b5b52e157f4a83fe4e_o2_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 48,
    name: "Food Exchange - Novotel New Delhi City Centre",
    rating: 4.5,
    cuisines: ["South Indian", "Continental", "Asian", "North Indian", "Chinese", "Fast Food", "Healthy Food", "Desserts"],
    priceForTwo: 5000,
    location: "Paharganj, New Delhi",
    distance: "2.4 km",
    imageUrl: "/products/a8b4e71ea15bb56ca9120737edfe4d8c_o2_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 30% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 49,
    name: "Covah - The Cavern",
    rating: 4.1,
    cuisines: ["Japanese", "Italian", "Mediterranean"],
    priceForTwo: 4000,
    location: "Sector 43, Gurgaon",
    distance: "22 km",
    imageUrl: "/products/206628f971d8b6b7756316e5fdd32102_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 50,
    name: "Moriva",
    rating: 4.1,
    cuisines: ["Asian", "Continental", "Modern Indian", "Desserts"],
    priceForTwo: 2500,
    location: "Rajinder Nagar, New Delhi",
    distance: "3.1 km",
    imageUrl: "/products/6c4b51925d77411f0ee3a2c7fe69e8a9_o2_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 20% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 51,
    name: "Vicoli",
    rating: 4.3,
    cuisines: ["Continental", "Italian", "Pizza", "Pasta", "European", "Seafood", "Desserts"],
    priceForTwo: 4000,
    location: "DLF Phase 5, Gurgaon",
    distance: "21.5 km",
    imageUrl: "/products/e38d09f470604b7f756720d79c797e7b_o2_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 52,
    name: "Sana - Di - Ge",
    rating: 4.8,
    cuisines: ["North Indian", "South Indian", "Goan", "Mangalorean", "Kerala", "Desserts", "Beverages"],
    priceForTwo: 3700,
    location: "Chanakyapuri, New Delhi",
    distance: "3.5 km",
    imageUrl: "/products/721eb71bb62fc3e31934fa5b9adf0cf4_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 20% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 53,
    name: "Gulati",
    rating: 4.4,
    cuisines: ["North Indian", "Beverages", "Mughlai", "Biryani", "Kebab", "Desserts", "Street Food"],
    priceForTwo: 1600,
    location: "DLF Phase 1, Gurgaon",
    distance: "20.2 km",
    imageUrl: "/products/a2c69501977ef437d1e3f99a94b77bf1_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 54,
    name: "Mughal Mahal",
    rating: 3.9,
    cuisines: ["Mughlai", "North Indian", "Biryani", "Desserts", "Beverages", "Alcoholic Beverages"],
    priceForTwo: 2200,
    location: "Rajendra Place, New Delhi",
    distance: "3.9 km",
    imageUrl: "/products/1d4023ee4e325720057c8ec91681d546_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 15% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 55,
    name: "Qavalli",
    rating: 4.2,
    cuisines: ["North Indian", "Mughlai"],
    priceForTwo: 2500,
    location: "Nehru Place, New Delhi",
    distance: "9.2 km",
    imageUrl: "/products/2f7135285527a48a76cad69eaa33b0f3_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 56,
    name: "Rasayyah",
    rating: 4.5,
    cuisines: ["North Indian", "Fast Food", "BBQ", "Lucknowi", "Kashmiri", "Beverages", "Desserts"],
    priceForTwo: 2600,
    location: "Lodhi Colony, New Delhi",
    distance: "4.6 km",
    imageUrl: "/products/6b0fe55bf28069b5b52e157f4a83fe4e_o2_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 57,
    name: "Havemore Cyber Hub",
    rating: 4.7,
    cuisines: ["North Indian", "Mughlai", "Biryani"],
    priceForTwo: 2800,
    location: "DLF Cyber City, Gurgaon",
    distance: "18.8 km",
    imageUrl: "/products/867d915dad8e8f2c0e638dd60c88792a_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 58,
    name: "Jamun",
    rating: 4.5,
    cuisines: ["North Indian", "Mughlai", "Fast Food", "Beverages"],
    priceForTwo: 2300,
    location: "Lodhi Colony, New Delhi",
    distance: "4.7 km",
    imageUrl: "/products/a9a1f99309422d93d0f1cee96393d0f9_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 59,
    name: "Farzi Cafe",
    rating: 4.2,
    cuisines: ["Bar Food", "North Indian", "Burger", "Biryani", "Fast Food", "Desserts", "Beverages", "Kebab"],
    priceForTwo: 3000,
    location: "Connaught Place, New Delhi",
    distance: "1.3 km",
    imageUrl: "/products/b482d990f728163e5d5c0996c56d931a_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 60,
    name: "Cafe Neobaa",
    rating: 4.4,
    cuisines: ["North Indian", "Fast Food", "Biryani", "Chinese", "South Indian", "Pizza"],
    priceForTwo: 1200,
    location: "East Patel Nagar, New Delhi",
    distance: "4.1 km",
    imageUrl: "/products/c036fabc-36f2-4e52-896c-fbda9ad2cab1_o2_featured_v2.png",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 61,
    name: "Indy by Qla",
    rating: 4.7,
    cuisines: ["Indian", "North Indian", "Beverages"],
    priceForTwo: 4000,
    location: "Malviya Nagar, New Delhi",
    distance: "10.8 km",
    imageUrl: "/products/0b9002a1058ddd3d22e2f050de9575e6_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 62,
    name: "Bobachee by Chef Yuvraj Kohli",
    rating: 4.4,
    cuisines: ["North Indian", "Mughlai"],
    priceForTwo: 2500,
    location: "South Extension 2, New Delhi",
    distance: "6.4 km",
    imageUrl: "/products/624276488eb8fe83a44b80977f307b8d_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 15% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 63,
    name: "The Palm",
    rating: 4.2,
    cuisines: ["North Indian", "Pizza", "Asian", "Italian", "Mediterranean", "Bar Food", "Japanese", "Korean"],
    priceForTwo: 2500,
    location: "Sainik Farms, New Delhi",
    distance: "12.7 km",
    imageUrl: "/products/f2956a4ab1765e6b70b437ece935f2c0_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 64,
    name: "Segreto",
    rating: 4.4,
    cuisines: ["North Indian", "Chinese", "Pizza", "Continental"],
    priceForTwo: 2100,
    location: "Defence Colony, New Delhi",
    distance: "6.1 km",
    imageUrl: "/products/08ac5d8f000f429eaf5f9780af647a8c_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 65,
    name: "Dum-Pukht - ITC Maurya",
    rating: 4.9,
    cuisines: ["North Indian", "Mughlai"],
    priceForTwo: 8000,
    location: "Chanakyapuri, New Delhi",
    distance: "4.7 km",
    imageUrl: "/products/146f5159cacf46f520ae9b23bc2b47ca_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 66,
    name: "Wakame",
    rating: 4.5,
    cuisines: ["Asian", "Japanese", "Oriental"],
    priceForTwo: 3300,
    location: "Defence Colony, New Delhi",
    distance: "6.4 km",
    imageUrl: "/products/7bfc819dd28271b31e3dad0d8caa3dda_o2_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 67,
    name: "Ministry Of Beer",
    rating: 4.3,
    cuisines: ["North Indian", "Italian", "Asian", "Continental", "Chinese", "Beverages"],
    priceForTwo: 2900,
    location: "Connaught Place, New Delhi",
    distance: "1.5 km",
    imageUrl: "/products/20b12b311d6bdec919a8a1f5796fd44d_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 68,
    name: "Dr. Zombie",
    rating: 4.2,
    cuisines: ["North Indian", "Thai", "European", "Italian", "Pizza", "BBQ", "Chinese", "Desserts"],
    priceForTwo: 1800,
    location: "Connaught Place, New Delhi",
    distance: "1.4 km",
    imageUrl: "/products/e6a5cee2b070f39a35e707a16c8da410_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 20% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 69,
    name: "Themis Barbeque House",
    rating: 4.2,
    cuisines: ["North Indian", "Italian", "Asian", "BBQ", "Desserts", "Beverages"],
    priceForTwo: 2000,
    location: "DLF Phase 3, Gurgaon",
    distance: "17.6 km",
    imageUrl: "/products/64d096642bae1d130c1df8dfb7bf0ec5_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 70,
    name: "The GT Road",
    rating: 4.3,
    cuisines: ["North Indian", "Mughlai", "Bar Food", "Desserts", "Beverages"],
    priceForTwo: 2400,
    location: "Connaught Place, New Delhi",
    distance: "1.5 km",
    imageUrl: "/products/e6a5cee2b070f39a35e707a16c8da410_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 71,
    name: "Downtown Noida - Alfresco Pub & Brewery",
    rating: 0,
    cuisines: ["North Indian", "Chinese", "Fast Food", "Mediterranean", "Middle Eastern", "Beverages"],
    priceForTwo: 3000,
    location: "Sector 62, Noida",
    distance: "14.5 km",
    imageUrl: "/products/cc3fb86515c76efa82bcbe18f7ed3048_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 15% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 72,
    name: "Cafe Hawkers",
    rating: 4.1,
    cuisines: ["Chinese", "Fast Food", "Desserts", "Beverages", "Momos"],
    priceForTwo: 1600,
    location: "Connaught Place, New Delhi",
    distance: "1.5 km",
    imageUrl: "/products/08ac5d8f000f429eaf5f9780af647a8c_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 15% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 73,
    name: "64/6 - Country Inn & Suites By Radisson",
    rating: 4.7,
    cuisines: ["North Indian", "Chinese", "Thai", "Continental"],
    priceForTwo: 6600,
    location: "Sahibabad, Ghaziabad",
    distance: "13.4 km",
    imageUrl: "/products/41e4c0bb5277eb4de9edff584071ab6c_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 20% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 74,
    name: "Asur - Microbrewery",
    rating: 4.2,
    cuisines: ["Bar Food", "Salad", "Asian", "Italian", "North Indian"],
    priceForTwo: 3100,
    location: "Moti Nagar, New Delhi",
    distance: "7 km",
    imageUrl: "/products/347f890247f0cdc51900942d2c073aa3_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 75,
    name: "Qla",
    rating: 4.4,
    cuisines: ["European", "Italian", "Mediterranean", "Desserts", "Beverages"],
    priceForTwo: 4000,
    location: "Mehrauli, New Delhi",
    distance: "11.2 km",
    imageUrl: "/products/4827f038886ea3c34f9e44277dc74ed5_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 76,
    name: "Daina",
    rating: 0,
    cuisines: [],
    priceForTwo: 2400,
    location: "Laxmi Nagar, New Delhi",
    distance: "7.4 km",
    imageUrl: "/products/a213a3fa819983beaa68b9d07421cae2_o2_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 77,
    name: "Fairytales",
    rating: 4.4,
    cuisines: ["Continental"],
    priceForTwo: 1300,
    location: "Sector 20, Dwarka, New Delhi",
    distance: "15.6 km",
    imageUrl: "/products/c3232f3d33629cd0f08a225c4f0b4087_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 78,
    name: "The Clay Oven",
    rating: 4.4,
    cuisines: ["North Indian", "Mughlai", "Chinese", "Desserts", "Seafood", "Beverages"],
    priceForTwo: 2000,
    location: "Green Park, New Delhi",
    distance: "7.6 km",
    imageUrl: "/products/2eec8d63c5c77876f646e5e7fcc007a3_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 79,
    name: "Kanjivaraam",
    rating: 3.7,
    cuisines: ["South Indian"],
    priceForTwo: 2000,
    location: "Golf Course Extension, Gurgaon",
    distance: "29 km",
    imageUrl: "/products/b825e7129c44700dbdf29400358d1005_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 80,
    name: "Ilios",
    rating: 4.1,
    cuisines: ["Continental", "North Indian", "Asian", "Oriental", "Chinese", "Burger", "Sushi", "Beverages"],
    priceForTwo: 2800,
    location: "Raja Garden, New Delhi",
    distance: "8 km",
    imageUrl: "/products/e6a5cee2b070f39a35e707a16c8da410_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 15% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 81,
    name: "Sambar Ritual",
    rating: 4.8,
    cuisines: ["South Indian", "Chettinad"],
    priceForTwo: 900,
    location: "Sector 58, Gurgaon",
    distance: "25.8 km",
    imageUrl: "/products/64d096642bae1d130c1df8dfb7bf0ec5_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 82,
    name: "Syrah - Hyatt Regency",
    rating: 4.2,
    cuisines: ["Mediterranean"],
    priceForTwo: 6000,
    location: "Bhikaji Cama Place, New Delhi",
    distance: "6.8 km",
    imageUrl: "/products/8c858975f605d5e0158f9c0979daf86d_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 83,
    name: "QBA",
    rating: 4.5,
    cuisines: ["North Indian", "Italian", "Continental", "Pizza", "Mughlai", "Fast Food", "Desserts", "Beverages"],
    priceForTwo: 3000,
    location: "Connaught Place, New Delhi",
    distance: "1.3 km",
    imageUrl: "/products/1df9e1af1c3b6ea990a6a4951e5f163f_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 84,
    name: "The Turkey Project - Pizzeria And Sangria Bar",
    rating: 4.9,
    cuisines: ["Pizza", "Cafe", "Italian", "American", "Beverages", "Desserts"],
    priceForTwo: 1700,
    location: "Defence Colony, New Delhi",
    distance: "6.9 km",
    imageUrl: "/products/e329ccd7b57c5ccf74b695a56e5bf973_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 85,
    name: "P.F. Chang's",
    rating: 4.3,
    cuisines: ["Asian", "Chinese", "Sushi", "Indo-Chinese", "Beverages"],
    priceForTwo: 2800,
    location: "DLF Cyber City, Gurgaon",
    distance: "18.8 km",
    imageUrl: "/products/e1217a7667725d16deb705dcbd90c16a_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 86,
    name: "Daily Drama",
    rating: 4.5,
    cuisines: ["Cafe", "Beverages", "Fast Food", "Coffee"],
    priceForTwo: 1400,
    location: "Defence Colony, New Delhi",
    distance: "6.1 km",
    imageUrl: "/products/a213a3fa819983beaa68b9d07421cae2_o2_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 87,
    name: "Diablo",
    rating: 4.1,
    cuisines: ["North Indian", "Continental", "Italian", "Chinese", "Seafood", "Pizza"],
    priceForTwo: 3500,
    location: "Sector 94, Noida",
    distance: "13.9 km",
    imageUrl: "/products/4827f038886ea3c34f9e44277dc74ed5_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 88,
    name: "Cafe Saka",
    rating: 4.4,
    cuisines: ["Sandwich", "Coffee", "Pizza"],
    priceForTwo: 2000,
    location: "Safdarjung, New Delhi",
    distance: "7.5 km",
    imageUrl: "/products/d6fe066d268119676c51a4b95083154c_o2_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 15% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 89,
    name: "Mahabelly",
    rating: 4.4,
    cuisines: ["Kerala", "South Indian", "Seafood"],
    priceForTwo: 1400,
    location: "Saket, New Delhi",
    distance: "10.8 km",
    imageUrl: "/products/e6a5cee2b070f39a35e707a16c8da410_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 90,
    name: "Red",
    rating: 4.7,
    cuisines: ["Asian"],
    priceForTwo: 4000,
    location: "Vasant Vihar, New Delhi",
    distance: "8.7 km",
    imageUrl: "/products/b7b75c686c33bee4b65aefd24ace0e11_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 91,
    name: "Coba",
    rating: 4.3,
    cuisines: ["North Indian", "Continental", "Chinese", "Mexican", "Mediterranean", "Italian", "Bar Food"],
    priceForTwo: 3000,
    location: "Vasant Kunj, New Delhi",
    distance: "12.3 km",
    imageUrl: "/products/641805035bf4c19fec75450b6990232a_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 92,
    name: "Fort City Brew Pub",
    rating: 4.8,
    cuisines: ["Middle Eastern", "Mexican", "North Indian", "Fast Food", "Continental", "Pizza", "Beverages"],
    priceForTwo: 3000,
    location: "Hauz Khas, New Delhi",
    distance: "8.3 km",
    imageUrl: "/products/35d067a5973db23b4357c4fc95f675b2_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 93,
    name: "Luka Downtown",
    rating: 4.6,
    cuisines: ["North Indian", "Asian", "Italian", "Chinese", "Mediterranean", "Middle Eastern"],
    priceForTwo: 4000,
    location: "DLF Cyber City, Gurgaon",
    distance: "18.7 km",
    imageUrl: "/products/dc4e272d56d13f56a9ff3459eba84ae2_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 94,
    name: "House Of Boho",
    rating: 4.2,
    cuisines: ["Mediterranean", "Asian", "Sushi", "Italian", "Pizza", "Pasta", "North Indian"],
    priceForTwo: 2800,
    location: "South Extension 2, New Delhi",
    distance: "7.1 km",
    imageUrl: "/products/279fc22f9c26fb1b35a4d745736fdf35_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 20% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 95,
    name: "Clock Tower",
    rating: 4.7,
    cuisines: ["Bar Food", "North Indian", "Asian", "Pizza", "Pasta", "Continental", "Beverages"],
    priceForTwo: 3500,
    location: "Golf Course Road, Gurgaon",
    distance: "22.5 km",
    imageUrl: "/products/263e1983baaebae40eaaad05c65b9d8a_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 96,
    name: "Mestizo",
    rating: 4.3,
    cuisines: ["American", "Mexican"],
    priceForTwo: 3000,
    location: "Vasant Vihar, New Delhi",
    distance: "8.7 km",
    imageUrl: "/products/228302983c266215997219fac0f083a6_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 97,
    name: "Under The Neem",
    rating: 4.3,
    cuisines: ["North Indian", "Healthy Food", "Italian", "Pizza", "Pasta", "Desserts", "Beverages"],
    priceForTwo: 3000,
    location: "Sector 83, Gurgaon",
    distance: "38.3 km",
    imageUrl: "/products/f2956a4ab1765e6b70b437ece935f2c0_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 98,
    name: "Drums Of Heaven- Serving Since 1994",
    rating: 4.2,
    cuisines: ["Chinese", "Thai", "Asian", "Seafood", "Desserts"],
    priceForTwo: 2300,
    location: "Green Park, New Delhi",
    distance: "7.6 km",
    imageUrl: "/products/e18d0f5c69a10613ec1bd7d02b54dcdb_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 99,
    name: "Roma by Unplugged",
    rating: 4.2,
    cuisines: ["Modern Indian", "Continental", "Italian", "Mediterranean"],
    priceForTwo: 3000,
    location: "Connaught Place, New Delhi",
    distance: "1.5 km",
    imageUrl: "/products/a0b4a924606dcde51580be136d2b4221_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 100,
    name: "Lama Kitchen",
    rating: 4.1,
    cuisines: ["Nepalese", "Tibetan", "Chinese", "Beverages"],
    priceForTwo: 1400,
    location: "Hauz Khas Village, New Delhi",
    distance: "8.2 km",
    imageUrl: "/products/04a3f0372eba87702e4c8f1bba68e381_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 15% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 101,
    name: "MKT",
    rating: 4.3,
    cuisines: ["Asian", "European", "Japanese", "North Indian", "Mexican", "Thai", "Pizza", "Pasta"],
    priceForTwo: 5000,
    location: "Chanakyapuri, New Delhi",
    distance: "5 km",
    imageUrl: "/products/e1e59307a8114182fb131b90e96bd525_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 102,
    name: "FIO Cookhouse and Bar",
    rating: 4.5,
    cuisines: ["European", "Modern Indian", "Italian", "Pizza", "North Indian", "Seafood", "Desserts", "Beverages"],
    priceForTwo: 4500,
    location: "Nehru Place, New Delhi",
    distance: "9.2 km",
    imageUrl: "/products/0d4ee9a0beb509c240ff678171e83f60_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 103,
    name: "The Sunday House",
    rating: 4.3,
    cuisines: ["Asian", "Mediterranean", "North Indian", "Pizza", "Pasta", "Sushi"],
    priceForTwo: 2400,
    location: "Punjabi Bagh, New Delhi",
    distance: "9.3 km",
    imageUrl: "/products/6a5f390c8af6a698dde66add8a744bec_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 104,
    name: "Sufiaana By Cherish",
    rating: 4.5,
    cuisines: ["North Indian", "Biryani", "Kebab"],
    priceForTwo: 2000,
    location: "Ashok Vihar Phase 2, New Delhi",
    distance: "8.7 km",
    imageUrl: "/products/dc557d0b26c3e566346797a68c731612_o2_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 105,
    name: "Unico",
    rating: 4.9,
    cuisines: ["Pizza", "Italian", "Pasta", "Salad", "Burger", "Sandwich"],
    priceForTwo: 3000,
    location: "DLF Phase 5, Gurgaon",
    distance: "21.5 km",
    imageUrl: "/products/191e8adc341e09bd1beec312062e480e_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 106,
    name: "The Record Room",
    rating: 3.9,
    cuisines: ["North Indian", "Chinese", "Pizza", "Middle Eastern", "Thai", "Pasta", "Fast Food", "Salad"],
    priceForTwo: 2600,
    location: "Hauz Khas Village, New Delhi",
    distance: "8.1 km",
    imageUrl: "/products/269f168ca3811e8009151bd7257c65d7_o2_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 30% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 107,
    name: "Flow Brew & Dine",
    rating: 4.4,
    cuisines: ["European", "Asian", "Japanese", "Pasta", "Pizza", "North Indian", "Desserts", "Beverages"],
    priceForTwo: 3500,
    location: "Saket, New Delhi",
    distance: "10.8 km",
    imageUrl: "/products/e39aa094f9760ed00ce468103f3f49c8_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 108,
    name: "Zaffran By Kasbah",
    rating: 4.7,
    cuisines: ["North Indian", "Mughlai", "Biryani"],
    priceForTwo: 2500,
    location: "Lala Lajpat Rai Marg, New Delhi",
    distance: "8 km",
    imageUrl: "/products/8cec7fa783fdd3c0f87bde9990828f50_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 109,
    name: "Open Tap 29",
    rating: 4.4,
    cuisines: ["Bar Food", "Oriental", "Continental", "Fast Food", "North Indian", "Beverages"],
    priceForTwo: 2000,
    location: "Sector 29, Gurgaon",
    distance: "22.6 km",
    imageUrl: "/products/e812c0d46693549ed8024e2d7be878ef_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 15% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 110,
    name: "Noya",
    rating: 4.8,
    cuisines: ["Asian", "Chinese"],
    priceForTwo: 3000,
    location: "Lala Lajpat Rai Marg, New Delhi",
    distance: "8 km",
    imageUrl: "/products/361842564c5a9b3fda3b99d1bda7f69b_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 111,
    name: "The Barbeque Company",
    rating: 4.0,
    cuisines: ["BBQ", "North Indian", "Fast Food", "Desserts", "Beverages"],
    priceForTwo: 2800,
    location: "Sector 75, Noida",
    distance: "17.5 km",
    imageUrl: "/products/62aeeb238f2a532104a46498611ab4f1_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 112,
    name: "W Va Bien",
    rating: 3.9,
    cuisines: ["Asian", "North Indian", "Continental", "Sushi", "Italian", "Biryani", "Desserts", "Beverages"],
    priceForTwo: 3500,
    location: "Rajinder Nagar, New Delhi",
    distance: "3.2 km",
    imageUrl: "/products/35d067a5973db23b4357c4fc95f675b2_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 25% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 113,
    name: "Quaff Brewing Co.",
    rating: 4.4,
    cuisines: ["North Indian", "Chinese", "Pizza", "Pasta"],
    priceForTwo: 3000,
    location: "DLF Cyber City, Gurgaon",
    distance: "18.9 km",
    imageUrl: "/products/64606c3b0f0e0b6d072720516a376813_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 114,
    name: "Breakin' Brew",
    rating: 4.7,
    cuisines: ["Cafe", "Coffee", "Chinese", "Continental", "Italian", "Pasta", "North Indian", "Desserts"],
    priceForTwo: 1800,
    location: "Karkardooma, New Delhi",
    distance: "9.2 km",
    imageUrl: "/products/5d60ef7cfffadb34642dcd3615caba0d_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 115,
    name: "Zetu",
    rating: 3.9,
    cuisines: [],
    priceForTwo: 8000,
    location: "Mehrauli, New Delhi",
    distance: "11.2 km",
    imageUrl: "/products/e1e59307a8114182fb131b90e96bd525_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 116,
    name: "Glori",
    rating: 4.4,
    cuisines: ["Turkish", "Italian", "Asian", "North Indian", "Pizza", "Pasta", "Sushi", "Mexican"],
    priceForTwo: 2500,
    location: "Mayapuri Phase 1, New Delhi",
    distance: "8.9 km",
    imageUrl: "/products/806bda47e95e298915eb12a5a029ed49_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 15% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 117,
    name: "Echoes",
    rating: 4.5,
    cuisines: ["Pizza", "Burger", "Momos", "Coffee", "Pasta", "Shake", "Chinese", "North Indian"],
    priceForTwo: 1200,
    location: "Kailash Colony, New Delhi",
    distance: "8.7 km",
    imageUrl: "/products/ef709d5eceee2de61bf2ec91e3bc4ac5_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 118,
    name: "Indie Fusion",
    rating: 4.1,
    cuisines: ["North Indian", "Chinese", "Healthy Food", "Pizza", "Fast Food", "Desserts", "Coffee", "Beverages"],
    priceForTwo: 2000,
    location: "Karkardooma, New Delhi",
    distance: "9.1 km",
    imageUrl: "/products/1b844c3177efc3506ab8710e5849c8d1_o2_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 119,
    name: "NAO - Next Asian Outing",
    rating: 4.5,
    cuisines: ["Asian", "Desserts", "Beverages", "Chinese", "Japanese", "Thai", "Korean", "Sushi"],
    priceForTwo: 2000,
    location: "Sector 98, Noida",
    distance: "18.2 km",
    imageUrl: "/products/634ef0a4f506629c9a0c5e549e1eabcb_o2_featured_v2.jpg",
    isTableBooking: true,
    offers: [],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  },
  {
    id: 120,
    name: "Pankh",
    rating: 4.2,
    cuisines: ["North Indian", "Modern Indian"],
    priceForTwo: 2800,
    location: "Punjabi Bagh, New Delhi",
    distance: "9 km",
    imageUrl: "/products/0ca36205830eb8b9f9ab5c7804a945dd_featured_v2.jpg",
    isTableBooking: true,
    offers: [
      { type: 'walk-in', title: 'Flat 10% OFF' }
    ],
    bankOffers: [],
    extraOffers: ["Get extra ₹75 off using PAYTMUPI"]
  }
];