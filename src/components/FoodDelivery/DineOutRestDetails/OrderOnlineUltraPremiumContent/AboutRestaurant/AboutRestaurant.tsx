// AboutRestaurant.tsx
"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import styles from "./AboutRestaurant.module.scss";

/* -------------------------------------------------------
   Types
------------------------------------------------------- */

export interface AboutSection {
  heading: string;
  body: string;
}

export interface AboutRestaurantProps {
  /** Title shown above the card, e.g. "About Burger King" */
  title: string;
  /** Ordered list of heading + paragraph blocks */
  sections: AboutSection[];
  /** Whether the content is expanded on first render */
  defaultExpanded?: boolean;
  /** Label for the collapse toggle (default "See less") */
  lessLabel?: string;
  /** Label for the expand toggle (default "See more") */
  moreLabel?: string;
}

/* -------------------------------------------------------
   Component
------------------------------------------------------- */

const AboutRestaurant: React.FC<AboutRestaurantProps> = ({
  title,
  sections,
  defaultExpanded = false,
  lessLabel = "See less",
  moreLabel = "See more",
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <section
      className={styles.aboutSection}
      aria-label={title}
      data-testid="about-section-container"
    >
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.card} data-testid="about-section-card">
        <div
          className={`${styles.content} ${expanded ? styles.expanded : ""}`}
          data-testid="about-section-content"
        >
          {sections.map((section, index) => (
            <div key={index} className={styles.block}>
              <h3 className={styles.heading}>{section.heading}</h3>
              <p className={styles.body}>{section.body}</p>
            </div>
          ))}
        </div>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={expanded}
          aria-label={expanded ? lessLabel : moreLabel}
          data-testid="about-section-toggle-cta"
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? lessLabel : moreLabel}
          <span className={styles.chevron} aria-hidden="true">
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </span>
        </button>
      </div>
    </section>
  );
};

export default AboutRestaurant;