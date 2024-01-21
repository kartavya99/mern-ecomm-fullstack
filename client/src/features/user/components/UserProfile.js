import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCount } from "../userSlice";

export default function userProfile() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <div></div>
    </div>
  );
}
