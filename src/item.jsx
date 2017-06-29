import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from './checkbox';

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    title: PropTypes.string
  };

  renderChildren = () => {

  };

  render() {
    const {title, children} = this.props;

    return (
      <li className="dot-transfer-list-item dot-transfer-list-item-expand">
        <Checkbox/>
        <span>{title}</span>

        {
          children ?
            <ul className="dot-transfer-sub-list">
              {children}
            </ul>
            : null
        }
      </li>
    )

  }
}

export default Item;