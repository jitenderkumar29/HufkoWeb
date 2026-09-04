'use client';
import React, { useEffect, useState } from 'react';
import styles from './DineOutRestDetails.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheck,
    faChevronDown,
    faChevronLeft,
    faChevronRight,
    faLocationDot,
    faUser,
    faHome,
    faArrowRight,
    faUtensils,
    faClock,
    faStar,
    faWifi,
    faParking,
    faWheelchair,
    faCreditCard,
    faGift,
    faConciergeBell,
    faShuffle,
    faMugHot,
    faShareAlt,
    faList,
    faImage,
    faBook,
} from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import mapIcon2 from '../../../../public/icons/mapIcon2.png';
import yesBankImage from '../../../../public/icons/yesBank.png';
import DineOutRestDetailsTabs from './DineOutRestDetailsTabs/DineOutRestDetailsTabs';

// Types
export interface RestaurantRoom {
    id: string;
    name: string;
    guests: number;
    tables: number;
    amenities: string[];
    price: number;
    discountPrice?: number;
    taxes: number;
    mainImage: string;
    thumbnails: string[];
    totalPhotos: number;
}

export interface RestaurantDataInterface {
    id: number;
    name: string;
    cuisine: string[];
    rating: number;
    category: string;
    location: string;
    mainImg: string;
    thumbnails: string[];
    oldPrice: string;
    newPrice: string;
    taxes: string;
    ratingCategory: string;
    totalRatings: number;
    reviewScore: number;
    commonFeature: string;
    breakdown: { stars: number; count: number }[];
    tags: string[];
    moreTags: string[];
    cuisineTypes: string[];
    openingHours: string;
    priceRange: string;
    features: string[];
}

interface IDProps {
    id?: string;
}

const DineOutRestDetails: React.FC<IDProps> = ({ id }) => {
    const router = useRouter();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [openRatingId, setOpenRatingId] = useState<number | null>(null);
    const [restaurant, setRestaurant] = useState<RestaurantDataInterface | null>(null);
    const [showFeatures, setShowFeatures] = useState<boolean | null>(false);
    const [bankOffers, setBankOffers] = useState<boolean | null>(false);

    // Default values (replacing useDineOutSearch context)
    const location = "Delhi, India";
    const date = new Date();
    const time = "19:00";
    const guestCount = 2;
    const childCount = 0;

    // Mock restaurant data - replace with actual data source
    const restaurantData: RestaurantDataInterface[] = [
        {
            id: 1,
            name: 'Pride Plaza Hotel Aerocity New Delhi',
            cuisine: ['North Indian', 'Mughlai', 'Chinese', 'Kebab', 'Biryani', 'Seafood', 'Desserts', 'Beverages'],
            rating: 5,
            category: 'Hotel',
            location: 'Aerocity | 4 km drive to Indira Gandhi International Airport',
            mainImg: '/products/3a0c19201c21e22020282042432116443e2c29595122262262212f21.jpg',
            thumbnails: [
                '/products/a0c191ce00280443116443e2c2959516610f.jpg',
                '/products/a32ca888bad40b4f8f5212b357c0a0cd.jpg',
                '/products/27d28de2dac3f71e995e7a7e01381f41.jpg',
            ],
            oldPrice: '₹15,00',
            newPrice: '₹1,200',
            taxes: '+₹432 taxes & fees per night',
            ratingCategory: 'Excellent',
            totalRatings: 4145,
            reviewScore: 4.5,
            commonFeature: '👫 Couple Friendly',
            breakdown: [
                { stars: 5, count: 1200 },
                { stars: 4, count: 900 },
                { stars: 3, count: 600 },
                { stars: 2, count: 300 },
                { stars: 1, count: 145 },
            ],
            tags: ['Fine Dining', 'Indian Cuisine', 'Buffet Available'],
            moreTags: ['Parking Available', 'WiFi', 'Wheelchair Access'],
            cuisineTypes: ['Indian', 'Chinese', 'Continental'],
            openingHours: '12:00 PM - 11:00 PM',
            priceRange: '₹2,000 - ₹5,000 for two',
            features: [
                'Women Friendly',
                'Hassle-Free Booking',
                'Private Dining Rooms',
                'Live Music Available',
                'Valet Parking',
            ],
        },
    ];

    const RESTAURANT_FEATURES = [
        'Women Friendly',
        'Hassle-Free Booking',
        'Private Dining Rooms',
        'Live Music Available',
        'Valet Parking',
        'WiFi Available',
        'Wheelchair Access',
    ] as const;

    const customTabs = [
        { id: 'overview', label: 'Overview', icon: faList },
        { id: 'order-online', label: 'Order Online', icon: faUtensils, count: 5 },
        { id: 'reviews', label: 'Reviews', icon: faStar, count: 42 },
        { id: 'photos', label: 'Photos', icon: faImage, count: 128 },
        { id: 'menu', label: 'Menu', icon: faUtensils },
        { id: 'book-table', label: 'Book a Table', icon: faBook },
    ];

    const scrollToTableOptions = () => {
        const tableOptionsSection = document.getElementById('table-options');
        if (tableOptionsSection) {
            const offset = 150;
            const elementPosition = tableOptionsSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    const scrollToLocationOptions = () => {
        const locationSection = document.getElementById('location');
        if (locationSection) {
            const offset = 150;
            const elementPosition = locationSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    const handleSetRestaurant = (restaurantId: string) => {
        const id = Number(restaurantId);
        if (isNaN(id)) {
            console.error('Invalid restaurant ID');
            setRestaurant(null);
            return;
        }
        const foundRestaurant = restaurantData.find((r) => r.id === id);
        setRestaurant(foundRestaurant || null);
    };

    useEffect(() => {
        if (id) {
            handleSetRestaurant(id);
        }
    }, [id]);

    if (!restaurant) {
        return <p></p>;
    }

    const table: RestaurantRoom = {
        id: '1',
        name: 'Premium Table',
        guests: 1,
        tables: 1,
        amenities: [
            'Free Wi-Fi',
            'Parking facility (As Per Availability)',
            'Private Dining Table',
            'Valet Parking',
            'Wheelchair Access',
        ],
        price: 15868,
        discountPrice: 5885,
        taxes: 730,
        mainImage: 'https://www.ahstatic.com/photos/9470_roskc_01_p_1024x768.jpg',
        thumbnails: [
            'https://www.ahstatic.com/photos/a248_ho_00_p_2048x1536.jpg',
            'https://www.ahstatic.com/photos/a248_ro_01_p_2048x1536.jpg',
            'https://www.ahstatic.com/photos/a248_rs_00_p_2048x1536.jpg',
        ],
        totalPhotos: 33,
    };
    2025
    // Updated logic to cycle through main image and thumbnails
    const allImages = [restaurant.mainImg, ...restaurant.thumbnails];

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? allImages.length - 1 : prev - 1
        );
    };

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            weekday: 'short',
        });
    };

    const handleGalleryTabNav = () => {
        router.push('/galleryRestaurantDetails');
    };

    const handleShare = () => {
        // Share functionality
        if (navigator.share) {
            navigator.share({
                title: restaurant.name,
                text: `Check out ${restaurant.name}`,
                url: window.location.href,
            });
        } else {
            // Fallback - copy to clipboard
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    // Header Component
    // Header Component
    const RestaurantHeader = () => (
        <div className={styles.restaurantHeader}>
            <div className={styles.leftHeading}>
                <div className={styles.restaurantHeading}>
                    <h1 className={styles.restaurantName}>{restaurant.name}</h1>
                    <div className={styles.restaurantRating}>
                        <span className={styles.badge}>
                            {restaurant.rating}<span className={styles.star}> ★</span> {restaurant.category}
                        </span>
                    </div>
                </div>
                <div className={styles.restaurantCuisine}>
                    <div className={styles.cuisineTags}>
                        {restaurant.cuisine.map((item, index) => (
                            <span key={index} className={styles.cuisineTag}>
                                {item}
                                {index < restaurant.cuisine.length - 1 && <span className={styles.cuisineSeparator}>•</span>}
                            </span>
                        ))}
                    </div>
                </div>
                <div className={styles.restaurantAddress}>
                    <div className={styles.addressText}>
                        <div>
                            <FontAwesomeIcon icon={faLocationDot} className={styles.locationIcon} />
                            {restaurant.location}
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.rightHeading}>
                <div className={styles.openNowBadge}>
                    <span className={styles.openNowDot}></span>
                    <span>Open now</span>
                </div>

                <div className={styles.shareButton} onClick={handleShare}>
                    <FontAwesomeIcon icon={faShareAlt} className={styles.shareIcon} />
                    <span>Share</span>
                </div>

                <div className={styles.familyFriendly}>
                    <span>👩 Women Friendly</span>
                </div>

                <div
                    className={styles.coupleFriendly}
                    onMouseEnter={() => setShowFeatures(true)}
                    onMouseLeave={() => setShowFeatures(false)}
                >
                    <span>{restaurant.commonFeature}</span>
                    {showFeatures && (
                        <div
                            className={styles.coupleFriendlyDetails}
                            onMouseEnter={() => setShowFeatures(true)}
                            onMouseLeave={() => setShowFeatures(false)}
                        >
                            <ul className={styles.featuresList}>
                                {RESTAURANT_FEATURES.map((feature, index) => (
                                    <li key={index} className={styles.featureItem}>
                                        <FontAwesomeIcon icon={faCheck} className={styles.featureIcon} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                <div className={styles.viewsMap} onClick={scrollToLocationOptions}>
                    <div className={styles.mapBadge}>
                        <Image
                            src={mapIcon2}
                            alt="Map Icon"
                            className={styles.mapIcon2}
                            height={30}
                            width={30}
                        />
                    </div>
                    <div>View Map</div>
                </div>

                <div
                    className={styles.reviews}
                    onMouseEnter={() => setOpenRatingId(restaurant.id)}
                    onMouseLeave={() => setOpenRatingId(null)}
                >
                    <div>
                        <span className={styles.ratingTotal}>
                            <div>{restaurant.ratingCategory}</div>
                            <div>{restaurant.totalRatings} Ratings</div>
                        </span>
                    </div>
                    <div className={styles.ratingBadge}>{restaurant.reviewScore}</div>
                </div>
                {openRatingId === restaurant.id && (
                    <RatingCard
                        reviewScore={restaurant.reviewScore}
                        totalRatings={restaurant.totalRatings}
                        breakdown={restaurant.breakdown}
                    />
                )}
            </div>
        </div>
    );

    const RatingCard = ({
        reviewScore,
        totalRatings,
        breakdown,
    }: {
        reviewScore: number;
        totalRatings: number;
        breakdown: { stars: number; count: number }[];
    }) => {
        return (
            <div
                className={styles.cardRating}
                onMouseEnter={() => setOpenRatingId(openRatingId)}
                onMouseLeave={() => setOpenRatingId(null)}
            >
                <div className={styles.leftRating}>
                    <div className={styles.scoreRating}>{reviewScore}</div>
                    <div className={styles.totalRating}>{totalRatings} Ratings</div>
                </div>
                <div className={styles.rightRating}>
                    {breakdown.map((item) => (
                        <div key={item.stars} className={styles.ratingRowRating}>
                            <span className={styles.starLabelRating}>{item.stars} ★</span>
                            <div className={styles.barContainerRating}>
                                <div
                                    className={styles.barFillRating}
                                    style={{ width: `${(item.count / totalRatings) * 100}%` }}
                                />
                            </div>
                            <span className={styles.countRating}>{item.count}</span>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const OfferCard = () => {
        return (
            <div className={styles.offerCard}>
                <div className={styles.offerImage}>
                    <Image src={yesBankImage} alt="YES Bank Logo" className={styles.yesBankImage} />
                </div>
                <div className={styles.offerDetails}>
                    <div className={styles.offerTitle}>Use HUFKOYES Code</div>
                    <div className={styles.offerDescription}>
                        Get ₹ 247 off. Pay using YES Bank Credit Cards to avail the...
                    </div>
                </div>
                <div className={styles.moreOffers}>+ 1 more offer</div>
            </div>
        );
    };

    const ElitePackage = () => {
        return (
            <div className={styles.offerCard}>
                <div className={styles.offerDetails}>
                    <div className={styles.offerTitle}>Premium Package</div>
                    <div className={styles.offerDescriptionElite}>
                        <FontAwesomeIcon icon={faUtensils} className={styles.iconElite} />
                        20% off on Session of Fine Dining
                    </div>
                    <div className={styles.offerDescriptionElite}>
                        <FontAwesomeIcon icon={faConciergeBell} className={styles.iconElite} />
                        20% Discount on Buffet Services
                    </div>
                    <div className={styles.offerDescriptionElite}>
                        <FontAwesomeIcon icon={faShuffle} className={styles.iconElite} />
                        20% off on Two-way Local Transfer
                    </div>
                </div>
                <div className={styles.moreOffersElite}>
                    <FontAwesomeIcon icon={faArrowRight} className={styles.faArrowRightIcon} />
                </div>
            </div>
        );
    };

    const BackButton = () => {
        return (
            <div>
                <button onClick={() => router.back()} className={styles.backButton}>
                    <FontAwesomeIcon icon={faChevronLeft} className={styles.backIcon} />
                    Back to search
                </button>
                <span className={styles.placeAddress}>
                    <span>{location}</span>
                    <span className={styles.dateSearch}>
                        {' '}
                        {formatDate(date)}, {time},{' '}
                    </span>
                    <span>
                        {guestCount} Guest, {childCount} Child
                    </span>
                </span>
            </div>
        );
    };

    const RestaurantCard = () => (
        <div className={styles.cardBody}>
            <RestaurantHeader />
            <div className={styles.card}>
                {/* Left Section - Images */}
                <div className={styles.imageSection}>

                    <div className={styles.galleryWrapper}>
                        {/* Main Image */}
                        <div className={styles.mainImageContainer}>
                            <Image
                                src={allImages[currentImageIndex]}
                                alt={restaurant.name}
                                className={styles.mainImage}
                                height={500}
                                width={600}
                                style={{ objectFit: 'cover' }}
                            />
                            <button
                                className={`${styles.navButton} ${styles.prevButton}`}
                                onClick={prevImage}
                            >
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </button>
                            <button
                                className={`${styles.navButton} ${styles.nextButton}`}
                                onClick={nextImage}
                            >
                                <FontAwesomeIcon icon={faChevronRight} />
                            </button>
                        </div>

                        {/* Vertical Thumbnails Column */}
                        <div className={styles.thumbnailContainer}>
                            {restaurant.thumbnails.slice(0, 3).map((thumb, index) => (
                                <div key={index} className={styles.thumbnailItem}>
                                    <Image
                                        src={thumb}
                                        alt={`Thumbnail ${index + 1}`}
                                        className={styles.thumbnail}
                                        onClick={() => setCurrentImageIndex(index + 1)}
                                        height={160}
                                        width={200}
                                        style={{ objectFit: 'cover' }}
                                    />
                                    {index === 2 && (
                                        <button className={styles.viewAllPhotos} onClick={handleGalleryTabNav}>
                                            ALL PHOTOS
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Right Section - Details */}
                <div className={styles.detailsSection}>
                    <div className={styles.detailsSectionText}>
                        <div className={styles.roomInfo}>
                            <h3 className={styles.roomName}>{table.name}</h3>
                            <div className={styles.guestInfo}>
                                <FontAwesomeIcon icon={faHome} className={styles.guestIcon} />
                                <span>1 x Table</span>|
                                <FontAwesomeIcon icon={faUser} className={styles.guestIcon} />
                                <span>1 x Guest</span>
                            </div>
                            <div className={styles.amenitiesService}>
                                <ul className={styles.breakFast}>
                                    <FontAwesomeIcon icon={faMugHot} className={styles.beakFastIcon} />
                                    Free Snacks Included
                                </ul>
                                <ul className={styles.cancelRoom}>
                                    <FontAwesomeIcon
                                        icon={faArrowRight}
                                        className={styles.cancelRoomIcon}
                                    />
                                    Free Cancellation till 05-sep-2026 22:59
                                </ul>
                            </div>


                        </div>

                        <div className={styles.pricing}>
                            <div className={styles.originalPrice}>{restaurant.oldPrice}</div>
                            <div className={styles.discountPrice}>{restaurant.newPrice}</div>
                            <div className={styles.taxes}>
                                {restaurant.taxes.split(" per night")[0]}
                            </div>

                        </div>
                    </div>

                    <div className={styles.bookTableCard} onClick={() => setBankOffers(true)}>
                        <div className={styles.bookTableCoupon}>
                            <button className={styles.selectRoomButton} onClick={scrollToTableOptions}>
                                Book a Table{' '}
                                <FontAwesomeIcon icon={faChevronDown} />
                            </button>
                        </div>

                        <div className={styles.bookTableCoupon}>
                            <button className={styles.selectRoomButton} onClick={scrollToTableOptions}>
                                Apply Coupon{' '}
                                <FontAwesomeIcon icon={faChevronDown} />
                            </button>
                        </div>
                    </div>

                    <div className={styles.bankOfferCard} onClick={() => setBankOffers(true)}>
                        <OfferCard />
                    </div>



                    <div className={styles.bankOfferCard}>
                        <ElitePackage />
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <div className={styles.mainContentBody}>
                <BackButton />
                <RestaurantCard />
                <DineOutRestDetailsTabs
                    activeTabId="overview"
                    onTabChange={(tabId) => console.log('Tab changed:', tabId)}
                    restaurantData={{
                        cuisine: restaurant.cuisine,
                        name: restaurant.name,
                        location: restaurant.location,
                        rating: restaurant.rating,
                        category: restaurant.category,
                    }}
                />
            </div>
            <div className={styles.restaurantTabNavigationBar}>
                {/* <RestaurantTabNavigationBar /> */}
            </div>
        </>
    );
};

export default DineOutRestDetails;