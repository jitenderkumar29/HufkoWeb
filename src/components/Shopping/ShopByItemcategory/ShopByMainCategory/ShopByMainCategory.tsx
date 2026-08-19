// components/Shopping/ShopByMainCategory/ShopByMainCategory.tsx

import { SubHeaderItem } from '@/components/Header/SubHeader/SubHeader';
import React from 'react';
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
    TVsAppliancesHorizontalSliderOneLine,
    mobilesTabletsCarouselCategories,
    slidesMobilesTablets,
    newLauncheslidesHalfMobilesTablets,
    bestDealsOnNoCostEMIMobilesTabletsItems,
    shopByBrandsMobilesTabletsCategories,
    slidesHalfMobilesTablets,
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
import SubSubHeader from '@/components/Header/SubSubHeader/SubSubHeader';
import AllCategoryOne from '@/components/HomePage/AllCategoryOne/AllCategoryOne';
import { ShopingCategories } from '@/app/data/Categorywise/ShopingCategories';
import { ShopingSlide1SmartPhoneDeals } from '@/app/data/Shoping/ShopingSlide1';
import HeroBannerAll from '@/components/HomePage/HeroBannerAll/HeroBannerAll';
import { ShopingHeroBannerData } from '@/app/data/HeroBannerwise/ShopingHero';
import { categoriesDataMap } from '@/app/data/Categorywise/ShopingCategories';
import { slidesDataFashionFullSlide } from '@/app/data/Categorywise/ShopingCategories';
import FashionFullSlideGrid from '../../HeroBanner/FashionFullSlideGrid/FashionFullSlideGrid';
import HeroBannerSlide from '../../HeroBanner/HeroBannerSlide/HeroBannerSlide';
import BankOfferSlide from '../../HeroBanner/BankOfferSlide/BankOfferSlide';
import HeroBannerHalfSlide from '../../HeroBanner/HeroBannerHalfSlide/HeroBannerHalfSlide';
import ShoppingSlides1 from '../../ShoppingSlides1/ShoppingSlides1';
import HorizontalSliderOneLine from '../../ItemListDesigns/HorizontalSliderOneLine/HorizontalSliderOneLine';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import { useRouter } from 'next/navigation';
import VerticalScrollSquare from '../../ItemListDesigns/VerticalScrollSquare/VerticalScrollSquare';
import HeroBannerLeftContent from '../../HeroBanner/HeroBannerLeftContent/HeroBannerLeftContent';
import { FoodHeroBannerLeftContent } from '@/app/data/HeroBannerwise/FoodHero';
import WelcomeVideoHufko from '@/components/HomePage/VideoPlayerDesign/WelcomeVideoHufko/WelcomeVideoHufko';
import HorizontalSliderOneLine2 from '../../ItemListDesigns/HorizontalSliderOneLine2/HorizontalSliderOneLine2';

interface ShopByMainCategoryProps {
    category?: string;
    selectedItem?: SubHeaderItem | null;
    subHeaderItem?: SubHeaderItem | null;
}

const ShopByMainCategory: React.FC<ShopByMainCategoryProps> = ({
    category,
    selectedItem,
    subHeaderItem
}) => {
    // State for sub-sub categories
    const [selectedElectronicsSubCategory, setSelectedElectronicsSubCategory] = React.useState<string>('all');
    const [selectedHomeDecorSubCategory, setSelectedHomeDecorSubCategory] = React.useState<string>('all');

    const router = useRouter();

    // Use the category prop to filter or display content
    React.useEffect(() => {
        if (category) {
            console.log('ShopByMainCategory received category:', category);
            // Fetch or filter data based on the category
            // For example: fetchProductsByCategory(category);
        }
    }, [category]);

    // You can also use the full selectedItem if you need more data
    React.useEffect(() => {
        if (selectedItem) {
            console.log('Selected item:', selectedItem);
            // Use selectedItem.name, selectedItem.url, etc.
        }
    }, [selectedItem]);

    // Handle electronics subcategory selection
    const handleElectronicsSubCategorySelect = (item: SubHeaderItem) => {
        const subCategoryId = item.id || item.name.toLowerCase().replace(/\s+/g, '_');
        setSelectedElectronicsSubCategory(subCategoryId);
        console.log('Selected electronics sub-category:', item);
    };

    // Handle home decor subcategory selection
    const handleHomeDecorSubCategorySelect = (item: SubHeaderItem) => {
        const subCategoryId = item.id || item.name.toLowerCase().replace(/\s+/g, '_');
        setSelectedHomeDecorSubCategory(subCategoryId);
        console.log('Selected home decor sub-category:', item);
    };

    // Check if a specific subcategory is selected
    const isElectronicsSubCategorySelected = (categoryId: string) => {
        return selectedElectronicsSubCategory === categoryId;
    };

    const handleCategoryClick = (category: any) => {
        console.log('Category clicked:', category);

        // Navigate with hierarchy info
        if (category.category && category.subCategory) {
            router.push(`/${category.category}/${category.subCategory}/${category.id}`);
        } else if (category.category) {
            router.push(`/${category.category}/${category.id}`);
        } else {
            router.push(category.url || `/${category.id}`);
        }
    };

    // Render content based on category
    const renderCategoryContent = () => {
        switch (category) {
            case 'electronics':
                return (
                    <div className={styles.categoryContent}>
                        <FashionRoundCarousel
                            categories={electronicsCarouselCategories}
                            title=""
                            autoScroll={false}
                            showScrollbar={false}
                        />
                        <HeroBannerLeftContent
                            banners={slidesElectronicsFashion}
                            defaultAlign="left" // Default alignment if not specified per banner
                        />
                        <BankOfferSlide
                            slides={bankOfferElectronicsSlide}
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
                            onCategoryClick={handleCategoryClick}
                        />
                        <VerticalScrollSquare
                            title="Top deals on tablets | Up to 40% off"
                            categories={topDealsOnTabletsCategories}
                            itemsPerView={6}
                            rows={1}
                            showArrows={true}
                            onCategoryClick={handleCategoryClick}
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
                        {/* <TopBrandsOnOffer
                            brands={toBrandsMenFashion}
                            title="Top Brands on Offer"
                            subtitle="Best electronics deals"
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
                        /> */}
                    </div>
                );

            case 'home_decor':
                return (
                    <div className={styles.categoryContent}>
                        <FashionRoundCarousel
                            categories={homeDecorCarouselCategories}
                            title=""
                            autoScroll={false}
                            showScrollbar={false}
                        />
                        <HeroBannerLeftContent
                            banners={slidesHomeDecor}
                            defaultAlign="left" // Default alignment if not specified per banner
                        />
                        <BankOfferSlide
                            slides={bankOfferElectronicsSlide}
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
                        {/* <VerticalScroll
                            items={topHomeDecorItems}
                            imageHeight={350}
                            title="Hufko unique launches"
                            subtitle="Based on your preferences"
                            ctaText="See All Recommendations"
                        /> */}
                        <VerticalScrollSquare
                            title="Shop by brands"
                            categories={topDealshomeDecorCategories}
                            itemsPerView={6}
                            rows={1}
                            showArrows={true}
                            onCategoryClick={handleCategoryClick}
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
                    </div>
                );

            case 'home_furniture':
                return (
                    <div className={styles.categoryContent}>
                        <FashionRoundCarousel
                            categories={homeFurnitureCarouselCategories}
                            title=""
                            autoScroll={false}
                            showScrollbar={false}
                        />
                        <HeroBannerLeftContent
                            banners={slideshomeFurniture}
                            defaultAlign="left" // Default alignment if not specified per banner
                        />
                        <WelcomeVideoHufko
                            title=""
                            titleHighlight=""
                            subtitle=""
                            // title="Premium food delivery app"
                            // titleHighlight="World's #1"
                            // subtitle="Enjoy fast online ordering on the Hufko app"
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
                            slides={bankOfferElectronicsSlide}
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
                            onCategoryClick={handleCategoryClick}
                        />
                        {/* 
                        <VerticalScrollSquare
                            title="Top deals on tablets | Up to 40% off"
                            categories={topDealsOnTabletsCategories}
                            itemsPerView={6}
                            rows={1}
                            showArrows={true}
                            onCategoryClick={handleCategoryClick}
                        /> */}
                        <HorizontalSliderOneLine
                            products={homeFurnitureHorizontalSliderOneLine}
                            title="Up to 60% off"
                            exploreMoreLink="/deals/headphones"
                            backgroundColor="#FFCB39"
                            primaryColor="#ffffff"
                            secondaryColor="#FFCB39"
                        />
                        {/* <HorizontalSliderOneLine
                            products={PcAccessoriesHorizontalSliderOneLine}
                            title="Deals on PC Accessories"
                            exploreMoreLink="/deals/pc-accessories"
                            backgroundColor="#F27311"
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
                        /> */}
                        {/* <TopBrandsOnOffer
                            brands={toBrandsMenFashion}
                            title="Top Brands on Offer"
                            subtitle="Best electronics deals"
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
                        /> */}
                    </div>
                );

            case 'mens_fashion':
                return (
                    <div className={styles.categoryContent}>
                        <FashionRoundCarousel
                            categories={menFashionCarouselCategories}
                            title="Men's Fashion"
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
                    </div>
                );

            case 'women_fashion':
                return (
                    <div className={styles.categoryContent}>
                        <FashionRoundCarousel
                            categories={womenFashionCarouselCategories}
                            title="Women's Fashion"
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
                    </div>
                );

            case 'kids_fashion':
                return (
                    <div className={styles.categoryContent}>
                        <FashionRoundCarousel
                            categories={kidsFashionCarouselCategories}
                            title="Kid's Fashion"
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
                    </div>
                );

            case 'women_beauty':
                return (
                    <div className={styles.categoryContent}>
                        <FashionRoundCarousel
                            categories={womenBeautyCarouselCategories}
                            title="Women's Beauty"
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
                    </div>
                );

            case 'sports_fitness':
                return (
                    <div className={styles.categoryContent}>
                        <FashionRoundCarousel
                            categories={sportsFitnessCarouselCategories}
                            title=""
                            autoScroll={false}
                            showScrollbar={false}
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
                            onCategoryClick={handleCategoryClick}
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
                    </div>
                );

            case 'baby_toys':
                return (
                    <div className={styles.categoryContent}>
                        <FashionRoundCarousel
                            categories={babyToysCarouselCategories}
                            title=""
                            autoScroll={false}
                            showScrollbar={false}
                        />
                        <HeroBannerLeftContent
                            banners={slidesBabyToys}
                            defaultAlign="left" // Default alignment if not specified per banner
                        />
                        <BankOfferSlide
                            slides={bankOfferElectronicsSlide}
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
                        {/* Add more mobile & tablet content */}
                    </div>
                );

            case 'books':
                return (
                    <div className={styles.categoryContent}>
                        <FashionRoundCarousel
                            categories={booksCarouselCategories}
                            title=""
                            autoScroll={false}
                            showScrollbar={false}
                        />
                        <HeroBannerLeftContent
                            banners={slidesbooks}
                            defaultAlign="left" // Default alignment if not specified per banner
                        />
                        <BankOfferSlide
                            slides={bankOfferElectronicsSlide}
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
                            onCategoryClick={handleCategoryClick}
                        />
                        <VerticalScroll
                            items={shopByLanguageBooksItems}
                            imageHeight={400}
                            title="Shop by language"
                            subtitle=""
                            ctaText=""
                        />
                        {/* Add more mobile & tablet content */}
                    </div>
                );

            case 'auto_accessories':
                return (
                    <div className={styles.categoryContent}>
                        <FashionRoundCarousel
                            categories={autoAccessoriesCarouselCategories}
                            title=""
                            autoScroll={false}
                            showScrollbar={false}
                        />
                        <HeroBannerLeftContent
                            banners={slidesautoAccessories}
                            defaultAlign="left" // Default alignment if not specified per banner
                        />
                        <BankOfferSlide
                            slides={bankOfferElectronicsSlide}
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

                        {/* Add more mobile & tablet content */}
                    </div>
                );

            case 'jewellery':
                return (
                    <div className={styles.categoryContent}>
                        <FashionRoundCarousel
                            categories={jewelleryCarouselCategories}
                            title=""
                            autoScroll={false}
                            showScrollbar={false}
                        />
                        <HeroBannerLeftContent
                            banners={slidesJewellery}
                            defaultAlign="left" // Default alignment if not specified per banner
                        />
                        <BankOfferSlide
                            slides={bankOfferElectronicsSlide}
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

                        {/* Add more mobile & tablet content */}
                    </div>
                );
            
            case 'tvs_appliances':
                return (
                    <div className={styles.categoryContent}>
                        <FashionRoundCarousel
                            categories={tvsAppliancesCarouselCategories}
                            title=""
                            autoScroll={false}
                            showScrollbar={false}
                        />
                        <HeroBannerLeftContent
                            banners={slidesTVsAppliances}
                            defaultAlign="left" // Default alignment if not specified per banner
                        />
                        <BankOfferSlide
                            slides={bankOfferElectronicsSlide}
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
                            onCategoryClick={handleCategoryClick}
                        />
                        <VerticalScroll
                            items={topDealsTVsAppliancesItems}
                            imageHeight={320}
                            title="Top Deals!"
                            subtitle=""
                            ctaText=""
                        />
                         <HorizontalSliderOneLine
                            products={TVsAppliancesHorizontalSliderOneLine}
                            title="Under ₹1,000"
                            exploreMoreLink="/deals/headphones"
                            backgroundColor="#ffffff"
                            primaryColor="#000000"
                            secondaryColor="#ffffff"
                        />
                        

                        {/* Add more mobile & tablet content */}
                    </div>
                );
            
            case 'mobiles_tablets':
                return (
                    <div className={styles.categoryContent}>
                        <FashionRoundCarousel
                            categories={mobilesTabletsCarouselCategories}
                            title=""
                            autoScroll={false}
                            showScrollbar={false}
                        />
                        <HeroBannerLeftContent
                            banners={slidesMobilesTablets}
                            defaultAlign="left" // Default alignment if not specified per banner
                        />
                        <BankOfferSlide
                            slides={bankOfferElectronicsSlide}
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
                            onCategoryClick={handleCategoryClick}
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
                        {/* Add more mobile & tablet content */}
                    </div>
                );

            case 'all':
            default:
                return (
                    <div className={styles.categoryContent}>
                        <HeroBannerAll banners={ShopingHeroBannerData} />
                        <AllCategoryOne categories={ShopingCategories} />
                        <ShoppingSlides1
                            title="Today's Top Smartphone Deals"
                            deals={ShopingSlide1SmartPhoneDeals}
                            cardWidth={200}
                            showArrow={true}
                        />
                    </div>
                );
        }
    };

    return (
        <div className={styles.shopByMainCategory}>
            {/* <div className={styles.categoryHeader}>
                <h2 className={styles.categoryTitle}>
                    {selectedItem?.name || category || 'All Categories'}
                </h2>
                {selectedItem && (
                    <span className={styles.categoryBadge}>
                        {selectedItem.name}
                    </span>
                )}
            </div> */}
            {renderCategoryContent()}
        </div>
    );
};

export default ShopByMainCategory;