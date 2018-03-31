import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { SpinnerWrap } from './index.styled';

class Spinner extends PureComponent {
    static displayName='Spinner';

    static propTypes = {
      className: PropTypes.string
    };

    render() {
      const { className } = this.props;

      return (
        <SpinnerWrap className={className}>
          <div className="ui active centered inline loader" />
        </SpinnerWrap>
      );
    }
}

export default Spinner;
