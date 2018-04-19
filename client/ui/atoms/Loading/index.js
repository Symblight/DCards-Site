import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Spinner from 'ui/atoms/Spinner';

import { Wrapper, LoadingWrap } from './index.styled';

class Loading extends PureComponent {
    static propTypes = {

    };

    render() {
      return (
        <Wrapper>
          <LoadingWrap>
            Loading
            <Spinner />
          </LoadingWrap>
        </Wrapper>
      );
    }
}


export default Loading;