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
    targetData: PropTyps.array,
    render: PropTyps.func,
    titles: PropTyps.array

  };

  static defaultProps = {
    titles: ['source', 'target']
  };

  render() {
    const {dataSource} = this.props;

    const leftDataSource = [], rightDataSource = [];

    const leftActive = leftDataSource.length > 0;
    const rightActive = rightDataSource.length > 0;

    return (
      <div className='dot-transfer'>
        <Panel title='Source' dataSource={dataSource}/>
        <Operation leftActive={leftActive} rightActive={rightActive}/>
        <Panel title='Target' dataSource={rightDataSource}/>
      </div>
    );
  }


}

export default Transfer;