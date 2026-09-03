// components/FoodDelivery/FoodDesigns/FoodBanner/FoodBanner.tsx
import React, { useState, useEffect, useRef } from 'react';
import styles from './FoodBanner.module.scss';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/effect-fade';
// @ts-ignore
import 'swiper/css/navigation';
// @ts-ignore
import 'swiper/css/pagination';

interface FoodBannerItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  discount: string;
  imgUrl: string;
  href?: string;
}

interface FoodBannerProps {
  banners: FoodBannerItem[];
  maxHeight?: number | string;
  minHeight?: number | string;
}

const FoodBanner: React.FC<FoodBannerProps> = ({ 
  banners, 
  maxHeight,
  minHeight 
}) => {
  const swiperRef = useRef<SwiperRef>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState<number | string | undefined>('auto');

  useEffect(() => {
    if (banners.length > 0 && containerRef.current) {
      const img = new Image();
      img.src = banners[0].imgUrl;
      img.onload = () => {
        const width = containerRef.current?.clientWidth || window.innerWidth;
        const aspectRatio = img.width / img.height;
        const calculatedHeight = width / aspectRatio;
        setContainerHeight(calculatedHeight);
      };
      img.onerror = () => {
        setContainerHeight(350);
      };
    }
  }, [banners]);

  // Recalculate height on window resize
  useEffect(() => {
    const handleResize = () => {
      if (banners.length > 0 && containerRef.current) {
        const img = new Image();
        img.src = banners[0].imgUrl;
        img.onload = () => {
          const width = containerRef.current?.clientWidth || window.innerWidth;
          const aspectRatio = img.width / img.height;
          const calculatedHeight = width / aspectRatio;
          setContainerHeight(calculatedHeight);
        };
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [banners]);

  if (banners.length === 0) return null;

  const style: React.CSSProperties = {
    width: '100%',
    height: typeof containerHeight === 'number' ? `${containerHeight}px` : containerHeight,
  };

  if (maxHeight) {
    style.maxHeight = typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight;
  }
  if (minHeight) {
    style.minHeight = typeof minHeight === 'number' ? `${minHeight}px` : minHeight;
  }

  return (
    <div 
      ref={containerRef}
      className={styles.foodBanner} 
      style={style}
    >
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={banners.length > 1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={1000}
        navigation={{
          nextEl: `.${styles.nextButton}`,
          prevEl: `.${styles.prevButton}`,
        }}
        pagination={{
          clickable: true,
          el: `.${styles.pagination}`,
          bulletClass: styles.paginationDot,
          bulletActiveClass: styles.activeDot,
          renderBullet: (index, className) => {
            return `<div class="${className}"></div>`;
          },
        }}
        className={styles.swiperContainer}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id} className={styles.swiperSlide}>
            <div
              className={styles.bannerItem}
              style={{ 
                backgroundImage: `url(${banner.imgUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100%',
              }}
            >
              <a
                href={banner.href || '#'}
                className={styles.bannerLink}
                onClick={(e) => !banner.href && e.preventDefault()}
              >
                <div className={styles.bannerContent}>
                  {/* Content is commented out to match original */}
                  {/* <div className={styles.discountBadge}>{banner.discount}</div>
                  <div className={styles.saleText}>SALE</div>
                  <div className={styles.category}>{banner.category}</div>
                  <div className={styles.subtitle}>{banner.subtitle}</div>
                  <div className={styles.offText}>{banner.title}</div> */}
                </div>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {banners.length > 1 && (
        <>
          <button
            className={styles.prevButton}
            aria-label="Previous Slide"
            title="Previous Slide"
          >
            <FaChevronLeft />
          </button>
          <button
            className={styles.nextButton}
            aria-label="Next Slide"
            title="Next Slide"
          >
            <FaChevronRight />
          </button>

          <div className={styles.pagination} />
        </>
      )}
    </div>
  );
};

export default FoodBanner;