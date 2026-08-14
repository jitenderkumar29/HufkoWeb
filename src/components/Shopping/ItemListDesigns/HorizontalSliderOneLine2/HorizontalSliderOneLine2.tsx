// app/components/HorizontalSliderOneLine2.tsx
"use client";

import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./HorizontalSliderOneLine2.module.scss";

export interface Product {
  id: string;
  title: string;
  price: number;
  oldPrice?: number;
  currency?: string;
  imageUrl: string;
  link?: string;
}

export interface HorizontalSliderOneLine2Props {
  /** Array of products to display */
  products: Product[];
  /** Title of the slider section */
  title: string;
  /** URL for "Explore more" link */
  exploreMoreLink?: string;
  /** Background color for the slider container */
  backgroundColor?: string;
  /** Primary text color */
  primaryColor?: string;
  /** Secondary text color */
  secondaryColor?: string;
  /** Custom class name for additional styling */
  className?: string;
  /** Card width (default: 250px) */
  cardWidth?: number | string;
  /** Card height (default: auto) */
  cardHeight?: number | string;
  /** Image height (default: 250px) */
  imageHeight?: number | string;
  /** Gap between cards (default: 12px) */
  gap?: number;
  /** Container padding (default: 4px 2px 8px 2px) */
  containerPadding?: string;
  /** Show title (default: true) */
  showTitle?: boolean;
  /** Show explore more link (default: true) */
  showExploreMore?: boolean;
}

const HorizontalSliderOneLine2: React.FC<HorizontalSliderOneLine2Props> = ({
  products,
  title,
  exploreMoreLink = "#",
  backgroundColor = "",
  primaryColor = "#ffffff",
  secondaryColor = "",
  className = "",
  cardWidth = 250,
  cardHeight = "auto",
  imageHeight = 250,
  gap = 12,
  containerPadding = "4px 2px 8px 2px",
  showTitle = true,
  showExploreMore = true,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const updateArrows = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const { scrollLeft: currentScroll, scrollWidth, clientWidth } = container;
    setShowLeftArrow(currentScroll > 0);
    setShowRightArrow(currentScroll < scrollWidth - clientWidth - 5);
    setContainerWidth(clientWidth);
  };

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const scrollAmount = container.clientWidth * 0.8;
    const target =
      direction === "left"
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;
    container.scrollTo({ left: target, behavior: "smooth" });
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const container = scrollContainerRef.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch drag handlers
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const container = scrollContainerRef.current;
    if (!container) return;
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    updateArrows();
    container.addEventListener("scroll", updateArrows);
    window.addEventListener("resize", updateArrows);
    return () => {
      container.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [products]);

  // Format price
  const formatPrice = (price: number, currency: string = "₹") => {
    return `${currency}${price.toLocaleString("en-IN")}`;
  };

  // Get responsive card width
  const getCardWidth = () => {
    if (typeof cardWidth === "number") {
      return `${cardWidth}px`;
    }
    return cardWidth;
  };

  // Get responsive image height
  const getImageHeight = () => {
    if (typeof imageHeight === "number") {
      return `${imageHeight}px`;
    }
    return imageHeight;
  };

  // Get responsive gap
  const getGap = () => {
    if (typeof gap === "number") {
      return `${gap}px`;
    }
    return gap;
  };

  return (
    <div className={styles.sliderContainerMain}>
      <div
        className={`${styles.sliderWrapper} ${className}`}
        style={
          {
            "--slider-bg": backgroundColor,
            "--slider-primary": primaryColor,
            "--slider-secondary": secondaryColor,
            "--card-width": getCardWidth(),
            "--card-height": typeof cardHeight === "number" ? `${cardHeight}px` : cardHeight,
            "--image-height": getImageHeight(),
            "--gap": getGap(),
            "--container-padding": containerPadding,
          } as React.CSSProperties
        }
      >
        <div className={styles.sliderContainer}>
          {/* Header */}
          {(showTitle || showExploreMore) && (
            <div className={styles.sliderHeader}>
              {showTitle && <h3 className={styles.sliderTitle}>{title}</h3>}
              {showExploreMore && (
                <a href={exploreMoreLink} className={styles.exploreMore}>
                  <span>Explore more</span>
                  <ChevronRight size={16} className={styles.exploreIcon} />
                </a>
              )}
            </div>
          )}

          {/* Scrollable Product Row */}
          <div className={styles.sliderRow}>
            {showLeftArrow && (
              <button
                className={`${styles.arrowButton} ${styles.arrowLeft}`}
                onClick={() => scroll("left")}
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} />
              </button>
            )}

            <div
              className={`${styles.productsContainer} ${isDragging ? styles.dragging : ""}`}
              ref={scrollContainerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {products.map((product, index) => (
                <div key={product.id || index} className={styles.productCard}>
                  <a href={product.link || "#"} className={styles.productLink}>
                    <div className={styles.productImageWrapper}>
                      <img
                        src={product.imageUrl}
                        alt={product.title}
                        className={styles.productImage}
                        loading="lazy"
                      />
                    </div>
                    <div className={styles.productInfo}>
                      <p className={styles.productTitle}>{product.title}</p>
                      <div className={styles.productPrice}>
                        <span className={styles.currentPrice}>
                          {formatPrice(product.price, product.currency)}
                        </span>
                        {product.oldPrice && (
                          <>
                            <span className={styles.priceLabel}>M.R.P:</span>
                            <span className={styles.oldPrice}>
                              {formatPrice(product.oldPrice, product.currency)}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>

            {showRightArrow && (
              <button
                className={`${styles.arrowButton} ${styles.arrowRight}`}
                onClick={() => scroll("right")}
                aria-label="Scroll right"
              >
                <ChevronRight size={20} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalSliderOneLine2;