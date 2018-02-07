import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { Wrapper } from './index.styled';

import PageTemplate from 'ui/templates/PageTemplate';

class NotFoundPage extends Component {
  componentDidUpdate(){
    console.log(1111);
  }
  render() {
    return (
      <PageTemplate>
        <Wrapper>
          <h2>Not Found Page {this.props.location.pathname}</h2>
        </Wrapper>
        <div><Link to="/test">Demo components</Link></div>
      </PageTemplate>
    );
  }
}

export default NotFoundPage;
