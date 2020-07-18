import React, { Component } from "react";
import { Link } from "react-router-dom";
import pic from "./pic/Alienpic.jpg";

class Errorpage extends Component {
  render() {
    return (
      <div>
        <button>
          <Link
            to="/"
            style={{
              color: "purple",
              fontSize: "30px",
              padding: "2px",
              background: "#af9631",
            }}
          >
            Click To Go Home
          </Link>
        </button>
        <img
          src={pic}
          alt="notFound"
          width="1200px"
          height="700"
          style={{
            padding: "15px",
            marginTop: "10px",
            marginLeft: "60px",
            display: "flex",
          }}
        />
        <h2> 404 Error</h2>
      </div>
    );
  }
}

export default Errorpage;
