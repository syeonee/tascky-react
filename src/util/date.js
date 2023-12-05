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

    return `${months[date.getMonth()]} ${date.getFullYear()}`;
}

export const getMonthDayString = (date) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return `${date.getDate()} ${months[date.getMonth()]}`;
}

export const getTimeString = (time) => {
    const date = new Date(time);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? (hours < 10 ? '0' + hours : hours) : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;

    return strTime;
}