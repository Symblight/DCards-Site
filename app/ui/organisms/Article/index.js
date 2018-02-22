import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Button from 'ui/molecules/PrimaryButton';
import CardSVG from 'assets/images/card.svg';

import { 
    Wrapper, 
    ImageWrap, 
    NameCardWrap, 
    PanelWrap, 
    ButtonWrap, 
    DiscriptionWrap
 } from './index.styled';

class Article extends PureComponent {
    static propTypes = {

    };

    render() {
        const { data } = this.props;

        return (
            <Wrapper>
                <ImageWrap>
                    <CardSVG height={75} width={165} />
                </ImageWrap>
                <PanelWrap>
                    <NameCardWrap>
                        {data.shop}
                    </NameCardWrap>
                    <DiscriptionWrap>
                        {data.discription}
                    </DiscriptionWrap>
                    <Link to = {`/card/id=${data.id}`} >
                        <ButtonWrap>Show id</ButtonWrap>
                    </Link>
                </PanelWrap>
            </Wrapper>
        );
    }
}

export default Article;