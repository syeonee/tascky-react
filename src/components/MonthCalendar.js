import { useState } from "react";
import styled from "styled-components";

import { getCalendarDateList, getMonthString } from '../util/date';

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
    flex-wrap: wrap;
    margin-bottom: 8px;
`;

const DateItem = styled.div`
    position: relative;
    flex-basis: 14.2%;
    height: 30px;
    color: #002055;
    text-align: center;
    font-size: 13px;
    font-weight: 500;
    line-height: 30px;

    &.not-current {
        color: #848A94;
    }

    &.todo {
        color: #756EF3;
    }

    &.red {
        color: #FF1D1D;
    }

    &.blue {
        color: #1D26FF;
    }
`;

const Circle = styled.div`
    width: 22px;
    height: 22px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #756EF3;
    border-radius: 50%;
`;

const MonthCalendar = () => {
    const today = new Date();
    const [calendarDate, setCalendarDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
    const dateList = getCalendarDateList(calendarDate);

    const handlePrevMonth = () => {
        const curDate = new Date(calendarDate);
        curDate.setMonth(curDate.getMonth() - 1);
        setCalendarDate(curDate);
    };

    const handleNextMonth = () => {
        const curDate = new Date(calendarDate);
        curDate.setMonth(curDate.getMonth() + 1);
        setCalendarDate(curDate);
    };

    return (
        <MonthCalendarContainer>
            <CalendarHeader>
                <MonthChangeButton direction="prev" onClick={handlePrevMonth} />
                <CurrentMonthText>{getMonthString(calendarDate)}</CurrentMonthText>
                <MonthChangeButton direction="next" onClick={handleNextMonth} />
            </CalendarHeader>
            <DateContainer>
                <DateItem className="red">S</DateItem>
                <DateItem className="not-current">M</DateItem>
                <DateItem className="not-current">T</DateItem>
                <DateItem className="not-current">W</DateItem>
                <DateItem className="not-current">T</DateItem>
                <DateItem className="not-current">F</DateItem>
                <DateItem className="blue">S</DateItem>

                {dateList.prevMonthDates.map((item) =>
                    <DateItem className="not-current" key={item} >{item}</DateItem>
                )}
                {dateList.currentMonthDates.map((item) =>
                    <DateItem className="todo" key={item} >{item}</DateItem>
                )}
                {dateList.nextMonthDates.map((item) =>
                    <DateItem className="not-current" key={item} >{item}</DateItem>
                )}
            </DateContainer>

        </MonthCalendarContainer>
    );
};

export default MonthCalendar;