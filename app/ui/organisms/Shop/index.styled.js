import styled from 'styled-components';

import Button from 'ui/molecules/PrimaryButton';

export const Wrapper = styled.article`
margin-right: 24px;
width: 280px;
height: 280px;
display: flex;
align-items: center;
padding-bottom: 12px;
flex-direction: column;
box-shadow: 0 1px 4px 0 rgba(0,0,0,0.10);

&:last-child { 
    margin-right: 0px;
}
`;

export const ImageWrap = styled.div`
    display: flex;
    margin-top: 24px;
    flex-grow: 2;
    justify-content: center;
`;

export const ButtonWrap = styled(Button)`
    width: 220px;
`;
