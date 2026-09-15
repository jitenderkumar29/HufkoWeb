"use client";

import React from "react";
import { ArrowLeft, ChevronRight, Landmark } from "lucide-react";
import styles from "./SelectNetBanking.module.scss";

// Interface for a single bank item
export interface BankItem {
    id: string;
    name: string;
    iconUrl?: string;
}

interface SelectNetBankingProps {
    amount: number;
    popularBanks?: BankItem[];
    allBanks?: BankItem[];
    onBack?: () => void;
    onSelectBank?: (bank: BankItem) => void;
}

const SelectNetBanking: React.FC<SelectNetBankingProps> = ({
    amount,
    popularBanks = [
        {
            id: "hdfc",
            name: "HDFC",
            iconUrl:
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_64/PaymentLogos/paymentIcons/netbanking/hdfc",
        },
        {
            id: "icici",
            name: "ICICI",
            iconUrl:
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_64/PaymentLogos/paymentIcons/netbanking/icici",
        },
        {
            id: "sbi",
            name: "SBI",
            iconUrl:
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_64/PaymentLogos/paymentIcons/netbanking/sbi",
        },
        {
            id: "axis",
            name: "Axis",
            iconUrl:
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_64/PaymentLogos/paymentIcons/netbanking/axis",
        },
        {
            id: "kotak",
            name: "Kotak",
            iconUrl:
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_64/kotak_gjlw24",
        },
    ],
    allBanks = [
        { id: "axis-bank", name: "Axis Bank" },
        { id: "bank-of-india", name: "Bank of India" },
        { id: "bank-of-maharashtra", name: "Bank of Maharashtra" },
        { id: "central-bank", name: "Central Bank Of India" },
        { id: "corporation-bank", name: "Corporation Bank" },
        { id: "development-credit-bank", name: "Development Credit Bank" },
        { id: "federal-bank", name: "Federal Bank" },
        { id: "hdfc-bank", name: "HDFC Bank" },
        { id: "icici-netbanking", name: "ICICI Netbanking" },
        { id: "idbi", name: "Industrial Development Bank of India" },
        { id: "indian-bank", name: "Indian Bank" },
        { id: "indusind-bank", name: "IndusInd Bank" },
        { id: "indian-overseas-bank", name: "Indian Overseas Bank" },
        { id: "jammu-kashmir-bank", name: "Jammu and Kashmir Bank" },
        { id: "karnataka-bank", name: "Karnataka Bank" },
        { id: "karur-vysya", name: "Karur Vysya" },
        { id: "sbbj", name: "State Bank of Bikaner and Jaipur" },
        { id: "sbi", name: "State Bank of India" },
        { id: "state-bank-mysore", name: "State Bank of Mysore" },
        { id: "south-indian-bank", name: "South Indian Bank" },
        { id: "union-bank", name: "Union Bank of India" },
        { id: "united-bank", name: "United Bank Of India" },
        { id: "vijaya-bank", name: "Vijaya Bank" },
        { id: "yes-bank", name: "Yes Bank" },
        { id: "city-union", name: "CityUnion" },
        { id: "canara-bank", name: "Canara Bank" },
        { id: "state-bank-patiala", name: "State Bank of Patiala" },
        { id: "deutsche-bank", name: "Deutsche Bank" },
        { id: "kotak-bank", name: "Kotak Bank" },
        { id: "dhanalaxmi-bank", name: "Dhanalaxmi Bank" },
        { id: "ing-vysya", name: "ING Vysya Bank" },
        { id: "syndicate-bank", name: "Syndicate Bank" },
        { id: "uco-bank", name: "UCO Bank" },
        { id: "allahabad-bank", name: "Allahabad Bank" },
        { id: "janata-sahakari", name: "Janata Sahakari Bank" },
        { id: "lakshmi-vilas", name: "Lakshmi Vilas Bank Retail" },
        { id: "north-kanara", name: "North Kanara GSB" },
        { id: "punjab-sind", name: "Punjab and Sind Bank" },
        { id: "ratnakar-bank", name: "Ratnakar Bank" },
        { id: "rbs", name: "Royal Bank of Scotland" },
        { id: "dena-bank", name: "DENA Bank" },
        { id: "pnb", name: "Punjab National Bank" },
        { id: "standard-chartered", name: "Standard Chartered Bank" },
    ],
    onBack,
    onSelectBank,
}) => {
    const handleBankSelect = (bank: BankItem) => {
        if (onSelectBank) {
            onSelectBank(bank);
        }
    };

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLDivElement>,
        bank: BankItem
    ) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleBankSelect(bank);
        }
    };

    return (
        <div className={styles.modalOverlay}>
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
                    <div className={styles.headerContent}>
                        <h1 className={styles.title}>Select a bank</h1>
                        <div className={styles.subtitle}>To pay: ₹{amount}</div>
                    </div>
                </header>

                {/* Content */}
                <main className={styles.content}>
                    {/* Popular Banks Section */}
                    {popularBanks.length > 0 && (
                        <section>
                            <h2 className={styles.sectionTitle}>Popular Banks</h2>
                            <div className={styles.banksCard}>
                                {popularBanks.map((bank) => (
                                    <div
                                        key={bank.id}
                                        className={styles.bankRow}
                                        onClick={() => handleBankSelect(bank)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => handleKeyDown(e, bank)}
                                    >
                                        <div className={styles.bankIconWrapper}>
                                            {bank.iconUrl ? (
                                                <img
                                                    src={bank.iconUrl}
                                                    alt={bank.name}
                                                    loading="lazy"
                                                />
                                            ) : (
                                                <Landmark size={20} color="#666" />
                                            )}
                                        </div>
                                        <span className={styles.bankName}>
                                            {bank.name}
                                        </span>
                                        <ChevronRight className={styles.chevronIcon} />
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* All Banks Section */}
                    {allBanks.length > 0 && (
                        <section>
                            <h2 className={styles.sectionTitle}>All Banks</h2>
                            <div className={styles.banksCard}>
                                {allBanks.map((bank) => (
                                    <div
                                        key={bank.id}
                                        className={styles.bankRow}
                                        onClick={() => handleBankSelect(bank)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => handleKeyDown(e, bank)}
                                    >
                                        <span className={styles.bankName}>
                                            {bank.name}
                                        </span>
                                        <ChevronRight className={styles.chevronIcon} />
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Empty State */}
                    {popularBanks.length === 0 && allBanks.length === 0 && (
                        <div className={styles.emptyState}>
                            <Landmark />
                            <p>No banks available</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default SelectNetBanking;