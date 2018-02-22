import styled from 'styled-components';

import Grid from 'ui/molecules/Grid';

export const Wrapper = styled.nav`
    display: flex;
    height: 160px;
`;

export const PanelWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    margin-left: 24px;
`;

export const InfoWrap = styled.div`
    display: flex;
    flex-direction: row;
    letter-spacing: 1px;
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 24px;
    
`;

export const GridWrap = styled(Grid)`
    border-bottom: 1px solid #BDBDBD;
`;