"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { X, ChevronLeft, ChevronRight, Maximize, Image as ImageIcon } from "lucide-react";
import styles from "./ImagePreviewCarousal.module.scss";

export interface GalleryImage {
  id: string;
  src: string;
  alt?: string;
}

interface ImagePreviewCarousalProps {
  images: GalleryImage[];
  initialIndex?: number;
  isOpen?: boolean;
  onClose?: () => void;
  title?: string;
}

const ImagePreviewCarousal: React.FC<ImagePreviewCarousalProps> = ({
  images = [],
  initialIndex = 0,
  isOpen = true,
  onClose,
  title = "Photos",
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sync with initialIndex when opened
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [initialIndex, isOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex]);

  const handleClose = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
    onClose?.();
  }, [onClose]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;

    try {
      if (!document.fullscreenElement) {
        await containerRef.current.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (err) {
      console.error("Fullscreen error:", err);
    }
  };

  // Listen to fullscreen changes (e.g. Esc key exits fullscreen natively)
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  if (!isOpen) return null;

  const hasImages = images.length > 0;
  const currentImage = hasImages ? images[currentIndex] : null;
  const showArrows = images.length > 1;

  return (
    <div className={styles.overlay} ref={containerRef} role="dialog" aria-modal="true">
      {/* Header */}
      <header className={styles.header}>
        <h2 className={styles.headerTitle}>{title}</h2>
        <button
          type="button"
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="Close gallery"
        >
          <X />
        </button>
      </header>

      {/* Main Content */}
      {hasImages ? (
        <>
          <div className={styles.content}>
            {/* Left Arrow */}
            {showArrows && (
              <button
                type="button"
                className={`${styles.navButton} ${styles.left}`}
                onClick={handlePrev}
                aria-label="Previous image"
              >
                <ChevronLeft />
              </button>
            )}

            {/* Image */}
            <div className={styles.imageWrapper}>
              {currentImage && (
                <img
                  src={currentImage.src}
                  alt={currentImage.alt || `Image ${currentIndex + 1}`}
                  className={styles.mainImage}
                  draggable={false}
                />
              )}
            </div>

            {/* Right Arrow */}
            {showArrows && (
              <button
                type="button"
                className={`${styles.navButton} ${styles.right}`}
                onClick={handleNext}
                aria-label="Next image"
              >
                <ChevronRight />
              </button>
            )}

            {/* Fullscreen Toggle */}
            <button
              type="button"
              className={styles.fullscreenButton}
              onClick={toggleFullscreen}
              aria-label={isFullscreen ? "Exit fullscreen" : "Open fullscreen"}
            >
              <Maximize />
            </button>
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className={styles.thumbnailsWrapper}>
              <nav className={styles.thumbnails} aria-label="Thumbnail navigation">
                {images.map((img, index) => (
                  <button
                    key={img.id}
                    type="button"
                    className={`${styles.thumbnail} ${
                      index === currentIndex ? styles.active : ""
                    }`}
                    onClick={() => handleThumbnailClick(index)}
                    aria-label={`Go to image ${index + 1}`}
                    aria-pressed={index === currentIndex}
                  >
                    <img src={img.src} alt={img.alt || `Thumbnail ${index + 1}`} />
                  </button>
                ))}
              </nav>
            </div>
          )}
        </>
      ) : (
        <div className={styles.emptyState}>
          <ImageIcon />
          <p>No images available</p>
        </div>
      )}
    </div>
  );
};

export default ImagePreviewCarousal;