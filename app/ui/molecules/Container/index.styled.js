import styled from 'styled-components';

export const Wrapper = styled.div`
    border: 1px solid ${props => props.theme.MainTheme.grey[5]};
    border-radius: 2px;
    background-color: ${props => props.theme.MainTheme.white[0]};
    padding: 8px;
`;