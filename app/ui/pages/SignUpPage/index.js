import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import PageTemplate from 'ui/templates/PageTemplate';

class SignUpPage extends Component {
  render() {
    return (
      <PageTemplate>
        <div>Sign Up</div>
        <div><Link to="/test">Demo components</Link></div>
      </PageTemplate>
    );
  }
}

export default SignUpPage;
