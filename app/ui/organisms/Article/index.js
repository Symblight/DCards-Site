import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
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
                <Link to = {`/card/id=${id}`} ><Button>Show id</Button></Link>
            </Wrapper>
        );
    }
}

export default Article;