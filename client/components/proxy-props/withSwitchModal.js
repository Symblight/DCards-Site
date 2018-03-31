import React, { PureComponent } from 'react';

const withSwitchModal = Component => {
  class SwitchModal extends PureComponent {
    componentWillUpdate(nextProps) {
      const { location } = this.props;

      if (
        nextProps.history.action !== 'POP' &&
                    (!location.state || !location.state.modal)
      ) {
        this.previousLocation = this.props.location;
      }
    }
    previousLocation = this.props.location;
    render() {
      const { location } = this.props;
      const isModal = !!(
        location.state &&
        location.state.modal &&
        this.previousLocation !== location
      );

      return (
        <Component isModal={isModal} previousLocation={this.previousLocation} {...this.props} />
      );
    }
  }
  return SwitchModal;
};

export default withSwitchModal;