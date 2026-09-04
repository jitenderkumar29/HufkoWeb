// components/Header/HeaderCategory.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import styles from './HeaderCategory.module.scss';
import { faStore, faUtensils, faBasketShopping, faSeedling, faHandsHelping, IconDefinition, faNotesMedical, faHandshake, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AllCategory from '../../HomePage/AllCategory/AllCategory';
import { GroceryCategories, groceryCategoriesSubHeader } from '@/app/data/Categorywise/GroceryCategories';
import HeroBannerAll from '@/components/HomePage/HeroBannerAll/HeroBannerAll';
import { ShopingHeroBannerData } from '@/app/data/HeroBannerwise/ShopingHero';
import { DineoutHeroBannerData, FoodHeroBannerLeftContent } from '@/app/data/HeroBannerwise/FoodHero';
import { GroceryHeroBannerData } from '@/app/data/HeroBannerwise/GroceryHero';
import { FlowerHeroBannerData } from '@/app/data/HeroBannerwise/FlowerHero';
import { CareHeroBannerData } from '@/app/data/HeroBannerwise/CareHero';
import ShoppingSlides1 from '@/components/Shopping/ShoppingSlides1/ShoppingSlides1';
import { ShopingSlide1SmartPhoneDeals } from '@/app/data/Shoping/ShopingSlide1';
import { PharmaHeroBannerData } from '@/app/data/HeroBannerwise/PharmaHero';
import { categoriesDataCardHalfDynamic, categoriesDataMap, categoriesInternationalFlowerDeliveryData, customerTestimonialDataFlower, homeDecorSubSubCategoriesSubHeader, hottestBrandsWomenFashion, kidsFashionCarouselCategories, menFashionCarouselCategories, ScrollItemWomensBeauty, ShopingCategories, shoppingCategoriesSubHeader, slidesDataFashionFullSlide, slidesHalfFlower, slidesHalfFlowerBouquetsForThem, slidesHalfFlowerGift, slidesHalfFlowerShopByOccasionsRelations, slidesHalfShoppingMenFashion, slidesHalfShoppingWomenBeauty, slidesShoppingKidsFashion, slidesShoppingMenFashion, slidesShoppingWomenBeauty, slidesShoppingWomenFashion, toBrandsKidsFashion, toBrandsMenFashion, toBrandsWomenBeauty, toBrandsWomenFashion, womenBeautyCarouselCategories, womenFashionCarouselCategories } from '@/app/data/Categorywise/ShopingCategories';
import AllCategoryOne from '@/components/HomePage/AllCategoryOne/AllCategoryOne';
import { flowerCategoriesSubHeader, FlowersCategories } from '@/app/data/Categorywise/FlowersCategories';
import { CareCategories, careCategoriesSubHeader } from '@/app/data/Categorywise/CareCategories';
import { PharmaCategories, pharmaCategoriesSubHeader } from '@/app/data/Categorywise/PharmaCategories';
import AllCategoryRound from '@/components/HomePage/AllCategoryRound/AllCategoryRound';
import { GroceryData1, GroceryData2 } from '@/app/data/GroceryPageData/GroceryData';
import { CandiesGumsData, ColdDrinksJuicesData, DairyBreadEggsData, HookahData, MouthFreshenersData, RollingPapersData, SnacksMunchiesData } from '@/app/data/GroceryPageData/GroceryProductData';
import GroceryProductList from '@/components/Grocery/GroceryProductList/GroceryProductList';
import { WholesaleCategories, WholesaleCategoriesList, wholesaleCategoriesSubHeader } from '@/app/data/Categorywise/WholesaleCategories';
import { WholesaleHeroBannerData } from '@/app/data/HeroBannerwise/Wholesale';
import AllCategoryGrid from '@/components/HomePage/AllCategoryGrid/AllCategoryGrid';
import { DineoutItemsList, DineoutSpecialItemsList, FoodDineOutSpecialCollections, FoodsCategories, foodCategoriesSubHeader } from "@/app/data/Categorywise/FoodsCategories";
import SubHeader, { SubHeaderItem } from '../SubHeader/SubHeader';
import HufkoGSTInfo from '@/components/HomePage/HufkoGSTInfo/HufkoGSTInfo';
import WelcomeVideoHufko from '@/components/HomePage/VideoPlayerDesign/WelcomeVideoHufko/WelcomeVideoHufko';
import DownloadApp from '@/components/HomePage/DownloadApp/DownloadApp';
import FranchiseHufkoSlide from '@/components/HomePage/FranchiseHufko/FranchiseHufkoSlide';
import PoweringSlides from '@/components/HomePage/PoweringSlides/PoweringSlides';
import HeroBannerHalfSlide from '@/components/Shopping/HeroBanner/HeroBannerHalfSlide/HeroBannerHalfSlide';
import HufkoPrime, { defaultBenefits } from '@/components/HomePage/HufkoPrime/HufkoPrime';
import { ArrowRight, Clock, IndianRupee, Shield, Users } from 'lucide-react';
import ShopByMainCategory from '@/components/Shopping/ShopByItemcategory/ShopByMainCategory/ShopByMainCategory';
import HeroBannerLeftContent from '@/components/Shopping/HeroBanner/HeroBannerLeftContent/HeroBannerLeftContent';
import ProductCategoryCardHalfDynamic from '@/components/Shopping/ItemListDesigns/ProductCategoryCardHalfDynamic/ProductCategoryCardHalfDynamic';
import CustomerTestimonial from '@/components/Shopping/ItemListDesigns/CustomerTestimonial/CustomerTestimonial';
import CategoryListCard from '@/components/Shopping/ItemListDesigns/CategoryListCard/CategoryListCard';
import FoodDineOutCard, { FoodDineOutItem } from '@/components/FoodDelivery/FoodDesigns/FoodDineOutCard/FoodDineOutCard';
import FoodRoundCarousel from '@/components/FoodDelivery/FoodDesigns/FoodRoundCarousel/FoodRoundCarousel';
import FoodBanner from '@/components/FoodDelivery/FoodDesigns/FoodBanner/FoodBanner';
import DineOutItemsListCard, { DineOutItemInterface } from '@/components/FoodDelivery/FoodDesigns/DineOutItemsListCard/DineOutItemsListCard';
import DineOutRestDetails from '@/components/FoodDelivery/DineOutRestDetails/DineOutRestDetails';

interface CategoryItem {
  id: string;
  name: string;
  icon: IconDefinition;
}

const STORAGE_KEYS = {
  SELECTED_COUNTRY: 'address_selection_country',
  SELECTED_CITY: 'address_selection_city',
  SELECTED_STATE: 'address_selection_state',
  SELECTED_LOCALITY: 'address_selection_locality',
  SELECTED_PINCODE: 'address_selection_pincode',
  SELECTED_FULL_ADDRESS: 'address_selection_full_address',
};

const getFromStorage = (key: string): string | null => {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return null;
  }
};

// Category to sub-header mapping
const categoryToSubHeaderMapping: Record<string, string> = {
  'electronics': 'electronics_sub_header',
  'home_kitchen': 'home_kitchen_sub_header',
  'home_decor': 'home_decor_sub_header',
  'home_furniture': 'home_furniture_sub_header',
  'mobiles_tablets': 'mobiles_tablets_sub_header',
  'men': 'mens_fashion_sub_header',
  'women': 'women_fashion_sub_header',
  'kids': 'kids_fashion_sub_header',
  'beauty': 'women_beauty_sub_header',
  'tvs_appliances': 'appliances_sub_header',
  'baby_toys': 'baby_toys_sub_header',
  'sports_fitness': 'sports_fitness_sub_header',
  'books': 'books_sub_header',
  'jewellery': 'jewellery_sub_header',
  'auto_accessories': 'auto_accessories_sub_header',
};

// Food category mapping
const foodCategoryMapping: Record<string, string> = {
  'all_sub_header': 'all',
  'order_now_sub_header': 'order_now_food',
  'dine_out_sub_header': 'dine_out_food',
  'popular_sub_header': 'popular_food',
  'offers_sub_header': 'offers_food',
  'breakfast_sub_header': 'breakfast_food',
  'lunch_sub_header': 'lunch_food',
  'dinner_sub_header': 'dinner_food',
  'snacks_sub_header': 'snacks_food',
  'street_food_sub_header': 'street_food',
  'fast_food_sub_header': 'fast_food',
  'north_indian_sub_header': 'north_indian_food',
  'south_indian_sub_header': 'south_indian_food',
  'punjabi_sub_header': 'punjabi_food',
  'gujarati_sub_header': 'gujarati_food',
  'rajasthani_sub_header': 'rajasthani_food',
  'maharashtrian_sub_header': 'maharashtrian_food',
  'bengali_sub_header': 'bengali_food',
  'hyderabadi_sub_header': 'hyderabadi_food',
  'kashmiri_sub_header': 'kashmiri_food',
  'chinese_sub_header': 'chinese_food',
  'thai_sub_header': 'thai_food',
  'japanese_sub_header': 'japanese_food',
  'korean_sub_header': 'korean_food',
  'italian_sub_header': 'italian_food',
  'mexican_sub_header': 'mexican_food',
  'continental_sub_header': 'continental_food',
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
  'chicken_sub_header': 'chicken_food',
  'mutton_sub_header': 'mutton_food',
  'fish_seafood_sub_header': 'fish_seafood_food',
  'eggs_sub_header': 'eggs_food',
  'kebabs_sub_header': 'kebabs_food',
  'bbq_grill_sub_header': 'bbq_grill_food',
  'tandoori_sub_header': 'tandoori_food',
  'pure_veg_sub_header': 'pure_veg_food',
  'healthy_meals_sub_header': 'healthy_meals_food',
  'salads_sub_header': 'salads_food',
  'soups_sub_header': 'soups_food',
  'protein_meals_sub_header': 'protein_meals_food',
  'vegan_sub_header': 'vegan_food',
  'jain_food_sub_header': 'jain_food',
  'bakery_sub_header': 'bakery_food',
  'cakes_sub_header': 'cakes_food',
  'pastries_sub_header': 'pastries_food',
  'ice_cream_sub_header': 'ice_cream_food',
  'desserts_sub_header': 'desserts_food',
  'brownies_sub_header': 'brownies_food',
  'cookies_sub_header': 'cookies_food',
  'tea_sub_header': 'tea_food',
  'coffee_sub_header': 'coffee_food',
  'milkshakes_sub_header': 'milkshakes_food',
  'smoothies_sub_header': 'smoothies_food',
  'juices_sub_header': 'juices_food',
  'soft_drinks_sub_header': 'soft_drinks_food',
  'mocktails_sub_header': 'mocktails_food',
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

const HeaderCategory: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Shopping states
  const [selectedShoppingCategory, setSelectedShoppingCategory] = useState<string>('all');
  const [selectedElectronicsSubCategory, setSelectedElectronicsSubCategory] = useState<string>('all');
  const [selectedHomeDecorSubCategory, setSelectedHomeDecorSubCategory] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubHeaderItem, setSelectedSubHeaderItem] = useState<SubHeaderItem | null>(null);

  // Food states
  const [selectedFoodCategory, setSelectedFoodCategory] = useState<string>('all_sub_header');
  const [selectedFoodCategoryValue, setSelectedFoodCategoryValue] = useState<string>('all');

  // State for selected dineout special category
  const [selectedDineoutCategory, setSelectedDineoutCategory] = useState<FoodDineOutItem | null>(null);

  // State for showing restaurant details
  const [showRestaurantDetails, setShowRestaurantDetails] = useState<boolean>(false);
  const [selectedRestaurantId, setSelectedRestaurantId] = useState<string | null>(null);

  // Active tab state
  const [activeTab, setActiveTab] = useState<string>('home');

  // All categories including home
  const allCategories: CategoryItem[] = [
    { id: 'home', name: 'Home', icon: faHome },
    { id: 'food', name: 'Food Delivery', icon: faUtensils },
    { id: 'grocery', name: 'Grocery Delivery', icon: faBasketShopping },
    { id: 'shopping', name: 'Shopping', icon: faStore },
    { id: 'flower', name: 'Flower Delivery', icon: faSeedling },
    { id: 'care', name: 'Care Services', icon: faHandsHelping },
    { id: 'pharma', name: 'Pharma', icon: faNotesMedical },
    { id: 'wholesale', name: 'Wholesale Delivery', icon: faHandshake }
  ];

  // Categories to display in tabs (excluding home)
  const displayCategories = allCategories.filter(cat => cat.id !== 'home');

  // Get values from URL params
  const categoryParam = searchParams?.get('category') || null;
  const shoppingParam = searchParams?.get('shoppingCategory') || null;
  const electronicsParam = searchParams?.get('electronicsSubCategory') || null;
  const homeDecorParam = searchParams?.get('homeDecorSubCategory') || null;
  const foodParam = searchParams?.get('foodCategory') || null;
  const dineoutParam = searchParams?.get('dineoutCategory') || null;

  // State for address information from localStorage
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedLocality, setSelectedLocality] = useState<string>('');

  // Update state when URL params change
  useEffect(() => {
    console.log('URL params changed:', { categoryParam, foodParam, dineoutParam, shoppingParam });

    // Update active tab
    if (categoryParam && allCategories.some(cat => cat.id === categoryParam)) {
      setActiveTab(categoryParam);
    } else {
      setActiveTab('home');
    }

    // Update shopping category
    if (shoppingParam) {
      setSelectedShoppingCategory(shoppingParam);
    } else {
      setSelectedShoppingCategory('all');
    }

    // Update food category
    if (foodParam) {
      setSelectedFoodCategory(foodParam);
      const categoryValue = foodCategoryMapping[foodParam] || 'all';
      setSelectedFoodCategoryValue(categoryValue);
    } else {
      setSelectedFoodCategory('all_sub_header');
      setSelectedFoodCategoryValue('all');
    }

    // Update dineout category
    if (dineoutParam) {
      const category = FoodDineOutSpecialCollections.find(
        item => item.dineoutSpecialCategoryID === dineoutParam
      );
      if (category) {
        console.log('Found dineout category:', category.title);
        setSelectedDineoutCategory(category);
        setSelectedFoodCategory('dineout_special');
        setActiveTab('food');
        // Reset restaurant details when navigating to a category
        setShowRestaurantDetails(false);
        setSelectedRestaurantId(null);
      } else {
        setSelectedDineoutCategory(null);
      }
    } else {
      setSelectedDineoutCategory(null);
    }

    // Update electronics subcategory
    if (electronicsParam) {
      setSelectedElectronicsSubCategory(electronicsParam);
    } else {
      setSelectedElectronicsSubCategory('all');
    }

    // Update home decor subcategory
    if (homeDecorParam) {
      setSelectedHomeDecorSubCategory(homeDecorParam);
    } else {
      setSelectedHomeDecorSubCategory('all');
    }
  }, [categoryParam, foodParam, dineoutParam, shoppingParam, electronicsParam, homeDecorParam]);

  // Reset all categories to home
  const resetToHome = () => {
    setActiveTab('home');
    setSelectedShoppingCategory('all');
    setSelectedElectronicsSubCategory('all');
    setSelectedHomeDecorSubCategory('all');
    setSelectedFoodCategory('all_sub_header');
    setSelectedFoodCategoryValue('all');
    setSelectedDineoutCategory(null);
    setShowRestaurantDetails(false);
    setSelectedRestaurantId(null);
    router.replace('/', { scroll: false });
  };

  // Listen for logo click event
  useEffect(() => {
    const handleLogoClick = () => {
      resetToHome();
    };
    window.addEventListener('logoClick', handleLogoClick);
    return () => {
      window.removeEventListener('logoClick', handleLogoClick);
    };
  }, []);

  // Handle category change
  const handleCategoryChange = (categoryId: string) => {
    if (categoryId === activeTab) return;

    setActiveTab(categoryId);
    setShowRestaurantDetails(false);
    setSelectedRestaurantId(null);

    if (categoryId !== 'shopping') {
      setSelectedShoppingCategory('all');
      setSelectedElectronicsSubCategory('all');
      setSelectedHomeDecorSubCategory('all');
    }

    if (categoryId !== 'food') {
      setSelectedFoodCategory('all_sub_header');
      setSelectedFoodCategoryValue('all');
      setSelectedDineoutCategory(null);
    }

    const params = new URLSearchParams(window.location.search);
    params.set('category', categoryId);

    if (categoryId !== 'shopping') {
      params.delete('shoppingCategory');
      params.delete('electronicsSubCategory');
      params.delete('homeDecorSubCategory');
    }

    if (categoryId !== 'food') {
      params.delete('foodCategory');
      params.delete('dineoutCategory');
    }

    router.replace(`?${params.toString()}`, { scroll: false });
  };

  // Handle food subcategory selection
  const handleFoodSubCategorySelect = (item: SubHeaderItem) => {
    const categoryId = item.id || item.name.toLowerCase().replace(/\s+/g, '_');
    setSelectedFoodCategory(categoryId);
    setSelectedDineoutCategory(null);
    setShowRestaurantDetails(false);
    setSelectedRestaurantId(null);

    const categoryValue = foodCategoryMapping[categoryId] || 'all';
    setSelectedFoodCategoryValue(categoryValue);

    const params = new URLSearchParams(window.location.search);
    params.set('foodCategory', categoryId);
    params.delete('dineoutCategory');

    router.replace(`?${params.toString()}`, { scroll: false });
    console.log('Selected food category:', item, 'Category value:', categoryValue);
  };

  // Handle dineout category click
  const handleDineoutCategoryClick = (item: FoodDineOutItem, index: number) => {
    console.log('Dineout category clicked:', item.title, item.dineoutSpecialCategoryID);
    
    setShowRestaurantDetails(false);
    setSelectedRestaurantId(null);

    const params = new URLSearchParams(window.location.search);
    if (item.dineoutSpecialCategoryID) {
      params.set('dineoutCategory', item.dineoutSpecialCategoryID);
      params.set('foodCategory', 'dineout_special');
      params.set('category', 'food');
    }
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  // Handle dineout item click - show restaurant details
  const handleDineoutItemClick = (item: DineOutItemInterface) => {
    console.log('Restaurant clicked:', item.name, 'ID:', item.id);
    setSelectedRestaurantId(String(item.id));
    setShowRestaurantDetails(true);
    // Scroll to top when showing details
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle back from restaurant details
  const handleBackFromRestaurantDetails = () => {
    console.log('Back to results');
    setShowRestaurantDetails(false);
    setSelectedRestaurantId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle shopping subcategory selection
  const handleShoppingSubCategorySelect = (item: SubHeaderItem) => {
    const categoryId = item.id || item.name.toLowerCase().replace(/\s+/g, '_');
    setSelectedShoppingCategory(categoryId);

    const params = new URLSearchParams(window.location.search);
    params.set('shoppingCategory', categoryId);

    if (categoryId !== 'electronics_sub_header') {
      setSelectedElectronicsSubCategory('all');
      params.delete('electronicsSubCategory');
    }
    if (categoryId !== 'home_decor_sub_header') {
      setSelectedHomeDecorSubCategory('all');
      params.delete('homeDecorSubCategory');
    }

    router.replace(`?${params.toString()}`, { scroll: false });

    setSelectedCategory(item.category || categoryId);
    setSelectedSubHeaderItem(item);
  };

  // Handle electronics subcategory selection
  const handleElectronicsSubCategorySelect = (item: SubHeaderItem) => {
    const subCategoryId = item.id || item.name.toLowerCase().replace(/\s+/g, '_');
    setSelectedElectronicsSubCategory(subCategoryId);

    const params = new URLSearchParams(window.location.search);
    params.set('electronicsSubCategory', subCategoryId);
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  // Handle home decor subcategory selection
  const handleHomeDecorSubCategorySelect = (item: SubHeaderItem) => {
    const subCategoryId = item.id || item.name.toLowerCase().replace(/\s+/g, '_');
    setSelectedHomeDecorSubCategory(subCategoryId);

    const params = new URLSearchParams(window.location.search);
    params.set('homeDecorSubCategory', subCategoryId);
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  // Check if a specific shopping category is selected
  const isShoppingCategorySelected = (categoryId: string) => {
    return selectedShoppingCategory === categoryId;
  };

  // Handle category click from AllCategoryOne
  const handleShoppingCategoryClick = (category: { id: string; name: string }) => {
    if (activeTab !== 'shopping') {
      setActiveTab('shopping');
    }

    const subHeaderId = categoryToSubHeaderMapping[category.id];

    if (subHeaderId) {
      setSelectedShoppingCategory(subHeaderId);

      const subHeaderItem = shoppingCategoriesSubHeader.find(
        item => item.id === subHeaderId || item.name.toLowerCase().replace(/\s+/g, '_') === subHeaderId
      );

      if (subHeaderItem) {
        setSelectedSubHeaderItem(subHeaderItem);
        setSelectedCategory(subHeaderItem.category || category.id);
      }

      const params = new URLSearchParams(window.location.search);
      params.set('category', 'shopping');
      params.set('shoppingCategory', subHeaderId);

      setSelectedElectronicsSubCategory('all');
      params.delete('electronicsSubCategory');
      setSelectedHomeDecorSubCategory('all');
      params.delete('homeDecorSubCategory');

      router.replace(`?${params.toString()}`, { scroll: false });
    } else {
      setSelectedShoppingCategory('all');
      const params = new URLSearchParams(window.location.search);
      params.set('category', 'shopping');
      params.set('shoppingCategory', 'all');
      router.replace(`?${params.toString()}`, { scroll: false });
    }
  };

  // Generate location-based title for dineout
  const getLocationBasedTitleDineout = (baseTitle: string): string => {
    const locality = selectedLocality || getFromStorage(STORAGE_KEYS.SELECTED_LOCALITY) || '';
    const city = selectedCity || getFromStorage(STORAGE_KEYS.SELECTED_CITY) || '';
    const country = selectedCountry || getFromStorage(STORAGE_KEYS.SELECTED_COUNTRY) || '';

    let locationString = '';
    if (locality) {
      locationString = country ? `${locality}, ${country}` : locality;
    } else if (city) {
      locationString = country ? `${city}, ${country}` : city;
    } else if (country) {
      locationString = country;
    }

    if (locationString) {
      return `${baseTitle} in ${locationString}`;
    }
    return baseTitle;
  };

  // Generate location-based title
  const getLocationBasedTitle = (baseTitle: string): string => {
    const locality = selectedLocality || getFromStorage(STORAGE_KEYS.SELECTED_LOCALITY) || '';
    const city = selectedCity || getFromStorage(STORAGE_KEYS.SELECTED_CITY) || '';
    const country = selectedCountry || getFromStorage(STORAGE_KEYS.SELECTED_COUNTRY) || '';

    let locationString = '';
    if (locality) {
      locationString = country ? `${locality}, ${country}` : locality;
    } else if (city) {
      locationString = country ? `${city}, ${country}` : city;
    } else if (country) {
      locationString = country;
    }

    if (locationString) {
      return `${baseTitle} in ${locationString}`;
    }
    return baseTitle;
  };

  // Render Restaurant Details
  const renderRestaurantDetails = () => {
    if (!selectedRestaurantId) return null;
    
    console.log('Rendering Restaurant Details for ID:', selectedRestaurantId);
    return (
      <div className={styles.restaurantDetailsContainer}>
        {/* <button 
          className={styles.backToResultsButton}
          onClick={handleBackFromRestaurantDetails}
        >
          ← Back to results
        </button> */}
        <DineOutRestDetails id={selectedRestaurantId} />
      </div>
    );
  };

  // Render Dineout Special Category Page Content
  const renderDineoutSpecialCategoryPage = () => {
    // If showing restaurant details, render that instead
    if (showRestaurantDetails && selectedRestaurantId) {
      return renderRestaurantDetails();
    }

    const categories = FoodDineOutSpecialCollections.map(item => ({
      id: item.id.toString(),
      name: item.title,
      imageUrl: item.imageUrl,
      url: item.link,
      dineoutSpecialCategoryID: item.dineoutSpecialCategoryID,
    }));

    const handleCategoryClick = (item: any) => {
      if (item.dineoutSpecialCategoryID) {
        handleDineoutCategoryClick(item, 0);
      } else {
        router.push(item.url);
      }
    };

    // Get the selected category name
    const categoryName = selectedDineoutCategory?.title || '';

    // Build the title with category name
    const getTitleWithCategory = () => {
      const baseTitle = "";
      const locationPart = getLocationBasedTitleDineout(baseTitle);

      // If category name exists, append it
      if (categoryName) {
        return `${categoryName} Restaurants ${locationPart}`;
      }
      return locationPart;
    };

    return (
      <div className={styles.dineoutSpecialPageContainer}>
        <FoodRoundCarousel
          categories={categories}
          title=""
          cardWidth={150}
          cardHeight={150}
          cardGap={15}
          showScrollbar={false}
          showArrows={true}
          imageScale={1.1}
          onCategoryClick={handleCategoryClick}
          fixedSize={true}
          selectedCategoryId={selectedDineoutCategory?.dineoutSpecialCategoryID || null}
          highlightColor="#530605"
          itemsPerView={{
            mobile: 3,
            tablet: 4,
            desktop: 5,
            largeDesktop: 8,
          }}
        />
        <div className={styles.dineoutHeroBanner}>
          <FoodBanner
            banners={DineoutHeroBannerData}
            minHeight={200}
            maxHeight={600}
          />
        </div>
        <div className={styles.dineoutItemsListCard}>
          <DineOutItemsListCard
            items={DineoutSpecialItemsList}
            title={getTitleWithCategory()}
            onItemClick={handleDineoutItemClick}
            columns={4}
          />
        </div>
      </div>
    );
  };

  // Render food content
  const renderFoodContent = () => {
    // FIRST: Check if we're showing restaurant details
    if (showRestaurantDetails && selectedRestaurantId) {
      return renderRestaurantDetails();
    }

    // SECOND: If a dineout special category is selected, show the DineoutSpecialCategoryPage content
    if (selectedDineoutCategory && selectedFoodCategory === 'dineout_special') {
      return renderDineoutSpecialCategoryPage();
    }

    // THIRD: Default food content
    return (
      <>
        {selectedFoodCategory === "all_sub_header" && (
          <div className={styles.SubCategory}>
            <HeroBannerLeftContent
              banners={FoodHeroBannerLeftContent}
              defaultAlign="left"
            />
            <div className={styles.categoryGap}>
              <AllCategory categories={FoodsCategories} />
            </div>
            <WelcomeVideoHufko
              title="Premium food delivery app"
              titleHighlight="World's #1"
              subtitle="Enjoy fast online ordering on the Hufko app"
              videoSrc="/videos/delivery_by_hufko.mp4"
              logoSrc="/icons/logo_video.png"
              appStoreLink="/"
              playStoreLink="/"
              className="custom-hero"
              showLogo={false}
              showAppStore={true}
              showPlayStore={true}
              muted={true}
            />
            <div className={styles.dineOutCard}>
              <FoodDineOutCard
                items={FoodDineOutSpecialCollections}
                title="Dine Out Collections Nearby You"
                viewAllLink="/collections"
                viewAllText="View All"
                autoPlayInterval={3000}
                showArrows={true}
                onItemClick={handleDineoutCategoryClick}
              />
            </div>
            <div className={styles.dineoutItemsListCard}>
              <DineOutItemsListCard
                items={DineoutItemsList}
                title={getLocationBasedTitle("Top collections dineout restaurants")}
                onItemClick={handleDineoutItemClick}
                columns={4}
              />
            </div>
            <HufkoPrime
              benefits={defaultBenefits}
              onMoreClick={() => console.log('More clicked!')}
            />
            <DownloadApp />
            <FranchiseHufkoSlide
              badgeText="World's Largest Instant Delivery App Platform"
              badgeIcon={<Shield size={16} />}
              heading="Own a World's Largest #1"
              highlightText="Ultra Premium Restaurant Franchise"
              description="Join Hufko and own a supermarket franchise that runs on a system designed for every Indian city, strong returns, and real on-ground support from day one."
              franchiseCategory="food_beverage"
              detailsPagePath="/franchise-details"
              stats={[
                { value: '3,00,000+', label: 'Franchise Partners', icon: Users },
                { value: '3 billion+', label: 'Min. Investment', icon: IndianRupee },
                { value: '0', label: 'Royalty Fee - 2 Years', icon: Clock },
              ]}
              buttons={[
                { label: 'Order Now', variant: 'primary', icon: <ArrowRight size={20} /> },
                { label: 'More', variant: 'secondary', icon: <ArrowRight size={20} /> },
              ]}
              images={[
                { src: "/products/Premium_Restaurant_Franchise1.png", alt: "Hypermarket", width: 3000, height: 1800 },
                { src: "/products/Premium_Restaurant_Franchise2.png", alt: "HUFKO Store", width: 3000, height: 1800 },
                { src: "/products/Premium_Restaurant_Franchise3.png", alt: "Premium Restaurant", width: 3000, height: 2000 },
                { src: "/products/Premium_Restaurant_Franchise4.png", alt: "Pharmaceutical", width: 3000, height: 2000 },
              ]}
              badges={[
                { text: '4.9/5 Rating', position: 'top-right', backgroundColor: '#ec2024', color: '#ffffff' },
                { text: '✓ FSSAI Certified', position: 'bottom-left', backgroundColor: '#ffffff', color: '#055346' },
              ]}
              backgroundColor="#055346"
              gradient="linear-gradient(135deg, #055346 0%, #076b58 50%, #055346 100%)"
              overlayOpacity={0.35}
              className="custom-class"
              showWave={true}
              waveColor="white"
              autoPlayInterval={3000}
              showDots={true}
              onButtonClick={(index) => console.log(`Button ${index} clicked`)}
              onBadgeClick={(badge) => console.log('Badge clicked:', badge)}
              onSlideChange={(index) => console.log('Slide changed to:', index)}
            >
              <span style={{ color: '#ffffff' }}> - Start with Hufko</span>
            </FranchiseHufkoSlide>
          </div>
        )}

        {selectedFoodCategory !== "all_sub_header" && selectedFoodCategory !== "dineout_special" && (
          <div className={styles.electronicsSubCategory}>
            <ShopByMainCategory
              category={selectedFoodCategoryValue}
              selectedItem={selectedSubHeaderItem}
              subHeaderItem={selectedSubHeaderItem}
            />
          </div>
        )}
      </>
    );
  };

  return (
    <>
      <div className={styles.headerCategory}>
        <div className={styles.container}>
          <div className={styles.categoryTabs}>
            {displayCategories.map((category) => (
              <button
                key={category.id}
                className={`${styles.categoryTab} ${activeTab === category.id ? styles.active : ''}`}
                onClick={() => handleCategoryChange(category.id)}
              >
                <FontAwesomeIcon icon={category.icon} className={styles.icon} />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.tabContainer}>
        {/* Home Section */}
        {activeTab === "home" && (
          <div className={styles.allCategory}>
            <WelcomeVideoHufko
              title="Premium Instant Delivery App"
              titleHighlight="World's #1"
              subtitle="Enjoy fast online ordering on the Hufko app"
              videoSrc="/videos/food_all_video.mp4"
              logoSrc="/icons/logo_video.png"
              appStoreLink="/"
              playStoreLink="/"
              className="custom-hero"
              muted={true}
            />
            <PoweringSlides />
            <HufkoGSTInfo />
            <HufkoPrime
              benefits={defaultBenefits}
              onMoreClick={() => console.log('More clicked!')}
            />
            <DownloadApp />
            <FranchiseHufkoSlide
              badgeText="World's Largest Instant Delivery App Platform"
              badgeIcon={<Shield size={16} />}
              heading="World's Largest #1"
              highlightText="AI Powered"
              description="Enjoy Premium Food and Dining at Premium Restaurants Fast and Easy Online Ordering on the HUFKO App"
              franchiseCategory="home_food_beverage"
              detailsPagePath="/franchise-details"
              stats={[
                { value: '3,00,000+', label: 'Franchise Partners', icon: Users },
                { value: '3 billion+', label: 'Min. Investment', icon: IndianRupee },
                { value: '0', label: 'Royalty Fee - 2 Years', icon: Clock },
              ]}
              buttons={[
                { label: 'Order Now', variant: 'primary', icon: <ArrowRight size={20} /> },
                { label: 'More', variant: 'secondary', icon: <ArrowRight size={20} /> },
              ]}
              images={[
                { src: "/products/HUFKO_Store_FranchiseHufko2.png", alt: "Hypermarket", width: 3000, height: 1800 },
                { src: "/products/HUFKO_Store_FranchiseHufko.png", alt: "HUFKO Store", width: 3000, height: 1800 },
                { src: "/products/HUFKO_Store_FranchiseHufko3123.png", alt: "Premium Restaurant", width: 3000, height: 2000 },
                { src: "/products/HUFKO_Store_FranchiseHufko4123.png", alt: "Pharmaceutical", width: 3000, height: 2000 },
              ]}
              badges={[
                { text: '4.9/5 Rating', position: 'top-right', backgroundColor: '#ec2024', color: '#ffffff' },
                { text: '✓ FSSAI Certified', position: 'bottom-left', backgroundColor: '#ffffff', color: '#055346' },
              ]}
              backgroundColor="#055346"
              gradient="linear-gradient(135deg, #055346 0%, #076b58 50%, #055346 100%)"
              overlayOpacity={0.35}
              className="custom-class"
              showWave={true}
              waveColor="white"
              autoPlayInterval={3000}
              showDots={true}
              onButtonClick={(index) => console.log(`Button ${index} clicked`)}
              onBadgeClick={(badge) => console.log('Badge clicked:', badge)}
              onSlideChange={(index) => console.log('Slide changed to:', index)}
            >
              <span style={{ color: '#ffffff' }}> Premium Instant Delivery Technology Platform</span>
            </FranchiseHufkoSlide>
          </div>
        )}

        {/* Food Section */}
        {activeTab === "food" && (
          <div className={styles.allCategory}>
            <SubHeader
              items={foodCategoriesSubHeader}
              defaultActive={selectedDineoutCategory ? 'dineout_special' : selectedFoodCategory}
              onSelect={handleFoodSubCategorySelect}
            />
            {renderFoodContent()}
          </div>
        )}

        {/* Grocery Section */}
        {activeTab === "grocery" && (
          <div className={styles.allCategory}>
            <SubHeader
              items={groceryCategoriesSubHeader}
              defaultActive="All"
              onSelect={(item) => console.log(item.name)}
            />
            <HeroBannerAll banners={GroceryHeroBannerData} height={360} />
            <div className={styles.categoryGap}>
              <AllCategory categories={GroceryCategories} />
            </div>
            <WelcomeVideoHufko
              title=""
              titleHighlight=""
              subtitle=""
              videoSrc="/videos/grocery_hufko.mp4"
              logoSrc="/icons/logo_video.png"
              appStoreLink="/"
              playStoreLink="/"
              className="custom-hero"
              showLogo={false}
              showAppStore={false}
              showPlayStore={false}
              muted={true}
            />
            <AllCategoryRound categories={GroceryData1} />
            <AllCategoryRound categories={GroceryData2} />
            <div className={styles.GroceryProductCategory}>
              <GroceryProductList category="Dairy, Bread & Eggs" grocery={DairyBreadEggsData} groceryCategory="milk" />
              <GroceryProductList category="Rolling Paper & Tobacco" grocery={RollingPapersData} groceryCategory="tobacco" />
              <GroceryProductList category="Snacks & Munchies" grocery={SnacksMunchiesData} groceryCategory="snacks" />
              <GroceryProductList category="Hookah" grocery={HookahData} groceryCategory="Hookah" />
              <GroceryProductList category="Mouth fresheners" grocery={MouthFreshenersData} groceryCategory="fresheners" />
              <GroceryProductList category="Cold Drinks, & Juices" grocery={ColdDrinksJuicesData} groceryCategory="cold" />
              <GroceryProductList category="Candies & Gums" grocery={CandiesGumsData} groceryCategory="candies" />
            </div>
            <FranchiseHufkoSlide
              badgeText="World's Largest Instant Delivery App Platform"
              badgeIcon={<Shield size={16} />}
              heading="Own a World's Largest #1"
              highlightText="Supermarket Franchise"
              description="Join Hufko and own a supermarket franchise that runs on a system designed for every Indian city, strong returns, and real on-ground support from day one."
              franchiseCategory="grocery_beverage"
              detailsPagePath="/franchise-details"
              stats={[
                { value: '3,00,000+', label: 'Franchise Partners', icon: Users },
                { value: '3 billion+', label: 'Min. Investment', icon: IndianRupee },
                { value: '0', label: 'Royalty Fee - 2 Years', icon: Clock },
              ]}
              buttons={[
                { label: 'Order Now', variant: 'primary', icon: <ArrowRight size={20} /> },
                { label: 'More', variant: 'secondary', icon: <ArrowRight size={20} /> },
              ]}
              images={[
                { src: "/products/Franchise_Hufko1.png", alt: "Hypermarket", width: 3000, height: 1800 },
                { src: "/products/Franchise_Hufko2.png", alt: "HUFKO Store", width: 3000, height: 1800 },
                { src: "/products/Franchise_Hufko3.png", alt: "Premium Restaurant", width: 3000, height: 2000 },
                { src: "/products/Franchise_Hufko4.png", alt: "Pharmaceutical", width: 3000, height: 2000 },
              ]}
              badges={[
                { text: '4.9/5 Rating', position: 'top-right', backgroundColor: '#ec2024', color: '#ffffff' },
                { text: '✓ FSSAI Certified', position: 'bottom-left', backgroundColor: '#ffffff', color: '#055346' },
              ]}
              backgroundColor="#055346"
              gradient="linear-gradient(135deg, #055346 0%, #076b58 50%, #055346 100%)"
              overlayOpacity={0.35}
              className="custom-class"
              showWave={true}
              waveColor="white"
              onButtonClick={(index) => console.log(`Button ${index} clicked`)}
              onBadgeClick={(badge) => console.log('Badge clicked:', badge)}
            >
              <span style={{ color: '#ffffff' }}> - Start with Hufko</span>
            </FranchiseHufkoSlide>
          </div>
        )}

        {/* Shopping Section */}
        {activeTab === "shopping" && (
          <div className={styles.allCategory}>
            <SubHeader
              key={`shopping-${selectedShoppingCategory}`}
              items={shoppingCategoriesSubHeader}
              defaultActive={selectedShoppingCategory}
              categoriesData={categoriesDataMap}
              onSelect={handleShoppingSubCategorySelect}
            />

            {isShoppingCategorySelected("all") && (
              <div className={styles.electronicsSubCategory}>
                <HeroBannerAll banners={ShopingHeroBannerData} height={375} />
                <div className={styles.categoryGap}>
                  <AllCategoryOne
                    categories={ShopingCategories}
                    onCategoryClick={handleShoppingCategoryClick}
                  />
                </div>
                <WelcomeVideoHufko
                  title="Premium food delivery app"
                  titleHighlight="World's #1"
                  subtitle="Enjoy fast online ordering on the Hufko app"
                  videoSrc="/videos/shopping_section_video.mp4"
                  logoSrc="/icons/logo_video.png"
                  appStoreLink="/"
                  playStoreLink="/"
                  className="custom-hero"
                  showLogo={false}
                  showAppStore={true}
                  showPlayStore={true}
                  muted={true}
                />
                <ShoppingSlides1
                  title="Today's Top Smartphone Deals"
                  deals={ShopingSlide1SmartPhoneDeals}
                  cardWidth={200}
                  showArrow={true}
                />
                <FranchiseHufkoSlide
                  badgeText="World's Largest Instant Delivery App Platform"
                  badgeIcon={<Shield size={16} />}
                  heading="Own a World's Largest #1"
                  highlightText="Hypermarket Franchise"
                  description="Join Hufko and own a supermarket franchise that runs on a system designed for every Indian city, strong returns, and real on-ground support from day one."
                  franchiseCategory="shopping_beverage"
                  detailsPagePath="/franchise-details"
                  stats={[
                    { value: '3,00,000+', label: 'Franchise Partners', icon: Users },
                    { value: '3 billion+', label: 'Min. Investment', icon: IndianRupee },
                    { value: '0', label: 'Royalty Fee - 2 Years', icon: Clock },
                  ]}
                  buttons={[
                    { label: 'Order Now', variant: 'primary', icon: <ArrowRight size={20} /> },
                    { label: 'More', variant: 'secondary', icon: <ArrowRight size={20} /> },
                  ]}
                  images={[
                    { src: "/products/Hypermarket_Franchise1.png", alt: "Hypermarket", width: 3000, height: 1800 },
                    { src: "/products/Hypermarket_Franchise2.png", alt: "HUFKO Store", width: 3000, height: 1800 },
                    { src: "/products/Hypermarket_Franchise3.png", alt: "Premium Restaurant", width: 3000, height: 2000 },
                    { src: "/products/Hypermarket_Franchise4.png", alt: "Pharmaceutical", width: 3000, height: 2000 },
                  ]}
                  badges={[
                    { text: '4.9/5 Rating', position: 'top-right', backgroundColor: '#ec2024', color: '#ffffff' },
                    { text: '✓ FSSAI Certified', position: 'bottom-left', backgroundColor: '#ffffff', color: '#055346' },
                  ]}
                  backgroundColor="#055346"
                  gradient="linear-gradient(135deg, #055346 0%, #076b58 50%, #055346 100%)"
                  overlayOpacity={0.35}
                  className="custom-class"
                  showWave={true}
                  waveColor="white"
                  onButtonClick={(index) => console.log(`Button ${index} clicked`)}
                  onBadgeClick={(badge) => console.log('Badge clicked:', badge)}
                >
                  <span style={{ color: '#ffffff' }}> - Start with Hufko</span>
                </FranchiseHufkoSlide>
              </div>
            )}

            {isShoppingCategorySelected("electronics_sub_header") && (
              <div className={styles.electronicsSubCategory}>
                <ShopByMainCategory
                  category={selectedCategory}
                  selectedItem={selectedSubHeaderItem}
                  subHeaderItem={selectedSubHeaderItem}
                />
              </div>
            )}

            {isShoppingCategorySelected("home_furniture_sub_header") && (
              <div className={styles.electronicsSubCategory}>
                <ShopByMainCategory
                  category={selectedCategory}
                  selectedItem={selectedSubHeaderItem}
                  subHeaderItem={selectedSubHeaderItem}
                />
              </div>
            )}

            {isShoppingCategorySelected("home_kitchen_sub_header") && (
              <div className={styles.electronicsSubCategory}>
                <ShopByMainCategory
                  category={selectedCategory}
                  selectedItem={selectedSubHeaderItem}
                  subHeaderItem={selectedSubHeaderItem}
                />
              </div>
            )}

            {isShoppingCategorySelected("home_decor_sub_header") && (
              <div className={styles.electronicsSubCategory}>
                <ShopByMainCategory
                  category={selectedCategory}
                  selectedItem={selectedSubHeaderItem}
                  subHeaderItem={selectedSubHeaderItem}
                />
              </div>
            )}

            {isShoppingCategorySelected("mens_fashion_sub_header") && (
              <div className={styles.electronicsSubCategory}>
                <ShopByMainCategory
                  category={selectedCategory}
                  selectedItem={selectedSubHeaderItem}
                  subHeaderItem={selectedSubHeaderItem}
                />
              </div>
            )}

            {isShoppingCategorySelected("women_fashion_sub_header") && (
              <div className={styles.electronicsSubCategory}>
                <ShopByMainCategory
                  category={selectedCategory}
                  selectedItem={selectedSubHeaderItem}
                  subHeaderItem={selectedSubHeaderItem}
                />
              </div>
            )}

            {isShoppingCategorySelected("kids_fashion_sub_header") && (
              <div className={styles.electronicsSubCategory}>
                <ShopByMainCategory
                  category={selectedCategory}
                  selectedItem={selectedSubHeaderItem}
                  subHeaderItem={selectedSubHeaderItem}
                />
              </div>
            )}

            {isShoppingCategorySelected("women_beauty_sub_header") && (
              <div className={styles.electronicsSubCategory}>
                <ShopByMainCategory
                  category={selectedCategory}
                  selectedItem={selectedSubHeaderItem}
                  subHeaderItem={selectedSubHeaderItem}
                />
              </div>
            )}

            {isShoppingCategorySelected("sports_fitness_sub_header") && (
              <div className={styles.electronicsSubCategory}>
                <ShopByMainCategory
                  category={selectedCategory}
                  selectedItem={selectedSubHeaderItem}
                  subHeaderItem={selectedSubHeaderItem}
                />
              </div>
            )}

            {isShoppingCategorySelected("baby_toys_sub_header") && (
              <div className={styles.electronicsSubCategory}>
                <ShopByMainCategory
                  category={selectedCategory}
                  selectedItem={selectedSubHeaderItem}
                  subHeaderItem={selectedSubHeaderItem}
                />
              </div>
            )}

            {isShoppingCategorySelected("books_sub_header") && (
              <div className={styles.electronicsSubCategory}>
                <ShopByMainCategory
                  category={selectedCategory}
                  selectedItem={selectedSubHeaderItem}
                  subHeaderItem={selectedSubHeaderItem}
                />
              </div>
            )}

            {isShoppingCategorySelected("auto_accessories_sub_header") && (
              <div className={styles.electronicsSubCategory}>
                <ShopByMainCategory
                  category={selectedCategory}
                  selectedItem={selectedSubHeaderItem}
                  subHeaderItem={selectedSubHeaderItem}
                />
              </div>
            )}

            {isShoppingCategorySelected("jewellery_sub_header") && (
              <div className={styles.electronicsSubCategory}>
                <ShopByMainCategory
                  category={selectedCategory}
                  selectedItem={selectedSubHeaderItem}
                  subHeaderItem={selectedSubHeaderItem}
                />
              </div>
            )}

            {isShoppingCategorySelected("appliances_sub_header") && (
              <div className={styles.electronicsSubCategory}>
                <ShopByMainCategory
                  category={selectedCategory}
                  selectedItem={selectedSubHeaderItem}
                  subHeaderItem={selectedSubHeaderItem}
                />
              </div>
            )}

            {isShoppingCategorySelected("mobiles_tablets_sub_header") && (
              <div className={styles.electronicsSubCategory}>
                <ShopByMainCategory
                  category={selectedCategory}
                  selectedItem={selectedSubHeaderItem}
                  subHeaderItem={selectedSubHeaderItem}
                />
              </div>
            )}
          </div>
        )}

        {/* Flower Section */}
        {activeTab === "flower" && (
          <div className={styles.allCategory}>
            <SubHeader
              items={flowerCategoriesSubHeader}
              defaultActive="All"
              onSelect={(item) => console.log(item.name)}
            />
            <HeroBannerAll banners={FlowerHeroBannerData} height={360} />
            <div className={styles.categoryGap}>
              <AllCategory categories={FlowersCategories} />
            </div>
            <WelcomeVideoHufko
              title=""
              titleHighlight=""
              subtitle=""
              videoSrc="/videos/flower.mp4"
              logoSrc="/icons/logo_video.png"
              appStoreLink="/"
              playStoreLink="/"
              className="custom-hero"
              showLogo={false}
              showAppStore={false}
              showPlayStore={false}
              muted={true}
            />
            <HeroBannerHalfSlide
              banners={slidesHalfFlower}
              itemsPerView={{
                mobile: 1,
                tablet: 2,
                laptop: 3,
                desktop: 4.5
              }}
              autoScrollInterval={10000}
              showArrows={true}
              height={250}
              backgroundColor="#f5f5f5"
              onBannerClick={(banner) => console.log('Banner clicked:', banner)}
            />
            <div className={styles.headingContent}>
              <h2 className={styles.heading}>Shop By Occasions & Relations
                <br />
                <p className={styles.subHeading}>Surprise Your Loved Ones</p>
              </h2>
            </div>
            <HeroBannerHalfSlide
              banners={slidesHalfFlowerShopByOccasionsRelations}
              itemsPerView={{
                mobile: 1,
                tablet: 2,
                laptop: 3,
                desktop: 4
              }}
              autoScrollInterval={10000}
              showArrows={true}
              height={400}
              backgroundColor="#f5f5f5"
              onBannerClick={(banner) => console.log('Banner clicked:', banner)}
            />
            <ProductCategoryCardHalfDynamic
              categories={categoriesDataCardHalfDynamic}
              backgroundColor="#E7EDEF"
              onLinkClick={(link, category) => {
                console.log('Link clicked:', link.title, 'from', category.title);
              }}
            />
            <div className={styles.headingContent}>
              <h2 className={styles.heading}>Bouquets For Them
                <br />
                <p className={styles.subHeading}>Order flower baskets and more online</p>
              </h2>
            </div>
            <HeroBannerHalfSlide
              banners={slidesHalfFlowerBouquetsForThem}
              itemsPerView={{
                mobile: 1,
                tablet: 2,
                laptop: 3,
                desktop: 2
              }}
              autoScrollInterval={10000}
              showArrows={true}
              height={370}
              backgroundColor="#f5f5f5"
              onBannerClick={(banner) => console.log('Banner clicked:', banner)}
            />
            <HeroBannerHalfSlide
              banners={slidesHalfFlowerGift}
              itemsPerView={{
                mobile: 1,
                tablet: 2,
                laptop: 3,
                desktop: 1.6
              }}
              autoScrollInterval={10000}
              showArrows={true}
              height={370}
              backgroundColor="#f5f5f5"
              onBannerClick={(banner) => console.log('Banner clicked:', banner)}
            />
            <CategoryListCard
              categories={categoriesInternationalFlowerDeliveryData}
              title="International Flower Delivery"
              itemsPerView={{
                mobile: 2,
                tablet: 3,
                desktop: 5
              }}
              subTitle="Deliver fresh flowers worldwide"
              rows={1}
              cardHeight={200}
              imageWidth={170}
              imageHeight={170}
              backgroundColor="#f5f5f5"
              viewAllText="View All"
              viewAllUrl="/international"
              onCategoryClick={(category) => console.log('Category clicked:', category.title)}
              onViewAllClick={() => console.log('View all clicked')}
            />
            <FranchiseHufkoSlide
              badgeText="World's Largest Instant Delivery App Platform"
              badgeIcon={<Shield size={16} />}
              heading="Own a World's Largest #1"
              highlightText="Flowers & Gifts Franchise"
              description="Join Hufko and own a supermarket franchise that runs on a system designed for every Indian city, strong returns, and real on-ground support from day one."
              franchiseCategory="flower_beverage"
              detailsPagePath="/franchise-details"
              stats={[
                { value: '3,00,000+', label: 'Franchise Partners', icon: Users },
                { value: '3 billion+', label: 'Min. Investment', icon: IndianRupee },
                { value: '0', label: 'Royalty Fee - 2 Years', icon: Clock },
              ]}
              buttons={[
                { label: 'Order Now', variant: 'primary', icon: <ArrowRight size={20} /> },
                { label: 'More', variant: 'secondary', icon: <ArrowRight size={20} /> },
              ]}
              images={[
                { src: "/products/Flowers_and_Gifts_Franchise1.png", alt: "Hypermarket", width: 3000, height: 1800 },
                { src: "/products/Flowers_and_Gifts_Franchise2.png", alt: "HUFKO Store", width: 3000, height: 1800 },
                { src: "/products/Flowers_and_Gifts_Franchise3.png", alt: "Premium Restaurant", width: 3000, height: 2000 },
                { src: "/products/Flowers_and_Gifts_Franchise4.png", alt: "Pharmaceutical", width: 3000, height: 2000 },
              ]}
              badges={[
                { text: '4.9/5 Rating', position: 'top-right', backgroundColor: '#ec2024', color: '#ffffff' },
                { text: '✓ FSSAI Certified', position: 'bottom-left', backgroundColor: '#ffffff', color: '#055346' },
              ]}
              backgroundColor="#055346"
              gradient="linear-gradient(135deg, #055346 0%, #076b58 50%, #055346 100%)"
              overlayOpacity={0.35}
              className="custom-class"
              showWave={true}
              waveColor="white"
              onButtonClick={(index) => console.log(`Button ${index} clicked`)}
              onBadgeClick={(badge) => console.log('Badge clicked:', badge)}
            >
              <span style={{ color: '#ffffff' }}> - Start with Hufko</span>
            </FranchiseHufkoSlide>
            <CustomerTestimonial
              testimonials={customerTestimonialDataFlower}
              title="Customer Testimonial"
              viewAllText="View All"
              viewAllUrl="/reviews"
              backgroundColor="#f5f5f5"
              onViewAllClick={() => console.log('View all clicked')}
            />
          </div>
        )}

        {/* Care Section */}
        {activeTab === "care" && (
          <div className={styles.allCategory}>
            <SubHeader
              items={careCategoriesSubHeader}
              defaultActive="All"
              onSelect={(item) => console.log(item.name)}
            />
            <HeroBannerAll banners={CareHeroBannerData} height={360} />
            <div className={styles.categoryGap}>
              <AllCategory categories={CareCategories} />
            </div>
            <WelcomeVideoHufko
              title=""
              titleHighlight=""
              subtitle=""
              videoSrc="/videos/care_services.mp4"
              logoSrc="/icons/logo_video.png"
              appStoreLink="/"
              playStoreLink="/"
              className="custom-hero"
              showLogo={false}
              showAppStore={false}
              showPlayStore={false}
              muted={true}
            />
            <FranchiseHufkoSlide
              badgeText="World's Largest Instant Delivery App Platform"
              badgeIcon={<Shield size={16} />}
              heading="Own a World's Largest #1"
              highlightText="Premium Saloon & Spa Franchise"
              description="Join Hufko and own a supermarket franchise that runs on a system designed for every Indian city, strong returns, and real on-ground support from day one."
              franchiseCategory="care_beverage"
              detailsPagePath="/franchise-details"
              stats={[
                { value: '3,00,000+', label: 'Franchise Partners', icon: Users },
                { value: '3 billion+', label: 'Min. Investment', icon: IndianRupee },
                { value: '0', label: 'Royalty Fee - 2 Years', icon: Clock },
              ]}
              buttons={[
                { label: 'Order Now', variant: 'primary', icon: <ArrowRight size={20} /> },
                { label: 'More', variant: 'secondary', icon: <ArrowRight size={20} /> },
              ]}
              images={[
                { src: "/products/Premium_Saloon_&_Spa_Franchise3.png", alt: "Premium Restaurant", width: 3000, height: 2000 },
                { src: "/products/Premium_Saloon_&_Spa_Franchise.png", alt: "Hypermarket", width: 3000, height: 1800 },
                { src: "/products/Premium_Saloon_&_Spa_Franchise2.png", alt: "HUFKO Store", width: 3000, height: 1800 },
                { src: "/products/Premium_Saloon_&_Spa_Franchise4.png", alt: "Pharmaceutical", width: 3000, height: 2000 },
              ]}
              badges={[
                { text: '4.9/5 Rating', position: 'top-right', backgroundColor: '#ec2024', color: '#ffffff' },
                { text: '✓ FSSAI Certified', position: 'bottom-left', backgroundColor: '#ffffff', color: '#055346' },
              ]}
              backgroundColor="#055346"
              gradient="linear-gradient(135deg, #055346 0%, #076b58 50%, #055346 100%)"
              overlayOpacity={0.35}
              className="custom-class"
              showWave={true}
              waveColor="white"
              onButtonClick={(index) => console.log(`Button ${index} clicked`)}
              onBadgeClick={(badge) => console.log('Badge clicked:', badge)}
            >
              <span style={{ color: '#ffffff' }}> - Start with Hufko</span>
            </FranchiseHufkoSlide>
          </div>
        )}

        {/* Pharma Section */}
        {activeTab === "pharma" && (
          <div className={styles.allCategory}>
            <SubHeader
              items={pharmaCategoriesSubHeader}
              defaultActive="All"
              onSelect={(item) => console.log(item.name)}
            />
            <HeroBannerAll banners={PharmaHeroBannerData} height={375} />
            <div className={styles.categoryGap}>
              <AllCategoryOne categories={PharmaCategories} />
            </div>
            <WelcomeVideoHufko
              title=""
              titleHighlight=""
              subtitle=""
              videoSrc="/videos/PHARMA _NEW_VIDEO.mp4"
              logoSrc="/icons/logo_video.png"
              appStoreLink="/"
              playStoreLink="/"
              className="custom-hero"
              showLogo={false}
              showAppStore={false}
              showPlayStore={false}
              muted={true}
            />
            <FranchiseHufkoSlide
              badgeText="World's Largest Instant Delivery App Platform"
              badgeIcon={<Shield size={16} />}
              heading="Own a World's Largest #1"
              highlightText="Pharmaceutical Franchise"
              description="Join Hufko and own a supermarket franchise that runs on a system designed for every Indian city, strong returns, and real on-ground support from day one."
              franchiseCategory="pharma_beverage"
              detailsPagePath="/franchise-details"
              stats={[
                { value: '3,00,000+', label: 'Franchise Partners', icon: Users },
                { value: '3 billion+', label: 'Min. Investment', icon: IndianRupee },
                { value: '0', label: 'Royalty Fee - 2 Years', icon: Clock },
              ]}
              buttons={[
                { label: 'Order Now', variant: 'primary', icon: <ArrowRight size={20} /> },
                { label: 'More', variant: 'secondary', icon: <ArrowRight size={20} /> },
              ]}
              images={[
                { src: "/products/Pharmaceutical_Franchise1.png", alt: "Premium Restaurant", width: 3000, height: 2000 },
                { src: "/products/Pharmaceutical.png", alt: "Hypermarket", width: 3000, height: 1800 },
                { src: "/products/Pharmaceutical_Franchise3.png", alt: "HUFKO Store", width: 3000, height: 1800 },
                { src: "/products/Pharmaceutical_Franchise4.png", alt: "Pharmaceutical", width: 3000, height: 2000 },
              ]}
              badges={[
                { text: '4.9/5 Rating', position: 'top-right', backgroundColor: '#ec2024', color: '#ffffff' },
                { text: '✓ FSSAI Certified', position: 'bottom-left', backgroundColor: '#ffffff', color: '#055346' },
              ]}
              backgroundColor="#1DCDB1"
              gradient="linear-gradient(135deg, #055346 0%, #076b58 50%, #055346 100%)"
              overlayOpacity={0.35}
              className="custom-class"
              showWave={true}
              waveColor="white"
              onButtonClick={(index) => console.log(`Button ${index} clicked`)}
              onBadgeClick={(badge) => console.log('Badge clicked:', badge)}
            >
              <span style={{ color: '#ffffff' }}> - Start with Hufko</span>
            </FranchiseHufkoSlide>
          </div>
        )}

        {/* Wholesale Section */}
        {activeTab === "wholesale" && (
          <div className={styles.allCategory}>
            <SubHeader
              items={wholesaleCategoriesSubHeader}
              defaultActive="All"
              onSelect={(item) => console.log(item.name)}
            />
            <HeroBannerAll banners={WholesaleHeroBannerData} height={375} />
            <div className={styles.categoryGap}>
              <AllCategoryOne categories={WholesaleCategoriesList} />
            </div>
            <WelcomeVideoHufko
              title=""
              titleHighlight=""
              subtitle=""
              videoSrc="/videos/wholesale_hufko.mp4"
              logoSrc="/icons/logo_video.png"
              appStoreLink="/"
              playStoreLink="/"
              className="custom-hero"
              showLogo={false}
              showAppStore={false}
              showPlayStore={false}
              muted={true}
            />
            <AllCategoryGrid
              title="Wholesale Categories"
              categories={WholesaleCategories}
            />
            <FranchiseHufkoSlide
              badgeText="World's Largest Instant Delivery App Platform"
              badgeIcon={<Shield size={16} />}
              heading="Own a World's Largest #1"
              highlightText="Wholesale Supermarket Franchise"
              description="Join Hufko and own a supermarket franchise that runs on a system designed for every Indian city, strong returns, and real on-ground support from day one."
              franchiseCategory="wholesale_beverage"
              detailsPagePath="/franchise-details"
              stats={[
                { value: '3,00,000+', label: 'Franchise Partners', icon: Users },
                { value: '3 billion+', label: 'Min. Investment', icon: IndianRupee },
                { value: '0', label: 'Royalty Fee - 2 Years', icon: Clock },
              ]}
              buttons={[
                { label: 'Order Now', variant: 'primary', icon: <ArrowRight size={20} /> },
                { label: 'More', variant: 'secondary', icon: <ArrowRight size={20} /> },
              ]}
              images={[
                { src: "/products/Wholesale_Supermarket_Franchise1.png", alt: "Premium Restaurant", width: 3000, height: 2000 },
                { src: "/products/Wholesale_Supermarket_Franchise2.png", alt: "Hypermarket", width: 3000, height: 1800 },
                { src: "/products/Wholesale_Supermarket_Franchise3.png", alt: "HUFKO Store", width: 3000, height: 1800 },
                { src: "/products/Wholesale_Supermarket_Franchise4.png", alt: "Pharmaceutical", width: 3000, height: 2000 },
              ]}
              badges={[
                { text: '4.9/5 Rating', position: 'top-right', backgroundColor: '#ec2024', color: '#ffffff' },
                { text: '✓ FSSAI Certified', position: 'bottom-left', backgroundColor: '#ffffff', color: '#055346' },
              ]}
              backgroundColor="#055346"
              gradient="linear-gradient(135deg, #055346 0%, #076b58 50%, #055346 100%)"
              overlayOpacity={0.35}
              className="custom-class"
              showWave={true}
              waveColor="white"
              onButtonClick={(index) => console.log(`Button ${index} clicked`)}
              onBadgeClick={(badge) => console.log('Badge clicked:', badge)}
            >
              <span style={{ color: '#ffffff' }}> - Start with Hufko</span>
            </FranchiseHufkoSlide>
          </div>
        )}
      </div>
    </>
  );
};

export default HeaderCategory;