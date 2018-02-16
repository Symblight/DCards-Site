import React, { PureComponent } from 'react';

import Grid from 'ui/molecules/Grid';
import Photo from 'ui/atoms/Photo';
import withAccountInfo from 'components/proxy-props/withAccountInfo';

import { Wrapper, PanelWrap, InfoWrap, GridWrap } from './index.styled';

@withAccountInfo
class InfoPanel extends PureComponent {
    render() {
        const { data } = this.props;

        return (
            <GridWrap>
                <Wrapper>
                    <div><Photo /></div>
                    <PanelWrap>
                        <InfoWrap>
                            {`${data.firstname}  ${data.lastname}`}
                        </InfoWrap>
                        <div>Cards,Invites</div>
                    </PanelWrap>
                </Wrapper>
            </GridWrap>
        );
    }
}
    
export default InfoPanel;
    