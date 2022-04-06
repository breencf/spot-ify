import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../../store/session";
import { clear } from "../../../store/songs";

const LogoutButton = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    dispatch(clear());
    await dispatch(logout());

    history.push("/");
  };

  return (
    <button className="button-none" onClick={onLogout}>
      <h4>Logout</h4>
    </button>
  );
};

export default LogoutButton;
