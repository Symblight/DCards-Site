import styled from 'styled-components';

export const WrapCircle = styled.div`
    border-radius: 50%;
    display: block;
    width: 30px;
    height:30px;
    position: absolute;
    background-color: ${props => props.theme.MainTheme.primary[0]};
    color: ${props => props.theme.MainTheme.white[1]};
`;
