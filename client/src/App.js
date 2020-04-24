import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
//import { Router, Route, Link } from 'react-router';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <Link to="/">Home</Link>
            <Link to="/otherpage">Other Page</Link>
          </header>
          <div>
          <Switch>
            <Route exact path="/" component={Fib}></Route>
            <Route path="/otherpage" component={OtherPage}></Route>
          </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;
