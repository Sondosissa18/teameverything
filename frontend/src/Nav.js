import React, { Component } from "react";
import { NavLink, BrowserRouter } from "react-router-dom";
import ConnectedRoute from "./components/ConnectedRoute";
//import Login from "./components/Login";
import Blog from "./components/Blog";
import About from "./components/About";
import Message from "./components/Message";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Logout from './components/Logout';
import Home from './components/Home';

class Nav extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Everything Sports</h1>
          <ul className="header">
            <li>
              <NavLink exact to="/login">
                Login
              </NavLink>{" "}
            </li>
            <li>
              <NavLink exact to="/home">
                Home
              </NavLink>{" "}
            </li>
            <li>
              <NavLink exact to="/profile">
                Profile
              </NavLink>{" "}
            </li>
            <li>
              <NavLink to="/messages">Messages</NavLink>
            </li>
            <li>
              <NavLink to="/recview">Recruiter View</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <Logout />
            </li>
          </ul>
          <div className="content">
            <ConnectedRoute exact redirectIfAuthenticated path="/" component={Home} />
            <ConnectedRoute exact isProtected path="/home" component={Home} />
            <ConnectedRoute exact path="/blog" component={Blog} />
            <ConnectedRoute exact path="/contact" component={Contact} />
            <ConnectedRoute exact isProtected path="/profile" component={Profile} />
            <ConnectedRoute exact isProtected path="/messages" component={Message} />
            <ConnectedRoute exact path="/about" component={About} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Nav;
