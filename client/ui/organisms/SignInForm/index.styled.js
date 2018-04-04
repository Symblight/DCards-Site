import styled from 'styled-components';

export const Control = styled.div`
    margin-top: 8px;
`;

export const WrapButtons = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 12px;
`;

export const Form = styled.form`
    margin-bottom: 12px;
`;

export const Wrapper = styled.div`
    background-color: ${props => props.theme.MainTheme.white[1]};
    padding: 12px;
`;