"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./FashionFullSlideGrid.module.scss";

export interface FashionCard {
    id: string;
    title: string;
    imageUrl: string;
    link: string;
}

export interface FashionFullSlideProps {
    title?: string;
    subtitle?: string;
    buttonText?: string;
    buttonLink?: string;

    heroImage: string;

    cards: FashionCard[];
}

const FashionFullSlideGrid = ({
    title = "",
    subtitle = "",
    buttonText = "",
    buttonLink = "",

    heroImage,

    cards,
}: FashionFullSlideProps) => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.grid}>
                {/* Left Banner */}
                <div className={styles.leftBanner}>
                    <Image
                        src={heroImage}
                        fill
                        alt={title}
                        className={styles.bannerImage}
                        priority
                    />

                    <div className={styles.overlay} />

                    {/*<div className={styles.content}>
                        <h2>{title}</h2>

                        <div className={styles.line}></div>

                        <p>{subtitle}</p>

                        <Link href={buttonLink} className={styles.button}>
                            {buttonText}
                            <ArrowRight size={18} />
                        </Link>
                    </div> */}
                </div>

                {/* Right Grid */}
                <div className={styles.rightGrid}>
                    {cards.map((card) => (
                        <Link
                            href={card.link}
                            key={card.id}
                            className={styles.card}
                        >
                            <Image
                                src={card.imageUrl}
                                fill
                                alt={card.title}
                                className={styles.cardImage}
                            />

                            {/* <div className={styles.cardOverlay}></div>

                            <div className={styles.cardTitle}>
                                {card.title}
                            </div> */}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FashionFullSlideGrid;