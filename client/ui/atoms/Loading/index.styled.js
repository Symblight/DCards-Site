import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    min-height: 100vh;
    background-color: ${props => props.theme.MainTheme.primary[0]};
`;

export const LoadingWrap = styled.div`
    position: absolute;
    float: left;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 36px;
`;