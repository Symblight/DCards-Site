import React, { PureComponent } from 'react';

import withDiscountCards from 'components/proxy-props/withDiscountCards';
import Grid from 'ui/molecules/Grid';

import { Wrapper } from './index.styled';

@withDiscountCards
class ListMain extends PureComponent {

    render() {
        const { data } = this.props;

        return (
            <Wrapper>
                <Grid>
                    Список карточек && Список магазинов
                </Grid>
            </Wrapper>
        );
    }
}
    
export default ListMain;
    