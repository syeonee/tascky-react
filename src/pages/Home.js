import React from "react";

import Header from "../components/Header";
import TodayTaskInfo from "../components/TodayTaskInfo";
import Timeline from "../components/Timeline";


const Home = () => {
    return (
        <>
            <Header
                leftBtnName="menu" leftOnclickHandle={() => { console.log("left button click"); }}
                headText="Monday, 5"
                rightBtnName="notification" rightOnclickHandle={() => { console.log("right button click"); }}
            />
            <TodayTaskInfo />
            <Timeline />
        </>
    );
}

export default Home;