'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from './ApplyCouponSuccess.module.scss';

export interface ApplyCouponSuccessProps {
    /** Amount saved, e.g. 720 */
    savedAmount: number;
    /** Applied coupon code, e.g. "HSBCTAJ1500" */
    couponCode: string;
    /** Card / bank name to show under code, e.g. "HSBC Bank Card" */
    bankName?: string;
    /** URL for the badge image that appears on top of the card.
     *  Must start with "/" to resolve from the Next.js `public` folder root. */
    badgeImageSrc?: string;
    /** Called when user dismisses (clicks WOW!, backdrop, or ESC) */
    onClose: () => void;
}

const formatCurrency = (val: number) =>
    new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0,
    })
        .format(val)
        .replace('INR', '₹');

export default function ApplyCouponSuccess({
    savedAmount,
    couponCode,
    bankName,
    // ✅ Leading slash is REQUIRED for Next.js public assets
    badgeImageSrc = '/products/coupon-badge.svg',
    onClose,
}: ApplyCouponSuccessProps) {
    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    // Close on overlay (backdrop) click
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) onClose();
    };

    return (
        <div className={styles.overlay} onClick={handleOverlayClick}>
            <div className={styles.card}>
                {/* Percentage Badge Image */}
                <div className={styles.badge} aria-hidden="true">
                    <Image
                        src={'/products/coupon-badges.png'}
                        alt=""
                        width={72}
                        height={72}
                        priority
                    />
                   
                        <span className={styles.badgeText}>%</span>
                
                </div>

                {/* Content */}
                <div className={styles.content}>
                    <p className={styles.savedText}>
                        Woohoo! You saved an Extra {formatCurrency(savedAmount)}
                    </p>

                    <p className={styles.codeApplied}>
                        {couponCode} Applied!
                    </p>

                    {bankName && (
                        <p className={styles.bankNote}>
                            Pay using {bankName}
                        </p>
                    )}
                </div>

                {/* Dotted divider */}
                <div className={styles.dividerDotted} />

                {/* Wow CTA */}
                <button
                    type="button"
                    className={styles.wowButton}
                    onClick={onClose}
                    aria-label="Dismiss coupon success"
                >
                    WOW!
                </button>
            </div>
        </div>
    );
}