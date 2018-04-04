import styled from 'styled-components';

export const LabelStyled = styled.div`
    display: inline-block;
    font-weight: 700;
    color: ${props => props.color};
    position: relative;
    font-size: 14px;
    padding: 0;
    text-align: left;
    width: 100%;
    text-transform: uppercase;
`;
