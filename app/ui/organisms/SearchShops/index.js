import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Button from 'ui/molecules/PrimaryButton';
import InputText from 'ui/atoms/InputText';

import { Wrapper , ContentWrap} from './index.styled';

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
    
        return(
            <Wrapper>
              <h2>Shops search</h2>
              <ContentWrap><InputText onChange={this.handleChange}/><Button onClick={this.handleClick}> search </Button></ContentWrap>
            </Wrapper>
          );
    }
}

export default SearchShops;