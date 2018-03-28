import styled from 'styled-components';

export const FieldWrap = styled.div`
    padding: 24px;
    ${props => (props.border ? `border-bottom: 1px solid ${props.theme.MainTheme.grey[8]};` : null)}
    display: flex;
`;
