import styled from 'styled-components'

export const StyledItemsWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    background: linear-gradient(white, whitesmoke);
`;

export const StyledItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #bbc8ba;
    width: 20%;
    height: 550px;
    position: relative;
    margin: 40px auto;
    background-color: white;
    &:hover {
        cursor: pointer;
    }
`;

export const StyledItemContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    box-shadow: rgb(0 0 0 / 9%) 0px 12px 24px 0px;
`;

export const StyledTitle = styled.h1`
    background-color: #2b331f;
    color: white;
    font-size: 30px;
    margin: -3rem 1rem 0px;
    text-align: center;
    transform: skew(-5deg) rotate(-1deg);
    text-shadow: rgb(0 0 0 / 10%) 2px 2px 0px;
    line-height: 1.3;
    padding: 0 10px;
`;

export const StyledPrice = styled.h1`
background-color: #fab73d;
    color: white;
    font-size: 25px;
    position: absolute;
    right: 5px;
    top: 0px;
    padding: 0 5px;
    transform: skew(0deg, 5deg);
`;

export const StyledDescription = styled.p`
    font-size: 20px;
    padding: 10px;
`;

export const StyledItemActionsWrapper = styled.div`
    display: flex;
    text-align: center;
`;

export const StyledItemAction = styled.div`
    flex: 1;
    font-size: 20px;
    padding: 10px;
    background: #546747;
    color: white;
    &:hover {
        opacity: 0.7;
    }
`;

export const StyledImage = (props) => {
    return (
        <img style={{width: '350px', height: '400px'}} src={props.url} alt=""/>
    )
};