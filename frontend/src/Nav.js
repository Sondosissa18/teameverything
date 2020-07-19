import React, { Component } from "react";
import { NavLink, BrowserRouter } from "react-router-dom";
import { Switch } from "react-router";
import { Container } from "react-bootstrap";
import { useObserver } from "mobx-react";

import ConnectedRoute from "./components/ConnectedRoute";
import Home from "./components/Home";
import Blog from "./components/Blog";
import About from "./components/About";
import Message from "./components/Message";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Logout from "./components/Logout";
import RecView from "./components/RecView";
import CollegeSearch from "./components/CollegeSearch";
import Errorpage from "./components/Errorpage";
import Chat from "./components/Chat";
import Login from "./components/Login";
import { useStore } from "./store/useStore";
import "./Nav.css";
import logo from "./images/eslogo.png";

const Nav = () => {
  const store = useStore();

  return useObserver(() => {
    if (store.isLoading) {
      return null;
    }
    return (
      <BrowserRouter>
        <div>
          <img
            src={logo}
            alt="EverythingSports Logo"
            width="200"
            height="150"
          />
          <ul className="header">
            <li>
              <NavLink exact to="/">
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
              <NavLink to="/message">Messages</NavLink>
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
              <NavLink to="/collegesearch">College Search</NavLink>
            </li>
            <li>
              <NavLink to="/chat">Chat</NavLink>
            </li>
            <li>
              <Logout />
            </li>
          </ul>
          <Container style={{ margin: "0px", padding: "2px" }}>
            <Switch>
              <ConnectedRoute
                exact
                redirectIfAuthenticated
                path="/"
                component={Login}
              />
              <ConnectedRoute exact isProtected path="/home" component={Home} />
              <ConnectedRoute exact path="/blog" component={Blog} />
              <ConnectedRoute exact path="/contact" component={Contact} />
              <ConnectedRoute
                exact
                isProtected
                path="/profile"
                component={Profile}
              />
              <ConnectedRoute
                exact
                isProtected
                path="/message"
                component={Message}
              />
              <ConnectedRoute exact path="/about" component={About} />
              <ConnectedRoute
                exact
                isProtected
                path="/recview"
                component={RecView}
              />
              <ConnectedRoute
                exact
                isProtected
                path="/collegesearch"
                component={CollegeSearch}
              />
              <ConnectedRoute exact isProtected path="/chat" component={Chat} />
              <ConnectedRoute component={Errorpage} />
            </Switch>
          </Container>
        </div>
      </BrowserRouter>
    );
  });
};

export default Nav;
