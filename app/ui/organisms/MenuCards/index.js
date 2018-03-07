import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Menu from 'ui/molecules/Menu';
import Button from 'ui/molecules/PrimaryButton';

import { Wrapper } from './index.styled.js'

class MenuCards extends PureComponent {

    static propTypes = {

    };

    render() {
        return (
            <Menu title='Menu'>
                <Wrapper>
                    <ul>
                        <li>Count cards</li>
                        <li>Filters</li>
                    </ul>
                </Wrapper>
                <Button>ADD NEW CARD</Button>
            </Menu>
        );
    }
}


export default MenuCards;