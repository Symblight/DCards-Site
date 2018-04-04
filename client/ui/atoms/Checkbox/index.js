import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, CheckboxWrap, Span } from './index.styled';

class CheckBox extends PureComponent {
    static propTypes = {
      className: PropTypes.string,
      value: PropTypes.string,
      onChecked: PropTypes.func,
    }

    state = {
      checked: false
    }

    handleChecked = (event) => {
      const { onChecked } = this.props;

      this.setState({ checked: !this.state.checked });

      if (onChecked) {
        onChecked(!this.state.checked);
      }
    }

    render() {
      const { value, className } = this.props;

      return (
        <Wrapper className={className} onClick={this.handleChecked}>
          <Span>{value}</Span>
          <CheckboxWrap checked={this.state.checked} />
        </Wrapper>
      );
    }
}

export default CheckBox;