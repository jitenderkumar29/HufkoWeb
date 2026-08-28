// components/VideoPlayerSlide/VideoPlayerSlide.tsx
import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import styles from './VideoPlayerSlide.module.scss';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  className?: string;
  aspectRatio?: '16:9' | '4:3' | '1:1' | '21:9' | '9:16' | '3:4' | 'custom';
  customRatio?: number; // For custom aspect ratio, e.g., 1.5 for 3:2
  height?: string | number; // Fixed height in px or vh
  maxHeight?: string | number;
  minHeight?: string | number;
  width?: string | number;
  maxWidth?: string | number;
  fit?: 'cover' | 'contain' | 'fill';
  onMuteToggle?: (isMuted: boolean) => void;
  onPlay?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
}

const VideoPlayerSlide: React.FC<VideoPlayerProps> = ({
  src,
  poster,
  autoPlay = true,
  muted = true,
  loop = true,
  className = '',
  aspectRatio = '16:9',
  customRatio,
  height,
  maxHeight,
  minHeight,
  width,
  maxWidth,
  fit = 'cover',
  onMuteToggle,
  onPlay,
  onPause,
  onEnded,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(muted);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Calculate aspect ratio percentage
  const getAspectRatio = (): number => {
    if (customRatio) return customRatio;
    
    const ratios: Record<string, number> = {
      '16:9': 9 / 16,
      '4:3': 3 / 4,
      '1:1': 1,
      '21:9': 9 / 21,
      '9:16': 16 / 9,
      '3:4': 4 / 3,
    };
    return ratios[aspectRatio] || 9 / 16;
  };

  // Build dynamic styles
  const getContainerStyles = (): React.CSSProperties => {
    const styles: React.CSSProperties = {};

    // Handle fixed dimensions
    if (height) {
      styles.height = typeof height === 'number' ? `${height}px` : height;
      styles.aspectRatio = 'auto';
    } else if (width) {
      styles.width = typeof width === 'number' ? `${width}px` : width;
      styles.aspectRatio = 'auto';
    } else {
      // Use aspect ratio
      const ratio = getAspectRatio();
      styles.aspectRatio = `${16 / ratio} / 16`; // Convert to aspect-ratio CSS property
      styles.width = '100%';
    }

    // Apply max/min constraints
    if (maxHeight) {
      styles.maxHeight = typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight;
    }
    if (minHeight) {
      styles.minHeight = typeof minHeight === 'number' ? `${minHeight}px` : minHeight;
    }
    if (maxWidth) {
      styles.maxWidth = typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth;
    }

    return styles;
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      setIsPlaying(true);
      if (onPlay) onPlay();
    };
    
    const handlePause = () => {
      setIsPlaying(false);
      if (onPause) onPause();
    };
    
    const handleVolumeChange = () => {
      setIsMuted(video.muted);
    };

    const handleEnded = () => {
      if (onEnded) onEnded();
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('volumechange', handleVolumeChange);
    video.addEventListener('ended', handleEnded);

    if (autoPlay) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          setIsPlaying(false);
        });
      }
    }

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('volumechange', handleVolumeChange);
      video.removeEventListener('ended', handleEnded);
    };
  }, [autoPlay, onPlay, onPause, onEnded]);

  const handleUserInteraction = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!hasInteracted) {
      setHasInteracted(true);
      if (!isPlaying) {
        video.play().catch(() => {});
      }
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
    if (onMuteToggle) {
      onMuteToggle(video.muted);
    }
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`${styles.videoPlayer} ${className}`}
      style={getContainerStyles()}
      onClick={handleUserInteraction}
      onTouchStart={handleUserInteraction}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline
        className={`${styles.videoElement} ${styles[`fit-${fit}`]}`}
        onClick={togglePlay}
        style={{
          objectFit: fit,
        }}
      />

      {/* Mute/Unmute Button - Top Right */}
      <button 
        className={styles.muteButton}
        onClick={(e) => {
          e.stopPropagation();
          toggleMute();
        }}
        aria-label={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>

      {/* Play/Pause Overlay - Center */}
      {!isPlaying && (
        <div className={styles.playOverlay} onClick={togglePlay}>
          <div className={styles.playIcon}>
            <svg viewBox="0 0 24 24" width="48" height="48" fill="white">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayerSlide;