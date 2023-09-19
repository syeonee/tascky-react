import styled from 'styled-components';

const TimeBoardContainer = styled.div`
    position: absolute;
    top: ${props => props.boardtop * (75 / 6) + Math.floor(props.boardtop / 6) + 1}px;
    left: 68px;
    width: calc(100% - 70px);
    height: ${props => props.boardheight * (75 / 6)}px;
    border-radius: 16px;
    background: #${props => props.boardcolor || '63B4FF'};
`;

const BoardTitle = styled.div`
    position: absolute;
    top: 10px;
    left: 15px;
    color: #FFFFFF;
    font-weight: 500;
`;

const BoardPlace = styled.div`
    position: absolute;
    bottom: 10px;
    left: 15px;
    color: #E9FBDA;
    font-size: 11px;
    line-height: 11px;
`;

const BoardTime = styled.div`
    position: absolute;
    bottom: 10px;
    right: 15px;
    color: #E9FBDA;
    font-size: 11px;
    line-height: 11px;
`;

const getDiffTime = (startTime, endTime, isDiffFirst = false) => {
    const startAMPM = startTime.substr(5, 2);
    let startHour = startTime.substr(0, 2);
    const startMin = startTime.substr(3, 2);

    if (startAMPM === "pm" && startHour !== "12") {
        startHour = parseInt(startHour) + 12;
    }

    const startStr = isDiffFirst ? `${startHour}:00` : `${startHour}:${startMin}`;

    let endAMPM, endHour, endMin;

    if (isDiffFirst) {
        endAMPM = endTime.substr(5, 2);
        endHour = endTime.substr(0, 2);
        endMin = endTime.substr(3, 2);
    } else {
        endAMPM = startTime.substr(-2, 2);
        endHour = startTime.substr(-7, 2);
        endMin = startTime.substr(-4, 2);
    }

    if (endAMPM === "pm" && endHour !== "12") {
        endHour = parseInt(endHour) + 12;
    }

    const endStr = `${endHour}:${endMin}`;

    const startDate = new Date(`2023/06/01 ${startStr}:00`);
    const endDate = new Date(`2023/06/01 ${endStr}:00`);
    const diffMSec = endDate.getTime() - startDate.getTime();
    return diffMSec / (60 * 10000);
};

const TimeBoardItem = ({ title, place, time, firstTime, boardColor }) => {
    const diffFirst = getDiffTime(firstTime, time, true);
    const diffBoard = getDiffTime(time);

    return (
        <TimeBoardContainer boardcolor={boardColor} boardtop={diffFirst} boardheight={diffBoard}>
            <BoardTitle>{title}</BoardTitle>
            <BoardPlace>{place}</BoardPlace>
            <BoardTime>{time}</BoardTime>
        </TimeBoardContainer>
    );
};

export default TimeBoardItem;