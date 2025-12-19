import React from 'react';
import Snowfall from 'react-snowfall';

export const ChristmasSnowfall = () => {
    // Current date logic
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    // Check if it's between Dec 15 and Dec 25
    const isChristmasTime = currentMonth === 11 && currentDay >= 15 && currentDay <= 25;

    if (!isChristmasTime) {
        return null;
    }

    return (
        <div style={{ position: 'fixed', width: '100vw', height: '100vh', top: 0, left: 0, pointerEvents: 'none', zIndex: 9999 }}>
            <Snowfall />
        </div>
    );
};
