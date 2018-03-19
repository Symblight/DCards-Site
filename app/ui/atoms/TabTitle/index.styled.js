import styled from 'styled-components';

const colorActive = props => (
  `   border-bottom: 2.5px solid ${props.theme.MainTheme.primary[0]};
        color: ${props.theme.MainTheme.black[0]};
    `
);

export const Wrapper = styled.li`
    padding-right: 12px;
    text-align: center;
    cursor: pointer;
    transition: border-bottom .1s, color .1s;
    color: ${props => props.theme.MainTheme.grey[3]};
    ${props => (props.active ? colorActive(props) : null)};

    &:hover{
        border-bottom: 2.5px solid ${props => props.theme.MainTheme.primary[1]};
        color: ${props => props.theme.MainTheme.black[0]};
    }
`;

export const LabelWrap = styled.span`
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    display: inline-block;
    padding: 12px 20px;
    line-height: 170%;
    opacity: .75;
    box-sizing: border-box;
    height: 50px;
`;

