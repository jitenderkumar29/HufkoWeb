'use client';

import React, {
    useCallback,
    useMemo,
    useState,
} from 'react';

import {
    ArrowLeft,
    ChevronDown,
    ChevronRight,
    Pencil,
    Sparkles,
    X,
} from 'lucide-react';

import styles from './BillDetailsRestaurant.module.scss';

import type {
    BookingDate,
    BookingOffer,
    MealSession,
    TimeSlot,
} from '../BookTablePopUp/BookTablePopUp';

// =====================================================
// TYPES
// =====================================================

interface BookingData {
    guests: number;
    date?: BookingDate;
    session?: MealSession;
    timeSlot?: TimeSlot;
    offer?: BookingOffer;
}

export interface BillDetails {
    coverCharge: number;
    planPrice: number;
    totalPay: number;
}

interface BillDetailsRestaurantProps {
    bookingData: BookingData;

    restaurantName?: string;
    restaurantLocation?: string;

    coverChargePerGuest?: number;
    planPrice?: number;

    userName?: string;
    userPhone?: string;
    userEmail?: string;

    onBack?: () => void;

    onProceed?: (
        billDetails: BillDetails
    ) => void;

    onClose?: () => void;
}

// =====================================================
// REUSABLE COMPONENTS
// =====================================================

const InfoBlock = ({
    label,
    value,
}: {
    label: string;
    value: string;
}) => {
    return (
        <div
            className={
                styles.infoBlock
            }
        >
            <span
                className={
                    styles.label
                }
            >
                {label}
            </span>

            <span
                className={
                    styles.value
                }
            >
                {value}
            </span>
        </div>
    );
};

const BillRow = ({
    leftContent,
    rightContent,
}: {
    leftContent: React.ReactNode;
    rightContent: React.ReactNode;
}) => {
    return (
        <div
            className={
                styles.billRow
            }
        >
            <div
                className={
                    styles.leftCol
                }
            >
                {leftContent}
            </div>

            <div
                className={
                    styles.rightCol
                }
            >
                {rightContent}
            </div>
        </div>
    );
};

// =====================================================
// COMPONENT
// =====================================================

const BillDetailsRestaurant: React.FC<
    BillDetailsRestaurantProps
> = ({
    bookingData,

    restaurantName = 'Currypatta',

    restaurantLocation =
    'Lohamandi, Agra',

    coverChargePerGuest = 10,

    planPrice = 1,

    userName = 'Jitender Kumar',

    userPhone = '+917042341856',

    userEmail =
    'jitenderkumar2929@gmail.com',

    onBack,

    onProceed,

    onClose,
}) => {
        const [
            isTermsExpanded,
            setIsTermsExpanded,
        ] = useState(false);

        // =====================================================
        // CALCULATIONS
        // =====================================================

        const guestsValue =
            bookingData.guests || 2;

        const coverCharge =
            useMemo(() => {
                return (
                    guestsValue *
                    coverChargePerGuest
                );
            }, [
                guestsValue,
                coverChargePerGuest,
            ]);

        const totalPay =
            useMemo(() => {
                return (
                    coverCharge +
                    planPrice
                );
            }, [
                coverCharge,
                planPrice,
            ]);

        // =====================================================
        // VALUES
        // =====================================================

        const dateLabel =
            bookingData.date?.day ||
            'Today';

        const dateValue =
            bookingData.date?.date ||
            '';

        const sessionLabel =
            bookingData.session?.title ||
            'Dinner';

        const sessionValue =
            bookingData.timeSlot?.time ||
            '06:00 PM';

        const offerTitle =
            bookingData.offer?.title ||
            'Restaurant Offer';

        // =====================================================
        // HANDLERS
        // =====================================================

        const handleProceedToPay = () => {
            const details: BillDetails = {
                coverCharge,
                planPrice,
                totalPay,
            };

            console.log("🔥 PROCEED TO PAY CLICKED");
            console.log("🔥 DETAILS:", details);
            console.log("🔥 onProceed:", onProceed);

            if (typeof onProceed === "function") {
                onProceed(details);
            } else {
                console.error(
                    "❌ BillDetailsRestaurant: onProceed is missing"
                );
            }
        };

        const handleToggleTerms = useCallback(() => {
            setIsTermsExpanded((prev) => !prev);
        }, []);

        const handleTermsKeyDown = useCallback(
            (e: React.KeyboardEvent) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleToggleTerms();
                }
            },
            [handleToggleTerms]
        );

        const handleEditContact = useCallback(() => {
            console.log('Edit contact details clicked');
        }, []);

        // =====================================================
        // TERMS LIST
        // =====================================================

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
            "Abiding by government rules, drinks will not be served to patrons under the state's permissible age limit.",
            'Any items ordered that are not included in the offer will be billed on actuals.',
            'The restaurant reserves the right to admission (entry for kids/stags as per restaurant rules).',
            'Government taxes and service charges will be applied, as applicable.',
            'Drinks will be served as per the stock available at the restaurant.',
            'Final payment must be made within 6 hours of the booked slot time to redeem the pre-book offer discount.',
            'A maximum of Rs. 3,00,000 can be paid in a single bill payment transaction while redeeming the pre-book offer.',
        ];

        return (
            <div
                className={
                    styles.modalOverlay
                }
            >
                <div
                    className={
                        styles.billPage
                    }
                    role="dialog"
                    aria-modal="true"
                >
                    {/* HEADER */}

                    <header
                        className={
                            styles.header
                        }
                    >
                        <button
                            type="button"
                            className={
                                styles.backButton
                            }
                            onClick={
                                onBack
                            }
                            aria-label="Go back"
                        >
                            <ArrowLeft
                                size={25}
                            />
                        </button>

                        <div
                            className={
                                styles.headerContent
                            }
                        >
                            <h1>
                                {
                                    restaurantName
                                }
                            </h1>

                            <p>
                                {
                                    restaurantLocation
                                }
                            </p>
                        </div>

                        <button
                            type="button"
                            className={
                                styles.closeButton
                            }
                            onClick={
                                onClose
                            }
                            aria-label="Close"
                        >
                            <X
                                size={22}
                            />
                        </button>
                    </header>

                    {/* CONTENT */}

                    <main
                        className={
                            styles.content
                        }
                    >
                        {/* COVER */}

                        <div
                            className={
                                styles.coverChargeBanner
                            }
                        >
                            <div
                                className={
                                    styles.bannerText
                                }
                            >
                                Your cover charge
                                of{' '}

                                <b>
                                    ₹
                                    {
                                        coverCharge
                                    }
                                </b>{' '}

                                will be redeemed
                                when you pay your
                                bill via Hufko.
                            </div>

                            <Sparkles
                                className={
                                    styles.bannerIcon
                                }
                            />
                        </div>

                        {/* BOOKING */}

                        <div
                            className={
                                styles.bookingCard
                            }
                        >
                            <div
                                className={
                                    styles.dateTimeRow
                                }
                            >
                                <InfoBlock
                                    label={
                                        dateLabel
                                    }
                                    value={
                                        dateValue
                                    }
                                />

                                <InfoBlock
                                    label={
                                        sessionLabel
                                    }
                                    value={
                                        sessionValue
                                    }
                                />

                                <InfoBlock
                                    label={`for ${guestsValue}`}
                                    value="guests"
                                />
                            </div>

                            <div
                                className={
                                    styles.restaurantInfo
                                }
                            >
                                <span
                                    className={
                                        styles.name
                                    }
                                >
                                    {
                                        restaurantName
                                    }
                                </span>

                                <span
                                    className={
                                        styles.address
                                    }
                                >
                                    {
                                        restaurantLocation
                                    }
                                </span>
                            </div>

                            <div
                                className={
                                    styles.offerBadgeWrapper
                                }
                            >
                                <div
                                    className={
                                        styles.offerBadge
                                    }
                                >
                                    Selected Offer
                                </div>

                                <div
                                    className={
                                        styles.offerBox
                                    }
                                >
                                    <span
                                        className={
                                            styles.offerText
                                        }
                                    >
                                        {
                                            offerTitle
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* PLAN */}

                        <div
                            className={
                                styles.onePlanCard
                            }
                        >
                            <div
                                className={
                                    styles.badge
                                }
                            >
                                Special plan added
                                for you
                            </div>

                            <div
                                className={
                                    styles.planHeader
                                }
                            >
                                <span
                                    className={
                                        styles.primeHeader
                                    }
                                >
                                    PRIME
                                </span>

                                <span>
                                    1 Month Plan
                                </span>
                            </div>

                            <p
                                className={
                                    styles.planDescription
                                }
                            >
                                Enjoy unlimited
                                access to offers.
                            </p>

                            <div
                                className={
                                    styles.priceTag
                                }
                            >
                                ₹{planPrice}
                            </div>

                            <button
                                type="button"
                                className={
                                    styles.viewBenefits
                                }
                            >
                                View all benefits

                                <ChevronRight
                                    size={14}
                                />
                            </button>
                        </div>

                        {/* BILL */}

                        <div>
                            <h3
                                className={
                                    styles.sectionTitle
                                }
                            >
                                Bill Details
                            </h3>

                            <div
                                className={
                                    styles.billDetailsCard
                                }
                            >
                                <BillRow
                                    leftContent={
                                        <>
                                            <span
                                                className={
                                                    styles.itemName
                                                }
                                            >
                                                Cover charges
                                                for{' '}
                                                {
                                                    guestsValue
                                                }{' '}
                                                guests
                                            </span>

                                            <span
                                                className={
                                                    styles.itemSubtext
                                                }
                                            >
                                                Redeem while
                                                paying the bill
                                            </span>
                                        </>
                                    }
                                    rightContent={
                                        <span>
                                            ₹
                                            {
                                                coverCharge
                                            }
                                        </span>
                                    }
                                />

                                <BillRow
                                    leftContent={
                                        <div
                                            className={
                                                styles.onePlanRow
                                            }
                                        >
                                            <span
                                                className={
                                                    styles.primeHeader
                                                }
                                            >
                                                PRIME
                                            </span>

                                            <span
                                                className={
                                                    styles.itemName
                                                }
                                            >
                                                1 Month Plan
                                            </span>
                                        </div>
                                    }
                                    rightContent={
                                        <span>
                                            ₹
                                            {
                                                planPrice
                                            }
                                        </span>
                                    }
                                />

                                <div
                                    className={
                                        styles.divider
                                    }
                                />

                                <div
                                    className={
                                        styles.totalRow
                                    }
                                >
                                    <span
                                        className={
                                            styles.totalLabel
                                        }
                                    >
                                        To Pay
                                    </span>

                                    <span
                                        className={
                                            styles.totalAmount
                                        }
                                    >
                                        ₹
                                        {
                                            totalPay
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* CONTACT */}

                        <div
                            className={
                                styles.contactSection
                            }
                        >
                            <h3
                                className={
                                    styles.sectionTitle
                                }
                            >
                                Contact Details
                            </h3>

                            <div
                                className={
                                    styles.contactCard
                                }
                            >
                                <div
                                    className={
                                        styles.contactInfo
                                    }
                                >
                                    <span
                                        className={
                                            styles.contactName
                                        }
                                    >
                                        {
                                            userName
                                        }
                                    </span>

                                    <span
                                        className={
                                            styles.contactPhone
                                        }
                                    >
                                        {
                                            userPhone
                                        }
                                    </span>

                                    <span
                                        className={
                                            styles.contactEmail
                                        }
                                    >
                                        {
                                            userEmail
                                        }
                                    </span>
                                </div>

                                <button
                                    type="button"
                                    className={
                                        styles.editButton
                                    }
                                    aria-label="Edit contact"
                                    onClick={
                                        handleEditContact
                                    }
                                >
                                    <Pencil />
                                </button>
                            </div>
                        </div>

                        {/* TERMS & CONDITIONS */}

                        <div
                            className={
                                styles.termsCard
                            }
                        >
                            <div
                                className={`${styles.termsHeader} ${isTermsExpanded
                                    ? styles.expanded
                                    : ''
                                    }`}
                                onClick={
                                    handleToggleTerms
                                }
                                role="button"
                                tabIndex={0}
                                aria-expanded={
                                    isTermsExpanded
                                }
                                aria-controls="terms-content"
                                onKeyDown={
                                    handleTermsKeyDown
                                }
                            >
                                <span
                                    className={
                                        styles.termsTitle
                                    }
                                >
                                    Offer terms &amp;
                                    conditions
                                </span>

                                <ChevronDown
                                    size={28}
                                    className={
                                        styles.chevronDownIcon
                                    }
                                />
                            </div>

                            <div
                                id="terms-content"
                                className={`${styles.termsContent} ${isTermsExpanded
                                    ? styles.show
                                    : ''
                                    }`}
                            >
                                <ul>
                                    {termsList.map(
                                        (
                                            term,
                                            index
                                        ) => (
                                            <li
                                                key={
                                                    index
                                                }
                                            >
                                                {
                                                    term
                                                }
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>
                    </main>

                    {/* PROCEED */}

                    <div
                        className={
                            styles.bottomAction
                        }
                    >
                        <button
                            type="button"
                            className={
                                styles.proceedButton
                            }
                            onClick={
                                handleProceedToPay
                            }
                        >
                            Proceed to pay ₹
                            {totalPay}
                        </button>
                    </div>
                </div>
            </div>
        );
    };

export default BillDetailsRestaurant;