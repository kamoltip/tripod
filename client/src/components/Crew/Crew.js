import React from 'react'
import './Crew.scss'
import {
  Image,
  Button,
  Icon,
  Grid,
  Card,
  Divider,
  Container,
  Label,
  Segment,
  Header,
  Responsive
} from 'semantic-ui-react'
import tripod from '../../asset/images/tripod-logo.png'
import jeff from '../../asset/images/b-wJeff2.png'
import nelum from '../../asset/images/b-wNelum2.png'
import air from '../../asset/images/airPicTripod2.png'
import ben from '../../asset/images/b-wBen2.png'
import {Link} from 'react-router'

// import Footer from '../Footer/Footer'

const Crew = () => (
  <div className='crewBox'>
    <Responsive {...Responsive.onlyMobile}
                {...Responsive.onlyTablet}
                {...Responsive.onlyComputer}
                {...Responsive.onlyLargeScreen}
                {...Responsive.onlyWidescreen}
                as={Segment}/>


    <Link to='/activity'><img src={tripod}/></Link>
    <Divider section/>
        <p className='featureText'>THE CREW</p>
    <Container className='gridBox'>
      <Grid divided='vertically'>

        <Grid.Row columns={2}>
          <Grid.Column>
            <Image src={jeff} className='jeff'/>
            <h1>Jeff Liipert</h1>
            <h3></h3>
            <Icon name='github' size='big'/>
            <Icon name='linkedin' size='big'/>
            <Icon name='twitter' size='big'/>
          </Grid.Column>
          <Grid.Column>
            <Image src={air} className='air'/>
            <h1>Kamoltip Cardenas</h1>
            <h3></h3>
            <Icon name='github' size='big'/>
            <Icon name='linkedin' size='big'/>
            <Icon name='twitter' size='big'/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider/>
      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Image src={nelum} className='nelum'/>
            <h1>Kamoltip Cardenas</h1>
            <h3></h3>
            <Icon name='github' size='big'/>
            <Icon name='linkedin' size='big'/>
            <Icon name='twitter' size='big'/>
          </Grid.Column>
          <Grid.Column>
            <Image src={ben} className='ben'/>
            <h1>Kamoltip Cardenas</h1>
            <h3></h3>
            <Icon name='github' size='big'/>
            <Icon name='linkedin' size='big'/>
            <Icon name='twitter' size='big'/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>

)
export default Crew

{/* <Header as='h1'>
<ul>
<li className='first-text'>we are designers</li>
<li className='second-text'>we are thinkers</li>
<li className='third-text'>we are learners</li>
<li className='fourth-text'>we are creators</li>
<li className='last-text'>MEET THE CREW</li>
</ul>
</Header> */
}

{/*
<div className='secondBase'>
  <div className='lastDiv'>
  <img src={air} className='topBase' />

    <div className='story'><h1>KAMOLTIP CARDENAS</h1>
    <h3>front-end</h3>
    <Icon name='github' size='huge'/>
    <Icon name='linkedin' size='huge'/>
    <Icon name='twitter' size='huge'/>
    </div>

    </div>
    </div>

</Container>

<Container>

<div className='secondBase'>
  <div className='lastDiv'>
  <img src={air} className='topBase' />

    <div className='story'><h1>KAMOLTIP CARDENAS</h1>
    <h3>front-end</h3>
    <Icon name='github' size='huge'/>
    <Icon name='linkedin' size='huge'/>
    <Icon name='twitter' size='huge'/>
    </div>

    </div>
    </div>

</Container>

</Container> */
}
