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
      In a crisis, one of the hardest things to manage is coordination of the impacted civilian and volunteers. Making sure there is reliable and safe communication between parties is critical, and not always possible in natural disasters like bushfires, flood and storm when normal communication modes aren’t possible.
  Our Defenders app is here to bridge this gap and connect volunteers to people or situation where help is needed. Studies show texts to mobile or calls to mobile are much more likely to be attend and acted upon than email/social media notifications.  
  Our Solution:  
  Defenders app comes with below features.  
  <ul><li>   Civilians and Volunteers to registers to this portal to get notifications based on their preferences  </li>
  <li>    Portal reads feeds from government site/social media (https://www.rfs.nsw.gov.au/news-and-media/stay-up-to-date/feeds)  </li>
  <li>    Triggers SMS notification to the people / local volunteers registered along with local emergencies teams near to the incident place (upto 100 Kms)  </li>
  <li>    Studies shows timely notification can potentially reduce mortality rate by 20% to 30%  </li>
</ul>  Currently Defenders app completed development with registration process and notification functionality. Reading feeds from government sites/social media channels is in progress.  
    </div>
//     <Router>
//     <> <Link to="/register">Register as Volunteer</Link><br/>

// <Link to="/chat">Ask for help</Link></>
// </Router>
  );

  }
}


export default Description;
