// src/components/HomePage/WelcomeHufko/WelcomeHufko.tsx
import React, { useState, useEffect } from 'react';
import { FaArrowDown } from 'react-icons/fa6';
import styles from './WelcomeHufko.module.scss';
import Image from 'next/image';

const WelcomeHufko: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={styles.welcomeHufko}>
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <video autoPlay loop muted playsInline className={styles.heroVideo}>
            <source src="/videos/food_hufko.mp4" type="video/mp4" />
          </video>
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={styles.heroContent}>
          <div className={styles.logoWrapper}>
            <Image 
              src="/icons/logo_video.png"  
              alt="Hufko Logo" 
              className={styles.heroLogo}
              priority
              width={200}
              height={60}
            />
          </div>
          <h1 className={styles.heroTitle}>
            World's #1 <br />
            <span className={styles.heroTitleHighlight}>Premium food delivery app</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Enjoy fast online ordering <br />
            on the Hufko app
          </p>
          <div className={styles.appButtons}>
            <a href="#" className={styles.appButton} target="_blank" rel="noopener noreferrer">
              <Image 
                src="/icons/app_store.png"  
                alt="Download on the App Store" 
                className={styles.storeButton}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 'auto', height: 'auto' }}
                priority
              />
            </a>
            <a href="#" className={`${styles.appButton} ${styles.appButtonGoogle}`} target="_blank" rel="noopener noreferrer">
              <Image 
                src="/icons/play_store.png"  
                alt="Get it on Google Play" 
                className={styles.storeButton}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 'auto', height: 'auto' }}
                priority
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WelcomeHufko;