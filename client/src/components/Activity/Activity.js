import React, { Component } from 'react'
import './Activity.scss'
import { Image, Button, Icon, Container } from 'semantic-ui-react'
import Menu from '../Menu/Menu'

const Activity  = () => (
<div>
  <Menu />
<Container className='ActivityBox'>

  <div className='fileDiv'>
    <Button fluid size='small'><input type='file'/></Button>
    <div>
      <Button fluid size='big' color='white' content='camera' icon='camera' labelPosition='right' />
    </div>
  </div>
</Container>
</div>
)

export default Activity
