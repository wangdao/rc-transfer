import React from 'react';
import PropTyps from 'prop-types';

import Checkbox from './checkbox';
import Item from './item';

const x = 3;
const y = 2;
const z = 1;
const gData = [];

const generateData = (_level, _preKey, _tns) => {
  const preKey = _preKey || '0';
  const tns = _tns || gData;

  const children = [];
  for (let i = 0; i < x; i++) {
    const key = `${preKey}-${i}`;
    tns.push({ title: key, key });
    if (i < y) {
      children.push(key);
    }
  }
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });
};
generateData(z);

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

      if (i % 4 === 0) {
        node.children = [];

        for (let j=0;j<20;j++) {
          node.children.push({
            key: i + '-' +j,
            title: 'sub-content-' + j
          })
        }
      }

      contents.push(node)
    }

    const loop = (items, level = 0) => items.map(item => {
      const style = {};

      if (level > 0) {
        style.paddingLeft = 12 * (level + 1);
      }

      if (item.children) {
        return (
          <Item key={item.key} title={item.title} style={style}>
            {loop(item.children, level + 1)}
          </Item>
        )
      }

      return <Item key={item.key} title={item.title} style={style}/>
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
              {loop(gData)}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Panel;