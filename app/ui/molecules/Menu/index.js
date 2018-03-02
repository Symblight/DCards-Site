import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, HeaderWrap } from './index.styled';  

class Menu extends PureComponent {

    static propTypes = {
        children: PropTypes.node.isRequired,
        title: PropTypes.string
    };

    render() {
        const { title, children } = this.props;

        return (
            <Wrapper>
                <HeaderWrap>{title}</HeaderWrap>
                {children}
            </Wrapper>
        );
    }
}

export default Menu;