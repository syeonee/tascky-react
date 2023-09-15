import styled from 'styled-components';

import TimelineItem from './TimelineItem';

const TimelineContainer = styled.div`
    height: calc(100% - 397px);
    overflow-y: scroll;
    margin: 0 24px 0 24px;
    
    &::-webkit-scrollbar {
        display: none;
    }
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
            <TimelineItem islast time="6 pm" />
        </TimelineContainer>
    );
};

export default Timeline;