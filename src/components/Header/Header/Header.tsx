// components/Header/Header.tsx
import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems,] = useState(3);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const toggleLocationModal = () => {
    setShowLocationModal(!showLocationModal);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const placeholders = [
    "Shopping",
    "Food Delivery",
    "Grocery Delivery",
    "Flower Delivery",
    "Care",
    "Pharma"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
        setAnimate(false);
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, [placeholders.length]);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Reset to home page with no query parameters
    const params = new URLSearchParams();
    // Remove all query parameters
    router.push('/', { scroll: false });
    
    // Force a re-render of HeaderCategory by dispatching a custom event
    window.dispatchEvent(new CustomEvent('logoClick'));
    
    // Alternatively, you can use a state management solution like Zustand or Context
    // to trigger a reset in HeaderCategory
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.leftSection}>
          <Link href="/" onClick={handleLogoClick} scroll={false}>
            <Image 
              src={"/icons/logo.png"} 
              className={styles.logo} 
              alt='Logo' 
              width={1080} 
              height={266} 
              priority
            />
          </Link>
          <div className={styles.locationContainer} onClick={toggleLocationModal}>
            <div className={styles.deliveryTime}>Delivery in 10 minutes</div>
            <div className={styles.deliveryLocation}>
              <FaMapMarkerAlt className={styles.locationIcon} />
              <span className={styles.locationText}>
                B62, Pocket B, South City |, Sect..
                <IoIosArrowDown className={styles.dropdownIcon} />
              </span>
            </div>
          </div>
        </div>

        <div className={styles.searchContainer}>
          <form onSubmit={handleSearch} className={styles.searchForm}>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                className={styles.searchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {!searchQuery && (
                <>
                  <span className={styles.animatedPlaceholderFix}>Search for </span>
                  <span className={`${styles.animatedPlaceholder} ${animate ? styles.fadeOut : styles.fadeIn}`}>
                    &quot;{placeholders[placeholderIndex]}&quot;
                  </span>
                </>
              )}
            </div>
            <button type="submit" className={styles.searchButton}>
              <FaSearch className={styles.searchIcon} />
            </button>
          </form>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.actionButtons}>
            <button className={styles.actionButton}>
              <span>Offer</span>
            </button>
            <button className={styles.loginButton}><span>Login</span>
            </button>
            <button className={styles.cartButton}>
              <ShoppingCart className={styles.cartIcon} />
              <div className={styles.cartDetails}>
                <span className={styles.cartItems}>{cartItems} items</span>
                <span className={styles.cartPrice}>₹90</span>
              </div>
            </button>
          </div>
        </div>

        {showLocationModal && (
          <div className={styles.locationModal}>
            <div className={styles.modalContent}>
              <h3>Change Location</h3>
              <button className={styles.detectLocationButton}>
                Detect my location
              </button>
              <div className={styles.orDivider}>OR</div>
              <input
                type="text"
                placeholder="Search delivery location"
                className={styles.locationSearch}
              />
              <button className={styles.closeModal} onClick={toggleLocationModal}>
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;