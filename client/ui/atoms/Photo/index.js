import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { ImageWrap } from './index.styled';

class Photo extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    src: PropTypes.string
  }

  static defaultProps = {
    width: 100,
    height: 100,
  }

  render() {
    const {
      className,
      src,
      width,
      height
    } = this.props;

    return (
      <ImageWrap
        className={className}
        src={src}
        height={width}
        width={width}
      />
    );
  }
}

export default Photo;
