import React, { PureComponent } from 'react';

import withDiscountCards from 'components/proxy-props/withDiscountCards';
import Grid from 'ui/molecules/Grid';
import Article from 'ui/organisms/Article';
import ListGrids from 'ui/organisms/ListGrids';
import _ from 'lodash';

import { Wrapper, ListWrap, RowWrap } from './index.styled';

const COUNT_ITEMS_ROW = 3;

@withDiscountCards
class ListMain extends PureComponent {

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
    
export default ListMain;
    