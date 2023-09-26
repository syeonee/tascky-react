import styled from "styled-components";

const MonthCalendarContainer = styled.div`
    border-radius: 16px;
    border: 1px solid #E9F1FF;
    background: #FFF;
    margin: 10px 24px 0 24px;
    padding: 0 10px 0 10px;
`;

const CalendarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    height:24px;
    margin: 22px 10px 22px 10px;
`;

const MonthChangeButton = styled.button`
    width: 24px;
    height: 24px;
    border: none;
    padding: 0;
    background-image: url(${props => process.env.PUBLIC_URL + 'assets/images/calendar-' + props.direction + '.png'});
    background-color: transparent;
    background-repeat: no-repeat;
    background-size : cover;
    cursor: pointer;
`;

const CurrentMonthText = styled.div`
    color: #756EF3;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    line-height: 18px;
`;

const DateContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
`;

const DateItem = styled.div`
    width: 30px;
    height: 30px;
    color: #002055;
    text-align: center;
    font-size: 13px;
    font-weight: 500;
    line-height: 30px;

    &.not-current {
        color: #848A94;
    }
`;

const MonthCalendar = () => {
    const today = new Date();

    const getDateList = (date = new Date()) => {
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

    return (
        <MonthCalendarContainer>
            <CalendarHeader>
                <MonthChangeButton direction="prev" />
                <CurrentMonthText>{"Sep 2021"}</CurrentMonthText>
                <MonthChangeButton direction="next" />
            </CalendarHeader>
            <DateContainer>
                <DateItem className="not-current">S</DateItem>
                <DateItem className="not-current">M</DateItem>
                <DateItem className="not-current">T</DateItem>
                <DateItem className="not-current">W</DateItem>
                <DateItem className="not-current">T</DateItem>
                <DateItem className="not-current">F</DateItem>
                <DateItem className="not-current">S</DateItem>
            </DateContainer>
            <DateContainer>
                <DateItem>31</DateItem>
                <DateItem>1</DateItem>
                <DateItem>2</DateItem>
                <DateItem>3</DateItem>
                <DateItem>4</DateItem>
                <DateItem>5</DateItem>
                <DateItem>6</DateItem>
            </DateContainer>
            <DateContainer>
                <DateItem>7</DateItem>
                <DateItem>8</DateItem>
                <DateItem>9</DateItem>
                <DateItem>10</DateItem>
                <DateItem>11</DateItem>
                <DateItem>12</DateItem>
                <DateItem>13</DateItem>
            </DateContainer>

        </MonthCalendarContainer>
    );
};

export default MonthCalendar;