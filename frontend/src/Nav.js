import React, { Component } from "react";
import { NavLink, BrowserRouter } from "react-router-dom";
import {Switch} from "react-router";
import ConnectedRoute from "./components/ConnectedRoute";
import Home from "./components/Home";
import Blog from "./components/Blog";
import About from "./components/About";
import Message from "./components/Message";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
<<<<<<< HEAD
import Logout from './components/Logout';
import RecView from './components/RecView';
import CollegeSearch from './components/CollegeSearch';
import Errorpage from './components/Errorpage';
=======
import Logout from "./components/Logout";
>>>>>>> bbfc55c357fb1eab4d97a388414059896acffe7c

class Nav extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Everything Sports</h1>
          <ul className="header">
            <li>
              <NavLink exact to="/">
                Login
              </NavLink>{" "}
            </li>
            <li>
              <NavLink exact to="/Home">
                Home
              </NavLink>{" "}
            </li>
            <li>
              <NavLink exact to="/Profile">
                Profile
              </NavLink>{" "}
            </li>
            <li>
              <NavLink to="/Messages">Messages</NavLink>
            </li>
            <li>
              <NavLink to="/RecView">Recruiter View</NavLink>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to="/Blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/Collegesearch">College Search</NavLink>
            </li>
            <li>
              <Logout />
            </li>
          </ul>
          
          <div className="content">
            <Switch>
            <ConnectedRoute exact redirectIfAuthenticated path="/" component={Home} />
            <ConnectedRoute exact path="/blog" component={Blog} />
            <ConnectedRoute exact path="/contact" component={Contact} />
            <ConnectedRoute exact isProtected path="/profile" component={Profile} />
            <ConnectedRoute exact isProtected path="/messages" component={Message} />
            <ConnectedRoute exact path="/about" component={About} />
            <ConnectedRoute exact path="/recview" component={RecView} />
            <ConnectedRoute exact path="/collegesearch" component={CollegeSearch} />
            <ConnectedRoute component={Errorpage} />
            </Switch>
          </div>
          
        </div>
      </BrowserRouter>
    );
  }
}

export default Nav;
