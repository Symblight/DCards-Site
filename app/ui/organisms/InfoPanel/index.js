import React, { PureComponent } from 'react';

import Grid from 'ui/molecules/Grid';
import Photo from 'ui/atoms/Photo';
import withAccountInfo from 'components/proxy-props/withAccountInfo';

import { Wrapper, PanelWrap, InfoWrap } from './index.styled';

@withAccountInfo
class InfoPanel extends PureComponent {
    render() {
        const { data } = this.props;

        return (
            <Grid>
                <Wrapper>
                    <div><Photo /></div>
                    <PanelWrap>
                        <InfoWrap>
                            <div>{ data.firstname }</div>
                            <div>{ data.lastname }</div>
                        </InfoWrap>
                        <div>Cards,Invites</div>
                    </PanelWrap>
                </Wrapper>
            </Grid>
        );
    }
}
    
export default InfoPanel;
    