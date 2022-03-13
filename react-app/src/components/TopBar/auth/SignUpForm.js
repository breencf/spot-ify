import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../../store/session";
import "./Splash.css";
import { FaSpotify } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [name, setName] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    const err = [];
    if (password !== repeatPassword) {
      err.push("Passwords Must Match");
      setErrors(err);
    }
    if (password === repeatPassword) {
      let splitName = name.split(" ");
      const data = await dispatch(
        signUp({
          username,
          email,
          password,
          firstName: splitName[0],
          lastName: splitName[1],
        })
      );
      if (data) {
        setErrors(data);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="splash">
      <h1>
        <FaSpotify /> Spot-ify
      </h1>
      <div>
        <form onSubmit={onSignUp}>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>
                <h4>{error}</h4>
              </div>
            ))}
          </div>
          <div className="formdiv">
            <input
              type="text"
              name="username"
              onChange={updateUsername}
              value={username}
              placeholder={"Username"}
            ></input>
          </div>
          <div className="formdiv">
            <input
              type="text"
              name="email"
              onChange={updateEmail}
              value={email}
              placeholder={"Email"}
            ></input>
          </div>
          <div className="formdiv">
            <input
              type="text"
              name="firstName"
              onChange={updateName}
              value={name}
              placeholder={"Name(optional)"}
            ></input>
          </div>
          <div className="formdiv">
            <input
              type="password"
              name="password"
              onChange={updatePassword}
              value={password}
              placeholder={"Password"}
            ></input>
          </div>
          <div className="formdiv">
            <input
              type="password"
              name="repeat_password"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
              placeholder={"Confirm Password"}
            ></input>
          </div>
          <div className="formdiv">
            <button className="button-white" type="submit">
              Sign Up
            </button>
          </div>
        </form>
        <div className="formdiv">
          <Link to="/login">
            <h4> Login here</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
