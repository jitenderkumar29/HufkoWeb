// CustomerTestimonial.tsx
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import styles from './CustomerTestimonial.module.scss';

export interface Testimonial {
  id: string;
  name: string;
  rating: number; // 1-5
  comment: string;
  date: string;
  isVerified?: boolean;
  avatarUrl?: string;
}

export interface CustomerTestimonialProps {
  testimonials: Testimonial[];
  title?: string;
  viewAllText?: string;
  viewAllUrl?: string;
  itemsPerView?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  autoScrollInterval?: number;
  showArrows?: boolean;
  className?: string;
  backgroundColor?: string;
  onViewAllClick?: () => void;
}

const CustomerTestimonial: React.FC<CustomerTestimonialProps> = ({
  testimonials,
  title = 'Customer Testimonial',
  viewAllText = 'View All',
  viewAllUrl = '/reviews',
  itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 3
  },
  autoScrollInterval = 5000,
  showArrows = true,
  className = '',
  backgroundColor = '#f5f5f5',
  onViewAllClick,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(itemsPerView.desktop);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoScrollTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updateItemsToShow = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setItemsToShow(itemsPerView.desktop);
      } else if (width >= 768) {
        setItemsToShow(itemsPerView.tablet);
      } else {
        setItemsToShow(itemsPerView.mobile);
      }
    };

    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
    return () => window.removeEventListener('resize', updateItemsToShow);
  }, [itemsPerView]);

  const totalSlides = Math.max(0, testimonials.length - itemsToShow);

  useEffect(() => {
    if (autoScrollTimerRef.current) {
      clearInterval(autoScrollTimerRef.current);
    }

    if (testimonials.length > itemsToShow) {
      autoScrollTimerRef.current = setInterval(() => {
        handleNext();
      }, autoScrollInterval);
    }

    return () => {
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current);
      }
    };
  }, [testimonials.length, itemsToShow, autoScrollInterval]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [itemsToShow]);

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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        size={16}
        className={`${styles.star} ${index < rating ? styles.starFilled : styles.starEmpty}`}
        fill={index < rating ? '#4CAF50' : 'none'}
      />
    ));
  };

  return (
    <div className={`${styles.testimonialWrapper} ${className}`}>
      <div 
        className={styles.testimonialContainer}
        style={{ backgroundColor }}
      >
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h2 className={styles.title}>{title}</h2>
          </div>
          <Link 
            href={viewAllUrl} 
            className={styles.viewAllLink}
            onClick={(e) => {
              if (onViewAllClick) {
                e.preventDefault();
                onViewAllClick();
              }
            }}
          >
            {viewAllText}
          </Link>
        </div>

        <div className={styles.carouselWrapper}>
          <div className={styles.carouselContainer}>
            {showArrows && testimonials.length > itemsToShow && (
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
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className={styles.testimonialItem}
                    style={{
                      flex: `0 0 ${100 / itemsToShow}%`,
                    }}
                  >
                    <div className={styles.testimonialCard}>
                      <div className={styles.starRating}>
                        {renderStars(testimonial.rating)}
                      </div>
                      <p className={styles.comment}>{testimonial.comment}</p>
                      <div className={styles.footer}>
                        <div className={styles.customerInfo}>
                          <span className={styles.customerName}>
                            {testimonial.name}
                          </span>
                          {testimonial.isVerified && (
                            <Image
                              src="http://imgcdn.floweraura.com/pdp/verified-user.svg"
                              alt="Verified"
                              width={16}
                              height={16}
                              className={styles.verifiedIcon}
                            />
                          )}
                        </div>
                        <div className={styles.date}>
                          <span className={styles.dateLabel}>Posted On: </span>
                          <span>{testimonial.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {testimonials.length > itemsToShow && (
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

export default CustomerTestimonial;