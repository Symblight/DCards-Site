import styled from 'styled-components';

import Button from 'ui/atoms/Button';

export const Wrapper = styled.form`
    width: 100%;
`;

export const LabelLoop = styled.label`
    display: flex;
    align-items: center;
    background-color: ${props => props.theme.MainTheme.white[0]};
    padding-left: 4px;
    padding-right: 8px;
    margin-left: 4px;
`;

export const WrapInput = styled.div`
    display: flex;
    border: 1px solid ${props => props.theme.MainTheme.grey[4]};
    border-radius: 4px;
    background-color: ${props => props.theme.MainTheme.grey[5]};
    border-color: transparent;
    transition: all .1s ease-in-out;
`;

export const WrapButton = styled(Button)`

    &:hover{
        color: ${props => props.theme.MainTheme.grey[3]};
    }
`;