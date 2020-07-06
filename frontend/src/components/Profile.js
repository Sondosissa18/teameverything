import React, { Component } from "react";
import UploadImg from "./UploadImg";

class Profile extends Component {
  render() {
    return (
      <div>
        <h2>Profile Page</h2>
        <UploadImg />
      </div>
    );
  }
}

export default Profile;

// import React, { Component } from "react";
// import { toJS } from "mobx";
// import { useObserver, observer } from "mobx-react";
// import { useStore } from "../store/useStore";

// class Profile extends Component {
//   render() {
//     return useObserver(() => (
//       <div>
//         <h2>Profile Page</h2>
//       </div>
//     ));
//   }
// }

// export default Profile;
