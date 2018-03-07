import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, TitleWrap } from './index.styled';

class TabItem extends PureComponent {
    static propTypes = {
        children: PropTypes.node.isRequired
    };

    render() {
        const { children } = this.props;

        return (
            <Wrapper>
                {children}
            </Wrapper>
        );
    }
}

export default TabItem;