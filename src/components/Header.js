import styled from 'styled-components';

const HeaderBar = styled.div`
    padding: 16px 24px 16px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #E9F1FF;
`;

const HeadText = styled.div`
    color: #002055;
    font-size: 18px;
    font-weight: 500;
    line-height: 18px; 
`;

const HeadButton = styled.button`
    width: 42px;
    height: 42px;
    background-image: url(${props => process.env.PUBLIC_URL + 'assets/images/' + props.$btnName + '.png'});
    background-color: transparent;
    background-repeat: no-repeat;
    background-size : cover;
    padding: 0;
    border: none;
    cursor: pointer;
`;

const Header = ({ headText, leftBtnName, leftBtnHandle, rightBtnName, rightBtnHandle }) => {
    return (
        <HeaderBar>
            <HeadButton $btnName={leftBtnName} onClick={leftBtnHandle} />
            <HeadText>{headText}</HeadText>
            <HeadButton $btnName={rightBtnName} onClick={rightBtnHandle} />
        </HeaderBar>
    );
}

export default Header;