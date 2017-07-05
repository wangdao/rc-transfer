import React from 'react';
import PropTyps from 'prop-types';

import Button from './button';

const Operation = ({leftActive, rightActive, onMoveToLeft, onMoveToRight}) => {

  return (
    <div className="dot-transfer-operation">
      <Button disabled={!leftActive}>左移</Button>
      <Button disabled={!rightActive}>右移</Button>
    </div>
  )
};

Operation.propTypes = {
  leftActive: PropTyps.bool,
  rightActive: PropTyps.bool,
  onMoveToLeft: PropTyps.func,
  onMoveToRight: PropTyps.func
};


export default Operation;