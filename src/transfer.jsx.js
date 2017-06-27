import React from 'react';
import PropTyps from 'prop-types';


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
      <div>

      </div>
    )
  }



}

export default Transfer;