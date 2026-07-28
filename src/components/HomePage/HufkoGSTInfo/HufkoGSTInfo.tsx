import React from 'react';
import styles from './HufkoGSTInfo.module.scss';
import { 
  FaShieldAlt, 
  FaRegBuilding, 
  FaStar, 
  FaBriefcase, 
  FaTrophy 
} from 'react-icons/fa';

interface InfoItem {
  id: string;
  icon: React.ReactNode;
  value: string;
  label: string;
  iconColor?: string;
}

const HufkoGSTInfo: React.FC = () => {
  const infoItems: InfoItem[] = [
    {
      id: 'fssai',
      icon: <FaShieldAlt />,
      value: 'FSSAI',
      label: 'Certified',
      iconColor: '#4CAF50'
    },
    {
      id: 'gst',
      icon: <FaRegBuilding />,
      value: 'GST',
      label: 'Registered',
      iconColor: '#FF6B35'
    },
    {
      id: 'rating',
      icon: <FaStar />,
      value: '4.9/5',
      label: 'Customer Rating',
      iconColor: '#FFD700'
    },
    {
      id: 'experience',
      icon: <FaBriefcase />,
      value: '5+',
      label: 'Years in Business',
      iconColor: '#2196F3'
    },
    {
      id: 'awards',
      icon: <FaTrophy />,
      value: '15+',
      label: 'Industry Awards',
      iconColor: '#9C27B0'
    }
  ];

  return (
    <div className={styles.hufkoGSTInfo}>
      <div className={styles.container}>
        <div className={styles.infoGrid}>
          {infoItems.map((item) => (
            <div key={item.id} className={styles.infoCard}>
              <div 
                className={styles.iconWrapper}
                style={{ backgroundColor: `${item.iconColor}15` }}
              >
                <span style={{ color: item.iconColor }}>
                  {item.icon}
                </span>
              </div>
              <div className={styles.infoContent}>
                <h3 className={styles.value}>{item.value}</h3>
                <p className={styles.label}>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HufkoGSTInfo;