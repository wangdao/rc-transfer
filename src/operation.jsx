import React from 'react';
import PropTyps from 'prop-types';

import Button from './button';

const Operation = ({leftActive, rightActive, onMoveToLeft, onMoveToRight}) => {

  return (
    <div className="dot-transfer-operation">
      <Button>左移</Button>
      <Button>右移</Button>
    </div>
  )
};


export default Operation;