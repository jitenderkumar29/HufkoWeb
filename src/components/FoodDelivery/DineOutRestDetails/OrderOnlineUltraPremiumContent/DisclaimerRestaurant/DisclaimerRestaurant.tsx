// DisclaimerRestaurant.tsx
"use client";

import React from "react";
import { MapPin } from "lucide-react";
import styles from "./DisclaimerRestaurant.module.scss";

/* -------------------------------------------------------
   Types
------------------------------------------------------- */

export interface DisclaimerRestaurantProps {
  /** Heading text, e.g. "Disclaimer" */
  title?: string;

  /** Bullet list of disclaimer lines */
  points: string[];

  /** FSSAI details — omit to hide the FSSAI row */
  fssai?: {
    /** Logo image URL */
    logo: string;
    /** License number text, e.g. "License No. 13314010000530" */
    licenseNumber: string;
  };

  /** Restaurant identity block */
  restaurant: {
    name: string;
    /** Short area label, e.g. "Nehru Place" */
    area?: string;
    /** Full street address */
    address: string;
  };
}

/* -------------------------------------------------------
   Component
------------------------------------------------------- */

const DisclaimerRestaurant: React.FC<DisclaimerRestaurantProps> = ({
  title = "Disclaimer",
  points,
  fssai,
  restaurant,
}) => {
  return (
    <footer
      className={styles.disclaimerSection}
      aria-label={title}
      data-testid="disclaimer-section-container"
    >
      {/* ---- Disclaimer bullet list ---- */}
      <div className={styles.disclaimerBlock}>
        <h3 className={styles.disclaimerTitle}>{title}</h3>

        <ul className={styles.pointList} data-testid="disclaimer-point-list">
          {points.map((point, index) => (
            <li key={index} className={styles.pointItem}>
              <span className={styles.pointText}>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ---- FSSAI row ---- */}
      {fssai && (
        <>
          <hr className={styles.divider} />

          <div
            className={styles.fssaiRow}
            aria-hidden="true"
            data-testid="fssai-row"
          >
            <img
              src={fssai.logo}
              alt="FSSAI"
              className={styles.fssaiLogo}
              loading="lazy"
            />
            <p className={styles.fssaiText}>{fssai.licenseNumber}</p>
          </div>
        </>
      )}

      {/* ---- Restaurant identity ---- */}
      <div
        className={styles.restaurantBlock}
        aria-hidden="true"
        data-testid="restaurant-identity"
      >
        <div className={styles.restaurantHead}>
          <p className={styles.restaurantName}>{restaurant.name}</p>
          {restaurant.area && (
            <p className={styles.restaurantArea}>{restaurant.area}</p>
          )}
        </div>

        <div className={styles.addressRow}>
          <MapPin
            size={16}
            strokeWidth={2.2}
            className={styles.pinIcon}
            aria-hidden="true"
          />
          <p className={styles.addressText}>{restaurant.address}</p>
        </div>
      </div>
    </footer>
  );
};

export default DisclaimerRestaurant;