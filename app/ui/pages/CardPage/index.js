import React, { PureComponent } from 'react';

import PageTemplate from 'ui/templates/PageTemplate';
import Header from 'ui/organisms/Header';
import Container from 'ui/molecules/Container';
import Grid from 'ui/molecules/Grid';
import WrapGrid from 'ui/organisms/WrapGrid';

import {  } from './index.styled';

class CardPage extends PureComponent {

    render() {
        const { data } = this.props;

        console.log(data);

        return (
            <PageTemplate
                header={<Header />}
            >
                <Container>
                    <Grid>
                        <WrapGrid 
                            
                        />
                    </Grid>
                </Container>
            </PageTemplate>
        );
    }
}

export default CardPage;