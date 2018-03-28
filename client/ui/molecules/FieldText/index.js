import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Field from 'ui/atoms/Field';
import InputForm from 'ui/molecules/InputForm';

import { FieldTitle, FieldValue } from './index.styled';

class FieldText extends PureComponent {

    static propTypes = {
      title: PropTypes.string,
      value: PropTypes.string,
      edit: PropTypes.bool,
      onChange: PropTypes.func,
      border: PropTypes.bool,
      type: PropTypes.string,
      name: PropTypes.string
    };

    renderTitle() {
      const { title } = this.props;

      return (
        <FieldTitle>
          { title }
        </FieldTitle>
      );
    }

    renderInput() {
      const {
        value,
        onChange,
        type,
        name
      } = this.props;

      return (
        <InputForm value={value} type={type} onChange={onChange} {...this.props} />
      );
    }

    render() {
      const { value, edit, border } = this.props;

      return (
        <Field border={border}>
          {
            this.renderTitle()
          }
          <FieldValue>
            {
              edit ? this.renderInput() :
              value
            }
          </FieldValue>
        </Field>
      );
    }
}

export default FieldText;
