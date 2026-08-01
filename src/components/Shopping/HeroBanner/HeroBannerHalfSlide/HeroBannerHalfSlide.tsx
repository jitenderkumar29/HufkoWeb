import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Gift } from 'lucide-react';
import styles from './HeroBannerHalfSlide.module.scss';

export interface BannerItem {
  id: string;
  title: string;
  subtitle?: string;
  imageUrl: string;
  url: string;
  discount?: string;
  discount2?: string;
  alt: string;
  badge?: string;
}

export interface HeroBannerHalfSlideProps {
  banners: BannerItem[];
  itemsPerView?: {
    mobile: number;
    tablet: number;
    laptop: number;
    desktop: number;
  };
  autoScrollInterval?: number;
  showArrows?: boolean;
  className?: string;
  backgroundColor?: string;
  onBannerClick?: (banner: BannerItem) => void;
}

const HeroBannerHalfSlide: React.FC<HeroBannerHalfSlideProps> = ({
  banners,
  itemsPerView = {
    mobile: 1,
    tablet: 2,
    laptop: 3,
    desktop: 4
  },
  autoScrollInterval = 5000,
  showArrows = true,
  className = '',
  backgroundColor = '#f5f5f5',
  onBannerClick,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(itemsPerView.desktop);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoScrollTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updateItemsToShow = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setItemsToShow(itemsPerView.desktop);
      } else if (width >= 768) {
        setItemsToShow(itemsPerView.laptop);
      } else if (width >= 480) {
        setItemsToShow(itemsPerView.tablet);
      } else {
        setItemsToShow(itemsPerView.mobile);
      }
    };

    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
    return () => window.removeEventListener('resize', updateItemsToShow);
  }, [itemsPerView]);

  useEffect(() => {
    if (autoScrollTimerRef.current) {
      clearInterval(autoScrollTimerRef.current);
    }

    if (banners.length > itemsToShow) {
      autoScrollTimerRef.current = setInterval(() => {
        handleNext();
      }, autoScrollInterval);
    }

    return () => {
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current);
      }
    };
  }, [banners.length, itemsToShow, autoScrollInterval]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [itemsToShow]);

  const totalSlides = Math.max(0, banners.length - itemsToShow);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(totalSlides, prev + 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const x = e.pageX;
    const walk = (startX - x) * 1.5;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft + walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX;
    const walk = (startX - x) * 1.5;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft + walk;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleBannerClick = (banner: BannerItem) => {
    if (onBannerClick) {
      onBannerClick(banner);
    }
  };

  return (
    <div className={`${styles.heroBannerWrapper} ${className}`}>
      <div 
        className={styles.heroBannerHalfSlide}
        style={{ backgroundColor }}
      >
        <div className={styles.carouselWrapper}>
          <div className={styles.carouselContainer}>
            {showArrows && banners.length > itemsToShow && (
              <>
                <button
                  className={`${styles.navButton} ${styles.navPrev} ${currentIndex === 0 ? styles.disabled : ''}`}
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  aria-label="Previous"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  className={`${styles.navButton} ${styles.navNext} ${currentIndex >= totalSlides ? styles.disabled : ''}`}
                  onClick={handleNext}
                  disabled={currentIndex >= totalSlides}
                  aria-label="Next"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            <div
              className={styles.carouselTrack}
              ref={carouselRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className={styles.carouselInner}
                style={{
                  transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
                  transition: isDragging ? 'none' : 'transform 0.5s ease-in-out',
                }}
              >
                {banners.map((banner, index) => (
                  <div
                    key={banner.id}
                    className={styles.bannerItem}
                    style={{
                      flex: `0 0 ${100 / itemsToShow}%`,
                    }}
                  >
                    <a
                      href={banner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.bannerLink}
                      onClick={(e) => {
                        if (onBannerClick) {
                          e.preventDefault();
                          handleBannerClick(banner);
                        }
                      }}
                    >
                      <div className={styles.bannerCard}>
                        <div className={styles.bannerImageWrapper}>
                          <Image
                            src={banner.imageUrl}
                            alt={banner.alt}
                            fill
                            sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            className={styles.bannerImage}
                            priority={index < 2}
                            unoptimized={banner.imageUrl.startsWith('http')}
                          />
                          {banner.badge && (
                            <div className={styles.bannerBadge}>
                              <Gift size={14} />
                              <span>{banner.badge}</span>
                            </div>
                          )}
                        </div>
                        {(banner.discount || banner.discount2) && (
                          <div className={styles.bannerOverlay}>
                            <div className={styles.discountContainer}>
                              {banner.discount && (
                                <span className={styles.discountText}>{banner.discount}</span>
                              )}
                              {banner.discount2 && (
                                <span className={styles.discountSubText}>{banner.discount2}</span>
                              )}
                            </div>
                          </div>
                        )}
                        {banner.title && (
                          <div className={styles.bannerTitle}>
                            <span>{banner.title}</span>
                          </div>
                        )}
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {banners.length > itemsToShow && (
            <div className={styles.dotsContainer}>
              {Array.from({ length: totalSlides + 1 }).map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroBannerHalfSlide;