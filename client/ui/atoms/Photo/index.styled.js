import styled from 'styled-components';

export const ImageWrap = styled.img`
    max-height: 140px;
    border-radius: 50%;
    height: ${props => props.height};
    width: ${props => props.width};
`;
