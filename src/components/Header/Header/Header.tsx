// components/Header/Header.tsx
import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AddressSelection, { AddressData } from '@/components/Address/AddressSelection/AddressSelection';

const Header = () => {
  const router = useRouter();
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems] = useState(3);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  
  // State for address display - using "Location missing" as placeholder
  const [address, setAddress] = useState<AddressData>({
    country: '',
    pincode: '',
    fullAddress: 'Location missing'
  });

  const toggleLocationModal = () => {
    setShowLocationModal(!showLocationModal);
  };

  const handleAddressConfirm = (addressData: AddressData) => {
    setAddress({
      country: addressData.country,
      pincode: addressData.pincode,
      fullAddress: addressData.fullAddress || `${addressData.pincode}, ${addressData.country}`
    });
    setShowLocationModal(false);
    console.log('Address confirmed:', addressData);
  };

  const handleAddressClose = () => {
    setShowLocationModal(false);
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
    router.push('/', { scroll: false });
    window.dispatchEvent(new CustomEvent('logoClick'));
  };

  // Format address display
  const getDisplayAddress = () => {
    if (address.fullAddress && address.fullAddress !== 'Location missing') {
      const parts = address.fullAddress.split(',');
      if (parts.length > 3) {
        return `${parts[0]}, ${parts[1]}, ${parts[2]}`;
      }
      return address.fullAddress;
    }
    return 'Location missing';
  };

  // Check if location is set
  const isLocationSet = address.fullAddress && address.fullAddress !== 'Location missing';

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
          <div 
            className={`${styles.locationContainer} ${!isLocationSet ? styles.locationMissing : ''}`} 
            onClick={toggleLocationModal}
          >
            <div className={styles.deliveryTime}>Delivery in 10 minutes</div>
            <div className={styles.deliveryLocation}>
              <FaMapMarkerAlt className={`${styles.locationIcon} ${!isLocationSet ? styles.missingIcon : ''}`} />
              <span className={styles.locationText}>
                {getDisplayAddress()}
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
            <button className={styles.loginButton}>
              <span>Login</span>
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
          <AddressSelection 
            onConfirm={handleAddressConfirm}
            onClose={handleAddressClose}
            initialCountry={address.country || 'India'}
            initialPincode={address.pincode}
          />
        )}
      </div>
    </header>
  );
};

export default Header;