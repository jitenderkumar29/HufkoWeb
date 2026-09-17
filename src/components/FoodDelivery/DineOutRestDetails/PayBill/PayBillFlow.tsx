'use client';

import React, { useState } from 'react';
import PayBillAmount, { OfferPayBillInterface } from './PayBillAmount/PayBillAmount';
import PayBillSummary, {
    PaymentSummaryData,
    BestCoupon,
} from './PayBillSummary/PayBillSummary';
import PayBillOptions, { PaymentMethod } from './PayBillOptions/PayBillOptions';

export interface PayBillFlowProps {
    restaurantName: string;
    location: string;
    restaurantOffers: OfferPayBillInterface[];
    addonOffers: OfferPayBillInterface[];
    bestCoupon?: BestCoupon;
    /** Called when user closes the entire flow */
    onClose: () => void;
    /** Called when user completes the flow (from PayBillOptions) */
    onSelectPayment: (finalAmount: number, method?: PaymentMethod) => void;
}

// Internal steps
type FlowStep = 'amount' | 'summary' | 'options';

export default function PayBillFlow({
    restaurantName,
    location,
    restaurantOffers,
    addonOffers,
    bestCoupon,
    onClose,
    onSelectPayment,
}: PayBillFlowProps) {
    // --- State ---
    const [step, setStep] = useState<FlowStep>('amount');
    const [billAmount, setBillAmount] = useState<string>('');
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('upi');

    // --- Derived Data for Summary ---
    const numericAmount = Number(billAmount) || 0;
    const discountPercent = 20;
    const restaurantDiscount = Math.round((numericAmount * discountPercent) / 100);
    const convenienceFee = 120;
    const youPaid = Math.max(0, numericAmount - restaurantDiscount + convenienceFee);
    const savings = restaurantDiscount;

    const originalAmount = `₹${numericAmount.toLocaleString('en-IN')}`;
    const finalAmount = `₹${youPaid.toLocaleString('en-IN')}`;

    const paymentSummaryData: PaymentSummaryData = {
        totalBill: numericAmount,
        convenienceFee: convenienceFee,
        restaurantDiscount: restaurantDiscount,
        restaurantDiscountPercent: discountPercent,
        youPaid: youPaid,
        savings: savings,
    };

    // --- Handlers ---
    const handleAmountContinue = (amount: string) => {
        setBillAmount(amount);
        setStep('summary');
    };

    const handleSummaryBack = () => {
        setStep('amount');
    };

    // ✅ Summary "Select Payment Option" → open options step
    const handleSelectPayment = () => {
        setStep('options');
    };

    // ✅ Back from options → return to summary
    const handleOptionsBack = () => {
        setStep('summary');
    };

    // ✅ Final action (e.g. generate QR, pay, etc.)
    const handleGenerateQR = () => {
        console.log('Generating QR for method:', paymentMethod);
        onSelectPayment(youPaid, paymentMethod);
    };

    const handleCloseFlow = () => {
        onClose?.();  // parent-provided close (unmounts the flow)
    };

    // --- Render ---
    if (step === 'amount') {
        return (
            <PayBillAmount
                restaurantName={restaurantName}
                location={location}
                restaurantOffers={restaurantOffers}
                addonOffers={addonOffers}
                initialAmount={billAmount}
                onBack={onClose}
                onContinue={handleAmountContinue}
                onClose={onClose}
            />
        );
    }

    if (step === 'summary') {
        return (
            <PayBillSummary
                restaurantName={restaurantName}
                location={location}
                originalAmount={originalAmount}
                finalAmount={finalAmount}
                paymentSummary={paymentSummaryData}
                bestCoupon={bestCoupon}
                onBack={handleSummaryBack}
                onClose={onClose}
                onApplyCoupon={() => console.log('Coupon applied')}
                onViewAllCoupons={() => console.log('View all coupons')}
                onSelectPayment={handleSelectPayment}
            />
        );
    }

    // step === 'options'
    return (
        <PayBillOptions
            activeMethod={paymentMethod}
            onMethodChange={setPaymentMethod}
            onGenerateQR={handleGenerateQR}
            onClose={handleCloseFlow}
        />
    );
}