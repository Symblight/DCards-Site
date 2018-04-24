import styled from 'styled-components';

import Card from 'ui/atoms/Card';

const PositionWrap = styled(Card)`
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
    overflow: hidden;
`;

export const Wrapper = styled(Card)`
    perspective: 1000px; 

    transition: transform .2s ease,box-shadow .2s ease;
    will-change: transform,box-shadow; 

    &:hover {
        transform: translate(0,-3px);
    }
`;

export const Flipper = styled.div`
    transition: 0.6s;
    transform-style: preserve-3d;
    position: relative;

    ${props => (props.state ?
    `  
    transform: rotateY(180deg);` : null
  )}
`;

export const WrapperFrontSide = styled(PositionWrap)`
    z-index: 2;
    transform: rotateY(0deg);
`;

export const WrapperBackSide = styled(PositionWrap)`
    transform: rotateY(180deg);
`;