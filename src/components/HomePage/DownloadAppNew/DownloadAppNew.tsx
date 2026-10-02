'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Download, Smartphone } from 'lucide-react';
import styles from './DownloadAppNew.module.scss';

export interface DownloadAppBenefit {
  id: string;
  text: string;
}

export interface DownloadAppNewProps {
  title?: string;
  highlightedTitle?: string;
  subtitle?: string;
  benefits?: DownloadAppBenefit[];
  qrCodeSrc?: string;
  qrCodeAlt?: string;
  appShowcaseSrc?: string;
  appShowcaseAlt?: string;
  androidUrl?: string;
  iosUrl?: string;
  showDownloadButton?: boolean;
  showQrCode?: boolean;
  className?: string;
}

const defaultBenefits: DownloadAppBenefit[] = [
  {
    id: 'latest-deals',
    text: 'Latest Deals, Offers etc',
  },
  {
    id: 'price-alerts',
    text: 'Price Drop Alerts',
  },
  {
    id: 'order-updates',
    text: 'Real-time Order Updates',
  },
];

const DownloadAppNew = ({
  title = 'Scan to Download',
  highlightedTitle = 'App Now!',
  subtitle,
  benefits = defaultBenefits,
  qrCodeSrc = '/products/app-download-qr2.png',
  //   qrCodeSrc = '/icons/download_app__qr_code.png',
  qrCodeAlt = 'Scan QR code to download the mobile app',
  appShowcaseSrc = '/products/app-download-showcase1.png',
  appShowcaseAlt = 'Mobile application preview',
  androidUrl = '#',
  iosUrl = '#',
  showDownloadButton = true,
  showQrCode = true,
  className = '',
}: DownloadAppNewProps) => {
  return (
    <section
      className={`${styles.downloadAppBanner} ${className}`}
      aria-label="Download mobile application"
    >
      <div className={styles.backgroundGlow} aria-hidden="true" />
      <div className={styles.backgroundGlowSecondary} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.headingWrapper}>
            <span className={styles.smallHeading}>{title}</span>

            <h2 className={styles.heading}>
              <span className={styles.brandHighlight}>
                Hufko <span className={styles.brandHighlightSpan}>{highlightedTitle.replace(' App Now!', '')}</span>
              </span>
              {highlightedTitle.includes(' App Now!') && (
                <span className={styles.headingDark}> App Now!</span>
              )}
            </h2>

            {subtitle && (
              <p className={styles.subtitle}>
                {subtitle}
              </p>
            )}
          </div>

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
                  <Smartphone size={18} strokeWidth={2.2} />
                </div>

                <div>
                  <strong>Scan & Download</strong>
                  <span>Available on Android & iOS</span>
                </div>
              </div> */}
            </div>
          )}

          {/* {showDownloadButton && (
            <div className={styles.downloadButtons}>
              <Link
                href={androidUrl}
                className={styles.downloadButton}
                aria-label="Download Android application"
              >
                <Download size={18} />
                <span>Download App</span>
              </Link>

              <Link
                href={iosUrl}
                className={`${styles.downloadButton} ${styles.secondaryButton}`}
                aria-label="Download iOS application"
              >
                <Smartphone size={18} />
                <span>Get the App</span>
              </Link>
            </div>
          )} */}
        </div>

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