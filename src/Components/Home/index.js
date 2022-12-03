import { Home } from "@mui/icons-material";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./home.css";
import UserRegister from "../Profile/UserRegister";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase-config";

function HomePage() {
  // const [modal, setOpenModal] = useState(true);
  // const [Login, setLogin] = useState(false);
  // const [loginEmail, setLoginEmail] = useState("");
  // const [loginPassword, setLoginPassword] = useState("");
  // const [user, setUser] = useState({});

  // const login = async () => {
  //   try {
  //     const user = await signInWithEmailAndPassword(
  //       auth,
  //       loginEmail,
  //       loginPassword
  //     );
  //     console.log(user);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });

  // const toggleModal = () => {
  //   setOpenModal(!modal);
  // };

  // const logout = async () => {
  //   await signOut(auth);
  // };
  return (
    <>
      <div>
        <h1> Welcome to ServiCity</h1>

        <Link to="/Tires">
          <button type="submit" className="btn btn-primary">
            {" "}
            Tire Maintenance
          </button>
        </Link>

        <Link to="/FluidFlush">
          <button type="submit" className="btn btn-primary">
            {" "}
            Fluid Flush
          </button>
        </Link>

        <Link to="/TireAlignment">
          <button type="submit" className="btn btn-primary">
            {" "}
            Alignment
          </button>
        </Link>

        <Link to="/Oiling">
          <button type="submit" className="btn btn-primary">
            {" "}
            Oil Change
          </button>
        </Link>

        <Link to="/BreakMaintenance">
          <button type="submit" className="btn btn-primary">
            {" "}
            Break Maintenance
          </button>
        </Link>

        <Link to="/DIY">
          <button type="submit" className="btn btn-primary">
            {" "}
            Do it Yourself
          </button>
        </Link>
        <Link to="/UserRegister">
          <button type="submit" className="btn btn-primary">
            {" "}
            User login
          </button>
        </Link>
      </div>

      {/* {modal === true && !Login ? (
        <div className="Usermodal">
          <div onClick={toggleModal} className="Useroverlay"></div>
          <div className="user-modal-content">
            <button className="user-close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      ) : null} */}
      {/* {modal === true && Login ? (
        <div className="Usermodal">
          <div onClick={toggleModal} className="Useroverlay"></div>
          <div className="user-modal-content">
            <h3> Login </h3>
            <input
              placeholder="Email..."
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
            />
            <input
              placeholder="Password..."
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
            />
            <button onClick={login}> Login</button>
            <h4> User Logged In: </h4>
            {user?.email}
            <button onClick={logout}> Sign Out </button>
            <button className="user-close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      ) : null}
      {modal === false ? (
        <div>
          <h1> Welcome to ServiCity</h1>

          <Link to="/Tires">
            <button type="submit" className="btn btn-primary">
              {" "}
              Tire Maintenance
            </button>
          </Link>

          <Link to="/FluidFlush">
            <button type="submit" className="btn btn-primary">
              {" "}
              Fluid Flush
            </button>
          </Link>

          <Link to="/TireAlignment">
            <button type="submit" className="btn btn-primary">
              {" "}
              Alignment
            </button>
          </Link>

          <Link to="/Oiling">
            <button type="submit" className="btn btn-primary">
              {" "}
              Oil Change
            </button>
          </Link>

          <Link to="/BreakMaintenance">
            <button type="submit" className="btn btn-primary">
              {" "}
              Break Maintenance
            </button>
          </Link>

          <Link to="/DIY">
            <button type="submit" className="btn btn-primary">
              {" "}
              Do it Yourself
            </button>
          </Link>
        </div>
      ) : null} */}
    </>
  );
}

export default HomePage;
