export const getCalendarDateList = (date) => {
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth();

    const prevMonthLast = new Date(currentYear, currentMonth, 0);
    const currentMonthLast = new Date(currentYear, currentMonth + 1, 0);

    const prevMonthLastDate = prevMonthLast.getDate();
    const prevMonthLastDay = prevMonthLast.getDay();

    const currentMonthLastDate = currentMonthLast.getDate();
    const currentMonthLastDay = currentMonthLast.getDay();

    const prevMonthDates = [];
    const currentMonthDates = [...Array(currentMonthLastDate + 1).keys()].slice(1);
    const nextMonthDates = [];

    if (prevMonthLastDay !== 6) {
        for (let i = 0; i < prevMonthLastDay + 1; i++) {
            prevMonthDates.unshift(prevMonthLastDate - i);
        }
    }

    if (currentMonthLastDay !== 6) {
        for (let i = 1; i < 7 - currentMonthLastDay; i++) {
            nextMonthDates.push(i);
        }
    }


    const dates = {
        prevMonthDates: prevMonthDates,
        currentMonthDates: currentMonthDates,
        nextMonthDates: nextMonthDates
    }

    return dates;

};

export const getMonthString = (date) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return `${months[date.getMonth()]} ${date.getFullYear()}`
}