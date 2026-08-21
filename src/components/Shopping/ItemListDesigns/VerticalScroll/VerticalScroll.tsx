// app/components/VerticalScroll.tsx
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './VerticalScroll.module.scss';
import { ScrollItemWomensBeauty } from '@/app/data/Categorywise/ShopingCategories';

export interface ScrollItem {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  imageUrl: string;
  link?: string;
  badge?: string;
  discount?: string;
}

interface VerticalScrollProps {
  items?: ScrollItem[];
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  className?: string;
  // New props for dynamic height
  imageAspectRatio?: string; // e.g., "1/1", "3/4", "2/3", "4/3", "16/9"
  imageHeight?: string | number; // e.g., "300px", 300, "100%"
  imageHeightResponsive?: {
    sm?: string | number;
    md?: string | number;
    lg?: string | number;
    xl?: string | number;
  };
  imageFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  // New props for background color
  backgroundColor?: string;
  cardBackgroundColor?: string;
  titleColor?: string;
  subtitleColor?: string;
}

const VerticalScroll: React.FC<VerticalScrollProps> = ({
  items = ScrollItemWomensBeauty,
  title = 'Shop by Category',
  subtitle,
  ctaText,
  onCtaClick,
  className = '',
  imageAspectRatio = '3/4.1',
  imageHeight,
  imageHeightResponsive,
  imageFit = 'cover',
  backgroundColor,
  cardBackgroundColor = '#ffffff',
  titleColor,
  subtitleColor
}) => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.8;
      const targetScroll = direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount;
      
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  // Build dynamic styles for the image
  const getImageStyle = (): React.CSSProperties => {
    const style: React.CSSProperties = {};
    
    if (imageHeight) {
      style.height = typeof imageHeight === 'number' ? `${imageHeight}px` : imageHeight;
      style.aspectRatio = 'auto';
    } else {
      style.aspectRatio = imageAspectRatio;
    }
    
    return style;
  };

  // Build responsive styles
  const getResponsiveImageClass = () => {
    if (!imageHeightResponsive) return '';
    
    const classes: string[] = [];
    const responsiveMap = {
      sm: 'imageHeightSm',
      md: 'imageHeightMd',
      lg: 'imageHeightLg',
      xl: 'imageHeightXl'
    };

    Object.entries(imageHeightResponsive).forEach(([breakpoint, value]) => {
      if (value) {
        classes.push(responsiveMap[breakpoint as keyof typeof responsiveMap]);
      }
    });

    return classes.join(' ');
  };

  // Dynamic styles
  const containerStyle: React.CSSProperties = {};
  if (backgroundColor) {
    containerStyle.backgroundColor = backgroundColor;
  }

  const cardStyle: React.CSSProperties = {};
  if (cardBackgroundColor) {
    cardStyle.backgroundColor = cardBackgroundColor;
    cardStyle.borderColor = cardBackgroundColor !== '#ffffff' ? cardBackgroundColor : undefined;
  }

  const titleStyle: React.CSSProperties = {};
  if (titleColor) {
    titleStyle.color = titleColor;
  }

  const subtitleStyle: React.CSSProperties = {};
  if (subtitleColor) {
    subtitleStyle.color = subtitleColor;
  }

  return (
    <div 
      className={`${styles.verticalScroll} ${className}`}
      style={containerStyle}
    >
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.titleSection}>
            <h2 className={styles.title} style={titleStyle}>{title}</h2>
            {subtitle && (
              <p className={styles.subtitle} style={subtitleStyle}>{subtitle}</p>
            )}
          </div>
          {ctaText && (
            <button 
              className={styles.ctaButton} 
              onClick={onCtaClick}
              aria-label={ctaText}
              style={{
                borderColor: titleColor || undefined,
                color: titleColor || undefined
              }}
            >
              {ctaText}
              <ChevronRight size={16} />
            </button>
          )}
        </div>
        <div className={styles.navigationButtons}>
          <button 
            className={styles.navButton} 
            onClick={() => scroll('left')}
            aria-label="Scroll left"
            style={{
              borderColor: titleColor ? `${titleColor}40` : undefined,
              color: titleColor || undefined
            }}
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            className={styles.navButton} 
            onClick={() => scroll('right')}
            aria-label="Scroll right"
            style={{
              borderColor: titleColor ? `${titleColor}40` : undefined,
              color: titleColor || undefined
            }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className={styles.scrollWrapper}>
        <div className={styles.scrollContainer} ref={scrollContainerRef}>
          {items.map((item) => (
            <div key={item.id} className={styles.card} style={cardStyle}>
              <a href={item.link || '#'} className={styles.cardLink}>
                <div 
                  className={`${styles.cardImage} ${getResponsiveImageClass()}`}
                  style={getImageStyle()}
                >
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    loading="lazy"
                    className={styles.image}
                    style={{ objectFit: imageFit }}
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.mobileDots}>
        {items.slice(0, 8).map((item, index) => (
          <button 
            key={item.id} 
            className={`${styles.dot} ${index === 0 ? styles.active : ''}`}
            aria-label={`Go to slide ${index + 1}`}
            style={{
              backgroundColor: index === 0 ? (titleColor || undefined) : undefined
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default VerticalScroll;