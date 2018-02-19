import React, { PureComponent } from 'react';

import withDiscountCards from 'components/proxy-props/withDiscountCards';
import Grid from 'ui/molecules/Grid';
import Article from 'ui/organisms/Article';

import { Wrapper, ListWrap } from './index.styled';

@withDiscountCards
class ListMain extends PureComponent {

    renderList() {
        const { data } = this.props;

        return (
            <Grid>
                <ListWrap>
                    {
                        data.map((el, id) => 
                            <Article 
                                key = { id }
                                data = { el }
                            />
                        )
                    }
                </ListWrap>
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
    