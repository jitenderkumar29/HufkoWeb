'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ChevronLeft, Plus } from 'lucide-react';
import styles from './PayBillAmount.module.scss';

// --- Types ---
export interface OfferPayBillInterface {
    id: string;
    title: string;
    value: string;
    subtitle: string;
    iconUrl: string;
}

export interface PayBillAmountProps {
    restaurantName: string;
    location: string;
    restaurantOffers: OfferPayBillInterface[];
    addonOffers: OfferPayBillInterface[];
    onBack: () => void;
    onContinue: (amount: string) => void;
    initialAmount?: string;
}

// --- Reusable Offer Card Component ---
// Note: Removed the modalOverlay wrapper from here. 
// The OfferCard should just be the card itself.
const OfferCard: React.FC<{
    offer: OfferPayBillInterface;
    totalDots: number;
    activeDot: number;
    onDotClick?: (index: number) => void;
}> = ({ offer, totalDots, activeDot, onDotClick }) => {
    return (
        <div className={styles.offerCard}>
            <div className={styles.offerTitle}>{offer.title}</div>
            <div className={styles.offerContent}>
                <div className={styles.iconWrapper}>
                    <img src={offer.iconUrl} alt={offer.value} loading="lazy" />
                </div>
                <div className={styles.textWrapper}>
                    <p className={styles.offerValue}>{offer.value}</p>
                    <p className={styles.offerSub}>{offer.subtitle}</p>
                </div>
            </div>

            {/* Dots Indicator */}
            {totalDots > 1 && (
                <div className={styles.dots}>
                    {Array.from({ length: totalDots }).map((_, idx) => (
                        <div
                            key={idx}
                            className={`${styles.dot} ${idx === activeDot ? styles.active : ''}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                onDotClick?.(idx);
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

// --- Main Component ---
export default function PayBillAmount({
    restaurantName = "Lara Bar & Kitchen",
    location = "Dhaula Kuan, South Delhi",
    restaurantOffers = [],
    addonOffers = [],
    onBack,
    onContinue,
    initialAmount = '',
}: Partial<PayBillAmountProps>) {
    const [amount, setAmount] = useState<string>(initialAmount);

    // Carousel State
    const [restaurantIndex, setRestaurantIndex] = useState(0);
    const [addonIndex, setAddonIndex] = useState(0);

    // Auto-play Carousel (Optional - Comment out if not needed)
    useEffect(() => {
        if (addonOffers.length <= 1) return;
        const interval = setInterval(() => {
            setAddonIndex((prev) => (prev + 1) % addonOffers.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [addonOffers.length]);

    // Handle Amount Input
    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value.replace(/[^0-9]/g, ''); // Only numbers
        setAmount(val);
    };

    const handleContinue = () => {
        if (onContinue && amount) {
            onContinue(amount);
        }
    };

    // Safe access to current offers
    const currentRestaurantOffer = restaurantOffers[restaurantIndex] || restaurantOffers[0];
    const currentAddonOffer = addonOffers[addonIndex] || addonOffers[0];

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.container}>
                {/* Header */}
                <header className={styles.header}>
                    <button className={styles.backButton} onClick={onBack} aria-label="Go back">
                        <ArrowLeft />
                    </button>
                    <div className={styles.headerInfo}>
                        <h1 className={styles.title}>{restaurantName}</h1>
                        <p className={styles.subtitle}>{location}</p>
                    </div>
                </header>

                {/* Content */}
                <main className={styles.content}>
                    {/* Bill Amount Input */}
                    <div className={styles.billInputSection}>
                        <p className={styles.label}>Enter Bill Amount</p>
                        <div className={styles.inputWrapper}>
                            <span className={styles.currencySymbol}>₹</span>
                            <input
                                type="text"
                                inputMode="numeric"
                                pattern="^\d+$"
                                className={styles.amountInput}
                                value={amount}
                                onChange={handleAmountChange}
                                placeholder="0"
                                aria-label="Bill amount"
                                autoFocus
                            />
                        </div>
                    </div>

                    {/* Offers Section */}
                    <div className={styles.offersContainer}>
                        {/* Restaurant Offer (Left) */}
                        {currentRestaurantOffer && (
                            <OfferCard
                                offer={currentRestaurantOffer}
                                totalDots={restaurantOffers.length}
                                activeDot={restaurantIndex}
                                onDotClick={setRestaurantIndex}
                            />
                        )}

                        {/* Plus Icon */}
                        <Plus className={styles.plusIcon} size={24} />

                        {/* Add-on Offers (Right) */}
                        {currentAddonOffer && (
                            <OfferCard
                                offer={currentAddonOffer}
                                totalDots={addonOffers.length}
                                activeDot={addonIndex}
                                onDotClick={setAddonIndex}
                            />
                        )}
                    </div>
                </main>

                {/* Footer */}
                <footer className={styles.footer}>
                    <button
                        className={styles.continueButton}
                        onClick={handleContinue}
                        disabled={!amount}
                        aria-disabled={!amount}
                    >
                        Continue
                    </button>
                </footer>
            </div>
        </div>
    );
}