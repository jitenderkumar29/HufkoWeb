"use client";

import React, { useEffect, useRef, ReactNode, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Users, IndianRupee, Clock, ArrowRight, LucideIcon } from 'lucide-react';
import styles from './FranchiseHufkoSlide.module.scss';

// Types
export interface StatItem {
  value: string;
  label: string;
  icon?: LucideIcon;
}

export interface BadgeItem {
  text: string;
  position: 'top-right' | 'bottom-left' | 'top-left' | 'bottom-right';
  backgroundColor?: string;
  color?: string;
}

export interface ButtonItem {
  label: string;
  variant?: 'primary' | 'secondary';
  icon?: ReactNode;
  onClick?: () => void;
  link?: string;
}

export interface ImageItem {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface FranchiseHufkoProps {
  // Content
  badgeText?: string;
  badgeIcon?: ReactNode;
  heading?: string;
  highlightText?: string;
  description?: string;
  franchiseCategory?: string;
  stats?: StatItem[];
  buttons?: ButtonItem[];
  
  // Images - Support multiple images
  images?: ImageItem[];
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  
  // Badges
  badges?: BadgeItem[];
  
  // Styling
  backgroundColor?: string;
  gradient?: string;
  overlayOpacity?: number;
  className?: string;
  
  // Wave
  showWave?: boolean;
  waveColor?: string;
  
  // Swiper settings
  autoPlayInterval?: number;
  showDots?: boolean;
  
  // Callbacks
  onButtonClick?: (buttonIndex: number, button: ButtonItem) => void;
  onBadgeClick?: (badge: BadgeItem) => void;
  onSlideChange?: (index: number) => void;
  
  // Navigation
  detailsPagePath?: string;
  
  // Children
  children?: ReactNode;
}

const FranchiseHufkoSlide: React.FC<FranchiseHufkoProps> = ({
  badgeText = "World's Largest Instant Delivery App Platform",
  badgeIcon,
  heading = "World's Largest #1",
  highlightText = "AI Powered",
  description = "Enjoy Premium Food and Dining at Premium Restaurants Fast and Easy Online Ordering on the HUFKO App",
  franchiseCategory = "Food & Beverage",
  stats: customStats,
  buttons: customButtons,
  images: customImages,
  imageSrc = "/icons/HUFKO_Store.png",
  imageAlt = "HUFKO Store",
  imageWidth = 600,
  imageHeight = 400,
  badges: customBadges,
  backgroundColor,
  gradient = "linear-gradient(135deg, #055346 0%, #076b58 50%, #055346 100%)",
  overlayOpacity = 0.35,
  className = '',
  showWave = true,
  waveColor = "white",
  autoPlayInterval = 3000,
  showDots = true,
  onButtonClick,
  onBadgeClick,
  onSlideChange,
  detailsPagePath = '/franchise-details',
  children,
}) => {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Prepare images array with consistent dimensions
  const images = customImages || [
    { src: imageSrc, alt: imageAlt, width: imageWidth, height: imageHeight }
  ];

  // Normalize image dimensions - use a fixed container height
  const normalizedImages = images.map(img => ({
    ...img,
    displayWidth: 600,
    displayHeight: 400,
  }));

  const totalSlides = normalizedImages.length;
  const isMultiImage = totalSlides > 1;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(`.${styles.animateOnScroll}`);
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMultiImage) return;

    const startAutoPlay = () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
      autoPlayTimerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, autoPlayInterval);
    };

    startAutoPlay();

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [isMultiImage, totalSlides, autoPlayInterval]);

  useEffect(() => {
    if (onSlideChange) {
      onSlideChange(currentSlide);
    }
  }, [currentSlide, onSlideChange]);

  const defaultStats: StatItem[] = [
    { value: '3,00,000+', label: 'Franchise Partners', icon: Users },
    { value: '3 billion+', label: 'Min. Investment', icon: IndianRupee },
    { value: '0', label: 'Royalty Fee - 2 Years', icon: Clock },
  ];

  const stats = customStats || defaultStats;

  const defaultButtons: ButtonItem[] = [
    { 
      label: 'Order Now', 
      variant: 'primary', 
      icon: <ArrowRight size={20} /> 
    },
    { 
      label: 'More', 
      variant: 'secondary', 
      icon: <ArrowRight size={20} />,
    },
  ];

  const buttons = customButtons || defaultButtons;

  const defaultBadges: BadgeItem[] = [
    { text: '4.9/5 Rating', position: 'top-right', backgroundColor: '#ec2024', color: '#ffffff' },
    { text: '✓ FSSAI Certified', position: 'bottom-left', backgroundColor: '#ffffff', color: '#055346' },
  ];

  const badges = customBadges || defaultBadges;

  const handleButtonClick = (index: number, button: ButtonItem) => {
    if (onButtonClick) {
      onButtonClick(index, button);
    }

    if (button.onClick) {
      button.onClick();
      return;
    }

    if (button.link) {
      router.push(button.link);
      return;
    }

    if (button.label.toLowerCase() === 'more') {
      router.push(`${detailsPagePath}?category=${encodeURIComponent(franchiseCategory)}`);
    }
  };

  const getBadgePositionClass = (position: string): string => {
    switch (position) {
      case 'top-right': return styles.badgeTopRight;
      case 'top-left': return styles.badgeTopLeft;
      case 'bottom-right': return styles.badgeBottomRight;
      case 'bottom-left': return styles.badgeBottomLeft;
      default: return styles.badgeTopRight;
    }
  };

  const getButtonVariantClass = (variant?: string): string => {
    switch (variant) {
      case 'secondary': return styles.applyButtonSecondary;
      default: return '';
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className={`${styles.franchiseSection} ${className}`}
      style={{
        background: backgroundColor || gradient,
      }}
    >
      <div className={styles.blobContainer}>
        <div className={`${styles.blob} ${styles.blob1}`}></div>
        <div className={`${styles.blob} ${styles.blob2}`}></div>
        <div className={`${styles.blob} ${styles.blob3}`}></div>
      </div>

      <div 
        className={styles.overlay}
        style={{ 
          background: `rgba(0, 0, 0, ${overlayOpacity})` 
        }}
      ></div>

      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={`${styles.content} ${styles.animateOnScroll}`}>
            <div className={styles.badge}>
              {badgeIcon && <span className={styles.badgeIcon}>{badgeIcon}</span>}
              <span className={styles.badgeDot}></span>
              {badgeText}
            </div>

            <h1 className={styles.heading}>
              {heading}
              {highlightText && (
                <>
                  {' '}
                  <span className={styles.highlight}>{highlightText}</span>
                </>
              )}
              {children}
            </h1>

            {description && (
              <p className={styles.description}>{description}</p>
            )}

            {buttons.length > 0 && (
              <div className={styles.actions}>
                {buttons.map((button, index) => (
                  <button
                    key={index}
                    onClick={() => handleButtonClick(index, button)}
                    className={`${styles.applyButton} ${getButtonVariantClass(button.variant)}`}
                  >
                    {button.label}
                    {button.icon && <span className={styles.buttonIcon}>{button.icon}</span>}
                  </button>
                ))}
              </div>
            )}

            <div className={styles.stats}>
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className={styles.statItem}>
                    {Icon && <Icon className={styles.statIcon} />}
                    <p className={styles.statValue}>{stat.value}</p>
                    <p className={styles.statLabel}>{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div 
            className={`${styles.imageWrapper} ${styles.animateOnScroll}`}
          >
            <div className={styles.imageCard}>
              <div className={styles.swiperContainer}>
                <div 
                  className={styles.swiperTrack}
                  style={{ 
                    transform: `translateX(-${currentSlide * 100}%)`,
                    transition: 'none'
                  }}
                >
                  {normalizedImages.map((image, index) => (
                    <div key={index} className={styles.swiperSlide}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.displayWidth || 600}
                        height={image.displayHeight || 400}
                        className={styles.imageFixed}
                        priority={index === 0}
                        style={{
                          objectFit: 'cover',
                          width: '100%',
                          height: '100%',
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {isMultiImage && showDots && (
                <div className={styles.swiperDots}>
                  {normalizedImages.map((_, index) => (
                    <button
                      key={index}
                      className={`${styles.swiperDot} ${currentSlide === index ? styles.swiperDotActive : ''}`}
                      onClick={() => setCurrentSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              )}

              {badges.map((badge, index) => (
                <div
                  key={index}
                  className={`${styles.floatingBadge} ${getBadgePositionClass(badge.position)}`}
                  style={{
                    backgroundColor: badge.backgroundColor,
                    color: badge.color,
                  }}
                  onClick={() => onBadgeClick?.(badge)}
                >
                  {badge.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showWave && (
        <div className={styles.waveContainer}>
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path 
              d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" 
              fill={waveColor}
            />
          </svg>
        </div>
      )}
    </section>
  );
};

export default FranchiseHufkoSlide;