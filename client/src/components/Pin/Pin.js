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

class Pin extends React.Component{
  constructor(props){
    super(props);
  this.state = {
    pin:"",
  },
  this.getPin = this.getPin.bind(this);

};
  getPin(event){
  this.setState({pin:event.target.value})
};

render() {

  return (

  <div>
    <Modal trigger={< Icon name = 'camera' size = 'massive' color = 'blue' className = 'search' />} closeIcon basic size='large'>
      <Modal.Content>
        <Icon name='cloud upload' size='massive'/>
        <br/>
        <h1>PIN required</h1>
        <Divider section/>
        { this.state.pin.length === parseInt(6) ? <h2>{this.state.pin}</h2> :
        <form required>
          <Input onChange={this.getPin} fluid required label={{
            icon: 'asterisk'
          }} labelPosition='left corner' placeholder='PIN 6 digits' name='pin' type='text' size='huge' />
          <br/>
        </form> }
        { this.state.pin.length === parseInt(6) ? <Capture pin={this.state.pin}/> : "" }
      </Modal.Content>
    </Modal>
  </div>
);
  }
}

export default Pin


{/* <Modal trigger={< Input type = "submit" value = "submit" />} closeIcon basic size='large'>
  <Modal.Content>

  </Modal.Content>
</Modal> */}
