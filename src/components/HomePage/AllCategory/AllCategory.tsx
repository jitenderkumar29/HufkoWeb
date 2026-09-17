import { useState, useRef, useEffect } from 'react';
import styles from './AllCategory.module.scss';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export interface Category {
  id?: string;
  foodId?: string;
  name: string;
  imageUrl: string;
  url: string;
}

interface AllCategoryProps {
  categories: Category[];
  // title?: string;
  onCategoryClick?: (category: Category) => void;
}

 export interface ClickableFoodCategory {
  id?: string;
  foodId?: string;
  name: string;
  imageUrl?: string;   // <-- optional so both AllCategory + FoodCategoryList fit
  url?: string;
}

const AllCategory = ({ categories, onCategoryClick }: AllCategoryProps) => {
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
      containerRef.current.scrollBy({
        left: -500,
        behavior: 'smooth',
      });
      setActiveIndex(Math.max(0, activeIndex - 1));
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 500,
        behavior: 'smooth',
      });
      setActiveIndex(Math.min(categories.length - visibleItems, activeIndex + 1));
    }
  };

  const handleItemClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    category: Category
  ) => {
    // If a custom click handler is provided, prevent default navigation
    // and delegate to it (so we can render in-app instead of navigating).
    if (onCategoryClick) {
      e.preventDefault();
      onCategoryClick(category);
    }
  };

  return (
    <div className={styles.allCategoryContainer}>
      {/* <h2 className={styles.sectionTitle}>Shop by Category</h2> */}

      <div className={styles.categoryWrapper}>
        <button
          className={`${styles.navButton} ${styles.leftButton}`}
          onClick={scrollLeft}
          disabled={activeIndex === 0}
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>

        <div className={styles.categoryContainer} ref={containerRef}>
          {categories.map((category, index) => (
            <a
              key={index}
              href={category.url}
              className={styles.categoryItem}
              aria-label={category.name}
              onClick={(e) => handleItemClick(e, category)}
            >
              <div className={styles.categoryImage}>
                <Image
                  src={category.imageUrl}
                  alt={category.name}
                  width={100}
                  height={148}
                  loading="lazy"
                  className={styles.image}
                />
              </div>
              <div className={styles.categoryName}>
                {category.name}
              </div>
            </a>
          ))}
        </div>

        <button
          className={`${styles.navButton} ${styles.rightButton}`}
          onClick={scrollRight}
          disabled={activeIndex === categories.length - visibleItems}
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default AllCategory;