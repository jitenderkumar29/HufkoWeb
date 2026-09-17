import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Filter,
  ChevronDown,
  MapPin,
  Star,
  Leaf,
  Wine,
  Clock,
  X,
} from 'lucide-react';
import styles from './FilterDineOut.module.scss';

export interface FilterOption {
  id: string;
  label: string;
  icon?: React.ReactNode;
  type?: 'chip' | 'dropdown';
  options?: { id: string; label: string }[];
  badge?: string;
  badgeColor?: string;
  active?: boolean;
}

export interface FilterDineOutProps {
  onFilterChange?: (filters: string[]) => void;
  onSortChange?: (sort: string) => void;
  onDropdownChange?: (filterId: string, optionId: string | null) => void;

  initialFilters?: string[];
  initialSort?: string;
  initialDropdownValues?: Record<string, string | null>;

  className?: string;
  showBookTable?: boolean;
  showDistance?: boolean;
  showRating?: boolean;
  showPureVeg?: boolean;
  showServesAlcohol?: boolean;
  customFilters?: FilterOption[];
  showSort?: boolean;
}

/**
 * Portal-rendered dropdown that escapes any overflow-hidden ancestor.
 * Positions itself centered under the anchor element.
 */
const PortalDropdown: React.FC<{
  anchor: HTMLElement | null;
  align?: 'center' | 'left' | 'right';
  onClose: () => void;
  children: React.ReactNode;
}> = ({ anchor, align = 'center', onClose, children }) => {
  const [mounted, setMounted] = useState(false);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!anchor) return;

    const update = () => {
      const r = anchor.getBoundingClientRect();
      const dropdownWidth = 220;
      const margin = 8;

      let left = r.left + r.width / 2;
      let transform = 'translateX(-50%)';

      // Flip alignment if it would overflow the viewport
      if (align === 'center') {
        if (left - dropdownWidth / 2 < margin) {
          left = r.left;
          transform = 'none';
        } else if (left + dropdownWidth / 2 > window.innerWidth - margin) {
          left = r.right;
          transform = 'translateX(-100%)';
        }
      } else if (align === 'left') {
        left = r.left;
        transform = 'none';
      } else {
        left = r.right;
        transform = 'translateX(-100%)';
      }

      setStyle({
        position: 'fixed',
        top: r.bottom + 6,
        left,
        transform,
        zIndex: 9999,
      });
    };

    update();

    // Close on scroll / resize so the menu doesn't float detached
    const handleClose = () => onClose();
    window.addEventListener('scroll', handleClose, true);
    window.addEventListener('resize', handleClose);
    return () => {
      window.removeEventListener('scroll', handleClose, true);
      window.removeEventListener('resize', handleClose);
    };
  }, [anchor, align, onClose]);

  // Click outside -> close
  useEffect(() => {
    if (!mounted) return;

    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (menuRef.current?.contains(target)) return;
      if (anchor?.contains(target)) return;
      onClose();
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [mounted, anchor, onClose]);

  if (!mounted) return null;

  return createPortal(
    <div ref={menuRef} style={style} className={styles.portalAnchor}>
      {children}
    </div>,
    document.body
  );
};

const FilterDineOut: React.FC<FilterDineOutProps> = ({
  onFilterChange,
  onSortChange,
  onDropdownChange,
  initialFilters = [],
  initialSort = 'Recommended',
  initialDropdownValues = {},
  className = '',
  showBookTable = true,
  showDistance = true,
  showRating = true,
  showPureVeg = true,
  showServesAlcohol = true,
  customFilters,
  showSort = true,
}) => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>(initialFilters);
  const [selectedSort, setSelectedSort] = useState(initialSort);
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [dropdownValues, setDropdownValues] =
    useState<Record<string, string | null>>(initialDropdownValues);

  // Anchor refs for portal-based dropdowns
  const sortAnchorRef = useRef<HTMLButtonElement>(null);
  const dropdownAnchors = useRef<Map<string, HTMLButtonElement>>(new Map());

  const setDropdownAnchor = (id: string) => (el: HTMLButtonElement | null) => {
    if (el) dropdownAnchors.current.set(id, el);
    else dropdownAnchors.current.delete(id);
  };

  // Close sort dropdown when a chip dropdown opens and vice versa (handled inline below)

  const sortOptions = [
    'Recommended',
    'Popularity',
    'Rating: High to Low',
    'Rating: Low to High',
    'Delivery Time',
    'Cost: Low to High',
    'Cost: High to Low',
  ];

  const defaultFilters: FilterOption[] = [
    ...(showBookTable
      ? [{ id: 'book_table', label: 'Book a table', icon: <Clock size={16} /> }]
      : []),
    ...(showDistance
      ? [{ id: 'within_5km', label: 'Within 5km', icon: <MapPin size={16} /> }]
      : []),
    ...(showRating
      ? [{ id: 'rating_4plus', label: 'Rating 4+', icon: <Star size={16} /> }]
      : []),
    ...(showPureVeg
      ? [{ id: 'pure_veg', label: 'Pure Veg', icon: <Leaf size={16} /> }]
      : []),
    ...(showServesAlcohol
      ? [
          {
            id: 'serves_alcohol',
            label: 'Serves Alcohol',
            icon: <Wine size={16} />,
          },
        ]
      : []),
  ];

  const allFilters =
    customFilters && customFilters.length > 0 ? customFilters : defaultFilters;

  const toggleFilter = (filterId: string) => {
    const newFilters = activeFilters.includes(filterId)
      ? activeFilters.filter((id) => id !== filterId)
      : [...activeFilters, filterId];
    setActiveFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handleSortSelect = (sort: string) => {
    setSelectedSort(sort);
    setIsSortDropdownOpen(false);
    onSortChange?.(sort);
  };

  const handleDropdownSelect = (filterId: string, optionId: string | null) => {
    setDropdownValues((prev) => ({ ...prev, [filterId]: optionId }));
    setOpenDropdownId(null);
    onDropdownChange?.(filterId, optionId);
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
    setDropdownValues({});
    setOpenDropdownId(null);
    onFilterChange?.([]);
  };

  const getActiveFilterCount = () => activeFilters.length;

  const getDropdownChipLabel = (filter: FilterOption) => {
    const selectedId = dropdownValues[filter.id];
    if (!selectedId) return filter.label;
    return (
      filter.options?.find((o) => o.id === selectedId)?.label ?? filter.label
    );
  };

  return (
    <div className={`${styles.filterWrapper} ${className}`}>
      <div className={styles.filterChipsContainer}>
        {/* Filter button */}
        <button
          className={`${styles.filterChip} ${styles.filterButton}`}
          onClick={() => setIsFilterModalOpen(true)}
          aria-label="Open filters"
        >
          <span>Filter</span>
          <Filter size={16} />
          {getActiveFilterCount() > 0 && (
            <span className={styles.filterBadge}>{getActiveFilterCount()}</span>
          )}
        </button>

        {/* Sort dropdown trigger */}
        {showSort && (
          <div className={styles.sortWrapper}>
            <button
              ref={sortAnchorRef}
              className={`${styles.filterChip} ${styles.sortChip}`}
              onClick={() => {
                setIsSortDropdownOpen((v) => !v);
                setOpenDropdownId(null);
              }}
              aria-expanded={isSortDropdownOpen}
            >
              <span>
                {selectedSort === 'Recommended' ? 'Sort By' : selectedSort}
              </span>
              <ChevronDown
                size={16}
                className={`${styles.chevronIcon} ${
                  isSortDropdownOpen ? styles.rotated : ''
                }`}
              />
            </button>
          </div>
        )}

        {/* Filter chips (chip + dropdown variants) */}
        {allFilters.map((filter) => {
          if (filter.type === 'dropdown') {
            const isOpen = openDropdownId === filter.id;
            const selectedId = dropdownValues[filter.id];
            return (
              <div className={styles.sortWrapper} key={filter.id}>
                <button
                  ref={setDropdownAnchor(filter.id)}
                  className={`${styles.filterChip} ${styles.dropdownChip} ${
                    selectedId ? styles.activeChip : ''
                  }`}
                  onClick={() => {
                    setOpenDropdownId(isOpen ? null : filter.id);
                    setIsSortDropdownOpen(false);
                  }}
                  aria-expanded={isOpen}
                >
                  <span className={styles.chipInner}>
                    {filter.badge && (
                      <span
                        className={styles.chipBadge}
                        style={{
                          backgroundColor: filter.badgeColor || '#ff5b2e',
                        }}
                      >
                        {filter.badge}
                      </span>
                    )}
                    {filter.icon && (
                      <span className={styles.chipIcon}>{filter.icon}</span>
                    )}
                    <span>{getDropdownChipLabel(filter)}</span>
                  </span>
                  <ChevronDown
                    size={16}
                    className={`${styles.chevronIcon} ${
                      isOpen ? styles.rotated : ''
                    }`}
                  />
                </button>
              </div>
            );
          }

          // Default: toggle chip
          return (
            <button
              key={filter.id}
              className={`${styles.filterChip} ${
                activeFilters.includes(filter.id) ? styles.activeChip : ''
              }`}
              onClick={() => toggleFilter(filter.id)}
              aria-pressed={activeFilters.includes(filter.id)}
            >
              <span className={styles.chipInner}>
                {filter.badge && (
                  <span
                    className={styles.chipBadge}
                    style={{
                      backgroundColor: filter.badgeColor || '#ff5b2e',
                    }}
                  >
                    {filter.badge}
                  </span>
                )}
                {filter.icon && (
                  <span className={styles.chipIcon}>{filter.icon}</span>
                )}
                <span>{filter.label}</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Sort dropdown content (portal) */}
      {showSort && isSortDropdownOpen && (
        <PortalDropdown
          anchor={sortAnchorRef.current}
          onClose={() => setIsSortDropdownOpen(false)}
        >
          <div className={styles.sortDropdown}>
            {sortOptions.map((option) => (
              <button
                key={option}
                className={`${styles.sortOption} ${
                  selectedSort === option ? styles.activeSort : ''
                }`}
                onClick={() => handleSortSelect(option)}
              >
                {option}
                {selectedSort === option && (
                  <span className={styles.checkMark}>✓</span>
                )}
              </button>
            ))}
          </div>
        </PortalDropdown>
      )}

      {/* Filter chip dropdowns (portals) */}
      {openDropdownId &&
        (() => {
          const filter = allFilters.find((f) => f.id === openDropdownId);
          if (!filter || filter.type !== 'dropdown') return null;
          const anchor = dropdownAnchors.current.get(openDropdownId) || null;
          const selectedId = dropdownValues[openDropdownId];

          return (
            <PortalDropdown
              anchor={anchor}
              onClose={() => setOpenDropdownId(null)}
            >
              <div className={styles.sortDropdown}>
                {filter.options?.map((opt) => (
                  <button
                    key={opt.id}
                    className={`${styles.sortOption} ${
                      selectedId === opt.id ? styles.activeSort : ''
                    }`}
                    onClick={() => handleDropdownSelect(filter.id, opt.id)}
                  >
                    {opt.label}
                    {selectedId === opt.id && (
                      <span className={styles.checkMark}>✓</span>
                    )}
                  </button>
                ))}
                {selectedId && (
                  <button
                    className={styles.clearOption}
                    onClick={() => handleDropdownSelect(filter.id, null)}
                  >
                    Clear
                  </button>
                )}
              </div>
            </PortalDropdown>
          );
        })()}

      {/* Mobile filter modal (unchanged) */}
      {isFilterModalOpen && (
        <div
          className={styles.modalOverlay}
          onClick={() => setIsFilterModalOpen(false)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <h3>Filters</h3>
              <button
                className={styles.closeButton}
                onClick={() => setIsFilterModalOpen(false)}
                aria-label="Close filters"
              >
                <X size={24} />
              </button>
            </div>

            <div className={styles.modalBody}>
              {allFilters.map((filter) => (
                <button
                  key={filter.id}
                  className={`${styles.modalFilterItem} ${
                    activeFilters.includes(filter.id)
                      ? styles.activeFilterItem
                      : ''
                  }`}
                  onClick={() => toggleFilter(filter.id)}
                >
                  <span className={styles.modalFilterIcon}>{filter.icon}</span>
                  <span>{filter.label}</span>
                  {activeFilters.includes(filter.id) && (
                    <span className={styles.modalCheckMark}>✓</span>
                  )}
                </button>
              ))}
            </div>

            <div className={styles.modalFooter}>
              <button className={styles.clearAllBtn} onClick={clearAllFilters}>
                Clear All
              </button>
              <button
                className={styles.applyBtn}
                onClick={() => setIsFilterModalOpen(false)}
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDineOut;