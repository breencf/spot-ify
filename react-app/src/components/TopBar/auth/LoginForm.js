import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { login } from "../../../store/session";
import { FaSpotify } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory()

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const demo = async (e) => {
    e.preventDefault();
    await dispatch(login("demo@aa.io", "password"));
    return history.push("/home")
  };
  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
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
        <form onSubmit={onLogin}>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}><h4>{error}</h4></div>
            ))}
          </div>
          <div className="formdiv">
            <input
              name="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div className="formdiv">
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={updatePassword}
            />
            <div className="formdiv">
              <button className="button-white" type="submit">
                Login
              </button>
              <button className="button-white" type="submit" onClick={demo}>
                Demo
              </button>
              <Link to="/signup">
                <h4>Sign up here</h4>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
