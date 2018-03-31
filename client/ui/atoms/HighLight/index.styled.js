import styled from 'styled-components';

export const HighlightWrap = styled.span`
    color: ${props => props.theme.MainTheme.white[1]};; 
    background-color: ${props => props.theme.MainTheme.grey[1]};
    padding: 0 6px;
    font-weight: 400;
    line-height: 1.25;
`;
