import React, {component} from 'react'
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
import air from '../../asset/images/b-wAair.png'
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
      <Grid stackable divided='vertically'>

        <Grid.Row columns={2}>
          <Grid.Column>
            <Image src={jeff} className='jeff'/>
            <h1>Jeff Liipfert</h1>
            <h3>-Jeff-</h3>
          <a href='https://github.com/jliip51' target='_blank'><Icon name='github' size='huge'></Icon></a>
          <a href='https://www.linkedin.com/in/jeff-liipfert/' target='_blank'><Icon name='linkedin' size='huge'/></a>
          <a href='https://twitter.com/JLiipfert' target='_blank'><Icon name='twitter' size='huge'/></a>
          <Divider section/>
          </Grid.Column>
          <Grid.Column>
            <Image src={air} className='air'/>
            <h1>Kamoltip Cardenas</h1>
            <h3>-Air-</h3>
            <a href='https://github.com/kamoltip' target='_blank'><Icon name='github' size='huge'></Icon></a>
            <a href='https://www.linkedin.com/in/kamoltip-cardenas-8bb886116/' target='_blank'><Icon name='linkedin' size='huge'/></a>
            {/* <a href='https://twitter.com/Kamoltip3830' target='_blank'><Icon name='twitter' size='huge'/></a> */}
            <a href='https://docs.google.com/document/d/1_rUr8lCi7EpwJSWxmFxzH5iPaieKLuOs4WnrhQlJu3I/edit?usp=sharing' target='_blank'><Icon name='address card outline' size='huge'/></a>
            <a href='https://kamoltip.github.io/' target='_blank'><Icon name='desktop' size='huge'/></a>
            <Divider section/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid stackable divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Image src={nelum} className='nelum'/>
            <h1>Nelum Samaradiwakara</h1>
            <h3>-Nelum-</h3>
            <a href='https://github.com/Dil2000' target='_blank'><Icon name='github' size='huge'></Icon></a>
            <a href='https://www.linkedin.com/in/nelum-sam/' target='_blank'><Icon name='linkedin' size='huge'/></a>
            <a href='https://nelum.herokuapp.com/' target='_blank'><Icon name='desktop' size='huge'/></a>
            <Divider section/>
          </Grid.Column>
          <Grid.Column>
            <Image src={ben} className='ben'/>
            <h1>Ben Allen Jr.</h1>
            <h3>-Ben-</h3>
            <a href='https://github.com/bjallen10' target='_blank'><Icon name='github' size='huge'></Icon></a>
            <a href='https://www.linkedin.com/in/bjallen12' target='_blank'><Icon name='linkedin' size='huge'/></a>
            <Divider section/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>

)
export default Crew
