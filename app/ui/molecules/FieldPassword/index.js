import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Button from 'ui/molecules/PrimaryButton';
import Field from 'ui/atoms/Field';

import { FieldTitle, ContentWrap, DotsWrap } from './index.styled';

class FieldPassword extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
        title: PropTypes.string,
        value: PropTypes.string,
        onChange: PropTypes.func,
        onClick : PropTypes.func
    };

    renderTitle() {
        const { title } = this.props;

        return (
            <FieldTitle>
                { title }
            </FieldTitle>
        );
    }

    render() {
        const { value, onClick, onChange } = this.props;

        return (
            <Field>               
                {
                    this.renderTitle()
                }
                <ContentWrap>
                    <DotsWrap>••••••••••</DotsWrap>
                    <Button onClick = {onClick}>Change Password</Button>
                </ContentWrap>
            </Field>
        );
    }
}

export default FieldPassword;