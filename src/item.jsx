import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from './checkbox';

class Item extends React.Component {
  constructor() {
    super();
  }

  static propTypes = {
    title: PropTypes.string
  };

  render() {
    const {title, children} = this.props;

    console.log(children);

    return (
      <li className="dot-transfer-list-item">
        <Checkbox/>
        <span>{title}</span>
      </li>
    )

  }
}

export default Item;