import React from 'react';
import Snowfall from 'react-snowfall';

export const ChristmasSnowfall = () => {
    // Current date logic
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    // Check if it's between Dec 15 and Dec 25
    const isChristmasTime = currentMonth === 11 && currentDay >= 15 && currentDay <= 25;

    // Logic to determine initial color based on current theme
    const getSnowColor = () => {
        if (typeof document !== 'undefined' && document.documentElement.classList.contains('dark')) {
            return '#ffffff'; // White for dark mode
        }
        return '#a3bffa'; // Frosty blue for light mode
    };

    const [snowColor, setSnowColor] = React.useState('#ffffff'); // Default to white

    React.useEffect(() => {
        // Set initial color
        setSnowColor(getSnowColor());

        // Observer to watch for class changes on <html>
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    setSnowColor(getSnowColor());
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });

        return () => observer.disconnect();
    }, []);

    if (!isChristmasTime) {
        return null;
    }

    return (
        <div style={{ position: 'fixed', width: '100vw', height: '100vh', top: 0, left: 0, pointerEvents: 'none', zIndex: 9999 }}>
            <Snowfall color={snowColor} />
        </div>
    );
};
