import React, { Component } from "react";
import Home from "./components/Home";
import Blog from "./components/Blog";
import About from "./components/About";
import Message from "./components/Message";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import { Route, NavLink, BrowserRouter } from "react-router-dom";

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
              <NavLink to="/Logout">Logout</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route path="/" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
            <Route path="/profile" component={Profile} />
            <Route path="/messages" component={Message} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Nav;
