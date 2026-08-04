// src/components/HomePage/PoweringSlides/PoweringSlides.tsx
"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './PoweringSlides.module.scss';

interface Brand {
  id: string;
  name: string;
  logo: string;
  description: string;
  link: string;
  bgGradient: string;
  borderColor: string;
  blurColor: string;
}

const brands: Brand[] = [
  {
    id: 'food',
    name: 'Food Delivery',
    logo: '/icons/eternal_slide_1.png',
    description: 'Get the app now to start ordering your favorite dishes from top restaurants!',
    link: '/',
    bgGradient: 'from-zRed100 to-roseWhite',
    borderColor: 'border-red-100',
    blurColor: '#FFC6CD'
  },
  {
    id: 'grocery',
    name: 'Grocery Delivery',
    logo: '/icons/eternal_slide_2.png',
    description: 'Shop from 30,000+ products including fresh vegetables, fruits & daily essentials delivered to your doorstep',
    link: '/',
    bgGradient: 'from-[#FFF9E5] to-[#FFF9E5]',
    borderColor: 'border-[#FAECBD]',
    blurColor: '#FFEEAF'
  },
  {
    id: 'shopping',
    name: 'Shopping',
    logo: '/icons/eternal_slide_3.png',
    description: 'Discover the best of events, movies, dining, and everything you love in one place!',
    link: '/',
    bgGradient: 'from-[#F2ECFF] to-[#FAF8FE]',
    borderColor: 'border-[#DFCFFF]',
    blurColor: '#DFCFFF'
  },
  {
    id: 'flower',
    name: 'Flower Delivery',
    logo: '/icons/eternal_slide_4.png',
    description: 'Send beautiful flowers and thoughtful gifts to your loved ones with same-day delivery',
    link: '/',
    bgGradient: 'from-zRed100 to-roseWhite',
    borderColor: 'border-red-100',
    blurColor: '#FFC6CD'
  },{
    id: 'care',
    name: 'Care Services',
    logo: '/icons/eternal_slide_5.png',
    description: 'Access premium healthcare services, doctor consultations, and wellness programs from the comfort of your home',
    link: '/',
    bgGradient: 'from-blue-100 to-blue-50',
    borderColor: 'border-blue-200',
    blurColor: '#95c6f3'
  },
  {
    id: 'pharma',
    name: 'Pharma',
    logo: '/icons/eternal_slide_6.png',
    description: 'Order genuine medicines, health supplements, and wellness products with fast and reliable delivery',
    link: '/',
    bgGradient: 'from-green-100 to-green-50',
    borderColor: 'border-green-200',
    blurColor: '#ace87f'
  },
  {
    id: 'wholesale',
    name: 'Wholesale',
    logo: '/icons/eternal_slide_7.png',
    description: 'Bulk ordering solutions for businesses with competitive pricing and seamless supply chain management',
    link: '/',
    bgGradient: 'from-rose-100 to-rose-50',
    borderColor: 'border-rose-200',
    blurColor: '#e66876'
  }
];

const PoweringSlides: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

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

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth * 0.8;
    const targetScroll = direction === 'left' 
      ? container.scrollLeft - scrollAmount
      : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const hasLeftScroll = container.scrollLeft > 20;
    const hasRightScroll = container.scrollLeft < container.scrollWidth - container.clientWidth - 20;

    setShowLeftArrow(hasLeftScroll);
    setShowRightArrow(hasRightScroll);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      // Check scroll state after render and on resize
      handleScroll();
      
      // Also check on window resize
      window.addEventListener('resize', handleScroll);
      
      return () => {
        container.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
      };
    }
  }, []);

  return (
    <div ref={sectionRef} className={styles.poweringSlides}>
      {/* Eternal Logo */}
      <div className={styles.logoWrapper}>
        <Image
          src="/icons/hufko_logo.png"
          alt="Eternal Logo"
          width={150}
          height={40}
          className={styles.eternalLogo}
          priority
        />
      </div>

      {/* Divider with Text */}
      <div className={styles.dividerWrapper}>
        <div className={styles.dividerLine}></div>
        <div className={styles.dividerText}>
          Changing people's <br /> luxury lifestyles
        </div>
        <div className={styles.dividerLine}></div>
      </div>

      {/* Brands Carousel with Navigation */}
      <div className={styles.carouselWrapper}>
        {/* Navigation Buttons - Always visible on desktop */}
        <div className={styles.navigationButtons}>
          <button 
            className={`${styles.navButton} ${styles.navButtonLeft}`}
            onClick={() => scroll('left')}
            aria-label="Scroll left"
            style={{ opacity: showLeftArrow ? 1 : 0.3, pointerEvents: showLeftArrow ? 'auto' : 'none' }}
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            className={`${styles.navButton} ${styles.navButtonRight}`}
            onClick={() => scroll('right')}
            aria-label="Scroll right"
            style={{ opacity: showRightArrow ? 1 : 0.3, pointerEvents: showRightArrow ? 'auto' : 'none' }}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Brands Grid - Horizontal Scroll */}
        <div 
          ref={scrollContainerRef}
          className={styles.brandsScrollContainer}
        >
          <div className={styles.brandsGrid}>
            {brands.map((brand, index) => (
              <a
                key={brand.id}
                href={brand.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.brandCard} ${styles.animateOnScroll}`}
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                {/* Blur Background */}
                <div 
                  className={styles.blurBackground}
                  style={{ backgroundColor: brand.blurColor }}
                ></div>
                
                {/* Brand Logo */}
                <div className={styles.brandLogoWrapper}>
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={120}
                    height={120}
                    className={styles.brandLogo}
                  />
                </div>

                {/* Brand Content */}
                <div className={styles.brandContent}>
                  <h3 className={styles.brandName}>{brand.name}</h3>
                  <p className={styles.brandDescription}>{brand.description}</p>
                  <div className={styles.brandAction}>
                    <span>Check it out</span>
                    <ArrowRight size={18} className={styles.actionIcon} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoweringSlides;