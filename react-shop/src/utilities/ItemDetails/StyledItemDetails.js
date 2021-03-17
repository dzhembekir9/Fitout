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
    align-self: center;
    text-align: center;
    width: 25%;
    margin-top: 15px;
    border: 1px solid black;
    cursor: pointer;
    border-radius: 5px;
    background-color: #fddca5;
    transition: 0.1s;
    box-shadow: 0px 2px 0px 0px black;
    &:hover {
        transition: 0.1s;
        transform: translateY(-2px);
    }
    &:active {
        transform: translateY(1px);
        box-shadow: 0 0 0 0;
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
