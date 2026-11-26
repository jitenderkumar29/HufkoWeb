
import { useRef } from 'react';
import styles from './AllCategoryRound.module.scss';
import Image from 'next/image';
import Link from 'next/link';

interface Category {
  name: string;
  imageUrl: string;
  url: string;
}

interface AllCategoryProps {
  categories: Category[];
}

const AllCategoryRound = ({ categories }: AllCategoryProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.allCategoryContainer}>
      <div className={styles.categoryWrapper}>
        <div
          className={styles.categoryContainer}
          ref={containerRef}
        >
          {categories.map((category, index) => (
            <Link
              key={`${category.url}-${index}`}
              href={category.url}
              className={styles.categoryItem}
              aria-label={category.name}
            >
              <div className={styles.categoryImage}>
                <Image
                  src={category.imageUrl}
                  alt={category.name}
                  width={120}
                  height={120}
                  loading="lazy"
                  className={styles.image}
                />
              </div>

              <div className={styles.categoryName}>
                {category.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCategoryRound;
