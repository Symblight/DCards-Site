import React, { PureComponent } from 'react';

import ShopsPage from 'ui/pages/ShopsPage';

class ShopsContainer extends PureComponent {
  render() {
    return (
      <ShopsPage {...this.props} />
    );
  }
}

export default ShopsContainer;
