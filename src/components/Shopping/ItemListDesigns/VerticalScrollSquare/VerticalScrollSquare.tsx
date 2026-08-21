'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './VerticalScrollSquare.module.scss';

export interface CategoryItem {
  id: string;
  name?: string;
  imageUrl: string;
  url: string;
  alt?: string;
  category?: string;
  subCategory?: string;
  subSubCategory?: string;
}

interface VerticalScrollSquareProps {
  title?: string;
  categories: CategoryItem[];
  itemsPerView?: number;
  rows?: number;
  showArrows?: boolean;
  onCategoryClick?: (category: CategoryItem) => void;
  className?: string;
  imageWidth?: string | number;
  imageHeight?: string | number;
  imageWidthResponsive?: {
    sm?: string | number;
    md?: string | number;
    lg?: string | number;
    xl?: string | number;
    '2xl'?: string | number;
  };
  imageHeightResponsive?: {
    sm?: string | number;
    md?: string | number;
    lg?: string | number;
    xl?: string | number;
    '2xl'?: string | number;
  };
  imageFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  itemPadding?: string | number;
  gap?: string | number;
  gapResponsive?: {
    sm?: string | number;
    md?: string | number;
    lg?: string | number;
    xl?: string | number;
  };
  backgroundColor?: string;
  titleColor?: string;
  showNames?: boolean;
  nameColor?: string;
}

const VerticalScrollSquare: React.FC<VerticalScrollSquareProps> = ({
  title = 'Shop by category',
  categories,
  itemsPerView = 6,
  rows = 2,
  showArrows = true,
  onCategoryClick,
  className = '',
  imageWidth,
  imageHeight,
  imageWidthResponsive,
  imageHeightResponsive,
  imageFit = 'cover',
  itemPadding,
  gap,
  gapResponsive,
  backgroundColor,
  titleColor,
  showNames = false,
  nameColor,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [slideStep, setSlideStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getItemsPerRow = () => {
    if (isMobile) return 2;
    if (isTablet) return 4;
    return itemsPerView || 6;
  };

  useEffect(() => {
    const itemsPerRow = getItemsPerRow();
    const totalItemsPerPage = itemsPerRow * rows;
    const totalItems = categories.length;
    
    if (totalItems <= totalItemsPerPage) {
      setTotalPages(1);
      setSlideStep(0);
    } else {
      const pages = Math.ceil(totalItems / totalItemsPerPage);
      setTotalPages(pages);
      const step = Math.ceil((totalItems - totalItemsPerPage) / (pages - 1));
      setSlideStep(step);
    }
    
    if (currentPage >= totalPages && totalPages > 0) {
      setCurrentPage(0);
    }
  }, [categories, isMobile, isTablet, itemsPerView, rows, currentPage]);

  const getCurrentPageItems = (): CategoryItem[] => {
    const itemsPerRow = getItemsPerRow();
    const totalItemsPerPage = itemsPerRow * rows;
    const totalItems = categories.length;
    
    if (totalItems <= totalItemsPerPage) {
      return categories.slice(0, totalItems);
    }
    
    const maxStart = totalItems - totalItemsPerPage;
    const start = Math.min(currentPage * slideStep, maxStart);
    const end = Math.min(start + totalItemsPerPage, totalItems);
    
    return categories.slice(start, end);
  };

  const getVisibleRows = (): CategoryItem[][] => {
    const itemsPerRow = getItemsPerRow();
    const currentItems = getCurrentPageItems();
    const rows_data: CategoryItem[][] = [];
    
    for (let i = 0; i < rows; i++) {
      rows_data.push([]);
    }
    
    currentItems.forEach((item, index) => {
      const rowIndex = index % rows;
      if (rowIndex < rows_data.length) {
        rows_data[rowIndex].push(item);
      }
    });
    
    for (let i = 0; i < rows; i++) {
      while (rows_data[i].length < itemsPerRow) {
        rows_data[i].push({} as CategoryItem);
      }
    }
    
    return rows_data;
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      scrollToCarousel();
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
      scrollToCarousel();
    }
  };

  const scrollToCarousel = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest' 
      });
    }
  };

  const handleCategoryClick = (category: CategoryItem) => {
    if (onCategoryClick) {
      onCategoryClick(category);
    } else {
      window.location.href = category.url;
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0 && currentPage < totalPages - 1) {
        handleNext();
      } else if (diff < 0 && currentPage > 0) {
        handlePrevious();
      }
    }
  };

  const toCssValue = (value: string | number | undefined): string | undefined => {
    if (value === undefined) return undefined;
    return typeof value === 'number' ? `${value}px` : value;
  };

  // Get image style
  const getImageStyle = (): React.CSSProperties => {
    const style: React.CSSProperties = {};
    
    if (imageWidth !== undefined) {
      style.width = typeof imageWidth === 'number' ? `${imageWidth}px` : imageWidth;
    }
    
    if (imageHeight !== undefined) {
      style.height = typeof imageHeight === 'number' ? `${imageHeight}px` : imageHeight;
    }
    
    if (imageFit) {
      style.objectFit = imageFit;
    }
    
    return style;
  };

  // Build responsive CSS variables - using React.CSSProperties with proper typing
  const getImageVariables = (): React.CSSProperties & Record<string, string> => {
    const vars: Record<string, string> = {};
    
    if (imageWidthResponsive) {
      Object.entries(imageWidthResponsive).forEach(([breakpoint, value]) => {
        if (value !== undefined) {
          const cssVar = `--image-width-${breakpoint}`;
          vars[cssVar] = typeof value === 'number' ? `${value}px` : value;
        }
      });
    }
    
    if (imageHeightResponsive) {
      Object.entries(imageHeightResponsive).forEach(([breakpoint, value]) => {
        if (value !== undefined) {
          const cssVar = `--image-height-${breakpoint}`;
          vars[cssVar] = typeof value === 'number' ? `${value}px` : value;
        }
      });
    }
    
    return vars;
  };

  // Get gap style
  const getGapStyle = (): React.CSSProperties => {
    const style: React.CSSProperties = {};
    
    if (gap !== undefined) {
      style.gap = typeof gap === 'number' ? `${gap}px` : gap;
    }
    
    return style;
  };

  // Get responsive gap variables
  const getGapVariables = (): React.CSSProperties & Record<string, string> => {
    const vars: Record<string, string> = {};
    
    if (gapResponsive) {
      Object.entries(gapResponsive).forEach(([breakpoint, value]) => {
        if (value !== undefined) {
          const cssVar = `--gap-${breakpoint}`;
          vars[cssVar] = typeof value === 'number' ? `${value}px` : value;
        }
      });
    }
    
    return vars;
  };

  // Get item padding style
  const getItemPaddingStyle = (): React.CSSProperties => {
    if (itemPadding === undefined) return {};
    return {
      padding: typeof itemPadding === 'number' ? `${itemPadding}px` : itemPadding
    };
  };

  const itemsPerRow = getItemsPerRow();
  const visibleRows = getVisibleRows();
  const hasMultiplePages = totalPages > 1;
  const imageVariables = getImageVariables();
  const gapVariables = getGapVariables();

  // Container style - merge with proper types
  const containerStyle: React.CSSProperties = {
    ...(backgroundColor && { backgroundColor }),
    ...imageVariables as React.CSSProperties,
    ...gapVariables as React.CSSProperties,
  };

  // Title style
  const titleStyle: React.CSSProperties = {
    ...(titleColor && { color: titleColor }),
  };

  if (categories.length === 0) {
    return null;
  }

  return (
    <div 
      className={`${styles.verticalScrollSquare} ${className}`}
      ref={carouselRef}
      style={containerStyle}
    >
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title} style={titleStyle}>{title}</h2>
      </div>

      {/* Carousel */}
      <div className={styles.carouselContainer}>
        {/* Navigation Arrows */}
        {showArrows && hasMultiplePages && !isMobile && (
          <>
            <button
              className={`${styles.arrowButton} ${styles.arrowLeft} ${
                currentPage === 0 ? styles.disabled : ''
              }`}
              onClick={handlePrevious}
              disabled={currentPage === 0}
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className={`${styles.arrowButton} ${styles.arrowRight} ${
                currentPage === totalPages - 1 ? styles.disabled : ''
              }`}
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {/* Categories Grid */}
        <div className={styles.categoriesWrapper}>
          <div 
            className={styles.categoriesContainer}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={getGapStyle()}
          >
            {visibleRows.map((row, rowIndex) => (
              <div key={rowIndex} className={styles.categoryRow}>
                {row.map((category, itemIndex) => {
                  const isEmpty = !category.id;
                  
                  if (isEmpty) {
                    return (
                      <div 
                        key={`empty-${rowIndex}-${itemIndex}`} 
                        className={styles.emptyItem}
                      />
                    );
                  }
                  
                  return (
                    <div
                      key={`${category.id}-${rowIndex}-${itemIndex}`}
                      className={styles.categoryItem}
                      onClick={() => handleCategoryClick(category)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          handleCategoryClick(category);
                        }
                      }}
                      style={getItemPaddingStyle()}
                    >
                      <div className={styles.categoryImageWrapper}>
                        <img
                          src={category.imageUrl}
                          alt={category.alt || category.name || category.imageUrl}
                          className={styles.categoryImage}
                          style={getImageStyle()}
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/products/placeholder.jpg';
                          }}
                        />
                      </div>
                      {showNames && category.name && (
                        <span 
                          className={styles.categoryName}
                          style={{ color: nameColor }}
                        >
                          {category.name}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Dots */}
        {showArrows && hasMultiplePages && isMobile && (
          <div className={styles.dotsContainer}>
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${
                  index === currentPage ? styles.active : ''
                }`}
                onClick={() => {
                  setCurrentPage(index);
                  scrollToCarousel();
                }}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VerticalScrollSquare;