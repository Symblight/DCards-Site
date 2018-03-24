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
    data: PropTypes.object
  };

  constructor() {
    super();

    this.state = {
      edit: false
    };
  }

  handleClick = () => {
    console.log('handle Change Password');
  };

  handleClickEdit = () => {
    this.setState({ edit: !this.state.edit });
  };

  render() {
    const { data } = this.props;

    return (
      <PageTemplate
        header={<Header />}
      >
        <Container>
          <Grid>
            {
              <InfoPanel
                data={data}
                onChangePassword={this.handleClick}
                onEditClick={this.handleClickEdit}
                edit={this.state.edit}
              />
            }
          </Grid>
        </Container>
      </PageTemplate>
    );
  }
}

export default AccountPage;
