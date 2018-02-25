import React, { PureComponent } from 'react';

class Spinner extends PureComponent {
    render() {
        return (
            <div className="ui active centered inline loader"></div>
        );
    }
}

export default Spinner;