import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import './Menu.css';
import crew from '../../asset/images/user.png'

export default class MenuExampleLabeledIcons extends Component {
  state = { activeItem: 'gamepad' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing size='tiny'>
        <Menu.Item name='camera' active={activeItem === 'camera'} onClick={this.handleItemClick}>
          <img src='http://www.stickpng.com/assets/images/584abe602912007028bd932f.png' alt='camera' />
          Take a Shot
        </Menu.Item>

        <Menu.Item name='picFolder' active={activeItem === 'picFolder'} onClick={this.handleItemClick}>
          <img src='http://www.workingatmcmaster.ca/med/photo/large/gallery-icon-1-627.png' alt='picFolder' />
          Images
        </Menu.Item>

        <Menu.Item name='search' active={activeItem === 'search'} onClick={this.handleItemClick}>
          <img src='https://maxcdn.icons8.com/Share/icon/Security//facial_recognition_scan1600.png' alt='scanFace' />
          Search
        </Menu.Item>
        <Menu.Item name='feature' active={activeItem === 'feature'} onClick={this.handleItemClick}>
          < Icon name='info circle' size='big'/>
          Feature
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item name='crew' active={activeItem === 'crew'} onClick={this.handleItemClick}>
            <img src={crew} alt='crew' />
            Crew
          </Menu.Item>
          <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSP4CLMcDvMhEGhbG_a9f0gwmdFvO3oXMK9JntkLPNoVyP_SSs' alt='home' />
            Home
          </Menu.Item>
          <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick}>
            <img src='https://www.shareicon.net/download/2015/10/17/657490_arrow_512x512.png' alt='logout' />
            Logout
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
