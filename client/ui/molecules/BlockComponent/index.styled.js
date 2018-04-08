import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.MainTheme.white[2]};
    margin: 25px;
    border-radius: 6px;
`;

export const Title = styled.div`
    background-color: ${props => props.theme.MainTheme.primary[1]};
    color: ${props => props.theme.MainTheme.white[1]};   
    padding: 3px;
    text-align: center;
    font-weight: 600;
    border-radius: 4px;
`;

export const Content = styled.div`
    padding: 15px;
    text-align: center;
`;
