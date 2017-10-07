import React, {Component} from 'react'
import {Icon, Menu} from 'semantic-ui-react'
import './Menu.css';
import crew from '../../asset/images/user.png'
import logo from '../../asset/images/tripod-logo.png'

export default class MenuExampleLabeledIcons extends Component {
  state = {
    activeItem: 'gamepad'
  }

  handleItemClick = (e, {name}) => this.setState({activeItem: name})

  render() {
    const {activeItem} = this.state

    return (
      <Menu pointing inverted size='tiny'>
        <Menu.Item header><img src={logo}/></Menu.Item>
        <Menu.Item name='camera' active={activeItem === 'camera'} onClick={this.handleItemClick}>
        <Icon name='camera' size='big'/>
          Take a Shot
        </Menu.Item>

        <Menu.Item name='picFolder' active={activeItem === 'picFolder'} onClick={this.handleItemClick}>
          <Icon name='image' size='big'/>
          Images
        </Menu.Item>

        <Menu.Item name='search' active={activeItem === 'search'} onClick={this.handleItemClick}>
          <Icon name='search' size='big'/>
          Search
        </Menu.Item>
        <Menu.Item name='feature' active={activeItem === 'feature'} onClick={this.handleItemClick}>
          <Icon name='info circle' size='big'/>
          Feature
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item name='crew' active={activeItem === 'crew'} onClick={this.handleItemClick}>
            <img src={crew} alt='crew'/>
            
          </Menu.Item>
          <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick}>
            <Icon name='home' size='big'/>
          </Menu.Item>
          <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick}>
            <Icon name='sign out' size='big'/>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
