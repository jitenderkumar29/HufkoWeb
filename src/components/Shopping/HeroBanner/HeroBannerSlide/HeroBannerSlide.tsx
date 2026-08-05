// HeroBannerSlide.tsx
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import styles from './HeroBannerSlide.module.scss';

export interface HeroSlide {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  alt?: string;
  ctaText?: string;
  discount?: string;
  imageUrl: string; // Add this line
  url?: string; // Add this if you want to use it
}

export interface HeroBannerSlideProps {
  /** Array of slides to display */
  slides: HeroSlide[];
  /** Auto-play interval in milliseconds */
  autoPlayInterval?: number;
  /** Whether to auto-play the carousel */
  autoPlay?: boolean;
  /** Custom CSS class for the container */
  className?: string;
  /** Background color of the container */
  backgroundColor?: string;
  /** Height of the banner (default: auto) */
  height?: string | number;
  /** Whether to show navigation dots */
  showDots?: boolean;
  /** Whether to show navigation arrows */
  showArrows?: boolean;
  /** Whether to show slide title */
  showTitle?: boolean;
  /** Whether to show slide subtitle */
  showSubtitle?: boolean;
  /** Whether to show CTA button */
  showCTA?: boolean;
  /** Custom render function for each slide */
  renderSlide?: (slide: HeroSlide, index: number) => React.ReactNode;
  /** Callback when a slide is clicked */
  onSlideClick?: (slide: HeroSlide, index: number) => void;
  /** Callback when slide changes */
  onSlideChange?: (index: number) => void;
  /** Transition duration in milliseconds */
  transitionDuration?: number;
}

const HeroBannerSlide: React.FC<HeroBannerSlideProps> = ({
  slides,
  autoPlayInterval = 4000,
  autoPlay = true,
  className = '',
  backgroundColor,
  height = 'auto',
  showDots = true,
  showArrows = true,
  showTitle = true,
  showSubtitle = true,
  showCTA = true,
  renderSlide,
  onSlideClick,
  onSlideChange,
  transitionDuration = 800,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const progressTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [progress, setProgress] = useState(0);

  const totalSlides = slides.length;

  // Go to specific slide
  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    
    let newIndex = index;
    if (index < 0) newIndex = totalSlides - 1;
    if (index >= totalSlides) newIndex = 0;
    
    if (newIndex === currentIndex) return;
    
    setIsTransitioning(true);
    setCurrentIndex(newIndex);
    
    if (onSlideChange) {
      onSlideChange(newIndex);
    }
    
    // Reset progress
    setProgress(0);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, transitionDuration);
  }, [currentIndex, totalSlides, transitionDuration, isTransitioning, onSlideChange]);

  // Next slide
  const nextSlide = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  // Previous slide
  const prevSlide = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  // Handle slide click
  const handleSlideClick = useCallback((slide: HeroSlide, index: number) => {
    if (onSlideClick) {
      onSlideClick(slide, index);
    }
  }, [onSlideClick]);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || isPaused || totalSlides <= 1) {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
        autoPlayTimerRef.current = null;
      }
      if (progressTimerRef.current) {
        clearInterval(progressTimerRef.current);
        progressTimerRef.current = null;
      }
      return;
    }

    // Progress bar animation
    let progressValue = 0;
    const progressInterval = 50; // Update every 50ms
    const progressStep = (progressInterval / autoPlayInterval) * 100;

    progressTimerRef.current = setInterval(() => {
      progressValue += progressStep;
      if (progressValue >= 100) {
        progressValue = 100;
      }
      setProgress(progressValue);
    }, progressInterval);

    // Slide transition
    autoPlayTimerRef.current = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
        autoPlayTimerRef.current = null;
      }
      if (progressTimerRef.current) {
        clearInterval(progressTimerRef.current);
        progressTimerRef.current = null;
      }
    };
  }, [autoPlay, autoPlayInterval, nextSlide, isPaused, totalSlides]);

  // Reset progress when slide changes manually
  useEffect(() => {
    setProgress(0);
  }, [currentIndex]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (touchStartX - touchEndX > 50) {
      // Swipe left - next slide
      nextSlide();
    } else if (touchStartX - touchEndX < -50) {
      // Swipe right - previous slide
      prevSlide();
    }
    setTouchStartX(0);
    setTouchEndX(0);
  };

  // Mouse enter/leave for pause on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  // Default slide renderer
  const defaultRenderSlide = (slide: HeroSlide, index: number) => {
    const isActive = index === currentIndex;
    
    return (
      <div 
        key={slide.id} 
        className={styles.slide}
        style={{ 
          display: isActive ? 'block' : 'none',
          pointerEvents: isActive ? 'auto' : 'none'
        }}
      >
        <a 
          href={slide.url} 
          className={styles.slideLink}
          onClick={(e) => {
            if (onSlideClick) {
              e.preventDefault();
              handleSlideClick(slide, index);
            }
          }}
          aria-label={`Slide ${index + 1}: ${slide.title}`}
        >
          <div className={styles.slideImageWrapper}>
            <Image
              src={slide.imageUrl}
              alt={slide.alt || slide.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              className={styles.slideImage}
              priority={index === 0}
              quality={90}
            />
            <div className={styles.slideOverlay} />
          </div>
          
          <div className={styles.slideContent}>
            {/* {slide.discount && (
              <div className={styles.slideDiscount}>
                {slide.discount}
              </div>
            )}
             */}
            {/* {showTitle && slide.title && (
              <h2 className={styles.slideTitle}>
                {slide.title}
              </h2>
            )}
            
            {showSubtitle && slide.subtitle && (
              <p className={styles.slideSubtitle}>
                {slide.subtitle}
              </p>
            )}
            
            {slide.description && (
              <p className={styles.slideDescription}>
                {slide.description}
              </p>
            )} */}
            
            {/* {showCTA && slide.ctaText && (
              <span className={styles.ctaButton}>
                {slide.ctaText}
              </span>
            )} */}
          </div>
        </a>
      </div>
    );
  };

  // Render navigation arrows
  const renderArrows = () => {
    if (!showArrows || totalSlides <= 1) return null;

    return (
      <div className={styles.navControls}>
        <button
          className={styles.navButton}
          onClick={prevSlide}
          aria-label="Previous slide"
          disabled={isTransitioning}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className={styles.navButton}
          onClick={nextSlide}
          aria-label="Next slide"
          disabled={isTransitioning}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    );
  };

  // Render dot indicators
  const renderDots = () => {
    if (!showDots || totalSlides <= 1) return null;

    return (
      <div className={styles.dotIndicators} role="tablist">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
            role="tab"
            aria-label={`Go to slide ${index + 1}`}
            aria-selected={index === currentIndex}
          />
        ))}
      </div>
    );
  };

  // Calculate container styles
  const containerStyle = {
    ...(backgroundColor && { backgroundColor }),
    ...(height !== 'auto' && { height: typeof height === 'number' ? `${height}px` : height }),
  };

  return (
    <div 
      className={`${styles.heroBannerContainer} ${className}`}
      style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label="Hero banner carousel"
    >
      <div className={styles.heroBanner}>
        <div className={styles.slidesWrapper}>
          {/* Slides */}
          {slides.map((slide, index) => (
            renderSlide 
              ? renderSlide(slide, index)
              : defaultRenderSlide(slide, index)
          ))}
          
          {/* Navigation Arrows */}
          {renderArrows()}
          
          {/* Progress Bar */}
          {autoPlay && totalSlides > 1 && (
            <div 
              className={styles.progressBar}
              style={{ width: `${progress}%` }}
            />
          )}
        </div>
        
        {/* Dot Indicators */}
        {/* {renderDots()} */}
      </div>
    </div>
  );
};

export default HeroBannerSlide;