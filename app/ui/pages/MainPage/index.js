import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import PageTemplate from 'ui/templates/PageTemplate';

class MainPage extends Component {
  render() {
    return (
      <PageTemplate>
        <div>Main</div>
        <div><Link to="/test">Demo components</Link></div>
      </PageTemplate>
    );
  }
}

export default MainPage;
