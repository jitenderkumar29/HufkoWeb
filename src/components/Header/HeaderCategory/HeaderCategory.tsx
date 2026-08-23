// components/Header/HeaderCategory.tsx
import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import styles from './HeaderCategory.module.scss';
import { faStore, faUtensils, faBasketShopping, faSeedling, faHandsHelping, IconDefinition, faNotesMedical, faHandshake, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AllCategory from '../../HomePage/AllCategory/AllCategory';
import { GroceryCategories, groceryCategoriesSubHeader } from '@/app/data/Categorywise/GroceryCategories';
import HeroBannerAll from '@/components/HomePage/HeroBannerAll/HeroBannerAll';
import { ShopingHeroBannerData } from '@/app/data/HeroBannerwise/ShopingHero';
import { FoodHeroBannerLeftContent } from '@/app/data/HeroBannerwise/FoodHero';
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
import { FoodsCategories, foodCategoriesSubHeader } from "@/app/data/Categorywise/FoodsCategories";
import SubHeader, { SubHeaderItem } from '../SubHeader/SubHeader';
import HufkoGSTInfo from '@/components/HomePage/HufkoGSTInfo/HufkoGSTInfo';
import WelcomeVideoHufko from '@/components/HomePage/VideoPlayerDesign/WelcomeVideoHufko/WelcomeVideoHufko';
import DownloadApp from '@/components/HomePage/DownloadApp/DownloadApp';
import FranchiseHufko from '@/components/HomePage/FranchiseHufko/FranchiseHufko';
import PoweringSlides from '@/components/HomePage/PoweringSlides/PoweringSlides';
import SubSubHeader from '../SubSubHeader/SubSubHeader';
import FashionRoundCarousel from '@/components/Shopping/ItemListDesigns/FashionRoundCarousel/FashionRoundCarousel';
import HeroBannerSlide from '@/components/Shopping/HeroBanner/HeroBannerSlide/HeroBannerSlide';
import TopBrandsOnOffer from '@/components/Shopping/ItemListDesigns/TopBrandsOnOffer/TopBrandsOnOffer';
import HeroBannerHalfSlide from '@/components/Shopping/HeroBanner/HeroBannerHalfSlide/HeroBannerHalfSlide';
import FashionFullSlideGrid from '@/components/Shopping/HeroBanner/FashionFullSlideGrid/FashionFullSlideGrid';
import BankOfferSlide from '@/components/Shopping/HeroBanner/BankOfferSlide/BankOfferSlide';
import HufkoPrime, { defaultBenefits } from '@/components/HomePage/HufkoPrime/HufkoPrime';
import { ArrowRight, Clock, IndianRupee, Shield, Users } from 'lucide-react';
import VerticalScroll from '@/components/Shopping/ItemListDesigns/VerticalScroll/VerticalScroll';
import ShopByMainCategory from '@/components/Shopping/ShopByItemcategory/ShopByMainCategory/ShopByMainCategory';
import HeroBannerLeftContent from '@/components/Shopping/HeroBanner/HeroBannerLeftContent/HeroBannerLeftContent';
import ProductCategoryCardHalfDynamic from '@/components/Shopping/ItemListDesigns/ProductCategoryCardHalfDynamic/ProductCategoryCardHalfDynamic';
import CustomerTestimonial from '@/components/Shopping/ItemListDesigns/CustomerTestimonial/CustomerTestimonial';
import CategoryListCard from '@/components/Shopping/ItemListDesigns/CategoryListCard/CategoryListCard';

interface CategoryItem {
  id: string;
  name: string;
  icon: IconDefinition;
}

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

const HeaderCategory: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedShoppingCategory, setSelectedShoppingCategory] = useState<string>('all');
  const [selectedElectronicsSubCategory, setSelectedElectronicsSubCategory] = useState<string>('all');
  const [selectedHomeDecorSubCategory, setSelectedHomeDecorSubCategory] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubHeaderItem, setSelectedSubHeaderItem] = useState<SubHeaderItem | null>(null);

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

  // Reset all categories to home
  const resetToHome = () => {
    setActiveTab('home');
    setSelectedShoppingCategory('all');
    setSelectedElectronicsSubCategory('all');
    setSelectedHomeDecorSubCategory('all');

    // Clear URL parameters
    router.push('/', { scroll: false });
  };

  // Get category from URL and update state
  const updateCategoryFromURL = () => {
    const params = new URLSearchParams(window.location.search);
    const categoryParam = params.get('category');
    const shoppingParam = params.get('shoppingCategory');
    const electronicsParam = params.get('electronicsSubCategory');
    const homeDecorParam = params.get('homeDecorSubCategory');

    // Update main tab
    if (categoryParam && allCategories.some(cat => cat.id === categoryParam)) {
      setActiveTab(categoryParam);
    } else {
      setActiveTab('home');
    }

    // Update shopping category (using ID)
    if (shoppingParam) {
      setSelectedShoppingCategory(shoppingParam);
    } else {
      setSelectedShoppingCategory('all');
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
  };

  // Initial load and URL change handling
  useEffect(() => {
    updateCategoryFromURL();
  }, []);

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

  // Handle popstate event (back/forward browser buttons)
  useEffect(() => {
    const handlePopState = () => {
      updateCategoryFromURL();
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Also listen for URL changes via Next.js router
  useEffect(() => {
    const handleRouteChange = () => {
      updateCategoryFromURL();
    };

    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  // Handle category change and update URL
  const handleCategoryChange = (categoryId: string) => {
    if (categoryId === activeTab) return;

    setActiveTab(categoryId);

    // Reset shopping subcategory when changing tabs
    if (categoryId !== 'shopping') {
      setSelectedShoppingCategory('all');
      setSelectedElectronicsSubCategory('all');
      setSelectedHomeDecorSubCategory('all');
    }

    // Update URL with query parameter
    const params = new URLSearchParams(window.location.search);
    params.set('category', categoryId);

    // Remove shopping-related params if not on shopping tab
    if (categoryId !== 'shopping') {
      params.delete('shoppingCategory');
      params.delete('electronicsSubCategory');
      params.delete('homeDecorSubCategory');
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  // Handle shopping subcategory selection
  const handleShoppingSubCategorySelect = (item: SubHeaderItem) => {
    const categoryId = item.id || item.name.toLowerCase().replace(/\s+/g, '_');
    setSelectedShoppingCategory(categoryId);

    // Update URL with shopping category
    const params = new URLSearchParams(window.location.search);
    params.set('shoppingCategory', categoryId);

    // Reset subcategories when main category changes
    if (categoryId !== 'electronics_sub_header') {
      setSelectedElectronicsSubCategory('all');
      params.delete('electronicsSubCategory');
    }
    if (categoryId !== 'home_decor_sub_header') {
      setSelectedHomeDecorSubCategory('all');
      params.delete('homeDecorSubCategory');
    }

    router.push(`?${params.toString()}`, { scroll: false });
    console.log('Selected shopping category:', item);

    // Pass the category to ShopByMainCategory component
    setSelectedCategory(item.category || categoryId);
    setSelectedSubHeaderItem(item);
  };

  // Handle electronics subcategory selection
  const handleElectronicsSubCategorySelect = (item: SubHeaderItem) => {
    const subCategoryId = item.id || item.name.toLowerCase().replace(/\s+/g, '_');
    setSelectedElectronicsSubCategory(subCategoryId);

    // Update URL with electronics subcategory
    const params = new URLSearchParams(window.location.search);
    params.set('electronicsSubCategory', subCategoryId);
    router.push(`?${params.toString()}`, { scroll: false });
    console.log('Selected electronics sub-category:', item);
  };

  // Handle home decor subcategory selection
  const handleHomeDecorSubCategorySelect = (item: SubHeaderItem) => {
    const subCategoryId = item.id || item.name.toLowerCase().replace(/\s+/g, '_');
    setSelectedHomeDecorSubCategory(subCategoryId);

    // Update URL with home decor subcategory
    const params = new URLSearchParams(window.location.search);
    params.set('homeDecorSubCategory', subCategoryId);
    router.push(`?${params.toString()}`, { scroll: false });
    console.log('Selected home decor sub-category:', item);
  };

  // Check if a specific shopping category is selected (using ID)
  const isShoppingCategorySelected = (categoryId: string) => {
    return selectedShoppingCategory === categoryId;
  };

  // Handle category click from AllCategoryOne
  const handleShoppingCategoryClick = (category: { id: string; name: string }) => {
    // First, switch to shopping tab if not already
    if (activeTab !== 'shopping') {
      setActiveTab('shopping');
    }

    // Get the corresponding sub-header ID
    const subHeaderId = categoryToSubHeaderMapping[category.id];

    if (subHeaderId) {
      // Update the shopping category state
      setSelectedShoppingCategory(subHeaderId);

      // Find the sub-header item to set as selected
      const subHeaderItem = shoppingCategoriesSubHeader.find(
        item => item.id === subHeaderId || item.name.toLowerCase().replace(/\s+/g, '_') === subHeaderId
      );

      if (subHeaderItem) {
        setSelectedSubHeaderItem(subHeaderItem);
        setSelectedCategory(subHeaderItem.category || category.id);
      }

      // Update URL
      const params = new URLSearchParams(window.location.search);
      params.set('category', 'shopping');
      params.set('shoppingCategory', subHeaderId);

      // Reset subcategories
      setSelectedElectronicsSubCategory('all');
      params.delete('electronicsSubCategory');
      setSelectedHomeDecorSubCategory('all');
      params.delete('homeDecorSubCategory');

      router.push(`?${params.toString()}`, { scroll: false });

      console.log('Category clicked:', category.name, '-> Sub-header:', subHeaderId);
    } else {
      // If no mapping found, default to 'all'
      setSelectedShoppingCategory('all');
      const params = new URLSearchParams(window.location.search);
      params.set('category', 'shopping');
      params.set('shoppingCategory', 'all');
      router.push(`?${params.toString()}`, { scroll: false });
    }
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
            <FranchiseHufko
              badgeText="World's Largest Instant Delivery App Platform"
              badgeIcon={<Shield size={16} />}
              heading="World's Largest #1"
              highlightText="AI Powered"
              description="Enjoy Premium Food and Dining at Premium Restaurants Fast and Easy Online Ordering on the HUFKO App"
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
              showArrows={true}
              onButtonClick={(index) => console.log(`Button ${index} clicked`)}
              onBadgeClick={(badge) => console.log('Badge clicked:', badge)}
              onSlideChange={(index) => console.log('Slide changed to:', index)}
            >
              <span style={{ color: '#ffffff' }}> Premium Instant Delivery Technology Platform</span>
            </FranchiseHufko>
          </div>
        )}

        {/* Food Section */}
        {activeTab === "food" && (
          <div className={styles.allCategory}>
            <SubHeader
              items={foodCategoriesSubHeader}
              defaultActive="All"
              onSelect={(item) => console.log(item.name)}
            />
            <HeroBannerLeftContent
              banners={FoodHeroBannerLeftContent}
              defaultAlign="left"
            />
            <AllCategory categories={FoodsCategories} />
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
            <HufkoPrime
              benefits={defaultBenefits}
              onMoreClick={() => console.log('More clicked!')}
            />
            <DownloadApp />
            <FranchiseHufko
              badgeText="World's Largest Instant Delivery App Platform"
              badgeIcon={<Shield size={16} />}
              heading="Own a World's Largest #1"
              highlightText="Premium Restaurant Franchise"
              description="Join Hufko and own a supermarket franchise that runs on a system designed for every Indian city, strong returns, and real on-ground support from day one."
              stats={[
                { value: '3,00,000+', label: 'Franchise Partners', icon: Users },
                { value: '3 billion+', label: 'Min. Investment', icon: IndianRupee },
                { value: '0', label: 'Royalty Fee - 2 Years', icon: Clock },
              ]}
              buttons={[
                { label: 'Apply Now', variant: 'primary', icon: <ArrowRight size={20} /> },
                { label: 'More', variant: 'secondary', icon: <ArrowRight size={20} /> },
              ]}
              imageSrc="/products/Premium_Restaurant_Franchise1.png"
              imageAlt="HUFKO Store"
              imageWidth={3000}
              imageHeight={1800}
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
              <span style={{ color: '#ffffff' }}> in India - Start with Hufko</span>
            </FranchiseHufko>
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
            <HeroBannerAll banners={GroceryHeroBannerData} />
            <AllCategory categories={GroceryCategories} />
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
            <FranchiseHufko
              badgeText="World's Largest Instant Delivery App Platform"
              badgeIcon={<Shield size={16} />}
              heading="Own a World's Largest #1"
              highlightText="Supermarket Franchise"
              description="Join Hufko and own a supermarket franchise that runs on a system designed for every Indian city, strong returns, and real on-ground support from day one."
              stats={[
                { value: '3,00,000+', label: 'Franchise Partners', icon: Users },
                { value: '3 billion+', label: 'Min. Investment', icon: IndianRupee },
                { value: '0', label: 'Royalty Fee - 2 Years', icon: Clock },
              ]}
              buttons={[
                { label: 'Apply Now', variant: 'primary', icon: <ArrowRight size={20} /> },
                { label: 'More', variant: 'secondary', icon: <ArrowRight size={20} /> },
              ]}
              imageSrc="/products/Franchise_Hufko2.png"
              imageAlt="HUFKO Store"
              imageWidth={1200}
              imageHeight={1000}
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
              <span style={{ color: '#ffffff' }}> in India - Start with Hufko</span>
            </FranchiseHufko>
          </div>
        )}

        {/* Shopping Section */}
        {activeTab === "shopping" && (
          <div className={styles.allCategory}>
            {/* Main Shopping Categories */}
            <SubHeader
              key={`shopping-${selectedShoppingCategory}`}
              items={shoppingCategoriesSubHeader}
              defaultActive={selectedShoppingCategory}
              categoriesData={categoriesDataMap}
              onSelect={handleShoppingSubCategorySelect}
            />

            {/* All Category - Default View */}
            {isShoppingCategorySelected("all") && (
              <div className={styles.electronicsSubCategory}>
                <HeroBannerAll banners={ShopingHeroBannerData} />
                <AllCategoryOne
                  categories={ShopingCategories}
                  onCategoryClick={handleShoppingCategoryClick}
                />
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

                <FranchiseHufko
                  badgeText="World's Largest Instant Delivery App Platform"
                  badgeIcon={<Shield size={16} />}
                  heading="Own a World's Largest #1"
                  highlightText="Hypermarket Franchise"
                  description="Join Hufko and own a supermarket franchise that runs on a system designed for every Indian city, strong returns, and real on-ground support from day one."
                  stats={[
                    { value: '3,00,000+', label: 'Franchise Partners', icon: Users },
                    { value: '3 billion+', label: 'Min. Investment', icon: IndianRupee },
                    { value: '0', label: 'Royalty Fee - 2 Years', icon: Clock },
                  ]}
                  buttons={[
                    { label: 'Apply Now', variant: 'primary', icon: <ArrowRight size={20} /> },
                    { label: 'More', variant: 'secondary', icon: <ArrowRight size={20} /> },
                  ]}
                  imageSrc="/products/Hypermarket_Franchise1.png"
                  imageAlt="HUFKO Store"
                  imageWidth={3000}
                  imageHeight={1800}
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
                  <span style={{ color: '#ffffff' }}> in India - Start with Hufko</span>
                </FranchiseHufko>
              </div>
            )}
            {/* Electronics Sub-Sub Categories */}
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

            {/* Home Decor Sub-Sub Categories */}
            {isShoppingCategorySelected("home_kitchen_sub_header") && (
              <div className={styles.electronicsSubCategory}>
                <ShopByMainCategory
                  category={selectedCategory}
                  selectedItem={selectedSubHeaderItem}
                  subHeaderItem={selectedSubHeaderItem}
                />
              </div>
            )}

            {/* Home Decor Sub-Sub Categories */}
            {isShoppingCategorySelected("home_decor_sub_header") && (
              <div className={styles.electronicsSubCategory}>
                <ShopByMainCategory
                  category={selectedCategory}
                  selectedItem={selectedSubHeaderItem}
                  subHeaderItem={selectedSubHeaderItem}
                />
              </div>
            )}

            {/* Home Men's Fashion Sub-Sub Categories */}
            {isShoppingCategorySelected("mens_fashion_sub_header") && (
              <div className={styles.electronicsSubCategory}>
                <ShopByMainCategory
                  category={selectedCategory}
                  selectedItem={selectedSubHeaderItem}
                  subHeaderItem={selectedSubHeaderItem}
                />
              </div>
            )}

            {/* Home Women's Fashion Sub-Sub Categories */}
            {isShoppingCategorySelected("women_fashion_sub_header") && (
              <div className={styles.electronicsSubCategory}>
                <ShopByMainCategory
                  category={selectedCategory}
                  selectedItem={selectedSubHeaderItem}
                  subHeaderItem={selectedSubHeaderItem}
                />
              </div>
            )}

            {/* Home Kids' Fashion Sub-Sub Categories */}
            {isShoppingCategorySelected("kids_fashion_sub_header") && (
              <div className={styles.electronicsSubCategory}>
                <ShopByMainCategory
                  category={selectedCategory}
                  selectedItem={selectedSubHeaderItem}
                  subHeaderItem={selectedSubHeaderItem}
                />
              </div>
            )}

            {/* Home Kids' Fashion Sub-Sub Categories */}
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
            <HeroBannerAll banners={FlowerHeroBannerData} />
            <AllCategory categories={FlowersCategories} />
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
            <FranchiseHufko
              badgeText="World's Largest Instant Delivery App Platform"
              badgeIcon={<Shield size={16} />}
              heading="Own a World's Largest #1"
              highlightText="Flowers & Gifts Franchise"
              description="Join Hufko and own a supermarket franchise that runs on a system designed for every Indian city, strong returns, and real on-ground support from day one."
              stats={[
                { value: '3,00,000+', label: 'Franchise Partners', icon: Users },
                { value: '3 billion+', label: 'Min. Investment', icon: IndianRupee },
                { value: '0', label: 'Royalty Fee - 2 Years', icon: Clock },
              ]}
              buttons={[
                { label: 'Apply Now', variant: 'primary', icon: <ArrowRight size={20} /> },
                { label: 'More', variant: 'secondary', icon: <ArrowRight size={20} /> },
              ]}
              imageSrc="/products/Flowers_and_Gifts_Franchise1.png"
              imageAlt="HUFKO Store"
              imageWidth={3000}
              imageHeight={1800}
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
              <span style={{ color: '#ffffff' }}> in India - Start with Hufko</span>
            </FranchiseHufko>
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
            <HeroBannerAll banners={CareHeroBannerData} />
            <AllCategory categories={CareCategories} />
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
            <FranchiseHufko
              badgeText="World's Largest Instant Delivery App Platform"
              badgeIcon={<Shield size={16} />}
              heading="Own a World's Largest #1"
              highlightText="Premium Saloon & Spa Franchise"
              description="Join Hufko and own a supermarket franchise that runs on a system designed for every Indian city, strong returns, and real on-ground support from day one."
              stats={[
                { value: '3,00,000+', label: 'Franchise Partners', icon: Users },
                { value: '3 billion+', label: 'Min. Investment', icon: IndianRupee },
                { value: '0', label: 'Royalty Fee - 2 Years', icon: Clock },
              ]}
              buttons={[
                { label: 'Apply Now', variant: 'primary', icon: <ArrowRight size={20} /> },
                { label: 'More', variant: 'secondary', icon: <ArrowRight size={20} /> },
              ]}
              imageSrc="/products/Premium_Saloon_&_Spa_Franchise.png"
              imageAlt="HUFKO Store"
              imageWidth={2000}
              imageHeight={1800}
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
              <span style={{ color: '#ffffff' }}> in India - Start with Hufko</span>
            </FranchiseHufko>
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
            <HeroBannerAll banners={PharmaHeroBannerData} />
            <AllCategoryOne categories={PharmaCategories} />
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
            <FranchiseHufko
              badgeText="World's Largest Instant Delivery App Platform"
              badgeIcon={<Shield size={16} />}
              heading="Own a World's Largest #1"
              highlightText="Pharmaceutical Franchise"
              description="Join Hufko and own a supermarket franchise that runs on a system designed for every Indian city, strong returns, and real on-ground support from day one."
              stats={[
                { value: '3,00,000+', label: 'Franchise Partners', icon: Users },
                { value: '3 billion+', label: 'Min. Investment', icon: IndianRupee },
                { value: '0', label: 'Royalty Fee - 2 Years', icon: Clock },
              ]}
              buttons={[
                { label: 'Apply Now', variant: 'primary', icon: <ArrowRight size={20} /> },
                { label: 'More', variant: 'secondary', icon: <ArrowRight size={20} /> },
              ]}
              imageSrc="/products/Pharmaceutical_Franchise21.png"
              imageAlt="HUFKO Store"
              imageWidth={3000}
              imageHeight={1800}
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
              <span style={{ color: '#ffffff' }}> in India - Start with Hufko</span>
            </FranchiseHufko>
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
            <HeroBannerAll banners={WholesaleHeroBannerData} />
            <AllCategoryOne categories={WholesaleCategoriesList} />
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
            <FranchiseHufko
              badgeText="World's Largest Instant Delivery App Platform"
              badgeIcon={<Shield size={16} />}
              heading="Own a World's Largest #1"
              highlightText="Wholesale Supermarket Franchise"
              description="Join Hufko and own a supermarket franchise that runs on a system designed for every Indian city, strong returns, and real on-ground support from day one."
              stats={[
                { value: '3,00,000+', label: 'Franchise Partners', icon: Users },
                { value: '3 billion+', label: 'Min. Investment', icon: IndianRupee },
                { value: '0', label: 'Royalty Fee - 2 Years', icon: Clock },
              ]}
              buttons={[
                { label: 'Apply Now', variant: 'primary', icon: <ArrowRight size={20} /> },
                { label: 'More', variant: 'secondary', icon: <ArrowRight size={20} /> },
              ]}
              imageSrc="/products/Wholesale_Supermarket_Franchise21.png"
              imageAlt="HUFKO Store"
              imageWidth={3000}
              imageHeight={2100}
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
              <span style={{ color: '#ffffff' }}> in India - Start with Hufko</span>
            </FranchiseHufko>
          </div>
        )}
      </div>
    </>
  );
};

export default HeaderCategory;