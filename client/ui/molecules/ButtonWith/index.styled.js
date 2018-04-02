import styled from 'styled-components';

import Button from 'ui/atoms/Button';

const changeColor = (arrayColors, nextColor, index) => {
  let colors = [];
  let newColor = '#efefef';

  if (nextColor) {
    let hasOwnProperty = Object.prototype.hasOwnProperty.call(arrayColors, nextColor);

    if (hasOwnProperty) {
      colors = arrayColors[nextColor];
      newColor = colors[index];
    } else {
      newColor = nextColor;
    }
  } else {
    newColor = arrayColors.white[index || 1];
  }

  return newColor;
};

export const ButtonWrap = styled(Button)`
    background-color: ${props => changeColor(props.theme.MainTheme, props.color, 0)};
    color: #fff;
    border-radius: 4px;
    margin-top: 12px;
    transition: background .2s,color .2s;

    &:hover {
        background-color: ${props => changeColor(props.theme.MainTheme, props.color, 1)};;
    }
`;