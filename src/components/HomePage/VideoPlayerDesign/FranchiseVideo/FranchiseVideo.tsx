"use client";

import React, { useEffect, useRef, ReactNode } from 'react';
import Image from 'next/image';
import { Users, IndianRupee, Clock, ArrowRight, LucideIcon, Play } from 'lucide-react';
import styles from './FranchiseVideo.module.scss';

// Types
export interface StatItem {
  value: string;
  label: string;
  icon?: LucideIcon;
}

export interface BadgeItem {
  text: string;
  position: 'top-right' | 'bottom-left' | 'top-left' | 'bottom-right';
  backgroundColor?: string;
  color?: string;
}

export interface ButtonItem {
  label: string;
  variant?: 'primary' | 'secondary';
  icon?: ReactNode;
  onClick?: () => void;
}

export interface FranchiseVideoProps {
  // Content
  badgeText?: string;
  badgeIcon?: ReactNode;
  heading?: string;
  highlightText?: string;
  description?: string;
  stats?: StatItem[];
  buttons?: ButtonItem[];
  
  // Video
  videoSrc?: string;
  videoPoster?: string;
  videoTitle?: string;
  videoWidth?: number | string;
  videoHeight?: number | string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  controlsList?: string;
  aspectRatio?: string; // e.g., "16/9", "4/3", "21/9"
  objectFit?: 'cover' | 'contain' | 'fill';
  
  // Badges
  badges?: BadgeItem[];
  
  // Styling
  backgroundColor?: string;
  gradient?: string;
  overlayOpacity?: number;
  className?: string;
  
  // Wave
  showWave?: boolean;
  waveColor?: string;
  
  // Callbacks
  onButtonClick?: (buttonIndex: number) => void;
  onBadgeClick?: (badge: BadgeItem) => void;
  onVideoPlay?: () => void;
  onVideoPause?: () => void;
  
  // Children
  children?: ReactNode;
}

const FranchiseVideo: React.FC<FranchiseVideoProps> = ({
  // Content
  badgeText = "World's Largest Instant Delivery App Platform",
  badgeIcon,
  heading = "World's Largest #1",
  highlightText = "AI Powered",
  description = "Enjoy Premium Food and Dining at Premium Restaurants Fast and Easy Online Ordering on the HUFKO App",
  stats: customStats,
  buttons: customButtons,
  
  // Video
  videoSrc = "/videos/HUFKO_App_Demo.mp4",
  videoPoster = "/images/video-poster.jpg",
  videoTitle = "HUFKO App Demo",
  videoWidth = "100%",
  videoHeight = "100%",
  autoPlay = false,
  muted = false,
  loop = false,
  controls = true,
  controlsList = "nodownload",
  aspectRatio = "16/9",
  objectFit = "cover",
  
  // Badges
  badges: customBadges,
  
  // Styling
  backgroundColor,
  gradient = "linear-gradient(135deg, #055346 0%, #076b58 50%, #055346 100%)",
  overlayOpacity = 0.35,
  className = '',
  
  // Wave
  showWave = true,
  waveColor = "white",
  
  // Callbacks
  onButtonClick,
  onBadgeClick,
  onVideoPlay,
  onVideoPause,
  
  // Children
  children,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  // Default stats
  const defaultStats: StatItem[] = [
    { value: '3,00,000+', label: 'Franchise Partners', icon: Users },
    { value: '3 billion+', label: 'Min. Investment', icon: IndianRupee },
    { value: '0', label: 'Royalty Fee - 2 Years', icon: Clock },
  ];

  const stats = customStats || defaultStats;

  // Default buttons
  const defaultButtons: ButtonItem[] = [
    { label: 'Order Now', variant: 'primary', icon: <ArrowRight size={20} /> },
    { label: 'More', variant: 'secondary', icon: <ArrowRight size={20} /> },
  ];

  const buttons = customButtons || defaultButtons;

  // Default badges
  const defaultBadges: BadgeItem[] = [
    { text: '4.9/5 Rating', position: 'top-right', backgroundColor: '#ec2024', color: '#ffffff' },
    { text: '✓ FSSAI Certified', position: 'bottom-left', backgroundColor: '#ffffff', color: '#055346' },
  ];

  const badges = customBadges || defaultBadges;

  const handleButtonClick = (index: number, button: ButtonItem) => {
    if (button.onClick) {
      button.onClick();
    } else if (onButtonClick) {
      onButtonClick(index);
    }
  };

  const getBadgePositionClass = (position: string): string => {
    switch (position) {
      case 'top-right': return styles.badgeTopRight;
      case 'top-left': return styles.badgeTopLeft;
      case 'bottom-right': return styles.badgeBottomRight;
      case 'bottom-left': return styles.badgeBottomLeft;
      default: return styles.badgeTopRight;
    }
  };

  const getButtonVariantClass = (variant?: string): string => {
    switch (variant) {
      case 'secondary': return styles.applyButtonSecondary;
      default: return '';
    }
  };

  const handleVideoPlay = () => {
    onVideoPlay?.();
  };

  const handleVideoPause = () => {
    onVideoPause?.();
  };

  // Parse aspect ratio for CSS
  const getAspectRatio = () => {
    if (aspectRatio.includes('/')) {
      const [width, height] = aspectRatio.split('/').map(Number);
      return `${width} / ${height}`;
    }
    return aspectRatio;
  };

  return (
    <section 
      ref={sectionRef} 
      className={`${styles.franchiseSection} ${className}`}
      style={{
        background: backgroundColor || gradient,
      }}
    >
      {/* Background Blobs */}
      <div className={styles.blobContainer}>
        <div className={`${styles.blob} ${styles.blob1}`}></div>
        <div className={`${styles.blob} ${styles.blob2}`}></div>
        <div className={`${styles.blob} ${styles.blob3}`}></div>
      </div>

      <div 
        className={styles.overlay}
        style={{ 
          background: `rgba(0, 0, 0, ${overlayOpacity})` 
        }}
      ></div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Content */}
          <div className={`${styles.content} ${styles.animateOnScroll}`}>
            <div className={styles.badge}>
              {badgeIcon && <span className={styles.badgeIcon}>{badgeIcon}</span>}
              <span className={styles.badgeDot}></span>
              {badgeText}
            </div>

            <h1 className={styles.heading}>
              {heading}
              {highlightText && (
                <>
                  {' '}
                  <span className={styles.highlight}>{highlightText}</span>
                </>
              )}
              {children}
            </h1>

            {description && (
              <p className={styles.description}>{description}</p>
            )}

            {/* Buttons */}
            {buttons.length > 0 && (
              <div className={styles.actions}>
                {buttons.map((button, index) => (
                  <button
                    key={index}
                    onClick={() => handleButtonClick(index, button)}
                    className={`${styles.applyButton} ${getButtonVariantClass(button.variant)}`}
                  >
                    {button.label}
                    {button.icon && <span className={styles.buttonIcon}>{button.icon}</span>}
                  </button>
                ))}
              </div>
            )}

            {/* Stats */}
            <div className={styles.stats}>
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className={styles.statItem}>
                    {Icon && <Icon className={styles.statIcon} />}
                    <p className={styles.statValue}>{stat.value}</p>
                    <p className={styles.statLabel}>{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Video */}
          <div className={`${styles.videoWrapper} ${styles.animateOnScroll}`}>
            <div className={styles.videoCard}>
              <div 
                className={styles.videoContainer}
                style={{
                  aspectRatio: getAspectRatio(),
                }}
              >
                <video
                  ref={videoRef}
                  src={videoSrc}
                  poster={videoPoster}
                  title={videoTitle}
                  className={styles.video}
                  style={{
                    width: typeof videoWidth === 'number' ? `${videoWidth}px` : videoWidth,
                    height: typeof videoHeight === 'number' ? `${videoHeight}px` : videoHeight,
                    objectFit: objectFit,
                  }}
                  autoPlay={autoPlay}
                  muted={muted}
                  loop={loop}
                  controls={controls}
                  controlsList={controlsList}
                  playsInline
                  onPlay={handleVideoPlay}
                  onPause={handleVideoPause}
                />
                
                {!controls && (
                  <button 
                    className={styles.playButton}
                    onClick={() => {
                      if (videoRef.current) {
                        if (videoRef.current.paused) {
                          videoRef.current.play();
                        } else {
                          videoRef.current.pause();
                        }
                      }
                    }}
                    aria-label="Play or pause video"
                  >
                    <Play className={styles.playIcon} size={48} />
                  </button>
                )}
              </div>

              {/* Floating Badges */}
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className={`${styles.floatingBadge} ${getBadgePositionClass(badge.position)}`}
                  style={{
                    backgroundColor: badge.backgroundColor,
                    color: badge.color,
                  }}
                  onClick={() => onBadgeClick?.(badge)}
                >
                  {badge.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Wave SVG */}
      {showWave && (
        <div className={styles.waveContainer}>
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path 
              d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" 
              fill={waveColor}
            />
          </svg>
        </div>
      )}
    </section>
  );
};

export default FranchiseVideo;