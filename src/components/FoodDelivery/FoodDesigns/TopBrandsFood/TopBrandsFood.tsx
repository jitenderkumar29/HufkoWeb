// components/TopBrandsFood/TopBrandsFood.tsx

'use client';

import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
} from 'react';
import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import styles from './TopBrandsFood.module.scss';

import {
  FoodCategoryItemsListData,
  FoodCategoryItem,
} from '@/app/data/Categorywise/FoodsCategories';

export interface TopBrandInterface {
  id: string;
  name: string;
  image: string;
  slug: string;
  cuisine?: string;
  imageUrl?: string;
  url?: string;
  deliveryTime?: string;
}

interface TopBrandsFoodProps {
  title?: string;
  brands?: FoodCategoryItem[] | TopBrandInterface[];
  onBrandClick?: (
    brand: TopBrandInterface
  ) => void;
  className?: string;
  itemsPerView?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showArrows?: boolean;
}

// ========================================
// TRANSFORM BRAND
// ========================================

const transformBrandItem = (
  item: FoodCategoryItem
): TopBrandInterface => {
  return {
    id:
      item.id ||
      Math.random()
        .toString(36)
        .substring(2, 11),

    name: item.name,

    image:
      item.imageUrl ||
      item.image ||
      '',

    slug:
      item.url ||
      item.slug ||
      '',

    cuisine:
      item.cuisine ||
      '',

    imageUrl:
      item.imageUrl ||
      item.image ||
      '',

    url:
      item.url ||
      item.slug ||
      '',

    deliveryTime: item.deliveryTime || '20-30 min',
  };
};

// ========================================
// TYPE GUARD
// ========================================

const isFoodCategoryItem = (
  item:
    | FoodCategoryItem
    | TopBrandInterface
): item is FoodCategoryItem => {
  return (
    item !== null &&
    typeof item === 'object' &&
    'imageUrl' in item
  );
};

// ========================================
// COMPONENT
// ========================================

const TopBrandsFood: React.FC<
  TopBrandsFoodProps
> = ({
  title = 'Top brands for you',

  brands = FoodCategoryItemsListData,

  onBrandClick,

  className = '',

  itemsPerView = 8,

  autoPlay = false,

  autoPlayInterval = 5000,

  showArrows = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [visibleItems, setVisibleItems] = useState(itemsPerView);
  const [itemWidth, setItemWidth] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ========================================
  // NORMALIZE BRANDS
  // ========================================

  const normalizedBrands = useMemo<TopBrandInterface[]>(() => {
    if (!brands || brands.length === 0) {
      return [];
    }

    if (!isFoodCategoryItem(brands[0])) {
      return brands as TopBrandInterface[];
    }

    return (brands as FoodCategoryItem[]).map(transformBrandItem);
  }, [brands]);

  // ========================================
  // RESPONSIVE VISIBLE ITEMS
  // ========================================

  useEffect(() => {
    const updateVisibleItems = () => {
      const width = window.innerWidth;

      if (width >= 1280) {
        setVisibleItems(8);
      } else if (width >= 1024) {
        setVisibleItems(6);
      } else if (width >= 768) {
        setVisibleItems(4);
      } else if (width >= 480) {
        setVisibleItems(3);
      } else {
        setVisibleItems(2);
      }
    };

    updateVisibleItems();

    window.addEventListener('resize', updateVisibleItems);

    return () => {
      window.removeEventListener('resize', updateVisibleItems);
    };
  }, []);

  // ========================================
  // CALCULATE ITEM WIDTH
  // ========================================

  useEffect(() => {
    const calculateItemWidth = () => {
      if (carouselRef.current) {
        const containerWidth = carouselRef.current.offsetWidth;
        const gapInPixels = 12;
        const totalGapWidth = (visibleItems - 1) * gapInPixels;
        const itemWidthPixels = (containerWidth - totalGapWidth) / visibleItems;
        setItemWidth(itemWidthPixels + gapInPixels);
      }
    };

    calculateItemWidth();

    window.addEventListener('resize', calculateItemWidth);

    return () => {
      window.removeEventListener('resize', calculateItemWidth);
    };
  }, [visibleItems]);

  // ========================================
  // CAROUSEL CALCULATIONS
  // ========================================

  const totalItems = normalizedBrands.length;
  const maxIndex = Math.max(0, totalItems - visibleItems);

  const getTranslateX = () => {
    if (totalItems <= visibleItems || currentIndex === 0) {
      return 0;
    }

    const steps = Math.min(currentIndex, maxIndex);
    return steps * itemWidth;
  };

  // ========================================
  // KEEP INDEX VALID
  // ========================================

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex, visibleItems]);

  // ========================================
  // PREVIOUS
  // ========================================

  const handlePrev = () => {
    if (isTransitioning || currentIndex <= 0) {
      return;
    }

    setIsTransitioning(true);
    setCurrentIndex((prev) => Math.max(0, prev - 1));

    window.setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  };

  // ========================================
  // NEXT
  // ========================================

  const handleNext = () => {
    if (isTransitioning || currentIndex >= maxIndex) {
      return;
    }

    setIsTransitioning(true);
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));

    window.setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  };

  // ========================================
  // BRAND CLICK
  // ========================================

  const handleBrandClick = (brand: TopBrandInterface) => {
    onBrandClick?.(brand);
  };

  // ========================================
  // AUTO PLAY
  // ========================================

  useEffect(() => {
    if (!autoPlay || totalItems <= visibleItems) {
      return;
    }

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) {
          return 0;
        }
        return prev + 1;
      });
    }, autoPlayInterval);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
    };
  }, [autoPlay, autoPlayInterval, totalItems, visibleItems, maxIndex]);

  // ========================================
  // PAUSE AUTO PLAY
  // ========================================

  const handleMouseEnter = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  // ========================================
  // RESUME AUTO PLAY
  // ========================================

  const handleMouseLeave = () => {
    if (!autoPlay || totalItems <= visibleItems) {
      return;
    }

    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) {
          return 0;
        }
        return prev + 1;
      });
    }, autoPlayInterval);
  };

  // ========================================
  // NAVIGATION VISIBILITY
  // ========================================

  const showNavigation = showArrows && totalItems > visibleItems;

  // ========================================
  // EMPTY STATE
  // ========================================

  if (totalItems === 0) {
    return null;
  }

  const translateX = getTranslateX();

  // ========================================
  // RENDER
  // ========================================

  return (
    <div
      className={`${styles.topBrandsContainer} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* HEADER */}

      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>

        {showNavigation && (
          <div className={styles.arrowControls}>
            <button
              type="button"
              className={`
                ${styles.arrowBtn}
                ${currentIndex === 0 ? styles.disabled : ''}
              `}
              onClick={handlePrev}
              aria-label="Previous brands"
              disabled={currentIndex === 0 || isTransitioning}
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              className={`
                ${styles.arrowBtn}
                ${currentIndex >= maxIndex ? styles.disabled : ''}
              `}
              onClick={handleNext}
              aria-label="Next brands"
              disabled={currentIndex >= maxIndex || isTransitioning}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>

      {/* CAROUSEL */}

      <div className={styles.carouselWrapper}>
        <div className={styles.carouselTrack}>
          <div
            className={styles.carouselContent}
            ref={carouselRef}
            style={{
              transform: `translateX(-${translateX}px)`,
              transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
          >
            {normalizedBrands.map((brand) => (
              <div
                key={brand.id}
                className={styles.brandItem}
                style={{
                  flex: `0 0 calc(${100 / visibleItems}% - ${12 * (visibleItems - 1) / visibleItems}px)`,
                  maxWidth: `calc(${100 / visibleItems}% - ${12 * (visibleItems - 1) / visibleItems}px)`,
                }}
              >
                <div
                  className={styles.brandCard}
                  onClick={() => handleBrandClick(brand)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleBrandClick(brand);
                    }
                  }}
                >
                  <div className={styles.imageWrapper}>
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className={styles.brandImage}
                      loading="lazy"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src.includes('/images/fallback-food.jpg')) {
                          return;
                        }
                        target.src = '/images/fallback-food.jpg';
                      }}
                    />
                  </div>

                  <div className={styles.brandInfo}>
                    <p className={styles.brandName}>{brand.name}</p>
                    {brand.deliveryTime && (
                      <p className={styles.deliveryTime}>{brand.deliveryTime}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBrandsFood;