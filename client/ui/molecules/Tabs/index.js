import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import TabTitle from 'ui/atoms/TabTitle';

import { TitlesWrap, Content } from './index.styled';

class TabConatiner extends PureComponent {
    static displayName = 'Tabs';

    static propTypes = {
      children: PropTypes.node.isRequired,
    };

    static defaultProps = {
      selected: 0
    }

    constructor(props) {
      super(props);

      this.state = {
        selected: this.props.selected
      };
    }

    handleClick = (e, index) => {
      this.setState({
        selected: index
      });
    }

    _renderTitles() {
      const { children } = this.props;

      return (
        <TitlesWrap role="tablist">
          {
                    _.map(children, (item, id) =>
                      (
                        <TabTitle role="tab" key={id} aria-controls={`panel${id}`} id={id} onClick={this.handleClick} selected={this.state.selected === id}>
                          {item.props.label}
                        </TabTitle>
                    ))
                }
        </TitlesWrap>
      );
    }

    render() {
      const { children } = this.props;

      return (
        <div>
          {this._renderTitles()}
          {children[this.state.selected]}
        </div>
      );
    }
}

export default TabConatiner;
