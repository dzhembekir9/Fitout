import styled from 'styled-components'

const StyledNavbarButton = styled.a`
    padding: 1rem 3rem;
    -webkit-box-align: center;
    align-items: center;
    font-size: 1.5em;
    cursor: pointer;
    color: white;
    border: 1px solid #E1E1E1;
    margin: 10px;
    border-radius: 50px;
    &:hover {
        color: white;
    }
    @media (max-width: 1200px) {
        display: none;
    }
`;

export default StyledNavbarButton;