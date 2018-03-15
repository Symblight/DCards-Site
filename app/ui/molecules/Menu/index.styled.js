import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.10);
    background-color: ${props => props.theme.MainTheme.white[0]};
    margin-bottom: 24px;
`;

export const HeaderWrap = styled.div`
    height: 32px;
    width: 100%;
    background-color:${props => props.theme.MainTheme.black[1]};
    color: ${props => props.theme.MainTheme.white[3]};
    text-align: center;
    font-size: 1rem;
    font-weight: 700;
    line-height: 3rem;
    align-items: center;
    display: flex;
    justify-content: center;
`;
