'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import {
    ArrowLeft,
    Check,
    Users,
    Coffee,
    Store,
    ShoppingBag,
    Package,
} from 'lucide-react';

import styles from './FranchiseDetailsPage.module.scss';

import HeaderFranchise, {
    NavItemHeaderFranchise,
} from '@/components/Header/HeaderFranchise/HeaderFranchise';
import CardFranchise from '../CardFranchise/CardFranchise';


export const homeHufkoFranchiseNavItems: NavItemHeaderFranchise[] = [
    {
        label: 'Locations',
        href: '#locations',
        hasDropdown: true,
        dropdownItems: [
            { label: 'Mumbai', href: '#mumbai' },
            { label: 'Delhi', href: '#delhi' },
        ],
    },
    {
        label: 'Spotlight Stories',
        href: '#spotlight-stories',
    },
    {
        label: 'YM Exclusive',
        href: '#ym-exclusive',
    },
    {
        label: 'Our Gallery',
        href: '#our-gallery',
    },
    {
        label: 'Our Services',
        href: '#our-services',
    },
    {
        label: 'Brands',
        href: '#brands',
    },
];


function LoadingSpinner() {
    return (
        <></>
        // <div className={styles.loadingContainer}>
        //     <div className={styles.loadingContent}>
        //         <div className={styles.spinner} />
        //         <p className={styles.loadingText}>
        //             Loading franchise details...
        //         </p>
        //     </div>
        // </div>
    );
}


/*
|--------------------------------------------------------------------------
| Locations Section
|--------------------------------------------------------------------------
*/

function LocationsSection({
    onSelectLocation,
    isActive = false,
}: {
    onSelectLocation: (location: string) => void;
    isActive?: boolean;
}) {
    return (
        <section
            id="locations"
            className={`${styles.section} ${isActive ? styles.active : ''}`}
        >
            <CardFranchise
                videoSrc="/videos/FaceAnalysis.mp4"
                videoPoster="https://cdn.yesmadam.com/images/live/website/images/react/image.png"
                title="Face Skin Analysis"
                iconName="sparkles"
                features={[
                    "Get a personalized assessment of your skin's health with advanced technology.",
                    "Identify hidden concerns like pigmentation, pores, and hydration levels with precision.",
                    "Receive tailored skincare recommendations for optimal results."
                ]}
            />

            <CardFranchise
                videoSrc="/videos/HairScalpAnalysis.mp4"
                videoPoster=""
                title="Hair Scalp Analysis"
                imagePosition="right"
                iconName="shield"
                variant="primary"
                features={[
                    "Understand your scalp's needs with detailed insights into dryness, oiliness, and hair health.",
                    "Detect early signs of hair fall or dandruff for proactive care.",
                    "Expert solutions customized for your unique scalp type."
                ]}
            />

            <CardFranchise
                videoSrc="/videos/KoreanManicure.mp4"
                videoPoster="https://cdn.yesmadam.com/images/live/website/images/react/korean-manicure-poster.jpg"
                title="Korean Manicure"
                iconName="sparkles"
                imagePosition="left"
                features={[
                    "Red and blue LED light therapy and steam help detoxify and rejuvenate your hands for a refreshed, glowing look.",
                    "A nourishing hand mask for deep hydration and exfoliation, ensuring your hands stay smooth and youthful.",
                    "Experience the perfect blend of skincare and nail care with the latest Korean manicure techniques."
                ]}
            />
            {/* <div className={styles.sectionContent}>
                <span className={styles.sectionEyebrow}>
                    Locations
                </span>

                <h2 className={styles.sectionTitle}>
                    Choose Your Location
                </h2>

                <p className={styles.sectionDescription}>
                    Explore our franchise opportunities across different
                    locations.
                </p>

                <div className={styles.locationGrid}>
                    <button
                        type="button"
                        onClick={() => onSelectLocation('mumbai')}
                        className={styles.locationCard}
                    >
                        <Store size={32} />
                        <h3>Mumbai</h3>
                        <p>
                            Explore franchise opportunities in Mumbai.
                        </p>
                    </button>

                    <button
                        type="button"
                        onClick={() => onSelectLocation('delhi')}
                        className={styles.locationCard}
                    >
                        <Store size={32} />
                        <h3>Delhi</h3>
                        <p>
                            Explore franchise opportunities in Delhi.
                        </p>
                    </button>
                </div>
            </div> */}
        </section>
    );
}


/*
|--------------------------------------------------------------------------
| Mumbai Section
|--------------------------------------------------------------------------
*/

function MumbaiSection({ isActive = false }: { isActive?: boolean }) {
    return (
        <section
            id="mumbai"
            className={`${styles.section} ${isActive ? styles.active : ''}`}
        >
            <div className={styles.sectionContent}>
                <span className={styles.sectionEyebrow}>
                    Location
                </span>

                <h2 className={styles.sectionTitle}>
                    Mumbai
                </h2>

                <p className={styles.sectionDescription}>
                    Discover Hufko franchise opportunities available
                    in Mumbai.
                </p>

                <div className={styles.infoCard}>
                    <Store size={40} />
                    <h3>Mumbai Franchise Opportunities</h3>
                    <p>
                        Find suitable locations and franchise models
                        available in Mumbai.
                    </p>
                </div>
            </div>
        </section>
    );
}


/*
|--------------------------------------------------------------------------
| Delhi Section
|--------------------------------------------------------------------------
*/

function DelhiSection({ isActive = false }: { isActive?: boolean }) {
    return (
        <section
            id="delhi"
            className={`${styles.section} ${isActive ? styles.active : ''}`}
        >
            <div className={styles.sectionContent}>
                <span className={styles.sectionEyebrow}>
                    Location
                </span>

                <h2 className={styles.sectionTitle}>
                    Delhi
                </h2>

                <p className={styles.sectionDescription}>
                    Discover Hufko franchise opportunities available
                    in Delhi.
                </p>

                <div className={styles.infoCard}>
                    <Store size={40} />
                    <h3>Delhi Franchise Opportunities</h3>
                    <p>
                        Find suitable locations and franchise models
                        available in Delhi.
                    </p>
                </div>
            </div>
        </section>
    );
}


/*
|--------------------------------------------------------------------------
| Spotlight Stories
|--------------------------------------------------------------------------
*/

function SpotlightStoriesSection({ isActive = false }: { isActive?: boolean }) {
    return (
        <section
            id="spotlight-stories"
            className={`${styles.section} ${isActive ? styles.active : ''}`}
        >
            <div className={styles.sectionContent}>
                <span className={styles.sectionEyebrow}>
                    Spotlight
                </span>

                <h2 className={styles.sectionTitle}>
                    Spotlight Stories
                </h2>

                <p className={styles.sectionDescription}>
                    Explore inspiring stories and experiences from
                    our franchise partners.
                </p>

                <div className={styles.infoCard}>
                    <Users size={40} />
                    <h3>Our Franchise Stories</h3>
                    <p>
                        Learn how our franchise partners are building
                        successful businesses.
                    </p>
                </div>
            </div>
        </section>
    );
}


/*
|--------------------------------------------------------------------------
| YM Exclusive
|--------------------------------------------------------------------------
*/

function YMExclusiveSection({ isActive = false }: { isActive?: boolean }) {
    return (
        <section
            id="ym-exclusive"
            className={`${styles.section} ${isActive ? styles.active : ''}`}
        >
            <div className={styles.sectionContent}>
                <span className={styles.sectionEyebrow}>
                    Exclusive
                </span>

                <h2 className={styles.sectionTitle}>
                    YM Exclusive
                </h2>

                <p className={styles.sectionDescription}>
                    Discover exclusive opportunities, offers and
                    franchise benefits.
                </p>

                <div className={styles.infoCard}>
                    <Check size={40} />
                    <h3>Exclusive Franchise Benefits</h3>
                    <p>
                        Get access to exclusive franchise opportunities
                        and benefits.
                    </p>
                </div>
            </div>
        </section>
    );
}


/*
|--------------------------------------------------------------------------
| Our Gallery
|--------------------------------------------------------------------------
*/

function OurGallerySection({ isActive = false }: { isActive?: boolean }) {
    return (
        <section
            id="our-gallery"
            className={`${styles.section} ${isActive ? styles.active : ''}`}
        >
            <div className={styles.sectionContent}>
                <span className={styles.sectionEyebrow}>
                    Gallery
                </span>

                <h2 className={styles.sectionTitle}>
                    Our Gallery
                </h2>

                <p className={styles.sectionDescription}>
                    Take a look at our franchise stores, products
                    and experiences.
                </p>

                <div className={styles.galleryGrid}>
                    <div className={styles.galleryItem}>
                        Gallery Image 1
                    </div>
                    <div className={styles.galleryItem}>
                        Gallery Image 2
                    </div>
                    <div className={styles.galleryItem}>
                        Gallery Image 3
                    </div>
                </div>
            </div>
        </section>
    );
}


/*
|--------------------------------------------------------------------------
| Our Services
|--------------------------------------------------------------------------
*/

function OurServicesSection({ isActive = false }: { isActive?: boolean }) {
    return (
        <section
            id="our-services"
            className={`${styles.section} ${isActive ? styles.active : ''}`}
        >
            <div className={styles.sectionContent}>
                <span className={styles.sectionEyebrow}>
                    Services
                </span>

                <h2 className={styles.sectionTitle}>
                    Our Services
                </h2>

                <p className={styles.sectionDescription}>
                    Explore the services and support provided to our
                    franchise partners.
                </p>

                <div className={styles.serviceGrid}>
                    <div className={styles.infoCard}>
                        <Coffee size={32} />
                        <h3>Food & Beverage</h3>
                        <p>
                            Food and beverage franchise solutions.
                        </p>
                    </div>

                    <div className={styles.infoCard}>
                        <ShoppingBag size={32} />
                        <h3>Retail</h3>
                        <p>
                            Retail franchise opportunities.
                        </p>
                    </div>

                    <div className={styles.infoCard}>
                        <Package size={32} />
                        <h3>Support</h3>
                        <p>
                            Complete franchise support.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}


/*
|--------------------------------------------------------------------------
| Brands
|--------------------------------------------------------------------------
*/

function BrandsSection({ isActive = false }: { isActive?: boolean }) {
    return (
        <section
            id="brands"
            className={`${styles.section} ${isActive ? styles.active : ''}`}
        >
            <div className={styles.sectionContent}>
                <span className={styles.sectionEyebrow}>
                    Our Brands
                </span>

                <h2 className={styles.sectionTitle}>
                    Brands
                </h2>

                <p className={styles.sectionDescription}>
                    Explore the brands available through our franchise
                    network.
                </p>

                <div className={styles.brandGrid}>
                    <div className={styles.infoCard}>
                        <h3>Brand 1</h3>
                    </div>
                    <div className={styles.infoCard}>
                        <h3>Brand 2</h3>
                    </div>
                    <div className={styles.infoCard}>
                        <h3>Brand 3</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}


// Valid franchise categories
const VALID_CATEGORIES = ['home_food_beverage', 'food_beverage'];

/*
|--------------------------------------------------------------------------
| Main Content
|--------------------------------------------------------------------------
*/

function FranchiseDetailsContent() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const [franchiseCategory, setFranchiseCategory] =
        useState<string>('');

    const [loading, setLoading] = useState(true);
    const [isValidCategory, setIsValidCategory] = useState(true);

    /*
     * Active navigation section
     */
    const [activeSection, setActiveSection] =
        useState<string>('locations');


    useEffect(() => {
        const category = searchParams.get('category');

        console.log('Category from URL:', category);

        if (category) {
            const decoded = decodeURIComponent(category);
            setFranchiseCategory(decoded);

            // Check if valid
            if (VALID_CATEGORIES.includes(decoded)) {
                setIsValidCategory(true);
            } else {
                setIsValidCategory(false);
            }
        } else {
            setIsValidCategory(false);
        }

        setLoading(false);
    }, [searchParams]);


    if (loading) {
        return <></>;
        // <LoadingSpinner />;
    }


    const handleHeroSearch = (query: string) => {
        console.log('Searching for:', query);
    };


    const handleSectionChange = (section: string) => {
        console.log('Changing section:', section);

        setActiveSection(section);

        window.history.replaceState(
            null,
            '',
            `#${section}`
        );

        setTimeout(() => {
            const element = document.getElementById(section);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        }, 50);
    };


    // If invalid category, show error message
    if (!isValidCategory) {
        return (
            <div className={styles.errorContainer}>
                <div className={styles.errorContent}>
                    <h1 className={styles.errorTitle}>Invalid Category</h1>
                    <p className={styles.errorDescription}>
                        The franchise category "{franchiseCategory || 'not provided'}" is not valid.
                        <br />
                        Please use: home_food_beverage or food_beverage
                    </p>
                    <button
                        type="button"
                        onClick={() => router.push('/')}
                        className={styles.backButton}
                    >
                        <ArrowLeft size={18} />
                        Go Back Home
                    </button>
                </div>
            </div>
        );
    }


    // Home Food & Beverage - FULL PAGE
    if (franchiseCategory === 'home_food_beverage') {
        return (
            <div className={styles.detailsPage}>
                <HeaderFranchise
                    navItems={homeHufkoFranchiseNavItems}
                    cartItemCount={3}
                    videoSrc="/videos/CHANGE_TO_MULTICUSINE_RESTURAN.mp4"
                    videoPoster="/images/hero-poster.jpg"
                    heroTitle=""
                    heroSubtitle=""
                    showHeroSearch={true}
                    searchPlaceholder="Click here to search for ultra premium dine."
                    onHeroSearch={handleHeroSearch}
                    onSearchClick={() => console.log('Search clicked')}
                    onUserClick={() => console.log('User clicked')}
                    onWishlistClick={() => console.log('Wishlist clicked')}
                    onCartClick={() => console.log('Cart clicked')}
                />

                <main>
                    <LocationsSection
                        onSelectLocation={handleSectionChange}
                        isActive={activeSection === 'locations'}
                    />

                    {/* <MumbaiSection
                        isActive={activeSection === 'mumbai'}
                    />

                    <DelhiSection
                        isActive={activeSection === 'delhi'}
                    /> */}

                    {/* <SpotlightStoriesSection
                        isActive={activeSection === 'spotlight-stories'}
                    />

                    <YMExclusiveSection
                        isActive={activeSection === 'ym-exclusive'}
                    />

                    <OurGallerySection
                        isActive={activeSection === 'our-gallery'}
                    />

                    <OurServicesSection
                        isActive={activeSection === 'our-services'}
                    />

                    <BrandsSection
                        isActive={activeSection === 'brands'}
                    /> */}
                </main>
            </div>
        );
    }


    // Food & Beverage
    if (franchiseCategory === 'food_beverage') {
        return (
            <div className={styles.detailsPage}>
                <HeaderFranchise
                    navItems={homeHufkoFranchiseNavItems}
                    cartItemCount={3}
                    videoSrc="/videos/CHANGE_TO_MULTICUSINE_RESTURAN.mp4"
                    videoPoster="/images/hero-poster.jpg"
                    heroTitle=""
                    heroSubtitle=""
                    showHeroSearch={true}
                    searchPlaceholder="Click here to search for Destinations or Hotels."
                    onHeroSearch={handleHeroSearch}
                    onSearchClick={() => console.log('Search clicked')}
                    onUserClick={() => console.log('User clicked')}
                    onWishlistClick={() => console.log('Wishlist clicked')}
                    onCartClick={() => console.log('Cart clicked')}
                />

                <main>
                    <div className={styles.foodBeverageContent}>
                        <h2>Food & Beverage Franchise</h2>
                        <p>Explore our food and beverage franchise opportunities.</p>
                    </div>
                </main>
            </div>
        );
    }


    return null;
}


/*
|--------------------------------------------------------------------------
| Main component
|--------------------------------------------------------------------------
*/

const FranchiseDetailsPage: React.FC = () => {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <FranchiseDetailsContent />
        </Suspense>
    );
};


export default FranchiseDetailsPage;