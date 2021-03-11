import styled from 'styled-components'

const StyledLogo = styled.a`
    padding: 5px 30px;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 50px;
    font-weight: bold;
    transform: skew(
        -10deg
    );
    &:hover {
        cursor: pointer;
        color: white;
    }
`;

export default StyledLogo;