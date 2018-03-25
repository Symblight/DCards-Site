import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { FieldWrap } from './index.styled';

class Field extends PureComponent {

   static propTypes = {
     children: PropTypes.node.isRequired,
     className: PropTypes.string,
     border: PropTypes.bool
   };

   static defaultProps = {
     border: true
   };

   render() {
     const { className, children, border } = this.props;

     return (
       <FieldWrap className={className} border={border}>
         {children}
       </FieldWrap>
     );
   }
}


export default Field;
