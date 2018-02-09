import styled from 'styled-components';

export const Wrapper = styled.section`
    display: flex;
    justify-content: space-between;
`;

export const FormContainer = styled.div`
    background-color: white;
    padding: 24px;
    border-radius: 4px;
`;

export const DiscriptionContainer = styled.div`
    max-width: 30vw;
    height: 100%;
    width: 30vw;
    color: ${props => props.theme.MainTheme.white[2]};
    padding: 10px;
    background-color: ${props => props.theme.MainTheme.grey[1]};
`;