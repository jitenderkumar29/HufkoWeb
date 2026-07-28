// src/components/HomePage/PoweringSlides/PoweringSlides.tsx
"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
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
    id: 'zomato',
    name: 'zomato',
    logo: '/icons/eternal_slide_1.png',
    description: 'Get the app now to start ordering your favorite dishes!',
    link: '/',
    bgGradient: 'from-zRed100 to-roseWhite',
    borderColor: 'border-red-100',
    blurColor: '#FFC6CD'
  },
  {
    id: 'blinkit',
    name: 'blinkit',
    logo: '/icons/eternal_slide_2.png',
    description: 'Choose from 30,000+ products & get them delivered at your doorstep',
    link: '/',
    bgGradient: 'from-[#FFF9E5] to-[#FFF9E5]',
    borderColor: 'border-[#FAECBD]',
    blurColor: '#FFEEAF'
  },
  {
    id: 'district',
    name: 'district',
    logo: '/icons/eternal_slide_3.png',
    description: 'The best of events, movies, dining, and everything you love!',
    link: '/',
    bgGradient: 'from-[#F2ECFF] to-[#FAF8FE]',
    borderColor: 'border-[#DFCFFF]',
    blurColor: '#DFCFFF'
  },
  {
    id: 'hyperpure',
    name: 'hyperpure',
    logo: '/icons/eternal_slide_4.png',
    description: 'Offering complete supply chain solution for your restaurant',
    link: '/',
    bgGradient: 'from-zRed100 to-roseWhite',
    borderColor: 'border-red-100',
    blurColor: '#FFC6CD'
  }
];

const PoweringSlides: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <div ref={sectionRef} className={styles.poweringSlides}>
      {/* Eternal Logo */}
      <div className={styles.logoWrapper}>
        <Image
          src="/icons/eternal_hufko.png"
          alt="Eternal Logo"
          width={200}
          height={50}
          className={styles.eternalLogo}
          priority
        />
      </div>

      {/* Divider with Text */}
      <div className={styles.dividerWrapper}>
        <div className={styles.dividerLine}></div>
        <div className={styles.dividerText}>
          POWERING INDIA'S <br /> CHANGING LIFESTYLES
        </div>
        <div className={styles.dividerLine}></div>
      </div>

      {/* Brands Grid */}
      <div className={styles.brandsGrid}>
        {brands.map((brand, index) => (
          <a
            key={brand.id}
            href={brand.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.brandCard} ${styles.animateOnScroll}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
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
  );
};

export default PoweringSlides;