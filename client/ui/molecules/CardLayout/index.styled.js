import styled from 'styled-components';

import FlatButton from 'ui/atoms/FlatButton';

export const Wrapper = styled.div`
    max-width: 300px;
`;

const WrapSide = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const ButtonRemove = styled(FlatButton)`
    height: 25px;
    float: right;
    color: ${props => props.theme.MainTheme.red[0]};
`;

export const ButtonEdit = styled(FlatButton)`
    height: 25px;
    float: left;
    color: ${props => props.theme.MainTheme.green[0]};
`;