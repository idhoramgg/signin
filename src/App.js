import React from 'react';
import './App.css';
import SimpleTabs from './components/tabs'
import SignInSide from './components/signin';
import SignUp from './components/signup';
import Api from './components/api';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/signin'>Sign In</Link>
            </li>
            <li>
              <Link to='/signup'>Sign Up</Link>
            </li>
            <li>
              <Link to='/api'>Dashboard</Link>
            </li>
          </ul>
        </nav>

        <Route path='/signin' exact component={SignInSide} />
        <Route path='/signup' component={SignUp} />
        <Route path='/api' component={SimpleTabs} />
      </div>
    </Router>

     
    </div>
  );
}

export default App;
