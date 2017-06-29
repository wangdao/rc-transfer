import React from 'react';
import PropTyps from 'prop-types';

import Checkbox from './checkbox';
import Item from './item';


class Panel extends React.Component {
  constructor(props) {
    super(props);
  }


  static propTypes = {
    title: PropTyps.string
  };


  render() {
    const {title} = this.props;

    const contents = [];

    for (let i=0; i< 20; i++) {
      const node = {
        key: i,
        title: 'content-' + i
      };

      if (node % 4 === 0) {
        node.children = [];

        for (let j=0;j<20;j++) {
          node.children.push({
            key: j,
            title: 'sub-content-' + j
          })
        }
      }

      contents.push(node)
    }

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
              {
                contents.map(item => <Item key={item.key} title={item.title}/>)
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Panel;