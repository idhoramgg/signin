import React from 'react';
import './App.css';
import SignInSide from './components/signin';
import SignUp from './components/signup';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Reqres } from './components/reqres';

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
              <Link to='/api'>API</Link>
            </li>
          </ul>
        </nav>

        <Route path='/signin' exact component={SignInSide} />
        <Route path='/signup' component={SignUp} />
        <Route path='/api' component={Reqres} />
      </div>
    </Router>

     
    </div>
  );
}

export default App;
