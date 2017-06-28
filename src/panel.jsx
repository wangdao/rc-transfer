import React from 'react';
import PropTyps from 'prop-types';

import Checkbox from './checkbox';

class Panel extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="dot-transfer-panel">
        <Checkbox>Checkbox</Checkbox>
      </div>
    )
  }
}

export default Panel;