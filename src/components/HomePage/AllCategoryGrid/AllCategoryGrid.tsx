'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './AllCategoryGrid.module.scss';

export interface Category {
  id: string;
  name: string;
  imageUrl: string;
  url: string;
}

interface AllCategoryGridProps {
  title?: string;
  categories: Category[];
}

const AllCategoryGrid: React.FC<AllCategoryGridProps> = ({
  title = 'OUR CATEGORIES',
  categories,
}) => {
  return (
    <section className={styles.container}>
      <div className={styles.sectionWrapper}>
        <div className={styles.contentWrapper}>
          <header className={styles.header}>
            <div className={styles.headerLine}></div>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.headerLineRight}></div>
          </header>

          <div className={styles.grid}>
            {categories.map((category) => (
              <Link
                key={category.id}
                href={category.url}
                className={styles.categoryCard}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={category.imageUrl}
                    alt={category.name}
                    width={90}
                    height={90}
                    className={styles.categoryImage}
                  />
                </div>

                <span className={styles.categoryName}>
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllCategoryGrid;