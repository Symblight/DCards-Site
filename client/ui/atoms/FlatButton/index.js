import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, WrapperPrimary, WrapperStandard } from './index.styled';

class FlatButton extends PureComponent {
    static propTypes = {
      children: PropTypes.node.isRequired,
      className: PropTypes.string,
      onClick: PropTypes.func,
      primary: PropTypes.bool,
      standard: PropTypes.bool
    }
    render() {
      const {
        className, children, onClick, standard, primary
      } = this.props;

      if (primary) {
        return (
          <WrapperPrimary className={className} onClick={onClick}>
            {children}
          </WrapperPrimary>
        );
      }

      if (standard) {
        return (
          <WrapperStandard className={className} onClick={onClick}>
            {children}
          </WrapperStandard>
        );
      }

      return (
        <Wrapper className={className} onClick={onClick}>
          {children}
        </Wrapper>
      );
    }
}

export default FlatButton;