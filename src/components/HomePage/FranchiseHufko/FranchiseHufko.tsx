"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Users, IndianRupee, Clock, ArrowRight } from 'lucide-react';
import styles from './FranchiseHufko.module.scss';

interface FranchiseHufkoProps {
  onApplyClick?: () => void;
}

const FranchiseHufko: React.FC<FranchiseHufkoProps> = ({ onApplyClick }) => {
  const sectionRef = useRef<HTMLElement>(null);

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

  const stats = [
    { value: '3,00,000+', label: 'Franchise Partners', icon: Users },
    { value: '3 billion+', label: 'Min. Investment', icon: IndianRupee },
    { value: '0', label: 'Royalty Fee - 2 Years', icon: Clock },
  ];

  return (
    <section ref={sectionRef} className={styles.franchiseSection}>
      {/* Background Blobs */}
      <div className={styles.blobContainer}>
        <div className={`${styles.blob} ${styles.blob1}`}></div>
        <div className={`${styles.blob} ${styles.blob2}`}></div>
        <div className={`${styles.blob} ${styles.blob3}`}></div>
      </div>

      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Content */}
          <div className={`${styles.content} ${styles.animateOnScroll}`}>
            <div className={styles.badge}>
              <span className={styles.badgeDot}></span>
              World's Largest Instant Delivery App Platform
            </div>

            <h1 className={styles.heading}>
              World's Largest #1
              <span className={styles.highlight}> AI Powered </span>
              Premium <br />Food Delivery Technology Platform
            </h1>

            <p className={styles.description}>
              Enjoy Premium Food and Dining at Premium Restaurants Fast and Easy Online Ordering on the HUFKO App
            </p>

            {/* Buttons in one row */}
            <div className={styles.actions}>
              <button onClick={onApplyClick} className={styles.applyButton}>
                Order Now <ArrowRight size={20} />
              </button>
              <button onClick={onApplyClick} className={`${styles.applyButton} ${styles.applyButtonSecondary}`}>
                More <ArrowRight size={20} />
              </button>
            </div>

            <div className={styles.stats}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.statItem}>
                  <p className={styles.statValue}>{stat.value}</p>
                  <p className={styles.statLabel}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className={`${styles.imageWrapper} ${styles.animateOnScroll}`}>
            <div className={styles.imageCard}>
              {/* Desktop Image */}
              <div className={styles.desktopImage}>
                <Image
                  src="/icons/HUFKO_Store.png"
                  alt="HUFKO Store"
                  width={600}
                  height={400}
                  className={styles.image}
                  priority
                />
              </div>

              {/* Mobile Image */}
              <div className={styles.mobileImage}>
                <Image
                  src="/icons/HUFKO_Store.png"
                  alt="HUFKO Store Mobile"
                  width={400}
                  height={300}
                  className={styles.image}
                  priority
                />
              </div>

              {/* Floating Badges */}
              <div className={`${styles.floatingBadge} ${styles.badgeTopRight}`}>
                <span>4.9/5 Rating</span>
              </div>

              <div className={`${styles.floatingBadge} ${styles.badgeBottomLeft}`}>
                <span>✓ FSSAI Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave SVG */}
      <div className={styles.waveContainer}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
};

export default FranchiseHufko;