// DineOutItemsHorizontal.tsx
import React, { useRef, useState, useEffect } from 'react';
import { Star, Utensils, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './DineOutItemsHorizontal.module.scss';

// ============================================================
// TYPES (unchanged)
// ============================================================

export interface DineOutOffer {
  type: 'pre-booking' | 'walk-in' | 'bank' | 'extra';
  title: string;
  discount?: string;
}

export interface DineOutItemInterface {
  id: string | number;
  name: string;
  rating: number;
  cuisines: string[];
  priceForTwo: number;
  location: string;
  distance: string;
  imageUrl?: string;
  isTableBooking?: boolean;
  offers: DineOutOffer[];
  bankOffers?: string[];
  extraOffers?: string[];
}

export interface DineOutItemsHorizontalProps {
  items: DineOutItemInterface[];
  title?: string;
  onItemClick?: (item: DineOutItemInterface) => void;
  className?: string;
  visibleCards?: number;
  gap?: number;
  maxItems?: number;
}

// ============================================================
// COMPONENT
// ============================================================

const DineOutItemsHorizontal: React.FC<DineOutItemsHorizontalProps> = ({
  items,
  title = '',
  onItemClick,
  className = '',
  visibleCards = 3,
  gap = 18,
  maxItems = 10,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);

  const displayItems = items.slice(0, maxItems);

  const updateButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setShowLeft(scrollLeft > 8);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 8);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateButtons();
    el.addEventListener('scroll', updateButtons);
    window.addEventListener('resize', updateButtons);

    const ro = new ResizeObserver(() => {
      updateButtons();
      if (el.children.length) {
        const first = el.children[0] as HTMLElement;
        const w = first.offsetWidth + gap;
        setCardWidth(w);
      }
    });
    ro.observe(el);

    return () => {
      el.removeEventListener('scroll', updateButtons);
      window.removeEventListener('resize', updateButtons);
      ro.disconnect();
    };
  }, [displayItems, gap]);

  const scroll = (dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const w =
      cardWidth ||
      (el.children[0] as HTMLElement)?.offsetWidth + gap ||
      300;
    const target = el.scrollLeft + dir * w * visibleCards;
    el.scrollTo({ left: target, behavior: 'smooth' });
  };

  const getRatingClass = (rating: number) => {
    if (rating >= 4.5) return styles.ratingExcellent;
    if (rating >= 4) return styles.ratingGood;
    if (rating >= 3) return styles.ratingAverage;
    return styles.ratingPoor;
  };

  // ---- render ----
  return (
    <section className={`${styles.dineOutContainer} ${className}`}>
      {/* ---------- HEADER ROW (title + nav buttons) ---------- */}
      {(title || displayItems.length > 0) && (
        <div className={styles.headerRow}>
          {title && <h2 className={styles.sectionTitle}>{title}</h2>}

          <div className={styles.navGroup}>
            <button
              type="button"
              className={styles.navButton}
              onClick={() => scroll(-1)}
              aria-label="Scroll left"
              disabled={!showLeft}
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              className={styles.navButton}
              onClick={() => scroll(1)}
              aria-label="Scroll right"
              disabled={!showRight}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}

      {/* ---------- SCROLL TRACK ---------- */}
      <div className={styles.scrollWrapper}>
        <div
          className={styles.scrollTrack}
          ref={scrollRef}
          style={{ gap: `${gap}px` }}
        >
          {displayItems.map((item) => {
            const primaryOffer = item.offers?.[0];
            const remainingOffers = 3;

            return (
              <article
                key={item.id}
                className={styles.card}
                onClick={() => onItemClick?.(item)}
                role={onItemClick ? 'button' : undefined}
                tabIndex={onItemClick ? 0 : undefined}
                onKeyDown={(e) => {
                  if (onItemClick && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    onItemClick(item);
                  }
                }}
              >
                {/* -------- IMAGE -------- */}
                <div className={styles.imageSection}>
                  {item.imageUrl ? (
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className={styles.restaurantImage}
                      loading="lazy"
                    />
                  ) : (
                    <div className={styles.imagePlaceholder}>
                      <Utensils size={28} />
                    </div>
                  )}
                  <div className={styles.imageOverlay} />
                  <h3 className={styles.restaurantName}>{item.name}</h3>
                  <div
                    className={`${styles.ratingBadge} ${getRatingClass(item.rating)}`}
                  >
                    <Star size={14} fill="currentColor" strokeWidth={0} />
                    <span>{item.rating}</span>
                  </div>
                </div>

                {/* -------- CONTENT -------- */}
                <div className={styles.contentSection}>
                  <div className={styles.infoRow}>
                    <div className={styles.cuisines}>
                      {item.cuisines.slice(0, 2).join(' • ')}
                    </div>
                    <div className={styles.price}>
                      ₹{item.priceForTwo} for two
                    </div>
                  </div>

                  <div className={styles.infoRow}>
                    <div className={styles.location}>{item.location}</div>
                    <div className={styles.distance}>{item.distance}</div>
                  </div>

                  {item.isTableBooking && (
                    <div className={styles.tableBooking}>
                      <span className={styles.tableIcon}>▣</span> Table booking
                    </div>
                  )}

                  {primaryOffer && (
                    <div className={styles.offerRow}>
                      <span className={styles.offerText}>
                        {primaryOffer.title}
                      </span>
                      {remainingOffers > 0 && (
                        <span className={styles.moreOffers}>
                          +{remainingOffers} more
                        </span>
                      )}
                    </div>
                  )}

                  {item.bankOffers?.[0] && (
                    <div className={styles.bankOfferRow}>
                      {item.bankOffers[0]}
                    </div>
                  )}

                  {item.extraOffers?.[0] && (
                    <div className={styles.extraOfferRow}>
                      {item.extraOffers[0]}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DineOutItemsHorizontal;