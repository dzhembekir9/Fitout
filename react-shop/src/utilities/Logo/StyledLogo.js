import styled from 'styled-components'

const StyledLogo = styled.a`
    padding: 5px 30px;
    color: white;
    text-transform: uppercase;
    font-size: 50px;
    font-weight: bold;
    transition: 0.5s;
    &:hover {
        cursor: pointer;
        color: white;
        text-decoration: none;
        opacity: 0.5;
        transition: 0.5s;
    }
`;

export default StyledLogo;