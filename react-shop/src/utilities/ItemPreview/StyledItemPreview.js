import styled from 'styled-components'


export const StyledWrapper = styled.div`
    display: flex;
    font-size: 20px;
    background-color: white;
    align-items: center;
    border: 2px solid gainsboro;
    border-top: 1px;
    justify-content: space-between;
    max-width: 450px;
    width: 450px;
`;

export const StyleImgWrapper = styled.div`
    border: 1px solid #546747;
    margin: 10px 15px;
`;

export const StyledImg = styled.img`
    height: 100px;
    width: auto;
`;

export const StyledInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

export const StyledPrice = styled.div`
    font-weight: bold;
    padding: 20px;
`;