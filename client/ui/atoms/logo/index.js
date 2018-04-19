import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './index.styled';

class Logo extends PureComponent {
    static propTypes = {
        className: PropTypes.string
    };

    render() {
        return (
            <Wrapper className = {className}>
                { 
                   <LogoSVG width={50} height={50} />
                }
            </Wrapper>
        );
    }
}

export default Logo;