import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 40px;
    width: 100%;
    padding: 4px;
    font-size: 14px;
    line-height: 1rem;
    display: flex;
    align-items: center;
    color:${props => props.theme.MainTheme.white[0]};

    &:hover {
        background-color:${props => props.theme.MainTheme.black[3]};
        cursor: pointer;
    }
`;

export const Divider = styled.div`
    max-width: 100%;
    border-top: 1px solid ${props => props.theme.MainTheme.grey[8]};
    margin: 8px;
`;
