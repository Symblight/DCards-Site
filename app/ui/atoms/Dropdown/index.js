import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Dropdown extends PureComponent {

  static propTypes = {
    columns: PropTypes.arrayOf(PropTypes.object).isRequired,
    className: PropTypes.string
  }

  render() {
    const { className, columns } = this.props;

    return (
      <div className={className}>
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
