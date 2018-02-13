import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './index.styled';
//import LogoSVG from 'assets/images/logo.svg';

class Logo extends Component {
    static propTypes = {

    };

    render() {
        return (
            <Wrapper>
                { 
                  // <LogoSVG width={50} height={50} />
                }
            </Wrapper>
        );
    }
}

export default Logo;