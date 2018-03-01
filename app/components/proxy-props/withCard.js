import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

//import { loadInfoCard } from 'components/Main/actions';

const mapStateToProps = (state) => {
    return {
        card: state.reducerMain.card
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onGetCard: (id) => dispatch(loadInfoCard(id))
    }
};

const withDisctountCard = (Component) => {
    @connect(mapStateToProps, mapDispatchToProps)
    class DiscountCard extends PureComponent {

        componentWillMount() {
            const { onGetCard, match } = this.props;

            if(match && match.params.idcard) {
            //    onGetCard(match.params.idcard);
            }
        }
        
        render() {
            const { card } = this.props;
    
            return (
                <Component {...this.props} data = {card} /> 
            );
        }
    }
    return DiscountCard;
}

export default withDisctountCard;