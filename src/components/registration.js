import React, { Component } from 'react';
import '../App.css';
import { Row, Col, Grid } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';
import {withRouter} from 'react-router';

class Registration extends Component {
  constructor(props){
    super(props);
    this.registerData = this.registerData.bind(this);
  }

  registerData(event){
    event.preventDefault();
    let firstNameVal = this.refs.fname.value;
    let lastNameVal = this.refs.lname.value;
    let mobileNumberVal = this.refs.mobileNumber.value;
    let addressVal = this.refs.address.value;
    let categoryVal = this.refs.category.value;
    let availabilityVal = this.refs.availability.value;
    let postcodeVal = this.refs.postcode.value

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName:firstNameVal, lastName: lastNameVal, address: addressVal,
            category: categoryVal, availability: availabilityVal, postcode: postcodeVal, mobileNumber:mobileNumberVal })
    };
    fetch('http://localhost:8080/saveVolunteerDetails', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.voluteerId }));
        if(this.postId!==null){
          alert("Successfully registered");
        }

  }

  render() {
    return (
      <div className="grandParentContaniner">
      <div className="parentContainer">
      <Grid>
      <form onSubmit={this.registerData}>
      <h2>Register as Volunteer</h2>
        <Row>
            <Col><label className="labelsize">
       First Name:
        <input className="inputStyle" type="text" ref="fname" />
      </label></Col>
            <Col xs={6}><label className="labelsize">
       Last Name:
        <input className="inputStyle" type="text" ref="lname" />
      </label></Col>
      
        </Row>
        <Row>
        <Col><label className="labelsize">
        Mobile Number:
        <input className="inputStyle" type="textarea" ref="mobileNumber"/>
          <br/>
      </label></Col>
            <Col><label className="labelsize">
        Address:
        <input className="inputStyle" type="textarea" ref="address"/>
          <br/>
      </label></Col>
      <Col><label className="labelsize">

        Postcode:
        <input className="inputStyle" type="text" ref="postcode"/>
          <br/>
      </label></Col>
        </Row>
        <Row>
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
      <Col xs={6}><label className="labelsize">
       Available for disaster help?
        <input type="checkbox" ref="availability" />
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


export default Registration;
