import React, { Component } from 'react'
import './LandingPage.css'
import { Image, Button, Icon } from 'semantic-ui-react'

const LandingPage = () => (
<header className='head'>
  <h1><Icon circular
    name='camera'
    size='medium' />
    <br/>

  Take On A New Experience <br/> With Your Journey</h1>
  <h3>And See The World from Different "ANGLES"</h3>
  <Button inverted color='white' size='huge' content='Login' icon='user circle' labelPosition='left' />
  <Button inverted color='white' size='huge' content='Signup' icon='signup' labelPosition='right' />
</header>
)

export default LandingPage
