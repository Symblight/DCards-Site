import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    box-sizing: border-box;
`;

export const Content = styled.section`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    max-width: 70vw;
    padding-bottom: 2rem;
    background-color: ${props => props.theme.MainTheme.white[0]};
`;
