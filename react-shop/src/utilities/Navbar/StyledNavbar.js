import styled from 'styled-components'

const StyledNavbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px;
    background: linear-gradient(#2b331f, #546747);
    //background-color: #2b331f;
    position: sticky;
    top: 0px; /* When the element reaches top: 10px, it becomes fixed. */
    z-index: 100;
`;

export default StyledNavbar;