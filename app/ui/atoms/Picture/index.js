import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { PictureWrap } from './index.styled';

class Picture extends PureComponent {
    static propTypes = {
      className: PropTypes.string,
      width: PropTypes.number,
      height: PropTypes.number,
      src: PropTypes.string
    }

    static defaultProps = {
      width: 50,
      height: 50,
    }

    render() {
      const {
        className, width, height, src
      } = this.props;

      return (
        <PictureWrap
          className={className}
          width={width}
          height={height}
          src={src}
          alt="picture"
        />
      );
    }
}

export default Picture;