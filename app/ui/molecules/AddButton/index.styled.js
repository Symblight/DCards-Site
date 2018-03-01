import styled from 'styled-components';
import Button from 'ui/atoms/Button';

export const ButtonWrap = styled(Button)`
    padding-left: 6px;
    padding-right: 12px;
`

export const AddButtonWrap = styled.div`
    display: flex;
    align-items: center;
    padding-left: 0;
    color: ${props => props.theme.MainTheme.white[1]};
    background-color: ${props => props.theme.MainTheme.primary[0]};
    transition: background .2s,color .2s;

    &:hover {
        background-color: ${props => props.theme.MainTheme.primary[1]};
        cursor: pointer;
    }
`;

export const IconWrap = styled.div`
    padding-left: 12px;
`