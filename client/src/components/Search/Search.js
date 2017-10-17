import React, {Component} from 'react';
import {render} from 'react-dom';
import './Search.scss';
import {Link} from 'react-router';

import {
  Segment,
  Grid,
  Divider,
  Image,
  Responsive,
  Button,
  Container,
  Checkbox,
  Popup
} from 'semantic-ui-react';
import tripod from '../../asset/images/tripod-logo.png';
import API from '../../utils/API';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gallery: [],
      checkedImg: [],
      isChecked: false
    };

    this.searchImages = this.searchImages.bind(this);
  };

  componentDidMount() {
    // window.addEventListener('load', this.searchImages);
  }

  searchImages(event) {
    event.preventDefault();
    API.getPicDetails().then(res => this.setState({gallery: res.data})).catch(err => console.log(err));
  };

  toggleChange() {
    this.setState({
      isChecked: !this.state.isChecked
    });
  }

  onChangeDownload(data, name) {
    // if (this.state.e === true) {
    //   alert("checked");      // }
    // alert(e + this.props.selected);
    // this.state.checkedImg.push(checked);
    // console.log(this.state.checkedImg);
    // <Button size='big' floated='right' color='green' content='Download' onClick={this.download} />
    // console.log(data,name);
    // const fileName = name.substr(59);
    // console.log(fileName);
    // localStorage.setItem(data,fileName);
    // console.log(getItem(fineName));
  };

  render() {

    return (
      <div>
        <Responsive {...Responsive.onlyMobile} {...Responsive.onlyTablet} {...Responsive.onlyComputer} {...Responsive.onlyLargeScreen} {...Responsive.onlyWidescreen} as={Grid}/>

        <div className='searchDiv'>
          <div className='metaDiv'>
            <Link to='/activity'><img className='logo' src={tripod}/></Link>
            {/* <Divider section/> */}
            <div className='thirdDiv'>

              <div className='fourthDiv'>
                <div className='searchText'>
                  <h1>FIND YOUR PHOTO'S COLLECTION</h1>
                </div>

                {this.state.gallery.map(data => (
                  <Image key={data.pic_url} style={style.displayImage}>
                    <Popup trigger={< Image src = {
                      data.pic_url
                    }
                    style = {
                      style.imgLarge
                    } />} hoverable flowing size='tiny' position='top center' style={style.popStyle}>
                      <Container>
                        <Grid centered columns='one'>
                          <Grid.Row>
                            <Grid.Column centered width={7} centered>
                              <img src={data.pic_url}/>
                              <br/>
                              <Button.Group className='click'>
                                <Button centered icon='download' basic size='tiny' color='green' onClick={() => this.onChangeDownload(data, data.pic_url)}/> {/* <input type="checkbox" checked={this.state.isChecked} onChange={this.toggleChange} name={data.pic_public_id} key={data._id} value={data}/> */}
                                <Button centered icon='trash' basic size='tiny' color='red'/>
                              </Button.Group>
                            </Grid.Column>
                          </Grid.Row>
                        </Grid>
                      </Container>
                    </Popup>

                  </Image>
                ))}
                <Divider section/>
                <Container>
                  <Button.Group>
                    <Button size='big' color='green' onClick={this.searchImages} content='Search Photos'/>
                    {/* <Button fluid size='large' floated='right' color='green' content='Sort Date'/> */}

                  </Button.Group>
                </Container>
              </div>
            </div>
          </div>
          <div className='fifthDiv'></div>
        </div>

      </div>
    );
  }
};

const style = {
  displayImage: {
    height: 'auto',
    width: '20%',
    padding: '1%',
    border: '2px solid white',
    display: 'inline-grid',
    marginTop: '1%',
    marginRight: '1%',
    marginLeft: '1%',
    marginBottom: '1%'
  },
  img: {
    // border: '0.5px solid #ccc',
    // height: 'auto',
    // width: 'auto',
    // padding: '0',
    // display: 'inline-grid',
    // verticalAlign: 'middle',
    // objectFit: 'cover',
    // overflowWrap: 'normal'
  },
  popStyle: {},
  // imgLarge: {
  //   width:'100%',
  //   height:'auto',
  //   padding: '0',
  //   margin: '0'
  // },
  responsive: {
    // padding: '0 6px',
    // float: 'left',
    // width: '24%',
    // margin: '10px'
  },
  desc: {
    // padding: '15px',
    // textAlign: 'center'
  }

};
export default Search;
