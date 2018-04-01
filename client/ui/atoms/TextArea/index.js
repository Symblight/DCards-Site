import React, { PureComponent } from 'react';

import { TextAreaWrap } from './index.styled';

class TextArea extends PureComponent {
  render() {
    const { className } = this.props;

    return (
      <TextAreaWrap className={className} />
    );
  }
}

export default TextArea;
