import React, { PureComponent } from 'react';

class DynamicImport extends PureComponent {
    state = {
      component: null
    }
    componentDidMount() {
      this.onLoad();
    }

    onLoad = () => {
      const { load } = this.props;

      if (load) {
        load()
          .then((component) => {
            this.setState(() => ({
              component: component.default
                ? component.default
                : component
            }));
          });
      }
    };

    render() {
      return this.props.children ? this.props.children(this.state.component) : null;
    }
}

export default DynamicImport;