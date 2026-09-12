// PopularSearchesRestaurant.tsx
"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import styles from "./PopularSearchesRestaurant.module.scss";

/* -------------------------------------------------------
   Types
------------------------------------------------------- */

export interface SearchGroupLink {
  label: string;
  href: string;
}

export interface SearchGroupData {
  heading: string;
  links: SearchGroupLink[];
  initialVisible: number;
}

export interface SearchGroup {
  heading: string;
  links: SearchGroupLink[];
  /** How many links to show when collapsed (default: 10) */
  initialVisible?: number;
}

export interface PopularSearchesRestaurantProps {
  title?: string;
  groups: SearchGroup[];
  onLinkClick?: (label: string, groupHeading: string) => void;
}

/* -------------------------------------------------------
   Single Group (has its own collapse state)
------------------------------------------------------- */

const SearchGroupBlock: React.FC<{
  group: SearchGroup;
  onLinkClick?: PopularSearchesRestaurantProps["onLinkClick"];
}> = ({ group, onLinkClick }) => {
  const [expanded, setExpanded] = useState(false);
  const limit = group.initialVisible ?? 10;

  const visible = expanded ? group.links : group.links.slice(0, limit);
  const hasMore = group.links.length > limit;

  return (
    <div className={styles.group}>
      <h3 className={styles.groupHeading}>{group.heading}</h3>

      <ul className={styles.linkList}>
        {visible.map((link, index) => (
          <li key={`${link.label}-${index}`} className={styles.linkItem}>
            <a
              href={link.href}
              className={styles.link}
              onClick={(e) => {
                if (link.href === "#") e.preventDefault();
                onLinkClick?.(link.label, group.heading);
              }}
            >
              {link.label},
            </a>
          </li>
        ))}
      </ul>

      {hasMore && (
        <button
          type="button"
          className={styles.toggle}
          aria-expanded={expanded}
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? "See less" : "See more"}
          <span className={styles.chevron} aria-hidden="true">
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </span>
        </button>
      )}
    </div>
  );
};

/* -------------------------------------------------------
   Main Component
------------------------------------------------------- */

const PopularSearchesRestaurant: React.FC<
  PopularSearchesRestaurantProps
> = ({ title = "Popular Searches", groups, onLinkClick }) => {
  return (
    <section
      className={styles.section}
      aria-label={title}
      data-testid="popular-searches-section"
    >
      <h2 className={styles.sectionTitle}>{title}</h2>

      <div className={styles.groupList}>
        {groups.map((group) => (
          <SearchGroupBlock
            key={group.heading}
            group={group}
            onLinkClick={onLinkClick}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularSearchesRestaurant;