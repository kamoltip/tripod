import React from 'react';
import {
  Grid,
  Image,
  Button,
  Header,
  Icon,
  Divider,
  Segment
} from 'semantic-ui-react';
import './Feature.scss';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';

const Feature = () => (
  <div className='featureBox'>
    <Menu/>
    <p className='crewText'>FEATURES</p>

    <Divider section/>
    <Grid columns={3} divided>
      <Grid.Row>
        <Grid.Column>
          <br/>
          <Button className='button' inverted color='white' size='huge' content='Android' icon='' labelPosition='left'/>
          <Button className='button' inverted color='white' size='huge' content='IOS' icon='' labelPosition='center'/>
          <Button className='button' inverted color='white' size='huge' content='Web browser' icon='' labelPosition='right'/>

          <div className='space'></div>
          <ul>
            <li>
              <h1 className='topic'>FRONTEND</h1>
            </li>
            <li>
              <h4><Icon size='large' name='camera'/>
                camera build-in using node</h4>
            </li>
            <li>
              <h4><Icon size='large' name='code'/>Build with React Js</h4>
            </li>
            <li>
              <h4><Icon size='large' name='grid layout'/>semantic-ui-react CSS framework librairy</h4>
            </li>
          </ul>
        </Grid.Column>
        <Grid.Column>
          {/* <p className='tripod'>TRIPOD</p> */}
          <img className='phone' src='https://image.freepik.com/free-vector/laptop-and-mobile-phone-design_1156-100.jpg' alt='phone'/>

        </Grid.Column>
        <Grid.Column>
          <div className='space2'></div>
          <ul>
            <li>
              <h1 className='topic'>BACKEND</h1>
            </li>
            <li>
              <h4><Icon size='large' name='image'/>Images store in the cloud using Api Cloudinary</h4>
            </li>
            <li>
              <h4><Icon size='large' name='eye'/>
                Visual Recognition search</h4>
            </li>
            <li>
              <h4><Icon size='large' name='code'/>Mongoose Database</h4>
            </li>
            <li>
              <h4><Icon size='large' name='user circle outline'/>Authentication with Passport</h4>
            </li>
          </ul>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Image src='/assets/images/wireframe/media-paragraph.png'/>
        </Grid.Column>
        <Grid.Column>
          <Image src='/assets/images/wireframe/media-paragraph.png'/>
        </Grid.Column>
        <Grid.Column>
          <ul>
            <li>
              <h2 className='topic'>Other nice stuff</h2>
            </li>
            <li>
              <h4><Icon size='large' name='slack'/>|<Icon size='large' name='github'/>Integrating Slack with Github</h4>
            </li>
            <li>
              <h4><Icon size='large' name='image'/>Landing page image by Unsplash</h4>
            </li>
            <li>
              <h4><Icon size='large' name='trello'/>Trello project manager</h4>
            </li>
          </ul>
          <div className='space3'></div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Grid column={1}>
      <Grid.Column>
        <Footer/>
      </Grid.Column>
    </Grid>
  </div>
)

export default Feature
