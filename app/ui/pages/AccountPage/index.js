import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import PageTemplate from 'ui/templates/PageTemplate';

class AccountPage extends Component {
  render() {
    return (
      <PageTemplate>
        <div>AccountPage</div>
        <div><Link to="/test">Demo components</Link></div>
      </PageTemplate>
    );
  }
}

export default AccountPage;
