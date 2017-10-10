import React, {Component} from 'react'
import './LandingPage.scss'
import {Image, Button, Icon} from 'semantic-ui-react'
import tripod from '../../asset/images/tripod-logo.png'
import Menu from '../Menu/Menu'

const LandingPage = () => (
  <header className='head'>
    <Menu/>
    <div className='content'>
      <h1 className='quote'><img circular src={tripod}/>
        <br/>
        Take On A New Experience
        <br/>
        With Your Journey</h1>
      <h3 className='subQuote'>And See The World from Different "ANGLES"</h3>
      <Button inverted color='white' size='huge' content='Login' icon='user circle' labelPosition='left'/>
      <Button inverted color='white' size='huge' content='Signup' icon='signup' labelPosition='right'/>
    </div>
  </header>
)

export default LandingPage
