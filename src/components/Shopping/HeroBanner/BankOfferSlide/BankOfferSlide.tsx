// components/BankOfferSlide/BankOfferSlide.tsx

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './BankOfferSlide.module.scss';

export interface BankOfferSlideData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  url: string;
  ctaText: string;
  discount: string;
  alt: string;
}

interface BankOfferSlideProps {
  slides: BankOfferSlideData[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  className?: string;
  onSlideChange?: (index: number) => void;
}

const BankOfferSlide: React.FC<BankOfferSlideProps> = ({
  slides,
  autoPlay = true,
  autoPlayInterval = 5000,
  showArrows = true,
  showDots = true,
  className = '',
  onSlideChange,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = slides.length;

  useEffect(() => {
    if (autoPlay && !isHovered) {
      timerRef.current = setInterval(() => {
        goToNext();
      }, autoPlayInterval);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [autoPlay, autoPlayInterval, isHovered, currentIndex]);

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const newIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    onSlideChange?.(newIndex);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const newIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    onSlideChange?.(newIndex);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    onSlideChange?.(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div 
      className={`${styles.bankOfferSlide} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.slideWrapper}>
        <ul 
          className={styles.sliderBanner}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: `transform 0.5s ease`,
          }}
        >
          {slides.map((slide, index) => (
            <li key={slide.id} className={styles.slideItem}>
              <div className={styles.bannerContainer}>
                <div className={styles.imageWrapper}>
                  <div className={styles.imageContainer}>
                    <a
                      href={slide.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={slide.alt}
                      className={styles.slideLink}
                    >
                      <img
                        src={slide.imageUrl}
                        alt={slide.alt}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        className={styles.slideImage}
                      />
                      {/* Overlay content */}
                      {/* <div className={styles.slideOverlay}>
                        <div className={styles.discountBadge}>
                          <span className={styles.discountText}>{slide.discount}</span>
                        </div>
                        <div className={styles.slideContent}>
                          <h2 className={styles.slideTitle}>{slide.title}</h2>
                          <p className={styles.slideSubtitle}>{slide.subtitle}</p>
                          <p className={styles.slideDescription}>{slide.description}</p>
                          <button className={styles.ctaButton}>
                            {slide.ctaText}
                          </button>
                        </div>
                      </div> */}
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Navigation Arrows */}
      {showArrows && totalSlides > 1 && (
        <>
          <button
            className={`${styles.arrow} ${styles.arrowLeft}`}
            onClick={goToPrevious}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className={`${styles.arrow} ${styles.arrowRight}`}
            onClick={goToNext}
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {/* {showDots && totalSlides > 1 && (
        <div className={styles.dotsContainer}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )} */}
    </div>
  );
};

export default BankOfferSlide;