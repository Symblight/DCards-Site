import styled from 'styled-components';

export const Wrapper = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    padding: 0;
    font-weight: 700;
    cursor: pointer;
    color: #000;
`;

export const WrapperPrimary = styled(Wrapper)`
color: ${props => props.theme.MainTheme.green[1]};

&:hover {
    color: ${props => props.theme.MainTheme.green[0]};
}
`;

export const WrapperStandard = styled(Wrapper)`
color: ${props => props.theme.MainTheme.white[3]};

&:hover {
    color: ${props => props.theme.MainTheme.white[0]};
}
`;