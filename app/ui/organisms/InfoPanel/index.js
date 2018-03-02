import React, { PureComponent } from 'react';

import Grid from 'ui/molecules/Grid';
import Photo from 'ui/atoms/Photo';
import Img from 'assets/images/person.png';
import withAccountInfo from 'components/proxy-props/withAccountInfo';

import { Wrapper, PanelWrap, InfoWrap, GridWrap } from './index.styled';

@withAccountInfo
class InfoPanel extends PureComponent {
    render() {
        const { data } = this.props;

        return (
                <Wrapper>
                    <Photo src = {Img} />
                    <PanelWrap>
                        <InfoWrap>
                            {`${data.firstname}  ${data.lastname}`}
                        </InfoWrap>
                    </PanelWrap>
                </Wrapper>
        );
    }
}
    
export default InfoPanel;
    