"use client";

import React, {
  useRef,
  ReactNode,
  useEffect,
  useState,
  useCallback,
} from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";
import styles from "./FoodDineOutCard.module.scss";

export interface FoodDineOutItem {
  id: string | number;
  title: string;
  placeCount: string;
  imageUrl: string;
  fallbackImage?: string;
  link: string;
  alt?: string;
  dineoutSpecialCategoryID?: string;
}

export interface FoodDineOutCardProps {
  items: FoodDineOutItem[];
  title?: string;
  viewAllLink?: string;
  viewAllText?: string;
  className?: string;
  autoPlayInterval?: number;
  showArrows?: boolean;
  itemsPerView?: number;
  onItemClick?: (item: FoodDineOutItem, index: number) => void;
  onViewAllClick?: () => void;
  children?: ReactNode;
}

const FoodDineOutCard: React.FC<FoodDineOutCardProps> = ({
  items,
  title = "",
  viewAllLink = "/collections",
  viewAllText = "",
  className = "",
  autoPlayInterval = 3000,
  showArrows = true,
  itemsPerView: propItemsPerView,
  onItemClick,
  onViewAllClick,
  children,
}) => {
  const router = useRouter();
  const [itemsPerView, setItemsPerView] = useState(5);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const totalItems = items.length;
  const showHeader = !!(title || viewAllText);

  const getItemsPerView = useCallback(() => {
    if (propItemsPerView) {
      return propItemsPerView;
    }
    if (typeof window === "undefined") {
      return 5;
    }
    const width = window.innerWidth;
    if (width < 480) return 1;
    if (width < 768) return 2;
    if (width < 1024) return 3;
    if (width < 1280) return 4;
    return 5;
  }, [propItemsPerView]);

  useEffect(() => {
    const updateItemsPerView = () => {
      setItemsPerView(getItemsPerView());
    };
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => {
      window.removeEventListener("resize", updateItemsPerView);
    };
  }, [getItemsPerView]);

  const maxIndex = Math.max(0, totalItems - itemsPerView);
  const isMultiItem = totalItems > itemsPerView;

  useEffect(() => {
    setCurrentIndex((previous) => Math.min(previous, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  const getCardWidth = () => {
    if (!containerRef.current) return 0;
    return containerRef.current.clientWidth / itemsPerView;
  };

  const scrollToIndex = useCallback(
    (index: number) => {
      if (!containerRef.current) return;
      const safeIndex = Math.max(0, Math.min(index, maxIndex));
      const cardWidth = getCardWidth();
      if (!cardWidth) return;

      containerRef.current.scrollTo({
        left: safeIndex * cardWidth,
        behavior: "smooth",
      });
      setCurrentIndex(safeIndex);
    },
    [maxIndex, itemsPerView]
  );

  const goToPrevSlide = () => {
    if (!isMultiItem) return;
    const newIndex = Math.max(0, currentIndex - 1);
    scrollToIndex(newIndex);
  };

  const goToNextSlide = () => {
    if (!isMultiItem) return;
    const newIndex = Math.min(maxIndex, currentIndex + 1);
    scrollToIndex(newIndex);
  };

  const handleScroll = () => {
    if (!containerRef.current) return;
    const cardWidth = getCardWidth();
    if (!cardWidth) return;
    const index = Math.round(containerRef.current.scrollLeft / cardWidth);
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  };

  useEffect(() => {
    if (!isMultiItem) return;
    if (isHovering) return;
    if (currentIndex >= maxIndex) return;

    autoPlayTimerRef.current = setInterval(() => {
      setCurrentIndex((previousIndex) => {
        const nextIndex = Math.min(maxIndex, previousIndex + 1);
        if (containerRef.current) {
          const cardWidth = getCardWidth();
          containerRef.current.scrollTo({
            left: nextIndex * cardWidth,
            behavior: "smooth",
          });
        }
        return nextIndex;
      });
    }, autoPlayInterval);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [autoPlayInterval, currentIndex, itemsPerView, isHovering, isMultiItem, maxIndex]);

  useEffect(() => {
    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, []);

  const handleItemClick = (item: FoodDineOutItem, index: number) => {
    // Call the onItemClick prop if provided
    if (onItemClick) {
      onItemClick(item, index);
    }
    
    // Update URL without page navigation
    const params = new URLSearchParams(window.location.search);
    
    if (item.dineoutSpecialCategoryID) {
      params.set('dineoutCategory', item.dineoutSpecialCategoryID);
      params.set('foodCategory', 'dineout_special');
      params.set('category', 'food');
    }
    
    // Use replace instead of push to avoid adding to history
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  const handleViewAllClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onViewAllClick) {
      onViewAllClick();
    } else {
      const params = new URLSearchParams(window.location.search);
      params.set('foodCategory', 'all_sub_header');
      params.delete('dineoutCategory');
      router.replace(`?${params.toString()}`, { scroll: false });
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`${styles.foodDineOutCard} ${isVisible ? styles.visible : ""} ${className}`}
    >
      <div className={styles.container}>
        {showHeader && (
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              {title && <h2 className={styles.title}>{title}</h2>}
              {children}
            </div>
            {viewAllLink && viewAllText && (
              <a
                href="#"
                className={styles.viewAll}
                onClick={handleViewAllClick}
              >
                {viewAllText}
                <ChevronRight size={16} className={styles.viewAllIcon} />
              </a>
            )}
          </div>
        )}

        <div
          className={styles.carouselWrapper}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div
            ref={containerRef}
            className={styles.carouselContainer}
            onScroll={handleScroll}
          >
            <div className={styles.carouselTrack}>
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className={styles.carouselSlide}
                  style={{
                    flex: `0 0 ${100 / itemsPerView}%`,
                    maxWidth: `${100 / itemsPerView}%`,
                  }}
                >
                  <div
                    className={styles.cardLink}
                    onClick={() => handleItemClick(item, index)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className={styles.card}>
                      <div className={styles.imageWrapper}>
                        <Image
                          src={item.imageUrl}
                          alt={item.alt || item.title}
                          fill
                          className={styles.image}
                          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                          priority={index < itemsPerView}
                        />
                        {item.fallbackImage && (
                          <Image
                            src={item.fallbackImage}
                            alt={`${item.title} fallback`}
                            fill
                            className={styles.fallbackImage}
                            sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                          />
                        )}
                        <div className={styles.imageOverlay} />
                      </div>
                      <div className={styles.cardContent}>
                        <p className={styles.cardTitle}>{item.title}</p>
                        <div className={styles.cardMeta}>
                          <span className={styles.placeCount}>{item.placeCount}</span>
                          <ChevronRight size={14} className={styles.metaIcon} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {isMultiItem && showArrows && (
            <>
              <button
                type="button"
                className={`${styles.arrow} ${styles.arrowLeft}`}
                onClick={goToPrevSlide}
                aria-label="Previous"
                disabled={currentIndex <= 0}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 4.5L6 11L12.5 17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <button
                type="button"
                className={`${styles.arrow} ${styles.arrowRight}`}
                onClick={goToNextSlide}
                aria-label="Next"
                disabled={currentIndex >= maxIndex}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 4.5L14 11L7.5 17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default FoodDineOutCard;