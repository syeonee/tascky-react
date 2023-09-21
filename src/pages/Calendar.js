import React from "react";

import Header from "../components/Header";
import TodayTaskInfo from "../components/TodayTaskInfo";
import MonthCalendar from "../components/MonthCalendar";


const Calendar = () => {
    return (
        <>
            <Header
                leftBtnName="menu" leftOnclickHandle={() => { console.log("left button click"); }}
                headText="Monday, 5"
                rightBtnName="notification" rightOnclickHandle={() => { console.log("right button click"); }}
            />
            <MonthCalendar />
            <TodayTaskInfo />
        </>
    );
}

export default Calendar;