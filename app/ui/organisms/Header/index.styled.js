import styled from 'styled-components';

export const Wrapper = styled.header`
    height: 5rem;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-color:${props => props.theme.MainTheme.grey[1]};
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    flex: 1 1 auto;
    justify-content: space-between;
    flex-direction: row;
    max-width: 1012px;
    margin: 0 auto;
    height: 100%;
    color:${props => props.theme.MainTheme.white[1]};

     a {
        display: flex;
        align-items: center;
     }
`;

export const UserNav = styled.ul`
    display: flex;
    list-style: none !important;
`;

export const LogoWrap = styled.div`
    display: flex;
    height: 100%;

    span {
        font-size: 12px;
        font-weight: 700;
        padding-top: 10px;
        margin-left: 6px;
    }
`;
