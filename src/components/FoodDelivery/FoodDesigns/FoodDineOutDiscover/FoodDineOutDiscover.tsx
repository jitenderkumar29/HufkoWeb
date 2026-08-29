// components/FoodDineOutDiscover/FoodDineOutDiscover.tsx

'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Percent } from 'lucide-react';
import styles from './FoodDineOutDiscover.module.scss';
import { DiningDataItems } from '@/app/data/Categorywise/FoodsCategories';

export interface DiningItem {
  id: number | string;
  name: string;
  cuisine: string;
  location: string;
  rating: number;
  price: string;
  image: string;
  distance: string;
  primaryOffer: string;
  primaryOfferCount?: string;
  secondaryOffer: string;
  upiOffer: string;
}

interface FoodDineOutDiscoverProps {
  /** Array of dining items to display */
  items?: DiningItem[];
  /** Title of the section */
  title?: string;
  /** Subtitle of the section */
  subtitle?: string;
  /** Additional CSS class name */
  className?: string;
  /** Callback when a card is clicked */
  onSelect?: (item: DiningItem) => void;
  /** Callback when "Book Now" or primary action is clicked */
  onAction?: (item: DiningItem) => void;
  /** Number of cards to show per view (for scroll amount) */
  cardsPerView?: number;
  /** Gap between cards in pixels */
  cardGap?: number;
  /** Maximum width of the container */
  maxWidth?: string | number;
  /** Custom card width */
  cardWidth?: number;
  /** Enable/disable navigation arrows */
  showNavigation?: boolean;
  /** Enable/disable auto-scroll */
  autoScroll?: boolean;
  /** Auto-scroll interval in milliseconds */
  autoScrollInterval?: number;
  /** Custom renderer for card content */
  renderCard?: (item: DiningItem) => React.ReactNode;
  /** Custom renderer for card image */
  renderImage?: (item: DiningItem) => React.ReactNode;
}

// Default dining data


const FoodDineOutDiscover: React.FC<FoodDineOutDiscoverProps> = ({
  items = DiningDataItems,
  title = 'Discover best restaurants on Dineout',
  subtitle,
  className = '',
  onSelect,
  onAction,
  cardsPerView = 1,
  cardGap = 20,
  maxWidth,
  cardWidth,
  showNavigation = true,
  autoScroll = false,
  autoScrollInterval = 3000,
  renderCard,
  renderImage,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoScrollTimerRef = useRef<NodeJS.Timeout | null>(null);

  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    setShowLeftArrow(container.scrollLeft > 5);
    setShowRightArrow(container.scrollLeft < maxScrollLeft - 5);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    handleScroll();
    container.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [items]);

  // Auto-scroll functionality
  useEffect(() => {
    if (!autoScroll || !scrollContainerRef.current) return;

    const startAutoScroll = () => {
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current);
      }

      autoScrollTimerRef.current = setInterval(() => {
        if (isHovering) return;
        
        const container = scrollContainerRef.current;
        if (!container) return;

        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScrollLeft - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          const card = container.querySelector(`.${styles.card}`) as HTMLElement | null;
          const cardWidthValue = card?.offsetWidth ?? 410;
          const scrollAmount = (cardWidthValue + cardGap) * (cardsPerView || 1);
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }, autoScrollInterval);
    };

    startAutoScroll();

    return () => {
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current);
      }
    };
  }, [autoScroll, autoScrollInterval, cardsPerView, cardGap, isHovering]);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const card = container.querySelector(`.${styles.card}`) as HTMLElement | null;
    const cardWidthValue = card?.offsetWidth ?? 410;
    const scrollAmount = (cardWidthValue + cardGap) * (cardsPerView || 1);

    container.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  const handleCardClick = (item: DiningItem) => {
    onSelect?.(item);
  };

  const handleActionClick = (item: DiningItem, e: React.MouseEvent) => {
    e.stopPropagation();
    onAction?.(item);
  };

  // Default card renderer
  const defaultRenderCard = (item: DiningItem) => (
    <article
      className={styles.card}
      onClick={() => handleCardClick(item)}
    >
      {/* Image */}
      <div className={styles.imageWrapper}>
        {renderImage ? (
          renderImage(item)
        ) : (
          <img
            src={item.image}
            alt={item.name}
            className={styles.cardImage}
            loading="lazy"
          />
        )}
        <div className={styles.imageOverlay} />
        <div className={styles.imageBottom}>
          <h3 className={styles.restaurantName}>{item.name}</h3>
          <div className={styles.rating}>
            <span className={styles.ratingStar}>★</span>
            <span>{item.rating}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={styles.cardContent}>
        <div className={styles.restaurantInfo}>
          <div className={styles.infoRow}>
            <span className={styles.cuisine}>{item.cuisine}</span>
            <span className={styles.price}>{item.price}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.location}>{item.location}</span>
            <span className={styles.distance}>{item.distance}</span>
          </div>
        </div>

        {/* Primary Offer */}
        <div className={styles.primaryOffer}>
          <div className={styles.offerIcon}>
            <Percent size={15} strokeWidth={3} />
          </div>
          <span className={styles.primaryOfferText}>{item.primaryOffer}</span>
          {item.primaryOfferCount && (
            <span className={styles.offerCount}>{item.primaryOfferCount}</span>
          )}
        </div>

        {/* Bank Offer */}
        <div className={styles.secondaryOffer}>{item.secondaryOffer}</div>

        {/* UPI Offer */}
        <div className={styles.upiOffer}>{item.upiOffer}</div>
      </div>
    </article>
  );

  const containerStyle: React.CSSProperties = {};
  if (maxWidth) {
    containerStyle.maxWidth = typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth;
  }

  const scrollContainerStyle: React.CSSProperties = {};
  if (cardWidth) {
    scrollContainerStyle.gap = `${cardGap}px`;
  }

  return (
    <section
      className={`${styles.container} ${className}`}
      style={containerStyle}
      aria-label="Dineout restaurants"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h2 className={styles.title}>{title}</h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>

        {showNavigation && (
          <div className={styles.navigation}>
            <button
              type="button"
              className={`${styles.navButton} ${!showLeftArrow ? styles.disabled : ''}`}
              onClick={() => scroll('left')}
              disabled={!showLeftArrow}
              aria-label="Previous restaurants"
            >
              <ChevronLeft size={22} strokeWidth={1.8} />
            </button>
            <button
              type="button"
              className={`${styles.navButton} ${!showRightArrow ? styles.disabled : ''}`}
              onClick={() => scroll('right')}
              disabled={!showRightArrow}
              aria-label="Next restaurants"
            >
              <ChevronRight size={22} strokeWidth={1.8} />
            </button>
          </div>
        )}
      </div>

      {/* Cards */}
      <div className={styles.scrollWrapper}>
        <div
          ref={scrollContainerRef}
          className={styles.scrollContainer}
          style={scrollContainerStyle}
        >
          {items.map((item) => (
            <React.Fragment key={item.id}>
              {renderCard ? renderCard(item) : defaultRenderCard(item)}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodDineOutDiscover;