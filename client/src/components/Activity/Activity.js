import React, {Component} from 'react'
import './Activity.scss'
import {Link} from 'react-router'
import crew from '../../asset/images/user.png'
import tripod from '../../asset/images/tripod-logo.png'

import {
  Image,
  Button,
  Icon,
  Container,
  Grid,
  Segment,
  Divider,
  Responsive
} from 'semantic-ui-react'
// import Menu from '../Menu/Menu';
// import Footer from '../Footer/Footer'
import Capture from '../Capture/Capture';

const Activity = () => (
  <div className='activityDiv'>
    <Responsive {...Responsive.onlyMobile}
                {...Responsive.onlyTablet}
                {...Responsive.onlyComputer}
                {...Responsive.onlyLargeScreen}
                {...Responsive.onlyWidescreen}
                as={crew}/>
                {/* <Menu/> */}
    <p className='actText'></p>
    <div className='logoPad'>
    <img className='logo' position='left' src={tripod} />
  </div>
    <Divider section/>
    <Container className='activityBox'>
      <div className='buttonDiv'>
        <Button fluid secondary>
          <Grid columns='one'>
            <Grid.Row>
              <Grid.Column>
                <Link to=''><Capture/></Link>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Button>
        <div>
          <Button fluid secondary>
            <Grid columns='one'>
              <Grid.Row>
                <Grid.Column>
                  <Link to=''><Icon name='search' size='massive' color='blue' className='search'/></Link>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Button>
          <div>
            <div>
              <Button fluid secondary>
                <Grid columns='one'>
                  <Grid.Row>
                    <Grid.Column>
                      <Link to='/crew'><Container fluid className='ninja'><img size='small' color='lavender' className='crew' src='https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-31-512.png' alt='crew'/></Container></Link>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Button>
              <div>
                <Button fluid secondary>
                  <Grid columns='one'>
                    <Grid.Row>
                      <Grid.Column>
                        <Link to='/home'><Icon name='home' size='massive' color='red' className='logoutButton'/></Link>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Button>
                <div>
                  <Button fluid secondary>
                    <Grid columns='one'>
                      <Grid.Row>
                        <Grid.Column>
                          <Link to='/feature'><Icon name='info' size='massive' color='orange' className='feature'/></Link>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Button>
                  <div>
                    <Button fluid secondary>
                      <Grid columns='one'>
                        <Grid.Row>
                          <Grid.Column>
                            <Link to='/signupForm'><Icon name='log out' size='massive' color='purple' className='logout'/></Link>
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
    {/* <Footer /> */}
  </div>
)

export default Activity
{/* <div className='fileDiv'>
  <Button fluid size='small'><input type='file'/></Button>
  <div>
    <Button fluid size='big' color='white' content='camera' icon='camera' labelPosition='right' />
  </div>
</div> */
}
