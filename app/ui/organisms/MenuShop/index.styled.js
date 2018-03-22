import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 280px;
    height: 406px;
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
