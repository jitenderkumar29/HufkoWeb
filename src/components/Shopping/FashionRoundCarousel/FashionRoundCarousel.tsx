import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './FashionRoundCarousel.module.scss';
import Image from 'next/image';

export interface CategoryItem {
  id: string;
  title: string;
  imageUrl: string;
  link: string;
}

export interface FashionRoundCarouselProps {
  /** Array of category items to display */
  categories: CategoryItem[];
  /** Title of the carousel section */
  title?: string;
  /** Number of items to scroll by on arrow click */
  scrollAmount?: number;
  /** Width of each category card in pixels */
  cardWidth?: number;
  /** Height of each category card in pixels */
  cardHeight?: number;
  /** Gap between cards in pixels */
  cardGap?: number;
  /** Custom CSS class for the container */
  className?: string;
  /** Whether to show the scrollbar indicator */
  showScrollbar?: boolean;
  /** Background color of the container */
  backgroundColor?: string;
  /** Border color of the circular images */
  imageBorderColor?: string;
  /** Whether to enable auto-scroll */
  autoScroll?: boolean;
  /** Auto-scroll interval in milliseconds */
  autoScrollInterval?: number;
  /** Number of items to show per view (for responsive sizing) */
  itemsPerView?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
    largeDesktop?: number;
  };
  /** Custom render function for each category item */
  renderItem?: (item: CategoryItem) => React.ReactNode;
  /** Callback when a category is clicked */
  onCategoryClick?: (item: CategoryItem) => void;
  /** Custom navigation button renderer */
  renderNavButton?: (direction: 'prev' | 'next', onClick: () => void) => React.ReactNode;
  /** Whether to show navigation arrows */
  showArrows?: boolean;
  /** Position of the title */
  titlePosition?: 'top' | 'bottom' | 'none';
  /** Image scale factor - larger values zoom in more */
  imageScale?: number;
}

const FashionRoundCarousel: React.FC<FashionRoundCarouselProps> = ({
  categories,
  title,
  scrollAmount = 500,
  cardWidth = 150,
  cardHeight = 150,
  cardGap = 15,
  className = '',
  showScrollbar = true,
  backgroundColor,
  imageBorderColor = '#f0f0f0',
  autoScroll = false,
  autoScrollInterval = 3000,
  itemsPerView,
  renderItem,
  onCategoryClick,
  renderNavButton,
  showArrows = true,
  titlePosition = 'top',
  imageScale = 1.1, // Default zoom factor
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslateX, setCurrentTranslateX] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const rowInnerRef = useRef<HTMLUListElement>(null);
  const autoScrollTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Calculate responsive card dimensions
  const getResponsiveCardDimensions = useCallback(() => {
    if (!itemsPerView) return { width: cardWidth, height: cardHeight };

    const width = window.innerWidth;
    let itemsToShow = 5; // default

    if (width >= 1280 && itemsPerView.largeDesktop) {
      itemsToShow = itemsPerView.largeDesktop;
    } else if (width >= 1024 && itemsPerView.desktop) {
      itemsToShow = itemsPerView.desktop;
    } else if (width >= 768 && itemsPerView.tablet) {
      itemsToShow = itemsPerView.tablet;
    } else if (itemsPerView.mobile) {
      itemsToShow = itemsPerView.mobile;
    }

    const viewportWidth = viewportRef.current?.offsetWidth || window.innerWidth;
    const totalGap = (itemsToShow - 1) * cardGap;
    const calculatedWidth = Math.floor((viewportWidth - totalGap) / itemsToShow);
    const calculatedHeight = cardHeight || calculatedWidth;
    
    return { 
      width: calculatedWidth, 
      height: calculatedHeight 
    };
  }, [cardWidth, cardHeight, cardGap, itemsPerView]);

  const updateArrowVisibility = useCallback(() => {
    if (!viewportRef.current || !rowInnerRef.current) return;

    const viewportWidth = viewportRef.current.offsetWidth;
    const rowInnerWidth = rowInnerRef.current.scrollWidth;
    const maxScroll = rowInnerWidth - viewportWidth;

    setShowLeftArrow(scrollPosition > 0);
    setShowRightArrow(scrollPosition < maxScroll - 1);
  }, [scrollPosition]);

  const scrollTo = useCallback((position: number) => {
    if (!viewportRef.current || !rowInnerRef.current) return;

    const viewportWidth = viewportRef.current.offsetWidth;
    const rowInnerWidth = rowInnerRef.current.scrollWidth;
    const maxScroll = rowInnerWidth - viewportWidth;
    const newPosition = Math.max(0, Math.min(position, maxScroll));

    setScrollPosition(newPosition);
    rowInnerRef.current.style.transform = `translateX(-${newPosition}px)`;
  }, []);

  const scrollBy = useCallback((amount: number) => {
    scrollTo(scrollPosition + amount);
  }, [scrollPosition, scrollTo]);

  const scrollToItem = useCallback((index: number) => {
    if (!rowInnerRef.current) return;
    const { width } = getResponsiveCardDimensions();
    const position = index * (width + cardGap);
    scrollTo(position);
  }, [getResponsiveCardDimensions, cardGap, scrollTo]);

  const getCurrentCardDimensions = useCallback(() => {
    return getResponsiveCardDimensions();
  }, [getResponsiveCardDimensions]);

  // Auto-scroll functionality
  useEffect(() => {
    if (!autoScroll || !showRightArrow) {
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current);
        autoScrollTimerRef.current = null;
      }
      return;
    }

    autoScrollTimerRef.current = setInterval(() => {
      scrollBy(scrollAmount);
    }, autoScrollInterval);

    return () => {
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current);
        autoScrollTimerRef.current = null;
      }
    };
  }, [autoScroll, autoScrollInterval, scrollAmount, scrollBy, showRightArrow]);

  // Update arrow visibility on scroll
  useEffect(() => {
    updateArrowVisibility();
  }, [scrollPosition, updateArrowVisibility]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      updateArrowVisibility();
      scrollTo(scrollPosition);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [scrollPosition, scrollTo, updateArrowVisibility]);

  // Mouse drag functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentTranslateX(scrollPosition);
    rowInnerRef.current?.style.setProperty('transition', 'none');
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = startX - e.clientX;
    scrollTo(currentTranslateX + diff);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    rowInnerRef.current?.style.setProperty('transition', '');
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      rowInnerRef.current?.style.setProperty('transition', '');
    }
  };

  // Touch drag functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setCurrentTranslateX(scrollPosition);
    rowInnerRef.current?.style.setProperty('transition', 'none');
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const diff = startX - e.touches[0].clientX;
    scrollTo(currentTranslateX + diff);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    rowInnerRef.current?.style.setProperty('transition', '');
  };

  const handleCategoryClick = (item: CategoryItem) => {
    if (onCategoryClick) {
      onCategoryClick(item);
    }
  };

  const defaultRenderItem = (item: CategoryItem) => {
    const dimensions = getResponsiveCardDimensions();
    // Calculate larger image dimensions
    const imageWidth = dimensions.width * imageScale;
    const imageHeight = dimensions.height * imageScale;
    
    return (
      <a 
        href={item.link} 
        className={styles.categoryLink} 
        aria-label={item.title}
        onClick={(e) => {
          if (onCategoryClick) {
            e.preventDefault();
            handleCategoryClick(item);
          }
        }}
      >
        <div 
          className={styles.categoryImage}
          style={{
            width: dimensions.width,
            height: dimensions.height,
            borderRadius: '50%',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: imageWidth,
              height: imageHeight,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              sizes={`${imageWidth}px`}
              className={styles.categoryImg}
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </div>
        </div>
        <div className={styles.categoryFooter}>
          <span className={styles.categoryTitle}>{item.title}</span>
        </div>
      </a>
    );
  };

  const defaultNavButton = (direction: 'prev' | 'next', onClick: () => void) => (
    <button
      className={`${styles.navButton} ${direction === 'prev' ? styles.prevButton : styles.nextButton}`}
      onClick={onClick}
      aria-label={direction === 'prev' ? 'Previous' : 'Next'}
    >
      {direction === 'prev' ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
    </button>
  );

  const renderNavButtons = () => {
    if (!showArrows) return null;

    return (
      <>
        {showLeftArrow && (
          renderNavButton ? renderNavButton('prev', () => scrollBy(-scrollAmount)) : defaultNavButton('prev', () => scrollBy(-scrollAmount))
        )}
        {showRightArrow && (
          renderNavButton ? renderNavButton('next', () => scrollBy(scrollAmount)) : defaultNavButton('next', () => scrollBy(scrollAmount))
        )}
      </>
    );
  };

  const renderTitle = () => {
    if (!title || titlePosition === 'none') return null;
    return <h2 className={styles.carouselTitle}>{title}</h2>;
  };

  const dimensions = getResponsiveCardDimensions();
  const cardStyle = {
    flex: '0 0 auto',
    width: `${dimensions.width}px`,
    marginRight: `${cardGap}px`,
  };

  const containerStyle = {
    ...(backgroundColor && { backgroundColor }),
  };

  return (
    <div className={`${styles.containerBody} ${className}`} style={containerStyle}>
      <div className={styles.container}>
        {titlePosition === 'top' && renderTitle()}
        
        <div className={styles.carousel}>
          <div className={styles.viewportContainer}>
            {renderNavButtons()}

            <div 
              className={styles.viewport} 
              ref={viewportRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className={styles.viewportRow}>
                <ul 
                  className={`${styles.rowInner} ${isDragging ? styles.dragging : ''}`} 
                  ref={rowInnerRef}
                >
                  {categories.map((category, index) => (
                    <li 
                      key={category.id} 
                      className={styles.categoryCard}
                      style={cardStyle}
                    >
                      {renderItem 
                        ? renderItem(category) 
                        : defaultRenderItem(category)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {showScrollbar && (
            <div className={styles.scrollbar}>
              <div className={styles.scroller} style={{ width: '100%', left: '0px' }} />
            </div>
          )}
        </div>

        {titlePosition === 'bottom' && renderTitle()}
      </div>
    </div>
  );
};

export default FashionRoundCarousel;