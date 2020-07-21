import React, { Component } from "react";
import { NavLink, BrowserRouter } from "react-router-dom";
import { Switch } from "react-router";
import { useObserver } from "mobx-react";
import ConnectedRoute from "./components/ConnectedRoute";
import Home from "./components/Home";
//import Blog from "./components/Blog";
import About from "./components/About";
//import Message from "./components/Message";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Logout from "./components/Logout";
import RecView from "./components/RecView";
import CollegeSearch from "./components/CollegeSearch";
import Errorpage from "./components/Errorpage";
import Chat from "./components/Chat";
import Login from "./components/Login";
import logo from "./images/eslogo.png";
import { useStore } from "./store/useStore";
import Restrictor from "./components/Restrictor";
import Container from "react-bootstrap/Container";
import Jumbo from "react-bootstrap/Jumbotron";
import { size } from "lodash";
import { Row, Col } from "react-bootstrap";

const Nav = () => {
  const store = useStore();
  return useObserver(() => {
    if (store.isLoading) {
      return null;
    }
    return (
      <BrowserRouter>
        <Jumbo
          className="jumbo"
          style={{
            padding: "0px",
            height: "125px",
            backgroundSize: "cover",
            backgroundColor: "white",
            marginRight: "0px",

            // marginLeft: "2px",
          }}
        >
          <Container
            className="inContainer"
            style={{
              marginLeft: "0px",
              marginRight: "0px",
              padding: "0px",
            }}
          >
            <img
              src={logo}
              alt="EverythingSports Logo"
              width="345"
              height="125"
            />
            <img
              width="340"
              height="125"
              src="https://previews.123rf.com/images/kunchit123/kunchit1231802/kunchit123180200081/96473981-basketball-red-blue-yellow-isolated-on-white-background-.jpg"
            />
            <img
              width="130"
              height="120"
              src="https://www.omegasports.com/prodimages/7398-DEFAULT-l.jpg"
            />
            <img
              width="80"
              height="110"
              src="https://images-na.ssl-images-amazon.com/images/I/81U84dNaCcL._AC_SL1500_.jpg"
            />
            <img
              width="123"
              height="125"
              src="https://www.ansaldideportes.cl/wp-content/uploads/2016/04/Balon_esponja_poliuretano_futbol_8_amarillo-azul_SOLAR_deportes.jpg"
            />
            <img
              width="122"
              height="120"
              src="https://4.imimg.com/data4/EI/YG/MY-20347603/volleyball-250x250.jpg"
            />
          </Container>
        </Jumbo>
        <div>
          <ul className="header">
            {!store.isLoggedIn && (
              <li>
                <NavLink exact to="/">
                  Login
                </NavLink>{" "}
              </li>
            )}
            <Restrictor role="other">
              <li>
                <NavLink exact to="/home">
                  Home
                </NavLink>{" "}
              </li>
            </Restrictor>
            <Restrictor role="other">
              <li>
                <NavLink exact to="/profile">
                  Edit Profile
                </NavLink>{" "}
              </li>
            </Restrictor>
            {/* <Restrictor role="other">
              <li>
                <NavLink to="/message">Messages</NavLink>
              </li>
            </Restrictor> */}
            <Restrictor role="recruiter">
              <li>
                <NavLink to="/recview">Recruiter View</NavLink>
              </li>
            </Restrictor>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            {/* <Restrictor role="other">
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
            </Restrictor> */}
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <Restrictor role="other">
              <li>
                <NavLink to="/collegesearch">College Search</NavLink>
              </li>
            </Restrictor>
            <Restrictor role="sturdent">
              <li>
                <NavLink to="/chat">Chat</NavLink>
              </li>
            </Restrictor>
            <li>
              <Logout />
            </li>
          </ul>
          <Container style={{ padding: "2px" }}>
            <Switch>
              <ConnectedRoute
                exact
                redirectIfAuthenticated
                path="/"
                component={Login}
              />
              <ConnectedRoute exact isProtected path="/home" component={Home} />

              <ConnectedRoute exact path="/contact" component={Contact} />
              <ConnectedRoute
                exact
                isProtected
                path="/profile"
                component={Profile}
              />
              {/* <ConnectedRoute
                exact
                isProtected
                path="/message"
                component={Message}
              /> */}
              <ConnectedRoute exact path="/about" component={About} />
              <ConnectedRoute
                exact
                allowIf={"recruiter"}
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
