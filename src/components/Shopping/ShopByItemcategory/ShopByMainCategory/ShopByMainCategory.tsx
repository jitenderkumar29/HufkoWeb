// components/Shopping/ShopByMainCategory/ShopByMainCategory.tsx

import { SubHeaderItem } from '@/components/Header/SubHeader/SubHeader';
import React, { useState, useEffect } from 'react';
import styles from './ShopByMainCategory.module.scss';
import FashionRoundCarousel from '../../ItemListDesigns/FashionRoundCarousel/FashionRoundCarousel';
import {
    menFashionCarouselCategories,
    womenFashionCarouselCategories,
    kidsFashionCarouselCategories,
    womenBeautyCarouselCategories,
    electronicsCarouselCategories,
    slidesElectronicsFashion,
    toElectronicsItems,
    HeadphonesHorizontalSliderOneLine,
    PcAccessoriesHorizontalSliderOneLine,
    SmartwatchesHorizontalSliderOneLine,
    topDealsElectronicsCategories,
    topDealsOnTabletsCategories,
    bankOfferElectronicsSlide,
    homeFurnitureCarouselCategories,
    slideshomeFurniture,
    homeFurnitureHorizontalSliderOneLine,
    topDealshomeFurnitureCategories,
    topHomeFurnitureItems,
    slidesHomeDecor,
    homeDecorCarouselCategories,
    topDealshomeDecorCategories,
    topHomeDecorItems,
    giftworthyVasesHomeDecorItems,
    sportsFitnessCarouselCategories,
    slidesShoppingSportsFitness,
    topTrendingPicksSportsFitnessCategories,
    greatDealsForYouSportsFitness,
    ScrollItemSportsFitness,
    babyToysCarouselCategories,
    savingsSpecialBabyToysItems,
    popCultureShopBabyToysItems,
    latestLaunchesBabyToysItems,
    slidesBabyToys,
    booksCarouselCategories,
    slidesbooks,
    bestSellersInPrintBooksItems,
    newReleasesOnKindleBooksItems,
    bestSellersOnKindleBooksItems,
    autoAccessoriesCarouselCategories,
    slidesautoAccessories,
    dealsOnCarAccessoriesAutoAccessoriesItems,
    dealsOnBikeAccessoriesAutoAccessoriesItems,
    premiumAtItsBestAutoAccessoriesItems,
    shopByPublishersBooksCategories,
    shopByLanguageBooksItems,
    jewelleryCarouselCategories,
    slidesJewellery,
    discoverOurCuratedStoresJewelleryItems,
    slidesHalfJewellery,
    shopByColourslidesHalfJewellery,
    shopByBondslidesHalfJewellery,
    tvsAppliancesCarouselCategories,
    slidesTVsAppliances,
    shopByBrandsTVsAppliancesCategories,
    topDealsTVsAppliancesItems,
    mobilesTabletsCarouselCategories,
    slidesMobilesTablets,
    newLauncheslidesHalfMobilesTablets,
    bestDealsOnNoCostEMIMobilesTabletsItems,
    shopByBrandsMobilesTabletsCategories,
    slidesHalfMobilesTablets,
    slidesHalfAppliances,
    affordableEMIOffersAppliances,
    instaFindsAppliances,
    homeKitchenCarouselCategories,
    slidesHomeKitchen,
    bankOfferMobileSlide,
    monsoonDealsHomeKitchenItems,
    grabOrGoneHomeKitchenItems,
    favoriteStoresHomeKitchenItems,
    discoverTrendingBrandsHomeKitchenItems,
} from '@/app/data/Categorywise/ShopingCategories';
import TopBrandsOnOffer from '../../ItemListDesigns/TopBrandsOnOffer/TopBrandsOnOffer';
import VerticalScroll from '../../ItemListDesigns/VerticalScroll/VerticalScroll';
import {
    slidesShoppingMenFashion,
    slidesShoppingWomenFashion,
    slidesShoppingKidsFashion,
    slidesShoppingWomenBeauty,
    slidesHalfShoppingMenFashion,
    slidesHalfShoppingWomenBeauty,
    bankOfferShoppingSlide,
    toBrandsMenFashion,
    toBrandsWomenFashion,
    toBrandsKidsFashion,
    toBrandsWomenBeauty,
    hottestBrandsWomenFashion,
    ScrollItemWomensBeauty
} from '@/app/data/Categorywise/ShopingCategories';
import AllCategoryOne from '@/components/HomePage/AllCategoryOne/AllCategoryOne';
import { ShopingCategories } from '@/app/data/Categorywise/ShopingCategories';
import { ShopingSlide1SmartPhoneDeals } from '@/app/data/Shoping/ShopingSlide1';
import HeroBannerAll from '@/components/HomePage/HeroBannerAll/HeroBannerAll';
import { ShopingHeroBannerData } from '@/app/data/HeroBannerwise/ShopingHero';
import { slidesDataFashionFullSlide } from '@/app/data/Categorywise/ShopingCategories';
import FashionFullSlideGrid from '../../HeroBanner/FashionFullSlideGrid/FashionFullSlideGrid';
import HeroBannerSlide from '../../HeroBanner/HeroBannerSlide/HeroBannerSlide';
import BankOfferSlide from '../../HeroBanner/BankOfferSlide/BankOfferSlide';
import HeroBannerHalfSlide from '../../HeroBanner/HeroBannerHalfSlide/HeroBannerHalfSlide';
import ShoppingSlides1 from '../../ShoppingSlides1/ShoppingSlides1';
import HorizontalSliderOneLine from '../../ItemListDesigns/HorizontalSliderOneLine/HorizontalSliderOneLine';
import ShopByCategory, { CategoryItem } from '../ShopByCategory/ShopByCategory';
import { useRouter } from 'next/navigation';
import VerticalScrollSquare from '../../ItemListDesigns/VerticalScrollSquare/VerticalScrollSquare';
import HeroBannerLeftContent from '../../HeroBanner/HeroBannerLeftContent/HeroBannerLeftContent';
import WelcomeVideoHufko from '@/components/HomePage/VideoPlayerDesign/WelcomeVideoHufko/WelcomeVideoHufko';
import HorizontalSliderOneLine2 from '../../ItemListDesigns/HorizontalSliderOneLine2/HorizontalSliderOneLine2';
import SubCategoryItemsList from '../SubCategoryItemsList/SubCategoryItemsList';
import FoodDineOutCard, { FoodDineOutItem } from '@/components/FoodDelivery/FoodDesigns/FoodDineOutCard/FoodDineOutCard';
import VideoPlayerSlide from '@/components/FoodDelivery/VideoPlayer/VideoPlayerSlide/VideoPlayerSlide';
import SearchBarDineOut from '@/components/SearchBar/SearchBarDineOut/SearchBarDineOut';
import { DineoutItemsList, FoodCategoryItemsListData, FoodDineOutSpecialCollections, OrderNowItemsList, TopBrandsDataFood } from '@/app/data/Categorywise/FoodsCategories';
import SearchBarOrderNow from '@/components/SearchBar/SearchBarOrderNow/SearchBarOrderNow';
import FoodCategoryList from '@/components/FoodDelivery/FoodDesigns/FoodCategoryList/FoodCategoryList';
import TopBrandsFood, { TopBrandInterface } from '@/components/FoodDelivery/FoodDesigns/TopBrandsFood/TopBrandsFood';
import OrderNowItemsListCard, { RestaurantItemFoodInterface } from '@/components/FoodDelivery/FoodDesigns/OrderNowItemsListCard/OrderNowItemsListCard';
import DineOutItemsListCard, { DineOutItemInterface } from '@/components/FoodDelivery/FoodDesigns/DineOutItemsListCard/DineOutItemsListCard';
import DineOutRestDetails from '@/components/FoodDelivery/DineOutRestDetails/DineOutRestDetails';

interface ShopByMainCategoryProps {
    category?: string;
    selectedItem?: SubHeaderItem | null;
    subHeaderItem?: SubHeaderItem | null;
}

// Storage keys (matching AddressSelection)
const STORAGE_KEYS = {
    SELECTED_COUNTRY: 'address_selection_country',
    SELECTED_CITY: 'address_selection_city',
    SELECTED_STATE: 'address_selection_state',
    SELECTED_LOCALITY: 'address_selection_locality',
    SELECTED_PINCODE: 'address_selection_pincode',
    SELECTED_FULL_ADDRESS: 'address_selection_full_address',
};

// Custom event name for address changes
const ADDRESS_CHANGE_EVENT = 'addressSelectionChanged';

// Helper to get from localStorage
const getFromStorage = (key: string): string | null => {
    try {
        return localStorage.getItem(key);
    } catch (error) {
        console.error('Error reading from localStorage:', error);
        return null;
    }
};

// Map of categories to their carousel data
const categoryCarouselMap: Record<string, CategoryItem[]> = {
    electronics: electronicsCarouselCategories,
    home_decor: homeDecorCarouselCategories,
    home_furniture: homeFurnitureCarouselCategories,
    mens_fashion: menFashionCarouselCategories,
    women_fashion: womenFashionCarouselCategories,
    kids_fashion: kidsFashionCarouselCategories,
    women_beauty: womenBeautyCarouselCategories,
    sports_fitness: sportsFitnessCarouselCategories,
    baby_toys: babyToysCarouselCategories,
    books: booksCarouselCategories,
    auto_accessories: autoAccessoriesCarouselCategories,
    jewellery: jewelleryCarouselCategories,
    appliances: tvsAppliancesCarouselCategories,
    mobiles_tablets: mobilesTabletsCarouselCategories,
};

const ShopByMainCategory: React.FC<ShopByMainCategoryProps> = ({
    category,
    selectedItem,
    subHeaderItem
}) => {
    // State for selected category and view mode
    const [selectedCategory, setSelectedCategory] = React.useState<CategoryItem | null>(null);
    const [showSubCategoryView, setShowSubCategoryView] = React.useState(false);

    // State for showing restaurant details
    const [showRestaurantDetails, setShowRestaurantDetails] = useState<boolean>(false);
    const [selectedRestaurantId, setSelectedRestaurantId] = useState<string | null>(null);

    // State for address information from localStorage
    const [selectedCity, setSelectedCity] = useState<string>('');
    const [selectedCountry, setSelectedCountry] = useState<string>('');
    const [selectedState, setSelectedState] = useState<string>('');
    const [selectedLocality, setSelectedLocality] = useState<string>('');

    const router = useRouter();

    // Load address data from localStorage
    const loadAddressData = () => {
        const city = getFromStorage(STORAGE_KEYS.SELECTED_CITY) || '';
        const country = getFromStorage(STORAGE_KEYS.SELECTED_COUNTRY) || '';
        const state = getFromStorage(STORAGE_KEYS.SELECTED_STATE) || '';
        const locality = getFromStorage(STORAGE_KEYS.SELECTED_LOCALITY) || '';

        setSelectedCity(city);
        setSelectedCountry(country);
        setSelectedState(state);
        setSelectedLocality(locality);

        console.log('Address data loaded:', { city, country, state, locality });
    };

    // Load address data on mount and when category changes
    useEffect(() => {
        loadAddressData();
    }, [category]);

    // Listen for custom address change event (dispatched from AddressSelection)
    useEffect(() => {
        const handleAddressChange = (event: Event) => {
            console.log('Address change event received');
            loadAddressData();
        };

        // Listen for the custom event
        window.addEventListener(ADDRESS_CHANGE_EVENT, handleAddressChange);

        // Also listen for storage events (for cross-tab updates)
        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === STORAGE_KEYS.SELECTED_CITY ||
                e.key === STORAGE_KEYS.SELECTED_COUNTRY ||
                e.key === STORAGE_KEYS.SELECTED_STATE ||
                e.key === STORAGE_KEYS.SELECTED_LOCALITY) {
                console.log('Storage change detected for address keys');
                loadAddressData();
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener(ADDRESS_CHANGE_EVENT, handleAddressChange);
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    // Get the current category's carousel data
    const getCurrentCarouselData = (): CategoryItem[] => {
        return categoryCarouselMap[category as string] || [];
    };

    // Handle category click from carousel
    const handleCategoryClick = (item: CategoryItem) => {
        console.log('Category clicked:', item);
        setSelectedCategory(item);
        setShowSubCategoryView(true);
        setShowRestaurantDetails(false);
        setSelectedRestaurantId(null);

        setTimeout(() => {
            const contentElement = document.getElementById('category-content');
            if (contentElement) {
                contentElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, 100);
    };

    // Handle back to main view
    const handleBackToMainView = () => {
        setShowSubCategoryView(false);
        setSelectedCategory(null);
        setShowRestaurantDetails(false);
        setSelectedRestaurantId(null);
    };

    // Handle back from restaurant details
    const handleBackFromRestaurantDetails = () => {
        console.log('Back to results from ShopByMainCategory');
        setShowRestaurantDetails(false);
        setSelectedRestaurantId(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Handle dineout item click - show restaurant details
    const handleDineoutItemClick = (item: DineOutItemInterface) => {
        console.log('Restaurant clicked from ShopByMainCategory:', item.name, 'ID:', item.id);
        setSelectedRestaurantId(String(item.id));
        setShowRestaurantDetails(true);
        // Scroll to top when showing details
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Handle generic category click for navigation
    const handleCategoryNavigation = (category: any) => {
        console.log('Category clicked:', category);

        if (category.category && category.subCategory) {
            router.push(`/${category.category}/${category.subCategory}/${category.id}`);
        } else if (category.category) {
            router.push(`/${category.category}/${category.id}`);
        } else {
            router.push(category.url || `/${category.id}`);
        }
    };

    const handleSearch = (data: any) => {
        console.log('Search data:', data);
        // Handle search logic here
    };

    const handleDiningSelect = (item: any) => {
        console.log('Selected dining:', item);
        // Handle navigation or modal opening
    };

    const handleAction = (item: any) => {
        console.log('Action clicked for:', item);
        // Open booking modal or navigate to booking page
        // openBookingModal(item);
    };

    const handleFoodCategoryClick = (category: any) => {
        console.log('Selected category:', category);
        // Navigate to category page or filter products
    };

    const handleBrandClick = (brand: TopBrandInterface) => {
        console.log('Selected brand:', brand.name);
        console.log('Delivery time:', brand.deliveryTime);
        console.log('Cuisine:', brand.cuisine);
        // Navigate to brand page or show details
    };

    const handleItemFoodClick = (item: RestaurantItemFoodInterface) => {
        console.log('Selected restaurant:', item.name);
        // Navigate to restaurant details page
    };

    // Generate location-based title with locality and country
    const getLocationBasedTitle = (baseTitle: string): string => {
        // Get location parts from state
        const locality = selectedLocality || getFromStorage(STORAGE_KEYS.SELECTED_LOCALITY) || '';
        const city = selectedCity || getFromStorage(STORAGE_KEYS.SELECTED_CITY) || '';
        const country = selectedCountry || getFromStorage(STORAGE_KEYS.SELECTED_COUNTRY) || '';

        // Priority: locality > city, then add country
        let locationString = '';
        if (locality) {
            locationString = country ? `${locality}, ${country}` : locality;
        } else if (city) {
            locationString = country ? `${city}, ${country}` : city;
        } else if (country) {
            locationString = country;
        }

        // Return formatted title using baseTitle
        if (locationString) {
            return `${baseTitle} in ${locationString}`;
        }

        // Fallback - use baseTitle only
        return baseTitle;
    };

    const handleItemClick = (item: FoodDineOutItem, index: number) => {
        // This will be called by the card's onClick handler
        // The card already handles the URL update internally
        console.log('Dineout category clicked:', item.title, item.dineoutSpecialCategoryID);

        // You can add additional logic here if needed
        // The card will handle the URL update automatically
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

    // Render the main content based on category
    const renderMainContent = () => {
        const carouselData = getCurrentCarouselData();

        // Check if we're showing restaurant details
        if (showRestaurantDetails && selectedRestaurantId) {
            return renderRestaurantDetails();
        }

        switch (category) {
            case 'electronics':
                return (
                    <>
                        <FashionRoundCarousel
                            categories={electronicsCarouselCategories}
                            title=""
                            autoScroll={false}
                            showScrollbar={false}
                            onCategoryClick={handleCategoryClick}
                        />
                        <HeroBannerLeftContent
                            banners={slidesElectronicsFashion}
                            defaultAlign="left"
                        />
                        <BankOfferSlide
                            slides={bankOfferShoppingSlide}
                            autoPlay={true}
                            autoPlayInterval={5000}
                            showArrows={true}
                            showDots={true}
                            onSlideChange={(index) => console.log('Current slide:', index)}
                        />
                        <VerticalScroll
                            items={toElectronicsItems}
                            imageHeight={400}
                            title="Hufko unique launches"
                            subtitle="Based on your preferences"
                            ctaText="See All Recommendations"
                        />
                        <VerticalScrollSquare
                            title="Top deals | Up to 40% off"
                            categories={topDealsElectronicsCategories}
                            itemsPerView={6}
                            rows={1}
                            showArrows={true}
                            onCategoryClick={handleCategoryNavigation}
                        />
                        <VerticalScrollSquare
                            title="Top deals on tablets | Up to 40% off"
                            categories={topDealsOnTabletsCategories}
                            itemsPerView={6}
                            rows={1}
                            showArrows={true}
                            onCategoryClick={handleCategoryNavigation}
                        />
                        <HorizontalSliderOneLine
                            products={HeadphonesHorizontalSliderOneLine}
                            title="Deals on Headphones"
                            exploreMoreLink="/deals/headphones"
                            backgroundColor="#7739B5"
                            primaryColor="#ffffff"
                            secondaryColor="#7739B5"
                        />
                        <HorizontalSliderOneLine
                            products={PcAccessoriesHorizontalSliderOneLine}
                            title="Deals on PC Accessories"
                            exploreMoreLink="/deals/pc-accessories"
                            backgroundColor="#CBCDA3"
                            primaryColor="#ffffff"
                            secondaryColor="#F27311"
                        />
                        <HorizontalSliderOneLine
                            products={SmartwatchesHorizontalSliderOneLine}
                            title="Deals on Smartwatches"
                            exploreMoreLink="/deals/smartwatches"
                            backgroundColor="#F27311"
                            primaryColor="#ffffff"
                            secondaryColor="#F27311"
                        />
                    </>
                );

            case 'home_kitchen':
                return (
                    <>
                        <FashionRoundCarousel
                            categories={homeKitchenCarouselCategories}
                            title=""
                            autoScroll={false}
                            showScrollbar={false}
                            onCategoryClick={handleCategoryClick}
                        />
                        <HeroBannerLeftContent
                            banners={slidesHomeKitchen}
                            defaultAlign="left"
                        />
                        <BankOfferSlide
                            slides={bankOfferShoppingSlide}
                            autoPlay={true}
                            autoPlayInterval={5000}
                            showArrows={true}
                            showDots={true}
                            onSlideChange={(index) => console.log('Current slide:', index)}
                        />
                        <VerticalScroll
                            items={grabOrGoneHomeKitchenItems}
                            imageHeight={400}
                            title="Grab or gone"
                            subtitle=""
                            ctaText=""
                        />
                        <VerticalScroll
                            items={monsoonDealsHomeKitchenItems}
                            imageHeight={400}
                            title="Monsoon deals"
                            subtitle=""
                            ctaText=""
                        />
                        <VerticalScroll
                            items={favoriteStoresHomeKitchenItems}
                            imageHeight={350}
                            title="Favorite stores"
                            subtitle=""
                            ctaText=""
                        />
                        <VerticalScroll
                            items={discoverTrendingBrandsHomeKitchenItems}
                            imageHeight={400}
                            title="Discover trending brands"
                            subtitle=""
                            ctaText=""
                        />
                    </>
                );

            case 'home_decor':
                return (
                    <>
                        <FashionRoundCarousel
                            categories={homeDecorCarouselCategories}
                            title=""
                            autoScroll={false}
                            showScrollbar={false}
                            onCategoryClick={handleCategoryClick}
                        />
                        <HeroBannerLeftContent
                            banners={slidesHomeDecor}
                            defaultAlign="left"
                        />
                        <BankOfferSlide
                            slides={bankOfferShoppingSlide}
                            autoPlay={true}
                            autoPlayInterval={5000}
                            showArrows={true}
                            showDots={true}
                            onSlideChange={(index) => console.log('Current slide:', index)}
                        />
                        <div className={styles.categorySliderOneLine}>
                            <HorizontalSliderOneLine
                                products={topHomeDecorItems}
                                title="Stylish wall decor"
                                exploreMoreLink="/deals/headphones"
                                backgroundColor="#ffffff"
                                primaryColor="#000000"
                                secondaryColor="#7739B5"
                            />
                        </div>
                        <VerticalScrollSquare
                            title="Shop by brands"
                            categories={topDealshomeDecorCategories}
                            itemsPerView={6}
                            rows={1}
                            showArrows={true}
                            onCategoryClick={handleCategoryNavigation}
                        />
                        <div className={styles.categorySliderOneLine}>
                            <HorizontalSliderOneLine
                                products={giftworthyVasesHomeDecorItems}
                                title="Giftworthy vases"
                                exploreMoreLink="/deals/headphones"
                                backgroundColor="#ffffff"
                                primaryColor="#000000"
                                secondaryColor="#7739B5"
                            />
                        </div>
                    </>
                );

            case 'home_furniture':
                return (
                    <>
                        <FashionRoundCarousel
                            categories={homeFurnitureCarouselCategories}
                            title=""
                            autoScroll={false}
                            showScrollbar={false}
                            onCategoryClick={handleCategoryClick}
                        />
                        <HeroBannerLeftContent
                            banners={slideshomeFurniture}
                            defaultAlign="left"
                        />
                        <WelcomeVideoHufko
                            title=""
                            titleHighlight=""
                            subtitle=""
                            videoSrc="/videos/furniture.mp4"
                            logoSrc="/icons/logo_video.png"
                            appStoreLink="/"
                            playStoreLink="/"
                            className="custom-hero"
                            showLogo={false}
                            showAppStore={false}
                            showPlayStore={false}
                            muted={true}
                        />
                        <BankOfferSlide
                            slides={bankOfferShoppingSlide}
                            autoPlay={true}
                            autoPlayInterval={5000}
                            showArrows={true}
                            showDots={true}
                            onSlideChange={(index) => console.log('Current slide:', index)}
                        />
                        <VerticalScroll
                            items={topHomeFurnitureItems}
                            imageHeight={350}
                            title="Hufko unique launches"
                            subtitle="Based on your preferences"
                            ctaText="See All Recommendations"
                        />
                        <VerticalScrollSquare
                            title="Top deals | Up to 40% off"
                            categories={topDealshomeFurnitureCategories}
                            itemsPerView={6}
                            rows={1}
                            showArrows={true}
                            onCategoryClick={handleCategoryNavigation}
                        />
                        <HorizontalSliderOneLine
                            products={homeFurnitureHorizontalSliderOneLine}
                            title="Up to 60% off"
                            exploreMoreLink="/deals/headphones"
                            backgroundColor="#FFCB39"
                            primaryColor="#ffffff"
                            secondaryColor="#FFCB39"
                        />
                    </>
                );

            case 'mens_fashion':
                return (
                    <>
                        <FashionRoundCarousel
                            categories={menFashionCarouselCategories}
                            title=""
                            autoScroll={false}
                            showScrollbar={false}
                            onCategoryClick={handleCategoryClick}
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
                            }}
                            onBrandHover={(brand) => {
                                console.log('Brand hovered:', brand);
                            }}
                        />
                    </>
                );

            case 'women_fashion':
                return (
                    <>
                        <FashionRoundCarousel
                            categories={womenFashionCarouselCategories}
                            title=""
                            autoScroll={false}
                            showScrollbar={false}
                            onCategoryClick={handleCategoryClick}
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
                    </>
                );

            case 'kids_fashion':
                return (
                    <>
                        <FashionRoundCarousel
                            categories={kidsFashionCarouselCategories}
                            title=""
                            autoScroll={false}
                            showScrollbar={false}
                            onCategoryClick={handleCategoryClick}
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
                            }}
                            onBrandHover={(brand) => {
                                console.log('Brand hovered:', brand);
                            }}
                        />
                    </>
                );

            case 'women_beauty':
                return (
                    <>
                        <FashionRoundCarousel
                            categories={womenBeautyCarouselCategories}
                            title=""
                            autoScroll={false}
                            showScrollbar={false}
                            onCategoryClick={handleCategoryClick}
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
                    </>
                );

            case 'sports_fitness':
                return (
                    <>
                        <FashionRoundCarousel
                            categories={sportsFitnessCarouselCategories}
                            title=""
                            autoScroll={false}
                            showScrollbar={false}
                            onCategoryClick={handleCategoryClick}
                        />
                        <HeroBannerSlide
                            slides={slidesShoppingSportsFitness}
                            autoPlay={true}
                            autoPlayInterval={5000}
                            showArrows={true}
                            showDots={true}
                            showTitle={true}
                            showSubtitle={true}
                            showCTA={true}
                            onSlideClick={(slide, index) => {
                                console.log(`Slide ${index + 1} clicked:`, slide);
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
                        <VerticalScrollSquare
                            title="Top trending picks"
                            categories={topTrendingPicksSportsFitnessCategories}
                            itemsPerView={6}
                            rows={1}
                            showArrows={true}
                            onCategoryClick={handleCategoryNavigation}
                        />
                        <TopBrandsOnOffer
                            brands={greatDealsForYouSportsFitness}
                            title="Great deals for you"
                            subtitle="Limited-Time Deals Just for You"
                            backgroundColor="#7739B5"
                            titleColor="#ffffff"
                            subtitleColor="#ffffff"
                            gap={8}
                            rows={1}
                            cardPadding={10}
                            onBrandClick={(brand) => {
                                console.log('Brand clicked:', brand);
                            }}
                            onBrandHover={(brand) => {
                                console.log('Brand hovered:', brand);
                            }}
                        />
                        <VerticalScroll
                            items={ScrollItemSportsFitness}
                            imageHeight={400}
                            title="The hobby club"
                            subtitle="Based on your preferences"
                            ctaText="See All Recommendations"
                        />
                    </>
                );

            case 'baby_toys':
                return (
                    <>
                        <FashionRoundCarousel
                            categories={babyToysCarouselCategories}
                            title=""
                            autoScroll={false}
                            showScrollbar={false}
                            onCategoryClick={handleCategoryClick}
                        />
                        <HeroBannerLeftContent
                            banners={slidesBabyToys}
                            defaultAlign="left"
                        />
                        <BankOfferSlide
                            slides={bankOfferShoppingSlide}
                            autoPlay={true}
                            autoPlayInterval={5000}
                            showArrows={true}
                            showDots={true}
                            onSlideChange={(index) => console.log('Current slide:', index)}
                        />
                        <VerticalScroll
                            items={savingsSpecialBabyToysItems}
                            imageHeight={420}
                            title="Savings special"
                            subtitle="Based on your preferences"
                            ctaText="See All Recommendations"
                        />
                        <VerticalScroll
                            items={popCultureShopBabyToysItems}
                            imageHeight={400}
                            title="Pop culture shop"
                            subtitle="Based on your preferences"
                            ctaText="See All Recommendations"
                        />
                        <VerticalScroll
                            items={latestLaunchesBabyToysItems}
                            imageHeight={400}
                            title="Latest launches"
                            subtitle="Based on your preferences"
                            ctaText="See All Recommendations"
                        />
                    </>
                );

            case 'books':
                return (
                    <>
                        <FashionRoundCarousel
                            categories={booksCarouselCategories}
                            title=""
                            autoScroll={false}
                            showScrollbar={false}
                            onCategoryClick={handleCategoryClick}
                        />
                        <HeroBannerLeftContent
                            banners={slidesbooks}
                            defaultAlign="left"
                        />
                        <BankOfferSlide
                            slides={bankOfferShoppingSlide}
                            autoPlay={true}
                            autoPlayInterval={5000}
                            showArrows={true}
                            showDots={true}
                            onSlideChange={(index) => console.log('Current slide:', index)}
                        />
                        <HorizontalSliderOneLine2
                            products={bestSellersInPrintBooksItems}
                            title="Best sellers in print"
                            exploreMoreLink="/deals/headphones"
                            backgroundColor="#ffffff"
                            primaryColor="#000000"
                            secondaryColor="#ffffff"
                            cardWidth={240}
                            imageHeight={300}
                            gap={12}
                            showExploreMore={true}
                        />
                        <HorizontalSliderOneLine2
                            products={newReleasesOnKindleBooksItems}
                            title="Best sellers in print"
                            exploreMoreLink="/deals/headphones"
                            backgroundColor="#ffffff"
                            primaryColor="#000000"
                            secondaryColor="#ffffff"
                            cardWidth={240}
                            imageHeight={300}
                            gap={12}
                            showExploreMore={true}
                        />
                        <HorizontalSliderOneLine2
                            products={bestSellersOnKindleBooksItems}
                            title="Bestsellers on Kindle"
                            exploreMoreLink="/deals/headphones"
                            backgroundColor="#ffffff"
                            primaryColor="#000000"
                            secondaryColor="#ffffff"
                            cardWidth={240}
                            imageHeight={300}
                            gap={12}
                            showExploreMore={true}
                        />
                        <VerticalScrollSquare
                            title="Shop by publishers"
                            categories={shopByPublishersBooksCategories}
                            itemsPerView={6}
                            rows={1}
                            showArrows={true}
                            onCategoryClick={handleCategoryNavigation}
                        />
                        <VerticalScroll
                            items={shopByLanguageBooksItems}
                            imageHeight={400}
                            title="Shop by language"
                            subtitle=""
                            ctaText=""
                        />
                    </>
                );

            case 'auto_accessories':
                return (
                    <>
                        <FashionRoundCarousel
                            categories={autoAccessoriesCarouselCategories}
                            title=""
                            autoScroll={false}
                            showScrollbar={false}
                            onCategoryClick={handleCategoryClick}
                        />
                        <HeroBannerLeftContent
                            banners={slidesautoAccessories}
                            defaultAlign="left"
                        />
                        <BankOfferSlide
                            slides={bankOfferShoppingSlide}
                            autoPlay={true}
                            autoPlayInterval={5000}
                            showArrows={true}
                            showDots={true}
                            onSlideChange={(index) => console.log('Current slide:', index)}
                        />
                        <VerticalScroll
                            items={dealsOnCarAccessoriesAutoAccessoriesItems}
                            imageHeight={400}
                            title="Deals on car accessories"
                            subtitle=""
                            ctaText=""
                        />
                        <VerticalScroll
                            items={dealsOnBikeAccessoriesAutoAccessoriesItems}
                            imageHeight={400}
                            title="Deals on bike accessories"
                            subtitle=""
                            ctaText=""
                        />
                        <VerticalScroll
                            items={premiumAtItsBestAutoAccessoriesItems}
                            imageHeight={400}
                            title="Premium at its best"
                            subtitle=""
                            ctaText=""
                        />
                    </>
                );

            case 'jewellery':
                return (
                    <>
                        <FashionRoundCarousel
                            categories={jewelleryCarouselCategories}
                            title=""
                            autoScroll={false}
                            showScrollbar={false}
                            onCategoryClick={handleCategoryClick}
                        />
                        <HeroBannerLeftContent
                            banners={slidesJewellery}
                            defaultAlign="left"
                        />
                        <BankOfferSlide
                            slides={bankOfferShoppingSlide}
                            autoPlay={true}
                            autoPlayInterval={5000}
                            showArrows={true}
                            showDots={true}
                            onSlideChange={(index) => console.log('Current slide:', index)}
                        />
                        <VerticalScroll
                            items={discoverOurCuratedStoresJewelleryItems}
                            imageHeight={400}
                            title="Discover Our Curated Stores"
                            subtitle=""
                            ctaText=""
                        />
                        <div className={styles.headingContent}>
                            <h2 className={styles.heading}>Latest Collections</h2>
                        </div>
                        <HeroBannerHalfSlide
                            banners={slidesHalfJewellery}
                            itemsPerView={{
                                mobile: 1,
                                tablet: 2,
                                laptop: 3,
                                desktop: 2.5
                            }}
                            autoScrollInterval={10000}
                            showArrows={true}
                            height={450}
                            backgroundColor="#f5f5f5"
                            onBannerClick={(banner) => console.log('Banner clicked:', banner)}
                        />
                        <div className={styles.headingContent}>
                            <h2 className={styles.heading}>Shop by Colour</h2>
                        </div>
                        <HeroBannerHalfSlide
                            banners={shopByColourslidesHalfJewellery}
                            itemsPerView={{
                                mobile: 1,
                                tablet: 2,
                                laptop: 3,
                                desktop: 4
                            }}
                            autoScrollInterval={10000}
                            showArrows={true}
                            height={370}
                            backgroundColor="#f5f5f5"
                            onBannerClick={(banner) => console.log('Banner clicked:', banner)}
                        />
                        <div className={styles.headingContent}>
                            <h2 className={styles.heading}>Shop by Bond</h2>
                        </div>
                        <HeroBannerHalfSlide
                            banners={shopByBondslidesHalfJewellery}
                            itemsPerView={{
                                mobile: 1,
                                tablet: 2,
                                laptop: 3,
                                desktop: 6
                            }}
                            autoScrollInterval={10000}
                            showArrows={true}
                            height={350}
                            backgroundColor="#f5f5f5"
                            onBannerClick={(banner) => console.log('Banner clicked:', banner)}
                        />
                    </>
                );

            case 'appliances':
                return (
                    <>
                        <FashionRoundCarousel
                            categories={tvsAppliancesCarouselCategories}
                            title=""
                            autoScroll={false}
                            showScrollbar={false}
                            onCategoryClick={handleCategoryClick}
                        />
                        <HeroBannerLeftContent
                            banners={slidesTVsAppliances}
                            defaultAlign="left"
                        />
                        <BankOfferSlide
                            slides={bankOfferShoppingSlide}
                            autoPlay={true}
                            autoPlayInterval={5000}
                            showArrows={true}
                            showDots={true}
                            onSlideChange={(index) => console.log('Current slide:', index)}
                        />
                        <VerticalScrollSquare
                            title="Shop by Brands!"
                            categories={shopByBrandsTVsAppliancesCategories}
                            itemsPerView={6}
                            rows={2}
                            showArrows={true}
                            onCategoryClick={handleCategoryNavigation}
                        />
                        <VerticalScroll
                            items={topDealsTVsAppliancesItems}
                            imageHeight={320}
                            title="Top Deals!"
                            subtitle=""
                            ctaText=""
                        />
                        <HeroBannerHalfSlide
                            banners={slidesHalfAppliances}
                            itemsPerView={{
                                mobile: 1,
                                tablet: 2,
                                laptop: 3,
                                desktop: 2.5
                            }}
                            autoScrollInterval={10000}
                            showArrows={true}
                            height={330}
                            backgroundColor="#f5f5f5"
                            onBannerClick={(banner) => console.log('Banner clicked:', banner)}
                        />
                        <VerticalScroll
                            items={affordableEMIOffersAppliances}
                            imageHeight={400}
                            title="Affordable EMI offers"
                            subtitle=""
                            ctaText=""
                        />
                        <VerticalScroll
                            items={instaFindsAppliances}
                            imageHeight={400}
                            title="Insta finds"
                            subtitle=""
                            ctaText=""
                        />
                    </>
                );

            case 'mobiles_tablets':
                return (
                    <>
                        <FashionRoundCarousel
                            categories={mobilesTabletsCarouselCategories}
                            title=""
                            autoScroll={false}
                            showScrollbar={false}
                            onCategoryClick={handleCategoryClick}
                        />
                        <HeroBannerLeftContent
                            banners={slidesMobilesTablets}
                            defaultAlign="left"
                        />
                        <BankOfferSlide
                            slides={bankOfferShoppingSlide}
                            autoPlay={true}
                            autoPlayInterval={5000}
                            showArrows={true}
                            showDots={true}
                            onSlideChange={(index) => console.log('Current slide:', index)}
                        />
                        <div className={styles.headingContent}>
                            <h2 className={styles.heading}>New Launches</h2>
                        </div>
                        <HeroBannerHalfSlide
                            banners={newLauncheslidesHalfMobilesTablets}
                            itemsPerView={{
                                mobile: 1,
                                tablet: 2,
                                laptop: 3,
                                desktop: 4
                            }}
                            autoScrollInterval={10000}
                            showArrows={true}
                            height={370}
                            backgroundColor="#f5f5f5"
                            onBannerClick={(banner) => console.log('Banner clicked:', banner)}
                        />
                        <VerticalScroll
                            items={bestDealsOnNoCostEMIMobilesTabletsItems}
                            imageHeight={400}
                            title="Best Deals on No Cost EMI"
                            subtitle=""
                            ctaText=""
                        />
                        <VerticalScrollSquare
                            title="Shop by Brands!"
                            categories={shopByBrandsMobilesTabletsCategories}
                            itemsPerView={6}
                            rows={2}
                            showArrows={true}
                            onCategoryClick={handleCategoryNavigation}
                        />
                        <div className={styles.headingContent}>
                            <h2 className={styles.heading}>Upcoming Launches</h2>
                        </div>
                        <HeroBannerHalfSlide
                            banners={slidesHalfMobilesTablets}
                            itemsPerView={{
                                mobile: 1,
                                tablet: 2,
                                laptop: 3,
                                desktop: 2.5
                            }}
                            autoScrollInterval={10000}
                            showArrows={true}
                            height={350}
                            backgroundColor="#f5f5f5"
                            onBannerClick={(banner) => console.log('Banner clicked:', banner)}
                        />
                    </>
                );

            case 'order_now_food':
                return (
                    <>
                        <div className={styles.dineOutCardOrderNow}>
                            <div className={styles.videoWrapper}>
                                <VideoPlayerSlide
                                    src="/videos/DINE_OUT_1.mp4"
                                    poster="/"
                                    aspectRatio="21:9"
                                />
                            </div>
                            <div className={styles.searchOverlay}>
                                <SearchBarOrderNow
                                    onSearch={handleSearch}
                                    className="custom-search-bar"
                                    placeholder="Search restaurants..."
                                />
                            </div>
                            <FoodCategoryList
                                categories={FoodCategoryItemsListData}
                                title="Suggestion for your online order"
                                onCategoryClick={handleFoodCategoryClick}
                                itemsPerView={5}
                                autoPlay={true}
                                showArrows={true}
                            />
                            <TopBrandsFood
                                title="Best popular food brands near me"
                                brands={TopBrandsDataFood}
                                onBrandClick={handleBrandClick}
                                className="custom-wrapper"
                                itemsPerView={6}
                                autoPlay={true}
                                autoPlayInterval={3000}
                                showArrows={true}
                            />
                            <OrderNowItemsListCard
                                items={OrderNowItemsList}
                                title={getLocationBasedTitle("Food Delivery Restaurants")}
                                variant="5col"
                                showOffers={true}
                                onItemClick={handleItemFoodClick}
                            />
                        </div>
                    </>
                );

            case 'dine_out_food':
                return (
                    <>
                        <div className={styles.videoPlayerSlide}>
                            <VideoPlayerSlide
                                src="/videos/DINEOUT.mp4"
                                poster="/"
                                aspectRatio="21:9"
                            />
                        </div>
                        <div className={styles.searchBarDineOut}>
                            <SearchBarDineOut
                                hotelName=""
                                guests={1}
                                rooms={1}
                                onSearch={handleSearch}
                                placeholder="Find restaurant nearby me"
                            />
                        </div>
                        <div className={styles.dineOutCard}>
                            <FoodDineOutCard
                                items={FoodDineOutSpecialCollections}
                                title="Dineout collections category nearby me"
                                viewAllLink="/collections"
                                viewAllText="View All"
                                autoPlayInterval={3000}
                                showArrows={true}
                                onItemClick={handleItemClick}
                            />
                        </div>
                        <DineOutItemsListCard
                            items={DineoutItemsList}
                            title={getLocationBasedTitle("Top collections dineout restaurants")}
                            onItemClick={handleDineoutItemClick}
                            columns={4}
                        />
                    </>
                );

            case 'all':
            default:
                return (
                    <>
                        <HeroBannerAll banners={ShopingHeroBannerData} />
                        <AllCategoryOne categories={ShopingCategories} />
                        <ShoppingSlides1
                            title="Today's Top Smartphone Deals"
                            deals={ShopingSlide1SmartPhoneDeals}
                            cardWidth={200}
                            showArrow={true}
                        />
                    </>
                );
        }
    };

    // Determine if we should show the subcategory view
    const shouldShowSubCategoryView = showSubCategoryView && selectedCategory && category !== 'all';

    return (
        <div className={styles.shopByMainCategory}>
            <div id="category-content">
                {shouldShowSubCategoryView ? (
                    <div className={styles.categoryContent}>
                        <SubCategoryItemsList
                            subCategory={selectedCategory}
                            selectedItem={selectedItem}
                            subHeaderItem={subHeaderItem}
                            categoryData={getCurrentCarouselData()}
                            selectedCategory={selectedCategory}
                            onBack={handleBackToMainView}
                        />
                    </div>
                ) : (
                    <div className={styles.categoryContent}>
                        {renderMainContent()}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShopByMainCategory;