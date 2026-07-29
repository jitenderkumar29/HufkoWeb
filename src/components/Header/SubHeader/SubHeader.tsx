import React, { useState, useEffect, useRef } from 'react';
import styles from './SubHeader.module.scss';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import DropDown from '../DropDown/DropDown';

export interface SubHeaderItem {
  name: string;
  url?: string;
  icon?: React.ReactNode;
  id?: string;
}

export interface CategoryData {
  id?: string;  // Made optional
  title: string;
  items: string[];
  image?: {
    src: string;
    title: string;
    link: string;
  };
}

interface SubHeaderProps {
  items: SubHeaderItem[];
  defaultActive?: string;
  onSelect?: (item: SubHeaderItem) => void;
  categoriesData?: Record<string, CategoryData[]>;  // This remains the same
}

const SubHeader: React.FC<SubHeaderProps> = ({
  items,
  defaultActive,
  onSelect,
  categoriesData = {},
}) => {
  const [activeItem, setActiveItem] = useState(
    defaultActive || items[0]?.name || ''
  );
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ left: 0, width: 0 });

  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    if (isMobile) {
      setHoveredItem(null);
    }
  };

  const handleMouseEnter = (itemId: string, event: React.MouseEvent<HTMLAnchorElement>) => {
    if (isMobile) return;

    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }

    // Get the position of the hovered item
    const element = itemRefs.current.get(itemId);
    if (element) {
      const rect = element.getBoundingClientRect();
      const navRect = navRef.current?.getBoundingClientRect();
      if (navRect) {
        setDropdownPosition({
          left: rect.left - navRect.left,
          width: Math.max(600, navRect.width),
        });
      }
    }

    setHoveredItem(itemId);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;

    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
    }, 150);
  };

  const handleDropdownMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  const handleDropdownMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
    }, 150);
  };

  const visibleItems = isMobile && !showMore ? items.slice(0, 4) : items;

  // Get the category data for the hovered item
  const getCategoryData = (itemName: string) => {
    const item = items.find(i => i.name === itemName);
    if (!item || !item.id) return null;
    return categoriesData[item.id] || null;
  };

  const hoveredCategoryData = hoveredItem ? getCategoryData(hoveredItem) : null;

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

        <div className={styles.navMenuWrapper} ref={navRef}>
          <nav className={styles.navMenu}>
            {visibleItems.map((item) => (
              <a
                key={item.name}
                ref={(el) => {
                  if (el) {
                    itemRefs.current.set(item.name, el);
                  } else {
                    itemRefs.current.delete(item.name);
                  }
                }}
                href={item.url || '#'}
                className={`${styles.navItem} ${
                  activeItem === item.name ? styles.active : ''
                } ${hoveredItem === item.name ? styles.hovered : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(item);
                }}
                onMouseEnter={(e) => {
                  if (item.id && categoriesData[item.id]) {
                    handleMouseEnter(item.name, e);
                  }
                }}
                onMouseLeave={handleMouseLeave}
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
                aria-label={showMore ? 'Show Less Categories' : 'Show More Categories'}
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

      {/* Dropdown */}
      {!isMobile && hoveredItem && hoveredCategoryData && (
        <div
          ref={dropdownRef}
          className={styles.dropdownContainer}
          style={{
            left: `${dropdownPosition.left}px`,
            width: `${dropdownPosition.width}px`,
          }}
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleDropdownMouseLeave}
        >
          <div className={styles.dropdownWrapper}>
            <DropDown categories={hoveredCategoryData} />
          </div>
        </div>
      )}

      {/* Mobile dropdown */}
      {isMobile && hoveredItem && hoveredCategoryData && (
        <div className={styles.mobileDropdown}>
          <div className={styles.mobileDropdownHeader}>
            <span>{hoveredItem}</span>
            <button onClick={() => setHoveredItem(null)}>✕</button>
          </div>
          <DropDown categories={hoveredCategoryData} isMobile />
        </div>
      )}
    </div>
  );
};

export default SubHeader;