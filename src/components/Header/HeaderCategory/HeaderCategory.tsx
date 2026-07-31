// components/Header/HeaderCategory.tsx
import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import styles from './HeaderCategory.module.scss';
import { faStore, faUtensils, faBasketShopping, faSeedling, faHandsHelping, IconDefinition, faNotesMedical, faWarehouse, faHandshake, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AllCategory from '../../HomePage/AllCategory/AllCategory';
import { GroceryCategories, groceryCategoriesSubHeader } from '@/app/data/Categorywise/GroceryCategories';
import HeroBannerAll from '@/components/HomePage/HeroBannerAll/HeroBannerAll';
import { ShopingHeroBannerData } from '@/app/data/HeroBannerwise/ShopingHero';
import { FoodHeroBannerData } from '@/app/data/HeroBannerwise/FoodHero';
import { GroceryHeroBannerData } from '@/app/data/HeroBannerwise/GroceryHero';
import { FlowerHeroBannerData } from '@/app/data/HeroBannerwise/FlowerHero';
import { CareHeroBannerData } from '@/app/data/HeroBannerwise/CareHero';
import ShoppingSlides1 from '@/components/Shopping/ShoppingSlides1/ShoppingSlides1';
import { ShopingSlide1SmartPhoneDeals } from '@/app/data/Shoping/ShopingSlide1';
import { PharmaHeroBannerData } from '@/app/data/HeroBannerwise/PharmaHero';
import { categoriesDataMap, electronicsSubSubCategoriesSubHeader, homeDecorSubSubCategoriesSubHeader, menFashionCarouselCategories, ShopingCategories, shoppingCategoriesSubHeader, slidesShoppingMenFashion, toBrandsMenFashion } from '@/app/data/Categorywise/ShopingCategories';
import AllCategoryOne from '@/components/HomePage/AllCategoryOne/AllCategoryOne';
import { flowerCategoriesSubHeader, FlowersCategories } from '@/app/data/Categorywise/FlowersCategories';
import { CareCategories, careCategoriesSubHeader } from '@/app/data/Categorywise/CareCategories';
import { PharmaCategories, pharmaCategoriesSubHeader } from '@/app/data/Categorywise/PharmaCategories';
import AllCategoryRound from '@/components/HomePage/AllCategoryRound/AllCategoryRound';
import { GroceryData1, GroceryData2 } from '@/app/data/GroceryPageData/GroceryData';
import { CandiesGumsData, ColdDrinksJuicesData, DairyBreadEggsData, HookahData, MouthFreshenersData, RollingPapersData, SnacksMunchiesData } from '@/app/data/GroceryPageData/GroceryProductData';
import GroceryProductList from '@/components/Grocery/GroceryProductList/GroceryProductList';
import { WholesaleCategories, wholesaleCategoriesSubHeader } from '@/app/data/Categorywise/WholesaleCategories';
import { WholesaleHeroBannerData } from '@/app/data/HeroBannerwise/Wholesale';
import AllCategoryGrid from '@/components/HomePage/AllCategoryGrid/AllCategoryGrid';
import { FoodsCategories, foodCategoriesSubHeader } from "@/app/data/Categorywise/FoodsCategories";
import SubHeader, { SubHeaderItem } from '../SubHeader/SubHeader';
import HufkoGSTInfo from '@/components/HomePage/HufkoGSTInfo/HufkoGSTInfo';
import WelcomeVideoHufko from '@/components/HomePage/VideoPlayerDesign/WelcomeVideoHufko/WelcomeVideoHufko';
import HufkoPrime from '@/components/HomePage/HufkoPrime/HufkoPrime';
import DownloadApp from '@/components/HomePage/DownloadApp/DownloadApp';
import FranchiseHufko from '@/components/HomePage/FranchiseHufko/FranchiseHufko';
import PoweringSlides from '@/components/HomePage/PoweringSlides/PoweringSlides';
import SubSubHeader from '../SubSubHeader/SubSubHeader';
import ShopByItemcategory from '@/components/Shopping/ShopByItemcategory/ShopByItemcategory';
import FashionRoundCarousel from '@/components/Shopping/ItemListDesigns/FashionRoundCarousel/FashionRoundCarousel';
import HeroBannerSlide from '@/components/Shopping/HeroBanner/HeroBannerSlide/HeroBannerSlide';
import TopBrandsOnOffer from '@/components/Shopping/ItemListDesigns/TopBrandsOnOffer/TopBrandsOnOffer';

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
          <div className={styles.homeContent}>
            <WelcomeVideoHufko
              title="Premium food delivery app"
              titleHighlight="World's #1"
              subtitle="Enjoy fast online ordering on the Hufko app"
              videoSrc="/videos/food_hufko.mp4"
              logoSrc="/icons/logo_video.png"
              appStoreLink="/"
              playStoreLink="/"
              className="custom-hero"
            />
            <PoweringSlides />
            <HufkoGSTInfo />
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
            <HeroBannerAll banners={FoodHeroBannerData} />
            <AllCategory categories={FoodsCategories} />
            <WelcomeVideoHufko
              title="Premium food delivery app"
              titleHighlight="World's #1"
              subtitle="Enjoy fast online ordering on the Hufko app"
              videoSrc="/videos/food_all_video.mp4"
              logoSrc="/icons/logo_video.png"
              appStoreLink="/"
              playStoreLink="/"
              className="custom-hero"
              showLogo={false}
              showAppStore={true}
              showPlayStore={true}
            />            
            <HufkoPrime />
            <DownloadApp />
            <FranchiseHufko />
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
                <ShoppingSlides1
                  title="Today's Top Smartphone Deals"
                  deals={ShopingSlide1SmartPhoneDeals}
                  cardWidth={200}
                  showArrow={true}
                />
              </div>
            )}

            {/* Electronics Sub-Sub Categories */}
            {isShoppingCategorySelected("electronics_sub_header") && (
              <div className={styles.electronicsSubCategory}>
                <SubSubHeader
                  key={`electronics-${selectedElectronicsSubCategory}`}
                  items={electronicsSubSubCategoriesSubHeader}
                  defaultActive={selectedElectronicsSubCategory}
                  categoriesData={categoriesDataMap}
                  onSelect={handleElectronicsSubCategorySelect}
                />
                <ShopByItemcategory />
                {/* Add Electronics content here */}
              </div>
            )}

            {/* Home Decor Sub-Sub Categories */}
            {isShoppingCategorySelected("home_decor_sub_header") && (
              <div className={styles.electronicsSubCategory}>
                <SubSubHeader
                  key={`homedecor-${selectedHomeDecorSubCategory}`}
                  items={homeDecorSubSubCategoriesSubHeader}
                  defaultActive={selectedHomeDecorSubCategory}
                  categoriesData={categoriesDataMap}
                  onSelect={handleHomeDecorSubCategorySelect}
                />
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
              title="Premium Care Services app"
              titleHighlight="World's #1"
              subtitle="Enjoy fast online Care Services on the Hufko app"
              videoSrc="/videos/care_services.mp4"
              logoSrc="/icons/logo_video.png"
              appStoreLink="/"
              playStoreLink="/"
              className="custom-hero"
              showLogo={false}
              showAppStore={true}
              showPlayStore={true}
            />
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
            <AllCategoryGrid
              title="Wholesale Categories"
              categories={WholesaleCategories}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default HeaderCategory;