import styled from 'styled-components';

import Button from 'ui/molecules/PrimaryButton';

export const Wrapper = styled.article`
    margin-right: 24px;
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.10);

    &:last-child { 
        margin-right: 0px;
    }
`;

export const ImageWrap = styled.div`
    display: flex;
    margin-top: 24px;
    flex-grow: 2;
    justify-content: center;
`;

export const NameCardWrap = styled.span`
    font-size: 16px;
    font-weight: 700;
`;

export const PanelWrap = styled.section`
    text-align: center;
    height: 100px;
`;

export const ButtonWrap = styled(Button)`
    height: 35px;
    width: 220px;
`;

export const DiscriptionWrap = styled.span`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-bottom: 10px;
    padding-right: 12px;
    padding-left: 12px;
`;