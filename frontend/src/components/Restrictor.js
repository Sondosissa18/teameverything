import React from "react";
import { useObserver } from "mobx-react";
import { useStore } from "../store/useStore";

const Restrictor = ({ children, role }) => {
  if (!role && !auth) {
    throw new Error("Allow if is require when using a restrictor");
  }
  const store = useStore();
  return useObserver(() => {
    return store.isAtLeast(role) && children;
  });
};

export default Restrictor;
