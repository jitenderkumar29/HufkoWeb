// components/SearchBarOrderNow/SearchBarOrderNow.tsx
import React, { useState, useRef, useEffect } from 'react';
import { 
  ChevronDown, 
  Search,
  MapPin,
  Utensils,
  X
} from 'lucide-react';
import styles from './SearchBarOrderNow.module.scss';

interface SearchBarOrderNowProps {
  onSearch?: (data: SearchData) => void;
  className?: string;
  placeholder?: string;
}

interface SearchData {
  city: string;
  restaurant: string;
}

interface City {
  id: string;
  name: string;
  country: string;
}

interface Restaurant {
  id: string;
  name: string;
  cityId: string;
  cuisine: string;
  rating: number;
  image?: string;
}

// Sample Cities Data
const CITIES: City[] = [
  { id: '1', name: 'Dubai', country: 'UAE' },
  { id: '2', name: 'Abu Dhabi', country: 'UAE' },
  { id: '3', name: 'Sharjah', country: 'UAE' },
  { id: '4', name: 'Mumbai', country: 'India' },
  { id: '5', name: 'Delhi', country: 'India' },
  { id: '6', name: 'Bangalore', country: 'India' },
  { id: '7', name: 'London', country: 'UK' },
  { id: '8', name: 'Paris', country: 'France' },
  { id: '9', name: 'New York', country: 'USA' },
  { id: '10', name: 'Singapore', country: 'Singapore' },
];

// Sample Restaurants Data
const RESTAURANTS: Restaurant[] = [
  { id: '1', name: 'Taj Exotica Restaurant', cityId: '1', cuisine: 'Indian, International', rating: 4.8 },
  { id: '2', name: 'The Palm Grill', cityId: '1', cuisine: 'Seafood, Steakhouse', rating: 4.6 },
  { id: '3', name: 'Saffron Indian Cuisine', cityId: '1', cuisine: 'Indian, Mughlai', rating: 4.5 },
  { id: '4', name: 'La Petit Chef', cityId: '2', cuisine: 'French, Fine Dining', rating: 4.7 },
  { id: '5', name: 'Emirates Palace Restaurant', cityId: '2', cuisine: 'International, Buffet', rating: 4.4 },
  { id: '6', name: 'Mumbai Spice Kitchen', cityId: '4', cuisine: 'Indian, Street Food', rating: 4.3 },
  { id: '7', name: 'Delhi Darbar', cityId: '5', cuisine: 'North Indian, Mughlai', rating: 4.2 },
  { id: '8', name: 'Bangalore Bistro', cityId: '6', cuisine: 'South Indian, Continental', rating: 4.1 },
  { id: '9', name: 'The Ritz London', cityId: '7', cuisine: 'British, Fine Dining', rating: 4.9 },
  { id: '10', name: 'Le Jules Verne', cityId: '8', cuisine: 'French, Michelin', rating: 4.8 },
  { id: '11', name: 'Eleven Madison Park', cityId: '9', cuisine: 'American, Fine Dining', rating: 4.9 },
  { id: '12', name: 'Marina Bay Sands Restaurant', cityId: '10', cuisine: 'International, Asian', rating: 4.5 },
];

const SearchBarOrderNow: React.FC<SearchBarOrderNowProps> = ({
  onSearch,
  className = '',
  placeholder = 'Search restaurants...',
}) => {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [isRestaurantDropdownOpen, setIsRestaurantDropdownOpen] = useState(false);
  const [citySearchTerm, setCitySearchTerm] = useState('');
  const [restaurantSearchTerm, setRestaurantSearchTerm] = useState('');
  const [filteredCities, setFilteredCities] = useState<City[]>(CITIES);
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>(RESTAURANTS);

  const cityDropdownRef = useRef<HTMLDivElement>(null);
  const restaurantDropdownRef = useRef<HTMLDivElement>(null);
  const cityInputRef = useRef<HTMLInputElement>(null);
  const restaurantInputRef = useRef<HTMLInputElement>(null);

  // Filter cities based on search term
  useEffect(() => {
    if (citySearchTerm.trim() === '') {
      setFilteredCities(CITIES);
    } else {
      const filtered = CITIES.filter(city =>
        city.name.toLowerCase().includes(citySearchTerm.toLowerCase()) ||
        city.country.toLowerCase().includes(citySearchTerm.toLowerCase())
      );
      setFilteredCities(filtered);
    }
  }, [citySearchTerm]);

  // Filter restaurants based on selected city and search term
  useEffect(() => {
    let filtered = RESTAURANTS;
    
    // Filter by selected city
    if (selectedCity) {
      filtered = filtered.filter(restaurant => restaurant.cityId === selectedCity.id);
    }
    
    // Filter by search term
    if (restaurantSearchTerm.trim() !== '') {
      filtered = filtered.filter(restaurant =>
        restaurant.name.toLowerCase().includes(restaurantSearchTerm.toLowerCase()) ||
        restaurant.cuisine.toLowerCase().includes(restaurantSearchTerm.toLowerCase())
      );
    }
    
    setFilteredRestaurants(filtered);
  }, [selectedCity, restaurantSearchTerm]);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cityDropdownRef.current && !cityDropdownRef.current.contains(event.target as Node)) {
        setIsCityDropdownOpen(false);
      }
      if (restaurantDropdownRef.current && !restaurantDropdownRef.current.contains(event.target as Node)) {
        setIsRestaurantDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCitySelect = (city: City) => {
    setSelectedCity(city);
    setCitySearchTerm(city.name);
    setIsCityDropdownOpen(false);
    setSelectedRestaurant(null);
    setRestaurantSearchTerm('');
    if (cityInputRef.current) {
      cityInputRef.current.blur();
    }
  };

  const handleRestaurantSelect = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    setRestaurantSearchTerm(restaurant.name);
    setIsRestaurantDropdownOpen(false);
    if (restaurantInputRef.current) {
      restaurantInputRef.current.blur();
    }
  };

  const clearCitySelection = () => {
    setSelectedCity(null);
    setCitySearchTerm('');
    setSelectedRestaurant(null);
    setRestaurantSearchTerm('');
    if (cityInputRef.current) {
      cityInputRef.current.focus();
    }
  };

  const clearRestaurantSelection = () => {
    setSelectedRestaurant(null);
    setRestaurantSearchTerm('');
    if (restaurantInputRef.current) {
      restaurantInputRef.current.focus();
    }
  };

  const handleSearch = () => {
    const searchData: SearchData = {
      city: selectedCity?.name || '',
      restaurant: selectedRestaurant?.name || '',
    };
    if (onSearch) {
      onSearch(searchData);
    }
    
    // Close dropdowns
    setIsCityDropdownOpen(false);
    setIsRestaurantDropdownOpen(false);
  };

  return (
    <div className={`${styles.searchBarContainer} ${className}`}>
      <div className={styles.searchBar}>
        {/* City Selection */}
        <div className={styles.searchSection} ref={cityDropdownRef}>
          <div className={styles.inputWrapper}>
            <MapPin size={18} className={styles.icon} />
            <input
              ref={cityInputRef}
              type="text"
              value={citySearchTerm}
              onChange={(e) => {
                setCitySearchTerm(e.target.value);
                setIsCityDropdownOpen(true);
                if (e.target.value === '') {
                  setSelectedCity(null);
                }
              }}
              onFocus={() => setIsCityDropdownOpen(true)}
              placeholder="Select City or Location"
              className={styles.cityInput}
              autoComplete="off"
            />
            {selectedCity && (
              <button 
                className={styles.clearBtn}
                onClick={clearCitySelection}
                aria-label="Clear city"
              >
                <X size={16} />
              </button>
            )}
            <ChevronDown 
              size={16} 
              className={`${styles.chevron} ${isCityDropdownOpen ? styles.rotated : ''}`} 
            />
            
            {isCityDropdownOpen && (
              <div className={styles.cityDropdown}>
                <div className={styles.dropdownHeader}>
                  <span>{filteredCities.length} Cities</span>
                </div>
                <ul className={styles.cityList}>
                  {filteredCities.map((city) => (
                    <li 
                      key={city.id}
                      className={`${styles.cityItem} ${selectedCity?.id === city.id ? styles.active : ''}`}
                      onClick={() => handleCitySelect(city)}
                    >
                      <div className={styles.cityInfo}>
                        <span className={styles.cityName}>{city.name}</span>
                        <span className={styles.countryName}>{city.country}</span>
                      </div>
                    </li>
                  ))}
                  {filteredCities.length === 0 && (
                    <div className={styles.noResults}>
                      <span>No cities found</span>
                    </div>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className={styles.divider} />

        {/* Restaurant Selection */}
        <div className={styles.searchSection} ref={restaurantDropdownRef}>
          <div className={styles.inputWrapper}>
            <Utensils size={18} className={styles.icon} />
            <input
              ref={restaurantInputRef}
              type="text"
              value={restaurantSearchTerm}
              onChange={(e) => {
                setRestaurantSearchTerm(e.target.value);
                setIsRestaurantDropdownOpen(true);
                if (e.target.value === '') {
                  setSelectedRestaurant(null);
                }
              }}
              onFocus={() => setIsRestaurantDropdownOpen(true)}
              placeholder={selectedCity ? "Search for restaurant, cuisine or a dish" : "Select City first"}
              className={styles.restaurantInput}
              autoComplete="off"
              disabled={!selectedCity}
            />
            {selectedRestaurant && (
              <button 
                className={styles.clearBtn}
                onClick={clearRestaurantSelection}
                aria-label="Clear restaurant"
              >
                <X size={16} />
              </button>
            )}
            <ChevronDown 
              size={16} 
              className={`${styles.chevron} ${isRestaurantDropdownOpen ? styles.rotated : ''}`} 
            />
            
            {isRestaurantDropdownOpen && selectedCity && (
              <div className={styles.restaurantDropdown}>
                <div className={styles.dropdownHeader}>
                  <span>
                    {filteredRestaurants.length} Restaurants in {selectedCity.name}
                  </span>
                </div>
                <ul className={styles.restaurantList}>
                  {filteredRestaurants.map((restaurant) => (
                    <li 
                      key={restaurant.id}
                      className={`${styles.restaurantItem} ${selectedRestaurant?.id === restaurant.id ? styles.active : ''}`}
                      onClick={() => handleRestaurantSelect(restaurant)}
                    >
                      <div className={styles.restaurantInfo}>
                        <span className={styles.restaurantName}>{restaurant.name}</span>
                        <span className={styles.restaurantCuisine}>{restaurant.cuisine}</span>
                      </div>
                      <div className={styles.restaurantRating}>
                        <span>★</span>
                        <span>{restaurant.rating}</span>
                      </div>
                    </li>
                  ))}
                  {filteredRestaurants.length === 0 && (
                    <div className={styles.noResults}>
                      <span>No restaurants found in {selectedCity.name}</span>
                    </div>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Order Now Button */}
        <button 
          className={styles.orderButton} 
          onClick={handleSearch}
          disabled={!selectedCity}
        >
          <Search size={18} />
          <span>Order Now</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBarOrderNow;