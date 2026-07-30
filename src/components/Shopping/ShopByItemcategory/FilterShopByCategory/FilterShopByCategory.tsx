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
  X
} from 'lucide-react';
import styles from './FilterShopByCategory.module.scss';

// Types for filter data
interface FilterOption {
  id: string;
  label: string;
  count?: number;
  icon?: React.ReactNode;
}

interface FilterGroup {
  id: string;
  title: string;
  type: 'checkbox' | 'radio' | 'link' | 'price' | 'rating';
  options: FilterOption[];
  isOpen?: boolean;
  showCount?: boolean;
}

interface FilterShopByCategoryProps {
  className?: string;
  onFilterChange?: (filterId: string, selected: string[]) => void;
  initialFilters?: string[];
}

const FilterShopByCategory: React.FC<FilterShopByCategoryProps> = ({
  className = '',
  onFilterChange,
  initialFilters = []
}) => {
  // State for expanded groups
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
    category: true,
    prime: true,
    delivery: true,
    brands: true,
    reviews: true,
    condition: true,
    price: true,
    deals: true,
    amazonBrands: true,
    seller: true,
    customizable: true,
    topBrands: true,
    newArrivals: true,
    discount: true,
    availability: true,
    payOnDelivery: true
  });

  // State for selected filters
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({
    category: [],
    prime: [],
    delivery: [],
    brands: [],
    reviews: [],
    condition: [],
    price: [],
    deals: [],
    amazonBrands: [],
    seller: [],
    customizable: [],
    topBrands: [],
    newArrivals: [],
    discount: [],
    availability: [],
    payOnDelivery: []
  });

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
      onFilterChange?.(groupId, updated);
      return newState;
    });
  };

  // Filter data structure
  const filterGroups: FilterGroup[] = [
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
        { id: 'prime-eligible', label: 'Prime Eligible', icon: <Package size={16} /> }
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
        { id: 'oneplus', label: 'OnePlus' },
        { id: 'apple', label: 'Apple' },
        { id: 'boat', label: 'boAt' },
        { id: 'iqoo', label: 'iQOO' },
        { id: 'sony', label: 'Sony' },
        { id: 'realme', label: 'realme' },
        { id: 'redmi', label: 'Redmi' },
        { id: 'motorola', label: 'Motorola' },
        { id: 'portronics', label: 'Portronics' },
        { id: 'xiaomi', label: 'XIAOMI' }
      ]
    },
    {
      id: 'reviews',
      title: 'Customer Reviews',
      type: 'rating',
      options: [
        { id: '4stars', label: '4 Stars & Up', icon: <Star size={16} /> }
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
      id: 'price',
      title: 'Price',
      type: 'price',
      options: [
        { id: 'under-1000', label: 'Under ₹1,000' },
        { id: '1000-5000', label: '₹1,000 - ₹5,000' },
        { id: '5000-10000', label: '₹5,000 - ₹10,000' },
        { id: '10000-20000', label: '₹10,000 - ₹20,000' },
        { id: 'over-20000', label: 'Over ₹20,000' }
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
      id: 'amazonBrands',
      title: 'Made for Amazon Brands',
      type: 'checkbox',
      options: [
        { id: 'made-for-amazon', label: 'Made for Amazon' }
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
        { id: 'spigen-india', label: 'Spigen India' },
        { id: 'pikkme', label: 'Pikkme' },
        { id: 'infinitikart', label: 'Infinitikart' }
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
      id: 'topBrands',
      title: 'Top Brands in Electronics',
      type: 'checkbox',
      options: [
        { id: 'top-brands', label: 'Top Brands' }
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
      id: 'availability',
      title: 'Availability',
      type: 'checkbox',
      options: [
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
    }
  ];

  // Helper to render filter options based on type
  const renderOptions = (group: FilterGroup) => {
    const isExpanded = expandedGroups[group.id] !== false;
    const selected = selectedFilters[group.id] || [];

    if (!isExpanded) return null;

    return (
      <ul className={styles.optionsList}>
        {group.options.map((option) => {
          const isSelected = selected.includes(option.id);
          // Remove indentation logic - all options have same padding
          const isIndented = false;

          return (
            <li key={option.id} className={`${styles.optionItem} ${isIndented ? styles.indented : ''}`}>
              {group.type === 'checkbox' || group.type === 'rating' ? (
                <button
                  className={`${styles.optionButton} ${isSelected ? styles.selected : ''}`}
                  onClick={() => handleFilterSelect(group.id, option.id)}
                  aria-checked={isSelected}
                  role="checkbox"
                >
                  <span className={styles.checkbox}>
                    {isSelected && <Check size={14} />}
                  </span>
                  {option.icon && <span className={styles.optionIcon}>{option.icon}</span>}
                  <span className={styles.optionLabelTitle}>{option.label}</span>
                </button>
              ) : group.type === 'link' || group.type === 'price' ? (
                <button
                  className={`${styles.optionButton} ${isSelected ? styles.selected : ''}`}
                  onClick={() => handleFilterSelect(group.id, option.id)}
                >
                  <span className={styles.optionLabel}>{option.label}</span>
                  {option.count && <span className={styles.optionCount}>({option.count})</span>}
                </button>
              ) : null}
            </li>
          );
        })}
      </ul>
    );
  };

  // Get icon for group
  const getGroupIcon = (id: string) => {
    switch(id) {
      case 'category': return <Filter size={16} />;
      case 'prime': return <Package size={16} />;
      case 'delivery': return <Truck size={16} />;
      case 'brands': return <Store size={16} />;
      case 'reviews': return <Star size={16} />;
      case 'condition': return <Box size={16} />;
      case 'price': return <Tag size={16} />;
      case 'deals': return <Percent size={16} />;
      case 'amazonBrands': return <Sparkles size={16} />;
      case 'seller': return <Store size={16} />;
      case 'customizable': return <Filter size={16} />;
      case 'topBrands': return <Star size={16} />;
      case 'newArrivals': return <Clock size={16} />;
      case 'discount': return <Percent size={16} />;
      case 'availability': return <Box size={16} />;
      case 'payOnDelivery': return <CreditCard size={16} />;
      default: return <Filter size={16} />;
    }
  };

  return (
    <div className={`${styles.filterContainer} ${className}`}>
      <div className={styles.filterHeader}>
        <h2 className={styles.filterTitle}>Filters</h2>
        <button className={styles.clearAll} onClick={() => {
          const reset = Object.keys(selectedFilters).reduce((acc, key) => ({ ...acc, [key]: [] }), {});
          setSelectedFilters(reset);
          onFilterChange?.('all', []);
        }}>
          Clear All
        </button>
      </div>

      <div className={styles.filterGroups}>
        {filterGroups.map((group) => {
          const isExpanded = expandedGroups[group.id] !== false;
          const selectedCount = (selectedFilters[group.id] || []).length;

          return (
            <div key={group.id} className={styles.filterGroup}>
              <button
                className={styles.groupHeader}
                onClick={() => toggleGroup(group.id)}
                aria-expanded={isExpanded}
              >
                <span className={styles.groupTitleWrapper}>
                  <span className={styles.groupIcon}>{getGroupIcon(group.id)}</span>
                  <span className={styles.groupTitle}>{group.title}</span>
                  {selectedCount > 0 && (
                    <span className={styles.selectedBadge}>{selectedCount}</span>
                  )}
                </span>
                <span className={styles.groupToggle}>
                  {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </span>
              </button>
              {renderOptions(group)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterShopByCategory;