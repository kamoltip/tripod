import React, {Component} from 'react'
import Capture from '../Capture/Capture'
import {
  Button,
  Icon,
  Divider,
  Responsive,
  Input,
  Modal,
  Form
} from 'semantic-ui-react'

// class Pin extends React.Component{
//   Constructor(props){
//     super(props);
//
//   };
//
// render(){
// return(

// const pin = this.state;
// const isEnabled =
// pin.length != 6;

const Pin = () => (

  <div>
    <Modal trigger={< Icon name = 'camera' size = 'massive' color = 'black' className = 'search' />} closeIcon basic size='large'>
      <Modal.Content>
        <Icon name='cloud upload' size='massive'/>
        <br/>
        <h1>PIN required</h1>
        <Divider section/>

        <form required>
          <Input fluid required label={{
            icon: 'asterisk'
          }} labelPosition='left corner' placeholder='PIN 6 digits' name='pin' type='text' size='huge' />
          <br/>
          <Modal trigger={< Input type = "submit" value = "submit" />} closeIcon basic size='large'>
            <Modal.Content>
              <Capture/>
            </Modal.Content>
          </Modal>
        </form>
      </Modal.Content>
    </Modal>
  </div>
)
//     );
//   }
// }

export default Pin
