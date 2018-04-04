import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { FieldWrap } from './index.styled';

class FieldForm extends PureComponent {

   static propTypes = {
     children: PropTypes.node.isRequired,
     className: PropTypes.string
   };

   render() {
     const { className, children } = this.props;

     return (
       <FieldWrap className={className}>
         {children}
       </FieldWrap>
     );
   }
}


export default FieldForm;
