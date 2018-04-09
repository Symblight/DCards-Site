import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 10px 25px;
    text-align: left;
    position: relative;
    border-bottom: 1px solid #eaeaea;
    transition: all .1s;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.MainTheme.white[1]};
    }
`;

export const Slider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    border: none;
    height: 40px;
    width: 3px;
    background-color: ${props => props.theme.MainTheme.primary[1]};
    transform: scale(${props => (props.state ? 1 : 0)});
    z-index: 1;
`;