// components/OrderNowItemsListCard/OrderNowItemsListCard.tsx
import React from 'react';
import { Star, Clock, MapPin, Tag } from 'lucide-react';
import styles from './OrderNowItemsListCard.module.scss';

export interface RestaurantItemFoodInterface {
  id: string | number;
  name: string;
  rating: number;
  deliveryTime: string;
  cuisines: string[];
  location: string;
  imageUrl: string;
  offer?: string;
  isOffer?: boolean;
}

interface OrderNowItemsListCardProps {
  items: RestaurantItemFoodInterface[];
  title?: string;
  onItemClick?: (item: RestaurantItemFoodInterface) => void;
  className?: string;
  showOffers?: boolean;
  variant?: 'default' | 'compact' | 'featured' | '5col';
}

const OrderNowItemsListCard: React.FC<OrderNowItemsListCardProps> = ({
  items,
  title = "ITEMS AT £69",
  onItemClick,
  className = '',
  showOffers = true,
  variant = 'default',
}) => {
  const handleItemClick = (item: RestaurantItemFoodInterface) => {
    if (onItemClick) {
      onItemClick(item);
    }
  };

  const renderOfferBadge = (offer?: string) => {
    if (!offer || !showOffers) return null;
    return (
      <div className={styles.offerBadge}>
        <Tag size={12} className={styles.offerIcon} />
        <span>{offer}</span>
      </div>
    );
  };

  return (
    <div className={`${styles.orderNowContainer} ${className}`}>
      {title && <h2 className={styles.sectionTitle}>{title}</h2>}
      
      <div className={`${styles.itemsGrid} ${styles[`variant-${variant}`]}`}>
        {items.map((item) => (
          <div
            key={item.id}
            className={`${styles.restaurantCard} ${variant === 'featured' ? styles.featuredCard : ''}`}
            onClick={() => handleItemClick(item)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleItemClick(item);
              }
            }}
            aria-label={`${item.name} - ${item.rating} stars, ${item.deliveryTime} delivery`}
          >
            <div className={styles.imageContainer}>
              <img
                src={item.imageUrl}
                alt={item.name}
                className={styles.restaurantImage}
                loading="lazy"
              />
              {item.offer && showOffers && (
                <div className={styles.offerOverlay}>
                  {renderOfferBadge(item.offer)}
                </div>
              )}
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.restaurantName}>{item.name}</h3>
              
              <div className={styles.metaInfo}>
                <div className={styles.ratingContainer}>
                  <Star size={16} className={styles.starIcon} fill="#21973B" />
                  <span className={styles.rating}>{item.rating}</span>
                </div>
                <span className={styles.dotSeparator}>•</span>
                <div className={styles.timeContainer}>
                  <Clock size={14} className={styles.clockIcon} />
                  <span className={styles.deliveryTime}>{item.deliveryTime}</span>
                </div>
              </div>

              <div className={styles.cuisinesContainer}>
                <span className={styles.cuisines}>{item.cuisines.join(', ')}</span>
              </div>

              <div className={styles.locationContainer}>
                <MapPin size={14} className={styles.locationIcon} />
                <span className={styles.location}>{item.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderNowItemsListCard;