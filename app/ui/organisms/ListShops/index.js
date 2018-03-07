import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ListGrids from 'ui/organisms/ListGrids';

import { Wrapper } from './index.styled';

class ListShops extends PureComponent {
    static displayName = 'ListShops';

    static propTypes = {
        data: PropTypes.arrayOf(Object)
    };

    render() {
        const { data } = this.props;

        return (
            <Wrapper>
            {
                data ? <ListGrids /> : `Nothing`
            }
            </Wrapper>
        );
    }
}
export default ListShops;