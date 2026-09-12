'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import {
    ArrowLeft,
    ChevronDown,
    ChevronUp,
    Coffee,
    Moon,
    Sun,
    X,
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
    type: 'lunch' | 'dinner' | 'breakfast';
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
    onClose?: () => void;

    onProceed?: (data: {
        guests: number;
        date: BookingDate | undefined;
        session: MealSession | undefined;
        timeSlot: TimeSlot | undefined;
        offer: BookingOffer | undefined;
    }) => void;
}

// ---- Helpers (must be defined before use) ----

const generateDefaultDates = (count: number = 5): BookingDate[] => {
    const dates: BookingDate[] = [];
    const today = new Date();

    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ];
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    for (let i = 0; i < count; i++) {
        const currentDate = new Date(today);
        currentDate.setDate(today.getDate() + i);

        const day = i === 0 ? 'Today' : dayNames[currentDate.getDay()];
        const dateStr = `${currentDate.getDate()} ${monthNames[currentDate.getMonth()]}`;
        const id = `${currentDate.getDate()}-${monthNames[currentDate.getMonth()].toLowerCase()}`;

        dates.push({
            id,
            day,
            date: dateStr,
            discount: '25% off',
            ...(i === 0 && { isToday: true }),
        });
    }

    return dates;
};

// ---- Defaults ----

const DEFAULT_GUESTS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const DEFAULT_DATES: BookingDate[] = generateDefaultDates(10);

const DEFAULT_SESSIONS: MealSession[] = [
    {
        id: 'breakfast',
        title: 'Breakfast',
        timeRange: '05:00 AM to 11:45 AM',
        type: 'breakfast',
        slots: [
            { id: '05-00', time: '05:00 AM', discount: '35% off' },
            { id: '05-15', time: '05:15 AM', discount: '35% off' },
            { id: '05-30', time: '05:30 AM', discount: '35% off' },
            { id: '05-45', time: '05:45 AM', discount: '35% off' },
            { id: '06-00', time: '06:00 AM', discount: '35% off' },
            { id: '06-15', time: '06:15 AM', discount: '35% off' },
            { id: '06-30', time: '06:30 AM', discount: '35% off' },
            { id: '06-45', time: '06:45 AM', discount: '35% off' },
            { id: '07-00', time: '07:00 AM', discount: '35% off' },
            { id: '07-15', time: '07:15 AM', discount: '35% off' },
            { id: '07-30', time: '07:30 AM', discount: '35% off' },
            { id: '07-45', time: '07:45 AM', discount: '35% off' },
            { id: '08-00', time: '08:00 AM', discount: '35% off' },
            { id: '08-15', time: '08:15 AM', discount: '35% off' },
            { id: '08-30', time: '08:30 AM', discount: '35% off' },
            { id: '08-45', time: '08:45 AM', discount: '35% off' },
            { id: '09-00', time: '09:00 AM', discount: '35% off' },
            { id: '09-15', time: '09:15 AM', discount: '35% off' },
            { id: '09-30', time: '09:30 AM', discount: '35% off' },
            { id: '09-45', time: '09:45 AM', discount: '35% off' },
            { id: '10-00', time: '10:00 AM', discount: '35% off' },
            { id: '10-15', time: '10:15 AM', discount: '35% off' },
            { id: '10-30', time: '10:30 AM', discount: '35% off' },
            { id: '10-45', time: '10:45 AM', discount: '35% off' },
            { id: '11-00', time: '11:00 AM', discount: '35% off' },
            { id: '11-15', time: '11:15 AM', discount: '35% off' },
            { id: '11-30', time: '11:30 AM', discount: '35% off' },
            { id: '11-45', time: '11:45 AM', discount: '35% off' },
        ],
    },
    {
        id: 'lunch',
        title: 'Lunch',
        timeRange: '12:00 PM to 04:45 PM',
        type: 'lunch',
        slots: [
            { id: '12-00', time: '12:00 PM', discount: '35% off' },
            { id: '12-15', time: '12:15 PM', discount: '35% off' },
            { id: '12-30', time: '12:30 PM', discount: '35% off' },
            { id: '12-45', time: '12:45 PM', discount: '35% off' },
            { id: '01-00', time: '01:00 PM', discount: '35% off' },
            { id: '01-15', time: '01:15 PM', discount: '35% off' },
            { id: '01-30', time: '01:30 PM', discount: '35% off' },
            { id: '01-45', time: '01:45 PM', discount: '35% off' },
            { id: '02-00', time: '02:00 PM', discount: '35% off' },
            { id: '02-15', time: '02:15 PM', discount: '35% off' },
            { id: '02-30', time: '02:30 PM', discount: '35% off' },
            { id: '02-45', time: '02:45 PM', discount: '35% off' },
            { id: '03-00', time: '03:00 PM', discount: '35% off' },
            { id: '03-15', time: '03:15 PM', discount: '35% off' },
            { id: '03-30', time: '03:30 PM', discount: '35% off' },
            { id: '03-45', time: '03:45 PM', discount: '35% off' },
            { id: '04-00', time: '04:00 PM', discount: '35% off' },
            { id: '04-15', time: '04:15 PM', discount: '35% off' },
            { id: '04-30', time: '04:30 PM', discount: '35% off' },
            { id: '04-45', time: '04:45 PM', discount: '35% off' },
        ],
    },
    {
        id: 'dinner',
        title: 'Dinner',
        timeRange: '05:00 PM to 11:59 PM',
        type: 'dinner',
        slots: [
            { id: '05-00', time: '05:00 PM', discount: '35% off' },
            { id: '05-15', time: '05:15 PM', discount: '35% off' },
            { id: '05-30', time: '05:30 PM', discount: '35% off' },
            { id: '05-45', time: '05:45 PM', discount: '35% off' },
            { id: '06-00', time: '06:00 PM', discount: '35% off' },
            { id: '06-15', time: '06:15 PM', discount: '35% off' },
            { id: '06-30', time: '06:30 PM', discount: '35% off' },
            { id: '06-45', time: '06:45 PM', discount: '35% off' },
            { id: '07-00', time: '07:00 PM', discount: '35% off' },
            { id: '07-15', time: '07:15 PM', discount: '35% off' },
            { id: '07-30', time: '07:30 PM', discount: '35% off' },
            { id: '07-45', time: '07:45 PM', discount: '35% off' },
            { id: '08-00', time: '08:00 PM', discount: '35% off' },
            { id: '08-15', time: '08:15 PM', discount: '35% off' },
            { id: '08-30', time: '08:30 PM', discount: '35% off' },
            { id: '08-45', time: '08:45 PM', discount: '35% off' },
            { id: '09-00', time: '09:00 PM', discount: '35% off' },
            { id: '09-15', time: '09:15 PM', discount: '35% off' },
            { id: '09-30', time: '09:30 PM', discount: '35% off' },
            { id: '09-45', time: '09:45 PM', discount: '35% off' },
            { id: '10-00', time: '10:00 PM', discount: '35% off' },
            { id: '10-15', time: '10:15 PM', discount: '35% off' },
            { id: '10-30', time: '10:30 PM', discount: '35% off' },
            { id: '10-45', time: '10:45 PM', discount: '35% off' },
            { id: '11-00', time: '11:00 PM', discount: '35% off' },
            { id: '11-15', time: '11:15 PM', discount: '35% off' },
            { id: '11-30', time: '11:30 PM', discount: '35% off' },
            { id: '11-45', time: '11:45 PM', discount: '35% off' },
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

// ---- Component ----

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
    onClose,
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

    const handleClose = () => {
        if (onClose) {
            onClose();
        } else {
            onBack?.();
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
                        aria-label="Go back"
                    >
                        <ArrowLeft size={25} />
                    </button>

                    <div className={styles.headerContent}>
                        <h1>{restaurantName}</h1>
                        <p>{restaurantLocation}</p>
                    </div>

                    <button
                        type="button"
                        className={styles.closeButton}
                        onClick={handleClose}
                        aria-label="Close booking popup"
                    >
                        <X size={22} />
                    </button>
                </header>

                {/* Scrollable Content */}
                <main className={styles.content}>
                    {/* Guest Selection */}
                    <section className={styles.mainCard}>
                        <h2>Number of guest(s)</h2>

                        <div className={styles.guestsWrapper}>
                            {guests.map((guest) => (
                                <button
                                    key={guest}
                                    type="button"
                                    className={`${styles.guestButton} ${selectedGuests === guest
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
                    </section>

                    {/* Date Selection */}
                    <section className={styles.mainCard}>
                        <h2>When are you visiting?</h2>

                        <div className={styles.dateList}>
                            {dates.map((item) => (
                                <button
                                    key={item.id}
                                    type="button"
                                    className={`${styles.dateCard} ${selectedDateId === item.id
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
                                    session.type === 'breakfast'
                                        ? Coffee
                                        : session.type === 'dinner'
                                            ? Moon
                                            : Sun;

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
                                                            className={`${styles.timeSlot
                                                                } ${selectedTimeSlotId ===
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
                    </section>

                    {/* Booking Options */}
                    <section className={styles.bookingSection}>
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
                                        prime
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
                        <div className={styles.additionalOffers}>
                            <p>
                                Coupons & additional offers available during
                                bill payment
                            </p>
                        </div>
                    </section>
                </main>

                {/* Sticky Bottom Button */}
                <div className={styles.bottomAction}>
                    <button
                        type="button"
                        className={`${styles.proceedButton} ${selectedOfferId
                            ? styles.proceedActive
                            : ''
                            }`}
                        disabled={!selectedOfferId}
                        onClick={handleProceed}
                    >
                        Proceed
                    </button>
                </div>
            </div>
        </div>
    );

    // Render via portal directly on document.body
    return createPortal(popupContent, document.body);
};

export default BookTablePopUp;