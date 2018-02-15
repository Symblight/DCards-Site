import React, { PureComponent } from 'react';

import Grid from 'ui/molecules/Grid';
import withAccountInfo from 'components/proxy-props/withAccountInfo';

@withAccountInfo
class InfoPanel extends PureComponent {
    render() {
        const { data } = this.props;

        return (
            <Grid>
                Photo
                <ul>
                    <li>{ data.firstname }</li>
                    <li>{ data.lastname }</li>
                    <li>{ data.count }</li>
                </ul>
                Cards,Invites
            </Grid>
        );
    }
}
    
export default InfoPanel;
    