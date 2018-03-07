import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Button from 'ui/atoms/Button';
import InputText from 'ui/atoms/InputText';

import { Wrapper, WrapInput, WrapButton, LabelLoop } from './index.styled';

class InputSearch extends PureComponent {

    static displayName = 'InputSearch';

    static propTypes = {
        onChange : PropTypes.func,
        onClick: PropTypes.func
    };

    render() {
        const { onChange, onClick } = this.props;

        return (
            <Wrapper action="/search/shops/">
                <WrapInput>
                    <LabelLoop><i className="material-icons">search</i></LabelLoop>
                    <InputText onChange={onChange} placeholder='Search shops'/>
                    <WrapButton onClick={onClick}> search </WrapButton>
                </WrapInput>
            </Wrapper>
        );
    }
}

export default InputSearch;