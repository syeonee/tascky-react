import styled from 'styled-components';

import TimelineItem from './TimelineItem';
import TimeBoardItem from './TimeBoardItem';

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

const Timeline = () => {
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
            <TimeBoard title="Mobile app Design" place="Parc1 7F" time="09:40am - 10:30am" firstTime="09:40am - 10:00am" />
            <TimeBoard title="Mobile app Design" place="Parc1 7F" time="11:00am - 12:00pm" firstTime="09:40am - 10:00am" />
        </TimelineContainer>
    );
};

export default Timeline;