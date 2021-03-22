import styled from 'styled-components'

export const StyledWrapper = styled.div`
    display: flex;
`;

export const StyledCartWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledCartContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledImgWrapper = styled.div`
    display: flex;
    padding: 20px;
    width: 250px;
    justify-content: center;
    background-color: white;
`;

export const StyledCart = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: whitesmoke;
    padding: 10px 20px;
    border: 1px solid gainsboro;
`;

export const StyledCheckout = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
`;

export const StyledCodeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50%;
`;

export const StyledCodeContainer = styled.div`
    text-align: center;
    background-color: whitesmoke;
    border: 1px solid gainsboro;
    padding: 20px;
`;

export const StyledCheckoutContainer = styled.div`
    background-color: whitesmoke;
    border: 1px solid gainsboro;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledPriceWrapper = styled.div`
    display: flex;
    align-items: baseline;
    padding: 20px;
`;

export const StyledApplyBtn = styled.div`
    background-color: #fab73d;
    margin-top: 20px;
    margin-left: 40px;
    margin-right: 40px;
    padding: 5px;
    cursor: pointer;
    color: whitesmoke;
    font-size: 18px;
    transition: 0.2s;

    &:hover {
        background-color: #fddca5;
        transition: 0.2s;
        color: #2b331f;
    }
`;

export const StyledCheckoutBtn = styled.div`
    background-color: #546747;
    margin-bottom: 20px;
    margin-left: 35px;
    margin-right: 35px;
    padding: 10px;
    cursor: pointer;
    color: whitesmoke;
    font-size: 18px;
    transition: 0.2s;

    &:hover {
        background-color: #bbc8ba;
        transition: 0.2s;
        color: #2b331f;
    }
`;