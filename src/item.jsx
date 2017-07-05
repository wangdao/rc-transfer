import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Checkbox from './checkbox';

class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expand: false,
      checked: false
    }
  }

  static propTypes = {
    title: PropTypes.string,
    style: PropTypes.object,
    expand: PropTypes.bool
  };

  static defaultProps = {
    expand: false
  };

  componentWillMount() {
    const {expand} = this.props;

    this.setState({
      expand: expand
    });
  }

  componentWillReceiveProps(nextProps) {
    const {expand} = this.props;

    this.setState({
      expand: expand
    })
  }

  handleSwitcherClick = (e) => {
    e.stopPropagation();

    this.setState({
      expand: !this.state.expand
    });


  };

  handleClick =(e) => {
    e.stopPropagation();

    const {checked} = this.state;
    this.setState({
      checked: !checked
    })


  };

  handleCheckboxChange = (checked) => {
    this.setState({
      checked: checked
    })
  };

  render() {
    const {title, children, style} = this.props;
    const {expand, checked} = this.state;

    const switcherClasses = classNames({
      doticon: true,
      'icon-open': expand,
      'icon-close' : !expand
    });

    return (
      <li className="dot-transfer-list-item dot-transfer-list-item-expand" >
        <div className="dot-transfer-list-item-title" style={style} onClick={this.handleClick}>
          {children ? <i onClick={this.handleSwitcherClick} className={switcherClasses}></i> : <i></i>}
          <Checkbox checked={checked} onChange={this.handleCheckboxChange}/>
          <span>{title}</span>
        </div>


        {
          children && expand ?
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