// src/components/HomePage/FranchiseHufko/HeaderFranchise/HeaderFranchise.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Search, 
  User, 
  Heart, 
  ShoppingBag,
  MapPin
} from 'lucide-react';
import styles from './HeaderFranchise.module.scss';
import { homeHufkoFranchiseNavItems } from '@/components/HomePage/FranchiseHufko/FranchiseDetailsPage/FranchiseDetailsPage';

// Types
interface DropdownItem {
  label: string;
  href: string;
}

export interface NavItemHeaderFranchise {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

interface HeaderFranchiseProps {
  logoUrl?: string;
  logoAlt?: string;
  navItems?: NavItemHeaderFranchise[];
  onSearchClick?: () => void;
  onUserClick?: () => void;
  onWishlistClick?: () => void;
  onCartClick?: () => void;
  cartItemCount?: number;
  className?: string;
  // Video props
  videoSrc?: string;
  videoPoster?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  // Search props
  showHeroSearch?: boolean; // Control hero search visibility
  searchPlaceholder?: string;
  onHeroSearch?: (query: string) => void;
  showHeaderSearch?: boolean; // Control header search visibility
}



const HeaderFranchise: React.FC<HeaderFranchiseProps> = ({
  logoUrl = '/icons/logo.png',
  logoAlt = 'Yesmadam | Salon',
  navItems = homeHufkoFranchiseNavItems,
  onSearchClick,
  onUserClick,
  onWishlistClick,
  onCartClick,
  cartItemCount = 0,
  className = '',
  videoSrc = '/videos/hero-bg.mp4',
  videoPoster = '/images/hero-poster.jpg',
  heroTitle = 'TAJ HOTELS',
  heroSubtitle = 'Experience Luxury Redefined',
  showHeroSearch = false, // Default: show hero search
  searchPlaceholder = 'Click here to search for Ultra Premium Dine.',
  onHeroSearch,
  showHeaderSearch = false, // Default: hide header search
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const headerRef = useRef<HTMLElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  // Focus search input when opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [isSearchOpen]);

  // Close dropdowns on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (activeDropdown) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeDropdown]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const toggleDropdown = (label: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen && onSearchClick) {
      onSearchClick();
    }
  };

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onHeroSearch && searchQuery.trim()) {
      onHeroSearch(searchQuery);
    }
  };

  return (
    <>
      <header 
        ref={headerRef}
        className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${className}`}
        role="banner"
      >
        <div className={styles.container}>
          {/* Logo */}
          <div className={styles.logo}>
            <Link href="/" className={styles.logoLink} aria-label="Home">
              {logoUrl ? (
                <Image
                  src={logoUrl}
                  alt={logoAlt}
                  width={180}
                  height={50}
                  className={styles.logoImage}
                  priority
                />
              ) : (
                <span className={styles.logoText}>
                  Yesmadam <span>| Salon</span>
                </span>
              )}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className={styles.nav} role="navigation" aria-label="Main navigation">
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li 
                  key={item.label} 
                  className={styles.navItem}
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
                >
                  <Link 
                    href={item.href} 
                    className={`${styles.navLink} ${activeDropdown === item.label ? styles.active : ''}`}
                    aria-expanded={activeDropdown === item.label}
                    aria-haspopup={item.hasDropdown}
                  >
                    {item.label}
                    {item.hasDropdown && <ChevronDown size={14} className={styles.dropdownArrow} />}
                  </Link>
                  {item.hasDropdown && item.dropdownItems && (
                    <ul className={`${styles.dropdown} ${activeDropdown === item.label ? styles.dropdownOpen : ''}`}>
                      {item.dropdownItems.map((dropdownItem) => (
                        <li key={dropdownItem.label}>
                          <Link href={dropdownItem.href} className={styles.dropdownLink}>
                            {dropdownItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Action Buttons */}
         
        </div>

        {/* Header Search Bar - Expanded - Only render if showHeaderSearch is true */}
        {showHeaderSearch && (
          <div className={`${styles.searchBar} ${isSearchOpen ? styles.searchOpen : ''}`}>
            <div className={styles.searchContainer}>
              <Search size={20} className={styles.searchIcon} />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search for services, products, locations..."
                className={styles.searchInput}
                aria-label="Search"
              />
              <button 
                className={styles.searchClose}
                onClick={handleSearchToggle}
                aria-label="Close search"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Mobile Menu Overlay */}
        <div 
          className={`${styles.mobileOverlay} ${isMobileMenuOpen ? styles.overlayOpen : ''}`}
          onClick={closeMobileMenu}
        />

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.menuOpen : ''}`}>
          <div className={styles.mobileMenuHeader}>
            <span className={styles.mobileMenuTitle}>Menu</span>
            <button 
              className={styles.mobileMenuClose}
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <ul className={styles.mobileNavList}>
            {navItems.map((item) => (
              <li key={item.label} className={styles.mobileNavItem}>
                <Link 
                  href={item.href} 
                  className={styles.mobileNavLink}
                  onClick={(e) => {
                    if (item.hasDropdown) {
                      toggleDropdown(item.label, e);
                    } else {
                      closeMobileMenu();
                    }
                  }}
                >
                  <span className={styles.mobileNavLabel}>
                    {item.label}
                  </span>
                  {item.hasDropdown && (
                    <ChevronDown 
                      size={16} 
                      className={`${styles.mobileDropdownArrow} ${activeDropdown === item.label ? styles.rotated : ''}`}
                    />
                  )}
                </Link>
                {item.hasDropdown && item.dropdownItems && (
                  <ul className={`${styles.mobileDropdown} ${activeDropdown === item.label ? styles.mobileDropdownOpen : ''}`}>
                    {item.dropdownItems.map((dropdownItem) => (
                      <li key={dropdownItem.label}>
                        <Link 
                          href={dropdownItem.href} 
                          className={styles.mobileDropdownLink}
                          onClick={closeMobileMenu}
                        >
                          {dropdownItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            {/* Mobile Action Buttons */}
            <li className={styles.mobileNavItem}>
              <div className={styles.mobileActions}>
                <button className={styles.mobileActionBtn} onClick={onUserClick}>
                  <User size={18} />
                  <span>Account</span>
                </button>
                <button className={styles.mobileActionBtn} onClick={onWishlistClick}>
                  <Heart size={18} />
                  <span>Wishlist</span>
                </button>
                <button className={styles.mobileActionBtn} onClick={onCartClick}>
                  <ShoppingBag size={18} />
                  <span>Cart {cartItemCount > 0 && `(${cartItemCount})`}</span>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </header>

      {/* Hero Section with Video */}
      <section className={styles.heroSection}>
        {/* Video Background */}
        <div className={styles.videoWrapper}>
          <video
            ref={videoRef}
            className={styles.heroVideo}
            autoPlay
            loop
            muted
            playsInline
            poster={videoPoster}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={styles.videoOverlay} />
        </div>

        {/* Hero Content */}
        <div className={styles.heroContent}>
          <div className={styles.heroContainer}>
            {heroTitle && (
              <h1 className={styles.heroTitle}>{heroTitle}</h1>
            )}
            {heroSubtitle && (
              <p className={styles.heroSubtitle}>{heroSubtitle}</p>
            )}

            {/* Hero Search Bar - Only render if showHeroSearch is true */}
            {showHeroSearch && (
              <form className={styles.heroSearch} onSubmit={handleHeroSearch}>
                <div className={styles.heroSearchWrapper}>
                  <MapPin className={styles.heroSearchIcon} size={20} />
                  <input
                    type="text"
                    className={styles.heroSearchInput}
                    placeholder={searchPlaceholder}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Search destinations or hotels"
                  />
                  <button type="submit" className={styles.heroSearchButton}>
                    <Search size={20} />
                    <span>Search</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={styles.scrollIndicator}>
          <span>Scroll</span>
          <div className={styles.scrollLine} />
        </div>
      </section>
    </>
  );
};

export default HeaderFranchise;