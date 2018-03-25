import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PageTemplate from 'ui/templates/PageTemplate';
import Header from 'components/Header';
import Container from 'ui/molecules/Container';
import Button from 'ui/molecules/PrimaryButton';
import Grid from 'ui/molecules/Grid';
import withAccountInfo from 'components/proxy-props/withAccountInfo';
import InfoPanel from 'ui/organisms/AccountInfoPanel';

import { Wrapper, ContentWrap, ButtonWrap } from './index.styled';

@withAccountInfo
class AccountPage extends PureComponent {
  static propTypes = {
    data: PropTypes.object,
    onSaveInfo: PropTypes.func
  };

  render() {
    const { data, onSaveInfo, onSavePassword } = this.props;

    return (
      <PageTemplate
        header={<Header />}
      >
        <Container>
          <Grid>
            {
              <InfoPanel
                data={data}
                onSaveInfo={onSaveInfo}
              />
            }
          </Grid>
        </Container>
      </PageTemplate>
    );
  }
}

export default AccountPage;
