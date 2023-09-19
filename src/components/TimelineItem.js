import styled from 'styled-components';

import Line from "./Line"

const Time = styled.div`
    height: 75px;
    font-size: 15px;
    font-weight: 600;
    line-height: 75px;
`;

const TimelineItem = ({ time, isfirst }) => {
    return (
        <>
            {isfirst && <Line />}
            <Time>{time}</Time>
            <Line />
        </>
    );
};

export default TimelineItem;