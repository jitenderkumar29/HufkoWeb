import React, { useState } from 'react';
import { 
  Filter, 
  ChevronDown, 
  MapPin, 
  Star, 
  Leaf, 
  Wine, 
  Clock,
  X,
  SlidersHorizontal
} from 'lucide-react';
import styles from './FilterDineOut.module.scss';

export interface FilterOption {
  id: string;
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
}

export interface FilterDineOutProps {
  onFilterChange?: (filters: string[]) => void;
  onSortChange?: (sort: string) => void;
  initialFilters?: string[];
  initialSort?: string;
  className?: string;
  showBookTable?: boolean;
  showDistance?: boolean;
  showRating?: boolean;
  showPureVeg?: boolean;
  showServesAlcohol?: boolean;
  customFilters?: FilterOption[];
}

const FilterDineOut: React.FC<FilterDineOutProps> = ({
  onFilterChange,
  onSortChange,
  initialFilters = [],
  initialSort = 'Recommended',
  className = '',
  showBookTable = true,
  showDistance = true,
  showRating = true,
  showPureVeg = true,
  showServesAlcohol = true,
  customFilters = [],
}) => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>(initialFilters);
  const [selectedSort, setSelectedSort] = useState(initialSort);

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
    ...(showBookTable ? [{ id: 'book_table', label: 'Book a table', icon: <Clock size={16} /> }] : []),
    ...(showDistance ? [{ id: 'within_5km', label: 'Within 5km', icon: <MapPin size={16} /> }] : []),
    ...(showRating ? [{ id: 'rating_4plus', label: 'Rating 4+', icon: <Star size={16} /> }] : []),
    ...(showPureVeg ? [{ id: 'pure_veg', label: 'Pure Veg', icon: <Leaf size={16} /> }] : []),
    ...(showServesAlcohol ? [{ id: 'serves_alcohol', label: 'Serves Alcohol', icon: <Wine size={16} /> }] : []),
    ...customFilters,
  ];

  const allFilters = defaultFilters;

  const toggleFilter = (filterId: string) => {
    let newFilters: string[];
    if (activeFilters.includes(filterId)) {
      newFilters = activeFilters.filter(id => id !== filterId);
    } else {
      newFilters = [...activeFilters, filterId];
    }
    setActiveFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handleSortSelect = (sort: string) => {
    setSelectedSort(sort);
    setIsSortDropdownOpen(false);
    onSortChange?.(sort);
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
    onFilterChange?.([]);
  };

  const getActiveFilterCount = () => activeFilters.length;

  return (
    <div className={`${styles.filterWrapper} ${className}`}>
      {/* Filter Chips Container */}
      <div className={styles.filterChipsContainer}>
        {/* Filter Button */}
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

        {/* Sort Dropdown */}
        <div className={styles.sortWrapper}>
          <button 
            className={`${styles.filterChip} ${styles.sortChip}`}
            onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
            aria-expanded={isSortDropdownOpen}
            aria-label="Sort options"
          >
            <span>{selectedSort}</span>
            <ChevronDown 
              size={16} 
              className={`${styles.chevronIcon} ${isSortDropdownOpen ? styles.rotated : ''}`}
            />
          </button>
          
          {/* {isSortDropdownOpen && (
            <div className={styles.sortDropdown}>
              {sortOptions.map((option) => (
                <button
                  key={option}
                  className={`${styles.sortOption} ${selectedSort === option ? styles.activeSort : ''}`}
                  onClick={() => handleSortSelect(option)}
                >
                  {option}
                  {selectedSort === option && <span className={styles.checkMark}>✓</span>}
                </button>
              ))}
            </div>
          )} */}
        </div>

        {/* Filter Chips */}
        {allFilters.map((filter) => (
          <button
            key={filter.id}
            className={`${styles.filterChip} ${activeFilters.includes(filter.id) ? styles.activeChip : ''}`}
            onClick={() => toggleFilter(filter.id)}
            aria-pressed={activeFilters.includes(filter.id)}
          >
            {filter.icon && <span className={styles.chipIcon}>{filter.icon}</span>}
            <span>{filter.label}</span>
          </button>
        ))}
      </div>

      {/* Filter Modal for Mobile */}
      {/* {isFilterModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsFilterModalOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
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
                  className={`${styles.modalFilterItem} ${activeFilters.includes(filter.id) ? styles.activeFilterItem : ''}`}
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
      )} */}
    </div>
  );
};

export default FilterDineOut;