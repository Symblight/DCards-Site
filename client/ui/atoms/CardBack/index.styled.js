import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const WrapItem = styled.div`
    padding-right: 6px;
    padding-left: 6px
`;

export const Header = styled.div`
    flex-grow: 1;
    background-color: ${props => props.theme.MainTheme.primary[0]};
`;

export const Barcode = styled.div`
    margin-top: 10px;
    height: 40px;
    width: 100%;
    background-color: #fff;
    color: #000;
`;

export const Title = styled.span`
    padding-top: 12px;
    float: left;
    font-size: 18px;
    font-weight: 600;
`;

export const Author = styled.span`
    float: left;
    font-size: 16px;
    font-weight: 600;
`;

export const Content = styled(WrapItem)`
    flex-grow: 2;
    background-color: ${props => props.theme.MainTheme.primary[0]};
`;

export const Discription = styled.div`
    word-wrap: break-word;
`;

export const Footer = styled(WrapItem)`
    flex-grow: 1;
    background-color: ${props => props.theme.MainTheme.primary[0]};
`;

export const FooterDiscription = styled.div`
    padding-top: 12px;
    float: left;
`;