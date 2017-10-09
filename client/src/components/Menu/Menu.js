import React, {Component} from 'react'
import {Icon, Menu} from 'semantic-ui-react'
import {Link} from 'react-router';
import './Menu.scss';
import crew from '../../asset/images/user.png'
import logo from '../../asset/images/tripod-logo.png'


export default class MenuExampleLabeledIcons extends Component {
  constructor(){
      super();

      this.state = {
        activeItem: 'gamepad'
      }

      this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick (e, {name}) {

    this.setState({activeItem: name});
  }

  render() {
    const {activeItem} = this.state

    return (
      <Menu pointing inverted size='tiny'>
        <Menu.Item header><img src={logo}/></Menu.Item>
      <Link to ='/activity'>
        <Menu.Item name='activity' active={activeItem === 'activity'} onClick={this.handleItemClick}>
          <Icon name='mixcloud' size='big'/>
          Activity
        </Menu.Item>
      </Link>
          <Link to ='/feature'>
            <Menu.Item name='feature' active={activeItem === 'feature'} onClick={this.handleItemClick}>
              <Icon name='info circle' size='big'/>
              Feature
            </Menu.Item>
          </Link>
        <Menu.Menu position='right'>
        <Link to ='/crew'>
          <Menu.Item name='crew' active={activeItem === 'crew'} onClick={this.handleItemClick}>
            <img src={crew} alt='crew'/>
          </Menu.Item>
        </Link>
        <Link to ='/home'>
          <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick}>
            <Icon name='home' size='big'/>
          </Menu.Item>
        </Link>
      <Link to= '/signin-form'>
          <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick}>
            <Icon name='sign out' size='big'/>
          </Menu.Item>
      </Link>
        </Menu.Menu>
      </Menu>
    )
  }
}
