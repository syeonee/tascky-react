import React, { useState, useRef, useEffect, useContext } from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { TaskcySignedInContext } from '../App'

const BarTitle = styled.div`
    color: #002055;
    font-size: 18px;
    font-weight: 500;
    line-height: 18px; 
    text-align: center;
    margin-top: 28px;
`;

const BackButton = styled.button`
    position: absolute;
    top: 16px;
    left: 24px;
    width: 42px;
    height: 42px;
    border: none;
    padding: 0;
    background-color: transparent;
    background-image: url(${process.env.PUBLIC_URL + 'assets/images/back-button.png'}); 
    background-repeat: no-repeat;  
    background-size : cover;
    cursor: pointer;
`;

const Title = styled.div`
    color: #002055;
    font-size: 25px;
    font-weight: 600;
    line-height: 25px; 
    margin: 52px 0 0 24px;
`;

const Desc = styled.div`
    width: 249px;
    color: #868D95;
    font-weight: 400;
    line-height: 24px;
    margin: 12px 0 10px 24px;
`;

const SignInput = styled.input`
    width: calc(100% - 92px);
    height: 58px;
    border-radius: 16px;
    border: 1px solid #E9F1FF;
    background: #FFF;
    margin: 30px 0 0 24px;
    padding: 0 20px 0 20px;
    color: #002055;
    font-size: 16px;
    font-weight: 500;
    line-height: 16px; 

    &::placeholder{
        color: #848A94;
        font-weight: 500;
	}

    &:focus, &:focus-visible {
        border: 1px solid #756EF3;
        outline: none;
    }
`;

const FindPWButton = styled.button`
    color: #002055;
    font-weight: 500;
    border: none;
    padding: 0;
    margin: 16px 0 0 calc(100% - 149px);
    background-color: transparent;
    cursor: pointer;
`;

const BtnContainer = styled.div`
    width: calc(100% - 48px);
    height: 57px;
    position: relative;
    margin: 30px 24px 0 24px;
`;

const BtnShadow = styled.div`
    position: absolute;
    top: 14px;
    left: 0px;
    width: 100%;
    height: 43px;
    border-radius: 53px;
    opacity: 0.7;
    background: var(--linear, linear-gradient(136deg, #8B78FF 0%, #5451D6 101.74%));
    filter: blur(18.5px);
`;

const SignButton = styled.button`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 48px;
    border-radius: 16px;
    background: #756EF3;
    border: none;
    padding: 0px;
    color: #FFF;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    cursor: pointer;

    &:active{
        background: #5945FB;
    }
`;

const SignText = styled.div`
    color: #868D95;
    text-align: center;
    font-weight: 500;
    margin-top: 31px;
`;

const SocialSignContainer = styled.div`
    margin-top: 30px;
    width: 150px;
    height: 58px;
    margin: 30px auto;
    display: flex;
    justify-content: space-between;
`;

const SocialSignButton = styled.button`
    width: 60px;
    height: 58px; 
    background-image: url(${props => process.env.PUBLIC_URL + 'assets/images/' + props.social + '.png'});
    background-color: transparent;
    background-repeat: no-repeat;
    background-size : cover;
    padding: 0;
    border: none;
    cursor: pointer;
`;

const ChangeSignText = styled.div`
    color: #868D95;
    text-align: center;
    font-weight: 400; 
`;

const ChagneSignButton = styled.button`
    color: #756EF3;
    font-weight: 500;
    margin: 10px auto;
    display: block;
    border: none;
    padding: 0;
    background-color: transparent;
    cursor: pointer;
`;

const Sign = () => {
    const navigate = useNavigate();

    const nameRef = useRef();
    const emailRef = useRef();
    const pwRef = useRef();
    const testRef = useRef();

    const setIsSignedIn = useContext(TaskcySignedInContext);
    const [isSignInPage, setIsSignInPage] = useState(true);
    const [sign, setSign] = useState({
        name: "",
        mail: "",
        pw: ""
    });

    const handleChangeState = (e) => {
        setSign({
            ...sign,
            [e.target.name]: e.target.value
        })
    };

    const handleSign = () => {
        if (!isSignInPage && sign.name.length < 1) {
            nameRef.current.focus();
            return;
        }

        if (sign.mail.length < 1) {
            emailRef.current.focus();
            return;
        }

        if (sign.pw.length < 1) {
            pwRef.current.focus();
            return;
        }
        setIsSignedIn[1](true);
        navigate('/', { replace: true });
    };

    useEffect(() => {
        if (!isSignInPage) {
            nameRef.current.value = "";
        }
        emailRef.current.value = "";
        pwRef.current.value = "";

        setSign({
            name: "",
            mail: "",
            pw: ""
        });
    }, [isSignInPage]);

    return (
        <>
            <BarTitle>{isSignInPage ? "Sign In" : "Sign Up"}</BarTitle>
            <BackButton onClick={() => navigate(-1)} />
            <Title ref={testRef}>{isSignInPage ? "Welcome Back" : "Create Account"}</Title>
            <Desc>
                {isSignInPage
                    ? "Please Inter your email address and password for Login 아무거나 입력하셔도 로그인 됩니다."
                    : "Please Inter your Informatioin and create your account"
                }
            </Desc>
            {!isSignInPage &&
                <SignInput
                    name="name"
                    ref={nameRef}
                    onChange={handleChangeState}
                    placeholder="Enter your name"
                />
            }
            <SignInput
                name="mail"
                ref={emailRef}
                onChange={handleChangeState}
                placeholder="Enter your mail"
            />
            <SignInput
                name="pw"
                ref={pwRef}
                onChange={handleChangeState}
                placeholder="Enter your password"
            />
            {isSignInPage && <FindPWButton>Forgot Password?</FindPWButton>}
            <BtnContainer>
                <BtnShadow />
                <SignButton onClick={handleSign}>
                    {isSignInPage ? "Sign In" : "Sign Up"}
                </SignButton>
            </BtnContainer>
            <SignText>{isSignInPage ? "Signin with" : "Signup With"}</SignText>
            <SocialSignContainer>
                <SocialSignButton social="apple" />
                <SocialSignButton social="google" />
            </SocialSignContainer>
            <ChangeSignText>
                {isSignInPage ? "Not Registrar Yet?" : "Have an Account?"}
            </ChangeSignText>
            <ChagneSignButton onClick={e => setIsSignInPage(!isSignInPage)} >
                {isSignInPage ? "Sign In" : "Sign Up"}
            </ChagneSignButton>
        </>
    );
};

export default Sign;