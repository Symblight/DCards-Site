import React, { Component } from 'react';
import { Wrapper } from './index.styled';

import PageTemplate from 'ui/templates/PageTemplate';

class NotFoundPage extends Component {
  render() {
    return (
      <PageTemplate>
        <Wrapper>
          <h2>Not Found Page {this.props.location.pathname}</h2>
        </Wrapper>
      </PageTemplate>
    );
  }
}

export default NotFoundPage;
