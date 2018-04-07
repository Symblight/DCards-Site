import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ContextContainer from 'ui/molecules/ContextContainer';
import SVGMore from 'assets/images/icons/ic_more_vert.svg';

import { ButtonWrap } from './index.styled';

class ContextMenu extends PureComponent {
    static propTypes = {
      children: PropTypes.node,
      position: PropTypes.string
    }
    state = {
      show: false
    }

    handleOnShow = (event) => {
      this.setState({ show: !this.state.show });
    };

    render() {
      const { children, position } = this.props;

      return (
        <div>
          {
              this.state.show ?
                <ContextContainer position={position} onShow={this.handleOnShow}>{children}</ContextContainer> : null
          }
          <ButtonWrap>
            <SVGMore onClick={this.handleOnShow} height={20} width={20} />
          </ButtonWrap>
        </div>
      );
    }
}

export default ContextMenu;