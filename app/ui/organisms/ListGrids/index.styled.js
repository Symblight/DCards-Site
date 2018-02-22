import styled from 'styled-components';

export const ListWrap = styled.div`
    display: flex;
    flex-direction: column;
`;

export const RowWrap = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;

    &:last-child {
        justify-content: flex-start;
    }
`;