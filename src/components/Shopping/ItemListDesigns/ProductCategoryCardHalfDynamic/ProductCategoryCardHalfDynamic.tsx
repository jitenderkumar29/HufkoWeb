import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductCategoryCardHalfDynamic.module.scss';

export interface CategoryLink {
  title: string;
  url: string;
}

export interface ProductCategory {
  id: string;
  title: string;
  imageUrl: string;
  alt: string;
  links: CategoryLink[];
}

export interface ProductCategoryCardHalfDynamicProps {
  categories: ProductCategory[];
  className?: string;
  backgroundColor?: string;
  titleTag?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  onLinkClick?: (
    link: CategoryLink,
    category: ProductCategory
  ) => void;
}

const ProductCategoryCardHalfDynamic: React.FC<
  ProductCategoryCardHalfDynamicProps
> = ({
  categories,
  className = '',
  backgroundColor = '#E7EDEF',
  titleTag: TitleTag = 'h2',
  onLinkClick,
}) => {
  const handleLinkClick = (
    link: CategoryLink,
    category: ProductCategory
  ) => {
    onLinkClick?.(link, category);
  };

  return (
    <section
      className={`${styles.productCategoryCard} ${className}`}
      style={
        {
          '--category-bg': backgroundColor,
        } as React.CSSProperties
      }
    >
      <div className={styles.categoryGrid}>
        {categories.map((category, index) => {
          /*
           * Reference layout:
           *
           * 0 → image left
           * 1 → image left
           * 2 → image right
           * 3 → image right
           *
           * This gives the visual arrangement shown
           * in the supplied screenshot.
           */
          const imageRight = index >= 2;

          return (
            <article
              key={category.id}
              className={`${styles.categoryItem} ${
                imageRight
                  ? styles.imageRight
                  : styles.imageLeft
              }`}
            >
              <div className={styles.categoryImageWrapper}>
                <Image
                  src={category.imageUrl}
                  alt={category.alt}
                  fill
                  sizes="
                    (max-width: 767px) 100vw,
                    (max-width: 1200px) 50vw,
                    45vw
                  "
                  className={styles.categoryImage}
                  loading={index < 2 ? 'eager' : 'lazy'}
                />
              </div>

              <div className={styles.categoryContent}>
                <TitleTag className={styles.categoryTitle}>
                  {category.title}
                </TitleTag>

                <nav
                  className={styles.categoryLinks}
                  aria-label={`${category.title} categories`}
                >
                  {category.links.map((link, linkIndex) => (
                    <Link
                      key={`${category.id}-${linkIndex}`}
                      href={link.url}
                      className={styles.categoryLink}
                      onClick={() =>
                        handleLinkClick(link, category)
                      }
                      data-heading={category.title}
                      title={link.title}
                    >
                      {link.title}
                    </Link>
                  ))}
                </nav>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ProductCategoryCardHalfDynamic;