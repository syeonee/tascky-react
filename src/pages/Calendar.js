import React from "react";

import Header from "../components/Header";
import TodayTaskInfo from "../components/TodayTaskInfo";
import MonthCalendar from "../components/MonthCalendar";


const Calendar = () => {
    const selectedDate = new Date();
    const todos = JSON.parse(localStorage.getItem('todo')) || [];

    return (
        <>
            <Header
                leftBtnName="back-button" leftBtnHandle={() => { console.log("left button click"); }}
                headText="Calendar"
                rightBtnName="add-task2" rightBtnHandle={() => { console.log("right button click"); }}
            />
            <MonthCalendar />
            <TodayTaskInfo today={selectedDate} tasks={todos} />
        </>
    );
}

export default Calendar;