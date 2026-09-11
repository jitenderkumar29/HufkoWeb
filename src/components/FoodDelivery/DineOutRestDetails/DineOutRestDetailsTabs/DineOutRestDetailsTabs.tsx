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
    faStarHalfAlt,
    faTag,
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import DineOutItemsHorizontal from '../../FoodDesigns/DineOutItemsHorizontal/DineOutItemsHorizontal';
import { DineoutItemsList, DineoutOptionsItemsList, RelatedRestaurantItemsList } from '@/app/data/Categorywise/FoodsCategories';
import { DineOutItemInterface } from '../../FoodDesigns/DineOutItemsListCard/DineOutItemsListCard';
import Image from 'next/image';
import { FaChevronDown, FaRegClock, FaStar } from 'react-icons/fa';
import { MdDeliveryDining } from 'react-icons/md';
import { IoLocationOutline } from 'react-icons/io5';
import OrderOnlineUltraPremiumContent from '../OrderOnlineUltraPremiumContent/OrderOnlineUltraPremiumContent';
import OutletsAroundYou, { Outlet } from '../OrderOnlineUltraPremiumContent/OutletsAroundYou/OutletsAroundYou';
import OpenCloseTime from '../OrderOnlineUltraPremiumContent/OpenCloseTime/OpenCloseTime';
import BookTablePopUp from '../BookTablePopUp/BookTablePopUp';
import { Tag } from 'lucide-react';
import RelatedToRestaurant from '../OrderOnlineUltraPremiumContent/RelatedToRestaurant/RelatedToRestaurant';

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

const OrderOnlineModalUltraPremium = ({
    isOpen,
    onClose,
    children
}: {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}) => {
    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div
                className={styles.modalContentUltra}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    className={styles.modalCloseUltraBtn}
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    ✕
                </button>

                {/* Inner Scrollable Content (Only this scrolls) */}
                <div className={styles.modalScrollContent}>
                    {children}
                </div>
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

type OverviewContentProps = {
    restaurant?: any;
    onOpenOrderModal?: () => void;
};
// Overview Content Component
const OverviewContent = ({
    restaurant,
    onOpenOrderModal,
}: OverviewContentProps) => {
    const [activeOfferTab, setActiveOfferTab] = useState<"booking" | "walkin">(
        "booking"
    );
    const [isBookTableOpen, setIsBookTableOpen] = useState(false);

    /* ---------------- Offer content ---------------- */

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

                    <div className={styles.addOnTitle}>ADD-ON OFFERS</div>

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
                        <span
                            className={`${styles.offerDot} ${styles.active}`}
                        />
                        <span className={styles.offerDot} />
                        <span className={styles.offerDot} />
                    </div>
                </div>
            </div>
        );
    };

    /* ---------------- Render ---------------- */

    return (
        <div className={styles.overviewWrapper}>
            {/* Left Column - 70% */}
            <div className={styles.overviewLeft}>
                {/* Dining Offers Section */}
                <div className={styles.offersSection}>
                    <h3 className={styles.sectionTitle}>Dining Offers</h3>
                    <p className={styles.sectionSubtitle}>
                        Tap on any offer to know more
                    </p>

                    <div className={styles.offersGrid}>
                        <div
                            className={`${styles.offerCard} ${styles.highlightedOffer}`}
                        >
                            <h4 className={styles.offerTitle}>
                                PRE-BOOK OFFER
                            </h4>
                            <div className={styles.offerBody}>
                                <h5 className={styles.offerSubTitle}>
                                    Flat 10% OFF
                                </h5>
                                <p className={styles.offerDesc}>
                                    Valid from 1PM to 11:55PM today
                                    <br />
                                    Booking required
                                </p>
                            </div>
                        </div>

                        <div
                            className={`${styles.offerCard} ${styles.noHighlightedOffer}`}
                        >
                            <h4 className={styles.offerTitle}>
                                INSTANT OFFER
                            </h4>
                            <div className={styles.offerBody}>
                                <h5 className={styles.offerSubTitle}>
                                    Flat 10% OFF
                                </h5>
                                <p className={styles.offerDesc}>
                                    on bill payments
                                </p>
                            </div>
                        </div>

                        <div
                            className={`${styles.offerCard} ${styles.noHighlightedOffer}`}
                        >
                            <h4 className={styles.offerTitle}>SURPRISE</h4>
                            <div className={styles.offerBody}>
                                <h5 className={styles.offerSubTitle}>
                                    Get a scratch card
                                </h5>
                                <p className={styles.offerDesc}>
                                    after every transaction
                                </p>
                            </div>
                        </div>

                        <div
                            className={`${styles.offerCard} ${styles.noHighlightedOffer}`}
                        >
                            <h4 className={styles.offerTitle}>
                                EXCLUSIVE OFFER
                            </h4>
                            <div className={styles.offerBody}>
                                <h5 className={styles.offerSubTitle}>
                                    FLAT ₹175 OFF
                                </h5>
                                <p className={styles.offerDesc}>
                                    valid on your next dining payment
                                </p>
                            </div>
                        </div>

                        <div
                            className={`${styles.offerCard} ${styles.noHighlightedOffer}`}
                        >
                            <h4 className={styles.offerTitle}>
                                BANK OFFER
                            </h4>
                            <div className={styles.offerBody}>
                                <h5 className={styles.offerSubTitle}>
                                    25% OFF for up to ₹5,000 using RBL Bank
                                    LUMIÈRE Credit Card
                                </h5>
                                <p className={styles.offerDesc}>
                                    and more with other banks
                                </p>
                            </div>
                        </div>

                        <div
                            className={`${styles.offerCard} ${styles.noHighlightedOffer}`}
                        >
                            <h4 className={styles.offerTitle}>
                                CASHBACK OFFER
                            </h4>
                            <div className={styles.offerBody}>
                                <h5 className={styles.offerSubTitle}>
                                    Get Flat ₹200 Cashback
                                </h5>
                                <p className={styles.offerDesc}>
                                    on minimum bill of ₹1,000 • Valid on all
                                    payment methods
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* More Info Section */}
                <div className={styles.moreInfoSection}>
                    <h3 className={styles.sectionTitle}>More Info</h3>

                    <div className={styles.moreInfoGrid}>
                        <div className={styles.moreInfoItem}>
                            <span className={styles.checkIcon}>✓</span> Lunch
                        </div>
                        <div className={styles.moreInfoItem}>
                            <span className={styles.checkIcon}>✓</span> Dinner
                        </div>
                        <div className={styles.moreInfoItem}>
                            <span className={styles.checkIcon}>✓</span> Home
                            delivery
                        </div>
                        <div className={styles.moreInfoItem}>
                            <span className={styles.checkIcon}>✓</span>{" "}
                            Takeaway available
                        </div>
                        <div className={styles.moreInfoItem}>
                            <span className={styles.checkIcon}>✓</span>{" "}
                            Wheelchair accessible
                        </div>
                        <div className={styles.moreInfoItem}>
                            <span className={styles.checkIcon}>✓</span> Stags
                            allowed
                        </div>
                        <div className={styles.moreInfoItem}>
                            <span className={styles.checkIcon}>✓</span> Less
                            noisy
                        </div>
                        <div className={styles.moreInfoItem}>
                            <span className={styles.checkIcon}>✓</span>{" "}
                            Step-free entry
                        </div>
                        <div className={styles.moreInfoItem}>
                            <span className={styles.checkIcon}>✓</span>{" "}
                            Parking available
                        </div>
                        <div className={styles.moreInfoItem}>
                            <span className={styles.checkIcon}>✓</span> Free
                            parking
                        </div>
                        <div className={styles.moreInfoItem}>
                            <span className={styles.checkIcon}>✓</span> Work
                            friendly
                        </div>
                        <div className={styles.moreInfoItem}>
                            <span className={styles.checkIcon}>✓</span> Smoking
                            area
                        </div>
                        <div className={styles.moreInfoItem}>
                            <span className={styles.checkIcon}>✓</span> Wifi
                        </div>
                        <div className={styles.moreInfoItem}>
                            <span className={styles.checkIcon}>✓</span> Indoor
                            seating
                        </div>
                        <div className={styles.moreInfoItem}>
                            <span className={styles.checkIcon}>✓</span> Kid
                            friendly
                        </div>
                        <div className={styles.moreInfoItem}>
                            <span className={styles.checkIcon}>✓</span> Family
                            friendly
                        </div>
                        <div className={styles.moreInfoItem}>
                            <span className={styles.checkIcon}>✓</span>{" "}
                            Low-intensity music
                        </div>
                        <div className={styles.moreInfoItem}>
                            <span className={styles.checkIcon}>✓</span> Large
                            group seating
                        </div>
                        <div className={styles.moreInfoItem}>
                            <span className={styles.checkIcon}>✓</span>{" "}
                            Vegetarian friendly
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column - 30% */}
            <div className={styles.overviewRight}>
                <div className={styles.offersForYou}>
                    <h3 className={styles.offersForYouTitle}>
                        Table Reservation
                    </h3>

                    {/* Tabs Row */}
                    <div className={styles.sideOfferTabs}>
                        <div
                            className={`${styles.sideOfferTab} ${activeOfferTab === "booking"
                                ? styles.activeTab
                                : styles.nonactiveTab
                                }`}
                            onClick={() => setActiveOfferTab("booking")}
                        >
                            <span className={styles.sideOfferTabLabel}>
                                BOOKING OFFER
                            </span>
                            <span className={styles.sideOfferTabDiscount}>
                                (Upto 40% Off)
                            </span>
                        </div>

                        <div
                            className={`${styles.sideOfferTab} ${activeOfferTab === "walkin"
                                ? styles.activeTab
                                : styles.nonactiveTab
                                }`}
                            onClick={() => setActiveOfferTab("walkin")}
                        >
                            <span className={styles.sideOfferTabLabel}>
                                WALK-IN OFFER
                            </span>
                            <span className={styles.sideOfferTabDiscount}>
                                (Upto 20% Off)
                            </span>
                        </div>
                    </div>

                    {/* Dynamic Content Based on Active Tab */}
                    {renderOfferContent()}

                    {/* Action Buttons */}
                    <div className={styles.sideOfferActions}>
                        <button
                            type="button"
                            className={styles.sideBookNowBtn}
                            onClick={() => setIsBookTableOpen(true)}
                        >
                            Book Table
                        </button>

                        <button
                            type="button"
                            className={styles.sidePayBillBtn}
                        >
                            Pay Bill
                        </button>
                    </div>
                </div>
            </div>

            {/* Render popup outside overviewWrapper */}
            {isBookTableOpen && (
                <BookTablePopUp
                    restaurantName="Book table"
                    restaurantLocation="Shubham Soup Wala, Rithala"
                    onBack={() => setIsBookTableOpen(false)}
                    onProceed={(bookingData) => {
                        console.log('Booking Data:', bookingData);
                        setIsBookTableOpen(false);
                    }}
                />
            )}
        </div>
    );
};


interface AboutContentProps {
    restaurant?: {
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

const AboutContent = ({ restaurant }: AboutContentProps) => (
    <div className={styles.tabContent}>
        {/* Average Cost Section */}
        <div className={styles.costSection}>
            <div className={styles.knownForSection}>
                <h4 className={styles.knownForTitle}>{restaurant?.name}</h4>
                <p className={styles.knownForTags}>Sakura is a restaurant in Connaught Place, New Delhi serving Japanese, Asian and Thai. Known for Japanese dishes; ideal for family meals and group outings.</p>
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
    const [cart, setCart] = useState<Record<string, number>>({});

    const categories = [
        "Today's Exclusive Dishes (1)", "Combos (4)", "Soups and Salads (19)",
        "Starters (72)", "Main Course (48)", "Breads (12)", "Rice and Biryani (6)",
        "Fried Rice and Noodles (4)", "Accompaniments (7)", "Desserts and Beverages (4)"
    ];

    const categoriesFilter = ["All", "Bestseller", "Burgers", "Chicken", "Sides"];

    const menuData = [
        {
            category: "Today's Exclusive Dishes (1)",
            items: [
                {
                    name: "Dal Makhani",
                    desc: "Creamy and buttery Dal Makhani slow-cooked overnight with black lentils and kidney beans, finished with fresh butter and cream.",
                    type: "veg",
                    img: "/products/028c52fee52f05670233532ed4c9585b.jpeg",
                    rating: 4.8,
                    totalRatings: 324,
                    customisable: true,
                    price: 349
                }
            ]
        },
        {
            category: "Combos (4)",
            items: [
                {
                    name: "Paneer Naan with Gravy Combo",
                    desc: "Soft paneer stuffed naan served with rich and creamy gravy, accompanied by fresh salad and pickle.",
                    type: "veg",
                    img: "/products/1fe0fc9e89f9f855c493ab42222fa92d.jpeg",
                    rating: 4.6,
                    totalRatings: 189,
                    customisable: true,
                    price: 299
                },
                {
                    name: "Onion Naan with Gravy Combo",
                    desc: "Fluffy naan loaded with caramelized onions, served with flavorful gravy and mint chutney.",
                    type: "veg",
                    img: "/products/0d0f1760c936b8b0e708f0f4b3041f57.jpeg",
                    rating: 4.5,
                    totalRatings: 156,
                    customisable: true,
                    price: 269
                },
                {
                    name: "Chicken Naan with Gravy Combo",
                    desc: "Tandoor-baked naan stuffed with spiced minced chicken, served with rich chicken gravy and salad.",
                    type: "non-veg",
                    img: "/products/0d0f1760c936b8b0e708f0f4b3041f571.jpeg",
                    rating: 4.7,
                    totalRatings: 234,
                    customisable: true,
                    price: 349
                },
                {
                    name: "Keema Naan with Gravy Combo",
                    desc: "[Chef's Special] Premium naan stuffed with flavorful minced lamb keema, served with signature gravy and raita.",
                    type: "non-veg",
                    img: "/products/711fbe1b30e557278513c39a3f81788a.jpeg",
                    rating: 4.9,
                    totalRatings: 412,
                    customisable: true,
                    price: 449
                }
            ]
        },
        {
            category: "Soups and Salads (19)",
            items: [
                {
                    name: "Veg Sweet Corn Soup",
                    desc: "Creamy soup with sweet corn kernels, fresh vegetables, and a hint of black pepper.",
                    type: "veg",
                    img: "/products/988dc404663063dde160a0dc223b2eff.jpeg",
                    rating: 4.3,
                    totalRatings: 87,
                    customisable: false,
                    price: 149
                },
                {
                    name: "Veg Hot and Sour Soup",
                    desc: "Classic Indo-Chinese soup with mixed vegetables, tofu, and a perfect balance of hot and sour flavors.",
                    type: "veg",
                    img: "/products/1ebe5c2e985b75ec702aa9b717e329f7.jpeg",
                    rating: 4.4,
                    totalRatings: 92,
                    customisable: false,
                    price: 169
                },
                {
                    name: "Veg Manchow Soup",
                    desc: "Spicy and tangy soup with finely chopped vegetables, flavored with garlic and soy sauce.",
                    type: "veg",
                    img: "/products/bb8fe59f3c891d5aee7df764193c75f6.jpeg",
                    rating: 4.5,
                    totalRatings: 105,
                    customisable: false,
                    price: 179
                },
                {
                    name: "Veg Clear Soup",
                    desc: "Light and refreshing clear vegetable broth with seasonal vegetables and herbs.",
                    type: "veg",
                    img: "/products/8ebcd3b47fcb11e21a7efa3f2bc1bf76.jpeg",
                    rating: 4.2,
                    totalRatings: 78,
                    customisable: false,
                    price: 129
                },
                {
                    name: "Veg Lemon Coriander Soup",
                    desc: "Zesty lemon and fresh coriander soup with vegetables, perfect for a light appetizer.",
                    type: "veg",
                    img: "/products/bc01d0ee47a98270d771a6acda3cbd84.jpeg",
                    rating: 4.6,
                    totalRatings: 134,
                    customisable: false,
                    price: 159
                },
                {
                    name: "Veg Beijing Soup",
                    desc: "Authentic Chinese soup with exotic vegetables, mushrooms, and a rich umami broth.",
                    type: "veg",
                    img: "/products/9315bd9e73440e755f1bf0871e1467c0.jpeg",
                    rating: 4.1,
                    totalRatings: 63,
                    customisable: false,
                    price: 189
                },
                {
                    name: "Cream of Mushroom Soup",
                    desc: "Rich and creamy soup made with fresh mushrooms, garlic, and aromatic herbs.",
                    type: "veg",
                    img: "/products/fd7ae90db0b122d5daaf7cf5791f01ad2.jpeg",
                    rating: 4.7,
                    totalRatings: 156,
                    customisable: true,
                    price: 199
                },
                {
                    name: "Non Veg Sweet Corn Soup",
                    desc: "Hearty sweet corn soup with tender chicken pieces and crunchy corn kernels.",
                    type: "non-veg",
                    img: "/products/988dc404663063dde160a0dc223b2eff.jpeg",
                    rating: 4.3,
                    totalRatings: 95,
                    customisable: false,
                    price: 189
                },
                {
                    name: "Chicken Hot and Sour Soup",
                    desc: "Spicy and tangy soup with shredded chicken, mushrooms, and bamboo shoots.",
                    type: "non-veg",
                    img: "/products/1ebe5c2e985b75ec702aa9b717e329f7.jpeg",
                    rating: 4.5,
                    totalRatings: 118,
                    customisable: false,
                    price: 209
                },
                {
                    name: "Non Veg Manchow Soup",
                    desc: "Hearty Manchow soup with minced chicken, vegetables, and crispy noodles.",
                    type: "non-veg",
                    img: "/products/fd7ae90db0b122d5daaf7cf5791f01ad.jpeg",
                    rating: 4.4,
                    totalRatings: 89,
                    customisable: false,
                    price: 219
                },
                {
                    name: "Chicken Clear Soup",
                    desc: "Light and clear chicken broth with shredded chicken and fresh vegetables.",
                    type: "non-veg",
                    img: "/products/fd7ae90db0b122d5daaf7cf5791f01ad1.jpeg",
                    rating: 4.2,
                    totalRatings: 72,
                    customisable: false,
                    price: 169
                },
                {
                    name: "Non Veg Lemon Coriander Soup",
                    desc: "Tangy lemon and coriander soup with tender chicken pieces and vegetables.",
                    type: "non-veg",
                    img: "/products/3524a9feb30d5f9fb9d87c8642c2f405.jpeg",
                    rating: 4.6,
                    totalRatings: 142,
                    customisable: false,
                    price: 199
                },
                {
                    name: "Chicken Beijing Soup",
                    desc: "Exotic Chinese soup with shredded chicken, mushrooms, and spicy broth.",
                    type: "non-veg",
                    img: "/products/0a10d03200a293735beae79bd888a61d.jpeg",
                    rating: 4.3,
                    totalRatings: 81,
                    customisable: false,
                    price: 229
                },
                {
                    name: "Cream of Chicken Soup",
                    desc: "Luxurious creamy chicken soup with tender chicken pieces and aromatic herbs.",
                    type: "non-veg",
                    img: "/products/0a10d03200a293735beae79bd888a61d1.jpeg",
                    rating: 4.8,
                    totalRatings: 203,
                    customisable: true,
                    price: 249
                },
                {
                    name: "Coleslaw Salad",
                    desc: "Crisp and refreshing salad with shredded cabbage, carrots, and creamy dressing.",
                    type: "veg",
                    img: "/products/0a10d03200a293735beae79bd888a61d2.jpeg",
                    rating: 4.1,
                    totalRatings: 56,
                    customisable: true,
                    price: 149
                },
                {
                    name: "Fresh Garden Salad",
                    desc: "Fresh garden vegetables with lettuce, tomatoes, cucumber, and zesty dressing.",
                    type: "veg",
                    img: "/products/ed1d378970e55b413a1e7c9d9e15154a.jpeg",
                    rating: 4.2,
                    totalRatings: 67,
                    customisable: true,
                    price: 159
                },
                {
                    name: "Veg Crispy Salad",
                    desc: "Crispy mixed vegetables with a tangy dressing, topped with crunchy noodles.",
                    type: "veg",
                    img: "/products/44001147ad1ba6319f66475ee1b0c086.jpeg",
                    rating: 4.4,
                    totalRatings: 94,
                    customisable: true,
                    price: 179
                },
                {
                    name: "Chicken Crispy Salad",
                    desc: "Fresh garden salad with crispy fried chicken, vegetables, and oriental dressing.",
                    type: "non-veg",
                    img: "/products/c5779f51c9ac9ca7327fd68cb14ab9b9.jpeg",
                    rating: 4.5,
                    totalRatings: 112,
                    customisable: true,
                    price: 219
                },
                {
                    name: "Chicken Tikka Salad",
                    desc: "Grilled chicken tikka pieces served on a bed of fresh greens with mint dressing.",
                    type: "non-veg",
                    img: "/products/c5779f51c9ac9ca7327fd68cb14ab9b91.jpeg",
                    rating: 4.7,
                    totalRatings: 178,
                    customisable: true,
                    price: 259
                }
            ]
        },
        {
            category: "Starters (72)",
            items: [
                {
                    name: "Paneer Tikka",
                    desc: "Marinated paneer cubes grilled to perfection with aromatic Indian spices, served with mint chutney.",
                    type: "veg",
                    img: "/products/8a67c9071bb5eed463cca7c7de6aa362.jpeg",
                    rating: 4.8,
                    totalRatings: 567,
                    customisable: true,
                    price: 349
                },
                {
                    name: "Afghani Paneer Tikka",
                    desc: "[Chef's Special] Soft paneer marinated in creamy Afghani spices, grilled in tandoor until golden.",
                    type: "veg",
                    img: "/products/f409f86f4bcd36bbc07e59af62f1402d.jpeg",
                    rating: 4.9,
                    totalRatings: 423,
                    customisable: true,
                    price: 399
                },
                {
                    name: "Tandoori Stuffed Aloo",
                    desc: "[Chef's Special] Baby potatoes stuffed with spiced paneer and nuts, char-grilled in tandoor.",
                    type: "veg",
                    img: "/products/ce99e934a34ac17b7322403fad69f160.jpeg",
                    rating: 4.6,
                    totalRatings: 289,
                    customisable: true,
                    price: 299
                },
                {
                    name: "Assorted Platter",
                    desc: "A delightful assortment of our best veg starters - paneer tikka, hara bhara kebab, and more.",
                    type: "veg",
                    img: "/products/75588d11d5f43281f6d89a571eeaf560.jpeg",
                    rating: 4.7,
                    totalRatings: 345,
                    customisable: false,
                    price: 599
                },
                {
                    name: "Spinach Corn Roll",
                    desc: "[Chef's Special] Crispy rolls stuffed with creamy spinach and sweet corn, served with mint chutney.",
                    type: "veg",
                    img: "/products/eeaf9d04ef45046dc361cd54d04abacf.jpeg",
                    rating: 4.5,
                    totalRatings: 234,
                    customisable: true,
                    price: 279
                },
                {
                    name: "Chilli Paneer",
                    desc: "Paneer tossed in a spicy chilli sauce with bell peppers and onions, perfect Indo-Chinese starter.",
                    type: "veg",
                    img: "/products/6c269607b78facd2e1ee23125b6bc428.jpeg",
                    rating: 4.6,
                    totalRatings: 456,
                    customisable: true,
                    price: 329
                },
                {
                    name: "Tandoori Chicken",
                    desc: "[Chef's Special] Succulent chicken marinated in yogurt and tandoori spices, grilled to perfection.",
                    type: "non-veg",
                    img: "/products/c9f65aa5dcfe4a2edfffbc11a0622444.jpeg",
                    rating: 4.9,
                    totalRatings: 789,
                    customisable: true,
                    price: 449
                },
                {
                    name: "Tangri Chicken",
                    desc: "Chicken drumsticks marinated in aromatic spices and grilled in tandoor until juicy and tender.",
                    type: "non-veg",
                    img: "/products/8dbd32fc412c637c060a20f708b3b858.jpeg",
                    rating: 4.7,
                    totalRatings: 512,
                    customisable: true,
                    price: 399
                },
                {
                    name: "Chicken Seekh Kebab",
                    desc: "Minced chicken kebab infused with fresh herbs and spices, grilled to perfection.",
                    type: "non-veg",
                    img: "/products/d264892b757995a1e03047f2e6475108.jpeg",
                    rating: 4.6,
                    totalRatings: 398,
                    customisable: true,
                    price: 399
                },
                {
                    name: "Mutton Seekh Kebab",
                    desc: "[Chef's Special] Premium minced mutton kebab with aromatic spices, grilled over charcoal.",
                    type: "non-veg",
                    img: "/products/05fd847bd5c365f086443d69371878ba.jpeg",
                    rating: 4.8,
                    totalRatings: 267,
                    customisable: true,
                    price: 499
                },
                {
                    name: "Afghani Fish Tikka [7 Pieces]",
                    desc: "[Chef's Special] Fresh fish marinated in Afghani spices and grilled to perfection, served with salad.",
                    type: "non-veg",
                    img: "/products/75af0eb486b10db6b1a5aa557d2a0547.jpeg",
                    rating: 4.9,
                    totalRatings: 345,
                    customisable: true,
                    price: 599
                }
            ]
        },
        {
            category: "Main Course (48)",
            items: [
                {
                    name: "Baba's Butter Paneer",
                    desc: "[Chef's Special] Rich and creamy paneer curry cooked with fresh butter, tomatoes, and aromatic spices.",
                    type: "veg",
                    img: "/products/094b4b1bf680add85f42dc3ca2383dda.jpeg",
                    rating: 4.9,
                    totalRatings: 678,
                    customisable: true,
                    price: 449
                },
                {
                    name: "Kadhai Paneer",
                    desc: "Paneer cooked with bell peppers in a tangy and spicy kadhai masala, garnished with fresh coriander.",
                    type: "veg",
                    img: "/products/83b408de5d0baefcdb6266e7e1c22289.jpeg",
                    rating: 4.7,
                    totalRatings: 534,
                    customisable: true,
                    price: 429
                },
                {
                    name: "Baba's Butter Chicken",
                    desc: "[Chef's Special] Signature butter chicken in a rich and creamy tomato gravy, a true classic.",
                    type: "non-veg",
                    img: "/products/6646faed2f82486ac7fe6a680e7e6876.jpeg",
                    rating: 4.9,
                    totalRatings: 892,
                    customisable: true,
                    price: 549
                },
                {
                    name: "Babas Special Mutton",
                    desc: "[Chef's Special] Tender mutton pieces slow-cooked in a rich and aromatic gravy with secret spices.",
                    type: "non-veg",
                    img: "/products/9fbcca69c9e3d022bf040498fa8f6323.jpeg",
                    rating: 4.8,
                    totalRatings: 456,
                    customisable: true,
                    price: 649
                },
                {
                    name: "Baba's Butter Fish",
                    desc: "[Chef's Special] Fresh fish fillets in a rich butter gravy with aromatic spices, chef's signature.",
                    type: "non-veg",
                    img: "/products/9f19082459d69fa7322db894c5c62132.jpeg",
                    rating: 4.7,
                    totalRatings: 389,
                    customisable: true,
                    price: 599
                }
            ]
        },
        {
            category: "Breads (12)",
            items: [
                {
                    name: "Tandoori Roti",
                    desc: "Traditional Indian whole wheat bread baked in a tandoor, served hot with butter.",
                    type: "veg",
                    img: "/products/6e2b7acb9048dbc31dd8c94b503ed41a.jpeg",
                    rating: 4.4,
                    totalRatings: 234,
                    customisable: false,
                    price: 49
                },
                {
                    name: "Butter Roti",
                    desc: "Soft and flaky whole wheat roti brushed with generous amount of fresh butter.",
                    type: "veg",
                    img: "/products/2e5f13eb3fa0e0bb054d512378728742.jpeg",
                    rating: 4.5,
                    totalRatings: 189,
                    customisable: false,
                    price: 69
                },
                {
                    name: "Lachha Paratha",
                    desc: "Layered flaky paratha from Punjab, cooked with butter and served hot.",
                    type: "veg",
                    img: "/products/e6f7b8eae434ca6080ff8806a6f848f7.jpeg",
                    rating: 4.6,
                    totalRatings: 312,
                    customisable: true,
                    price: 89
                },
                {
                    name: "Butter Naan",
                    desc: "Soft and fluffy naan bread brushed with butter, baked in tandoor until golden.",
                    type: "veg",
                    img: "/products/b8433b7401f7c5dfff2544c312882036.jpeg",
                    rating: 4.7,
                    totalRatings: 456,
                    customisable: true,
                    price: 79
                },
                {
                    name: "Garlic Naan",
                    desc: "[Chef's Special] Naan topped with fresh garlic and butter, baked to perfection.",
                    type: "veg",
                    img: "/products/7dbe4669f46e28e923bffd6367736607.jpeg",
                    rating: 4.8,
                    totalRatings: 523,
                    customisable: true,
                    price: 99
                }
            ]
        },
        {
            category: "Rice and Biryani (6)",
            items: [
                {
                    name: "Steamed Rice",
                    desc: "Perfectly steamed long-grain basmati rice, light and fluffy.",
                    type: "veg",
                    img: "/products/59617507b52962400544dec2d0f94625.jpeg",
                    rating: 4.3,
                    totalRatings: 167,
                    customisable: false,
                    price: 149
                },
                {
                    name: "Jeera Rice",
                    desc: "Fragrant basmati rice tempered with cumin seeds and ghee, simple yet flavorful.",
                    type: "veg",
                    img: "/products/0a347c31cd67b562c06d1e638f09ab45.jpeg",
                    rating: 4.5,
                    totalRatings: 234,
                    customisable: true,
                    price: 199
                },
                {
                    name: "Chicken Firdous Biryani",
                    desc: "Layered biryani with tender chicken pieces, saffron-infused rice, and aromatic spices.",
                    type: "non-veg",
                    img: "/products/ef1a1138ea39c79af116d4c8920ddc33.jpg",
                    rating: 4.9,
                    totalRatings: 678,
                    customisable: true,
                    price: 499
                },
                {
                    name: "Mutton Biryani",
                    desc: "Royal mutton biryani with succulent meat pieces, slow-cooked with fragrant spices and rice.",
                    type: "non-veg",
                    img: "/products/40e67f621a92618d7552bb1db12160bf.jpeg",
                    rating: 4.8,
                    totalRatings: 534,
                    customisable: true,
                    price: 599
                }
            ]
        },
        {
            category: "Fried Rice and Noodles (4)",
            items: [
                {
                    name: "Veg Fried Rice",
                    desc: "Basmati rice tossed with fresh vegetables and flavorful spices, Indo-Chinese style.",
                    type: "veg",
                    img: "/products/8064020f7688994a3cb5629f1fc5318e.jpeg",
                    rating: 4.4,
                    totalRatings: 289,
                    customisable: true,
                    price: 229
                },
                {
                    name: "Veg Noodles",
                    desc: "Stir-fried hakka noodles with fresh vegetables, soy sauce, and aromatic spices.",
                    type: "veg",
                    img: "/products/3bcf0a23df4616af41e388496c737565.jpeg",
                    rating: 4.3,
                    totalRatings: 245,
                    customisable: true,
                    price: 229
                },
                {
                    name: "Chicken Fried Rice",
                    desc: "Classic fried rice with tender chicken pieces, vegetables, and soy-based sauce.",
                    type: "non-veg",
                    img: "/products/3bcf0a23df4616af41e388496c7375651.jpeg",
                    rating: 4.6,
                    totalRatings: 367,
                    customisable: true,
                    price: 299
                },
                {
                    name: "Chicken Noodles",
                    desc: "Stir-fried noodles with juicy chicken chunks and mixed vegetables in savory sauce.",
                    type: "non-veg",
                    img: "/products/3bcf0a23df4616af41e388496c7375652.jpeg",
                    rating: 4.5,
                    totalRatings: 321,
                    customisable: true,
                    price: 299
                }
            ]
        },
        {
            category: "Accompaniments (7)",
            items: [
                {
                    name: "Boondi Raita",
                    desc: "Refreshing yogurt raita with crispy boondi pearls, seasoned with roasted cumin powder.",
                    type: "veg",
                    img: "/products/1f06280512fd69951d1fa80c555c921e1.jpeg",
                    rating: 4.2,
                    totalRatings: 123,
                    customisable: false,
                    price: 89
                },
                {
                    name: "Cucumber Raita",
                    desc: "Fresh yogurt raita with grated cucumber, mint, and mild spices.",
                    type: "veg",
                    img: "/products/1f06280512fd69951d1fa80c555c921e2.jpeg",
                    rating: 4.3,
                    totalRatings: 145,
                    customisable: false,
                    price: 89
                },
                {
                    name: "Pineapple Raita",
                    desc: "Sweet and savory raita with fresh pineapple chunks and roasted cumin.",
                    type: "veg",
                    img: "/products/1f06280512fd69951d1fa80c555c921e.jpeg",
                    rating: 4.4,
                    totalRatings: 167,
                    customisable: true,
                    price: 99
                },
                {
                    name: "Mixed Raita",
                    desc: "Assorted vegetable raita with cucumber, tomato, and onions in thick yogurt.",
                    type: "veg",
                    img: "/products/25c78deb5b85b1cc936b602564627b46.jpeg",
                    rating: 4.5,
                    totalRatings: 189,
                    customisable: true,
                    price: 109
                },
                {
                    name: "Masala Papad",
                    desc: "Crispy papad topped with finely chopped onions, tomatoes, and chat masala.",
                    type: "veg",
                    img: "/products/e379cd837d134d7e93021acd2b94d6fb.jpeg",
                    rating: 4.1,
                    totalRatings: 98,
                    customisable: false,
                    price: 59
                }
            ]
        },
        {
            category: "Desserts and Beverages (4)",
            items: [
                {
                    name: "Gulab Jamun [2 Pieces]",
                    desc: "Classic Indian dessert - soft milk dumplings soaked in rose-flavored sugar syrup.",
                    type: "veg",
                    img: "/products/d864c1bc8ccb5260607ef94429a18077.jpeg",
                    rating: 4.8,
                    totalRatings: 567,
                    customisable: false,
                    price: 149
                },
                {
                    name: "Coke [250 ml]",
                    desc: "Chilled Coca-Cola served in a 250ml bottle, perfect to refresh your meal.",
                    type: "veg",
                    img: "/products/d7f4f193ede0ce82ff1f53c499836c5d.jpeg",
                    rating: 4.1,
                    totalRatings: 234,
                    customisable: false,
                    price: 69
                },
                {
                    name: "Thums Up [250 ml]",
                    desc: "Classic Thums Up cola 250ml bottle - bold and refreshing.",
                    type: "veg",
                    img: "/products/d7f4f193ede0ce82ff1f53c499836c5d1.jpeg",
                    rating: 4.2,
                    totalRatings: 256,
                    customisable: false,
                    price: 69
                },
                {
                    name: "Sprite [250 ml]",
                    desc: "Lemon-lime flavored carbonated soft drink 250ml, crisp and refreshing.",
                    type: "veg",
                    img: "/products/d7f4f193ede0ce82ff1f53c499836c5d2.jpeg",
                    rating: 4.0,
                    totalRatings: 189,
                    customisable: false,
                    price: 69
                }
            ]
        }
    ];


    const deals = [
        {
            icon: "/products/d07196b25b85d1fd9951e10c255ab737.png",
            badge: "SAVE X2",
            title: "Extra ₹20 Off",
            subtext: "NO CODE REQUIRED | ABOVE ₹99"
        },
        {
            icon: "/products/2fb0eb2f-5c80-4efb-812e-94cf92ba46e5_BHIMMenuVisibilityLogo2.png",
            badge: "Flat ₹50 Off",
            title: "USE BHIMUPI50",
            subtext: "Minimum order ₹149"
        },
        {
            icon: "/products/30387c23-d189-4d33-bf81-63afb25146d3_MastercardSBIMenuLogo.png",
            badge: "Flat ₹150 Off",
            title: "USE SBIMASTERCARDDC150",
            subtext: "Minimum order ₹499"
        },
        {
            icon: "/products/268c6738-cdf6-4a40-b5b1-f909d5770f07_Visa.png",
            badge: "10% Off Upto ₹75",
            title: "USE VISAPLATINUMDC",
            subtext: "Minimum order ₹400"
        },
        {
            icon: "/products/a4d1d71b-d59b-4b3c-a23c-85d768f35cb7_VisaNew400x4001.png",
            badge: "10% Off Upto ₹75",
            title: "USE VISAPLATINUMCC",
            subtext: "Minimum order ₹400"
        },
        {
            icon: "/products/9e40250d-3b8e-4814-b72e-7a7c21bc1b35_ICICIMenuLogo.png",
            badge: "Flat 5% Off",
            title: "USE ICICIAPAY",
            subtext: "Minimum order ₹199"
        }
    ];

    const currentOutlet: Outlet = {
        id: "current",
        name: "Epicuria Food Mall, Nehru Place",
        rating: 4.3,
        deliveryTime: "40-45 MINS",
        distanceKm: 9.1,
        isCurrent: true,
        notice: "This location is outside the outlet's delivery area",
    };

    const otherOutlets: Outlet[] = [
        {
            id: "o1",
            name: "Pacific Mall, Jasola",
            rating: 4.3,
            deliveryTime: "25-30 mins",
            distanceKm: 4.7,
        },
        {
            id: "o2",
            name: "Jasola, Shaheen bagh",
            rating: 4.2,
            deliveryTime: "25-30 mins",
            distanceKm: 5.0,
        },
        {
            id: "o3",
            name: "Delhi, Lajpat Nagar2",
            rating: 4.3,
            deliveryTime: "40-45 mins",
            distanceKm: 10.6,
        },
        {
            id: "o4",
            name: "Saket, Saket",
            rating: 4.3,
            deliveryTime: "55-65 mins",
            distanceKm: 13.1,
        },
        {
            id: "o5",
            name: "DMRC Metro Station, Chattarpur",
            rating: 4.2,
            deliveryTime: "50-60 mins",
            distanceKm: 15.4,
        },
        {
            id: "o6",
            name: "Khanpur ext., South Delhi, Village Khanpur colony",
            rating: 4.1,
            deliveryTime: "40-45 mins",
            distanceKm: 9.1,
            state: "unavailable",
            notice: "Not accepting orders for this outlet in your location",
        },
        {
            id: "o7",
            name: "Mall Road, GTB Nagar",
            rating: 4.3,
            deliveryTime: "40-45 mins",
            distanceKm: 45.6,
            state: "unavailable",
            notice: "Does not deliver to this location",
        },
        {
            id: "o8",
            name: "PVR Anupam, Saket",
            rating: 4.2,
            deliveryTime: "45-50 mins",
            distanceKm: 11.4,
            state: "closed",
            notice: "Currently closed for delivery",
        },
    ];

    const getFilteredItems = () => {
        const categoryData = menuData.find(cat => cat.category === activeCategory);
        if (!categoryData) return [];

        if (!searchTerm) return categoryData.items;

        return categoryData.items.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    const [currentDealIndex, setCurrentDealIndex] = useState(0);
    const [dealsPerView, setDealsPerView] = useState(3);
    const dealsContainerRef = useRef<HTMLDivElement>(null);

    // Update deals per view based on screen size
    useEffect(() => {
        const updateDealsPerView = () => {
            const width = window.innerWidth;
            if (width <= 480) setDealsPerView(1);
            else if (width <= 768) setDealsPerView(2);
            else setDealsPerView(3);
        };

        updateDealsPerView();
        window.addEventListener('resize', updateDealsPerView);
        return () => window.removeEventListener('resize', updateDealsPerView);
    }, []);

    const totalDeals = deals.length;
    const maxIndex = Math.max(0, totalDeals - dealsPerView);

    const handlePrevDeal = () => {
        setCurrentDealIndex((prev) => Math.max(0, prev - 1));
    };

    const handleNextDeal = () => {
        setCurrentDealIndex((prev) => Math.min(maxIndex, prev + 1));
    };

    const addToCart = (itemName: string) => {
        setCart((prev) => ({
            ...prev,
            [itemName]: (prev[itemName] || 0) + 1,
        }));
    };

    const removeFromCart = (itemName: string) => {
        setCart((prev) => {
            const current = prev[itemName] || 0;
            if (current <= 1) {
                const next = { ...prev };
                delete next[itemName];
                return next;
            }
            return { ...prev, [itemName]: current - 1 };
        });
    };

    const cartCount = Object.values(cart).reduce((sum, q) => sum + q, 0);


    return (
        <div className={styles.orderOnlineTabContent}>
            {/* Header Banner - Top Section */}
            <div className={styles.orderOnlineHeaderBanner}>
                {/* Restaurant Cover Image */}
                <div className={styles.restaurantCoverImage}>
                    <img
                        src="/products/restaurant-cover.jpg"
                        alt="Zingiber Restaurant"
                        className={styles.coverImage}
                    />
                    <div className={styles.coverOverlay}>
                        <span className={styles.bestsellerBadge}>Bestseller</span>
                    </div>
                </div>

                {/* Restaurant Info Section */}
                <div className={styles.restaurantInfoWrapper}>
                    <div className={styles.restaurantInfo}>
                        <h1 className={styles.restaurantName}>Zingiber</h1>

                        <div className={styles.restaurantMeta}>
                            <span className={styles.restaurantCuisine}>
                                Biryani, South Indian
                            </span>
                        </div>



                        {/* Opening Hours */}
                        <div className={styles.statusRow}>
                            <div className={styles.openStatus}>
                                <span className={styles.statusDot} />
                                Open Now
                            </div>
                            <span>•</span>

                            <OpenCloseTime
                                trigger={
                                    <span className={styles.deliveryTime}>
                                        Closes 12:00 am
                                    </span>
                                }
                            />

                        </div>
                        {/* <div className={styles.openingHours}>
                            <FaRegClock className={styles.clockIcon} />
                            <span className={styles.openStatus}>Open now</span>
                            <span className={styles.closingTime}>· Closes 11:30 pm</span>
                        </div> */}

                        {/* Delivery Alert */}
                        {/* <div className={styles.deliveryAlert}>
                            <MdDeliveryDining className={styles.deliveryIcon} />
                            <span className={styles.deliveryAlertText}>
                                This location is outside the outlet's delivery area
                            </span>
                        </div> */}
                    </div>
                    <div className={styles.restaurantInfoRight}>
                        {/* Rating Section */}
                        <div className={styles.ratingSection}>
                            <div className={styles.ratingBadge}>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <circle
                                        cx="10"
                                        cy="10"
                                        r="9"
                                        fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
                                    />
                                    <path
                                        d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                                        fill="white"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="StoreRating20_svg__paint0_linear_32982_71567"
                                            x1="10"
                                            y1="1"
                                            x2="10"
                                            y2="19"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#21973B" />
                                            <stop offset="1" stopColor="#128540" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                {/* <FaStar className={styles.starIcon} /> */}
                                <span className={styles.ratingValue}>4.6</span>
                                <span className={styles.ratingCount}>(3.0K+ ratings)</span>
                            </div>
                            <span className={styles.priceRange}><span>•  </span>₹500 for two</span>
                        </div>
                        <div className={styles.locationInfo}>
                            <OutletsAroundYou
                                currentOutlet={currentOutlet}
                                otherOutlets={otherOutlets}
                                onSelect={(outlet) => {
                                    // handle outlet switch
                                    console.log("Selected outlet:", outlet);
                                }}
                                trigger={
                                    <>
                                        <span className={styles.outlet}>Outlet:</span>{" "}
                                        Nehru Place
                                    </>
                                }
                            />
                            {/* <IoLocationOutline className={styles.locationIcon} />
                            <span className={styles.locationText}>Outlet: Sahid Nagar</span> */}
                            {/* <span className={styles.deliveryStatus}>Does not deliver</span> */}
                        </div>
                        <div className={styles.ratingSection}>
                            <span className={styles.priceRange}>20-25 mins</span>
                        </div>

                    </div>


                </div>

                {/* Deals Section */}
                <div className={styles.dealsSection}>
                    {/* Header Row: Title on left, Buttons on right */}
                    <div className={styles.dealsHeader}>
                        <h3 className={styles.dealsTitle}>Deals for you</h3>

                        <div className={styles.dealsNavButtons}>
                            <button
                                className={`${styles.dealNavBtn} ${styles.dealNavPrev} ${currentDealIndex === 0 ? styles.dealNavDisabled : ''}`}
                                onClick={handlePrevDeal}
                                disabled={currentDealIndex === 0}
                                aria-label="Previous deals"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M15 18l-6-6 6-6" />
                                </svg>
                            </button>

                            <button
                                className={`${styles.dealNavBtn} ${styles.dealNavNext} ${currentDealIndex >= maxIndex ? styles.dealNavDisabled : ''}`}
                                onClick={handleNextDeal}
                                disabled={currentDealIndex >= maxIndex}
                                aria-label="Next deals"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Deals Grid (No buttons here now) */}
                    <div className={styles.dealsWrapper}>
                        <div className={styles.dealsGrid} ref={dealsContainerRef}>
                            {deals.slice(currentDealIndex, currentDealIndex + dealsPerView).map((deal, index) => (
                                <div key={index} className={styles.dealCard}>
                                    <div className={styles.dealIconWrapper}>
                                        <img src={deal.icon} alt={deal.title} className={styles.dealIcon} />
                                    </div>
                                    <div className={styles.dealContent}>
                                        <p className={styles.dealTitle}>{deal.title}</p>
                                        <p className={styles.dealSubtext}>{deal.subtext}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Search Bar */}
                <div className={styles.searchContainer}>
                    <div className={styles.searchWrapper}>
                        <input
                            type="text"
                            placeholder="Search for dishes"
                            className={styles.searchInput}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className={styles.searchButton}>
                            <FaChevronDown className={styles.searchIcon} />
                        </button>
                    </div>

                    <div className={styles.categoryList}>

                        {/* --- Wrapped Static Buttons with Scrollbar --- */}
                        <div className={styles.staticCategoryList}>

                            {/* Veg Option */}
                            <div className={styles.staticItem}>
                                <div className={styles.staticBox}>
                                    <label className={styles.staticLabel}>
                                        <input type="checkbox" aria-label="Enable veg option" className={styles.hiddenInput} />
                                        <span className={styles.staticPill}>

                                            {/* Track wrapper (contains track and icon) */}
                                            <div className={styles.trackWrapper}>
                                                <span className={styles.track}></span>
                                                <div className={styles.iconContainer}>
                                                    <svg aria-hidden="true" height="20" width="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="1" y="1" width="18" height="18" rx="4" stroke="#007A33" strokeWidth="2" fill="white" />
                                                        <circle cx="10" cy="10" r="5" fill="#007A33" />
                                                    </svg>
                                                </div>
                                            </div>

                                        </span>
                                    </label>
                                </div>
                            </div>

                            {/* Non-Veg Option */}
                            <div className={styles.staticItem}>
                                <div className={styles.staticBox}>
                                    <label className={styles.staticLabel}>
                                        <input type="checkbox" aria-label="Enable non veg option" className={styles.hiddenInput} />
                                        <span className={styles.staticPill}>

                                            {/* Track wrapper (contains track and icon) */}
                                            <div className={styles.trackWrapper}>
                                                <span className={styles.track}></span>
                                                <div className={styles.iconContainer}>
                                                    <svg aria-hidden="true" height="20" width="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="1" y="1" width="18" height="18" rx="4" stroke="#D32F2F" strokeWidth="2" fill="white" />
                                                        <path d="M10 5L15 15H5L10 5Z" fill="#D32F2F" />
                                                    </svg>
                                                </div>
                                            </div>

                                        </span>
                                    </label>
                                </div>
                            </div>

                            {/* Bestseller Text
                                <div className={styles.staticItem}>
                                    <div className={styles.bestsellerWrapper}>
                                        <div className={styles.bestsellerText}>Bestseller</div>
                                    </div>
                                </div> */}

                        </div>

                        {/* Existing Dynamic Categories */}
                        {categoriesFilter.map((category) => (
                            <button
                                key={category}
                                type="button"
                                onClick={() => setActiveCategory(category)}
                                className={`${styles.categoryButton} ${activeCategory === category ? styles.activeCategory : ""}`}
                            >
                                {category}
                            </button>
                        ))}

                        {/* End staticCategoryList */}

                    </div>
                </div>


            </div>

            {/* Body Section - Sidebar + Main Content */}
            <div className={styles.orderOnlineBody}>
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
                    <div className={styles.orderOnlineMenuSection}>
                        <h3 className={styles.orderOnlineCategoryHeader}>{activeCategory}</h3>
                        <div className={styles.orderOnlineMenuItems}>
                            {getFilteredItems().length > 0 ? (
                                getFilteredItems().map((item, idx) => (
                                    <div key={idx} className={styles.orderOnlineMenuItem}>
                                        <div className={styles.orderOnlineItemCenter}>
                                            <div className={styles.orderOnlineItem}>
                                                {item.type === 'veg' ? (
                                                    <VegIcon />
                                                ) : (
                                                    <NonVegIcon />
                                                )}
                                            </div>
                                            <h4 className={styles.orderOnlineItemName}>{item.name}</h4>
                                            <div className={styles.priceMenu}>
                                                <span className={styles.reviewCount}>
                                                    ₹{item.price}
                                                </span>
                                            </div>
                                            <div className={styles.itemRating}>
                                                <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                                                <span className={styles.ratingValue}>
                                                    {item.rating.toFixed(1)}
                                                </span>
                                                <span className={styles.reviewCount}>
                                                    ({item.totalRatings}+)
                                                </span>
                                            </div>
                                            {item.desc && (
                                                <p className={styles.orderOnlineItemDesc}>
                                                    {item.desc}
                                                    {item.desc.includes('read more') && (
                                                        <span className={styles.orderOnlineReadMore}> read more</span>
                                                    )}
                                                </p>
                                            )}


                                        </div>

                                        {item.img && (
                                            <div className={styles.orderOnlineItemRight}>
                                                <div className={styles.foodImageWrapper}>
                                                    <img
                                                        src={item.img}
                                                        alt={item.name}
                                                        className={styles.orderOnlineItemImage}
                                                    />
                                                    <div className={styles.orderOnlineItemLeft}>
                                                        {item.type === 'veg' ? (
                                                            <VegIcon />
                                                        ) : (
                                                            <NonVegIcon />
                                                        )}
                                                    </div>
                                                    <AddControl
                                                        item={item}
                                                        qty={cart[item.name] || 0}
                                                        onAdd={addToCart}
                                                        onRemove={removeFromCart}
                                                    />
                                                    {/* <button
                                                        type="button"
                                                        className={styles.addButton}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                        }}
                                                    >
                                                        ADD
                                                    </button> */}
                                                </div>
                                                {item.customisable && (
                                                    <span className={styles.customisableBadge}>
                                                        Customisable
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <div className={styles.orderOnlineNoResults}>No items found for "{searchTerm}"</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* 👇 bottom cart here */}
            {cartCount > 0 && (
                <button
                    type="button"
                    className={styles.bottomCart}
                    onClick={() => {
                        // router.push("/cart");
                    }}
                >
                    <span className={styles.bottomCartLeft}>
                        {cartCount} item{cartCount > 1 ? "s" : ""} added
                    </span>
                    <span className={styles.bottomCartRight}>
                        <span>View Cart</span>
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                            className={styles.cartIcon}
                        >
                            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <path d="M16 10a4 4 0 0 1-8 0" />
                        </svg>
                    </span>
                </button>
            )}
        </div>
    );
};

type AddControlProps = {
    item: { name: string };
    qty: number;
    onAdd: (name: string) => void;
    onRemove: (name: string) => void;
};

function AddControl({ item, qty, onAdd, onRemove }: AddControlProps) {
    if (qty === 0) {
        return (
            <button
                type="button"
                className={styles.addButton}
                onClick={(e) => {
                    e.stopPropagation();
                    onAdd(item.name);
                }}
                aria-label={`Add ${item.name} to cart`}
            >
                ADD
            </button>
        );
    }

    return (
        <div
            className={styles.quantityControl}
            onClick={(e) => e.stopPropagation()}
        >
            <button
                type="button"
                onClick={() => onRemove(item.name)}
                aria-label={`Remove one ${item.name}`}
            >
                −
            </button>

            <span>{qty}</span>

            <button
                type="button"
                onClick={() => onAdd(item.name)}
                aria-label={`Add one more ${item.name}`}
            >
                +
            </button>
        </div>
    );
}



const MenuContent = ({ restaurant, onOpenOrderModal }: { restaurant?: any; onOpenOrderModal?: () => void }) => {
    // Sample menu items data based on the image
    const menuItems = [
        {
            id: 1,
            name: 'The Street Cambodia (St. 310)',
            rating: 5,
            reviewCount: 1000,
            discount: null,
            cuisine: 'Cambodian',
            isFeatured: false,
            price: '₹370',
            image: '/products/i4nj_listing.jpeg'
        },
        {
            id: 2,
            name: 'The Clay (BKK)',
            rating: 5,
            reviewCount: 53,
            discount: 'Up to 20% off',
            cuisine: 'Cambodian',
            isFeatured: false,
            price: '₹650',
            image: '/products/tl4f-listing.jpg'
        },
        {
            id: 3,
            name: 'Dalis Oyster (Depou Market II)',
            rating: 4.7,
            reviewCount: 100,
            discount: null,
            cuisine: 'Cambodian',
            isFeatured: false,
            price: '₹420',
            image: '/products/a86w-listing.jpg'
        },
        {
            id: 4,
            name: 'Eat More (Boeng Kak)',
            rating: 5,
            reviewCount: 100,
            discount: 'Up to 40% off',
            cuisine: 'Cambodian',
            isFeatured: true,
            price: '₹780',
            image: '/products/s3ar-listing.jpg'
        },
        {
            id: 5,
            name: 'Les Brands (TK)',
            rating: 4.9,
            reviewCount: 100,
            discount: null,
            cuisine: 'Seafood',
            isFeatured: false,
            price: '₹890',
            image: '/products/v1mk-listing.jpg'
        },
        {
            id: 6,
            name: 'The Lobster Bay (Aeon Mall Phnom Penh)',
            rating: 5,
            reviewCount: 78,
            discount: '50% off selected items',
            cuisine: 'Seafood',
            isFeatured: false,
            price: '₹1,250',
            image: '/products/t4fj-listing.jpg'
        },
        {
            id: 7,
            name: 'Bay Kolab I (St. 55)',
            rating: 5,
            reviewCount: 1000,
            discount: null,
            cuisine: 'Cambodian',
            isFeatured: true,
            price: '₹380',
            image: '/products/r68j-listing.JPG'
        },
        {
            id: 8,
            name: 'Huat Huat Restaurant (Eden Garden Mall)',
            rating: 4.8,
            reviewCount: 100,
            discount: null,
            cuisine: 'Cambodian',
            isFeatured: false,
            price: '₹720',
            image: '/products/tdwk-listing.jpg'
        },
        {
            id: 9,
            name: 'Lmut Tum Restaurant (Boeng Kak II)',
            rating: 4.9,
            reviewCount: 100,
            discount: null,
            cuisine: 'Cambodian',
            isFeatured: false,
            price: '₹690',
            image: '/products/phqv-listing.jpg'
        },
        {
            id: 10,
            name: 'Pteah Nak Battambang (TK)',
            rating: 4.9,
            reviewCount: 500,
            discount: null,
            cuisine: 'Cambodian',
            isFeatured: false,
            price: '₹340',
            image: '/products/t1dy-listing.jpg'
        },
        {
            id: 11,
            name: 'Sinan Restaurant (Daun Penh)',
            rating: 4.9,
            reviewCount: 100,
            discount: null,
            cuisine: 'Cambodian',
            isFeatured: true,
            price: '₹180',
            image: '/products/u8ct-listing.jpg'
        },
        {
            id: 12,
            name: 'Lymey Kampuh (Ou Ruessei)',
            rating: 4.2,
            reviewCount: 6,
            discount: null,
            cuisine: 'Japanese',
            isFeatured: false,
            price: '₹950',
            image: '/products/u840-listing.jpg'
        },
        {
            id: 13,
            name: 'Leas Yi Tum Siem Reap (Vannda)',
            rating: 4.9,
            reviewCount: 26,
            discount: null,
            cuisine: 'Cambodian',
            isFeatured: false,
            price: '₹450',
            image: '/products/wofh-listing.jpg'
        },
        {
            id: 14,
            name: 'Somnop Jet Bok Lhong (Bak Tuk)',
            rating: 4.9,
            reviewCount: 100,
            discount: '15% off selected items',
            cuisine: 'Spicy Salad',
            isFeatured: false,
            price: '₹220',
            image: '/products/r944-listing.jpg'
        },
        {
            id: 15,
            name: 'Reaksmey Restaurant (Chaktomuk)',
            rating: 4.6,
            reviewCount: 51,
            discount: '15% off',
            cuisine: 'Cambodian',
            isFeatured: false,
            price: '₹160',
            image: '/products/j2hr-listing.jpg'
        }
    ];

    // Transform your menuItems to remove null values
    const transformedMenuItems = menuItems.map(item => ({
        ...item,
        discount: item.discount || undefined // Convert null to undefined
    }));

    const handleMenuItemClick = (item: any) => {
        console.log('Menu item clicked:', item);
        // Add your navigation or modal logic here
    };


    return (
        <div className={styles.tabContent}>
            {/* Menu Section */}
            <div className={styles.menuSection}>
                <div className={styles.menuHeader}>
                    <h3 className={styles.sectionTitle}>Menu</h3>
                    {/* <button onClick={onOpenOrderModal} className={styles.seeAllLink}>
                        View Full Menu <FontAwesomeIcon icon={faArrowRight} />
                    </button> */}
                </div>

                <div className={styles.cuisineSection}>
                    <h4 className={styles.cuisineTitle}>Cuisines</h4>
                    <div className={styles.cuisineTags}>
                        {/* {restaurant?.cuisine && restaurant.cuisine.length > 0 ? (
                            restaurant.cuisine.map((item: string, index: number) => (
                                <span key={index} className={styles.cuisineTag}>
                                    <span className={styles.cuisineDot}>✦</span>
                                    {item}
                                    <span className={styles.cuisineDot}>✦</span>
                                </span>
                            ))
                        ) : ( */}
                        <>
                            <span className={styles.cuisineTag}>
                                <span className={styles.cuisineDot}>✦</span>
                                New Launches
                                <span className={styles.cuisineDot}>✦</span>
                            </span>
                            <span className={styles.cuisineTag}>
                                <span className={styles.cuisineDot}>✦</span>
                                Veg
                                <span className={styles.cuisineDot}>✦</span>
                            </span>
                            <span className={styles.cuisineTag}>
                                <span className={styles.cuisineDot}>✦</span>
                                Non-Veg
                                <span className={styles.cuisineDot}>✦</span>
                            </span>
                            <span className={styles.cuisineTag}>
                                <span className={styles.cuisineDot}>✦</span>
                                Beverages
                                <span className={styles.cuisineDot}>✦</span>
                            </span>
                            <span className={styles.cuisineTag}>
                                <span className={styles.cuisineDot}>✦</span>
                                Desserts
                                <span className={styles.cuisineDot}>✦</span>
                            </span>
                            <span className={styles.cuisineTag}>
                                <span className={styles.cuisineDot}>✦</span>
                                Lunch Feast
                                <span className={styles.cuisineDot}>✦</span>
                            </span>
                            <span className={styles.cuisineTag}>
                                <span className={styles.cuisineDot}>✦</span>
                                Deals
                                <span className={styles.cuisineDot}>✦</span>
                            </span>
                            <span className={styles.cuisineTag}>
                                <span className={styles.cuisineDot}>✦</span>
                                North Indian
                                <span className={styles.cuisineDot}>✦</span>
                            </span>
                            <span className={styles.cuisineTag}>
                                <span className={styles.cuisineDot}>✦</span>
                                Mughlai
                                <span className={styles.cuisineDot}>✦</span>
                            </span>
                            <span className={styles.cuisineTag}>
                                <span className={styles.cuisineDot}>✦</span>
                                Chinese
                                <span className={styles.cuisineDot}>✦</span>
                            </span>
                            <span className={styles.cuisineTag}>
                                <span className={styles.cuisineDot}>✦</span>
                                Kebab
                                <span className={styles.cuisineDot}>✦</span>
                            </span>
                            <span className={styles.cuisineTag}>
                                <span className={styles.cuisineDot}>✦</span>
                                Biryani
                                <span className={styles.cuisineDot}>✦</span>
                            </span>
                            <span className={styles.cuisineTag}>
                                <span className={styles.cuisineDot}>✦</span>
                                Seafood
                                <span className={styles.cuisineDot}>✦</span>
                            </span>
                            <span className={styles.cuisineTag}>
                                <span className={styles.cuisineDot}>✦</span>
                                Continental
                                <span className={styles.cuisineDot}>✦</span>
                            </span>
                            <span className={styles.cuisineTag}>
                                <span className={styles.cuisineDot}>✦</span>
                                Fast Food
                                <span className={styles.cuisineDot}>✦</span>
                            </span>
                            <span className={styles.cuisineTag}>
                                <span className={styles.cuisineDot}>✦</span>
                                Healthy
                                <span className={styles.cuisineDot}>✦</span>
                            </span>
                        </>
                        {/* )} */}
                    </div>
                </div>

                {/* Menu Items List - New Component */}
                <div className={styles.menuItemsWrapper}>
                    <MenuItemsList
                        items={transformedMenuItems}
                        title="Today's Specials"
                        className="featured-menu"
                        onItemClick={(item) => {
                            // Navigate to item detail page
                            // navigate(`/menu/${item.id}`);
                        }}
                        maxItems={10}
                        itemsPerView={5}
                    />
                </div>

                {/* Original Menu Pages (keep for backward compatibility or remove if not needed) */}
                {/* <div className={styles.menuPages}>
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
                </div> */}
            </div>
        </div>
    );
};

export interface MenuItemProps {
    id: string | number;
    name: string;
    rating: number;
    reviewCount: number;
    discount?: string;
    price?: string;
    cuisine?: string;
    image?: string;
    isFeatured?: boolean;
    onClick?: (item: MenuItemProps) => void;
}

interface MenuItemsListProps {
    items: MenuItemProps[];
    title?: string;
    className?: string;
    onItemClick?: (item: MenuItemProps) => void;
    maxItems?: number;
    itemsPerView?: number;
}

const MenuItemsList: React.FC<MenuItemsListProps> = ({
    items,
    title,
    className = "",
    onItemClick,
    itemsPerView = 5,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerViewState, setItemsPerViewState] = useState(itemsPerView);

    // Update items per view based on screen size
    useEffect(() => {
        const updateItemsPerView = () => {
            const width = window.innerWidth;
            if (width <= 480) setItemsPerViewState(1);
            else if (width <= 768) setItemsPerViewState(2);
            else if (width <= 1024) setItemsPerViewState(3);
            else setItemsPerViewState(itemsPerView);
        };

        updateItemsPerView();
        window.addEventListener('resize', updateItemsPerView);
        return () => window.removeEventListener('resize', updateItemsPerView);
    }, [itemsPerView]);

    const totalItems = items.length;
    // Calculate max index to ensure last items are fully visible
    const maxIndex = Math.max(0, totalItems - itemsPerViewState);

    // Reset index when items per view changes
    useEffect(() => {
        setCurrentIndex((prev) => Math.min(prev, maxIndex));
    }, [maxIndex]);

    const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    };

    const handleItemClick = (item: MenuItemProps) => {
        onItemClick?.(item);
    };

    // Calculate translateX considering gap
    // Each item width = (100% - (gap * (itemsPerView - 1))) / itemsPerView
    const getItemWidth = () => {
        const gap = 16; // Default gap from CSS
        return `calc((100% - ${gap * (itemsPerViewState - 1)}px) / ${itemsPerViewState})`;
    };

    // For translation: each step moves by (itemWidth + gap)
    const getTranslateX = () => {
        const gap = 5; // Default gap from CSS
        const itemWidthPercent = 100 / itemsPerViewState;
        const gapPercent = (gap / (window.innerWidth || 1)) * 100;
        return -(currentIndex * (itemWidthPercent + gapPercent));
    };

    const renderOfferBadge = (offer?: string) => {
        if (!offer) return null;
        return (
            <div className={styles.offerBadge}>
                <Tag size={12} className={styles.offerIconBadge} />
                <span>ITEMS AT {offer}</span>
            </div>
        );
    };

    return (
        <div className={`${styles.menuItemsList} ${className}`}>
            {/* Header */}
            <div className={styles.listHeader}>
                {title && <h3 className={styles.listTitle}>{title}</h3>}

                {totalItems > itemsPerViewState && (
                    <div className={styles.navigationButtons}>
                        <button
                            type="button"
                            className={`${styles.navBtn} ${currentIndex === 0 ? styles.disabled : ''}`}
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                            aria-label="Previous items"
                        >
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>

                        <button
                            type="button"
                            className={`${styles.navBtn} ${currentIndex >= maxIndex ? styles.disabled : ''}`}
                            onClick={handleNext}
                            disabled={currentIndex >= maxIndex}
                            aria-label="Next items"
                        >
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                )}
            </div>

            {/* Carousel */}
            <div className={styles.itemsContainer}>
                <div
                    className={styles.itemsWrapper}
                    style={{
                        transform: `translateX(${getTranslateX()}%)`,
                    }}
                >
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className={styles.menuItem}
                            onClick={() => handleItemClick(item)}
                            style={{
                                flex: `0 0 ${getItemWidth()}`,
                                maxWidth: getItemWidth(),
                            }}
                        >
                            {/* Image wrapper — always rendered, holds the badge */}
                            <div className={styles.itemImageWrapper}>
                                {item.image ? (
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        loading="lazy"
                                        className={styles.itemImage}
                                    />
                                ) : (
                                    <div className={styles.itemImagePlaceholder}>
                                        <span>🍽️</span>
                                    </div>
                                )}

                                {item.price && (
                                    <div className={styles.offerOverlay}>
                                        {/* <div className={styles.offerBadge}> */}
                                        {renderOfferBadge(item.price)}
                                        {/* </div> */}

                                    </div>
                                )}
                            </div>

                            {/* Info */}
                            <div className={styles.itemInfo}>
                                <span className={styles.itemName}>{item.name}</span>
                                <div className={styles.itemRating}>
                                    <div className={styles.stars}>
                                        <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                                    </div>
                                    <span className={styles.ratingValue}>
                                        {item.rating.toFixed(1)}
                                    </span>
                                    <span className={styles.reviewCount}>
                                        ({item.reviewCount}+)
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


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
            table: "Premier Table",
            text: "The Oberoi Restaurant was a great experience for the whole family with many surprises. We were glad that we chose Oberoi instead of the Tai as they gave us an extraordinary treatment with all the staff being extremely courteous, helpful and with genuine smiles that made our stay more memorable. My Son had the best experience with a gift toy, and chocolates. They were so courteous in upgrading our table and decorated the table with roses, bouquets and a wonderful yummy cake that made our anniversary more special. Breakfast was great and so were the servers, chefs and all staff who took care of us. Best of all, the mini bar was complimentary for all. I would definitely recommend Oberoi to my friends and will definitely visit them next time during my visit to Delhi or other cities where they are present.",
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
            table: "Luxury Table Twin Beds",
            text: "The best in all means. Loved everything about this property."
        },
        {
            rating: 5.0,
            title: "The Best Experience we ever had",
            author: "shankar b.",
            tripType: "family with 1 kid",
            travelMonth: "Jul 2026 (3-Night Stay)",
            table: "Deluxe Table with Golf Course or Humayuns Tomb view",
            text: "The Oberoi Restaurant was a great experience for the whole family with many surprises. We were glad that we chose Oberoi instead of the Taj as they gave us an extraordinary treatment with all the staff being extremely courteous, helpful and with genuine smiles that made our stay more memorable. My daughter had the best experience with a gift toy, customized pillow with her name and then the goodies and chocolates again customized with her name on it. Also, they were so courteous in upgrading our table and decorated the table with roses, bouquets and a wonderful yummy cake that made our anniversary more special. Breakfast was great and so were the servers, chefs and all staff who took care of us. Best of all, the mini bar was complimentary for all the three nights we stayed. I would definitely recommend Oberoi to my friends and will definitely visit them next time during my visit to Delhi or other cities where they are present."
        },
        {
            rating: 5.0,
            title: "Excellent Stay",
            author: "deepak b.",
            travelMonth: "Jul 2026",
            table: "Deluxe Table with Golf Course or Humayuns Tomb view",
            text: "I loved the hospitality of Oberoi Hotels, this was my second stay with The Oberoi and they are excellent in everything they do. Keep it up. In 5 stars hotels in India you guys are the best."
        },
        {
            rating: 5.0,
            title: "Excellent Stay",
            author: "viraaj g.",
            tripType: "solo",
            travelMonth: "Jun 2026",
            table: "Deluxe Table with Golf Course or Humayuns Tomb view",
            text: "Was a splendid experience. From check in to check out, the courtesy and hospitality was top notch. Will definitely recommend for any travellers looking for a place to stay in New Delhi. Full marks for the table, hygiene, amenities and everything else.",
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
            table: "Oberoi Suite with Living Table, Golf Course or Humayuns Tomb view",
            text: "Had an excellent stay here — an amazing place with a beautiful environment and such a relaxing experience. Thank you to the entire team at The Oberoi Hotels & Resorts for the warm hospitality and wonderful service. Truly memorable!"
        },
        {
            rating: 4.0,
            title: "Good Stay",
            author: "sadiya k.",
            travelMonth: "Jan 2026",
            table: "Luxury Table with Golf Course or Humayuns Tomb view",
            text: "Bahut achchha pravrutti rahi ya uska adhivi bahut achchhe Hain aur vivah bahut achchha hai and uska Jo khaana tha phod tha breakfast tha bahut achchha raha hai. Aur uska Jo bhee maalum tha bahut achchha tha. Safety bahut achchhi din sabhi camera lage the bahut achchhi safety hai. Thank you, thank you."
        },
        {
            rating: 1.0,
            title: "Terrible Stay",
            author: "abhishek b.",
            travelMonth: "Dec 2025",
            table: "Premier Table - access to residents lounge",
            text: "You are sending too many mails and messages after the stay. It is very disturbing and irritating. Just one message after the stay should be enough. This goes on for days. Please stop this over communication."
        },
        {
            rating: 5.0,
            title: "wonderful experience",
            author: "huma a.",
            tripType: "group",
            travelMonth: "Oct 2025",
            table: "Luxury Table with Golf Course or Humayuns Tomb view",
            text: "It was a wonderful experience, best location in delhi , breakfast has more options than other properties."
        },
        {
            rating: 5.0,
            title: "Enjoyed my trip",
            author: "shilpi.",
            tripType: "couple",
            travelMonth: "Jul 2025",
            table: "Deluxe Table with Golf Course or Humayuns Tomb view",
            text: "Great Experience enjoyed it.\nFood was Awesome like it.\nplanning to visit again Soon.\nHotel Ambiance."
        }
    ];

    const tags = [
        "Exceptional service (47)", "Staff Courtesy (38)", "Delicious food (31)", "Helpful staff (29)", "Family-friendly (27)",
        "Service Quality (27)", "Comfortable stay (23)", "Food (20)", "Great location (15)", "Positive ambiance (14)"
    ];

    const paginationNumbers = [1, 2, 3, 4, 5];

    return (
        <div className={styles.tabContentRating}>
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
                    <div className={styles.sectionTitleRatings}>
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
                            { label: "Table", value: 4.6 },
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

                        {["All Reviews", "Table Type", "Review with Images"].map((filter, idx) => (
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
                                <span className={styles.detailLabel}>Table:</span> <span>{review.table}</span>
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
                title="Similar Restaurants in Fine Dining"
                onItemClick={handleDineOutItemClick}
                maxItems={10}
            />
        </div>
    );
};

const OptionsRestaurantsContent = () => {

    const handleDineOutOptionsItemClick = (item: DineOutItemInterface) => {
        console.log("Clicked item:", item);
    };

    return (
        <div className={styles.tabContent}>
            <DineOutItemsHorizontal
                items={DineoutOptionsItemsList}
                title="Options Restaurants in Fine Dining"
                onItemClick={handleDineOutOptionsItemClick}
                maxItems={10}
            />
        </div>
    )
};



// Main Component
const DineOutRestDetailsTabs: React.FC<DineOutRestDetailsTabsProps> = ({
    onTabChange,
    activeTabId = 'overview',
    className = '',
    restaurantData,
}) => {
    const [activeTab, setActiveTab] = useState<string>(activeTabId);
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
    const [isOrderUltraModalOpen, setIsOrderUltraModalOpen] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const tabRefs = useRef<{ [key: string]: HTMLElement | null }>({});
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const customTabs: TabItem[] = [
        { id: 'overview', label: 'Book Table', icon: faInfoCircle, content: <OverviewContent restaurant={restaurantData} onOpenOrderModal={() => setIsOrderModalOpen(true)} /> },
        { id: 'about', label: 'About', icon: faBuilding, content: <AboutContent restaurant={restaurantData} /> },
        { id: 'order-online', label: 'Order Online', icon: faShoppingBag, content: <OrderOnlineContent /> },
        { id: 'ultra-order-online', label: 'Ultra Order Online', icon: faShoppingBag, content: <OrderOnlineUltraPremiumContent /> },
        { id: 'menu', label: 'Menu', icon: faUtensils, content: <MenuContent restaurant={restaurantData} onOpenOrderModal={() => setIsOrderModalOpen(true)} /> },
        { id: 'reviews', label: 'Reviews', icon: faStar, content: <ReviewsContent /> },
        { id: 'photos', label: 'Photos', icon: faCamera, content: <PhotosContent restaurant={restaurantData} /> },
        { id: 'location', label: 'Location', icon: faMapMarkerAlt, content: <LocationContent /> },
        { id: 'similar-restaurants', label: 'Similar Restaurants', icon: faStore, content: <SimilarRestaurantsContent /> },
        { id: 'options-restaurants', label: 'Options Restaurants', icon: faStore, content: <OptionsRestaurantsContent /> },
    ];

    // Scroll-based active tab detection
    useEffect(() => {
        const handleScroll = () => {
            if (isScrolling) return;

            const scrollPosition = window.scrollY + 150;
            let activeSection = customTabs[0]?.id || 'overview';

            for (const tab of customTabs) {
                // Skip order-online and ultra-order-online tabs for scroll detection
                if (tab.id === 'order-online' || tab.id === 'ultra-order-online') continue;

                const element = tabRefs.current[tab.id];
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const elementTop = rect.top + window.scrollY;

                    if (scrollPosition >= elementTop - 100) {
                        activeSection = tab.id;
                    }
                }
            }

            if (activeSection !== activeTab && activeSection !== 'order-online' && activeSection !== 'ultra-order-online') {
                setActiveTab(activeSection);
                if (onTabChange) {
                    onTabChange(activeSection);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        setTimeout(handleScroll, 100);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeTab, onTabChange, customTabs, isScrolling]);

    const handleTabClick = (tabId: string) => {
        setIsScrolling(true);

        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
        }

        // If "order-online" tab is clicked, open regular modal
        if (tabId === 'order-online') {
            setIsOrderModalOpen(true);
            setActiveTab(tabId);
            if (onTabChange) {
                onTabChange(tabId);
            }
            scrollTimeoutRef.current = setTimeout(() => {
                setIsScrolling(false);
            }, 500);
            return;
        }

        // If "ultra-order-online" tab is clicked, open Ultra Premium modal
        if (tabId === 'ultra-order-online') {
            setIsOrderUltraModalOpen(true);
            setActiveTab(tabId);
            if (onTabChange) {
                onTabChange(tabId);
            }
            scrollTimeoutRef.current = setTimeout(() => {
                setIsScrolling(false);
            }, 500);
            return;
        }

        // For other tabs, scroll to section
        setActiveTab(tabId);
        if (onTabChange) {
            onTabChange(tabId);
        }

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

    const handleAddToCart = (item: any) => {
        console.log('Added to cart:', item);
        // Your cart logic here
    };

    const handleViewMenu = () => {
        console.log('View full menu clicked');
        // Navigation or modal logic
    };

    return (
        <div className={`${styles.tabsContainer} ${className}`}>
            {/* Navigation Bar - Restaurant Style */}
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
                    // Skip rendering order-online and ultra-order-online sections
                    if (tab.id === 'order-online' || tab.id === 'ultra-order-online') {
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

            {/* Order Online Modal - Regular */}
            <OrderOnlineModalUltraPremium
                isOpen={isOrderModalOpen}
                onClose={() => setIsOrderModalOpen(false)}
            >
                <OrderOnlineContent />
            </OrderOnlineModalUltraPremium>

            {/* Order Online Modal - Ultra Premium */}
            <OrderOnlineModalUltraPremium
                isOpen={isOrderUltraModalOpen}
                onClose={() => setIsOrderUltraModalOpen(false)}
            >
                <OrderOnlineUltraPremiumContent
                    restaurantName="Burger King"
                />
                
            </OrderOnlineModalUltraPremium>
        </div>
    );
};


export default DineOutRestDetailsTabs;