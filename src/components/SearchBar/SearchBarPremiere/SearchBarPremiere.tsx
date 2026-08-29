// components/SearchBarPremiere/SearchBarPremiere.tsx
import React, { useState, useRef, useEffect } from 'react';
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
  Search
} from 'lucide-react';
import styles from './SearchBarPremiere.module.scss';

interface SearchBarPremiereProps {
  hotelName?: string;
  selectedDate?: string;
  guests?: number;
  rooms?: number;
  onSearch?: (data: SearchDataPremiere) => void;
  onDateSelect?: (date: Date) => void;
  className?: string;
  placeholder?: string;
}

export interface SearchDataPremiere {
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

// Sample hotel list
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

const SearchBarPremiere: React.FC<SearchBarPremiereProps> = ({
  hotelName = 'Taj Exotica Resort & Spa, The Palm, Dubai',
  guests = 2,
  rooms = 1,
  onSearch,
  onDateSelect,
  className = '',
  placeholder = 'Find a hotel',
}) => {
  // Get today's date
  const today = new Date();
  
  const formatDate = (date: Date) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const formatDateForDisplay = (date: Date) => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return 'Tomorrow';
    }
    return formatDate(date);
  };

  const [hotel, setHotel] = useState(hotelName);
  const [selectedDate, setSelectedDate] = useState<Date>(today);
  const [formattedDate, setFormattedDate] = useState(formatDate(today));
  const [displayDate, setDisplayDate] = useState(formatDateForDisplay(today));
  const [isGuestDropdownOpen, setIsGuestDropdownOpen] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showTimeSelection, setShowTimeSelection] = useState(false);
  const [showHotelDropdown, setShowHotelDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState(hotelName);
  const [filteredHotels, setFilteredHotels] = useState(HOTEL_LIST);
  const [selectedTime, setSelectedTime] = useState('06:00-06:59');
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  // Room management state
  const [roomDetails, setRoomDetails] = useState<RoomDetail[]>([
    { id: 1, adults: 1, children: 0 }
  ]);
  const [nextRoomId, setNextRoomId] = useState(2);

  const guestDropdownRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const timeDropdownRef = useRef<HTMLDivElement>(null);
  const hotelDropdownRef = useRef<HTMLDivElement>(null);
  const hotelInputRef = useRef<HTMLInputElement>(null);

  // Calculate total guests
  const totalGuests = roomDetails.reduce((sum, room) => sum + room.adults + room.children, 0);
  const totalRooms = roomDetails.length;

  // Filter hotels based on search term
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredHotels(HOTEL_LIST);
    } else {
      const filtered = HOTEL_LIST.filter(hotel =>
        hotel.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredHotels(filtered);
    }
  }, [searchTerm]);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (guestDropdownRef.current && !guestDropdownRef.current.contains(event.target as Node)) {
        setIsGuestDropdownOpen(false);
      }
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setShowCalendar(false);
      }
      if (timeDropdownRef.current && !timeDropdownRef.current.contains(event.target as Node)) {
        setShowTimeSelection(false);
      }
      if (hotelDropdownRef.current && !hotelDropdownRef.current.contains(event.target as Node)) {
        setShowHotelDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = () => {
    const searchData: SearchDataPremiere = {
      hotel,
      date: formattedDate,
      guests: totalGuests,
      rooms: totalRooms,
      time: selectedTime,
      roomDetails,
    };
    if (onSearch) {
      onSearch(searchData);
    }
    setIsGuestDropdownOpen(false);
  };

  // Room management functions
  const addRoom = () => {
    if (roomDetails.length < 10) {
      setRoomDetails([...roomDetails, { id: nextRoomId, adults: 1, children: 0 }]);
      setNextRoomId(nextRoomId + 1);
    }
  };

  const removeRoom = (roomId: number) => {
    if (roomDetails.length > 1) {
      setRoomDetails(roomDetails.filter(room => room.id !== roomId));
    }
  };

  const updateAdults = (roomId: number, delta: number) => {
    setRoomDetails(roomDetails.map(room => {
      if (room.id === roomId) {
        const newAdults = Math.max(1, Math.min(10, room.adults + delta));
        return { ...room, adults: newAdults };
      }
      return room;
    }));
  };

  const updateChildren = (roomId: number, delta: number) => {
    setRoomDetails(roomDetails.map(room => {
      if (room.id === roomId) {
        const newChildren = Math.max(0, Math.min(10, room.children + delta));
        return { ...room, children: newChildren };
      }
      return room;
    }));
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setFormattedDate(formatDate(date));
    setDisplayDate(formatDateForDisplay(date));
    
    if (onDateSelect) {
      onDateSelect(date);
    }
    setShowCalendar(false);
  };

  const handleHotelSelect = (selectedHotel: string) => {
    setHotel(selectedHotel);
    setSearchTerm(selectedHotel);
    setShowHotelDropdown(false);
    if (hotelInputRef.current) {
      hotelInputRef.current.blur();
    }
  };

  const handleHotelInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setHotel(value);
    setShowHotelDropdown(true);
  };

  const handleHotelInputFocus = () => {
    setShowHotelDropdown(true);
  };

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const generateCalendarDays = () => {
    const days = [];
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className={styles.emptyDay}></div>);
    }
    
    const todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0);
    
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentYear, currentMonth, i);
      date.setHours(0, 0, 0, 0);
      const isToday = date.getTime() === todayDate.getTime();
      const isSelected = selectedDate && date.getTime() === selectedDate.getTime();
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;
      const isPast = date < todayDate;
      const isSelectable = date >= todayDate;
      
      let dayLabel = i.toString();
      if (isToday) dayLabel = 'Today';
      
      days.push(
        <button
          key={i}
          className={`${styles.day} 
            ${isToday ? styles.today : ''} 
            ${isSelected ? styles.selected : ''} 
            ${isWeekend ? styles.weekend : ''}
            ${isPast ? styles.past : ''}
            ${!isSelectable ? styles.disabled : ''}`}
          onClick={() => {
            if (!isPast && isSelectable) {
              handleDateSelect(date);
            }
          }}
          disabled={isPast || !isSelectable}
        >
          <span className={styles.dayNumber}>{dayLabel}</span>
          {isPast && (
            <span className={styles.unavailable}>Past</span>
          )}
        </button>
      );
    }
    
    return days;
  };

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                      'July', 'August', 'September', 'October', 'November', 'December'];

  const QuickSelectButton = ({ label, daysToAdd }: { label: string; daysToAdd: number }) => {
    const date = new Date();
    date.setDate(date.getDate() + daysToAdd);
    const isSelected = selectedDate && 
      date.toDateString() === selectedDate.toDateString();

    return (
      <button
        className={`${styles.quickSelectBtn} ${isSelected ? styles.active : ''}`}
        onClick={() => handleDateSelect(date)}
      >
        {label}
      </button>
    );
  };

  const formatTimeDisplay = (time: string) => {
    const [hours, minutes] = time.split(':');
    return `${hours}:${minutes}`;
  };

  const generateTimeSlots = () => {
    const slots = [];
    const startHour = 6;
    const endHour = 24;
    
    for (let i = startHour; i < endHour; i++) {
      const start = i;
      const end = i + 1;
      const startStr = start.toString().padStart(2, '0') + ':00';
      const endStr = end.toString().padStart(2, '0') + ':59';
      slots.push({
        value: `${startStr}-${endStr}`,
        label: `${startStr} - ${endStr}`
      });
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const getDisplayTime = (timeSlot: string) => {
    const [start, end] = timeSlot.split('-');
    return `${start} - ${end}`;
  };

  return (
    <div className={`${styles.searchBarContainer} ${className}`}>
      <div className={styles.searchBar}>
        {/* Hotel Search with Dropdown */}
        <div className={styles.searchSection} ref={hotelDropdownRef}>
          <div className={styles.inputWrapper}>
            <MapPin size={18} className={styles.icon} />
            <input
              ref={hotelInputRef}
              type="text"
              value={searchTerm}
              onChange={handleHotelInputChange}
              onFocus={handleHotelInputFocus}
              placeholder={placeholder}
              className={styles.hotelInput}
              autoComplete="off"
            />
            {showHotelDropdown && (
              <div className={styles.hotelDropdown}>
                <div className={styles.hotelDropdownHeader}>
                  <span>{filteredHotels.length} Hotels</span>
                  <button 
                    className={styles.closeDropdownBtn}
                    onClick={() => setShowHotelDropdown(false)}
                  >
                    ×
                  </button>
                </div>
                <ul className={styles.hotelList}>
                  {filteredHotels.map((hotelItem, index) => (
                    <li 
                      key={index}
                      className={`${styles.hotelItem} ${hotelItem === hotel ? styles.active : ''}`}
                      onClick={() => handleHotelSelect(hotelItem)}
                    >
                      <Search size={14} className={styles.searchIcon} />
                      <span>{hotelItem}</span>
                    </li>
                  ))}
                  {filteredHotels.length === 0 && (
                    <div className={styles.noResults}>
                      <span>No hotels found</span>
                    </div>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className={styles.divider} />

        {/* Single Date Selection */}
        <div className={styles.searchSection}>
          <div className={styles.dateWrapper} ref={calendarRef}>
            <div className={styles.dateDisplay} onClick={() => {
                setShowCalendar(prev => !prev);
                setShowTimeSelection(false);
                setIsGuestDropdownOpen(false);
                setShowHotelDropdown(false);
              }}>
              <Calendar size={18} className={styles.icon} />
              <div className={styles.dateRange}>
                <span className={styles.dateText}>{displayDate}</span>
                <span className={styles.dateLabel}>Dine Out</span>
              </div>
              <ChevronDown size={16} className={`${styles.chevron} ${showCalendar ? styles.rotated : ''}`} />
            </div>
            
            {showCalendar && (
              <div className={styles.calendarDropdown}>
                <div className={styles.quickSelect}>
                  <QuickSelectButton label="Today" daysToAdd={0} />
                  <QuickSelectButton label="Tomorrow" daysToAdd={1} />
                  <QuickSelectButton label="+2 Days" daysToAdd={2} />
                  <QuickSelectButton label="+3 Days" daysToAdd={3} />
                </div>

                <div className={styles.calendarHeader}>
                  <button className={styles.navButton} onClick={goToPreviousMonth}>
                    ‹
                  </button>
                  <span>{monthNames[currentMonth]} {currentYear}</span>
                  <button className={styles.navButton} onClick={goToNextMonth}>
                    ›
                  </button>
                </div>

                <div className={styles.calendarGrid}>
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                    <div key={day} className={styles.weekday}>{day}</div>
                  ))}
                  {generateCalendarDays()}
                </div>

                <div className={styles.calendarFooter}>
                  <div className={styles.legend}>
                    <span className={`${styles.legendDot} ${styles.todayDot}`}></span>
                    <span>Today</span>
                    <span className={`${styles.legendDot} ${styles.selectedDot}`}></span>
                    <span>Selected</span>
                    <span className={`${styles.legendDot} ${styles.availableDot}`}></span>
                    <span>Available</span>
                    <span className={`${styles.legendDot} ${styles.pastDot}`}></span>
                    <span>Past</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className={styles.divider} />

        {/* Time Selection */}
        <div className={styles.searchSection}>
          <div className={styles.timeWrapper} ref={timeDropdownRef}>
            <div 
              className={styles.timeDisplay}
              onClick={() => {
                setShowTimeSelection(prev => !prev);
                setShowCalendar(false);
                setIsGuestDropdownOpen(false);
                setShowHotelDropdown(false);
              }}
            >
              <Clock size={18} className={styles.icon} />
              <span className={styles.timeLabel}>{getDisplayTime(selectedTime)}</span>
              <ChevronDown size={16} className={`${styles.chevron} ${showTimeSelection ? styles.rotated : ''}`} />
            </div>
            
            {showTimeSelection && (
              <div className={styles.timeDropdown}>
                <div className={styles.timeHeader}>
                  <span>Select Time Slot</span>
                </div>
                <div className={styles.timeOptions}>
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.value}
                      className={`${styles.timeOption} ${selectedTime === slot.value ? styles.active : ''}`}
                      onClick={() => {
                        setSelectedTime(slot.value);
                        setShowTimeSelection(false);
                      }}
                    >
                      <span className={styles.timeOptionLabel}>{slot.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className={styles.divider} />

        {/* Guest & Room Selection */}
        <div className={styles.searchSection}>
          <div className={styles.guestWrapper} ref={guestDropdownRef}>
            <div 
              className={styles.guestDisplay}
              onClick={() => {
                setIsGuestDropdownOpen(prev => !prev);
                setShowCalendar(false);
                setShowTimeSelection(false);
                setShowHotelDropdown(false);
              }}
            >
              <Users size={18} className={styles.icon} />
              <span className={styles.guestText}>{totalGuests} Guest{totalGuests > 1 ? 's' : ''}</span>
              <span className={styles.roomText}>{totalRooms} Room{totalRooms > 1 ? 's' : ''}</span>
              <ChevronDown size={16} className={`${styles.chevron} ${isGuestDropdownOpen ? styles.rotated : ''}`} />
            </div>
            
            {isGuestDropdownOpen && (
              <div className={styles.guestDropdown}>
                <div className={styles.roomsContainer}>
                  {roomDetails.map((room, index) => (
                    <div key={room.id} className={styles.roomCard}>
                      <div className={styles.roomHeader}>
                        <span className={styles.roomTitle}>Room {index + 1}</span>
                        {roomDetails.length > 1 && (
                          <button 
                            className={styles.removeRoomBtn}
                            onClick={() => removeRoom(room.id)}
                            aria-label="Remove room"
                          >
                            <Trash2 size={16} />
                          </button>
                        )}
                      </div>
                      
                      <div className={styles.roomControls}>
                        <div className={styles.controlGroup}>
                          <div className={styles.controlLabel}>
                            <User size={14} />
                            <span>Adults</span>
                          </div>
                          <div className={styles.controlButtons}>
                            <button 
                              onClick={() => updateAdults(room.id, -1)} 
                              disabled={room.adults <= 1}
                            >
                              <Minus size={14} />
                            </button>
                            <span>{room.adults}</span>
                            <button 
                              onClick={() => updateAdults(room.id, 1)} 
                              disabled={room.adults >= 10}
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </div>
                        
                        <div className={styles.controlGroup}>
                          <div className={styles.controlLabel}>
                            <UserPlus size={14} />
                            <span>Child (0 - 12 yrs)</span>
                          </div>
                          <div className={styles.controlButtons}>
                            <button 
                              onClick={() => updateChildren(room.id, -1)} 
                              disabled={room.children <= 0}
                            >
                              <Minus size={14} />
                            </button>
                            <span>{room.children}</span>
                            <button 
                              onClick={() => updateChildren(room.id, 1)} 
                              disabled={room.children >= 10}
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button className={styles.addRoomBtn} onClick={addRoom}>
                  <Plus size={16} />
                  ADD MORE ROOMS
                </button>
              </div>
            )}
          </div>
        </div>

        <div className={styles.divider} />

        {/* Book Now Button */}
        <button className={styles.bookButton} onClick={handleSearch}>
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

export default SearchBarPremiere;