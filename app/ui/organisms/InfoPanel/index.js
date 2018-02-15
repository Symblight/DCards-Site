import React, { PureComponent } from 'react';
import Grid from 'ui/molecules/Grid';

class InfoPanel extends PureComponent {
    render() {
        return (
            <Grid>
                Photo
                First Name
                Last Name
                Count connect cards
                Cards
                Invites
            </Grid>
        );
    }
}
    
export default InfoPanel;
    