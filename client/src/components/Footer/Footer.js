import React, {component} from 'react'
import './Footer.scss'
import {Divider, Grid, Segment} from 'semantic-ui-react'
import Menu from '../Menu/Menu'

const Footer = () => (
  <div className='footerDiv'>
    <footer className='footerBox'>
      <Grid columns={3} relaxed>
  <Grid.Column>
    <Segment basic>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
    </Segment>
  </Grid.Column>
  <Divider vertical />
  <Grid.Column>
    <Segment basic>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
    </Segment>
  </Grid.Column>
  <Divider vertical />
  <Grid.Column>
    <Segment basic>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
    </Segment>
  </Grid.Column>
</Grid>
</footer>
  </div>
)

export default Footer
