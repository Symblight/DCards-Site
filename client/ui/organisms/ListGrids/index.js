import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Waypoint from 'react-waypoint';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import Spinner from 'ui/atoms/Spinner';

import { ListWrap, RowWrap } from './index.styled';

const COUNT_ROWS_ADD = 4;

class ListGrids extends PureComponent {

  static propTypes = {
    items: PropTypes.arrayOf(Object)
  }

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      currentItems: []
    };
  }

  setCurrentItems(items, count) {
    const { currentItems } = this.state;

    const index = currentItems.length;
    let elements = [];

    elements = [...currentItems, ...items.slice(index, count + index)];

    return elements;
  }

  handleWaypointLeave({ previousPosition }) {
    if (previousPosition === Waypoint.inside) {
      this.setState({ isLoading: true });
    }
  }

  filterItemsOnRow(items, count) {
    const { countRow } = this.props;

    const newData = [];

    if (countRow) {
      _.map(items, (item, index) => {
        const _arr = [];
        index % countRow === 0 ? newData.push(items.slice(index, index + countRow)) : null;
      });
    }

    return newData;
  }

    loadMoreItems = () => {
      const { items } = this.props;
      const { currentItems } = this.state;

      let elements = this.filterItemsOnRow(items);

      if (elements.length !== currentItems.length) {
        elements = this.setCurrentItems(elements, COUNT_ROWS_ADD);

        this.setState({ currentItems: elements });
      }
    };

    renderRows(data, key) {
      const { Item, link } = this.props;

      if (!data) return null;

      return (
        <RowWrap key={key}>
          {
            Item ? data.map((el, id) =>
            (<Item
              key={el.id}
              data={el}
              link={link || null}
            />)) : null
          }
        </RowWrap>
      );
    }

    renderRowsWithLink(data, key) {
      const { Item } = this.props;

      if (!data) return null;

      return (
        <RowWrap key={key}>
          {
            Item ? data.map((el, id) =>
            (<Link
              key={el.id}
              to={{
                pathname: `/testcards/${el.id}`,
                state: { modal: true }
              }}
            >
              <Item
                key={el.id}
                data={el}
              />
            </Link>)) : null
          }
        </RowWrap>
      );
    }

    renderList() {
      const { currentItems } = this.state;

      return (
        <div>
          {
            currentItems.map((itemsRow, id) =>
             this.renderRows(itemsRow, id))
          }
          <Waypoint onEnter={this.loadMoreItems} />
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

