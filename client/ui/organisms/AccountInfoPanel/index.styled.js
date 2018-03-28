import styled from 'styled-components';

export const Wrapper = styled.form`
    display: flex;
    flex-direction: column;
`;

export const ContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px;
`;

export const ButtonWrap = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-right: 24px;
    padding-bottom: 12px;
`;

export const ButtonsMenu = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 24px;
    margin-top: 12px;
    padding-bottom: 12px;
    border-top: 1px solid ${props => props.theme.MainTheme.grey[8]};
`;
