'use client';

import React, { useState } from 'react';
import BookTablePopUp, { BookingDate, BookingOffer, MealSession, TimeSlot } from '../BookTablePopUp/BookTablePopUp';
import BillDetailsRestaurant from '../BillDetailsRestaurant/BillDetailsRestaurant';


export interface BookingData {
    guests: number;
    date?: BookingDate;
    session?: MealSession;
    timeSlot?: TimeSlot;
    offer?: BookingOffer;
}

interface BookingFlowProps {
    restaurantName?: string;
    restaurantLocation?: string;
    onComplete?: (data: BookingData) => void;
    onClose?: () => void;
}

export default function BookingFlow({
    restaurantName = 'Currypatta',
    restaurantLocation = 'Lohamandi, Agra',
    onComplete,
    onClose,
}: BookingFlowProps) {
    const [step, setStep] = useState<'select' | 'bill'>('select');
    const [bookingData, setBookingData] = useState<BookingData | null>(null);

    const handleProceed = (data: BookingData) => {
        setBookingData(data);
        setStep('bill');
    };

    const handleBackFromBill = () => {
        setStep('select');
    };

    if (step === 'bill' && bookingData) {
        return (
            <BillDetailsRestaurant
                bookingData={bookingData}
                restaurantName={restaurantName}
                onBack={handleBackFromBill}
                onProceed={() => onComplete?.(bookingData)}
                onClose={onClose}
            />
        );
    }

    return (
        <BookTablePopUp
            restaurantName={restaurantName}
            restaurantLocation={restaurantLocation}
            onProceed={handleProceed}
            onClose={onClose}
        />
    );
}