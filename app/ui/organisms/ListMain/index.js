import React, { PureComponent } from 'react';

import withDiscountCards from 'components/proxy-props/withDiscountCards';
import Grid from 'ui/molecules/Grid';

@withDiscountCards
class ListMain extends PureComponent {

    render() {
        const { data } = this.props;

        return (
            <Grid>
                Список карточек && Список магазинов
            </Grid>
        );
    }
}
    
export default ListMain;
    