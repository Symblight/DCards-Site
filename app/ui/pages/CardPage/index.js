import React, { PureComponent } from 'react';

import PageTemplate from 'ui/templates/PageTemplate';
import Container from 'ui/molecules/Container';
import Grid from 'ui/molecules/Grid';
import withAuthenticated from 'components/proxy-props/withAuthenticated';

import {  } from './index.styled';

@withAuthenticated
class CardPage extends PureComponent {
    render() {
        const { data } = this.props;

        return (
            <PageTemplate>
                <Container>
                    <Grid>
                        Card
                    </Grid>
                </Container>
            </PageTemplate>
        );
    }
}

export default CardPage;