// components/FoodDelivery/FoodDesigns/HeroBannerFood/HeroBannerFood.tsx
'use client';

import React from 'react';
import styles from './HeroBannerFood.module.scss';
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

export interface FoodBannerItem {
  id: string;
  /** Big title text, e.g. "Order Food Online in Bangalore" */
  title: string;
  /** Small label near the logo, e.g. "Food" */
  category: string;
  /** Optional subtitle below the title */
  subtitle?: string;
  /** Optional discount/badge text (hidden by default in food variant) */
  discount?: string;
  /** Background image URL (full-bleed hero image) */
  imgUrl: string;
  /** Optional icon/logo image shown next to the category label */
  logoSrc?: string;
  href?: string;
  align?: 'left' | 'right';
}

interface HeroBannerFoodProps {
  banners: FoodBannerItem[];
  defaultAlign?: 'left' | 'right';
}

const HeroBannerFood: React.FC<HeroBannerFoodProps> = ({
  banners,
  defaultAlign = 'left',
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
                className={`${styles.bannerItem} ${
                  align === 'right' ? styles.rightAlign : styles.leftAlign
                }`}
                style={{ backgroundImage: `url(${banner.imgUrl})` }}
              >
                <a
                  href={banner.href || '#'}
                  className={styles.bannerLink}
                  onClick={(e) => !banner.href && e.preventDefault()}
                >
                  {/* Top-left: logo + category label */}
                  <div className={styles.brandRow}>
                    {banner.logoSrc && (
                      <img
                        src={banner.logoSrc}
                        alt={banner.category}
                        className={styles.brandLogo}
                      />
                    )}
                    {/* <span className={styles.brandLabel}>{banner.category}</span> */}
                  </div>

                  {/* Bottom-left: main title + optional subtitle */}
                  <div className={styles.bannerContent}>
                    <h1 className={styles.title}>{banner.title}</h1>
                    {banner.subtitle && (
                      <p className={styles.subtitle}>{banner.subtitle}</p>
                    )}
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

export default HeroBannerFood;