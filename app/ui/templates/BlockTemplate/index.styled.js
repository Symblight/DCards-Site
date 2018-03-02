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

export const Content = styled.main`
    width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color:${props => props.theme.MainTheme.white[0]};
    display: flex;
    justify-content: center;
    min-height: 324px;
`;

export const HeroWrap = styled.nav`
    height: 280px;
    color:${props => props.theme.MainTheme.white[3]};
    display: flex;
    justify-content: center;
`;

export const Wrap = styled.div`
    max-width: 1124px;
`;
