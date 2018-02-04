import styled from 'styled-components';

export const PrimaryButtonWrap = styled.div`
    display: inline-block;
    color: ${props => props.theme.MainTheme.white[1]};
    background-color: ${props => props.theme.MainTheme.primary[0]};
    transition: background .2s,color .2s;
    
    &:hover {
        background-color: ${props => props.theme.MainTheme.primary[1]};
        cursor: pointer;
    }
`;
