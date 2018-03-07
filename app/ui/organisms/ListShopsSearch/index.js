import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import withSearchShops from 'components/proxy-props/withSearchShops';
import ListGrids from 'ui/organisms/ListGrids';
import Article from 'ui/organisms/Article';

import { Wrapper } from './index.styled';

const COUNT_ITEMS_ROW = 3;

@withSearchShops
class ListSearchShops extends PureComponent {
    static propTypes = {

    };

    render() {
        const { data } = this.props;

        return (
            <Wrapper>
                <ListGrids 
                    items = {data}
                    countRow = {COUNT_ITEMS_ROW}
                    Item = {Article}
                />
            </Wrapper>
        );
    }
}

export default ListSearchShops;