import React, { PureComponent } from 'react';

import Img from 'assets/images/person.png';

import { ImageWrap } from './index.styled';

class Photo extends PureComponent {
    render() {
        return (
            <ImageWrap src={Img} />
        );
    }
}
    
export default Photo;
