import styled from 'styled-components';

export const Border = styled.div`
    border: 1.5px dashed ${props => props.theme.MainTheme.primary[1]};   
`;
