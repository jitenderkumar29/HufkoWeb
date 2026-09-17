'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import styles from './PayBillOptions.module.scss';

// ---------- Types ----------
export type PaymentMethod = 'upi' | 'card' | 'wallet' | 'netbanking';

export interface PayBillOptionsProps {
    activeMethod?: PaymentMethod;
    onMethodChange?: (method: PaymentMethod) => void;
    onGenerateQR?: () => void;
    onClose: () => void;
}

// ---------- Sidebar Nav Config ----------
const NAV_ITEMS: {
    id: PaymentMethod;
    label: string;
    subLabel?: string;
    iconSrc: string;
    activeIconSrc?: string;
}[] = [
    { id: 'upi', label: 'UPI', iconSrc: '/products/upi_active.svg', activeIconSrc: '/products/upi_active.svg' },
    { id: 'card', label: 'Add Credit / Debit Card', iconSrc: '/products/card.svg' },
    { id: 'wallet', label: 'Wallets', subLabel: 'Offers available', iconSrc: '/products/wallet.svg' },
    { id: 'netbanking', label: 'Net Banking', iconSrc: '/products/netbanking.svg' },
];

// ---------- Shared Assets ----------
const UPI_APPS = [
    { name: 'PhonePe', src: '/products/jp_phonepe.png' },
    { name: 'Google Pay', src: '/products/jp_googlepay.png' },
    { name: 'Paytm', src: '/products/jp_paytm.png' },
    { name: 'CRED', src: '/products/jp_cred_logo.png' },
    { name: 'Amazon Pay', src: '/products/jp_amazonpay.png' },
    { name: 'BHIM', src: '/products/jp_bhim.png' },
    { name: 'SuperMoney', src: '/products/jp_supermoney.png' },
];

const WALLETS = [
    { name: 'Paytm', src: '/products/jp_paytm.png', offer: 'Up to ₹100 cashback' },
    { name: 'Amazon Pay', src: '/products/jp_amazonpay.png', offer: '5% back on bills' },
    { name: 'PhonePe', src: '/products/jp_phonepe.png', offer: '₹50 instant discount' },
    { name: 'Mobikwik', src: '/products/jp_mobikwik.png', offer: '2% supercash' },
];

const BANKS = [
    { name: 'HDFC Bank', src: '/products/bank_hdfc.png' },
    { name: 'ICICI Bank', src: '/products/bank_icici.png' },
    { name: 'State Bank of India', src: '/products/bank_sbi.png' },
    { name: 'Axis Bank', src: '/products/bank_axis.png' },
    { name: 'Kotak Mahindra', src: '/products/bank_kotak.png' },
    { name: 'Punjab National Bank', src: '/products/bank_pnb.png' },
];

// ============================================================
// SECTION COMPONENTS (all in one file)
// ============================================================

// ---------- UPI Section ----------
function UpiSection({ onGenerateQR }: { onGenerateQR?: () => void }) {
    return (
        <>
            <h2 className={styles.sectionHeading}>Pay by any UPI app</h2>
            <div className={styles.upiRow}>
                <div className={styles.upiTextCol}>
                    <p className={styles.description}>
                        Scan the QR using any UPI app on your mobile phone like PhonePe,
                        Paytm, GooglePay, BHIM, etc
                    </p>

                    <div className={styles.upiApps}>
                        {UPI_APPS.map((app) => (
                            <img
                                key={app.name}
                                src={app.src}
                                alt={app.name}
                                className={styles.appIcon}
                                loading="lazy"
                            />
                        ))}
                    </div>

                    <button
                        type="button"
                        className={styles.generateBtn}
                        onClick={onGenerateQR}
                    >
                        Generate QR Code
                    </button>
                </div>

                <div className={styles.illustration}>
                    <img src="/products/jp_upi_qr_lottie.png" alt="" aria-hidden="true" />
                </div>
            </div>
        </>
    );
}

// ---------- Card Section ----------
function CardSection() {
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');
    const [name, setName] = useState('');
    const [saveCard, setSaveCard] = useState(true);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: hook up card tokenization / payment gateway
        console.log({ cardNumber, expiry, cvv, name, saveCard });
    };

    return (
        <>
            <h2 className={styles.sectionHeading}>Add Credit / Debit Card</h2>

            <form className={styles.cardForm} onSubmit={handleSubmit}>
                <div className={styles.field}>
                    <label htmlFor="cardNumber">Card Number</label>
                    <input
                        id="cardNumber"
                        type="text"
                        inputMode="numeric"
                        placeholder="Enter Card Number"
                        maxLength={19}
                        value={cardNumber}
                        onChange={(e) =>
                            setCardNumber(
                                e.target.value
                                    .replace(/\D/g, '')
                                    .replace(/(.{4})/g, '$1 ')
                                    .trim()
                            )
                        }
                        required
                    />
                </div>

                <div className={styles.fieldRow}>
                    <div className={styles.field}>
                        <label htmlFor="expiry">Expiry</label>
                        <input
                            id="expiry"
                            type="text"
                            placeholder="MM / YY"
                            maxLength={7}
                            value={expiry}
                            onChange={(e) => {
                                const v = e.target.value
                                    .replace(/\D/g, '')
                                    .replace(/(\d{2})(\d{0,2})/, '$1 / $2')
                                    .trim();
                                setExpiry(v);
                            }}
                            required
                        />
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="cvv">CVV</label>
                        <input
                            id="cvv"
                            type="password"
                            inputMode="numeric"
                            placeholder="•••"
                            maxLength={4}
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
                            required
                        />
                    </div>
                </div>

                <div className={styles.field}>
                    <label htmlFor="name">Name on Card</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <label className={styles.checkboxRow}>
                    <input
                        type="checkbox"
                        checked={saveCard}
                        onChange={(e) => setSaveCard(e.target.checked)}
                    />
                    <span>Securely save this card for faster payments</span>
                </label>

                <button type="submit" className={styles.generateBtn}>
                    Add Card
                </button>
            </form>
        </>
    );
}

// ---------- Wallet Section ----------
const WALLET_OPTIONS = [
    {
        id: 'mobikwik',
        name: 'Mobikwik Wallet',
        src: '/products/ic_mobikwik.png',
    },
    {
        id: 'amazonpay',
        name: 'Amazon Pay Balance',
        src: '/products/jp_ic_amazonpay.png',
    },
    {
        id: 'payzapp',
        name: 'PayZapp',
        src: '/products/ic_payzapp.png',
    },
    {
        id: 'phonepe',
        name: 'PhonePe',
        src: '/products/ic_phonepe.png',
    },
    {
        id: 'airtelmoney',
        name: 'Airtel Payments Bank Wallet',
        src: '/products/ic_airtelmoney.png',
    },
    {
        id: 'bajajpay',
        name: 'Bajaj Pay',
        src: '/products/jp_ic_wallet_bajajpay.png',
    },
    {
        id: 'olamoney',
        name: 'Ola Money',
        src: '/products/ic_olamoney.png',
    },
    {
        id: 'yespay',
        name: 'Yes Pay',
        src: '/products/ic_yespay.png',
    },
];

function WalletSection() {
    const [selectedWalletId, setSelectedWalletId] = useState<string>('mobikwik');

    const handleSelect = (id: string) => setSelectedWalletId(id);

    const handlePay = (e: React.MouseEvent, id: string) => {
        e.stopPropagation();
        console.log(`Paying with wallet: ${id}`);
    };

    return (
        <div className={styles.walletContainer}>
            <h2 className={styles.sectionHeading}>Wallets</h2>

            <ul className={styles.walletList}>
                {WALLET_OPTIONS.map((wallet) => {
                    const isSelected = selectedWalletId === wallet.id;

                    return (
                        <li
                            key={wallet.id}
                            className={`${styles.walletItem} ${isSelected ? styles.selected : ''}`}
                            onClick={() => handleSelect(wallet.id)}
                        >
                            <div className={styles.itemHeader}>
                                <div className={styles.leftGroup}>
                                    <div className={styles.walletIconWrap}>
                                        <img src={wallet.src} alt={wallet.name} />
                                    </div>
                                    <span className={styles.walletName}>{wallet.name}</span>
                                </div>

                                <div className={styles.radioWrap}>
                                    <div className={`${styles.radioCircle} ${isSelected ? styles.checked : ''}`}>
                                        {isSelected && <div className={styles.radioInner} />}
                                    </div>
                                </div>
                            </div>

                            {isSelected && (
                                <div className={styles.itemFooter}>
                                    <button
                                        type="button"
                                        className={styles.payBtn}
                                        onClick={(e) => handlePay(e, wallet.id)}
                                    >
                                        Pay ₹2,440
                                    </button>
                                </div>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

// ---------- Net Banking Section ----------
const BANKS_NET_BANKING = [
    {
        id: 'sbi',
        name: 'State Bank of India',
        src: '/products/ic_bank_508548.png',
    },
    {
        id: 'hdfc',
        name: 'HDFC Bank',
        src: '/products/ic_bank_607152.png',
    },
    {
        id: 'icici',
        name: 'ICICI Netbanking',
        src: '/products/ic_bank_508534.png',
    },
    {
        id: 'axis',
        name: 'Axis Bank',
        src: '/products/ic_bank_607153.png',
    },
    {
        id: 'au',
        name: 'AU Small Finance Bank',
        src: '/products/ic_bank_608088.png',
    },
    {
        id: 'airtel',
        name: 'Airtel Payments Bank',
        src: '/products/ic_bank_990288.png',
    },
    {
        id: 'allahabad',
        name: 'Allahabad Bank',
        src: '/products/ic_bank_607117.png',
    },
    {
        id: 'andhra',
        name: 'Andhra Bank',
        src: '/products/ic_bank_607170.png',
    },
    {
        id: 'bandhan',
        name: 'Bandhan Bank',
        src: '/products/ic_bank_508753.png',
    },
    {
        id: 'bbkm',
        name: 'Bank of Bahrain and Kuwait',
        src: '/products/ic_bank_455012.png',
    },
    {
        id: 'bob',
        name: 'Bank of Baroda',
        src: '/products/ic_bank_606985.png',
    },
    {
        id: 'bobcorp',
        name: 'Bank of Baroda Corporate',
        src: '/products/ic_bank_6069851.png',
    },
    {
        id: 'boi',
        name: 'Bank of India',
        src: '/products/ic_bank_508505.png',
    },
    {
        id: 'bom',
        name: 'Bank of Maharashtra',
        src: '/products/ic_bank_607387.png',
    },
    {
        id: 'bharat',
        name: 'Bharat Bank',
        src: '/products/ic_bank_607339.png',
    },
    {
        id: 'canr',
        name: 'Canara Bank',
        src: '/products/ic_bank_508532.png',
    },
    {
        id: 'synb',
        name: 'Canara Bank (e-Syndicate)',
        src: '/products/ic_bank_508508.png',
    },
    {
        id: 'csfb',
        name: 'Capital Small Finance Bank',
        src: '/products/ic_bank_default.png',
    },
    {
        id: 'csb',
        name: 'Catholic Syrian Bank',
        src: '/products/ic_bank_607442.png',
    },
    {
        id: 'cbi',
        name: 'Central Bank Of India',
        src: '/products/ic_bank_607115.png',
    },
    {
        id: 'cub',
        name: 'CityUnion',
        src: '/products/ic_bank_607324.png',
    },
    {
        id: 'corp',
        name: 'Corporation Bank',
        src: '/products/ic_bank_607184.png',
    },
    {
        id: 'cosmos',
        name: 'Cosmos Bank',
        src: '/products/ic_bank_607090.png',
    },
    {
        id: 'dbs',
        name: 'DBS Bank Ltd',
        src: '/products/ic_bank_199641.png',
    },
    {
        id: 'dcb',
        name: 'DCB Bank',
        src: '/products/ic_bank_607290.png',
    },
    {
        id: 'dena',
        name: 'Dena Bank',
        src: '/products/ic_bank_508547.png',
    },
    {
        id: 'deut',
        name: 'Deutsche Bank',
        src: '/products/ic_bank_493541.png',
    },
    {
        id: 'dls',
        name: 'Dhanlaxmi Bank',
        src: '/products/ic_bank_436360.png',
    },
    {
        id: 'equitas',
        name: 'Equitas small finance bank',
        src: '/products/ic_bank_508998.png',
    },
    {
        id: 'fed',
        name: 'Federal Bank',
        src: '/products/ic_bank_607363.png',
    },
    {
        id: 'gppb',
        name: 'Gopinath Parsik bank',
        src: '/products/ic_bank_default1.png',
    },
    {
        id: 'hsbc',
        name: 'HSBC BANK',
        src: '/products/ic_bank_999999.png',
    },
    {
        id: 'icicicorp',
        name: 'ICICI Bank Corporate',
        src: '/products/ic_bank_5085341.png',
    },
    {
        id: 'idbi',
        name: 'IDBI Bank',
        src: '/products/ic_bank_607095.png',
    },
    {
        id: 'idfc',
        name: 'IDFC Bank',
        src: '/products/ic_bank_608117.png',
    },
    {
        id: 'indb',
        name: 'Indian Bank',
        src: '/products/ic_bank_607105.png',
    },
    {
        id: 'iob',
        name: 'Indian Overseas Bank',
        src: '/products/ic_bank_607126.png',
    },
    {
        id: 'indus',
        name: 'IndusInd Bank',
        src: '/products/ic_bank_607189.png',
    },
    {
        id: 'jnk',
        name: 'Jammu and Kashmir Bank',
        src: '/products/ic_bank_607440.png',
    },
    {
        id: 'jsfb',
        name: 'Jana Small Finance Bank',
        src: '/products/ic_bank_506286.png',
    },
    {
        id: 'jsb',
        name: 'Janata Sahakari Bank',
        src: '/products/ic_bank_607158.png',
    },
    {
        id: 'karn',
        name: 'Karnataka Bank',
        src: '/products/ic_bank_607270.png',
    },
    {
        id: 'kvb',
        name: 'Karur Vysya',
        src: '/products/ic_bank_607100.png',
    },
    {
        id: 'kvbcorp',
        name: 'Karur Vysya Corporate Banking',
        src: '/products/ic_bank_6071001.png',
    },
    {
        id: 'kotak',
        name: 'Kotak Bank',
        src: '/products/ic_bank_607420.png',
    },
    {
        id: 'lvb',
        name: 'Lakshmi Vilas Bank Retail',
        src: '/products/ic_bank_607058.png',
    },
    {
        id: 'nkgsbcop',
        name: 'NKGSB COOPERATIVE BANK',
        src: '/products/ic_bank_default1.png',
    },
    {
        id: 'nkgsb',
        name: 'North Kanara GSB',
        src: '/products/ic_bank_525847.png',
    },
    {
        id: 'obc',
        name: 'Oriental Bank Of Commerce',
        src: '/products/ic_bank_515948.png',
    },
    {
        id: 'paytm',
        name: 'Paytm Payments Bank',
        src: '/products/ic_bank_608032.png',
    },
    {
        id: 'pnbcorp',
        name: 'Punjab National Bank Corporate',
        src: '/products/ic_bank_508568.png',
    },
    {
        id: 'pnb',
        name: 'Punjab National Bank Retail',
        src: '/products/ic_bank_5085681.png',
    },
    {
        id: 'pnjsb',
        name: 'Punjab and Sind Bank',
        src: '/products/ic_bank_607087.png',
    },
    {
        id: 'rbl',
        name: 'RBL',
        src: '/products/ic_bank_607393.png',
    },
    {
        id: 'rbs',
        name: 'Royal Bank of Scotland',
        src: '/products/ic_bank_606060.png',
    },
    {
        id: 'sarasb',
        name: 'Saraswat Bank',
        src: '/products/ic_bank_652150.png',
    },
    {
        id: 'svcb',
        name: 'Shamrao Vithal Coop Bank',
        src: '/products/ic_bank_607258.png',
    },
    {
        id: 'shivsfb',
        name: 'Shivalik Small Finance Bank Ltd',
        src: '/products/ic_bank_default1.png',
    },
    {
        id: 'soib',
        name: 'South Indian Bank',
        src: '/products/ic_bank_607167.png',
    },
    {
        id: 'scb',
        name: 'Standard Chartered Bank',
        src: '/products/ic_bank_607394.png',
    },
    {
        id: 'sbbj',
        name: 'State Bank of Bikaner and Jaipur',
        src: '/products/ic_bank_607214.png',
    },
    {
        id: 'sbh',
        name: 'State Bank of Hyderabad',
        src: '/products/ic_bank_508548.png',
    },
    {
        id: 'sbp',
        name: 'State Bank of Patiala',
        src: '/products/ic_bank_508548.png',
    },
    {
        id: 'ssfb',
        name: 'Suryoday Small Finance Bank',
        src: '/products/ic_bank_326666.png',
    },
    {
        id: 'tmb',
        name: 'Tamilnad Mercantile Bank',
        src: '/products/ic_bank_607187.png',
    },
    {
        id: 'ucob',
        name: 'UCO Bank',
        src: '/products/ic_bank_607066.png',
    },
    {
        id: 'usfb',
        name: 'Ujjivan Small Finance Bank',
        src: '/products/ic_bank_default1.png',
    },
    {
        id: 'ubicorp',
        name: 'Union Bank Corporate',
        src: '/products/ic_bank_508500.png',
    },
    {
        id: 'ubi',
        name: 'Union Bank of India',
        src: '/products/ic_bank_508500.png',
    },
    {
        id: 'unib',
        name: 'United Bank Of India',
        src: '/products/ic_bank_607028.png',
    },
    {
        id: 'vjyb',
        name: 'Vijaya Bank',
        src: '/products/ic_bank_607075.png',
    },
    {
        id: 'yesb',
        name: 'Yes Bank',
        src: '/products/ic_bank_607223.png',
    },
];

function NetBankingSection() {
    const [query, setQuery] = useState('');
    const [selectedBankId, setSelectedBankId] = useState<string>('sbi');

    const filteredBanks = BANKS_NET_BANKING.filter((b) =>
        b.name.toLowerCase().includes(query.toLowerCase())
    );

    const handleSelect = (id: string) => {
        setSelectedBankId(id);
    };

    const handlePay = (e: React.MouseEvent, id: string) => {
        e.stopPropagation();
        console.log(`Initiating payment for bank: ${id}`);
    };

    return (
        <div className={styles.nbContainer}>
            <h2 className={styles.sectionHeading}>Net Banking</h2>

            <div className={styles.searchWrapper}>
                <input
                    type="search"
                    className={styles.bankSearch}
                    placeholder="Search banks"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>

            <ul className={styles.bankList}>
                {filteredBanks.length === 0 && (
                    <li className={styles.bankEmpty}>No banks found</li>
                )}

                {filteredBanks.map((bank) => {
                    const isSelected = selectedBankId === bank.id;

                    return (
                        <li
                            key={bank.id}
                            className={styles.bankItem}
                            onClick={() => handleSelect(bank.id)}
                        >
                            <div className={styles.itemHeader}>
                                <div className={styles.leftGroup}>
                                    <div className={styles.bankIconWrap}>
                                        <img src={bank.src} alt={bank.name} />
                                    </div>
                                    <span className={styles.bankName}>{bank.name}</span>
                                </div>

                                <div className={styles.radioWrap}>
                                    <div className={`${styles.radioCircle} ${isSelected ? styles.checked : ''}`}>
                                        {isSelected && <div className={styles.radioInner} />}
                                    </div>
                                </div>
                            </div>

                            {isSelected && (
                                <div className={styles.itemFooter}>
                                    <button
                                        type="button"
                                        className={styles.payBtn}
                                        onClick={(e) => handlePay(e, bank.id)}
                                    >
                                        Pay ₹2,440
                                    </button>
                                </div>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

// ============================================================
// MAIN COMPONENT
// ============================================================
export default function PayBillOptions({
    activeMethod = 'upi',
    onMethodChange,
    onGenerateQR,
    onClose,
}: PayBillOptionsProps) {
    const [selected, setSelected] = useState<PaymentMethod>(activeMethod);

    useEffect(() => {
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, []);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) onClose();
    };

    const handleSelect = (method: PaymentMethod) => {
        setSelected(method);
        onMethodChange?.(method);
    };

    const renderSection = () => {
        switch (selected) {
            case 'upi':
                return <UpiSection onGenerateQR={onGenerateQR} />;
            case 'card':
                return <CardSection />;
            case 'wallet':
                return <WalletSection />;
            case 'netbanking':
                return <NetBankingSection />;
            default:
                return null;
        }
    };

    return (
        <div className={styles.overlay} onClick={handleOverlayClick}>
            <div className={styles.card}>
                {/* Close button — top right corner */}
                <button
                    type="button"
                    className={styles.closeButton}
                    onClick={onClose}
                    aria-label="Close"
                >
                    <X />
                </button>

                <div className={styles.layout}>
                    {/* ---------- Sidebar ---------- */}
                    <nav className={styles.sidebar}>
                        <div className={styles.navList} role="tablist">
                            {NAV_ITEMS.map((item) => {
                                const isActive = selected === item.id;
                                const src =
                                    isActive && item.activeIconSrc
                                        ? item.activeIconSrc
                                        : item.iconSrc;

                                return (
                                    <button
                                        key={item.id}
                                        type="button"
                                        role="tab"
                                        aria-selected={isActive}
                                        className={`${styles.navItem} ${
                                            isActive ? styles.active : ''
                                        }`}
                                        onClick={() => handleSelect(item.id)}
                                    >
                                        <span className={styles.navIcon}>
                                            <Image
                                                src={src}
                                                alt=""
                                                width={24}
                                                height={24}
                                                aria-hidden="true"
                                            />
                                        </span>

                                        <span className={styles.navContent}>
                                            <span className={styles.navLabel}>
                                                {item.label}
                                            </span>
                                            {item.subLabel && (
                                                <span className={styles.navOffer}>
                                                    {item.subLabel}
                                                </span>
                                            )}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        <div className={styles.sidebarFooter}>
                            <Image
                                src="/products/jp_juspay_brand.png"
                                alt="Juspay"
                                width={100}
                                height={16}
                                className={styles.juspayBrand}
                                unoptimized
                            />
                        </div>
                    </nav>

                    {/* ---------- Right Content ---------- */}
                    <main className={styles.content}>{renderSection()}</main>
                </div>
            </div>
        </div>
    );
}