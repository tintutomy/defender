import React, { Component } from 'react';
import '../App.css';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';
import {withRouter} from 'react-router';

class Description extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
    
      <div className="grandParentContaniner">
      Describe about the Application
    </div>
//     <Router>
//     <> <Link to="/register">Register as Volunteer</Link><br/>

// <Link to="/chat">Ask for help</Link></>
// </Router>
  );

  }
}


export default Description;
