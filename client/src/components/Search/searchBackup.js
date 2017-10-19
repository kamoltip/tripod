// import React , { Component } from 'react';
// import { render } from 'react-dom';
// import './Search.scss';
// import {Link} from 'react-router';
// import {Segment, Grid, Divider, Responsive, Button, Container, Checkbox, Popup} from 'semantic-ui-react';
// import tripod from '../../asset/images/tripod-logo.png';
// import API from '../../utils/API';
// import { Image, CloudinaryContext, Transformation } from 'cloudinary-react';
//
// class Search extends Component {
//
//   constructor(props) {
//     super(props);
//     this.state = {
//       gallery: [],
//       largeImg:"",
//     };
//
//     this.searchImages = this.searchImages.bind(this);
//   };
//
//   componentDidMount() {
//     // window.addEventListener('load', this.searchImages); // h
//   }
//
//   searchImages(event) {
//     event.preventDefault();
//       API.getPicDetails()
//       .then(res => this.setState({ gallery: res.data}))
//       .catch(err => console.log(err));
//   };
//
//   deleteImage(id, pId) {
//     confirm(" Delete this image ? ");
//     if (confirm("Press a button!") == true) {
//       // // Delete from Cloudinary
//       // API.deleteCloudinary()
//       //   .then(res => console.log("Deleted from Cloudinary"))
//       //   .catch(err => console.log(err));
//       // // Delete form Mongo
//       API.deletePicDetails(id)
//         .then(res => searchImages())//console.log("Image Deleted"))
//         .catch(err => console.log(err));
//     };
//   };
//
//   saveImageChanges(id,newUrl){
//     API.editPicDetails(id , newUrl)
//       .then(res => searchImages())
//       .catch(err => console.log(err));
//     };
//
//   rotateImage(id, url,pId) {
//     let angle = prompt("Enter your rotation degrees ex: 90, 45, -45, -90, 180, 360");
//     const change = "a_" + angle;
//     const newUrl = url.substr(0,47) + change + "/" + pId;
//     this.saveImageChanges(id,newUrl);
//   };
//
//   enlargeImage(data){
//     alert(data.pic_url);
//     largeImg: {data.pic_url};
//   }
//
//   render() {
//
//     return (
//       <div>
//         <Responsive {...Responsive.onlyMobile} {...Responsive.onlyTablet} {...Responsive.onlyComputer} {...Responsive.onlyLargeScreen} {...Responsive.onlyWidescreen} as={Grid}/>
//
//         <div className='searchDiv'>
//           <div className='metaDiv'>
//             <Link to='/activity'><img className='logo' src={tripod}/></Link>
//             {/* <Divider section/> */}
//             <div className='thirdDiv'>
//               <div className='fourthDiv'>
//                 <div className='searchText'><h1>FIND YOUR PHOTO'S COLLECTION</h1></div>
//                   <CloudinaryContext cloudName="tripod">
//                     {this.state.gallery.map(data => (
//                       <div className="responsive" key={data._id} style={style.responsive}>
//                         <div className="img" style={style.img} >
//
//
//                     <Image publicId={data.pic_public_id} onClick={() => this.enlargeImage(data)}>
//                       <Transformation angle="auto"/>
//                       <Transformation width="100" crop="scale" />
//                         <Popup hoverable flowing size='tiny' position='top center' style={style.popStyle}
//                             trigger={
//                           <Image src = {data.pic_url} style = {style.imgLarge} />
//                            }
//                         >
//                           <Container>
//                             <Grid centered columns='one'>
//                               <Grid.Row>
//                                 <Grid.Column centered width={7} centered>
//                                   <img src={data.pic_url}/>
//                                   <br/>
//                                   <Button.Group className='click'>
//                                     <Button href={data.pic_url} download={data.pic_url} centered icon='download' basic size='tiny' color='green' />
//                                     <Button centered icon='trash' basic size='tiny' color='red' onClick={() => this.deleteImage(data._id , data.pic_public_id)} />
//                                     <Button centered icon='Refresh's basic size='undo' color='blue' onClick={() => this.rotateImage(data._id, data.pic_url, data.pic_public_id)} />
//                                   </Button.Group>
//                                 </Grid.Column>
//                               </Grid.Row>
//                             </Grid>
//                           </Container>
//                         </Popup>
//                     </Image>
//
//
//
//
//
//                         </div>
//                       </div>
//                     ))}
//                   </CloudinaryContext>
//                     <Divider section/>
//                   <Container>
//                   <Button.Group>
//                   <Button size='big' floated='left' color='red' onClick={this.searchImages} content='Search Photos' />
//
//                 </Button.Group>
//                 </Container>
//               </div>
//             </div>
//           </div>
//           <div className='fifthDiv'>
//           </div>
//         </div>
//       </div>
//     );
//   }
// };
// const style = {
//   displayImage: {
//     height: 'auto',
//     width: '20%',
//     padding: '1%',
//     border: '2px solid white',
//     display: 'inline-grid',
//     marginTop: '1%',
//     marginRight: '1%',
//     marginLeft: '1%',
//     marginBottom: '1%'
//   },
//   // displayImage: {
//   //   width: '20%',
//   //   height: 'auto',
//   //   padding:'2%',
//   //   border:'2px solid white',
//   //   display:'inline-grid',
//   //   marginTop:'1%',
//   //   marginRight:'1%',
//   //   marginLeft:'1%',
//   //   marginBottom:'1%',
//   // },
//   img:{
//     border: '1px solid #ccc'
//   },
//   responsive: {
//     padding:'0 6px',
//     float:'left',
//     width:'24%',
//     margin:'10px'
//   },
//   desc: {
//     padding: '15px',
//     textAlign:'center'
//   }
// };
// export default Search;

             /*Image key={data.pic_url} style={style.displayImage} */
               /*/Image */
