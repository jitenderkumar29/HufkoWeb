// components/FoodDelivery/FoodDesigns/FoodDeliveryItemsList/FoodDeliveryItemsList.tsx
'use client';

import React, { useState, useMemo, useEffect } from 'react';
import styles from './FoodDeliveryItemsList.module.scss';
import {
  FoodDietHeroBannerLeftContent,
} from '@/app/data/HeroBannerwise/FoodHero';
import HeroBannerFood from '../HeroBannerFoodDesign/HeroBannerFood/HeroBannerFood';
import FilterDineOut, {
  FilterOption,
} from '@/components/Filters/FilterDineOut/FilterDineOut';
import OrderNowItemsListCard, {
  RestaurantItemFoodInterface,
} from '../FoodDesigns/OrderNowItemsListCard/OrderNowItemsListCard';
import {
  ItemsListFoodDeliveryAll,
} from '@/app/data/Categorywise/FoodsCategories';
import {
  filterRestaurantsByFoodId,
  getFoodCategoryName,
} from '@/components/Filters/foodFilters/foodFilters';
import HeroBannerFoodSimple from '../HeroBannerFoodDesign/HeroBannerFoodSimple/HeroBannerFoodSimple';

export interface FoodDeliveryItem {
  id: string;
  name: string;
  imageUrl: string;
  price?: number;
  rating?: number;
  restaurantName?: string;
  deliveryTime?: string;
  isVeg?: boolean;
}

export interface FoodCategoryMeta {
  foodId: string;
  name: string;
  imageUrl?: string;
  url?: string;
}

interface FoodDeliveryItemsListProps {
  foodId: string;
  category?: FoodCategoryMeta;
  items?: FoodDeliveryItem[];
  title?: string;
  onBack?: () => void;
  onItemClick?: (item: FoodDeliveryItem) => void;
}

// ---------- Module-level helpers ----------

const STORAGE_KEYS = {
  SELECTED_COUNTRY: 'address_selection_country',
  SELECTED_CITY: 'address_selection_city',
  SELECTED_STATE: 'address_selection_state',
  SELECTED_LOCALITY: 'address_selection_locality',
  SELECTED_PINCODE: 'address_selection_pincode',
  SELECTED_FULL_ADDRESS: 'address_selection_full_address',
} as const;

export const FOOD_DIET_HERO_BANNER_FOOD_IDS = new Set(
  FoodDietHeroBannerLeftContent.map((b) => b.foodId)
);

const getFromStorage = (key: string): string | null => {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return null;
  }
};

const getTitleForCategory = (foodId: string): string =>
  foodId
    .replace(/_food$/, '')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());

// ---------- Component ----------

const FoodDeliveryItemsList: React.FC<FoodDeliveryItemsListProps> = ({
  foodId,
  category,
  items,
  title,
  onBack,
  onItemClick,
}) => {
  // State for address information from localStorage
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedLocality, setSelectedLocality] = useState<string>('');

  // 👇 Load address info from localStorage on mount (client-side only)
  useEffect(() => {
    setSelectedCity(getFromStorage(STORAGE_KEYS.SELECTED_CITY) ?? '');
    setSelectedCountry(getFromStorage(STORAGE_KEYS.SELECTED_COUNTRY) ?? '');
    setSelectedState(getFromStorage(STORAGE_KEYS.SELECTED_STATE) ?? '');
    setSelectedLocality(getFromStorage(STORAGE_KEYS.SELECTED_LOCALITY) ?? '');
  }, []);

  const heading =
    title ?? `${category?.name ?? getTitleForCategory(foodId)} Delivery Near You`;

  // 👇 CORE: filter restaurants based on the clicked foodId
  // Uses `items` prop if provided, otherwise falls back to the full dataset.
  const filteredRestaurants = useMemo(() => {
    const source = (items as unknown as RestaurantItemFoodInterface[]) ?? ItemsListFoodDeliveryAll;
    return filterRestaurantsByFoodId(source, foodId);
  }, [foodId, items]);

  // Get the human-readable category name (e.g. "Pizzas" from "pizzas")
  const categoryName = useMemo(
    () => category?.name ?? getFoodCategoryName(foodId) ?? getTitleForCategory(foodId),
    [foodId, category]
  );

  const handleFilterDineOutChange = (filters: string[]) => {
    console.log('Active toggle filters:', filters);
  };

  const handleSortDineOutChange = (sort: string) => {
    console.log('Sort:', sort);
  };

  const handleDropdownDineOutChange = (
    filterId: string,
    optionId: string | null
  ) => {
    console.log('Dropdown changed:', filterId, '→', optionId);
  };

  const dineOutCustomFilters: FilterOption[] = [
    {
      id: 'ten_mins_delivery',
      label: '10 Mins Delivery',
      badge: 'NEW',
      badgeColor: '#ff5b2e',
    },
    {
      id: 'veg_non_veg',
      label: 'Veg/Non-Veg',
      type: 'dropdown',
      options: [
        { id: 'veg', label: 'Veg Only' },
        { id: 'non_veg', label: 'Non-Veg' },
        { id: 'both', label: 'Veg & Non-Veg' },
      ],
    },
    {
      id: 'ratings',
      label: 'Ratings',
      type: 'dropdown',
      options: [
        { id: '4.5plus', label: '4.5+' },
        { id: '4.0plus', label: '4.0+' },
        { id: '3.5plus', label: '3.5+' },
        { id: '3.0plus', label: '3.0+' },
      ],
    },
    {
      id: 'delivery_time',
      label: 'Delivery Time',
      type: 'dropdown',
      options: [
        { id: '10_20', label: '10 - 20 min' },
        { id: '20_30', label: '20 - 30 min' },
        { id: '30_45', label: '30 - 45 min' },
        { id: '45_plus', label: '45+ min' },
      ],
    },
    {
      id: 'cost_for_two',
      label: 'Cost For Two',
      type: 'dropdown',
      options: [
        { id: 'under_300', label: 'Under ₹300' },
        { id: '300_600', label: '₹300 - ₹600' },
        { id: '600_1000', label: '₹600 - ₹1000' },
        { id: 'above_1000', label: 'Above ₹1000' },
      ],
    },
  ];

  const getLocationBasedTitle = (baseTitle: string): string => {
    const locality =
      selectedLocality || getFromStorage(STORAGE_KEYS.SELECTED_LOCALITY) || '';
    const city =
      selectedCity || getFromStorage(STORAGE_KEYS.SELECTED_CITY) || '';
    const country =
      selectedCountry || getFromStorage(STORAGE_KEYS.SELECTED_COUNTRY) || '';

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

  const handleItemFoodClick = (item: RestaurantItemFoodInterface) => {
    console.log('Selected restaurant:', item.name);
    onItemClick?.(item as unknown as FoodDeliveryItem);
  };


  return (
    <div className={styles.container}>
      {FOOD_DIET_HERO_BANNER_FOOD_IDS.has(foodId) && (
        <HeroBannerFood
          banners={FoodDietHeroBannerLeftContent.filter(
            (banner) => banner.foodId === foodId
          )}
          defaultAlign="left"
        />
      )}

      {/* Filters always visible */}
      <FilterDineOut
        customFilters={dineOutCustomFilters}
        onFilterChange={handleFilterDineOutChange}
        onSortChange={handleSortDineOutChange}
        onDropdownChange={handleDropdownDineOutChange}
      />

      {/* 👇 Restaurant list — automatically filtered by foodId */}
      {filteredRestaurants.length > 0 ? (
        <OrderNowItemsListCard
          items={filteredRestaurants}
          title={getLocationBasedTitle(`${categoryName} Restaurants`)}
          variant="5col"
          showOffers={true}
          onItemClick={handleItemFoodClick}
        />
      ) : (
        <p className={styles.emptyState}>
          No restaurants available in <strong>{heading}</strong> yet.
        </p>
      )}
    </div>
  );
};

export default FoodDeliveryItemsList;