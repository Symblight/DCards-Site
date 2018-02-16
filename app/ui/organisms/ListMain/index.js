import React, { PureComponent } from 'react';

import withDiscountCards from 'components/proxy-props/withDiscountCards';
import Grid from 'ui/molecules/Grid';
import Article from 'ui/organisms/Article';

import { Wrapper } from './index.styled';

@withDiscountCards
class ListMain extends PureComponent {

    renderList() {
        const { data } = this.props;

        return (
            <Grid>
                {
                    data.map((el, id) => 
                        <Article 
                            key = { id }
                            id = { el.id }
                            shop = { el.shop } 
                            discription = { el.discription } 
                        />
                    )
                }
            </Grid>
         );
    };

    render() {
        const { data } = this.props;

        return (
            <Wrapper>
                { 
                    data ? this.renderList() : null
                }
            </Wrapper>
        );
    }
}
    
export default ListMain;
    