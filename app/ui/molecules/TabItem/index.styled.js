import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100px;
    background-color: ${props => props.theme.MainTheme.white[0]};
    border-top: 1px solid #e0e0e0;
`;