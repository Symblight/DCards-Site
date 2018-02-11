import React, { Component } from 'react';

import PageTemplate from 'ui/templates/PageTemplate';

class MainPage extends Component {
  render() {
    return (
      <PageTemplate auth = { true } >
        <div>Main</div>
      </PageTemplate>
    );
  }
}

export default MainPage;
