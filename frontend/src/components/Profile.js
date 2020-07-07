//import React, { Component } from "react";
import UploadImg from "./UploadImg";
import React from "react";
import { useObserver } from "mobx-react";

// class Profile extends Component {
//   render() {
//     return (
//       <div>
//         <h2>Profile Page</h2>
//         <UploadImg />
//       </div>
//     );
//   }
// }

// export default Profile;

export default function Profile() {
  return useObserver(() => (
    <div>
      <h2>Profile Page</h2>
      <UploadImg />
    </div>
  ));
}
