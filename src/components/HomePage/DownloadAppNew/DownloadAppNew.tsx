'use client';

import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import styles from './DownloadAppNew.module.scss';

export interface DownloadAppBenefit {
  id: string;
  text: string;
}

export interface DownloadAppNewProps {
  title?: string;
  brandName?: string;
  highlightedTitle?: string;
  subtitle?: string;
  benefits?: DownloadAppBenefit[];

  qrCodeSrc?: string;
  qrCodeAlt?: string;

  appShowcaseSrc?: string;
  appShowcaseAlt?: string;

  backgroundImageSrc?: string;
  backgroundImageAlt?: string;

  androidUrl?: string;
  iosUrl?: string;

  showDownloadButton?: boolean;
  showQrCode?: boolean;

  className?: string;
}

const defaultBenefits: DownloadAppBenefit[] = [
  {
    id: 'latest-deals',
    text: 'Enjoy instant delivery, Great Offers',
  },
  {
    id: 'food-discovery',
    text: 'Spend maximum, Get rewards & Cashback',
  },
  {
    id: 'order-updates',
    text: 'Real-time Order Updates',
  },
];

const DownloadAppNew = ({
  title = 'Scan to Download',
  brandName = 'HUFKO',
  highlightedTitle = 'App Now!',
  subtitle,
  benefits = defaultBenefits,

  qrCodeSrc = '/products/app-download-qr2.png',
  qrCodeAlt = 'Scan QR code to download the HUFKO app',

  appShowcaseSrc = '/products/app-download-showcase_1.png',
  appShowcaseAlt = 'HUFKO food delivery mobile application preview',

  backgroundImageSrc = '/products/download-app-bg.png',
  backgroundImageAlt = '',

  androidUrl = '#',
  iosUrl = '#',

  showDownloadButton = true,
  showQrCode = true,

  className = '',
}: DownloadAppNewProps) => {
  return (
    <section
      className={`${styles.downloadAppBanner} ${className}`}
      aria-label="Download HUFKO mobile application"
    >
      {/* Full banner background image */}
      <Image
        src={backgroundImageSrc}
        alt={backgroundImageAlt}
        fill
        priority
        sizes="100vw"
        className={styles.backgroundImage}
        aria-hidden={!backgroundImageAlt}
      />

      <div className={styles.backgroundOverlay} aria-hidden="true" />

      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.content}>
          <div className={styles.headingWrapper}>
            <span className={styles.smallHeading}>
              {title}
            </span>

            <h2 className={styles.heading}>
              <span className={styles.brandHighlight}>
                {brandName}
              </span>

              <span className={styles.headingDark}>
                {' '}
                { highlightedTitle}
              </span>
            </h2>

            {subtitle && (
              <p className={styles.subtitle}>
                {subtitle}
              </p>
            )}
          </div>

          {/* BENEFITS */}
          <div className={styles.benefits}>
            {benefits.map((benefit) => (
              <div
                className={styles.benefitItem}
                key={benefit.id}
              >
                <CheckCircle2
                  className={styles.checkIcon}
                  aria-hidden="true"
                />

                <span>{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* QR CODE */}
          {showQrCode && (
            <div className={styles.qrSection}>
              <div className={styles.qrCard}>
                <Image
                  src={qrCodeSrc}
                  alt={qrCodeAlt}
                  width={250}
                  height={250}
                  className={styles.qrCode}
                />
              </div>

              {/* <div className={styles.qrInfo}>
                <div className={styles.qrIcon}>
                  <Smartphone
                    size={18}
                    strokeWidth={2.2}
                  />
                </div>

                <div className={styles.qrInfoContent}>
                  <strong>Scan & Download</strong>

                  <span>
                    Available on Android & iOS
                  </span>
                </div>
              </div> */}
            </div>
          )}

          {/* DOWNLOAD BUTTONS */}
          {/* {showDownloadButton && (
            <div className={styles.downloadButtons}>
              <Link
                href={androidUrl}
                className={styles.downloadButton}
                aria-label="Download HUFKO Android application"
              >
                <Download size={18} />

                <span>
                  Download App
                </span>
              </Link>

              <Link
                href={iosUrl}
                className={`${styles.downloadButton} ${styles.secondaryButton}`}
                aria-label="Download HUFKO iOS application"
              >
                <Smartphone size={18} />

                <span>
                  Get the App
                </span>
              </Link>
            </div>
          )} */}
        </div>

        {/* RIGHT APP SHOWCASE */}
        <div className={styles.visual}>
          <div className={styles.visualGlow} aria-hidden="true" />

          <div className={styles.appImageWrapper}>
            <Image
              src={appShowcaseSrc}
              alt={appShowcaseAlt}
              fill
              sizes="(max-width: 767px) 90vw, (max-width: 1199px) 48vw, 650px"
              className={styles.appImage}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppNew;