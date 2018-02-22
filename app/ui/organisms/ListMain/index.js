import React, { PureComponent } from 'react';

import withDiscountCards from 'components/proxy-props/withDiscountCards';
import Grid from 'ui/molecules/Grid';
import Article from 'ui/organisms/Article';
import _ from 'lodash';

import { Wrapper, ListWrap, RowWrap } from './index.styled';

const COUNT_ITEMS_ROW = 3;

@withDiscountCards
class ListMain extends PureComponent {

    filterItems (items) {
        let newData = [];

        _.map(items, (item, index) => {
            let _arr = [];
            index % COUNT_ITEMS_ROW === 0 ? newData.push(items.slice(index, index + COUNT_ITEMS_ROW)) : null;
        })

        return newData;
    }

    renderRow(data, key) {
        return (
            <RowWrap key = {key}>
                {
                    data.map((el, id) => 
                        <Article 
                            key = { id }
                            data = { el }
                        />
                    )
                }
            </RowWrap>
        );
    }

    renderList() {
        const { data } = this.props;

        return (
            <ListWrap>
                {
                    this.filterItems(data).map((items, id) => 
                        this.renderRow(items, id)
                    )
                }
            </ListWrap>
         );
    };

    render() {
        const { data } = this.props;

        return (
            <Wrapper>
                { 
                    data ? this.renderList() : <span>Loading...</span>
                }
            </Wrapper>
        );
    }
}
    
export default ListMain;
    