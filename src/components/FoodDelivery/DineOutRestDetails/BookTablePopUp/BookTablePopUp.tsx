'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import {
    ArrowLeft,
    ChevronDown,
    ChevronUp,
    Moon,
    Sun,
} from 'lucide-react';

import styles from './BookTablePopUp.module.scss';

export type BookingOffer = {
    id: string;
    title: string;
    subtitle?: string;
    badge?: string;
    type?: 'exclusive' | 'regular';
};

export type TimeSlot = {
    id: string;
    time: string;
    discount?: string;
};

export type BookingDate = {
    id: string;
    day: string;
    date: string;
    discount?: string;
    isToday?: boolean;
};

export type MealSession = {
    id: string;
    title: string;
    timeRange: string;
    type: 'lunch' | 'dinner';
    slots: TimeSlot[];
};

export interface BookTablePopUpProps {
    restaurantName?: string;
    restaurantLocation?: string;

    guests?: number[];
    initialGuests?: number;

    dates?: BookingDate[];
    sessions?: MealSession[];
    offers?: BookingOffer[];

    exclusiveMessage?: string;

    onBack?: () => void;

    onProceed?: (data: {
        guests: number;
        date: BookingDate | undefined;
        session: MealSession | undefined;
        timeSlot: TimeSlot | undefined;
        offer: BookingOffer | undefined;
    }) => void;
}

const DEFAULT_GUESTS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const DEFAULT_DATES: BookingDate[] = [
    {
        id: '10-sep',
        day: 'Today',
        date: '10 Sep',
        discount: '25% off',
        isToday: true,
    },
    {
        id: '11-sep',
        day: 'Fri',
        date: '11 Sep',
        discount: '25% off',
    },
    {
        id: '12-sep',
        day: 'Sat',
        date: '12 Sep',
        discount: '25% off',
    },
    {
        id: '13-sep',
        day: 'Sun',
        date: '13 Sep',
        discount: '25% off',
    },
    {
        id: '14-sep',
        day: 'Mon',
        date: '14 Sep',
        discount: '25% off',
    },
];

const DEFAULT_SESSIONS: MealSession[] = [
    {
        id: 'lunch',
        title: 'Lunch',
        timeRange: '04:15 PM to 05:00 PM',
        type: 'lunch',
        slots: [
            {
                id: '04-15',
                time: '04:15 PM',
                discount: '25% off',
            },
            {
                id: '04-30',
                time: '04:30 PM',
                discount: '25% off',
            },
            {
                id: '04-45',
                time: '04:45 PM',
                discount: '25% off',
            },
        ],
    },
    {
        id: 'dinner',
        title: 'Dinner',
        timeRange: '05:00 PM to 11:59 PM',
        type: 'dinner',
        slots: [
            {
                id: '05-00',
                time: '05:00 PM',
                discount: '20% off',
            },
            {
                id: '05-30',
                time: '05:30 PM',
                discount: '20% off',
            },
        ],
    },
];

const DEFAULT_OFFERS: BookingOffer[] = [
    {
        id: 'exclusive-25',
        title: 'Flat 25% off on Total Bill',
        subtitle: 'Redeemable cover charge: ₹25/guest',
        type: 'exclusive',
    },
    {
        id: 'exclusive-15',
        title: 'Flat 15% Off on Total Bill',
        subtitle: 'Redeemable cover charge: ₹25/guest',
        type: 'exclusive',
    },
    {
        id: 'exclusive-5',
        title: 'Flat 5% Off On Total Bill',
        subtitle: 'Redeemable cover charge: ₹25/guest',
        type: 'exclusive',
    },
    {
        id: 'regular-15',
        title: 'Flat 15% off on total bill',
        subtitle: 'Booking Fee: FREE',
        type: 'regular',
    },
];

const BookTablePopUp: React.FC<BookTablePopUpProps> = ({
    restaurantName = 'Book table',
    restaurantLocation = 'Shubham Soup Wala, Rithala',
    guests = DEFAULT_GUESTS,
    initialGuests = 2,
    dates = DEFAULT_DATES,
    sessions = DEFAULT_SESSIONS,
    offers = DEFAULT_OFFERS,
    exclusiveMessage = '1 month One plan for ₹1 will be auto-added in the next step.',
    onBack,
    onProceed,
}) => {
    const [mounted, setMounted] = useState(false);
    const [selectedGuests, setSelectedGuests] = useState(initialGuests);

    const [selectedDateId, setSelectedDateId] = useState(
        dates[0]?.id || ''
    );

    const [activeSessionId, setActiveSessionId] = useState(
        sessions[0]?.id || ''
    );

    const [expandedSessionId, setExpandedSessionId] = useState(
        sessions[0]?.id || ''
    );

    const [selectedTimeSlotId, setSelectedTimeSlotId] = useState(
        sessions[0]?.slots[0]?.id || ''
    );

    const [selectedOfferId, setSelectedOfferId] = useState('');

    // Mark as mounted (client-side only) to safely use portal
    useEffect(() => {
        setMounted(true);
    }, []);

    // Lock body scroll while popup is open
    useEffect(() => {
        if (!mounted) return;

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, [mounted]);

    const selectedDate = useMemo(() => {
        return dates.find((item) => item.id === selectedDateId);
    }, [dates, selectedDateId]);

    const selectedSession = useMemo(() => {
        return sessions.find((item) => item.id === activeSessionId);
    }, [sessions, activeSessionId]);

    const selectedTimeSlot = useMemo(() => {
        return selectedSession?.slots.find(
            (item) => item.id === selectedTimeSlotId
        );
    }, [selectedSession, selectedTimeSlotId]);

    const selectedOffer = useMemo(() => {
        return offers.find((item) => item.id === selectedOfferId);
    }, [offers, selectedOfferId]);

    const exclusiveOffers = offers.filter(
        (offer) => offer.type === 'exclusive'
    );

    const regularOffers = offers.filter(
        (offer) => offer.type === 'regular'
    );

    const handleSessionToggle = (session: MealSession) => {
        const isOpen = expandedSessionId === session.id;

        setExpandedSessionId(isOpen ? '' : session.id);

        if (!isOpen) {
            setActiveSessionId(session.id);

            if (session.slots.length > 0) {
                setSelectedTimeSlotId(session.slots[0].id);
            }
        }
    };

    const handleProceed = () => {
        onProceed?.({
            guests: selectedGuests,
            date: selectedDate,
            session: selectedSession,
            timeSlot: selectedTimeSlot,
            offer: selectedOffer,
        });
    };

    // Don't render on server / before mount
    if (!mounted) return null;

    const popupContent = (
        <div className={styles.modalOverlay}>
            <div
                className={styles.bookTablePopUp}
                role="dialog"
                aria-modal="true"
            >
                {/* Header */}
                <header className={styles.header}>
                    <button
                        type="button"
                        className={styles.backButton}
                        onClick={onBack}
                        aria-label="Close booking popup"
                    >
                        <ArrowLeft size={25} />
                    </button>

                    <div className={styles.headerContent}>
                        <h1>{restaurantName}</h1>
                        <p>{restaurantLocation}</p>
                    </div>
                </header>

                {/* Scrollable Content */}
                <main className={styles.content}>
                    {/* Guest Selection */}
                    {/* <section className={styles.mainCard}>
                        <h2>Number of guest(s)</h2>

                        <div className={styles.guestsWrapper}>
                            {guests.map((guest) => (
                                <button
                                    key={guest}
                                    type="button"
                                    className={`${styles.guestButton} ${
                                        selectedGuests === guest
                                            ? styles.active
                                            : ''
                                    }`}
                                    onClick={() =>
                                        setSelectedGuests(guest)
                                    }
                                >
                                    {guest}
                                </button>
                            ))}
                        </div>
                    </section> */}

                    {/* Date Selection */}
                    {/* <section className={styles.mainCard}>
                        <h2>When are you visiting?</h2>

                        <div className={styles.dateList}>
                            {dates.map((item) => (
                                <button
                                    key={item.id}
                                    type="button"
                                    className={`${styles.dateCard} ${
                                        selectedDateId === item.id
                                            ? styles.activeDate
                                            : ''
                                    }`}
                                    onClick={() =>
                                        setSelectedDateId(item.id)
                                    }
                                >
                                    <span className={styles.day}>
                                        {item.day}
                                    </span>

                                    <strong className={styles.date}>
                                        {item.date}
                                    </strong>

                                    {item.discount && (
                                        <span
                                            className={
                                                styles.discountBadge
                                            }
                                        >
                                            {item.discount}
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>

                        <h3 className={styles.timeHeading}>
                            Select the time of day to see the offers
                        </h3>

                        <div className={styles.sessionsWrapper}>
                            {sessions.map((session) => {
                                const isExpanded =
                                    expandedSessionId === session.id;

                                const Icon =
                                    session.type === 'lunch'
                                        ? Sun
                                        : Moon;

                                return (
                                    <div
                                        key={session.id}
                                        className={styles.sessionCard}
                                    >
                                        <button
                                            type="button"
                                            className={
                                                styles.sessionHeader
                                            }
                                            onClick={() =>
                                                handleSessionToggle(
                                                    session
                                                )
                                            }
                                        >
                                            <div
                                                className={
                                                    styles.sessionInfo
                                                }
                                            >
                                                <Icon size={34} />

                                                <div>
                                                    <h4>
                                                        {session.title}
                                                    </h4>

                                                    <p>
                                                        {
                                                            session.timeRange
                                                        }
                                                    </p>
                                                </div>
                                            </div>

                                            {isExpanded ? (
                                                <ChevronUp size={20} />
                                            ) : (
                                                <ChevronDown size={20} />
                                            )}
                                        </button>

                                        {isExpanded && (
                                            <div
                                                className={
                                                    styles.timeSlots
                                                }
                                            >
                                                {session.slots.map(
                                                    (slot) => (
                                                        <button
                                                            key={
                                                                slot.id
                                                            }
                                                            type="button"
                                                            className={`${
                                                                styles.timeSlot
                                                            } ${
                                                                selectedTimeSlotId ===
                                                                slot.id
                                                                    ? styles.selectedTimeSlot
                                                                    : ''
                                                            }`}
                                                            onClick={() => {
                                                                setActiveSessionId(
                                                                    session.id
                                                                );
                                                                setSelectedTimeSlotId(
                                                                    slot.id
                                                                );
                                                            }}
                                                        >
                                                            <strong>
                                                                {
                                                                    slot.time
                                                                }
                                                            </strong>

                                                            {slot.discount && (
                                                                <span>
                                                                    {
                                                                        slot.discount
                                                                    }
                                                                </span>
                                                            )}
                                                        </button>
                                                    )
                                                )}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </section> */}

                    {/* Booking Options */}
                    {/* <section className={styles.bookingSection}>
                        <h2>
                            Booking option for{' '}
                            {selectedTimeSlot?.time || 'Select time'}
                        </h2>

                        {exclusiveOffers.length > 0 && (
                            <div className={styles.offerCard}>
                                <div
                                    className={
                                        styles.exclusiveHeading
                                    }
                                >
                                    <span className={styles.oneText}>
                                        one
                                    </span>

                                    <span>EXCLUSIVE</span>
                                </div>

                                <div className={styles.offerList}>
                                    {exclusiveOffers.map(
                                        (offer) => (
                                            <label
                                                key={offer.id}
                                                className={
                                                    styles.offerItem
                                                }
                                            >
                                                <input
                                                    type="radio"
                                                    name="bookingOffer"
                                                    checked={
                                                        selectedOfferId ===
                                                        offer.id
                                                    }
                                                    onChange={() =>
                                                        setSelectedOfferId(
                                                            offer.id
                                                        )
                                                    }
                                                />

                                                <span
                                                    className={
                                                        styles.customRadio
                                                    }
                                                />

                                                <div
                                                    className={
                                                        styles.offerContent
                                                    }
                                                >
                                                    <h4>
                                                        {offer.title}
                                                    </h4>

                                                    {offer.subtitle && (
                                                        <p>
                                                            {
                                                                offer.subtitle
                                                            }
                                                        </p>
                                                    )}
                                                </div>
                                            </label>
                                        )
                                    )}
                                </div>

                                <div
                                    className={
                                        styles.exclusiveMessage
                                    }
                                >
                                    {exclusiveMessage}
                                </div>
                            </div>
                        )}

                        {regularOffers.length > 0 && (
                            <div className={styles.offerCard}>
                                <div
                                    className={
                                        styles.regularHeading
                                    }
                                >
                                    REGULAR OFFER
                                </div>

                                <div className={styles.offerList}>
                                    {regularOffers.map(
                                        (offer) => (
                                            <label
                                                key={offer.id}
                                                className={
                                                    styles.offerItem
                                                }
                                            >
                                                <input
                                                    type="radio"
                                                    name="bookingOffer"
                                                    checked={
                                                        selectedOfferId ===
                                                        offer.id
                                                    }
                                                    onChange={() =>
                                                        setSelectedOfferId(
                                                            offer.id
                                                        )
                                                    }
                                                />

                                                <span
                                                    className={
                                                        styles.customRadio
                                                    }
                                                />

                                                <div
                                                    className={
                                                        styles.offerContent
                                                    }
                                                >
                                                    <h4>
                                                        {offer.title}
                                                    </h4>

                                                    {offer.subtitle && (
                                                        <p>
                                                            {
                                                                offer.subtitle
                                                            }
                                                        </p>
                                                    )}
                                                </div>
                                            </label>
                                        )
                                    )}
                                </div>
                            </div>
                        )}
                    </section> */}
                    {/* <div className={styles.additionalOffers}>
                      <p>Coupons & additional offers available during bill payment</p>
                    </div> */}
                    
                </main>

                {/* Sticky Bottom Button */}
                {/* <div className={styles.bottomAction}>
                    <button
                        type="button"
                        className={`${styles.proceedButton} ${
                            selectedOfferId
                                ? styles.proceedActive
                                : ''
                        }`}
                        disabled={!selectedOfferId}
                        onClick={handleProceed}
                    >
                        Proceed
                    </button>
                </div> */}
            </div>
            
        </div>
    );

    // Render via portal directly on document.body
    return createPortal(popupContent, document.body);
};

export default BookTablePopUp;