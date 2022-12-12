import React, { useState, useEffect, useInsertionEffect } from "react";
import fire from "../../fire";
import "./Login.css";
import Login from "./Login";
import Hero from "./Hero";

export default function LoginHandler() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };
  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      clearInputs();

      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  // useEffect(() => {
  //   authListener();
  // }, []);

  return (
    <div className="App">
      {user ? (
        <Hero handleLogout={handleLogout} />
      ) : (
        <Login
          {...{
            email,
            password,
            setEmail,
            setPassword,
            handleLogin,
            handleSignup,
            hasAccount,
            setHasAccount,
            emailError,
            passwordError,
          }}
        />
      )}
    </div>
  );
}
