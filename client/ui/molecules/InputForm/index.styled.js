import styled from 'styled-components';

import InputText from 'ui/atoms/InputText';

export const InputWrap = styled(InputText)`
    border: 1px solid ${props => props.theme.MainTheme.grey[8]};
    background-color:${props => props.theme.MainTheme.grey[8]};
    transition: background .2s,color .2s;
    height: 100%;

    &:focus {
        background-color:${props => props.theme.MainTheme.white[0]};
    }
`;