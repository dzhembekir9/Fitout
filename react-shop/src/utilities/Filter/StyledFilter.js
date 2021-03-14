import styled from 'styled-components'

export const StyledFilterWrapper = styled.div`
    display: flex;
    justify-content: center;
    font-size: 20px;
    margin-top: 50px;
    margin-bottom: 20px;
    border: 1px solid gainsboro;
    border-right: 0;
    border-left: 0;
    @media (max-width: 1200px) {
        margin-top: 80px;
        margin-bottom: 0;
    }
`;

export const StyledFilter = styled.div`
    color: black;
    text-align: center;
`;

export const StyledSelect = styled.select`
    outline: 0px;
    border: 0px;
    cursor: pointer;
`;

