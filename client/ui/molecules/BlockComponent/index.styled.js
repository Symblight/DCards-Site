import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.MainTheme.white[1]};
    margin: 25px;
    border-radius: 6px;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.10);
`;

export const Title = styled.div`
    background-color: ${props => props.theme.MainTheme.primary[1]};
    color: ${props => props.theme.MainTheme.white[1]};   
    padding: 3px;
    text-align: center;
    font-weight: 600;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
`;

export const Content = styled.div`
    padding: 15px;
    text-align: center;
`;
