import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Button from 'ui/molecules/PrimaryButton';

import { Wrapper } from './index.styled';

class Article extends PureComponent {
    static propTypes = {

    };

    render() {
        const { id, shop, discription } = this.props;

        return (
            <Wrapper>
                <div>image</div>
                <div>{shop}</div>
                <Button>Show id</Button>
            </Wrapper>
        );
    }
}

export default Article;