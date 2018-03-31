import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PanelWrap = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;

export const InfoWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
`;

export const DiscriptionWrap = styled.div`
    border-bottom: 1px solid ${props => props.theme.MainTheme.grey[8]};
    flex-grow: 2;
`;

export const CreateWrap = styled.div`
    padding-top: 12px;
    flex-grow: 1;
`;
