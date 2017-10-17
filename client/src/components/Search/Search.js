
import React , { Component } from 'react';
import { render } from 'react-dom';
import './Search.scss';
import {Link} from 'react-router';
import {Segment, Grid, Divider, Image, Responsive, Button, Container, Checkbox, Popup} from 'semantic-ui-react';
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
      API.getPicDetails()
      .then(res => this.setState({ gallery: res.data}))
      .catch(err => console.log(err));
  };

  toggleChange () {
    this.setState({ isChecked: !this.state.isChecked });
  }

  onChangeDownload(data,name){
      // if (this.state.e === true) {
      //   alert("checked");      // }
    // alert(e + this.props.selected);    
    // this.state.checkedImg.push(checked);
    // console.log(this.state.checkedImg);
     // <Button size='big' floated='right' color='green' content='Download' onClick={this.download} />
     console.log(data,name);
     const fileName = name.substr(59);
     console.log(fileName);
     localStorage.setItem(data,fileName);
     console.log(getItem(fineName));
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
                <div className='searchText'><h1>FIND YOUR PHOTO'S COLLECTION</h1></div>
                  {this.state.gallery.map(data => (
                    <Image key={data.pic_url} style={style.displayImage}>
                      <Popup
                        trigger={<Image src= {data.pic_url} style={style.imgLarge} />}
                        flowing
                        hoverable
                        style={style.popStyle}
                        >
                        <img src = {data.pic_url} style={style.img}/>        
                      </Popup>
                      <input type="checkbox" 
                        checked={this.state.isChecked}
                        onChange={this.toggleChange}
                        name={data.pic_public_id} 
                        key={data._id}
                        value={data}
                      /> 
                      <Button onClick={ () => this.onChangeDownload(data,data.pic_url)}>D</Button>
                    </Image>
                  ))}  
                    <Divider section/>
                  <Container>
                  <Button.Group>
                  <Button size='big' floated='left' color='red' onClick={this.searchImages} content='Search Photos' />
                 
       
                </Button.Group>
                </Container>
              </div>
            </div>
          </div>
          <div className='fifthDiv'>

          </div>
        </div>
      </div>
    );
  }
};

const style = {
  displayImage: {
    height: '20%',
    width: '20%',
    padding:'2%',
    border:'2px solid white',
    display:'inline-grid',
    marginTop:'1%',
    marginRight:'1%',
    marginLeft:'1%',
    marginBottom:'1%',
  },
  img:{
    border: '0.5px solid #ccc',
    height:'90%',
    width: 'auto%',
    padding:'0',
    margin:'1',
    display:'inline-grid'
  },
  popStyle:{
    width:'50vw',
    height:'auto',
    position:'absolute',
    float:'center'
  },
  imgLarge:{
    width:'50vw',
    height:'auto',
    float:'center',
    padding:'0',
    margin:'0'
  },
  responsive: {
    padding:'0 6px',
    float:'left',
    width:'24%',
    margin:'10px'
  },
  desc: {
    padding: '15px',
    textAlign:'center'
  }

};
export default Search;
