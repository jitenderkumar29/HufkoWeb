"use client";

import React, { useMemo, useRef, useState } from "react";
import {
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    ChevronUp,
    Minus,
    Plus,
    Search,
    ShoppingBag,
    Star,
    X,
} from "lucide-react";

import styles from "./OrderOnlineUltraPremiumContent.module.scss";
import OpenCloseTime from "./OpenCloseTime/OpenCloseTime";
import OutletsAroundYou, { Outlet } from "./OutletsAroundYou/OutletsAroundYou";

/* =========================================================
   TYPES
========================================================= */

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
    totalRating: number;
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

/* =========================================================
   HELPERS
========================================================= */

export function formatCount(n: number): string {
    if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    return String(n);
}

export function truncateChars(text: string, max: number): string {
    if (text.length <= max) return text;
    const cut = text.slice(0, max);
    const lastSpace = cut.lastIndexOf(" ");
    return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut) + "…";
}

/* =========================================================
   FOOD INFO (per-item state for description expand/collapse)
========================================================= */

type FoodInfoProps = {
    item: FoodItem;
    maxChars?: number;
};

function FoodInfo({ item, maxChars = 130 }: FoodInfoProps) {
    const [expanded, setExpanded] = useState(false);

    const isLong = item.description.length > maxChars;
    const shown = expanded
        ? item.description
        : truncateChars(item.description, maxChars);

    return (
        <div className={styles.foodInfo}>
            <div className={styles.foodTypeRow}>
                <span
                    className={`${styles.foodType} ${item.type === "veg" ? styles.veg : styles.nonveg
                        }`}
                >
                    <span />
                </span>

                {item.recommended && (
                    <span className={styles.recommendedBadge}>
                        Recommended
                    </span>
                )}
            </div>

            <h3>{item.name}</h3>

            <strong className={styles.price}>₹{item.price}</strong>

            <div className={styles.foodRating}>
                <Star size={14} fill="currentColor" />
                <span>{item.rating}</span>
                <span className={styles.ratingCount}>
                    ({formatCount(item.totalRating)})
                </span>
            </div>

            <div className={styles.descriptionWrap}>
                <p
                    className={`${styles.description} ${expanded ? styles.expanded : ""
                        }`}
                >
                    {shown}
                    {isLong && (
                        <button
                            type="button"
                            className={styles.moreBtn}
                            onClick={() => setExpanded((v) => !v)}
                            aria-expanded={expanded}
                        >
                            {expanded ? " less" : " more"}
                        </button>
                    )}
                </p>
            </div>
        </div>
    );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

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

        /* ---------------- Offers ---------------- */

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
                totalRating: 1240,
                description: "Our Original Whopper with Crunchy Veg Patty, Onions, Lettuce, Tomatoes (Seasonal), Gherkins, Creamy And Smoky Sauces With Xxl Buns. Qty: 285 Gms| Kcal: 681.2 | Carbs 97.1 Gms| Sugar: 23.1 Gms| Fat: 25.4 Gms| Saturated fat: 9.8 Gms| Protein: 15.8 Gms| Sodium: 987.8 Mg Contains: Gluten, Soybean, Milk, Sesame seeds.",
                category: "Burgers",
                type: "veg",
                recommended: true,
                image: "/products/photo-1568901346375-23c9450c58cd.jpg",
            },
            {
                id: 2,
                name: "Crispy Veg Burger",
                price: 149,
                rating: 4.2,
                totalRating: 876,
                description: "New Premium Black & White Sesame Bun with Crispy Chicken Patty, Fresh Onion and Signature Sauce. Qty: 125 Gms| Kcal: 359.1 | Carbs 44.3 Gms| Sugar: 7.5 Gms| Fat: 15.1 Gms| Saturated fat: 4.8 Gms| Protein: 11.5 Gms| Sodium: 592.4 Mg Contains: Gluten, Soybean, Milk, Sesame seeds.",
                category: "Burgers",
                type: "veg",
                recommended: true,
                image: "/products/photo-1550547660-d9450f859349.jpg",
            },
            {
                id: 3,
                name: "Veg Whopper Deluxe",
                price: 249,
                rating: 4.5,
                totalRating: 512,
                description: "A larger-than-life veggie burger loaded with double cheese, fresh veggies, and our special deluxe sauce.",
                category: "Burgers",
                type: "veg",
                recommended: false,
                image: "/products/photo-1571091718767-18b5b1457add.jpg",
            },
            {
                id: 4,
                name: "Spicy Veg Crunch Burger",
                price: 169,
                rating: 4.1,
                totalRating: 389,
                description: "Our Best Seller - Crispy Veg Patty, Fresh Onion and Signature Sauce with New Premium Black & White Sesame Bun. Qty: 131 gms | Kcal: 306 Carbs: 47 gms | Sugar: 5 gms | Fat: 10 gms | Saturated fat: 3 gms | Protein: 7 gms | Sodium: 894 mg.",
                category: "Burgers",
                type: "veg",
                recommended: false,
                image: "/products/photo-1562565652-a0d8f0c59eb4.jpg",
            },

            // --- Burgers (Non-Veg) ---
            {
                id: 5,
                name: "Original Whopper Chicken",
                price: 249,
                rating: 4.4,
                totalRating: 1980,
                description: "Our Original Whopper with Flame Grilled Chicken Patty, Onions, Lettuce, Tomatoes (Seasonal), Gherkins, Creamy And Smoky Sauces With Xxl Buns. Qty: 280 Gms| Kcal: 667.2 | Carbs 59.1 Gms| Sugar: 8.7 Gms| Fat: 36.3 Gms| Saturated fat: 8.1 Gms| Protein: 26.2 Gms| Sodium: 1018.7 Mg Contains: Gluten, Soybean, Milk, Sesame seeds",
                category: "Burgers",
                type: "nonveg",
                recommended: true,
                image: "/products/photo-1562967916-eb82221dfb92.jpg",
            },
            {
                id: 6,
                name: "Crispy Chicken Burger",
                price: 179,
                rating: 4.3,
                totalRating: 1432,
                description: "New Premium Black & White Sesame Bun with Crispy Chicken Patty, Fresh Onion and Signature Sauce. Qty: 125 Gms| Kcal: 359.1 | Carbs 44.3 Gms| Sugar: 7.5 Gms| Fat: 15.1 Gms| Saturated fat: 4.8 Gms| Protein: 11.5 Gms| Sodium: 592.4 Mg Contains: Gluten, Soybean, Milk, Sesame seeds.",
                category: "Burgers",
                type: "nonveg",
                recommended: false,
                image: "/products/photo-1561758033-d89a9ad46330.jpg",
            },
            {
                id: 7,
                name: "Crispy Double Patty Burger",
                price: 229,
                rating: 4.5,
                totalRating: 921,
                description: "Double up our best selling crispy veg burger, now with new Premium Black & White Sesame Bun Qty: 204 Gms| Kcal: 531.4 | Carbs 70.6 Gms| Sugar: 9.1 Gms| Fat: 22.7 Gms| Saturated fat: 9.2 Gms| Protein: 11.2 Gms| Sodium: 1068 Mg Contains: Gluten, Soybean, Milk, Sesame seeds.",
                category: "Burgers",
                type: "nonveg",
                recommended: true,
                image: "/products/photo-1594212699903-ec8a3eca50f5.jpg",
            },
            {
                id: 8,
                name: "Crispy Chicken Double Patty Burger",
                price: 259,
                rating: 4.6,
                totalRating: 764,
                description: "Double up our best selling crispy veg burger, now with new Premium Black & White Sesame Bun Qty: 204 Gms| Kcal: 531.4 | Carbs 70.6 Gms| Sugar: 9.1 Gms| Fat: 22.7 Gms| Saturated fat: 9.2 Gms| Protein: 11.2 Gms| Sodium: 1068 Mg Contains: Gluten, Soybean, Milk, Sesame seeds.",
                category: "Burgers",
                type: "nonveg",
                recommended: false,
                image: "/products/photo-1586190848861-99aa4a171e90.jpg",
            },

            // --- Chicken (Non-Veg) ---
            {
                id: 9,
                name: "5 pc Chicken Nuggets",
                price: 129,
                rating: 4.2,
                totalRating: 2105,
                description: "Tender, juicy, crispy golden chicken nuggets served with your choice of dipping sauce.",
                category: "Chicken",
                type: "nonveg",
                recommended: true,
                image: "/products/photo-1562967914-608f82629710.jpg",
            },
            {
                id: 10,
                name: "Chicken Popcorn (Regular)",
                price: 159,
                rating: 4.3,
                totalRating: 1678,
                description: "The perfect crispy partner. Qty: 72 gms | Kcal: 204 Carbs: 27 gms | Sugar: 0 gms | Fat: 9 gms | Saturated fat: 4 gms | Protein: 4 gms | Sodium: 325 mg.",
                category: "Chicken",
                type: "nonveg",
                recommended: false,
                image: "/products/photo-1567620832903-9fc6debc209f.jpg",
            },
            {
                id: 11,
                name: "Chicken Wrap",
                price: 189,
                rating: 4.4,
                totalRating: 845,
                description: "Qty: 252 Gms | Kcal: 483.8 | Carbs 50.6 Gms | Sugar: 9.3 Gms | Fat: 22.5 Gms | Saturated fat: 8.2 Gms | Protein: 19.8 Gms | Sodium: 1176.5 Mg Contains: Gluten, Soybean , Milk.",
                category: "Chicken",
                type: "nonveg",
                recommended: false,
                image: "/products/photo-1626700051175-6818013e1d4f.jpg",
            },

            // --- Sides (Veg) ---
            {
                id: 12,
                name: "King Fries",
                price: 99,
                rating: 4.1,
                totalRating: 2456,
                description: "The Perfect Crispy Partner Qty: 156 Gms| Kcal: 455 | Carbs 609.48 Gms| Sugar: 0 Gms| Fat: 19.7 Gms| Saturated fat: 9.31 Gms| Protein: 8 Gms| Sodium: 723.7 Mg Contains: Gluten.",
                category: "Sides",
                type: "veg",
                recommended: true,
                image: "/products/photo-1573080496219-bb080dd4f877.jpg",
            },
            {
                id: 13,
                name: "Peri Peri Fries",
                price: 129,
                rating: 4.3,
                totalRating: 1387,
                description: "Crispy fries tossed in fiery Peri Peri spice mix for a zesty kick.",
                category: "Sides",
                type: "veg",
                recommended: false,
                image: "/products/photo-1630384060421-cb20d0e0649d.jpg",
            },
            {
                id: 14,
                name: "Cheesy Loaded Fries",
                price: 169,
                rating: 4.5,
                totalRating: 962,
                description: "Crispy fries loaded with melted cheese sauce, jalapenos, and a drizzle of creamy mayo.",
                category: "Sides",
                type: "veg",
                recommended: false,
                image: "/products/photo-1541592106381-b31e9677c0e5.jpg",
            },

            // --- Beverages (Veg) ---
            {
                id: 15,
                name: "Chocolate Thick Shake",
                price: 149,
                rating: 4.6,
                totalRating: 1723,
                description: "Qty: Gms300 ML| Kcal: 496.08 | Carbs 87.69 Gms| Sugar: 61.44 Gms| Fat: 11.28 Gms| Saturated fat: 7.17 Gms| Protein: 10.95 Gms| Sodium: 10.68 Mg Contains: , Soybean , Milk.",
                category: "Beverages",
                type: "veg",
                recommended: true,
                image: "/products/photo-1572490122747-3968b75cc699.jpg",
            },
            {
                id: 16,
                name: "Vanilla Thick Shake",
                price: 139,
                rating: 4.4,
                totalRating: 934,
                description: "Our Signature Black Currant Thick Shake Qty: 300 ML| Kcal: 474 | Carbs 90.9 Gms| Sugar: 68.2 Gms| Fat: 8.8 Gms| Saturated fat: 6 Gms| Protein: 7.9 Gms| Sodium: 150.9 Mg Contains: Soybean, Milk.",
                category: "Beverages",
                type: "veg",
                recommended: false,
                image: "/products/photo-1579954115545-a95591f28bfc.jpg",
            },
            {
                id: 17,
                name: "Strawberry Shake",
                price: 159,
                rating: 4.3,
                totalRating: 612,
                description: "Classic strawberry shake blending fresh strawberries and vanilla ice cream.",
                category: "Beverages",
                type: "veg",
                recommended: false,
                image: "/products/photo-1553787499-6f9133860278.jpg",
            },
            {
                id: 18,
                name: "Coca-Cola (Fountain)",
                price: 49,
                rating: 4.0,
                totalRating: 3218,
                description: "Chilled, refreshing Coca-Cola served in a cup with ice. The perfect companion to your burger.",
                category: "Beverages",
                type: "veg",
                recommended: true,
                image: "/products/photo-1554866585-cd94860890b7.jpg",
            },

            // --- Desserts (Veg) ---
            {
                id: 19,
                name: "Molten Chocolate Cake",
                price: 129,
                rating: 4.7,
                totalRating: 1085,
                description: "Airy And Creamy Chocolate Mousse Topped With Chocolate Ganache And Choco Chips Qty: 80 Gms| Kcal: 200 | Carbs 35 Gms| Sugar: 25 Gms| Fat: 5.7 Gms| Saturated fat: 4.4 Gms| Protein: 2.2 Gms| Sodium: 67 Mg Contains: Soybean, Milk.",
                category: "Desserts",
                type: "veg",
                recommended: true,
                image: "/products/photo-1606313564200-e75d5e30476c.jpg",
            },
            {
                id: 20,
                name: "Sundae (Chocolate)",
                price: 109,
                rating: 4.5,
                totalRating: 741,
                description: "Made with Kit Kat, enjoy our rich creamy fusion sundae Qty: 128 gms| Kcal: 327 | Carbs: 49 gms| Sugar: 32 gms| Fat: 12 gms| Saturated fat: 10 gms| Protein: 6 gms.",
                category: "Desserts",
                type: "veg",
                recommended: false,
                image: "/products/photo-1563805042-7684c019e1cb.jpg",
            },
        ];

        const categories = ["All", "Bestseller", "Burgers", "Chicken", "Sides"];

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

        /* ---------------- Filtering ---------------- */

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

        /* ---------------- Cart ---------------- */

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

        /* ---------------- Offer scroll ---------------- */

        const scrollOffers = (direction: "left" | "right") => {
            if (!offerSliderRef.current) return;
            const scrollAmount = 320;
            offerSliderRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        };

        /* ---------------- Render ---------------- */

        return (
            <section className={styles.orderOnlineUltraPremiumContent}>
                <div className={styles.container}>
                    {/* Banner */}
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
                                        4.2 (5K+ ratings)
                                    </span>

                                    <span>•</span>

                                    <span>₹300 for two</span>
                                </div>

                                <div className={styles.deliveryInfo}>
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
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Restaurant Details */}
                    <div className={styles.restaurantInfoCard}>
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

                        <div className={styles.infoDivider} />

                        <div className={styles.address}>
                            <span>Restaurant details</span>
                            <p>
                                Delicious burgers, crispy fries and freshly prepared
                                fast food delivered to your doorstep.
                            </p>

                            <div className={styles.banner}>
                                <span className={styles.logoWrap}>
                                    <h2 className={styles.primeWrap}>PRIME</h2>
                                </span>

                                <div className={styles.textWrap}>
                                    <div className={styles.text}>
                                        Free delivery on orders above ₹199
                                    </div>
                                </div>
                            </div>
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

                    <div className={styles.offerGrid} ref={offerSliderRef}>
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
                            {/* Veg / Non-Veg toggle pills */}
                            <div className={styles.staticCategoryList}>
                                <div className={styles.staticItem}>
                                    <div className={styles.staticBox}>
                                        <label className={styles.staticLabel}>
                                            <input
                                                type="checkbox"
                                                aria-label="Enable veg option"
                                                className={styles.hiddenInput}
                                            />
                                            <span className={styles.staticPill}>
                                                <div className={styles.trackWrapper}>
                                                    <span className={styles.track}></span>
                                                    <div
                                                        className={
                                                            styles.iconContainer
                                                        }
                                                    >
                                                        <svg
                                                            aria-hidden="true"
                                                            height="20"
                                                            width="20"
                                                            viewBox="0 0 20 20"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <rect
                                                                x="1"
                                                                y="1"
                                                                width="18"
                                                                height="18"
                                                                rx="4"
                                                                stroke="#007A33"
                                                                strokeWidth="2"
                                                                fill="white"
                                                            />
                                                            <circle
                                                                cx="10"
                                                                cy="10"
                                                                r="5"
                                                                fill="#007A33"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </span>
                                        </label>
                                    </div>
                                </div>

                                <div className={styles.staticItem}>
                                    <div className={styles.staticBox}>
                                        <label className={styles.staticLabel}>
                                            <input
                                                type="checkbox"
                                                aria-label="Enable non veg option"
                                                className={styles.hiddenInput}
                                            />
                                            <span className={styles.staticPill}>
                                                <div className={styles.trackWrapper}>
                                                    <span className={styles.track}></span>
                                                    <div
                                                        className={
                                                            styles.iconContainer
                                                        }
                                                    >
                                                        <svg
                                                            aria-hidden="true"
                                                            height="20"
                                                            width="20"
                                                            viewBox="0 0 20 20"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <rect
                                                                x="1"
                                                                y="1"
                                                                width="18"
                                                                height="18"
                                                                rx="4"
                                                                stroke="#D32F2F"
                                                                strokeWidth="2"
                                                                fill="white"
                                                            />
                                                            <path
                                                                d="M10 5L15 15H5L10 5Z"
                                                                fill="#D32F2F"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Dynamic categories */}
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() => setActiveCategory(category)}
                                    className={`${styles.categoryButton} ${activeCategory === category
                                        ? styles.activeCategory
                                        : ""
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
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
                                            {/* Left: info + description */}
                                            <FoodInfo item={item} maxChars={165} />

                                            {/* Right: image + add / quantity */}
                                            <div className={styles.foodImageSection}>
                                                <div
                                                    className={
                                                        styles.foodImageWrapper
                                                    }
                                                >
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

                                                <span
                                                    className={
                                                        styles.customizable
                                                    }
                                                >
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
                    {/* Sticky bottom cart bar */}
                    {cartCount > 0 && (
                        <button
                            type="button"
                            className={styles.bottomCart}
                            aria-label={`Cart details: ${cartCount} item${cartCount > 1 ? "s" : ""} added. Tap to view cart.`}
                            onClick={() => {
                                // navigate to cart page
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
            </section>
        );
    };

export default OrderOnlineUltraPremiumContent;