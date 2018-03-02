import styled from 'styled-components';

export const Wrapper = styled.footer`
  padding: 2rem;
`;

export const Content = styled.div`
  color: ${props => props.theme.MainTheme.white[0]};
  padding-top: 24px;
  display: flex;
  justify-content: space-around;
  font-weight: 600;
  margin: 0 auto;
  max-width: 1124px;
  height: 60px;
`;
