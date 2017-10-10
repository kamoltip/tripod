import React, { Component } from 'react'
import './Activity.scss'
import { Image, Button, Icon, Container, Grid, Segment, Divider } from 'semantic-ui-react'
import Menu from '../Menu/Menu'
// import Footer from '../Footer/Footer'
const Activity  = () => (
<div className='activityDiv'>
  <Menu />
  <p className='actText'>ACTIVITIES</p>

  <Divider section/>
<Container className='ActivityBox'>
  <Grid columns='three' divided>
    <Grid.Row>
      <Grid.Column>
      <div className='fileDiv'>
        <Button fluid size='small'><input type='file'/></Button>
        <div>
          <Button fluid size='big' color='white' content='camera' icon='camera' labelPosition='right' />
        </div>
      </div>
      </Grid.Column>
    </Grid.Row>
    </Grid>

</Container>
{/* <Footer /> */}
</div>
)

export default Activity
