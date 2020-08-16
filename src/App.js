import React, { Component } from 'react';
import './App.css';
import Registration from './components/registration.js';
import Chat from './components/chat.js';
import Description from './components/describe.js';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';



class App extends Component {
  
  render() {
    return (
      <div className="App">
      
        <header className="App-header">
        <h1 className="heading">DEFENDER</h1>
        <Description/>
        <Registration/>
        <Chat/>
        {/* <Router>

    <div>
    
      <Switch>
        <Route exact={true} path="/" component={Description} />
        <Route exact={true} path="/register" component={Registration} />
        <Route exact={true} path="/chat" component={Chat} />
      </Switch>
      
    </div>
  </Router>
  */}
        </header>
       
      </div>
    );
  }
}

export default App;
