// src/components/Shopping/ShopByItemcategory/FilterShopByCategory/FilterShopByCategory.tsx

'use client';

import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronRight, 
  Check, 
  Star,
  Package,
  Truck,
  Tag,
  Sparkles,
  Clock,
  Percent,
  Box,
  CreditCard,
  Store,
  Filter,
  X,
  Smartphone,
  Headphones,
  Watch,
  Tablet,
  Laptop,
  Camera,
  Speaker,
  Gamepad,
  Monitor,
  Printer,
  Wifi,
  HardDrive,
  Battery,
  Zap,
  Shield,
  Award,
  Crown,
  Globe
} from 'lucide-react';
import styles from './FilterShopByCategory.module.scss';

// Types for filter data
export interface FilterOption {
  id: string;
  label: string;
  count?: number;
  icon?: React.ReactNode;
  iconType?: string;
}

export interface FilterGroup {
  id: string;
  title: string;
  type: 'checkbox' | 'radio' | 'link' | 'price' | 'rating';
  options: FilterOption[];
  isOpen?: boolean;
  showCount?: boolean;
  icon?: React.ReactNode;
}

export interface FilterShopByCategoryProps {
  className?: string;
  onFilterChange?: (filterId: string, selected: string[], allFilters: Record<string, string[]>) => void;
  initialFilters?: Record<string, string[]>;
  filterGroups?: FilterGroup[];
  title?: string;
  showClearAll?: boolean;
  persistFilters?: boolean;
  renderOption?: (group: FilterGroup, option: FilterOption, isSelected: boolean, onSelect: () => void) => React.ReactNode;
  renderGroupHeader?: (group: FilterGroup, isExpanded: boolean, toggleGroup: () => void, selectedCount: number) => React.ReactNode;
  showSelectedCount?: boolean;
  expandAll?: boolean;
  maxOptions?: number;
  showMoreLabel?: string;
  showLessLabel?: string;
  enableSearch?: boolean;
  searchPlaceholder?: string;
}

// Default filter groups for electronics
export const DEFAULT_ELECTRONICS_FILTERS: FilterGroup[] = [
  {
    id: 'category',
    title: 'Category',
    type: 'link',
    isOpen: true,
    options: [
      { id: 'electronics', label: 'Electronics' },
      { id: 'accessories', label: 'Accessories' },
      { id: 'cameras', label: 'Cameras & Photography' },
      { id: 'car', label: 'Car & Vehicle Electronics' },
      { id: 'computers', label: 'Computers & Accessories' },
      { id: 'gps', label: 'GPS & Accessories' },
      { id: 'home-audio', label: 'Home Audio' },
      { id: 'home-theater', label: 'Home Theater, TV & Video' },
      { id: 'mobiles', label: 'Mobiles & Accessories' },
      { id: 'portable-media', label: 'Portable Media Players' },
      { id: 'radio', label: 'Radio Communication' },
      { id: 'tablets', label: 'Tablets' },
      { id: 'telephones', label: 'Telephones & Accessories' },
      { id: 'warranties', label: 'Warranties' },
      { id: 'ebooks', label: 'eBook Readers & Accessories' },
      { id: 'wearable', label: 'Wearable Technology' },
      { id: 'batteries', label: 'General Purpose Batteries & Battery Chargers' },
      { id: 'headphones', label: 'Headphones, Earbuds & Accessories' },
      { id: 'power', label: 'Power Accessories' }
    ]
  },
  {
    id: 'prime',
    title: 'Amazon Prime',
    type: 'checkbox',
    options: [
      { id: 'prime-eligible', label: 'Prime Eligible' }
    ]
  },
  {
    id: 'delivery',
    title: 'Delivery Day',
    type: 'checkbox',
    options: [
      { id: 'today', label: 'Get It Today' },
      { id: 'tomorrow', label: 'Get It by Tomorrow' }
    ]
  },
  {
    id: 'brands',
    title: 'Brands',
    type: 'checkbox',
    options: [
      { id: 'samsung', label: 'Samsung' },
      { id: 'apple', label: 'Apple' },
      { id: 'oneplus', label: 'OnePlus' },
      { id: 'xiaomi', label: 'Xiaomi' },
      { id: 'realme', label: 'realme' },
      { id: 'vivo', label: 'vivo' },
      { id: 'oppo', label: 'OPPO' },
      { id: 'motorola', label: 'Motorola' },
      { id: 'nokia', label: 'Nokia' },
      { id: 'redmi', label: 'Redmi' },
      { id: 'iqoo', label: 'iQOO' },
      { id: 'nothing', label: 'Nothing' },
      { id: 'google', label: 'Google Pixel' },
      { id: 'infinix', label: 'Infinix' },
      { id: 'tecno', label: 'Tecno' },
      { id: 'lava', label: 'LAVA' },
      { id: 'boat', label: 'boAt' },
      { id: 'sony', label: 'Sony' },
      { id: 'jbl', label: 'JBL' },
      { id: 'portronics', label: 'Portronics' },
      { id: 'ambrane', label: 'Ambrane' }
    ]
  },
  {
    id: 'reviews',
    title: 'Customer Reviews',
    type: 'rating',
    options: [
      { id: '4stars-up', label: '4 Stars & Up' },
      { id: '3stars-up', label: '3 Stars & Up' },
      { id: '2stars-up', label: '2 Stars & Up' },
      { id: '1star-up', label: '1 Star & Up' }
    ]
  },
  {
    id: 'price',
    title: 'Price',
    type: 'price',
    options: [
      { id: 'under-1000', label: 'Under ₹1,000' },
      { id: '1000-5000', label: '₹1,000 - ₹5,000' },
      { id: '5000-10000', label: '₹5,000 - ₹10,000' },
      { id: '10000-20000', label: '₹10,000 - ₹20,000' },
      { id: '20000-30000', label: '₹20,000 - ₹30,000' },
      { id: '30000-50000', label: '₹30,000 - ₹50,000' },
      { id: '50000-100000', label: '₹50,000 - ₹1,00,000' },
      { id: 'over-100000', label: 'Over ₹1,00,000' }
    ]
  },
  {
    id: 'deals',
    title: 'Deals & Discounts',
    type: 'link',
    options: [
      { id: 'all-discounts', label: 'All Discounts' },
      { id: 'buy-more', label: 'Buy More, Save More' },
      { id: 'coupons', label: 'Coupons' },
      { id: 'todays-deals', label: "Today's Deals" }
    ]
  },
  {
    id: 'discount',
    title: 'Discount',
    type: 'link',
    options: [
      { id: '10-off', label: '10% Off or more' },
      { id: '25-off', label: '25% Off or more' },
      { id: '35-off', label: '35% Off or more' },
      { id: '50-off', label: '50% Off or more' },
      { id: '60-off', label: '60% Off or more' },
      { id: '70-off', label: '70% Off or more' }
    ]
  },
  {
    id: 'amazonBrands',
    title: 'Made for Amazon Brands',
    type: 'checkbox',
    options: [
      { id: 'made-for-amazon', label: 'Made for Amazon' }
    ]
  },
  {
    id: 'topBrands',
    title: 'Top Brands in Electronics',
    type: 'checkbox',
    options: [
      { id: 'top-brands', label: 'Top Brands' }
    ]
  },
  {
    id: 'customizable',
    title: 'Customizable Products',
    type: 'checkbox',
    options: [
      { id: 'customizable', label: 'Customizable' }
    ]
  },
  {
    id: 'seller',
    title: 'Seller',
    type: 'checkbox',
    options: [
      { id: 'clicktech-retail', label: 'Clicktech Retail Private Ltd' },
      { id: 'cocoblu-retail', label: 'Cocoblu Retail' },
      { id: 'clicktech-business', label: 'Clicktech Business' },
      { id: 'thegiftkart', label: 'TheGiftKart' },
      { id: 'pikkme', label: 'Pikkme' },
      { id: 'spigen-india', label: 'Spigen India' },
      { id: 'infinitikart', label: 'Infinitikart' },
      { id: 'cocoblu-business', label: 'Cocoblu Business' },
      { id: '99prints', label: '99Prints' }
    ]
  },
  {
    id: 'newArrivals',
    title: 'New Arrivals',
    type: 'link',
    options: [
      { id: 'last-30', label: 'Last 30 days' },
      { id: 'last-90', label: 'Last 90 days' }
    ]
  },
  {
    id: 'availability',
    title: 'Availability',
    type: 'checkbox',
    options: [
      { id: 'in-stock', label: 'In Stock' },
      { id: 'out-of-stock', label: 'Include Out of Stock' }
    ]
  },
  {
    id: 'payOnDelivery',
    title: 'Pay On Delivery',
    type: 'checkbox',
    options: [
      { id: 'cod-eligible', label: 'Eligible for Pay On Delivery' }
    ]
  },
  {
    id: 'condition',
    title: 'Item Condition',
    type: 'checkbox',
    options: [
      { id: 'new', label: 'New' },
      { id: 'renewed', label: 'Renewed' }
    ]
  },
  {
    id: 'countryOfOrigin',
    title: 'Country of Origin',
    type: 'checkbox',
    options: [
      { id: 'india', label: 'India' },
      { id: 'china', label: 'China' },
      { id: 'us', label: 'United States' },
      { id: 'south-korea', label: 'South Korea' },
      { id: 'hong-kong', label: 'Hong Kong' },
      { id: 'taiwan', label: 'Taiwan' },
      { id: 'vietnam', label: 'Vietnam' },
      { id: 'philippines', label: 'Philippines' },
      { id: 'uk', label: 'United Kingdom' },
      { id: 'thailand', label: 'Thailand' }
    ]
  }
];

// Map icon types to actual icon components
export const getIconComponent = (iconType: string, size: number = 16): React.ReactNode => {
  const iconMap: Record<string, React.ReactNode> = {
    'smartphone': <Smartphone size={size} />,
    'headphones': <Headphones size={size} />,
    'watch': <Watch size={size} />,
    'tablet': <Tablet size={size} />,
    'laptop': <Laptop size={size} />,
    'camera': <Camera size={size} />,
    'speaker': <Speaker size={size} />,
    'gamepad': <Gamepad size={size} />,
    'monitor': <Monitor size={size} />,
    'printer': <Printer size={size} />,
    'wifi': <Wifi size={size} />,
    'hard-drive': <HardDrive size={size} />,
    'battery': <Battery size={size} />,
    'zap': <Zap size={size} />,
    'shield': <Shield size={size} />,
    'award': <Award size={size} />,
    'crown': <Crown size={size} />,
    'globe': <Globe size={size} />,
    'package': <Package size={size} />,
    'truck': <Truck size={size} />,
    'star': <Star size={size} />,
    'tag': <Tag size={size} />,
    'percent': <Percent size={size} />,
    'box': <Box size={size} />,
    'credit-card': <CreditCard size={size} />,
    'store': <Store size={size} />,
    'filter': <Filter size={size} />,
    'clock': <Clock size={size} />,
    'sparkles': <Sparkles size={size} />
  };
  return iconMap[iconType] || null;
};

const FilterShopByCategory: React.FC<FilterShopByCategoryProps> = ({
  className = '',
  onFilterChange,
  initialFilters = {},
  filterGroups: propFilterGroups,
  title = 'Filters',
  showClearAll = true,
  persistFilters = false,
  renderOption,
  renderGroupHeader,
  showSelectedCount = true,
  expandAll = false,
  maxOptions,
  showMoreLabel = 'Show more',
  showLessLabel = 'Show less',
  enableSearch = false,
  searchPlaceholder = 'Search filters...'
}) => {
  // Use provided filter groups or default to electronics
  const defaultGroups = propFilterGroups || DEFAULT_ELECTRONICS_FILTERS;
  
  // Initialize expanded state
  const initialExpanded = defaultGroups.reduce((acc, group) => ({
    ...acc,
    [group.id]: expandAll ? true : (group.isOpen !== undefined ? group.isOpen : false)
  }), {});

  // State for expanded groups
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>(initialExpanded);

  // State for selected filters
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>(
    initialFilters || defaultGroups.reduce((acc, group) => ({ ...acc, [group.id]: [] }), {})
  );

  // State for search
  const [searchTerm, setSearchTerm] = useState('');

  // State for "Show more" in each group
  const [showAllOptions, setShowAllOptions] = useState<Record<string, boolean>>({});

  const toggleGroup = (groupId: string) => {
    setExpandedGroups(prev => ({
      ...prev,
      [groupId]: !prev[groupId]
    }));
  };

  const handleFilterSelect = (groupId: string, optionId: string) => {
    setSelectedFilters(prev => {
      const current = prev[groupId] || [];
      let updated;
      if (current.includes(optionId)) {
        updated = current.filter(id => id !== optionId);
      } else {
        updated = [...current, optionId];
      }
      const newState = { ...prev, [groupId]: updated };
      onFilterChange?.(groupId, updated, newState);
      return newState;
    });
  };

  const handleClearAll = () => {
    const reset = Object.keys(selectedFilters).reduce((acc, key) => ({ ...acc, [key]: [] }), {});
    setSelectedFilters(reset);
    onFilterChange?.('all', [], reset);
  };

  const handleShowMoreToggle = (groupId: string) => {
    setShowAllOptions(prev => ({
      ...prev,
      [groupId]: !prev[groupId]
    }));
  };

  // Filter options based on search term
  const getFilteredOptions = (group: FilterGroup): FilterOption[] => {
    if (!enableSearch || !searchTerm) return group.options;
    return group.options.filter(option => 
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Get visible options (with "Show more" logic)
  const getVisibleOptions = (group: FilterGroup): FilterOption[] => {
    const options = getFilteredOptions(group);
    if (!maxOptions || options.length <= maxOptions) return options;
    if (showAllOptions[group.id]) return options;
    return options.slice(0, maxOptions);
  };

  // Default render for filter options
  const defaultRenderOption = (group: FilterGroup, option: FilterOption, isSelected: boolean, onSelect: () => void) => {
    return (
      <button
        className={`${styles.optionButton} ${isSelected ? styles.selected : ''}`}
        onClick={onSelect}
        aria-checked={isSelected}
        role={group.type === 'checkbox' || group.type === 'rating' ? 'checkbox' : 'button'}
      >
        {(group.type === 'checkbox' || group.type === 'rating') && (
          <span className={styles.checkbox}>
            {isSelected && <Check size={14} />}
          </span>
        )}
        {option.iconType && (
          <span className={styles.optionIcon}>
            {getIconComponent(option.iconType)}
          </span>
        )}
        {option.icon && !option.iconType && (
          <span className={styles.optionIcon}>{option.icon}</span>
        )}
        <span className={group.type === 'checkbox' || group.type === 'rating' ? styles.optionLabelTitle : styles.optionLabel}>
          {option.label}
        </span>
        {option.count && <span className={styles.optionCount}>({option.count})</span>}
      </button>
    );
  };

  // Default render for group header
  const defaultRenderGroupHeader = (group: FilterGroup, isExpanded: boolean, toggle: () => void, selectedCount: number) => {
    return (
      <button
        className={styles.groupHeader}
        onClick={toggle}
        aria-expanded={isExpanded}
      >
        <span className={styles.groupTitleWrapper}>
          {group.icon && <span className={styles.groupIcon}>{group.icon}</span>}
          <span className={styles.groupTitle}>{group.title}</span>
          {showSelectedCount && selectedCount > 0 && (
            <span className={styles.selectedBadge}>{selectedCount}</span>
          )}
        </span>
        <span className={styles.groupToggle}>
          {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </span>
      </button>
    );
  };

  return (
    <div className={`${styles.filterContainer} ${className}`}>
      <div className={styles.filterHeader}>
        <h2 className={styles.filterTitle}>{title}</h2>
        {showClearAll && (
          <button 
            className={styles.clearAll} 
            onClick={handleClearAll}
            aria-label="Clear all filters"
          >
            <X size={14} />
            Clear All
          </button>
        )}
      </div>

      {enableSearch && (
        <div className={styles.searchContainer}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder={searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search filters"
          />
          {searchTerm && (
            <button 
              className={styles.clearSearch}
              onClick={() => setSearchTerm('')}
              aria-label="Clear search"
            >
              <X size={14} />
            </button>
          )}
        </div>
      )}

      <div className={styles.filterGroups}>
        {defaultGroups.map((group) => {
          const isExpanded = expandedGroups[group.id] !== false;
          const selectedCount = (selectedFilters[group.id] || []).length;
          const options = getVisibleOptions(group);
          const totalOptions = getFilteredOptions(group);
          const hasMoreOptions = maxOptions && totalOptions.length > maxOptions;

          return (
            <div key={group.id} className={styles.filterGroup}>
              {renderGroupHeader 
                ? renderGroupHeader(group, isExpanded, () => toggleGroup(group.id), selectedCount)
                : defaultRenderGroupHeader(group, isExpanded, () => toggleGroup(group.id), selectedCount)
              }
              
              {isExpanded && (
                <>
                  <ul className={styles.optionsList}>
                    {options.map((option) => {
                      const isSelected = (selectedFilters[group.id] || []).includes(option.id);
                      const onSelect = () => handleFilterSelect(group.id, option.id);
                      
                      return (
                        <li key={option.id} className={styles.optionItem}>
                          {renderOption 
                            ? renderOption(group, option, isSelected, onSelect)
                            : defaultRenderOption(group, option, isSelected, onSelect)
                          }
                        </li>
                      );
                    })}
                  </ul>
                  
                  {hasMoreOptions && (
                    <button
                      className={styles.showMoreButton}
                      onClick={() => handleShowMoreToggle(group.id)}
                    >
                      {showAllOptions[group.id] ? showLessLabel : showMoreLabel}
                    </button>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterShopByCategory;