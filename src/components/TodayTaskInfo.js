import styled from 'styled-components';

import Line from "./Line"

const TodayDate = styled.div`
    color: #002055;
    font-size: 25px;
    font-weight: 600;
    line-height: 25px;
    margin: 24px 0 0 24px;
`;

const TodayText = styled.div`
    color: #002055;
    font-weight: 500;
    margin: 10px 0 10px 34px;
`;

const TaskContainer = styled.div`
    margin: 0 24px 10px 24px;
    height: 145px;
    border-radius: 10px;
    border: 1px solid #E9F1FF;
`;

const Task = styled.div`
    padding-left: 10px;
    height: 35px;
    line-height: 35px;
`;

const TaskDot = styled.img`
    width: 7px;
    height: 7px;
    margin-right: 7px;
    content:url(${process.env.PUBLIC_URL + 'assets/images/task-dot.png'});
`;

const TodayTaskInfo = () => {
    return (
        <>
            <TodayDate>October, 20  ✍</TodayDate>
            <TodayText>Today’s Task</TodayText>
            <TaskContainer>
                <Task><TaskDot />To do develop</Task>
                <Line margin="10" />
                <Task><TaskDot />To do develop</Task>
                <Line margin="10" />
                <Task><TaskDot />To do develop</Task>
                <Line margin="10" />
                <Task />
            </TaskContainer>

        </>
    );
};

export default TodayTaskInfo;