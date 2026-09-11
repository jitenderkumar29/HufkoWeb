// FAQsRestaurant.tsx
"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./FAQsRestaurant.module.scss";

/* -------------------------------------------------------
   Types
------------------------------------------------------- */

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQsRestaurantProps {
  /** Title shown above the accordion, e.g. "FAQs about Burger King" */
  title: string;
  /** List of Q&A pairs */
  items: FAQItem[];
  /** Allow multiple items open at once (default: false — single-open) */
  allowMultipleOpen?: boolean;
  /** Index of the item open on first render (single-open mode) */
  defaultOpenIndex?: number;
}

/* -------------------------------------------------------
   Component
------------------------------------------------------- */

const FAQsRestaurant: React.FC<FAQsRestaurantProps> = ({
  title,
  items,
  allowMultipleOpen = false,
  defaultOpenIndex = -1,
}) => {
  const [openSet, setOpenSet] = useState<Set<number>>(
    () => new Set(defaultOpenIndex >= 0 ? [defaultOpenIndex] : [])
  );

  const toggle = (index: number) => {
    setOpenSet((prev) => {
      const next = allowMultipleOpen ? new Set(prev) : new Set<number>();

      if (prev.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }

      return next;
    });
  };

  return (
    <section
      className={styles.faqSection}
      aria-label={title}
      data-testid="faq-section-container"
    >
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.list} data-testid="faq-section-list">
        {items.map((item, index) => {
          const isOpen = openSet.has(index);
          const questionId = `faq-question-${index}`;
          const answerId = `faq-answer-${index}`;

          return (
            <div
              key={index}
              className={`${styles.item} ${isOpen ? styles.open : ""}`}
              data-testid="faq-section-item"
              data-expanded={isOpen}
            >
              <h3 id={questionId} className={styles.questionHeading}>
                <button
                  type="button"
                  className={styles.questionButton}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  data-testid="faq-section-question"
                  onClick={() => toggle(index)}
                >
                  <span className={styles.questionText}>
                    {item.question}
                  </span>

                  <span className={styles.chevron} aria-hidden="true">
                    <ChevronDown size={18} />
                  </span>
                </button>
              </h3>

              <div
                id={answerId}
                role="region"
                aria-labelledby={questionId}
                aria-hidden={!isOpen}
                className={styles.answerWrapper}
              >
                <div className={styles.answerInner}>
                  <div
                    className={styles.answer}
                    data-testid="faq-section-answer"
                  >
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQsRestaurant;