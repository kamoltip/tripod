import React, {Component} from 'react'
import './Activity.scss'
import {Link} from 'react-router'
import tripod from '../../asset/images/tripod-logo.png'
import Capture from '../Capture/Capture'
import Pin from '../Pin/Pin'
import {
  Image,
  Button,
  Icon,
  Container,
  Grid,
  Segment,
  Divider,
  Responsive,
  Input,
  Modal,
  Form
} from 'semantic-ui-react'

const Activity = () => (
  <div className='activityDiv'>
    <Responsive
      {...Responsive.onlyMobile}
      {...Responsive.onlyTablet}
      {...Responsive.onlyComputer}
      {...Responsive.onlyLargeScreen}
      {...Responsive.onlyWidescreen}
      as={Grid}/>

    <p className='actText'></p>
    <div className='logoPad'>
      <Link to = '/home'><img className='logo' src={tripod} /></Link>
    </div>
    <Divider section/>
    <Container className='activityBox'>
      <div className='buttonDiv'>
        <Button fluid basic>
          <Grid columns='one'>
            <Grid.Row>
              <Grid.Column>

                <Pin />

              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Button>
        <div>
          <Button fluid basic>
            <Grid columns='one'>
              <Grid.Row>
                <Grid.Column>
                  <Link to='/search'><Icon name='image' size='massive' color='black' className='search'/></Link>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Button>
          <div>
            <div>
              <Button fluid basic>
                <Grid columns='one'>
                  <Grid.Row>
                    <Grid.Column>
                      <Link to='/home'><Icon name='home' size='massive' color='black' className='logoutButton'/></Link>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Button>

              <div>
                <div>
                  <Button fluid basic>
                    <Grid columns='one'>
                      <Grid.Row>
                        <Grid.Column>
                          <Link to='/crew'><Icon name='users' size='massive' color='grey' className='user'/></Link>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Button>
                  <div>
                    {/* <Button fluid basic>
                      <Grid columns='one'>
                        <Grid.Row>
                          <Grid.Column>
                            <Link to='/feature'><Icon name='info' size='massive' color='grey' className='feature'/></Link>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Button> */}
                    <Button fluid inverted>
                      <Grid columns='one'>
                        <Grid.Row>
                          <Grid.Column>
                            <Link to='/login'><Icon name='log out' size='massive' color='grey' className='logout'/></Link>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>

  </div>
)

export default Activity
