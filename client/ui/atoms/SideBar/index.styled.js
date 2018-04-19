import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 16rem;
    min-height: 100vh;
    background-color:${props => props.theme.MainTheme.black[3]};
`;

export const WrapPadding = styled.div`
    padding-top: 8px;
    padding-bottom: 8px;
`;