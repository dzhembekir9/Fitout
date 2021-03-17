import styled from 'styled-components'

export const StyledLoadingBar = styled.div`
    position: absolute;
    width 100%;
    top: 0;
    left: 0;
    height: 10px;
    background-color: #fab73d;
    animation-name: load;
    animation-duration: 0.4s;
    animation-iteration-count: 1;
    animation-fill-mode: both;

    @keyframes load {
      from {left: 0%;}
      to {left: 100%;}
    }
`;