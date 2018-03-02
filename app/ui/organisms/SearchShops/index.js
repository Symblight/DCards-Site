import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './index.styled';

class SearchShops extends PureComponent {
    static propTypes = {

    };
    render() {
        return(
            <Wrapper>
              <h2>Shops search</h2>
              <input type='text' />
            </Wrapper>
          );
    }
}

export default SearchShops;