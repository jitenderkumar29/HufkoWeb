'use client';
import React, { useEffect, useState, useRef } from 'react';
import styles from './DineOutRestDetailsTabs.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInfoCircle,
    faShoppingBag,
    faStar,
    faCamera,
    faClipboardList,
    faCalendarCheck,
    faChevronDown,
    faArrowRight,
    faStore,
    faMapMarkerAlt,
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

const restaurentDummyImages = [
    "./products/44d2068bb86bb7dc8a0a9a2b2a735e67.jpeg",
    "/products/44d5c61d18d31c3f585ce8d53a6ad855.jpeg",
    "/products/ad602487725baa27e3b484c14dbe41f2.jpeg",
    "/products/3e934b44d095bc2cd92e21ccfc8d3ec2.jpg",
    "/products/558952cc07fa4a3d9f6e1e02c25467e7.jpg",
    "/products/959efb74d0b20696a1052d2183090da7.jpg",
    "/products/abac42bc23fe1bf46b1c5350867e4a8f.jpg",
    "/products/fa2236bc99952c2de3fb9675e97d5989.jpg",
    "/products/477baf9c3c38dd0df40e6153de1e79a1.jpg",
    "/products/c1ba536f8903cdc9cb2880f7d8d4b862.jpeg",
    "/products/29d1b5096fd85674097a619240d6cc23.jpg",
    "/products/913d58c585e2696e78f3fe78517ac713.jpg",
    "/products/3abc6de7523f7bc54d7f1075c54160f2.jpg",
    "/products/951effdee8d490dfa5202a635a4beaed.jpg",
    "/products/432f87390f1cd45f448affc85ef412c9.jpg",
    "/products/38694f72ea3660f273988af1e3a7c513.jpg",
    "/products/0f05e1723f7b0782c4f39e839bd99d6b.jpg",
    "/products/5c2cb4c377d477cc7f1c09918846abca.jpg",
    "/products/e000ce927731205809597c98bd0ac87d.jpg",
    "/products/a4d40de9e6e140d53ec67f78b35de73d.jpg",
    "/products/d6e5609d063b958111307130ebb57c03.jpg",
    "/products/d97cf77213e2e13a8829c958c9ef3c76.jpg",
    "/products/c60ce471fbdd328d8d724328ecc2ea3f.jpg",
    "/products/2da59374990669c1ce98b824c6c83b01.jpeg",
    "/products/323977ba9f70eb683f0823ec35953881.jpg",
    "/products/2b4275a5ef09b21ca0e8158e1bfdf07c.jpg",
    "/products/484492bcc4100818a664beb9c6392a9c.jpg",
    "/products/5e8fb92d7645f10eb62caceaffe87d7c.jpg",
    "/products/5e8fb92d7645f10eb62caceaffe87d7c1.jpg",
    "/products/5e8fb92d7645f10eb62caceaffe87d7c2.jpg"
];

// Overview Content Component
const OverviewContent = ({ restaurant }: { restaurant?: any }) => {
    const [activeOfferTab, setActiveOfferTab] = useState<'booking' | 'walkin'>('booking');

    // Updated renderOfferContent with improved styling
    const renderOfferContent = () => {
        return (
            <div className={styles.offerContentWrapper}>
                <div className={styles.offerCard}>
                    <h4 className={styles.offerTypeTitle}>
                        {activeOfferTab === "booking"
                            ? "RESTAURANT OFFER"
                            : "WALK-IN OFFER"}
                    </h4>

                    <div className={styles.offerMainContent}>
                        <div className={styles.offerIcon}>
                            <img
                                src="https://dt4l9bx31tioh.cloudfront.net/eazymedia/icons/offer_25202605.png"
                                alt="Deal Icon"
                                className={styles.sideOfferIcon}
                            />
                        </div>

                        <div className={styles.offerDetails}>
                            <h4 className={styles.offerTitle}>
                                {activeOfferTab === "booking"
                                    ? "40% Off On Entire Bill."
                                    : "Flat 20% Off"}
                            </h4>

                            {activeOfferTab === "booking" && (
                                <span className={styles.offerDescription}>
                                    Book & Pay to Claim
                                </span>
                            )}
                        </div>
                    </div>

                    <div className={styles.addOnTitle}>
                        ADD-ON OFFERS
                    </div>

                    <div className={styles.addOnOffer}>
                        <div className={styles.addOnBankLogo}>
                            IndusInd Bank
                        </div>

                        <div className={styles.addOnText}>
                            <strong>Upto 20% off</strong>
                            <span>with IndusInd</span>
                        </div>
                    </div>

                    <div className={styles.offerDots}>
                        <span className={`${styles.offerDot} ${styles.active}`} />
                        <span className={styles.offerDot} />
                        <span className={styles.offerDot} />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className={styles.overviewWrapper}>
            {/* Left Column - 70% */}
            <div className={styles.overviewLeft}>
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

                {/* Menu Section */}
                <div className={styles.menuSection}>
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
                            <div className={styles.menuPageImage}>
                                <img src="/products/restaurant_menu_1.png" alt="Food Menu" />
                            </div>
                            <h4>Food</h4>
                            <p>16 pages</p>
                        </div>
                        <div className={styles.menuPageCard}>
                            <div className={styles.menuPageImage}>
                                <img src="/products/restaurant_menu_2.png" alt="Beverages Menu" />
                            </div>
                            <h4>Beverages</h4>
                            <p>1 page</p>
                        </div>
                    </div>
                </div>

                {/* Average Cost Section */}
                <div className={styles.costSection}>
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
                </div>

                {/* More Info Section */}
                <div className={styles.moreInfoSection}>
                    <h3 className={styles.sectionTitle}>More Info</h3>
                    <div className={styles.moreInfoGrid}>
                        <div className={styles.moreInfoItem}><span className={styles.checkIcon}>✓</span> Lunch</div>
                        <div className={styles.moreInfoItem}><span className={styles.checkIcon}>✓</span> Dinner</div>
                        <div className={styles.moreInfoItem}><span className={styles.checkIcon}>✓</span> Home delivery</div>
                        <div className={styles.moreInfoItem}><span className={styles.checkIcon}>✓</span> Takeaway available</div>
                        <div className={styles.moreInfoItem}><span className={styles.checkIcon}>✓</span> Wheelchair accessible</div>
                        <div className={styles.moreInfoItem}><span className={styles.checkIcon}>✓</span> Stags allowed</div>
                        <div className={styles.moreInfoItem}><span className={styles.checkIcon}>✓</span> Less noisy</div>
                        <div className={styles.moreInfoItem}><span className={styles.checkIcon}>✓</span> Step-free entry</div>
                        <div className={styles.moreInfoItem}><span className={styles.checkIcon}>✓</span> Parking available</div>
                        <div className={styles.moreInfoItem}><span className={styles.checkIcon}>✓</span> Free parking</div>
                        <div className={styles.moreInfoItem}><span className={styles.checkIcon}>✓</span> Work friendly</div>
                        <div className={styles.moreInfoItem}><span className={styles.checkIcon}>✓</span> Smoking area</div>
                        <div className={styles.moreInfoItem}><span className={styles.checkIcon}>✓</span> Wifi</div>
                        <div className={styles.moreInfoItem}><span className={styles.checkIcon}>✓</span> Indoor seating</div>
                        <div className={styles.moreInfoItem}><span className={styles.checkIcon}>✓</span> Kid friendly</div>
                        <div className={styles.moreInfoItem}><span className={styles.checkIcon}>✓</span> Family friendly</div>
                        <div className={styles.moreInfoItem}><span className={styles.checkIcon}>✓</span> Low-intensity music</div>
                        <div className={styles.moreInfoItem}><span className={styles.checkIcon}>✓</span> Large group seating</div>
                        <div className={styles.moreInfoItem}><span className={styles.checkIcon}>✓</span> Vegetarian friendly</div>
                    </div>
                </div>
            </div>

            {/* Right Column - 30% - Updated with improved styling */}
            <div className={styles.overviewRight}>
                <div className={styles.offersForYou}>
                    <h3 className={styles.offersForYouTitle}>Offers For You</h3>

                    {/* Tabs Row */}
                    {/* Tabs Row */}
                    <div className={styles.sideOfferTabs}>
                        <div
                            className={`${styles.sideOfferTab} ${activeOfferTab === 'booking' ? styles.activeTab : styles.nonactiveTab}`}
                            onClick={() => setActiveOfferTab('booking')}
                        >
                            <span className={styles.sideOfferTabLabel}>BOOKING OFFER</span>
                            <span className={styles.sideOfferTabDiscount}>(Upto 40% Off)</span>
                        </div>
                        <div
                            className={`${styles.sideOfferTab} ${activeOfferTab === 'walkin' ? styles.activeTab : styles.nonactiveTab}`}
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

const filters = ['All (52)', 'Food (41)', 'Ambience (8)'];

const PhotosContent = ({ restaurant }: { restaurant?: any }) => {
    const [activeTab, setActiveTab] = useState('All');

    return (
        <div className={styles.photosContainer}>
            <h2 className={styles.photosHeading}>{restaurant?.name} Photos</h2>

            <div className={styles.photosTabsContainer}>
                {filters.map((filter) => {
                    const label = filter.split(' ')[0];
                    const isActive = activeTab === label;
                    return (
                        <button
                            key={filter}
                            onClick={() => setActiveTab(label)}
                            className={`${styles.photosTabButton} ${isActive ? styles.photosActiveTab : ''}`}
                        >
                            {filter}
                        </button>
                    );
                })}
            </div>

            <div className={styles.photosGrid}>
                {restaurentDummyImages.map((src, index) => (
                    <div key={index} className={styles.photosImageWrapper}>
                        <img src={src} alt="Gallery" loading="lazy" className={styles.photosImage} />
                    </div>
                ))}
            </div>

            <div className={styles.photosPagination}>
                <div className={styles.photosShowingText}>Showing 1-30 of 52 images</div>
                <div className={styles.photosControls}>
                    <a href="#1" className={`${styles.photosPageNum} ${styles.photosActiveNum}`}>1</a>
                    <a href="#2" className={styles.photosPageNum}>2</a>
                    <a href="#next" className={styles.photosPageNum}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="20" height="20" viewBox="0 0 20 20">
                            <path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

const SimilarRestaurantsContent = () => (
    <div className={styles.tabContent}>
        <h3 className={styles.contentTitle}>Similar Restaurants</h3>
    </div>
);

const LocationContent = () => (
    <div className={styles.tabContent}>
        <h3 className={styles.contentTitle}>Location</h3>
    </div>
);

// Main Component
const DineOutRestDetailsTabs: React.FC<DineOutRestDetailsTabsProps> = ({
    onTabChange,
    activeTabId = 'overview',
    className = '',
    restaurantData,
}) => {
    const [activeTab, setActiveTab] = useState<string>(activeTabId);
    const tabRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    const customTabs: TabItem[] = [
        { id: 'overview', label: 'Overview', icon: faInfoCircle, content: <OverviewContent restaurant={restaurantData} /> },
        { id: 'order-online', label: 'Order Online', icon: faShoppingBag, count: 5, content: <OrderOnlineContent /> },
        { id: 'reviews', label: 'Reviews', icon: faStar, count: 42, content: <ReviewsContent /> },
        { id: 'photos', label: 'Photos', icon: faCamera, count: 128, content: <PhotosContent restaurant={restaurantData} /> },
        { id: 'similar-restaurants', label: 'Similar Restaurants', icon: faStore, content: <SimilarRestaurantsContent /> },
        { id: 'location', label: 'Location', icon: faMapMarkerAlt, content: <LocationContent /> },
    ];

    // Scroll-based active tab detection
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150;

            let activeSection = customTabs[0]?.id || 'overview';

            for (const tab of customTabs) {
                const element = tabRefs.current[tab.id];
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const elementTop = rect.top + window.scrollY;

                    if (scrollPosition >= elementTop - 100) {
                        activeSection = tab.id;
                    }
                }
            }

            if (activeSection !== activeTab) {
                setActiveTab(activeSection);
                if (onTabChange) {
                    onTabChange(activeSection);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        setTimeout(handleScroll, 100);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeTab, onTabChange, customTabs]);

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
        if (onTabChange) {
            onTabChange(tabId);
        }

        const element = tabRefs.current[tabId];
        if (element) {
            const headerOffset = 120;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className={`${styles.tabsContainer} ${className}`}>
            {/* Navigation Bar - Hotel Style */}
            <nav className={styles.tabNav}>
                {customTabs.map((tab) => (
                    <a
                        key={tab.id}
                        href={`#${tab.id}`}
                        onClick={(e) => {
                            e.preventDefault();
                            handleTabClick(tab.id);
                        }}
                        className={`${styles.tabLink} ${activeTab === tab.id ? styles.active : ''}`}
                    >
                        {tab.icon && <FontAwesomeIcon icon={tab.icon} className={styles.tabIcon} />}
                        <span className={styles.tabLabel}>{tab.label}</span>
                        {tab.count !== undefined && tab.count > 0 && (
                            <span className={styles.tabCount}>{tab.count}</span>
                        )}
                    </a>
                ))}
            </nav>

            {/* Content Sections */}
            <main className={styles.mainContentBody}>
                {customTabs.map((tab) => (
                    <section
                        key={tab.id}
                        id={tab.id}
                        ref={(el) => {
                            tabRefs.current[tab.id] = el;
                        }}
                        className={`${styles.section} ${activeTab === tab.id ? styles.activeSection : ''}`}
                    >
                        <div className={styles.sectionContent}>
                            {tab.content}
                        </div>
                    </section>
                ))}
            </main>
        </div>
    );
};

export default DineOutRestDetailsTabs;