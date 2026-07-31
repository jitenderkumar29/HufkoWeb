// src/components/HomePage/WelcomeHufko/WelcomeVideoHufko.tsx
import React, { useState, useEffect } from 'react';
import { FaArrowDown } from 'react-icons/fa6';
import styles from './WelcomeVideoHufko.module.scss';
import Image from 'next/image';

interface WelcomeVideoHufkoProps {
  /**
   * Controls whether the logo is displayed
   * @default true
   */
  showLogo?: boolean;
  
  /**
   * Controls whether the App Store button is displayed
   * @default true
   */
  showAppStore?: boolean;
  
  /**
   * Controls whether the Google Play button is displayed
   * @default true
   */
  showPlayStore?: boolean;
  
  /**
   * Custom video source URL
   * @default "/videos/food_hufko.mp4"
   */
  videoSrc?: string;
  
  /**
   * Custom logo image source
   * @default "/icons/logo_video.png"
   */
  logoSrc?: string;
  
  /**
   * Custom title text
   * @default "World's #1"
   */
  title?: string;
  
  /**
   * Custom highlighted title text
   * @default "Premium food delivery app"
   */
  titleHighlight?: string;
  
  /**
   * Custom subtitle text
   * @default "Enjoy fast online ordering on the Hufko app"
   */
  subtitle?: string;
  
  /**
   * App Store link URL
   * @default "#"
   */
  appStoreLink?: string;
  
  /**
   * Google Play link URL
   * @default "#"
   */
  playStoreLink?: string;
  
  /**
   * Additional CSS class for custom styling
   */
  className?: string;
  
  /**
   * Whether to auto-play the video
   * @default true
   */
  autoPlay?: boolean;
  
  /**
   * Whether to loop the video
   * @default true
   */
  loop?: boolean;
  
  /**
   * Whether the video is muted
   * @default true
   */
  muted?: boolean;
}

const WelcomeVideoHufko: React.FC<WelcomeVideoHufkoProps> = ({
  showLogo = true,
  showAppStore = true,
  showPlayStore = true,
  videoSrc = '/videos/food_hufko.mp4',
  logoSrc = '/icons/logo_video.png',
  title = "World's #1",
  titleHighlight = 'Premium food delivery app',
  subtitle = 'Enjoy fast online ordering on the Hufko app',
  appStoreLink = '#',
  playStoreLink = '#',
  className = '',
  autoPlay = true,
  loop = true,
  muted = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`${styles.welcomeHufko} ${className}`}>
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <video 
            autoPlay={autoPlay} 
            loop={loop} 
            muted={muted} 
            playsInline 
            className={styles.heroVideo}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={styles.heroContent}>
          {showLogo && (
            <div className={styles.logoWrapper}>
              <Image 
                src={logoSrc}  
                alt="Hufko Logo" 
                className={styles.heroLogo}
                priority
                width={200}
                height={60}
              />
            </div>
          )}
          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleHighlight}>{titleHighlight}</span>
            <br />
            {title}
          </h1>
          
          <p className={styles.heroSubtitle}>
            {subtitle}
          </p>
          
          {(showAppStore || showPlayStore) && (
            <div className={styles.appButtons}>
              {showAppStore && (
                <a 
                  href={appStoreLink} 
                  className={styles.appButton} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
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
              )}
              
              {showPlayStore && (
                <a 
                  href={playStoreLink} 
                  className={`${styles.appButton} ${styles.appButtonGoogle}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
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
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default WelcomeVideoHufko;