import React from 'react'
import './Crew.css'
import { Image, Button, Icon, Grid, Card, Divider, Container, Label, Segment } from 'semantic-ui-react'
import camera from '../../asset/images/camera.png'

const Crew = () => (
  <Container className='container'>
  <Grid columns='two' divided>
    <Grid.Row>
      <Grid.Column>
        {/* <Image src='/assets/images/wireframe/media-paragraph.png' /> */}
      </Grid.Column>

      <Grid.Column>
        <Card.Group itemsPerRow={2}>
          <Card raised image={camera}/>
          <Card raised image={camera} />
        </Card.Group>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Image src='/assets/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Card.Group itemsPerRow={2}>
          <Card raised image={camera}  />
          <Card raised image={camera} />
        </Card.Group>
      </Grid.Column>
    </Grid.Row>
  </Grid>
</Container>
)
export default Crew
