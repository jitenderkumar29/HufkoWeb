'use client';

import React, { useState, useMemo } from 'react';
import {
    ArrowLeft,
    ChevronDown,
    ChevronRight,
    Pencil,
    Sparkles,
    X,
} from 'lucide-react';
import styles from './BillDetailsRestaurant.module.scss';
import { BookingData } from '../BookingFlow/BookingFlow';


// --- Reusable Sub-components ---

const InfoBlock = ({ label, value }: { label: string; value: string }) => (
    <div className={styles.infoBlock}>
        <span className={styles.label}>{label}</span>
        <span className={styles.value}>{value}</span>
    </div>
);

const BillRow = ({
    leftContent,
    rightContent,
}: {
    leftContent: React.ReactNode;
    rightContent: React.ReactNode;
}) => (
    <div className={styles.billRow}>
        <div className={styles.leftCol}>{leftContent}</div>
        <div className={styles.rightCol}>{rightContent}</div>
    </div>
);

// --- Props ---

interface BillDetailsRestaurantProps {
    bookingData: BookingData;
    restaurantName?: string;
    coverChargePerGuest?: number;
    planPrice?: number;
    onBack?: () => void;
    onProceed?: () => void;
    onClose?: () => void;
}

// --- Main Component ---

export default function BillDetailsRestaurant({
    bookingData,
    restaurantName = 'Currypatta',
    coverChargePerGuest = 10,
    planPrice = 1,
    onBack,
    onProceed,
    onClose,
}: BillDetailsRestaurantProps) {
    const [isTermsExpanded, setIsTermsExpanded] = useState(false);

    const coverCharge = useMemo(
        () => (bookingData.guests || 2) * coverChargePerGuest,
        [bookingData.guests, coverChargePerGuest]
    );

    const totalPay = coverCharge + planPrice;

    // Derive booking display values
    const dateLabel = bookingData.date?.day || 'Today';
    const dateValue = bookingData.date?.date || '13 Sep 2026';
    const sessionLabel = bookingData.session?.title || 'Dinner';
    const sessionValue = bookingData.timeSlot?.time || '05:00 PM';
    const guestsValue = bookingData.guests || 2;
    const offerTitle =
        bookingData.offer?.title || 'Flat 10% off on Total Bill';

    const termsList = [
        'The deal must be redeemed/bill paid within 6 hours of the dining start time, or the offer will expire.',
        'Pre-book offers are available exclusively for Hufko One members. Non-members can purchase One membership along with pre-book offers.',
        'Pre-book offer discount can only be availed while paying for the bill through Hufko Dineout.',
        'This offer is applicable on the à la carte and special menus offered by the restaurant.',
        'The per-person booking fee will not be adjusted against your restaurant bill.',
        'Each pre-book offer is valid only for the number of guests indicated while purchasing the offer.',
        'Pre-book offer confirmation via WhatsApp message, email, or on the app needs to be shown at the restaurant before placing your order.',
        'Pre-book offers once sold cannot be canceled, modified, refunded, or transferred.',
        'This offer cannot be combined with existing Dineout, other platforms, or in-house offers or any existing membership with the restaurant.',
        'Pre-book offers are restaurant-specific and are applicable to that restaurant only.',
        'Pre-book offer is valid for dine-in only and not for takeout or delivery.',
        'Menu prices may change without prior notice.',
        'The table will be held for 15 minutes after the booking time. However, if the restaurant is crowded, you may have to wait to be seated at your table.',
        'Abiding by government rules, drinks will not be served to patrons under the state\'s permissible age limit.',
        'Any items ordered that are not included in the offer will be billed on actuals.',
        'The restaurant reserves the right to admission (entry for kids/stags as per restaurant rules).',
        'Government taxes and service charges will be applied, as applicable.',
        'Drinks will be served as per the stock available at the restaurant.',
        'Final payment must be made within 6 hours of the booked slot time to redeem the pre-book offer discount.',
        'A maximum of Rs. 3,00,000 can be paid in a single bill payment transaction while redeeming the pre-book offer.',
    ];

    return (
        <div className={styles.modalOverlay}>
            <div
                className={styles.billPage}
                role="dialog"
                aria-modal="true"
            >
                {/* Header */}
                <header className={styles.header}>
                    <button
                        type="button"
                        className={styles.backButton}
                        onClick={onBack}
                        aria-label="Go back"
                    >
                        <ArrowLeft size={25} />
                    </button>

                    <div className={styles.headerContent}>
                        <h1>{restaurantName}</h1>
                        <p>Agra</p>
                    </div>

                    {onClose && (
                        <button
                            type="button"
                            className={styles.closeButton}
                            onClick={onClose}
                            aria-label="Close"
                        >
                            <X size={22} />
                        </button>
                    )}
                </header>

                {/* Scrollable Content */}
                <main className={styles.content}>
                    {/* Cover Charge Banner */}
                    <div className={styles.coverChargeBanner}>
                        <div className={styles.bannerText}>
                            Your cover charge of{' '}
                            <b>₹{coverCharge} will be redeemed</b> when you
                            pay your bill via Hufko
                        </div>
                        <Sparkles className={styles.bannerIcon} />
                    </div>

                    {/* Booking Card */}
                    <div className={styles.bookingCard}>
                        <div className={styles.dateTimeRow}>
                            <InfoBlock label={dateLabel} value={dateValue} />
                            <InfoBlock label={sessionLabel} value={sessionValue} />
                            <InfoBlock
                                label={`for ${guestsValue}`}
                                value="guests"
                            />
                        </div>

                        <div className={styles.restaurantInfo}>
                            <span className={styles.name}>
                                {restaurantName}
                            </span>
                            <span className={styles.address}>
                                Lohamandi, Agra
                            </span>
                        </div>

                        <div className={styles.offerBadgeWrapper}>
                            <div className={styles.offerBadge}>
                                Prime Pre-book Offer
                            </div>
                            <div className={styles.offerBox}>
                                <span className={styles.offerText}>
                                    {offerTitle}
                                </span>
                            </div>
                        </div>

                    </div>
                    <div className={styles.dineCashRow}>
                        <span>Redeem ₹{coverCharge} cover +</span>
                        <img
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/dineout/loyalty/2X-Logo.png"
                            alt="DineCash"
                        />
                        <span>
                            <b>Earn 20% DineCash</b> on bill payment
                        </span>
                    </div>

                    {/* Hufko One Plan Card */}
                    <div className={styles.onePlanCard}>
                        <div className={styles.badge}>Special plan added for you</div>
                        <div className={styles.planHeader}><span className={styles.primeHeader}>PRIME</span>
                            {/* <img
                                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/icons/one-logotype.png"
                                alt="Hufko One"
                                className={styles.oneLogo}
                            /> */}
                            <span>1 Month Plan</span>
                        </div>
                        <p className={styles.planDescription}>
                            Enjoy unlimited access to pre-book offers on 7500+ restaurants.
                        </p>
                        <div className={styles.priceTag}>₹{planPrice}</div>
                        <button className={styles.viewBenefits}>
                            View all benefits <ChevronRight size={14} />
                        </button>
                    </div>

                    {/* Bill Details */}
                    {/* <div>
                        <h3 className={styles.sectionTitle}>Bill Details</h3>
                        <div className={styles.billDetailsCard}>
                            <BillRow
                                leftContent={
                                    <>
                                        <span className={styles.itemName}>
                                            Cover charges for {guestsValue}
                                        </span>
                                        <span className={styles.itemSubtext}>
                                            Redeem it by paying bill via Hufko
                                        </span>
                                    </>
                                }
                                rightContent={<span>₹{coverCharge}</span>}
                            />

                            <BillRow
                                leftContent={
                                    <div className={styles.onePlanRow}>
                                        <span className={styles.primeHeader}>PRIME</span>
                                        <span className={styles.itemName}>
                                            1 Month Plan
                                        </span>
                                    </div>
                                }
                                rightContent={<span>₹{planPrice}</span>}
                            />

                            <div className={styles.divider} />

                            <div className={styles.totalRow}>
                                <span className={styles.totalLabel}>
                                    To Pay
                                </span>
                                <span className={styles.totalAmount}>
                                    ₹{totalPay}
                                </span>
                            </div>
                        </div>
                    </div> */}

                    {/* Contact Details */}
                    {/* <div className={styles.contactSection}>
                        <h3 className={styles.sectionTitle}>Contact Details</h3>
                        <div className={styles.contactCard}>
                            <div className={styles.contactInfo}>
                                <span className={styles.contactName}>Dhruba Arora</span>
                                <span className={styles.contactPhone}>+919267958302</span>
                                <span className={styles.contactEmail}>
                                    dhruba.arora@gmail.com
                                </span>
                            </div>
                            <button
                                type="button"
                                className={styles.editButton}
                                aria-label="Edit contact details"
                                onClick={() => {
                                    // open edit modal / navigate to edit page
                                    console.log('Edit contact details clicked');
                                }}
                            >
                                <Pencil />
                            </button>
                        </div>
                    </div> */}

                    {/* Offer Terms & Conditions */}
                    {/* <div className={styles.termsCard}>
                        <div
                            className={`${styles.termsHeader} ${isTermsExpanded ? styles.expanded : ''
                                }`}
                            onClick={() => setIsTermsExpanded(!isTermsExpanded)}
                            role="button"
                            tabIndex={0}
                            aria-expanded={isTermsExpanded}
                            aria-controls="terms-content"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    setIsTermsExpanded(!isTermsExpanded);
                                }
                            }}
                        >
                            <span className={styles.termsTitle}>Offer terms &amp; conditions</span>
                            <ChevronDown size={28} className={styles.chevronDownIcon}/>
                        </div>

                        <div
                            id="terms-content"
                            className={`${styles.termsContent} ${isTermsExpanded ? styles.show : ''
                                }`}
                        >
                            <ul>
                                {termsList.map((term, index) => (
                                    <li key={index}>{term}</li>
                                ))}
                            </ul>
                        </div>
                    </div> */}
                </main>

                {/* Sticky Footer */}
                <div className={styles.bottomAction}>
                    <div className={styles.autoAddedText}>
                        🤩 One has been auto added to your order
                    </div>
                    <button
                        className={styles.proceedButton}
                        onClick={onProceed}
                    >
                        Proceed to pay ₹{totalPay}
                    </button>
                </div>
            </div>
        </div>
    );
}