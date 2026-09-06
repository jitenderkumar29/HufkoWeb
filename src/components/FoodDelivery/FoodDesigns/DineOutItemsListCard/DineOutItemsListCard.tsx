import React from 'react';
import {
  Star,
  Utensils,
} from 'lucide-react';
import styles from './DineOutItemsListCard.module.scss';

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

export interface DineOutOffer {
  type: 'pre-booking' | 'walk-in' | 'bank' | 'extra';
  title: string;
  discount?: string;
}

export interface DineOutItemsListCardProps {
  items: DineOutItemInterface[];
  title?: string;
  onItemClick?: (item: DineOutItemInterface) => void;
  className?: string;
  /** Dynamic number of columns to show (e.g., 2, 3, 4) */
  columns?: number;
}

const DineOutItemsListCard: React.FC<DineOutItemsListCardProps> = ({
  items,
  title = '',
  onItemClick,
  className = '',
  columns = 3,
}) => {
  const getRatingClass = (rating: number) => {
    if (rating >= 4.5) return styles.ratingExcellent;
    if (rating >= 4) return styles.ratingGood;
    if (rating >= 3) return styles.ratingAverage;
    return styles.ratingPoor;
  };

  return (
    <section className={`${styles.dineOutContainer} ${className}`}>
      {title && (
        <h2 className={styles.sectionTitle}>
          {title}
        </h2>
      )}

      <div 
        className={styles.gridContainer}
        style={{ 
          ['--dynamic-columns' as any]: columns 
        }}
      >
        {items.map((item) => {
          // Get the first offer as primary
          const primaryOffer = item.offers?.[0];
          
          // Calculate remaining offers (all offers except the first one)
          const remainingOffers = 2;
          // const remainingOffers = item.offers?.length > 1 ? item.offers.length - 1 : 0;
          
          // Get remaining offers details for display
          const remainingOfferTitles = item.offers?.slice(1).map(offer => offer.title) || [];

          return (
            <article
              key={item.id}
              className={styles.card}
              onClick={() => onItemClick?.(item)}
              role={onItemClick ? 'button' : undefined}
              tabIndex={onItemClick ? 0 : undefined}
              onKeyDown={(e) => {
                if (
                  onItemClick &&
                  (e.key === 'Enter' || e.key === ' ')
                ) {
                  e.preventDefault();
                  onItemClick(item);
                }
              }}
            >
              {/* ================= IMAGE ================= */}
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
                    <Utensils size={32} />
                  </div>
                )}

                <div className={styles.imageOverlay} />

                <h3 className={styles.restaurantName}>
                  {item.name}
                </h3>

                <div
                  className={`${styles.ratingBadge} ${getRatingClass(
                    item.rating
                  )}`}
                >
                  <Star
                    size={14}
                    fill="currentColor"
                    strokeWidth={0}
                  />
                  <span>{item.rating}</span>
                </div>
              </div>

              {/* ================= CONTENT ================= */}
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
                  <div className={styles.location}>
                    {item.location}
                  </div>

                  <div className={styles.distance}>
                    {item.distance}
                  </div>
                </div>

                {item.isTableBooking && (
                  <div className={styles.tableBooking}>
                    <span className={styles.tableIcon}>▣</span>
                    Table booking
                  </div>
                )}

                {/* Primary Offer */}
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

                {/* Display Additional Offers if there are more */}
                {/* {remainingOffers > 0 && (
                  <div className={styles.additionalOffers}>
                    {remainingOfferTitles.slice(0, 2).map((title, index) => (
                      <div key={index} className={styles.additionalOffer}>
                        • {title}
                      </div>
                    ))}
                    {remainingOffers > 2 && (
                      <div className={styles.additionalOffer}>
                        • +{remainingOffers - 2} more offers
                      </div>
                    )}
                  </div>
                )} */}

                {item.bankOffers?.[0] && (
                  <div className={styles.bankOfferRow}>
                    <span>
                      {item.bankOffers[0]}
                    </span>
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
    </section>
  );
};

export default DineOutItemsListCard;