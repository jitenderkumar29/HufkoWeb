import React from 'react';
import styles from './HeroBannerLeftContent.module.scss';
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

export interface BannerItemContent {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  discount: string;
  imgUrl: string;
  href?: string;
  align?: 'left' | 'right';
}

interface HeroBannerLeftContentProps {
  banners: BannerItemContent[];
  defaultAlign?: 'left' | 'right';
}

const HeroBannerLeftContent: React.FC<HeroBannerLeftContentProps> = ({ 
  banners, 
  defaultAlign = 'left' 
}) => {
  const swiperRef = React.useRef<SwiperRef>(null);

  if (banners.length === 0) return null;

  return (
    <div className={styles.heroBanner}>
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
        {banners.map((banner) => {
          const align = banner.align || defaultAlign;
          return (
            <SwiperSlide key={banner.id} className={styles.swiperSlide}>
              <div
                className={`${styles.bannerItem} ${align === 'right' ? styles.rightAlign : styles.leftAlign}`}
                style={{ backgroundImage: `url(${banner.imgUrl})` }}
              >
                <a
                  href={banner.href || '#'}
                  className={styles.bannerLink}
                  onClick={(e) => !banner.href && e.preventDefault()}
                >
                  <div className={styles.bannerContent}>
                    <div className={styles.discountBadge}>{banner.discount}</div>
                    {/* <div className={styles.saleText}>SALE</div> */}
                    <div className={styles.category}>{banner.category}</div>
                    <div className={styles.subtitle}>{banner.subtitle}</div>
                    <div className={styles.offText}>{banner.title}</div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          );
        })}
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

export default HeroBannerLeftContent;