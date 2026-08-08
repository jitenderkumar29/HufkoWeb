'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './VerticalScrollSquare.module.scss';

export interface CategoryItem {
  id: string;
  name: string;
  image: string;
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
}

const VerticalScrollSquare: React.FC<VerticalScrollSquareProps> = ({
  title = 'Shop by category',
  categories,
  itemsPerView = 6,
  rows = 2,
  showArrows = true,
  onCategoryClick,
  className = '',
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

  // Get items per row based on screen size
  const getItemsPerRow = () => {
    if (isMobile) return 2;
    if (isTablet) return 4;
    return itemsPerView || 6;
  };

  // Calculate total pages and slide step
  useEffect(() => {
    const itemsPerRow = getItemsPerRow();
    const totalItemsPerPage = itemsPerRow * rows;
    const totalItems = categories.length;
    
    if (totalItems <= totalItemsPerPage) {
      setTotalPages(1);
      setSlideStep(0);
    } else {
      // Calculate how many pages we need
      const pages = Math.ceil(totalItems / totalItemsPerPage);
      setTotalPages(pages);
      
      // Calculate the step to evenly distribute items
      const step = Math.ceil((totalItems - totalItemsPerPage) / (pages - 1));
      setSlideStep(step);
    }
    
    // Reset to first page if current page is out of bounds
    if (currentPage >= totalPages && totalPages > 0) {
      setCurrentPage(0);
    }
  }, [categories, isMobile, isTablet, itemsPerView, rows, currentPage]);

  // Get items for the current page with calculated step
  const getCurrentPageItems = (): CategoryItem[] => {
    const itemsPerRow = getItemsPerRow();
    const totalItemsPerPage = itemsPerRow * rows;
    const totalItems = categories.length;
    
    if (totalItems <= totalItemsPerPage) {
      return categories.slice(0, totalItems);
    }
    
    // Calculate start position with even distribution
    const maxStart = totalItems - totalItemsPerPage;
    const start = Math.min(currentPage * slideStep, maxStart);
    const end = Math.min(start + totalItemsPerPage, totalItems);
    
    return categories.slice(start, end);
  };

  // Create rows with zigzag pattern
  const getVisibleRows = (): CategoryItem[][] => {
    const itemsPerRow = getItemsPerRow();
    const currentItems = getCurrentPageItems();
    const rows_data: CategoryItem[][] = [];
    
    // Always create exactly 2 rows
    for (let i = 0; i < rows; i++) {
      rows_data.push([]);
    }
    
    // Distribute items in zigzag pattern:
    // Row 0: items at even indices (0, 2, 4, 6, ...)
    // Row 1: items at odd indices (1, 3, 5, 7, ...)
    currentItems.forEach((item, index) => {
      const rowIndex = index % rows;
      if (rowIndex < rows_data.length) {
        rows_data[rowIndex].push(item);
      }
    });
    
    // Fill remaining slots with placeholders (empty)
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

  // Touch event handlers for mobile swipe
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

  const itemsPerRow = getItemsPerRow();
  const visibleRows = getVisibleRows();
  const hasMultiplePages = totalPages > 1;

  if (categories.length === 0) {
    return null;
  }

  return (
    <div 
      className={`${styles.verticalScrollSquare} ${className}`}
      ref={carouselRef}
    >
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
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
                    >
                      <div className={styles.categoryImageWrapper}>
                        <img
                          src={category.image}
                          alt={category.alt || category.name}
                          className={styles.categoryImage}
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/products/placeholder.jpg';
                          }}
                        />
                      </div>
                      {/* <span className={styles.categoryName}>{category.name}</span> */}
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