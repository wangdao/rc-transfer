import React from 'react';
import PropTyps from 'prop-types';

import Panel from './panel';
import Operation from './operation';

class Transfer extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    dataSource: PropTyps.array,
    render: PropTyps.func,
    titles: PropTyps.array

  }

  static defaultProps = {
    titles: ['source', 'target']
  }

  render() {
    return (
      <div className='dot-transfer'>
        <Panel title='Source'/>
        <Operation/>
        <Panel title='Target'/>
      </div>
    );
  }


}

export default Transfer;