import styled from 'styled-components';

import Button from 'ui/atoms/Button';

export const PrimaryButtonWrap = styled(Button)`
    display: inline-block;
    color: ${props => props.theme.MainTheme.white[1]};
    background-color: ${props => props.theme.MainTheme.primary[0]};
    transition: background .2s,color .2s;
    
    &:hover {
        background-color: ${props => props.theme.MainTheme.primary[1]};
        cursor: pointer;
    }
`;
