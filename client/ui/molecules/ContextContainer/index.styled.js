import styled from 'styled-components';

// top right left bottom
const positionMenu = (position) => {

  // top: 22px; bottom
  // top bottom: 5px; margin-bottom: -8px;

  if (position === 'top-left') {
    return 'bottom: 5px';
  }

  if (position === 'top-right') {
    return '';
  }

  if (position === 'bottom-left') {
    return 'top: 22px';
  }

  if (position === 'bottom-left') {
    return '';
  }

  return 'bottom: 5px';

};

const positionArrow = () => {
    if (position === 'top-left') {
        return 'bottom: 5px';
      }
    
      if (position === 'top-right') {
        return '';
      }
    
      if (position === 'bottom-left') {
        return 'top: 22px';
      }
    
      if (position === 'bottom-left') {
        return '';
      }
    
      return 'bottom: 5px';
};

const MenuWrapper = styled.div`
    background-color: ${props => props.theme.MainTheme.white[0]};
    min-height: 25px;
    padding: 6px 0 6px 0;
    position: absolute;
    z-index: 9999;
    box-shadow: 0 2px 4px -1px rgba(0,0,0,.1),0 2px 2px -2px rgba(0,0,0,.02),0 1px 4px 0 rgba(0,0,0,.04);
    min-width: 120px;
    border-radius: 2px;
    margin: 0 0 4px 4px;
`;

export const MenuBottom = styled(MenuWrapper)`
    top: 28px;
`;

export const MenuTop = styled(MenuWrapper)`
    bottom: 5px;
`;

const ArrowWrap = styled.div`
    top: 100%;
    right: 100%;
    margin-right: -16px;
    position: absolute;
`;

export const ArrowBottomWrap = styled.div`
    bottom: 100%;
    right: 100%;
    margin-right: -16px;
    margin-bottom: -7px;
    position: absolute;
`;

export const ArrowTopWrap = styled.div`
    right: 100%;
    top: 100%;
    margin-right: -16px;
    position: absolute;
`;

export const Arrow = styled.div`
    width: 8px;
    height: 8px;
    transform: rotate(45deg) translate(-50%,-50%); 
    transform-origin: 0 0; 
    background-color: #fff;
`;

export const Wrapper = styled.div`
    position: relative;
`;