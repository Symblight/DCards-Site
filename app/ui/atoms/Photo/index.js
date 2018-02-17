import React, { PureComponent } from 'react';

import { ImageWrap } from './index.styled';

class Photo extends PureComponent {
    render() {
        const { className, src } = this.props;

        return (
            <ImageWrap src={src} />
        );
    }
}
    
export default Photo;
