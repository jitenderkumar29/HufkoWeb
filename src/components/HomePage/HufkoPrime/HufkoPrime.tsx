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
} from 'lucide-react';
import Image from 'next/image';

const benefits = [
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
        icon: <Star size={24} />, // Stars represent rewards points
        title: '3x Rewards Points',
        description: 'Redeem them for Exclusive Events',
    },
    {
        id: 4,
        icon: <Clock size={24} />, // Clock represents priority/reservation
        title: 'Priority Reservation',
        description: 'At premium restaurants',
    },
    {
        id: 5,
        icon: <Headphones size={24} />, // Headphones represent concierge/support
        title: 'VIP Concierge Line',
        description: 'Priority support 7861004400',
    },
    {
        id: 6,
        icon: <Calendar size={24} />, // Calendar represents events
        title: 'Special Events',
        description: 'With HufkoPoints',
    },
];

const HufkoPrime = () => {
    return (
        <section className={styles.hufkoPrime}>
            {/* Floating Coins */}
            <div className={`${styles.coin} ${styles.coinLeft}`}>
                <Image
                    src="/products/coin_left.png"
                    alt="Prime Coin"
                    fill
                    sizes="110px"
                    priority
                />
            </div>

            <div className={`${styles.coin} ${styles.coinRight}`}>
                <Image
                    src="/products/coin_right.png"
                    alt="Prime Coin"
                    fill
                    sizes="130px"
                    priority
                />
            </div>

            <div className={`${styles.coin} ${styles.coinBottom}`}>
                <Image
                    src="/products/coin_bottom.png"
                    alt="Prime Coin"
                    fill
                    sizes="70px"
                />
            </div>

            {/* Top Curve */}
            <div className={styles.topCurve} />

            {/* Bottom Curve */}
            <div className={styles.bottomCurve} />

            <div className={styles.content}>
                <div className={styles.logoWrapper}>
                    <p className={styles.brand}>HUFKO</p>

                    <h2 className={styles.goldTitle}>PRIME
                        {/* G
            <span className={styles.crownCircle}>
              <Crown size={26} />
            </span>
            LD */}
                    </h2>

                    <p className={styles.subtitle}>
                        India's Top Savings
                        <br />
                        Program for Food Lovers
                    </p>
                </div>

                <div className={styles.heading}>
                    <Star size={14} fill="currentColor" />
                    <span>PRIME BENEFITS</span>
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
            </div>

            {/* Decorative Patterns */}
            <div className={styles.patternLeft} />
            <div className={styles.patternRight} />
        </section>
    );
};

export default HufkoPrime;