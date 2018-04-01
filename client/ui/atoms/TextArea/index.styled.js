import styled from 'styled-components';


export const TextAreaWrap = styled.textarea`
    font-size: 18px;
    border: 1px solid ${props => props.theme.MainTheme.grey[8]};
    background-color:${props => props.theme.MainTheme.grey[8]};
    transition: background .2s,color .2s;
    border-radius: 6px;
    height: 100%;
    padding: 12px;

    &:focus {
        background-color:${props => props.theme.MainTheme.white[0]};
    }
`;