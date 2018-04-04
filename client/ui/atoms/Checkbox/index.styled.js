import styled from 'styled-components';

export const Wrapper = styled.div`
    float: left;
    padding-top: 6px;
    padding-bottom: 6px;
    cursor: pointer;
`;

export const Span = styled.span`
    font-size: 16px;
    margin-left: 12px;
    line-height: 20px;
    width: 90%;
`;

export const CheckboxWrap = styled.div`
    width: 20px;
    height: 20px;
    border: 2px solid ${props => props.theme.MainTheme.primary[0]};
    border-radius: 4px;
    float: left;
    position: relative;
    box-sizing: content-box;

    &:before {
        content: "";
        width: 12px;
        height: 12px;
        background: ${props => props.theme.MainTheme.primary[0]};
        position: absolute;
        transform: scale(${props => (props.checked ? 1 : 0)}); 
        left: 4px;
        top: 4px;
        border-radius: 2px;
        transition: all .2s;
    }
`;