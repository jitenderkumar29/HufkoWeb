'use client';

import React, { useMemo, useState } from 'react';
import FoodRoundCarousel, {
    FoodCategoryItem,
} from '../FoodDesigns/FoodRoundCarousel/FoodRoundCarousel';
import HeroBannerFood from '../HeroBannerFoodDesign/HeroBannerFood/HeroBannerFood';
import OrderNowItemsListCard, {
    RestaurantItemFoodInterface,
} from '../FoodDesigns/OrderNowItemsListCard/OrderNowItemsListCard';
import { FoodAllCategoryItemsListData } from '@/app/data/Categorywise/FoodsCategories';
import styles from './FoodDeliverySelectionItemsList.module.scss';


interface FoodDeliverySelectionItemsListProps {
    categoryId: string;
    onBack: () => void;
    items: RestaurantItemFoodInterface[];
    onItemClick?: (item: RestaurantItemFoodInterface) => void;
}

const FoodDeliverySelectionItemsList: React.FC<
    FoodDeliverySelectionItemsListProps
> = ({
    categoryId,
    onBack,
    items,
    onItemClick,
}) => {

        // Selected category
        const [selectedCategory, setSelectedCategory] =
            useState<string>(categoryId);

        // Convert category data into carousel format
        const carouselCategories: FoodCategoryItem[] = useMemo(() => {
            return FoodAllCategoryItemsListData.map((item) => ({
                id: item.id,
                name: item.name,
                title: item.name,
                imageUrl: item.image || '/products/default_food.png',
                url: '/',
                dineoutSpecialCategoryID: item.dineoutSpecialCategoryID,
            }));
        }, []);

        // Find selected category details
        const selectedCategoryData = useMemo(() => {
            return FoodAllCategoryItemsListData.find(
                (item) =>
                    item.dineoutSpecialCategoryID === selectedCategory
            );
        }, [selectedCategory]);

        const categoryName = selectedCategoryData?.name || 'Food';

        // Category selection
        const handleCategoryClick = (item: FoodCategoryItem) => {
            const selectedId = item.dineoutSpecialCategoryID;

            if (!selectedId) return;

            setSelectedCategory(selectedId);
        };

        // Display all items regardless of selected category
        const displayedRestaurants = useMemo(() => {
            return items || [];
        }, [items]);

        // Restaurant click
        const handleRestaurantClick = (
            item: RestaurantItemFoodInterface
        ) => {
            if (onItemClick) {
                onItemClick(item);
            }
        };

        return (
            <div className="foodDeliverySelection">

                {/* Back button */}
                <div className="foodSelectionHeader">
                    {/* <button
          type="button"
          onClick={onBack}
          className="foodSelectionBackButton"
        >
          ← Back to Food Delivery
        </button> */}
                </div>

                {/* Food category carousel */}
                <FoodRoundCarousel
                    categories={carouselCategories}
                    title=""
                    onCategoryClick={handleCategoryClick}
                    selectedCategoryId={selectedCategory}
                    showArrows={true}
                    showScrollbar={false}
                    cardWidth={130}
                    cardHeight={130}
                    cardGap={20}
                    imageScale={1.1}
                    highlightColor="#580c25"
                />

                {/* Food hero banner */}
                <div className={styles.heroBannerFood}>
                    <HeroBannerFood
                        banners={[
                            {
                                id: 'food-banner-selection',
                                title: '',
                                category: 'Food',
                                subtitle: '',
                                imgUrl: '/products/food-banner-selection-hero.jpg',
                                align: 'right',
                            },
                        ]}
                    />
                </div>

                {/* Restaurant listing */}
                <section className="foodSelectionRestaurants">
                    <div className={styles.orderNowItemsListCard}>
                        {displayedRestaurants.length > 0 ? (
                            <OrderNowItemsListCard
                                items={displayedRestaurants}
                                title={`Explore ${categoryName} Restaurants`}
                                variant="5col"
                                showOffers={true}
                                onItemClick={handleRestaurantClick}
                            />
                        ) : (
                            <div className="foodSelectionEmptyState">
                                <h3>No Restaurants Available</h3>

                                <p>
                                    No restaurants available in{' '}
                                    <strong>{categoryName}</strong> yet.
                                </p>
                            </div>
                        )}
                    </div>
                </section>

            </div>
        );
    };

export default FoodDeliverySelectionItemsList;