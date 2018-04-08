import styled from 'styled-components';

export const Wrapper = styled.article`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 6px;
    padding: 6px;

    height: 310px;
    width: 280px;
`;

export const TopWrap = styled.div`
    order: 1;
`;

export const MenuWrap = styled.div`
    float: right;
    cursor: pointer;
`;

export const ContentWrap = styled.div`
    order: 2;
    flex-grow: 1;
`;

export const BottomWrap = styled.div`
    display: flex;
    justify-content: center;
    order: 4;
`;