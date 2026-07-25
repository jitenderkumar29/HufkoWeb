import React, { useState, useEffect, useRef } from 'react';
import styles from './SubHeader.module.scss';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export interface SubHeaderItem {
  name: string;
  url?: string;
  icon?: React.ReactNode;
}

interface SubHeaderProps {
  items: SubHeaderItem[];
  defaultActive?: string;
  onSelect?: (item: SubHeaderItem) => void;
}

const SubHeader: React.FC<SubHeaderProps> = ({
  items,
  defaultActive,
  onSelect,
}) => {
  const [activeItem, setActiveItem] = useState(
    defaultActive || items[0]?.name || ''
  );
  const [isMobile, setIsMobile] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const checkScrollEnds = () => {
    if (!navRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = navRef.current;

    setAtStart(scrollLeft <= 0);
    setAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
  };

  useEffect(() => {
    const container = navRef.current;

    if (!container) return;

    container.addEventListener('scroll', checkScrollEnds);

    const timer = setTimeout(checkScrollEnds, 300);

    return () => {
      container.removeEventListener('scroll', checkScrollEnds);
      clearTimeout(timer);
    };
  }, [items]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!navRef.current) return;

    navRef.current.scrollBy({
      left: direction === 'left' ? -300 : 300,
      behavior: 'smooth',
    });

    setTimeout(checkScrollEnds, 300);
  };

  const handleClick = (item: SubHeaderItem) => {
    setActiveItem(item.name);
    onSelect?.(item);
  };

  const visibleItems =
    isMobile && !showMore ? items.slice(0, 4) : items;

  return (
    <div className={styles.subHeader}>
      <div className={styles.secondaryNav}>
        <button
          className={`${styles.navButton} ${atStart ? styles.disabled : ''}`}
          disabled={atStart}
          onClick={() => handleScroll('left')}
          aria-label="Scroll Left"
        >
          <FaChevronLeft />
        </button>

        <div
          className={styles.navMenuWrapper}
          ref={navRef}
        >
          <nav className={styles.navMenu}>
            {visibleItems.map((item) => (
              <a
                key={item.name}
                href={item.url || '#'}
                className={`${styles.navItem} ${
                  activeItem === item.name ? styles.active : ''
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(item);
                }}
              >
                {item.icon && (
                  <span className={styles.icon}>
                    {item.icon}
                  </span>
                )}

                <span className={styles.name}>
                  {item.name}
                </span>
              </a>
            ))}

            {isMobile && (
              <button
                className={styles.moreButton}
                onClick={() => setShowMore(!showMore)}
                aria-label={
                  showMore
                    ? 'Show Less Categories'
                    : 'Show More Categories'
                }
              >
                {showMore ? 'Less' : 'More...'}
              </button>
            )}
          </nav>
        </div>

        <button
          className={`${styles.navButton} ${atEnd ? styles.disabled : ''}`}
          disabled={atEnd}
          onClick={() => handleScroll('right')}
          aria-label="Scroll Right"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default SubHeader;