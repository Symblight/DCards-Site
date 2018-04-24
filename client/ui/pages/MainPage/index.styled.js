import styled from 'styled-components';

export const Wrapper = styled.main`
   // background-color: ${props => props.theme.MainTheme.white[0]};
`;

export const ContentWrap = styled.section`
    display: flex;
    justify-content: center;
`;

export const MenuWrap = styled.div`
    min-height: 100%;
    width: 220px;
    margin-left: 12px;
    display: flex;
    flex-direction: column;
`;

// TEST

export const LoadingBar = styled.div`
    position: fixed;
    display: none;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    z-index: 800;
    background: #34e79a;
    transform: translateX(100%);
`;
