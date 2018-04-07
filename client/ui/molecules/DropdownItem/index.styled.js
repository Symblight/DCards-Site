import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 40px;
    width: 100%;
    padding: 4px;
    font-size: 14px;
    line-height: 1rem;
    display: flex;
    align-items: center;
    color: inherit;

    &:hover {
        background-color:${props => (!props.primary ? props.theme.MainTheme.black[3] : props.theme.MainTheme.primary[0])};
        cursor: pointer;
        color:${props => props.theme.MainTheme.white[0]};
    }
`;

export const Divider = styled.div`
    max-width: 100%;
    border-top: 1px solid ${props => props.theme.MainTheme.grey[8]};
    margin: 8px;
`;
