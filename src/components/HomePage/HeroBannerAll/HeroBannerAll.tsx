import React from 'react';
import styles from './HeroBannerAll.module.scss';
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

interface BannerItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  discount: string;
  imgUrl: string;
  href?: string;
}

interface HeroBannerAllProps {
  banners: BannerItem[];
  height?: number | string; // Optional height prop
  aspectRatio?: number; // Optional aspect ratio (width/height)
  maxHeight?: number | string; // Optional max height
  minHeight?: number | string; // Optional min height
}

const HeroBannerAll: React.FC<HeroBannerAllProps> = ({ 
  banners, 
  height, 
  aspectRatio,
  maxHeight,
  minHeight 
}) => {
  const swiperRef = React.useRef<SwiperRef>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = React.useState<number | string | undefined>(height);

  React.useEffect(() => {
    // If height is provided, use it
    if (height) {
      setContainerHeight(height);
      return;
    }

    // If aspect ratio is provided, calculate height based on container width
    if (aspectRatio && containerRef.current) {
      const updateHeight = () => {
        const width = containerRef.current?.clientWidth || 0;
        if (width > 0) {
          const calculatedHeight = width / aspectRatio;
          setContainerHeight(calculatedHeight);
        }
      };

      updateHeight();
      window.addEventListener('resize', updateHeight);
      return () => window.removeEventListener('resize', updateHeight);
    }

    // Default: use the first banner image to determine height
    if (banners.length > 0) {
      const img = new Image();
      img.src = banners[0].imgUrl;
      img.onload = () => {
        if (containerRef.current) {
          const width = containerRef.current.clientWidth || 1200;
          const imgAspectRatio = img.width / img.height;
          const calculatedHeight = width / imgAspectRatio;
          setContainerHeight(calculatedHeight);
        }
      };
      img.onerror = () => {
        // Fallback height if image fails to load
        setContainerHeight(350);
      };
    }
  }, [height, aspectRatio, banners]);

  if (banners.length === 0) return null;

  const style: React.CSSProperties = {};
  if (containerHeight) {
    style.height = typeof containerHeight === 'number' ? `${containerHeight}px` : containerHeight;
  }
  if (maxHeight) {
    style.maxHeight = typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight;
  }
  if (minHeight) {
    style.minHeight = typeof minHeight === 'number' ? `${minHeight}px` : minHeight;
  }

  return (
    <div 
      ref={containerRef}
      className={styles.heroBanner} 
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
              style={{ backgroundImage: `url(${banner.imgUrl})` }}
            >
              <a
                href={banner.href || '#'}
                className={styles.bannerLink}
                onClick={(e) => !banner.href && e.preventDefault()}
              >
                <div className={styles.bannerContent}>
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

export default HeroBannerAll;