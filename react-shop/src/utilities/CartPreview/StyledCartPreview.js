import styled from 'styled-components'

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #bbc8ba;
    padding: 10px 20px;
    border: 2px solid whitesmoke;
    color: #2b331f;
`;

export const StyledOrder = styled.div`
    text-align: center;
    padding: 10px 20px;
    border: 1px solid whitesmoke;
    margin: 20px 0;
    font-size: 20px;
    background-color: #546747;
    color: white;
    cursor: pointer;
    letter-spacing: 2px;
    transition: 0.4s;

    &:hover {
        background-color: whitesmoke;
        border-color: grey;
        transition: 0.7s;
        color: black;
    }
`;

export const StyledPreviewWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100px;
    right: 100px;

    @media (max-width: 1200px) {
        right: 50px;
    }
    @media (max-width: 576px) {
        right: 0;
    }
`;