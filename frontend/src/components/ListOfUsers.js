import React, { useEffect } from "react";
import { useStore } from "../store/useStore";
import { useObserver } from "mobx-react";
import { Card } from "react-bootstrap";
import "./ListOfUsers.css";

export const ListOfUsers = () => {
  const store = useStore();

  useEffect(() => {
    store.fetchUserList();
  }, []);

  return useObserver(() => {
    return store.userList.map((user) => {
      console.log(user);
      return (
        <div className='listOfUsers' >
          
        <Card className = 'newCard' key={user._id} style={{ width: 18 + "rem"}}>
          <img
            className="card-img-top rounded zoom img-fluid"
            alt={"User"}
            src={`${process.env.REACT_APP_API_URL}${user.picLocation}`}
            style={{
              width: 150 + "px",
              minHeight: 20 + "px",
              margin: 0 + "auto",
            }}
            onError={(e) => {
              e.target.onError = null;
              e.target.src =
                "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png";
            }}
          />
          <Card.Title className="title" style={{ marginLeft: "5px" }}>
            <h6>{user.displayName}</h6>
            <h6> School: {user.school}</h6>
            <h6> Location: {user.location}</h6>
          </Card.Title>
        </Card>
        </div>
      );
    });
  });
};

export default ListOfUsers;
