import React from "react";
import styled from 'styled-components';

const Start = styled.div`
    background-color: #6652FF;
    background-image: url(${process.env.PUBLIC_URL}assets/images/welcom-background.png); 
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
`;

const BottomModal = styled.div`
    z-index: 2;
    position: fixed;
    width: 100%;
    height: 50%;
    bottom: 0;
    border-radius: 30px 30px 0 0;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Logo = styled.img`
    width: 191px;
    height: 48px;
    margin-top: 50px;
`;

const Title = styled.div`
    color: #2F394B;
    text-align: center;
    font-family: Poppins;
    font-size: 37px;
    font-style: normal;
    font-weight: 600;
    line-height: 45px; 
    letter-spacing: -0.8px;
    margin-top: 10px;
`;

const Desc = styled.div`
    width: 295px;
    color: #8D8D8D;
    text-align: center;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    margin-top: 10px;
`;

const BtnContainer = styled.div`
    width: 100%;
    position: relative;
    margin-top: 42px;
`;

const BtnShadow = styled.div`
    position: absolute;
    top: 8px;
    left: 0px;
    width: calc(100% - 130px);
    height: 60px;
    margin: 0px 65px 0px 65px;
    border-radius: 53px;
    opacity: 0.7;
    background: var(--linear, linear-gradient(136deg, #8B78FF 0%, #5451D6 101.74%));
    filter: blur(18.5px);
`;

const StartButton = styled.button`
    position: absolute;
    top: 0px;
    left: 0px;
    width: calc(100% - 80px);
    height: 60px;
    margin: 0px 40px 0px 40px;
    border-radius: 15px;
    background: linear-gradient(136deg, #8B78FF 0%, #5451D6 101.74%);
    color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Product Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 120% */
    letter-spacing: -0.3px;
    border: none;
    padding: 0px;

    &:active{
        background: #5945FB;
    }
`;

const start = () => {

    return (
        <Start>
            <BottomModal>
                <Logo src={`${process.env.PUBLIC_URL + 'assets/images/logo.png'}`} alt="logo" />
                <Title>
                    Building Better Workplaces
                </Title>
                <Desc>
                    Create a unique emotional story that describes better than words
                </Desc>
                <BtnContainer>
                    <BtnShadow />
                    <StartButton onClick={() => { }}>
                        Get Started
                    </StartButton>
                </BtnContainer>
            </BottomModal>
        </Start>
    );
};

export default start;