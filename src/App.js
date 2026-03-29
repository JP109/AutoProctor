import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './screens/home/Home';
import Test from './screens/test/Test';
import Terminated from './screens/terminated/Terminated';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <div className="App">
        <div className="app_content">
          <Switch>
            <Route exact path="/test/:formId?" component={Test} />
            <Route exact path="/terminated" component={Terminated} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
