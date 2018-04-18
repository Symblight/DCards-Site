import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 16rem;
    height: 100%!important;
    background-color:${props => props.theme.MainTheme.black[2]};
`;

export const WrapPadding = styled.div`
    padding-top: 8px;
    padding-bottom: 8px;
`;