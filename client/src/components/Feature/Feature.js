import React from 'react'
import {Grid, Image, Button, Header, Icon} from 'semantic-ui-react'
import './Feature.css'

const Feature = () => (
  <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
        <Button className='button' inverted color='white' size='huge' content='Android' icon='' labelPosition='left'/>
        <Button className='button' inverted color='white' size='huge' content='Iphone' icon='' labelPosition='right'/>
        <div className='space'></div>
        <ul>
          <li>
            <h1>FRONTEND</h1>
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
        <p className='tripod'>TRIPOD</p>
        <img className='phone' src='https://www.shareicon.net/data/512x512/2015/09/26/646900_phone_512x512.png' alt='phone'/>

      </Grid.Column>
      <Grid.Column>
        <div className='space2'></div>
        <ul>
          <li>
            <h1>BACKEND</h1>
          </li>
          <li>
            <h4><Icon size='large' name='image'/>Images store in the cloud using AWS</h4>
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
            <h2>It's nice to have</h2>
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
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default Feature
