import styled from 'styled-components';

import Button from 'ui/molecules/PrimaryButton';

export const Wrapper = styled.div`
    margin-right: 24px;
    text-align: center;

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
    width: 220px;
`;

export const DiscriptionWrap = styled.span`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;