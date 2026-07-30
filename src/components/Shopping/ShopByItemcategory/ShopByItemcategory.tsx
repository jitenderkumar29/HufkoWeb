'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './ShopByItemcategory.module.scss';
import ShopByCategory from './ShopByCategory/ShopByCategory';
import { ElectronicsCategories } from '@/app/data/Categorywise/ShopingCategories';
import FilterShopByCategory from './FilterShopByCategory/FilterShopByCategory';

interface ShopByItemcategoryProps {
  // Add any props you might need
}

const ShopByItemcategory: React.FC<ShopByItemcategoryProps> = () => {
  const router = useRouter();

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

  const handleFilterChange = (filterId: string, selected: string[]) => {
    console.log(`Filter ${filterId} changed:`, selected);
    // Here you would typically update the product list based on filters
  };

  return (
    <div className={styles.electronicsPage}>
      <div className={styles.container}>
        <div className={styles.pageLayout}>
          {/* Left Sidebar - Filter */}
          <aside className={styles.filterSidebar}>
            <FilterShopByCategory onFilterChange={handleFilterChange} />
          </aside>

          {/* Right Content - Categories */}
          <main className={styles.contentArea}>
            <ShopByCategory
              title="Electronics"
              categories={ElectronicsCategories}
              itemsPerView={6}
              rows={2}
              showArrows={true}
              onCategoryClick={handleCategoryClick}
            />
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default ShopByItemcategory;