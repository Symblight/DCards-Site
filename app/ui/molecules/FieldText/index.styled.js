import styled from 'styled-components';

export const FieldTitle = styled.span`
    font-size: 18px;
    font-weight: 700;
    margin-right: 12px;
    color: ${props => props.theme.MainTheme.grey[1]};
    width: 25%;
`;

export const FieldValue = styled.span`
    font-size: 18px;
    font-weight: 700;
    color: ${props => props.theme.MainTheme.grey[2]};
`;
