import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 10px 25px;
    text-align: left;
    position: relative;
    transition: all .1s;
    cursor: pointer;
    color: #fff;

    &:hover {
        background-color: ${props => props.theme.MainTheme.black[2]};
    }
`;