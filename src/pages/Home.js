import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import TodayTaskInfo from "../components/TodayTaskInfo";
import Timeline from "../components/Timeline";
import { getMonthDayString } from '../util/date';


const Home = () => {
    const navigate = useNavigate();
    const today = new Date();

    const todos = JSON.parse(localStorage.getItem('todo')) || [];
    const events = JSON.parse(localStorage.getItem('event')) || [];

    console.log(events);

    return (
        <>
            <Header
                leftBtnName="notification" leftBtnHandle={() => { console.log("left button click"); }}
                headText="Today"
                rightBtnName="add-task2" rightBtnHandle={() => { navigate('/add'); }}
            />
            <TodayTaskInfo today={today} tasks={todos} />
            <Timeline tasks={events} />
        </>
    );
}

export default Home;