import React from 'react';
import PropTyps from 'prop-types';

import Checkbox from './checkbox';
import Item from './item';

class Panel extends React.Component {
  constructor(props) {
    super(props);
  }


  static propTypes = {
    title: PropTyps.string,
    dataSource: PropTyps.array,
    onSelect: PropTyps.func
  };

  static defaultProps = {
    dataSource: []
  };

  handleSelect = (item) => {
    console.log(item)
  };


  render() {
    const {title, dataSource} = this.props;

    const loop = (items, level = 0) => items.map(item => {
      const style = {};

      if (level > 0) {
        style.paddingLeft = 12 * (level + 1);
      }

      if (item.children) {
        return (
          <Item key={item.key} title={item.title} style={style} onSelect={this.handleSelect}>
            {loop(item.children, level + 1)}
          </Item>
        )
      }

      return <Item key={item.key} title={item.title} style={style} onSelect={this.handleSelect}/>
    });

    return (
      <div className="dot-transfer-panel">
        <div className="dot-transfer-panel-header">
          <Checkbox/>

          {
            title ? <span className="dot-transfer-panel-header-title">{title}</span> : null
          }


        </div>
        <div className="dot-transfer-panel-body">
          <div className="dot-transfer-list">
            <ul>
              {loop(dataSource)}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Panel;