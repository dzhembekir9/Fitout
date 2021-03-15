import styled from 'styled-components'

const StyledNavbarButton = styled.a`
    transition: 0.2s;
    padding: 1rem 3rem;
    -webkit-box-align: center;
    align-items: center;
    font-size: 1.5em;
    cursor: pointer;
    color: white;
    border: 2px solid #E1E1E1;
    margin: 10px;
    border-radius: 50px;
    text-decoration: none;
    &:hover {
        color: #2b331f;
        background-color: white;
        text-decoration: none;
    }
    @media (max-width: 1200px) {
        display: none;
    }
`;

export default StyledNavbarButton;