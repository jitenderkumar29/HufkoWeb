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
import { bankOfferShoppingSlide, categoriesDataMap, homeDecorSubSubCategoriesSubHeader, hottestBrandsWomenFashion, kidsFashionCarouselCategories, menFashionCarouselCategories, ScrollItemWomensBeauty, ShopingCategories, shoppingCategoriesSubHeader, slidesDataFashionFullSlide, slidesHalfShoppingMenFashion, slidesHalfShoppingWomenBeauty, slidesShoppingKidsFashion, slidesShoppingMenFashion, slidesShoppingWomenBeauty, slidesShoppingWomenFashion, toBrandsKidsFashion, toBrandsMenFashion, toBrandsWomenBeauty, toBrandsWomenFashion, womenBeautyCarouselCategories, womenFashionCarouselCategories } from '@/app/data/Categorywise/ShopingCategories';
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

interface CategoryItem {
  id: string;
  name: string;
  icon: IconDefinition;
}

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
  // In HeaderCategory.tsx

  // Handle shopping subcategory selection
  const handleShoppingSubCategorySelect = (item: SubHeaderItem) => {
    const categoryId = item.id || item.name.toLowerCase().replace(/\s+/g, '_');
    setSelectedShoppingCategory(categoryId);

    // Update URL with shopping category
    const params = new URLSearchParams(window.location.search);
    params.set('shoppingCategory', categoryId);

    // Reset subcategories when main category changes
    if (categoryId !== 'electronics') {
      setSelectedElectronicsSubCategory('all');
      params.delete('electronicsSubCategory');
    }
    if (categoryId !== 'home_decor') {
      setSelectedHomeDecorSubCategory('all');
      params.delete('homeDecorSubCategory');
    }

    router.push(`?${params.toString()}`, { scroll: false });
    console.log('Selected shopping category:', item);

    // Pass the category to ShopByMainCategory component
    // You can do this via props, context, or state management
    // For example, if you have a state for the selected category:
    setSelectedCategory(item.category || categoryId);
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
              // videoSrc="/videos/food_hufko.mp4"
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
              imageSrc="/products/HUFKO_Store_FranchiseHufko.png"
              // imageSrc="/icons/HUFKO_Store.png"
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
              <span style={{ color: '#ffffff' }}> Premium
                Instant Delivery Technology Platform</span>
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
            {/* <HeroBannerAll banners={FoodHeroBannerData} /> */}

            <HeroBannerLeftContent
              banners={FoodHeroBannerLeftContent}
              defaultAlign="left" // Default alignment if not specified per banner
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
            {/* <HufkoPrime /> */}
            <DownloadApp />
            {/* <FranchiseVideo
              // Content
              badgeText="Download Featured App"
              badgeIcon={<Star size={16} />}
              heading="Download the #1"
              highlightText="Food Delivery App"
              description="Get your favorite meals delivered in minutes. Join millions of happy customers."

              // Video - Dynamic sizing
              videoSrc="/videos/delivery_by_hufko.mp4"
              videoPoster="/images/poster.jpg"
              autoPlay={true}
              muted={false}
              loop={true}
              controls={true}
              controlsList="nodownload noremoteplayback"
              videoWidth={800}
              videoHeight={850}
              aspectRatio="18/12"
              objectFit="cover"  // Cover, contain, or fill

              // Custom Stats
              stats={[
                { value: '10M+', label: 'Downloads', icon: Users },
                { value: '4.9', label: 'App Rating', icon: Star },
                { value: '30min', label: 'Avg Delivery', icon: Clock },
              ]}

              // Custom Buttons
              buttons={[
                {
                  label: 'Download Now',
                  variant: 'primary',
                  onClick: () => window.open('/download', '_blank')
                },
                {
                  label: 'Learn More',
                  variant: 'secondary',
                  onClick: () => console.log('Learn more clicked')
                },
              ]}

              // Custom Badges
              badges={[
                {
                  text: '📱 App of the Year',
                  position: 'top-right',
                  backgroundColor: '#f5a623',
                  color: '#1a1a1a'
                },
                {
                  text: '🔒 Secure Payment',
                  position: 'bottom-left',
                  backgroundColor: '#ffffff',
                  color: '#055346'
                },
                {
                  text: '🚀 50K+ Orders',
                  position: 'top-left',
                  backgroundColor: '#ec2024',
                  color: '#ffffff'
                },
              ]}

              // Callbacks
              onVideoPlay={() => console.log('Video started')}
              onVideoPause={() => console.log('Video paused')}
              onButtonClick={(index) => console.log(`Button ${index} clicked`)}
              onBadgeClick={(badge) => console.log(`Badge clicked: ${badge.text}`)}

              // Styling
              gradient="linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)"
              overlayOpacity={0.5}
              waveColor="#f5f5f5"
            >
              <span style={{ color: '#ffffff' }}> in India - <br /> Start with Hufko</span>
            </FranchiseVideo> */}
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
              imageSrc="/products/Premium_Restaurant_Franchise.png"
              // imageSrc="/icons/HUFKO_Store.png"
              imageAlt="HUFKO Store"
              imageWidth={3000}
              imageHeight={1500}
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
              // title="Premium food delivery app"
              // titleHighlight="World's #1"
              // subtitle="Enjoy fast online ordering on the Hufko app"
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
              // imageSrc="/icons/HUFKO_Store.png"
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
                <AllCategoryOne categories={ShopingCategories} />
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
                  imageSrc="/products/Hypermarket_Franchise.png"
                  // imageSrc="/icons/HUFKO_Store.png"
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
                {/* Pass the selected category to ShopByMainCategory */}
                <ShopByMainCategory
                  category={selectedCategory}
                  selectedItem={selectedSubHeaderItem}
                  // Or pass the entire item with all data
                  subHeaderItem={selectedSubHeaderItem}
                />
              </div>
            )}
           
            {isShoppingCategorySelected("home_furniture_sub_header") && (
              <div className={styles.electronicsSubCategory}>
                {/* Pass the selected category to ShopByMainCategory */}
                <ShopByMainCategory
                  category={selectedCategory}
                  selectedItem={selectedSubHeaderItem}
                  // Or pass the entire item with all data
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
                  // Or pass the entire item with all data
                  subHeaderItem={selectedSubHeaderItem}
                />
                {/* <SubSubHeader
                  key={`homedecor-${selectedHomeDecorSubCategory}`}
                  items={homeDecorSubSubCategoriesSubHeader}
                  defaultActive={selectedHomeDecorSubCategory}
                  categoriesData={categoriesDataMap}
                  onSelect={handleHomeDecorSubCategorySelect}
                /> */}
                {/* Add Home Decor content here */}
              </div>
            )}

            {/* Home Men's Fashion Sub-Sub Categories */}
            {isShoppingCategorySelected("mens_fashion_sub_header") && (
              <div className={styles.electronicsSubCategory}>
                <FashionRoundCarousel
                  categories={menFashionCarouselCategories}
                  title=""
                  autoScroll={false}
                  showScrollbar={false}
                />
                <HeroBannerHalfSlide
                  banners={slidesHalfShoppingMenFashion}
                  itemsPerView={{
                    mobile: 1,
                    tablet: 2,
                    laptop: 3,
                    desktop: 2.5
                  }}
                  autoScrollInterval={10000}
                  showArrows={true}
                  height={550}
                  backgroundColor="#f5f5f5"
                  onBannerClick={(banner) => console.log('Banner clicked:', banner)}
                />
                <BankOfferSlide
                  slides={bankOfferShoppingSlide}
                  autoPlay={true}
                  autoPlayInterval={5000}
                  showArrows={true}
                  showDots={true}
                  onSlideChange={(index) => console.log('Current slide:', index)}
                />
                <HeroBannerSlide
                  slides={slidesShoppingMenFashion}
                  autoPlay={true}
                  autoPlayInterval={5000}
                  showArrows={true}
                  showDots={true}
                  showTitle={true}
                  showSubtitle={true}
                  showCTA={true}
                  onSlideClick={(slide, index) => {
                    console.log(`Slide ${index + 1} clicked:`, slide);
                    // Handle navigation
                  }}
                  onSlideChange={(index) => {
                    console.log(`Current slide: ${index + 1}`);
                  }}
                />
                <TopBrandsOnOffer
                  brands={toBrandsMenFashion}
                  title="Top Brands on Offer"
                  subtitle="Dishing out Gen-Z styles"
                  backgroundColor="#7739B5"
                  titleColor="#ffffff"
                  gap={8}
                  cardPadding={10}
                  onBrandClick={(brand) => {
                    console.log('Brand clicked:', brand);
                    // Handle navigation
                  }}
                  onBrandHover={(brand) => {
                    console.log('Brand hovered:', brand);
                  }}
                />
                {/* Add Men's Fashion content here */}
              </div>
            )}

            {/* Home Women's Fashion Sub-Sub Categories */}
            {isShoppingCategorySelected("women_fashion_sub_header") && (
              <div className={styles.electronicsSubCategory}>
                <FashionRoundCarousel
                  categories={womenFashionCarouselCategories}
                  title=""
                  autoScroll={false}
                  showScrollbar={false}
                />
                <HeroBannerSlide
                  slides={slidesShoppingWomenFashion}
                  autoPlay={true}
                  autoPlayInterval={5000}
                  showArrows={true}
                  showDots={true}
                  showTitle={true}
                  showSubtitle={true}
                  showCTA={true}
                  onSlideClick={(slide, index) => {
                    console.log(`Slide ${index + 1} clicked:`, slide);
                    // Handle navigation
                  }}
                  onSlideChange={(index) => {
                    console.log(`Current slide: ${index + 1}`);
                  }}
                />
                <BankOfferSlide
                  slides={bankOfferShoppingSlide}
                  autoPlay={true}
                  autoPlayInterval={5000}
                  showArrows={true}
                  showDots={true}
                  onSlideChange={(index) => console.log('Current slide:', index)}
                />
                <TopBrandsOnOffer
                  brands={toBrandsWomenFashion}
                  title="Top Brands on Offer"
                  subtitle="Dishing out Gen-Z styles"
                  backgroundColor="#7739B5"
                  titleColor="#ffffff"
                  gap={8}
                  cardPadding={10}
                  onBrandClick={(brand) => {
                    console.log('Brand clicked:', brand);
                    // Handle navigation
                  }}
                  onBrandHover={(brand) => {
                    console.log('Brand hovered:', brand);
                  }}
                />
                <TopBrandsOnOffer
                  brands={hottestBrandsWomenFashion}
                  title="IN THE SPOTLIGHT"
                  subtitle="Hottest brands on offer"
                  backgroundColor="#ffffff"
                  titleColor="#000000"
                  subtitleColor="#000000"
                  columns={{
                    mobile: 2,
                    tablet: 3,
                    desktop: 4,
                    largeDesktop: 6,
                  }}
                  gap={5}
                  cardPadding={10}
                  onBrandClick={(brand) => {
                    console.log('Brand clicked:', brand);
                    // Handle navigation
                  }}
                  onBrandHover={(brand) => {
                    console.log('Brand hovered:', brand);
                  }}
                />
                <FashionFullSlideGrid
                  title=""
                  subtitle=""
                  buttonText=""
                  buttonLink="/hidden-gems"
                  heroImage="/products/bannerFullSlide.jpg"
                  cards={slidesDataFashionFullSlide}
                />
                {/* Add Men's Fashion content here */}
              </div>
            )}

            {/* Home Kids' Fashion Sub-Sub Categories */}
            {isShoppingCategorySelected("kids_fashion_sub_header") && (
              <div className={styles.electronicsSubCategory}>
                <FashionRoundCarousel
                  categories={kidsFashionCarouselCategories}
                  title=""
                  autoScroll={false}
                  showScrollbar={false}
                />
                <HeroBannerSlide
                  slides={slidesShoppingKidsFashion}
                  autoPlay={true}
                  autoPlayInterval={5000}
                  showArrows={true}
                  showDots={true}
                  showTitle={true}
                  showSubtitle={true}
                  showCTA={true}
                  onSlideClick={(slide, index) => {
                    console.log(`Slide ${index + 1} clicked:`, slide);
                    // Handle navigation
                  }}
                  onSlideChange={(index) => {
                    console.log(`Current slide: ${index + 1}`);
                  }}
                />
                <BankOfferSlide
                  slides={bankOfferShoppingSlide}
                  autoPlay={true}
                  autoPlayInterval={5000}
                  showArrows={true}
                  showDots={true}
                  onSlideChange={(index) => console.log('Current slide:', index)}
                />
                <TopBrandsOnOffer
                  brands={toBrandsKidsFashion}
                  title="Top Brands on Offer"
                  subtitle="Dishing out Gen-Z styles"
                  backgroundColor="#E6EDF3"
                  titleColor="#000000"
                  subtitleColor="#000000"
                  gap={8}
                  cardPadding={10}
                  onBrandClick={(brand) => {
                    console.log('Brand clicked:', brand);
                    // Handle navigation
                  }}
                  onBrandHover={(brand) => {
                    console.log('Brand hovered:', brand);
                  }}
                />
                {/* Add Men's Fashion content here */}
              </div>
            )}

            {/* Home Kids' Fashion Sub-Sub Categories */}
            {isShoppingCategorySelected("women_beauty_sub_header") && (
              <div className={styles.electronicsSubCategory}>
                <FashionRoundCarousel
                  categories={womenBeautyCarouselCategories}
                  title=""
                  autoScroll={false}
                  showScrollbar={false}
                />
                <HeroBannerSlide
                  slides={slidesShoppingWomenBeauty}
                  autoPlay={true}
                  autoPlayInterval={5000}
                  showArrows={true}
                  showDots={true}
                  showTitle={true}
                  showSubtitle={true}
                  showCTA={true}
                  onSlideClick={(slide, index) => {
                    console.log(`Slide ${index + 1} clicked:`, slide);
                    // Handle navigation
                  }}
                  onSlideChange={(index) => {
                    console.log(`Current slide: ${index + 1}`);
                  }}
                />
                <BankOfferSlide
                  slides={bankOfferShoppingSlide}
                  autoPlay={true}
                  autoPlayInterval={5000}
                  showArrows={true}
                  showDots={true}
                  onSlideChange={(index) => console.log('Current slide:', index)}
                />
                <HeroBannerHalfSlide
                  banners={slidesHalfShoppingWomenBeauty}
                  itemsPerView={{
                    mobile: 1,
                    tablet: 2,
                    laptop: 3,
                    desktop: 2.5
                  }}
                  autoScrollInterval={10000}
                  showArrows={true}
                  height={650}
                  backgroundColor="#f5f5f5"
                  onBannerClick={(banner) => console.log('Banner clicked:', banner)}
                />
                <TopBrandsOnOffer
                  brands={toBrandsWomenBeauty}
                  title="Top Brands on Offer"
                  subtitle="Dishing out Gen-Z styles"
                  backgroundColor="#CBCDA3"
                  titleColor="#ffffff"
                  subtitleColor="#ffffff"
                  gap={8}
                  cardPadding={10}
                  onBrandClick={(brand) => {
                    console.log('Brand clicked:', brand);
                    // Handle navigation
                  }}
                  onBrandHover={(brand) => {
                    console.log('Brand hovered:', brand);
                  }}
                />
                <VerticalScroll
                  items={ScrollItemWomensBeauty}
                  imageHeight={400}
                  title="Recommended for You"
                  subtitle="Based on your preferences"
                  ctaText="See All Recommendations"
                />
                {/* Add Men's Fashion content here */}
              </div>
            )}

             {isShoppingCategorySelected("sports_fitness_sub_header") && (
              <div className={styles.electronicsSubCategory}>
                {/* Pass the selected category to ShopByMainCategory */}
                <ShopByMainCategory
                  category={selectedCategory}
                  selectedItem={selectedSubHeaderItem}
                  // Or pass the entire item with all data
                  subHeaderItem={selectedSubHeaderItem}
                />
              </div>
            )}
             {isShoppingCategorySelected("baby_toys_sub_header") && (
              <div className={styles.electronicsSubCategory}>
                {/* Pass the selected category to ShopByMainCategory */}
                <ShopByMainCategory
                  category={selectedCategory}
                  selectedItem={selectedSubHeaderItem}
                  // Or pass the entire item with all data
                  subHeaderItem={selectedSubHeaderItem}
                />
              </div>
            )}
             {isShoppingCategorySelected("books_sub_header") && (
              <div className={styles.electronicsSubCategory}>
                {/* Pass the selected category to ShopByMainCategory */}
                <ShopByMainCategory
                  category={selectedCategory}
                  selectedItem={selectedSubHeaderItem}
                  // Or pass the entire item with all data
                  subHeaderItem={selectedSubHeaderItem}
                />
              </div>
            )}
             {isShoppingCategorySelected("auto_accessories_sub_header") && (
              <div className={styles.electronicsSubCategory}>
                {/* Pass the selected category to ShopByMainCategory */}
                <ShopByMainCategory
                  category={selectedCategory}
                  selectedItem={selectedSubHeaderItem}
                  // Or pass the entire item with all data
                  subHeaderItem={selectedSubHeaderItem}
                />
              </div>
            )}
             {isShoppingCategorySelected("jewellery_sub_header") && (
              <div className={styles.electronicsSubCategory}>
                {/* Pass the selected category to ShopByMainCategory */}
                <ShopByMainCategory
                  category={selectedCategory}
                  selectedItem={selectedSubHeaderItem}
                  // Or pass the entire item with all data
                  subHeaderItem={selectedSubHeaderItem}
                />
              </div>
            )}
             {isShoppingCategorySelected("tvs_appliances_sub_header") && (
              <div className={styles.electronicsSubCategory}>
                {/* Pass the selected category to ShopByMainCategory */}
                <ShopByMainCategory
                  category={selectedCategory}
                  selectedItem={selectedSubHeaderItem}
                  // Or pass the entire item with all data
                  subHeaderItem={selectedSubHeaderItem}
                />
              </div>
            )}
             {isShoppingCategorySelected("mobiles_tablets_sub_header") && (
              <div className={styles.electronicsSubCategory}>
                {/* Pass the selected category to ShopByMainCategory */}
                <ShopByMainCategory
                  category={selectedCategory}
                  selectedItem={selectedSubHeaderItem}
                  // Or pass the entire item with all data
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
              imageSrc="/products/Flowers_and_Gifts_Franchise.png"
              // imageSrc="/icons/HUFKO_Store.png"
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
              // title="Premium Care Services app"
              // titleHighlight="World's #1"
              // subtitle="Enjoy fast online Care Services on the Hufko app"
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
              // imageSrc="/icons/HUFKO_Store.png"
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
              // title="Premium Care Services app"
              // titleHighlight="World's #1"
              // subtitle="Enjoy fast online Care Services on the Hufko app"
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
              imageSrc="/products/Pharmaceutical_Franchise2.png"
              // imageSrc="/icons/HUFKO_Store.png"
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
              // title="Premium Care Services app"
              // titleHighlight="World's #1"
              // subtitle="Enjoy fast online Care Services on the Hufko app"
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
              imageSrc="/products/Wholesale_Supermarket_Franchise2.png"
              // imageSrc="/icons/HUFKO_Store.png"
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
      </div>
    </>
  );
};

export default HeaderCategory;