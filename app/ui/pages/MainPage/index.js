import React, { PureComponent } from 'react';

import PageTemplate from 'ui/templates/BlockTemplate';
import Footer from 'ui/organisms/Footer';
import Header from 'ui/organisms/Header';
import InfoPanelAccount from 'ui/organisms/InfoPanel';
import ListCards from 'ui/organisms/ListCards';
import ListShops from 'ui/organisms/ListShops';
import MenuCards from 'ui/organisms/MenuCards';
import MenuFilters from 'ui/organisms/MenuFilters';
import Tabs from 'ui/molecules/Tabs';
import TabItem from 'ui/molecules/TabItem';

import { ContentWrap, MenuWrap } from './index.styled';

class MainPage extends PureComponent {

  render() {
    return (
      <PageTemplate
        nav={<InfoPanelAccount />}
        header={<Header />}
        footer={<Footer />}
      >
        <Tabs selected={this.props.firstSelect || 0}>
          <TabItem label="Cards">
            <ContentWrap>
              <ListCards />
              <MenuWrap>
                <MenuCards />
                <MenuFilters />
              </MenuWrap>
            </ContentWrap>
          </TabItem>
          <TabItem label="Shops">
            <ContentWrap>
              <ListShops />
              <MenuWrap>
                <MenuCards />
                <MenuFilters />
              </MenuWrap>
            </ContentWrap>
          </TabItem>
        </Tabs>
      </PageTemplate>
    );
  }
}

export default MainPage;
