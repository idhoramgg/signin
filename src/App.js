import React from 'react';
import './App.css';
import './components/reqres.css'
import SignInSide from './components/signin';
import SignUp from './components/signup';
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
              <Link to='/api'>Api</Link>
            </li>
          </ul>
        </nav>

        <Route path='/' exact component={SignInSide} />
        <Route path='/signup' component={SignUp} />
        <Route path='/api' component={SignInSide} />
      </div>
    </Router>

     
    </div>
  );
}

export default App;
