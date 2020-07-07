import React from "react";
import mongoose from "mongoose";
import { useStore } from "../store/useStore";
import { useObserver, useLocalStore } from "mobx-react";
//import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

export default function UploadImg() {
  const store = useStore();
  const state = useLocalStore(() => {
    return {
      selectedFile: null,
      updateSelectedFile(file) {
        state.selectedFile = file;
      },
    };
  });
  const handleChange = (e) => {
    state.updateSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await store.uploadPic(state.selectedFile);
  };

  return useObserver(() => (
    //<Card onSubmit={this.handleSubmit} style={{ display: "flex", flexDirection: "row" }}>
    <div>
      <input
        onChange={handleChange}
        style={{ borderRadius: "0", paddingTop: "10px" }}
        squared="true"
        size="sm"
        type="file"
        id="picture"
        name="picture"
        accept="image/png, image/jpeg, image/gif"
      />
      <Button onClick={handleSubmit} squared="true" theme="primary" size="sm" type="submit" value="Upload Picture">
        Upload
      </Button>
    </div>
    //</Card>
  ));
}
