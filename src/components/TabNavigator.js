import React, { useState } from "react";
import styled from "styled-components";

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
    const [current, setCurrent] = useState("");

    return (
        <Navigator>
            <NavButton page="home" />
            <NavButton page="project" />
            <AddNavButton />
            <NavButton page="chat" />
            <NavButton page="profile" />
        </Navigator>
    );
};

export default TabNavigator;