// RelatedToRestaurant.tsx
"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import styles from "./RelatedToRestaurant.module.scss";

export interface RelatedRestaurantItem {
  id: string | number;
  name: string;
  rating: number;
  deliveryTime: string;
  cuisines: string;
  location: string;
  image: string;
  badgeTitle?: string;
  badgeSubtitle?: string;
  badgeVariant?: "offer" | "items";
}

interface RelatedToRestaurantProps {
  title?: string;
  items: RelatedRestaurantItem[];
  onItemClick?: (item: RelatedRestaurantItem) => void;
}

const RelatedToRestaurant: React.FC<RelatedToRestaurantProps> = ({
  title = "Related to Burger King",
  items,
  onItemClick,
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.85;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.relatedSection} aria-label={title}>
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.navButtons}>
          <button
            type="button"
            className={styles.navButton}
            onClick={() => scrollByAmount("left")}
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            className={styles.navButton}
            onClick={() => scrollByAmount("right")}
            aria-label="Scroll right"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Scroller */}
      <div
        ref={scrollerRef}
        className={styles.scroller}
        role="list"
      >
        {items.map((item) => (
          <article
            key={item.id}
            role="listitem"
            className={styles.card}
            onClick={() => onItemClick?.(item)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onItemClick?.(item);
              }
            }}
          >
            {/* Image with badge */}
            <div className={styles.imageWrapper}>
              <img
                src={item.image}
                alt={item.name}
                className={styles.image}
                loading="lazy"
              />

              {item.badgeTitle && (
                <div
                  className={`${styles.badge} ${
                    item.badgeVariant === "items"
                      ? styles.badgeItems
                      : styles.badgeOffer
                  }`}
                >
                  <span className={styles.badgeTitle}>
                    {item.badgeTitle}
                  </span>
                  {item.badgeSubtitle && (
                    <span className={styles.badgeSubtitle}>
                      {item.badgeSubtitle}
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Meta */}
            <div className={styles.meta}>
              <h3 className={styles.name}>{item.name}</h3>

              <div className={styles.ratingRow}>
                <span className={styles.ratingPill}>
                  <Star size={11} strokeWidth={0} className={styles.starIcon} />
                  {item.rating.toFixed(1)}
                </span>
                <span className={styles.dot}>•</span>
                <span className={styles.delivery}>{item.deliveryTime}</span>
              </div>

              <p className={styles.cuisines}>{item.cuisines}</p>
              <p className={styles.location}>{item.location}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default RelatedToRestaurant;