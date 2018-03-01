import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Button from 'ui/molecules/PrimaryButton';
import Field from 'ui/atoms/Field';

import { FieldTitle, FieldValue } from './index.styled';


class FieldText extends PureComponent {

    static propTypes = {
        className: PropTypes.string,
        title: PropTypes.string,
        value: PropTypes.string,
    }

    renderTitle() {
        const { title } = this.props;

        return (
            <FieldTitle>
                { title }
            </FieldTitle>
        );
    }
      
    render() {
        const { className,  value } = this.props;

        return ( 
            <Field>
                {
                    this.renderTitle()
                }
                <FieldValue>
                    { value }
                </FieldValue>
            </Field>
        );
    }
}

export default FieldText;