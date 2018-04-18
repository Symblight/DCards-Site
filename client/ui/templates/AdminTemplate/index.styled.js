import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    box-sizing: border-box;
    background-color:${props => props.theme.MainTheme.black[1]};
    
    @media screen and (max-width: 640px) {
        
    }
`;

export const Container = styled.div`
    background-color: ${props => props.theme.MainTheme.white[2]};
`;

export const Content = styled.main`
    width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
`;
