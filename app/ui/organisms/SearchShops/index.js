import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import InputSearch from 'ui/molecules/InputSearch';

import { Wrapper, ContentWrap, ContainerWrap } from './index.styled';

class SearchShops extends PureComponent {
    static propTypes = {
      value: PropTypes.string,
      onChange: PropTypes.func,
      onClick: PropTypes.func
    };

    handleChange = (e) => {
      console.log(e);
    }

    handleClick = () => {
      console.log('Click');
    }

    render() {
      const { onChange, value, onClick } = this.props;

      return (
        <Wrapper>
          <ContainerWrap>
            <h2>Shops search</h2>
            <ContentWrap>
              <InputSearch onChange={this.handleChange} onClick={this.handleClick} />
            </ContentWrap>
          </ContainerWrap>
        </Wrapper>
      );
    }
}

export default SearchShops;
