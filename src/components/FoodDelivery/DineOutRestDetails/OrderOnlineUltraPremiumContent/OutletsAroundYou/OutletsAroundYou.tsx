"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronDown, ChevronRight, Check, X } from "lucide-react";

import styles from "./OutletsAroundYou.module.scss";

/* =========================================================
   TYPES
========================================================= */

export interface Outlet {
    id: string;
    name: string;
    rating: number;
    deliveryTime: string;   // "40-45 mins"
    distanceKm: number;     // 9.1
    /** Optional status line under the metadata */
    notice?: string;        // "Not accepting orders for this outlet in your location"
    /** Whether this outlet is the currently-selected one */
    isCurrent?: boolean;
    /** Availability state — affects styling */
    state?: "available" | "unavailable" | "closed";
}

interface OutletsAroundYouProps {
    /** Text or node shown inside the trigger button */
    trigger: React.ReactNode;
    /** The currently selected outlet (highlighted card at top) */
    currentOutlet: Outlet;
    /** Everything else, rendered under "Other Outlets Around You" */
    otherOutlets: Outlet[];
    /** Called when the user picks another outlet */
    onSelect?: (outlet: Outlet) => void;
}

/* =========================================================
   STAR SVG (matches Swiggy's green star chip)
========================================================= */

function RatingStar({ size = 16 }: { size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
        >
            <circle
                cx="8"
                cy="8"
                r="7.2"
                fill="url(#StoreRatingGradient)"
            />
            <path
                d="M8.06524 10.292C8.02495 10.2683 7.97496 10.2683 7.93466 10.292L5.85313 11.5174C5.54781 11.6972 5.1768 11.4206 5.26191 11.0766L5.8205 8.81958C5.83239 8.77154 5.81567 8.72094 5.77751 8.68943L3.96412 7.19223C3.68661 6.96312 3.82918 6.51269 4.18797 6.48497L6.58754 6.29955C6.63517 6.29587 6.67685 6.2661 6.69578 6.22223L7.63269 4.05109C7.77165 3.72907 8.22825 3.72907 8.36722 4.05109L9.30412 6.22223C9.32305 6.2661 9.36473 6.29587 9.41237 6.29955L11.8119 6.48497C12.1707 6.51269 12.3133 6.96312 12.0358 7.19223L10.2224 8.68943C10.1842 8.72094 10.1675 8.77154 10.1794 8.81958L10.738 11.0766C10.8231 11.4205 10.4521 11.6972 10.1468 11.5174L8.06524 10.292Z"
                fill="white"
            />
            <defs>
                <linearGradient
                    id="StoreRatingGradient"
                    x1="8"
                    y1="0.8"
                    x2="8"
                    y2="15.2"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#21973B" />
                    <stop offset="1" stopColor="#128540" />
                </linearGradient>
            </defs>
        </svg>
    );
}

/* =========================================================
   COMPONENT
========================================================= */

export default function OutletsAroundYou({
    trigger,
    currentOutlet,
    otherOutlets,
    onSelect,
}: OutletsAroundYouProps) {
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const dialogRef = useRef<HTMLDivElement>(null);

    /* Portal target only exists on the client */
    useEffect(() => {
        setMounted(true);
    }, []);

    /* Close on Escape */
    useEffect(() => {
        if (!open) return;

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [open]);

    /* Lock body scroll while open */
    useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [open]);

    const dialog = (
        <>
            <div
                className={styles.backdrop}
                onClick={() => setOpen(false)}
                aria-hidden="true"
            />

            <div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-label="Outlets around you"
                className={styles.dialog}
            >
                <button
                    type="button"
                    className={styles.closeBtn}
                    onClick={() => setOpen(false)}
                    aria-label="Close"
                >
                    <X size={14} />
                </button>

                {/* ---- Current outlet ---- */}
                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>Current Outlet</h3>

                    <button
                        type="button"
                        className={`${styles.outletCard} ${styles.outletCardCurrent}`}
                        aria-label={`Current outlet: ${currentOutlet.name}`}
                    >
                        <div className={styles.outletHeader}>
                            <span className={styles.outletName}>
                                {currentOutlet.name}
                            </span>

                            <span className={styles.checkIcon}>
                                <Check size={14} strokeWidth={3} />
                            </span>
                        </div>

                        <div className={styles.outletMeta}>
                            <RatingStar />
                            <span className={styles.metaText}>
                                {currentOutlet.rating} •{" "}
                                {currentOutlet.deliveryTime} •{" "}
                                {currentOutlet.distanceKm} km
                            </span>
                        </div>

                        {/* {currentOutlet.notice && (
                            <p className={styles.notice}>
                                {currentOutlet.notice}
                            </p>
                        )} */}
                    </button>
                </div>

                {/* ---- Other outlets ---- */}
                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>
                        Other Outlets Around You
                    </h3>

                    <div className={styles.outletList}>
                        {otherOutlets.map((outlet) => {
                            const isDisabled =
                                outlet.state === "unavailable" ||
                                outlet.state === "closed";

                            return (
                                <button
                                    key={outlet.id}
                                    type="button"
                                    disabled={isDisabled}
                                    onClick={() => {
                                        onSelect?.(outlet);
                                        setOpen(false);
                                    }}
                                    className={`${styles.outletCard} ${
                                        isDisabled ? styles.outletCardMuted : ""
                                    }`}
                                    aria-label={`Select outlet: ${outlet.name}`}
                                >
                                    <div className={styles.outletHeader}>
                                        <span className={styles.outletName}>
                                            {outlet.name}
                                        </span>

                                        <span className={styles.chevron}>
                                            <ChevronRight size={20} />
                                        </span>
                                    </div>

                                    <div className={styles.outletMeta}>
                                        <RatingStar />
                                        <span className={styles.metaText}>
                                            {outlet.rating} •{" "}
                                            {outlet.deliveryTime} •{" "}
                                            {outlet.distanceKm} km
                                        </span>
                                    </div>

                                    {outlet.notice && (
                                        <p className={styles.notice}>
                                            {outlet.notice}
                                        </p>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );

    return (
        <div className={styles.wrapper}>
            {/* Trigger */}
            <button
                type="button"
                className={styles.trigger}
                onClick={() => setOpen((v) => !v)}
                aria-haspopup="dialog"
                aria-expanded={open}
            >
                {trigger}
                <ChevronDown
                    size={18}
                    className={`${styles.chevronTrigger} ${
                        open ? styles.chevronTriggerOpen : ""
                    }`}
                />
            </button>

            {/* Portal into body so no ancestor can clip / reposition it */}
            {open && mounted
                ? createPortal(dialog, document.body)
                : null}
        </div>
    );
}