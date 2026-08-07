'use client';

import React from 'react';
import styles from './HufkoPrime.module.scss';
import {
    Crown,
    Star,
    Bike,
    BadgePercent,
    Clock,
    Headphones,
    Calendar,
    ChevronRight,
} from 'lucide-react';
import Image from 'next/image';

export interface Benefit {
    id: number;
    icon: React.ReactNode;
    title: string;
    description: string;
}

export interface HufkoPrimeProps {
    /** Custom benefits array - if not provided, uses default benefits */
    benefits?: Benefit[];
    /** Brand name displayed at the top */
    brandName?: string;
    /** Main title (e.g., "PRIME") */
    title?: string;
    /** Subtitle text */
    subtitle?: string;
    /** Section heading text (e.g., "PRIME BENEFITS") */
    headingText?: string;
    /** Text for the "More" button */
    moreButtonText?: string;
    /** URL for the "More" button */
    moreButtonUrl?: string;
    /** Function to handle "More" button click */
    onMoreClick?: () => void;
    /** Additional CSS class for the section */
    className?: string;
    /** Custom coin images */
    coinImages?: {
        left?: string;
        right?: string;
        bottom?: string;
    };
    /** Show/hide decorative patterns */
    showPatterns?: boolean;
    /** Show/hide curves */
    showCurves?: boolean;
}

export const defaultBenefits: Benefit[] = [
    {
        id: 1,
        icon: <Bike size={24} />,
        title: 'Free Delivery',
        description: 'At all restaurants within 7 km',
    },
    {
        id: 2,
        icon: <BadgePercent size={24} />,
        title: 'Up to 30% extra off',
        description: 'At 20,000+ partner restaurants',
    },
    {
        id: 3,
        icon: <Star size={24} />,
        title: '3x Rewards Points',
        description: 'Redeem them for Exclusive Events',
    },
    {
        id: 4,
        icon: <Clock size={24} />,
        title: 'Priority Reservation',
        description: 'At premium restaurants',
    },
    {
        id: 5,
        icon: <Headphones size={24} />,
        title: 'VIP Concierge Line',
        description: 'Priority support 7861004400',
    },
    {
        id: 6,
        icon: <Calendar size={24} />,
        title: 'Special Events',
        description: 'With HufkoPoints',
    },
];

const HufkoPrime: React.FC<HufkoPrimeProps> = ({
    benefits = defaultBenefits,
    brandName = 'HUFKO',
    title = 'PRIME',
    subtitle = "India's Top Savings\nProgram for Hufko Lovers",
    headingText = 'PRIME BENEFITS',
    moreButtonText = 'More',
    moreButtonUrl,
    onMoreClick,
    className = '',
    coinImages = {
        left: '/icons/coin_left.png',
        right: '/icons/coin_right.png',
        bottom: '/icons/coin_bottom.png',
    },
    showPatterns = true,
    showCurves = true,
}) => {
    const handleMoreClick = () => {
        if (onMoreClick) {
            onMoreClick();
        } else if (moreButtonUrl) {
            window.location.href = moreButtonUrl;
        }
    };

    return (
        <section className={`${styles.hufkoPrime} ${className}`}>
            {/* Floating Coins */}
            <div className={`${styles.coin} ${styles.coinLeft}`}>
                <Image
                    src={coinImages.left || '/icons/coin_left.png'}
                    alt="Prime Coin"
                    fill
                    sizes="110px"
                    priority
                />
            </div>

            <div className={`${styles.coin} ${styles.coinRight}`}>
                <Image
                    src={coinImages.right || '/icons/coin_right.png'}
                    alt="Prime Coin"
                    fill
                    sizes="130px"
                    priority
                />
            </div>

            <div className={`${styles.coin} ${styles.coinBottom}`}>
                <Image
                    src={coinImages.bottom || '/icons/coin_bottom.png'}
                    alt="Prime Coin"
                    fill
                    sizes="70px"
                />
            </div>

            {/* Curves */}
            {showCurves && (
                <>
                    <div className={styles.topCurve} />
                    <div className={styles.bottomCurve} />
                </>
            )}

            <div className={styles.content}>
                <div className={styles.logoWrapper}>
                    <p className={styles.brand}>{brandName}</p>

                    <h2 className={styles.goldTitle}>{title}</h2>

                    <p className={styles.subtitle}>
                        {subtitle.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                {index < subtitle.split('\n').length - 1 && <br />}
                            </React.Fragment>
                        ))}
                    </p>
                </div>

                <div className={styles.heading}>
                    <Star size={14} fill="currentColor" />
                    <span>{headingText}</span>
                    <Star size={14} fill="currentColor" />
                </div>

                <div className={styles.benefits}>
                    {benefits.map((item) => (
                        <div key={item.id} className={styles.benefitCard}>
                            <div className={styles.iconBox}>{item.icon}</div>

                            <div>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* More Button */}
                {(moreButtonText || moreButtonUrl || onMoreClick) && (
                    <div className={styles.moreButtonWrapper}>
                        <button 
                            className={styles.moreButton}
                            onClick={handleMoreClick}
                            aria-label={moreButtonText || 'View more benefits'}
                        >
                            <span>{moreButtonText}</span>
                            <ChevronRight size={20} />
                        </button>
                    </div>
                )}
            </div>

            {/* Decorative Patterns */}
            {showPatterns && (
                <>
                    <div className={styles.patternLeft} />
                    <div className={styles.patternRight} />
                </>
            )}
        </section>
    );
};

export default HufkoPrime;