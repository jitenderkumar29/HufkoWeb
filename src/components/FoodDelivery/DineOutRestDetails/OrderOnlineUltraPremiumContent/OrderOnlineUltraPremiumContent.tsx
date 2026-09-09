"use client";

import React, { useMemo, useRef, useState } from "react";
import {
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    ChevronUp,
    Clock3,
    Flame,
    Heart,
    Leaf,
    Minus,
    Plus,
    Search,
    ShoppingBag,
    Star,
    Tag,
    Utensils,
    X,
} from "lucide-react";

import styles from "./OrderOnlineUltraPremiumContent.module.scss";

interface Offer {
    id: number;
    title: string;
    subtitle: string;
    image: string;
}

interface FoodItem {
    id: number;
    name: string;
    price: number;
    rating: number;
    description: string;
    category: string;
    type: "veg" | "nonveg";
    image: string;
    recommended?: boolean;
}

interface OrderOnlineUltraPremiumContentProps {
    restaurantName?: string;
    restaurantLogo?: string;
    bannerImage?: string;
}

const OrderOnlineUltraPremiumContent: React.FC<
    OrderOnlineUltraPremiumContentProps
> = ({
    restaurantName = "Burger King",
    restaurantLogo,
    bannerImage,
}) => {
        const [searchValue, setSearchValue] = useState("");
        const [cart, setCart] = useState<Record<number, number>>({});
        const [isRecommendedOpen, setIsRecommendedOpen] = useState(true);
        const [activeCategory, setActiveCategory] = useState("All");
        const offerSliderRef = useRef<HTMLDivElement>(null);

        const scrollOffers = (direction: "left" | "right") => {
            if (!offerSliderRef.current) return;

            const scrollAmount = 320;

            offerSliderRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        };

        const offers: Offer[] = [
            {
                id: 1,
                title: "70% Off Upto ₹140",
                subtitle: "USE DELULU4FOOD",
                image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic",
            },
            {
                id: 2,
                title: "Items At ₹59",
                subtitle: "ON SELECT ITEMS",
                image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/deal-of-day",
            },
            {
                id: 3,
                title: "Extra ₹20 Off",
                subtitle: "NO CODE REQUIRED | ABOVE ₹99",
                image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/rng/md/ads/production/d07196b25b85d1fd9951e10c255ab737",
            },
            {
                id: 4,
                title: "Flat ₹200 Off",
                subtitle: "USE CELEBRATIONS",
                image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic",
            },
            {
                id: 5,
                title: "Flat ₹550 Off",
                subtitle: "USE FLAT550",
                image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic",
            },
            {
                id: 6,
                title: "Flat 20% Off",
                subtitle: "USE XTRAPARTY",
                image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic",
            },
            {
                id: 7,
                title: "Flat ₹50 Off",
                subtitle: "USE BHIMUPI50",
                image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/MARKETING_BANNERS/IMAGES/OFFERS/2026/8/31/2fb0eb2f-5c80-4efb-812e-94cf92ba46e5_BHIMMenuVisibilityLogo2.png",
            },
            {
                id: 8,
                title: "Flat ₹150 Off",
                subtitle: "USE SBIMASTERCARDDC150",
                image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/MARKETING_BANNERS/IMAGES/OFFERS/2026/8/31/30387c23-d189-4d33-bf81-63afb25146d3_MastercardSBIMenuLogo.png",
            },
            {
                id: 9,
                title: "10% Off Upto ₹75",
                subtitle: "USE VISAPLATINUMDC",
                image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/MARKETING_BANNERS/IMAGES/OFFERS/2026/8/30/268c6738-cdf6-4a40-b5b1-f909d5770f07_Visa.png",
            },
            {
                id: 10,
                title: "10% Off Upto ₹75",
                subtitle: "USE VISAPLATINUMCC",
                image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/MARKETING_BANNERS/IMAGES/OFFERS/2026/8/30/a4d1d71b-d59b-4b3c-a23c-85d768f35cb7_VisaNew400x4001.png",
            },
        ];

        const foodItems: FoodItem[] = [
            // --- Burgers (Veg) ---
            {
                id: 1,
                name: "Original Whopper Veg",
                price: 199,
                rating: 4.3,
                description: "Our signature Whopper with crunchy vegetables, lettuce, onions, tomatoes and creamy sauce.",
                category: "Burgers",
                type: "veg",
                recommended: true,
                image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80",
            },
            {
                id: 2,
                name: "Crispy Veg Burger",
                price: 149,
                rating: 4.2,
                description: "Crispy vegetable patty with fresh lettuce, tomato and delicious creamy mayo.",
                category: "Burgers",
                type: "veg",
                recommended: true,
                image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=500&q=80",
            },
            {
                id: 3,
                name: "Veg Whopper Deluxe",
                price: 249,
                rating: 4.5,
                description: "A larger-than-life veggie burger loaded with double cheese, fresh veggies, and our special deluxe sauce.",
                category: "Burgers",
                type: "veg",
                recommended: false,
                image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=500&q=80",
            },
            {
                id: 4,
                name: "Spicy Veg Crunch Burger",
                price: 169,
                rating: 4.1,
                description: "A fiery spicy veg patty with jalapenos, onion rings, and a tangy spicy sauce.",
                category: "Burgers",
                type: "veg",
                recommended: false,
                image: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?auto=format&fit=crop&w=500&q=80",
            },

            // --- Burgers (Non-Veg) ---
            {
                id: 5,
                name: "Original Whopper Chicken",
                price: 249,
                rating: 4.4,
                description: "A delicious flame-grilled chicken burger with fresh vegetables and signature sauce.",
                category: "Burgers",
                type: "nonveg",
                recommended: true,
                image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=500&q=80",
            },
            {
                id: 6,
                name: "Crispy Chicken Burger",
                price: 179,
                rating: 4.3,
                description: "Juicy crispy chicken with crunchy lettuce and a rich signature sauce.",
                category: "Burgers",
                type: "nonveg",
                recommended: false,
                image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=500&q=80",
            },
            {
                id: 7,
                name: "Crispy Double Patty Burger",
                price: 229,
                rating: 4.5,
                description: "Double crispy patties layered with cheese, lettuce and signature dressing.",
                category: "Burgers",
                type: "nonveg",
                recommended: true,
                image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=500&q=80",
            },
            {
                id: 8,
                name: "Crispy Chicken Double Patty Burger",
                price: 259,
                rating: 4.6,
                description: "Double chicken patties with cheese, vegetables and delicious burger sauce.",
                category: "Burgers",
                type: "nonveg",
                recommended: false,
                image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=500&q=80",
            },

            // --- Chicken (Non-Veg) ---
            {
                id: 9,
                name: "5 pc Chicken Nuggets",
                price: 129,
                rating: 4.2,
                description: "Tender, juicy, crispy golden chicken nuggets served with your choice of dipping sauce.",
                category: "Chicken",
                type: "nonveg",
                recommended: true,
                image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=500&q=80",
            },
            {
                id: 10,
                name: "Chicken Popcorn (Regular)",
                price: 159,
                rating: 4.3,
                description: "Bite-sized chicken pieces, perfectly seasoned and fried until golden and crunchy.",
                category: "Chicken",
                type: "nonveg",
                recommended: false,
                image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=500&q=80",
            },
            {
                id: 11,
                name: "Chicken Wrap",
                price: 189,
                rating: 4.4,
                description: "Flame-grilled chicken with crunchy veggies, garlic sauce, and cheese wrapped in a soft tortilla.",
                category: "Chicken",
                type: "nonveg",
                recommended: false,
                image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=500&q=80",
            },

            // --- Sides (Veg) ---
            {
                id: 12,
                name: "King Fries",
                price: 99,
                rating: 4.1,
                description: "Golden crispy fries seasoned to perfection and served fresh.",
                category: "Sides",
                type: "veg",
                recommended: true,
                image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=500&q=80",
            },
            {
                id: 13,
                name: "Peri Peri Fries",
                price: 129,
                rating: 4.3,
                description: "Crispy fries tossed in fiery Peri Peri spice mix for a zesty kick.",
                category: "Sides",
                type: "veg",
                recommended: false,
                image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=500&q=80",
            },
            {
                id: 14,
                name: "Cheesy Loaded Fries",
                price: 169,
                rating: 4.5,
                description: "Crispy fries loaded with melted cheese sauce, jalapenos, and a drizzle of creamy mayo.",
                category: "Sides",
                type: "veg",
                recommended: false,
                image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=500&q=80",
            },

            // --- Beverages (Veg) ---
            {
                id: 15,
                name: "Chocolate Thick Shake",
                price: 149,
                rating: 4.6,
                description: "Rich and creamy chocolate shake topped with chocolate drizzle and whipped cream.",
                category: "Beverages",
                type: "veg",
                recommended: true,
                image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80",
            },
            {
                id: 16,
                name: "Vanilla Thick Shake",
                price: 139,
                rating: 4.4,
                description: "Smooth, creamy vanilla shake made with premium vanilla ice cream and fresh milk.",
                category: "Beverages",
                type: "veg",
                recommended: false,
                image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=500&q=80",
            },
            {
                id: 17,
                name: "Strawberry Shake",
                price: 159,
                rating: 4.3,
                description: "Classic strawberry shake blending fresh strawberries and vanilla ice cream.",
                category: "Beverages",
                type: "veg",
                recommended: false,
                image: "https://images.unsplash.com/photo-1553787499-6f9133860278?auto=format&fit=crop&w=500&q=80",
            },
            {
                id: 18,
                name: "Coca-Cola (Fountain)",
                price: 49,
                rating: 4.0,
                description: "Chilled, refreshing Coca-Cola served in a cup with ice. The perfect companion to your burger.",
                category: "Beverages",
                type: "veg",
                recommended: true,
                image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=500&q=80",
            },

            // --- Desserts (Veg) ---
            {
                id: 19,
                name: "Molten Chocolate Cake",
                price: 129,
                rating: 4.7,
                description: "Warm chocolate cake with a gooey, molten chocolate center. Served with vanilla ice cream.",
                category: "Desserts",
                type: "veg",
                recommended: true,
                image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80",
            },
            {
                id: 20,
                name: "Sundae (Chocolate)",
                price: 109,
                rating: 4.5,
                description: "Layered vanilla and chocolate soft serve topped with chocolate sauce and crunchy nuts.",
                category: "Desserts",
                type: "veg",
                recommended: false,
                image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=500&q=80",
            },
        ];

        const categories = ["All", "Bestseller", "Burgers", "Chicken", "Sides"];

        const filteredItems = useMemo(() => {
            return foodItems.filter((item) => {
                const matchesSearch =
                    item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                    item.description
                        .toLowerCase()
                        .includes(searchValue.toLowerCase());

                const matchesCategory =
                    activeCategory === "All" ||
                    item.category === activeCategory;

                return matchesSearch && matchesCategory;
            });
        }, [searchValue, activeCategory]);

        const addToCart = (id: number) => {
            setCart((previous) => ({
                ...previous,
                [id]: (previous[id] || 0) + 1,
            }));
        };

        const removeFromCart = (id: number) => {
            setCart((previous) => {
                const currentQuantity = previous[id] || 0;

                if (currentQuantity <= 1) {
                    const updatedCart = { ...previous };
                    delete updatedCart[id];
                    return updatedCart;
                }

                return {
                    ...previous,
                    [id]: currentQuantity - 1,
                };
            });
        };

        const cartCount = Object.values(cart).reduce(
            (total, quantity) => total + quantity,
            0
        );

        return (
            <section className={styles.orderOnlineUltraPremiumContent}>
                <div className={styles.container}>
                    <div className={styles.bannerWrapper}>
                        <img
                            src={
                                bannerImage ||
                                "/products/photo-1568901346375-23c9450c58cd.png"
                            }
                            alt={`${restaurantName} banner`}
                            className={styles.bannerImage}
                        />

                        <div className={styles.bannerOverlay} />

                        {/* <div className={styles.bannerContent}>
                            <div className={styles.logoCircle}>
                                {restaurantLogo ? (
                                    <img
                                        src={restaurantLogo}
                                        alt={restaurantName}
                                    />
                                ) : (
                                    <Utensils size={25} />
                                )}
                            </div>

                            <div>
                                <span>Order Online</span>
                                <strong>Delicious food delivered fresh</strong>
                            </div>
                        </div> */}
                    </div>
                    {/* Restaurant Header */}
                    <div className={styles.restaurantHeader}>
                        <div className={styles.restaurantTitleRow}>
                            <div>
                                <h1>{restaurantName}</h1>



                                <p className={styles.cuisineText}>
                                    Burgers, Fast Food, American
                                </p>


                            </div>

                            <div>
                                <div className={styles.restaurantMeta}>
                                    <span>
                                        <Star size={14} fill="currentColor" />
                                        4.2 (5K+ ratings)
                                    </span>

                                    <span>•</span>

                                    <span>₹300 for two</span>
                                </div>
                                <div className={styles.deliveryInfo}>
                                    <span><span className={styles.outlet}>Outlet:</span> Nehru Place</span>
                                    {/* <Clock3 size={15} />
                                    <span>25-30 mins</span> */}
                                </div>
                                {/* <button
                                type="button"
                                className={styles.favoriteButton}
                                aria-label="Add to favorites"
                            >
                                <Heart size={20} />
                            </button> */}
                            </div>
                        </div>


                    </div>

                    {/* Restaurant Details */}
                    <div className={styles.restaurantInfoCard}>
                        <div className={styles.statusRow}>
                            <div className={styles.openStatus}>
                                <span className={styles.statusDot} />
                                Open
                            </div>

                            <span className={styles.deliveryTime}>
                                25-30 min delivery
                            </span>
                        </div>

                        <div className={styles.infoDivider} />

                        <div className={styles.address}>
                            <span>Restaurant details</span>
                            <p>
                                Delicious burgers, crispy fries and freshly prepared
                                fast food delivered to your doorstep.
                            </p>
                        </div>
                    </div>

                    {/* Deals */}
                    <div className={styles.sectionHeader}>
                        <h2>Deals for you</h2>

                        <div className={styles.sliderButtons}>
                            <button
                                type="button"
                                aria-label="Previous offer"
                                onClick={() => scrollOffers("left")}
                            >
                                <ChevronLeft size={18} />
                            </button>

                            <button
                                type="button"
                                aria-label="Next offer"
                                onClick={() => scrollOffers("right")}
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>

                    <div
                        className={styles.offerGrid}
                        ref={offerSliderRef}
                    >
                        {offers.map((offer) => (
                            <button
                                type="button"
                                className={styles.offerCard}
                                key={offer.id}
                            >
                                <div className={styles.offerIcon}>
                                    <img
                                        src={offer.image}
                                        alt={offer.title}
                                        width={48}
                                        height={48}
                                        className={styles.offerImage}
                                    />
                                </div>

                                <div className={styles.offerContent}>
                                    <strong>{offer.title}</strong>

                                    <span>{offer.subtitle}</span>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Search */}
                    <div className={styles.searchSection}>
                        <div className={styles.searchBox}>
                            <Search size={19} />

                            <input
                                type="text"
                                placeholder="Search for dishes"
                                value={searchValue}
                                onChange={(event) =>
                                    setSearchValue(event.target.value)
                                }
                            />

                            {searchValue && (
                                <button
                                    type="button"
                                    onClick={() => setSearchValue("")}
                                    aria-label="Clear search"
                                >
                                    <X size={17} />
                                </button>
                            )}
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
                            {categories.map((category) => (
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

                    {/* Recommended Section */}
                    <div className={styles.menuSection}>
                        <button
                            type="button"
                            className={styles.menuSectionTitle}
                            onClick={() =>
                                setIsRecommendedOpen((previous) => !previous)
                            }
                        >
                            <div>
                                <h2>Recommended</h2>
                                <span>{filteredItems.length} items available</span>
                            </div>

                            {isRecommendedOpen ? (
                                <ChevronUp size={20} />
                            ) : (
                                <ChevronDown size={20} />
                            )}
                        </button>

                        {isRecommendedOpen && (
                            <div className={styles.foodList}>
                                {filteredItems.map((item) => {
                                    const quantity = cart[item.id] || 0;

                                    return (
                                        <article
                                            className={styles.foodCard}
                                            key={item.id}
                                        >
                                            <div className={styles.foodInfo}>
                                                <div className={styles.foodTypeRow}>
                                                    <span
                                                        className={`${styles.foodType} ${item.type === "veg"
                                                            ? styles.veg
                                                            : styles.nonveg
                                                            }`}
                                                    >
                                                        <span />
                                                    </span>

                                                    {item.recommended && (
                                                        <span
                                                            className={
                                                                styles.recommendedBadge
                                                            }
                                                        >
                                                            Recommended
                                                        </span>
                                                    )}
                                                </div>

                                                <h3>{item.name}</h3>

                                                <div className={styles.foodRating}>
                                                    <Star
                                                        size={14}
                                                        fill="currentColor"
                                                    />
                                                    <span>{item.rating}</span>
                                                </div>

                                                <strong className={styles.price}>
                                                    ₹{item.price}
                                                </strong>

                                                <p>{item.description}</p>
                                            </div>

                                            <div className={styles.foodImageSection}>
                                                <div className={styles.foodImageWrapper}>
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className={styles.foodImage}
                                                    />

                                                    {quantity === 0 ? (
                                                        <button
                                                            type="button"
                                                            className={
                                                                styles.addButton
                                                            }
                                                            onClick={() =>
                                                                addToCart(item.id)
                                                            }
                                                        >
                                                            ADD
                                                        </button>
                                                    ) : (
                                                        <div
                                                            className={
                                                                styles.quantityControl
                                                            }
                                                        >
                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    removeFromCart(
                                                                        item.id
                                                                    )
                                                                }
                                                                aria-label={`Remove ${item.name}`}
                                                            >
                                                                <Minus size={15} />
                                                            </button>

                                                            <span>{quantity}</span>

                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    addToCart(
                                                                        item.id
                                                                    )
                                                                }
                                                                aria-label={`Add another ${item.name}`}
                                                            >
                                                                <Plus size={15} />
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>

                                                <span className={styles.customizable}>
                                                    Customizable
                                                </span>
                                            </div>
                                        </article>
                                    );
                                })}

                                {filteredItems.length === 0 && (
                                    <div className={styles.emptyState}>
                                        <Search size={28} />
                                        <h3>No dishes found</h3>
                                        <p>
                                            Try searching for another delicious
                                            item.
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Floating Cart */}
                    {cartCount > 0 && (
                        <button
                            type="button"
                            className={styles.floatingCart}
                        >
                            <ShoppingBag size={20} />

                            <span className={styles.cartCount}>
                                {cartCount}
                            </span>

                            <span className={styles.cartText}>View Cart</span>
                        </button>
                    )}
                </div>
            </section>
        );
    };

export default OrderOnlineUltraPremiumContent;