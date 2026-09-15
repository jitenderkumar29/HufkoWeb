"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { ArrowLeft, Check } from "lucide-react";
import styles from "./AddCardForPayment.module.scss";

interface AddCardForPaymentProps {
    amount?: number;
    onBack?: () => void;
    onProceed?: (data: CardData) => void;
}

export interface CardData {
    cardNumber: string;
    expiry: string;
    cvv: string;
    name: string;
    nickname: string;
    secure: boolean;
}

const AddCardForPayment: React.FC<AddCardForPaymentProps> = ({
    amount = 21,
    onBack,
    onProceed,
}) => {
    const [formData, setFormData] = useState<CardData>({
        cardNumber: "",
        expiry: "",
        cvv: "",
        name: "",
        nickname: "",
        secure: false,
    });

    const [errors, setErrors] = useState<Partial<Record<keyof CardData, string>>>({});

    // Helper to format card number (adds spaces every 4 digits)
    const formatCardNumber = (value: string) => {
        const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
        const matches = v.match(/\d{4,16}/g);
        const match = (matches && matches[0]) || "";
        const parts = [];

        for (let i = 0, len = match.length; i < len; i += 4) {
            parts.push(match.substring(i, i + 4));
        }

        if (parts.length) {
            return parts.join(" ");
        } else {
            return v;
        }
    };

    // Helper to format expiry (MM/YY)
    const formatExpiry = (value: string) => {
        const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
        if (v.length >= 2) {
            return `${v.slice(0, 2)}/${v.slice(2, 4)}`;
        }
        return v;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        let formattedValue = value;

        if (name === "cardNumber") {
            formattedValue = formatCardNumber(value);
        } else if (name === "expiry") {
            formattedValue = formatExpiry(value);
        } else if (name === "cvv") {
            formattedValue = value.replace(/[^0-9]/g, "").slice(0, 4);
        }

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : formattedValue,
        }));

        // Clear error when user types
        if (errors[name as keyof CardData]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const validate = (): boolean => {
        const newErrors: Partial<Record<keyof CardData, string>> = {};

        if (formData.cardNumber.replace(/\s/g, "").length < 16) {
            newErrors.cardNumber = "Invalid card number";
        }
        if (formData.expiry.length < 5) {
            newErrors.expiry = "Invalid expiry";
        }
        if (formData.cvv.length < 3) {
            newErrors.cvv = "Invalid CVV";
        }
        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const isFormValid =
        formData.cardNumber.replace(/\s/g, "").length >= 16 &&
        formData.expiry.length === 5 &&
        formData.cvv.length >= 3 &&
        formData.name.trim().length > 0;

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (validate() && onProceed) {
            onProceed(formData);
        }
    };

    return (
        <div className={ styles.modalOverlay } >
            <div className={styles.container}>
                {/* Header */}
                <header className={styles.header}>
                    <button
                        className={styles.backButton}
                        onClick={onBack}
                        aria-label="Go Back"
                        type="button"
                    >
                        <ArrowLeft />
                    </button>
                    <div className={styles.headerContent}>
                        <h1 className={styles.title}>Add New Card</h1>
                        <div className={styles.subtitle}>To pay: ₹{amount}</div>
                    </div>
                </header>

                {/* Form Content */}
                <form className={styles.content} onSubmit={handleSubmit}>

                    {/* Card Number */}
                    <div className={styles.inputGroup}>
                        <input
                            type="tel"
                            id="cardNumber"
                            name="cardNumber"
                            className={styles.input}
                            value={formData.cardNumber}
                            onChange={handleChange}
                            placeholder=" "
                            maxLength={19}
                            autoComplete="cc-number"
                        />
                        <label htmlFor="cardNumber" className={styles.label}>
                            Card Number
                        </label>
                    </div>

                    {/* Expiry and CVV Row */}
                    <div className={styles.row}>
                        <div className={`${styles.inputGroup} ${styles.col}`}>
                            <input
                                type="tel"
                                id="expiry"
                                name="expiry"
                                className={styles.input}
                                value={formData.expiry}
                                onChange={handleChange}
                                placeholder=" "
                                maxLength={5}
                                autoComplete="cc-exp"
                            />
                            <label htmlFor="expiry" className={styles.label}>
                                Valid Through (MM/YY)
                            </label>
                        </div>
                        <div className={`${styles.inputGroup} ${styles.col}`}>
                            <input
                                type="password"
                                id="cvv"
                                name="cvv"
                                className={styles.input}
                                value={formData.cvv}
                                onChange={handleChange}
                                placeholder=" "
                                maxLength={4}
                                autoComplete="cc-csc"
                                inputMode="numeric"
                            />
                            <label htmlFor="cvv" className={styles.label}>
                                CVV
                            </label>
                        </div>
                    </div>

                    {/* Name on Card */}
                    <div className={styles.inputGroup}>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className={styles.input}
                            value={formData.name}
                            onChange={handleChange}
                            placeholder=" "
                            maxLength={50}
                            autoComplete="cc-name"
                        />
                        <label htmlFor="name" className={styles.label}>
                            Name on Card
                        </label>
                    </div>

                    {/* Nickname */}
                    <div className={styles.inputGroup}>
                        <input
                            type="text"
                            id="nickname"
                            name="nickname"
                            className={styles.input}
                            value={formData.nickname}
                            onChange={handleChange}
                            placeholder=" "
                            maxLength={50}
                        />
                        <label htmlFor="nickname" className={styles.label}>
                            Card Nickname (for easy identification)
                        </label>
                    </div>

                    {/* Secure Checkbox */}
                    <label className={styles.checkboxContainer}>
                        <input
                            type="checkbox"
                            name="secure"
                            className={styles.checkboxInput}
                            checked={formData.secure}
                            onChange={handleChange}
                        />
                        <div className={styles.customCheckbox}>
                            <Check strokeWidth={3} />
                        </div>
                        <span className={styles.checkboxText}>
                            Secure this card. <span>Why is it important?</span>
                        </span>
                    </label>

                </form>

                {/* Footer / Proceed Button */}
                <footer className={styles.footer}>
                    <button
                        type="submit"
                        className={styles.proceedButton}
                        disabled={!isFormValid}
                        onClick={handleSubmit}
                    >
                        Proceed
                    </button>
                </footer>
            </div>
        </div>
    );
};

export default AddCardForPayment;