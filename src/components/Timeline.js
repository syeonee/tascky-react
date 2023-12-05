import styled from 'styled-components';

import TimelineItem from './TimelineItem';
import TimeBoardItem from './TimeBoardItem';
import { getTimeString } from '../util/date';

const TimelineContainer = styled.div`
position: relative;
    height: calc(100% - 397px);
    overflow-y: scroll;
    margin: 0 24px 0 24px;
    
    &::-webkit-scrollbar {
        display: none;
    }
`;

const TimeBoard = styled(TimeBoardItem)`
    
`;

const Timeline = ({ tasks }) => {
    return (
        <TimelineContainer>
            <TimelineItem isfirst time="9 am" />
            <TimelineItem time="10 am" />
            <TimelineItem time="11 am" />
            <TimelineItem time="12 pm" />
            <TimelineItem time="1 pm" />
            <TimelineItem time="2 pm" />
            <TimelineItem time="3 pm" />
            <TimelineItem time="4 pm" />
            <TimelineItem time="5 pm" />
            <TimelineItem time="6 pm" />
            {/* {tasks.map((task) => <TimeBoard title={task.name} place="Parc1 7F" time={`${getTimeString(task.start)} - ${getTimeString(task.end)}`} firstTime="09:40am - 10:00am" />)} */}
            <TimeBoard title="모바일 크기 화면을 권장합니다." place="Parc1 7F" time="09:40am - 10:30am" firstTime="09:40am - 10:00am" />
            <TimeBoard title="우측상단 아이콘을 통해 투두를 추가할 수 있습니다." place="Parc1 7F" time="11:00am - 12:00pm" firstTime="09:40am - 10:00am" />
        </TimelineContainer>
    );
};

export default Timeline;