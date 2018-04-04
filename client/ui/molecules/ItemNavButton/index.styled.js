import styled from 'styled-components';

import Button from 'ui/atoms/Button';

export const ButtonWrap = styled(Button)`
    align-items: center;
    display: flex;
    height: 100%;
    padding: 0;
    background-color: inherit
`;

export const ItemLoginWrap = styled.div`
    color:${props => props.theme.MainTheme.green[1]};
    transition: background .2s,color .2s;

    &:hover {
        color:${props => props.theme.MainTheme.green[0]};
        cursor: pointer;
    }
`;

export const ItemTextWrap = styled.div`
    color:${props => props.theme.MainTheme.white[3]};
    transition: background .2s,color .2s;
        
    &:hover {
        color:${props => props.theme.MainTheme.white[0]};
        cursor: pointer;
    }
`;
