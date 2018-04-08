import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    width: 132px;
    height: 100%;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color:${props => props.theme.MainTheme.black[1]};

    &:hover {
        background-color:${props => props.theme.MainTheme.black[2]};
        cursor: pointer;
    }
`;

export const Triangle = styled.div`
    width: 0;
    height: 0;
    border-top: 5px solid ${props => props.theme.MainTheme.white[3]};
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
`;

export const TitleWrap = styled.span`
    margin-right: 4px;
    font-size: 1rem;
    font-weight: 700;
    line-height: 3rem;
    color:${props => props.theme.MainTheme.white[3]};
`;

export const ListWrap = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    background-color:${props => props.theme.MainTheme.black[2]};
    padding: 0;
    width: 132px;
    z-index: 9999;
`;
