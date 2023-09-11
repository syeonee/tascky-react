import React, { forwardRef } from "react";
import styled from 'styled-components';

const OnboardDiv = styled.div`
    position: relative;
    width: 100vw;
    height: 100%;
`;

const OnboardImg = styled.img`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    z-index: -1;
`;

const Title = styled.div`
    position: relative;
    top: 75%;
    color: #756EF3;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    margin: 0 0 0 30px;
`;

const Desc = styled.div`
    position: relative;
    top: calc(75% + 18px);
    color: #002055;
    font-family: Poppins;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: 45px; 
    margin: 0px 30px 0px 30px;
`;

const Color = styled.span`
    color: #756EF3;
    font-weight: 600;
`;

const OnboardItem = forwardRef(({ className, OnboardImgSrc, title, prevDesc, colorDesc, nextDesc }, ref) => {
    return (
        <OnboardDiv className={className} ref={ref}>
            <OnboardImg src={OnboardImgSrc} />
            <Title>{title}</Title>
            <Desc>{prevDesc}<Color>{colorDesc}</Color>{nextDesc}</Desc>
        </OnboardDiv>

    );
});

export default OnboardItem;