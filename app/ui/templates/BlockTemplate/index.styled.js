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
    height: 400px;
    color:${props => props.theme.MainTheme.white[0]};
    display: flex;
    justify-content: center;
    background-image:url(${props => props.src});
`;

export const Wrap = styled.div`
    width: 1124px;
`;
