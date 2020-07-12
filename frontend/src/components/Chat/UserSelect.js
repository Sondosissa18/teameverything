import React, { useEffect, useState, useRef } from "react";
import { useObserver } from "mobx-react";
import { Button } from "react-bootstrap";
import Select from "react-select";
import { useStore } from "../../store/useStore";
const filterColors = (inputValue: string) => {
  return colourOptions.filter((i) => i.label.toLowerCase().includes(inputValue.toLowerCase()));
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
      <Select ref={selectRef} onInputChange={handleInputChange} options={store.userList} />
      <Button onClick={() => store.chatStore.startThread(selectRef.current)} variant="primary" size="sm">
        Start Thread
      </Button>
    </>
  ));
};

export default UserSelect;
