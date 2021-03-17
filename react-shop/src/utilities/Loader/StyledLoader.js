import styled from 'styled-components'

export const StyledLoaderWrapper = styled.div`
    position: absolute;
    left: 45%;
    width: 80px;
    height: 80px;

    &:nth-child(1) {
        animation-delay: -0.45s;
    }
    &:nth-child(2) {
        animation-delay: -0.3s;
    }
    &:nth-child(3) {
        animation-delay: -0.15s;
    }

    @keyframes rotate {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
    }
`;

export const StyledLoaderContainer = styled.div`
    box-sizing: border-box;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #fff;
    border-radius: 50%;
    animation: rotate 0.4s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fab73d transparent transparent transparent;
`;