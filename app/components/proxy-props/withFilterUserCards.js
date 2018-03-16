import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  cards: state.reducerMain.cards
});

const withFilterUserCards = (Component) => {
  @connect(mapStateToProps, null)
  class FilterUserCards extends PureComponent {

    render() {
      const { cards } = this.props;

      return (
        <Component {...this.props} data={cards} />
      );
    }
  }
  return FilterUserCards;
};

export default withFilterUserCards;
