import React, { PureComponent } from 'react';

import PageTemplate from 'ui/templates/PageTemplate';

import { Wrapper } from './index.styled';

class BrokenPage extends PureComponent {
  render() {
    return (
      <PageTemplate>
        <Wrapper>
          <h2>500 Something has broken. {this.props.location.pathname}</h2>
        </Wrapper>
      </PageTemplate>
    );
  }
}

export default BrokenPage;
