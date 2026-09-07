'use client';
import React, { useEffect, useState, useRef } from 'react';
import styles from './DineOutRestDetailsTabs.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInfoCircle,
    faShoppingBag,
    faStar,
    faCamera,
    faArrowRight,
    faStore,
    faMapMarkerAlt,
    faUtensils,
    faBuilding,
} from '@fortawesome/free-solid-svg-icons';
import DineOutItemsHorizontal from '../../FoodDesigns/DineOutItemsHorizontal/DineOutItemsHorizontal';
import { DineoutItemsList } from '@/app/data/Categorywise/FoodsCategories';
import { DineOutItemInterface } from '../../FoodDesigns/DineOutItemsListCard/DineOutItemsListCard';
import Image from 'next/image';
import { FaChevronDown } from 'react-icons/fa';

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

// Modal Component
const OrderOnlineModal = ({
    isOpen,
    onClose,
    children
}: {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}) => {
    if (!isOpen) return null;

    return (
        <div
            className={styles.modalOverlay}
            onClick={onClose}
        >
            <div
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className={styles.modalCloseBtn}
                    onClick={onClose}
                >
                    ✕
                </button>
                {children}
            </div>
        </div>
    );
};

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
const OverviewContent = ({ restaurant, onOpenOrderModal }: { restaurant?: any; onOpenOrderModal?: () => void }) => {
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
                        <div className={`${styles.offerCard} ${styles.noHighlightedOffer}`}>
                            <h4 className={styles.offerTitle}>CASHBACK OFFER</h4>
                            <div className={styles.offerBody}>
                                <h5 className={styles.offerSubTitle}>Get Flat ₹200 Cashback</h5>
                                <p className={styles.offerDesc}>on minimum bill of ₹1,000 • Valid on all payment methods</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Menu Section */}
                <div className={styles.menuSection}>
                    <div className={styles.menuHeader}>
                        <h3 className={styles.sectionTitle}>Menu</h3>
                        <button onClick={onOpenOrderModal} className={styles.seeAllLink}>
                            View Full Menu <FontAwesomeIcon icon={faArrowRight} />
                        </button>
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
                    <h3 className={styles.offersForYouTitle}>Table Reservation</h3>

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
                        <button className={styles.sideBookNowBtn}>Book Table</button>
                        <button className={styles.sidePayBillBtn}>Pay Bill</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const AboutContent = () => (
    <div className={styles.tabContent}>
        <h3 className={styles.contentTitle}>About Content</h3>
    </div>
);


// SVG Icons
const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="#B5B5B5" width="17" height="17" viewBox="0 0 20 20" role="img">
        <title>Search</title>
        <path d="M19.78 19.12l-3.88-3.9c1.28-1.6 2.080-3.6 2.080-5.8 0-5-3.98-9-8.98-9s-9 4-9 9c0 5 4 9 9 9 2.2 0 4.2-0.8 5.8-2.1l3.88 3.9c0.1 0.1 0.3 0.2 0.5 0.2s0.4-0.1 0.5-0.2c0.4-0.3 0.4-0.8 0.1-1.1zM1.5 9.42c0-4.1 3.4-7.5 7.5-7.5s7.48 3.4 7.48 7.5-3.38 7.5-7.48 7.5c-4.1 0-7.5-3.4-7.5-7.5z"></path>
    </svg>
);

const CrossIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="#B5B5B5" width="17" height="17" viewBox="0 0 20 20" role="img">
        <title>cross</title>
        <path d="M11.42 10.42l3.54-3.54c0.38-0.4 0.38-1.040 0-1.42s-1.020-0.4-1.42 0l-3.54 3.54-3.54-3.54c-0.4-0.4-1.020-0.4-1.42 0s-0.38 1.020 0 1.42l3.54 3.54-3.54 3.54c-0.38 0.38-0.38 1.020 0 1.42 0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28l3.54-3.56 3.54 3.56c0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28c0.38-0.4 0.38-1.040 0-1.42l-3.54-3.54z"></path>
    </svg>
);

const ExploreIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="#828282" width="14" height="14" viewBox="0 0 20 20" role="img">
        <title>explore</title>
        <path d="M10 0.42c-5.52 0-10 4.48-10 10s4.48 10 10 10c5.52 0 10-4.48 10-10v0c0-5.52-4.48-10-10-10v0zM10 18.98c-4.74 0-8.58-3.84-8.58-8.56s3.84-8.58 8.58-8.58c4.74 0 8.58 3.84 8.58 8.58v0c0 4.72-3.84 8.56-8.58 8.56v0zM14.28 5.84l-5.8 2.6c-0.2 0.1-0.36 0.26-0.46 0.46v0l-2.6 5.8c0 0.020 0 0.040 0 0.060 0 0.14 0.1 0.24 0.22 0.24 0.040 0 0.060 0 0.080-0.020v0l5.78-2.58c0.2-0.1 0.36-0.26 0.46-0.46v-0.020l2.62-5.8c0-0.020 0-0.040 0-0.060 0-0.12-0.1-0.22-0.22-0.22-0.020 0-0.060 0-0.080 0v0zM10 11.6c-0.66 0-1.18-0.52-1.18-1.18s0.52-1.2 1.18-1.2c0.66 0 1.2 0.54 1.2 1.2v0c0 0.66-0.54 1.18-1.2 1.18v0z"></path>
    </svg>
);

const VegIcon = () => (
    <svg viewBox="0 0 20 20" className={styles.orderOnlineFoodTypeIcon} fill="#3AB757">
        <g clipPath="url(#clip0_veg)">
            <path d="M15 10C15 12.74 12.76 15 10 15C7.24 15 5 12.74 5 10C5 7.26 7.26 5 10 5C12.74 5 15 7.24 15 10ZM20 4V16C20 18.26 18.26 20 16 20H4C1.76 20 0 18.26 0 16V4C0 1.74 1.76 0 4 0H16C18.26 0 20 1.74 20 4V4ZM18.34 4C18.34 2.74 17.26 1.66 16 1.66H4C2.76 1.66 1.66 2.74 1.66 4V16C1.66 17.26 2.76 18.34 4 18.34H16C17.26 18.34 18.34 17.26 18.34 16V4V4Z"></path>
        </g>
        <defs><clipPath id="clip0_veg"><rect width="20" height="20"></rect></clipPath></defs>
    </svg>
);

const NonVegIcon = () => (
    <svg viewBox="0 0 20 20" className={styles.orderOnlineFoodTypeIcon} fill="#BF4C43">
        <g clipPath="url(#clip0_nonveg)">
            <path d="M20 4V16C20 18.26 18.26 20 16 20H4C1.76 20 0 18.26 0 16V4C0 1.74 1.76 0 4 0H16C18.26 0 20 1.74 20 4ZM18.34 4C18.34 2.74 17.26 1.66 16 1.66H4C2.76 1.66 1.66 2.74 1.66 4V16C1.66 17.26 2.76 18.34 4 18.34H16C17.26 18.34 18.34 17.26 18.34 16V4Z"></path>
            <path d="M9.99996 3.75L15.8333 14.5833H4.16663L9.99996 3.75Z"></path>
        </g>
        <defs><clipPath id="clip0_nonveg"><rect width="20" height="20"></rect></clipPath></defs>
    </svg>
);

const OrderOnlineContent = () => {
    const [activeCategory, setActiveCategory] = useState("Today's Exclusive Dishes (1)");
    const [searchTerm, setSearchTerm] = useState('');

    const categories = [
        "Today's Exclusive Dishes (1)", "Combos (4)", "Soups and Salads (19)",
        "Starters (72)", "Main Course (48)", "Breads (12)", "Rice and Biryani (6)",
        "Fried Rice and Noodles (4)", "Accompaniments (7)", "Desserts and Beverages (4)"
    ];

    const menuData = [
        {
            category: "Today's Exclusive Dishes (1)",
            items: [
                { name: "Dal Makhani", desc: "Creamy and buttery Dal Makhani", type: "veg", img: "/products/028c52fee52f05670233532ed4c9585b.jpeg" }
            ]
        },
        {
            category: "Combos (4)",
            items: [
                { name: "Paneer Naan with Gravy Combo", desc: "Paneer Naan+Gravy Combo", type: "veg", img: "/products/1fe0fc9e89f9f855c493ab42222fa92d.jpeg" },
                { name: "Onion Naan with Gravy Combo", desc: "Gravy combo", type: "veg", img: "/products/0d0f1760c936b8b0e708f0f4b3041f57.jpeg" },
                { name: "Chicken Naan with Gravy Combo", desc: "Gravy Combo", type: "non-veg", img: "/products/0d0f1760c936b8b0e708f0f4b3041f571.jpeg" },
                { name: "Keema Naan with Gravy Combo", desc: "[Chef's Special]", type: "non-veg", img: "/products/711fbe1b30e557278513c39a3f81788a.jpeg" }
            ]
        },
        {
            category: "Soups and Salads (19)",
            items: [
                { name: "Veg Sweet Corn Soup", desc: "Shrimped pieces cooked with aroma of spices with sweety salty flavour.", type: "veg", img: "/products/988dc404663063dde160a0dc223b2eff.jpeg" },
                { name: "Veg Hot and Sour Soup", desc: "Shrimped pieces cooked with aroma of spices with sweety salty flavour.", type: "veg", img: "/products/1ebe5c2e985b75ec702aa9b717e329f7.jpeg" },
                { name: "Veg Manchow Soup", desc: "Shrimped pieces cooked with aroma of spices with sweety salty flavour.", type: "veg", img: "/products/bb8fe59f3c891d5aee7df764193c75f6.jpeg" },
                { name: "Veg Clear Soup", desc: "Shrimped pieces cooked with aroma of spices with sweety salty flavour.", type: "veg", img: "/products/8ebcd3b47fcb11e21a7efa3f2bc1bf76.jpeg" },
                { name: "Veg Lemon Coriander Soup", desc: "", type: "veg", img: "/products/bc01d0ee47a98270d771a6acda3cbd84.jpeg" },
                { name: "Veg Beijing soup", desc: "Shrimped pieces cooked with aroma of spices with sweety salty flavour.", type: "veg", img: "/products/9315bd9e73440e755f1bf0871e1467c0.jpeg" },
                { name: "Cream of Mushroom Soup", desc: "", type: "veg", img: "/products/fd7ae90db0b122d5daaf7cf5791f01ad2.jpeg" },
                { name: "Non Veg Sweet Corn Soup", desc: "Shrimped pieces cooked with aroma of spices with sweety salty flavour.", type: "non-veg", img: "/products/988dc404663063dde160a0dc223b2eff.jpeg" },
                { name: "Chicken Hot and Sour Soup", desc: "", type: "non-veg", img: "/products/1ebe5c2e985b75ec702aa9b717e329f7.jpeg" },
                { name: "Non Veg Manchow Soup", desc: "Shrimped pieces cooked with aroma of spices with sweety salty flavour.", type: "non-veg", img: "/products/fd7ae90db0b122d5daaf7cf5791f01ad.jpeg" },
                { name: "Chicken Clear Soup", desc: "", type: "non-veg", img: "/products/fd7ae90db0b122d5daaf7cf5791f01ad1.jpeg" },
                { name: "Non Veg Lemon Coriander Soup", desc: "Shrimped pieces cooked with aroma of spices with sweet salty flavour.", type: "non-veg", img: "/products/3524a9feb30d5f9fb9d87c8642c2f405.jpeg" },
                { name: "Chicken Beijing Soup", desc: "", type: "non-veg", img: "/products/0a10d03200a293735beae79bd888a61d.jpeg" },
                { name: "Cream of Chicken Soup", desc: "", type: "non-veg", img: "/products/0a10d03200a293735beae79bd888a61d1.jpeg" },
                { name: "Coleslaw Salad", desc: "", type: "veg", img: "/products/0a10d03200a293735beae79bd888a61d2.jpeg" },
                { name: "Fresh Garden Salad", desc: "", type: "veg", img: "/products/ed1d378970e55b413a1e7c9d9e15154a.jpeg" },
                { name: "Veg Crispy Salad", desc: "", type: "veg", img: "/products/44001147ad1ba6319f66475ee1b0c086.jpeg" },
                { name: "Chicken Crispy Salad", desc: "", type: "non-veg", img: "/products/c5779f51c9ac9ca7327fd68cb14ab9b9.jpeg" },
                { name: "Chicken Tikka Salad", desc: "", type: "non-veg", img: "/products/c5779f51c9ac9ca7327fd68cb14ab9b91.jpeg" }
            ]
        },
        {
            category: "Starters (72)",
            items: [
                { name: "Paneer Tikka", desc: "Paneer pieces marinated in Indian spices and charred in tandoor with some aroma ... read more", type: "veg", img: "/products/8a67c9071bb5eed463cca7c7de6aa362.jpeg" },
                { name: "Afghani Paneer Tikka", desc: "[Chef's Special]", type: "veg", img: "/products/f409f86f4bcd36bbc07e59af62f1402d.jpeg" },
                { name: "Tandoori Stuffed Aloo", desc: "[Chef's Special]", type: "veg", img: "/products/ce99e934a34ac17b7322403fad69f160.jpeg" },
                { name: "Assorted Platter", desc: "Assortments of veg starters..", type: "veg", img: "/products/75588d11d5f43281f6d89a571eeaf560.jpeg" },
                { name: "Spinach Corn Roll", desc: "[Chef's Special]", type: "veg", img: "/products/eeaf9d04ef45046dc361cd54d04abacf.jpeg" },
                { name: "Chilli Paneer", desc: "Hot and spicy, this dish is filled with the rich flavor of paneer ... read more", type: "veg", img: "/products/6c269607b78facd2e1ee23125b6bc428.jpeg" },
                { name: "Tandoori Chicken", desc: "[Chef's Special]", type: "non-veg", img: "/products/c9f65aa5dcfe4a2edfffbc11a0622444.jpeg" },
                { name: "Tangri Chicken", desc: "", type: "non-veg", img: "/products/8dbd32fc412c637c060a20f708b3b858.jpeg" },
                { name: "Chicken Seekh Kebab", desc: "", type: "non-veg", img: "/products/d264892b757995a1e03047f2e6475108.jpeg" },
                { name: "Mutton Seekh Kebab", desc: "[Chef's Special]", type: "non-veg", img: "/products/05fd847bd5c365f086443d69371878ba.jpeg" },
                { name: "Afghani Fish Tikka [7 Pieces]", desc: "[Chef's Special]", type: "non-veg", img: "/products/75af0eb486b10db6b1a5aa557d2a0547.jpeg" }
            ]
        },
        {
            category: "Main Course (48)",
            items: [
                { name: "Baba's Butter Paneer", desc: "[Chef's Special]", type: "veg", img: "/products/094b4b1bf680add85f42dc3ca2383dda.jpeg" },
                { name: "Kadhai Paneer", desc: "A delectable dish of soft and creamy paneer cooked in a spicy and ... read more", type: "veg", img: "/products/83b408de5d0baefcdb6266e7e1c22289.jpeg" },
                { name: "Baba's Butter Chicken", desc: "[Chef's Special]", type: "non-veg", img: "/products/6646faed2f82486ac7fe6a680e7e6876.jpeg" },
                { name: "Babas Special Mutton", desc: "[Chef's Special]", type: "non-veg", img: "/products/9fbcca69c9e3d022bf040498fa8f6323.jpeg" },
                { name: "Baba's Butter Fish", desc: "[Chef's Special]", type: "non-veg", img: "/products/9f19082459d69fa7322db894c5c62132.jpeg" }
            ]
        },
        {
            category: "Breads (12)",
            items: [
                { name: "Tandoori Roti", desc: "Indian flatbread made of a mix of wheat flour and all-purpose flour", type: "veg", img: "/products/6e2b7acb9048dbc31dd8c94b503ed41a.jpeg" },
                { name: "Butter Roti", desc: "", type: "veg", img: "/products/2e5f13eb3fa0e0bb054d512378728742.jpeg" },
                { name: "Lachha Paratha", desc: "A layered flatbread that originated from the region of Punjab.", type: "veg", img: "/products/e6f7b8eae434ca6080ff8806a6f848f7.jpeg" },
                { name: "Butter Naan", desc: "The perfect soft, fluffy and delicious butter naan", type: "veg", img: "/products/b8433b7401f7c5dfff2544c312882036.jpeg" },
                { name: "Garlic Naan", desc: "[Chef's Special]", type: "veg", img: "/products/7dbe4669f46e28e923bffd6367736607.jpeg" }
            ]
        },
        {
            category: "Rice and Biryani (6)",
            items: [
                { name: "Steamed Rice", desc: "", type: "veg", img: "/products/59617507b52962400544dec2d0f94625.jpeg" },
                { name: "Jeera Rice", desc: "Basmati rice cooked with aroma.", type: "veg", img: "/products/0a347c31cd67b562c06d1e638f09ab45.jpeg" },
                { name: "Chicken Firdous Biryani", desc: "A flavorful and aromatic dish made with tender chicken pieces, saffron rice, and ... read more", type: "non-veg", img: "/products/ef1a1138ea39c79af116d4c8920ddc33.jpg" },
                { name: "Mutton Biryani", desc: "", type: "non-veg", img: "/products/40e67f621a92618d7552bb1db12160bf.jpeg" }
            ]
        },
        {
            category: "Fried Rice and Noodles (4)",
            items: [
                { name: "Veg Fried Rice", desc: "Basmati rice cooked with aroma.", type: "veg", img: "/products/8064020f7688994a3cb5629f1fc5318e.jpeg" },
                { name: "Veg Noodles", desc: "", type: "veg", img: "/products/3bcf0a23df4616af41e388496c737565.jpeg" },
                { name: "Chicken Fried Rice", desc: "Basmati rice cooked with aroma.", type: "non-veg", img: "/products/3bcf0a23df4616af41e388496c7375651.jpeg" },
                { name: "Chicken Noodles", desc: "", type: "non-veg", img: "/products/3bcf0a23df4616af41e388496c7375652.jpeg" }
            ]
        },
        {
            category: "Accompaniments (7)",
            items: [
                { name: "Boondi Raita", desc: "", type: "veg", img: "/products/1f06280512fd69951d1fa80c555c921e1.jpeg" },
                { name: "Cucumber Raita", desc: "", type: "veg", img: "/products/1f06280512fd69951d1fa80c555c921e2.jpeg" },
                { name: "Pineapple Raita", desc: "", type: "veg", img: "/products/1f06280512fd69951d1fa80c555c921e.jpeg" },
                { name: "Mixed Raita", desc: "", type: "veg", img: "/products/25c78deb5b85b1cc936b602564627b46.jpeg" },
                { name: "Masala Papad", desc: "", type: "veg", img: "/products/e379cd837d134d7e93021acd2b94d6fb.jpeg" }
            ]
        },
        {
            category: "Desserts and Beverages (4)",
            items: [
                { name: "Gulab Jamun [2 Pieces]", desc: "A beloved Indian dessert consisting of fried balls of a dough made from ... read more", type: "veg", img: "/products/d864c1bc8ccb5260607ef94429a18077.jpeg" },
                { name: "Coke [250 ml]", desc: "", type: "veg", img: "/products/d7f4f193ede0ce82ff1f53c499836c5d.jpeg" },
                { name: "Thums Up [250 ml]", desc: "", type: "veg", img: "/products/d7f4f193ede0ce82ff1f53c499836c5d1.jpeg" },
                { name: "Sprite [250 ml]", desc: "", type: "veg", img: "/products/d7f4f193ede0ce82ff1f53c499836c5d2.jpeg" }
            ]
        }
    ];

    const getFilteredItems = () => {
        const categoryData = menuData.find(cat => cat.category === activeCategory);
        if (!categoryData) return [];

        if (!searchTerm) return categoryData.items;

        return categoryData.items.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    return (
        <div className={styles.orderOnlineTabContent}>
            {/* Left Sidebar */}
            <div className={styles.orderOnlineSidebar}>
                {categories.map((cat, idx) => (
                    <p
                        key={idx}
                        className={`${styles.orderOnlineCategoryItem} ${activeCategory === cat ? styles.orderOnlineCategoryActive : ''}`}
                        onClick={() => setActiveCategory(cat)}
                    >
                        {cat}
                    </p>
                ))}
            </div>

            {/* Main Content */}
            <div className={styles.orderOnlineMainContent}>
                {/* Header */}
                <div className={styles.orderOnlineHeader}>
                    <div className={styles.orderOnlineTitleContainer}>
                        <h2 className={styles.orderOnlineTitle}>Order Online</h2>
                        <div className={styles.orderOnlineSubtitle}>Currently closed for online ordering</div>
                    </div>
                    <div className={styles.orderOnlineSearchBox}>
                        <div className={styles.orderOnlineSearchIcon}><SearchIcon /></div>
                        <input
                            type="text"
                            className={styles.orderOnlineSearchInput}
                            placeholder="Search within menu"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        {searchTerm && (
                            <div className={styles.orderOnlineClearIcon} onClick={() => setSearchTerm('')}>
                                <CrossIcon />
                            </div>
                        )}
                    </div>
                </div>

                {/* Live Tracking Banner */}
                <div className={styles.orderOnlineLiveTrackingBanner}>
                    <div className={styles.orderOnlineLiveIcon}><ExploreIcon /></div>
                    <div className={styles.orderOnlineLiveText}>Live tracking not available</div>
                </div>

                {/* Menu List */}
                <div className={styles.orderOnlineMenuSection}>
                    <h3 className={styles.orderOnlineCategoryHeader}>{activeCategory}</h3>
                    <div className={styles.orderOnlineMenuItems}>
                        {getFilteredItems().length > 0 ? (
                            getFilteredItems().map((item, idx) => (
                                <div key={idx} className={styles.orderOnlineMenuItem}>
                                    {item.img && (
                                        <div className={styles.orderOnlineItemRight}>
                                            <img src={item.img} alt={item.name} className={styles.orderOnlineItemImage} />
                                            <div className={styles.orderOnlineItemLeft}>
                                                {item.type === 'veg' ? <VegIcon /> : <NonVegIcon />}
                                            </div>
                                        </div>
                                    )}
                                    <div className={styles.orderOnlineItemCenter}>
                                        <h4 className={styles.orderOnlineItemName}>{item.name}</h4>
                                        {item.desc && (
                                            <p className={styles.orderOnlineItemDesc}>
                                                {item.desc}
                                                {item.desc.includes('read more') && (
                                                    <span className={styles.orderOnlineReadMore}> read more</span>
                                                )}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className={styles.orderOnlineNoResults}>No items found for "{searchTerm}"</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const MenuContent = () => (
    <div className={styles.tabContent}>
        <h3 className={styles.contentTitle}>Menu Content</h3>
    </div>
);

// Dummy icon for the AI summary
const AIIcon = () => (
    <Image src="/icons/gen_ai.png" alt="AI Icon" width={45} height={45} />
);

const ReviewsContent = () => {
    const [activeFilter, setActiveFilter] = useState('All Reviews');
    const [showMoreAI, setShowMoreAI] = useState(false);
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [selectedSort, setSelectedSort] = useState('Most relevant');
    const sortRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
                setIsSortOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const sortOptions = [
        'Most relevant',
        'Latest first',
        'Helpful first',
        'Positive first',
        'Negative first'
    ];
    const SummaryItems = [
        "Luxurious property with impressive architecture and top-notch amenities like a heated indoor pool and renowned restaurants.",
        "Exceptional hospitality that guests appreciate, with staff attentive to every need.",
        "Delectable food options, highlighted by an elaborate breakfast spread.",
        "Centrally located near major attractions, making it convenient for exploring the city.",
        "Modern technology in rooms, featuring iPad controls for amenities.",
        "Excellent safety measures, ensuring a secure stay for all guests."
    ];

    const reviewsData = [
        {
            rating: 5.0,
            title: "An Exceptional and Luxurious Stay!",
            author: "mohd s.",
            tripType: "family with 1 kid",
            travelMonth: "Aug 2026",
            room: "Premier Room",
            text: "The Oberoi Hotel was a great experience for the whole family with many surprises. We were glad that we chose Oberoi instead of the Tai as they gave us an extraordinary treatment with all the staff being extremely courteous, helpful and with genuine smiles that made our stay more memorable. My Son had the best experience with a gift toy, and chocolates. They were so courteous in upgrading our room and decorated the room with roses, bouquets and a wonderful yummy cake that made our anniversary more special. Breakfast was great and so were the servers, chefs and all staff who took care of us. Best of all, the mini bar was complimentary for all. I would definitely recommend Oberoi to my friends and will definitely visit them next time during my visit to Delhi or other cities where they are present.",
            images: [
                "/products/01M0A7BT7W5CHNSGSFY0TF4NV5.jpg",
                "/products/01M0A7BTA21JX95NT8P1A4P3YW.jpg",
                "/products/01M0A7BTC50XW9VM4NCXHXCQZC.jpg",
                "/products/01M0A7BTE5YN3Y1JZJXHTJ564A.jpg",
                "/products/01M0A7BTFT303GV9DB96WTX8V6.jpg",
                "/products/01M0A7BTHSNCRSVXQE2XEWSVD8.jpg",
                "/products/01M0A7BTKYG72EZZVR0N46EQ3H.jpg",
                "/products/01M0A7BTNVN0K3F10GK339VNMG.jpg"
            ]
        },
        {
            rating: 5.0,
            title: "An excellent property",
            author: "abanis n.",
            tripType: "business",
            travelMonth: "Aug 2026",
            room: "Luxury Room Twin Beds",
            text: "The best in all means. Loved everything about this property."
        },
        {
            rating: 5.0,
            title: "The Best Experience we ever had",
            author: "shankar b.",
            tripType: "family with 1 kid",
            travelMonth: "Jul 2026 (3-Night Stay)",
            room: "Deluxe Room with Golf Course or Humayuns Tomb view",
            text: "The Oberoi Hotel was a great experience for the whole family with many surprises. We were glad that we chose Oberoi instead of the Taj as they gave us an extraordinary treatment with all the staff being extremely courteous, helpful and with genuine smiles that made our stay more memorable. My daughter had the best experience with a gift toy, customized pillow with her name and then the goodies and chocolates again customized with her name on it. Also, they were so courteous in upgrading our room and decorated the room with roses, bouquets and a wonderful yummy cake that made our anniversary more special. Breakfast was great and so were the servers, chefs and all staff who took care of us. Best of all, the mini bar was complimentary for all the three nights we stayed. I would definitely recommend Oberoi to my friends and will definitely visit them next time during my visit to Delhi or other cities where they are present."
        },
        {
            rating: 5.0,
            title: "Excellent Stay",
            author: "deepak b.",
            travelMonth: "Jul 2026",
            room: "Deluxe Room with Golf Course or Humayuns Tomb view",
            text: "I loved the hospitality of Oberoi Hotels, this was my second stay with The Oberoi and they are excellent in everything they do. Keep it up. In 5 stars hotels in India you guys are the best."
        },
        {
            rating: 5.0,
            title: "Excellent Stay",
            author: "viraaj g.",
            tripType: "solo",
            travelMonth: "Jun 2026",
            room: "Deluxe Room with Golf Course or Humayuns Tomb view",
            text: "Was a splendid experience. From check in to check out, the courtesy and hospitality was top notch. Will definitely recommend for any travellers looking for a place to stay in New Delhi. Full marks for the room, hygiene, amenities and everything else.",
            images: [
                "/products/01KVACTWBV01V3N89DQ6K36B21.jpg",
                "/products/01KVACTWEM5JDZ2GQB98CEAJVB.jpg",
                "/products/01KVACTWGVAXZ6HRKBTH93YCBB.jpg"
            ]
        },
        {
            rating: 5.0,
            title: "Excellent Stay",
            author: "bhavana.",
            tripType: "solo",
            travelMonth: "May 2026",
            room: "Oberoi Suite with Living Room, Golf Course or Humayuns Tomb view",
            text: "Had an excellent stay here — an amazing place with a beautiful environment and such a relaxing experience. Thank you to the entire team at The Oberoi Hotels & Resorts for the warm hospitality and wonderful service. Truly memorable!"
        },
        {
            rating: 4.0,
            title: "Good Stay",
            author: "sadiya k.",
            travelMonth: "Jan 2026",
            room: "Luxury Room with Golf Course or Humayuns Tomb view",
            text: "Bahut achchha pravrutti rahi ya uska adhivi bahut achchhe Hain aur vivah bahut achchha hai and uska Jo khaana tha phod tha breakfast tha bahut achchha raha hai. Aur uska Jo bhee maalum tha bahut achchha tha. Safety bahut achchhi din sabhi camera lage the bahut achchhi safety hai. Thank you, thank you."
        },
        {
            rating: 1.0,
            title: "Terrible Stay",
            author: "abhishek b.",
            travelMonth: "Dec 2025",
            room: "Premier Room - access to residents lounge",
            text: "You are sending too many mails and messages after the stay. It is very disturbing and irritating. Just one message after the stay should be enough. This goes on for days. Please stop this over communication."
        },
        {
            rating: 5.0,
            title: "wonderful experience",
            author: "huma a.",
            tripType: "group",
            travelMonth: "Oct 2025",
            room: "Luxury Room with Golf Course or Humayuns Tomb view",
            text: "It was a wonderful experience, best location in delhi , breakfast has more options than other properties."
        },
        {
            rating: 5.0,
            title: "Enjoyed my trip",
            author: "shilpi.",
            tripType: "couple",
            travelMonth: "Jul 2025",
            room: "Deluxe Room with Golf Course or Humayuns Tomb view",
            text: "Great Experience enjoyed it.\nFood was Awesome like it.\nplanning to visit again Soon.\nHotel Ambiance."
        }
    ];

    const tags = [
        "Exceptional service (47)", "Staff Courtesy (38)", "Delicious food (31)", "Helpful staff (29)", "Family-friendly (27)",
        "Service Quality (27)", "Comfortable stay (23)", "Food (20)", "Great location (15)", "Positive ambiance (14)"
    ];

    const paginationNumbers = [1, 2, 3, 4, 5];

    return (
        <div className={styles.tabContent}>
            {/* Left Section */}
            <div className={styles.leftSection}>
                <div className={styles.overallRating}>
                    <div className={styles.ratingScore}>
                        <span className={styles.scoreText}>4.7</span>
                        <span className={styles.scoreMax}>/5</span>
                    </div>
                    <div className={styles.ratingInfo}>
                        <div className={styles.ratingLabel}>Excellent</div>
                        <div className={styles.ratingCount}>371 Ratings</div>
                    </div>
                </div>

                <div className={styles.ratingBars}>
                    {[
                        { label: "excellent", width: "84%" },
                        { label: "very good", width: "10%" },
                        { label: "average", width: "2%" },
                        { label: "poor", width: "1%" },
                        { label: "bad", width: "4%" }
                    ].map((item, idx) => (
                        <div key={idx} className={styles.ratingBarRow}>
                            <span className={styles.ratingLabelSmall}>{item.label}</span>
                            <div className={styles.ratingBarTrack}>
                                <div className={styles.ratingBarFill} style={{ width: item.width }}></div>
                            </div>
                            <span className={styles.ratingPercent}>{item.width}</span>
                        </div>
                    ))}
                </div>

                <div className={styles.divider}></div>

                <div className={styles.lastRatings}>
                    <div className={styles.sectionTitle}>
                        Last 10 Customer Ratings <span className={styles.subtitle}>(Latest First)</span>
                    </div>
                    <div className={styles.ratingDots}>
                        {[5, 5, 5, 5, 4, 5, 5, 5, 5, 5].map((rating, idx) => (
                            <div key={idx} className={styles.ratingDot}>{rating}</div>
                        ))}
                    </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.ratingCategories}>
                    <div className={styles.sectionTitle}>Rating Categories</div>
                    <div className={styles.categoriesList}>
                        {[
                            { label: "Hospitality", value: 4.8 },
                            { label: "Facilities", value: 4.6 },
                            { label: "Food", value: 4.7 },
                            { label: "Room", value: 4.6 },
                            { label: "Cleanliness", value: 4.8 },
                            { label: "Value For Money", value: 4.5 }
                        ].map((cat, idx) => (
                            <div key={idx} className={styles.categoryRow}>
                                <span className={styles.categoryLabel}>{cat.label}</span>
                                <span className={styles.categoryValue}>{cat.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className={styles.rightSection}>
                <div className={styles.aiSummary}>
                    <div className={styles.aiHeader}>
                        <div className={styles.aiIconWrapper}>
                            <AIIcon />
                        </div>
                        <div className={styles.aiTitleWrapper}>
                            <div className={styles.aiTitle}>Review Summary</div>
                            <div className={styles.aiSubtitle}>Powered by Myra.AI</div>
                        </div>
                    </div>
                    <ul className={styles.summaryList}>
                        {(showMoreAI ? SummaryItems : SummaryItems.slice(0, 4)).map((item, idx) => (
                            <li key={idx} className={styles.summaryItem}>{item}</li>
                        ))}
                    </ul>
                    {SummaryItems.length > 4 && (
                        <div
                            className={styles.readMore}
                            onClick={() => setShowMoreAI(!showMoreAI)}
                        >
                            {showMoreAI ? "Read less" : "Read more"}
                        </div>
                    )}
                </div>

                <div className={styles.divider}></div>

                <div className={styles.filtersSection}>
                    <div className={styles.filterLabel}>Filter By:</div>
                    <div className={styles.filterBar}>
                        <div
                            className={`${styles.dropdown} 
      ${selectedSort !== 'Most relevant' ? styles.dropdownActive : ''} 
      ${isSortOpen ? styles.dropdownOpen : ''}`}
                            ref={sortRef}
                            onClick={() => setIsSortOpen(!isSortOpen)}
                        >
                            <span className={styles.dropdownText}>
                                Sort : <span className={styles.dropdownSelected}>{selectedSort}</span>
                            </span>
                            <span className={`${styles.chevron} ${isSortOpen ? styles.chevronUp : ''}`}>
                                <FaChevronDown />
                            </span>

                            {isSortOpen && (
                                <div className={styles.sortDropdown}>
                                    {sortOptions.map((option, idx) => (
                                        <div
                                            key={idx}
                                            className={`${styles.sortOption} ${selectedSort === option ? styles.sortOptionActive : ''}`}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedSort(option);
                                                setIsSortOpen(false);
                                            }}
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {["All Reviews", "Room Type", "Review with Images"].map((filter, idx) => (
                            <div
                                key={idx}
                                className={`${styles.filterChip} ${filter === activeFilter ? styles.filterChipActive : ''} ${filter === 'All Reviews' ? styles.filterChipPill : ''}`}
                                onClick={() => setActiveFilter(filter)}
                            >
                                {filter}
                            </div>
                        ))}
                    </div>
                    <div className={styles.tagsContainer}>
                        {tags.map((tag, idx) => (
                            <div
                                key={idx}
                                className={`${styles.tagChip} ${tag === activeFilter ? styles.filterChipActive : ''}`}
                                onClick={() => setActiveFilter(tag)}
                            >
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.reviewsList}>
                    {reviewsData.map((review, idx) => (
                        <div key={idx} className={styles.reviewItem}>
                            <div className={styles.reviewHeader}>
                                <div className={styles.reviewRatingBox}>{review.rating.toFixed(1)}</div>
                                <div className={styles.reviewHeaderInfo}>
                                    <div className={styles.reviewTitle}>{review.title}</div>
                                    <div className={styles.reviewMeta}>
                                        <span>{review.author}</span>
                                        {review.tripType && (
                                            <>
                                                <span className={styles.dotSeparator}></span>
                                                <span>{review.tripType}</span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className={styles.reviewText}>{review.text}</div>

                            {review.images && review.images.length > 0 && (
                                <div className={styles.reviewImages}>
                                    {review.images.map((img, imgIdx) => (
                                        <img key={imgIdx} src={img} alt="user photos" className={styles.reviewImage} />
                                    ))}
                                </div>
                            )}

                            <div className={styles.reviewDetails}>
                                <span className={styles.detailLabel}>Travel Month:</span> <span>{review.travelMonth}</span>
                            </div>
                            <div className={styles.reviewDetails}>
                                <span className={styles.detailLabel}>Room:</span> <span>{review.room}</span>
                            </div>

                            <div className={styles.helpfulBtn}>
                                <span>Helpful</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M7 10v12M15 5.88L14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.pagination}>
                    <button className={`${styles.pageBtn} ${styles.pageBtnDisabled}`}>«</button>
                    <button className={`${styles.pageBtn} ${styles.pageBtnDisabled}`}>⟨</button>
                    {paginationNumbers.map((num) => (
                        <button
                            key={num}
                            className={`${styles.pageBtn} ${num === 1 ? styles.pageBtnActive : ''}`}
                        >
                            {num}
                        </button>
                    ))}
                    <button className={styles.pageBtn}>⟩</button>
                    <button className={styles.pageBtn}>»</button>
                </div>
            </div>
        </div>
    );
};


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

const LocationContent = () => (
    <div className={styles.tabContent}>
        <h3 className={styles.contentTitle}>Location</h3>
    </div>
);

const SimilarRestaurantsContent = () => {

    const handleDineOutItemClick = (item: DineOutItemInterface) => {
        console.log("Clicked item:", item);
    };

    return (
        <div className={styles.tabContent}>
            <DineOutItemsHorizontal
                items={DineoutItemsList}
                title="Similar restaurants options in Fine Dining"
                onItemClick={handleDineOutItemClick}
                maxItems={10}
            />
        </div>
    );
};

const RecommendedRestaurantsContent = () => (
    <div className={styles.tabContent}>
        <h3 className={styles.contentTitle}>Recommended Restaurants Content</h3>
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
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const tabRefs = useRef<{ [key: string]: HTMLElement | null }>({});
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const customTabs: TabItem[] = [
        { id: 'overview', label: 'Book Table', icon: faInfoCircle, content: <OverviewContent restaurant={restaurantData} onOpenOrderModal={() => setIsOrderModalOpen(true)} /> },
        { id: 'about', label: 'About', icon: faBuilding, content: <AboutContent /> },
        { id: 'order-online', label: 'Order Online', icon: faShoppingBag, content: <OrderOnlineContent /> },
        { id: 'menu', label: 'Menu', icon: faUtensils, content: <MenuContent /> },
        { id: 'reviews', label: 'Reviews', icon: faStar, content: <ReviewsContent /> },
        { id: 'photos', label: 'Photos', icon: faCamera, content: <PhotosContent restaurant={restaurantData} /> },
        { id: 'location', label: 'Location', icon: faMapMarkerAlt, content: <LocationContent /> },
        { id: 'similar-restaurants', label: 'Similar Restaurants', icon: faStore, content: <SimilarRestaurantsContent /> },
        { id: 'recommended-restaurants', label: 'Recommended Restaurants', icon: faStore, content: <RecommendedRestaurantsContent /> },
    ];

    // Scroll-based active tab detection
    useEffect(() => {
        const handleScroll = () => {
            // Skip scroll detection if user just clicked a tab
            if (isScrolling) return;

            const scrollPosition = window.scrollY + 150;
            let activeSection = customTabs[0]?.id || 'overview';

            for (const tab of customTabs) {
                // Skip order-online tab for scroll detection
                if (tab.id === 'order-online') continue;

                const element = tabRefs.current[tab.id];
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const elementTop = rect.top + window.scrollY;

                    if (scrollPosition >= elementTop - 100) {
                        activeSection = tab.id;
                    }
                }
            }

            if (activeSection !== activeTab && activeSection !== 'order-online') {
                setActiveTab(activeSection);
                if (onTabChange) {
                    onTabChange(activeSection);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        setTimeout(handleScroll, 100);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeTab, onTabChange, customTabs, isScrolling]);

    const handleTabClick = (tabId: string) => {
        // Set scrolling flag to prevent scroll detection from overriding
        setIsScrolling(true);

        // Clear any existing timeout
        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
        }

        // If "order-online" tab is clicked, open modal instead of scrolling
        if (tabId === 'order-online') {
            setIsOrderModalOpen(true);
            setActiveTab(tabId);
            if (onTabChange) {
                onTabChange(tabId);
            }
            // Reset scrolling flag after a delay
            scrollTimeoutRef.current = setTimeout(() => {
                setIsScrolling(false);
            }, 500);
            return;
        }

        // Update active tab immediately
        setActiveTab(tabId);
        if (onTabChange) {
            onTabChange(tabId);
        }

        // Scroll to the section
        const element = tabRefs.current[tabId];
        if (element) {
            const headerOffset = 200;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }

        // Reset scrolling flag after scroll animation completes
        scrollTimeoutRef.current = setTimeout(() => {
            setIsScrolling(false);
        }, 800);
    };

    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, []);

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
                {customTabs.map((tab) => {
                    // Skip rendering order-online section
                    if (tab.id === 'order-online') {
                        return (
                            <section
                                key={tab.id}
                                id={tab.id}
                                ref={(el) => {
                                    tabRefs.current[tab.id] = el;
                                }}
                                className={styles.hiddenSection}
                            />
                        );
                    }

                    return (
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
                    );
                })}
            </main>

            {/* Order Online Modal */}
            <OrderOnlineModal
                isOpen={isOrderModalOpen}
                onClose={() => setIsOrderModalOpen(false)}
            >
                <OrderOnlineContent />
            </OrderOnlineModal>
        </div>
    );
};

export default DineOutRestDetailsTabs;