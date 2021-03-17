import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const StyledNotFoundWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 30px;
`;

export const StyledImg = styled.img`
    width: 35%;
    display: flex;
    align-self: center;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #2b331f;
    &:hover {
        opacity: 0.7;
        color: #2b331f;
        text-decoration: none;
    }
`;