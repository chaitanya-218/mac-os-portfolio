import React from 'react';

const DateTime = () => {
  const getFormattedTime = () => {
    const now = new Date();
    const day = now.toLocaleDateString('en-US', { weekday: 'short' });
    const month = now.toLocaleDateString('en-US', { month: 'short' });
    const date = now.getDate();
    const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    return `${day} ${month} ${date} ${time}`;
  };

  return (
    <div>
      <p> {getFormattedTime()}</p>
    </div>
  );
};

export default DateTime;