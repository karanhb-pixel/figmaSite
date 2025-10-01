import React from 'react';

const AchievementCard = ({ type, value, label, icon }) => {
  const cardClass = `achivement-card ${type === 'students' ? 'students-enrolled' : 'overall-rating'}`;

  return (
    <div className={cardClass}>
      <div className="content">
        <div>
          <h3>{value}</h3>
          {icon && <img src={icon} alt={`${label} icon`} />}
        </div>
        <p>{label}</p>
      </div>
      <div className="bg"></div>
    </div>
  );
};

export default AchievementCard;