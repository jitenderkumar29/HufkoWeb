'use client';

import React, {
    useState,
} from 'react';

import styles from './ReviewBookingDetails.module.scss';

import {
    ArrowLeft,
    Calendar,
    Clock,
    Pencil,
    Tag,
    Users,
    X,
} from 'lucide-react';

// =====================================================
// TYPES
// =====================================================

export interface BookingReviewData {
    restaurantName: string;
    restaurantAddress: string;
    restaurantImage: string;

    date: string;
    time: string;
    guests: number;

    userName: string;
    userPhone: string;
    userEmail: string;

    restaurantOffer?: {
        title: string;
        subtext: string;
    };

    paymentOffers?: Array<{
        id: string;
        logo: string;
        name: string;
        discount: string;
    }>;
}

interface ReviewBookingDetailsProps {
    data: BookingReviewData;

    onBack?: () => void;

    onProceed?: () => void;

    onEditContact?: () => void;

    onClose?: () => void;
}

// =====================================================
// COMPONENT
// =====================================================

const ReviewBookingDetails: React.FC<
    ReviewBookingDetailsProps
> = ({
    data,
    onBack,
    onProceed,
    onEditContact,
    onClose
}) => {
        const [
            activeOfferIndex,
            setActiveOfferIndex,
        ] = useState(0);

        const paymentOffers =
            data.paymentOffers || [];

        const activeOffer =
            paymentOffers[
            activeOfferIndex
            ];

        const handleNextOffer = () => {
            if (
                paymentOffers.length === 0
            ) {
                return;
            }

            setActiveOfferIndex(
                (prev) =>
                    (prev + 1) %
                    paymentOffers.length
            );
        };

        // =====================================================
        // STEP 3 → STEP 4
        // =====================================================

        const handleProceed = () => {
            console.log(
                'STEP 3 → STEP 4'
            );

            // THIS SWITCHES
            // ReviewBookingDetails → PaymentOptions

            onProceed?.();
        };

        const handleClose = () => {
            onClose?.();
        };

        return (
            <div
                className={
                    styles.modalOverlay
                }
            >
                <div
                    className={
                        styles.container
                    }
                >
                    {/* HEADER */}

                    {/* HEADER */}
                    <header className={styles.header}>
                        <button
                            type="button"
                            className={styles.backButton}
                            onClick={onBack}
                            aria-label="Go Back"
                        >
                            <ArrowLeft />
                        </button>

                        <h1 className={styles.title}>
                            Review Booking Details
                        </h1>

                        <button
                            type="button"
                            className={styles.closeButton}
                            onClick={handleClose}
                            aria-label="Close"
                        >
                            <X />
                        </button>
                    </header>

                    {/* CONTENT */}

                    <main
                        className={
                            styles.content
                        }
                    >
                        {/* RESTAURANT */}

                        <div
                            className={
                                styles.card
                            }
                        >
                            <div
                                className={
                                    styles.restaurantHeader
                                }
                            >
                                <div
                                    className={
                                        styles.restaurantInfo
                                    }
                                >
                                    <h2
                                        className={
                                            styles.restaurantName
                                        }
                                    >
                                        {
                                            data.restaurantName
                                        }
                                    </h2>

                                    <p
                                        className={
                                            styles.restaurantAddress
                                        }
                                    >
                                        {
                                            data.restaurantAddress
                                        }
                                    </p>
                                </div>

                                <img
                                    src={
                                        data.restaurantImage
                                    }
                                    alt={
                                        data.restaurantName
                                    }
                                    className={
                                        styles.restaurantImage
                                    }
                                />
                            </div>

                            {/* META */}

                            <div
                                className={
                                    styles.bookingMeta
                                }
                            >
                                <div
                                    className={
                                        styles.metaItem
                                    }
                                >
                                    <div
                                        className={
                                            styles.metaLabel
                                        }
                                    >
                                        <Calendar />

                                        <span>
                                            Date
                                        </span>
                                    </div>

                                    <div
                                        className={
                                            styles.metaValue
                                        }
                                    >
                                        {data.date}
                                    </div>
                                </div>

                                <div
                                    className={
                                        styles.metaItem
                                    }
                                >
                                    <div
                                        className={
                                            styles.metaLabel
                                        }
                                    >
                                        <Clock />

                                        <span>
                                            Time
                                        </span>
                                    </div>

                                    <div
                                        className={
                                            styles.metaValue
                                        }
                                    >
                                        {data.time}
                                    </div>
                                </div>

                                <div
                                    className={
                                        styles.metaItem
                                    }
                                >
                                    <div
                                        className={
                                            styles.metaLabel
                                        }
                                    >
                                        <Users />

                                        <span>
                                            Guests
                                        </span>
                                    </div>

                                    <div
                                        className={
                                            styles.metaValue
                                        }
                                    >
                                        {
                                            data.guests
                                        }
                                    </div>
                                </div>
                            </div>

                            <div
                                className={
                                    styles.userDetails
                                }
                            >
                                <div
                                    className={
                                        styles.userName
                                    }
                                >
                                    {
                                        data.userName
                                    }
                                </div>

                                <div
                                    className={
                                        styles.userPhone
                                    }
                                >
                                    {
                                        data.userPhone
                                    }
                                </div>
                            </div>
                        </div>

                        {/* OFFERS */}

                        <div>
                            <h2
                                className={
                                    styles.sectionTitle
                                }
                            >
                                <Tag />

                                Offers Selected
                            </h2>

                            <div
                                className={
                                    styles.card
                                }
                            >
                                <div
                                    className={
                                        styles.offersContainer
                                    }
                                >
                                    {/* RESTAURANT OFFER */}

                                    {data.restaurantOffer && (
                                        <div
                                            className={
                                                styles.offerBlock
                                            }
                                        >
                                            <div
                                                className={
                                                    styles.offerLabel
                                                }
                                            >
                                                Restaurant Offer
                                            </div>

                                            <h3
                                                className={
                                                    styles.offerTitle
                                                }
                                            >
                                                {
                                                    data
                                                        .restaurantOffer
                                                        .title
                                                }
                                            </h3>

                                            <ul
                                                className={
                                                    styles.offerSubtext
                                                }
                                            >
                                                <li>
                                                    {
                                                        data
                                                            .restaurantOffer
                                                            .subtext
                                                    }
                                                </li>
                                            </ul>
                                        </div>
                                    )}

                                    {/* PAYMENT OFFER */}

                                    {activeOffer && (
                                        <div
                                            className={
                                                styles.offerBlock
                                            }
                                        >
                                            <div
                                                className={
                                                    styles.offerLabel
                                                }
                                            >
                                                Payment Offer
                                            </div>

                                            <div
                                                className={
                                                    styles.paymentOfferWrapper
                                                }
                                            >
                                                <button
                                                    type="button"
                                                    className={
                                                        styles.paymentCard
                                                    }
                                                    onClick={
                                                        handleNextOffer
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            styles.paymentLogoWrapper
                                                        }
                                                    >
                                                        <img
                                                            src={
                                                                activeOffer.logo
                                                            }
                                                            alt={
                                                                activeOffer.name
                                                            }
                                                        />
                                                    </div>

                                                    <div
                                                        className={
                                                            styles.paymentInfo
                                                        }
                                                    >
                                                        <div
                                                            className={
                                                                styles.paymentName
                                                            }
                                                        >
                                                            {
                                                                activeOffer.name
                                                            }
                                                        </div>

                                                        <div
                                                            className={
                                                                styles.paymentDiscount
                                                            }
                                                        >
                                                            {
                                                                activeOffer.discount
                                                            }
                                                        </div>
                                                    </div>
                                                </button>

                                                <div
                                                    className={
                                                        styles.carouselIndicator
                                                    }
                                                >
                                                    <span
                                                        className={
                                                            styles.carouselCount
                                                        }
                                                    >
                                                        {activeOfferIndex +
                                                            1}
                                                        /
                                                        {
                                                            paymentOffers.length
                                                        }
                                                    </span>

                                                    <div
                                                        className={
                                                            styles.dotsWrapper
                                                        }
                                                    >
                                                        {paymentOffers.map(
                                                            (
                                                                _,
                                                                index
                                                            ) => (
                                                                <button
                                                                    key={
                                                                        index
                                                                    }
                                                                    type="button"
                                                                    className={`${styles.dot
                                                                        } ${index ===
                                                                            activeOfferIndex
                                                                            ? styles.active
                                                                            : ''
                                                                        }`}
                                                                    onClick={() =>
                                                                        setActiveOfferIndex(
                                                                            index
                                                                        )
                                                                    }
                                                                />
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* CONTACT */}

                        <div>
                            <h2
                                className={
                                    styles.sectionTitle
                                }
                            >
                                Contact Details
                            </h2>

                            <div
                                className={
                                    styles.contactCard
                                }
                            >
                                <div
                                    className={
                                        styles.contactHeader
                                    }
                                >
                                    <span
                                        className={
                                            styles.contactName
                                        }
                                    >
                                        {
                                            data.userName
                                        }
                                    </span>

                                    <button
                                        type="button"
                                        className={
                                            styles.editButton
                                        }
                                        onClick={
                                            onEditContact
                                        }
                                        aria-label="Edit contact details"
                                    >
                                        <Pencil />
                                    </button>
                                </div>

                                <div
                                    className={
                                        styles.contactDetail
                                    }
                                >
                                    {
                                        data.userPhone
                                    }
                                </div>

                                <div
                                    className={
                                        styles.contactDetail
                                    }
                                >
                                    {
                                        data.userEmail
                                    }
                                </div>
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
                                handleProceed
                            }
                        >
                            Proceed
                        </button>
                    </div>
                </div>
            </div>
        );
    };

export default ReviewBookingDetails;