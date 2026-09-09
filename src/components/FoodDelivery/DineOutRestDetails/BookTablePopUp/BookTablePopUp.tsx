'use client';

import React, { useState } from 'react';
import styles from './BookTablePopUp.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronDown,
  faChevronUp,
  faUser,
  faClock,
  faUtensils,
  faMugHot,
  faSun,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';

// Types
interface TimeSlot {
  time: string;
  selected?: boolean;
}

interface SlotGroup {
  id: string;
  name: string;
  icon: any;
  timeRange: string;
  slots: TimeSlot[];
}

interface Offer {
  id: string;
  title: string;
  fee: string;
  subtext?: string;
  category: string;
}

interface BookTablePopUpProps {
  isOpen: boolean;
  onClose: () => void;
  restaurantName?: string;
  location?: string;
  onProceed?: (data: any) => void;
}

const BookTablePopUp: React.FC<BookTablePopUpProps> = ({
  isOpen,
  onClose,
  restaurantName = 'The Beer Cafe, Rohini',
  location = 'Rohini',
  onProceed,
}) => {
  // State
  const [selectedGuests, setSelectedGuests] = useState<number>(2);
  const [selectedDate, setSelectedDate] = useState<number>(0);
  const [selectedSlot, setSelectedSlot] = useState<string>('12:00 PM');
  const [selectedOffer, setSelectedOffer] = useState<string>('offer-0');
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set(['lunch']));

  // Data
  const guestOptions = Array.from({ length: 30 }, (_, i) => i + 1);

  const dates = [
    { day: 'Today', date: '09 Sep' },
    { day: 'Thu', date: '10 Sep' },
    { day: 'Fri', date: '11 Sep' },
    { day: 'Sat', date: '12 Sep' },
    { day: 'Sun', date: '13 Sep' },
    { day: 'Mon', date: '14 Sep' },
    { day: 'Tue', date: '15 Sep' },
    { day: 'Wed', date: '16 Sep' },
    { day: 'Thu', date: '17 Sep' },
  ];

  const slotGroups: SlotGroup[] = [
    {
      id: 'breakfast',
      name: 'Breakfast',
      icon: faMugHot,
      timeRange: '11:00 AM to 12:00 PM',
      slots: [
        { time: '11:00 AM' },
        { time: '11:15 AM' },
        { time: '11:30 AM' },
        { time: '11:45 AM' },
      ],
    },
    {
      id: 'lunch',
      name: 'Lunch',
      icon: faSun,
      timeRange: '12:00 PM to 05:00 PM',
      slots: [
        { time: '12:00 PM', selected: true },
        { time: '12:15 PM' },
        { time: '12:30 PM' },
        { time: '12:45 PM' },
        { time: '01:00 PM' },
        { time: '01:15 PM' },
        { time: '01:30 PM' },
        { time: '01:45 PM' },
        { time: '02:00 PM' },
        { time: '02:15 PM' },
        { time: '02:30 PM' },
        { time: '02:45 PM' },
        { time: '03:00 PM' },
        { time: '03:15 PM' },
        { time: '03:30 PM' },
        { time: '03:45 PM' },
        { time: '04:00 PM' },
        { time: '04:15 PM' },
        { time: '04:30 PM' },
        { time: '04:45 PM' },
      ],
    },
    {
      id: 'dinner',
      name: 'Dinner',
      icon: faMoon,
      timeRange: '05:00 PM to 01:00 AM',
      slots: [],
    },
  ];

  const offers: Offer[] = [
    {
      id: 'offer-0',
      title: 'Standard table booking',
      fee: 'FREE',
      subtext: '',
      category: 'REGULAR OFFER',
    },
  ];

  // Handlers
  const toggleGroup = (groupId: string) => {
    setExpandedGroups((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(groupId)) {
        newSet.delete(groupId);
      } else {
        newSet.add(groupId);
      }
      return newSet;
    });
  };

  const handleGuestSelect = (guest: number) => {
    setSelectedGuests(guest);
  };

  const handleDateSelect = (index: number) => {
    setSelectedDate(index);
  };

  const handleSlotSelect = (time: string) => {
    setSelectedSlot(time);
  };

  const handleOfferSelect = (offerId: string) => {
    setSelectedOffer(offerId);
  };

  const handleProceed = () => {
    if (onProceed) {
      onProceed({
        guests: selectedGuests,
        date: dates[selectedDate],
        slot: selectedSlot,
        offer: selectedOffer,
      });
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.header}>
          <button className={styles.backButton} onClick={onClose}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <div className={styles.headerText}>
            <h2 className={styles.title}>Book table</h2>
            <p className={styles.subtitle}>{restaurantName}</p>
          </div>
        </div>

        {/* Guest Selection */}
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Number of guest(s)</h3>
          <div className={styles.guestGrid}>
            {guestOptions.slice(0, 9).map((guest) => (
              <button
                key={guest}
                className={`${styles.guestCell} ${selectedGuests === guest ? styles.selected : ''}`}
                onClick={() => handleGuestSelect(guest)}
              >
                {guest}
              </button>
            ))}
          </div>
        </section>

        {/* Date Selection */}
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>When are you visiting?</h3>
          <div className={styles.dateScroll}>
            {dates.map((date, index) => (
              <button
                key={index}
                className={`${styles.dateCell} ${selectedDate === index ? styles.selected : ''}`}
                onClick={() => handleDateSelect(index)}
              >
                <span className={styles.day}>{date.day}</span>
                <span className={styles.dateNum}>{date.date}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Slot Selection */}
        <section className={styles.section}>
          <p className={styles.slotHint}>Select the time of day to see the offers</p>

          {slotGroups.map((group) => (
            <div key={group.id} className={styles.slotGroup}>
              <div className={styles.slotGroupHeader} onClick={() => toggleGroup(group.id)}>
                <div className={styles.slotGroupLeft}>
                  <div className={styles.slotGroupIcon}>
                    <FontAwesomeIcon icon={group.icon} />
                  </div>
                  <div>
                    <div className={styles.slotGroupName}>{group.name}</div>
                    <div className={styles.slotGroupTime}>{group.timeRange}</div>
                  </div>
                </div>
                <button className={styles.expandButton}>
                  <FontAwesomeIcon
                    icon={expandedGroups.has(group.id) ? faChevronUp : faChevronDown}
                  />
                </button>
              </div>

              {expandedGroups.has(group.id) && group.slots.length > 0 && (
                <div className={styles.slotGrid}>
                  {group.slots.map((slot) => (
                    <button
                      key={slot.time}
                      className={`${styles.slotCell} ${selectedSlot === slot.time ? styles.selected : ''}`}
                      onClick={() => handleSlotSelect(slot.time)}
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
              )}

              {expandedGroups.has(group.id) && group.slots.length === 0 && (
                <div className={styles.noSlots}>No time slots available</div>
              )}
            </div>
          ))}
        </section>

        {/* Offer Selection */}
        <section className={styles.section}>
          <h4 className={styles.offerTitle}>Booking option for {selectedSlot}</h4>
          <div className={styles.offerCard}>
            <div className={styles.offerCategory}>REGULAR OFFER</div>
            {offers.map((offer) => (
              <div key={offer.id} className={styles.offerItem}>
                <input
                  type="radio"
                  id={offer.id}
                  name="offer"
                  checked={selectedOffer === offer.id}
                  onChange={() => handleOfferSelect(offer.id)}
                  className={styles.radioInput}
                />
                <label htmlFor={offer.id} className={styles.offerLabel}>
                  <div className={styles.offerDetails}>
                    <div className={styles.offerName}>{offer.title}</div>
                    <div className={styles.offerFee}>Booking Fee: {offer.fee}</div>
                    {offer.subtext && (
                      <div className={styles.offerSubtext}>{offer.subtext}</div>
                    )}
                  </div>
                </label>
              </div>
            ))}
            <div className={styles.offerFooter}>
              Coupons & additional offers available during bill payment
            </div>
          </div>
        </section>

        {/* Proceed Button */}
        <div className={styles.footer}>
          <button className={styles.proceedButton} onClick={handleProceed}>
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookTablePopUp;