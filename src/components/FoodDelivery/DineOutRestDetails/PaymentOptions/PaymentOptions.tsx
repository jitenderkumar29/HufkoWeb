'use client';

import React from 'react';
import styles from './PaymentOptions.module.scss';

import {
    ArrowLeft,
    Plus,
    Wallet,
    Landmark,
    ChevronRight,
} from 'lucide-react';

interface PaymentOptionsProps {
    amount: number;
    onBack?: () => void;
    onAddCard?: () => void;
    onWalletClick?: () => void;
    onNetbankingClick?: () => void;
}

const PaymentOptions: React.FC<PaymentOptionsProps> = ({
    amount,
    onBack,
    onAddCard,
    onWalletClick,
    onNetbankingClick,
}) => {
    const PaymentCard = ({
        icon,
        title,
        subtitle,
        onClick,
        isAddCard = false,
    }: {
        icon: React.ReactNode;
        title: string;
        subtitle: string;
        onClick?: () => void;
        isAddCard?: boolean;
    }) => {
        const handleKeyDown = (
            e: React.KeyboardEvent<HTMLButtonElement>
        ) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onClick?.();
            }
        };

        return (
            <button
                type="button"
                className={`${styles.card} ${isAddCard
                        ? styles.addCard
                        : styles.paymentOption
                    }`}
                onClick={onClick}
                onKeyDown={handleKeyDown}
            >
                <div className={styles.iconWrapper}>
                    {icon}
                </div>

                <div className={styles.textWrapper}>
                    <div className={styles.cardTitle}>
                        {title}
                    </div>

                    <div className={styles.cardSubtitle}>
                        {subtitle}
                    </div>
                </div>

                {!isAddCard && (
                    <div className={styles.arrowWrapper}>
                        <ChevronRight />
                    </div>
                )}
            </button>
        );
    };

    return (
        <div
            className={
                styles.modalOverlay
            }
        >
            <div className={styles.container}>
                {/* Header */}
                <header className={styles.header}>
                    <button
                        type="button"
                        className={styles.backButton}
                        onClick={onBack}
                        aria-label="Go Back"
                    >
                        <ArrowLeft />
                    </button>

                    <div className={styles.titleContainer}>
                        <h1 className={styles.title}>
                            Payment Options
                        </h1>

                        <div className={styles.subtitle}>
                            To pay: ₹{amount}
                        </div>
                    </div>
                </header>

                {/* Content */}
                <main className={styles.content}>
                    {/* Credit & Debit Cards */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            Credit & Debit cards
                        </h2>

                        <PaymentCard
                            isAddCard
                            icon={<Plus />}
                            title="Add New Card"
                            subtitle="Save and Pay via Cards."
                            onClick={onAddCard}
                        />
                    </section>

                    {/* More Payment Options */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            More Payment Options
                        </h2>

                        <PaymentCard
                            icon={<Wallet />}
                            title="Wallets"
                            subtitle="PhonePe, Amazon Pay & more"
                            onClick={onWalletClick}
                        />

                        <PaymentCard
                            icon={<Landmark />}
                            title="Netbanking"
                            subtitle="Select from a list of banks"
                            onClick={onNetbankingClick}
                        />
                    </section>
                </main>
            </div>
        </div>
    );
};

export default PaymentOptions;