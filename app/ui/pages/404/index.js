import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import PageTemplate from 'ui/templates/PageTemplate';

class NotFoundPage extends Component {
  render() {
    return (
      <PageTemplate>
        <div>Not Found Page</div>
        <div><Link to="/test">Demo components</Link></div>
      </PageTemplate>
    );
  }
}

export default NotFoundPage;
