import styled from 'styled-components';

import Line from "./Line"
import { getMonthDayString } from '../util/date';

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
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
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

const TodayTaskInfo = ({ today, tasks }) => {
    return (
        <>
            <TodayDate>{getMonthDayString(today)}  ✍</TodayDate>
            <TodayText>Today’s Task</TodayText>
            <TaskContainer>
                {tasks.map((task) =>
                    <>
                        <Task><TaskDot />{task.name}</Task>
                        <Line margin="10" />
                    </>
                )}
            </TaskContainer>

        </>
    );
};

export default TodayTaskInfo;