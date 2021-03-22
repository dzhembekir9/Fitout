import styled from 'styled-components'

const StyledNavbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px;
    background: linear-gradient(to bottom right, #546747, #2b331f);
    position: sticky;
    top: 0px;
    z-index: 100;
    box-shadow: 0 8px 15px #2b331f;
`;

export const StyledImg = styled.img`
    margin-right: 20px;
    cursor: pointer;
    transition: 0.3s;
`;

export const StyledItemsQuantity = styled.div`
    position: absolute;
    border: 1px solid whitesmoke;
    border-radius: 50px;
    background-color: #fab73d;
    color: #2b331f;
    top: -12px;
    left: 20px;
    padding: 0 12px;
`;

export default StyledNavbar;