// components/HomePage/AllCategoryOne/AllCategoryOne.tsx

import { useState, useRef, useEffect } from 'react';
import styles from './AllCategoryOne.module.scss';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface Category {
  id?: string;
  name: string;
  imageUrl: string;
  url?: string;
}

interface AllCategoryProps {
  categories: Category[];
  onCategoryClick?: (category: { id: string; name: string }) => void;
  title?: string;
}

const AllCategoryOne = ({ 
  categories, 
  onCategoryClick, 
  title = "" 
}: AllCategoryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState(6);

  useEffect(() => {
    const updateVisibleItems = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 640) {
          setVisibleItems(3);
        } else if (window.innerWidth < 768) {
          setVisibleItems(4);
        } else if (window.innerWidth < 1024) {
          setVisibleItems(5);
        } else {
          setVisibleItems(6);
        }
      }
    };

    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);

    return () => {
      window.removeEventListener('resize', updateVisibleItems);
    };
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const scrollAmount = containerWidth * 0.6; // Scroll 60% of container width
      
      containerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth',
      });
      setActiveIndex(Math.max(0, activeIndex - 1));
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const scrollAmount = containerWidth * 0.6; // Scroll 60% of container width
      
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
      setActiveIndex(Math.min(categories.length - visibleItems, activeIndex + 1));
    }
  };

  const handleCategoryClick = (category: Category) => {
    // Use id if available, otherwise use name as fallback
    const categoryId = category.id || category.name.toLowerCase().replace(/\s+/g, '_');
    
    if (onCategoryClick) {
      onCategoryClick({ id: categoryId, name: category.name });
    }

    // Optional: If you want to navigate to a URL
    if (category.url) {
      // Uncomment if you want to navigate
      // window.location.href = category.url;
    }
  };

  // Check if scroll buttons should be disabled
  const isLeftDisabled = activeIndex === 0;
  const isRightDisabled = activeIndex >= categories.length - visibleItems;

  return (
    <div className={styles.allCategoryContainer}>
      {title && <h2 className={styles.sectionTitle}>{title}</h2>}

      <div className={styles.categoryWrapper}>
        <button
          className={`${styles.navButton} ${styles.leftButton}`}
          onClick={scrollLeft}
          disabled={isLeftDisabled}
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>

        <div className={styles.categoryContainer} ref={containerRef}>
          {categories.map((category, index) => (
            <div
              key={index}
              className={styles.categoryItem}
              onClick={() => handleCategoryClick(category)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCategoryClick(category);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={category.name}
            >
              <div className={styles.categoryImage}>
                <Image
                  src={category.imageUrl}
                  alt={category.name}
                  width={120}
                  height={110}
                  loading="lazy"
                  className={styles.image}
                />
              </div>
              <div className={styles.categoryName}>
                {category.name}
              </div>
            </div>
          ))}
        </div>

        <button
          className={`${styles.navButton} ${styles.rightButton}`}
          onClick={scrollRight}
          disabled={isRightDisabled}
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default AllCategoryOne;