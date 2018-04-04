import styled from 'styled-components';

const stateColor = (state) => {
  const defaultColor = '#fff';
  let newColor;

  if (state === 'warning') {
    return '#ffc369';
  }

  if (state === 'error') {
    return '#f50017';
  }

  return defaultColor;
};

export const Wrapper = styled.div`
    height: 58px;
    width: 100%;
    margin-top: 16px;
    border: 3px solid ${props => stateColor(props.state)};
    background: #fff;
    border-radius: 4px;
    transition: all .2s;
    position: relative;
    
`;

export const WrapMessage = styled.span`
    position: absolute;
    color: #fff;
    right: 0;
    transform: scale(${props => (props.state ? 1 : 0)});
    padding: 0 4px 0 4px;
    background-color: ${props => stateColor(props.state)};
    font-weight: 550;
    letter-spacing: .3px;
    font-size: 14px;
    transition: all .2s;
    transform-origin: 100% 0;
`;