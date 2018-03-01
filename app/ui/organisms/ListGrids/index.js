import React, { PureComponent } from 'react';
import Waypoint from 'react-waypoint';
import _ from 'lodash';

import withDiscountCards from 'components/proxy-props/withDiscountCards';
import Grid from 'ui/molecules/Grid';
import Article from 'ui/organisms/Article';
import Spinner from 'ui/atoms/Spinner';

import { ListWrap, RowWrap } from './index.styled';

const COUNT_ROWS_ADD = 4;

class ListGrids extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            currentItems: []
        }
    }

    setCurrentItems(items, count) {
        const { currentItems } = this.state;

        let index = currentItems.length;
        let elements = [];

        elements = [...currentItems, ...items.slice(index, count + index)];

        return elements;
    }

    handleWaypointLeave({ previousPosition }) {
        if(previousPosition === Waypoint.inside) {
           this.setState({
               isLoading: true
           });
        }
    }

    filterItemsOnRow (items, count) {
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

    loadMoreItems = () => {
        const { items } = this.props;
        const { currentItems} = this.state;

        let elements = this.filterItemsOnRow(items);

        if(elements.length !== currentItems.length){
                elements = this.setCurrentItems(elements, COUNT_ROWS_ADD);

                this.setState({ currentItems: elements});
        }
    };

    renderRows(data, key) {
        const { Item } = this.props;

        if(!data) return null;

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

    renderList() {
        const { currentItems } = this.state;
        const { items } = this.props;

        return (
            <div>
                {
                    currentItems.map((itemsRow, id) => 
                            this.renderRows(itemsRow, id)
                    )
                }
                <Waypoint onEnter = {this.loadMoreItems}/>
            </div>
        );
    }

    render() {
        const { items } = this.props;

        return (
                <ListWrap>
                    {
                       items && items.length > 0 ? this.renderList() : <Spinner />
                    }
                </ListWrap>
        );
    }
}
    
export default ListGrids;
    