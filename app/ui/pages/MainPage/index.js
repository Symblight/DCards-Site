import React, { PureComponent } from 'react';

import PageTemplate from 'ui/templates/BlockTemplate';
import Container from 'ui/molecules/Container';
import Button from 'ui/molecules/AddButton';
import Grid from 'ui/molecules/Grid';
import InfoPanelAccount from 'ui/organisms/InfoPanel';
import ListMain from 'ui/organisms/ListMain';
import MenuCards from 'ui/organisms/MenuCards';

import { Wrapper, ContentWrap, MenuWrap } from './index.styled';

class MainPage extends PureComponent {


  render() {
    return (
      <PageTemplate
        header={<InfoPanelAccount />}  
      >
      <ContentWrap>
        <ListMain />
        <MenuWrap>
          <MenuCards />
        </MenuWrap>
      </ContentWrap>
      </PageTemplate>
    );
  }
}

export default MainPage;
