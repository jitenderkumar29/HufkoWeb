// components/Shopping/ItemListDesigns/CategoryListCard/CategoryListCard.tsx

import React, { useRef, useState } from 'react';
import styles from './CategoryListCard.module.scss';

interface Category {
    id: string;
    title: string;
    imageUrl: string;
    alt: string;
    url: string;
}

interface CategoryListCardProps {
    categories: Category[];
    title: string;
    itemsPerView?: {
        mobile?: number;
        tablet?: number;
        desktop?: number;
    };
    subTitle?: string;
    rows?: number;
    cardHeight?: number;
    backgroundColor?: string;
    viewAllText?: string;
    viewAllUrl?: string;
    onCategoryClick?: (category: Category) => void;
    onViewAllClick?: () => void;
    // New image sizing props
    imageWidth?: number | string;
    imageHeight?: number | string;
    imageObjectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
    imageBorderRadius?: number | string;
    showImageBackground?: boolean;
    imageBackgroundColor?: string;
}

const CategoryListCard: React.FC<CategoryListCardProps> = ({
    categories,
    title,
    itemsPerView = { mobile: 2, tablet: 3, desktop: 12 },
    subTitle,
    rows = 1,
    cardHeight = 180,
    backgroundColor = '#f5f5f5',
    viewAllText,
    viewAllUrl,
    onCategoryClick,
    onViewAllClick,
    // Image props with defaults
    imageWidth = 80,
    imageHeight = 80,
    imageObjectFit = 'contain',
    imageBorderRadius = 8,
    showImageBackground = false,
    imageBackgroundColor = '#f8f8f8',
}) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = scrollRef.current.clientWidth * 0.8;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    // Helper to convert size to valid CSS value
    const getSizeValue = (size: number | string): string => {
        if (typeof size === 'number') {
            return `${size}px`;
        }
        return size;
    };

    const handleViewAllClick = () => {
        if (onViewAllClick) {
            onViewAllClick();
        } else if (viewAllUrl) {
            window.location.href = viewAllUrl;
        }
    };

    return (
        <div className={styles.categoryListCard} style={{ backgroundColor }}>
            <div className={styles.header}>
                <div className={styles.headerContent}>
                    <h2 className={styles.title}>{title}</h2>
                    {subTitle && <p className={styles.subTitle}>{subTitle}</p>}
                </div>
                {viewAllText && (
                    <button
                        className={styles.viewAllButton}
                        onClick={handleViewAllClick}
                        type="button"
                        aria-label={`View all ${title}`}
                    >
                        {viewAllText}
                    </button>
                )}
            </div>

            <div className={styles.carouselWrapper}>
                <button
                    className={`${styles.navButton} ${styles.navLeft} ${!canScrollLeft ? styles.disabled : ''}`}
                    onClick={() => scroll('left')}
                    disabled={!canScrollLeft}
                    aria-label="Previous"
                >
                    ‹
                </button>

                <div
                    className={styles.categoriesContainer}
                    ref={scrollRef}
                    onScroll={checkScroll}
                    style={{
                        gridTemplateColumns: `repeat(${categories.length}, 1fr)`,
                    }}
                >
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className={styles.categoryCard}
                            style={{ height: cardHeight }}
                            onClick={() => onCategoryClick?.(category)}
                        >
                            <div
                                className={styles.imageWrapper}
                                style={{
                                    width: getSizeValue(imageWidth),
                                    height: getSizeValue(imageHeight),
                                    backgroundColor: showImageBackground ? imageBackgroundColor : 'transparent',
                                    borderRadius: typeof imageBorderRadius === 'number'
                                        ? `${imageBorderRadius}px`
                                        : imageBorderRadius,
                                }}
                            >
                                <img
                                    src={category.imageUrl}
                                    alt={category.alt || category.title}
                                    className={styles.categoryImage}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: imageObjectFit,
                                        borderRadius: typeof imageBorderRadius === 'number'
                                            ? `${imageBorderRadius}px`
                                            : imageBorderRadius,
                                    }}
                                />
                            </div>
                            <span className={styles.categoryTitle}>{category.title}</span>
                        </div>
                    ))}
                </div>

                <button
                    className={`${styles.navButton} ${styles.navRight} ${!canScrollRight ? styles.disabled : ''}`}
                    onClick={() => scroll('right')}
                    disabled={!canScrollRight}
                    aria-label="Next"
                >
                    ›
                </button>
            </div>
        </div>
    );
};

export default CategoryListCard;