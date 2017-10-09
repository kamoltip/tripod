import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import './Main.scss';
import Menu from './components/Menu/Menu';
// import folder from './asset/images/folder.png';

const Main = () => (

<div className='mainBox'>
  <Container>
        <Menu />
  <Grid>
    <Grid.Row columns={4} className='MainHead'>
    <Grid.Column className='gridParent'>
      <Image className='image1'
        src='http://www.stickpng.com/assets/images/584abe602912007028bd932f.png'
        alt='camera' />
    </Grid.Column>
    <Grid.Column>
      <Image className='image2'
        src='http://www.workingatmcmaster.ca/med/photo/large/gallery-icon-1-627.png'
        alt='storage' />
    </Grid.Column>
    <Grid.Column>
      <Image
         className='image3'
         src='https://maxcdn.icons8.com/Share/icon/Security//facial_recognition_scan1600.png'
         alt='faceScan' />
    </Grid.Column>
    <Grid.Column>
      <Image
        className='image4'
        src='https://www.shareicon.net/download/2015/10/17/657490_arrow_512x512.png'
        alt='logout' />
    </Grid.Column>
    </Grid.Row>
  </Grid>
</Container>
</div>
)

export default Main
