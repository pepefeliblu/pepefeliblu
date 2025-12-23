import React, { useEffect, useRef } from "react";
// @ts-ignore
import { Fireworks } from "fireworks-js";

import { getHolidayMode, HolidayMode } from "../utils/holidayManager";

export const NewYearFireworks = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const isNewYearTime = getHolidayMode() === HolidayMode.NewYears;

    useEffect(() => {
        if (!isNewYearTime || !containerRef.current) return;

        const fireworks = new Fireworks(containerRef.current, {
            autoresize: true,
            opacity: 0.5,
            acceleration: 1.05,
            friction: 0.96,
            gravity: 1.2,
            particles: 50,
            trace: 3,
            traceSpeed: 10,
            explosion: 5,
            intensity: 15,
            flickering: 50,
            lineStyle: "round",
            hue: {
                min: 0,
                max: 360,
            },
            delay: {
                min: 50,
                max: 80,
            },
            rocketsPoint: {
                min: 0,
                max: 100,
            },
            lineWidth: {
                explosion: {
                    min: 1,
                    max: 3,
                },
                trace: {
                    min: 1,
                    max: 2,
                },
            },
            brightness: {
                min: 50,
                max: 80,
            },
            decay: {
                min: 0.015,
                max: 0.03,
            },
            mouse: {
                click: false,
                move: false,
                max: 1,
            },
        });

        fireworks.start();

        return () => {
            fireworks.stop();
        };
    }, [isNewYearTime]);

    if (!isNewYearTime) {
        return null;
    }

    return (
        <div
            ref={containerRef}
            style={{
                position: "fixed",
                width: "100vw",
                height: "100vh",
                top: 0,
                left: 0,
                pointerEvents: "none",
                zIndex: 9999,
                background: "transparent",
            }}
        />
    );
};
