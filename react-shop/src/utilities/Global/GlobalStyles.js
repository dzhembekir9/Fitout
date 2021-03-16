import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Roboto',sans-serif;
  }
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
}
`;
 
export default GlobalStyle;