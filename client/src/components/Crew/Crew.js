import React from 'react'
import './Crew.scss'
import { Image, Button, Icon, Grid, Card, Divider, Container, Label, Segment, Header } from 'semantic-ui-react'
import user from '../../asset/images/user.png'
import Menu from '../Menu/Menu'
import Footer from '../Footer/Footer'

const Crew = () => (
<Container fluid className='crewBox'>
<Menu />
<p className='crewText'>OUR TEAM</p>

<Divider section/>
  <Container className='container'>
  <Grid columns='two' divided>
    <Grid.Row>
      <Grid.Column>
        <Header as='h1'>
          <ul>
            <li className='first-text'>we are designers</li>
            <li className='second-text'>we are thinkers</li>
            <li className='third-text'>we are learners</li>
            <li className='fourth-text'>we are creators</li>
            <li className='last-text'>MEET THE CREW</li>
          </ul>
        </Header>
      </Grid.Column>

      <Grid.Column>
        <Card.Group itemsPerRow={2}>
          <Card
            href='http://google.com' target='_blank'
            header='Kamoltip Cardenas'
            className='air'
            raised image={user}/>

          <Card
            href='http://google.com' target='_blank'
            header='Jeff Liifpert'
            className='jeff'
            raised image={user} />
        </Card.Group>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
          <h1 className='fifth-text'>WE ARE DEVELOPERS</h1>
      </Grid.Column>
      <Grid.Column>
        <Card.Group itemsPerRow={2}>
          <Card
            href='http://google.com' target='_blank'
            header='Nelum'
            className='nelum'
            raised image={user}/>
          <Card
            href='http://google.com' target='_blank'
            header='Ben'
            className='ben'
            raised image={user} />
        </Card.Group>
      </Grid.Column>
    </Grid.Row>
  </Grid>
</Container>
<Grid column={1}>
  <Grid.Column>
    <Footer/>
  </Grid.Column>
</Grid>
</Container>
)
export default Crew
