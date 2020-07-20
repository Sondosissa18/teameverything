import React, { useEffect, useState, useRef } from "react";
import { useObserver } from "mobx-react";
import { Button, Card } from "react-bootstrap";
import Select from "react-select";
import { useStore } from "../../store/useStore";
import onlinechat from "../../images/onlinechat.JPG";

const filterColors = (inputValue) => {
  return colourOptions.filter((i) =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const UserSelect = () => {
  const store = useStore();
  const [inputVal, setInputVal] = useState("");
  const selectRef = useRef(null);
  useEffect(() => {
    store.fetchUserList();
  }, []);
  const handleInputChange = (val) => {
    const inputValue = val.replace(/\W/g, "");
    return inputValue;
  };
  return useObserver(() => (
    <>
      <Card>
        <img
          width={415}
          height={200}
          className="mr-3"
          src={onlinechat}
          alt="Generic placeholder"
        />

        <Card.Header>
          Choose a User from the Dropdown, then Click Start Thread
        </Card.Header>
        <Card.Body>
          <Select
            ref={selectRef}
            onInputChange={handleInputChange}
            options={store.userListLabels}
          />
          <br />
          <Button
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick={() => store.chatStore.startThread(selectRef.current)}
          >
            Start Thread
          </Button>
        </Card.Body>
      </Card>
    </>
  ));
};

export default UserSelect;
