import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Navigator = styled.div`
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: calc(100vw - 32px);
    height: 82px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px 0 16px;
`;

const NavButton = styled.button`
    width: 50px;
    height: 50px;
    border: none;
    padding: 0;
    background-image: url(${props => process.env.PUBLIC_URL + 'assets/images/' + props.page + '-tab.png'});
    background-color: transparent;
    background-repeat: no-repeat;
    background-size : cover;
    cursor: pointer;

    &.active {
        background-image: url(${props => process.env.PUBLIC_URL + 'assets/images/active-' + props.page + '-tab.png'});
    }
`;

const AddNavButton = styled.button`
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 25px;
    padding: 0;
    box-shadow: 0px 8px 6px -6px #666;
    background-image: url(${process.env.PUBLIC_URL + 'assets/images/add-tab.png'});
    background-color: #756EF3;
    background-repeat: no-repeat;
    background-size : cover;
    cursor: pointer;
`;

const TabNavigator = () => {
    const navigate = useNavigate();
    const [current, setCurrent] = useState("home");

    const handleButton = (page) => {
        setCurrent(page);
        navigate(`/${page}`);
    }

    return (
        <Navigator>
            <NavButton className={current === "home" && "active"} page="home" onClick={() => handleButton("home")} />
            <NavButton className={current === "calendar" && "active"} page="calendar" onClick={() => handleButton("calendar")} />
            <AddNavButton />
            <NavButton className={current === "project" && "active"} page="project" onClick={() => handleButton("project")} />
            <NavButton className={current === "profile" && "active"} page="profile" onClick={() => handleButton("profile")} />
        </Navigator>
    );
};

export default TabNavigator;