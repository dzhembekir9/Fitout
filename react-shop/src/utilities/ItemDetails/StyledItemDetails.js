import styled from 'styled-components'

export const StyledItemDetailsWrapper = styled.div`
    display: flex;
    justify-content: center;
    border-top: 1px solid #2b331f;
    margin: 50px auto;
`;

export const StyledImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #2b331f;
`;

export const StyledInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    max-width: 40%;
    h1 {
        font-size: 40px;
        color: #2b331f;
    }
    &:nth-child(3) {
        font-size: 22px;
        font-weight: bold;
        color: red
    }
`;

export const StyledRatingWrapper = styled.div`
    display: flex;
    position: relative;
`;

export const StyledStar = styled.img`
    width: 15px;
    height: 15px;
    cursor: pointer;
    &:hover {
        width: 20px;
        height: 20px;
    }
`;

export const StyledStarWrapper = styled.div`
    position: absolute;
    top: -3px;
    left: 35px;
`;

export const StyledChoiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: whitesmoke;
    padding: 15px;
    h2 {
        font-size: 25px;
    }
`;

export const StyledQuantityWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px;
`;

export const StyledQuantityButton = styled.button`
    border: 1px solid grey;
    padding: 5px 18px;
    color: black;
`;

export const StyledQuantity = styled.div`
    padding: 5px 18px;
    background-color: gainsboro;
    color: black;
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
`;

export const StyledAdd = styled.div`
    text-align: center;
    margin: 15px 10px;
    border: 1px solid black;
    cursor: pointer;
    background-color: #546747;
    color: white; 
    padding: 5px;
    transition: 0.1s;
    &:hover {
        opacity: 0.8;
    }
`;

export const StyledPrice = styled.p`
    font-size: 22px;
    font-weight: bold;
`;

export const StyledImage = (props) => {
    return (
        <img style={{width: 'auto', height: '500px'}} src={props.url} alt="Product"/>
    )
};
