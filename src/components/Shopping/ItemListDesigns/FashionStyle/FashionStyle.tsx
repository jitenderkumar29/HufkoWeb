"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import styles from "./FashionStyle.module.scss";

export interface FashionStyleItem {
  id: string | number;
  image: string;
  title?: string;
  discount?: string;
  extraDiscount?: string;
  href?: string;
  alt?: string;
  ctaText?: string;
}

export interface FashionStyleProps {
  title?: string;
  items: FashionStyleItem[];
  backgroundColor?: string;
  height?: string | number;
  showDiscount?: boolean;
  showExtraDiscount?: boolean;
  showNavigation?: boolean;
  showArrowOnHover?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

const FashionStyle: React.FC<FashionStyleProps> = ({
  title = "Styles to celebrate in",
  items,
  backgroundColor = "#ffffff",
  height,
  showDiscount = true,
  showExtraDiscount = true,
  showNavigation = true,
  showArrowOnHover = true,
  autoPlay = false,
  autoPlayInterval = 5000,
  className = "",
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const updateNavigation = useCallback(() => {
    const slider = sliderRef.current;

    if (!slider) {
      return;
    }

    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

    setCanScrollLeft(slider.scrollLeft > 5);
    setCanScrollRight(slider.scrollLeft < maxScrollLeft - 5);
  }, []);

  const scrollByAmount = useCallback(
    (direction: "left" | "right") => {
      const slider = sliderRef.current;

      if (!slider) {
        return;
      }

      const firstCard = slider.querySelector<HTMLElement>(
        `.${styles.card}`
      );

      const cardWidth = firstCard?.offsetWidth ?? 500;
      const gap = 16;

      slider.scrollBy({
        left:
          direction === "right"
            ? cardWidth + gap
            : -(cardWidth + gap),
        behavior: "smooth",
      });
    },
    []
  );

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>
  ) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollByAmount("left");
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollByAmount("right");
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) {
      return;
    }

    updateNavigation();

    const handleScroll = () => {
      updateNavigation();
    };

    const handleResize = () => {
      updateNavigation();
    };

    slider.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleResize);

    return () => {
      slider.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [items, updateNavigation]);

  useEffect(() => {
    if (!autoPlay || items.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      if (isHovering) {
        return;
      }

      const slider = sliderRef.current;

      if (!slider) {
        return;
      }

      if (!canScrollRight) {
        slider.scrollTo({
          left: 0,
          behavior: "smooth",
        });

        return;
      }

      scrollByAmount("right");
    }, autoPlayInterval);

    return () => {
      window.clearInterval(interval);
    };
  }, [
    autoPlay,
    autoPlayInterval,
    canScrollRight,
    isHovering,
    items.length,
    scrollByAmount,
  ]);

  if (!items.length) {
    return null;
  }

  const imageWrapperStyle =
    height !== undefined
      ? {
          height:
            typeof height === "number"
              ? `${height}px`
              : height,
          aspectRatio: "auto",
        }
      : undefined;

  return (
    <section
      className={`${styles.section} ${className}`}
      style={{ backgroundColor }}
      aria-label={title}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>{title}</h2>
        </div>

        <div
          className={styles.carouselWrapper}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {showNavigation && (
            <>
              <button
                type="button"
                className={`${styles.navigationButton} ${styles.previousButton} ${
                  !canScrollLeft
                    ? styles.navigationDisabled
                    : ""
                }`}
                onClick={() => scrollByAmount("left")}
                disabled={!canScrollLeft}
                aria-label="Previous fashion styles"
              >
                <ChevronLeft
                  size={24}
                  strokeWidth={2}
                />
              </button>

              <button
                type="button"
                className={`${styles.navigationButton} ${styles.nextButton} ${
                  !canScrollRight
                    ? styles.navigationDisabled
                    : ""
                }`}
                onClick={() => scrollByAmount("right")}
                disabled={!canScrollRight}
                aria-label="Next fashion styles"
              >
                <ChevronRight
                  size={24}
                  strokeWidth={2}
                />
              </button>
            </>
          )}

          <div
            ref={sliderRef}
            className={styles.slider}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            role="region"
            aria-label={`${title} carousel`}
          >
            {items.map((item) => {
              const cardContent = (
                <>
                  <div
                    className={styles.imageWrapper}
                    style={imageWrapperStyle}
                  >
                    <Image
                      src={item.image}
                      alt={
                        item.alt ||
                        item.title ||
                        "Fashion style"
                      }
                      fill
                      sizes="(max-width: 480px) 78vw, (max-width: 767px) 58vw, (max-width: 1023px) 40vw, (max-width: 1399px) 29vw, 22vw"
                      className={styles.image}
                    />

                    <div className={styles.imageOverlay} />

                    {showArrowOnHover && item.href && (
                      <span className={styles.cardArrow}>
                        <ArrowUpRight
                          size={18}
                          strokeWidth={2.2}
                        />
                      </span>
                    )}
                  </div>

                  {(item.discount ||
                    (showDiscount && item.discount) ||
                    (showExtraDiscount &&
                      item.extraDiscount)) && (
                    <div className={styles.offerBoxBelow}>
                      {showDiscount &&
                        item.discount && (
                          <p className={styles.discount}>
                            {item.discount}
                          </p>
                        )}

                      {showExtraDiscount &&
                        item.extraDiscount && (
                          <p
                            className={
                              styles.extraDiscount
                            }
                          >
                            {item.extraDiscount}
                          </p>
                        )}
                    </div>
                  )}
                </>
              );

              return item.href ? (
                <a
                  key={item.id}
                  href={item.href}
                  className={styles.card}
                  aria-label={
                    item.title ||
                    "View fashion style"
                  }
                >
                  {cardContent}
                </a>
              ) : (
                <article
                  key={item.id}
                  className={styles.card}
                >
                  {cardContent}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FashionStyle;