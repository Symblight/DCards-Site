import React, { PureComponent } from 'react';

import withDiscountCards from 'components/proxy-props/withDiscountCards';
import Grid from 'ui/molecules/Grid';
import Article from 'ui/organisms/Article';
import _ from 'lodash';

import { ListWrap, RowWrap } from './index.styled';

class ListGrids extends PureComponent {

    filterItems (items) {
        const { countRow } = this.props;

        let newData = [];

        if(countRow) {
            _.map(items, (item, index) => {
                let _arr = [];
                index % countRow === 0 ? newData.push(items.slice(index, index + countRow)) : null;
            })
        }

        return newData;
    }

    renderRow(data, key) {
        const { Item } = this.props;

        return (
            <RowWrap key = {key}>
                {
                    Item ? data.map((el, id) => 
                        <Item 
                            key = { id }
                            data = { el }
                        />
                    ) : null
                }
            </RowWrap>
        );
    }

    render() {
        const { items } = this.props;

        return (
            <ListWrap>
                {
                    items ? this.filterItems(items).map((itemsRow, id) => 
                        this.renderRow(itemsRow, id)
                    ) : <span>Loading...</span>
                }
            </ListWrap>
        );
    }
}
    
export default ListGrids;
    