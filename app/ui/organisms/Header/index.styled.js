import styled from 'styled-components';

export const Wrapper = styled.header`
    height: 4rem;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-color:${props => props.theme.MainTheme.grey[1]};
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    max-width: 600px;
    margin: 0 auto;
    height: 100%;
    color:${props => props.theme.MainTheme.white[1]};
`;

export const PhotoWrap = styled.div`
    padding: 10px;
`;

export const Hero = styled.div`

`;

export const Title = styled.span`
    width: 15ch;
    font-size: 3em;
    font-weight: 600;
    white-space: nowrap;
    padding-right: 10px;
    overflow: hidden;
    border-right: .10em solid;
    animation: caret 1s steps(1) infinite;
    filter: alpha(opacity=50);

    @keyframes caret {
        50% { border-right-color: transparent; }
    }

    &::selection {   
        background: ${props => props.theme.MainTheme.primary[1]};
        color: inherit;
    }
`;
