import React, { PureComponent } from 'react';

import ShopsPage from 'ui/pages/ShopsPage';
import withAuthenticated from '../proxy-props/withAuthenticated';
  
@withAuthenticated
class ShopsContainer extends PureComponent {
    render() {
        return (
            <ShopsPage />
        );
    }
}

export default ShopsContainer;