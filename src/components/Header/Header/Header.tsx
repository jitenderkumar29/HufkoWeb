"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Header.module.scss";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AddressSelection, { AddressData } from "@/components/Address/AddressSelection/AddressSelection";
import { getCountryFlagByCode, getCountryFlagUrl, Language, languages } from "./CountryFlag";
import ReactCountryFlag from "react-country-flag";
const Header = () => {
  const router = useRouter();
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems] = useState(3);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [address, setAddress] = useState<AddressData>({ country: "India", pincode: "", fullAddress: "Location missing", countryCode: "IN" });
  const [isOpen, setIsOpen] = useState(false);
  const languageWrapperRef = useRef<HTMLDivElement>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(() => languages.find((language) => language.countryCode.toUpperCase() === "IN") || languages[0]);
  const toggleDropdown = () => {
    setIsOpen((previous) => !previous);
  };
  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageWrapperRef.current && !languageWrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const toggleLocationModal = () => {
    setShowLocationModal((previous) => !previous);
  };
  const handleAddressConfirm = (addressData: AddressData) => {
    const countryName = addressData.country || "India";
    setAddress({
      country: countryName,
      pincode: addressData.pincode || "",
      fullAddress: addressData.fullAddress || `${addressData.pincode || ""}, ${countryName}`,
      countryCode: addressData.countryCode,
      city: addressData.city,
      state: addressData.state,
      locality: addressData.locality,
      lat: addressData.lat,
      lng: addressData.lng,
    });
    setShowLocationModal(false);
    console.log("Address confirmed:", addressData);
  };
  const handleAddressClose = () => {
    setShowLocationModal(false);
  };
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };
  const placeholders = ["Shopping", "Food Delivery", "Grocery Delivery", "Flower Delivery", "Care", "Pharma"];
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      const timeout = setTimeout(() => {
        setPlaceholderIndex((previous) => (previous + 1) % placeholders.length);
        setAnimate(false);
      }, 300);
      return () => clearTimeout(timeout);
    }, 2000);
    return () => clearInterval(interval);
  }, [placeholders.length]);
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push("/", { scroll: false });
    window.dispatchEvent(new CustomEvent("logoClick"));
  };
  const getDisplayAddress = () => {
    if (address.fullAddress && address.fullAddress !== "Location missing") {
      const parts = address.fullAddress.split(",").map((part) => part.trim()).filter(Boolean);
      if (parts.length > 3) {
        return `${parts[0]}, ${parts[1]}, ${parts[2]}`;
      }
      return address.fullAddress;
    }
    return "Location missing";
  };
  const isLocationSet = Boolean(address.fullAddress) && address.fullAddress !== "Location missing" && Boolean(address.country);
  const getCountryName = () => {
    if (isLocationSet && address.country) {
      return address.country;
    }
    return "India";
  };
  const getCountryFlag = () => {
    if (address.countryCode) {
      return getCountryFlagByCode(address.countryCode);
    }
    return getCountryFlagUrl(getCountryName());
  };
  const [flagKey, setFlagKey] = useState(0);
  useEffect(() => {
    setFlagKey((previous) => previous + 1);
  }, [address.country, address.countryCode]);
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.leftSection}>
          <Link href="/" onClick={handleLogoClick} scroll={false}>
            <Image src="/icons/logo.png" className={styles.logo} alt="Logo" width={1080} height={266} priority />
          </Link>
          <div className={`${styles.locationContainer} ${!isLocationSet ? styles.locationMissing : ""}`} onClick={toggleLocationModal} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleLocationModal(); } }}>
            <div className={styles.deliveryTime}>{isLocationSet ? `Delivery to ${getCountryName()}` : "Delivery in 10 minutes"}</div>
            <div className={styles.deliveryLocation}>
              <img key={flagKey} src={getCountryFlag()} alt={getCountryName()} className={styles.flagIcon} width={20} height={20} onError={(e) => { const target = e.currentTarget; target.onerror = null; target.src = getCountryFlagUrl("India"); }} />
              <span className={styles.locationText}>{getDisplayAddress()}<IoIosArrowDown className={styles.dropdownIcon} /></span>
            </div>
          </div>
        </div>
        <div className={styles.searchContainer}>
          <form onSubmit={handleSearch} className={styles.searchForm}>
            <div className={styles.inputWrapper}>
              <input type="text" className={styles.searchInput} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} aria-label="Search" />
              {!searchQuery && (
                <>
                  <span className={styles.animatedPlaceholderFix}>Search for </span>
                  <span className={`${styles.animatedPlaceholder} ${animate ? styles.fadeOut : styles.fadeIn}`}>&quot;{placeholders[placeholderIndex]}&quot;</span>
                </>
              )}
            </div>
            <button type="submit" className={styles.searchButton} aria-label="Search"><FaSearch className={styles.searchIcon} /></button>
          </form>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.actionButtons}>
            <div ref={languageWrapperRef} className={styles.languageWrapper}>
              <div className={styles.languageSelector} onClick={toggleDropdown} role="button" tabIndex={0} aria-expanded={isOpen} aria-haspopup="menu" onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleDropdown(); } }}>
                <ReactCountryFlag countryCode={selectedLanguage.countryCode} svg className={styles.languageFlag} title={selectedLanguage.countryName} />
                <span>{selectedLanguage.code}</span>
                <FaChevronDown className={`${styles.languageArrow} ${isOpen ? styles.languageArrowOpen : ""}`} />
              </div>
              {isOpen && (
                <div className={styles.dropdownMenu} role="menu">
                  {languages.map((language) => (
                    <div key={`${language.code}-${language.countryCode}`} className={styles.dropdownItem} role="menuitem" tabIndex={0} onClick={() => handleLanguageSelect(language)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleLanguageSelect(language); } }}>
                      <ReactCountryFlag countryCode={language.countryCode} svg className={styles.dropdownFlag} title={language.countryName} />
                      <div className={styles.languageInfo}>
                        <span className={styles.languageName}>{language.name}</span>
                        <span className={styles.countryName}>{language.countryName}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button type="button" className={styles.actionButton}><span>Company</span></button>
            <button type="button" className={styles.loginButton}><span>Login</span></button>
            <button type="button" className={styles.cartButton}>
              <ShoppingCart className={styles.cartIcon} />
              <div className={styles.cartDetails}>
                <span className={styles.cartItems}>{cartItems} items</span>
                <span className={styles.cartPrice}>₹90</span>
              </div>
            </button>
          </div>
        </div>
        {showLocationModal && (
          <AddressSelection onConfirm={handleAddressConfirm} onClose={handleAddressClose} initialCountry={address.country || "India"} initialPincode={address.pincode} />
        )}
      </div>
    </header>
  );
};
export default Header;