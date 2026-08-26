'use client';

import React from 'react';
import { Video, Sparkles, Shield, CheckCircle2, Play, Award, Star } from 'lucide-react';
import styles from './CardFranchise.module.scss';

export interface CardFranchiseProps {
  videoSrc: string;
  videoPoster: string;
  title: string;
  features: string[];
  icon?: React.ReactNode;
  iconName?: 'sparkles' | 'shield' | 'award' | 'star';
  variant?: 'default' | 'primary' | 'secondary';
  imagePosition?: 'left' | 'right';
  bgVariant?: 'light' | 'dark' | 'gradient';
  className?: string;
  showPlayButton?: boolean;
  onVideoLoad?: () => void;
  onVideoError?: () => void;
  onPlayClick?: () => void;
}

const CardFranchise: React.FC<CardFranchiseProps> = ({
  videoSrc,
  videoPoster,
  title,
  features,
  icon,
  iconName,
  variant = 'default',
  imagePosition = 'left',
  bgVariant = 'light',
  className = '',
  showPlayButton = false,
  onVideoLoad,
  onVideoError,
  onPlayClick,
}) => {
  const getIcon = () => {
    if (icon) return icon;
    switch (iconName) {
      case 'sparkles': return <Sparkles size={20} />;
      case 'shield': return <Shield size={20} />;
      case 'award': return <Award size={20} />;
      case 'star': return <Star size={20} />;
      default: return <Sparkles size={20} />;
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary': return styles.primary;
      case 'secondary': return styles.secondary;
      default: return '';
    }
  };

  const getBgVariantStyles = () => {
    switch (bgVariant) {
      case 'dark': return styles.bgDark;
      case 'gradient': return styles.bgGradient;
      default: return styles.bgLight;
    }
  };

  // ✅ CRITICAL FIX: Use a simple conditional class
  const isRight = imagePosition === 'right';
  const positionClass = isRight ? styles.imageRight : styles.imageLeft;

  const cardClasses = [
    styles.cardFranchise,
    positionClass,
    getBgVariantStyles(),
    getVariantStyles(),
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClasses} role="article" aria-label={`Card: ${title}`}>
      {/* Video Section */}
      <div className={styles.mediaSection}>
        <div className={styles.videoWrapper}>
          <video
            width="480"
            autoPlay
            muted
            loop
            playsInline
            webkit-playsinline="true"
            poster={videoPoster}
            className={styles.videoPlayer}
            onLoadedData={onVideoLoad}
            onError={onVideoError}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {showPlayButton && (
            <button 
              className={styles.playOverlay}
              onClick={onPlayClick}
              aria-label="Play video"
            >
              <Play size={28} />
            </button>
          )}

          {/* <div className={styles.videoBadge}>
            <Video size={14} />
            <span>HD</span>
          </div> */}
        </div>
      </div>

      {/* Content Section */}
      <div className={styles.contentSection}>
        <div className={styles.titleWrapper}>
          <span className={styles.titleIcon}>{getIcon()}</span>
          <h5 className={styles.title}>{title}</h5>
        </div>

        <ul className={styles.featuresList}>
          {features.map((feature, index) => (
            <li key={index} className={styles.featureItem}>
              <CheckCircle2 size={18} className={styles.featureIcon} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className={styles.decorativeLine} />
      </div>
    </div>
  );
};

export default CardFranchise;