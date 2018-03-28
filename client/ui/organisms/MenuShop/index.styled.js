import styled from 'styled-components';

import Menu from 'ui/molecules/Menu';

export const Wrapper = styled(Menu)`
    height: 400px;
    width: 100%;
    margin-left: 12px;
    padding: 8px;
`;

export const HeadWrap = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Head = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    min-height: 80px;
    border-bottom: 1px solid ${props => props.theme.MainTheme.grey[8]};
    margin-bottom: 24px;
`;
