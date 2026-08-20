// filterData.ts

import { FilterGroup } from "@/components/Shopping/ShopByItemcategory/FilterShopByCategory/FilterShopByCategory";



// Define icon types as strings
export type IconType = 
  | 'package'
  | 'truck'
  | 'star'
  | 'tag'
  | 'percent'
  | 'box'
  | 'credit-card'
  | 'store'
  | 'filter'
  | 'clock'
  | 'sparkles'
  | 'globe'
  | 'smartphone'
  | 'headphones'
  | 'watch'
  | 'tablet'
  | 'laptop'
  | 'camera'
  | 'speaker'
  | 'gamepad'
  | 'monitor'
  | 'printer'
  | 'wifi'
  | 'hard-drive'
  | 'battery'
  | 'zap'
  | 'shield'
  | 'award'
  | 'crown';

// Extend FilterOption to include iconType
export interface FilterOption {
  id: string;
  label: string;
  count?: number;
  iconType?: IconType;  // Use string-based icon type
  icon?: React.ReactNode; // Keep for backward compatibility
}

export const SMARTPHONES_ELECTRONICS_FILTERS: FilterGroup[] = [
  {
    id: 'category',
    title: 'Category',
    type: 'link',
    isOpen: true,
    options: [
      { id: 'electronics', label: 'Electronics', iconType: 'smartphone' },
      { id: 'mobiles-accessories', label: 'Mobiles & Accessories', iconType: 'smartphone' },
      { id: 'mobile-broadband', label: 'Mobile Broadband Devices', iconType: 'wifi' },
      { id: 'sim-cards', label: 'SIM Cards', iconType: 'smartphone' },
      { id: 'smartphones-basic', label: 'Smartphones & Basic Mobiles', iconType: 'smartphone' },
      { id: 'smartwatches', label: 'Smartwatches', iconType: 'watch' },
      { id: 'tablets', label: 'Tablets', iconType: 'tablet' },
      { id: 'headphones', label: 'Headphones, Earbuds & Accessories', iconType: 'headphones' },
      { id: 'laptops', label: 'Laptops & Computers', iconType: 'laptop' },
      { id: 'cameras', label: 'Cameras & Photography', iconType: 'camera' },
      { id: 'audio-speakers', label: 'Audio Speakers', iconType: 'speaker' },
      { id: 'gaming', label: 'Gaming Consoles & Accessories', iconType: 'gamepad' },
      { id: 'monitors', label: 'Monitors & Displays', iconType: 'monitor' },
      { id: 'printers', label: 'Printers & Scanners', iconType: 'printer' },
      { id: 'networking', label: 'Networking Devices', iconType: 'wifi' },
      { id: 'storage', label: 'Storage Devices', iconType: 'hard-drive' },
      { id: 'power-accessories', label: 'Power Accessories', iconType: 'battery' },
      { id: 'smart-home', label: 'Smart Home Devices', iconType: 'zap' },
      { id: 'wearable', label: 'Wearable Technology', iconType: 'watch' }
    ]
  },
  {
    id: 'brands',
    title: 'Brands',
    type: 'checkbox',
    options: [
      { id: 'samsung', label: 'Samsung', iconType: 'crown' },
      { id: 'apple', label: 'Apple', iconType: 'crown' },
      { id: 'oneplus', label: 'OnePlus', iconType: 'award' },
      { id: 'xiaomi', label: 'Xiaomi', iconType: 'award' },
      { id: 'realme', label: 'realme', iconType: 'award' },
      { id: 'vivo', label: 'vivo', iconType: 'award' },
      { id: 'oppo', label: 'OPPO', iconType: 'award' },
      { id: 'motorola', label: 'Motorola', iconType: 'award' },
      { id: 'nokia', label: 'Nokia', iconType: 'award' },
      { id: 'redmi', label: 'Redmi', iconType: 'award' },
      { id: 'iqoo', label: 'iQOO', iconType: 'award' },
      { id: 'nothing', label: 'Nothing', iconType: 'award' },
      { id: 'google', label: 'Google Pixel', iconType: 'award' },
      { id: 'infinix', label: 'Infinix', iconType: 'award' },
      { id: 'tecno', label: 'Tecno', iconType: 'award' },
      { id: 'lava', label: 'LAVA', iconType: 'award' },
      { id: 'boat', label: 'boAt', iconType: 'award' },
      { id: 'sony', label: 'Sony', iconType: 'award' },
      { id: 'jbl', label: 'JBL', iconType: 'award' },
      { id: 'portronics', label: 'Portronics', iconType: 'award' },
      { id: 'ambrane', label: 'Ambrane', iconType: 'award' }
    ]
  },
  {
    id: 'price',
    title: 'Price',
    type: 'price',
    options: [
      { id: 'under-1000', label: 'Under ₹1,000', iconType: 'tag' },
      { id: '1000-5000', label: '₹1,000 - ₹5,000', iconType: 'tag' },
      { id: '5000-10000', label: '₹5,000 - ₹10,000', iconType: 'tag' },
      { id: '10000-20000', label: '₹10,000 - ₹20,000', iconType: 'tag' },
      { id: '20000-30000', label: '₹20,000 - ₹30,000', iconType: 'tag' },
      { id: '30000-50000', label: '₹30,000 - ₹50,000', iconType: 'tag' },
      { id: '50000-100000', label: '₹50,000 - ₹1,00,000', iconType: 'tag' },
      { id: 'over-100000', label: 'Over ₹1,00,000', iconType: 'tag' }
    ]
  },
  {
    id: 'reviews',
    title: 'Customer Reviews',
    type: 'rating',
    options: [
      { id: '4stars-up', label: '4 Stars & Up', iconType: 'star' },
      { id: '3stars-up', label: '3 Stars & Up', iconType: 'star' },
      { id: '2stars-up', label: '2 Stars & Up', iconType: 'star' },
      { id: '1star-up', label: '1 Star & Up', iconType: 'star' }
    ]
  },
  {
    id: 'discount',
    title: 'Discount',
    type: 'link',
    options: [
      { id: '10-off', label: '10% Off or more', iconType: 'percent' },
      { id: '25-off', label: '25% Off or more', iconType: 'percent' },
      { id: '35-off', label: '35% Off or more', iconType: 'percent' },
      { id: '50-off', label: '50% Off or more', iconType: 'percent' },
      { id: '60-off', label: '60% Off or more', iconType: 'percent' },
      { id: '70-off', label: '70% Off or more', iconType: 'percent' }
    ]
  },
  {
    id: 'deals',
    title: 'Deals & Discounts',
    type: 'link',
    options: [
      { id: 'all-discounts', label: 'All Discounts', iconType: 'percent' },
      { id: 'buy-more', label: 'Buy More, Save More', iconType: 'percent' },
      { id: 'coupons', label: 'Coupons', iconType: 'tag' },
      { id: 'todays-deals', label: "Today's Deals", iconType: 'zap' }
    ]
  },
  {
    id: 'delivery',
    title: 'Delivery Day',
    type: 'checkbox',
    options: [
      { id: 'today', label: 'Get It Today', iconType: 'truck' },
      { id: 'tomorrow', label: 'Get It by Tomorrow', iconType: 'truck' }
    ]
  },
  {
    id: 'prime',
    title: 'Amazon Prime',
    type: 'checkbox',
    options: [
      { id: 'prime-eligible', label: 'Prime Eligible', iconType: 'package' }
    ]
  },
  {
    id: 'condition',
    title: 'Item Condition',
    type: 'checkbox',
    options: [
      { id: 'new', label: 'New', iconType: 'box' },
      { id: 'renewed', label: 'Renewed', iconType: 'box' }
    ]
  },
  {
    id: 'availability',
    title: 'Availability',
    type: 'checkbox',
    options: [
      { id: 'in-stock', label: 'In Stock', iconType: 'box' },
      { id: 'out-of-stock', label: 'Include Out of Stock', iconType: 'box' }
    ]
  },
  {
    id: 'payOnDelivery',
    title: 'Pay On Delivery',
    type: 'checkbox',
    options: [
      { id: 'cod-eligible', label: 'Eligible for Pay On Delivery', iconType: 'credit-card' }
    ]
  },
  {
    id: 'seller',
    title: 'Seller',
    type: 'checkbox',
    options: [
      { id: 'clicktech-retail', label: 'Clicktech Retail Private Ltd', iconType: 'store' },
      { id: 'cocoblu-retail', label: 'Cocoblu Retail', iconType: 'store' },
      { id: 'clicktech-business', label: 'Clicktech Business', iconType: 'store' },
      { id: 'thegiftkart', label: 'TheGiftKart', iconType: 'store' },
      { id: 'pikkme', label: 'Pikkme', iconType: 'store' },
      { id: 'spigen-india', label: 'Spigen India', iconType: 'store' },
      { id: 'infinitikart', label: 'Infinitikart', iconType: 'store' },
      { id: 'cocoblu-business', label: 'Cocoblu Business', iconType: 'store' },
      { id: '99prints', label: '99Prints', iconType: 'store' }
    ]
  },
  {
    id: 'newArrivals',
    title: 'New Arrivals',
    type: 'link',
    options: [
      { id: 'last-30', label: 'Last 30 days', iconType: 'clock' },
      { id: 'last-90', label: 'Last 90 days', iconType: 'clock' }
    ]
  },
  {
    id: 'amazonBrands',
    title: 'Made for Amazon Brands',
    type: 'checkbox',
    options: [
      { id: 'made-for-amazon', label: 'Made for Amazon', iconType: 'sparkles' }
    ]
  },
  {
    id: 'topBrands',
    title: 'Top Brands in Electronics',
    type: 'checkbox',
    options: [
      { id: 'top-brands', label: 'Top Brands', iconType: 'crown' }
    ]
  },
  {
    id: 'customizable',
    title: 'Customizable Products',
    type: 'checkbox',
    options: [
      { id: 'customizable', label: 'Customizable', iconType: 'sparkles' }
    ]
  },
  {
    id: 'countryOfOrigin',
    title: 'Country of Origin',
    type: 'checkbox',
    options: [
      { id: 'india', label: 'India', iconType: 'globe' },
      { id: 'china', label: 'China', iconType: 'globe' },
      { id: 'us', label: 'United States', iconType: 'globe' },
      { id: 'south-korea', label: 'South Korea', iconType: 'globe' },
      { id: 'hong-kong', label: 'Hong Kong', iconType: 'globe' },
      { id: 'taiwan', label: 'Taiwan', iconType: 'globe' },
      { id: 'vietnam', label: 'Vietnam', iconType: 'globe' },
      { id: 'philippines', label: 'Philippines', iconType: 'globe' },
      { id: 'uk', label: 'United Kingdom', iconType: 'globe' },
      { id: 'thailand', label: 'Thailand', iconType: 'globe' }
    ]
  },
  {
    id: 'features',
    title: 'Features',
    type: 'checkbox',
    options: [
      { id: '5g', label: '5G Support', iconType: 'zap' },
      { id: 'amoled', label: 'AMOLED Display', iconType: 'monitor' },
      { id: 'wireless-charging', label: 'Wireless Charging', iconType: 'battery' },
      { id: 'waterproof', label: 'Waterproof / Dustproof', iconType: 'shield' },
      { id: 'fast-charging', label: 'Fast Charging', iconType: 'zap' },
      { id: 'dual-sim', label: 'Dual SIM', iconType: 'smartphone' },
      { id: 'expandable-storage', label: 'Expandable Storage', iconType: 'hard-drive' },
      { id: 'face-unlock', label: 'Face Unlock', iconType: 'shield' },
      { id: 'fingerprint-sensor', label: 'Fingerprint Sensor', iconType: 'shield' }
    ]
  }
];

// Sub-category specific filters
export const SMARTPHONES_SUB_CATEGORY_FILTERS: Record<string, FilterGroup[]> = {
  'smartphones-basic': [
    {
      id: 'features',
      title: 'Features',
      type: 'checkbox',
      options: [
        { id: '5g', label: '5G Support', iconType: 'zap' },
        { id: 'amoled', label: 'AMOLED Display', iconType: 'monitor' },
        { id: 'wireless-charging', label: 'Wireless Charging', iconType: 'battery' },
        { id: 'waterproof', label: 'Waterproof', iconType: 'shield' },
        { id: 'fast-charging', label: 'Fast Charging', iconType: 'zap' },
        { id: 'dual-sim', label: 'Dual SIM', iconType: 'smartphone' },
        { id: 'expandable-storage', label: 'Expandable Storage', iconType: 'hard-drive' }
      ]
    },
    {
      id: 'ram',
      title: 'RAM',
      type: 'checkbox',
      options: [
        { id: '4gb', label: '4GB RAM' },
        { id: '6gb', label: '6GB RAM' },
        { id: '8gb', label: '8GB RAM' },
        { id: '12gb', label: '12GB RAM' },
        { id: '16gb', label: '16GB RAM' }
      ]
    },
    {
      id: 'storage',
      title: 'Storage',
      type: 'checkbox',
      options: [
        { id: '64gb', label: '64GB' },
        { id: '128gb', label: '128GB' },
        { id: '256gb', label: '256GB' },
        { id: '512gb', label: '512GB' },
        { id: '1tb', label: '1TB' }
      ]
    },
    {
      id: 'battery',
      title: 'Battery Capacity',
      type: 'checkbox',
      options: [
        { id: 'under-4000', label: 'Under 4000 mAh' },
        { id: '4000-5000', label: '4000 - 5000 mAh' },
        { id: '5000-6000', label: '5000 - 6000 mAh' },
        { id: 'over-6000', label: 'Over 6000 mAh' }
      ]
    }
  ],
  'smartwatches': [
    {
      id: 'features',
      title: 'Features',
      type: 'checkbox',
      options: [
        { id: 'heart-rate', label: 'Heart Rate Monitor', iconType: 'watch' },
        { id: 'spO2', label: 'Blood Oxygen Monitor (SpO2)', iconType: 'watch' },
        { id: 'gps', label: 'GPS', iconType: 'watch' },
        { id: 'waterproof', label: 'Waterproof', iconType: 'shield' },
        { id: 'bluetooth-calling', label: 'Bluetooth Calling', iconType: 'watch' },
        { id: 'always-on-display', label: 'Always-On Display', iconType: 'monitor' }
      ]
    },
    {
      id: 'display',
      title: 'Display Size',
      type: 'checkbox',
      options: [
        { id: 'under-1.5', label: 'Under 1.5 inches' },
        { id: '1.5-2.0', label: '1.5 - 2.0 inches' },
        { id: 'over-2.0', label: 'Over 2.0 inches' }
      ]
    }
  ],
  'headphones': [
    {
      id: 'type',
      title: 'Type',
      type: 'checkbox',
      options: [
        { id: 'over-ear', label: 'Over-Ear', iconType: 'headphones' },
        { id: 'on-ear', label: 'On-Ear', iconType: 'headphones' },
        { id: 'in-ear', label: 'In-Ear / Earbuds', iconType: 'headphones' },
        { id: 'neckband', label: 'Neckband', iconType: 'headphones' }
      ]
    },
    {
      id: 'connectivity',
      title: 'Connectivity',
      type: 'checkbox',
      options: [
        { id: 'wired', label: 'Wired' },
        { id: 'wireless', label: 'Wireless' },
        { id: 'bluetooth', label: 'Bluetooth' },
        { id: 'anc', label: 'Active Noise Cancellation' }
      ]
    }
  ],
  'tablets': [
    {
      id: 'features',
      title: 'Features',
      type: 'checkbox',
      options: [
        { id: 'wifi', label: 'Wi-Fi Only', iconType: 'wifi' },
        { id: 'cellular', label: 'Wi-Fi + Cellular', iconType: 'wifi' },
        { id: 'stylus-support', label: 'Stylus Support', iconType: 'tablet' },
        { id: 'keyboard-support', label: 'Keyboard Support', iconType: 'tablet' }
      ]
    },
    {
      id: 'screen-size',
      title: 'Screen Size',
      type: 'checkbox',
      options: [
        { id: 'under-8', label: 'Under 8 inches' },
        { id: '8-10', label: '8 - 10 inches' },
        { id: '10-12', label: '10 - 12 inches' },
        { id: 'over-12', label: 'Over 12 inches' }
      ]
    }
  ]
};

// Map icon types to actual icon components
export const getIconComponent = (iconType: IconType, size: number = 16): React.ReactNode => {
  // You need to import the actual icons and map them here
  // Or you can pass the icons from the component using a render function
  return null; // Placeholder - actual implementation in the component
};

// Filter with icon mapping (returns icon type string)
export const getFilterIconType = (filterId: string): IconType => {
  const iconMap: Record<string, IconType> = {
    'category': 'filter',
    'brands': 'store',
    'price': 'tag',
    'reviews': 'star',
    'discount': 'percent',
    'deals': 'zap',
    'delivery': 'truck',
    'prime': 'package',
    'condition': 'box',
    'availability': 'box',
    'payOnDelivery': 'credit-card',
    'seller': 'store',
    'newArrivals': 'clock',
    'amazonBrands': 'sparkles',
    'topBrands': 'crown',
    'customizable': 'sparkles',
    'countryOfOrigin': 'globe',
    'features': 'zap',
    'ram': 'hard-drive',
    'storage': 'hard-drive',
    'battery': 'battery',
    'type': 'headphones',
    'connectivity': 'wifi',
    'display': 'monitor',
    'screen-size': 'monitor'
  };
  return iconMap[filterId] || 'filter';
};

// Export default filters for easy import
export const DEFAULT_SMARTPHONE_FILTERS = SMARTPHONES_ELECTRONICS_FILTERS;