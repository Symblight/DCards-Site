import React, { PureComponent } from 'react';

class TextField extends PureComponent {
  render() {
    const { className } = this.props;

    return (
      <input className={className} type="text" />
    );
  }
}

export default TextField;
