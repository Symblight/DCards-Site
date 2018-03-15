import React, { PureComponent } from 'react';

import Menu from 'ui/molecules/Menu';
import Button from 'ui/molecules/PrimaryButton';

import { Wrapper } from './index.styled';

class MenuFilters extends PureComponent {
  render() {
    return (
      <Menu title="Filters">
        <Wrapper>
                    Filters
        </Wrapper>
        <Button>ok</Button>
      </Menu>
    );
  }
}

export default MenuFilters;
