import React, { PureComponent } from 'react';

import AdminShopTabs from 'ui/organisms/AdminShopTabs';
import MenuAdminShop from 'ui/organisms/MenuAdminShop';

import { Wrapper, WrapEditBlock } from './index.styled';

class AdminShopContainer extends PureComponent {
  constructor() {
    super();

    this.state = {
      selected: 'BaseInfo'
    };
  }

  handleSelectedEdit = (selectedItem) => {
    this.setState({ selected: selectedItem });
  };

  renderBlockEdit() {
    if (this.state.selected === 'BaseInfo') { return (<AdminShopTabs />); }

    return null;
  }

  render() {
    return (
      <Wrapper>
        <MenuAdminShop onSelect={this.handleSelectedEdit} activeItem={this.state.selected} />
        <WrapEditBlock>
          {this.renderBlockEdit()}
        </WrapEditBlock>
      </Wrapper>
    );
  }
}

export default AdminShopContainer;