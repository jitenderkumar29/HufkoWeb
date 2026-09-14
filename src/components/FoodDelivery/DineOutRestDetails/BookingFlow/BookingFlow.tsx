"use client";

import React, { useState } from "react";

import BookTablePopUp, {
    BookingDate,
    BookingOffer,
    MealSession,
    TimeSlot,
} from "../BookTablePopUp/BookTablePopUp";

import BillDetailsRestaurant from "../BillDetailsRestaurant/BillDetailsRestaurant";

import ReviewBookingDetails, {
    BookingReviewData,
} from "../ReviewBookingDetails/ReviewBookingDetails";

import PaymentOptions from "../PaymentOptions/PaymentOptions";

// =====================================================
// TYPES
// =====================================================

export interface BookingData {
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

type BookingStep =
    | "select"
    | "bill"
    | "review"
    | "payment";

export interface BookingFlowProps {
    restaurantName?: string;
    restaurantLocation?: string;
    restaurantImage?: string;
    restaurantAddress?: string;

    coverChargePerGuest?: number;
    planPrice?: number;

    userName?: string;
    userPhone?: string;
    userEmail?: string;

    onComplete?: (
        bookingData: BookingData,
        billDetails: BillDetails
    ) => void;

    onClose?: () => void;
}

// =====================================================
// COMPONENT
// =====================================================

const BookingFlow: React.FC<BookingFlowProps> = ({
    restaurantName = "Currypatta",

    restaurantLocation = "Lohamandi, Agra",

    restaurantImage =
        "https://dt4l9bx31tioh.cloudfront.net/eazymedia/restaurant/713841/restaurant06a0428f46c977.jpeg?width=818&height=450&mode=fit&format=auto&quality=80",

    restaurantAddress = "Lohamandi, Agra",

    coverChargePerGuest = 10,

    planPrice = 1,

    userName = "Jitender Kumar",

    userPhone = "+917042341856",

    userEmail = "jitenderkumar2929@gmail.com",

    onComplete,

    onClose,
}) => {
    // =================================================
    // STATE
    // =================================================

    const [step, setStep] =
        useState<BookingStep>("select");

    const [bookingData, setBookingData] =
        useState<BookingData | null>(null);

    const [billDetails, setBillDetails] =
        useState<BillDetails | null>(null);

    // =================================================
    // STEP 1 → STEP 2
    // =================================================

    const handleProceedFromSelect = (
        data: BookingData
    ) => {
        console.log(
            "🟢 BOOK TABLE → BILL DETAILS",
            data
        );

        setBookingData(data);
        setStep("bill");
    };

    // =================================================
    // STEP 2 → STEP 3
    // =================================================

    const handleProceedFromBill = (
        details: BillDetails
    ) => {
        console.log(
            "🔥 BILL DETAILS → REVIEW",
            details
        );

        // Save bill information
        setBillDetails(details);

        // Move to Review screen
        setStep("review");
    };

    // =================================================
    // STEP 3 → STEP 4
    // =================================================

    const handleProceedFromReview = () => {
        console.log(
            "🟢 REVIEW → PAYMENT"
        );

        setStep("payment");
    };

    // =================================================
    // BACK: BILL → SELECT
    // =================================================

    const handleBackFromBill = () => {
        console.log(
            "🔵 BILL → BOOK TABLE"
        );

        setStep("select");
    };

    // =================================================
    // BACK: REVIEW → BILL
    // =================================================

    const handleBackFromReview = () => {
        console.log(
            "🔵 REVIEW → BILL DETAILS"
        );

        setStep("bill");
    };

    // =================================================
    // BACK: PAYMENT → REVIEW
    // =================================================

    const handleBackFromPayment = () => {
        console.log(
            "🔵 PAYMENT → REVIEW"
        );

        setStep("review");
    };

    // =================================================
    // PAYMENT COMPLETE
    // =================================================

    const handlePaymentComplete = () => {
        console.log(
            "🟢 PAYMENT COMPLETED"
        );

        if (
            !bookingData ||
            !billDetails
        ) {
            console.error(
                "❌ Booking data or bill details are missing",
                {
                    bookingData,
                    billDetails,
                }
            );

            return;
        }

        onComplete?.(
            bookingData,
            billDetails
        );
    };

    // =================================================
    // REVIEW DATA
    // =================================================

    const reviewData: BookingReviewData | null =
        bookingData
            ? {
                restaurantName,

                restaurantAddress,

                restaurantImage,

                date: bookingData.date
                    ? `${bookingData.date.day}, ${bookingData.date.date}`
                    : "Today",

                time:
                    bookingData.timeSlot?.time ||
                    "06:00 PM",

                guests:
                    bookingData.guests,

                userName,

                userPhone,

                userEmail,

                restaurantOffer:
                    bookingData.offer
                        ? {
                            title:
                                bookingData.offer.title,

                            subtext:
                                bookingData.offer.subtitle ||
                                "Book & Pay to Claim",
                        }
                        : undefined,

                paymentOffers: [
                    {
                        id: "1",

                        logo:
                            "https://dt4l9bx31tioh.cloudfront.net/eazymedia/settings/payment/indus-ind-3x.png?format=auto&quality=80",

                        name:
                            "EazyDiner IndusInd Bank Card",

                        discount:
                            "25% off upto ₹1000",
                    },

                    {
                        id: "2",

                        logo:
                            "https://via.placeholder.com/100x60?text=Axis",

                        name:
                            "Axis Bank",

                        discount:
                            "Flat ₹1000 off",
                    },

                    {
                        id: "3",

                        logo:
                            "https://via.placeholder.com/100x60?text=HDFC",

                        name:
                            "HDFC Bank Credit Card",

                        discount:
                            "10% off upto ₹1500",
                    },
                ],
            }
            : null;

    // =================================================
    // DEBUG
    // =================================================

    console.log(
        "🔄 BOOKING FLOW RENDER:",
        {
            step,
            bookingData,
            billDetails,
        }
    );

    // =================================================
    // STEP 4: PAYMENT
    // =================================================

    if (
        step === "payment" &&
        billDetails
    ) {
        return (
            <PaymentOptions
                key="payment"
                amount={
                    billDetails.totalPay
                }
                onBack={
                    handleBackFromPayment
                }
                onAddCard={
                    handlePaymentComplete
                }
                onWalletClick={
                    handlePaymentComplete
                }
                onNetbankingClick={
                    handlePaymentComplete
                }
            />
        );
    }

    // =================================================
    // STEP 3: REVIEW
    // =================================================

    if (
        step === "review" &&
        reviewData
    ) {
        return (
            <ReviewBookingDetails
                key="review"
                data={reviewData}
                onBack={
                    handleBackFromReview
                }
                onProceed={
                    handleProceedFromReview
                }
                onEditContact={() => {
                    console.log(
                        "Edit contact clicked"
                    );
                }}
            />
        );
    }

    // =================================================
    // STEP 2: BILL DETAILS
    // =================================================

    if (
        step === "bill" &&
        bookingData
    ) {
        return (
            <BillDetailsRestaurant
                key="bill"
                bookingData={
                    bookingData
                }
                restaurantName={
                    restaurantName
                }
                restaurantLocation={
                    restaurantLocation
                }
                coverChargePerGuest={
                    coverChargePerGuest
                }
                planPrice={
                    planPrice
                }
                userName={
                    userName
                }
                userPhone={
                    userPhone
                }
                userEmail={
                    userEmail
                }
                onBack={
                    handleBackFromBill
                }
                onProceed={
                    handleProceedFromBill
                }
                onClose={
                    onClose
                }
            />
        );
    }

    // =================================================
    // STEP 1: BOOK TABLE
    // =================================================

    return (
        <BookTablePopUp
            key="select"
            restaurantName={
                restaurantName
            }
            restaurantLocation={
                restaurantLocation
            }
            onBack={
                onClose
            }
            onClose={
                onClose
            }
            onProceed={
                handleProceedFromSelect
            }
        />
    );
};

export default BookingFlow;