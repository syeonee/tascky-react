import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css, keyframes } from 'styled-components';
import OnboardItem from "../components/OnboardItem";

const onboardItemList = [
    {
        OnboardImgSrc: process.env.PUBLIC_URL + `assets/images/onboard-background.png`,
        title: `Task Management`,
        prevDesc: `Let's create a `,
        colorDesc: `space`,
        nextDesc: ` for your workflows.`
    },
    {
        OnboardImgSrc: process.env.PUBLIC_URL + `assets/images/onboard-background2.png`,
        title: 'Task Management',
        prevDesc: `Work more `,
        colorDesc: `Structured`,
        nextDesc: ` and Organized 👌`
    },
    {
        OnboardImgSrc: process.env.PUBLIC_URL + `assets/images/onboard-background3.png`,
        title: 'Task Management',
        prevDesc: `Manage your `,
        colorDesc: `Tasks`,
        nextDesc: ` quickly for Results✌`
    }
]

const slideNextAnimation = keyframes`
    0% {
    opacity: 1;
    transform: translateX(0vw);
    }

    100% {
        opacity: 1;
        transform: translateX(-100vw);
    }
`;

const Onboard = styled.div`
`;

const OnePageOnboardItem = styled(OnboardItem)`
    width: 100vw;
    height: 81.5vh;
    position: absolute;
    left: 0;
    top:0;
    visibility: visible; 

    &.slide-next {
        visibility: hidden; 
    }
`;

const SlideContainer = styled.div`
    display: flex;
    width: 300vw;
    height: 81.5vh;
    position: relative;
    left: -100vw;
    visibility: hidden;  
    z-index: 3;

    &.slide-next {
        visibility: visible; 
        animation: ${slideNextAnimation} 2s forwards;
        animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1.000); 
    }
`;

const SliderButtons = styled.div`
    width: 50px;
    height: 8px;
    display: flex;
    justify-content: space-between;
    margin: 25px 0px 0px 30px;
`;

const SliderButton = styled.button`
    border: none;
    border-radius: 4px;
    width: 8px;
    height: 8px;
    padding: 0;

    ${({ current }) => {
        return current &&
            (
                css`
                    width: 20px;
                    background: #756EF3;  
                `
            )
    }
    }
`;

const SkipButton = styled.button`
    color: #002055;
    text-align: center;
    font-weight: 400;
    line-height: 24px; 
    margin: 52px 0px 0px 30px;
    border: none;
    padding: 0;
    background-color: transparent;
    cursor: pointer;
`;

const BottomBgImg = styled.img`
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 100px;
`;

const NextButton = styled.button`
    position: absolute;
    bottom: 42px;
    right: 21px;
    width: 24px;
    height: 24px;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    padding: 0;
    background-image: url(${process.env.PUBLIC_URL + 'assets/images/next-button.png'});
    background-color: transparent;
    background-repeat: no-repeat;
    background-size : cover;
    cursor: pointer;
`;

const Onboarding = () => {
    const navigate = useNavigate();

    const onboardItemRef = useRef();
    const containerRef = useRef();

    const [status, setStatus] = useState({
        page: 0,
        swipe: false
    });
    const [page, setPage] = useState(0);

    useEffect(() => {
        if (!onboardItemRef.current) return;

        const callback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setStatus((prev) => {
                        return {
                            page: prev.page + 1,
                            swipe: false
                        };
                    });
                }
            });
        }

        const options = { root: null, rootMargin: "0px", threshold: 1 };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(onboardItemRef.current);

        return () => {
            observer.disconnect();
        };

    }, []);

    const handleSwipe = () => {
        if (!status.swipe && ((page % 3) !== 2)) {
            setStatus((prev) => {
                return {
                    ...prev,
                    swipe: true
                };
            });
            setPage(page + 1);
        }

        if (!status.swipe && ((page % 3) === 2)) {
            navigate("/sign");
        }

    };

    return (
        <Onboard>
            <OnePageOnboardItem className={status.swipe && "slide-next"} {...onboardItemList[(page) % 3]} />
            <SlideContainer className={status.swipe && "slide-next"} ref={containerRef}>
                {onboardItemList.map((it, idx) => (
                    <OnboardItem key={idx} {...onboardItemList[(idx + status.page + 2) % 3]} ref={(idx === 2) ? onboardItemRef : null} />
                ))}
            </SlideContainer>
            <SliderButtons>
                {onboardItemList.map((it, idx) => (
                    <SliderButton key={idx} current={idx === (page % 3) ? true : false} />
                ))}
            </SliderButtons>
            <SkipButton>
                Skip
            </SkipButton>
            <NextButton onClick={handleSwipe} />
            <BottomBgImg src={`${process.env.PUBLIC_URL + 'assets/images/onboard-bottom-background.png'}`} alt="bg img" />
        </Onboard>
    );
};

export default Onboarding;