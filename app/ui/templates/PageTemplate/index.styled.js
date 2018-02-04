import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    box-sizing: border-box;

    @media screen and (max-width: 640px) {
        padding-top: 3.25rem;
    }
`;

export const Content = styled.main`
    width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    max-width: 70vw;
    padding-bottom: 2rem;
    background-color: ${props => props.theme.MainTheme.white[0]};
`;
