"use client";

import React from "react";
import { ArrowLeft, Wallet } from "lucide-react";
import styles from "./WalletForPayment.module.scss";

// Interface for a single wallet item
export interface WalletItem {
    id: string;
    name: string;
    iconUrl: string;
    isLinked?: boolean; // Determines button text and style
    onLink?: () => void;
}

interface WalletForPaymentProps {
    amount: number;
    wallets?: WalletItem[];
    onBack?: () => void;
    onLinkWallet?: (wallet: WalletItem) => void;
}

const WalletForPayment: React.FC<WalletForPaymentProps> = ({
    amount,
    wallets = [
        {
            id: "phonepe",
            name: "PhonePe",
            iconUrl:
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_64/PaymentLogos/paymentIcons/wallets/phonepe",
            isLinked: false,
        },
        // You can add more wallets here (e.g., Paytm, Amazon Pay)
        // {
        //   id: "paytm",
        //   name: "Paytm",
        //   iconUrl: "https://example.com/paytm.png",
        //   isLinked: true,
        // },
    ],
    onBack,
    onLinkWallet,
}) => {

    const handleLinkClick = (wallet: WalletItem) => {
        if (wallet.isLinked) return; // Do nothing if already linked
        if (onLinkWallet) {
            onLinkWallet(wallet);
        }
    };

    return (
        <div className={styles.modalOverlay} >
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
                        <h1 className={styles.title}>Select a wallet</h1>
                        <div className={styles.subtitle}>To pay: ₹{amount}</div>
                    </div>
                </header>

                {/* Content */}
                <main className={styles.content}>
                    {wallets.length === 0 ? (
                        <div className={styles.emptyState}>
                            <Wallet />
                            <p>No wallets available</p>
                        </div>
                    ) : (
                        wallets.map((wallet) => (
                            <div key={wallet.id} className={styles.walletCard}>
                                <div className={styles.walletInfo}>
                                    <div className={styles.iconWrapper}>
                                        <img
                                            src={wallet.iconUrl}
                                            alt={wallet.name}
                                            loading="lazy"
                                        />
                                    </div>
                                    <span className={styles.walletName}>{wallet.name}</span>
                                </div>

                                <button
                                    type="button"
                                    className={`${styles.actionButton} ${wallet.isLinked ? styles.linked : ""
                                        }`}
                                    onClick={() => handleLinkClick(wallet)}
                                    disabled={wallet.isLinked}
                                    aria-label={
                                        wallet.isLinked
                                            ? `${wallet.name} is linked`
                                            : `Link ${wallet.name} account`
                                    }
                                >
                                    {wallet.isLinked ? "Linked" : "Link Account"}
                                </button>
                            </div>
                        ))
                    )}
                </main>
            </div>
        </div>
    );
};

export default WalletForPayment;