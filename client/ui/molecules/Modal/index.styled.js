import styled from 'styled-components';

export const ModalOverlay = styled.div`
    position: fixed;
    overflow: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.3);
    z-index: 99999;
`;

export const ModalWrap = styled.div`
    background-color: #fff;
    border-radius: 5px;
    max-width: 700px;
    min-height: 300px;
    margin: 5% auto;
    padding: 30px;
`;

export const CloseButton = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    margin: 25px;
    display: inline-flex;
    cursor: pointer;
`;