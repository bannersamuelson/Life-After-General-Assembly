import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../services/apiConfig"; 
/* import Layout from "../layout/Layout"; */
import classes from "./SignUp.module.css";

export default function SignUp() {
  const [newUser, setNewUser] = useState({
    userName: "",
    avatar: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [validationMessage, setValidationMessage] = useState("");
  const [valid, setValid] = useState(false);
  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUser(newUser);
    console.log(newUser);
    navigation("/login");
  };

  const handleInput = (e) => {
    const { id, value } = e.target;
    setNewUser((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  useEffect(() => {
    console.log("validator");
    checkIfValid();
  }, [newUser.password, newUser.confirmPassword]);

  const checkIfValid = () => {
    if (newUser.password === "" || newUser.confirmPassword === "") {
      setValidationMessage("");
      setValid(false);
    } else if (newUser.password.length < 9) {
      setValidationMessage("Short password! Must be at least 8 characters");
    } else if (newUser.password !== newUser.confirmPassword) {
      setValidationMessage("Passwords must much!");
      setValid(false);
    } else {
      setValidationMessage("Password match!");
      setValid(true);
    }
  };

  return (
    <Layout>
      <div className={classes.container}>
        <form className={classes.signupForm} onSubmit={handleSubmit}>
          <h2 className={classes.title}>Sign up</h2>
          <h3 className={classes.message}>{validationMessage}</h3>
          <label className={classes.label}>User name</label>
          <br />
          <input
            className={classes.signupInput}
            type="text"
            placeholder="create user name"
            id="userName"
            value={newUser.userName}
            onChange={handleInput}
          />
          <br />
          <label className={classes.label}>Upload avatar</label>
          <br />
          <input
            className={classes.signupInput}
            type="text"
            placeholder="avatar link"
            id="avatar"
            value={newUser.avatar}
            onChange={handleInput}
          />
          <br />
          <label className={classes.label}>First Name</label>
          <br />
          <input
            className={classes.signupInput}
            type="text"
            placeholder="first name"
            id="firstName"
            value={newUser.firstName}
            onChange={handleInput}
          />
          <br />
          <label className={classes.label}>Last Name</label>
          <br />
          <input
            className={classes.signupInput}
            type="text"
            placeholder="last name"
            id="lastName"
            value={newUser.lastName}
            onChange={handleInput}
          />
          <br />
          <label className={classes.label}>Email</label>
          <br />
          <input
            className={classes.signupInput}
            type="text"
            placeholder="email"
            id="email"
            value={newUser.email}
            onChange={handleInput}
          />
          <br />
          <label className={classes.label}>Password</label>
          <br />
          <input
            className={classes.signupInput}
            type="text"
            placeholder="create password"
            id="password"
            value={newUser.password}
            onChange={handleInput}
          />
          <br />
          <label className={classes.label}>Confirm password</label>
          <br />
          <input
            className={classes.signupInput}
            type="text"
            placeholder="confirm password"
            id="confirmPassword"
            value={newUser.confirmPassword}
            onChange={handleInput}
          />
          <br />
          <br />
          <button className={classes.submit} disabled={!valid}>
            SIGH UP
          </button>
        </form>
      </div>
    </Layout>
  );
}