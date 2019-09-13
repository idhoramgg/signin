import React , {Fragment} from "react";
import "./App.css";
import SignInSide from "./components/signin";
import SignUp from "./components/signup";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { Reqres } from "./components/reqres";

function App(props) {
  function logOut(){

    localStorage.removeItem('login');
    // props.history.push('/signin')
    console.log(props);
    // window.location.reload();
    
  }
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              {console.log(localStorage.getItem("login"))}
              {localStorage.getItem("login") !== null ? (
                <Fragment>
                  <li>
                    <Link to="/api">Api</Link>
                  </li>
                  <li onClick = {logOut} >Logout</li>
                </Fragment>
              ) : (
                <li>
                  <Link to="/signin">Sign In</Link>
                </li>
              )}
            </ul>
          </nav>

          <Route path="/signin" exact component={SignInSide} />
          <Route path="/signup" component={SignUp} />
          <Route path="/api" component={Reqres} />
          {/* <Route path="/logout" component ={()=> <Redirect to ="/signin" />} */}

        </div>
        </Router>
    </div>
  );
}

export default App;
