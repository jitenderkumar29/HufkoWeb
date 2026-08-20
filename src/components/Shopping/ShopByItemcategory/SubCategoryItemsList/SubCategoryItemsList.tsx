import { SubHeaderItem } from "@/components/Header/SubHeader/SubHeader";
import { useRouter } from 'next/navigation';
import React from 'react';
import styles from './SubCategoryItemsList.module.scss';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import HorizontalSliderOneLine from '../../ItemListDesigns/HorizontalSliderOneLine/HorizontalSliderOneLine';
import {
    HeadphonesHorizontalSliderOneLine,
    PcAccessoriesHorizontalSliderOneLine,
    SmartwatchesHorizontalSliderOneLine,
    ElectronicsCategories,
    mobilesTabletsCarouselCategories,
    slidesMobilesTablets,
    bankOfferElectronicsSlide,
    newLauncheslidesHalfMobilesTablets,
    bestDealsOnNoCostEMIMobilesTabletsItems,
    shopByBrandsMobilesTabletsCategories,
    slidesHalfMobilesTablets,
    bankOfferMobileSlide,
    dealsOnExchangeMobilesTabletsItems
} from '@/app/data/Categorywise/ShopingCategories';
import { CategoryItem } from '../ShopByCategory/ShopByCategory';
import { SMARTPHONES_ELECTRONICS_FILTERS } from "@/app/data/filterData/filterData";
import FilterShopByCategory from "../FilterShopByCategory/FilterShopByCategory";
import FashionRoundCarousel from "../../ItemListDesigns/FashionRoundCarousel/FashionRoundCarousel";
import HeroBannerLeftContent from "../../HeroBanner/HeroBannerLeftContent/HeroBannerLeftContent";
import BankOfferSlide from "../../HeroBanner/BankOfferSlide/BankOfferSlide";
import HeroBannerHalfSlide from "../../HeroBanner/HeroBannerHalfSlide/HeroBannerHalfSlide";
import VerticalScroll from "../../ItemListDesigns/VerticalScroll/VerticalScroll";
import VerticalScrollSquare from "../../ItemListDesigns/VerticalScrollSquare/VerticalScrollSquare";

interface SubCategoryItemsListProps {
    subCategory: CategoryItem;
    selectedItem?: SubHeaderItem | null;
    subHeaderItem?: SubHeaderItem | null;
    categoryData?: CategoryItem[];
    selectedCategory?: CategoryItem | null;
    onBack?: () => void;
}

const SubCategoryItemsList: React.FC<SubCategoryItemsListProps> = ({
    subCategory,
    selectedItem,
    subHeaderItem,
    categoryData,
    selectedCategory,
    onBack
}) => {
    const router = useRouter();

    const handleCategoryClick = (category: CategoryItem) => {
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

    const handleFilterChange = (filterId: string, selected: string[]) => {
        console.log(`Filter ${filterId} changed:`, selected);
        // Here you would typically update the product list based on filters
    };

    // Get items related to the selected category
    const getRelatedItems = () => {
        if (!selectedCategory) return ElectronicsCategories;
        // Filter items based on the selected category
        return ElectronicsCategories.filter((item: CategoryItem) =>
            item.subCategory === selectedCategory.subCategory ||
            item.category === selectedCategory.category
        );
    };

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

    const relatedItems = getRelatedItems();

    // Render content based on subCategory
    const renderSubCategoryContent = () => {
        const subCategoryId = subCategory?.subCategory || '';

        switch (subCategoryId) {
            case 'smartphones_electronics':
                return (
                    <div className={styles.pageLayout}>
                        <aside className={styles.filterSidebar}>
                           <FilterShopByCategory
                                filterGroups={SMARTPHONES_ELECTRONICS_FILTERS}
                                title="Filters"
                                enableSearch={true}
                                maxOptions={10}
                                onFilterChange={(filterId, selected, allFilters) => {
                                    console.log('Filter changed:', filterId, selected);
                                }}
                            />
                            {/* <FilterShopByCategory onFilterChange={handleFilterChange} /> */}
                        </aside>
                        <main className={styles.contentArea}>
                            {/* <FashionRoundCarousel
                            categories={mobilesTabletsCarouselCategories}
                            title=""
                            autoScroll={false}
                            showScrollbar={false}
                            onCategoryClick={handleCategoryClick}
                        /> */}
                        {/* <HeroBannerLeftContent
                            banners={slidesMobilesTablets}
                            defaultAlign="left"
                        /> */}
                        <BankOfferSlide
                            slides={bankOfferMobileSlide}
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
                            height={350}
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
                        <VerticalScroll
                            items={dealsOnExchangeMobilesTabletsItems}
                            imageHeight={400}
                            title="Deals on Exchange"
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
                        </main>
                    </div>
                );

            case 'laptops_computers_electronics':
                return (
                    <div className={styles.pageLayout}>
                        <aside className={styles.filterSidebar}>
                        </aside>
                        <main className={styles.contentArea}>
                            
                        </main>
                    </div>
                );

            case 'tablets_electronics':
                return (
                    <div className={styles.pageLayout}>
                        <aside className={styles.filterSidebar}>
                        </aside>
                        <main className={styles.contentArea}>
                            
                        </main>
                    </div>
                );

            case 'headphones_earphones_electronics':
                return (
                    <div className={styles.pageLayout}>
                        <aside className={styles.filterSidebar}>
                        </aside>
                        <main className={styles.contentArea}>
                            
                        </main>
                    </div>
                );

            case 'smart_watches_electronics':
                return (
                    <div className={styles.pageLayout}>
                        <aside className={styles.filterSidebar}>
                        </aside>
                        <main className={styles.contentArea}>
                            
                        </main>
                    </div>
                );

            case 'cameras_photography_electronics':
                return (
                    <div className={styles.pageLayout}>
                        <aside className={styles.filterSidebar}>
                        </aside>
                        <main className={styles.contentArea}>
                            
                        </main>
                    </div>
                );

            case 'televisions_electronics':
                return (
                    <div className={styles.pageLayout}>
                        <aside className={styles.filterSidebar}>
                        </aside>
                        <main className={styles.contentArea}>
                           
                        </main>
                    </div>
                );

            case 'audio_speakers_electronics':
                return (
                    <div className={styles.pageLayout}>
                        <aside className={styles.filterSidebar}>
                        </aside>
                        <main className={styles.contentArea}>
                            
                        </main>
                    </div>
                );

            case 'gaming_consoles_electronics':
                return (
                    <div className={styles.pageLayout}>
                        <aside className={styles.filterSidebar}>
                        </aside>
                        <main className={styles.contentArea}>
                            
                        </main>
                    </div>
                );

            case 'computer_accessories_electronics':
                return (
                    <div className={styles.pageLayout}>
                        <aside className={styles.filterSidebar}>
                        </aside>
                        <main className={styles.contentArea}>
                           
                        </main>
                    </div>
                );

            case 'mobile_accessories_electronics':
                return (
                    <div className={styles.pageLayout}>
                        <aside className={styles.filterSidebar}>
                        </aside>
                        <main className={styles.contentArea}>
                            
                        </main>
                    </div>
                );

            case 'smart_home_devices_electronics':
                return (
                    <div className={styles.pageLayout}>
                        <aside className={styles.filterSidebar}>
                        </aside>
                        <main className={styles.contentArea}>
                            
                        </main>
                    </div>
                );

            case 'monitors_displays_electronics':
            //     return (
            //         <div className={styles.pageLayout}>
            //             <aside className={styles.filterSidebar}>
            //                 <FilterShopByCategory onFilterChange={handleFilterChange} />
            //             </aside>
            //             <main className={styles.contentArea}>
            //                 <ShopByCategory
            //                     title={selectedCategory ? selectedCategory.name : "Monitors & Displays"}
            //                     categories={relatedItems}
            //                     itemsPerView={6}
            //                     rows={2}
            //                     showArrows={true}
            //                     onCategoryClick={handleCategoryClick}
            //                 />
            //             </main>
            //         </div>
            //     );

            default:
                // Default view for all other subcategories
                return (
                    <div className={styles.pageLayout}>

                    </div>
                );
        }
    };

    return (
        <div className={styles.electronicsPage}>
            <div className={styles.container}>
                {/* {selectedCategory && (
                    <div className={styles.selectedCategoryHeader}>
                        <div className={styles.headerContent}>
                            <div className={styles.headerLeft}>
                                <h2 className={styles.selectedCategoryTitle}>
                                    {selectedCategory.name}
                                </h2>
                                <p className={styles.selectedCategorySubtitle}>
                                    Explore our collection of {selectedCategory.name.toLowerCase()}
                                </p>
                            </div>
                            {onBack && (
                                <button
                                    className={styles.backButton}
                                    onClick={onBack}
                                >
                                    ← Back
                                </button>
                            )}
                        </div>
                    </div>
                )} */}

                {renderSubCategoryContent()}
            </div>
        </div>
    );
};

export default SubCategoryItemsList;