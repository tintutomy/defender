import React, { Component } from 'react';
import '../App.css';
import { Row, Col, Grid } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';
import {withRouter} from 'react-router';

class Chat extends Component {
  constructor(props){
    super(props);
    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage(event){
    event.preventDefault();
    let messageVal = this.refs.message.value;
    let categoryVal = this.refs.category.value;
    let postcodeVal = this.refs.postcode.value

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: messageVal, category: categoryVal, postcode:postcodeVal })
    };
    fetch('http://localhost:8080/broadcastMessage', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ messageSent: data }));
        if(this.messageSent){
          alert("Message successfully sent");
        }

  }

  render() {
    return (
      <div className="grandParentContaniner">
      <div className="parentContainer">
      <Grid>
      <form onSubmit={this.sendMessage}>
      <h2>Ask for help</h2>
        
        <Row>
            <Col><label className="labelsize">
        Message:
        <input className="inputStyle" type="textarea" ref="message"/>
          <br/>
      </label></Col>
        </Row>
        <Row>
        <Col><label className="labelsize">

Postcode:
<input className="inputStyle" type="text" ref="postcode"/>
  <br/>
</label></Col>
        <Col><label className="labelsize">
        Category:
        <select className="inputStyle" ref="category">
        <option value="">Select</option>
          <option value="FF">Fire Fighter</option>
          <option value="ACH">Aged care helper</option>
          <option value="FL">Flood rescue</option>
          <option value="OTH">Other</option>
        </select>
      </label></Col>
        </Row>
        <Row>
            <Col><input className="buttonStyle" type="submit" value="Submit"/></Col>
        </Row>
        </form>
      </Grid>
 
      {/* <Router><Link to="/">Back</Link></Router> */}
    </div>
    </div>
  );

  }
}


export default Chat;
