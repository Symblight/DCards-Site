import styled from 'styled-components';

export const Wrapper = styled.header`
    height: 5rem;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-color:${props => props.theme.MainTheme.black[1]};
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
    color:${props => props.theme.MainTheme.white[3]};

     a {
        display: flex;
        align-items: center;
     }
`;

export const UserNav = styled.ul`
    display: flex;
    list-style: none !important;
    width: 200px;
    justify-content: space-between;
`;

export const LogoWrap = styled.div`
    display: flex;
    height: 100%;
`;

export const HeaderText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 6px;
    margin-bottom: 10px;

    span {
            font-size: 12px;
            font-weight: 700;
        }
`;

export const TextName = styled.h4`
     margin-top: 0;
`;
