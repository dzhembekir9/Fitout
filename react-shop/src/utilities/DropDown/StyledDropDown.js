import styled from 'styled-components'

export const StyledDropDownWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    left: 0;
    top: 190px;
    width: 100%;
    height: 50px;
    background-color: #2b331f;
    z-index: 1;
    font-size: 20px;
    animation-name: drop;
    animation-duration: 0.3s;

    @keyframes drop {
        from {top: 0px}
        to {bottom: 100px;}
    }
`;
    
    export const StyledDropDownButton = styled.div`
    text-align: center;
    color: white;
    cursor: pointer;
    &:hover {
        border-bottom: 1px solid white;
    }
`;