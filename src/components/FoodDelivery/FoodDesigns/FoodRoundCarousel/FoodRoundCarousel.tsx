// FoodRoundCarousel.tsx
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './FoodRoundCarousel.module.scss';
import Image from 'next/image';

export interface FoodCategoryItem {
  id: string;
  name?: string;
  title?: string;
  imageUrl: string;
  url?: string;
  link?: string;
  dineoutSpecialCategoryID?: string;
  [key: string]: any;
}

export interface FoodRoundCarouselProps {
  categories: FoodCategoryItem[];
  title?: string;
  scrollAmount?: number;
  cardWidth?: number;
  cardHeight?: number;
  cardGap?: number;
  className?: string;
  showScrollbar?: boolean;
  backgroundColor?: string;
  imageBorderColor?: string;
  itemsPerView?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
    largeDesktop?: number;
  };
  renderItem?: (item: FoodCategoryItem) => React.ReactNode;
  onCategoryClick?: (item: FoodCategoryItem) => void;
  renderNavButton?: (direction: 'prev' | 'next', onClick: () => void) => React.ReactNode;
  showArrows?: boolean;
  titlePosition?: 'top' | 'bottom' | 'none';
  imageScale?: number;
  fixedSize?: boolean;
  selectedCategoryId?: string | null;
  highlightColor?: string;
}

const FoodRoundCarousel: React.FC<FoodRoundCarouselProps> = ({
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
  itemsPerView,
  renderItem,
  onCategoryClick,
  renderNavButton,
  showArrows = true,
  titlePosition = 'top',
  imageScale = 1.1,
  fixedSize = true,
  selectedCategoryId = null,
  highlightColor = '#530605',
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslateX, setCurrentTranslateX] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const rowInnerRef = useRef<HTMLUListElement>(null);

  // Calculate responsive card dimensions
  const getResponsiveCardDimensions = useCallback(() => {
    if (fixedSize) {
      return { width: cardWidth, height: cardHeight };
    }

    if (!itemsPerView) return { width: cardWidth, height: cardHeight };

    const width = window.innerWidth;
    let itemsToShow = 5;

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
  }, [cardWidth, cardHeight, cardGap, itemsPerView, fixedSize]);

  // Handle category click
  const handleCategoryClick = (item: FoodCategoryItem) => {
    if (onCategoryClick) {
      onCategoryClick(item);
    }
  };

  // Check if a category is selected
  const isCategorySelected = (item: FoodCategoryItem): boolean => {
    if (!selectedCategoryId) return false;
    return (
      item.dineoutSpecialCategoryID === selectedCategoryId ||
      item.id === selectedCategoryId ||
      item.name === selectedCategoryId ||
      item.title === selectedCategoryId
    );
  };

  // Default render item with horizontal highlight
  const defaultRenderItem = (item: FoodCategoryItem) => {
    const dimensions = getResponsiveCardDimensions();
    const imageWidth = dimensions.width * imageScale;
    const imageHeight = dimensions.height * imageScale;
    
    const displayName = item.name || item.title || '';
    const displayUrl = item.url || item.link || '#';
    const isSelected = isCategorySelected(item);

    return (
      <a 
        href={displayUrl} 
        className={`${styles.categoryLink} ${isSelected ? styles.selected : ''}`}
        aria-label={displayName}
        onClick={(e) => {
          if (onCategoryClick) {
            e.preventDefault();
            handleCategoryClick(item);
          }
        }}
      >
        <div 
          className={`${styles.categoryImage} ${isSelected ? styles.selectedImage : ''}`}
          style={{
            width: dimensions.width,
            height: dimensions.height,
            borderRadius: '50%',
            overflow: 'hidden',
            position: 'relative',
            borderColor: isSelected ? highlightColor : imageBorderColor,
            borderWidth: isSelected ? '3px' : '3px',
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
              alt={displayName}
              fill
              sizes={`${imageWidth}px`}
              className={`${styles.categoryImg} ${isSelected ? styles.selectedImg : ''}`}
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </div>
        </div>
        <div className={`${styles.categoryFooter} ${isSelected ? styles.selectedFooter : ''}`}>
          <span className={`${styles.categoryTitle} ${isSelected ? styles.selectedTitle : ''}`}>
            {displayName}
          </span>
          {/* Horizontal highlight bar - only shown for selected category */}
          {isSelected && (
            <div 
              className={styles.highlightBar}
              style={{ backgroundColor: highlightColor }}
            />
          )}
        </div>
      </a>
    );
  };

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

  // Auto-scroll to selected category
  useEffect(() => {
    if (!selectedCategoryId || !rowInnerRef.current) return;

    const selectedIndex = categories.findIndex((item) => {
      return (
        item.dineoutSpecialCategoryID === selectedCategoryId ||
        item.id === selectedCategoryId ||
        item.name === selectedCategoryId ||
        item.title === selectedCategoryId
      );
    });

    if (selectedIndex !== -1) {
      const { width } = getResponsiveCardDimensions();
      const position = selectedIndex * (width + cardGap);
      const viewportWidth = viewportRef.current?.offsetWidth || 0;
      const centeredPosition = Math.max(0, position - (viewportWidth / 2) + (width / 2));
      scrollTo(centeredPosition);
    }
  }, [selectedCategoryId, categories, getResponsiveCardDimensions, cardGap, scrollTo]);

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
                  {categories.map((category) => (
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

export default FoodRoundCarousel;