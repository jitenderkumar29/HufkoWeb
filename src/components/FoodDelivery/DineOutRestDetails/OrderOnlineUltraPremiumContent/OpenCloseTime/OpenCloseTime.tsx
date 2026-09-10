"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, X } from "lucide-react";

import styles from "./OpenCloseTime.module.scss";

type Day =
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";

type Timings = Record<Day, string>;

interface OpenCloseTimeProps {
    trigger: React.ReactNode;
    timings?: Partial<Timings>;
    align?: "left" | "right"; // kept for backwards-compat; ignored now
}

const DEFAULT_TIMINGS: Timings = {
    Monday: "Midnight – 6.00AM, 10.00AM – Midnight",
    Tuesday: "Midnight – 6.00AM, 10.00AM – Midnight",
    Wednesday: "Midnight – 6.00AM, 10.00AM – Midnight",
    Thursday: "Midnight – 6.00AM, 10.00AM – Midnight",
    Friday: "Midnight – 6.00AM, 10.00AM – Midnight",
    Saturday: "Midnight – 6.00AM, 10.00AM – Midnight",
    Sunday: "Midnight – 6.00AM, 10.00AM – Midnight",
};

const DAYS: Day[] = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

export default function OpenCloseTime({
    trigger,
    timings,
}: OpenCloseTimeProps) {
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const schedule: Timings = { ...DEFAULT_TIMINGS, ...timings };

    const today = new Date().toLocaleDateString("en-US", {
        weekday: "long",
    }) as Day;

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

    return (
        <div className={styles.wrapper} ref={wrapperRef}>
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
                    className={`${styles.chevron} ${
                        open ? styles.chevronOpen : ""
                    }`}
                />
            </button>

            {/* Centered dialog + backdrop */}
            {open && (
                <>
                    <div
                        className={styles.backdrop}
                        onClick={() => setOpen(false)}
                        aria-hidden="true"
                    />

                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-label="Outlet timings"
                        className={styles.dialog}
                    >
                        <div className={styles.header}>
                            <h3 className={styles.title}>Outlet timings</h3>

                            <button
                                type="button"
                                className={styles.closeBtn}
                                onClick={() => setOpen(false)}
                                aria-label="Close"
                            >
                                <X size={14} />
                            </button>
                        </div>

                        <ul className={styles.list}>
                            {DAYS.map((day) => {
                                const isToday = day === today;
                                return (
                                    <li
                                        key={day}
                                        className={`${styles.row} ${
                                            isToday ? styles.rowToday : ""
                                        }`}
                                    >
                                        <span className={styles.day}>
                                            {day}
                                        </span>
                                        <span className={styles.time}>
                                            {schedule[day]}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
}