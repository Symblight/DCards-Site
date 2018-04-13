import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const WrapItem = styled.div`
    padding-right: 12px;
    padding-left: 12px
`;

export const Header = styled(WrapItem)`
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    background-color: ${props => props.theme.MainTheme.primary[0]};
`;

export const Title = styled.span`
    padding-top: 12px;
    float: left;
    font-size: 18px;
    font-weight: 600;
`;

export const LogoWrap = styled.div`
    height: 45px;
    width: 45px;
    margin-left: 12px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 2; 
    background-color: ${props => props.theme.MainTheme.primary[0]};
`;

export const Discription = styled(WrapItem)`
    text-align: left;
    word-wrap: break-word;
    width: 210px;
`;

export const CreateByWrap = styled.div`
    width: 100px;
    height: 26px;
    line-height: 26px;
    white-space: nowrap;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    background-color: ${props => props.theme.MainTheme.white[0]};
    color: #484848;
    font-weight: 600;
`;

export const Footer = styled(WrapItem)`
    flex-grow: 1;
    background-color: ${props => props.theme.MainTheme.white[0]};
    color: #000;
`;

export const FooterShop = styled(Footer)`
    display: flex;
    flex-direction: row;
`;

export const FooterContent = styled.div`
    flex-grow: 2;
`;

export const FooterMenu = styled.div`
    align-items: center;
    display: inherit;
`;

export const FooterDiscription = styled.div`
    float: left;
    padding-top: 12px;
`;