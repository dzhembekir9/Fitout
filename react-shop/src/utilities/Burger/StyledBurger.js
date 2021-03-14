import styled from 'styled-components'

export const StyledBurger = styled.img`
    display: none;
    @media (max-width: 1200px) {
        display: flex;
        &:hover {
            cursor: pointer;
        }
    }
`;
