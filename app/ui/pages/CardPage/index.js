import React, { PureComponent } from 'react';

import PageTemplate from 'ui/templates/PageTemplate';
import Container from 'ui/molecules/Container';
import Grid from 'ui/molecules/Grid';

import {  } from './index.styled';

class CardPage extends PureComponent {
    render() {
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