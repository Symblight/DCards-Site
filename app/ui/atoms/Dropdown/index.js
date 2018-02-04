import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Dropdown extends PureComponent {

  static propTypes = {
    columns: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render() {
    const { columns } = this.props;

    return (
      <div>
        <select>
          {
            columns.map((col) =>
              <option key={col.id} value={col.value}>{col.value}</option>
          )
          }
        </select>
      </div>
    );
  }
}

export default Dropdown;
