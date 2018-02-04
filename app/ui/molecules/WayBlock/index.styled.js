import styled from 'styled-components';

export const Wrapper = styled.section`
    width: 100%;
    position: relative;

    &:before {
        content: '';
        display: block;
        position: absolute;
        left: 15px;
        top: 15px;
        width: 3px;
        background-color: ${props => props.theme.MainTheme.grey[2]};;
        height: 100%;
    }
`;

export const Article = styled.article`
    display: flex;
    margin-bottom: 30px;
    height: 100%;
    max-width: 600px;
    text-align: justify;
`;

export const Description = styled.div`
    margin-left: 55px;
    background-color: ${props => props.theme.MainTheme.white[0]};
    color: ${props => props.theme.MainTheme.primary[4]};
    font-weight: 600;
`;

export const Title = styled.div`
    font-size:1.4rem;
    background-color: ${props => props.theme.MainTheme.primary[0]};
    color: ${props => props.theme.MainTheme.white[0]};
    padding: 5px;
    text-align: center;
`;
