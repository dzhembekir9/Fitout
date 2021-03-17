import styled from 'styled-components'

export const StyledCreateWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid #546747;
    margin: 80px auto;
    padding: 50px;
    border-radius: 40px;
    background-color: whitesmoke;
`;

export const StyledCreateContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    padding: 20px;
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const StyledButton = styled.button`
    margin: 30px;
    color: black;
`;

export const StyledInput = styled.input`
    margin: 10px auto;
    width: 100%;
`;

export const StyledLabel = styled.label`
    font-size: 20px;
`;

export const StyledDes = styled.textarea`
    font-size: 20px;
    height: 100px;
    resize: none;
    width: 500px;
    @media (max-width: 768px) {
        width: 400px;
    }
    @media (max-width: 576px) {
        width: 250px;
    }
`;