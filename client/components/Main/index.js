import React, { PureComponent } from 'react';

import MainPage from 'ui/pages/MainPage';
import Loading from 'ui/atoms/Loading';
import DynamicImport from 'components/proxy-props/withDynamicImport';

class Main extends PureComponent {

    handleSignOut = () => {
      console.log('Sign out');
    }

    render() {
      return (
        <DynamicImport load={() => import('ui/pages/MainPage')}>
          {(Component) => (Component === null
        ? <Loading />
        : <Component {...this.props} />)}
        </DynamicImport>
      );
    }
}

export default Main;
