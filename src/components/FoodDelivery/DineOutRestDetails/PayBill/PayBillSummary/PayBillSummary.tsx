'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, Info, X } from 'lucide-react'; // ← add X
import styles from './PayBillSummary.module.scss';
import ApplyCouponSuccess from '../ApplyCouponSuccess/ApplyCouponSuccess';

export interface PaymentSummaryData {
    totalBill: number;
    convenienceFee: number;
    restaurantDiscount: number;
    restaurantDiscountPercent: number;
    youPaid: number;
    savings: number;
}

export interface BestCoupon {
    bankLogoUrl: string;
    saveAmount: number;
    couponCode: string;
    bankName?: string;
}

export interface PayBillSummaryProps {
    restaurantName: string;
    location: string;
    originalAmount: string;
    finalAmount: string;
    paymentSummary: PaymentSummaryData;
    bestCoupon?: BestCoupon;
    onBack: () => void;
    onClose?: () => void; // ← add this
    onApplyCoupon?: () => void;
    onRemoveCoupon?: () => void;
    onViewAllCoupons?: () => void;
    onSelectPayment: () => void;
}

const TICKET_PATH =
    'M 16 0 L 584 0 A 16 16 0 0 1 600 16 L 600 21 A 7 7 0 0 0 600 35 L 600 48 A 7 7 0 0 0 600 62 L 600 76 A 7 7 0 0 0 600 90 L 600 94 A 16 16 0 0 1 584 110 L 16 110 A 16 16 0 0 1 0 94 L 0 90 A 7 7 0 0 0 0 76 L 0 62 A 7 7 0 0 0 0 48 L 0 35 A 7 7 0 0 0 0 21 L 0 16 A 16 16 0 0 1 16 0 Z';

const formatCurrency = (val: number) =>
    new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0,
    })
        .format(val)
        .replace('INR', '₹');

export default function PayBillSummary({
    restaurantName,
    location,
    originalAmount,
    finalAmount,
    paymentSummary,
    bestCoupon,
    onBack,
    onClose, // ← add this
    onApplyCoupon,
    onRemoveCoupon,
    onViewAllCoupons,
    onSelectPayment,
}: PayBillSummaryProps) {
    const [isCouponApplied, setIsCouponApplied] = useState(false);
    const [showApplySuccess, setShowApplySuccess] = useState(false);

    const currentSummary = useMemo<PaymentSummaryData>(() => {
        if (!isCouponApplied || !bestCoupon) {
            return paymentSummary;
        }

        const extraSave = bestCoupon.saveAmount;
        const newYouPaid = Math.max(0, paymentSummary.youPaid - extraSave);

        return {
            ...paymentSummary,
            youPaid: newYouPaid,
            savings: paymentSummary.savings + extraSave,
        };
    }, [isCouponApplied, bestCoupon, paymentSummary]);

    const displayedFinalAmount = formatCurrency(currentSummary.youPaid);

    // --- Handlers ---
    const handleApplyCoupon = () => {
        if (!bestCoupon || isCouponApplied) return;

        setIsCouponApplied(true);
        onApplyCoupon?.();
        setShowApplySuccess(true);
    };

    const handleRemoveCoupon = () => {
        setIsCouponApplied(false);
        setShowApplySuccess(false);
        onRemoveCoupon?.();
    };

    const handleSelectPayment = () => {
        onSelectPayment();
    };

    const handleClose = () => {
        if (showApplySuccess) return; // don't close while success modal is open
        if (onClose) {
            onClose();
        } else {
            onBack?.();
        }
    };

    // --- Effects ---
    useEffect(() => {
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, []);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && !showApplySuccess) onBack();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onBack, showApplySuccess]);

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget && !showApplySuccess) onBack();
    };

    return (
        <>
            <div className={styles.modalOverlay} onClick={handleOverlayClick}>
                <div className={styles.container}>
                    <div className={styles.scrollArea}>
                        {/* Header */}
                        <header className={styles.header}>
                            <button
                                className={styles.backButton}
                                onClick={onBack}
                                aria-label="Go back"
                            >
                                <ArrowLeft />
                            </button>

                            <div className={styles.headerInfo}>
                                <h1 className={styles.title}>{restaurantName}</h1>
                                <p className={styles.subtitle}>{location}</p>
                            </div>

                            {/* Close button */}
                            <button
                                type="button"
                                className={styles.closeButton}
                                onClick={handleClose}
                                aria-label="Close"
                            >
                                <X />
                            </button>
                        </header>

                        {/* Orange Banner */}
                        <div className={styles.orangeBanner}>
                            <h2 className={styles.restaurantName}>{restaurantName}</h2>
                            <p className={styles.restaurantLocation}>{location}</p>

                            <p className={styles.billLabel}>Your Bill</p>
                            <p className={styles.originalAmount}>{originalAmount}</p>
                            <p className={styles.finalAmount}>{displayedFinalAmount}</p>
                        </div>

                        {/* Body */}
                        <div className={styles.body}>
                            {/* Best Coupon Section */}
                            {bestCoupon && (
                                <div>
                                    <p className={styles.sectionTitle}>
                                        Best coupon for you
                                    </p>

                                    <div className={styles.ticketWrapper}>
                                        <svg
                                            className={styles.ticketSvg}
                                            viewBox="0 0 600 110"
                                            preserveAspectRatio="none"
                                        >
                                            <path
                                                d={TICKET_PATH}
                                                fill="white"
                                                stroke="#E2E2E2"
                                                strokeWidth="1"
                                            />
                                        </svg>
                                        <div className={styles.ticketInner}>
                                            <div className={styles.ticketHeader}>
                                                <div className={styles.leftHeader}>
                                                    <img
                                                        src={bestCoupon.bankLogoUrl}
                                                        alt="Bank"
                                                        className={styles.bankLogo}
                                                    />
                                                    <p className={styles.saveText}>
                                                        Save {formatCurrency(bestCoupon.saveAmount)}
                                                    </p>
                                                </div>

                                                {!isCouponApplied ? (
                                                    <button
                                                        className={styles.applyBtn}
                                                        onClick={handleApplyCoupon}
                                                    >
                                                        Apply
                                                    </button>
                                                ) : (
                                                    <button
                                                        className={styles.removeBtn}
                                                        onClick={handleRemoveCoupon}
                                                    >
                                                        Remove
                                                    </button>
                                                )}
                                            </div>
                                            <div className={styles.dividerDotted} />
                                            <span className={styles.couponCode}>
                                                {bestCoupon.couponCode}
                                            </span>
                                        </div>
                                    </div>

                                    <div className={styles.viewAllCoupons}>
                                        <a onClick={onViewAllCoupons}>
                                            View all coupons
                                        </a>
                                    </div>
                                </div>
                            )}

                            {/* Payment Summary */}
                            <div>
                                <p className={styles.sectionTitle}>Payment Summary</p>

                                <div className={styles.summaryCard}>
                                    <div className={`${styles.row} ${styles.bold}`}>
                                        <span>Total Bill</span>
                                        <span>{formatCurrency(currentSummary.totalBill)}</span>
                                    </div>

                                    <div className={`${styles.row} ${styles.muted}`}>
                                        <div className={styles.infoIconWrapper}>
                                            <span>Convenience Fee</span>
                                            <Info className={styles.infoIcon} size={15} />
                                        </div>
                                        <span>{formatCurrency(currentSummary.convenienceFee)}</span>
                                    </div>

                                    <div className={`${styles.row} ${styles.success}`}>
                                        <span>
                                            Restaurant Discount ({currentSummary.restaurantDiscountPercent}%)
                                        </span>
                                        <span>
                                            - {formatCurrency(currentSummary.restaurantDiscount)}
                                        </span>
                                    </div>

                                    {isCouponApplied && bestCoupon && (
                                        <div className={`${styles.row} ${styles.success}`}>
                                            <span>
                                                Coupon Discount ({bestCoupon.couponCode})
                                            </span>
                                            <span>
                                                - {formatCurrency(bestCoupon.saveAmount)}
                                            </span>
                                        </div>
                                    )}

                                    <div className={styles.divider} />

                                    <div className={`${styles.row} ${styles.bold}`}>
                                        <span>You Paid</span>
                                        <span>{formatCurrency(currentSummary.youPaid)}</span>
                                    </div>

                                    <div className={styles.savingsBox}>
                                        🥳 You'll save approximately
                                        <span className={styles.savingsAmount}>
                                            {formatCurrency(currentSummary.savings)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sticky Footer */}
                    <footer className={styles.footer}>
                        <button
                            className={styles.payButton}
                            onClick={handleSelectPayment}
                        >
                            <span className={styles.payText}>
                                Select Payment Option
                            </span>
                            <span className={styles.paySub}>
                                ({displayedFinalAmount})
                            </span>
                        </button>
                    </footer>
                </div>
            </div>

            {/* Apply Coupon Success Modal */}
            {showApplySuccess && bestCoupon && (
                <ApplyCouponSuccess
                    savedAmount={bestCoupon.saveAmount}
                    couponCode={bestCoupon.couponCode}
                    bankName={bestCoupon.bankName ?? 'HSBC Bank Card'}
                    badgeImageSrc="/products/coupon-badges.png"
                    onClose={() => setShowApplySuccess(false)}
                />
            )}
        </>
    );
}