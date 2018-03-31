import styled from 'styled-components';

import Grid from 'ui/molecules/Grid';

export const Wrapper = styled.div`
    padding-top: 12px;
    padding-bottom: 12px;
    flex-direction: column;
    text-align: center;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
`;

export const PanelWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const InfoWrap = styled.div`
    display: flex;
    flex-direction: row;
    letter-spacing: 1px;
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 24px;
    margin-top: 24px;
`;

export const GridWrap = styled(Grid)`
    border-bottom: 1px solid #BDBDBD;
`;
