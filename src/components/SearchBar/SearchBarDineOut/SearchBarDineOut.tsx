import React, {
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
} from 'react';

import {
  Calendar,
  Users,
  ChevronDown,
  Plus,
  Minus,
  MapPin,
  Clock,
  Trash2,
  User,
  UserPlus,
  Search,
} from 'lucide-react';

import styles from './SearchBarDineOut.module.scss';

interface SearchBarDineOutProps {
  hotelName?: string;
  selectedDate?: string;
  guests?: number;
  rooms?: number;
  onSearch?: (data: SearchData) => void;
  onDateSelect?: (date: Date) => void;
  className?: string;
  placeholder?: string;
}

interface SearchData {
  hotel: string;
  date: string;
  guests: number;
  rooms: number;
  time: string;
  roomDetails: RoomDetail[];
}

interface RoomDetail {
  id: number;
  adults: number;
  children: number;
}

const HOTEL_LIST = [
  'Taj Exotica Resort & Spa, The Palm, Dubai',
  'Taj Dubai, Business Bay',
  'Taj Palace Hotel, Dubai',
  'Taj Jumeirah Lakes Towers, Dubai',
  'Taj Green Cove, The Palm, Dubai',
  'Taj Gateway Hotel, Bur Dubai',
  'Taj Palace, Deira, Dubai',
  'The Taj Mahal Palace, Mumbai',
  'Taj Lake Palace, Udaipur',
  'Taj Falaknuma Palace, Hyderabad',
  'Taj Lands End, Mumbai',
  'Taj Bengal, Kolkata',
  'Taj West End, Bengaluru',
  'Taj Coromandel, Chennai',
  'Taj Connemara, Chennai',
];

type DropdownPlacement = 'above' | 'below';

const DROPDOWN_GAP = 8;

const SearchBarDineOut: React.FC<SearchBarDineOutProps> = ({
  hotelName = 'Taj Exotica Resort & Spa, The Palm, Dubai',
  guests = 2,
  rooms = 1,
  onSearch,
  onDateSelect,
  className = '',
  placeholder = 'Find Restaurant',
}) => {
  const today = new Date();

  const formatDate = (date: Date) => {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  };

  const formatDateForDisplay = (date: Date) => {
    const currentToday = new Date();

    const tomorrow = new Date(currentToday);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (date.toDateString() === currentToday.toDateString()) {
      return 'Today';
    }

    if (date.toDateString() === tomorrow.toDateString()) {
      return 'Tomorrow';
    }

    return formatDate(date);
  };

  /* ============================================================
     STATE
  ============================================================ */

  const [hotel, setHotel] = useState(hotelName);

  const [selectedDate, setSelectedDate] = useState<Date>(today);
  const [formattedDate, setFormattedDate] = useState(
    formatDate(today)
  );
  const [displayDate, setDisplayDate] = useState(
    formatDateForDisplay(today)
  );

  const [isGuestDropdownOpen, setIsGuestDropdownOpen] =
    useState(false);

  const [showCalendar, setShowCalendar] = useState(false);

  const [showTimeSelection, setShowTimeSelection] =
    useState(false);

  const [showHotelDropdown, setShowHotelDropdown] =
    useState(false);

  const [searchTerm, setSearchTerm] = useState(hotelName);

  const [filteredHotels, setFilteredHotels] =
    useState(HOTEL_LIST);

  const [selectedTime, setSelectedTime] =
    useState('06:00-06:59');

  const [currentMonth, setCurrentMonth] =
    useState(today.getMonth());

  const [currentYear, setCurrentYear] =
    useState(today.getFullYear());

  /*
   * Dropdown placement.
   *
   * Default is ABOVE because that is what we want for
   * Date and Time.
   */
  const [calendarPlacement, setCalendarPlacement] =
    useState<DropdownPlacement>('above');

  const [timePlacement, setTimePlacement] =
    useState<DropdownPlacement>('above');

  const [guestPlacement, setGuestPlacement] =
    useState<DropdownPlacement>('above');

  const [hotelPlacement, setHotelPlacement] =
    useState<DropdownPlacement>('above');

  /* ============================================================
     ROOM STATE
  ============================================================ */

  const [roomDetails, setRoomDetails] = useState<RoomDetail[]>(
    [
      {
        id: 1,
        adults: 1,
        children: 0,
      },
    ]
  );

  const [nextRoomId, setNextRoomId] = useState(2);

  /* ============================================================
     REFS
  ============================================================ */

  const guestDropdownRef =
    useRef<HTMLDivElement>(null);

  const calendarRef =
    useRef<HTMLDivElement>(null);

  const calendarDropdownRef =
    useRef<HTMLDivElement>(null);

  const timeDropdownRef =
    useRef<HTMLDivElement>(null);

  const timeDropdownContentRef =
    useRef<HTMLDivElement>(null);

  const hotelDropdownRef =
    useRef<HTMLDivElement>(null);

  const hotelInputRef =
    useRef<HTMLInputElement>(null);

  const guestDropdownContentRef =
    useRef<HTMLDivElement>(null);

  const hotelDropdownContentRef =
    useRef<HTMLDivElement>(null);

  /* ============================================================
     TOTALS
  ============================================================ */

  const totalGuests = roomDetails.reduce(
    (sum, room) =>
      sum + room.adults + room.children,
    0
  );

  const totalRooms = roomDetails.length;

  /* ============================================================
     HOTEL FILTER
  ============================================================ */

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredHotels(HOTEL_LIST);
      return;
    }

    const filtered = HOTEL_LIST.filter((hotelItem) =>
      hotelItem
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );

    setFilteredHotels(filtered);
  }, [searchTerm]);

  /* ============================================================
     DROPDOWN POSITION CALCULATOR
  ============================================================ */

  const calculateDropdownPlacement = (
    triggerElement: HTMLElement | null,
    dropdownElement: HTMLElement | null,
    preferred: DropdownPlacement = 'above'
  ): DropdownPlacement => {
    if (!triggerElement || !dropdownElement) {
      return preferred;
    }

    const triggerRect =
      triggerElement.getBoundingClientRect();

    const dropdownHeight =
      dropdownElement.offsetHeight;

    const viewportHeight = window.innerHeight;

    const spaceAbove = triggerRect.top;
    const spaceBelow =
      viewportHeight - triggerRect.bottom;

    const requiredSpace =
      dropdownHeight + DROPDOWN_GAP;

    /*
     * Placement rule:
     *
     * 1. Prefer ABOVE the actual trigger section.
     * 2. If there is not enough room above, use BELOW.
     * 3. If neither side can fully contain the dropdown,
     *    use the side with more available space.
     *
     * This is viewport-aware and works on desktop and mobile.
     */
    if (spaceAbove >= requiredSpace) {
      return 'above';
    }

    if (spaceBelow >= requiredSpace) {
      return 'below';
    }

    return spaceAbove >= spaceBelow
      ? 'above'
      : 'below';
  };

  /* ============================================================
     DATE POSITION
  ============================================================ */

  const updateCalendarPlacement = () => {
    if (!showCalendar) {
      return;
    }

    requestAnimationFrame(() => {
      const placement =
        calculateDropdownPlacement(
          calendarRef.current,
          calendarDropdownRef.current,
          'above'
        );

      setCalendarPlacement(placement);
    });
  };

  /* ============================================================
     TIME POSITION
  ============================================================ */

  const updateTimePlacement = () => {
    if (!showTimeSelection) {
      return;
    }

    requestAnimationFrame(() => {
      const placement =
        calculateDropdownPlacement(
          timeDropdownRef.current,
          timeDropdownContentRef.current,
          'above'
        );

      setTimePlacement(placement);
    });
  };

  /* ============================================================
     GUEST POSITION
  ============================================================ */

  const updateGuestPlacement = () => {
    if (!isGuestDropdownOpen) {
      return;
    }

    requestAnimationFrame(() => {
      const placement =
        calculateDropdownPlacement(
          guestDropdownRef.current,
          guestDropdownContentRef.current,
          'above'
        );

      setGuestPlacement(placement);
    });
  };

  /* ============================================================
     HOTEL POSITION
  ============================================================ */

  const updateHotelPlacement = () => {
    if (!showHotelDropdown) {
      return;
    }

    requestAnimationFrame(() => {
      const placement =
        calculateDropdownPlacement(
          hotelDropdownRef.current,
          hotelDropdownContentRef.current,
          'above'
        );

      setHotelPlacement(placement);
    });
  };

  /* ============================================================
     RECALCULATE WHEN DROPDOWN OPENS
  ============================================================ */

  useLayoutEffect(() => {
    if (!showCalendar) {
      return;
    }

    /*
     * Two animation frames make sure the dropdown has
     * actually rendered before measuring its height.
     */
    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        updateCalendarPlacement();
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [showCalendar]);

  useLayoutEffect(() => {
    if (!showTimeSelection) {
      return;
    }

    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        updateTimePlacement();
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [showTimeSelection]);

  useLayoutEffect(() => {
    if (!isGuestDropdownOpen) {
      return;
    }

    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        updateGuestPlacement();
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [
    isGuestDropdownOpen,
    roomDetails.length,
  ]);

  useLayoutEffect(() => {
    if (!showHotelDropdown) {
      return;
    }

    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        updateHotelPlacement();
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [
    showHotelDropdown,
    filteredHotels.length,
  ]);

  /* ============================================================
     WINDOW RESIZE / SCROLL
  ============================================================ */

  useEffect(() => {
    const handleViewportChange = () => {
      updateCalendarPlacement();
      updateTimePlacement();
      updateGuestPlacement();
      updateHotelPlacement();
    };

    window.addEventListener(
      'resize',
      handleViewportChange
    );

    /*
     * Important:
     * Recalculate while scrolling because the search bar
     * can move relative to the viewport.
     */
    window.addEventListener(
      'scroll',
      handleViewportChange,
      true
    );

    return () => {
      window.removeEventListener(
        'resize',
        handleViewportChange
      );

      window.removeEventListener(
        'scroll',
        handleViewportChange,
        true
      );
    };
  }, [
    showCalendar,
    showTimeSelection,
    isGuestDropdownOpen,
    showHotelDropdown,
  ]);

  /* ============================================================
     OUTSIDE CLICK
  ============================================================ */

  useEffect(() => {
    const handleClickOutside = (
      event: MouseEvent
    ) => {
      const target = event.target as Node;

      if (
        guestDropdownRef.current &&
        !guestDropdownRef.current.contains(target)
      ) {
        setIsGuestDropdownOpen(false);
      }

      if (
        calendarRef.current &&
        !calendarRef.current.contains(target)
      ) {
        setShowCalendar(false);
      }

      if (
        timeDropdownRef.current &&
        !timeDropdownRef.current.contains(target)
      ) {
        setShowTimeSelection(false);
      }

      if (
        hotelDropdownRef.current &&
        !hotelDropdownRef.current.contains(target)
      ) {
        setShowHotelDropdown(false);
      }
    };

    document.addEventListener(
      'mousedown',
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside
      );
    };
  }, []);

  /* ============================================================
     SEARCH
  ============================================================ */

  const handleSearch = () => {
    const searchData: SearchData = {
      hotel,
      date: formattedDate,
      guests: totalGuests,
      rooms: totalRooms,
      time: selectedTime,
      roomDetails,
    };

    onSearch?.(searchData);

    setIsGuestDropdownOpen(false);
  };

  /* ============================================================
     ROOM MANAGEMENT
  ============================================================ */

  const addRoom = () => {
    if (roomDetails.length >= 10) {
      return;
    }

    setRoomDetails([
      ...roomDetails,
      {
        id: nextRoomId,
        adults: 1,
        children: 0,
      },
    ]);

    setNextRoomId((prev) => prev + 1);
  };

  const removeRoom = (roomId: number) => {
    if (roomDetails.length <= 1) {
      return;
    }

    setRoomDetails((prev) =>
      prev.filter((room) => room.id !== roomId)
    );
  };

  const updateAdults = (
    roomId: number,
    delta: number
  ) => {
    setRoomDetails((prev) =>
      prev.map((room) => {
        if (room.id !== roomId) {
          return room;
        }

        const newAdults = Math.max(
          1,
          Math.min(10, room.adults + delta)
        );

        return {
          ...room,
          adults: newAdults,
        };
      })
    );
  };

  const updateChildren = (
    roomId: number,
    delta: number
  ) => {
    setRoomDetails((prev) =>
      prev.map((room) => {
        if (room.id !== roomId) {
          return room;
        }

        const newChildren = Math.max(
          0,
          Math.min(10, room.children + delta)
        );

        return {
          ...room,
          children: newChildren,
        };
      })
    );
  };

  /* ============================================================
     DATE
  ============================================================ */

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setFormattedDate(formatDate(date));
    setDisplayDate(
      formatDateForDisplay(date)
    );

    onDateSelect?.(date);

    setShowCalendar(false);
  };

  /* ============================================================
     HOTEL
  ============================================================ */

  const handleHotelSelect = (
    selectedHotel: string
  ) => {
    setHotel(selectedHotel);
    setSearchTerm(selectedHotel);
    setShowHotelDropdown(false);

    hotelInputRef.current?.blur();
  };

  const handleHotelInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;

    setSearchTerm(value);
    setHotel(value);
    setShowHotelDropdown(true);
  };

  const handleHotelInputFocus = () => {
    setShowHotelDropdown(true);
  };

  /* ============================================================
     MONTH NAVIGATION
  ============================================================ */

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
  };

  /* ============================================================
     CALENDAR
  ============================================================ */

  const generateCalendarDays = () => {
    const days: React.ReactNode[] = [];

    const firstDay = new Date(
      currentYear,
      currentMonth,
      1
    ).getDay();

    const daysInMonth = new Date(
      currentYear,
      currentMonth + 1,
      0
    ).getDate();

    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div
          key={`empty-${i}`}
          className={styles.emptyDay}
        />
      );
    }

    const todayDate = new Date();

    todayDate.setHours(
      0,
      0,
      0,
      0
    );

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(
        currentYear,
        currentMonth,
        i
      );

      date.setHours(
        0,
        0,
        0,
        0
      );

      const isToday =
        date.getTime() === todayDate.getTime();

      const isSelected =
        selectedDate &&
        date.getTime() ===
          selectedDate.getTime();

      const isWeekend =
        date.getDay() === 0 ||
        date.getDay() === 6;

      const isPast =
        date < todayDate;

      const isSelectable =
        date >= todayDate;

      let dayLabel = i.toString();

      if (isToday) {
        dayLabel = 'Today';
      }

      days.push(
        <button
          key={i}
          type="button"
          className={`
            ${styles.day}
            ${isToday ? styles.today : ''}
            ${isSelected ? styles.selected : ''}
            ${isWeekend ? styles.weekend : ''}
            ${isPast ? styles.past : ''}
            ${!isSelectable ? styles.disabled : ''}
          `}
          onClick={() => {
            if (
              !isPast &&
              isSelectable
            ) {
              handleDateSelect(date);
            }
          }}
          disabled={
            isPast ||
            !isSelectable
          }
        >
          <span
            className={styles.dayNumber}
          >
            {dayLabel}
          </span>

          {isPast && (
            <span
              className={styles.unavailable}
            >
              Past
            </span>
          )}
        </button>
      );
    }

    return days;
  };

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  /* ============================================================
     QUICK SELECT
  ============================================================ */

  const QuickSelectButton = ({
    label,
    daysToAdd,
  }: {
    label: string;
    daysToAdd: number;
  }) => {
    const date = new Date();

    date.setDate(
      date.getDate() + daysToAdd
    );

    const isSelected =
      selectedDate &&
      date.toDateString() ===
        selectedDate.toDateString();

    return (
      <button
        type="button"
        className={`
          ${styles.quickSelectBtn}
          ${isSelected ? styles.active : ''}
        `}
        onClick={() =>
          handleDateSelect(date)
        }
      >
        {label}
      </button>
    );
  };

  /* ============================================================
     TIME
  ============================================================ */

  const generateTimeSlots = () => {
    const slots: {
      value: string;
      label: string;
    }[] = [];

    const startHour = 6;
    const endHour = 24;

    for (
      let i = startHour;
      i < endHour;
      i++
    ) {
      const start = i;
      const end = i + 1;

      const startStr =
        start
          .toString()
          .padStart(2, '0') + ':00';

      const endStr =
        end
          .toString()
          .padStart(2, '0') + ':59';

      slots.push({
        value: `${startStr}-${endStr}`,
        label: `${startStr} - ${endStr}`,
      });
    }

    return slots;
  };

  const timeSlots =
    generateTimeSlots();

  const getDisplayTime = (
    timeSlot: string
  ) => {
    const [start, end] =
      timeSlot.split('-');

    return `${start} - ${end}`;
  };

  /* ============================================================
     RENDER
  ============================================================ */

  return (
    <div
      className={`${styles.searchBarContainer} ${className}`}
    >
      <div className={styles.searchBar}>

        {/* ======================================================
            HOTEL
        ====================================================== */}

        <div
          className={`
            ${styles.searchSection}
            ${styles.hotelSection}
          `}
          ref={hotelDropdownRef}
        >
          <div
            className={styles.inputWrapper}
          >
            <MapPin
              size={18}
              className={styles.icon}
            />

            <input
              ref={hotelInputRef}
              type="text"
              value={searchTerm}
              onChange={
                handleHotelInputChange
              }
              onFocus={
                handleHotelInputFocus
              }
              placeholder={placeholder}
              className={
                styles.hotelInput
              }
              autoComplete="off"
            />

            {showHotelDropdown && (
              <div
                ref={
                  hotelDropdownContentRef
                }
                className={`
                  ${styles.hotelDropdown}
                  ${styles[hotelPlacement]}
                `}
              >
                <div
                  className={
                    styles.hotelDropdownHeader
                  }
                >
                  <span>
                    {filteredHotels.length}{' '}
                    Hotels
                  </span>

                  <button
                    type="button"
                    className={
                      styles.closeDropdownBtn
                    }
                    onClick={() =>
                      setShowHotelDropdown(
                        false
                      )
                    }
                  >
                    ×
                  </button>
                </div>

                <ul
                  className={
                    styles.hotelList
                  }
                >
                  {filteredHotels.map(
                    (
                      hotelItem,
                      index
                    ) => (
                      <li
                        key={index}
                        className={`
                          ${styles.hotelItem}
                          ${
                            hotelItem ===
                            hotel
                              ? styles.active
                              : ''
                          }
                        `}
                        onClick={() =>
                          handleHotelSelect(
                            hotelItem
                          )
                        }
                      >
                        <Search
                          size={14}
                          className={
                            styles.searchIcon
                          }
                        />

                        <span>
                          {hotelItem}
                        </span>
                      </li>
                    )
                  )}

                  {filteredHotels.length ===
                    0 && (
                    <div
                      className={
                        styles.noResults
                      }
                    >
                      No hotels found
                    </div>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div
          className={styles.divider}
        />

        {/* ======================================================
            DATE
        ====================================================== */}

        <div
          className={`
            ${styles.searchSection}
            ${styles.dateSection}
          `}
        >
          <div
            className={styles.dateWrapper}
            ref={calendarRef}
          >
            <div
              className={
                styles.dateDisplay
              }
              onClick={() => {
                const nextState =
                  !showCalendar;

                setShowCalendar(
                  nextState
                );

                setShowTimeSelection(
                  false
                );

                setIsGuestDropdownOpen(
                  false
                );

                setShowHotelDropdown(
                  false
                );

                if (nextState) {
                  /*
                   * Start with ABOVE. After the dropdown is rendered,
                   * the layout effect measures the actual viewport space
                   * and switches to BELOW only when necessary.
                   */
                  setCalendarPlacement(
                    'above'
                  );
                }
              }}
            >
              <Calendar
                size={18}
                className={styles.icon}
              />

              <div
                className={
                  styles.dateRange
                }
              >
                <span
                  className={
                    styles.dateText
                  }
                >
                  {displayDate}
                </span>

                <span
                  className={
                    styles.dateLabel
                  }
                >
                  Dine Out
                </span>
              </div>

              <ChevronDown
                size={16}
                className={`
                  ${styles.chevron}
                  ${
                    showCalendar
                      ? styles.rotated
                      : ''
                  }
                `}
              />
            </div>

            {showCalendar && (
              <div
                ref={
                  calendarDropdownRef
                }
                className={`
                  ${styles.calendarDropdown}
                  ${styles[calendarPlacement]}
                `}
              >
                <div
                  className={
                    styles.quickSelect
                  }
                >
                  <QuickSelectButton
                    label="Today"
                    daysToAdd={0}
                  />

                  <QuickSelectButton
                    label="Tomorrow"
                    daysToAdd={1}
                  />

                  <QuickSelectButton
                    label="+2 Days"
                    daysToAdd={2}
                  />

                  <QuickSelectButton
                    label="+3 Days"
                    daysToAdd={3}
                  />
                </div>

                <div
                  className={
                    styles.calendarHeader
                  }
                >
                  <button
                    type="button"
                    className={
                      styles.navButton
                    }
                    onClick={
                      goToPreviousMonth
                    }
                  >
                    ‹
                  </button>

                  <span>
                    {
                      monthNames[
                        currentMonth
                      ]
                    }{' '}
                    {currentYear}
                  </span>

                  <button
                    type="button"
                    className={
                      styles.navButton
                    }
                    onClick={
                      goToNextMonth
                    }
                  >
                    ›
                  </button>
                </div>

                <div
                  className={
                    styles.calendarGrid
                  }
                >
                  {[
                    'S',
                    'M',
                    'T',
                    'W',
                    'T',
                    'F',
                    'S',
                  ].map(
                    (
                      day,
                      index
                    ) => (
                      <div
                        key={`${day}-${index}`}
                        className={
                          styles.weekday
                        }
                      >
                        {day}
                      </div>
                    )
                  )}

                  {generateCalendarDays()}
                </div>

                <div
                  className={
                    styles.calendarFooter
                  }
                >
                  <div
                    className={
                      styles.legend
                    }
                  >
                    <span>
                      <span
                        className={`
                          ${styles.legendDot}
                          ${styles.todayDot}
                        `}
                      />
                      Today
                    </span>

                    <span>
                      <span
                        className={`
                          ${styles.legendDot}
                          ${styles.selectedDot}
                        `}
                      />
                      Selected
                    </span>

                    <span>
                      <span
                        className={`
                          ${styles.legendDot}
                          ${styles.availableDot}
                        `}
                      />
                      Available
                    </span>

                    <span>
                      <span
                        className={`
                          ${styles.legendDot}
                          ${styles.pastDot}
                        `}
                      />
                      Past
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div
          className={styles.divider}
        />

        {/* ======================================================
            TIME
        ====================================================== */}

        <div
          className={`
            ${styles.searchSection}
            ${styles.timeSection}
          `}
        >
          <div
            className={
              styles.timeWrapper
            }
            ref={timeDropdownRef}
          >
            <div
              className={
                styles.timeDisplay
              }
              onClick={() => {
                const nextState =
                  !showTimeSelection;

                setShowTimeSelection(
                  nextState
                );

                setShowCalendar(false);
                setIsGuestDropdownOpen(
                  false
                );
                setShowHotelDropdown(
                  false
                );

                if (nextState) {
                  setTimePlacement(
                    'above'
                  );
                }
              }}
            >
              <Clock
                size={18}
                className={styles.icon}
              />

              <span
                className={
                  styles.timeLabel
                }
              >
                {getDisplayTime(
                  selectedTime
                )}
              </span>

              <ChevronDown
                size={16}
                className={`
                  ${styles.chevron}
                  ${
                    showTimeSelection
                      ? styles.rotated
                      : ''
                  }
                `}
              />
            </div>

            {showTimeSelection && (
              <div
                ref={
                  timeDropdownContentRef
                }
                className={`
                  ${styles.timeDropdown}
                  ${styles[timePlacement]}
                `}
              >
                <div
                  className={
                    styles.timeHeader
                  }
                >
                  Select Time Slot
                </div>

                <div
                  className={
                    styles.timeOptions
                  }
                >
                  {timeSlots.map(
                    (slot) => (
                      <button
                        type="button"
                        key={slot.value}
                        className={`
                          ${styles.timeOption}
                          ${
                            selectedTime ===
                            slot.value
                              ? styles.active
                              : ''
                          }
                        `}
                        onClick={() => {
                          setSelectedTime(
                            slot.value
                          );

                          setShowTimeSelection(
                            false
                          );
                        }}
                      >
                        <span
                          className={
                            styles.timeOptionLabel
                          }
                        >
                          {slot.label}
                        </span>
                      </button>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <div
          className={styles.divider}
        />

        {/* ======================================================
            GUEST / TABLE
        ====================================================== */}

        <div
          className={`
            ${styles.searchSection}
            ${styles.guestSection}
          `}
        >
          <div
            className={
              styles.guestWrapper
            }
            ref={guestDropdownRef}
          >
            <div
              className={
                styles.guestDisplay
              }
              onClick={() => {
                const nextState =
                  !isGuestDropdownOpen;

                setIsGuestDropdownOpen(
                  nextState
                );

                setShowCalendar(false);
                setShowTimeSelection(
                  false
                );
                setShowHotelDropdown(
                  false
                );

                if (nextState) {
                  setGuestPlacement(
                    'above'
                  );
                }
              }}
            >
              <Users
                size={18}
                className={styles.icon}
              />

              <span
                className={
                  styles.guestText
                }
              >
                {totalGuests}{' '}
                Guest
                {totalGuests > 1
                  ? 's'
                  : ''}
              </span>

              <span
                className={
                  styles.roomText
                }
              >
                {totalRooms}{' '}
                Table
                {totalRooms > 1
                  ? 's'
                  : ''}
              </span>

              <ChevronDown
                size={16}
                className={`
                  ${styles.chevron}
                  ${
                    isGuestDropdownOpen
                      ? styles.rotated
                      : ''
                  }
                `}
              />
            </div>

            {isGuestDropdownOpen && (
              <div
                ref={
                  guestDropdownContentRef
                }
                className={`
                  ${styles.guestDropdown}
                  ${styles[guestPlacement]}
                `}
              >
                <div
                  className={
                    styles.roomsContainer
                  }
                >
                  {roomDetails.map(
                    (
                      room,
                      index
                    ) => (
                      <div
                        key={room.id}
                        className={
                          styles.roomCard
                        }
                      >
                        <div
                          className={
                            styles.roomHeader
                          }
                        >
                          <span
                            className={
                              styles.roomTitle
                            }
                          >
                            Table{' '}
                            {index + 1}
                          </span>

                          {roomDetails.length >
                            1 && (
                            <button
                              type="button"
                              className={
                                styles.removeRoomBtn
                              }
                              onClick={() =>
                                removeRoom(
                                  room.id
                                )
                              }
                              aria-label="Remove Table"
                            >
                              <Trash2
                                size={16}
                              />
                            </button>
                          )}
                        </div>

                        <div
                          className={
                            styles.roomControls
                          }
                        >
                          {/* Adults */}
                          <div
                            className={
                              styles.controlGroup
                            }
                          >
                            <div
                              className={
                                styles.controlLabel
                              }
                            >
                              <User
                                size={14}
                              />

                              <span>
                                Adults
                              </span>
                            </div>

                            <div
                              className={
                                styles.controlButtons
                              }
                            >
                              <button
                                type="button"
                                onClick={() =>
                                  updateAdults(
                                    room.id,
                                    -1
                                  )
                                }
                                disabled={
                                  room.adults <=
                                  1
                                }
                              >
                                <Minus
                                  size={14}
                                />
                              </button>

                              <span>
                                {
                                  room.adults
                                }
                              </span>

                              <button
                                type="button"
                                onClick={() =>
                                  updateAdults(
                                    room.id,
                                    1
                                  )
                                }
                                disabled={
                                  room.adults >=
                                  10
                                }
                              >
                                <Plus
                                  size={14}
                                />
                              </button>
                            </div>
                          </div>

                          {/* Children */}
                          <div
                            className={
                              styles.controlGroup
                            }
                          >
                            <div
                              className={
                                styles.controlLabel
                              }
                            >
                              <UserPlus
                                size={14}
                              />

                              <span>
                                Child (0 - 12 yrs)
                              </span>
                            </div>

                            <div
                              className={
                                styles.controlButtons
                              }
                            >
                              <button
                                type="button"
                                onClick={() =>
                                  updateChildren(
                                    room.id,
                                    -1
                                  )
                                }
                                disabled={
                                  room.children <=
                                  0
                                }
                              >
                                <Minus
                                  size={14}
                                />
                              </button>

                              <span>
                                {
                                  room.children
                                }
                              </span>

                              <button
                                type="button"
                                onClick={() =>
                                  updateChildren(
                                    room.id,
                                    1
                                  )
                                }
                                disabled={
                                  room.children >=
                                  10
                                }
                              >
                                <Plus
                                  size={14}
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>

                <button
                  type="button"
                  className={
                    styles.addRoomBtn
                  }
                  onClick={addRoom}
                >
                  <Plus size={16} />
                  ADD MORE TABLES
                </button>
              </div>
            )}
          </div>
        </div>

        <div
          className={styles.divider}
        />

        {/* ======================================================
            BOOK NOW
        ====================================================== */}

        <button
          type="button"
          className={
            styles.bookButton
          }
          onClick={handleSearch}
        >
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

export default SearchBarDineOut;