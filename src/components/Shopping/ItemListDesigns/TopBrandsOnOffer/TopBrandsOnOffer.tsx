// TopBrandsOnOffer.tsx
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './TopBrandsOnOffer.module.scss';

export interface BrandItem {
  id: string;
  name: string;
  logo: string;
  discount: string;
  url: string;
  alt?: string;
  category?: string;
}

export interface TopBrandsOnOfferProps {
  /** Array of brand items to display */
  brands: BrandItem[];
  /** Title of the section */
  title?: string;
  /** Subtitle of the section */
  subtitle?: string;
  /** Number of columns per row */
  columns?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
    largeDesktop?: number;
  };
  /** Number of rows to display */
  rows?: number;
  /** Background color of the section */
  backgroundColor?: string;
  /** Text color for the title */
  titleColor?: string;
  /** Custom CSS class for the container */
  className?: string;
  /** Custom render function for each brand */
  renderBrand?: (brand: BrandItem) => React.ReactNode;
  /** Callback when a brand is clicked */
  onBrandClick?: (brand: BrandItem) => void;
  /** Callback when a brand is hovered */
  onBrandHover?: (brand: BrandItem | null) => void;
  /** Gap between items in pixels */
  gap?: number;
  /** Card padding in pixels */
  cardPadding?: number;
}

const TopBrandsOnOffer: React.FC<TopBrandsOnOfferProps> = ({
  brands,
  title = '',
  subtitle = '',
  columns = {
    mobile: 2,
    tablet: 3,
    desktop: 4,
    largeDesktop: 6,
  },
  rows = 2,
  backgroundColor = '#7739B5',
  titleColor = '#ffffff',
  className = '',
  renderBrand,
  onBrandClick,
  onBrandHover,
  gap = 12,
  cardPadding = 8,
}) => {
  const [columnsCount, setColumnsCount] = useState(4);

  // Calculate columns based on viewport
  const calculateColumns = useCallback(() => {
    const width = window.innerWidth;

    if (width >= 1280 && columns.largeDesktop) {
      return columns.largeDesktop;
    } else if (width >= 1024 && columns.desktop) {
      return columns.desktop;
    } else if (width >= 768 && columns.tablet) {
      return columns.tablet;
    } else {
      return columns.mobile || 2;
    }
  }, [columns]);

  // Handle brand click
  const handleBrandClick = useCallback((brand: BrandItem) => {
    if (onBrandClick) {
      onBrandClick(brand);
    }
  }, [onBrandClick]);

  // Handle brand hover
  const handleBrandHover = useCallback((brand: BrandItem | null) => {
    if (onBrandHover) {
      onBrandHover(brand);
    }
  }, [onBrandHover]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      const newColumns = calculateColumns();
      setColumnsCount(newColumns);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [calculateColumns]);

  // Default brand renderer
  const defaultRenderBrand = (brand: BrandItem) => {
    return (
      <a
        href={brand.url}
        className={styles.brandLink}
        onClick={(e) => {
          if (onBrandClick) {
            e.preventDefault();
            handleBrandClick(brand);
          }
        }}
        onMouseEnter={() => handleBrandHover(brand)}
        onMouseLeave={() => handleBrandHover(null)}
        aria-label={`${brand.name} - ${brand.discount}`}
      >
        <div className={styles.brandImageWrapper}>
          <Image
            src={brand.logo}
            alt={brand.alt || brand.name}
            fill
            sizes="(max-width: 480px) 45vw, (max-width: 768px) 30vw, (max-width: 1024px) 22vw, 16vw"
            className={styles.brandImage}
            loading="lazy"
          />
          {/* <div className={styles.brandInfo}>
            <span className={styles.brandName}>{brand.name}</span>
            <span className={styles.brandDiscount}>{brand.discount}</span>
          </div> */}
        </div>
      </a>
    );
  };

  const containerStyle = {
    backgroundColor,
  };

  const titleStyle = {
    color: titleColor,
  };

  // Calculate grid template columns
  const gridStyle = {
    gridTemplateColumns: `repeat(${columnsCount}, 1fr)`,
    gap: `${gap}px`,
  };

  return (
    <div 
      className={`${styles.topBrandsContainer} ${className}`}
      style={containerStyle}
    >
      <div className={styles.sectionWrapper}>
        {(title || subtitle) && (
          <div className={styles.sectionHeader}>
            {title && (
              <h2 className={styles.sectionTitle} style={titleStyle}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={styles.sectionSubtitle}>
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div 
          className={styles.brandsGrid}
          style={gridStyle}
        >
          {brands.map((brand) => (
            <div
              key={brand.id}
              className={styles.brandCard}
              style={{
                padding: `${cardPadding}px`,
              }}
            >
              {renderBrand 
                ? renderBrand(brand)
                : defaultRenderBrand(brand)
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBrandsOnOffer;