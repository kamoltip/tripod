import React, { Component } from 'react'
import './LandingPage.css'
import { Image, Button, Icon } from 'semantic-ui-react'
import tripod from '../../asset/images/tripod-logo.png'

const LandingPage = () => (
<header className='head'>
  <h1><img circular
    src={tripod} />
    <br/>

  Take On A New Experience <br/> With Your Journey</h1>
  <h3>And See The World from Different "ANGLES"</h3>
  <Button inverted color='white' size='huge' content='Login' icon='user circle' labelPosition='left' />
  <Button inverted color='white' size='huge' content='Signup' icon='signup' labelPosition='right' />
</header>
)

export default LandingPage
