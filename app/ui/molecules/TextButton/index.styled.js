import styled from 'styled-components';

export const ButtonWrap = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    transition: background .2s,color .2s;
    color:${props => props.theme.MainTheme.white[3]};
    
    &:hover {
        color:${props => props.theme.MainTheme.white[0]};
        cursor: pointer;
    }
`;