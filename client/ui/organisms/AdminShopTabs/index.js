import React, { PureComponent } from 'react';

import Tabs from 'ui/molecules/Tabs';
import TabItem from 'ui/molecules/TabItem';

import { } from './index.styled';

class AdminShopTabs extends PureComponent {
  render() {
    return (
      <Tabs selected={this.props.firstSelect || 0}>
        <TabItem label="Карты">
          Карточки
        </TabItem>
        <TabItem label="Клиенты">
          Таблица
        </TabItem>
      </Tabs>
    );
  }
}

export default AdminShopTabs;