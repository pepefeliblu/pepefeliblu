export enum HolidayMode {
    None = "none",
    Christmas = "christmas-mode",
    NewYears = "new-years-mode",
}

export const getHolidayMode = (date: Date = new Date()): HolidayMode => {

    const month = date.getMonth(); // 0-indexed, 11 is December
    const day = date.getDate();

    if (month === 11) {
        if (day >= 15 && day <= 25) {
            return HolidayMode.Christmas;
        }

        if (day >= 27 && day <= 31) {
            return HolidayMode.NewYears;
        }
    }

    return HolidayMode.None;
};

export const isHolidayActive = (mode: HolidayMode): boolean => {
    return mode !== HolidayMode.None;
};
