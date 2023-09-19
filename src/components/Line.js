import styled from 'styled-components';

const LineDiv = styled.div`
    height: ${({ height }) => height || '1'}px;
    background-color: ${({ color }) => color || '#E9F1FF'};
    margin-left: ${({ margin }) => margin || 0}px;
    margin-right: ${({ margin }) => margin || 0}px;
`;

const Line = (props) => {
    return (
        <LineDiv {...props} />
    );
};

export default Line;