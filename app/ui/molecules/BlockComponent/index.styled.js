import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F5F5F5;
    margin: 25px;
    max-width: 70vw;
`;

export const Title = styled.div`
    background-color: ${props => props.theme.MainTheme.primary[1]};
    color: ${props => props.theme.MainTheme.white[1]};   
    padding: 3px;
    text-align: center;
    font-weight: 600;
`;

export const Content = styled.div`
    padding: 15px;
    text-align: center;
`;
