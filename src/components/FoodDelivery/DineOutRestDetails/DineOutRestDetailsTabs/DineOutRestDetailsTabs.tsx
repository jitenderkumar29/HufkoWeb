'use client';
import React, { useState } from 'react';
import styles from './DineOutRestDetailsTabs.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faList,
    faUtensils,
    faStar,
    faImage,
    faBook,
    faChevronDown,
    faClock,
    faLocationDot,
    faPhone,
    faEnvelope,
    faGlobe,
    faThumbsUp,
    faUser,
    faInfoCircle,
    faShoppingBag,
    faCamera,
    faClipboardList,
    faCalendarCheck,
    faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

export interface TabItem {
    id: string;
    label: string;
    icon?: any;
    count?: number;
    content?: React.ReactNode;
}

interface DineOutRestDetailsTabsProps {
    onTabChange?: (tabId: string) => void;
    activeTabId?: string;
    className?: string;
    restaurantData?: {
        cuisine?: string[];
        name?: string;
        location?: string;
        rating?: number;
        category?: string;
        oldPrice?: string;
        newPrice?: string;
        taxes?: string;
        ratingCategory?: string;
        totalRatings?: number;
        reviewScore?: number;
        commonFeature?: string;
        breakdown?: { stars: number; count: number }[];
        features?: string[];
    };
}

// Overview Content with Tab Switching
const OverviewContent = ({ restaurant }: { restaurant?: any }) => {
    const [activeOfferTab, setActiveOfferTab] = useState<'booking' | 'walkin'>('booking');

    const renderOfferContent = () => {
        if (activeOfferTab === 'booking') {
            return (
                <>
                    <div className={styles.sideOfferCard}>
                        <div className={styles.sideOfferBadge}>WALK-IN OFFER</div>
                        <div className={styles.sideOfferIconWrapper}>
                            <img 
                                src="https://dt4l9bx31tioh.cloudfront.net/eazymedia/icons/offer_25202605.png" 
                                alt="Deal Icon" 
                                className={styles.sideOfferIcon}
                            />
                            <div className={styles.sideOfferTextWrapper}>
                                <p className={styles.sideOfferBrand}>PRIME</p>
                                <p className={styles.sideOfferDesc}>40% Off On Entire Bill.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.sideOfferCard}>
                        <div className={styles.sideOfferBadge}>ADD-ON OFFERS</div>
                        <div className={styles.sideOfferCarousel}>
                            <div className={styles.sideOfferCarouselItem}>
                                <div className={styles.sideOfferPaymentCard}>
                                    <div className={styles.sideOfferPaymentLogo}>
                                        <img 
                                            src="https://dt4l9bx31tioh.cloudfront.net/eazymedia/icons/new_coupon_25_logo_indusind_full_28thJuly.png" 
                                            alt="IndusInd" 
                                            className={styles.sideOfferPaymentLogoImg}
                                        />
                                    </div>
                                    <div className={styles.sideOfferPaymentText}>
                                        <p className={styles.sideOfferPaymentValue}>Upto 20% off</p>
                                        <span className={styles.sideOfferPaymentName}>with IndusInd</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.sideOfferCarouselDots}>
                                <span className={`${styles.sideOfferDot} ${styles.activeDot}`}></span>
                                <span className={styles.sideOfferDot}></span>
                                <span className={styles.sideOfferDot}></span>
                            </div>
                        </div>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div className={styles.sideOfferCard}>
                        <div className={styles.sideOfferBadge}>WALK-IN OFFER</div>
                        <div className={styles.sideOfferIconWrapper}>
                            <img 
                                src="https://dt4l9bx31tioh.cloudfront.net/eazymedia/icons/offer_25202605.png" 
                                alt="Deal Icon" 
                                className={styles.sideOfferIcon}
                            />
                            <div className={styles.sideOfferTextWrapper}>
                                <p className={styles.sideOfferBrand}>PRIME</p>
                                <p className={styles.sideOfferDesc}>Flat 20% Off</p>
                                <span className={styles.sideOfferDescSmall}>Book & Pay to Claim</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.sideOfferCard}>
                        <div className={styles.sideOfferBadge}>ADD-ON OFFERS</div>
                        <div className={styles.sideOfferCarousel}>
                            <div className={styles.sideOfferCarouselItem}>
                                <div className={styles.sideOfferPaymentCard}>
                                    <div className={styles.sideOfferPaymentLogo}>
                                        <img 
                                            src="https://dt4l9bx31tioh.cloudfront.net/eazymedia/icons/new_coupon_25_logo_indusind_full_28thJuly.png" 
                                            alt="IndusInd" 
                                            className={styles.sideOfferPaymentLogoImg}
                                        />
                                    </div>
                                    <div className={styles.sideOfferPaymentText}>
                                        <p className={styles.sideOfferPaymentValue}>Upto 20% off</p>
                                        <span className={styles.sideOfferPaymentName}>with IndusInd</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.sideOfferCarouselDots}>
                                <span className={`${styles.sideOfferDot} ${styles.activeDot}`}></span>
                                <span className={styles.sideOfferDot}></span>
                                <span className={styles.sideOfferDot}></span>
                            </div>
                        </div>
                    </div>
                </>
            );
        }
    };

    return (
        <div className={styles.tabContentWrapper}>
            {/* Left Column - 70% */}
            <div className={styles.tabContentLeft}>
                {/* Dining Offers Section */}
                <div className={styles.offersSection}>
                    <h3 className={styles.sectionTitle}>Dining Offers</h3>
                    <p className={styles.sectionSubtitle}>Tap on any offer to know more</p>
                    <div className={styles.offersGrid}>
                        <div className={`${styles.offerCard} ${styles.highlightedOffer}`}>
                            <h4 className={styles.offerTitle}>PRE-BOOK OFFER</h4>
                            <div className={styles.offerBody}>
                                <h5 className={styles.offerSubTitle}>Flat 10% OFF</h5>
                                <p className={styles.offerDesc}>Valid from 1PM to 11:55PM today<br />Booking required</p>
                            </div>
                        </div>
                        <div className={`${styles.offerCard} ${styles.noHighlightedOffer}`}>
                            <h4 className={styles.offerTitle}>INSTANT OFFER</h4>
                            <div className={styles.offerBody}>
                                <h5 className={styles.offerSubTitle}>Flat 10% OFF</h5>
                                <p className={styles.offerDesc}>on bill payments</p>
                            </div>
                        </div>
                        <div className={`${styles.offerCard} ${styles.noHighlightedOffer}`}>
                            <h4 className={styles.offerTitle}>SURPRISE</h4>
                            <div className={styles.offerBody}>
                                <h5 className={styles.offerSubTitle}>Get a scratch card</h5>
                                <p className={styles.offerDesc}>after every transaction</p>
                            </div>
                        </div>
                        <div className={`${styles.offerCard} ${styles.noHighlightedOffer}`}>
                            <h4 className={styles.offerTitle}>EXCLUSIVE OFFER</h4>
                            <div className={styles.offerBody}>
                                <h5 className={styles.offerSubTitle}>FLAT ₹175 OFF</h5>
                                <p className={styles.offerDesc}>valid on your next dining payment</p>
                            </div>
                        </div>
                        <div className={`${styles.offerCard} ${styles.noHighlightedOffer}`}>
                            <h4 className={styles.offerTitle}>BANK OFFER</h4>
                            <div className={styles.offerBody}>
                                <h5 className={styles.offerSubTitle}>25% OFF for up to ₹5,000 using RBL Bank LUMIÈRE Credit Card</h5>
                                <p className={styles.offerDesc}>and more with other banks</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Table Reservation Section */}
                {/* <div className={styles.reservationSection}>
                    <div className={styles.reservationHeader}>
                        <h3 className={styles.sectionTitle}>Table reservation</h3>
                        <div className={styles.reservationBadge}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 16 17" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.04079 1.18164C8.64572 0.270833 7.35428 0.270833 6.95921 1.18164C6.66851 1.85182 5.82962 2.07664 5.24284 1.64163C4.44538 1.05042 3.32696 1.69625 3.44014 2.68261C3.52342 3.40838 2.9093 4.02261 2.18367 3.93931C1.1975 3.82612 0.55178 4.94474 1.14288 5.74235C1.57781 6.32924 1.35303 7.16829 0.682979 7.45904C-0.22766 7.85419 -0.22766 9.14586 0.682979 9.54101C1.35303 9.83176 1.57781 10.6708 1.14288 11.2577C0.55178 12.0553 1.1975 13.1739 2.18367 13.0607C2.9093 12.9774 3.52342 13.5917 3.44014 14.3174C3.32696 15.3038 4.44538 15.9496 5.24284 15.3584C5.82962 14.9234 6.66851 15.1482 6.95921 15.8184C7.35428 16.7292 8.64572 16.7292 9.04079 15.8184C9.33149 15.1482 10.1704 14.9234 10.7572 15.3584C11.5546 15.9496 12.673 15.3038 12.5599 14.3174C12.4766 13.5917 13.0907 12.9774 13.8163 13.0607C14.8025 13.1739 15.4482 12.0553 14.8571 11.2577C14.4222 10.6708 14.647 9.83176 15.317 9.54101C16.2277 9.14586 16.2277 7.85419 15.317 7.45904C14.647 7.16829 14.4222 6.32924 14.8571 5.74235C15.4482 4.94474 14.8025 3.82612 13.8163 3.93931C13.0907 4.02261 12.4766 3.40838 12.5599 2.68261C12.673 1.69625 11.5546 1.05042 10.7572 1.64163C10.1704 2.07664 9.33149 1.85182 9.04079 1.18164ZM7.43199 6.76503C7.43199 7.41264 6.90696 7.93777 6.25947 7.93777C5.61197 7.93777 5.08694 7.41264 5.08694 6.76503C5.08694 6.11741 5.61197 5.59229 6.25947 5.59229C6.90696 5.59229 7.43199 6.11741 7.43199 6.76503ZM5.09802 11.0651C5.09802 10.852 5.18335 10.6585 5.32145 10.5178L10.0096 5.82814C10.1405 5.7291 10.304 5.67047 10.4806 5.67047C10.9124 5.67047 11.2622 6.02034 11.2622 6.4523C11.2622 6.62886 11.2036 6.79239 11.1059 6.92139L6.4158 11.6124C6.27445 11.7518 6.08163 11.8404 5.86797 11.8469C5.44196 11.8404 5.09802 11.4931 5.09802 11.0651ZM10.1679 9.50142C9.52039 9.50142 8.99536 10.0266 8.99536 10.6742C8.99536 11.3218 9.52039 11.8469 10.1679 11.8469C10.8154 11.8469 11.3404 11.3218 11.3404 10.6742C11.3404 10.0266 10.8154 9.50142 10.1679 9.50142Z" fill="url(#paint0_linear)"></path>
                                <defs><linearGradient id="paint0_linear" x1="0" y1="16.5015" x2="16" y2="16.5015" gradientUnits="userSpaceOnUse"><stop stopColor="#538CEE" /><stop offset="1" stopColor="#1155CB" /></linearGradient></defs>
                            </svg>
                            <span>Flat 10% OFF + 3 more offers</span>
                        </div>
                    </div>
                    <div className={styles.reservationControls}>
                        <div className={styles.reservationSelect}>
                            <span>Today</span>
                            <FontAwesomeIcon icon={faChevronDown} className={styles.selectIcon} />
                        </div>
                        <div className={styles.reservationSelect}>
                            <span>1 guest</span>
                            <FontAwesomeIcon icon={faChevronDown} className={styles.selectIcon} />
                        </div>
                    </div>
                    <button className={styles.bookTableBtn}>Book a table</button>
                </div> */}

                {/* Menu Section */}
                {/* <div className={styles.menuSection}>
                    <div className={styles.menuHeader}>
                        <h3 className={styles.sectionTitle}>Menu</h3>
                        <a href="#" className={styles.seeAllLink}>See all menus <FontAwesomeIcon icon={faArrowRight} /></a>
                    </div>
                    <div className={styles.cuisineSection}>
                        <h4 className={styles.cuisineTitle}>Cuisines</h4>
                        <div className={styles.cuisineTags}>
                            {restaurant?.cuisine && restaurant.cuisine.length > 0 ? (
                                restaurant.cuisine.map((item: string, index: number) => (
                                    <span key={index} className={styles.cuisineTag}>
                                        <span className={styles.cuisineDot}>✦</span>
                                        {item}
                                        <span className={styles.cuisineDot}>✦</span>
                                    </span>
                                ))
                            ) : (
                                <>
                                    <span className={styles.cuisineTag}><span className={styles.cuisineDot}>✦</span>North Indian<span className={styles.cuisineDot}>✦</span></span>
                                    <span className={styles.cuisineTag}><span className={styles.cuisineDot}>✦</span>Mughlai<span className={styles.cuisineDot}>✦</span></span>
                                    <span className={styles.cuisineTag}><span className={styles.cuisineDot}>✦</span>Chinese<span className={styles.cuisineDot}>✦</span></span>
                                    <span className={styles.cuisineTag}><span className={styles.cuisineDot}>✦</span>Kebab<span className={styles.cuisineDot}>✦</span></span>
                                    <span className={styles.cuisineTag}><span className={styles.cuisineDot}>✦</span>Biryani<span className={styles.cuisineDot}>✦</span></span>
                                    <span className={styles.cuisineTag}><span className={styles.cuisineDot}>✦</span>Seafood<span className={styles.cuisineDot}>✦</span></span>
                                    <span className={styles.cuisineTag}><span className={styles.cuisineDot}>✦</span>Desserts<span className={styles.cuisineDot}>✦</span></span>
                                    <span className={styles.cuisineTag}><span className={styles.cuisineDot}>✦</span>Beverages<span className={styles.cuisineDot}>✦</span></span>
                                </>
                            )}
                        </div>
                    </div>
                    <div className={styles.menuPages}>
                        <div className={styles.menuPageCard}>
                            <div className={styles.menuPageImage}>🍽️</div>
                            <h4>Food</h4>
                            <p>16 pages</p>
                        </div>
                        <div className={styles.menuPageCard}>
                            <div className={styles.menuPageImage}>🥤</div>
                            <h4>Beverages</h4>
                            <p>1 page</p>
                        </div>
                    </div>
                </div> */}

                {/* Average Cost Section */}
                {/* <div className={styles.costSection}>
                    <div className={styles.knownForSection}>
                        <h4 className={styles.knownForTitle}>People Say This Place Is Known For</h4>
                        <p className={styles.knownForTags}>Ambience, Service, Portion Size, Food, Packaging, Value for Money</p>
                    </div>
                    <h3 className={styles.sectionTitle}>Average Cost</h3>
                    <p className={styles.costAmount}>₹2,000 for two people (approx.)</p>
                    <p className={styles.costNote}>Exclusive of applicable taxes and charges, if any</p>
                    <p className={styles.costHelp}>How do we calculate cost for two?</p>
                    <div className={styles.paymentMethods}>
                        <span>Cash and Cards accepted</span>
                        <span>Digital payments accepted</span>
                    </div>
                </div> */}

                {/* More Info Section */}
                {/* <div className={styles.moreInfoSection}>
                    <h3 className={styles.sectionTitle}>More Info</h3>
                    <div className={styles.moreInfoGrid}>
                        <div className={styles.moreInfoItem}><span>✓</span> Lunch</div>
                        <div className={styles.moreInfoItem}><span>✓</span> Dinner</div>
                        <div className={styles.moreInfoItem}><span>✓</span> Home delivery</div>
                        <div className={styles.moreInfoItem}><span>✓</span> Takeaway available</div>
                        <div className={styles.moreInfoItem}><span>✓</span> Wheelchair accessible</div>
                        <div className={styles.moreInfoItem}><span>✓</span> Stags allowed</div>
                        <div className={styles.moreInfoItem}><span>✓</span> Less noisy</div>
                        <div className={styles.moreInfoItem}><span>✓</span> Step-free entry</div>
                        <div className={styles.moreInfoItem}><span>✓</span> Parking available</div>
                        <div className={styles.moreInfoItem}><span>✓</span> Free parking</div>
                        <div className={styles.moreInfoItem}><span>✓</span> Work friendly</div>
                        <div className={styles.moreInfoItem}><span>✓</span> Smoking area</div>
                        <div className={styles.moreInfoItem}><span>✓</span> Wifi</div>
                        <div className={styles.moreInfoItem}><span>✓</span> Indoor seating</div>
                        <div className={styles.moreInfoItem}><span>✓</span> Kid friendly</div>
                        <div className={styles.moreInfoItem}><span>✓</span> Family friendly</div>
                        <div className={styles.moreInfoItem}><span>✓</span> Low-intensity music</div>
                        <div className={styles.moreInfoItem}><span>✓</span> Large group seating</div>
                        <div className={styles.moreInfoItem}><span>✓</span> Vegetarian friendly</div>
                    </div>
                </div> */}
            </div>

            {/* Right Column - 30% */}
            <div className={styles.tabContentRight}>
                <div className={styles.offersForYou}>
                    <h3 className={styles.offersForYouTitle}>Offers For You</h3>
                    
                    {/* Tabs Row */}
                    <div className={styles.sideOfferTabs}>
                        <div 
                            className={`${styles.sideOfferTab} ${activeOfferTab === 'booking' ? styles.activeTab : ''}`}
                            onClick={() => setActiveOfferTab('booking')}
                        >
                            <span className={styles.sideOfferTabLabel}>BOOKING OFFER</span>
                            <span className={styles.sideOfferTabDiscount}>(Upto 40% Off)</span>
                        </div>
                        <div 
                            className={`${styles.sideOfferTab} ${activeOfferTab === 'walkin' ? styles.activeTab : ''}`}
                            onClick={() => setActiveOfferTab('walkin')}
                        >
                            <span className={styles.sideOfferTabLabel}>WALK-IN OFFER</span>
                            <span className={styles.sideOfferTabDiscount}>(Upto 20% Off)</span>
                        </div>
                    </div>

                    {/* Dynamic Content Based on Active Tab */}
                    {renderOfferContent()}

                    {/* Action Buttons */}
                    <div className={styles.sideOfferActions}>
                        <button className={styles.sideBookNowBtn}>Book Now</button>
                        <button className={styles.sidePayBillBtn}>Pay Bill</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const OrderOnlineContent = () => (
    <div className={styles.tabContent}>
        <h3 className={styles.contentTitle}>Order Online</h3>
        <p className={styles.contentText}>
            Order your favorite dishes online and get them delivered to your doorstep.
        </p>
    
    </div>
);

const ReviewsContent = () => (
    <div className={styles.tabContent}>
        <div className={styles.reviewsHeader}>
            <h3 className={styles.contentTitle}>Customer Reviews</h3>
            <div className={styles.ratingSummary}>
                <span className={styles.ratingScore}>4.5</span>
                <div className={styles.ratingStars}>★★★★★</div>
                <span className={styles.ratingCount}>3,145 Reviews</span>
            </div>
        </div>
       
    </div>
);

const PhotosContent = () => (
    <div className={styles.tabContent}>
        <h3 className={styles.contentTitle}>Photo Gallery</h3>
   
    </div>
);

const MenuContent = () => (
    <div className={styles.tabContent}>
        <h3 className={styles.contentTitle}>Our Menu</h3>
       
        
    </div>
);

const BookTableContent = () => (
    <div className={styles.tabContent}>
        <h3 className={styles.contentTitle}>Book a Table</h3>
        
    </div>
);

// Custom tabs with content
const DineOutRestDetailsTabs: React.FC<DineOutRestDetailsTabsProps> = ({
    onTabChange,
    activeTabId = 'overview',
    className = '',
    restaurantData,
}) => {
    const [activeTab, setActiveTab] = useState<string>(activeTabId);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    const customTabs: TabItem[] = [
        { id: 'overview', label: 'Overview', icon: faInfoCircle, content: <OverviewContent restaurant={restaurantData} /> },
        { id: 'order-online', label: 'Order Online', icon: faShoppingBag, count: 5, content: <OrderOnlineContent /> },
        { id: 'reviews', label: 'Reviews', icon: faStar, count: 42, content: <ReviewsContent /> },
        { id: 'photos', label: 'Photos', icon: faCamera, count: 128, content: <PhotosContent /> },
        { id: 'menu', label: 'Menu', icon: faClipboardList, content: <MenuContent /> },
        { id: 'book-table', label: 'Book a Table', icon: faCalendarCheck, content: <BookTableContent /> },
    ];

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
        setIsDropdownOpen(false);
        if (onTabChange) {
            onTabChange(tabId);
        }
    };

    const activeTabData = customTabs.find((tab) => tab.id === activeTab);

    return (
        <div className={`${styles.tabsContainer} ${className}`}>
            <div className={styles.tabsNavigation}>
                <div className={styles.desktopTabs}>
                    {customTabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
                            onClick={() => handleTabClick(tab.id)}
                            aria-label={`Tab: ${tab.label}`}
                        >
                            {tab.icon && <FontAwesomeIcon icon={tab.icon} className={styles.tabIcon} />}
                            <span className={styles.tabLabel}>{tab.label}</span>
                            {tab.count !== undefined && tab.count > 0 && (
                                <span className={styles.tabCount}>{tab.count}</span>
                            )}
                        </button>
                    ))}
                </div>

                <div className={styles.mobileDropdown}>
                    <button
                        className={styles.dropdownButton}
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        aria-expanded={isDropdownOpen}
                        aria-label="Toggle tabs menu"
                    >
                        <span className={styles.dropdownButtonContent}>
                            {activeTabData?.icon && (
                                <FontAwesomeIcon icon={activeTabData.icon} className={styles.dropdownIcon} />
                            )}
                            <span className={styles.dropdownLabel}>{activeTabData?.label}</span>
                        </span>
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className={`${styles.dropdownChevron} ${isDropdownOpen ? styles.chevronOpen : ''}`}
                        />
                    </button>

                    {isDropdownOpen && (
                        <div className={styles.dropdownMenu}>
                            {customTabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    className={`${styles.dropdownItem} ${activeTab === tab.id ? styles.dropdownItemActive : ''}`}
                                    onClick={() => handleTabClick(tab.id)}
                                >
                                    {tab.icon && <FontAwesomeIcon icon={tab.icon} className={styles.dropdownItemIcon} />}
                                    <span className={styles.dropdownItemLabel}>{tab.label}</span>
                                    {tab.count !== undefined && tab.count > 0 && (
                                        <span className={styles.dropdownItemCount}>{tab.count}</span>
                                    )}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className={styles.tabContentWrapper}>
                {customTabs.map((tab) => (
                    <div
                        key={tab.id}
                        className={`${styles.tabPane} ${activeTab === tab.id ? styles.tabPaneActive : ''}`}
                    >
                        {tab.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DineOutRestDetailsTabs;