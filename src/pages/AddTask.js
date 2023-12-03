import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Header from "../components/Header";

const InputDesc = styled.div`
    color: #868D95;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    margin: 24px 0 10px 24px;
`;

const AddDatePicker = styled(DatePicker)`
    width: calc(100% - 92px);
    height: 58px;
    border-radius: 16px;
    border: 1px solid #E9F1FF;
    background: #FFF;
    margin: 0px 0 0 24px;
    padding: 0 20px 0 20px;
    color: #002055;
    font-family: Poppins;
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

const TaskInput = styled.input`
    width: calc(100% - 92px);
    height: 58px;
    border-radius: 16px;
    border: 1px solid #E9F1FF;
    background: #FFF;
    margin: 0px 0 0 24px;
    padding: 0 20px 0 20px;
    color: #002055;
    font-family: Poppins;
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

const TimeContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const TimeInput = styled.div`
    width: 50%;
`;

const StatusContainer = styled.div`
    width: calc(100% - 48px);
    margin-left: 24px;
    display: flex;
    justify-content: space-between;
`;

const StatusButton = styled.button`

`;

const AddButton = styled.button`
width: calc(100% - 48px);
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
margin: 24px 24px 0px 24px;

&:active{
    background: #5945FB;
}
`;

const AddTask = () => {
    const navigate = useNavigate();

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();

    const [task, setTask] = useState({
        name: "",
        date: new Date(),
        start: "",
        end: "",
        status: ""
    });

    const nameRef = useRef();
    const dateRef = useRef();
    const startRef = useRef();
    const endRef = useRef();
    const statusRef = useRef();

    const handleChangeState = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        });
    };

    const handleAdd = () => {
        if (task.name.length < 1) {
            nameRef.current.focus();
            return;
        }

        if (task.start == "" && task.end == "") {
            let todos = JSON.parse(localStorage.getItem('todo')) || [];
            todos.push(task);
            localStorage.setItem("todo", JSON.stringify(todos));
        } else {
            let events = JSON.parse(localStorage.getItem('event')) || [];
            events.push(task);
            localStorage.setItem("event", JSON.stringify(events));
        }

        // localStorage.getItem('isSignedIn')
        // localStorage.setItem("diary", JSON.stringify(newState));

        navigate('/', { replace: true });
    };


    return (
        <>
            <Header
                leftBtnName="back-button" leftBtnHandle={() => { navigate('/'); }}
                headText="Add Task"
            />
            <InputDesc>Task Name</InputDesc>
            <TaskInput
                name="name"
                ref={nameRef}
                onChange={handleChangeState}
                placeholder="Enter your task name"
            />
            <InputDesc>Date</InputDesc>
            <AddDatePicker
                ref={dateRef}
                selected={task.date}
                dateFormat="MMMM d, yyyy"
                onChange={(date) => {
                    const e = { target: {} };
                    e.target.name = "date";
                    e.target.value = date;
                    handleChangeState(e);
                }}
            />
            {/* <TimeContainer>
                <TimeInput>
                    <InputDesc>Start Time</InputDesc>
                    <AddDatePicker
                        ref={startRef}
                        selected={task.start}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={10}
                        dateFormat="h:mm aa"
                        onChange={(date) => {
                            const e = { target: {} };
                            e.target.name = "start";
                            e.target.value = date;
                            handleChangeState(e);
                        }}
                    />
                </TimeInput>
                <TimeInput>
                    <InputDesc>End Time</InputDesc>
                    <AddDatePicker
                        ref={endRef}
                        selected={task.end}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={10}
                        dateFormat="h:mm aa"
                        onChange={(date) => {
                            const e = { target: {} };
                            e.target.name = "end";
                            e.target.value = date;
                            handleChangeState(e);
                        }}
                    />
                </TimeInput>
            </TimeContainer> */}
            {/* <InputDesc>Status</InputDesc>
            <StatusContainer>
                <StatusButton>Todo</StatusButton>
                <StatusButton>Ongoing</StatusButton>
                <StatusButton>Complete</StatusButton>
            </StatusContainer> */}
            <AddButton onClick={handleAdd} >Add</AddButton>
        </>
    );
}

export default AddTask;