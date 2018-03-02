import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.10);
    background-color: ${props => props.theme.MainTheme.white[0]};
    height: 320px;
    padding: 8px;
`;